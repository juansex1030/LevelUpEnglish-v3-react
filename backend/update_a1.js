require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            {
                type: 'hangman_game',
                title: 'Hangman: Greetings & Farewells ☠️',
                instruction: 'Adivina la palabra antes de perder tus 6 vidas',
                words: [
                    { word: 'HELLO', hint: 'Un saludo muy común' },
                    { word: 'GOOD MORNING', hint: 'Lo dices al despertar' },
                    { word: 'GOODBYE', hint: 'Despedida formal' }
                ]
            },
            {
                type: 'memory_game',
                title: 'Memory Challenge 🧠',
                instruction: 'Encuentra las parejas de saludos con su emoji respectivo',
                pairs: [
                    { emoji: '👋', word: 'Hello' },
                    { emoji: '🤝', word: 'Nice to meet you' },
                    { emoji: '🌅', word: 'Good morning' },
                    { emoji: '✌️', word: 'Goodbye' }
                ]
            },
            {
                type: 'crossword_game',
                title: 'Crossword 📝',
                instruction: 'Haz clic en el primer cuadro amarillo para ver la pista y escribe para completarlo',
                gridSize: { rows: 7, cols: 8 },
                words: [
                    { word: 'MORNING', hint: 'Good ___ (Antes del mediodía)', row: 0, col: 0, dir: 'across', num: 1 },
                    { word: 'GOODBYE', hint: 'Despedida formal (G...O...O...)', row: 0, col: 6, dir: 'down', num: 2 },
                    { word: 'HELLO', hint: 'Hola en inglés', row: 2, col: 2, dir: 'across', num: 3 }
                ]
            },
            {
                type: 'sentence_builder',
                title: 'Sentence Builder 🧩',
                instruction: 'Toca las palabras en el orden correcto para formar la oración',
                sentences: [
                    { text: 'HELLO NICE TO MEET YOU', translation: 'Hola, encantado de conocerte', distractors: ['BYE', 'MORNING'] },
                    { text: 'GOOD MORNING HOW ARE YOU', translation: 'Buenos días, ¿cómo estás?', distractors: ['WHAT', 'IS'] },
                    { text: 'I AM VERY WELL THANK YOU', translation: 'Estoy muy bien, gracias', distractors: ['SAD', 'BAD'] },
                    { text: 'HAVE A NICE DAY', translation: 'Que tengas un buen día', distractors: ['NIGHT', 'TIME'] },
                    { text: 'SEE YOU TOMORROW', translation: 'Nos vemos mañana', distractors: ['YESTERDAY', 'LOOK'] },
                    { text: 'GOOD EVENING AND GOOD NIGHT', translation: 'Buenas tardes y buenas noches', distractors: ['MORNING', 'SUN'] }
                ]
            },
            {
                type: 'trivia_game',
                title: 'Greetings Trivia 🏆',
                instruction: 'Selecciona la respuesta correcta para cada pregunta',
                questions: [
                    { question: '¿Cuál de los siguientes es un saludo informal?', options: ['Good morning', 'How do you do?', 'Hi there!', 'Good evening'], correctIdx: 2 },
                    { question: 'Cuando te vas a dormir, ¿qué dices?', options: ['Good evening', 'Good night', 'Goodbye', 'See you'], correctIdx: 1 },
                    { question: '¿Cómo respondes a "Nice to meet you"?', options: ['Me too', 'Nice to meet you too', 'Thank you', 'Hello'], correctIdx: 1 },
                    { question: '¿Qué saludo tradicional usarías a las 3:00 PM?', options: ['Good morning', 'Good evening', 'Good afternoon', 'Good night'], correctIdx: 2 },
                    { question: 'La forma más corta y amigable de decir "Goodbye" es...', options: ['Farewell', 'Later', 'Bye', 'Greetings'], correctIdx: 2 },
                    { question: '"How are you?" se traduce al español como...', options: ['¿Dónde estás?', '¿Cómo te llamas?', '¿De dónde eres?', '¿Cómo estás?'], correctIdx: 3 }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A1', 1]);
        console.log('Successfully updated A1 Topic 1 to contain 5 GAMES TOTAL');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

run();
