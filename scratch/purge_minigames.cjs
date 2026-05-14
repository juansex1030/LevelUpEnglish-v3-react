const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const supportedTypes = [
    'multiple_choice', 
    'fill_in', 
    'unscramble', 
    'matching', 
    'spell_tool', 
    'hangman_game', 
    'sentence_builder', 
    'trivia_game', 
    'reading_comprehension', 
    'cloze_test', 
    'word_search'
];

let purgedCount = 0;

topics.forEach(topic => {
    ['practice', 'premium_practice'].forEach(field => {
        if (topic[field]) {
            try {
                const data = JSON.parse(topic[field]);
                if (data.games) {
                    const originalLength = data.games.length;
                    data.games = data.games.filter(game => supportedTypes.includes(game.type));
                    if (data.games.length < originalLength) {
                        purgedCount += (originalLength - data.games.length);
                        topic[field] = JSON.stringify(data);
                    }
                }
            } catch (e) {
                // Not valid JSON or other error
            }
        }
    });
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log(`Purged ${purgedCount} unsupported minigames from topics.json.`);
