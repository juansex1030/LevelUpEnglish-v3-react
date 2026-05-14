const fs = require('fs');
const { query } = require('../backend/db');

async function sync() {
    try {
        const topics = JSON.parse(fs.readFileSync('backend/data/topics.json', 'utf8'));
        console.log(`Syncing ${topics.length} topics...`);
        for (const t of topics) {
            if (t.premium_practice) {
                await query(
                    'UPDATE topics SET premium_practice = $1 WHERE level = $2 AND "number" = $3', 
                    [t.premium_practice, t.level, t.number]
                );
            }
        }
        console.log('Database synchronization complete.');
    } catch (err) {
        console.error('Sync Error:', err);
    } finally {
        process.exit(0);
    }
}

sync();
