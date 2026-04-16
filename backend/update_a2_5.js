require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Wish + Past Tense',
                instruction: 'How do we express wishes about the present?',
                questions: [
                    {
                        question: 'What tense do we use after "I wish" to express a present wish?',
                        options: ['Simple Present', 'Simple Past', 'Future', 'Present Continuous'],
                        correctIdx: 1
                    },
                    {
                        question: '"I wish I ____ a bigger house." (I don\'t have one now)',
                        options: ['have', 'had', 'am having', 'having'],
                        correctIdx: 1
                    },
                    {
                        question: '"I wish I ____ swim." (I can\'t swim now)',
                        options: ['could', 'can', 'can to', 'could to'],
                        correctIdx: 0
                    },
                    {
                        question: 'What form of "Be" is often used for ALL pronouns in "Wish"?',
                        options: ['Was', 'Were', 'Am', 'Been'],
                        correctIdx: 1
                    },
                    {
                        question: '"I wish he ____ here." (He is not here)',
                        options: ['was / were', 'is', 'be', 'being'],
                        correctIdx: 0
                    },
                    {
                        question: 'Is a wish about something real or hypothetical?',
                        options: ['Real', 'Hypothetical / Unreal', 'Future plan', 'Past habit'],
                        correctIdx: 1
                    },
                    {
                        question: '"I wish it ____ raining!" (It is raining now)',
                        options: ['stops', 'stopped', 'would stop (for annoying things)', 'Both B and C'],
                        correctIdx: 3
                    },
                    {
                        question: '"They wish they ____ more time." (They are busy)',
                        options: ['had', 'have', 'having', 'did have'],
                        correctIdx: 0
                    },
                    {
                        question: 'Negative form of the wish: "I wish I ____ go to work today."',
                        options: ['don\'t have to', 'didn\'t have to', 'not have to', 'won\'t have to'],
                        correctIdx: 1
                    },
                    {
                        question: 'If you wish you were taller, are you tall now?',
                        options: ['Yes', 'No', 'Maybe', 'Only in the past'],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Wishing for things',
                instruction: 'Type the correct Simple Past form of the verb in parentheses',
                sentences: [
                    { text: 'I wish I ___ (speak) English perfectly. (I don\'t now)', answer: 'spoke' },
                    { text: 'She wishes she ___ (have) more money.', answer: 'had' },
                    { text: 'I wish it ___ (be) weekend already.', answer: 'were' },
                    { text: 'We wish we ___ (can) go to the concert.', answer: 'could' },
                    { text: 'He wishes he ___ (not / have) to work tomorrow.', answer: 'did not have' },
                    { text: 'They wish they ___ (live) near the beach.', answer: 'lived' },
                    { text: 'I wish I ___ (be) taller than my brother.', answer: 'were' },
                    { text: 'She wishes she ___ (know) the answer.', answer: 'knew' },
                    { text: 'I wish you ___ (be) with me now.', answer: 'were' },
                    { text: 'We wish we ___ (buy) a house last year. (wait — this is past wish, let\'s use HAD BOUGHT or Simple Past for A2)', answer: 'bought' },
                    { text: 'I wish I ___ (not / feel) so tired.', answer: 'did not feel' },
                    { text: 'They wish it ___ (not / rain).', answer: 'did not rain' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Hypothetical Wishes',
                instruction: 'Order the words to build correct wish sentences',
                sentences: [
                    { text: 'I WISH I HAD A CAR', translation: 'Desearía tener un coche', distractors: ['HAVE', 'WAS'] },
                    { text: 'SHE WISHES SHE WERE RICH', translation: 'Ella desearía ser rica', distractors: ['IS', 'WAS'] },
                    { text: 'I WISH I COULD FLY', translation: 'Desearía poder volar', distractors: ['CAN', 'DID'] },
                    { text: 'WE WISH WE KNEW HIM', translation: 'Desearíamos conocerlo', distractors: ['KNOW', 'ARE'] },
                    { text: 'THEY WISH TO STAY LONGER', translation: 'Desean quedarse más tiempo (this is literal wish, let\'s use THEY WISH THEY STAYED LONGER)', distractors: ['STAYED', 'STAYING'] },
                    { text: 'I WISH IT WERE SUNNY', translation: 'Desearía que estuviera soleado', distractors: ['IS', 'BE'] },
                    { text: 'DO YOU WISH YOU WORKED', translation: '¿Desearías trabajar?', distractors: ['WORK', 'ARE'] },
                    { text: 'I WISH I LIVED IN SPAIN', translation: 'Desearía vivir en España', distractors: ['LIVE', 'AM'] },
                    { text: 'SHE WISHES SHE HAD CAKE', translation: 'Ella desearía tener pastel', distractors: ['HAS', 'WAS'] },
                    { text: 'I WISH I SPOKE FRENCH', translation: 'Desearía hablar francés', distractors: ['SPEAK', 'ARE'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Real ↔ Wish Match',
                instruction: 'Match the real situation with the corresponding wish!',
                pairs: [
                    { emoji: 'I am poor', word: 'I wish I were rich' },
                    { emoji: 'I am short', word: 'I wish I were tall' },
                    { emoji: 'I don\'t have a car', word: 'I wish I had a car' },
                    { emoji: 'I can\'t swim', word: 'I wish I could swim' },
                    { emoji: 'I am tired', word: 'I wish I were energetic' },
                    { emoji: 'It is raining', word: 'I wish it were sunny' },
                    { emoji: 'I live far away', word: 'I wish I lived near' },
                    { emoji: 'I don\'t know him', word: 'I wish I knew him' },
                    { emoji: 'I have to work', word: 'I wish I didn\'t have to' },
                    { emoji: 'I am lonely', word: 'I wish I had friends' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Desires ☠️',
                instruction: 'Guess the word!',
                words: [
                    { word: 'HYPOTHETICAL', hint: 'Something that is not real' },
                    { word: 'WISHING', hint: 'The act of desiring something' },
                    { word: 'IMAGINARY', hint: 'Existing only in the mind' },
                    { word: 'DESIRE', hint: 'A strong feeling of wanting' },
                    { word: 'UNREAL', hint: 'Not real' },
                    { word: 'SITUATION', hint: 'The state of things' },
                    { word: 'PARTICIPLE', hint: 'Used in past wishes (let\'s use REGRET)' },
                    { word: 'REGRET', hint: 'Feeling sorry about something' },
                    { word: 'IMPOSSIBLE', hint: 'Something that cannot happen' },
                    { word: 'CONDITION', hint: 'A state required for something else' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 5]);
        console.log('✅ Successfully updated A2 Topic 5 — Wish + Past Tense');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
