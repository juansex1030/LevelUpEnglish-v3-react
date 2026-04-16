require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Quantifiers (How much/many)',
                instruction: 'Can you count things in English?',
                questions: [
                    {
                        question: 'Which quantifier do we use with PLURAL countable nouns?',
                        options: ['Much', 'Many', 'A little', 'Not any'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which quantifier do we use with UNCOUNTABLE nouns?',
                        options: ['Many', 'Much', 'A few', 'Any'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which one can be used for BOTH countable and uncountable?',
                        options: ['A lot of', 'Many', 'Much', 'Few'],
                        correctIdx: 0
                    },
                    {
                        question: '"I have ____ friends." (small number)',
                        options: ['a little', 'a few', 'much', 'many'],
                        correctIdx: 1
                    },
                    {
                        question: '"There isn\'t ____ water in the bottle."',
                        options: ['many', 'much', 'a few', 'some'],
                        correctIdx: 1
                    },
                    {
                        question: '"I need ____ help with this." (small amount)',
                        options: ['a few', 'a little', 'many', 'lot'],
                        correctIdx: 1
                    },
                    {
                        question: '"How ____ apples do you want?"',
                        options: ['much', 'many', 'any', 'a lot'],
                        correctIdx: 1
                    },
                    {
                        question: '"How ____ money do you have?"',
                        options: ['many', 'much', 'any', 'a few'],
                        correctIdx: 1
                    },
                    {
                        question: 'We use "any" in:',
                        options: ['Questions and Negatives', 'Positive only', 'Daily habits', 'Future plans'],
                        correctIdx: 0
                    },
                    {
                        question: 'Which means "almost none"?',
                        options: ['A lot of', 'Very few / Very little', 'Many', 'Some'],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Much, Many, Few, Little',
                instruction: 'Type: much, many, a few, or a little',
                sentences: [
                    { text: 'I don\'t have ___ time to talk. (uncountable)', answer: 'much' },
                    { text: 'There are ___ people in the room. (small number, countable)', answer: 'a few' },
                    { text: 'How ___ brothers do you have?', answer: 'many' },
                    { text: 'I only need ___ salt on my food. (small amount, uncountable)', answer: 'a little' },
                    { text: 'There isn\'t ___ milk in the fridge.', answer: 'much' },
                    { text: 'Give me ___ minutes to get ready.', answer: 'a few' },
                    { text: 'I have ___ money left. (small amount)', answer: 'a little' },
                    { text: 'He has ___ friends in this city. (small number)', answer: 'a few' },
                    { text: 'How ___ homework do you have?', answer: 'much' },
                    { text: 'I don\'t have ___ coins in my bag.', answer: 'many' },
                    { text: 'There are too ___ cars on the road.', answer: 'many' },
                    { text: 'Is there ___ sugar in the jar?', answer: 'much' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Quantities',
                instruction: 'Build correct sentences using quantifiers',
                sentences: [
                    { text: 'HOW MUCH MONEY DO YOU HAVE', translation: '¿Cuánto dinero tienes?', distractors: ['MANY', 'ARE'] },
                    { text: 'HOW MANY BOOKS ARE ON TABLE', translation: '¿Cuántos libros hay en la mesa?', distractors: ['MUCH', 'IS'] },
                    { text: 'I HAVE A FEW GOOD FRIENDS', translation: 'Tengo unos pocos buenos amigos', distractors: ['LITTLE', 'MUCH'] },
                    { text: 'IS THERE ANY MILK IN FRIDGE', translation: '¿Hay algo de leche en la nevera?', distractors: ['MANY', 'ARE'] },
                    { text: 'THERE IS A LOT OF TRAFFIC', translation: 'Hay mucho tráfico', distractors: ['MANY', 'ARE'] },
                    { text: 'HE HAS TOO MANY SHOES NOW', translation: 'Él tiene demasiados zapatos ahora', distractors: ['MUCH', 'ARE'] },
                    { text: 'I NEED A LITTLE HELP HERE', translation: 'Necesito un poco de ayuda aquí', distractors: ['FEW', 'MANY'] },
                    { text: 'SHE DOES NOT HAVE MUCH TIME', translation: 'Ella no tiene mucho tiempo', distractors: ['MANY', 'ANY'] },
                    { text: 'THERE ARE FEW APPLES LEFT IN', translation: 'Quedan pocas manzanas en...', distractors: ['LITTLE', 'MUCH'] },
                    { text: 'WE NEED MORE EGGS FOR CAKE', translation: 'Necesitamos más huevos para el pastel', distractors: ['ANY', 'MUCH'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Countable vs. Uncountable',
                instruction: 'Match the noun with the correct question word!',
                pairs: [
                    { emoji: 'Apples', word: 'How many' },
                    { emoji: 'Money', word: 'How much' },
                    { emoji: 'Time', word: 'How much' },
                    { emoji: 'Friends', word: 'How many' },
                    { emoji: 'Water', word: 'How much' },
                    { emoji: 'Cars', word: 'How many' },
                    { emoji: 'Milk', word: 'How much' },
                    { emoji: 'Coins', word: 'How many' },
                    { emoji: 'Sugar', word: 'How much' },
                    { emoji: 'People', word: 'How many' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Quantity Words ☠️',
                instruction: 'Guess the word!',
                words: [
                    { word: 'QUANTITY', hint: 'The amount of something' },
                    { word: 'COUNTABLE', hint: 'Nouns you can count (1, 2, 3...)' },
                    { word: 'UNCOUNTABLE', hint: 'Nouns you cannot count' },
                    { word: 'MANY', hint: 'Large number (countable)' },
                    { word: 'MUCH', hint: 'Large amount (uncountable)' },
                    { word: 'A FEW', hint: 'Small number (countable)' },
                    { word: 'A LITTLE', hint: 'Small amount (uncountable)' },
                    { word: 'ENOUGH', hint: 'The right amount' },
                    { word: 'LOTS OF', hint: 'A large quantity' },
                    { word: 'SEVERAL', hint: 'More than a few, but not many' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 12]);
        console.log('✅ Successfully updated A2 Topic 12 — Quantifiers');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
