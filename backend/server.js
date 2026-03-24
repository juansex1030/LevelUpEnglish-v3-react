require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY || 'levelup-secret-key';

// Middleware
app.use(helmet());
app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    credentials: true
}));
app.use(express.json());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: { msg: 'Too many requests from this IP, please try again after 15 minutes' }
});
app.use('/api/', limiter);

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10, // strict limit for auth
    message: { msg: 'Too many authentication attempts, please try again later' }
});
app.use('/api/v1/auth/login', authLimiter);
app.use('/api/v1/auth/register', authLimiter);

// Database Setup
const dbPath = path.join(__dirname, 'data', 'database.db');
const db = new Database(dbPath);

// Initialize Tables
db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        is_admin BOOLEAN DEFAULT 0,
        avatar TEXT DEFAULT 'default',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS topics (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        number INTEGER NOT NULL,
        level TEXT NOT NULL,
        title TEXT NOT NULL,
        description TEXT,
        icon TEXT,
        theory TEXT,
        practice TEXT,
        UNIQUE(level, number)
    );

    CREATE TABLE IF NOT EXISTS progress (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        topic_id INTEGER NOT NULL,
        completed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (topic_id) REFERENCES topics(id),
        UNIQUE(user_id, topic_id)
    );
`);

// Migration for existing tables
try {
    db.exec(`ALTER TABLE users ADD COLUMN avatar TEXT DEFAULT 'default';`);
} catch (e) {
    // Column likely already exists
}

// Load Topics from JSON if table is empty
const loadTopics = () => {
    const count = db.prepare('SELECT COUNT(*) as count FROM topics').get().count;
    if (count === 0) {
        const jsonPath = path.join(__dirname, 'data', 'topics.json');
        if (fs.existsSync(jsonPath)) {
            const topicsData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
            const insert = db.prepare(`
                INSERT INTO topics (number, level, title, description, icon, theory, practice)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `);
            
            const transaction = db.transaction((topics) => {
                for (const t of topics) {
                    insert.run(t.number, t.level, t.title, t.description, t.icon, t.theory, t.practice);
                }
            });
            
            transaction(topicsData);
            console.log(`Successfully loaded ${topicsData.length} topics into the database.`);
        }
    }
};

loadTopics();

// Initialize Default Admin if table is empty
const initializeAdmin = async () => {
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
        console.log('Default admin user created.');
    }
};

initializeAdmin();

// Helper: Auth Middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ msg: 'No token provided' });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ msg: 'Invalid token' });
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
    if (!username || !email || !password) return res.status(400).json({ msg: 'Missing fields' });

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const insert = db.prepare('INSERT INTO users (username, email, password, avatar) VALUES (?, ?, ?, ?)');
        const result = insert.run(username, email, hashedPassword, 'default');
        
        const token = jwt.sign({ id: result.lastInsertRowid, username, email, avatar: 'default' }, SECRET_KEY, { expiresIn: '24h' });
        res.status(201).json({ token, user: { id: result.lastInsertRowid, username, email, avatar: 'default' } });
    } catch (error) {
        res.status(400).json({ msg: 'User already exists or database error' });
    }
});

app.post('/api/v1/auth/login', async (req, res) => {
    const { email, password } = req.body;
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, username: user.username, email: user.email, is_admin: user.is_admin, avatar: user.avatar }, SECRET_KEY, { expiresIn: '24h' });
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
        
        const token = jwt.sign({ id: user.id, username: updatedUsername, email: user.email, is_admin: user.is_admin, avatar: updatedAvatar }, SECRET_KEY, { expiresIn: '24h' });
        res.json({ 
            msg: 'Perfil actualizado exitosamente', 
            token, 
            user: { id: user.id, username: updatedUsername, email: user.email, is_admin: user.is_admin, avatar: updatedAvatar } 
        });

    } catch (error) {
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
        res.status(500).json({ msg: 'Database error' });
    }
});

// ======================
// ADMIN API
// ======================

app.get('/api/v1/admin/stats', authenticateToken, isAdmin, (req, res) => {
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
});

app.get('/api/v1/admin/users', authenticateToken, isAdmin, (req, res) => {
    const users = db.prepare('SELECT id, username, email, is_admin FROM users').all();
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
    db.prepare(`
        UPDATE topics SET title = ?, description = ?, icon = ?, theory = ?, practice = ?
        WHERE id = ?
    `).run(title, description, icon, theory, practice, req.params.id);
    res.json({ success: true });
});

app.delete('/api/v1/admin/topics/:id', authenticateToken, isAdmin, (req, res) => {
    db.prepare('DELETE FROM progress WHERE topic_id = ?').run(req.params.id);
    db.prepare('DELETE FROM topics WHERE id = ?').run(req.params.id);
    res.json({ success: true });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
