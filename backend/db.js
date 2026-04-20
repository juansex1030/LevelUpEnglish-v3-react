const { Pool } = require('pg');
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const hasDatabaseUrl = Boolean(process.env.DATABASE_URL);
const useSsl = process.env.PGSSL === 'true' || (process.env.NODE_ENV === 'production' && process.env.PGSSL !== 'false');

const commonPoolOptions = {
    ssl: useSsl ? { rejectUnauthorized: false } : false,
    // Serverless-safe defaults (Vercel): keep pool small and fail fast.
    max: Number(process.env.PGPOOL_MAX || 20),
    idleTimeoutMillis: Number(process.env.PG_IDLE_TIMEOUT_MS || 30000),
    connectionTimeoutMillis: Number(process.env.PG_CONNECT_TIMEOUT_MS || 15000),
    allowExitOnIdle: false,
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

const query = async (text, params = []) => {
    try {
        const start = Date.now();
        const res = await pool.query(text, params);
        const duration = Date.now() - start;
        if (process.env.NODE_ENV === 'development') {
            // console.log('[Database] Query executed', { text, duration, rows: res.rowCount });
        }
        return res;
    } catch (err) {
        console.error('[Database] Query Error:', { text, message: err.message, stack: err.stack });
        throw err;
    }
};

const initDatabase = async () => {
    await query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT,
            is_admin BOOLEAN DEFAULT FALSE,
            is_premium BOOLEAN DEFAULT FALSE,
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
            premium_practice TEXT,
            UNIQUE(level, number)
        );
    `);

    // --- Automigrate: Ensure columns exist ---
    const columnsToEnsure = [
        { table: 'users', column: 'is_premium', type: 'BOOLEAN DEFAULT FALSE' },
        { table: 'users', column: 'reset_otp', type: 'VARCHAR(10)' },
        { table: 'users', column: 'reset_otp_expires_at', type: 'TIMESTAMP' },
        { table: 'users', column: 'google_id', type: 'VARCHAR(255) UNIQUE' },
        { table: 'users', column: 'otp_attempts', type: 'INTEGER DEFAULT 0' },
        { table: 'users', column: 'last_login_at', type: 'TIMESTAMP' },
        { table: 'topics', column: 'arcade_enabled', type: 'BOOLEAN DEFAULT TRUE' },
        { table: 'topics', column: 'premium_practice', type: 'JSONB DEFAULT NULL' }
    ];

    for (const { table, column, type } of columnsToEnsure) {
        await query(`
            DO $$
            BEGIN
                IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='${table}' AND column_name='${column}') THEN
                    EXECUTE 'ALTER TABLE ${table} ADD COLUMN ${column} ' || '${type}';
                END IF;
            END
            $$;
        `);
    }

    await query(`
        CREATE TABLE IF NOT EXISTS progress (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            topic_id INTEGER NOT NULL REFERENCES topics(id) ON DELETE CASCADE,
            completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(user_id, topic_id)
        );
    `);

    await query(`
        CREATE TABLE IF NOT EXISTS audit_logs (
            id SERIAL PRIMARY KEY,
            admin_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
            action TEXT NOT NULL,
            target_type TEXT NOT NULL,
            target_id TEXT,
            details JSONB,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);
    
    await query(`
        CREATE TABLE IF NOT EXISTS support_messages (
            id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            subject TEXT NOT NULL,
            message TEXT NOT NULL,
            status TEXT DEFAULT 'unread',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);

    const jsonPath = path.join(__dirname, 'data', 'topics.json');
    if (!fs.existsSync(jsonPath)) {
        console.warn('[Database] topics.json not found; skipping initial seed.');
        return;
    }

    const topicsData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    console.log(`[Database] Attempting to sync ${topicsData.length} topics...`);
    const client = await pool.connect();
    console.log('[Database] Client connected for seeding.');
    try {
        await client.query('BEGIN');
        for (const topic of topicsData) {
            // Ensure premium_practice is stored as a stringified JSON if it's an object in the JSON file
            const premiumPractice = typeof topic.premium_practice === 'object' 
                ? JSON.stringify(topic.premium_practice) 
                : topic.premium_practice;

            await client.query(
                `
                INSERT INTO topics (number, level, title, description, icon, theory, practice, premium_practice)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                ON CONFLICT (level, number) DO UPDATE SET
                    title = EXCLUDED.title,
                    description = EXCLUDED.description,
                    icon = EXCLUDED.icon,
                    theory = EXCLUDED.theory,
                    practice = EXCLUDED.practice,
                    premium_practice = EXCLUDED.premium_practice
                `,
                [topic.number, topic.level, topic.title, topic.description, topic.icon, topic.theory, topic.practice, premiumPractice]
            );
        }
        await client.query('COMMIT');
        console.log(`[Database] Synced ${topicsData.length} topics from JSON.`);
    } catch (error) {
        await client.query('ROLLBACK');
        console.error('[Database] Seeding error:', error);
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
