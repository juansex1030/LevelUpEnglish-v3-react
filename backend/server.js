require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');

// Database Import
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY || 'levelup-secret-key';

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
app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parser with size limit to prevent DoS
app.use(express.json({ limit: '10kb' }));

// Apply rate limiting to Auth routes
app.use('/api/v1/auth/login', authLimiter);
app.use('/api/v1/auth/register', authLimiter);

// ======================
// HELPERS & MIDDLEWARE
// ======================

// Initialize Default Admin if table is empty
const initializeAdmin = async () => {
    try {
        const adminEmail = 'juanse1030@gmail.com';
        const adminUser = db.prepare('SELECT * FROM users WHERE email = ?').get(adminEmail);
        
        if (!adminUser) {
            const hashedPassword = await bcrypt.hash('admin1234', 10);
            db.prepare('INSERT INTO users (username, email, password, is_admin) VALUES (?, ?, ?, ?)').run(
                'juanse1030', 
                adminEmail, 
                hashedPassword, 
                1
            );
            console.log('[Auth] Default admin user created.');
        }
    } catch (error) {
        console.error("[Auth] Admin initialization error:", error.message);
    }
};

initializeAdmin();

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
        const insert = db.prepare('INSERT INTO users (username, email, password, avatar) VALUES (?, ?, ?, ?)');
        const result = insert.run(username, email, hashedPassword, 'default');
        
        const token = jwt.sign({ id: result.lastInsertRowid, username, email, avatar: 'default' }, SECRET_KEY);
        res.status(201).json({ token, user: { id: result.lastInsertRowid, username, email, avatar: 'default' } });
    } catch (error) {
        console.error("Register error:", error.message);
        if (error.message.includes('UNIQUE constraint failed')) {
            return res.status(400).json({ msg: 'El nombre de usuario o correo ya está en uso' });
        }
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
});

app.post('/api/v1/auth/login', async (req, res) => {
    const { email, password } = req.body;
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, username: user.username, email: user.email, is_admin: user.is_admin, avatar: user.avatar }, SECRET_KEY);
    res.json({ token, user: { id: user.id, username: user.username, email: user.email, is_admin: user.is_admin, avatar: user.avatar } });
});

app.get('/api/v1/auth/me', authenticateToken, (req, res) => {
    const user = db.prepare('SELECT id, username, email, is_admin, avatar FROM users WHERE id = ?').get(req.user.id);
    res.json({ user });
});

app.put('/api/v1/auth/profile', authenticateToken, async (req, res) => {
    const { newUsername, currentPassword, newPassword, avatar } = req.body;
    const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.id);
    
    if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' });
    if (!currentPassword || !(await bcrypt.compare(currentPassword, user.password))) {
        return res.status(401).json({ msg: 'La contraseña actual es incorrecta' });
    }

    let updatedUsername = user.username;
    let updatedAvatar = user.avatar;
    
    try {
        if (newUsername && newUsername.trim() !== '' && newUsername !== user.username) {
            db.prepare('UPDATE users SET username = ? WHERE id = ?').run(newUsername, req.user.id);
            updatedUsername = newUsername;
        }
        
        if (newPassword && newPassword.trim() !== '') {
            const hashedNewPassword = await bcrypt.hash(newPassword, 10);
            db.prepare('UPDATE users SET password = ? WHERE id = ?').run(hashedNewPassword, req.user.id);
        }

        if (avatar) {
            db.prepare('UPDATE users SET avatar = ? WHERE id = ?').run(avatar, req.user.id);
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
        if (error.message.includes('UNIQUE constraint failed')) {
            return res.status(400).json({ msg: 'El nombre de usuario ya está en uso' });
        }
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
});

// ======================
// TOPICS API
// ======================

app.get('/api/v1/topics/:level', (req, res) => {
    const level = req.params.level.toUpperCase();
    const topics = db.prepare('SELECT number, title, description, icon FROM topics WHERE level = ? ORDER BY number').all(level);
    
    if (topics.length === 0) return res.status(404).json({ error: 'Level not found or empty' });
    res.json({ topics });
});

app.get('/api/v1/topics/:level/:number', (req, res) => {
    const level = req.params.level.toUpperCase();
    const number = parseInt(req.params.number);
    const topic = db.prepare('SELECT * FROM topics WHERE level = ? AND number = ?').get(level, number);
    
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

app.get('/api/v1/progress', authenticateToken, (req, res) => {
    const progress = db.prepare(`
        SELECT t.level, t.number FROM progress p
        JOIN topics t ON p.topic_id = t.id
        WHERE p.user_id = ?
    `).all(req.user.id);
    
    // Calculate stats and groupings
    const totalTopics = db.prepare('SELECT level, COUNT(*) as count FROM topics GROUP BY level').all();
    const stats = {};
    const completed_topics_by_level = {};
    
    totalTopics.forEach(t => {
        stats[t.level] = { total: t.count, completed: 0 };
        completed_topics_by_level[t.level] = [];
    });
    
    progress.forEach(p => {
        if (stats[p.level]) {
            stats[p.level].completed++;
            completed_topics_by_level[p.level].push(p.number);
        }
    });
    
    const completed_topics_count = progress.length;
    const total_all = totalTopics.reduce((acc, curr) => acc + curr.count, 0);
    const overall_percentage = total_all > 0 ? Math.round((completed_topics_count / total_all) * 100) : 0;
    
    res.json({
        overall_percentage,
        completed_topics: completed_topics_count,
        total_topics: total_all,
        stats,
        completed_topics_by_level
    });
});

app.post('/api/v1/progress/mark-complete', authenticateToken, (req, res) => {
    const { level, topic_number } = req.body;
    const topic = db.prepare('SELECT id FROM topics WHERE level = ? AND number = ?').get(level.toUpperCase(), topic_number);
    
    if (!topic) return res.status(404).json({ msg: 'Topic not found' });
    
    try {
        db.prepare('INSERT OR IGNORE INTO progress (user_id, topic_id) VALUES (?, ?)').run(req.user.id, topic.id);
        res.json({ success: true });
    } catch (error) {
        console.error("Error marking progress:", error.message);
        res.status(500).json({ msg: 'Database error while saving progress' });
    }
});

// ======================
// ADMIN API
// ======================

app.get('/api/v1/admin/stats', authenticateToken, isAdmin, (req, res) => {
    console.log('--- ADMIN STATS CALLED ---');
    try {
        const totalUsers = db.prepare('SELECT COUNT(*) as count FROM users').get().count;
        const totalProgress = db.prepare('SELECT COUNT(*) as count FROM progress').get().count;
        const completedTopics = db.prepare('SELECT COUNT(DISTINCT topic_id) as count FROM progress').get().count;
        
        // Chart data (mocked/calculated)
        const levels = ['A1', 'A2', 'B1', 'B2', 'C1'];
        const chart_data = levels.map(level => {
            const count = db.prepare(`
                SELECT COUNT(*) as count FROM progress p 
                JOIN topics t ON p.topic_id = t.id 
                WHERE t.level = ?
            `).get(level).count;
            return { name: level, completados: count };
        });

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

app.get('/api/v1/admin/users', authenticateToken, isAdmin, (req, res) => {
    const users = db.prepare('SELECT id, username, email, is_admin, avatar, created_at FROM users').all();
    res.json({ users });
});

app.put('/api/v1/admin/users/:id/role', authenticateToken, isAdmin, (req, res) => {
    const user = db.prepare('SELECT is_admin FROM users WHERE id = ?').get(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    
    const newRole = user.is_admin ? 0 : 1;
    db.prepare('UPDATE users SET is_admin = ? WHERE id = ?').run(newRole, req.params.id);
    res.json({ is_admin: newRole });
});

app.delete('/api/v1/admin/users/:id', authenticateToken, isAdmin, (req, res) => {
    db.prepare('DELETE FROM progress WHERE user_id = ?').run(req.params.id);
    db.prepare('DELETE FROM users WHERE id = ?').run(req.params.id);
    res.json({ success: true });
});

app.delete('/api/v1/admin/users/:id/progress', authenticateToken, isAdmin, (req, res) => {
    try {
        db.prepare('DELETE FROM progress WHERE user_id = ?').run(req.params.id);
        res.json({ success: true, msg: 'Progress reset successfully' });
    } catch (error) {
        console.error("Error resetting progress:", error.message);
        res.status(500).json({ error: 'Database error' });
    }
});

app.get('/api/v1/admin/users/:id/progress', authenticateToken, isAdmin, (req, res) => {
    const targetUserId = req.params.id;
    
    // Check if user exists
    const userExists = db.prepare('SELECT id FROM users WHERE id = ?').get(targetUserId);
    if (!userExists) return res.status(404).json({ error: 'User not found' });

    const progress = db.prepare(`
        SELECT t.level, t.number FROM progress p
        JOIN topics t ON p.topic_id = t.id
        WHERE p.user_id = ?
    `).all(targetUserId);
    
    const totalTopics = db.prepare('SELECT level, COUNT(*) as count FROM topics GROUP BY level').all();
    const stats = {};
    const completed_topics_by_level = {};
    
    totalTopics.forEach(t => {
        stats[t.level] = { total: t.count, completed: 0 };
        completed_topics_by_level[t.level] = [];
    });
    
    progress.forEach(p => {
        if (stats[p.level]) {
            stats[p.level].completed++;
            completed_topics_by_level[p.level].push(p.number);
        }
    });
    
    const completed_topics_count = progress.length;
    const total_all = totalTopics.reduce((acc, curr) => acc + curr.count, 0);
    const overall_percentage = total_all > 0 ? Math.round((completed_topics_count / total_all) * 100) : 0;
    
    res.json({
        overall_percentage,
        completed_topics: completed_topics_count,
        total_topics: total_all,
        stats,
        completed_topics_by_level
    });
});

app.get('/api/v1/admin/topics', authenticateToken, isAdmin, (req, res) => {
    const level = req.query.level;
    const topics = db.prepare('SELECT id, number, title, description, level, icon FROM topics WHERE level = ? ORDER BY number').all(level);
    res.json({ topics });
});

app.get('/api/v1/admin/topics/:id', authenticateToken, isAdmin, (req, res) => {
    const topic = db.prepare('SELECT * FROM topics WHERE id = ?').get(req.params.id);
    res.json(topic);
});

app.post('/api/v1/admin/topics', authenticateToken, isAdmin, (req, res) => {
    const { number, level, title, description, icon, theory, practice } = req.body;
    const result = db.prepare(`
        INSERT INTO topics (number, level, title, description, icon, theory, practice)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(number, level.toUpperCase(), title, description, icon, theory, practice);
    res.status(201).json({ id: result.lastInsertRowid });
});

app.put('/api/v1/admin/topics/:id', authenticateToken, isAdmin, (req, res) => {
    const { title, description, icon, theory, practice } = req.body;
    if (!title) return res.status(400).json({ msg: 'Title is required' });
    
    try {
        db.prepare(`
            UPDATE topics SET title = ?, description = ?, icon = ?, theory = ?, practice = ?
            WHERE id = ?
        `).run(title, description, icon, theory, practice, req.params.id);
        res.json({ success: true });
    } catch (error) {
        console.error("Error updating topic:", error.message);
        res.status(500).json({ msg: 'Error updating topic in database' });
    }
});

app.delete('/api/v1/admin/topics/:id', authenticateToken, isAdmin, (req, res) => {
    db.prepare('DELETE FROM progress WHERE topic_id = ?').run(req.params.id);
    db.prepare('DELETE FROM topics WHERE id = ?').run(req.params.id);
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
app.listen(PORT, '0.0.0.0', () => {
    console.log('------------------------------------------------');
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`🛡️  Security: Helmet, HPP, and Rate Limiting enabled`);
    console.log(`📂 Database: SQLite (${db.name})`);
    console.log('------------------------------------------------');
});
