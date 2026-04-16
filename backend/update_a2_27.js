require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Modals for Prohibition',
                instruction: 'What are you NOT allowed to do?',
                questions: [
                    {
                        question: 'Which modal verb shows strong prohibition?',
                        options: ['Shouldn\'t', 'Mustn\'t / Must not', 'Couldn\'t', 'Won\'t'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which phrase means you don\'t have permission?',
                        options: ['Are allowed to', 'Are not allowed to', 'Must to', 'Can to'],
                        correctIdx: 1
                    },
                    {
                        question: '"You ____ smoke here. It is illegal."',
                        options: ['mustn\'t', 'shouldn\'t (advice)', 'don\'t have to (optional)', 'can\'t'],
                        correctIdx: 0
                    },
                    {
                        question: 'What does "mustn\'t" mean?',
                        options: ['It is a bad idea', 'It is forbidden / against the law', 'You have a choice', 'You did it in the past'],
                        correctIdx: 1
                    },
                    {
                        question: '"I ____ come to the party. My parents won\'t let me."',
                        options: ['can\'t', 'mustn\'t', 'don\'t have to', 'shouldn\'t'],
                        correctIdx: 0
                    },
                    {
                        question: 'If something is NOT NECESSARY, we use:',
                        options: ['Mustn\'t', 'Don\'t have to', 'Shouldn\'t', 'Can\'t'],
                        correctIdx: 1
                    },
                    {
                        question: 'If something is FORBIDDEN, we use:',
                        options: ['Don\'t have to', 'Mustn\'t', 'Shouldn\'t', 'Won\'t'],
                        correctIdx: 1
                    },
                    {
                        question: '"Students ____ use phones during the exam."',
                        options: ['don\'t have to', 'are not allowed to', 'mustn\'t', 'Both B and C'],
                        correctIdx: 3
                    },
                    {
                        question: 'Which provides ADVICE rather than a strict rule?',
                        options: ['Mustn\'t', 'Shouldn\'t', 'Can\'t', 'Not allowed to'],
                        correctIdx: 1
                    },
                    {
                        question: '"Wait! You ____ touch that! It\'s dangerous!"',
                        options: ['mustn\'t', 'had better not', 'can\'t', 'All of the above'],
                        correctIdx: 3
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Prohibition Power',
                instruction: 'Type: mustn\'t, can\'t, or not allowed to',
                sentences: [
                    { text: 'Drivers ___ park here. (prohibido)', answer: 'mustn\'t' },
                    { text: 'I ___ swim. I never learned how. (incapacidad)', answer: 'can\'t' },
                    { text: 'You are ___ to use your phone in the library.', answer: 'not allowed to' },
                    { text: 'You ___ play music so loud at night.', answer: 'mustn\'t' },
                    { text: 'He ___ come today. He is sick.', answer: 'can\'t' },
                    { text: 'We are ___ to wear jeans to the office.', answer: 'not allowed to' },
                    { text: 'She ___ speak English well yet.', answer: 'can\'t' },
                    { text: 'You ___ cross the road on a red light.', answer: 'mustn\'t' },
                    { text: 'Visitors are ___ to feed the animals.', answer: 'not allowed to' },
                    { text: 'I ___ find my wallet anywhere!', answer: 'can\'t' },
                    { text: 'You ___ forget to pay the bill.', answer: 'mustn\'t' },
                    { text: 'Employees are ___ to smoke inside.', answer: 'not allowed to' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Safety and Rules',
                instruction: 'Build correct sentences about prohibition',
                sentences: [
                    { text: 'YOU MUST NOT SMOKE HERE', translation: 'No debes fumar aquí', distractors: ['ARE', 'CAN'] },
                    { text: 'I CANNOT SEE ANYTHING NOW', translation: 'No puedo ver nada ahora', distractors: ['MUST', 'WAS'] },
                    { text: 'YOU ARE NOT ALLOWED TO', translation: 'No tienes permitido...', distractors: ['MUST', 'DO'] },
                    { text: 'STUDENTS MUST NOT TALK IN', translation: 'Los estudiantes no deben hablar en...', distractors: ['ARE', 'DONT'] },
                    { text: 'WE CANNOT GO OUT TONIGHT', translation: 'No podemos salir esta noche', distractors: ['MUST', 'ARE'] },
                    { text: 'HE IS NOT ALLOWED ACCESS', translation: 'Él no tiene acceso permitido', distractors: ['MUST', 'WAITED'] },
                    { text: 'YOU MUST NOT TOUCH THAT', translation: 'No debes tocar eso', distractors: ['DO', 'ARE'] },
                    { text: 'I CANT FIND MY PHONE', translation: 'No encuentro mi teléfono', distractors: ['MUST', 'WAS'] },
                    { text: 'THEY MUST NOT BE LATE', translation: 'Ellos no deben llegar tarde', distractors: ['ARE', 'DONT'] },
                    { text: 'YOU CANT RUN NEAR SWIMMING', translation: 'No puedes correr cerca de la piscina', distractors: ['MUST', 'ARE'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Social Rules Match',
                instruction: 'Match the sign with the correct prohibition!',
                pairs: [
                    { emoji: '🚭', word: 'Mustn\'t smoke' },
                    { emoji: '🔇', word: 'Must be quiet' },
                    { emoji: '🚯', word: 'Mustn\'t litter' },
                    { emoji: '⛔', word: 'Can\'t entry' },
                    { emoji: '📷🚫', word: 'Not allowed to photo' },
                    { emoji: '🍔🚫', word: 'Not allowed to eat' },
                    { emoji: '🐶🚫', word: 'No dogs' },
                    { emoji: '📵', word: 'No phones' },
                    { emoji: '🏃🚫', word: 'No running' },
                    { emoji: '🚳', word: 'No bikes' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Forbidden Words ☠️',
                instruction: 'Guess the word!',
                words: [
                    { word: 'FORBIDDEN', hint: 'Not allowed by order' },
                    { word: 'PROHIBITED', hint: 'The same as forbidden' },
                    { word: 'MUST NOT', hint: 'Strong modal for prohibition' },
                    { word: 'CANNOT', hint: 'Modal for inability or lack of permission' },
                    { word: 'REGULATIONS', hint: 'Set of rules' },
                    { word: 'ILLEGAL', hint: 'Against the law' },
                    { word: 'PERMISSION', hint: 'Allowing to do something' },
                    { word: 'RESTRICTION', hint: 'A limit on what you can do' },
                    { word: 'PENALTY', hint: 'Punishment for breaking a rule' },
                    { word: 'COMPLIANCE', hint: 'Following the rules' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 27]);
        console.log('✅ Successfully updated A2 Topic 27 — Modals for Prohibition');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
