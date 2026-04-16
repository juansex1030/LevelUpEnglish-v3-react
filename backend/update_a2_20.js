require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Stative Verbs',
                instruction: 'Can you use these special verbs correctly?',
                questions: [
                    {
                        question: 'What is a "stative verb"?',
                        options: [
                            'A verb that describes an action',
                            'A verb that describes a state or feeling',
                            'A verb used only in the past',
                            'A verb that always ends in -ing'
                        ],
                        correctIdx: 1
                    },
                    {
                        question: 'Which of these is a stative verb?',
                        options: ['Run', 'Know', 'Jump', 'Eat'],
                        correctIdx: 1
                    },
                    {
                        question: 'Do we usually use stative verbs in continuous forms (-ing)?',
                        options: ['Yes', 'No', 'Only in the past', 'Only in questions'],
                        correctIdx: 1
                    },
                    {
                        question: '"I ____ pizza." — Which is correct?',
                        options: ['am liking', 'like', 'likes', 'liking'],
                        correctIdx: 1
                    },
                    {
                        question: '"I ____ you are right." — Which is correct?',
                        options: ['am thinking (opinion)', 'think', 'am think', 'thinking'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which is WRONG?',
                        options: ['I am needing a coffee.', 'I need a coffee.', 'I want a coffee.', 'He wants a coffee.'],
                        correctIdx: 0
                    },
                    {
                        question: 'Which verb can be BOTH stative and active (with different meanings)?',
                        options: ['Know', 'Think / Have', 'Believe', 'Want'],
                        correctIdx: 1
                    },
                    {
                        question: '"I ____ a sister." — (possession)',
                        options: ['have', 'am having', 'has', 'having'],
                        correctIdx: 0
                    },
                    {
                        question: '"Wait! I ____ lunch now." (action right now)',
                        options: ['have', 'am having', 'having', 'has'],
                        correctIdx: 1
                    },
                    {
                        question: 'Stative verbs describe things like:',
                        options: ['Thoughts, feelings, senses, and possession', 'Physical movements', 'Future plans', 'None of these'],
                        correctIdx: 0
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Stative vs. Active',
                instruction: 'Type the correct form of the verb (Simple Present or Present Continuous)',
                sentences: [
                    { text: 'I ___ (believe) in ghosts. (state)', answer: 'believe' },
                    { text: 'I ___ (wait) for the bus. (action)', answer: 'am waiting' },
                    { text: 'She ___ (know) the answer. (mental state)', answer: 'knows' },
                    { text: 'They ___ (have) a big house. (possession)', answer: 'have' },
                    { text: 'We ___ (have) a great time! (experience/action)', answer: 'are having' },
                    { text: 'I ___ (hate) spiders. (feeling)', answer: 'hate' },
                    { text: 'What ___ you (think) about this project? (opinion)', answer: 'do think' },
                    { text: '___ you (understand) me?', answer: 'Do understand' },
                    { text: 'This soup ___ (taste) delicious.', answer: 'tastes' },
                    { text: 'He ___ (look) at the map. (action)', answer: 'is looking' },
                    { text: 'You ___ (look) tired today. (appearance)', answer: 'look' },
                    { text: 'I ___ (need) some help.', answer: 'need' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: States and Feelings',
                instruction: 'Build correct sentences with stative verbs',
                sentences: [
                    { text: 'I DO NOT UNDERSTAND THIS', translation: 'No entiendo esto', distractors: ['AM', 'UNDERSTANDING'] },
                    { text: 'DO YOU KNOW HIS NAME', translation: '¿Sabes su nombre?', distractors: ['ARE', 'KNOWING'] },
                    { text: 'SHE LOVES CHOCOLATE SO MUCH', translation: 'A ella le encanta el chocolate mucho', distractors: ['IS', 'LOVING'] },
                    { text: 'I HAVE TWO OLD BROTHERS', translation: 'Tengo dos hermanos mayores', distractors: ['AM', 'HAVING'] },
                    { text: 'WHAT DO YOU WANT NOW', translation: '¿Qué quieres ahora?', distractors: ['ARE', 'WANTING'] },
                    { text: 'HE BELIEVES IN MAGIC POWERS', translation: 'Él cree en poderes mágicos', distractors: ['IS', 'BELIEVING'] },
                    { text: 'THIS SMELLS VERY GOOD INDEED', translation: 'Esto huele muy bien de verdad', distractors: ['IS', 'SMELLING'] },
                    { text: 'I THINK YOU ARE RIGHT', translation: 'Pienso que tienes razón', distractors: ['AM', 'THINKING'] },
                    { text: 'WE NEED MORE TIME PLEASE', translation: 'Necesitamos más tiempo por favor', distractors: ['ARE', 'NEEDING'] },
                    { text: 'DOES IT BELONG TO YOU', translation: '¿Te pertenece?', distractors: ['IS', 'BELONGING'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Verb Categories',
                instruction: 'Match the verb with its category!',
                pairs: [
                    { emoji: 'Love / Like', word: 'Feeling' },
                    { emoji: 'Know / Think', word: 'Thought' },
                    { emoji: 'Hear / Smell', word: 'Sense' },
                    { emoji: 'Have / Own', word: 'Possession' },
                    { emoji: 'Run / Jump', word: 'Action' },
                    { emoji: 'Believe / Doubt', word: 'Opinion' },
                    { emoji: 'Need / Want', word: 'Need' },
                    { emoji: 'Seem / Appear', word: 'Appearance' },
                    { emoji: 'Eat / Drink', word: 'Action' },
                    { emoji: 'Understand', word: 'Mental State' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Human States ☠️',
                instruction: 'Guess the stative verb!',
                words: [
                    { word: 'BELIEVE', hint: 'To accept as true' },
                    { word: 'UNDERSTAND', hint: 'To get the meaning' },
                    { word: 'REMEMBER', hint: 'To bring back to mind' },
                    { word: 'ORGANIZE', hint: 'Wait — active. RECOGNIZE' },
                    { word: 'RECOGNIZE', hint: 'To identify someone' },
                    { word: 'POSSESS', hint: 'To own something' },
                    { word: 'PREFER', hint: 'To like better' },
                    { word: 'IMAGINE', hint: 'To see in your mind' },
                    { word: 'CONTAIN', hint: 'To hold inside' },
                    { word: 'DEPEND', hint: 'To hinge on something' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 20]);
        console.log('✅ Successfully updated A2 Topic 20 — Stative Verbs');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
