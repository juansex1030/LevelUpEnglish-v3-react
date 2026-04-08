const { Pool } = require('pg');
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const hasDatabaseUrl = Boolean(process.env.DATABASE_URL);
const useSsl = process.env.PGSSL === 'true' || (process.env.NODE_ENV === 'production' && process.env.PGSSL !== 'false');

const commonPoolOptions = {
    ssl: useSsl ? { rejectUnauthorized: false } : false,
    // Serverless-safe defaults (Vercel): keep pool small and fail fast.
    max: Number(process.env.PGPOOL_MAX || 1),
    idleTimeoutMillis: Number(process.env.PG_IDLE_TIMEOUT_MS || 30000),
    connectionTimeoutMillis: Number(process.env.PG_CONNECT_TIMEOUT_MS || 15000),
    allowExitOnIdle: true,
};

const pool = hasDatabaseUrl
    ? new Pool({
        connectionString: process.env.DATABASE_URL,
        ...commonPoolOptions,
    })
    : new Pool({
        host: process.env.PGHOST || 'localhost',
        port: Number(process.env.PGPORT || 5432),
        user: process.env.PGUSER || 'postgres',
        password: process.env.PGPASSWORD || 'postgres',
        database: process.env.PGDATABASE || 'levelupenglish',
        ...commonPoolOptions,
    });

const query = (text, params = []) => pool.query(text, params);

const initDatabase = async () => {
    await query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            is_admin BOOLEAN DEFAULT FALSE,
            avatar TEXT DEFAULT 'default',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);

    await query(`
        CREATE TABLE IF NOT EXISTS topics (
            id SERIAL PRIMARY KEY,
            number INTEGER NOT NULL,
            level TEXT NOT NULL,
            title TEXT NOT NULL,
            description TEXT,
            icon TEXT,
            theory TEXT,
            practice TEXT,
            UNIQUE(level, number)
        );
    `);

    await query(`
        CREATE TABLE IF NOT EXISTS progress (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            topic_id INTEGER NOT NULL REFERENCES topics(id) ON DELETE CASCADE,
            completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(user_id, topic_id)
        );
    `);

    const topicsCount = await query('SELECT COUNT(*)::int AS count FROM topics');
    if (topicsCount.rows[0].count > 0) {
        return;
    }

    const jsonPath = path.join(__dirname, 'data', 'topics.json');
    if (!fs.existsSync(jsonPath)) {
        console.warn('[Database] topics.json not found; skipping initial seed.');
        return;
    }

    const topicsData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        for (const topic of topicsData) {
            await client.query(
                `
                INSERT INTO topics (number, level, title, description, icon, theory, practice)
                VALUES ($1, $2, $3, $4, $5, $6, $7)
                ON CONFLICT (level, number) DO NOTHING
                `,
                [topic.number, topic.level, topic.title, topic.description, topic.icon, topic.theory, topic.practice]
            );
        }
        await client.query('COMMIT');
        console.log(`[Database] Seeded ${topicsData.length} topics.`);
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
};

module.exports = {
    pool,
    query,
    initDatabase,
};
