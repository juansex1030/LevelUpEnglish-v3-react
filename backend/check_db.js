const { query } = require('./db.js');

async function run() {
    try {
        const res = await query("SELECT conname, pg_get_constraintdef(c.oid) FROM pg_constraint c WHERE conrelid = 'progress'::regclass;");
        console.log('CONSTRAINTS:', res.rows);
    } catch (e) {
        console.error(e);
    }
}
run();
