const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY;
if (!SECRET_KEY) {
    console.error('❌ FATAL: SECRET_KEY is missing in environment variables.');
    if (process.env.NODE_ENV === 'production' || process.env.VERCEL === '1') {
        throw new Error('Insecure startup prevented: SECRET_KEY required.');
    }
}
const ACTUAL_SECRET = SECRET_KEY || 'levelup-dev-fallback-only-for-local';

const authenticateToken = (req, res, next) => {
    // Priority-based token selection for maximum stability
    const appSource = req.headers['x-app-source']?.toLowerCase();
    const isAdminRoute = req.path.startsWith('/admin') || (req.path.includes('/api/v1/admin')) || (req.path.includes('/api/v1/auth/me') && appSource === 'admin');
    
    let token = null;

    if (isAdminRoute) {
        // For admin routes, we MUST prioritize admin_token to avoid session bleeding
        token = req.cookies?.admin_token || req.cookies?.token;
    } else {
        // For frontend routes, prioritize standard token
        token = req.cookies?.token || req.cookies?.admin_token;
    }

    // Fallback to Authorization header if no cookie (useful for mobile or non-browser clients)
    if (!token) {
        const authHeader = req.headers['authorization'];
        token = authHeader && authHeader.split(' ')[1];
    }

    if (!token) {
        if (process.env.NODE_ENV !== 'production') {
            console.debug(`[Auth] No token found for source: ${appSource || 'unknown'}, path: ${req.path}`);
        }
        return res.status(401).json({ msg: 'No session found. Please login.' });
    }

    jwt.verify(token, ACTUAL_SECRET, (err, user) => {
        if (err) {
            console.error(`[Auth] JWT Verification Failed: ${err.message} (Source: ${appSource})`);
            const msg = err.name === 'TokenExpiredError' ? 'La sesión ha expirado. Inicia sesión de nuevo.' : 'Sesión inválida o expirada';
            return res.status(403).json({ msg });
        }
        req.user = user;
        next();
    });
};

const isAdmin = (req, res, next) => {
    if (!req.user || !req.user.is_admin) {
        return res.status(403).json({ msg: 'Admin access required' });
    }
    next();
};
const generateToken = (user) => {
    return jwt.sign(
        { 
            id: user.id, 
            username: user.username, 
            email: user.email, 
            is_admin: user.is_admin, 
            is_premium: user.is_premium, 
            avatar: user.avatar 
        }, 
        ACTUAL_SECRET,
        { expiresIn: '30d' } // Tokens now expire in 30 days
    );
};

module.exports = {
    authenticateToken,
    isAdmin,
    generateToken,
    SECRET_KEY: ACTUAL_SECRET
};
