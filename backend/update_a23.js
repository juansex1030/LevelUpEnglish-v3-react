require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Present Perfect',
                instruction: 'Have you learned the Present Perfect yet?',
                questions: [
                    {
                        question: 'What auxiliary do we use for the Present Perfect?',
                        options: ['Do / Does', 'Am / Is / Are', 'Have / Has', 'Did'],
                        correctIdx: 2
                    },
                    {
                        question: 'What form of the verb do we use?',
                        options: ['Base form', 'Past simple', 'Past participle', '-ing form'],
                        correctIdx: 2
                    },
                    {
                        question: 'What is the past participle of "Eat"?',
                        options: ['Eaten', 'Ate', 'Eating', 'Eated'],
                        correctIdx: 0
                    },
                    {
                        question: 'What is the past participle of "Go"?',
                        options: ['Goen', 'Went', 'Gone', 'Going'],
                        correctIdx: 2
                    },
                    {
                        question: '"She ____ never been to London."',
                        options: ['have', 'has', 'is', 'did'],
                        correctIdx: 1
                    },
                    {
                        question: '"Have you ____ finished?"',
                        options: ['ever', 'yet', 'just', 'already'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which of these is CORRECT?',
                        options: [
                            'I have saw the movie.',
                            'I have seen the movie.',
                            'I have see the movie.',
                            'I has seen the movie.'
                        ],
                        correctIdx: 1
                    },
                    {
                        question: 'We use the Present Perfect for:',
                        options: [
                            'Specific past times',
                            'Unspecified past times and experiences',
                            'Daily habits',
                            'Current actions'
                        ],
                        correctIdx: 1
                    },
                    {
                        question: 'Negative form of "I have eaten":',
                        options: [
                            'I haven\'t ate.',
                            'I haven\'t eaten.',
                            'I don\'t have eaten.',
                            'I has not eaten.'
                        ],
                        correctIdx: 1
                    },
                    {
                        question: 'Question form of "We have seen it":',
                        options: [
                            'Do we have seen it?',
                            'Have we seen it?',
                            'Are we seen it?',
                            'We have seen it?'
                        ],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Have/Has + Past Participle',
                instruction: 'Type the correct form of the verb in Present Perfect',
                sentences: [
                    { text: 'I ___ (be) to Paris three times.', answer: 'have been' },
                    { text: 'She ___ (already / do) her homework.', answer: 'has already done' },
                    { text: 'They ___ (not / see) the film yet.', answer: 'have not seen' },
                    { text: 'We ___ (live) in this house for ten years.', answer: 'have lived' },
                    { text: 'He ___ (lose) his passport.', answer: 'has lost' },
                    { text: '___ you ever (eat) sushi? (eat)', answer: 'Have eaten' },
                    { text: 'My parents ___ (travel) around the world.', answer: 'have traveled' },
                    { text: 'The teacher ___ (just / arrive).', answer: 'has just arrived' },
                    { text: 'I ___ (read) that book before.', answer: 'have read' },
                    { text: 'It ___ (rain) a lot this month.', answer: 'has rained' },
                    { text: 'We ___ (not / meet) him before.', answer: 'have not met' },
                    { text: 'She ___ (buy) a new car.', answer: 'has bought' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Present Perfect Phrases',
                instruction: 'Build correct Present Perfect sentences',
                sentences: [
                    { text: 'I HAVE FINISHED MY WORK', translation: 'He terminado mi trabajo', distractors: ['FINISHEDED', 'AM'] },
                    { text: 'HAVE YOU EVER BEEN TO CHINA', translation: '¿Has estado alguna vez en China?', distractors: ['ARE', 'WAS'] },
                    { text: 'SHE HAS NOT CALLED ME BACK', translation: 'Ella no me ha devuelto la llamada', distractors: ['HAVE', 'DID'] },
                    { text: 'THEY HAVE NEVER EATEN SPANISH FOOD', translation: 'Ellos nunca han comido comida española', distractors: ['EATE', 'HAS'] },
                    { text: 'WE HAVE JUST ARRIVED AT HOME', translation: 'Acabamos de llegar a casa', distractors: ['ARE', 'DID'] },
                    { text: 'HAS HE SEEN THAT MOVIE BEFORE', translation: '¿Ha visto esa película antes?', distractors: ['SAW', 'WAS'] },
                    { text: 'I HAVE LOST MY KEYS AGAIN', translation: 'He perdido mis llaves otra vez', distractors: ['LOSE', 'WAS'] },
                    { text: 'IT HAS RAINED ALL DAY TODAY', translation: 'Ha llovido todo el día hoy', distractors: ['RAIN', 'DO'] },
                    { text: 'WE HAVE LIVED HERE SINCE MARCH', translation: 'Vivimos aquí desde marzo', distractors: ['ARE', 'WAS'] },
                    { text: 'HOW LONG HAVE YOU KNOWN HIM', translation: '¿Cuánto tiempo hace que lo conoces?', distractors: ['DO', 'WAS'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Present ↔ Past Participle',
                instruction: 'Match the verb with its past participle form!',
                pairs: [
                    { emoji: 'Be', word: 'Been' },
                    { emoji: 'Go', word: 'Gone' },
                    { emoji: 'See', word: 'Seen' },
                    { emoji: 'Eat', word: 'Eaten' },
                    { emoji: 'Write', word: 'Written' },
                    { emoji: 'Do', word: 'Done' },
                    { emoji: 'Buy', word: 'Bought' },
                    { emoji: 'Break', word: 'Broken' },
                    { emoji: 'Take', word: 'Taken' },
                    { emoji: 'Give', word: 'Given' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Perfect Participles ☠️',
                instruction: 'Guess the past participle!',
                words: [
                    { word: 'FORGOTTEN', hint: 'Past participle of forget' },
                    { word: 'CHOSEN', hint: 'Past participle of choose' },
                    { word: 'BROKEN', hint: 'Past participle of break' },
                    { word: 'DRIVEN', hint: 'Past participle of drive' },
                    { word: 'SPOKEN', hint: 'Past participle of speak' },
                    { word: 'THOUGHT', hint: 'Past participle of think' },
                    { word: 'TAUGHT', hint: 'Past participle of teach' },
                    { word: 'BROUGHT', hint: 'Past participle of bring' },
                    { word: 'FALLEN', hint: 'Past participle of fall' },
                    { word: 'KNOWN', hint: 'Past participle of know' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A1', 23]);
        console.log('✅ Successfully updated A1 Topic 23 — Present Perfect');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
