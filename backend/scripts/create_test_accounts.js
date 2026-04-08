const bcrypt = require('bcryptjs');
const { query, initDatabase, pool } = require('../db');

async function createTestAccounts() {
    await initDatabase();

    const accounts = [
        { username: 'test_student1', email: 'test1@example.com', password: 'password123' },
        { username: 'test_student2', email: 'test2@example.com', password: 'password123' }
    ];

    for (const acc of accounts) {
        try {
            const hashedPassword = await bcrypt.hash(acc.password, 10);
            await query(
                'INSERT INTO users (username, email, password, is_admin) VALUES ($1, $2, $3, $4)',
                [acc.username, acc.email, hashedPassword, false]
            );
            console.log(`Created account: ${acc.username} (${acc.email})`);
        } catch (error) {
            if (error.code === '23505') {
                console.log(`Account ${acc.username} already exists.`);
            } else {
                console.error(`Error creating ${acc.username}:`, error.message);
            }
        }
    }
}

createTestAccounts()
    .catch((error) => {
        console.error('Error:', error.message);
        process.exitCode = 1;
    })
    .finally(async () => {
        await pool.end();
    });
