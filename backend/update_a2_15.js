require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Zero Conditional (Facts)',
                instruction: 'What always happens when...?',
                questions: [
                    {
                        question: 'The Zero Conditional is used for:',
                        options: ['Future plans', 'General truths and scientific facts', 'Past habits', 'Imaginary situations'],
                        correctIdx: 1
                    },
                    {
                        question: 'What is the tense structure of Zero Conditional?',
                        options: ['If + Past, Past', 'If + Present, Future', 'If + Present Simple, Present Simple', 'If + Past, Would'],
                        correctIdx: 2
                    },
                    {
                        question: '"If you heat ice, it ____." — Which is correct?',
                        options: ['melt', 'melts', 'will melt', 'melted'],
                        correctIdx: 1
                    },
                    {
                        question: '"If it rains, the grass ____ wet."',
                        options: ['get', 'gets', 'will get', 'got'],
                        correctIdx: 1
                    },
                    {
                        question: 'Can we use "when" instead of "if" in Zero Conditional?',
                        options: ['Yes, it means the same thing', 'No', 'Only in questions', 'Only for the future'],
                        correctIdx: 0
                    },
                    {
                        question: '"If you freeze water, it ____ solid."',
                        options: ['become', 'becomes', 'is becoming', 'will become'],
                        correctIdx: 1
                    },
                    {
                        question: '"Plants die if they ____ enough water."',
                        options: ['don\'t get', 'not get', 'won\'t get', 'doesn\'t get'],
                        correctIdx: 0
                    },
                    {
                        question: '"If you mix red and white, you ____ pink."',
                        options: ['got', 'get', 'getting', 'will get'],
                        correctIdx: 1
                    },
                    {
                        question: '"When you are late for work, your boss ____ angry."',
                        options: ['is', 'gets', 'will be', 'Both A and B'],
                        correctIdx: 3
                    },
                    {
                        question: '"I feel tired if I ____ sleep enough."',
                        options: ['don\'t', 'doesn\'t', 'am not', 'no'],
                        correctIdx: 0
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Simple Truths',
                instruction: 'Type the correct form of the verb in parentheses (General Truths)',
                sentences: [
                    { text: 'If you heat water to 100 degrees, it ___ (boil).', answer: 'boils' },
                    { text: 'When the sun ___ (set), it gets dark.', answer: 'sets' },
                    { text: 'If you ___ (not / eat), you get hungry.', answer: 'don\'t eat' },
                    { text: 'I feel sick if I ___ (eat) too much chocolate.', answer: 'eat' },
                    { text: 'If you mix blue and yellow, you ___ (get) green.', answer: 'get' },
                    { text: 'When babies are hungry, they ___ (cry).', answer: 'cry' },
                    { text: 'If you ___ (touch) a fire, you get burnt.', answer: 'touch' },
                    { text: 'Ice melts if you ___ (leave) it in the sun.', answer: 'leave' },
                    { text: 'If she ___ (not / study), she fails.', answer: 'doesn\'t study' },
                    { text: 'The doorbell rings if you ___ (press) the button.', answer: 'press' },
                    { text: 'If you double two, you ___ (get) four.', answer: 'get' },
                    { text: 'People get fat if they ___ (eat) too much junk food.', answer: 'eat' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Fact Patterns',
                instruction: 'Build correct Zero Conditional sentences',
                sentences: [
                    { text: 'IF YOU HEAT ICE IT MELTS', translation: 'Si calientas hielo, se derrite', distractors: ['WILL', 'DO'] },
                    { text: 'WHEN IT RAINS THE GRASS GETS WET', translation: 'Cuando llueve, el pasto se moja', distractors: ['WILL', 'DOES'] },
                    { text: 'I GET HUNGRY IF I DO NOT EAT', translation: 'Me da hambre si no como', distractors: ['DONT', 'NOT'] },
                    { text: 'IF YOU MIX RED AND BLUE', translation: 'Si mezclas rojo y azul...', distractors: ['DO', 'WILL'] },
                    { text: 'PLANTS DIE IF THEY ARE DRY', translation: 'Las plantas mueren si están secas', distractors: ['DO', 'IS'] },
                    { text: 'ICE FLOATS IF YOU PUT IN WATER', translation: 'El hielo flota si lo pones en agua', distractors: ['WILL', 'ARE'] },
                    { text: 'WHEN THE SUN RISES DAY BEGINS', translation: 'Cuando el sol sale, el día empieza', distractors: ['IS', 'DO'] },
                    { text: 'IF YOU FREEZE WATER IT BECOMES ICE', translation: 'Si congelas agua, se vuelve hielo', distractors: ['WILL', 'ARE'] },
                    { text: 'DOES WATER BOIL IF YOU HEAT IT', translation: '¿Hierve el agua si la calientas?', distractors: ['IS', 'DO'] },
                    { text: 'YOU GET PINK IF YOU MIX RED', translation: 'Obtienes rosa si mezclas rojo...', distractors: ['WILL', 'ARE'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Cause and Effect',
                instruction: 'Match the cause with the scientific effect!',
                pairs: [
                    { emoji: 'Heat ice', word: 'It melts' },
                    { emoji: 'Freeze water', word: 'It becomes ice' },
                    { emoji: 'Mix red and yellow', word: 'Get orange' },
                    { emoji: 'Touch fire', word: 'Get burnt' },
                    { emoji: 'Sun sets', word: 'Gets dark' },
                    { emoji: 'Babies hungry', word: 'They cry' },
                    { emoji: 'No water', word: 'Plants die' },
                    { emoji: 'Add salt to water', word: 'It boils later' },
                    { emoji: 'Heat water', word: 'It evaporates' },
                    { emoji: 'Don\'t sleep', word: 'Feel tired' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Scientific Truths ☠️',
                instruction: 'Guess the word!',
                words: [
                    { word: 'SCIENTIFIC', hint: 'Based on science' },
                    { word: 'EVAPORATE', hint: 'To turn from liquid to gas' },
                    { word: 'FREEZING', hint: 'Turning from liquid to solid' },
                    { word: 'MELTING', hint: 'Turning from solid to liquid' },
                    { word: 'UNIVERSAL', hint: 'True everywhere' },
                    { word: 'GENERAL', hint: 'Not specific' },
                    { word: 'TRUTH', hint: 'Something that is real' },
                    { word: 'HYPOTHESIS', hint: 'An idea to be tested (let\'s use FACT)' },
                    { word: 'AUTOMATIC', hint: 'Happening without thought' },
                    { word: 'REACTION', hint: 'Something caused by an action' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 15]);
        console.log('✅ Successfully updated A2 Topic 15 — Zero Conditional');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
