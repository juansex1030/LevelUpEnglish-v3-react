require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Giving Messages',
                instruction: 'Can you pass on messages correctly?',
                questions: [
                    {
                        question: 'How do you say "Él dice que..." in English?',
                        options: ['He tells that', 'He says that', 'He said that (past)', 'He saying that'],
                        correctIdx: 1
                    },
                    {
                        question: 'How do you say "Dile que..." in English?',
                        options: ['Say him that', 'Tell him that', 'Tell to him that', 'Speaking him that'],
                        correctIdx: 1
                    },
                    {
                        question: 'We use "tell" when we specify:',
                        options: ['The message only', 'The person receiving the message', 'The time', 'The place'],
                        correctIdx: 1
                    },
                    {
                        question: 'We use "say" when we focus on:',
                        options: ['The person', 'The words spoken / the message', 'The listener', 'The date'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which is correct: "She ____ me to wait."',
                        options: ['said', 'told', 'speaking', 'tells'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which is correct: "She ____ that she was busy."',
                        options: ['said', 'told', 'saying', 'tells'],
                        correctIdx: 0
                    },
                    {
                        question: '"Can you ____ a message?"',
                        options: ['take', 'give', 'pass', 'all of the above'],
                        correctIdx: 3
                    },
                    {
                        question: 'How do you say "Déjale un mensaje"?',
                        options: ['Leave him a message', 'Give him a message', 'Tell him a message', 'Both A and B'],
                        correctIdx: 3
                    },
                    {
                        question: 'If you "report" speech, you are...',
                        options: ['Writing a book', 'Passing on what someone said', 'Making a call', 'Sending a text'],
                        correctIdx: 1
                    },
                    {
                        question: 'What is a "voice message"?',
                        options: ['Mensaje de texto', 'Mensaje de voz', 'Llamada perdida', 'Correo'],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Say vs. Tell',
                instruction: 'Type the correct word (say / says / said or tell / tells / told)',
                sentences: [
                    { text: 'Please ___ her that I called. (decir a alguien)', answer: 'tell' },
                    { text: 'He ___ that he is tired. (decir un mensaje)', answer: 'says' },
                    { text: 'Did she ___ you the secret? (decir a alguien)', answer: 'tell' },
                    { text: 'She ___ "Hello" to me.', answer: 'said' },
                    { text: 'I ___ them to be quiet. (past)', answer: 'told' },
                    { text: 'Don\'t ___ anything! (no digas nada)', answer: 'say' },
                    { text: 'My mom ___ me to clean my room.', answer: 'told' },
                    { text: 'The teacher ___ the exam is on Monday.', answer: 'says' },
                    { text: 'Can you ___ me the time?', answer: 'tell' },
                    { text: 'What did he ___ to you?', answer: 'say' },
                    { text: 'He ___ us a funny story.', answer: 'told' },
                    { text: 'I just want to ___ thank you.', answer: 'say' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Messages',
                instruction: 'Build correct sentences to pass on messages',
                sentences: [
                    { text: 'TELL HIM I AM BUSY', translation: 'Dile que estoy ocupado', distractors: ['SAY', 'ARE'] },
                    { text: 'SHE SAYS SHE IS TIRED', translation: 'Ella dice que está cansada', distractors: ['TELLS', 'ARE'] },
                    { text: 'DID YOU LEAVE A MESSAGE', translation: '¿Dejaste un mensaje?', distractors: ['GAVE', 'DO'] },
                    { text: 'I TOLD HER TO WAIT', translation: 'Le dije a ella que esperara', distractors: ['SAID', 'WAITS'] },
                    { text: 'PLEASE SAY HELLO TO MARIA', translation: 'Por favor saluda a María', distractors: ['TELL', 'GIVE'] },
                    { text: 'HE SAID THAT HE WAS LATE', translation: 'Él dijo que llegaba tarde', distractors: ['TOLD', 'IS'] },
                    { text: 'CAN YOU TELL ME MORE', translation: '¿Puedes decirme más?', distractors: ['SAY', 'ARE'] },
                    { text: 'THEY TOLD US THE NEWS', translation: 'Ellos nos contaron la noticia', distractors: ['SAID', 'WAS'] },
                    { text: 'WHAT DID SHE SAY THEN', translation: '¿Qué dijo ella entonces?', distractors: ['TELL', 'DO'] },
                    { text: 'I WILL TELL THEM LATER', translation: 'Se lo diré a ellos después', distractors: ['SAY', 'GOING'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Messages & Actions',
                instruction: 'Match the phrase with its meaning!',
                pairs: [
                    { emoji: 'Pass on', word: 'Enviar / Transmitir' },
                    { emoji: 'Report', word: 'Informar' },
                    { emoji: 'Message', word: 'Mensaje' },
                    { emoji: 'Say', word: 'Decir algo' },
                    { emoji: 'Tell', word: 'Decir a alguien' },
                    { emoji: 'Quote', word: 'Citar' },
                    { emoji: 'Explain', word: 'Explicar' },
                    { emoji: 'Remind', word: 'Recordar a alguien' },
                    { emoji: 'Answer', word: 'Responder' },
                    { emoji: 'Ask', word: 'Preguntar' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Reporting Speech ☠️',
                instruction: 'Guess the word!',
                words: [
                    { word: 'MESSAGES', hint: 'Pieces of information passed on' },
                    { word: 'REPORTER', hint: 'Someone who tells what happened' },
                    { word: 'SUBJECT', hint: 'The person who says something' },
                    { word: 'LISTENER', hint: 'The person who hears something' },
                    { word: 'INDIRECT', hint: 'Reporting without exact words' },
                    { word: 'QUOTATION', hint: 'Direct words from someone' },
                    { word: 'ANNOUNCE', hint: 'To say something publicly' },
                    { word: 'TELEPHONE', hint: 'Tool to send voice messages' },
                    { word: 'ANSWERED', hint: 'Past tense of answer' },
                    { word: 'EXPLAINED', hint: 'Past tense of explain' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A1', 29]);
        console.log('✅ Successfully updated A1 Topic 29 — Giving Messages');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
