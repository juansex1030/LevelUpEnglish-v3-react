require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Agreement (So & Neither)',
                instruction: 'How do you agree with people in English?',
                questions: [
                    {
                        question: 'We use "So" to agree with:',
                        options: ['Positive sentences', 'Negative sentences', 'Questions', 'Everything'],
                        correctIdx: 0
                    },
                    {
                        question: 'We use "Neither" to agree with:',
                        options: ['Positive sentences', 'Negative sentences', 'Questions', 'Everything'],
                        correctIdx: 1
                    },
                    {
                        question: '"I like pizza." → "____ do I."',
                        options: ['So', 'Neither', 'Too', 'Either'],
                        correctIdx: 0
                    },
                    {
                        question: '"I am not tired." → "____ am I."',
                        options: ['So', 'Neither', 'Too', 'Either'],
                        correctIdx: 1
                    },
                    {
                        question: 'What is the word order after So/Neither?',
                        options: ['Subj + Verb', 'Verb + Subj (Auxiliary)', 'Just Verb', 'Just Subj'],
                        correctIdx: 1
                    },
                    {
                        question: '"I went to London." → "So ____ I."',
                        options: ['did', 'do', 'go', 'went'],
                        correctIdx: 0
                    },
                    {
                        question: '"I can\'t swim." → "Neither ____ I."',
                        options: ['can', 'can\'t', 'do', 'don\'t'],
                        correctIdx: 0
                    },
                    {
                        question: '"I am happy." → "So ____ I."',
                        options: ['am', 'is', 'do', 'be'],
                        correctIdx: 0
                    },
                    {
                        question: '"I don\'t smoke." → "Neither ____ I."',
                        options: ['do', 'don\'t', 'have', 'did'],
                        correctIdx: 0
                    },
                    {
                        question: 'Instead of "Neither do I", you can say:',
                        options: ['I don\'t neither', 'I don\'t either', 'I not do too', 'So don\'t I'],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Short Agreements',
                instruction: 'Type: So or Neither',
                sentences: [
                    { text: 'I love music. ___ do I.', answer: 'So' },
                    { text: 'I am not hungry. ___ am I.', answer: 'Neither' },
                    { text: 'I didn\'t see him. ___ did he.', answer: 'Neither' },
                    { text: 'I have finished. ___ have I.', answer: 'So' },
                    { text: 'I won\'t go. ___ will she.', answer: 'Neither' },
                    { text: 'I am a teacher. ___ is my sister.', answer: 'So' },
                    { text: 'I don\'t speak French. ___ do they.', answer: 'Neither' },
                    { text: 'I can play guitar. ___ can he.', answer: 'So' },
                    { text: 'I should leave. ___ should you.', answer: 'So' },
                    { text: 'I wasn\'t late. ___ was I.', answer: 'Neither' },
                    { text: 'I like dogs. ___ does my brother.', answer: 'So' },
                    { text: 'I haven\'t seen it. ___ has she.', answer: 'Neither' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Echo Phrases',
                instruction: 'Build correct agreement responses',
                sentences: [
                    { text: 'SO DO I', translation: 'Yo también', distractors: ['TOO', 'ARE'] },
                    { text: 'NEITHER DO I', translation: 'Yo tampoco', distractors: ['EITHER', 'NOT'] },
                    { text: 'SO AM I', translation: 'Yo también (am)', distractors: ['ARE', 'IS'] },
                    { text: 'NEITHER WAS HE', translation: 'Él tampoco (was)', distractors: ['WERE', 'SO'] },
                    { text: 'SO WILL WE', translation: 'Nosotros también (will)', distractors: ['ARE', 'DID'] },
                    { text: 'SO DID THEY', translation: 'Ellos también (did)', distractors: ['DO', 'WENT'] },
                    { text: 'NEITHER CAN SHE', translation: 'Ella tampoco (can)', distractors: ['CANT', 'SO'] },
                    { text: 'SO SHOULD YOU', translation: 'Tú también deberías', distractors: ['MUST', 'NOT'] },
                    { text: 'NEITHER HAVE I', translation: 'Yo tampoco (have)', distractors: ['HAS', 'DONT'] },
                    { text: 'SO IS SHE', translation: 'Ella también (is)', distractors: ['AM', 'WERE'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Agreement Matches',
                instruction: 'Match the statement with the correct agreement!',
                pairs: [
                    { emoji: 'I like it', word: 'So do I' },
                    { emoji: 'I am happy', word: 'So am I' },
                    { emoji: 'I was late', word: 'So was I' },
                    { emoji: 'I will go', word: 'So will I' },
                    { emoji: 'I can swim', word: 'So can I' },
                    { emoji: 'I don\'t like it', word: 'Neither do I' },
                    { emoji: 'I am not sad', word: 'Neither am I' },
                    { emoji: 'I wasn\'t there', word: 'Neither was I' },
                    { emoji: 'I can\'t fly', word: 'Neither can I' },
                    { emoji: 'I won\'t stay', word: 'Neither will I' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Shared Feelings ☠️',
                instruction: 'Guess the word!',
                words: [
                    { word: 'AGREEMENT', hint: 'Thinking the same as someone' },
                    { word: 'NEITHER', hint: 'Used for negative agreement' },
                    { word: 'AUXILIARY', hint: 'The verb helping with "So" and "Neither"' },
                    { word: 'EITHER', hint: 'Used at the end of negative sentences (I don\'t ___)' },
                    { word: 'SIMILAR', hint: 'The same but not identical' },
                    { word: 'RESPONSE', hint: 'An answer to someone' },
                    { word: 'SENTENCE', hint: 'A group of words' },
                    { word: 'POSITIVE', hint: 'The type of sentence used with "So"' },
                    { word: 'NEGATIVE', hint: 'The type of sentence used with "Neither"' },
                    { word: 'INVERSION', hint: 'Changing the word order' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 19]);
        console.log('✅ Successfully updated A2 Topic 19 — Express Agreement');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
