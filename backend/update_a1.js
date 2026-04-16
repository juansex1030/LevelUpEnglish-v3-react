require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            {
                type: 'hangman_game',
                title: 'Hangman: Greetings & Farewells ☠️',
                instruction: 'Guess the word related to greetings and farewells!',
                words: [
                    { word: 'HELLO', hint: 'The most common greeting' },
                    { word: 'GOODBYE', hint: 'A formal way to say bye' },
                    { word: 'MORNING', hint: 'Before noon' },
                    { word: 'AFTERNOON', hint: 'Between 12 PM and 6 PM' },
                    { word: 'EVENING', hint: 'Between 6 PM and midnight' },
                    { word: 'NIGHT', hint: 'Time to sleep' },
                    { word: 'WELCOME', hint: 'Greeting a new person' },
                    { word: 'PLEASURE', hint: 'It is a ___ to meet you' },
                    { word: 'GREETINGS', hint: 'Formal word for greetings' },
                    { word: 'FAREWELL', hint: 'A very formal goodbye' }
                ]
            },
            {
                type: 'memory_game',
                title: 'Memory Challenge 🧠',
                instruction: 'Match the greetings with their emojis!',
                pairs: [
                    { emoji: '👋', word: 'Hello' },
                    { emoji: '🤝', word: 'Nice to meet you' },
                    { emoji: '🌅', word: 'Good morning' },
                    { emoji: '☀️', word: 'Good afternoon' },
                    { emoji: '🌆', word: 'Good evening' },
                    { emoji: '🌙', word: 'Good night' },
                    { emoji: '✌️', word: 'Goodbye' },
                    { emoji: '🙋‍♂️', word: 'Hi' },
                    { emoji: '🙏', word: 'Thanks' },
                    { emoji: '😊', word: 'Fine' }
                ]
            },
            {
                type: 'crossword_game',
                title: 'Crossword 📝',
                instruction: 'Complete the crossword with greeting vocabulary',
                gridSize: { rows: 10, cols: 10 },
                words: [
                    { word: 'MORNING', hint: 'Good ___ (before noon)', row: 0, col: 0, dir: 'across', num: 1 },
                    { word: 'HELLO', hint: 'Common greeting', row: 2, col: 0, dir: 'across', num: 2 },
                    { word: 'NIGHT', hint: 'Good ___ (before sleep)', row: 0, col: 2, dir: 'down', num: 3 },
                    { word: 'AFTERNOON', hint: 'Good ___ (3 PM)', row: 4, col: 0, dir: 'across', num: 4 },
                    { word: 'EVENING', hint: 'Good ___ (arrival at 8 PM)', row: 0, col: 5, dir: 'down', num: 5 },
                    { word: 'GOODBYE', hint: 'Formal farewell', row: 6, col: 2, dir: 'across', num: 6 },
                    { word: 'WELCOME', hint: 'You are ___!', row: 0, col: 8, dir: 'down', num: 7 },
                    { word: 'LATER', hint: 'See you ___', row: 8, col: 1, dir: 'across', num: 8 },
                    { word: 'SOON', hint: 'See you ___', row: 2, col: 7, dir: 'down', num: 9 },
                    { word: 'FINE', hint: 'I am ___, thanks', row: 9, col: 5, dir: 'across', num: 10 }
                ]
            },
            {
                type: 'sentence_builder',
                title: 'Sentence Builder 🧩',
                instruction: 'Arrange the words to form a correct phrase',
                sentences: [
                    { text: 'HELLO NICE TO MEET YOU', translation: 'Hola, encantado de conocerte', distractors: ['BYE', 'MORNING'] },
                    { text: 'GOOD MORNING HOW ARE YOU', translation: 'Buenos días, ¿cómo estás?', distractors: ['WHAT', 'IS'] },
                    { text: 'I AM VERY WELL THANK YOU', translation: 'Estoy muy bien, gracias', distractors: ['SAD', 'BAD'] },
                    { text: 'HAVE A NICE DAY', translation: 'Que tengas un buen día', distractors: ['NIGHT', 'TIME'] },
                    { text: 'SEE YOU TOMORROW', translation: 'Nos vemos mañana', distractors: ['YESTERDAY', 'LOOK'] },
                    { text: 'GOOD EVENING AND GOOD NIGHT', translation: 'Buenas tardes y buenas noches', distractors: ['MORNING', 'SUN'] },
                    { text: 'WHAT IS YOUR NAME', translation: '¿Cuál es tu nombre?', distractors: ['WHO', 'ARE'] },
                    { text: 'HI MY NAME IS JUAN', translation: 'Hola, mi nombre es Juan', distractors: ['AM', 'THE'] },
                    { text: 'NICE TO SEE YOU AGAIN', translation: 'Gusto en verte de nuevo', distractors: ['MEET', 'BYE'] },
                    { text: 'TAKE CARE AND GOODBYE', translation: 'Cuídate y adiós', distractors: ['LOOK', 'HELLO'] }
                ]
            },
            {
                type: 'trivia_game',
                title: 'Greetings Trivia 🏆',
                instruction: 'Choose the correct answer',
                questions: [
                    { question: 'What is an informal greeting?', options: ['Good morning', 'How do you do?', 'Hi there!', 'Good evening'], correctIdx: 2 },
                    { question: 'When you go to sleep, you say:', options: ['Good evening', 'Good night', 'Goodbye', 'See you'], correctIdx: 1 },
                    { question: 'Response to "Nice to meet you"?', options: ['Me too', 'Nice to meet you too', 'Thank you', 'Hello'], correctIdx: 1 },
                    { question: 'Greeting at 3:00 PM?', options: ['Good morning', 'Good evening', 'Good afternoon', 'Good night'], correctIdx: 2 },
                    { question: 'Shortest way to say "Goodbye"?', options: ['Farewell', 'Later', 'Bye', 'Greetings'], correctIdx: 2 },
                    { question: '"How are you?" in Spanish is:', options: ['¿Dónde estás?', '¿Cómo te llamas?', '¿De dónde eres?', '¿Cómo estás?'], correctIdx: 3 },
                    { question: 'Greeting at 8 PM arrival?', options: ['Good evening', 'Good night', 'Goodbye', 'See you'], correctIdx: 0 },
                    { question: 'What do you say after "Thank you"?', options: ['Welcome', 'You are welcome', 'Good', 'Hi'], correctIdx: 1 },
                    { question: 'Synonym for "Nice to meet you"?', options: ['Pleased to meet you', 'How are you', 'Where are you', 'Bye'], correctIdx: 0 },
                    { question: '"See you later" means:', options: ['Nos vemos pronto', 'Nos vemos luego', 'Hola luego', 'Adiós hoy'], correctIdx: 1 }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A1', 1]);
        console.log('✅ Successfully updated A1 Topic 1 to contain 10+ exercises per game');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

run();

