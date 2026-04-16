require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Modal Verbs for Necessity',
                instruction: 'What must you do?',
                questions: [
                    {
                        question: 'Which modal verb shows an OBLIGATION from outside (e.g., rules)?',
                        options: ['Should', 'Have to', 'Might', 'Can'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which modal verb shows a personal feeling of obligation?',
                        options: ['Must', 'Can', 'Could', 'May'],
                        correctIdx: 0
                    },
                    {
                        question: 'What is the negative of "have to" for "he"?',
                        options: ['He hasn\'t to', 'He don\'t have to', 'He doesn\'t have to', 'He not has to'],
                        correctIdx: 2
                    },
                    {
                        question: '"I ____ study tonight because I have an exam." (Need/Necessary)',
                        options: ['can', 'need to', 'might', 'could'],
                        correctIdx: 1
                    },
                    {
                        question: 'What does "mustn\'t" mean?',
                        options: ['You don\'t need to', 'It is forbidden / Prohibited', 'It is a good idea', 'You can if you want'],
                        correctIdx: 1
                    },
                    {
                        question: '"Don\'t have to" means:',
                        options: ['It is forbidden', 'It is not necessary (you have a choice)', 'You should do it', 'You can\'t do it'],
                        correctIdx: 1
                    },
                    {
                        question: 'What is the past form of "Must"?',
                        options: ['Musted', 'Had to', 'Was must', 'Musting'],
                        correctIdx: 1
                    },
                    {
                        question: '"We ____ wear a uniform at school." (Rule)',
                        options: ['have to', 'has to', 'need', 'must to'],
                        correctIdx: 0
                    },
                    {
                        question: 'Which is correct: "Does she ____ work today?"',
                        options: ['has to', 'have to', 'must', 'musts'],
                        correctIdx: 1
                    },
                    {
                        question: '"Necessity" refers to something that is:',
                        options: ['Required / Mandatory', 'Optional', 'Funny', 'Impossible'],
                        correctIdx: 0
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Necessity Words',
                instruction: 'Type: have to, has to, must, or need to',
                sentences: [
                    { text: 'In the UK, you ___ drive on the left.', answer: 'have to' },
                    { text: 'I ___ (buy) a new computer. (necesidad personal)', answer: 'need to buy' },
                    { text: 'She ___ (go) to the doctor yesterday. (past obligation)', answer: 'had to go' },
                    { text: 'You ___ (not / smoke) here. It is illegal.', answer: 'must not' },
                    { text: 'Do I ___ (show) my passport?', answer: 'have to show' },
                    { text: 'He ___ (finish) the report by tomorrow.', answer: 'has to finish' },
                    { text: 'You ___ (be) careful on that road.', answer: 'must be' },
                    { text: 'We ___ (not / wake up) early tomorrow. It is a holiday.', answer: 'don\'t have to' },
                    { text: 'Does he ___ (work) on Saturdays?', answer: 'have to work' },
                    { text: 'I really ___ (clean) my room.', answer: 'need to clean' },
                    { text: 'Drivers ___ stop at red lights.', answer: 'must' },
                    { text: 'You ___ (not / eat) all of it if you are full.', answer: 'don\'t have to' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Rules and Necessity',
                instruction: 'Build correct sentences about necessity',
                sentences: [
                    { text: 'YOU MUST WEAR A MASK', translation: 'Debes usar una máscara', distractors: ['TO', 'ARE'] },
                    { text: 'DO I HAVE TO PAY', translation: '¿Tengo que pagar?', distractors: ['HAS', 'AM'] },
                    { text: 'SHE DOES NOT HAVE TO', translation: 'Ella no tiene que hacerlo', distractors: ['HAS', 'MUSTNT'] },
                    { text: 'I NEED TO BUY APPLES', translation: 'Necesito comprar manzanas', distractors: ['ARE', 'IS'] },
                    { text: 'WE HAD TO WAIT LONG', translation: 'Tuvimos que esperar mucho', distractors: ['MUST', 'HAVE'] },
                    { text: 'YOU MUST NOT RUN HERE', translation: 'No debes correr aquí', distractors: ['DO', 'DONT'] },
                    { text: 'HE HAS TO FINISH WORK', translation: 'Él tiene que terminar el trabajo', distractors: ['HAVE', 'WAS'] },
                    { text: 'DO WE NEED TO GO', translation: '¿Necesitamos irnos?', distractors: ['ARE', 'HAS'] },
                    { text: 'YOU SHOULD BE AT HOME', translation: 'Deberías estar en casa (advice, but related)', distractors: ['MUST', 'WAITED'] },
                    { text: 'I MUST GO NOW GOODBYE', translation: 'Debo irme ahora, adiós', distractors: ['AM', 'IS'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Necessity Meaning Check',
                instruction: 'Match the modal with its meaning!',
                pairs: [
                    { emoji: 'Must', word: 'Personal Obligation' },
                    { emoji: 'Have to', word: 'External Rule' },
                    { emoji: 'Need to', word: 'Necessity' },
                    { emoji: 'Mustn\'t', word: 'Prohibition' },
                    { emoji: 'Don\'t have to', word: 'No necessity' },
                    { emoji: 'Had to', word: 'Past obligation' },
                    { emoji: 'Should', word: 'Advice' },
                    { emoji: 'Needn\'t', word: 'Not necessary' },
                    { emoji: 'Required', word: 'Mandatory' },
                    { emoji: 'Optional', word: 'Not required' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Mandatory Words ☠️',
                instruction: 'Guess the word!',
                words: [
                    { word: 'OBLIGATION', hint: 'Something you must do' },
                    { word: 'NECESSITY', hint: 'Something that is needed' },
                    { word: 'PROHIBITION', hint: 'Something you must not do' },
                    { word: 'MANDATORY', hint: 'Required by law or rules' },
                    { word: 'REQUIRED', hint: 'Needed for a purpose' },
                    { word: 'ESSENTIAL', hint: 'Very important / Necessary' },
                    { word: 'VOLUNTARY', hint: 'Opposite of mandatory' },
                    { word: 'FORBIDDEN', hint: 'Not allowed' },
                    { word: 'REGULATION', hint: 'A rule or law' },
                    { word: 'RESPONSIBILITY', hint: 'Duty to deal with something' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 9]);
        console.log('✅ Successfully updated A2 Topic 9 — Modal Verbs for Necessity');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
