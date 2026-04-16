require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Present Continuous',
                instruction: 'Test your knowledge of the Present Continuous tense!',
                questions: [
                    {
                        question: 'What auxiliary verb do you use for Present Continuous?',
                        options: ['Do / Does', 'Am / Is / Are', 'Was / Were', 'Did'],
                        correctIdx: 1
                    },
                    {
                        question: 'What ending do we add to the main verb?',
                        options: ['-ed', '-s', '-ing', '-en'],
                        correctIdx: 2
                    },
                    {
                        question: 'The Present Continuous is used for:',
                        options: ['Past habits', 'Actions happening right now', 'Future facts only', 'Daily routines'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which sentence is CORRECT?',
                        options: [
                            'I playing soccer.',
                            'I am play soccer.',
                            'I am playing soccer.',
                            'I is playing soccer.'
                        ],
                        correctIdx: 2
                    },
                    {
                        question: 'Choose the correct negative form:',
                        options: ['She not working.', 'She is not working.', 'She don\'t working.', 'She isn\'t work.'],
                        correctIdx: 1
                    },
                    {
                        question: 'What is the question form of "He is eating"?',
                        options: ['Does he eating?', 'Is he eating?', 'He is eating?', 'He eating?'],
                        correctIdx: 1
                    },
                    {
                        question: '"Write" + "-ing" = ?',
                        options: ['writeing', 'writing', 'writting', 'writes'],
                        correctIdx: 1
                    },
                    {
                        question: '"Run" + "-ing" = ?',
                        options: ['runing', 'running', 'runing', 'runs'],
                        correctIdx: 1
                    },
                    {
                        question: '"Study" + "-ing" = ?',
                        options: ['studing', 'studying', 'studies', 'study'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which time expression is common with this tense?',
                        options: ['Yesterday', 'At the moment', 'Every day', 'Last week'],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: am/is/are + verb-ing',
                instruction: 'Type the correct form of the verb in Present Continuous (e.g., "am working")',
                sentences: [
                    { text: 'I ___ (watch) TV right now.', answer: 'am watching' },
                    { text: 'She ___ (read) a book at the moment.', answer: 'is reading' },
                    { text: 'They ___ (play) football in the park.', answer: 'are playing' },
                    { text: 'We ___ (not / study) today.', answer: 'are not studying' },
                    { text: 'Look! It ___ (rain) outside.', answer: 'is raining' },
                    { text: 'He ___ (listen) to music.', answer: 'is listening' },
                    { text: 'You ___ (not / pay) attention!', answer: 'are not paying' },
                    { text: 'My cat ___ (sleep) on the sofa.', answer: 'is sleeping' },
                    { text: 'Wait! I ___ (come) with you.', answer: 'am coming' },
                    { text: 'The teacher ___ (talk) to the students.', answer: 'is talking' },
                    { text: 'John and Mary ___ (dance).', answer: 'are dancing' },
                    { text: 'Listen! Someone ___ (sing).', answer: 'is singing' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Present Continuous',
                instruction: 'Arrange the words to form correct sentences',
                sentences: [
                    { text: 'I AM STUDYING ENGLISH NOW', translation: 'Estoy estudiando inglés ahora', distractors: ['DO', 'STUDY'] },
                    { text: 'SHE IS WEARING A BLUE DRESS', translation: 'Ella lleva puesto un vestido azul', distractors: ['ARE', 'WEAR'] },
                    { text: 'WHAT ARE YOU DOING HERE', translation: '¿Qué estás haciendo aquí?', distractors: ['IS', 'DO'] },
                    { text: 'THEY ARE NOT WORKING TODAY', translation: 'Ellos no están trabajando hoy', distractors: ['IS', 'WORK'] },
                    { text: 'IS HE COOKING DINNER NOW', translation: '¿Está él cocinando la cena ahora?', distractors: ['DOES', 'COOK'] },
                    { text: 'WE ARE HAVING A GREAT TIME', translation: 'Lo estamos pasando muy bien', distractors: ['HAVE', 'HAS'] },
                    { text: 'LOOK THE TRAIN IS COMING', translation: '¡Mira! El tren está viniendo', distractors: ['ARE', 'COME'] },
                    { text: 'WHY IS THE BABY CRYING', translation: '¿Por qué está llorando el bebé?', distractors: ['ARE', 'CRY'] },
                    { text: 'I AM NOT FEELING WELL', translation: 'No me siento bien', distractors: ['IS', 'FEEL'] },
                    { text: 'THE DOG IS RUNNING FAST', translation: 'El perro está corriendo rápido', distractors: ['RUN', 'ARE'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Verb Forms (v-ing)',
                instruction: 'Match the base verb with its -ing form!',
                pairs: [
                    { emoji: 'Run', word: 'Running' },
                    { emoji: 'Swim', word: 'Swimming' },
                    { emoji: 'Write', word: 'Writing' },
                    { emoji: 'Bake', word: 'Baking' },
                    { emoji: 'Study', word: 'Studying' },
                    { emoji: 'Play', word: 'Playing' },
                    { emoji: 'Listen', word: 'Listening' },
                    { emoji: 'Read', word: 'Reading' },
                    { emoji: 'Dance', word: 'Dancing' },
                    { emoji: 'Eat', word: 'Eating' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Continuous Actions ☠️',
                instruction: 'Guess the verb in its -ing form!',
                words: [
                    { word: 'WATCHING', hint: 'Looking at TV' },
                    { word: 'COOKING', hint: 'Preparing food in the kitchen' },
                    { word: 'WORKING', hint: 'Doing your job' },
                    { word: 'DRIVING', hint: 'Operating a car' },
                    { word: 'SLEEPING', hint: 'Resting in bed' },
                    { word: 'TALKING', hint: 'Speaking to someone' },
                    { word: 'WALKING', hint: 'Moving on your feet' },
                    { word: 'SHOPPING', hint: 'Buying things at a store' },
                    { word: 'CLEANING', hint: 'Making things tidy' },
                    { word: 'SMILING', hint: 'Showing happiness on your face' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A1', 17]);
        console.log('✅ Successfully updated A1 Topic 17 — Present Continuous');
        console.log('   → 5 games, 10+ exercises each');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
