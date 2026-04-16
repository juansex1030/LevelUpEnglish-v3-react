require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Superlatives',
                instruction: 'Can you find the "most" or the "best" in English?',
                questions: [
                    {
                        question: 'What is the superlative form of "tall"?',
                        options: ['More tall', 'Tallest', 'The tallest', 'Most tall'],
                        correctIdx: 2
                    },
                    {
                        question: 'What is the superlative form of "good"?',
                        options: ['The best', 'Goodest', 'Most good', 'The better'],
                        correctIdx: 0
                    },
                    {
                        question: 'What is the superlative form of "bad"?',
                        options: ['Baddest', 'Worst', 'The worst', 'Most bad'],
                        correctIdx: 2
                    },
                    {
                        question: 'What is the superlative form of "expensive"?',
                        options: ['The expensivest', 'The most expensive', 'Most expensive', 'More expensive'],
                        correctIdx: 1
                    },
                    {
                        question: 'Mount Everest is the ___ mountain in the world.',
                        options: ['High', 'Higher', 'Highest', 'The highest'],
                        correctIdx: 3
                    },
                    {
                        question: 'The cheetah is the ___ animal on land.',
                        options: ['Fast', 'Faster', 'The fastest', 'Fastest'],
                        correctIdx: 2
                    },
                    {
                        question: 'This is the ___ movie I have ever seen! (interesting)',
                        options: ['More interesting', 'Most interesting', 'The most interesting', 'Interestingest'],
                        correctIdx: 2
                    },
                    {
                        question: 'What do we usually put BEFORE the superlative?',
                        options: ['A', 'An', 'The', 'Is'],
                        correctIdx: 2
                    },
                    {
                        question: 'Superlative of "dry"?',
                        options: ['Dryest', 'The driest', 'Drier', 'The drier'],
                        correctIdx: 1
                    },
                    {
                        question: 'Superlative of "happy"?',
                        options: ['The happyest', 'The happiest', 'Happiest', 'Most happy'],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Superlative Forms',
                instruction: 'Type the correct superlative form of the adjective in parentheses',
                sentences: [
                    { text: 'Tokyo is the ___ city in the world. (large)', answer: 'largest' },
                    { text: 'This is the ___ book in the library. (old)', answer: 'oldest' },
                    { text: 'He is the ___ person I know. (funny)', answer: 'funniest' },
                    { text: 'It was the ___ day of my life. (bad)', answer: 'worst' },
                    { text: 'Whose bag is the ___? (heavy)', answer: 'heaviest' },
                    { text: 'She is the ___ student in the class. (bright)', answer: 'brightest' },
                    { text: 'The blue whale is the ___ animal on Earth. (big)', answer: 'biggest' },
                    { text: 'Is Russia the ___ country? (large)', answer: 'largest' },
                    { text: 'Health is the ___ thing. (important)', answer: 'most important' },
                    { text: 'That was the ___ exam ever! (easy)', answer: 'easiest' },
                    { text: 'Winter is the ___ season. (cold)', answer: 'coldest' },
                    { text: 'This is the ___ hotel in town. (expensive)', answer: 'most expensive' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Superlative phrases',
                instruction: 'Arrange the words into correct superlative sentences',
                sentences: [
                    { text: 'SHE IS THE BEST SINGER HERE', translation: 'Ella es la mejor cantante aquí', distractors: ['BETTER', 'GOODEST'] },
                    { text: 'IT IS THE COLDEST DAY EVER', translation: 'Es el día más frío de todos', distractors: ['COLD', 'MOST'] },
                    { text: 'WHICH CITY IS THE LARGEST', translation: '¿Qué ciudad es la más grande?', distractors: ['DO', 'STAY'] },
                    { text: 'HE IS THE MOST INTELLIGENT BOY', translation: 'Él es el niño más inteligente', distractors: ['ARE', 'FOR'] },
                    { text: 'THAT WAS THE WORST MOVIE', translation: 'Esa fue la peor película', distractors: ['BAD', 'ARE'] },
                    { text: 'WHO IS THE TALLEST PERSON', translation: '¿Quién es la persona más alta?', distractors: ['IS', 'ARE'] },
                    { text: 'CHINA IS THE MOST POPULATED', translation: 'China es la más poblada', distractors: ['POPULATEDST', 'COUNTRY'] },
                    { text: 'MY CAR IS THE FASTEST', translation: 'Mi coche es el más rápido', distractors: ['ARE', 'THAN'] },
                    { text: 'THIS IS THE SMALLEST ROOM', translation: 'Esta es la habitación más pequeña', distractors: ['ARE', 'TINY'] },
                    { text: 'YOU ARE THE GREATEST FRIEND', translation: 'Eres el mejor amigo', distractors: ['ARE', 'IS'] }
                ]
            },
            // ── GAME 4: Matching – 10 pairs ───────────────────────────
            {
                type: 'matching',
                title: '🔗 Matching: Adjectives & Superlatives',
                instruction: 'Match the adjective with its correct superlative form!',
                pairs: [
                    { q: 'Small', a: 'Smallest' },
                    { q: 'Hot', a: 'Hottest' },
                    { q: 'Beautiful', a: 'Most beautiful' },
                    { q: 'Bad', a: 'Worst' },
                    { q: 'Good', a: 'Best' },
                    { q: 'Easy', a: 'Easiest' },
                    { q: 'Famous', a: 'Most famous' },
                    { q: 'Happy', a: 'Happiest' },
                    { q: 'Little', a: 'Least' },
                    { q: 'Far', a: 'Farthest' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Superlative Words ☠️',
                instruction: 'Guess the superlative adjective!',
                words: [
                    { word: 'BIGGEST', hint: 'The opposite of smallest' },
                    { word: 'STRONGEST', hint: 'Having greatest physical power' },
                    { word: 'LONGEST', hint: 'Having the greatest length' },
                    { word: 'OLDEST', hint: 'Having the greatest age' },
                    { word: 'HIGHEST', hint: 'At the top' },
                    { word: 'RICHEST', hint: 'Having the most money' },
                    { word: 'BRIGHTEST', hint: 'Giving out the most light' },
                    { word: 'NICEST', hint: 'The most kind or pleasant' },
                    { word: 'DEEPEST', hint: 'Extending furthest down' },
                    { word: 'COOLEST', hint: 'The most cold or trendy' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A1', 22]);
        console.log('✅ Successfully updated A1 Topic 22 — Superlatives');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
