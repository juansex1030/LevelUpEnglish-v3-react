require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Comparisons and Evaluations',
                instruction: 'Can you compare things correctly?',
                questions: [
                    {
                        question: 'What word do we use for a result that is the same? (equality)',
                        options: ['As... as', 'Than... than', 'More... as', 'Very... as'],
                        correctIdx: 0
                    },
                    {
                        question: 'Which word means "too much" (excess)?',
                        options: ['Enough', 'Too', 'More', 'Less'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which word means "the right amount" (sufficiency)?',
                        options: ['Too', 'Enough', 'As', 'Most'],
                        correctIdx: 1
                    },
                    {
                        question: 'Comparative form of "bad"?',
                        options: ['Badder', 'Worse', 'Worst', 'More bad'],
                        correctIdx: 1
                    },
                    {
                        question: 'Comparative form of "good"?',
                        options: ['Gooder', 'Better', 'Best', 'More good'],
                        correctIdx: 1
                    },
                    {
                        question: '"This car is ____ as that one." (negating equality)',
                        options: ['not as', 'no as', 'without as', 'not than'],
                        correctIdx: 0
                    },
                    {
                        question: '"This is ____ expensive for me to buy." (negating affordability)',
                        options: ['too', 'enough', 'more', 'as'],
                        correctIdx: 0
                    },
                    {
                        question: '"She is not old ____ to drive." (missing requirement)',
                        options: ['too', 'enough', 'more', 'as'],
                        correctIdx: 1
                    },
                    {
                        question: 'Correct way to compare 2 things?',
                        options: ['Adjective + -er than', 'More + adjective than', 'Both A and B (depending on length)', 'Only A'],
                        correctIdx: 2
                    },
                    {
                        question: '"London is ____ than Madrid." (rain)',
                        options: ['rainier', 'more rainy', 'most rainy', 'rainyest'],
                        correctIdx: 0
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Comparisons, Too, and Enough',
                instruction: 'Type the correct word(s): than, as, too, or enough',
                sentences: [
                    { text: 'My brother is taller ___ me.', answer: 'than' },
                    { text: 'This coffee is ___ hot to drink.', answer: 'too' },
                    { text: 'I don\'t have ___ money for a new phone.', answer: 'enough' },
                    { text: 'She is as smart ___ her sister.', answer: 'as' },
                    { text: 'The movie was more exciting ___ the book.', answer: 'than' },
                    { text: 'The box is not large ___ for all these books.', answer: 'enough' },
                    { text: 'The weather is ___ cold to go outside.', answer: 'too' },
                    { text: 'He isn\'t old ___ to vote.', answer: 'enough' },
                    { text: 'This dress is not as expensive ___ that one.', answer: 'as' },
                    { text: 'Your car is better ___ mine.', answer: 'than' },
                    { text: 'I am ___ tired to continue.', answer: 'too' },
                    { text: 'Is there ___ time to finish the project?', answer: 'enough' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Evaluations',
                instruction: 'Order the words to build correct comparison sentences',
                sentences: [
                    { text: 'THIS CAR IS TOO EXPENSIVE', translation: 'Este carro es demasiado caro', distractors: ['ENOUGH', 'AS'] },
                    { text: 'I AM NOT OLD ENOUGH', translation: 'No soy lo suficientemente mayor', distractors: ['TOO', 'THAN'] },
                    { text: 'HE IS TALLER THAN BROTHER', translation: 'Él es más alto que su hermano', distractors: ['AS', 'MOST'] },
                    { text: 'AS FAST AS A TRAIN', translation: 'Tan rápido como un tren', distractors: ['THAN', 'MORE'] },
                    { text: 'SHE IS NOT AS KIND', translation: 'Ella no es tan amable', distractors: ['THAN', 'TOO'] },
                    { text: 'ENOUGH FOOD FOR EVERYONE NOW', translation: 'Suficiente comida para todos ahora', distractors: ['TOO', 'AS'] },
                    { text: 'THIS CAKE IS SWEETER THAN THAT', translation: 'Este pastel es más dulce que aquél', distractors: ['AS', 'MORE'] },
                    { text: 'I HAVE TOO MUCH WORK', translation: 'Tengo demasiado trabajo', distractors: ['ENOUGH', 'BE'] },
                    { text: 'ARE YOU GOOD ENOUGH TO WIN', translation: '¿Eres lo suficientemente bueno para ganar?', distractors: ['TOO', 'SO'] },
                    { text: 'MATH IS HARDER THAN ENGLISH', translation: 'Las matemáticas son más difíciles que el inglés', distractors: ['MORE', 'AS'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Comparing opposites',
                instruction: 'Match the adjective with its comparative form!',
                pairs: [
                    { emoji: 'Fast', word: 'Faster than' },
                    { emoji: 'Slow', word: 'Slower than' },
                    { emoji: 'Big', word: 'Bigger than' },
                    { emoji: 'Small', word: 'Smaller than' },
                    { emoji: 'Hot', word: 'Hotter than' },
                    { emoji: 'Cold', word: 'Colder than' },
                    { emoji: 'Busy', word: 'Busier than' },
                    { emoji: 'Quiet', word: 'Quieter than' },
                    { emoji: 'Old', word: 'Older than' },
                    { emoji: 'New', word: 'Newer than' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Ranking words ☠️',
                instruction: 'Guess the word used for comparison/evaluation!',
                words: [
                    { word: 'BETTER', hint: 'The opposite of worse' },
                    { word: 'ENOUGH', hint: 'Satisfactory amount' },
                    { word: 'EXPENSIVE', hint: 'Costs a lot of money' },
                    { word: 'GREATER', hint: 'More important or larger' },
                    { word: 'QUALITIES', hint: 'Characteristics of something' },
                    { word: 'QUANTITY', hint: 'How much there is' },
                    { word: 'SUPERIOR', hint: 'Better than others' },
                    { word: 'INFERIOR', hint: 'Worse than others' },
                    { word: 'DIFFERENCE', hint: 'What makes something not the same' },
                    { word: 'EVALUATION', hint: 'Giving a value to something' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 4]);
        console.log('✅ Successfully updated A2 Topic 4 — Comparisons and Evaluations');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
