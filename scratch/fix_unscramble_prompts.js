const fs = require('fs');
const topics = JSON.parse(fs.readFileSync('backend/data/topics.json', 'utf8'));

const enQuestionStarts = ['what', 'how', 'who', 'where', 'why', 'when', 'which', 'can', 'do', 'does', 'is', 'are', 'could', 'should', 'would', 'will'];

let fixCount = 0;

topics.forEach(t => {
    ['practice', 'premium_practice'].forEach(field => {
        if (!t[field]) return;
        try {
            const data = JSON.parse(t[field]);
            let changed = false;
            
            (data.games || []).forEach(game => {
                if (game.type === 'unscramble') {
                    (game.questions || []).forEach(q => {
                        // If the answer is a question but the scrambled prompt (q) doesn't have a '?'
                        if (q.a && q.a.endsWith('?') && q.q && !q.q.includes('?')) {
                            q.q = q.q + ' ?';
                            fixCount++;
                            changed = true;
                        }
                    });
                }
            });
            
            if (changed) {
                t[field] = JSON.stringify(data, null, 2);
            }
        } catch (e) {}
    });
});

fs.writeFileSync('backend/data/topics.json', JSON.stringify(topics, null, 2));
console.log(`Successfully applied ${fixCount} unscramble prompt punctuation fixes.`);
