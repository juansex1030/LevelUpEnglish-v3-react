const express = require('express');
const router = express.Router();
const { query } = require('../db');
const { rateLimit } = require('express-rate-limit');

// Specific rate limit for support inquiries: 5 requests per hour per IP
const supportLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, 
    message: { msg: 'Too many messages from this IP. Please try again in an hour.' },
    standardHeaders: true,
    legacyHeaders: false,
});

// @route   POST /api/v1/support
// @desc    Send a support message
// @access  Public (or authenticated)
router.post('/', supportLimiter, async (req, res, next) => {
    try {
        const { name, email, subject, message, userId } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ msg: 'Please complete all required fields.' });
        }

        // --- NEW SECURITY POLICY: Max 2 unread messages ---
        // We check by userId if logged in, or by email for guest inquiries
        let existingUnread;
        if (userId) {
            existingUnread = await query(
                'SELECT COUNT(*) FROM support_messages WHERE user_id = $1 AND status = \'unread\'',
                [userId]
            );
        } else {
            existingUnread = await query(
                'SELECT COUNT(*) FROM support_messages WHERE email = $1 AND status = \'unread\'',
                [email]
            );
        }

        const unreadCount = parseInt(existingUnread.rows[0].count);
        if (unreadCount >= 2) {
            return res.status(429).json({ 
                msg: 'You have several pending inquiries. Please wait for our response before sending more messages.',
                policy: 'max_unread_reached'
            });
        }
        // --------------------------------------------------

        // Basic character cleaning to prevent simple HTML injection
        const cleanMessage = message.replace(/<[^>]*>?/gm, '');

        const result = await query(
            'INSERT INTO support_messages (user_id, name, email, subject, message) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [userId || null, name, email, subject, cleanMessage]
        );

        res.status(201).json({
            msg: 'Message sent successfully. We will get in touch soon.',
            message: result.rows[0]
        });
    } catch (err) {
        next(err);
    }
});

// @route   GET /api/v1/support/admin/messages
// @desc    Get all support messages (Admin only)
// @access  Protected (Admin middleware assumed)
router.get('/admin/messages', async (req, res, next) => {
    try {
        const result = await query('SELECT * FROM support_messages ORDER BY created_at DESC');
        res.json({ messages: result.rows });
    } catch (err) {
        next(err);
    }
});

// @route   PUT /api/v1/support/admin/messages/:id/read
// @desc    Mark a message as read
// @access  Protected (Admin middleware assumed)
router.put('/admin/messages/:id/read', async (req, res, next) => {
    try {
        const { id } = req.params;
        await query('UPDATE support_messages SET status = $1 WHERE id = $2', ['read', id]);
        res.json({ msg: 'Message marked as read.' });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
