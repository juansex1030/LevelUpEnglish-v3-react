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
    // Logic to select the correct cookie based on the route to avoid session bleeding on localhost
    const isAdminRoute = req.path.startsWith('/admin') || (req.path.startsWith('/api/v1/admin'));
    
    // For /me endpoint, we need to be careful. 
    // We check the 'referer' or a custom header to see if it's the admin panel calling.
    const isFromAdminPanel = req.headers.referer?.includes('5174') || req.headers.referer?.includes('admin');

    let token = null;
    if (isAdminRoute || (req.path.includes('/auth/me') && isFromAdminPanel)) {
        token = req.cookies?.admin_token;
    } else {
        token = req.cookies?.token;
    }

    // Fallback to Authorization header if no cookie (useful for mobile or non-browser clients)
    if (!token) {
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
