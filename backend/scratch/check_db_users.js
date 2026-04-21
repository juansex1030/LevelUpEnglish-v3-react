const { query } = require('./db');

async function checkUsers() {
    try {
        const result = await query('SELECT username, email FROM users LIMIT 10');
        console.log('--- Users in Database ---');
        result.rows.forEach(u => console.log(`- ${u.username} (${u.email})`));
    } catch (error) {
        console.error('DB Check Failed:', error.message);
    }
}

checkUsers();
