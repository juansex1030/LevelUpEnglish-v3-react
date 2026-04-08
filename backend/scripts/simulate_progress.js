const { query, initDatabase, pool } = require('../db');

async function run() {
    await initDatabase();

    const students = (
        await query(
            `
            SELECT id, username
            FROM users
            WHERE username IN ('test_student1', 'test_student2')
            ORDER BY id
            `
        )
    ).rows;

    if (students.length === 0) {
        console.log('No test students found. Run: npm run accounts:create-test --prefix backend');
        return;
    }

    const topics = (await query('SELECT id, level, number FROM topics')).rows;
    console.log(`Found ${topics.length} topics. Simulating progress...`);

    for (const student of students) {
        const numToComplete = Math.floor(Math.random() * 11) + 5;
        const shuffled = [...topics].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, numToComplete);

        console.log(`Simulating ${selected.length} completed topics for ${student.username} (ID: ${student.id})...`);

        for (const topic of selected) {
            await query(
                `
                INSERT INTO progress (user_id, topic_id)
                VALUES ($1, $2)
                ON CONFLICT (user_id, topic_id) DO NOTHING
                `,
                [student.id, topic.id]
            );
        }
    }

    console.log('Progress simulation complete!');
}

run()
    .catch((error) => {
        console.error('Error:', error.message);
        process.exitCode = 1;
    })
    .finally(async () => {
        await pool.end();
    });
