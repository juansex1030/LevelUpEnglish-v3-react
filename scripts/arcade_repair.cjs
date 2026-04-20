const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

/** Fisher-Yates Shuffle */
const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
};

/** Shuffles until the order is different from the original */
const deepScramble = (sentence) => {
    const original = sentence.toUpperCase();
    const words = original.split(' ');
    if (words.length <= 1) return original;
    
    let scrambled = original;
    let attempts = 0;
    while (scrambled === original && attempts < 10) {
        scrambled = shuffle([...words]).join(' ');
        attempts++;
    }
    return scrambled;
};

/** Removes common suffixes from hints to make them harder */
const sanitizeHint = (hint, answer) => {
    if (!hint || !answer) return hint;
    // If the hint is just the answer, strip it to the root
    if (hint.toLowerCase().includes(answer.toLowerCase())) {
        // e.g. "Running" -> "Run", "Studying" -> "Study"
        return answer.toLowerCase()
            .replace(/ing$/, '')
            .replace(/ed$/, '')
            .replace(/s$/, '')
            .toUpperCase();
    }
    return hint;
};

let fixes = 0;

topics.forEach(topic => {
    if (!topic.premium_practice) return;
    
    let p;
    try {
        p = JSON.parse(topic.premium_practice);
    } catch (e) { return; }

    p.games.forEach(game => {
        // 1. Fix Unscramble triviality
        if (game.type === 'unscramble') {
            game.questions.forEach(q => {
                if (q.q.toUpperCase() === q.a.toUpperCase() || q.q.split(' ').length <= 1) {
                    q.q = deepScramble(q.a);
                    fixes++;
                }
            });
        }

        // 2. Fix Fill-In triviality (where the answer is given in the prompt)
        if (game.type === 'fill_in') {
            game.questions.forEach(q => {
                const cleanA = q.a.trim().toLowerCase();
                if (q.q.toLowerCase().includes(cleanA)) {
                    // Try to strip the matching word from the prompt
                    const regex = new RegExp(`\\(${cleanA}\\)`, 'gi');
                    const root = cleanA.replace(/ing$/, '').replace(/ed$/, '').replace(/s$/, '');
                    q.q = q.q.replace(regex, `(${root})`);
                    // If still identical, force the change
                    if (q.q.toLowerCase().includes(cleanA)) {
                        q.q = q.q.replace(new RegExp(cleanA, 'gi'), root);
                    }
                    fixes++;
                }
            });
        }
        
        // 3. Fix Hangman hints
        if (game.type === 'hangman_game') {
            game.words.forEach(w => {
                if (w.hint.toLowerCase().includes(w.word.toLowerCase())) {
                    w.hint = "Try to guess the word based on the topic context!";
                    fixes++;
                }
            });
        }
    });

    topic.premium_practice = JSON.stringify(p, null, 2);
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log(`[Repair] Total patches applied: ${fixes}`);
console.log(`[Repair] topics.json has been hardened.`);
