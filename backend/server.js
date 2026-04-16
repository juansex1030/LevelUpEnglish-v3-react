require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const { rateLimit } = require('express-rate-limit');
const bcrypt = require('bcryptjs');
const { query, initDatabase } = require('./db');

// Route Imports
const authRoutes = require('./routes/auth.routes');
const adminRoutes = require('./routes/admin.routes');
const topicsRoutes = require('./routes/topics.routes');
const progressRoutes = require('./routes/progress.routes');
const stripeRoutes = require('./routes/stripe.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// ======================
// SECURITY & MIDDLEWARE
// ======================
app.use(helmet());
app.use(hpp());
app.use(cookieParser());

// Rate Limiting
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: process.env.NODE_ENV === 'production' ? 100 : 10000, // much higher in dev
    standardHeaders: true,
    legacyHeaders: false,
    message: { msg: 'Demasiadas peticiones, intente más tarde.' }
});
app.use('/api/', apiLimiter);

// CORS Configuration
const corsOptions = {
    origin: (origin, callback) => {
        const allowedOrigins = [/^https?:\/\/localhost(:\d+)?$/];
        if (process.env.FRONTEND_URL) {
            process.env.FRONTEND_URL.split(',').forEach(url => allowedOrigins.push(url.trim()));
        }

        if (!origin || allowedOrigins.some(ao => (typeof ao === 'string' ? ao === origin : ao.test(origin)))) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

// Logging
app.use((req, res, next) => {
    console.log(`[Request] ${req.method} ${req.url}`);
    next();
});

// Trust proxy for header-based IP/Security in Cloud environments
if (process.env.NODE_ENV === 'production') app.set('trust proxy', 1);

// ======================
// ROUTES
// ======================

// ⚠️ STRIPE WEBHOOK: Must be before express.json()
app.use('/api/v1/stripe', stripeRoutes);

// Body Parser
app.use(express.json({ limit: '10kb' }));

// Auth & Content Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/topics', topicsRoutes);
app.use('/api/v1/progress', progressRoutes);
app.use('/api/v1/admin', adminRoutes);

// ======================
// INITIALIZATION
// ======================

let bootstrapPromise;
const initializeAdmin = async () => {
    try {
        const adminEmail = 'juanse1030@gmail.com';
        const adminUser = await query('SELECT id FROM users WHERE email = $1', [adminEmail]);

        if (adminUser.rows.length === 0) {
            // Securely hash the default admin password
            const hashedPassword = await bcrypt.hash(process.env.DEFAULT_ADMIN_PASSWORD || 'admin1234', 10);
            await query(
                'INSERT INTO users (username, email, password, is_admin) VALUES ($1, $2, $3, $4)',
                ['juanse1030', adminEmail, hashedPassword, true]
            );
            console.log('[Auth] Default admin user created (Safe check).');
        }
    } catch (error) {
        console.error("[Auth] Admin initialization error:", error.message);
    }
};

const ensureInitialized = async () => {
    if (!bootstrapPromise) {
        bootstrapPromise = (async () => {
            await initDatabase();
            await initializeAdmin();
        })();
    }
    return bootstrapPromise;
};

// Centralized Error Handler
app.use((err, req, res, next) => {
    console.error(`[Error] ${req.method} ${req.url}:`, err.stack);
    const status = err.status || 500;
    const message = process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message;
    res.status(status).json({ msg: message });
});

// ======================
// ERROR HANDLING
// ======================

// 404 Handler
app.use((req, res) => {
    res.status(404).json({ msg: 'Ruta no encontrada' });
});

// Centralized Error Handler
app.use((err, req, res, next) => {
    console.error(`[Error] ${req.method} ${req.url}:`, err.stack);
    const status = err.status || 500;
    const message = process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message;
    res.status(status).json({ msg: message });
});

app.listen(PORT, async () => {
    console.log(`🚀 Server up and running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    
    // Initialize DB and Admin on startup
    try {
        await ensureInitialized();
        console.log('[Startup] Database and Admin initialized.');
    } catch (err) {
        console.error('[Startup] Critical initialization error:', err.message);
    }
});
