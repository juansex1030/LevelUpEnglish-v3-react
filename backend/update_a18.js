require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Simple vs. Continuous',
                instruction: 'Which tense should you use? Habits or current actions?',
                questions: [
                    {
                        question: 'We use the Simple Present for:',
                        options: ['Actions happening now', 'Habits and routines', 'Short completed actions', 'Future plans'],
                        correctIdx: 1
                    },
                    {
                        question: 'We use the Present Continuous for:',
                        options: ['Facts and truths', 'Actions happening at the moment of speaking', 'Yesterday\'s events', 'General states'],
                        correctIdx: 1
                    },
                    {
                        question: '"I ____ coffee every morning." — Which is correct?',
                        options: ['drink', 'am drinking', 'drinking', 'drinks'],
                        correctIdx: 0
                    },
                    {
                        question: '"Shhh! The baby ____." — Which is correct?',
                        options: ['sleeps', 'is sleeping', 'sleeping', 'sleep'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which word usually goes with Simple Present?',
                        options: ['Now', 'Daily', 'At the moment', 'Look!'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which word usually goes with Present Continuous?',
                        options: ['Always', 'Never', 'Currently', 'Every week'],
                        correctIdx: 2
                    },
                    {
                        question: '"He ____ lunch right now."',
                        options: ['has', 'is having', 'having', 'have'],
                        correctIdx: 1
                    },
                    {
                        question: '"They ____ at the weekends."',
                        options: ['not work', 'don\'t work', 'isn\'t working', 'aren\'t working'],
                        correctIdx: 1
                    },
                    {
                        question: '"What ____ you doing?"',
                        options: ['do', 'are', 'is', 'does'],
                        correctIdx: 1
                    },
                    {
                        question: '"Where ____ you live?"',
                        options: ['are', 'do', 'is', 'does'],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Simple vs. Continuous',
                instruction: 'Type the correct form of the verb in parentheses',
                sentences: [
                    { text: 'I usually ___ to work by car. (go)', answer: 'go' },
                    { text: 'But today, I ___ the bus. (take)', answer: 'am taking' },
                    { text: 'Look! It ___ again. (rain)', answer: 'is raining' },
                    { text: 'It ___ a lot in London. (rain)', answer: 'rains' },
                    { text: 'She ___ her homework at the moment. (do)', answer: 'is doing' },
                    { text: 'She always ___ her homework. (do)', answer: 'does' },
                    { text: 'We ___ a movie right now. (watch)', answer: 'are watching' },
                    { text: 'They ___ TV every evening. (watch)', answer: 'watch' },
                    { text: 'Listen! The phone ___. (ring)', answer: 'is ringing' },
                    { text: 'I ___ (not / know) the answer.', answer: 'don\'t know' },
                    { text: 'What ___ you (read) now? (read)', answer: 'are reading' },
                    { text: '___ you (like) ice cream? (like)', answer: 'Do like' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Tense Contrast',
                instruction: 'Order the words to make a correct sentence',
                sentences: [
                    { text: 'I AM WORKING AT THE MOMENT', translation: 'Estoy trabajando en este momento', distractors: ['DO', 'WORK'] },
                    { text: 'SHE DRINKS COFFEE EVERY DAY', translation: 'Ella toma café todos los días', distractors: ['IS', 'DRINKING'] },
                    { text: 'THEY ARE NOT PLAYING NOW', translation: 'Ellos no están jugando ahora', distractors: ['DO', 'PLAY'] },
                    { text: 'WE ALWAYS GO TO SCHOOL', translation: 'Siempre vamos a la escuela', distractors: ['ARE', 'GOING'] },
                    { text: 'ARE YOU LISTENING TO ME', translation: '¿Me estás escuchando?', distractors: ['DO', 'LISTEN'] },
                    { text: 'DO YOU SPEAK ENGLISH WELL', translation: '¿Hablas bien inglés?', distractors: ['ARE', 'SPEAKING'] },
                    { text: 'HE IS SLEEPING IN HIS BED', translation: 'Él está durmiendo en su cama', distractors: ['SLEEPS', 'BE'] },
                    { text: 'IT SNOWS IN THE WINTER', translation: 'Nieva en el invierno', distractors: ['IS', 'SNOWING'] },
                    { text: 'WHAT ARE THEY WATCHING NOW', translation: '¿Qué están viendo ahora?', distractors: ['DO', 'WATCH'] },
                    { text: 'MY SISTER WORKS IN LONDON', translation: 'Mi hermana trabaja en Londres', distractors: ['IS', 'WORKING'] }
                ]
            },
            // ── GAME 4: Matching – 10 pairs ───────────────────────────
            {
                type: 'matching',
                title: '🔗 Matching: Indicators & Meaning',
                instruction: 'Match the time expression to the correct tense!',
                pairs: [
                    { q: 'Right now', a: 'Present Continuous' },
                    { q: 'Every day', a: 'Simple Present' },
                    { q: 'At the moment', a: 'Present Continuous' },
                    { q: 'Always', a: 'Simple Present' },
                    { q: 'Normally', a: 'Simple Present' },
                    { q: 'Listen!', a: 'Present Continuous' },
                    { q: 'Look!', a: 'Present Continuous' },
                    { q: 'Once a week', a: 'Simple Present' },
                    { q: 'Currently', a: 'Present Continuous' },
                    { q: 'Never', a: 'Simple Present' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Habits vs Actions ☠️',
                instruction: 'Guess the grammar words!',
                words: [
                    { word: 'HABITS', hint: 'Things you do regularly' },
                    { word: 'ROUTINE', hint: 'A sequence of daily actions' },
                    { word: 'CONTINUOUS', hint: 'Tense for actions in progress' },
                    { word: 'PRESENT', hint: 'The time we are in now' },
                    { word: 'FREQUENCY', hint: 'How often you do something' },
                    { word: 'TEMPORARY', hint: 'Actions that don\'t last forever' },
                    { word: 'PERMANENT', hint: 'States that don\'t change easily' },
                    { word: 'DYNAMIC', hint: 'Verbs that show action' },
                    { word: 'STATIVE', hint: 'Verbs that show state (like, hate)' },
                    { word: 'AUXILIARY', hint: 'Helping verbs (do, be)' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A1', 18]);
        console.log('✅ Successfully updated A1 Topic 18 — Simple vs. Continuous');
        console.log('   → 5 games, 10+ exercises each');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
