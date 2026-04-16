require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            {
                type: 'hangman_game',
                title: 'Hangman: Personal Intro ☠️',
                instruction: 'Guess the word related to personal information!',
                words: [
                    { word: 'NAME', hint: 'What people call you' },
                    { word: 'COUNTRY', hint: 'Where you are from' },
                    { word: 'AGE', hint: 'How old you are' },
                    { word: 'STUDENT', hint: 'A person who learns at school' },
                    { word: 'TEACHER', hint: 'A person who helps you learn' },
                    { word: 'INTRODUCE', hint: 'To say who you are' },
                    { word: 'ADDRESS', hint: 'Where you live (street/number)' },
                    { word: 'SURNAME', hint: 'Your family name' },
                    { word: 'BIRTHDAY', hint: 'The day you were born' },
                    { word: 'FRIENDS', hint: 'People you like and spend time with' }
                ]
            },
            {
                type: 'memory_game',
                title: 'Memory Challenge 🧠',
                instruction: 'Match the personal intro icons with their words!',
                pairs: [
                    { emoji: '🙋‍♂️', word: 'Name' },
                    { emoji: '🌍', word: 'Country' },
                    { emoji: '🎂', word: 'Age' },
                    { emoji: '🎓', word: 'Student' },
                    { emoji: '💼', word: 'Job' },
                    { emoji: '🏡', word: 'City' },
                    { emoji: '🏢', word: 'Address' },
                    { emoji: '🆔', word: 'Surname' },
                    { emoji: '📅', word: 'Birthday' },
                    { emoji: '🗣️', word: 'Language' }
                ]
            },
            {
                type: 'crossword_game',
                title: 'Crossword 📝',
                instruction: 'Complete the crossword with intro vocabulary',
                gridSize: { rows: 10, cols: 10 },
                words: [
                    { word: 'NAME', hint: 'My ___ is John', row: 0, col: 3, dir: 'across', num: 1 },
                    { word: 'AGE', hint: 'How old you are', row: 0, col: 4, dir: 'down', num: 2 },
                    { word: 'STUDENT', hint: 'I study at university. I am a ___', row: 2, col: 0, dir: 'across', num: 3 },
                    { word: 'COUNTRY', hint: 'Where you are from', row: 0, col: 8, dir: 'down', num: 4 },
                    { word: 'JOB', hint: 'What you do for work', row: 4, col: 2, dir: 'across', num: 5 },
                    { word: 'CITY', hint: 'I live in a big ___', row: 5, col: 0, dir: 'down', num: 6 },
                    { word: 'ADDRESS', hint: 'Street and number', row: 7, col: 1, dir: 'across', num: 7 },
                    { word: 'BORN', hint: 'I was ___ in Spain', row: 2, col: 6, dir: 'down', num: 8 },
                    { word: 'LIVE', hint: 'Where do you ___?', row: 9, col: 3, dir: 'across', num: 9 },
                    { word: 'MEET', hint: 'Nice to ___ you', row: 4, col: 7, dir: 'down', num: 10 }
                ]
            },
            {
                type: 'sentence_builder',
                title: 'Sentence Builder 🧩',
                instruction: 'Arrange the words to form a correct personal introduction',
                sentences: [
                    { text: 'WHAT IS YOUR NAME', translation: '¿Cuál es tu nombre?', distractors: ['YOU', 'HOW'] },
                    { text: 'I AM TWENTY YEARS OLD', translation: 'Tengo veinte años', distractors: ['HAVE', 'IS'] },
                    { text: 'WHERE ARE YOU FROM', translation: '¿De dónde eres?', distractors: ['WHAT', 'DO'] },
                    { text: 'I AM FROM MEXICO', translation: 'Soy de México', distractors: ['IN', 'AT'] },
                    { text: 'NICE TO MEET YOU', translation: 'Encantado de conocerte', distractors: ['SEE', 'YOU'] },
                    { text: 'MY SURNAME IS SMITH', translation: 'Mi apellido es Smith', distractors: ['NAME', 'THE'] },
                    { text: 'I AM A STUDENT', translation: 'Soy un estudiante', distractors: ['THE', 'AN'] },
                    { text: 'WHERE DO YOU LIVE', translation: '¿Dónde vives?', distractors: ['ARE', 'IS'] },
                    { text: 'DO YOU HAVE ANY BROTHERS', translation: '¿Tienes algún hermano?', distractors: ['HAS', 'ARE'] },
                    { text: 'SHE IS MY BEST FRIEND', translation: 'Ella es mi mejor amiga', distractors: ['ARE', 'THE'] }
                ]
            },
            {
                type: 'trivia_game',
                title: 'Introduction Trivia 🏆',
                instruction: 'Choose the best answer for personal introductions',
                questions: [
                    { question: '"I ___ Juan."', options: ['is', 'be', 'am', 'are'], correctIdx: 2 },
                    { question: 'What verb do we use for age in English?', options: ['To Have', 'To Be', 'To Do', 'To Live'], correctIdx: 1 },
                    { question: 'What is the correct question to ask about a country?', options: ['What are you from?', 'Where are you from?', 'Who are you from?', 'When are you from?'], correctIdx: 1 },
                    { question: '"Where ___ you from?"', options: ['is', 'are', 'do', 'have'], correctIdx: 1 },
                    { question: 'What question asks for your name?', options: ['What is your name?', 'How are you name?', 'Where is your name?', 'Who are you name?'], correctIdx: 0 },
                    { question: 'What does "Surname" mean?', options: ['Nombre', 'Apodo', 'Apellido', 'Ciudad'], correctIdx: 2 },
                    { question: 'Greeting after an introduction?', options: ['Goodbye', 'Nice to meet you', 'How are you', 'Thank you'], correctIdx: 1 },
                    { question: 'Correct way to say "Tengo 25 años":', options: ['I have 25 years', 'I am 25 years old', 'I am 25 years', 'I have 25 years old'], correctIdx: 1 },
                    { question: 'Question for job or profession?', options: ['Where do you work?', 'What is your job?', 'What do you do?', 'All of the above'], correctIdx: 3 },
                    { question: '"Introduction" in Spanish is:', options: ['Identificación', 'Presentación', 'Información', 'Conversación'], correctIdx: 1 }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A1', 2]);
        console.log('✅ Successfully updated A1 Topic 2 to contain 10+ exercises per game');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

run();

