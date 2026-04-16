require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Both, Either, and Neither',
                instruction: 'Can you choose the right word for two things?',
                questions: [
                    {
                        question: 'Which word refers to TWO people/things together?',
                        options: ['Either', 'Neither', 'Both', 'None'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which word refers to ONE or THE OTHER (a choice)?',
                        options: ['Both', 'Either', 'Neither', 'Any'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which word refers to NOT ONE and NOT THE OTHER?',
                        options: ['Both', 'Either', 'Neither', 'Nothing'],
                        correctIdx: 2
                    },
                    {
                        question: '"____ of them are here." (Two people)',
                        options: ['Both', 'Either', 'Neither', 'Each'],
                        correctIdx: 0
                    },
                    {
                        question: '"I don\'t like ____ of these shirts." (Negative + ...)',
                        options: ['both', 'either', 'neither', 'nothing'],
                        correctIdx: 1
                    },
                    {
                        question: '"____ my sister nor my brother is tall."',
                        options: ['Both', 'Either', 'Neither', 'So'],
                        correctIdx: 2
                    },
                    {
                        question: '"You can have ____ tea or coffee."',
                        options: ['both', 'either', 'neither', 'nor'],
                        correctIdx: 1
                    },
                    {
                        question: 'What word goes with "Neither"?',
                        options: ['Or', 'Nor', 'And', 'But'],
                        correctIdx: 1
                    },
                    {
                        question: 'What word goes with "Either"?',
                        options: ['Or', 'Nor', 'And', 'But'],
                        correctIdx: 0
                    },
                    {
                        question: 'What word goes with "Both"?',
                        options: ['Or', 'Nor', 'And', 'But'],
                        correctIdx: 2
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Two Alternatives',
                instruction: 'Type: both, either, or neither',
                sentences: [
                    { text: '___ my parents are teachers. (los dos)', answer: 'Both' },
                    { text: 'You can take ___ the bus or the train. (uno u otro)', answer: 'either' },
                    { text: '___ of the students passed the exam. (ninguno de los dos)', answer: 'Neither' },
                    { text: 'I don\'t want ___ of these cakes. (con negación)', answer: 'either' },
                    { text: '___ Mary and Jane are coming. (las dos)', answer: 'Both' },
                    { text: '___ the blue one nor the red one fits me.', answer: 'Neither' },
                    { text: 'Is ___ of you free tonight?', answer: 'either' },
                    { text: '___ shoes are too small.', answer: 'Both' },
                    { text: 'We can go to ___ London or Paris.', answer: 'either' },
                    { text: '___ of my friends could help me.', answer: 'Neither' },
                    { text: 'I have two pens. ___ of them work. (negative)', answer: 'Neither' },
                    { text: 'I have two hands. I use ___ hands.', answer: 'both' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Pairs and Choices',
                instruction: 'Order the words to build correct sentences',
                sentences: [
                    { text: 'BOTH OF MY FRIENDS CAME', translation: 'Mis dos amigos vinieron', distractors: ['EITHER', 'NEITHER'] },
                    { text: 'EITHER YOU OR I MUST GO', translation: 'O tú o yo debemos ir', distractors: ['NOR', 'AND'] },
                    { text: 'NEITHER HE NOR SHE SAW IT', translation: 'Ni él ni ella lo vieron', distractors: ['OR', 'AND'] },
                    { text: 'I LIKE BOTH OF THESE CARS', translation: 'Me gustan estos dos coches', distractors: ['EITHER', 'NEITHER'] },
                    { text: 'DO YOU WANT EITHER OR NEITHER', translation: '¿Quieres uno u otro, o ninguno?', distractors: ['BOTH', 'NOR'] },
                    { text: 'NEITHER OF US IS READY NOW', translation: 'Ninguno de nosotros está listo ahora', distractors: ['EITHER', 'BOTH'] },
                    { text: 'YOU CAN HAVE EITHER FISH OR', translation: 'Puedes comer o pescado o...', distractors: ['NOR', 'AND'] },
                    { text: 'BOTH BROTHERS ARE SAVING MONEY', translation: 'Ambos hermanos están ahorrando dinero', distractors: ['EITHER', 'NEITHER'] },
                    { text: 'NEITHER MY DAD NOR MY MOM', translation: 'Ni mi papá ni mi mamá...', distractors: ['EITHER', 'OR'] },
                    { text: 'I KNOW BOTH OF THE ANSWERS', translation: 'Sé ambas respuestas', distractors: ['EITHER', 'NEITHER'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Two Things Pair Match',
                instruction: 'Match the pair with the correct word!',
                pairs: [
                    { emoji: 'A and B', word: 'Both' },
                    { emoji: 'A or B', word: 'Either' },
                    { emoji: 'Not A nor B', word: 'Neither' },
                    { emoji: 'Both', word: 'And' },
                    { emoji: 'Either', word: 'Or' },
                    { emoji: 'Neither', word: 'Nor' },
                    { emoji: 'Two together', word: 'Both' },
                    { emoji: 'One choice', word: 'Either' },
                    { emoji: 'Zero of two', word: 'Neither' },
                    { emoji: 'Negative Choice', word: 'Either (after not)' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Decisions for Two ☠️',
                instruction: 'Guess the word!',
                words: [
                    { word: 'NEITHER', hint: 'The opposite of both (for zero items)' },
                    { word: 'EITHER', hint: 'Used for a choice between two' },
                    { word: 'ALTERNATIVES', hint: 'Other options' },
                    { word: 'TOGETHER', hint: 'What "both" implies' },
                    { word: 'OPTIONS', hint: 'Choices you have' },
                    { word: 'REJECTION', hint: 'What "neither" implies' },
                    { word: 'SELECTION', hint: 'What "either" implies' },
                    { word: 'CONJUNCTION', hint: 'And, or, nor are ___' },
                    { word: 'DUALITY', hint: 'Refers to two things' },
                    { word: 'COMBINATION', hint: 'Mixing two things together' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 25]);
        console.log('✅ Successfully updated A2 Topic 25 — Both, Either, Neither');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
