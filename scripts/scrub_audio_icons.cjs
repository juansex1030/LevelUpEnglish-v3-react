const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

topics.forEach(topic => {
    if (topic && topic.theory) {
        // Remove all instances of the audio icons from the theory text globally
        topic.theory = topic.theory.replace(/<i[^>]*class="bi bi-volume-up[^"]*"[^>]*><\/i>/g, '');
        // Also remove any residual data-audio attributes from other tags if any
        topic.theory = topic.theory.replace(/data-audio="[^"]*"/g, '');
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('All audio elements successfully scrubbed from theory topics.');
