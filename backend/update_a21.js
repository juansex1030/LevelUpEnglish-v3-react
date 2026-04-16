require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Giving Directions',
                instruction: 'Do you know how to give directions in English?',
                questions: [
                    {
                        question: 'How do you say "gira a la izquierda"?',
                        options: ['Turn right', 'Turn left', 'Go straight', 'Cross'],
                        correctIdx: 1
                    },
                    {
                        question: 'What does "Go straight ahead" mean?',
                        options: ['Gira a la derecha', 'Continúa recto', 'Cruza la calle', 'Date la vuelta'],
                        correctIdx: 1
                    },
                    {
                        question: 'If a building is on the "corner", it is...',
                        options: ['En medio', 'En la esquina', 'Al final', 'Al principio'],
                        correctIdx: 1
                    },
                    {
                        question: 'What is a "crosswalk"?',
                        options: ['Paso de peatones', 'Semáforo', 'Acera', 'Carril'],
                        correctIdx: 0
                    },
                    {
                        question: 'How do you say "cruza la calle"?',
                        options: ['Walk the street', 'Cross the street', 'Pass the street', 'Go the street'],
                        correctIdx: 1
                    },
                    {
                        question: 'What are "traffic lights"?',
                        options: ['Señales', 'Semáforos', 'Farolas', 'Coches'],
                        correctIdx: 1
                    },
                    {
                        question: '"The bank is ___ the library and the park." (en medio)',
                        options: ['between', 'next to', 'opposite', 'behind'],
                        correctIdx: 0
                    },
                    {
                        question: 'What does "on your right" mean?',
                        options: ['A tu izquierda', 'A tu derecha', 'Delante de ti', 'Detrás de ti'],
                        correctIdx: 1
                    },
                    {
                        question: 'How do you say "da la vuelta"?',
                        options: ['Turn around', 'Go back', 'U-turn', 'All of the above'],
                        correctIdx: 3
                    },
                    {
                        question: 'What is a "roundabout"?',
                        options: ['Glorieta / Rotonda', 'Callejón', 'Autopista', 'Puente'],
                        correctIdx: 0
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Giving Directions',
                instruction: 'Type the correct word to complete the direction',
                sentences: [
                    { text: 'Go ___ until you reach the supermarket. (recto)', answer: 'straight' },
                    { text: '___ left at the traffic lights. (gira)', answer: 'Turn' },
                    { text: 'The hospital is ___ your right.', answer: 'on' },
                    { text: '___ the bridge and then turn right. (cruza)', answer: 'Cross' },
                    { text: 'The cinema is on the ___ of the street. (esquina)', answer: 'corner' },
                    { text: 'Go ___ the bank; it is the next building. (pasa)', answer: 'past' },
                    { text: 'The park is ___ the post office. (enfrente de)', answer: 'opposite' },
                    { text: 'Take the ___ turning on the left. (segunda)', answer: 'second' },
                    { text: 'Walk for ___ minutes. (diez)', answer: 'ten' },
                    { text: 'How do I ___ to the museum? (llegar)', answer: 'get' },
                    { text: 'You will ___ a map near the entrance.', answer: 'find' },
                    { text: 'The cafe is ___ the top of the hill.', answer: 'at' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Directions phrases',
                instruction: 'Build correct direction phrases',
                sentences: [
                    { text: 'GO STRAIGHT FOR TWO BLOCKS', translation: 'Ve recto por dos cuadras', distractors: ['DO', 'TURNING'] },
                    { text: 'TURN LEFT AT THE CORNER', translation: 'Gira a la izquierda en la esquina', distractors: ['RIGHT', 'ON'] },
                    { text: 'THE BANK IS ON YOUR RIGHT', translation: 'El banco está a tu derecha', distractors: ['LEFT', 'IN'] },
                    { text: 'CROSS THE ROAD CAREFULLY', translation: 'Cruza la calle con cuidado', distractors: ['STOP', 'WALK'] },
                    { text: 'HOW DO I GET THERE', translation: '¿Cómo llego allí?', distractors: ['ARE', 'IS'] },
                    { text: 'IT IS NEXT TO THE SCHOOL', translation: 'Está al lado de la escuela', distractors: ['BETWEEN', 'IN'] },
                    { text: 'GO PAST THE BIG HOTEL', translation: 'Pasa por delante del gran hotel', distractors: ['PASSING', 'ON'] },
                    { text: 'TAKE THE FIRST EXIT', translation: 'Toma la primera salida', distractors: ['ONE', 'GIVING'] },
                    { text: 'THE STATION IS FAR FROM HERE', translation: 'La estación está lejos de aquí', distractors: ['NEAR', 'AT'] },
                    { text: 'CAN YOU SHOW ME ON THE MAP', translation: '¿Me lo puedes mostrar en el mapa?', distractors: ['DO', 'TELL'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Directions Icons',
                instruction: 'Match the icon with the direction!',
                pairs: [
                    { emoji: '⬅️', word: 'Turn left' },
                    { emoji: '➡️', word: 'Turn right' },
                    { emoji: '⬆️', word: 'Go straight' },
                    { emoji: '🔄', word: 'Turn around' },
                    { emoji: '🚦', word: 'Traffic lights' },
                    { emoji: '📍', word: 'Corner' },
                    { emoji: '🗺️', word: 'Map' },
                    { emoji: '🚶', word: 'Cross' },
                    { emoji: '🌉', word: 'Bridge' },
                    { emoji: '⛲', word: 'Park' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Road Words ☠️',
                instruction: 'Guess the word!',
                words: [
                    { word: 'STRAIGHT', hint: 'Moving in one direction without turning' },
                    { word: 'CORNER', hint: 'Where two streets meet' },
                    { word: 'TRAFFIC', hint: 'Cars and buses on the road' },
                    { word: 'ROUNDABOUT', hint: 'Circular road junction' },
                    { word: 'DIRECTIONS', hint: 'Instructions to find a place' },
                    { word: 'DISTANCE', hint: 'How far something is' },
                    { word: 'BLOCK', hint: 'Area between 4 streets' },
                    { word: 'OPPOSITE', hint: 'On the other side' },
                    { word: 'BETWEEN', hint: 'In the middle of two things' },
                    { word: 'PAVEMENT', hint: 'Side of road to walk on (sidewalk)' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A1', 21]);
        console.log('✅ Successfully updated A1 Topic 21 — Giving Directions');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
