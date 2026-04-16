const { query, pool } = require('./db');
const fs = require('fs');
const path = require('path');

async function sync() {
    const jsonPath = path.join(__dirname, 'data', 'topics.json');
    if (!fs.existsSync(jsonPath)) {
        console.error('topics.json not found');
        return;
    }

    const topicsData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    console.log(`Syncing ${topicsData.length} topics...`);

    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        for (const topic of topicsData) {
            await client.query(
                `INSERT INTO topics (number, level, title, description, icon, theory, practice)
                 VALUES ($1, $2, $3, $4, $5, $6, $7)
                 ON CONFLICT (level, number) DO UPDATE SET
                    title = EXCLUDED.title,
                    description = EXCLUDED.description,
                    icon = EXCLUDED.icon,
                    theory = EXCLUDED.theory,
                    practice = EXCLUDED.practice`,
                [topic.number, topic.level, topic.title, topic.description, topic.icon, topic.theory, topic.practice]
            );
        }
        await client.query('COMMIT');
        console.log('Successfully synced all topics.');
    } catch (err) {
        await client.query('ROLLBACK');
        console.error('Sync failed:', err);
    } finally {
        client.release();
        await pool.end();
    }
}

sync();
