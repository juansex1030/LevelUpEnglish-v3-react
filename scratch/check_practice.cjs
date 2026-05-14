const fs = require('fs');
const topics = JSON.parse(fs.readFileSync('backend/data/topics.json', 'utf8'));
const levels = [...new Set(topics.map(t => t.level))];
console.log('Levels:', levels);
const b1Topics = topics.filter(t => t.level === 'B1');
console.log('B1 Topics count:', b1Topics.length);
b1Topics.forEach(t => {
    console.log(`Topic ${t.number}: ${t.title} - Arcade: ${t.arcade_enabled ? 'Enabled' : 'Disabled'}`);
});
