require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Modal Verbs',
                instruction: 'Can you use these helping verbs correctly?',
                questions: [
                    {
                        question: 'Which modal verb shows ABILITY?',
                        options: ['Should', 'Can', 'Must', 'Might'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which modal verb is used for ADVICE?',
                        options: ['Must', 'Can', 'Should', 'Might'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which modal verb shows OBLIGATION (strong)?',
                        options: ['Must', 'Should', 'Can', 'Could'],
                        correctIdx: 0
                    },
                    {
                        question: 'Which is correct: "He ____ swim well."',
                        options: ['can to', 'cans', 'can', 'is can'],
                        correctIdx: 2
                    },
                    {
                        question: 'Negative form of "Can"?',
                        options: ['Cann\'t', 'Can not / Cannot', 'Don\'t can', 'Not can'],
                        correctIdx: 1
                    },
                    {
                        question: '"You ____ eat too much sugar." — Which is advice?',
                        options: ['should not', 'must not', 'can not', 'might not'],
                        correctIdx: 0
                    },
                    {
                        question: 'What comes after a modal verb?',
                        options: ['Verb + -ing', 'Verb + -ed', 'Base form of the verb', 'To + verb'],
                        correctIdx: 2
                    },
                    {
                        question: 'Can we say "I must to go"?',
                        options: ['Yes', 'No (I must go)', 'Only in formal English', 'Only in questions'],
                        correctIdx: 1
                    },
                    {
                        question: '"____ I help you?"',
                        options: ['Should', 'Can', 'Must', 'Mustn\'t'],
                        correctIdx: 1
                    },
                    {
                        question: '"It ____ rain later." (Possibility)',
                        options: ['must', 'might', 'should', 'can'],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Can / Should / Must',
                instruction: 'Type the correct modal verb for the context',
                sentences: [
                    { text: 'I ___ play the guitar very well. (habilidad)', answer: 'can' },
                    { text: 'You ___ see a doctor if you are sick. (consejo)', answer: 'should' },
                    { text: 'We ___ wear a seatbelt in the car. (obligación)', answer: 'must' },
                    { text: '___ you help me with this box? (petición)', answer: 'Can' },
                    { text: 'He ___ not smoke here. It is forbidden.', answer: 'must' },
                    { text: 'They ___ study more for the exam. (recomendación)', answer: 'should' },
                    { text: 'She ___ speak three languages. (habilidad)', answer: 'can' },
                    { text: 'You ___ be quiet in the library. (regla)', answer: 'must' },
                    { text: '___ I open the window? (permiso/petición)', answer: 'Can' },
                    { text: 'We ___ listen to our parents. (buena idea)', answer: 'should' },
                    { text: 'He ___ run very fast.', answer: 'can' },
                    { text: 'I ___ go now, I am late! (necesidad)', answer: 'must' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Modal Phrases',
                instruction: 'Build correct sentences with modal verbs',
                sentences: [
                    { text: 'I CAN SPEAK ENGLISH WELL', translation: 'Puedo hablar inglés bien', distractors: ['TO', 'SPEAKS'] },
                    { text: 'YOU SHOULD DO YOUR HOMEWORK', translation: 'Deberías hacer tu tarea', distractors: ['MUST', 'DOING'] },
                    { text: 'WE MUST STOP AT RED', translation: 'Debemos parar en rojo', distractors: ['SHOULD', 'STOPS'] },
                    { text: 'CAN YOU OPEN THE DOOR', translation: '¿Puedes abrir la puerta?', distractors: ['DO', 'OPENS'] },
                    { text: 'SHE SHOULD NOT EAT THAT', translation: 'Ella no debería comer eso', distractors: ['DOES', 'EATING'] },
                    { text: 'THEY CANNOT SWIM IN WINTER', translation: 'Ellos no pueden nadar en invierno', distractors: ['ARE', 'DONT'] },
                    { text: 'YOU MUST BE CAREFUL HERE', translation: 'Debes tener cuidado aquí', distractors: ['ARE', 'WAS'] },
                    { text: 'I SHOULD SLEEP MORE NOW', translation: 'Debería dormir más ahora', distractors: ['AM', 'SLEEPS'] },
                    { text: 'HE CAN PLAY THE PIANO', translation: 'Él sabe tocar el piano', distractors: ['IS', 'PLAYS'] },
                    { text: 'WE SHOULD GO HOME SOON', translation: 'Deberíamos ir a casa pronto', distractors: ['ARE', 'GOES'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Modals & Functions',
                instruction: 'Match the modal verb with its function!',
                pairs: [
                    { emoji: 'Can', word: 'Ability' },
                    { emoji: 'Should', word: 'Advice' },
                    { emoji: 'Must', word: 'Obligation' },
                    { emoji: 'Might', word: 'Possibility' },
                    { emoji: 'Can\'t', word: 'Inability' },
                    { emoji: 'Shouldn\'t', word: 'Bad idea' },
                    { emoji: 'Mustn\'t', word: 'Prohibition' },
                    { emoji: 'Could', word: 'Past ability' },
                    { emoji: 'May', word: 'Permission' },
                    { emoji: 'Can I?', word: 'Request' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Helping Verbs ☠️',
                instruction: 'Guess the modal verb or related term!',
                words: [
                    { word: 'ABILITY', hint: 'What "can" describes' },
                    { word: 'ADVICE', hint: 'What "should" provides' },
                    { word: 'OBLIGATION', hint: 'What "must" shows' },
                    { word: 'PERMISSION', hint: 'Asking if you "can"' },
                    { word: 'HELPING', hint: 'Another name for modal verbs' },
                    { word: 'INFINITIVE', hint: 'The form of the verb after the modal' },
                    { word: 'POSSIBILITY', hint: 'What "might" tells us' },
                    { word: 'PROHIBITION', hint: 'What "must not" means' },
                    { word: 'CANNOT', hint: 'The long form of can\'t' },
                    { word: 'REQUEST', hint: 'Asking for something nicely' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A1', 27]);
        console.log('✅ Successfully updated A1 Topic 27 — Modal Verbs');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
