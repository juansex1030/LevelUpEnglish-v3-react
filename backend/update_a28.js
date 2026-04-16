require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Future Tense',
                instruction: 'Will you get all the answers right?',
                questions: [
                    {
                        question: 'We use "be going to" for:',
                        options: ['Spontaneous decisions', 'Future plans and intentions', 'Past habits', 'Current actions'],
                        correctIdx: 1
                    },
                    {
                        question: 'We use "will" for:',
                        options: ['Plans made in advance', 'Predictions and promises', 'Things happening now', 'Daily routines'],
                        correctIdx: 1
                    },
                    {
                        question: 'What is the negative form of "will"?',
                        options: ['Willn\'t', 'Wont / Won\'t', 'Not will', 'Don\'t will'],
                        correctIdx: 1
                    },
                    {
                        question: '"I ____ help you with your bags." (Decision at the moment)',
                        options: ['am going to', 'will', 'was', 'am'],
                        correctIdx: 1
                    },
                    {
                        question: '"She ____ travel to Japan next month." (Plan)',
                        options: ['is going to', 'will', 'shall', 'is'],
                        correctIdx: 0
                    },
                    {
                        question: '"Look at those clouds! It ____ rain."',
                        options: ['will', 'is going to', 'is', 'was'],
                        correctIdx: 1
                    },
                    {
                        question: 'The auxiliary "will" is used with:',
                        options: ['Base form of the verb', 'Verb + -ing', 'Verb + -ed', 'To + verb'],
                        correctIdx: 0
                    },
                    {
                        question: 'Which is a correct question form?',
                        options: ['Will you come?', 'Do you will come?', 'Are you will come?', 'You will come?'],
                        correctIdx: 0
                    },
                    {
                        question: 'Future time marker?',
                        options: ['Yesterday', 'Now', 'Tomorrow', 'Ago'],
                        correctIdx: 2
                    },
                    {
                        question: '"I will ____ you soon." (meeting)',
                        options: ['saw', 'see', 'seeing', 'seen'],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Will / Going to',
                instruction: 'Type the correct future form (will or am/is/are going to)',
                sentences: [
                    { text: 'I promise I ___ help you. (promise)', answer: 'will' },
                    { text: 'They ___ (buy) a new house next year. (plan)', answer: 'are going to buy' },
                    { text: 'Wait! I ___ open the door for you.', answer: 'will' },
                    { text: 'She ___ (start) university in October.', answer: 'is going to start' },
                    { text: 'I think it ___ (be) sunny tomorrow.', answer: 'will be' },
                    { text: 'Look! He ___ (fall) down! (prediction from evidence)', answer: 'is going to fall' },
                    { text: 'We ___ (not / stay) in a hotel.', answer: 'are not going to stay' },
                    { text: '___ you (marry) me? (proposal)', answer: 'Will' },
                    { text: 'I ___ (have) a glass of water, please.', answer: 'will have' },
                    { text: 'What ___ you (do) tonight?', answer: 'are going to do' },
                    { text: 'The movie ___ (start) at 8 PM.', answer: 'will start' },
                    { text: 'My parents ___ (visit) us on Sunday.', answer: 'are going to visit' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Future Phrases',
                instruction: 'Build correct future sentences',
                sentences: [
                    { text: 'I WILL CALL YOU TOMORROW', translation: 'Te llamaré mañana', distractors: ['CALLS', 'AM'] },
                    { text: 'HE IS GOING TO BUY SHOES', translation: 'Él va a comprar zapatos', distractors: ['WILLS', 'BUYS'] },
                    { text: 'THEY ARE NOT GOING TO WIN', translation: 'Ellos no van a ganar', distractors: ['WON', 'WINS'] },
                    { text: 'WILL YOU BE AT THE PARTY', translation: '¿Estarás en la fiesta?', distractors: ['ARE', 'IS'] },
                    { text: 'I AM GOING TO VISIT MEXICO', translation: 'Voy a visitar México', distractors: ['WILLS', 'GOES'] },
                    { text: 'WHAT WILL THE WEATHER BE LIKE', translation: '¿Cómo estará el clima?', distractors: ['IS', 'DO'] },
                    { text: 'SHE IS NOT GOING TO WAIT', translation: 'Ella no va a esperar', distractors: ['WAITS', 'WILLS'] },
                    { text: 'WE WILL ALWAYS LOVE YOU', translation: 'Siempre te amaremos', distractors: ['LOVES', 'ARE'] },
                    { text: 'IT IS GOING TO BE FUN', translation: 'Va a ser divertido', distractors: ['WILLS', 'BEES'] },
                    { text: 'WHEN WILL HE ARRIVE AT HOME', translation: '¿Cuándo llegará a casa?', distractors: ['DO', 'IS'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Future Meaning',
                instruction: 'Match the sentence with its meaning!',
                pairs: [
                    { emoji: 'I\'ll help you', word: 'Offer / Spontaneous' },
                    { emoji: 'I\'m going to travel', word: 'Intention / Plan' },
                    { emoji: 'It will rain', word: 'Prediction (opinion)' },
                    { emoji: 'It is going to rain', word: 'Prediction (evidence)' },
                    { emoji: 'I won\'t go', word: 'Refusal' },
                    { emoji: 'Will you...?', word: 'Request / Question' },
                    { emoji: 'I\'m visiting them', word: 'Future Arrangement' },
                    { emoji: 'Next month', word: 'Future time' },
                    { emoji: 'Maybe', word: 'Uncertain future' },
                    { emoji: 'Definitely', word: 'Certain future' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Future Words ☠️',
                instruction: 'Guess the word!',
                words: [
                    { word: 'PREDICTION', hint: 'Something you think will happen' },
                    { word: 'INTENTION', hint: 'A plan you have' },
                    { word: 'TOMORROW', hint: 'The day after today' },
                    { word: 'FUTURE', hint: 'The time after now' },
                    { word: 'PROMISE', hint: 'Saying you will definitely do it' },
                    { word: 'DECISION', hint: 'A choice you make' },
                    { word: 'PROBABILITY', hint: 'How likely it is' },
                    { word: 'SCHEDULED', hint: 'Future events on a timetable' },
                    { word: 'ARRANGEMENT', hint: 'Plans with other people' },
                    { word: 'SPONTANEOUS', hint: 'Done without a previous plan' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A1', 28]);
        console.log('✅ Successfully updated A1 Topic 28 — Future');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
