const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY;
if (!SECRET_KEY) {
    if (process.env.NODE_ENV === 'production') {
        throw new Error('FATAL: SECRET_KEY is missing in production environment');
    }
    console.warn('[Auth] WARNING: SECRET_KEY is missing. Using development fallback.');
}
const ACTUAL_SECRET = SECRET_KEY || 'levelup-dev-secret-key';

const authenticateToken = (req, res, next) => {
    // Strict session isolation using custom X-App-Source header
    // Using lowercase access as Express lowercases all incoming headers
    const appSource = req.headers['x-app-source']?.toLowerCase();
    const isAdminRoute = req.path.startsWith('/admin') || (req.path.includes('/api/v1/admin'));
    
    let token = null;

    if (appSource === 'admin' || isAdminRoute) {
        // Strictly use admin_token for Admin Panel or Admin Routes
        token = req.cookies?.admin_token;
    } else {
        // Strictly use standard token for Frontend
        token = req.cookies?.token;
    }

    // Fallback to Authorization header if no cookie (useful for mobile or non-browser clients)
    if (!token) {
        if (process.env.NODE_ENV !== 'production') {
            console.debug(`[Auth] No token found for source: ${appSource || 'unknown'}, path: ${req.path}`);
        }
        const authHeader = req.headers['authorization'];
        token = authHeader && authHeader.split(' ')[1];
    }

    if (!token) return res.status(401).json({ msg: 'No token provided' });

    jwt.verify(token, ACTUAL_SECRET, (err, user) => {
        if (err) {
            const msg = err.name === 'TokenExpiredError' ? 'La sesión ha expirado. Inicia sesión de nuevo.' : 'Token inválido o expirado';
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
