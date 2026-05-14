const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
require('dotenv').config({ path: path.join(__dirname, '..', 'backend', '.env') });

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

async function sync() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });

    try {
        await client.connect();
        console.log('Connected to database. Starting sync...');

        for (const topic of topics) {
            const query = `
                UPDATE topics 
                SET theory = $1, 
                    premium_practice = $2,
                    practice_zone_enabled = TRUE
                WHERE id = $3
            `;
            await client.query(query, [
                topic.theory, 
                JSON.stringify(topic.premium_practice), 
                topic.id
            ]);
            process.stdout.write(`Updated topic ${topic.id} (${topic.level} - ${topic.title})\r`);
        }

        console.log('\n✅ Database sync COMPLETE for all 138 topics.');
    } catch (err) {
        console.error('Error during sync:', err.message);
    } finally {
        await client.end();
    }
}

sync();
