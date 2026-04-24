require('dotenv').config({ path: './backend/.env' });
const { initDatabase, pool } = require('../backend/db');

async function sync() {
    console.log('Starting manual database sync...');
    try {
        await initDatabase();
        console.log('Database sync completed successfully!');
    } catch (err) {
        console.error('Database sync failed:', err);
    } finally {
        await pool.end();
        process.exit();
    }
}

sync();
