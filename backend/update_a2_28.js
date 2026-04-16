require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Second Conditional (Imaginary Situations)',
                instruction: 'What would you do if...?',
                questions: [
                    {
                        question: 'The Second Conditional is used for:',
                        options: ['General facts', 'Future possibilities', 'Imaginary or unlikely situations', 'Past regrets'],
                        correctIdx: 2
                    },
                    {
                        question: 'What is the structure of the Second Conditional?',
                        options: [
                            'If + Present, Will + Verb',
                            'If + Past, Would + Verb',
                            'If + Present, Present',
                            'If + Past, Had + Verb'
                        ],
                        correctIdx: 1
                    },
                    {
                        question: 'If you use "to be" in the Second Conditional, we often use ____ for ALL subjects.',
                        options: ['was', 'were', 'am', 'been'],
                        correctIdx: 1
                    },
                    {
                        question: '"If I ____ a million dollars, I would travel the world."',
                        options: ['have', 'had', 'will have', 'would have'],
                        correctIdx: 1
                    },
                    {
                        question: '"If I ____ you, I would study more."',
                        options: ['was', 'were', 'am', 'be'],
                        correctIdx: 1
                    },
                    {
                        question: '"She ____ (be) happy if she won the lottery."',
                        options: ['is', 'will be', 'would be', 'was'],
                        correctIdx: 2
                    },
                    {
                        question: '"If they ____ taller, they could play basketball."',
                        options: ['were', 'are', 'was', 'would be'],
                        correctIdx: 0
                    },
                    {
                        question: 'What is the negative of "would"?',
                        options: ['Willn\'t', 'Wouldn\'t', 'Not would', 'Don\'t would'],
                        correctIdx: 1
                    },
                    {
                        question: '"If I ____ (not / have) work, I would go to the beach."',
                        options: ['don\'t have', 'didn\'t have', 'won\'t have', 'not had'],
                        correctIdx: 1
                    },
                    {
                        question: 'Can we use "could" in the result clause?',
                        options: ['Yes (meaning would be able to)', 'No', 'Only in formal English', 'Only in the past'],
                        correctIdx: 0
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Imagining Alternatives',
                instruction: 'Type the correct form (Simple Past or Would + Verb)',
                sentences: [
                    { text: 'If I ___ (win) the lottery, I would buy a boat.', answer: 'won' },
                    { text: 'I ___ (call) him if I had his number.', answer: 'would call' },
                    { text: 'If she ___ (be) here, she would tell us.', answer: 'were' },
                    { text: 'We ___ (not / go) there if it were dangerous.', answer: 'would not go' },
                    { text: 'If they ___ (speak) English, they would find a job.', answer: 'spoke' },
                    { text: '___ you (buy) it if you had enough money?', answer: 'Would buy' },
                    { text: 'If I ___ (be) you, I would take the job.', answer: 'were' },
                    { text: 'He ___ (be) healthier if he exercised more.', answer: 'would be' },
                    { text: 'If I ___ (not / have) to work, I would sleep all day.', answer: 'didn\'t have' },
                    { text: 'What ___ you (do) if you saw a ghost?', answer: 'would do' },
                    { text: 'If we ___ (live) in Hawaii, we would surf every day.', answer: 'lived' },
                    { text: 'They ___ (not / be) happy if they lost the match.', answer: 'wouldn\'t be' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Unreal Conditions',
                instruction: 'Order the words to build Second Conditional sentences',
                sentences: [
                    { text: 'IF I HAD MONEY I WOULD TRAVEL', translation: 'Si tuviera dinero viajaría', distractors: ['HAVE', 'WILL'] },
                    { text: 'I WOULD CALL IF I KNEW HIM', translation: 'Llamaría si lo conociera', distractors: ['KNOW', 'WILL'] },
                    { text: 'IF I WERE YOU I WOULD WAIT', translation: 'Si fuera tú esperaría', distractors: ['WAS', 'AM'] },
                    { text: 'SHE WOULD BE SAD IF HE LEFT', translation: 'Ella estaría triste si él se fuera', distractors: ['WILL', 'LEAVES'] },
                    { text: 'IF THEY WON THEY WOULD PARTY', translation: 'Si ganaran irían de fiesta', distractors: ['WILL', 'WINS'] },
                    { text: 'WHAT WOULD YOU DO IF YOU', translation: '¿Qué harías si tú...?', distractors: ['WILL', 'DO'] },
                    { text: 'IT WOULD BE NICE IF IT', translation: 'Sería agradable si...', distractors: ['WILL', 'IS'] },
                    { text: 'I WOULD NOT GO IF I WERE', translation: 'No iría si fuera...', distractors: ['AM', 'WONT'] },
                    { text: 'IF SHE SPOKE FRENCH SHE WOULD', translation: 'Si hablara francés ella...', distractors: ['SPEAKS', 'WILL'] },
                    { text: 'WE WOULD HELP IF WE COULD', translation: 'Ayudaríamos si pudiéramos', distractors: ['CAN', 'WILL'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Imaginary Pair Match',
                instruction: 'Match the imaginary condition with its result!',
                pairs: [
                    { emoji: 'Win lottery', word: 'Buy a mansion' },
                    { emoji: 'Were a bird', word: 'I would fly' },
                    { emoji: 'Had wings', word: 'I would travel' },
                    { emoji: 'Met a celebrity', word: 'Ask for photo' },
                    { emoji: 'Found a wallet', word: 'Return it' },
                    { emoji: 'Were invisible', word: 'Go to movies free' },
                    { emoji: 'Speaks any language', word: 'Visit every country' },
                    { emoji: 'Could time travel', word: 'Visit the past' },
                    { emoji: 'Were the President', word: 'Make new laws' },
                    { emoji: 'Were very rich', word: 'Helpทุกคน' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Unreal Worlds ☠️',
                instruction: 'Guess the conditional word!',
                words: [
                    { word: 'HYPOTHETICAL', hint: 'Imaginary situation' },
                    { word: 'IMAGINARY', hint: 'Not real' },
                    { word: 'WOULD', hint: 'The auxiliary for the result' },
                    { word: 'UNLIKELY', hint: 'Not probable' },
                    { word: 'DREAMING', hint: 'Thinking about unusual things' },
                    { word: 'SITUATION', hint: 'The state of things' },
                    { word: 'POSSIBILITY', hint: 'Something that could happen' },
                    { word: 'WISHFUL', hint: 'Full of desire for something' },
                    { word: 'CONDITION', hint: 'The "if" part' },
                    { word: 'FANTASY', hint: 'Highly imaginary idea' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 28]);
        console.log('✅ Successfully updated A2 Topic 28 — Second Conditional');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
