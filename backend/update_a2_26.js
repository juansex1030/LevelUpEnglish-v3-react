require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Adverbs for Possibility',
                instruction: 'How certain are you?',
                questions: [
                    {
                        question: 'Which word means "I am 100% sure"?',
                        options: ['Definitely / Certainly', 'Probably', 'Maybe', 'Perhaps'],
                        correctIdx: 0
                    },
                    {
                        question: 'Which word means "about 75% sure"?',
                        options: ['Definitely', 'Probably', 'Possibly', 'Unlikely'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which words mean "about 50% sure"?',
                        options: ['Maybe / Perhaps', 'Probably', 'Certainly', 'Never'],
                        correctIdx: 0
                    },
                    {
                        question: 'Where do "maybe" and "perhaps" usually go in a sentence?',
                        options: ['At the beginning', 'After the auxiliary verb', 'At the end', 'Anywhere except the start'],
                        correctIdx: 0
                    },
                    {
                        question: 'Where do "probably" and "definitely" usually go?',
                        options: [
                            'At the beginning',
                            'After "to be" or the first auxiliary verb',
                            'Before the main verb',
                            'Both B and C'
                        ],
                        correctIdx: 3
                    },
                    {
                        question: '"I ____ won\'t go to the party." (High certainty of NOT going)',
                        options: ['definitely', 'maybe', 'perhaps', 'possibly'],
                        correctIdx: 0
                    },
                    {
                        question: '"____ it will rain tomorrow." (Beginning position)',
                        options: ['Maybe', 'Probably', 'Certainly', 'Definitely'],
                        correctIdx: 0
                    },
                    {
                        question: 'Which is the most formal word for possibility?',
                        options: ['Maybe', 'Perhaps', 'Probably', 'Ok'],
                        correctIdx: 1
                    },
                    {
                        question: 'What does "Unlikely" mean?',
                        options: ['Very possible', 'Not probable / Probably not', 'Definitely', 'Maybe'],
                        correctIdx: 1
                    },
                    {
                        question: '"His answer was ____ correct." (Almost sure)',
                        options: ['definitely', 'probably', 'maybe', 'perhaps'],
                        correctIdx: 0
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Degree of Certainty',
                instruction: 'Type the correct adverb (maybe, perhaps, probably, definitely, certainly)',
                sentences: [
                    { text: '___ I will go to the gym later. (at start)', answer: 'Maybe' },
                    { text: 'It will ___ rain tonight. (75% sure)', answer: 'probably' },
                    { text: 'I am ___ coming to the wedding! (100% sure)', answer: 'definitely' },
                    { text: '___ she is just busy at work. (polite beginning)', answer: 'Perhaps' },
                    { text: 'He is ___ the best player on the team.', answer: 'certainly' },
                    { text: 'We will ___ see you tomorrow.', answer: 'probably' },
                    { text: 'I ___ won\'t be late. I promise!', answer: 'definitely' },
                    { text: '___ we should try a different restaurant.', answer: 'Maybe' },
                    { text: 'They are ___ arriving now.', answer: 'probably' },
                    { text: 'That is ___ the right answer.', answer: 'definitely' },
                    { text: '___ you are right about that.', answer: 'Perhaps' },
                    { text: 'It is ___ going to be a long day.', answer: 'certainly' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Expressing Certainty',
                instruction: 'Build correct sentences with possibility adverbs',
                sentences: [
                    { text: 'MAYBE IT WILL RAIN LATER', translation: 'Quizás llueva más tarde', distractors: ['ARE', 'IS'] },
                    { text: 'I WILL PROBABLY BE LATE', translation: 'Probablemente llegaré tarde', distractors: ['MAYBE', 'IS'] },
                    { text: 'SHE IS DEFINITELY THE WINNER', translation: 'Ella es definitivamente la ganadora', distractors: ['PROBABLY', 'AM'] },
                    { text: 'PERHAPS WE SHOULD GO HOME', translation: 'Tal vez deberíamos ir a casa', distractors: ['MAYBE', 'ARE'] },
                    { text: 'YOU ARE CERTAINLY RIGHT NOW', translation: 'Ciertamente tienes razón ahora', distractors: ['PROBABLY', 'AM'] },
                    { text: 'THEY WILL DEFINITELY HELP US', translation: 'Ellos definitivamente nos ayudarán', distractors: ['MAYBE', 'ARE'] },
                    { text: 'HE IS PROBABLY SLEEPING STILL', translation: 'Probablemente todavía esté durmiendo', distractors: ['DEFINITELY', 'ARE'] },
                    { text: 'MAYBE SHE IS AT WORK', translation: 'Quizás ella esté en el trabajo', distractors: ['PROBABLY', 'AM'] },
                    { text: 'I WILL CERTAINLY CALL YOU', translation: 'Ciertamente te llamaré', distractors: ['MAYBE', 'ARE'] },
                    { text: 'IT WILL PROBABLY COST MORE', translation: 'Probablemente cueste más', distractors: ['DEFINITELY', 'BE'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Percentage of Certainty',
                instruction: 'Match the adverb with its level of certainty!',
                pairs: [
                    { emoji: 'Definitely', word: '100% Sure' },
                    { emoji: 'Certainly', word: '100% Sure' },
                    { emoji: 'Probably', word: '75% Sure' },
                    { emoji: 'Maybe', word: '50% Sure' },
                    { emoji: 'Perhaps', word: '50% Sure' },
                    { emoji: 'Possibly', word: '40% Sure' },
                    { emoji: 'Unlikely', word: '20% Sure' },
                    { emoji: 'Doubtful', word: '10% Sure' },
                    { emoji: 'Never', word: '0% Sure' },
                    { emoji: 'Always', word: '100% (Frequency)' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Scale of Truth ☠️',
                instruction: 'Guess the adverb!',
                words: [
                    { word: 'DEFINITELY', hint: 'Totally sure' },
                    { word: 'PROBABLY', hint: 'Very likely' },
                    { word: 'PERHAPS', hint: 'Polite version of maybe' },
                    { word: 'CERTAINLY', hint: 'Without any doubt' },
                    { word: 'POSSIBLY', hint: 'Wait — NO. DOUBTFUL' },
                    { word: 'UNLIKELY', hint: 'Probably not' },
                    { word: 'MAYBE', hint: 'Standard word for 50% chance' },
                    { word: 'SURELY', hint: 'Used to show you expect agreement' },
                    { word: 'ACTUALLY', hint: 'In fact / Really' },
                    { word: 'POSSIBLY', hint: 'Could happen' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 26]);
        console.log('✅ Successfully updated A2 Topic 26 — Adverbs for Possibility');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
