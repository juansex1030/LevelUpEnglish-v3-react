require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Future Contrast (Will vs. Going to)',
                instruction: 'Can you pick the right way to talk about the future?',
                questions: [
                    {
                        question: 'We use "be going to" when we have a...',
                        options: ['Spontaneous idea', 'Planned intention', 'Past memory', 'Fact'],
                        correctIdx: 1
                    },
                    {
                        question: 'We use "will" when we make a...',
                        options: ['Planned holiday', 'Promise or prediction', 'Past habit', 'Current action'],
                        correctIdx: 1
                    },
                    {
                        question: '"The phone is ringing!" → "I ____ answer it!"',
                        options: ['am going to', 'will', 'was', 'am'],
                        correctIdx: 1
                    },
                    {
                        question: '"We ____ travel to Italy in August." (It\'s booked)',
                        options: ['will', 'are going to', 'are', 'were'],
                        correctIdx: 1
                    },
                    {
                        question: 'What is the negative of "be going to" for "I"?',
                        options: ['I don\'t go to', 'I am not going to', 'I willn\'t', 'I not go to'],
                        correctIdx: 1
                    },
                    {
                        question: '"Watch out! You ____ fall!" (They are wobbly)',
                        options: ['will', 'are going to', 'be', 'were'],
                        correctIdx: 1
                    },
                    {
                        question: '"I think it ____ rain later." (My opinion)',
                        options: ['will', 'is going to', 'is', 'was'],
                        correctIdx: 0
                    },
                    {
                        question: 'Spontaneous decision: "I ____ have the steak, please."',
                        options: ['am going to', 'will', 'was', 'shall'],
                        correctIdx: 1
                    },
                    {
                        question: 'Question form: "____ you help me next week?"',
                        options: ['Will', 'Are you going to', 'Both are possible', 'Do you will'],
                        correctIdx: 2
                    },
                    {
                        question: 'A prediction based on CURRENT evidence uses:',
                        options: ['Will', 'Going to', 'Present simple', 'Past continuous'],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Future Selection',
                instruction: 'Type: will or am/is/are going to',
                sentences: [
                    { text: 'I feel sick. I think I ___ faint.', answer: 'am going to' },
                    { text: 'Don\'t worry! I ___ help you with that.', answer: 'will' },
                    { text: 'We ___ (have) a party on Saturday night. (plan)', answer: 'are going to have' },
                    { text: 'I forgot my wallet! — Don\'t worry, I ___ lend you money.', answer: 'will' },
                    { text: 'Look at those big black clouds! It ___ rain.', answer: 'is going to' },
                    { text: 'I ___ (be) a doctor when I grow up. (dream/plan)', answer: 'am going to be' },
                    { text: 'I promise I ___ tell anyone your secret.', answer: 'will not' },
                    { text: 'They ___ (visit) us next month. (arranged)', answer: 'are going to visit' },
                    { text: 'What ___ you (do) tonight?', answer: 'are going to do' },
                    { text: 'I think the team ___ (win) the match.', answer: 'will win' },
                    { text: 'I ___ (have) a coffee, please.', answer: 'will have' },
                    { text: 'She ___ (buy) a new car soon.', answer: 'is going to buy' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Future Decisions',
                instruction: 'Arrange the words to form correct future sentences',
                sentences: [
                    { text: 'I WILL CALL YOU LATER', translation: 'Te llamaré más tarde', distractors: ['AM', 'GOING'] },
                    { text: 'HE IS GOING TO STUDY', translation: 'Él va a estudiar', distractors: ['WILLS', 'STUDIES'] },
                    { text: 'THEY ARE NOT GOING TO WAIT', translation: 'Ellos no van a esperar', distractors: ['WILLS', 'WAS'] },
                    { text: 'WILL YOU MARRY ME TOMORROW', translation: '¿Te casarás conmigo mañana?', distractors: ['ARE', 'IS'] },
                    { text: 'I AM GOING TO VISIT LONDON', translation: 'Voy a visitar Londres', distractors: ['WILLS', 'WAS'] },
                    { text: 'I WILL ALWAYS LOVE YOU', translation: 'Siempre te amaré', distractors: ['ARE', 'GOING'] },
                    { text: 'WHAT ARE YOU GOING TO EAT', translation: '¿Qué vas a comer?', distractors: ['WILL', 'DO'] },
                    { text: 'IT WILL BE A GREAT DAY', translation: 'Será un gran día', distractors: ['IS', 'BEING'] },
                    { text: 'SHE IS GOING TO FAIL IF', translation: 'Ella va a reprobar si...', distractors: ['WILL', 'DID'] },
                    { text: 'WE WILL FIND A SOLUTION', translation: 'Encontraremos una solución', distractors: ['ARE', 'GOING'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Future Meaning Check',
                instruction: 'Match the sentence type with its future form!',
                pairs: [
                    { emoji: 'Spontaneous', word: 'Will' },
                    { emoji: 'Planned Intention', word: 'Going to' },
                    { emoji: 'Promise', word: 'Will' },
                    { emoji: 'Offer', word: 'Will' },
                    { emoji: 'Prediction (evidence)', word: 'Going to' },
                    { emoji: 'Prediction (opinion)', word: 'Will' },
                    { emoji: 'Refusal (Won\'t)', word: 'Will' },
                    { emoji: 'Scheduled event', word: 'Present Simple' },
                    { emoji: 'Near future', word: 'Going to' },
                    { emoji: 'Decision at speaking', word: 'Will' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Looking Forward ☠️',
                instruction: 'Guess the word!',
                words: [
                    { word: 'PREDICTION', hint: 'Something you think will happen' },
                    { word: 'INTENTION', hint: 'A plan for the future' },
                    { word: 'PROMISE', hint: 'Saying you will definitely do it' },
                    { word: 'EVIDENCE', hint: 'Reason to use "going to" for predictions' },
                    { word: 'DECISION', hint: 'Making a choice' },
                    { word: 'SPONTANEOUS', hint: 'Done without a plan' },
                    { word: 'PLANNED', hint: 'Thinking about it before' },
                    { word: 'TOMORROW', hint: 'Common future time marker' },
                    { word: 'ARRANGEMENT', hint: 'Plans made with other people' },
                    { word: 'SCHEDULE', hint: 'Timetable of events' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 8]);
        console.log('✅ Successfully updated A2 Topic 8 — Future: be going to vs. will');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
