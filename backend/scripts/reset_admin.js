const bcrypt = require('bcryptjs');
const { query, initDatabase } = require('../db');

async function reset() {
    try {
        await initDatabase();
        const hp = await bcrypt.hash('admin1234', 10);
        const email = 'juanse1030@gmail.com';
        
        console.log(`Resetting admin password for ${email}...`);
        
        const res = await query(
            'UPDATE users SET password = $1, is_admin = true WHERE email = $2 RETURNING id', 
            [hp, email]
        );
        
        if (res.rows.length > 0) {
            console.log('SUCCESS: Admin password updated correctly.');
        } else {
            console.log('ERROR: User not found. Check the email.');
        }
    } catch (error) {
        console.error('FAILED:', error);
    } finally {
        process.exit(0);
    }
}

reset();
