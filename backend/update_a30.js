require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Talking About Changes',
                instruction: 'Do you know how to talk about the past and the present?',
                questions: [
                    {
                        question: 'We use "Used to" for:',
                        options: ['Current habits', 'Past habits and states', 'Future plans', 'Short one-time actions'],
                        correctIdx: 1
                    },
                    {
                        question: 'What is the negative form of "Used to"?',
                        options: ['Didn\'t used to', 'Didn\'t use to', 'Not used to', 'Used not to'],
                        correctIdx: 1
                    },
                    {
                        question: '"I ____ living in the city now." (Process of adaptation)',
                        options: ['used to', 'am getting used to', 'use to', 'was used to'],
                        correctIdx: 1
                    },
                    {
                        question: 'What is the opposite of "Change"?',
                        options: ['Stay the same', 'Move', 'Transform', 'Modify'],
                        correctIdx: 0
                    },
                    {
                        question: '"When I was a child, I ____ play with toys."',
                        options: ['am using to', 'used to', 'using to', 'was use to'],
                        correctIdx: 1
                    },
                    {
                        question: 'If you "get used to" something, you...',
                        options: ['Forget it', 'Are becoming familiar with it', 'Think it is boring', 'Don\'t like it'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which word means a permanent change?',
                        options: ['Evolution', 'Habit', 'Routine', 'Temporary'],
                        correctIdx: 0
                    },
                    {
                        question: 'Correct question: "____ you use to live here?"',
                        options: ['Do', 'Are', 'Did', 'Were'],
                        correctIdx: 2
                    },
                    {
                        question: '"She ____ smoke, but she stopped."',
                        options: ['used to', 'uses to', 'using to', 'use to'],
                        correctIdx: 0
                    },
                    {
                        question: 'Talking about changes often uses:',
                        options: ['Simple Present', 'Used to', 'Future simple', 'All of the above'],
                        correctIdx: 3
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Used to & Change',
                instruction: 'Type the correct phrase (used to / use to / am used to)',
                sentences: [
                    { text: 'I ___ (live) in a small town. (hábito pasado)', answer: 'used to live' },
                    { text: 'Did you ___ (have) long hair? (pregunta)', answer: 'use to have' },
                    { text: 'I didn\'t ___ (like) vegetables. (negativo)', answer: 'use to like' },
                    { text: 'I am ___ to the cold weather now. (acostumbrado)', answer: 'used' },
                    { text: 'She ___ (play) the piano every day.', answer: 'used to play' },
                    { text: 'We ___ (not / go) to the beach much.', answer: 'didn\'t use to go' },
                    { text: 'He ___ (be) very shy.', answer: 'used to be' },
                    { text: 'They ___ (live) in London, but now they live in Paris.', answer: 'used to live' },
                    { text: 'Are you ___ to your new job? (acostumbrándose)', answer: 'getting used' },
                    { text: 'I ___ (have) a dog when I was young.', answer: 'used to have' },
                    { text: 'Everything ___ (be) cheaper years ago.', answer: 'used to be' },
                    { text: 'She ___ (study) a lot ten years ago.', answer: 'used to study' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Changes and Habits',
                instruction: 'Build correct sentences about changes',
                sentences: [
                    { text: 'I USED TO LIVE IN NEW YORK', translation: 'Solía vivir en Nueva York', distractors: ['AM', 'USE'] },
                    { text: 'DID YOU USE TO PLAY SOCCER', translation: '¿Solías jugar fútbol?', distractors: ['USED', 'DO'] },
                    { text: 'SHE IS GETTING USED TO IT', translation: 'Ella se está acostumbrando', distractors: ['USE', 'HAS'] },
                    { text: 'THERE USED TO BE A CINEMA', translation: 'Solía haber un cine aquí', distractors: ['DO', 'ARE'] },
                    { text: 'I AM USED TO WAKING UP EARLY', translation: 'Estoy acostumbrado a madrugar', distractors: ['USE', 'WAS'] },
                    { text: 'EVERYTHING HAS CHANGED SO MUCH', translation: 'Todo ha cambiado mucho', distractors: ['IS', 'DID'] },
                    { text: 'HE DID NOT USE TO SMOKE', translation: 'Él no solía fumar', distractors: ['USED', 'DOES'] },
                    { text: 'WE USED TO BE BEST FRIENDS', translation: 'Solíamos ser mejores amigos', distractors: ['ARE', 'USE'] },
                    { text: 'I AM ADAPTING TO THE CHANGE', translation: 'Me estoy adaptando al cambio', distractors: ['USE', 'WAS'] },
                    { text: 'LIFE USED TO BE SIMPLER', translation: 'La vida solía ser más simple', distractors: ['ARE', 'IS'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Change Vocabulary',
                instruction: 'Match the word with its meaning!',
                pairs: [
                    { emoji: 'Used to', word: 'Past habit' },
                    { emoji: 'Get used to', word: 'Becoming familiar' },
                    { emoji: 'Be used to', word: 'Accustomed' },
                    { emoji: 'Change', word: 'Transform' },
                    { emoji: 'Improve', word: 'Get better' },
                    { emoji: 'Adapt', word: 'Adjust' },
                    { emoji: 'Evolve', word: 'Develop' },
                    { emoji: 'Previous', word: 'Past / Before' },
                    { emoji: 'Current', word: 'Present / Now' },
                    { emoji: 'Routine', word: 'Repeated action' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            { word: 'USED TO', hint: 'Phrase for past habits' },
            { word: 'CHANGE', hint: 'The process of becoming different' },
            { word: 'HABIT', hint: 'A repeated action' },
            { word: 'ADAPTATION', hint: 'Adjusting to something new' },
            { word: 'EVOLUTION', hint: 'Slow and gradual change' },
            { word: 'TRANSFORM', hint: 'To change shape or appearance' },
            { word: 'IMPROVE', hint: 'To make better' },
            { word: 'DIFFERENT', hint: 'Not the same' },
            { word: 'ROUTINE', hint: 'Your daily habits' },
            { word: 'HISTORY', hint: 'The study of past events/changes' }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A1', 30]);
        console.log('✅ Successfully updated A1 Topic 30 — Talking About Changes');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
