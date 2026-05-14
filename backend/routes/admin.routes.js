const express = require('express');
const router = express.Router();
const { query, logAdminAction } = require('../db');
const { authenticateToken, isAdmin } = require('../middleware/auth');

// --- HELPERS ---

// --- HELPERS (Removed local logAdminAction, now using central import) ---

const buildProgressSummary = async (userId) => {
    const progressResult = await query(
        `
        SELECT t.level, t.number
        FROM progress p
        JOIN topics t ON p.topic_id = t.id
        WHERE p.user_id = $1
        `,
        [userId]
    );

    const totalTopicsResult = await query(
        'SELECT level, COUNT(*)::int AS count FROM topics GROUP BY level'
    );

    const stats = {};
    const completed_topics_by_level = {};

    totalTopicsResult.rows.forEach((topic) => {
        stats[topic.level] = { total: topic.count, completed: 0 };
        completed_topics_by_level[topic.level] = [];
    });

    progressResult.rows.forEach((item) => {
        if (stats[item.level]) {
            stats[item.level].completed += 1;
            completed_topics_by_level[item.level].push(item.number);
        }
    });

    const completed_topics_count = progressResult.rows.length;
    const total_all = totalTopicsResult.rows.reduce((acc, curr) => acc + curr.count, 0);
    const overall_percentage = total_all > 0 ? Math.round((completed_topics_count / total_all) * 100) : 0;

    const achievements = [];
    Object.keys(stats).forEach((level) => {
        if (stats[level].total > 0 && stats[level].completed === stats[level].total) {
            achievements.push(level);
        }
    });

    return {
        overall_percentage,
        completed_topics: completed_topics_count,
        total_topics: total_all,
        stats,
        completed_topics_by_level,
        achievements
    };
};

// --- ADMIN ROUTES ---

router.use(authenticateToken, isAdmin);

router.get('/stats', async (req, res, next) => {
    try {
        const totalUsers = (await query('SELECT COUNT(*)::int AS count FROM users')).rows[0].count;
        const totalProgress = (await query('SELECT COUNT(*)::int AS count FROM progress')).rows[0].count;
        const completedTopics = (await query('SELECT COUNT(DISTINCT topic_id)::int AS count FROM progress')).rows[0].count;

        // Optimized: Single query for counts by level
        const levelSubtotals = (await query(`
            SELECT t.level, COUNT(*)::int AS completados
            FROM progress p
            JOIN topics t ON p.topic_id = t.id
            GROUP BY t.level
        `)).rows;

        const levels = ['A1', 'A2', 'B1', 'B2', 'C1'];
        const chart_data = levels.map(lvl => {
            const match = levelSubtotals.find(s => s.level === lvl);
            return { name: lvl, completados: match ? match.completados : 0 };
        });

        res.json({
            total_users: totalUsers,
            total_progress_entries: totalProgress,
            completed_topics: completedTopics,
            chart_data
        });
    } catch (err) {
        next(err);
    }
});

router.get('/users', async (req, res, next) => {
    try {
        const users = (await query('SELECT id, username, email, is_admin, is_premium, premium_until, avatar, created_at, last_login_at FROM users ORDER BY id')).rows;
        res.json({ users });
    } catch (err) {
        next(err);
    }
});

router.put('/users/:id/role', async (req, res, next) => {
    const { id } = req.params;
    try {
        if (Number(id) === req.user.id) return res.status(400).json({ error: 'No puedes cambiar tu propio rol' });
        const user = (await query('SELECT is_admin FROM users WHERE id = $1', [id])).rows[0];
        if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
        
        const newRole = !user.is_admin;
        await query('UPDATE users SET is_admin = $1 WHERE id = $2', [newRole, id]);
        await logAdminAction(req, newRole ? 'GRANT_ADMIN' : 'REVOKE_ADMIN', 'user', id);
        
        res.json({ success: true, is_admin: newRole });
    } catch (err) {
        next(err);
    }
});

router.put('/users/:id/premium', async (req, res, next) => {
    const userId = Number(req.params.id);
    const { days } = req.body;
    const addDays = Number(days) || 30;

    console.log(`[Admin] Premium extend request: userId=${userId}, days=${addDays}, by admin=${req.user.id}`);

    try {
        const existing = (await query('SELECT id, is_premium, premium_until FROM users WHERE id = $1', [userId])).rows[0];
        if (!existing) return res.status(404).json({ error: 'Usuario no encontrado' });

        // Force integer casting for PostgreSQL interval multiplication to prevent type errors
        const result = await query(
            `UPDATE users
             SET is_premium = true,
                 premium_until = GREATEST(COALESCE(premium_until, CURRENT_TIMESTAMP), CURRENT_TIMESTAMP) + ($1 * INTERVAL '1 day')
             WHERE id = $2
             RETURNING is_premium, premium_until`,
            [addDays, userId]
        );

        const updated = result.rows[0];
        console.log(`[Admin] Premium extended. New premium_until: ${updated.premium_until}`);

        await logAdminAction(req, `MANUAL_EXTEND_${addDays}D`, 'user', userId, { days: addDays });
        res.json({ success: true, is_premium: updated.is_premium, premium_until: updated.premium_until });
    } catch (err) {
        console.error('[Admin] Premium extend ERROR details:', {
            userId,
            addDays,
            message: err.message,
            stack: err.stack
        });
        next(err);
    }
});

router.delete('/users/:id/premium', async (req, res, next) => {
    const userId = Number(req.params.id);
    console.log(`[Admin] Premium revoke request (DELETE): userId=${userId}, by admin=${req.user.id}`);
    try {
        const existing = (await query('SELECT id, is_premium FROM users WHERE id = $1', [userId])).rows[0];
        if (!existing) return res.status(404).json({ error: 'Usuario no encontrado' });

        await query('UPDATE users SET is_premium = false, premium_until = NULL WHERE id = $1', [userId]);
        await logAdminAction(req, 'ADMIN_REVOKE_PREMIUM', 'user', userId);

        console.log(`[Admin] Premium revoked for user #${userId}`);
        res.json({ success: true, is_premium: false, premium_until: null });
    } catch (err) {
        console.error('[Admin] Premium revoke error:', err.message);
        next(err);
    }
});

// Added PUT alternative for environments that block DELETE
router.put('/users/:id/revoke', async (req, res, next) => {
    const userId = Number(req.params.id);
    console.log(`[Admin] Premium revoke request (PUT): userId=${userId}, by admin=${req.user.id}`);
    try {
        await query('UPDATE users SET is_premium = false, premium_until = NULL WHERE id = $1', [userId]);
        await logAdminAction(req, 'ADMIN_REVOKE_PREMIUM', 'user', userId);
        res.json({ success: true, is_premium: false, premium_until: null });
    } catch (err) {
        console.error('[Admin] Revoke Error (PUT):', err.message);
        next(err);
    }
});

router.delete('/users/:id', async (req, res, next) => {
    try {
        await query('DELETE FROM users WHERE id = $1', [req.params.id]);
        await logAdminAction(req, 'DELETE_USER', 'user', req.params.id);
        res.json({ success: true });
    } catch (err) {
        next(err);
    }
});

router.get('/users/:id/progress', async (req, res, next) => {
    try {
        const summary = await buildProgressSummary(req.params.id);
        res.json(summary);
    } catch (err) {
        next(err);
    }
});

router.delete('/users/:id/progress', async (req, res, next) => {
    try {
        await query('DELETE FROM progress WHERE user_id = $1', [req.params.id]);
        await logAdminAction(req, 'RESET_PROGRESS', 'user', req.params.id);
        res.json({ success: true, msg: 'Progress reset successfully' });
    } catch (err) {
        next(err);
    }
});

// --- TOPIC MGMT ---

router.get('/topics', async (req, res, next) => {
    try {
        const level = req.query.level;
        const topics = (await query('SELECT id, number, title, description, level, icon, practice_zone_enabled FROM topics WHERE level = $1 ORDER BY number', [level])).rows;
        res.json({ topics });
    } catch (err) {
        next(err);
    }
});

router.get('/topics/:id', async (req, res, next) => {
    try {
        const topic = (await query('SELECT * FROM topics WHERE id = $1', [req.params.id])).rows[0] || null;
        res.json(topic);
    } catch (err) {
        next(err);
    }
});

router.post('/topics', async (req, res, next) => {
    const { number, level, title, description, icon, theory, practice, premium_practice, practice_zone_enabled } = req.body;
    try {
        const result = await query(
            'INSERT INTO topics (number, level, title, description, icon, theory, practice, premium_practice, practice_zone_enabled) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id',
            [number, level.toUpperCase(), title, description, icon, theory, practice, premium_practice, practice_zone_enabled !== undefined ? practice_zone_enabled : true]
        );
        const newId = result.rows[0].id;
        await logAdminAction(req, 'CREATE_TOPIC', 'topic', newId, { title, level });
        res.status(201).json({ id: newId });
    } catch (err) {
        next(err);
    }
});

router.put('/topics/:id', async (req, res, next) => {
    const { title, description, icon, theory, practice, premium_practice, practice_zone_enabled } = req.body;
    try {
        await query(
            `UPDATE topics SET 
                title = COALESCE($1, title), 
                description = COALESCE($2, description), 
                icon = COALESCE($3, icon), 
                theory = COALESCE($4, theory), 
                practice = COALESCE($5, practice), 
                premium_practice = COALESCE($6, premium_practice), 
                practice_zone_enabled = COALESCE($7, practice_zone_enabled) 
             WHERE id = $8`,
            [title, description, icon, theory, practice, premium_practice, practice_zone_enabled, req.params.id]
        );
        await logAdminAction(req, 'UPDATE_TOPIC', 'topic', req.params.id, { title: title || 'partial_update' });
        res.json({ success: true });
    } catch (err) {
        next(err);
    }
});

router.delete('/topics/:id', async (req, res, next) => {
    try {
        await query('DELETE FROM topics WHERE id = $1', [req.params.id]);
        await logAdminAction(req, 'DELETE_TOPIC', 'topic', req.params.id);
        res.json({ success: true });
    } catch (err) {
        next(err);
    }
});

router.get('/logs', async (req, res, next) => {
    try {
        const result = await query(`
            SELECT a.*, u.username as admin_name
            FROM audit_logs a
            LEFT JOIN users u ON a.admin_id = u.id
            ORDER BY a.created_at DESC
            LIMIT 100
        `);
        res.json({ logs: result.rows });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
