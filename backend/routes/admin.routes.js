const express = require('express');
const router = express.Router();
const { query } = require('../db');
const { authenticateToken, isAdmin } = require('../middleware/auth');

// --- HELPERS ---

const logAdminAction = async (adminId, action, targetType, targetId = null, details = null) => {
    try {
        await query(
            'INSERT INTO audit_logs (admin_id, action, target_type, target_id, details) VALUES ($1, $2, $3, $4, $5)',
            [adminId, action, targetType, targetId, details ? JSON.stringify(details) : null]
        );
    } catch (err) {
        console.error("[Audit] Audit log failed:", err.message);
    }
};

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
        const users = (await query('SELECT id, username, email, is_admin, is_premium, avatar, created_at, last_login_at FROM users ORDER BY id')).rows;
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
        await logAdminAction(req.user.id, newRole ? 'GRANT_ADMIN' : 'REVOKE_ADMIN', 'user', id);
        
        res.json({ success: true, is_admin: newRole });
    } catch (err) {
        next(err);
    }
});

router.put('/users/:id/premium', async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = (await query('SELECT is_premium FROM users WHERE id = $1', [id])).rows[0];
        if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
        
        const newPremium = !user.is_premium;
        await query('UPDATE users SET is_premium = $1 WHERE id = $2', [newPremium, id]);
        await logAdminAction(req.user.id, newPremium ? 'GRANT_PREMIUM' : 'REVOKE_PREMIUM', 'user', id);
        
        res.json({ success: true, is_premium: newPremium });
    } catch (err) {
        next(err);
    }
});

router.delete('/users/:id', async (req, res, next) => {
    try {
        await query('DELETE FROM users WHERE id = $1', [req.params.id]);
        await logAdminAction(req.user.id, 'DELETE_USER', 'user', req.params.id);
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
        await logAdminAction(req.user.id, 'RESET_PROGRESS', 'user', req.params.id);
        res.json({ success: true, msg: 'Progress reset successfully' });
    } catch (err) {
        next(err);
    }
});

// --- TOPIC MGMT ---

router.get('/topics', async (req, res, next) => {
    try {
        const level = req.query.level;
        const topics = (await query('SELECT id, number, title, description, level, icon, arcade_enabled FROM topics WHERE level = $1 ORDER BY number', [level])).rows;
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
    const { number, level, title, description, icon, theory, practice, premium_practice, arcade_enabled } = req.body;
    try {
        const result = await query(
            'INSERT INTO topics (number, level, title, description, icon, theory, practice, premium_practice, arcade_enabled) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id',
            [number, level.toUpperCase(), title, description, icon, theory, practice, premium_practice, arcade_enabled !== undefined ? arcade_enabled : true]
        );
        const newId = result.rows[0].id;
        await logAdminAction(req.user.id, 'CREATE_TOPIC', 'topic', newId, { title, level });
        res.status(201).json({ id: newId });
    } catch (err) {
        next(err);
    }
});

router.put('/topics/:id', async (req, res, next) => {
    const { title, description, icon, theory, practice, premium_practice, arcade_enabled } = req.body;
    try {
        await query(
            'UPDATE topics SET title = $1, description = $2, icon = $3, theory = $4, practice = $5, premium_practice = $6, arcade_enabled = $7 WHERE id = $8',
            [title, description, icon, theory, practice, premium_practice, arcade_enabled, req.params.id]
        );
        await logAdminAction(req.user.id, 'UPDATE_TOPIC', 'topic', req.params.id, { title });
        res.json({ success: true });
    } catch (err) {
        next(err);
    }
});

router.delete('/topics/:id', async (req, res, next) => {
    try {
        await query('DELETE FROM topics WHERE id = $1', [req.params.id]);
        await logAdminAction(req.user.id, 'DELETE_TOPIC', 'topic', req.params.id);
        res.json({ success: true });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
