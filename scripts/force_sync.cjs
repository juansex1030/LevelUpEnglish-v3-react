const { initDatabase } = require('../backend/db');

async function forceSync() {
    console.log('[Script] Starting forced database synchronization...');
    try {
        await initDatabase();
        console.log('[Script] Database synchronization completed successfully.');
        process.exit(0);
    } catch (error) {
        console.error('[Script] Synchronization failed:', error);
        process.exit(1);
    }
}

forceSync();
