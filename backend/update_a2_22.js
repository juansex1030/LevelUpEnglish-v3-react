require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Indefinite Pronouns',
                instruction: 'Can you choose the right pronoun?',
                questions: [
                    {
                        question: 'Which pronoun refers to a SPECIFIC (but unnamed) person?',
                        options: ['Someone / Somebody', 'Anyone / Anybody', 'No one / Nobody', 'Everyone'],
                        correctIdx: 0
                    },
                    {
                        question: 'Which pronoun is used in NEGATIVES and QUESTIONS?',
                        options: ['Someone', 'Anyone', 'No one', 'Somewhere'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which pronoun means "not a single thing"?',
                        options: ['Nothing', 'Anything', 'Something', 'Everything'],
                        correctIdx: 0
                    },
                    {
                        question: 'Which pronoun refers to ALL people?',
                        options: ['Someone', 'Anyone', 'Everyone / Everybody', 'No one'],
                        correctIdx: 2
                    },
                    {
                        question: '"Is there ____ at the door?"',
                        options: ['someone', 'anyone', 'anything', 'somewhere'],
                        correctIdx: 1
                    },
                    {
                        question: '"I have ____ to tell you." (Positive)',
                        options: ['something', 'anything', 'nothing', 'everything'],
                        correctIdx: 0
                    },
                    {
                        question: '"I didn\'t see ____ in the park."',
                        options: ['someone', 'anyone', 'no one', 'anything'],
                        correctIdx: 1
                    },
                    {
                        question: '"____ is ready for the party." (Todo)',
                        options: ['Something', 'Anything', 'Everything', 'Nothing'],
                        correctIdx: 2
                    },
                    {
                        question: '"I want to go ____ quiet." (Lugar)',
                        options: ['somewhere', 'anywhere', 'nowhere', 'everywhere'],
                        correctIdx: 0
                    },
                    {
                        question: 'Which pronoun means "not a single place"?',
                        options: ['Anywhere', 'Nowhere', 'Somewhere', 'Everywhere'],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Someone, Anything, Nowhere...',
                instruction: 'Type the correct indefinite pronoun',
                sentences: [
                    { text: 'I don\'t have ___ to wear. (negative thing)', answer: 'anything' },
                    { text: 'Is there ___ who can help me? (question person)', answer: 'anyone' },
                    { text: '___ stole my wallet! (positive person)', answer: 'Someone' },
                    { text: 'There is ___ to do in this town. (negative thing)', answer: 'nothing' },
                    { text: 'Did you go ___ interesting on holiday? (lugar)', answer: 'anywhere' },
                    { text: 'I looked ___ for my keys. (todos los lugares)', answer: 'everywhere' },
                    { text: 'I found ___ in the box. (empty)', answer: 'nothing' },
                    { text: '___ knows the answer. (Everyone knows / Nobody knows...) Let\'s use: ___ was there. (positive)', answer: 'Somebody' },
                    { text: 'I didn\'t buy ___ at the shop.', answer: 'anything' },
                    { text: 'Let\'s find ___ to sit. (lugar positivo)', answer: 'somewhere' },
                    { text: '___ is perfect. (Todo)', answer: 'Everything' },
                    { text: '___ is happy today. (Todos)', answer: 'Everyone' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Indefinite Phrases',
                instruction: 'Order the words to build correct sentences',
                sentences: [
                    { text: 'I HAVE NOTHING TO DO', translation: 'No tengo nada que hacer', distractors: ['ANYTHING', 'ARE'] },
                    { text: 'IS THERE ANYONE AT HOME', translation: '¿Hay alguien en casa?', distractors: ['SOMEONE', 'SOMEBODY'] },
                    { text: 'EVERYONE IS HAPPY TODAY NOW', translation: 'Todos están felices hoy ahora', distractors: ['EVERYBODY', 'ARE'] },
                    { text: 'I WANT TO GO SOMEWHERE', translation: 'Quiero ir a algún lugar', distractors: ['ANYWHERE', 'NOWHERE'] },
                    { text: 'DID YOU SEE ANYTHING ELSE', translation: '¿Viste algo más?', distractors: ['SOMETHING', 'DO'] },
                    { text: 'SOMEBODY TOLD ME A SECRET', translation: 'Alguien me contó un secreto', distractors: ['ANYBODY', 'NOBODY'] },
                    { text: 'EVERYTHING WILL BE ALL RIGHT', translation: 'Todo estará bien', distractors: ['SOMETHING', 'ARE'] },
                    { text: 'I SEARCHED EVERYWHERE FOR KEYS', translation: 'Busqué por todas partes mis llaves', distractors: ['SOMEWHERE', 'DID'] },
                    { text: 'THERE IS NO ONE HERE', translation: 'No hay nadie aquí', distractors: ['ANYONE', 'ISNT'] },
                    { text: 'CAN ANYBODY HELP ME NOW', translation: '¿Puede alguien ayudarme ahora?', distractors: ['SOMEBODY', 'ARE'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Pronoun Categories',
                instruction: 'Match the pronoun with its category!',
                pairs: [
                    { emoji: 'Someone', word: 'Person (+)' },
                    { emoji: 'Anyone', word: 'Person (?/-)' },
                    { emoji: 'Everyone', word: 'People (all)' },
                    { emoji: 'Something', word: 'Thing (+)' },
                    { emoji: 'Anything', word: 'Thing (?/-)' },
                    { emoji: 'Everything', word: 'Things (all)' },
                    { emoji: 'Somewhere', word: 'Place (+)' },
                    { emoji: 'Anywhere', word: 'Place (?/-)' },
                    { emoji: 'Everywhere', word: 'Places (all)' },
                    { emoji: 'Nothing', word: 'Thing (zero)' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Indefinite Words ☠️',
                instruction: 'Guess the pronoun!',
                words: [
                    { word: 'EVERYBODY', hint: 'The same as everyone' },
                    { word: 'SOMEWHERE', hint: 'A place you don\'t name' },
                    { word: 'ANYTHING', hint: 'Any one thing' },
                    { word: 'NOBODY', hint: 'No one' },
                    { word: 'SOMEONE', hint: 'One person' },
                    { word: 'EVERYWHERE', hint: 'All places' },
                    { word: 'ANYWHERE', hint: 'Any place' },
                    { word: 'NOTHING', hint: 'Zero things' },
                    { word: 'ANYONE', hint: 'Any person' },
                    { word: 'EVERTHING', hint: 'All things' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 22]);
        console.log('✅ Successfully updated A2 Topic 22 — Indefinite Pronouns');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
