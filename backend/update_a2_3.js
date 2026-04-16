require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Past Simple vs. Past Continuous',
                instruction: 'Can you choose the correct past form?',
                questions: [
                    {
                        question: 'We use the Past Continuous for:',
                        options: ['Quick completed actions', 'Actions in progress in the past', 'Daily habits now', 'Future plans'],
                        correctIdx: 1
                    },
                    {
                        question: 'What is the auxiliary for Past Continuous?',
                        options: ['Do / Does', 'Was / Were', 'Am / Is / Are', 'Did'],
                        correctIdx: 1
                    },
                    {
                        question: '"I ____ watching TV when he arrived." — Which is correct?',
                        options: ['was', 'were', 'am', 'did'],
                        correctIdx: 0
                    },
                    {
                        question: '"They ____ playing soccer all afternoon." — Which is correct?',
                        options: ['was', 'were', 'did', 'being'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which word often introduces the interruption (Past Simple)?',
                        options: ['While', 'When', 'During', 'Then'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which word often introduces the longer action (Past Continuous)?',
                        options: ['When', 'While', 'Then', 'So'],
                        correctIdx: 1
                    },
                    {
                        question: '"While I ____ (sleep), the phone rang."',
                        options: ['slept', 'was sleeping', 'sleeping', 'were sleeping'],
                        correctIdx: 1
                    },
                    {
                        question: '"He ____ (drive) home when he saw the accident."',
                        options: ['drove', 'driving', 'was driving', 'were driving'],
                        correctIdx: 2
                    },
                    {
                        question: 'Past Simple is used for:',
                        options: [
                            'Long background actions',
                            'Sudden finished actions',
                            'Future possibilities',
                            'Things that never happened'
                        ],
                        correctIdx: 1
                    },
                    {
                        question: '"We ____ (cook) dinner when the guests arrived."',
                        options: ['cooked', 'were cooking', 'was cooking', 'had cooked'],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Was/Were -ing vs. Simple Past',
                instruction: 'Type the correct form of the verb in parentheses',
                sentences: [
                    { text: 'I ___ (read) a book when you called. (prolongada)', answer: 'was reading' },
                    { text: 'When I saw her, she ___ (wear) a red dress.', answer: 'was wearing' },
                    { text: 'The light ___ (go) out while I was working. (interrupción)', answer: 'went' },
                    { text: 'They ___ (walk) in the park when it started to rain.', answer: 'were walking' },
                    { text: 'I ___ (lose) my umbrella while I was shopping.', answer: 'lost' },
                    { text: 'What ___ you (do) at 8 PM last night? (duración)', answer: 'were doing' },
                    { text: 'He ___ (not / listen) when I spoke to him.', answer: 'was not listening' },
                    { text: 'The kids ___ (play) while their parents were talking.', answer: 'were playing' },
                    { text: 'I ___ (break) my leg while I was skiing.', answer: 'broke' },
                    { text: 'We ___ (not / watch) the movie when they arrived.', answer: 'were not watching' },
                    { text: 'She ___ (sing) a song when the music stopped.', answer: 'was singing' },
                    { text: 'The cat ___ (sleep) on the table when I entered.', answer: 'was sleeping' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Past Events and Actions',
                instruction: 'Order the words to make correct complex past sentences',
                sentences: [
                    { text: 'I WAS SLEEPING WHEN YOU CALLED', translation: 'Estaba durmiendo cuando llamaste', distractors: ['SLEPT', 'ARE'] },
                    { text: 'SHE WAS WALKING IN THE PARK', translation: 'Ella estaba caminando en el parque', distractors: ['WALKED', 'IS'] },
                    { text: 'THEY WERE NOT EATING AT NOON', translation: 'Ellos no estaban comiendo al mediodía', distractors: ['EAT', 'WAS'] },
                    { text: 'WHAT WERE YOU DOING AT TEN', translation: '¿Qué estabas haciendo a las diez?', distractors: ['WAS', 'DO'] },
                    { text: 'IT WAS RAINING ALL DAY LONG', translation: 'Estuvo lloviendo todo el día', distractors: ['RAINED', 'ARE'] },
                    { text: 'WHERE WAS HE GOING SO FAST', translation: '¿A dónde iba tan rápido?', distractors: ['WERE', 'GO'] },
                    { text: 'WE WERE HAVING A GOOD TIME', translation: 'Lo estábamos pasando bien', distractors: ['HAVE', 'HAD'] },
                    { text: 'WHILE I WAS RUNNING I FELL', translation: 'Mientras corría me caí', distractors: ['RUN', 'FALL'] },
                    { text: 'THE DOG WAS BARKING LOUDLY THEN', translation: 'El perro estaba ladrando fuerte entonces', distractors: ['BARK', 'IS'] },
                    { text: 'EVERYONE WAS WAITING FOR THE BUS', translation: 'Todos estaban esperando el autobús', distractors: ['WAIT', 'WERE'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Interruption Match',
                instruction: 'Match the background action with the interruption!',
                pairs: [
                    { emoji: 'I was driving', word: 'When the car stopped' },
                    { emoji: 'I was sleeping', word: 'When the alarm rang' },
                    { emoji: 'I was cooking', word: 'When I burnt my finger' },
                    { emoji: 'She was singing', word: 'When the microphone broke' },
                    { emoji: 'They were dancing', word: 'When the music ended' },
                    { emoji: 'I was working', word: 'When the computer crashed' },
                    { emoji: 'He was eating', word: 'When the bell rang' },
                    { emoji: 'We were talking', word: 'When she arrived' },
                    { emoji: 'It was raining', word: 'When the window broke' },
                    { emoji: 'I was studying', word: 'When my friend visited' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Past Progress ☠️',
                instruction: 'Guess the verb in its -ing form!',
                words: [
                    { word: 'WATCHING', hint: 'Looking at TV for a while' },
                    { word: 'CLEANING', hint: 'Making the house tidy for hours' },
                    { word: 'PLANNING', hint: 'Thinking about the future' },
                    { word: 'LAUGHING', hint: 'Showing amusement' },
                    { word: 'DREAMING', hint: 'Thinking while asleep' },
                    { word: 'WAITING', hint: 'Staying until something happens' },
                    { word: 'VISITING', hint: 'Going to see someone' },
                    { word: 'CHANGING', hint: 'Becoming different' },
                    { word: 'BUILDING', hint: 'Creating a structure' },
                    { word: 'RELAXING', hint: 'Taking it easy' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 3]);
        console.log('✅ Successfully updated A2 Topic 3 — Past Simple vs. Past Continuous');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
