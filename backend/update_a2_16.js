require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: First Conditional (Future Possibility)',
                instruction: 'What will happen if...?',
                questions: [
                    {
                        question: 'The First Conditional is used for:',
                        options: ['General facts', 'Real possibilities in the future', 'Past regrets', 'Imaginary presents'],
                        correctIdx: 1
                    },
                    {
                        question: 'What is the structure of First Conditional?',
                        options: ['If + Present, Will + Verb', 'If + Past, Would + Verb', 'If + Present, Present', 'If + Future, Future'],
                        correctIdx: 0
                    },
                    {
                        question: '"If it rains, we ____ (not / go) to the beach."',
                        options: ['don\'t go', 'won\'t go', 'didn\'t go', 'not go'],
                        correctIdx: 1
                    },
                    {
                        question: '"If I study hard, I ____ (pass) the exam."',
                        options: ['pass', 'am passing', 'will pass', 'passed'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which clause uses the Present Simple?',
                        options: ['The "If" clause', 'The main clause (result)', 'Both', 'Neither'],
                        correctIdx: 0
                    },
                    {
                        question: 'Which clause uses "Will"?',
                        options: ['The "If" clause', 'The main clause (result)', 'Both', 'Neither'],
                        correctIdx: 1
                    },
                    {
                        question: '"She ____ (be) happy if she wins."',
                        options: ['is', 'will be', 'was', 'is be'],
                        correctIdx: 1
                    },
                    {
                        question: 'Can we start with the "Will" clause?',
                        options: ['Yes (I will go if...)', 'No', 'Only in questions', 'Only with "unless"'],
                        correctIdx: 0
                    },
                    {
                        question: 'Negative "If" clause: "If you ____ (not / hurry), you\'ll miss the bus."',
                        options: ['won\'t hurry', 'don\'t hurry', 'not hurry', 'didn\'t hurry'],
                        correctIdx: 1
                    },
                    {
                        question: '"Unless" means:',
                        options: ['If', 'If not', 'When', 'Because'],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: If and Will',
                instruction: 'Type the correct form of the verb (Present Simple / Will + Verb)',
                sentences: [
                    { text: 'If I ___ (see) Maria, I will tell her. (present)', answer: 'see' },
                    { text: 'If you eat all that, you ___ (feel) sick. (future)', answer: 'will feel' },
                    { text: 'They ___ (be) late if they don\'t leave now.', answer: 'will be' },
                    { text: 'If she ___ (study) more, she will pass. (3rd person present)', answer: 'studies' },
                    { text: 'If it ___ (not / rain) tomorrow, we will go out.', answer: 'doesn\'t rain' },
                    { text: 'I will call you if I ___ (have) time. (present)', answer: 'have' },
                    { text: 'What ___ you (do) if you lose your keys?', answer: 'will do' },
                    { text: 'If they ___ (arrive) late, we will start without them.', answer: 'arrive' },
                    { text: 'She ___ (buy) a car if she saves enough money.', answer: 'will buy' },
                    { text: 'If you ___ (not / go) to bed now, you will be tired.', answer: 'don\'t go' },
                    { text: 'I will be very angry if he ___ (forget) my birthday.', answer: 'forgets' },
                    { text: 'If the weather ___ (be) good, we will have a picnic.', answer: 'is' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Future Conditions',
                instruction: 'Order the words to build correct First Conditional sentences',
                sentences: [
                    { text: 'IF IT RAINS I WILL STAY', translation: 'Si llueve me quedaré', distractors: ['DO', 'IS'] },
                    { text: 'I WILL HELP YOU IF I CAN', translation: 'Te ayudaré si puedo', distractors: ['DO', 'AM'] },
                    { text: 'SHE WILL BE SAD IF HE LEAVES', translation: 'Ella estará triste si él se va', distractors: ['IS', 'DOES'] },
                    { text: 'IF YOU EAT THIS YOU WILL FEEL SICK', translation: 'Si comes esto te sentirás mal', distractors: ['DO', 'AM'] },
                    { text: 'THEY WILL WIN IF THEY TRY HARD', translation: 'Ganarán si se esfuerzan', distractors: ['ARE', 'DO'] },
                    { text: 'IF SHE LIKES IT SHE WILL BUY', translation: 'Si le gusta, lo comprará', distractors: ['IS', 'DO'] },
                    { text: 'I WILL CALL IF I AM LATE', translation: 'Llamaré si llego tarde', distractors: ['DO', 'HAVE'] },
                    { text: 'WHAT WILL HAPPEN IF WE LOSE', translation: '¿Qué pasará si perdemos?', distractors: ['DO', 'ARE'] },
                    { text: 'IF YOU DO NOT GO NOW', translation: 'Si no vas ahora...', distractors: ['WILL', 'ARE'] },
                    { text: 'I WILL NOT GO UNLESS YOU GO', translation: 'No iré a menos que tú vayas', distractors: ['IF', 'DO'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: If ↔ Will Results',
                instruction: 'Match the condition with its probable result!',
                pairs: [
                    { emoji: 'If you study', word: 'You will pass' },
                    { emoji: 'If it rains', word: 'We will stay home' },
                    { emoji: 'If she eats cake', word: 'She will be happy' },
                    { emoji: 'If they win', word: 'They will celebrate' },
                    { emoji: 'If you are late', word: 'The boss will be angry' },
                    { emoji: 'If I see him', word: 'I will say hello' },
                    { emoji: 'If we save money', word: 'We will buy a car' },
                    { emoji: 'If you don\'t sleep', word: 'You will be tired' },
                    { emoji: 'If the sun shines', word: 'We will go to the park' },
                    { emoji: 'If he arrives', word: 'We will eat' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Likely Futures ☠️',
                instruction: 'Guess the conditional-related word!',
                words: [
                    { word: 'POSSIBILITY', hint: 'Something that could happen' },
                    { word: 'PROBABLE', hint: 'Likely to happen' },
                    { word: 'CONDITION', hint: 'The "if" part of the sentence' },
                    { word: 'PREDICTION', hint: 'What you say will happen' },
                    { word: 'PROMISE', hint: 'Saying you will definitely do it' },
                    { word: 'WARNING', hint: 'Telling someone something bad might happen' },
                    { word: 'UNLESS', hint: 'If not' },
                    { word: 'RESULT', hint: 'The consequence of the condition' },
                    { word: 'THREAT', hint: 'Saying you will hurt someone if...' },
                    { word: 'CERTAINTY', hint: 'Something that is 100% sure' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 16]);
        console.log('✅ Successfully updated A2 Topic 16 — First Conditional');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
