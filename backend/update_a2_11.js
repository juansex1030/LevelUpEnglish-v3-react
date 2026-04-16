require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Phrasal Verbs',
                instruction: 'Do you know how these combinations work?',
                questions: [
                    {
                        question: 'What is a "phrasal verb"?',
                        options: ['A verb + an adjective', 'A verb + a preposition or adverb', 'A noun + a verb', 'A long verb'],
                        correctIdx: 1
                    },
                    {
                        question: 'What does "wake up" mean?',
                        options: ['Dormirse', 'Despertarse', 'Levantarse', 'Comer'],
                        correctIdx: 1
                    },
                    {
                        question: 'If a phrasal verb is "separable", you can...',
                        options: ['Divide it with a noun/pronoun', 'Only use it with one person', 'Change the meaning', 'Delete it'],
                        correctIdx: 0
                    },
                    {
                        question: '"Turn off the light" can also be...',
                        options: ['Turn the light off', 'Turn off it', 'The light turn off', 'Off turn light'],
                        correctIdx: 0
                    },
                    {
                        question: '"Pick up" means:',
                        options: ['Dejar caer', 'Recoger / Levantar', 'Llamar por teléfono', 'Esperar'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which is correct: "Look it up" or "Look up it"?',
                        options: ['Look it up (if "it" is a pronoun)', 'Look up it', 'Both are always correct', 'Neither'],
                        correctIdx: 0
                    },
                    {
                        question: '"Look for" means:',
                        options: ['Mirar a alguien', 'Buscar', 'Cuidar', 'Parecerse'],
                        correctIdx: 1
                    },
                    {
                        question: '"Give up" means:',
                        options: ['Dar algo arriba', 'Rendirse / Abandonar', 'Empezar algo', 'Regalar'],
                        correctIdx: 1
                    },
                    {
                        question: 'What does "put on" mean (for clothes)?',
                        options: ['Quitarse', 'Ponerse', 'Lavar', 'Comprar'],
                        correctIdx: 1
                    },
                    {
                        question: '"Take off" for a plane means:',
                        options: ['Aterrizar', 'Despegar', 'Volar', 'Chocar'],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Phrasal Verb Combinations',
                instruction: 'Type the correct preposition / particle (up, off, on, for, etc.)',
                sentences: [
                    { text: 'I wake ___ at 7 AM every day.', answer: 'up' },
                    { text: 'Please turn ___ the TV; I want to sleep.', answer: 'off' },
                    { text: 'I am looking ___ my keys. Have you seen them?', answer: 'for' },
                    { text: 'Put ___ your coat. It is cold outside.', answer: 'on' },
                    { text: 'Don\'t give ___! You can do it.', answer: 'up' },
                    { text: 'Pick ___ your toys from the floor.', answer: 'up' },
                    { text: 'The plane takes ___ in ten minutes.', answer: 'off' },
                    { text: 'Look ___ the word in the dictionary.', answer: 'up' },
                    { text: 'She takes ___ her mother. They look the same.', answer: 'after' },
                    { text: 'I need to find ___ what happened.', answer: 'out' },
                    { text: 'Turn ___ the volume! I can\'t hear.', answer: 'up' },
                    { text: 'Fill ___ this form, please.', answer: 'in' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Phrasal Verbs in Action',
                instruction: 'Build correct sentences with phrasal verbs',
                sentences: [
                    { text: 'I WAKE UP EARLY TODAY', translation: 'Me despierto temprano hoy', distractors: ['ON', 'OFF'] },
                    { text: 'TURN THE LIGHTS OFF NOW', translation: 'Apaga las luces ahora', distractors: ['UP', 'FOR'] },
                    { text: 'PUT YOUR SHOES ON PLEASE', translation: 'Ponte los zapatos por favor', distractors: ['OFF', 'IN'] },
                    { text: 'I AM LOOKING FOR HIM', translation: 'Lo estoy buscando a él', distractors: ['IN', 'AT'] },
                    { text: 'TAKE OFF YOUR HAT HERE', translation: 'Quítate el sombrero aquí', distractors: ['ON', 'UP'] },
                    { text: 'SHE PICKED UP THE PHONE', translation: 'Ella contestó/recogió el teléfono', distractors: ['OFF', 'FOR'] },
                    { text: 'FIND OUT THE TRUTH NOW', translation: 'Averigua la verdad ahora', distractors: ['IN', 'FOR'] },
                    { text: 'GIVE UP SMOKING AT ONCE', translation: 'Deja de fumar de una vez', distractors: ['ON', 'OFF'] },
                    { text: 'LOOK AFTER THE SMALL KITTEN', translation: 'Cuida al pequeño gatito', distractors: ['FOR', 'IN'] },
                    { text: 'TRY ON THESE NEW JEANS', translation: 'Pruébate estos jeans nuevos', distractors: ['OFF', 'UP'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Verb ↔ Meaning',
                instruction: 'Match the phrasal verb with its definition!',
                pairs: [
                    { emoji: 'Wake up', word: 'Stop sleeping' },
                    { emoji: 'Turn off', word: 'Stop a machine' },
                    { emoji: 'Look for', word: 'Search for' },
                    { emoji: 'Give up', word: 'Stop doing/trying' },
                    { emoji: 'Put on', word: 'Dress yourself' },
                    { emoji: 'Take off', word: 'Remove clothes / Fly' },
                    { emoji: 'Find out', word: 'Discover information' },
                    { emoji: 'Pick up', word: 'Collect / Lift' },
                    { emoji: 'Look up', word: 'Search in a list' },
                    { emoji: 'Run out of', word: 'Have none left' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Multi-word Verbs ☠️',
                instruction: 'Guess the phrasal verb!',
                words: [
                    { word: 'WAKE UP', hint: 'The opposite of go to sleep' },
                    { word: 'TURN OFF', hint: 'To stop a light or TV' },
                    { word: 'LOOK FOR', hint: 'When you lose something' },
                    { word: 'PUT ON', hint: 'To wear something new' },
                    { word: 'TAKE OFF', hint: 'To remove something you wear' },
                    { word: 'PICK UP', hint: 'To take someone from a place' },
                    { word: 'GIVE UP', hint: 'To quit a habit' },
                    { word: 'FIND OUT', hint: 'To learn a secret' },
                    { word: 'BREAK UP', hint: 'To end a relationship' },
                    { word: 'CALL BACK', hint: 'To phone someone again' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 11]);
        console.log('✅ Successfully updated A2 Topic 11 — Phrasal Verbs');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
