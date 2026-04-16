require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Relative Clauses',
                instruction: 'Can you link these sentences correctly?',
                questions: [
                    {
                        question: 'Which relative pronoun do we use for PEOPLE?',
                        options: ['Which', 'Who', 'Where', 'When'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which relative pronoun do we use for THINGS and animals?',
                        options: ['Who', 'Which', 'Where', 'When'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which relative pronoun can be used for BOTH people and things?',
                        options: ['Who', 'Which', 'That', 'Where'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which pronoun do we use for PLACES?',
                        options: ['Who', 'Which', 'Where', 'When'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which pronoun do we use for TIME?',
                        options: ['Who', 'Which', 'Where', 'When'],
                        correctIdx: 3
                    },
                    {
                        question: '"The car ____ he bought is red." — Which fit?',
                        options: ['who', 'which / that', 'where', 'when'],
                        correctIdx: 1
                    },
                    {
                        question: '"The doctor ____ saved me was kind." — Which fit?',
                        options: ['who / that', 'which', 'where', 'when'],
                        correctIdx: 0
                    },
                    {
                        question: '"That is the restaurant ____ we met." — Which fit?',
                        options: ['who', 'which', 'where', 'when'],
                        correctIdx: 2
                    },
                    {
                        question: '"I remember the day ____ we arrived." — Which fit?',
                        options: ['who', 'which', 'where', 'when'],
                        correctIdx: 3
                    },
                    {
                        question: 'Relative clauses help us to:',
                        options: ['Combine sentences', 'Repeat nouns', 'Ask questions', 'Make rules'],
                        correctIdx: 0
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Who, Which, or Where?',
                instruction: 'Type: who, which, or where',
                sentences: [
                    { text: 'A baker is someone ___ makes bread. (persona)', answer: 'who' },
                    { text: 'This is the book ___ I read last week.', answer: 'which' },
                    { text: 'That is the school ___ I studied.', answer: 'where' },
                    { text: 'The man ___ lives next door is a doctor.', answer: 'who' },
                    { text: 'The movie ___ we saw was great.', answer: 'which' },
                    { text: 'This is the office ___ my father works.', answer: 'where' },
                    { text: 'A dictionary is a book ___ gives definitions.', answer: 'which' },
                    { text: 'People ___ smoke should stop.', answer: 'who' },
                    { text: 'The town ___ I grew up is small.', answer: 'where' },
                    { text: 'The cat ___ was on the roof belongs to me.', answer: 'which' },
                    { text: 'He is the teacher ___ taught me English.', answer: 'who' },
                    { text: 'London is the city ___ the Queen lived.', answer: 'where' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Complex Connections',
                instruction: 'Order the words to build relative clause sentences',
                sentences: [
                    { text: 'I KNOW A MAN WHO SPEAKS FRENCH', translation: 'Conozco a un hombre que habla francés', distractors: ['WHICH', 'WHERE'] },
                    { text: 'THAT IS THE CAR WHICH I BOUGHT', translation: 'Ese es el coche que compré', distractors: ['WHO', 'WHERE'] },
                    { text: 'WHERE IS THE PLACE WHERE WE MET', translation: '¿Dónde está el lugar donde nos conocimos?', distractors: ['WHICH', 'WHO'] },
                    { text: 'SHE IS THE GIRL THAT I LIKE', translation: 'Ella es la chica que me gusta', distractors: ['WHICH', 'WHERE'] },
                    { text: 'IT IS A MOVIE WHICH IS SAD', translation: 'Es una película que es triste', distractors: ['WHO', 'WHERE'] },
                    { text: 'HE IS THE BOY WHO WON THE MATCH', translation: 'Él es el chico que ganó el partido', distractors: ['WHICH', 'ARE'] },
                    { text: 'THIS IS THE CAFE WHERE I WORK', translation: 'Este es el café donde trabajo', distractors: ['WHO', 'IS'] },
                    { text: 'A PEN IS SOMETHING WHICH WRITES', translation: 'Un bolígrafo es algo que escribe', distractors: ['WHO', 'WHERE'] },
                    { text: 'TAKE THE ROAD WHICH IS ON LEFT', translation: 'Toma el camino que está a la izquierda', distractors: ['WHO', 'DO'] },
                    { text: 'I HAVE A FRIEND WHO IS NICE', translation: 'Tengo un amigo que es simpático', distractors: ['WHICH', 'ARE'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Relative Pronoun Match',
                instruction: 'Match the noun type with its relative pronoun!',
                pairs: [
                    { emoji: '👨 Person', word: 'Who' },
                    { emoji: '🚗 Thing', word: 'Which' },
                    { emoji: '📍 Place', word: 'Where' },
                    { emoji: '📅 Time', word: 'When' },
                    { emoji: '👥 People', word: 'Who' },
                    { emoji: '🍎 Object', word: 'Which' },
                    { emoji: '🏘️ Building', word: 'Where' },
                    { emoji: '⌚ Moment', word: 'When' },
                    { emoji: '🌟 Star', word: 'Which' },
                    { emoji: '👩 Woman', word: 'Who' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Connecting Words ☠️',
                instruction: 'Guess the relative pronoun or related term!',
                words: [
                    { word: 'WHICH', hint: 'Used for objects' },
                    { word: 'WHO', hint: 'Used for subjects/people' },
                    { word: 'THAT', hint: 'Used for both people and things' },
                    { word: 'WHERE', hint: 'Used for locations' },
                    { word: 'WHEN', hint: 'Used for times' },
                    { word: 'PRONOUN', hint: 'The part of speech for "who" and "which"' },
                    { word: 'CLAUSE', hint: 'A group of words with a subject and verb' },
                    { word: 'DEFINE', hint: 'What a relative clause helps to do' },
                    { word: 'IDENTITY', hint: 'What the clause helps to establish' },
                    { word: 'RELATION', hint: 'The connection between nouns' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 13]);
        console.log('✅ Successfully updated A2 Topic 13 — Relative Clauses');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
