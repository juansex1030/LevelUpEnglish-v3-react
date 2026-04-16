require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Simple Past',
                instruction: 'Test your knowledge of the past tense!',
                questions: [
                    {
                        question: 'What is the regular ending for the Simple Past?',
                        options: ['-ing', '-s', '-ed', '-en'],
                        correctIdx: 2
                    },
                    {
                        question: 'What is the past form of "Go"?',
                        options: ['Goed', 'Going', 'Went', 'Goned'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which auxiliary do we use in negatives and questions?',
                        options: ['Do', 'Does', 'Did', 'Is'],
                        correctIdx: 2
                    },
                    {
                        question: 'What is the past form of "Buy"?',
                        options: ['Buyed', 'Bought', 'Brought', 'Buying'],
                        correctIdx: 1
                    },
                    {
                        question: 'What is the past form of "Eat"?',
                        options: ['Eated', 'Ate', 'Eating', 'Eats'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which of these is CORRECT for a negative sentence?',
                        options: [
                            'I didn\'t went.',
                            'I didn\'t go.',
                            'I not go.',
                            'I goed not.'
                        ],
                        correctIdx: 1
                    },
                    {
                        question: 'How do you say "Yesterday" in Spanish?',
                        options: ['Hoy', 'Mañana', 'Ayer', 'Hoy mismo'],
                        correctIdx: 2
                    },
                    {
                        question: 'What is the past form of "Be" for "I"?',
                        options: ['Was', 'Were', 'Am', 'Been'],
                        correctIdx: 0
                    },
                    {
                        question: 'What is the past form of "Be" for "You"?',
                        options: ['Was', 'Were', 'Are', 'Been'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which word usually marks the past?',
                        options: ['Now', 'Often', 'Ago', 'Tomorrow'],
                        correctIdx: 2
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Regular and Irregular Past',
                instruction: 'Type the correct Simple Past form of the verb in parentheses',
                sentences: [
                    { text: 'Yesterday, I ___ (watch) a movie.', answer: 'watched' },
                    { text: 'Last week, we ___ (go) to the beach.', answer: 'went' },
                    { text: 'She ___ (buy) a new car yesterday.', answer: 'bought' },
                    { text: 'They ___ (not / see) the accident.', answer: 'did not see' },
                    { text: 'I ___ (eat) pizza for dinner last night.', answer: 'ate' },
                    { text: 'My friend ___ (visit) me on Sunday.', answer: 'visited' },
                    { text: '___ you (enjoy) the party? (enjoy)', answer: 'Did enjoy' },
                    { text: 'He ___ (write) a letter to his parents.', answer: 'wrote' },
                    { text: 'We ___ (not / have) any money.', answer: 'did not have' },
                    { text: 'The teacher ___ (explain) the lesson clearly.', answer: 'explained' },
                    { text: 'I ___ (be) very happy yesterday.', answer: 'was' },
                    { text: 'They ___ (be) at the park an hour ago.', answer: 'were' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Past Events',
                instruction: 'Rearrange the words to form correct past tense sentences',
                sentences: [
                    { text: 'I WENT TO THE CINEMA YESTERDAY', translation: 'Fui al cine ayer', distractors: ['GO', 'GOED'] },
                    { text: 'DID YOU SEE THAT MOVIE', translation: '¿Viste esa película?', distractors: ['DO', 'SAW'] },
                    { text: 'SHE DID NOT COOK DINNER', translation: 'Ella no cocinó la cena', distractors: ['COOKED', 'DOES'] },
                    { text: 'WE PLAYED FOOTBALL LAST SUNDAY', translation: 'Jugamos fútbol el domingo pasado', distractors: ['PLAY', 'ARE'] },
                    { text: 'HE WAS TIRED AFTER WORK', translation: 'Él estaba cansado después del trabajo', distractors: ['IS', 'WERE'] },
                    { text: 'THEY WERE AT THE BEACH', translation: 'Ellos estaban en la playa', distractors: ['ARE', 'WAS'] },
                    { text: 'WHO DID YOU MEET THERE', translation: '¿A quién conociste allí?', distractors: ['DO', 'MET'] },
                    { text: 'I BOUGHT A NEW PHONE', translation: 'Compré un teléfono nuevo', distractors: ['BUY', 'BUYED'] },
                    { text: 'IT RAINED A LOT LAST WEEK', translation: 'Llovió mucho la semana pasada', distractors: ['RAIN', 'RAINS'] },
                    { text: 'WHERE WERE YOU LAST NIGHT', translation: '¿Dónde estuviste anoche?', distractors: ['ARE', 'WAS'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Present ↔ Past Conjugation',
                instruction: 'Match the present verb with its irregular past form!',
                pairs: [
                    { emoji: 'Go', word: 'Went' },
                    { emoji: 'Buy', word: 'Bought' },
                    { emoji: 'Eat', word: 'Ate' },
                    { emoji: 'See', word: 'Saw' },
                    { emoji: 'Have', word: 'Had' },
                    { emoji: 'Do', word: 'Did' },
                    { emoji: 'Take', word: 'Took' },
                    { emoji: 'Come', word: 'Came' },
                    { emoji: 'Write', word: 'Wrote' },
                    { emoji: 'Speak', word: 'Spoke' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Past Tense Words ☠️',
                instruction: 'Guess the word!',
                words: [
                    { word: 'YESTERDAY', hint: 'The day before today' },
                    { word: 'REGULAR', hint: 'Verbs that end in -ed' },
                    { word: 'IRREGULAR', hint: 'Verbs that change completely' },
                    { word: 'FINISHED', hint: 'When an action is complete' },
                    { word: 'HAPPENED', hint: 'Past tense of happen' },
                    { word: 'WORKED', hint: 'Past tense of work' },
                    { word: 'STUDIED', hint: 'Past tense of study' },
                    { word: 'VISITED', hint: 'Past tense of visit' },
                    { word: 'PLAYED', hint: 'Past tense of play' },
                    { word: 'ENJOYED', hint: 'Past tense of enjoy' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A1', 19]);
        console.log('✅ Successfully updated A1 Topic 19 — Simple Past');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
