require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Already, Yet, Since & For',
                instruction: 'Can you use these time markers correctly?',
                questions: [
                    {
                        question: 'We use "since" with:',
                        options: ['A duration (e.g., 3 hours)', 'A point in time (e.g., 2010)', 'Future times', 'Yesterday only'],
                        correctIdx: 1
                    },
                    {
                        question: 'We use "for" with:',
                        options: ['A point in time', 'A period of time (e.g., 5 years)', 'Current actions', 'Specific dates'],
                        correctIdx: 1
                    },
                    {
                        question: 'Usually, "yet" goes at the ___ of a sentence.',
                        options: ['Beginning', 'Middle', 'End', 'Anywhere'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which word means something happened "sooner than expected"?',
                        options: ['Yet', 'Already', 'Since', 'For'],
                        correctIdx: 1
                    },
                    {
                        question: '"____ have you been here?" — What is the question?',
                        options: ['How long', 'How many', 'What', 'Where'],
                        correctIdx: 0
                    },
                    {
                        question: '"I have lived here ____ five months."',
                        options: ['since', 'for', 'already', 'yet'],
                        correctIdx: 1
                    },
                    {
                        question: '"I have lived here ____ January."',
                        options: ['since', 'for', 'already', 'yet'],
                        correctIdx: 0
                    },
                    {
                        question: '"I haven\'t finished my work ____."',
                        options: ['already', 'since', 'for', 'yet'],
                        correctIdx: 3
                    },
                    {
                        question: '"I have ____ seen that movie three times."',
                        options: ['yet', 'already', 'since', 'for'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which is correct for 10 years?',
                        options: ['Since 10 years', 'For 10 years', 'Already 10 years', 'Yet 10 years'],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Choose the right Marker',
                instruction: 'Type: already, yet, since, or for',
                sentences: [
                    { text: 'I have been a teacher ___ 2012.', answer: 'since' },
                    { text: 'We have lived in this town ___ ten years.', answer: 'for' },
                    { text: 'Have you finished your dinner ___?', answer: 'yet' },
                    { text: 'I have ___ seen this episode.', answer: 'already' },
                    { text: 'She hasn\'t called me ___.', answer: 'yet' },
                    { text: 'They have been married ___ a long time.', answer: 'for' },
                    { text: 'I have known him ___ we were kids.', answer: 'since' },
                    { text: 'I\'ve ___ done the laundry.', answer: 'already' },
                    { text: 'We haven\'t seen that movie ___.', answer: 'yet' },
                    { text: 'He has worked here ___ six months.', answer: 'for' },
                    { text: 'It hasn\'t rained ___ last month.', answer: 'since' },
                    { text: 'I have ___ sent the email.', answer: 'already' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Usage of Time Markers',
                instruction: 'Build correct sentences with already, yet, since, and for',
                sentences: [
                    { text: 'I HAVE LIVED HERE FOR TEN YEARS', translation: 'Vivo aquí desde hace diez años', distractors: ['SINCE', 'FORA'] },
                    { text: 'SHE HAS NOT ARRIVED YET', translation: 'Ella no ha llegado todavía', distractors: ['ALREADY', 'SINCE'] },
                    { text: 'I HAVE ALREADY EATEN DINNER', translation: 'Ya he cenado', distractors: ['YET', 'SINCE'] },
                    { text: 'WE HAVE BEEN FRIENDS SINCE SCHOOL', translation: 'Somos amigos desde la escuela', distractors: ['FOR', 'ALREADY'] },
                    { text: 'HAVE YOU SEEN HIM YET', translation: '¿Lo has visto ya?', distractors: ['ALREADY', 'FOR'] },
                    { text: 'THEY HAVE WORKED HERE FOR MONTHS', translation: 'Han trabajado aquí durante meses', distractors: ['SINCE', 'YET'] },
                    { text: 'I HAVE NOT FINISHED YET', translation: 'No he terminado todavía', distractors: ['ALREADY', 'SINCE'] },
                    { text: 'SHE HAS SINCE MOVED TO LONDON', translation: 'Desde entonces se ha mudado a Londres', distractors: ['FOR', 'YET'] },
                    { text: 'WE HAVE ALREADY BOOKED THE TICKETS', translation: 'Ya hemos reservado los boletos', distractors: ['YET', 'SINCE'] },
                    { text: 'SINCE WHEN HAVE YOU BEEN HERE', translation: '¿Desde cuándo estás aquí?', distractors: ['FOR', 'HOW'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Points vs Periods',
                instruction: 'Match the time with the correct word (Since or For)!',
                pairs: [
                    { emoji: '2010', word: 'Since' },
                    { emoji: 'Last Monday', word: 'Since' },
                    { emoji: 'I was a child', word: 'Since' },
                    { emoji: 'Christmas', word: 'Since' },
                    { emoji: '9 o\'clock', word: 'Since' },
                    { emoji: 'Two hours', word: 'For' },
                    { emoji: 'Five days', word: 'For' },
                    { emoji: 'A long time', word: 'For' },
                    { emoji: 'Three weeks', word: 'For' },
                    { emoji: 'Many years', word: 'For' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Time Markers ☠️',
                instruction: 'Guess the grammar word!',
                words: [
                    { word: 'ALREADY', hint: 'Something happened before now' },
                    { word: 'SINCE', hint: 'Talks about the start of a period' },
                    { word: 'YET', hint: 'Something hasn\'t happened (usually negative)' },
                    { word: 'DURATION', hint: 'What "for" talks about' },
                    { word: 'EXPERIENCE', hint: 'What Present Perfect describes' },
                    { word: 'INDICATOR', hint: 'A word that points to a tense' },
                    { word: 'NEGATIVE', hint: '"Yet" is often used in ___ sentences' },
                    { word: 'QUESTION', hint: '"Yet" is also used in ___' },
                    { word: 'FINISHED', hint: '"Already" shows a ___ action' },
                    { word: 'PREPOSITION', hint: '"For" and "since" can be ___' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A1', 25]);
        console.log('✅ Successfully updated A1 Topic 25 — Already, Yet, Since & For');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
