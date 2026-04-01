const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(__dirname, 'data', 'database.db'));

// User IDs for test students
const students = [
    { id: 3, username: 'test_student1' },
    { id: 4, username: 'test_student2' }
];

// Get all topics
const topics = db.prepare('SELECT id, level, number FROM topics').all();

console.log(`Found ${topics.length} topics. Simulating progress...`);

students.forEach(student => {
    // Determine how many topics to complete (e.g., between 5 and 15)
    const numToComplete = Math.floor(Math.random() * 11) + 5;
    
    // Shuffle topics and take the first N
    const shuffled = [...topics].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, numToComplete);
    
    console.log(`Simulating ${selected.length} completed topics for ${student.username} (ID: ${student.id})...`);
    
    const insert = db.prepare('INSERT OR IGNORE INTO progress (user_id, topic_id) VALUES (?, ?)');
    
    selected.forEach(topic => {
        insert.run(student.id, topic.id);
    });
});

console.log('Progress simulation complete!');
db.close();
