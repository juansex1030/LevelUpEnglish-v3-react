const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { sendWelcomeEmail, sendPasswordResetEmail } = require('../utils/mailer');
const { OAuth2Client } = require('google-auth-library');
const { query } = require('../db');
const { authenticateToken, generateToken } = require('../middleware/auth');

const googleClient = new OAuth2Client(process.env.VITE_GOOGLE_CLIENT_ID);


const isUniqueViolation = (error) => error && error.code === '23505';

const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Lax', // Changed from Strict to Lax for better compatibility
    maxAge: 90 * 24 * 60 * 60 * 1000 // 90 days
};

const setAuthCookie = (res, user, token) => {
    const isProd = process.env.NODE_ENV === 'production';
    const isAdmin = !!user.is_admin;

    const cookieOptions = {
        ...COOKIE_OPTIONS,
        // Upgrade to Strict for admin tokens in production for maximum CSRF protection
        sameSite: (isProd && isAdmin) ? 'Strict' : 'Lax',
        secure: isProd
    };

    const name = isAdmin ? 'admin_token' : 'token';
    res.cookie(name, token, cookieOptions);
};

// --- AUTH API ---

router.post('/register', async (req, res, next) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) return res.status(400).json({ msg: 'Todos los campos son obligatorios' });
    if (password.length < 6) return res.status(400).json({ msg: 'La contraseña debe tener al menos 6 caracteres' });
    if (!email.includes('@')) return res.status(400).json({ msg: 'Formato de correo inválido' });

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await query(
            'INSERT INTO users (username, email, password, is_admin, is_premium) VALUES ($1, $2, $3, false, false) RETURNING id, username, email, is_admin, is_premium, avatar, created_at',
            [username, email, hashedPassword]
        );

        const user = newUser.rows[0];
        const token = generateToken(user);
        
        setAuthCookie(res, user, token);
        
        res.status(201).json({ 
            user: { 
                id: user.id, username: user.username, email: user.email, 
                is_admin: user.is_admin, is_premium: user.is_premium, 
                premium_until: user.premium_until,
                avatar: user.avatar, created_at: user.created_at 
            } 
        });

        // Async welcome email (don't block the response)
        sendWelcomeEmail(user.email, user.username).catch(err => console.error('[Mailer] Welcome email failed:', err.message));
    } catch (error) {
        if (isUniqueViolation(error)) {
            return res.status(400).json({ msg: 'El nombre de usuario o correo ya está en uso' });
        }
        next(error);
    }
});

router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const result = await query('SELECT * FROM users WHERE email = $1', [email]);
        const user = result.rows[0];

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ msg: 'Invalid credentials' });
        }

        await query('UPDATE users SET last_login_at = CURRENT_TIMESTAMP, otp_attempts = 0 WHERE id = $1', [user.id]);

        const token = generateToken(user);
        setAuthCookie(res, user, token);

        res.json({ 
            user: { 
                id: user.id, username: user.username, email: user.email, 
                is_admin: user.is_admin, is_premium: user.is_premium, 
                avatar: user.avatar 
            } 
        });
    } catch (error) {
        next(error);
    }
});

router.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.clearCookie('admin_token');
    res.json({ msg: 'Logged out successfully' });
});

router.post('/forgot-password', async (req, res, next) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ msg: 'Email is required' });

    try {
        const result = await query('SELECT id FROM users WHERE email = $1', [email]);
        if (result.rows.length === 0) {
            return res.json({ msg: 'If the email exists, an OTP has been sent.' });
        }

        const otp = crypto.randomInt(100000, 999999).toString();
        const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

        await query('UPDATE users SET reset_otp = $1, reset_otp_expires_at = $2 WHERE email = $3', [otp, expiresAt, email]);

        try {
            await sendPasswordResetEmail(email, otp);
            res.json({ msg: 'If the email exists, an OTP has been sent.' });
        } catch (error) {
            console.error("Error sending OTP email:", error);
            res.status(500).json({ msg: 'Error sending email' });
        }
    } catch (error) {
        next(error);
    }
});

router.post('/reset-password', async (req, res, next) => {
    const { email, otp, newPassword } = req.body;
    if (!email || !otp || !newPassword) return res.status(400).json({ msg: 'All fields are required' });
    if (newPassword.length < 6) return res.status(400).json({ msg: 'Password must be at least 6 characters' });

    try {
        const result = await query('SELECT id, reset_otp, reset_otp_expires_at, COALESCE(otp_attempts, 0) as otp_attempts FROM users WHERE email = $1', [email]);
        const user = result.rows[0];

        if (!user) return res.status(400).json({ msg: 'Invalid or expired OTP' });

        if (user.otp_attempts >= 3) {
            return res.status(403).json({ msg: 'Demasiados intentos fallidos. Solicite un nuevo código.' });
        }

        if (user.reset_otp !== otp) {
            await query('UPDATE users SET otp_attempts = otp_attempts + 1 WHERE id = $1', [user.id]);
            return res.status(400).json({ msg: 'Código incorrecto' });
        }

        if (new Date() > new Date(user.reset_otp_expires_at)) {
            return res.status(400).json({ msg: 'El código ha expirado. Solicite uno nuevo.' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await query('UPDATE users SET password = $1, reset_otp = NULL, reset_otp_expires_at = NULL, otp_attempts = 0 WHERE id = $2', [hashedPassword, user.id]);
        res.json({ msg: 'Contraseña actualizada correctamente' });
    } catch (error) {
        next(error);
    }
});

router.post('/google', async (req, res, next) => {
    const { token } = req.body;
    if (!token) return res.status(400).json({ msg: 'Token is required' });

    try {
        const ticket = await googleClient.verifyIdToken({
            idToken: token,
            audience: process.env.VITE_GOOGLE_CLIENT_ID,
        });

        const { sub: googleId, email, name, picture } = ticket.getPayload();

        let result = await query('SELECT * FROM users WHERE google_id = $1', [googleId]);
        let user = result.rows[0];

        if (!user) {
            result = await query('SELECT * FROM users WHERE email = $1', [email]);
            user = result.rows[0];

            if (user) {
                await query('UPDATE users SET google_id = $1, avatar = $2 WHERE id = $3', [googleId, picture || user.avatar, user.id]);
                user.google_id = googleId;
                user.avatar = picture || user.avatar;
            } else {
                const username = name || email.split('@')[0];
                const newUser = await query(
                    'INSERT INTO users (username, email, google_id, avatar, is_premium) VALUES ($1, $2, $3, $4, false) RETURNING *',
                    [username, email, googleId, picture || 'default']
                );
                user = newUser.rows[0];
                // New Google User: Send Welcome Email
                sendWelcomeEmail(user.email, user.username).catch(err => console.error('[Mailer] Google welcome email failed:', err.message));
            }
        }

        const appToken = generateToken(user);
        setAuthCookie(res, user, appToken);

        // Update last_login_at for telemetry
        await query('UPDATE users SET last_login_at = CURRENT_TIMESTAMP WHERE id = $1', [user.id]);

        res.json({ 
            user: { 
                id: user.id, username: user.username, email: user.email, 
                is_admin: user.is_admin, is_premium: user.is_premium, 
                avatar: user.avatar 
            } 
        });
    } catch (error) {
        console.error("Google Login Error:", error);
        res.status(401).json({ msg: 'Error de autenticación con Google: ' + error.message });
    }
});

router.get('/me', authenticateToken, async (req, res, next) => {
    try {
        await query('UPDATE users SET last_login_at = CURRENT_TIMESTAMP WHERE id = $1', [req.user.id]);
        const userResult = await query('SELECT id, username, email, is_admin, is_premium, premium_until, avatar, created_at, last_login_at FROM users WHERE id = $1', [req.user.id]);
        res.json({ user: userResult.rows[0] || null });
    } catch (error) {
        next(error);
    }
});

router.put('/profile', authenticateToken, async (req, res, next) => {
    const { newUsername, currentPassword, newPassword, avatar } = req.body;
    try {
        const result = await query('SELECT * FROM users WHERE id = $1', [req.user.id]);
        const user = result.rows[0];
        
        if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' });
        
        // Google users might not have a password
        if (user.password && (!currentPassword || !(await bcrypt.compare(currentPassword, user.password)))) {
            return res.status(401).json({ msg: 'La contraseña actual es incorrecta' });
        }

        let updatedUsername = user.username;
        let updatedAvatar = user.avatar;

        if (newUsername && newUsername.trim() !== '' && newUsername !== user.username) {
            await query('UPDATE users SET username = $1 WHERE id = $2', [newUsername, req.user.id]);
            updatedUsername = newUsername;
        }

        if (newPassword && newPassword.trim() !== '') {
            const hashedNewPassword = await bcrypt.hash(newPassword, 10);
            await query('UPDATE users SET password = $1 WHERE id = $2', [hashedNewPassword, req.user.id]);
        }

        if (avatar) {
            await query('UPDATE users SET avatar = $1 WHERE id = $2', [avatar, req.user.id]);
            updatedAvatar = avatar;
        }

        const token = generateToken({ ...user, username: updatedUsername, avatar: updatedAvatar });
        setAuthCookie(res, { ...user, username: updatedUsername, avatar: updatedAvatar }, token);

        res.json({ 
            msg: 'Perfil actualizado exitosamente', 
            user: { 
                id: user.id, username: updatedUsername, email: user.email, 
                is_admin: user.is_admin, is_premium: user.is_premium, 
                premium_until: user.premium_until,
                avatar: updatedAvatar 
            } 
        });
    } catch (error) {
        if (isUniqueViolation(error)) return res.status(400).json({ msg: 'El nombre de usuario ya está en uso' });
        next(error);
    }
});

// --- SELF-SERVICE SUBSCRIPTION CANCELLATION ---
// Cancellation means: no future charges. Access continues until premium_until expires naturally.

router.delete('/subscription', authenticateToken, async (req, res, next) => {
    try {
        const userId = req.user.id;
        const user = (await query('SELECT id, is_premium, premium_until FROM users WHERE id = $1', [userId])).rows[0];

        if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' });
        if (!user.is_premium) return res.status(400).json({ msg: 'No tienes una suscripción Premium activa.' });

        // We do NOT revoke access — user keeps premium until premium_until expires.
        // Since ePayco does not auto-charge, there is no recurring billing to stop.
        // This endpoint simply confirms the cancellation intent for the user's records.
        console.log(`[Auth] User #${userId} confirmed subscription cancellation. Access continues until: ${user.premium_until}`);

        res.json({
            success: true,
            premium_until: user.premium_until,
            msg: `Tu suscripción ha sido cancelada. Tu acceso Premium se mantendrá activo hasta que venza el período ya pagado.`
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
