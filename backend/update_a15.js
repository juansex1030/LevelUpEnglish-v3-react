require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [

            // ── GAME 1: Trivia – 10 questions ─────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Food and Drinks',
                instruction: 'Test your vocabulary about food and drinks!',
                questions: [
                    {
                        question: 'Which of these is a fruit?',
                        options: ['Potato', 'Apple', 'Carrot', 'Onion'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which of these do you usually drink?',
                        options: ['Bread', 'Chicken', 'Water', 'Cheese'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which is considered "fast food"?',
                        options: ['Salad', 'Soup', 'Hamburger', 'Apple'],
                        correctIdx: 2
                    },
                    {
                        question: 'What do bees make that is sweet?',
                        options: ['Sugar', 'Honey', 'Salt', 'Butter'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which of these is a vegetable?',
                        options: ['Banana', 'Grape', 'Carrot', 'Orange'],
                        correctIdx: 2
                    },
                    {
                        question: 'What do you need to make an omelette?',
                        options: ['Eggs', 'Apples', 'Chicken', 'Beef'],
                        correctIdx: 0
                    },
                    {
                        question: 'Which meat comes from a cow?',
                        options: ['Pork', 'Chicken', 'Beef', 'Fish'],
                        correctIdx: 2
                    },
                    {
                        question: 'What is a popular Italian food?',
                        options: ['Sushi', 'Tacos', 'Pizza', 'Croissant'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which of these is a dessert?',
                        options: ['Steak', 'Ice cream', 'Soup', 'Salad'],
                        correctIdx: 1
                    },
                    {
                        question: 'What do you put in coffee to make it sweet?',
                        options: ['Salt', 'Pepper', 'Sugar', 'Butter'],
                        correctIdx: 2
                    },
                ]
            },

            // ── GAME 2: Fill Blanks – 12 sentences ────────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Food Vocabulary',
                instruction: 'Complete the sentence with the correct food word.',
                sentences: [
                    { text: 'I drink ___ every morning with my eggs. (coffee)',             answer: 'coffee'    },
                    { text: 'A ___ is a yellow fruit that monkeys love. (banana)',          answer: 'banana'    },
                    { text: 'I like my sandwich with ham and ___. (cheese)',                answer: 'cheese'    },
                    { text: 'Vegetarians do not eat ___. (meat)',                           answer: 'meat'      },
                    { text: 'For breakfast, I usually eat bread and ___. (butter)',         answer: 'butter'    },
                    { text: 'It is healthy to drink 8 glasses of ___ a day. (water)',       answer: 'water'     },
                    { text: 'A margarita ___ has tomato sauce and cheese. (pizza)',         answer: 'pizza'     },
                    { text: 'Can I have a cup of ___, please? (tea)',                       answer: 'tea'       },
                    { text: 'Kids love eating ___ fries. (french)',                         answer: 'french'    },
                    { text: 'You need ___ to bake a cake. (flour)',                         answer: 'flour'     },
                    { text: 'An ___ a day keeps the doctor away. (apple)',                  answer: 'apple'     },
                    { text: 'Do you prefer white or red ___? (wine)',                       answer: 'wine'      },
                ]
            },

            // ── GAME 3: Memory Game – 8 pairs ─────────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Food & Beverages',
                instruction: 'Match the food emoji with its name in English',
                pairs: [
                    { emoji: '🍎', word: 'Apple' },
                    { emoji: '🧀', word: 'Cheese' },
                    { emoji: '🍕', word: 'Pizza' },
                    { emoji: '🍔', word: 'Hamburger' },
                    { emoji: '🥕', word: 'Carrot' },
                    { emoji: '☕', word: 'Coffee' },
                    { emoji: '🥛', word: 'Milk' },
                    { emoji: '🥖', word: 'Bread' },
                ]
            },

            // ── GAME 4: Unscramble – 10 words/sentences ───────────────────
            {
                type: 'unscramble',
                title: '🔀 Unscramble: Food Items',
                instruction: 'Unscramble the letters to find the correct food word',
                questions: [
                    { q: 'P E L A P',        a: 'APPLE' },
                    { q: 'E E H E C S',      a: 'CHEESE' },
                    { q: 'K I L M',          a: 'MILK' },
                    { q: 'T R A O C R',      a: 'CARROT' },
                    { q: 'A I P Z Z',        a: 'PIZZA' },
                    { q: 'O F F C E E',      a: 'COFFEE' },
                    { q: 'A T O O P T',      a: 'POTATO' },
                    { q: 'A E T',            a: 'TEA' },
                    { q: 'A O O M T T',      a: 'TOMATO' },
                    { q: 'I C E K N H C',    a: 'CHICKEN' },
                ]
            },

            // ── GAME 5: Sentence Builder – 10 sentences ───────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Ordering Food',
                instruction: 'Arrange the words to form correct sentences related to food.',
                sentences: [
                    {
                        text: 'I would like a coffee.',
                        translation: 'Me gustaría un café.',
                        distractors: ['likes']
                    },
                    {
                        text: 'Can I have the menu?',
                        translation: '¿Puedo tener el menú?',
                        distractors: ['has']
                    },
                    {
                        text: 'This soup is very hot.',
                        translation: 'Esta sopa está muy caliente.',
                        distractors: ['hotter']
                    },
                    {
                        text: 'I am allergic to nuts.',
                        translation: 'Soy alérgico a las nueces.',
                        distractors: ['allergics']
                    },
                    {
                        text: 'Do you have vegetarian food?',
                        translation: '¿Tienen comida vegetariana?',
                        distractors: ['Does']
                    },
                    {
                        text: 'The bill, please.',
                        translation: 'La cuenta, por favor.',
                        distractors: ['bills']
                    },
                    {
                        text: 'I love eating Italian pasta.',
                        translation: 'Me encanta comer pasta italiana.',
                        distractors: ['eats']
                    },
                    {
                        text: 'She doesn\'t eat red meat.',
                        translation: 'Ella no come carne roja.',
                        distractors: ['don\'t']
                    },
                    {
                        text: 'We need to buy milk.',
                        translation: 'Necesitamos comprar leche.',
                        distractors: ['buys']
                    },
                    {
                        text: 'Are you ready to order?',
                        translation: '¿Estás listo para ordenar?',
                        distractors: ['Is']
                    },
                ]
            },
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query(
            'UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3',
            [strData, 'A1', 15]
        );
        console.log('✅ Successfully updated A1 Topic 15 — Food');
        console.log('   → Game 1 (trivia_game):      10 questions');
        console.log('   → Game 2 (fill_blanks_game): 12 sentences');
        console.log('   → Game 3 (memory_game):      8 pairs');
        console.log('   → Game 4 (unscramble):       10 words');
        console.log('   → Game 5 (sentence_builder): 10 sentences');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
