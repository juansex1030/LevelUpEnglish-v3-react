require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Passive Voice (Simple Present/Past)',
                instruction: 'Can you recognize the passive form?',
                questions: [
                    {
                        question: 'What is the structure of the Passive Voice?',
                        options: ['To be + Past Participle', 'To be + -ing', 'Will + Verb', 'Subject + Verb'],
                        correctIdx: 0
                    },
                    {
                        question: 'Who/what is the focus in a passive sentence?',
                        options: ['The person doing the action', 'The object receiving the action', 'The time', 'The place'],
                        correctIdx: 1
                    },
                    {
                        question: '"The glass ____ by me yesterday." (Past)',
                        options: ['was broken', 'broken', 'broke', 'is broken'],
                        correctIdx: 0
                    },
                    {
                        question: '"Spanish ____ in Mexico." (Present)',
                        options: ['is speak', 'is spoken', 'speaks', 'spoken'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which word introduces the "agent" (the person doing the action)?',
                        options: ['For', 'By', 'Through', 'From'],
                        correctIdx: 1
                    },
                    {
                        question: 'Change to Passive: "I wash the car."',
                        options: ['The car is washed by me.', 'The car was washed by me.', 'I am washed by the car.', 'Car wash me.'],
                        correctIdx: 0
                    },
                    {
                        question: '"The book ____ last night." (Past)',
                        options: ['is read', 'was read', 'readed', 'were read'],
                        correctIdx: 1
                    },
                    {
                        question: '"Apples ____ grown in winter." (Plural Present)',
                        options: ['is', 'are', 'was', 'were'],
                        correctIdx: 1
                    },
                    {
                        question: '"The cake ____ by my mom." (Singular Past)',
                        options: ['are made', 'was made', 'were made', 'made'],
                        correctIdx: 1
                    },
                    {
                        question: 'We use passive when the agent is:',
                        options: ['Unknown or not important', 'Very famous', 'Active', 'Funny'],
                        correctIdx: 0
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Passive constructions',
                instruction: 'Type the correct form: is/are/was/were + participle',
                sentences: [
                    { text: 'Paper ___ (make) from wood. (present)', answer: 'is made' },
                    { text: 'The pyramids ___ (build) by Egyptians. (past)', answer: 'were built' },
                    { text: 'English ___ (speak) all over the world.', answer: 'is spoken' },
                    { text: 'The letter ___ (send) yesterday.', answer: 'was sent' },
                    { text: 'Cars ___ (make) in this factory. (present plural)', answer: 'are made' },
                    { text: 'The window ___ (break) by a ball.', answer: 'was broken' },
                    { text: 'Breakfast ___ (serve) from 7 to 10.', answer: 'is served' },
                    { text: 'The thief ___ (catch) by the police.', answer: 'was caught' },
                    { text: 'Many trees ___ (cut) down every year.', answer: 'are cut' },
                    { text: 'My wallet ___ (steal) on the bus.', answer: 'was stolen' },
                    { text: 'The movie ___ (direct) by Spielberg.', answer: 'was directed' },
                    { text: 'Coffee ___ (grow) in Brazil.', answer: 'is grown' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Passive Structure',
                instruction: 'Order the words to form correct passive sentences',
                sentences: [
                    { text: 'THE CAKE WAS MADE BY MOM', translation: 'El pastel fue hecho por mamá', distractors: ['ARE', 'IS'] },
                    { text: 'CHEESE IS MADE FROM MILK', translation: 'El queso se hace de leche', distractors: ['ARE', 'WAS'] },
                    { text: 'THE WORK WAS FINISHED ON TIME', translation: 'El trabajo fue terminado a tiempo', distractors: ['ARE', 'IS'] },
                    { text: 'WERE THE TICKETS BOUGHT YET', translation: '¿Fueron comprados los boletos ya?', distractors: ['ARE', 'DID'] },
                    { text: 'THIS HOUSE WAS BUILT IN YEAR', translation: 'Esta casa fue construida en...', distractors: ['IS', 'ARE'] },
                    { text: 'APPLES ARE GROWN HERE NOW', translation: 'Las manzanas se cultivan aquí ahora', distractors: ['IS', 'WAS'] },
                    { text: 'THE EMAIL WAS SENT TO YOU', translation: 'El email te fue enviado', distractors: ['IS', 'ARE'] },
                    { text: 'I WAS BORN IN LONDON ENGLAND', translation: 'Nací en Londres, Inglaterra (Passive voice use)', distractors: ['AM', 'WERE'] },
                    { text: 'ARE CARS MADE IN JAPAN STILL', translation: '¿Se siguen fabricando coches en Japón?', distractors: ['IS', 'DO'] },
                    { text: 'THE TRUTH WAS TOLD AT LAST', translation: 'La verdad fue dicha al fin', distractors: ['IS', 'DO'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Active ↔ Passive',
                instruction: 'Match the active sentence with its passive equivalent!',
                pairs: [
                    { emoji: 'I write the letter', word: 'The letter is written' },
                    { emoji: 'He cleans the room', word: 'The room is cleaned' },
                    { emoji: 'She bought the car', word: 'The car was bought' },
                    { emoji: 'They built it', word: 'It was built' },
                    { emoji: 'Shakespeare wrote it', word: 'It was written by him' },
                    { emoji: 'I make coffee', word: 'Coffee is made' },
                    { emoji: 'She sent the mail', word: 'The mail was sent' },
                    { emoji: 'They sell bread', word: 'Bread is sold' },
                    { emoji: 'He found the keys', word: 'The keys were found' },
                    { emoji: 'I broke the cup', word: 'The cup was broken' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Receivers of Action ☠️',
                instruction: 'Guess the past participle!',
                words: [
                    { word: 'WRITTEN', hint: 'Past participle of write' },
                    { word: 'SPOKEN', hint: 'Past participle of speak' },
                    { word: 'BROKEN', hint: 'Past participle of break' },
                    { word: 'BOUGHT', hint: 'Past participle of buy' },
                    { word: 'MADE', hint: 'Past participle of make' },
                    { word: 'TAUGHT', hint: 'Past participle of teach' },
                    { word: 'FOUND', hint: 'Past participle of find' },
                    { word: 'STOLEN', hint: 'Past participle of steal' },
                    { word: 'FINISHED', hint: 'Past participle of finish' },
                    { word: 'CREATED', hint: 'Past participle of create' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 21]);
        console.log('✅ Successfully updated A2 Topic 21 — Passive Voice');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
