require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Reporting Modal Verbs',
                instruction: 'How do modals change when we report them?',
                questions: [
                    {
                        question: 'What does "can" become in reported speech?',
                        options: ['Can', 'Could', 'Will', 'Are able to'],
                        correctIdx: 1
                    },
                    {
                        question: 'What does "will" become in reported speech?',
                        options: ['Will', 'Would', 'Was', 'Shall'],
                        correctIdx: 1
                    },
                    {
                        question: 'What does "may" become in reported speech?',
                        options: ['Maybe', 'Might', 'Can', 'Should'],
                        correctIdx: 1
                    },
                    {
                        question: 'What does "must" often become?',
                        options: ['Must', 'Had to', 'Should', 'Both A and B'],
                        correctIdx: 3
                    },
                    {
                        question: 'Does "should" change in reported speech?',
                        options: ['Yes, to shoulded', 'No, it stays as should', 'Yes, to would', 'It becomes shall'],
                        correctIdx: 1
                    },
                    {
                        question: 'Does "could" change in reported speech?',
                        options: ['No, it stays as could', 'Yes, to can', 'Yes, to would', 'It becomes was'],
                        correctIdx: 0
                    },
                    {
                        question: '"I can fly." → He said he ____ fly.',
                        options: ['can', 'could', 'was', 'if can'],
                        correctIdx: 1
                    },
                    {
                        question: '"I will be there." → She said she ____ be there.',
                        options: ['will', 'would', 'is', 'was'],
                        correctIdx: 1
                    },
                    {
                        question: '"You must wait." → The doctor said I ____ wait.',
                        options: ['must', 'had to', 'should', 'Both A and B'],
                        correctIdx: 3
                    },
                    {
                        question: '"I might go." → He said he ____ go.',
                        options: ['might', 'could', 'may', 'would'],
                        correctIdx: 0
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Modal Shift',
                instruction: 'Type the reported form of the modal verb',
                sentences: [
                    { text: '"I can see it." → She said she ___ see it.', answer: 'could' },
                    { text: '"I will call." → He said he ___ call.', answer: 'would' },
                    { text: '"You must leave." → They said I ___ leave.', answer: 'had to' },
                    { text: '"It may rain." → The weather man said it ___ rain.', answer: 'might' },
                    { text: '"I should study." → She said she ___ study.', answer: 'should' },
                    { text: '"We can help." → They said they ___ help.', answer: 'could' },
                    { text: '"I will win." → He promised he ___ win.', answer: 'would' },
                    { text: '"I must go now." → She said she ___ go then.', answer: 'had to' },
                    { text: '"You can\'t play." → He said I ___ play.', answer: 'couldn\'t' },
                    { text: '"I won\'t stay." → She said she ___ stay.', answer: 'wouldn\'t' },
                    { text: '"You may enter." → He said I ___ enter.', answer: 'might' },
                    { text: '"I can\'t hear you." → She said she ___ hear me.', answer: 'couldn\'t' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Reporting Abilities and Plans',
                instruction: 'Build correct reported modal sentences',
                sentences: [
                    { text: 'SHE SAID SHE COULD SWIM', translation: 'Ella dijo que sabía nadar', distractors: ['CAN', 'IS'] },
                    { text: 'HE SAID HE WOULD CALL', translation: 'Él dijo que llamaría', distractors: ['WILL', 'DID'] },
                    { text: 'THEY SAID I HAD TO', translation: 'Ellos dijeron que yo tenía que...', distractors: ['MUST', 'WAS'] },
                    { text: 'I SAID I WOULD TRY', translation: 'Dije que lo intentaría', distractors: ['WILL', 'AM'] },
                    { text: 'SHE SAID SHE MIGHT GO', translation: 'Ella dijo que quizás iría', distractors: ['MAY', 'WILL'] },
                    { text: 'THEY SAID THEY COULD HELP', translation: 'Dijeron que podían ayudar', distractors: ['CAN', 'ARE'] },
                    { text: 'HE SAID HE WOULD STAY', translation: 'Él dijo que se quedaría', distractors: ['WILL', 'WAS'] },
                    { text: 'SHE TOLD ME I COULD', translation: 'Ella me dijo que yo podía...', distractors: ['CAN', 'DID'] },
                    { text: 'THEY SAID WE SHOULD WAIT', translation: 'Dijeron que deberíamos esperar', distractors: ['SHALL', 'WERE'] },
                    { text: 'I SAID I CANNOT GO', translation: 'Dije que no podía ir (Wait, use I SAID I COULD NOT GO)', distractors: ['CANT', 'DONT'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Modal Shift Match',
                instruction: 'Match the direct modal with its reported form!',
                pairs: [
                    { emoji: 'Can', word: 'Could' },
                    { emoji: 'Will', word: 'Would' },
                    { emoji: 'May', word: 'Might' },
                    { emoji: 'Must', word: 'Had to' },
                    { emoji: 'Can\'t', word: 'Couldn\'t' },
                    { emoji: 'Won\'t', word: 'Wouldn\'t' },
                    { emoji: 'Should', word: 'Should (No change)' },
                    { emoji: 'Could', word: 'Could (No change)' },
                    { emoji: 'Might', word: 'Might (No change)' },
                    { emoji: 'Shall', word: 'Should' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Reporting Logic ☠️',
                instruction: 'Guess the word!',
                words: [
                    { word: 'COULD', hint: 'The reported form of can' },
                    { word: 'WOULD', hint: 'The reported form of will' },
                    { word: 'MIGHT', hint: 'The reported form of may' },
                    { word: 'OBLIGATION', hint: 'What "must" and "had to" show' },
                    { word: 'POSSIBILITY', hint: 'What "may" and "might" show' },
                    { word: 'PREDICTION', hint: 'What "will" and "would" can show' },
                    { word: 'AUXILIARY', hint: 'Modal verbs are a type of ____' },
                    { word: 'BACKSHIFT', hint: 'The process of changing tenses' },
                    { word: 'REPORTED', hint: 'Not direct speech' },
                    { word: 'INDIRECT', hint: 'The same as reported' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 32]);
        console.log('✅ Successfully updated A2 Topic 32 — Reported Speech (Modals)');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
