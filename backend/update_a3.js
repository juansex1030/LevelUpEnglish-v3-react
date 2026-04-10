require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            {
                type: 'hangman_game',
                title: 'Hangman: Pronouns ☠️',
                instruction: 'Adivina los pronombres personales claves',
                words: [
                    { word: 'THEY', hint: 'Pronombre para plural (ellos)' },
                    { word: 'SHE', hint: 'Pronombre femenino singular' },
                    { word: 'WE', hint: 'Pronombre para nosotros' }
                ]
            },
            {
                type: 'fill_blanks_game',
                title: 'Fill in the Blanks: To Be ✍️',
                instruction: 'Escribe la palabra exacta que falta en la oración',
                sentences: [
                    { text: 'I ____ a student.', answer: 'am' },
                    { text: 'She ____ very happy today.', answer: 'is' },
                    { text: 'They ____ playing soccer.', answer: 'are' },
                    { text: '____ you from Colombia?', answer: 'Are' }
                ]
            },
            {
                type: 'sentence_builder',
                title: 'Sentence Builder 🧩',
                instruction: 'Ordena las palabras',
                sentences: [
                    { text: 'WE ARE BEST FRIENDS', translation: 'Nosotros somos mejores amigos', distractors: ['IS', 'AM'] },
                    { text: 'SHE IS NOT HERE', translation: 'Ella no está aquí', distractors: ['ARE', 'DONT'] }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A1', 3]);
        console.log('Successfully updated A1 Topic 3 to contain Fill in the Blanks + others');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

run();
