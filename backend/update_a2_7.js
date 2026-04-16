require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Adverbs of Time',
                instruction: 'When do these things happen?',
                questions: [
                    {
                        question: 'Which adverb means "not long ago"?',
                        options: ['Recently / Lately', 'Soon', 'Afterwards', 'Currently'],
                        correctIdx: 0
                    },
                    {
                        question: 'Which adverb means "in a short time from now"?',
                        options: ['Lately', 'Soon', 'Before', 'Already'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which adverb means "later than something else"?',
                        options: ['Afterwards / Later', 'Previously', 'Now', 'Yet'],
                        correctIdx: 0
                    },
                    {
                        question: 'Which word means "at the same time"?',
                        options: ['Simultaneously', 'Soon', 'Yesterday', 'Already'],
                        correctIdx: 0
                    },
                    {
                        question: '"I have been busy ____." — Which fits?',
                        options: ['recently', 'afterwards', 'soon', 'before'],
                        correctIdx: 0
                    },
                    {
                        question: 'Which word means "happening right now"?',
                        options: ['Currently', 'Previously', 'Later', 'Then'],
                        correctIdx: 0
                    },
                    {
                        question: 'Opposite of "afterwards"?',
                        options: ['Beforehand / Previously', 'Soon', 'Later', 'Recently'],
                        correctIdx: 0
                    },
                    {
                        question: '"____ I went to bed, I brushed my teeth."',
                        options: ['Before', 'After', 'Soon', 'Lately'],
                        correctIdx: 0
                    },
                    {
                        question: '"I will see you ____." (en un rato)',
                        options: ['later', 'before', 'already', 'since'],
                        correctIdx: 0
                    },
                    {
                        question: 'Which word means "something as a result"?',
                        options: ['Then / Consequently', 'Soon', 'Lately', 'Now'],
                        correctIdx: 0
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Using Time Adverbs',
                instruction: 'Type the correct adverb of time (recently, soon, later, before, etc.)',
                sentences: [
                    { text: 'I haven\'t seen him ___ (últimamente).', answer: 'recently' },
                    { text: 'We are going on holiday ___ (pronto).', answer: 'soon' },
                    { text: 'Call me ___ when you have more time (luego).', answer: 'later' },
                    { text: 'I have never been there ___ (antes).', answer: 'before' },
                    { text: 'We ate dinner and ___ we went for a walk (después).', answer: 'afterwards' },
                    { text: 'He is ___ working on a new project (actualmente).', answer: 'currently' },
                    { text: 'I had met him ___ at a conference (previamente).', answer: 'previously' },
                    { text: 'Finish your work ___ you go out (antes de).', answer: 'before' },
                    { text: 'The movie is ___ to start (a punto de).', answer: 'about' },
                    { text: 'I have ___ finished my exam (ya).', answer: 'already' },
                    { text: 'I will be back ___ (en un momento).', answer: 'shortly' },
                    { text: 'It has been raining a lot ___ (últimamente).', answer: 'lately' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Time markers',
                instruction: 'Build correct sentences using time adverbs',
                sentences: [
                    { text: 'I RECENTLY BOUGHT A COMPUTER', translation: 'Recientemente compré una computadora', distractors: ['ARE', 'LATER'] },
                    { text: 'WE WILL BE THERE SOON', translation: 'Estaremos allí pronto', distractors: ['BEFORE', 'ALREADY'] },
                    { text: 'FINISH YOUR HOMEWORK BEFORE DINNER', translation: 'Termina tu tarea antes de la cena', distractors: ['AFTER', 'SOON'] },
                    { text: 'THEY ARE CURRENTLY IN SPAIN', translation: 'Actualmente están en España', distractors: ['BEFORE', 'WAS'] },
                    { text: 'I HAVE ALREADY EATEN LUNCH', translation: 'Ya he almorzado', distractors: ['YET', 'LATER'] },
                    { text: 'CALL ME LATER THIS EVENING', translation: 'Llámame más tarde esta noche', distractors: ['BEFORE', 'SOON'] },
                    { text: 'SHE WAS PREVIOUSLY A NURSE', translation: 'Previamente fue enfermera', distractors: ['ARE', 'SOON'] },
                    { text: 'WE WENT SHOPPING AFTERWARDS', translation: 'Fuimos de compras después', distractors: ['BEFORE', 'LATER'] },
                    { text: 'I HAD NEVER SEEN IT BEFORE', translation: 'Nunca lo había visto antes', distractors: ['AFTER', 'NOW'] },
                    { text: 'THE BUS IS DUE SHORTLY', translation: 'El autobús llega en breve', distractors: ['LATE', 'LONG'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Time Adverb Meanings',
                instruction: 'Match the adverb with its meaning!',
                pairs: [
                    { emoji: 'Recently', word: 'Not long ago' },
                    { emoji: 'Soon', word: 'In a short time' },
                    { emoji: 'Later', word: 'After now' },
                    { emoji: 'Before', word: 'Earlier than' },
                    { emoji: 'Currently', word: 'At this moment' },
                    { emoji: 'Already', word: 'Sooner than expected' },
                    { emoji: 'Yet', word: 'Until now' },
                    { emoji: 'Now', word: 'At present' },
                    { emoji: 'Then', word: 'At that time' },
                    { emoji: 'Lately', word: 'Recently' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: When? ☠️',
                instruction: 'Guess the time word!',
                words: [
                    { word: 'PREVIOUSLY', hint: 'Coming before in time' },
                    { word: 'AFTERWARDS', hint: 'At a later time' },
                    { word: 'CURRENTLY', hint: 'At the present time' },
                    { word: 'IMMEDIATELY', hint: 'Right now / without delay' },
                    { word: 'SHORTLY', hint: 'Soon / in a little while' },
                    { word: 'RECENTLY', hint: 'A short time ago' },
                    { word: 'EVENTUALLY', hint: 'In the end / after a long time' },
                    { word: 'SUDDENLY', hint: 'Quickly and unexpectedly' },
                    { word: 'QUICKLY', hint: 'Fast / at high speed' },
                    { word: 'SLOWLY', hint: 'Not fast / at low speed' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 7]);
        console.log('✅ Successfully updated A2 Topic 7 — Adverbs of Time');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
