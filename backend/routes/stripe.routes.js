const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_not_set_in_env');
const { query } = require('../db');
const { authenticateToken } = require('../middleware/auth');

// --- STRIPE WEBHOOK (Needs raw body) ---
// This is handled in server.js usually because it needs express.raw() BEFORE express.json()
// But we can define the handler here and attach it carefully.

router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
    const payload = req.body;
    const sig = req.headers['stripe-signature'];
    
    let event;
    try {
        if (!process.env.STRIPE_WEBHOOK_SECRET) {
            event = JSON.parse(payload.toString());
        } else {
            event = stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_SECRET);
        }
    } catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        const userId = session.client_reference_id;
        if (userId) {
            await query('UPDATE users SET is_premium = true WHERE id = $1', [userId]);
            console.log(`[Stripe] User ${userId} is now Premium!`);
        }
    }

    res.json({received: true});
});

// --- CHECKOUT SESSION ---
router.post('/checkout', authenticateToken, async (req, res, next) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'LevelUp English Premium Arcade',
                        description: 'Acceso de por vida a los juegos interactivos premium.',
                    },
                    unit_amount: 999,
                },
                quantity: 1,
            }],
            mode: 'payment',
            client_reference_id: String(req.user.id),
            success_url: `${req.headers.origin || 'http://localhost:5174'}/arcade?success=true`,
            cancel_url: `${req.headers.origin || 'http://localhost:5174'}/arcade?canceled=true`,
        });

        res.json({ id: session.id, url: session.url });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
