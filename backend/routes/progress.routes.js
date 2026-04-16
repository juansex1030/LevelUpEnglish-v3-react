const express = require('express');
const router = express.Router();
const { query } = require('../db');
const { authenticateToken } = require('../middleware/auth');

// --- HELPERS (Can be shared in a common file if needed more, but kept here for now) ---

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

router.use(authenticateToken);

router.get('/', async (req, res, next) => {
    try {
        const summary = await buildProgressSummary(req.user.id);
        res.json(summary);
    } catch (err) {
        next(err);
    }
});

router.post('/mark-complete', async (req, res, next) => {
    const { level, topic_number } = req.body;
    if (!level || !topic_number) return res.status(400).json({ msg: 'Nivel y número de tema son requeridos' });

    try {
        const topicResult = await query('SELECT id FROM topics WHERE level = $1 AND number = $2', [level.toUpperCase(), parseInt(topic_number)]);
        const topic = topicResult.rows[0];
        if (!topic) return res.status(404).json({ msg: 'Topic not found' });

        await query(
            'INSERT INTO progress (user_id, topic_id) VALUES ($1, $2) ON CONFLICT (user_id, topic_id) DO NOTHING',
            [req.user.id, topic.id]
        );
        res.json({ success: true });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
