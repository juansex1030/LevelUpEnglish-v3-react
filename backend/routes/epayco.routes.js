const express = require('express');
const router = express.Router();
const axios = require('axios');
const { query } = require('../db');
const { authenticateToken } = require('../middleware/auth');

// --- EPAYCO CONFIG ---
const PUBLIC_KEY = process.env.EPAYCO_PUBLIC_KEY;
const PRIVATE_KEY = process.env.EPAYCO_PRIVATE_KEY;
const IS_TEST = process.env.NODE_ENV !== 'production';

/**
 * Endpoint to create an ePayco Checkout Session
 */
router.post('/checkout-session', authenticateToken, async (req, res, next) => {
    try {
        if (!PUBLIC_KEY || !PRIVATE_KEY) {
            throw new Error('ePayco keys not configured in .env');
        }

        // 1. Login to Apify to get token
        const auth = Buffer.from(`${PUBLIC_KEY}:${PRIVATE_KEY}`).toString('base64');
        const loginRes = await axios.post('https://apify.epayco.co/login', {}, {
            headers: { 'Authorization': `Basic ${auth}` }
        });

        const token = loginRes.data.token;

        // 2. Create Session
        const sessionRes = await axios.post('https://apify.epayco.co/payment/v1/session/create', {
            doc_type: 'CC',
            doc_number: '123456789', // Placeholder as required by some endpoints
            name: req.user.username || 'User',
            last_name: 'LevelUp',
            email: req.user.email,
            invoice: `INV-${Date.now()}`,
            description: 'LevelUp English Arcade Premium (30 días)',
            currency: 'COP',
            amount: '9990',
            tax_base: '0',
            tax: '0',
            country: 'CO',
            external_reference: String(req.user.id),
            url_response: `${req.headers.origin}/arcade?success=true`,
            url_confirmation: `${process.env.BACKEND_URL || 'http://localhost:3000'}/api/v1/epayco/webhook`,
            method_confirmation: 'POST'
        }, {
            headers: { 'Authorization': `Bearer ${token}` }
        });

        if (sessionRes.data.status) {
            res.json({ session_id: sessionRes.data.data.session_id });
        } else {
            throw new Error(sessionRes.data.message || 'Error creating ePayco session');
        }
    } catch (error) {
        console.error('[ePayco] Session Error:', error.response?.data || error.message);
        next(error);
    }
});

/**
 * Webhook for ePayco confirmations (PNX)
 */
router.post('/webhook', async (req, res) => {
    try {
        const data = req.body;
        console.log('[ePayco Webhook] Received:', data);

        // ePayco sends x_cod_response or x_transaction_state
        // x_cod_response: 1 = Aceptada, 2 = Rechazada, 3 = Pendiente, 4 = Fallida
        const state = String(data.x_cod_response || data.x_transaction_state);
        const userId = data.x_extra1 || data.x_id_invoice?.split('-')[1]; // Adjust based on how you send it
        const externalRef = data.x_id_invoice;

        if (state === '1' || state === 'Aceptada') {
            const finalUserId = data.x_extra1; // We passed it in external_reference usually maps to x_extra1
            
            if (finalUserId) {
                // Grant 30 days of access
                await query(`
                    UPDATE users 
                    SET is_premium = true, 
                        premium_until = COALESCE(premium_until, CURRENT_TIMESTAMP) + interval '30 days'
                    WHERE id = $1
                `, [finalUserId]);
                
                console.log(`[ePayco] Payment successful for User ${finalUserId}. Access extended 30 days.`);
            }
        }

        res.status(200).send('OK');
    } catch (error) {
        console.error('[ePayco Webhook] Processing Error:', error.message);
        res.status(500).send('Error');
    }
});

module.exports = router;
