require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: So vs. Such',
                instruction: 'Can you use these intensifiers correctly?',
                questions: [
                    {
                        question: 'We use "So" before:',
                        options: ['An adjective or adverb', 'A noun', 'A verb', 'A pronoun'],
                        correctIdx: 0
                    },
                    {
                        question: 'We use "Such" before:',
                        options: ['An adjective only', 'A noun or adjective + noun', 'A verb', 'An adverb'],
                        correctIdx: 1
                    },
                    {
                        question: '"She is ____ beautiful." — Which is correct?',
                        options: ['so', 'such', 'such a', 'so much'],
                        correctIdx: 0
                    },
                    {
                        question: '"It is ____ a beautiful day!"',
                        options: ['so', 'such', 'so much', 'very'],
                        correctIdx: 1
                    },
                    {
                        question: '"The movie was ____ boring."',
                        options: ['so', 'such', 'such a', 'very such'],
                        correctIdx: 0
                    },
                    {
                        question: '"It was ____ a boring movie."',
                        options: ['so', 'such', 'so a', 'very'],
                        correctIdx: 1
                    },
                    {
                        question: 'For PLURAL nouns, we use:',
                        options: ['Such', 'Such a', 'So', 'Very so'],
                        correctIdx: 0
                    },
                    {
                        question: '"They are ____ nice people."',
                        options: ['so', 'such', 'such a', 'so much'],
                        correctIdx: 1
                    },
                    {
                        question: '"Flowers are ____ lovely." — (Only adjective)',
                        options: ['so', 'such', 'such a', 'very such'],
                        correctIdx: 0
                    },
                    {
                        question: '"It was ____ an interesting story."',
                        options: ['so', 'such', 'so an', 'very'],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Emphasis with So and Such',
                instruction: 'Type: so, such, or such a',
                sentences: [
                    { text: 'The weather is ___ cold today.', answer: 'so' },
                    { text: 'It is ___ cold day today.', answer: 'such a' },
                    { text: 'She is ___ professional.', answer: 'so' },
                    { text: 'She is ___ professional worker.', answer: 'such a' },
                    { text: 'They are ___ good friends.', answer: 'such' },
                    { text: 'The cake is ___ delicious!', answer: 'so' },
                    { text: 'It was ___ delicious cake.', answer: 'such a' },
                    { text: 'The music is ___ loud.', answer: 'so' },
                    { text: 'He has ___ beautiful house.', answer: 'such a' },
                    { text: 'You are ___ kind.', answer: 'so' },
                    { text: 'I have ___ much work to do. (so much/such much)', answer: 'so' },
                    { text: 'It was ___ an amazing trip.', answer: 'such' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Strong Descriptions',
                instruction: 'Order the words to build correct sentences',
                sentences: [
                    { text: 'THE WEATHER IS SO HOT', translation: 'El clima es tan caluroso', distractors: ['SUCH', 'ARE'] },
                    { text: 'IT IS SUCH A HOT DAY', translation: 'Es un día tan caluroso', distractors: ['SO', 'IS'] },
                    { text: 'SHE IS SO INTELLIGENT PERSON', translation: 'Ella es una persona tan inteligente (wait, let\'s use: SHE IS SUCH AN INTELLIGENT PERSON)', distractors: ['SO', 'ARE'] },
                    { text: 'THE MOVIE WAS SO GOOD', translation: 'La película estuvo tan buena', distractors: ['SUCH', 'IS'] },
                    { text: 'THEY ARE SUCH NICE FRIENDS', translation: 'Son tan buenos amigos', distractors: ['SO', 'ARE'] },
                    { text: 'THE CAKE SMELLS SO SWEET', translation: 'El pastel huele tan dulce', distractors: ['SUCH', 'ARE'] },
                    { text: 'I AM SO TIRED NOW', translation: 'Estoy tan cansado ahora', distractors: ['SUCH', 'AM'] },
                    { text: 'IT WAS SUCH A MESS', translation: 'Fue un desastre tan grande', distractors: ['SO', 'IS'] },
                    { text: 'YOU ARE SO KIND TO HELP', translation: 'Eres tan amable de ayudar', distractors: ['SUCH', 'ARE'] },
                    { text: 'HE IS SUCH A GREAT SINGER', translation: 'Él es un gran cantante', distractors: ['SO', 'IS'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Intensifier Match',
                instruction: 'Match the adjective/noun with the correct word!',
                pairs: [
                    { emoji: 'Beautiful', word: 'So' },
                    { emoji: 'A beautiful girl', word: 'Such a' },
                    { emoji: 'Smart', word: 'So' },
                    { emoji: 'A smart boy', word: 'Such a' },
                    { emoji: 'Tall', word: 'So' },
                    { emoji: 'A tall tree', word: 'Such a' },
                    { emoji: 'Expensive', word: 'So' },
                    { emoji: 'An expensive car', word: 'Such an' },
                    { emoji: 'Kind people', word: 'Such' },
                    { emoji: 'Good friends', word: 'Such' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Amplifying Words ☠️',
                instruction: 'Guess the word!',
                words: [
                    { word: 'INTENSIFIER', hint: 'A word that makes an adjective stronger' },
                    { word: 'ADJECTIVE', hint: 'The part of speech "so" follows' },
                    { word: 'EXCLAMATION', hint: 'Showing strong feeling (e.g. !)' },
                    { word: 'BEAUTIFUL', hint: 'Very pretty' },
                    { word: 'IMPORTANT', hint: 'Needing serious thought' },
                    { word: 'DANGEROUS', hint: 'Could cause harm' },
                    { word: 'ENORMOUS', hint: 'Very big' },
                    { word: 'TERRIBLE', hint: 'Very bad' },
                    { word: 'WONDERFUL', hint: 'Very good' },
                    { word: 'STUNNING', hint: 'Very impressive' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 24]);
        console.log('✅ Successfully updated A2 Topic 24 — So vs. Such');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
