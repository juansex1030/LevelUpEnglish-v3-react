require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');

// Database Import
const { query, initDatabase } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY || 'levelup-secret-key';
let bootstrapPromise;

// ======================
// SECURITY MIDDLEWARE
// ======================

// Set secure HTTP headers
app.use(helmet());

// Prevent HTTP Parameter Pollution
app.use(hpp());

// Rate Limiting for Auth routes
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // block after 100 requests
    message: { msg: 'Too many requests from this IP, please try again after 15 minutes' }
});

// General Middleware
const configuredOrigins = (process.env.FRONTEND_URL || '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

const normalizeOrigin = (value) => value.replace(/\/+$/, '');

const normalizedConfiguredOrigins = configuredOrigins.map(normalizeOrigin);

const isAllowedOrigin = (origin) => {
    if (!origin) return true; // non-browser / server-to-server
    const normalizedOrigin = normalizeOrigin(origin);
    if (normalizedConfiguredOrigins.includes(normalizedOrigin)) return true;
    if (/^https?:\/\/localhost(:\d+)?$/.test(origin)) return true;
    if (/^https:\/\/[a-z0-9-]+\.vercel\.app$/i.test(normalizedOrigin)) return true;
    return false;
};

app.use(cors({
    origin: (origin, callback) => {
        if (isAllowedOrigin(origin)) {
            return callback(null, true);
        }
        return callback(null, false);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 204,
}));

// Body parser with size limit to prevent DoS
app.use(express.json({ limit: '10kb' }));

// Apply rate limiting to Auth routes
app.use('/api/v1/auth/login', authLimiter);
app.use('/api/v1/auth/register', authLimiter);

// ======================
// HELPERS & MIDDLEWARE
// ======================

const isUniqueViolation = (error) => error && error.code === '23505';

const buildProgressSummary = async (userId) => {
    const progressResult = await query(
        `
        SELECT t.level, t.number
        FROM progress p
        JOIN topics t ON p.topic_id = t.id
        WHERE p.user_id = $1
        `,
        [userId]
    );

    const totalTopicsResult = await query(
        'SELECT level, COUNT(*)::int AS count FROM topics GROUP BY level'
    );

    const stats = {};
    const completed_topics_by_level = {};

    totalTopicsResult.rows.forEach((topic) => {
        stats[topic.level] = { total: topic.count, completed: 0 };
        completed_topics_by_level[topic.level] = [];
    });

    progressResult.rows.forEach((item) => {
        if (stats[item.level]) {
            stats[item.level].completed += 1;
            completed_topics_by_level[item.level].push(item.number);
        }
    });

    const completed_topics_count = progressResult.rows.length;
    const total_all = totalTopicsResult.rows.reduce((acc, curr) => acc + curr.count, 0);
    const overall_percentage = total_all > 0 ? Math.round((completed_topics_count / total_all) * 100) : 0;

    return {
        overall_percentage,
        completed_topics: completed_topics_count,
        total_topics: total_all,
        stats,
        completed_topics_by_level,
    };
};

// Initialize Default Admin if table is empty
const initializeAdmin = async () => {
    try {
        const adminEmail = 'juanse1030@gmail.com';
        const adminUser = await query('SELECT id FROM users WHERE email = $1', [adminEmail]);

        if (adminUser.rows.length === 0) {
            const hashedPassword = await bcrypt.hash('admin1234', 10);
            await query(
                `
                INSERT INTO users (username, email, password, is_admin)
                VALUES ($1, $2, $3, $4)
                `,
                ['juanse1030', adminEmail, hashedPassword, true]
            );
            console.log('[Auth] Default admin user created.');
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

// Ensure DB/init is completed both for local server and serverless runtimes.
app.use(async (req, res, next) => {
    try {
        await ensureInitialized();
        next();
    } catch (error) {
        next(error);
    }
});

// Auth Middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ msg: 'No token provided' });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ msg: 'Invalid or expired token' });
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

// ======================
// AUTH API
// ======================

app.post('/api/v1/auth/register', async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) return res.status(400).json({ msg: 'Todos los campos son obligatorios' });
    if (password.length < 6) return res.status(400).json({ msg: 'La contraseña debe tener al menos 6 caracteres' });
    if (!email.includes('@')) return res.status(400).json({ msg: 'Formato de correo inválido' });

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await query(
            `
            INSERT INTO users (username, email, password, avatar)
            VALUES ($1, $2, $3, $4)
            RETURNING id, username, email, avatar
            `,
            [username, email, hashedPassword, 'default']
        );

        const user = result.rows[0];
        const token = jwt.sign({ id: user.id, username: user.username, email: user.email, avatar: user.avatar }, SECRET_KEY);
        res.status(201).json({ token, user });
    } catch (error) {
        console.error("Register error:", error.message);
        if (isUniqueViolation(error)) {
            return res.status(400).json({ msg: 'El nombre de usuario o correo ya está en uso' });
        }
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
});

app.post('/api/v1/auth/login', async (req, res) => {
    const { email, password } = req.body;
    const result = await query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, username: user.username, email: user.email, is_admin: user.is_admin, avatar: user.avatar }, SECRET_KEY);
    res.json({ token, user: { id: user.id, username: user.username, email: user.email, is_admin: user.is_admin, avatar: user.avatar } });
});

app.get('/api/v1/auth/me', authenticateToken, async (req, res) => {
    const result = await query('SELECT id, username, email, is_admin, avatar FROM users WHERE id = $1', [req.user.id]);
    const user = result.rows[0] || null;
    res.json({ user });
});

app.put('/api/v1/auth/profile', authenticateToken, async (req, res) => {
    const { newUsername, currentPassword, newPassword, avatar } = req.body;
    const result = await query('SELECT * FROM users WHERE id = $1', [req.user.id]);
    const user = result.rows[0];
    
    if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' });
    if (!currentPassword || !(await bcrypt.compare(currentPassword, user.password))) {
        return res.status(401).json({ msg: 'La contraseña actual es incorrecta' });
    }

    let updatedUsername = user.username;
    let updatedAvatar = user.avatar;

    try {
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

        const token = jwt.sign({ id: user.id, username: updatedUsername, email: user.email, is_admin: user.is_admin, avatar: updatedAvatar }, SECRET_KEY);
        res.json({ 
            msg: 'Perfil actualizado exitosamente', 
            token, 
            user: { id: user.id, username: updatedUsername, email: user.email, is_admin: user.is_admin, avatar: updatedAvatar } 
        });

    } catch (error) {
        console.error("Profile update error:", error.message);
        if (isUniqueViolation(error)) {
            return res.status(400).json({ msg: 'El nombre de usuario ya está en uso' });
        }
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
});

// ======================
// TOPICS API
// ======================

app.get('/api/v1/topics/:level', async (req, res) => {
    const level = req.params.level.toUpperCase();
    const result = await query(
        'SELECT number, title, description, icon FROM topics WHERE level = $1 ORDER BY number',
        [level]
    );
    const topics = result.rows;
    
    if (topics.length === 0) return res.status(404).json({ error: 'Level not found or empty' });
    return res.json({ topics });
});

app.get('/api/v1/topics/:level/:number', async (req, res) => {
    const level = req.params.level.toUpperCase();
    const number = parseInt(req.params.number);
    const result = await query('SELECT * FROM topics WHERE level = $1 AND number = $2', [level, number]);
    const topic = result.rows[0];
    
    if (!topic) return res.status(404).json({ error: 'Topic not found' });
    res.json({ topic });
});

// Standard scripts per level (mocked for now as in Flask)
app.get('/api/v1/topics/:level/script', (req, res) => {
    res.json({ script: '// Standard practice scripts loaded' });
});

// ======================
// PROGRESS API
// ======================

app.get('/api/v1/progress', authenticateToken, async (req, res) => {
    const summary = await buildProgressSummary(req.user.id);
    res.json(summary);
});

app.post('/api/v1/progress/mark-complete', authenticateToken, async (req, res) => {
    const { level, topic_number } = req.body;
    const topicResult = await query(
        'SELECT id FROM topics WHERE level = $1 AND number = $2',
        [level.toUpperCase(), topic_number]
    );
    const topic = topicResult.rows[0];
    
    if (!topic) return res.status(404).json({ msg: 'Topic not found' });
    
    try {
        await query(
            `
            INSERT INTO progress (user_id, topic_id)
            VALUES ($1, $2)
            ON CONFLICT (user_id, topic_id) DO NOTHING
            `,
            [req.user.id, topic.id]
        );
        res.json({ success: true });
    } catch (error) {
        console.error("Error marking progress:", error.message);
        res.status(500).json({ msg: 'Database error while saving progress' });
    }
});

// ======================
// ADMIN API
// ======================

app.get('/api/v1/admin/stats', authenticateToken, isAdmin, async (req, res) => {
    console.log('--- ADMIN STATS CALLED ---');
    try {
        const totalUsers = (await query('SELECT COUNT(*)::int AS count FROM users')).rows[0].count;
        const totalProgress = (await query('SELECT COUNT(*)::int AS count FROM progress')).rows[0].count;
        const completedTopics = (await query('SELECT COUNT(DISTINCT topic_id)::int AS count FROM progress')).rows[0].count;

        const levels = ['A1', 'A2', 'B1', 'B2', 'C1'];
        const chart_data = await Promise.all(
            levels.map(async (level) => {
                const count = (
                    await query(
                        `
                        SELECT COUNT(*)::int AS count
                        FROM progress p
                        JOIN topics t ON p.topic_id = t.id
                        WHERE t.level = $1
                        `,
                        [level]
                    )
                ).rows[0].count;

                return { name: level, completados: count };
            })
        );

        res.json({
            total_users: totalUsers,
            total_progress_entries: totalProgress,
            completed_topics: completedTopics,
            chart_data
        });
    } catch (err) {
        console.error('Error in /admin/stats:', err.message);
        res.status(500).json({ error: 'Database error' });
    }
});

app.get('/api/v1/admin/users', authenticateToken, isAdmin, async (req, res) => {
    const users = (await query('SELECT id, username, email, is_admin, avatar, created_at FROM users ORDER BY id')).rows;
    res.json({ users });
});

app.put('/api/v1/admin/users/:id/role', authenticateToken, isAdmin, async (req, res) => {
    const userResult = await query('SELECT is_admin FROM users WHERE id = $1', [req.params.id]);
    const user = userResult.rows[0];
    if (!user) return res.status(404).json({ error: 'User not found' });

    const newRole = !user.is_admin;
    await query('UPDATE users SET is_admin = $1 WHERE id = $2', [newRole, req.params.id]);
    res.json({ is_admin: newRole });
});

app.delete('/api/v1/admin/users/:id', authenticateToken, isAdmin, async (req, res) => {
    await query('DELETE FROM users WHERE id = $1', [req.params.id]);
    res.json({ success: true });
});

app.delete('/api/v1/admin/users/:id/progress', authenticateToken, isAdmin, async (req, res) => {
    try {
        await query('DELETE FROM progress WHERE user_id = $1', [req.params.id]);
        res.json({ success: true, msg: 'Progress reset successfully' });
    } catch (error) {
        console.error("Error resetting progress:", error.message);
        res.status(500).json({ error: 'Database error' });
    }
});

app.get('/api/v1/admin/users/:id/progress', authenticateToken, isAdmin, async (req, res) => {
    const targetUserId = req.params.id;

    const userExistsResult = await query('SELECT id FROM users WHERE id = $1', [targetUserId]);
    const userExists = userExistsResult.rows[0];
    if (!userExists) return res.status(404).json({ error: 'User not found' });

    const summary = await buildProgressSummary(targetUserId);
    res.json(summary);
});

app.get('/api/v1/admin/topics', authenticateToken, isAdmin, async (req, res) => {
    const level = req.query.level;
    const topics = (
        await query(
            'SELECT id, number, title, description, level, icon FROM topics WHERE level = $1 ORDER BY number',
            [level]
        )
    ).rows;
    res.json({ topics });
});

app.get('/api/v1/admin/topics/:id', authenticateToken, isAdmin, async (req, res) => {
    const topic = (await query('SELECT * FROM topics WHERE id = $1', [req.params.id])).rows[0] || null;
    res.json(topic);
});

app.post('/api/v1/admin/topics', authenticateToken, isAdmin, async (req, res) => {
    const { number, level, title, description, icon, theory, practice } = req.body;
    const result = await query(
        `
        INSERT INTO topics (number, level, title, description, icon, theory, practice)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id
        `,
        [number, level.toUpperCase(), title, description, icon, theory, practice]
    );
    res.status(201).json({ id: result.rows[0].id });
});

app.put('/api/v1/admin/topics/:id', authenticateToken, isAdmin, async (req, res) => {
    const { title, description, icon, theory, practice } = req.body;
    if (!title) return res.status(400).json({ msg: 'Title is required' });

    try {
        await query(
            `
            UPDATE topics
            SET title = $1, description = $2, icon = $3, theory = $4, practice = $5
            WHERE id = $6
            `,
            [title, description, icon, theory, practice, req.params.id]
        );
        res.json({ success: true });
    } catch (error) {
        console.error("Error updating topic:", error.message);
        res.status(500).json({ msg: 'Error updating topic in database' });
    }
});

app.delete('/api/v1/admin/topics/:id', authenticateToken, isAdmin, async (req, res) => {
    await query('DELETE FROM topics WHERE id = $1', [req.params.id]);
    res.json({ success: true });
});

// Health Check
app.get('/', (req, res) => {
    res.json({ 
        status: 'ok', 
        message: 'LevelUpEnglish API is running',
        version: '1.1.0',
        timestamp: new Date().toISOString()
    });
});

// ======================
// ERROR HANDLING
// ======================

// 404 Handler
app.use((req, res) => {
    res.status(404).json({ msg: 'Route not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(`[Error] ${err.stack}`);
    
    // Don't leak stack traces in production
    const isProduction = process.env.NODE_ENV === 'production';
    
    res.status(err.status || 500).json({
        msg: err.message || 'Internal Server Error',
        error: isProduction ? {} : err
    });
});

// Start Server
const startServer = async () => {
    await ensureInitialized();

    app.listen(PORT, '0.0.0.0', () => {
        console.log('------------------------------------------------');
        console.log(`Server running on http://localhost:${PORT}`);
        console.log('Security: Helmet, HPP, and Rate Limiting enabled');
        console.log('Database: PostgreSQL');
        console.log('------------------------------------------------');
    });
};

if (require.main === module) {
    startServer().catch((error) => {
        console.error('[Startup] Fatal error:', error.message);
        process.exit(1);
    });
}

module.exports = app;
