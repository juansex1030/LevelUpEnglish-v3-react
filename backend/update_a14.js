require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [

            // ── GAME 1: Trivia – 10 questions ─────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Comparative Adjectives',
                instruction: 'Test your knowledge on how to compare two things!',
                questions: [
                    {
                        question: 'What do we usually add to a short adjective to make it comparative?',
                        options: ['-est', 'more', '-er', 'most'],
                        correctIdx: 2
                    },
                    {
                        question: 'What word often comes after a comparative adjective?',
                        options: ['that', 'than', 'then', 'the'],
                        correctIdx: 1
                    },
                    {
                        question: 'What is the comparative form of "good"?',
                        options: ['gooder', 'more good', 'better', 'best'],
                        correctIdx: 2
                    },
                    {
                        question: 'What is the comparative form of "bad"?',
                        options: ['badder', 'worse', 'worst', 'more bad'],
                        correctIdx: 1
                    },
                    {
                        question: 'How do you make "intelligent" comparative?',
                        options: ['intelligenter', 'more intelligent', 'intelligentest', 'most intelligent'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which sentence is CORRECT?',
                        options: [
                            'A car is more fast than a bicycle.',
                            'A car is faster then a bicycle.',
                            'A car is faster than a bicycle.',
                            'A car is fast than a bicycle.'
                        ],
                        correctIdx: 2
                    },
                    {
                        question: 'For big adjectives ending in "y" like "heavy", what is the rule?',
                        options: [
                            'Keep the y and add -er',
                            'Change y to i and add -er',
                            'Use "more" before the adjective',
                            'It doesn\'t change'
                        ],
                        correctIdx: 1
                    },
                    {
                        question: 'Which is the comparative of "far"?',
                        options: ['farer', 'more far', 'further / farther', 'farest'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which sentence is correct?',
                        options: [
                            'Dogs are friendlier than cats.',
                            'Dogs are more friendly than cats.',
                            'Both are correct.',
                            'Neither is correct.'
                        ],
                        correctIdx: 2
                    },
                    {
                        question: '"big" → comparative:',
                        options: ['biger', 'more big', 'bigger', 'biggest'],
                        correctIdx: 2
                    },
                ]
            },

            // ── GAME 2: Fill Blanks – 12 sentences ────────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Comparatives',
                instruction: 'Complete the sentence with the comparative form of the adjective in parentheses',
                sentences: [
                    { text: 'A turtle is ___ than a rabbit. (slow)',             answer: 'slower'    },
                    { text: 'Russia is ___ than Canada. (large)',                answer: 'larger'    },
                    { text: 'An elephant is ___ than a mouse. (heavy)',          answer: 'heavier'   },
                    { text: 'My English is getting ___ every day. (good)',       answer: 'better'    },
                    { text: 'This book is ___ interesting than that one. (more)', answer: 'more'      },
                    { text: 'A smartphone is ___ expensive than a book. (more)', answer: 'more'      },
                    { text: 'Today the weather is ___ than yesterday. (bad)',    answer: 'worse'     },
                    { text: 'My bedroom is ___ than yours. (small)',             answer: 'smaller'   },
                    { text: 'Sarah is ___ than her brother. (tall)',             answer: 'taller'    },
                    { text: 'This exam was ___ than the last one. (easy)',       answer: 'easier'    },
                    { text: 'Summer is ___ than winter. (hot)',                  answer: 'hotter'    },
                    { text: 'The city is ___ crowded than the country. (more)',  answer: 'more'      },
                ]
            },

            // ── GAME 3: Sentence Builder – 10 sentences ───────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Comparisons',
                instruction: 'Arrange the words to form a correct phrase comparing two things',
                sentences: [
                    {
                        text: 'A car is faster than a bike.',
                        translation: 'Un coche es más rápido que una bicicleta.',
                        distractors: ['then', 'more']
                    },
                    {
                        text: 'My house is bigger than yours.',
                        translation: 'Mi casa es más grande que la tuya.',
                        distractors: ['more big']
                    },
                    {
                        text: 'Math is more difficult than history.',
                        translation: 'Las matemáticas son más difíciles que la historia.',
                        distractors: ['difficulter']
                    },
                    {
                        text: 'She is older than her sister.',
                        translation: 'Ella es mayor que su hermana.',
                        distractors: ['more old', 'then']
                    },
                    {
                        text: 'His grades are better than mine.',
                        translation: 'Sus notas son mejores que las mías.',
                        distractors: ['gooder', 'more good']
                    },
                    {
                        text: 'Today is colder than yesterday.',
                        translation: 'Hoy hace más frío que ayer.',
                        distractors: ['colder is', 'more cold']
                    },
                    {
                        text: 'A laptop is more expensive than a phone.',
                        translation: 'Una laptop es más cara que un teléfono.',
                        distractors: ['expensiver']
                    },
                    {
                        text: 'This movie is worse than the book.',
                        translation: 'Esta película es peor que el libro.',
                        distractors: ['badder']
                    },
                    {
                        text: 'The box is heavier than it looks.',
                        translation: 'La caja es más pesada de lo que parece.',
                        distractors: ['more heavy']
                    },
                    {
                        text: 'Gold is more valuable than silver.',
                        translation: 'El oro es más valioso que la plata.',
                        distractors: ['valuabler']
                    },
                ]
            },

            // ── GAME 4: Matching – 10 pairs ───────────────────────────────
            {
                type: 'matching',
                title: '🔗 Matching: Base to Comparative',
                instruction: 'Match the normal adjective on the left with its comparative form on the right',
                questions: [
                    { q: 'Good',                 a: 'Better' },
                    { q: 'Bad',                  a: 'Worse' },
                    { q: 'Far',                  a: 'Farther / Further' },
                    { q: 'Big',                  a: 'Bigger (double g)' },
                    { q: 'Happy',                a: 'Happier (y → i)' },
                    { q: 'Fast',                 a: 'Faster' },
                    { q: 'Beautiful',            a: 'More beautiful' },
                    { q: 'Expensive',            a: 'More expensive' },
                    { q: 'Easy',                 a: 'Easier' },
                    { q: 'Small',                a: 'Smaller' },
                ]
            },

            // ── GAME 5: Crossword – 5 words ───────────────────────────────
            {
                type: 'crossword_game',
                title: '📝 Crossword: Complete the Comparatives',
                gridSize: { rows: 8, cols: 9 },
                words: [
                    { word: 'BETTER',  row: 2, col: 0, dir: 'across', num: 1, hint: 'Comparative of GOOD.' },
                    { word: 'BIGGER',  row: 2, col: 0, dir: 'down',   num: 1, hint: 'Comparative of BIG.' },
                    { word: 'WORSE',   row: 0, col: 4, dir: 'down',   num: 2, hint: 'Comparative of BAD.' },
                    { word: 'FASTER',  row: 4, col: 1, dir: 'across', num: 3, hint: 'Comparative of FAST.' },
                    { word: 'MORE',    row: 5, col: 6, dir: 'down',   num: 4, hint: 'Used before long adjectives like EXPENSIVE.' }
                ]
            },
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query(
            'UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3',
            [strData, 'A1', 14]
        );
        console.log('✅ Successfully updated A1 Topic 14 — Comparatives');
        console.log('   → Game 1 (trivia_game):      10 questions');
        console.log('   → Game 2 (fill_blanks_game): 12 sentences');
        console.log('   → Game 3 (sentence_builder): 10 sentences');
        console.log('   → Game 4 (matching):         10 pairs');
        console.log('   → Game 5 (crossword_game):   5 words');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
