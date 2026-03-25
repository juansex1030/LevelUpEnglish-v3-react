const Database = require('better-sqlite3');
const fs = require('fs');
const db = new Database('./data/database.db');
const topics = db.prepare("SELECT number, title FROM topics WHERE LOWER(level) = 'a1' ORDER BY number").all();
let out = `Total A1 topics: ${topics.length}\n\n`;
topics.forEach(t => { out += `${String(t.number).padStart(2)} | ${t.title}\n`; });
fs.writeFileSync('./a1_topic_list.txt', out, 'utf8');
console.log(out);
