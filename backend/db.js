const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dbPath = path.join(__dirname, 'data', 'database.db');

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

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

/**
 * Load initial topics from JSON if the table is empty
 */
const loadTopics = () => {
    try {
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
                console.log(`[Database] Successfully loaded ${topicsData.length} topics.`);
            }
        }
    } catch (error) {
        console.error("[Database] Error loading topics:", error.message);
    }
};

loadTopics();

module.exports = db;
