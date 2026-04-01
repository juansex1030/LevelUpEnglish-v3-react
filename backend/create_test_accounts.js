const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
const path = require('path');

const dbPath = path.join(__dirname, 'data', 'database.db');
const db = new Database(dbPath);

async function createTestAccounts() {
    const accounts = [
        { username: 'test_student1', email: 'test1@example.com', password: 'password123' },
        { username: 'test_student2', email: 'test2@example.com', password: 'password123' }
    ];

    for (const acc of accounts) {
        try {
            const hashedPassword = await bcrypt.hash(acc.password, 10);
            db.prepare('INSERT INTO users (username, email, password, is_admin) VALUES (?, ?, ?, ?)').run(
                acc.username,
                acc.email,
                hashedPassword,
                0
            );
            console.log(`Created account: ${acc.username} (${acc.email})`);
        } catch (error) {
            if (error.message.includes('UNIQUE constraint failed')) {
                console.log(`Account ${acc.username} already exists.`);
            } else {
                console.error(`Error creating ${acc.username}:`, error.message);
            }
        }
    }
}

createTestAccounts();
