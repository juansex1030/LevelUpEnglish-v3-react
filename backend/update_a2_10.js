require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Modal Verbs for Requests',
                instruction: 'How do you ask for favors politely?',
                questions: [
                    {
                        question: 'Which of these is the MOST polite way to ask for a favor?',
                        options: ['Help me!', 'Can you help?', 'Could you possibly help?', 'Give me help.'],
                        correctIdx: 2
                    },
                    {
                        question: 'What is the correct structure for "Would you mind"?',
                        options: ['Would you mind + infinitive', 'Would you mind + -ing', 'Would you mind + base', 'Would you mind + past'],
                        correctIdx: 1
                    },
                    {
                        question: '"____ you pass the salt, please?"',
                        options: ['Could', 'Can', 'Will', 'All of the above'],
                        correctIdx: 3
                    },
                    {
                        question: 'Which modal is formal for PERMISSION?',
                        options: ['Can', 'May', 'Should', 'Must'],
                        correctIdx: 1
                    },
                    {
                        question: '"Would you mind ____ the door?"',
                        options: ['open', 'opening', 'to open', 'opened'],
                        correctIdx: 1
                    },
                    {
                        question: 'How do you answer "Would you mind helping me?" if you AGREE?',
                        options: ['Yes, I mind.', 'No, not at all.', 'I am sorry.', 'Of course I mind.'],
                        correctIdx: 1
                    },
                    {
                        question: '"____ I use your phone?" (Informal)',
                        options: ['Must', 'Can', 'Should', 'Had to'],
                        correctIdx: 1
                    },
                    {
                        question: '"Could" is the past of "Can", but in requests it means:',
                        options: ['Past ability', 'More polite / Formal', 'Future plan', 'A rule'],
                        correctIdx: 1
                    },
                    {
                        question: 'Correct way to ask for a drink:',
                        options: ['Can I have a water?', 'Could I have a water?', 'May I have a water?', 'All are polite'],
                        correctIdx: 3
                    },
                    {
                        question: 'Which word makes a request more polite?',
                        options: ['Please', 'Now', 'Actually', 'Directly'],
                        correctIdx: 0
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Asking for things',
                instruction: 'Type: could, can, would, or may',
                sentences: [
                    { text: '___ you tell me the time, please?', answer: 'Could' },
                    { text: '___ I borrow your pen for a second? (informal)', answer: 'Can' },
                    { text: '___ you mind closing the window?', answer: 'Would' },
                    { text: '___ I leave the room now? (formal)', answer: 'May' },
                    { text: '___ you help me with this bag? It is heavy.', answer: 'Could' },
                    { text: '___ it be possible to see the doctor today?', answer: 'Would' },
                    { text: '___ I have another cookie? (asking a friend)', answer: 'Can' },
                    { text: '___ you please be quiet?', answer: 'Could' },
                    { text: '___ I ask you a question? (formal)', answer: 'May' },
                    { text: '___ you mind waiting a few minutes?', answer: 'Would' },
                    { text: '___ you pass me the remote?', answer: 'Could' },
                    { text: '___ I see your passport, please?', answer: 'May' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Polite Requests',
                instruction: 'Build polite questions',
                sentences: [
                    { text: 'COULD YOU HELP ME PLEASE', translation: '¿Podrías ayudarme por favor?', distractors: ['ARE', 'WAS'] },
                    { text: 'WOULD YOU MIND OPENING IT', translation: '¿Te importaría abrirlo?', distractors: ['TO', 'IS'] },
                    { text: 'CAN I USE YOUR PHONE', translation: '¿Puedo usar tu teléfono?', distractors: ['DO', 'ARE'] },
                    { text: 'MAY I COME IN NOW', translation: '¿Puedo entrar ahora? (formal)', distractors: ['DO', 'AM'] },
                    { text: 'COULD YOU PASS THE SALT', translation: '¿Podrías pasar la sal?', distractors: ['DO', 'IS'] },
                    { text: 'WOULD IT BE POSSIBLE TO', translation: '¿Sería posible...?', distractors: ['ARE', 'DO'] },
                    { text: 'CAN YOU SHOW ME HOW', translation: '¿Puedes mostrarme cómo?', distractors: ['DO', 'IS'] },
                    { text: 'COULD WE HAVE THE BILL', translation: '¿Nos trae la cuenta? (Could we...)', distractors: ['HAVE', 'WAS'] },
                    { text: 'WOULD YOU MIND WAITING HERE', translation: '¿Te importaría esperar aquí?', distractors: ['ARE', 'IS'] },
                    { text: 'CAN I HAVE SOME WATER', translation: '¿Puedo tomar un poco de agua?', distractors: ['DO', 'AM'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Request Match',
                instruction: 'Match the request with the situation!',
                pairs: [
                    { emoji: 'Pass salt', word: 'At the table' },
                    { emoji: 'Bill please', word: 'At a restaurant' },
                    { emoji: 'Ticket please', word: 'At the station' },
                    { emoji: 'Open door', word: 'With heavy bags' },
                    { emoji: 'Lend pen', word: 'Taking an exam' },
                    { emoji: 'Close window', word: 'Feeling cold' },
                    { emoji: 'Turn down music', word: 'Too noisy' },
                    { emoji: 'See passport', word: 'At the airport' },
                    { emoji: 'Repeat please', word: 'Didn\'t hear' },
                    { emoji: 'Help me', word: 'Feeling stuck' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Request Manners ☠️',
                instruction: 'Guess the word!',
                words: [
                    { word: 'POLITE', hint: 'Showing good manners' },
                    { word: 'REQUEST', hint: 'Asking for something' },
                    { word: 'FAVOR', hint: 'Something you do to help' },
                    { word: 'PERMISSION', hint: 'Asking if it is okay' },
                    { word: 'FORMAL', hint: 'Professional or serious' },
                    { word: 'INFORMAL', hint: 'Casual with friends' },
                    { word: 'POSSIBLY', hint: 'Used to be very polite' },
                    { word: 'WONDERFUL', hint: 'Wait — NO. GRATEFUL' },
                    { word: 'GRATEFUL', hint: 'Feeling or showing thanks' },
                    { word: 'COURTEOUS', hint: 'Polite and respectful' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 10]);
        console.log('✅ Successfully updated A2 Topic 10 — Modal Verbs for Requests');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
