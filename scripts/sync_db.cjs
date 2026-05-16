const { initDatabase } = require('../backend/db');

async function sync() {
    try {
        console.log('🔄 Starting database synchronization with topics.json...');
        await initDatabase();
        console.log('✅ Database synchronized successfully.');
        process.exit(0);
    } catch (err) {
        console.error('❌ Sync failed:', err);
        process.exit(1);
    }
}

sync();
