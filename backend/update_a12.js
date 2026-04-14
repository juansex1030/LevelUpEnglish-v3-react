require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [

            // ── GAME 1: Trivia – 10 questions ─────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Simple Present Rules',
                instruction: 'Test your knowledge of the Simple Present tense!',
                questions: [
                    {
                        question: 'What ending do you add to the verb for HE / SHE / IT?',
                        options: ['-ed', '-ing', '-s or -es', '-en'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which auxiliary do you use in NEGATIVES with I / YOU / WE / THEY?',
                        options: ['doesn\'t', 'don\'t', 'didn\'t', 'isn\'t'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which auxiliary do you use in QUESTIONS with HE / SHE / IT?',
                        options: ['Do', 'Did', 'Does', 'Is'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which sentence is CORRECT?',
                        options: [
                            'She play tennis every day.',
                            'She plays tennis every day.',
                            'She is play tennis every day.',
                            'She does plays tennis every day.'
                        ],
                        correctIdx: 1
                    },
                    {
                        question: 'The Simple Present is used for:',
                        options: [
                            'Actions happening right now',
                            'Habits, routines, and general truths',
                            'Actions that happened yesterday',
                            'Future plans only'
                        ],
                        correctIdx: 1
                    },
                    {
                        question: 'What is the correct negative form of "He likes coffee"?',
                        options: [
                            'He don\'t like coffee.',
                            'He isn\'t like coffee.',
                            'He doesn\'t like coffee.',
                            'He doesn\'t likes coffee.'
                        ],
                        correctIdx: 2
                    },
                    {
                        question: '"Study" → He/She/It ___.',
                        options: ['studys', 'studies', 'study', 'studyes'],
                        correctIdx: 1
                    },
                    {
                        question: '"Go" → She ___.',
                        options: ['gos', 'goes', 'going', 'go'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which question is CORRECT?',
                        options: [
                            'Does she likes pizza?',
                            'Do she like pizza?',
                            'Does she like pizza?',
                            'Is she like pizza?'
                        ],
                        correctIdx: 2
                    },
                    {
                        question: '"Have" → He/She/It ___.',
                        options: ['haves', 'hasing', 'have', 'has'],
                        correctIdx: 3
                    },
                ]
            },

            // ── GAME 2: Fill Blanks – 12 sentences ────────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Simple Present Verbs',
                instruction: 'Type the correct form of the verb in parentheses',
                sentences: [
                    { text: 'She ___ to school every day. (go)',               answer: 'goes'    },
                    { text: 'I ___ coffee in the morning. (drink)',             answer: 'drink'   },
                    { text: 'He ___ not eat meat. (do)',                        answer: 'does'    },
                    { text: 'We ___ English on Fridays. (study)',               answer: 'study'   },
                    { text: 'My sister ___ the guitar. (play)',                 answer: 'plays'   },
                    { text: 'They ___ in an apartment. (live)',                 answer: 'live'    },
                    { text: 'The sun ___ in the east. (rise)',                  answer: 'rises'   },
                    { text: 'Carlos ___ his teeth twice a day. (brush)',        answer: 'brushes' },
                    { text: 'I ___ not understand that question. (do)',         answer: 'do'      },
                    { text: 'She ___ her homework after school. (do)',          answer: 'does'    },
                    { text: 'The cat ___ fish. (love)',                         answer: 'loves'   },
                    { text: 'We ___ lunch at noon. (have)',                     answer: 'have'    },
                ]
            },

            // ── GAME 3: Sentence Builder – 10 sentences ───────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Simple Present',
                instruction: 'Arrange the words to form a correct Simple Present sentence',
                sentences: [
                    {
                        text: 'She drinks coffee every morning.',
                        translation: 'Ella toma café cada mañana. (rutina)',
                        distractors: ['drunk', 'drinked']
                    },
                    {
                        text: 'Do you like music?',
                        translation: '¿Te gusta la música? (pregunta)',
                        distractors: ['Does', 'Did']
                    },
                    {
                        text: 'He does not eat vegetables.',
                        translation: 'Él no come verduras. (negativo)',
                        distractors: ['don\'t', 'didn\'t']
                    },
                    {
                        text: 'We play football on weekends.',
                        translation: 'Jugamos fútbol los fines de semana.',
                        distractors: ['plays', 'played']
                    },
                    {
                        text: 'Does she speak Spanish?',
                        translation: '¿Ella habla español? (pregunta he/she/it)',
                        distractors: ['Do', 'Did']
                    },
                    {
                        text: 'My father works in a bank.',
                        translation: 'Mi papá trabaja en un banco.',
                        distractors: ['work', 'worked']
                    },
                    {
                        text: 'I do not watch TV at night.',
                        translation: 'No veo TV en la noche. (negativo)',
                        distractors: ['does', 'did']
                    },
                    {
                        text: 'Birds fly south in winter.',
                        translation: 'Las aves vuelan al sur en invierno. (verdad general)',
                        distractors: ['flies', 'flied']
                    },
                    {
                        text: 'They study at the library.',
                        translation: 'Ellos estudian en la biblioteca.',
                        distractors: ['studies', 'studied']
                    },
                    {
                        text: 'The store closes at nine PM.',
                        translation: 'La tienda cierra a las nueve PM.',
                        distractors: ['close', 'closed']
                    },
                ]
            },

            // ── GAME 4: Matching – 10 pairs ───────────────────────────────
            {
                type: 'matching',
                title: '🔗 Matching: Subjects & Verb Forms',
                instruction: 'Match each subject on the left to the correct verb form on the right',
                questions: [
                    { q: 'I / You / We / They + play',    a: 'play (no change)'     },
                    { q: 'He / She / It + play',          a: 'plays (add -s)'       },
                    { q: 'He / She / It + study',         a: 'studies (y → ies)'    },
                    { q: 'He / She / It + go',            a: 'goes (add -es)'       },
                    { q: 'He / She / It + have',          a: 'has (irregular!)'     },
                    { q: 'Negative: I / You',             a: 'I don\'t + verb'      },
                    { q: 'Negative: He / She / It',       a: 'He doesn\'t + verb'   },
                    { q: 'Question: I / You / We',        a: 'Do you + verb?'       },
                    { q: 'Question: He / She / It',       a: 'Does she + verb?'     },
                    { q: 'He / She / It + wash',          a: 'washes (add -es)'     },
                ]
            },

            // ── GAME 5: Hangman – 10 words ────────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Simple Present Vocabulary',
                instruction: 'Guess the letters to find grammar words related to the Simple Present!',
                words: [
                    { word: 'HABIT',      hint: 'Something you do regularly — "I have a ___ of waking up early"' },
                    { word: 'ROUTINE',    hint: 'A fixed schedule of actions — "My morning ___"' },
                    { word: 'ALWAYS',     hint: 'Adverb of frequency: 100% — "She ___ drinks water"' },
                    { word: 'NEVER',      hint: 'Adverb of frequency: 0% — "I ___ eat fast food"' },
                    { word: 'USUALLY',    hint: 'Adverb of frequency: ~80% — "We ___ study together"' },
                    { word: 'SOMETIMES', hint: 'Adverb of frequency: ~50% — "I ___ go to the gym"' },
                    { word: 'AUXILIARY',  hint: 'A helping verb — DO / DOES are ___ verbs' },
                    { word: 'INFINITIVE', hint: 'The base form of the verb — "to play", "to study"' },
                    { word: 'REGULAR',    hint: 'A verb that follows standard rules (play → plays) is ___' },
                    { word: 'THIRD',      hint: 'He / She / It are ___ person singular' },
                ]
            },
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query(
            'UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3',
            [strData, 'A1', 12]
        );
        console.log('✅ Successfully updated A1 Topic 12 — Simple Present');
        console.log('   → Game 1 (trivia_game):      10 questions');
        console.log('   → Game 2 (fill_blanks_game): 12 sentences');
        console.log('   → Game 3 (sentence_builder): 10 sentences');
        console.log('   → Game 4 (matching):         10 pairs');
        console.log('   → Game 5 (hangman_game):     10 words');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
