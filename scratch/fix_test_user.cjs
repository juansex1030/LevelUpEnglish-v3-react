const { query } = require('../backend/db');
const bcrypt = require('bcryptjs');

async function fixUser() {
    try {
        const hashed = await bcrypt.hash('123456', 10);
        await query("UPDATE users SET password = $1, is_premium = true WHERE email = 'test_123@example.com'", [hashed]);
        console.log('User test_123@example.com updated to Premium with password 123456');
    } catch (err) {
        console.error(err);
    } finally {
        process.exit(0);
    }
}

fixUser();
