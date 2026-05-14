const { query } = require('../backend/db');

async function check() {
    try {
        const res = await query('SELECT premium_practice FROM topics WHERE level = \'A1\' AND "number" = 2');
        console.log('TOPIC 2 DATA:');
        console.log(JSON.stringify(res.rows[0], null, 2));
    } catch (err) {
        console.error(err);
    } finally {
        process.exit(0);
    }
}
check();
