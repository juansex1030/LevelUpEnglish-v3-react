require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Used to + Infinitive',
                instruction: 'Can you talk about your past habits?',
                questions: [
                    {
                        question: 'We use "Used to" for:',
                        options: ['Current habits', 'Past habits and states', 'Future plans', 'One-time past actions'],
                        correctIdx: 1
                    },
                    {
                        question: 'What is the correct negative form?',
                        options: ['Didn\'t used to', 'Didn\'t use to', 'Not use to', 'Usen\'t to'],
                        correctIdx: 1
                    },
                    {
                        question: 'What is the correct question form?',
                        options: ['Used you to...?', 'Did you used to...?', 'Did you use to...?', 'Are you use to...?'],
                        correctIdx: 2
                    },
                    {
                        question: 'What comes after "used to"?',
                        options: ['Verb + -ing', 'Base form of the verb', 'Verb + -ed', 'Noun only'],
                        correctIdx: 1
                    },
                    {
                        question: '"I ____ have long hair." — Which is correct?',
                        options: ['used to', 'use to', 'using to', 'was used to'],
                        correctIdx: 0
                    },
                    {
                        question: 'Can we use "used to" for things we do NOW?',
                        options: ['Yes', 'No', 'Only in questions', 'Only with "get"'],
                        correctIdx: 1
                    },
                    {
                        question: '"She ____ like chocolate." (Past state)',
                        options: ['used to', 'use to', 'was used to', 'using to'],
                        correctIdx: 0
                    },
                    {
                        question: 'Which of these is WRONG?',
                        options: [
                            'I used to go to the park.',
                            'I didn\'t used to go.',
                            'Did you use to go?',
                            'I didn\'t use to go.'
                        ],
                        correctIdx: 1
                    },
                    {
                        question: '"There ____ be a cinema here." (Past existence)',
                        options: ['used to', 'use to', 'was used to', 'were used to'],
                        correctIdx: 0
                    },
                    {
                        question: 'If something happened only ONCE in the past, do we use "used to"?',
                        options: ['Yes', 'No (use Simple Past)', 'Only if it was important', 'Only in formal English'],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Used to / Use to',
                instruction: 'Type the correct form: used to or use to',
                sentences: [
                    { text: 'I ___ (play) tennis every day. (afirmación)', answer: 'used to play' },
                    { text: 'Did you ___ (smoke)? (pregunta)', answer: 'use to smoke' },
                    { text: 'She didn\'t ___ (eat) meat. (negación)', answer: 'use to eat' },
                    { text: 'We ___ (live) in London. (afirmación)', answer: 'used to live' },
                    { text: 'He ___ (be) very shy at school.', answer: 'used to be' },
                    { text: 'Where did you ___ (go) on holiday?', answer: 'use to go' },
                    { text: 'I didn\'t ___ (like) school much.', answer: 'use to like' },
                    { text: 'They ___ (have) a big house.', answer: 'used to have' },
                    { text: '___ there (be) a park here? (pregunta)', answer: 'Did use to be' },
                    { text: 'We didn\'t ___ (watch) much TV.', answer: 'use to watch' },
                    { text: 'I ___ (believe) in Santa Claus.', answer: 'used to believe' },
                    { text: 'She ___ (work) as a nurse.', answer: 'used to work' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Past Habits',
                instruction: 'Build correct sentences about past habits',
                sentences: [
                    { text: 'I USED TO PLAY OUTSIDE', translation: 'Solía jugar afuera', distractors: ['USER', 'USE'] },
                    { text: 'DID YOU USE TO SING', translation: '¿Solías cantar?', distractors: ['USED', 'ARE'] },
                    { text: 'SHE DID NOT USE TO SMOKE', translation: 'Ella no solía fumar', distractors: ['USED', 'DOES'] },
                    { text: 'THERE USED TO BE FLOWERS', translation: 'Solía haber flores', distractors: ['WAS', 'ARE'] },
                    { text: 'HE USED TO BE THIN', translation: 'Él solía ser delgado', distractors: ['IS', 'WAS'] },
                    { text: 'WE USED TO TRAVEL OFTEN', translation: 'Solíamos viajar a menudo', distractors: ['USE', 'ARE'] },
                    { text: 'DID SHE USE TO COOK', translation: '¿Solía ella cocinar?', distractors: ['USED', 'WAS'] },
                    { text: 'I USED TO LOVE CARTOONS', translation: 'Me encantaban los dibujos animados', distractors: ['USE', 'AM'] },
                    { text: 'THEY USED TO LIVE HERE', translation: 'Ellos solían vivir aquí', distractors: ['ARE', 'IS'] },
                    { text: 'LIFE USED TO BE EASY', translation: 'La vida solía ser fácil', distractors: ['WAS', 'USE'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Past ↔ Present habits',
                instruction: 'Match the past habit with the present situation!',
                pairs: [
                    { emoji: 'Used to smoke', word: 'Doesn\'t smoke now' },
                    { emoji: 'Used to live in NY', word: 'Lives in Paris now' },
                    { emoji: 'Used to have long hair', word: 'Has short hair now' },
                    { emoji: 'Used to be shy', word: 'Is outgoing now' },
                    { emoji: 'Used to play football', word: 'Plays tennis now' },
                    { emoji: 'Used to eat meat', word: 'Is a vegetarian now' },
                    { emoji: 'Used to be a student', word: 'Is a doctor now' },
                    { emoji: 'Used to drive a car', word: 'Rides a bike now' },
                    { emoji: 'Used to speak French', word: 'Speaks Spanish now' },
                    { emoji: 'Used to go to bed late', word: 'Wakes up early now' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Habits and States ☠️',
                instruction: 'Guess the grammar word!',
                words: [
                    { word: 'INFINITIVE', hint: 'The form of verb after "used to"' },
                    { word: 'HABITS', hint: 'Things you did regularly' },
                    { word: 'PAST', hint: 'The time when "used to" actions happened' },
                    { word: 'NEGATIVE', hint: 'Did not use to' },
                    { word: 'REPEATED', hint: 'Something done many times' },
                    { word: 'STATES', hint: 'Something that was true (e.g., being shy)' },
                    { word: 'THOSE', hint: 'Demonstrative — wait, NO. REGULARLY' },
                    { word: 'ROUTINE', hint: 'Daily pattern of actions' },
                    { word: 'PREVIOUS', hint: 'Before now' },
                    { word: 'STOPPED', hint: 'Something you don\'t do anymore' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 2]);
        console.log('✅ Successfully updated A2 Topic 2 — Used to + infinitive');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
