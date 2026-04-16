require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: First vs. Second Conditional',
                instruction: 'Real or Imaginary? Choose wisely!',
                questions: [
                    {
                        question: 'Which conditional is for REAL possibilities?',
                        options: ['First Conditional', 'Second Conditional', 'Zero Conditional', 'Third Conditional'],
                        correctIdx: 0
                    },
                    {
                        question: 'Which conditional is for IMAGINARY situations?',
                        options: ['First Conditional', 'Second Conditional', 'Zero Conditional', 'Third Conditional'],
                        correctIdx: 1
                    },
                    {
                        question: '"If I win, I will invite you." — Which conditional?',
                        options: ['First', 'Second', 'Zero', 'Past'],
                        correctIdx: 0
                    },
                    {
                        question: '"If I won, I would invite you." — Which conditional?',
                        options: ['First', 'Second', 'Zero', 'Past'],
                        correctIdx: 1
                    },
                    {
                        question: 'Structure of First Conditional?',
                        options: ['If + Present, Will', 'If + Past, Would', 'If + Present, Present', 'If + Past, Had'],
                        correctIdx: 0
                    },
                    {
                        question: 'Structure of Second Conditional?',
                        options: ['If + Present, Will', 'If + Past, Would', 'If + Present, Present', 'If + Past, Had'],
                        correctIdx: 1
                    },
                    {
                        question: '"If it ____ (be) sunny tomorrow, we will go out." (Real possibility)',
                        options: ['is', 'were', 'will be', 'was'],
                        correctIdx: 0
                    },
                    {
                        question: '"If it ____ (be) sunny every day, I would be happy." (Imaginary)',
                        options: ['is', 'were', 'will be', 'was'],
                        correctIdx: 1
                    },
                    {
                        question: 'First conditional uses "if" + ____ tense?',
                        options: ['Present Simple', 'Past Simple', 'Future', 'Present Perfect'],
                        correctIdx: 0
                    },
                    {
                        question: 'Second conditional uses "if" + ____ tense?',
                        options: ['Present Simple', 'Past Simple', 'Future', 'Present Perfect'],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Contrast the Conditionals',
                instruction: 'Type the correct form of the verb',
                sentences: [
                    { text: 'If I have time tonight, I ___ (watch) the movie. (first)', answer: 'will watch' },
                    { text: 'If I had a million dollars, I ___ (buy) a castle. (second)', answer: 'would buy' },
                    { text: 'If she ___ (study) hard, she will pass. (first)', answer: 'studies' },
                    { text: 'If she ___ (study) more, she would pass. (second - improbable)', answer: 'studied' },
                    { text: 'They will be angry if we ___ (be) late. (first)', answer: 'are' },
                    { text: 'They would be angry if we ___ (be) late. (second)', answer: 'were' },
                    { text: 'What will you do if it ___ (rain)?', answer: 'rains' },
                    { text: 'What would you do if it ___ (rain) diamonds?', answer: 'rained' },
                    { text: 'I ___ (call) you if I see him.', answer: 'will call' },
                    { text: 'I ___ (call) him if I had his number.', answer: 'would call' },
                    { text: 'If he ___ (not / go) now, he will miss the bus.', answer: 'doesn\'t go' },
                    { text: 'If he ___ (not / have) a car, he would take the bus.', answer: 'didn\'t have' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Real vs. Unreal',
                instruction: 'Build correct conditional sentences',
                sentences: [
                    { text: 'IF IT RAINS I WILL STAY', translation: 'Si llueve me quedaré (Real)', distractors: ['WOULD', 'WERE'] },
                    { text: 'IF IT RAINED I WOULD STAY', translation: 'Si lloviera me quedaría (Imaginary)', distractors: ['WILL', 'IS'] },
                    { text: 'I WILL HELP IF I CAN', translation: 'Ayudaré si puedo', distractors: ['WOULD', 'COULD'] },
                    { text: 'I WOULD HELP IF I COULD', translation: 'Ayudaría si pudiera', distractors: ['WILL', 'CAN'] },
                    { text: 'SHE WILL CRY IF HE LEAVES', translation: 'Ella llorará si él se va', distractors: ['WOULD', 'LEFT'] },
                    { text: 'SHE WOULD CRY IF HE LEFT', translation: 'Ella lloraría si él se fuera', distractors: ['WILL', 'LEAVES'] },
                    { text: 'THEY WILL WIN IF THEY TRY', translation: 'Ganarán si lo intentan', distractors: ['WOULD', 'TRIED'] },
                    { text: 'THEY WOULD WIN IF THEY TRIED', translation: 'Ganarían si lo intentaran', distractors: ['WILL', 'TRY'] },
                    { text: 'IF I SEE HER I TELL', translation: 'Si la veo le diré (short)... I WILL TELL', distractors: ['WOULD', 'WAS'] },
                    { text: 'IF I SAW HER I WOULD', translation: 'Si la viera yo...', distractors: ['WILL', 'AM'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Pattern Contrast',
                instruction: 'Match the conditional type with its structure!',
                pairs: [
                    { emoji: 'First Conditional', word: 'If + Present, Will' },
                    { emoji: 'Second Conditional', word: 'If + Past, Would' },
                    { emoji: 'Possible', word: 'First Conditional' },
                    { emoji: 'Imaginary', word: 'Second Conditional' },
                    { emoji: 'If + studied', word: 'result: would pass' },
                    { emoji: 'If + studies', word: 'result: will pass' },
                    { emoji: 'If + were rich', word: 'result: would buy' },
                    { emoji: 'If + have money', word: 'result: will buy' },
                    { emoji: 'Likely', word: 'First Conditional' },
                    { emoji: 'Hypothetical', word: 'Second Conditional' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Reality Check ☠️',
                instruction: 'Guess the word!',
                words: [
                    { word: 'REALITY', hint: 'What the first conditional is close to' },
                    { word: 'FANTASY', hint: 'What the second conditional can be' },
                    { word: 'POSSIBILITY', hint: 'Likelihood of happening' },
                    { word: 'UNPROBABLE', hint: 'Likely not to happen' },
                    { word: 'CONSEQUENCE', hint: 'The result part of the sentence' },
                    { word: 'SCENARIO', hint: 'The situation described' },
                    { word: 'STRUCTURE', hint: 'The way the sentence is built' },
                    { word: 'AUXILIARY', hint: 'Will and Would are ____' },
                    { word: 'DISTINCTION', hint: 'The difference between the two' },
                    { word: 'SELECTION', hint: 'Choosing the right one' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 29]);
        console.log('✅ Successfully updated A2 Topic 29 — First vs Second Conditional');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
