require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Dates and Time Phrases',
                instruction: 'When is it happening?',
                questions: [
                    {
                        question: 'How do you say "1st" in English?',
                        options: ['One', 'First', 'Oneth', 'Firstly'],
                        correctIdx: 1
                    },
                    {
                        question: 'How do you say "2nd"?',
                        options: ['Two', 'Twoth', 'Second', 'Secondly'],
                        correctIdx: 2
                    },
                    {
                        question: 'How do you say "3rd"?',
                        options: ['Three', 'Threeth', 'Third', 'Thirdly'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which preposition do we use for YEARS (e.g. 2024)?',
                        options: ['On', 'In', 'At', 'From'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which preposition do we use for SPECIFIC DAYS (e.g. Monday)?',
                        options: ['In', 'At', 'On', 'By'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which preposition do we use for MONTHS (e.g. July)?',
                        options: ['At', 'In', 'On', 'By'],
                        correctIdx: 1
                    },
                    {
                        question: 'How do you say the year 1995?',
                        options: ['Nineteen ninety-five', 'One thousand nine hundred ninety five', 'Nineteen nine five', 'Both A and B'],
                        correctIdx: 3
                    },
                    {
                        question: 'What is the 10th month of the year?',
                        options: ['September', 'October', 'November', 'December'],
                        correctIdx: 1
                    },
                    {
                        question: 'What is the 5th month of the year?',
                        options: ['April', 'May', 'June', 'July'],
                        correctIdx: 1
                    },
                    {
                        question: '"My birthday is ____ June 10th."',
                        options: ['In', 'On', 'At', 'By'],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Ordinals and Dates',
                instruction: 'Type the ordinal word (first, second, third, etc.) or the preposition (in, on, at)',
                sentences: [
                    { text: 'January is the ___ month of the year.', answer: 'first' },
                    { text: 'I was born ___ August. (mes)', answer: 'in' },
                    { text: 'Our anniversary is ___ July 4th. (fecha específica)', answer: 'on' },
                    { text: 'December is the ___ month. (12th)', answer: 'twelfth' },
                    { text: 'We have a meeting ___ Monday.', answer: 'on' },
                    { text: 'School starts ___ September.', answer: 'in' },
                    { text: 'The party is ___ 8 o\'clock.', answer: 'at' },
                    { text: 'October is the ___ month. (10th)', answer: 'tenth' },
                    { text: 'I will see you ___ 2025.', answer: 'in' },
                    { text: 'My appointment is ___ Friday morning.', answer: 'on' },
                    { text: 'March is the ___ month.', answer: 'third' },
                    { text: 'He came ___ in the race. (2nd)', answer: 'second' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Stating Dates',
                instruction: 'Build correct sentences about dates',
                sentences: [
                    { text: 'MY BIRTHDAY IS ON JUNE TENTH', translation: 'Mi cumpleaños es el diez de junio', distractors: ['IN', 'AT'] },
                    { text: 'WE ARE IN THE TWENTY FIRST CENTURY', translation: 'Estamos en el siglo veintiuno', distractors: ['ON', 'TWO'] },
                    { text: 'THE MEETING IS ON TUESDAY', translation: 'La reunión es el martes', distractors: ['IN', 'AT'] },
                    { text: 'TODAY IS THE FIRST OF MAY', translation: 'Hoy es el primero de mayo', distractors: ['ONE', 'IN'] },
                    { text: 'I WAS BORN IN NINETEEN NINETY', translation: 'Nací en mil novecientos noventa', distractors: ['ON', 'AT'] },
                    { text: 'THE EXAM IS IN DECEMBER', translation: 'El examen es en diciembre', distractors: ['ON', 'AT'] },
                    { text: 'CHRISTMAS IS IN THE WINTER', translation: 'La navidad es en el invierno', distractors: ['ON', 'AT'] },
                    { text: 'HE IS THE THIRD CHILD', translation: 'Él es el tercer hijo', distractors: ['THREE', 'SECOND'] },
                    { text: 'SHE CAME FIRST IN CLASS', translation: 'Ella fue la primera en clase', distractors: ['ONE', 'ONCE'] },
                    { text: 'WE MEET AT FIVE OCLOCK', translation: 'Nos vemos a las cinco en punto', distractors: ['IN', 'ON'] }
                ]
            },
            // ── GAME 4: Memory Game – 12 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Month Number Match',
                instruction: 'Match the month with its number!',
                pairs: [
                    { emoji: 'January', word: '1st Month' },
                    { emoji: 'February', word: '2nd Month' },
                    { emoji: 'March', word: '3rd Month' },
                    { emoji: 'April', word: '4th Month' },
                    { emoji: 'May', word: '5th Month' },
                    { emoji: 'June', word: '6th Month' },
                    { emoji: 'July', word: '7th Month' },
                    { emoji: 'August', word: '8th Month' },
                    { emoji: 'September', word: '9th Month' },
                    { emoji: 'October', word: '10th Month' },
                    { emoji: 'November', word: '11th Month' },
                    { emoji: 'December', word: '12th Month' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Time Expressions ☠️',
                instruction: 'Guess the month or ordinal word!',
                words: [
                    { word: 'FEBRUARY', hint: 'The second month' },
                    { word: 'SEPTEMBER', hint: 'The ninth month' },
                    { word: 'TWENTIETH', hint: 'Number 20 ordinal' },
                    { word: 'WEDNESDAY', hint: 'The day after Tuesday' },
                    { word: 'SATURDAY', hint: 'The day after Friday' },
                    { word: 'ANNIVERSARY', hint: 'Yearly celebration of an event' },
                    { word: 'CALENDAR', hint: 'Shows days, weeks, and months' },
                    { word: 'SCHEDULE', hint: 'A list of times for events' },
                    { word: 'BIRTHDAY', hint: 'The day someone was born' },
                    { word: 'HOLIDAY', hint: 'A day of celebration or rest' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 17]);
        console.log('✅ Successfully updated A2 Topic 17 — Dates');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
