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
const epaycoRoutes = require('./routes/epayco.routes');
const supportRoutes = require('./routes/support.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// ======================
// SECURITY & MIDDLEWARE
// ======================
app.use(helmet());
app.use(hpp());
app.use(cookieParser());

// Logging (Moved to top)
app.use((req, res, next) => {
    console.log(`[Request] ${req.method} ${req.url}`);
    next();
});

// Rate Limiting
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: process.env.NODE_ENV === 'production' ? 100 : 50000, // much higher in dev
    standardHeaders: true,
    legacyHeaders: false,
    message: { msg: 'Demasiadas peticiones, intente más tarde.' }
});
app.use('/api/', apiLimiter);

// Trust proxy for header-based IP/Security in Cloud environments
app.set('trust proxy', 1);

// CORS Configuration
const corsOptions = {
    origin: (origin, callback) => {
        // Robust origin matching:
        // 1. Allow if no origin (e.g., local tools, server-to-server)
        // 2. Allow any 'localhost' or '127.0.0.1' in dev
        // 3. Allow origins specified in FRONTEND_URL env var
        
        const isLocal = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
        
        const allowedOrigins = [];
        if (process.env.FRONTEND_URL) {
            process.env.FRONTEND_URL.split(',').forEach(url => allowedOrigins.push(url.trim()));
        }

        if (!origin || isLocal || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.warn(`[CORS] Request blocked from origin: ${origin}. If this is legitimate, add it to FRONTEND_URL in .env`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-App-Source'],
};
app.use(cors(corsOptions));

// ======================
// ROUTES
// ======================

// Root Route
app.get('/', (req, res) => {
    res.json({
        status: 'online',
        message: 'Level Up English API is running correctly',
        version: '1.0.0',
        environment: process.env.NODE_ENV
    });
});

// Health Check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        env: process.env.NODE_ENV,
        db_connected: true // simplistic for now
    });
});

// Body Parser
app.use(express.json({ limit: '10kb' }));

// Auth & Content Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/topics', topicsRoutes);
app.use('/api/v1/progress', progressRoutes);
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/support', supportRoutes);
app.use('/api/v1/epayco', epaycoRoutes);

// ======================
// INITIALIZATION
// ======================

let bootstrapPromise;
const initializeAdmin = async () => {
    try {
        const adminEmail = process.env.ADMIN_EMAIL || 'juanse1030@gmail.com';
        const adminUser = await query('SELECT id FROM users WHERE email = $1', [adminEmail]);

        if (adminUser.rows.length === 0) {
            const isProd = process.env.NODE_ENV === 'production';
            const defaultPass = process.env.DEFAULT_ADMIN_PASSWORD;

            if (isProd && !defaultPass) {
                console.error('[Auth] FATAL: DEFAULT_ADMIN_PASSWORD is required in production.');
                throw new Error('Insecure admin initialization prevented.');
            }

            // Securely hash the default admin password
            const hashedPassword = await bcrypt.hash(defaultPass || 'admin1234', 10);
            const adminUsername = adminEmail.split('@')[0];

            await query(
                'INSERT INTO users (username, email, password, is_admin) VALUES ($1, $2, $3, $4)',
                [adminUsername, adminEmail, hashedPassword, true]
            );
            console.log('[Auth] Default admin user created (' + adminEmail + ').');
        }
    } catch (error) {
        console.error("[Auth] Admin initialization error:", error.message);
        if (process.env.NODE_ENV === 'production') process.exit(1);
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
    const isProd = process.env.NODE_ENV === 'production' || process.env.VERCEL === '1';
    
    if (!isProd) {
        console.error(`[Error] ${req.method} ${req.url}:`, err);
    }
    
    const status = err.status || 500;
    const message = isProd ? 'Internal server error' : err.message;
    
    res.status(status).json({ 
        msg: message, 
        error: isProd ? undefined : err.message,
        stack: isProd ? undefined : err.stack
    });
});

// 404 Handler
app.use((req, res) => {
    res.status(404).json({ msg: 'Ruta no encontrada' });
});

app.listen(PORT, async () => {
    console.log(`🚀 Level Up English API up and running on port ${PORT}`);
    
    try {
        await ensureInitialized();
    } catch (err) {
        console.error('[Startup] Initialization error:', err.message);
    }
});

// Lifecycle Debugging
process.on('exit', (code) => {
    console.log(`[Lifecycle] Process exiting with code: ${code}`);
});

process.on('uncaughtException', (err) => {
    console.error('[Lifecycle] Uncaught Exception:', err.stack);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('[Lifecycle] Unhandled Rejection at:', promise, 'reason:', reason);
});
