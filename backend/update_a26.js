require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Describing People',
                instruction: 'Can you describe someone effectively in English?',
                questions: [
                    {
                        question: 'Which word describes a very TALL person?',
                        options: ['Short', 'Medium height', 'Lanky / Tall', 'Thin'],
                        correctIdx: 2
                    },
                    {
                        question: 'What is the opposite of "curly" hair?',
                        options: ['Wavy', 'Straight', 'Blonde', 'Short'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which verb do we use for EYES and HAIR?',
                        options: ['To be', 'To have', 'To do', 'To stay'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which verb do we use for HEIGHT and PERSONALITY?',
                        options: ['To have', 'To be', 'To live', 'To do'],
                        correctIdx: 1
                    },
                    {
                        question: 'A person who makes people laugh is...',
                        options: ['Serious', 'Funny', 'Kind', 'Smart'],
                        correctIdx: 1
                    },
                    {
                        question: 'A person who is good at learning things is...',
                        options: ['Quiet', 'Intelligent / Smart', 'Mean', 'Shy'],
                        correctIdx: 1
                    },
                    {
                        question: 'What does "fair hair" mean?',
                        options: ['Pelo justo', 'Pelo rubio / claro', 'Pelo oscuro', 'Pelo largo'],
                        correctIdx: 1
                    },
                    {
                        question: 'Someone who likes to talk to others is...',
                        options: ['Shy', 'Outgoing / Sociable', 'Quiet', 'Angry'],
                        correctIdx: 1
                    },
                    {
                        question: 'A person who doesn\'t talk much is...',
                        options: ['Noisy', 'Quiet / Silent', 'Loud', 'Friendly'],
                        correctIdx: 1
                    },
                    {
                        question: 'What is "beard" in Spanish?',
                        options: ['Bigote', 'Barba', 'Ceja', 'Pestaña'],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Adjectives & Verbs',
                instruction: 'Type the correct word to complete the description',
                sentences: [
                    { text: 'My sister ___ blue eyes. (has/is)', answer: 'has' },
                    { text: 'I ___ quite tall. (am/have)', answer: 'am' },
                    { text: 'He has ___ hair. (crespo/rizado)', answer: 'curly' },
                    { text: 'She is very ___ because she always helps people. (amable)', answer: 'kind' },
                    { text: 'My brother has a short ___ on his face. (barba)', answer: 'beard' },
                    { text: 'Your hair is so ___ today. (liso/recto)', answer: 'straight' },
                    { text: 'Are you ___? No, I am outgoing. (tímido)', answer: 'shy' },
                    { text: 'The teacher is very ___ with the students. (paciente)', answer: 'patient' },
                    { text: 'He has long ___ hair. (rubio)', answer: 'blonde' },
                    { text: 'They ___ very friendly neighbors. (are/have)', answer: 'are' },
                    { text: 'She ___ wearing glasses today.', answer: 'is' },
                    { text: 'My grandfather is ___ but very strong. (viejo/anciano)', answer: 'old' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Describe a Person',
                instruction: 'Build correct sentences describing people',
                sentences: [
                    { text: 'SHE HAS LONG BROWN HAIR', translation: 'Ella tiene el pelo largo y castaño', distractors: ['ARE', 'IS'] },
                    { text: 'HE IS VERY TALL AND THIN', translation: 'Él es muy alto y delgado', distractors: ['HAS', 'HAVE'] },
                    { text: 'MY BEST FRIEND IS FUNNY', translation: 'Mi mejor amigo es gracioso', distractors: ['ARE', 'HAS'] },
                    { text: 'DO YOU HAVE BLUE EYES', translation: '¿Tienes los ojos azules?', distractors: ['ARE', 'IS'] },
                    { text: 'SHE IS AN OUTGOING PERSON', translation: 'Ella es una persona extrovertida', distractors: ['A', 'THE'] },
                    { text: 'I AM NOT VERY SHY', translation: 'No soy muy tímido', distractors: ['HAVE', 'HAS'] },
                    { text: 'HE WEARS GLASSES FOR READING', translation: 'Él usa gafas para leer', distractors: ['IS', 'ARE'] },
                    { text: 'THEY ARE VERY KIND PEOPLE', translation: 'Ellos son personas muy amables', distractors: ['IS', 'HAVE'] },
                    { text: 'WHAT DOES SHE LOOK LIKE', translation: '¿Cómo es ella? (físicamente)', distractors: ['DO', 'IS'] },
                    { text: 'IS HE A SERIOUS MAN', translation: '¿Es él un hombre serio?', distractors: ['DOES', 'HAS'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Physical Traits',
                instruction: 'Match the trait with the emoji!',
                pairs: [
                    { emoji: '👓', word: 'Glasses' },
                    { emoji: '🧔', word: 'Beard' },
                    { emoji: '👀', word: 'Eyes' },
                    { emoji: '💇', word: 'Hair' },
                    { emoji: '📏', word: 'Tall' },
                    { emoji: '🤸', word: 'Thin' },
                    { emoji: '😊', word: 'Happy' },
                    { emoji: '🧠', word: 'Smart' },
                    { emoji: '🤝', word: 'Friendly' },
                    { emoji: '🤐', word: 'Shy' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Human Adjectives ☠️',
                instruction: 'Guess the adjective!',
                words: [
                    { word: 'BEAUTIFUL', hint: 'Very attractive' },
                    { word: 'FRIENDLY', hint: 'Kind and pleasant' },
                    { word: 'INTELLIGENT', hint: 'Smart' },
                    { word: 'OUTGOING', hint: 'Sociable and confident' },
                    { word: 'STRAIGHT', hint: 'Hair without curls' },
                    { word: 'PATIENT', hint: 'Able to wait without anger' },
                    { word: 'SERIOUS', hint: 'Not funny or joking' },
                    { word: 'GENEROUS', hint: 'Willing to give more' },
                    { word: 'CREATIVE', hint: 'Having good imaginations' },
                    { word: 'HONEST', hint: 'Always telling the truth' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A1', 26]);
        console.log('✅ Successfully updated A1 Topic 26 — Describing People');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
