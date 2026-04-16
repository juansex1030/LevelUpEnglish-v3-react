require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Indirect Questions',
                instruction: 'Can you ask questions politely?',
                questions: [
                    {
                        question: 'Which of these is a polite way to start a question?',
                        options: ['Can you tell me...?', 'Tell me!', 'Where is...?', 'Give me...'],
                        correctIdx: 0
                    },
                    {
                        question: 'In an indirect question, the word order is:',
                        options: ['Same as a regular question', 'Same as a statement (Subject + Verb)', 'Verb + Subject', 'Anywhere'],
                        correctIdx: 1
                    },
                    {
                        question: '"Where is the bank?" → "Do you know where ____?"',
                        options: ['is the bank', 'the bank is', 'the bank was', 'are the bank'],
                        correctIdx: 1
                    },
                    {
                        question: '"What time is it?" → "Can you tell me what time ____?"',
                        options: ['is it', 'it is', 'was it', 'time is'],
                        correctIdx: 1
                    },
                    {
                        question: 'If there is no question word (Yes/No), we use:',
                        options: ['What', 'If / Whether', 'Where', 'When'],
                        correctIdx: 1
                    },
                    {
                        question: '"Does she live here?" → "Do you know ____ she lives here?"',
                        options: ['if', 'that', 'where', 'when'],
                        correctIdx: 0
                    },
                    {
                        question: 'Do we use "do / does / did" in the indirect part?',
                        options: ['Yes', 'No', 'Only in formal English', 'Only with "if"'],
                        correctIdx: 1
                    },
                    {
                        question: '"Where did he go?" → "Do you know where ____?"',
                        options: ['did he go', 'he went', 'he goes', 'gone he'],
                        correctIdx: 1
                    },
                    {
                        question: '"Can you help me?" → "I was wondering if you ____ help me."',
                        options: ['could', 'can', 'are', 'was'],
                        correctIdx: 0
                    },
                    {
                        question: 'Indirect questions are used to be more:',
                        options: ['Direct', 'Rude', 'Polite / Formal', 'Funny'],
                        correctIdx: 2
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Indirect Structure',
                instruction: 'Complete the indirect question with the correct word order (e.g. "what time it is")',
                sentences: [
                    { text: 'Can you tell me where ___ (the station / be)?', answer: 'the station is' },
                    { text: 'Do you know if ___ (he / like) pizza?', answer: 'he likes' },
                    { text: 'I wonder what ___ (the time / be).', answer: 'the time is' },
                    { text: 'Could you tell me how much ___ (the ticket / cost)?', answer: 'the ticket costs' },
                    { text: 'Do you have any idea why ___ (she / leave)? (past)', answer: 'she left' },
                    { text: 'I\'d like to know if ___ (it / rain) tomorrow.', answer: 'it will rain' },
                    { text: 'Can you tell me what ___ (your name / be)?', answer: 'your name is' },
                    { text: 'Do you know where ___ (my keys / be)?', answer: 'my keys are' },
                    { text: 'I was wondering if ___ (you / can) help me.', answer: 'you could' },
                    { text: 'Could you tell me who ___ (that man / be)?', answer: 'that man is' },
                    { text: 'Do you know when ___ (the movie / start)?', answer: 'the movie starts' },
                    { text: 'I don\'t know where ___ (they / go).', answer: 'they went' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Polite Enquiries',
                instruction: 'Build correct indirect question sentences',
                sentences: [
                    { text: 'CAN YOU TELL ME WHERE THE BANK IS', translation: '¿Puedes decirme dónde está el banco?', distractors: ['IS', 'THEY'] },
                    { text: 'DO YOU KNOW IF SHE LIVES HERE', translation: '¿Sabes si ella vive aquí?', distractors: ['DOES', 'ARE'] },
                    { text: 'I WONDER WHAT TIME THE CLASS STARTS', translation: 'Me pregunto a qué hora empieza la clase', distractors: ['DOES', 'IS'] },
                    { text: 'COULD YOU TELL ME YOUR NAME PLEASE', translation: '¿Podría decirme su nombre por favor?', distractors: ['IS', 'ARE'] },
                    { text: 'DO YOU HAVE ANY IDEA WHO HE IS', translation: '¿Tienes alguna idea de quién es él?', distractors: ['IS', 'DO'] },
                    { text: 'I WOULD LIKE TO KNOW THE PRICE', translation: 'Me gustaría saber el precio', distractors: ['ARE', 'WAS'] },
                    { text: 'CAN YOU REMEMBER WHAT HE SAID', translation: '¿Puedes recordar lo que dijo?', distractors: ['DID', 'WAS'] },
                    { text: 'DO YOU KNOW WHERE THE KEYS ARE', translation: '¿Sabes dónde están las llaves?', distractors: ['IS', 'BE'] },
                    { text: 'I WAS WONDERING IF YOU WERE FREE', translation: 'Me preguntaba si estabas libre', distractors: ['ARE', 'IS'] },
                    { text: 'COULD YOU EXPLAIN HOW TO GET THERE', translation: '¿Podría explicar cómo llegar allí?', distractors: ['GETS', 'DO'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Direct ↔ Indirect',
                instruction: 'Match the direct question with its polite indirect form!',
                pairs: [
                    { emoji: 'Where is it?', word: 'Can you tell me where it is?' },
                    { emoji: 'What time is it?', word: 'Do you know what time it is?' },
                    { emoji: 'Does she like it?', word: 'I wonder if she likes it' },
                    { emoji: 'Why did he go?', word: 'Do you know why he went?' },
                    { emoji: 'How much is it?', word: 'Could you tell me the price?' },
                    { emoji: 'Who is he?', word: 'Do you know who he is?' },
                    { emoji: 'Where do they live?', word: 'Can you tell me where they live?' },
                    { emoji: 'When does it end?', word: 'Do you know when it ends?' },
                    { emoji: 'Can you help?', word: 'I was wondering if you could help' },
                    { emoji: 'Is it raining?', word: 'Do you know if it is raining?' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Polite Patterns ☠️',
                instruction: 'Guess the word!',
                words: [
                    { word: 'INDIRECT', hint: 'Not direct' },
                    { word: 'POLITE', hint: 'Showing good manners' },
                    { word: 'WHETHER', hint: 'Another word for "if"' },
                    { word: 'ORDER', hint: 'Word ___ changes in indirect' },
                    { word: 'STATEMENT', hint: 'Indirect questions use ___ word order' },
                    { word: 'STRUCTURE', hint: 'The arrangement of parts in a sentence' },
                    { word: 'ENQUIRY', hint: 'The act of asking for information' },
                    { word: 'EXPLAIN', hint: 'To make something clear' },
                    { word: 'WONDER', hint: 'To want to know more' },
                    { word: 'REVERSE', hint: 'Do NOT ___ the subject and verb' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 6]);
        console.log('✅ Successfully updated A2 Topic 6 — Indirect Questions');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
