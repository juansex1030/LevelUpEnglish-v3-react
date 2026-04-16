require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: There was / There were',
                instruction: 'Test your knowledge of the past form of "There is / There are"!',
                questions: [
                    {
                        question: 'What is the past form of "There is"?',
                        options: ['There were', 'There was', 'There ised', 'There be'],
                        correctIdx: 1
                    },
                    {
                        question: 'What is the past form of "There are"?',
                        options: ['There was', 'There were', 'There ared', 'There been'],
                        correctIdx: 1
                    },
                    {
                        question: '"____ a spider in my room last night." — Which is correct?',
                        options: ['There was', 'There were', 'There is', 'There are'],
                        correctIdx: 0
                    },
                    {
                        question: '"____ many people at the concert." — Which is correct?',
                        options: ['There was', 'There were', 'There was not', 'There be'],
                        correctIdx: 1
                    },
                    {
                        question: 'Negative form of "There was"?',
                        options: ['There wasn\'t', 'There was not', 'There wern\'t', 'Both A and B'],
                        correctIdx: 3
                    },
                    {
                        question: 'Question form of "There were some cookies":',
                        options: ['Were there any cookies?', 'Was there any cookies?', 'There were cookies?', 'Did there be cookies?'],
                        correctIdx: 0
                    },
                    {
                        question: '"____ any milk left?"',
                        options: ['Was there', 'Were there', 'Is there', 'Are there'],
                        correctIdx: 0
                    },
                    {
                        question: '"____ any students in the classroom?"',
                        options: ['Was there', 'Were there', 'Was not there', 'Did there were'],
                        correctIdx: 1
                    },
                    {
                        question: 'We use "There were" for:',
                        options: ['Singular nouns', 'Plural nouns', 'Uncountable nouns', 'Future actions'],
                        correctIdx: 1
                    },
                    {
                        question: 'We use "There was" for:',
                        options: ['Plural nouns', 'Singular and Uncountable nouns', 'Only names', 'Negative only'],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Was or Were?',
                instruction: 'Type: there was, there were, wasn\'t, or weren\'t',
                sentences: [
                    { text: '___ a huge cake at the party. (singular)', answer: 'There was' },
                    { text: '___ many children playing. (plural)', answer: 'There were' },
                    { text: '___ any shops open? (pregunta, plural)', answer: 'Were there' },
                    { text: '___ a car in the garage? (pregunta, singular)', answer: 'Was there' },
                    { text: '___ any clouds in the sky. (negativo, plural)', answer: 'There weren\'t' },
                    { text: '___ a fly in my soup! (singular)', answer: 'There was' },
                    { text: '___ some beautiful flowers in the vase.', answer: 'There were' },
                    { text: '___ anyone at the door? (singular)', answer: 'Was there' },
                    { text: '___ much traffic this morning. (uncountable)', answer: 'There wasn\'t' },
                    { text: '___ only three eggs left.', answer: 'There were' },
                    { text: '___ a problem with my phone yesterday.', answer: 'There was' },
                    { text: '___ any chairs in the room.', answer: 'There weren\'t' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Past Existence',
                instruction: 'Build correct sentences about what existed in the past',
                sentences: [
                    { text: 'THERE WAS A PARTY LAST NIGHT', translation: 'Hubo una fiesta anoche', distractors: ['WERE', 'ARE'] },
                    { text: 'WERE THERE ANY PEOPLE THERE', translation: '¿Había gente allí?', distractors: ['WAS', 'DO'] },
                    { text: 'THERE WERE NO APPLES LEFT', translation: 'No quedaban manzanas', distractors: ['WAS', 'IS'] },
                    { text: 'THERE WAS NOT MUCH TIME', translation: 'No había mucho tiempo', distractors: ['WERE', 'ARE'] },
                    { text: 'WAS THERE A PROBLEM YESTERDAY', translation: '¿Hubo un problema ayer?', distractors: ['WERE', 'DID'] },
                    { text: 'THERE WERE MANY TREES HERE', translation: 'Había muchos árboles aquí', distractors: ['WAS', 'WASNT'] },
                    { text: 'THERE WAS A CAT ON THE ROOF', translation: 'Había un gato en el tejado', distractors: ['WERE', 'ARE'] },
                    { text: 'WERE THERE ANY QUESTIONS LEFT', translation: '¿Quedaron preguntas?', distractors: ['WAS', 'DO'] },
                    { text: 'THERE WAS NOTHING IN THE BOX', translation: 'No había nada en la caja', distractors: ['WERE', 'BE'] },
                    { text: 'THERE WERE SOME COINS ON THE TABLE', translation: 'Había algunas monedas en la mesa', distractors: ['WAS', 'ARE'] }
                ]
            },
            // ── GAME 4: Memory Game – 12 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Singular vs. Plural Past',
                instruction: 'Match the noun type with the correct past form!',
                pairs: [
                    { emoji: 'A dog', word: 'There was' },
                    { emoji: 'Dogs', word: 'There were' },
                    { emoji: 'A house', word: 'There was' },
                    { emoji: 'Houses', word: 'There were' },
                    { emoji: 'Water (Uncountable)', word: 'There was' },
                    { emoji: 'Money (Uncountable)', word: 'There was' },
                    { emoji: 'People (Plural)', word: 'There were' },
                    { emoji: 'Information', word: 'There was' },
                    { emoji: 'Books', word: 'There were' },
                    { emoji: 'A song', word: 'There was' },
                    { emoji: 'Songs', word: 'There were' },
                    { emoji: 'Milk', word: 'There was' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Existence in the Past ☠️',
                instruction: 'Guess the word related to "There was/were"!',
                words: [
                    { word: 'SINGULAR', hint: 'Used with "there was"' },
                    { word: 'PLURAL', hint: 'Used with "there were"' },
                    { word: 'UNCOUNTABLE', hint: 'Nouns like water or rice (use "was")' },
                    { word: 'EXISTENCE', hint: 'What "there was/were" describes' },
                    { word: 'NEGATIVE', hint: 'There wasn\'t / There weren\'t' },
                    { word: 'QUESTION', hint: 'Was there? / Were there?' },
                    { word: 'YESTERDAY', hint: 'A common past time marker' },
                    { word: 'PREVIOUS', hint: 'Coming before' },
                    { word: 'COUNTABLE', hint: 'Nouns you can count' },
                    { word: 'AUXILIARY', hint: 'The verb "be" acts as an ___' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 1]);
        console.log('✅ Successfully updated A2 Topic 1 — There was / There were');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
