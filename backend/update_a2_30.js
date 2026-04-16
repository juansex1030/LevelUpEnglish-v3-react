require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Past Modals (Regrets and Guesses)',
                instruction: 'What happened in the past?',
                questions: [
                    {
                        question: 'What is the structure of a Past Modal?',
                        options: ['Modal + have + Past Participle', 'Modal + Past Participle', 'Modal + had + Verb', 'Modal + been'],
                        correctIdx: 0
                    },
                    {
                        question: 'Which modal do we use for ADVICE about the past (regrets)?',
                        options: ['Must have', 'Should have', 'Could have', 'Can have'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which modal do we use for a STRONG GUESS about the past?',
                        options: ['Should have', 'Must have', 'Might have', 'Could have'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which modal shows a PAST POSSIBILITY that didn\'t happen?',
                        options: ['Could have', 'Must have', 'Should have', 'Can have'],
                        correctIdx: 0
                    },
                    {
                        question: '"I ____ (study) harder for the exam. I failed."',
                        options: ['should have studied', 'must have studied', 'could have study', 'should study'],
                        correctIdx: 0
                    },
                    {
                        question: '"He ____ (be) late. He is not here." (Strong guess)',
                        options: ['must have been', 'should have been', 'might have being', 'can have been'],
                        correctIdx: 0
                    },
                    {
                        question: '"You ____ (call) me!" (Possibility/Regret)',
                        options: ['could have called', 'must have call', 'should called', 'might call'],
                        correctIdx: 0
                    },
                    {
                        question: 'What is the negative of "Should have"?',
                        options: ['Should not have', 'Shouldn\'t have', 'Not should have', 'Both A and B'],
                        correctIdx: 3
                    },
                    {
                        question: '"They ____ (forget) the meeting." (Possibility)',
                        options: ['might have forgotten', 'should have forgotten', 'can have forgot', 'will have forget'],
                        correctIdx: 0
                    },
                    {
                        question: 'The verb after "have" in past modals is always in:',
                        options: ['Past Participle', 'Base form', '-ing form', 'Past Simple'],
                        correctIdx: 0
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Reflecting on the Past',
                instruction: 'Type: should have, must have, or could have + participle',
                sentences: [
                    { text: 'I ___ (be) more careful. (regret)', answer: 'should have been' },
                    { text: 'He ___ (lose) his keys. (strong guess)', answer: 'must have lost' },
                    { text: 'You ___ (tell) me earlier! (regret)', answer: 'should have told' },
                    { text: 'They ___ (be) at the party, but I didn\'t see them.', answer: 'could have been' },
                    { text: 'She ___ (buy) the bread. (she was supposed to)', answer: 'should have bought' },
                    { text: 'It ___ (rain) last night. The ground is wet.', answer: 'must have rained' },
                    { text: 'I ___ (help) you if you had asked.', answer: 'could have helped' },
                    { text: 'You ___ (not / say) that to her. (criticism)', answer: 'should not have said' },
                    { text: 'The cat ___ (eat) the fish! (it is gone)', answer: 'must have eaten' },
                    { text: 'We ___ (arrive) earlier if there was no traffic.', answer: 'could have arrived' },
                    { text: 'I ___ (finish) my homework yesterday.', answer: 'should have finished' },
                    { text: 'He ___ (forget) his phone. He isn\'t answering.', answer: 'must have forgotten' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Past Regrets',
                instruction: 'Order the words to build correct past modal sentences',
                sentences: [
                    { text: 'I SHOULD HAVE STUDIED HARDER', translation: 'Debería haber estudiado más', distractors: ['MUST', 'WAS'] },
                    { text: 'HE MUST HAVE FORGOTTEN IT', translation: 'Él debe haberlo olvidado', distractors: ['SHOULD', 'IS'] },
                    { text: 'YOU COULD HAVE CALLED ME', translation: 'Podrías haberme llamado', distractors: ['SHOULD', 'DID'] },
                    { text: 'WE SHOULD HAVE GONE EARLY', translation: 'Deberíamos haber ido temprano', distractors: ['WENT', 'ARE'] },
                    { text: 'SHE MUST HAVE HAD FUN', translation: 'Ella debe habérselo pasado bien', distractors: ['HAS', 'WAS'] },
                    { text: 'THEY COULD HAVE WON TODAY', translation: 'Ellos podrían haber ganado hoy', distractors: ['SHOULD', 'ARE'] },
                    { text: 'I SHOULD NOT HAVE SAID', translation: 'No debería haber dicho...', distractors: ['DONT', 'WAS'] },
                    { text: 'IT MUST HAVE RAINED NOW', translation: 'Debe haber llovido ahora', distractors: ['IS', 'BEEN'] },
                    { text: 'COULD YOU HAVE FINISHED IT', translation: '¿Podrías haberlo terminado?', distractors: ['FINISHED', 'ARE'] },
                    { text: 'HE SHOULD HAVE TOLD TRUTH', translation: 'Él debería haber dicho la verdad', distractors: ['TELLS', 'WAS'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Past Modal Meanings',
                instruction: 'Match the modal with its meaning!',
                pairs: [
                    { emoji: 'Should have', word: 'Regret / Advice' },
                    { emoji: 'Must have', word: 'Strong Deduction' },
                    { emoji: 'Could have', word: 'Past Possibility' },
                    { emoji: 'Might have', word: 'Uncertain Deduction' },
                    { emoji: 'Shouldn\'t have', word: 'Criticism' },
                    { emoji: 'Done', word: 'Participle for Do' },
                    { emoji: 'Been', word: 'Participle for Be' },
                    { emoji: 'Seen', word: 'Participle for See' },
                    { emoji: 'Gone', word: 'Participle for Go' },
                    { emoji: 'Known', word: 'Participle for Know' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Past Reflections ☠️',
                instruction: 'Guess the past participle!',
                words: [
                    { word: 'STUDIED', hint: 'Past participle of study' },
                    { word: 'FORGOTTEN', hint: 'Past participle of forget' },
                    { word: 'THOUGHT', hint: 'Past participle of think' },
                    { word: 'BROUGHT', hint: 'Past participle of bring' },
                    { word: 'CAUGHT', hint: 'Past participle of catch' },
                    { word: 'BOUGHT', hint: 'Past participle of buy' },
                    { word: 'WRITTEN', hint: 'Past participle of write' },
                    { word: 'HEARD', hint: 'Past participle of hear' },
                    { word: 'LEFT', hint: 'Past participle of leave' },
                    { word: 'TOLD', hint: 'Past participle of tell' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 30]);
        console.log('✅ Successfully updated A2 Topic 30 — Past Modals');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
