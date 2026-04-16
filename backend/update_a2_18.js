require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Question Tags',
                instruction: 'Can you add the correct tag to the sentence?',
                questions: [
                    {
                        question: 'If the main sentence is POSITIVE, the tag is:',
                        options: ['Positive', 'Negative', 'Always "is it?"', 'Optional'],
                        correctIdx: 1
                    },
                    {
                        question: 'If the main sentence is NEGATIVE, the tag is:',
                        options: ['Negative', 'Positive', 'Always "isn\'t it?"', 'Any'],
                        correctIdx: 1
                    },
                    {
                        question: '"You are a student, ____?"',
                        options: ['are you', 'aren\'t you', 'is it', 'do you'],
                        correctIdx: 1
                    },
                    {
                        question: '"He doesn\'t like tea, ____?"',
                        options: ['does he', 'doesn\'t he', 'is he', 'he does'],
                        correctIdx: 0
                    },
                    {
                        question: '"She can swim, ____?"',
                        options: ['can she', 'isn\'t she', 'can\'t she', 'does she'],
                        correctIdx: 2
                    },
                    {
                        question: '"They went to Paris, ____?" (Past Simple)',
                        options: ['did they', 'didn\'t they', 'go they', 'don\'t they'],
                        correctIdx: 1
                    },
                    {
                        question: '"I am right, ____?" (Special Case)',
                        options: ['am I not', 'aren\'t I', 'is it so', 'Both A and B'],
                        correctIdx: 3
                    },
                    {
                        question: '"Let\'s go, ____?" (Suggestion)',
                        options: ['shall we', 'won\'t we', 'don\'t we', 'do we'],
                        correctIdx: 0
                    },
                    {
                        question: '"Close the door, ____?" (Request)',
                        options: ['will you / won\'t you / could you', 'do you', 'are you', 'All are possible'],
                        correctIdx: 0
                    },
                    {
                        question: 'We use question tags to:',
                        options: ['Confirm information', 'Ask for new things', 'Be rude', 'End a sentence'],
                        correctIdx: 0
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Adding Tags',
                instruction: 'Type the correct tag (e.g. aren\'t you, does he, didn\'t they)',
                sentences: [
                    { text: 'You are coming, ___?', answer: "aren't you" },
                    { text: 'He isn\'t home, ___?', answer: 'is he' },
                    { text: 'They like pizza, ___?', answer: "don't they" },
                    { text: 'She study French, ___? (wait, let\'s use: She studies French, ___?)', answer: "doesn't she" },
                    { text: 'We won the match, ___?', answer: "didn't we" },
                    { text: 'It will rain, ___?', answer: "won't it" },
                    { text: 'You can\'t cook, ___?', answer: 'can you' },
                    { text: 'I am your friend, ___?', answer: "aren't I" },
                    { text: 'He should work harder, ___?', answer: "shouldn't he" },
                    { text: 'They don\'t have money, ___?', answer: 'do they' },
                    { text: 'She visited us, ___?', answer: "didn't she" },
                    { text: 'You won\'t be late, ___?', answer: 'will you' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Tagging Phrases',
                instruction: 'Order the words to form sentences with tags',
                sentences: [
                    { text: 'YOU ARE TIRED ARENT YOU', translation: 'Estás cansado, ¿verdad?', distractors: ['ARE', 'DONT'] },
                    { text: 'HE LIKES MUSIC DOESNT HE', translation: 'Le gusta la música, ¿no?', distractors: ['DOES', 'IS'] },
                    { text: 'THEY DID NOT GO DID THEY', translation: 'No fueron, ¿verdad?', distractors: ['DIDNT', 'DO'] },
                    { text: 'SHE CAN COOK CANT SHE', translation: 'Ella sabe cocinar, ¿verdad?', distractors: ['CAN', 'IS'] },
                    { text: 'WE SHALL GO SHALL WE', translation: 'Iremos, ¿no? (Let\'s go)', distractors: ['SHALLNT', 'DO'] },
                    { text: 'IT IS COLD ISNT IT', translation: 'Hace frío, ¿verdad?', distractors: ['IS', 'ARE'] },
                    { text: 'YOU HAVE FINISHED HAVENT YOU', translation: 'Has terminado, ¿no?', distractors: ['HAS', 'DONT'] },
                    { text: 'THEY LIVE HERE DONT THEY', translation: 'Viven aquí, ¿verdad?', distractors: ['ARE', 'IS'] },
                    { text: 'HE WAS LATE WASNT HE', translation: 'Llegó tarde, ¿no?', distractors: ['WERE', 'DID'] },
                    { text: 'YOU WILL HELP WONT YOU', translation: 'Ayudarás, ¿verdad?', distractors: ['WILL', 'DO'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Sentence ↔ Tag Match',
                instruction: 'Match the sentence with its correct tag!',
                pairs: [
                    { emoji: 'You are happy', word: 'aren\'t you?' },
                    { emoji: 'He isn\'t early', word: 'is he?' },
                    { emoji: 'They play music', word: 'don\'t they?' },
                    { emoji: 'She didn\'t see it', word: 'did she?' },
                    { emoji: 'I am right', word: 'aren\'t I?' },
                    { emoji: 'Let\'s dance', word: 'shall we?' },
                    { emoji: 'You can swim', word: 'can\'t you?' },
                    { emoji: 'It won\'t rain', word: 'will it?' },
                    { emoji: 'He should go', word: 'shouldn\'t he?' },
                    { emoji: 'We are late', word: 'aren\'t we?' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Social Checks ☠️',
                instruction: 'Guess the word related to tagging!',
                words: [
                    { word: 'CONFIRMATION', hint: 'What tags are used for' },
                    { word: 'AUXILIARY', hint: 'The verb used in the tag' },
                    { word: 'NEGATIVE', hint: 'Opposite of positive' },
                    { word: 'QUESTION', hint: 'What the tag turns the sentence into' },
                    { word: 'STATEMENT', hint: 'The first part before the tag' },
                    { word: 'INVERSION', hint: 'Switching subject and verb order' },
                    { word: 'POLITE', hint: 'A way to ask gently' },
                    { word: 'CONVERSATION', hint: 'Where tags are most common' },
                    { word: 'AGREEMENT', hint: 'What you often want with a tag' },
                    { word: 'INTONATION', hint: 'The rise or fall of your voice' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 18]);
        console.log('✅ Successfully updated A2 Topic 18 — Tag Questions');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
