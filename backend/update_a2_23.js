require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Too vs. Enough',
                instruction: 'Can you choose the correct position and word?',
                questions: [
                    {
                        question: 'Where do we put "too"?',
                        options: ['Before the adjective', 'After the adjective', 'At the end of the sentence', 'Anywhere'],
                        correctIdx: 0
                    },
                    {
                        question: 'Where do we put "enough" with an adjective?',
                        options: ['Before the adjective', 'After the adjective', 'After the verb only', 'Before the verb'],
                        correctIdx: 1
                    },
                    {
                        question: '"This tea is ____ hot." (Excess)',
                        options: ['too', 'enough', 'much', 'very enough'],
                        correctIdx: 0
                    },
                    {
                        question: '"I am not strong ____ to lift this."',
                        options: ['too', 'enough', 'much', 'so'],
                        correctIdx: 1
                    },
                    {
                        question: 'Where does "enough" go with a NOUN (e.g., money)?',
                        options: ['Before the noun', 'After the noun', 'At the end', 'Not used with nouns'],
                        correctIdx: 0
                    },
                    {
                        question: '"I don\'t have ____ money for a car."',
                        options: ['too', 'enough', 'too much', 'A and C'],
                        correctIdx: 1
                    },
                    {
                        question: '"The room is ____ small." (Negative evaluation)',
                        options: ['too', 'enough', 'so enough', 'not enough'],
                        correctIdx: 0
                    },
                    {
                        question: '"Is it warm ____ outside?"',
                        options: ['too', 'enough', 'very', 'so'],
                        correctIdx: 1
                    },
                    {
                        question: '"Too many" is used with:',
                        options: ['Uncountable nouns', 'Plural countable nouns', 'Adjectives', 'Verbs'],
                        correctIdx: 1
                    },
                    {
                        question: '"Too much" is used with:',
                        options: ['Plural countable nouns', 'Uncountable nouns', 'Adjectives', 'Verbs'],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Adverbs of Degree',
                instruction: 'Type: too or enough',
                sentences: [
                    { text: 'The shoes are ___ big for me.', answer: 'too' },
                    { text: 'He isn\'t old ___ to drive.', answer: 'enough' },
                    { text: 'I have ___ work to do.', answer: 'too much' },
                    { text: 'We don\'t have ___ eggs for the cake.', answer: 'enough' },
                    { text: 'The water is ___ cold to swim.', answer: 'too' },
                    { text: 'Is the room bright ___?', answer: 'enough' },
                    { text: 'You are ___ young to watch this movie.', answer: 'too' },
                    { text: 'She speaks fast ___ for me to understand.', answer: 'enough' },
                    { text: 'There is ___ sugar in my tea. (excess)', answer: 'too much' },
                    { text: 'I don\'t have ___ time.', answer: 'enough' },
                    { text: 'The coffee is ___ sweet. (I don\'t like it)', answer: 'too' },
                    { text: 'He is smart ___ to solve the puzzle.', answer: 'enough' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Sufficient and Excessive',
                instruction: 'Order the words to build correct sentences',
                sentences: [
                    { text: 'THE SOUP IS TOO HOT', translation: 'La sopa está demasiado caliente', distractors: ['ENOUGH', 'ARE'] },
                    { text: 'I AM NOT TALL ENOUGH', translation: 'No soy lo suficientemente alto', distractors: ['TOO', 'THAN'] },
                    { text: 'DO YOU HAVE ENOUGH MONEY', translation: '¿Tienes suficiente dinero?', distractors: ['TOO', 'MANY'] },
                    { text: 'HE IS TOO TIRED TO', translation: 'Él está demasiado cansado para...', distractors: ['ENOUGH', 'WAS'] },
                    { text: 'THE ROOM IS BIG ENOUGH', translation: 'La habitación es suficientemente grande', distractors: ['TOO', 'ARE'] },
                    { text: 'SHE HAS TOO MANY BOOKS', translation: 'Ella tiene demasiados libros', distractors: ['MUCH', 'ARE'] },
                    { text: 'IS IT WARM ENOUGH TODAY', translation: '¿Hace suficiente calor hoy?', distractors: ['TOO', 'ARE'] },
                    { text: 'I HAD TOO MUCH COFFEE', translation: 'Tomé demasiado café', distractors: ['ENOUGH', 'MANY'] },
                    { text: 'WE DONT HAVE ENOUGH TIME', translation: 'No tenemos suficiente tiempo', distractors: ['TOO', 'MANY'] },
                    { text: 'THE BAG IS TOO HEAVY', translation: 'La bolsa es demasiado pesada', distractors: ['ENOUGH', 'ISNT'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Too/Enough Expressions',
                instruction: 'Match the adjective with the correct phrase!',
                pairs: [
                    { emoji: 'Hot', word: 'Too hot' },
                    { emoji: 'Cold', word: 'Too cold' },
                    { emoji: 'Tall', word: 'Tall enough' },
                    { emoji: 'Fast', word: 'Fast enough' },
                    { emoji: 'Money', word: 'Enough money' },
                    { emoji: 'Time', word: 'Enough time' },
                    { emoji: 'Many', word: 'Too many' },
                    { emoji: 'Much', word: 'Too much' },
                    { emoji: 'Old', word: 'Old enough' },
                    { emoji: 'Young', word: 'Too young' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Degrees ☠️',
                instruction: 'Guess the word!',
                words: [
                    { word: 'SUFFICIENT', hint: 'Another word for "enough"' },
                    { word: 'EXCESSIVE', hint: 'Another word for "too much"' },
                    { word: 'ADJECTIVE', hint: 'The part of speech "too" modifies' },
                    { word: 'CAPACITY', hint: 'The amount something can hold' },
                    { word: 'REQUIRE', hint: 'To need something' },
                    { word: 'ADEQUATE', hint: 'Good enough' },
                    { word: 'ABUNDANCE', hint: 'A large amount of something' },
                    { word: 'SCARCITY', hint: 'Not enough of something' },
                    { word: 'QUANTITY', hint: 'How much there is' },
                    { word: 'DISTANCE', hint: 'How far something is' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 23]);
        console.log('✅ Successfully updated A2 Topic 23 — Too vs. Enough');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
