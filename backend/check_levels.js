const Database = require('better-sqlite3');
const db = new Database('./data/database.db');

// Check all distinct levels
const levels = db.prepare("SELECT DISTINCT level FROM topics ORDER BY level").all();
console.log('All levels in DB:', levels.map(l => l.level));

// Count all topics per level
const counts = db.prepare("SELECT level, COUNT(*) as count FROM topics GROUP BY level ORDER BY level").all();
console.log('\nTopics per level:');
counts.forEach(c => console.log(` ${c.level}: ${c.count} topics`));

// List all A1 topics - try both cases
const a1Upper = db.prepare("SELECT number, title FROM topics WHERE level = 'A1' ORDER BY number").all();
const a1Lower = db.prepare("SELECT number, title FROM topics WHERE level = 'a1' ORDER BY number").all();
console.log(`\nA1 (uppercase): ${a1Upper.length} topics`);
console.log(`a1 (lowercase): ${a1Lower.length} topics`);

// also check what the current page shows - topics with level containing 'a1'
const a1Like = db.prepare("SELECT number, title, level FROM topics WHERE LOWER(level) = 'a1' ORDER BY number").all();
console.log(`\nAll A1 topics (case-insensitive): ${a1Like.length}`);
a1Like.forEach(t => console.log(` ${t.number} [${t.level}] ${t.title}`));
