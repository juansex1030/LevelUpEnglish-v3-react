const { query } = require('../db');
const { sendExpirationEmail } = require('./mailer');

/**
 * Checks if the user's premium status has expired.
 * If expired, revokes premium status and sends an automated expiration email.
 * This runs lazily on key requests to ensure we do not need background chron tasks.
 */
const checkPremiumStatus = async (userId) => {
    try {
        if (!userId) return null;
        
        const result = await query('SELECT id, username, email, is_admin, is_premium, premium_until, trial_started_at, avatar, created_at, last_login_at FROM users WHERE id = $1', [userId]);
        const user = result.rows[0];
        
        if (user && user.is_premium && user.premium_until) {
            const now = new Date();
            const expires = new Date(user.premium_until);
            
            if (expires < now) {
                // Update premium status in database
                await query('UPDATE users SET is_premium = false WHERE id = $1', [userId]);
                console.log(`[Premium Expired] User #${userId} (${user.username}) premium period has expired. Access revoked.`);
                
                // Send expiration email asynchronously
                sendExpirationEmail(user.email, user.username).catch(err => {
                    console.error('[Mailer] Failed to send premium expiration email:', err.message);
                });
                
                return { ...user, is_premium: false };
            }
        }
        return user;
    } catch (err) {
        console.error('[checkPremiumStatus] Error checking premium status:', err.message);
        return null;
    }
};

module.exports = { checkPremiumStatus };
