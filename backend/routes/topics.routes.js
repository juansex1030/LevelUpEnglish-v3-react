const express = require('express');
const router = express.Router();
const { query } = require('../db');
const { authenticateToken } = require('../middleware/auth');

router.get('/', async (req, res, next) => {
    try {
        // Exclude premium_practice from public list to prevent data scraping
        const result = await query('SELECT id, number, level, title, description, icon FROM topics WHERE practice_zone_enabled = TRUE ORDER BY level, number');
        res.json({ topics: result.rows });
    } catch (err) {
        next(err);
    }
});

router.get('/:level', async (req, res, next) => {
    const level = req.params.level.toUpperCase();
    try {
        const result = await query(
            'SELECT number, title, description, icon FROM topics WHERE level = $1 ORDER BY number',
            [level]
        );
        const topics = result.rows;
        if (topics.length === 0) return res.status(404).json({ error: 'Level not found or empty' });
        res.json({ topics });
    } catch (err) {
        next(err);
    }
});

// Secured route to fetch premium game data
router.get('/:level/:number/premium', authenticateToken, async (req, res, next) => {
    const { level, number } = req.params;
    try {
        // --- NEW SECURITY POLICY: Live DB check for premium status ---
        // We do NOT trust the token alone for sensitive premium data
        const userStatus = (await query('SELECT is_premium, is_admin FROM users WHERE id = $1', [req.user.id])).rows[0];
        
        if (!userStatus || (!userStatus.is_premium && !userStatus.is_admin)) {
            return res.status(403).json({ error: 'Premium subscription required' });
        }

        const topicNumber = parseInt(number);
        const result = await query('SELECT premium_practice FROM topics WHERE level = $1 AND number = $2', [level.toUpperCase(), topicNumber]);
        if (result.rows.length === 0) return res.status(404).json({ error: 'Topic not found' });
        res.json({ premium_practice: result.rows[0].premium_practice });
    } catch (err) {
        next(err);
    }
});

router.get('/:level/:number', async (req, res, next) => {
    const level = req.params.level.toUpperCase();
    const number = parseInt(req.params.number);
    try {
        const result = await query('SELECT * FROM topics WHERE level = $1 AND number = $2', [level, number]);
        const topic = result.rows[0];
        if (!topic) return res.status(404).json({ error: 'Topic not found' });
        res.json({ topic });
    } catch (err) {
        next(err);
    }
});

// Standard scripts per level
router.get('/:level/script', (req, res) => {
    res.json({ script: '// Standard practice scripts loaded' });
});

module.exports = router;
