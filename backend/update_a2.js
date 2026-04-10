require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            {
                type: 'hangman_game',
                title: 'Hangman: Personal Intro ☠️',
                instruction: 'Adivina la palabra relacionada con presentarse',
                words: [
                    { word: 'NAME', hint: 'Lo que usas para identificarte' },
                    { word: 'COUNTRY', hint: 'El lugar donde naciste' },
                    { word: 'AGE', hint: 'Cuántos años tienes' },
                    { word: 'STUDENT', hint: 'Alguien que va a la escuela o universidad' }
                ]
            },
            {
                type: 'memory_game',
                title: 'Memory Challenge 🧠',
                instruction: 'Empareja los emojis con el vocabulario correspondiente',
                pairs: [
                    { emoji: '🙋‍♂️', word: 'Name' },
                    { emoji: '🌍', word: 'Country' },
                    { emoji: '🎂', word: 'Age' },
                    { emoji: '🎓', word: 'Student' },
                    { emoji: '💼', word: 'Job' },
                    { emoji: '🏡', word: 'City' }
                ]
            },
            {
                type: 'crossword_game',
                title: 'Crossword 📝',
                instruction: 'Adivina las palabras cruzadas sobre cómo presentarte',
                gridSize: { rows: 4, cols: 8 },
                words: [
                    { word: 'NAME', hint: 'My ___ is John', row: 0, col: 3, dir: 'across', num: 1 },
                    { word: 'AGE', hint: 'How old you are', row: 0, col: 4, dir: 'down', num: 2 },
                    { word: 'STUDENT', hint: 'I study at the university. I am a ___', row: 2, col: 0, dir: 'across', num: 3 }
                ]
            },
            {
                type: 'sentence_builder',
                title: 'Sentence Builder 🧩',
                instruction: 'Ordena las palabras para formar la frase correcta',
                sentences: [
                    { text: 'WHAT IS YOUR NAME', translation: '¿Cuál es tu nombre?', distractors: ['YOU', 'HOW'] },
                    { text: 'I AM TWENTY YEARS OLD', translation: 'Tengo veinte años', distractors: ['HAVE', 'IS'] },
                    { text: 'WHERE ARE YOU FROM', translation: '¿De dónde eres?', distractors: ['WHAT', 'DO'] },
                    { text: 'I AM FROM MEXICO', translation: 'Soy de México', distractors: ['IN', 'AT'] }
                ]
            },
            {
                type: 'trivia_game',
                title: 'Introduction Trivia 🏆',
                instruction: 'Selecciona la mejor respuesta para presentarte',
                questions: [
                    { question: '"I ___ Juan."', options: ['is', 'be', 'am', 'are'], correctIdx: 2 },
                    { question: 'Para decir tu edad en inglés, la regla correcta es:', options: ['Usar el verbo To Have (Tener)', 'Usar la palabra Years solamente', 'Usar el verbo To Be (Ser/Estar)', 'No se dice la edad en inglés'], correctIdx: 2 },
                    { question: 'What is the correct question to ask about a country?', options: ['What are you from?', 'Where are you from?', 'Who are you from?', 'When are you from?'], correctIdx: 1 },
                    { question: '"Where ___ you from?"', options: ['is', 'are', 'do', 'have'], correctIdx: 1 }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A1', 2]);
        console.log('Successfully updated A1 Topic 2 to contain 5 GAMES TOTAL');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

run();
