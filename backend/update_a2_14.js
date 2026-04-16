require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Gerunds vs. Infinitives',
                instruction: 'Can you choose the correct verb form?',
                questions: [
                    {
                        question: 'What is a "gerund"?',
                        options: ['To + Verb', 'Verb + -ing', 'Verb + -ed', 'Base form'],
                        correctIdx: 1
                    },
                    {
                        question: 'What is an "infinitive"? (with to)',
                        options: ['Verb + -ing', 'To + Verb', 'Verb + -s', 'Past participle'],
                        correctIdx: 1
                    },
                    {
                        question: '"I enjoy ____." — Which is correct?',
                        options: ['to swim', 'swimming', 'swim', 'swims'],
                        correctIdx: 1
                    },
                    {
                        question: '"I want ____ a doctor." — Which is correct?',
                        options: ['to be', 'being', 'be', 'am'],
                        correctIdx: 0
                    },
                    {
                        question: 'Which verb is followed by a gerund?',
                        options: ['Decide', 'Finish / Enjoy', 'Hate (sometimes)', 'Plan'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which verb is followed by an infinitive?',
                        options: ['Like (often)', 'Decide / Plan', 'Avoid', 'Keep'],
                        correctIdx: 1
                    },
                    {
                        question: '"He decided ____ a new car."',
                        options: ['buying', 'to buy', 'buy', 'bought'],
                        correctIdx: 1
                    },
                    {
                        question: '"Stop ____! I can\'t study."',
                        options: ['talking', 'to talk', 'talk', 'talks'],
                        correctIdx: 0
                    },
                    {
                        question: 'After "love", you can use:',
                        options: ['Only gerund', 'Only infinitive', 'Both (in most cases)', 'Past simple'],
                        correctIdx: 2
                    },
                    {
                        question: '"Would like" is ALWAYS followed by:',
                        options: ['Infinitive (to + verb)', 'Gerund (-ing)', 'Base form', 'Adjective'],
                        correctIdx: 0
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Gerund or Infinitive?',
                instruction: 'Type the correct form: swimming, to swim, etc.',
                sentences: [
                    { text: 'I love ___ (read) books. (general)', answer: 'reading' },
                    { text: 'I would like ___ (read) that book. (specific)', answer: 'to read' },
                    { text: 'She promised ___ (help) me. (promise)', answer: 'to help' },
                    { text: 'They finished ___ (eat) dinner. (finish)', answer: 'eating' },
                    { text: 'We decided ___ (go) to Spain.', answer: 'to go' },
                    { text: 'I hate ___ (wait) in queues.', answer: 'waiting' },
                    { text: 'I hope ___ (see) you soon.', answer: 'to see' },
                    { text: 'Avoid ___ (touch) the surface.', answer: 'touching' },
                    { text: 'He enjoys ___ (play) football.', answer: 'playing' },
                    { text: 'I want ___ (be) happy.', answer: 'to be' },
                    { text: 'She suggested ___ (buy) a gift.', answer: 'buying' },
                    { text: 'It started ___ (rain) heavily.', answer: 'raining' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Complex Verb Patterns',
                instruction: 'Order the words to build correct sentences with verb patterns',
                sentences: [
                    { text: 'I LOVE SWIMMING IN THE SEA', translation: 'Me encanta nadar en el mar', distractors: ['TO', 'SWIM'] },
                    { text: 'I WANT TO GO TO SPAIN', translation: 'Quiero ir a España', distractors: ['GOING', 'WENT'] },
                    { text: 'SHE ENJOYS DANCING EVERY NIGHT', translation: 'Ella disfruta bailando cada noche', distractors: ['TO', 'DANCES'] },
                    { text: 'THEY DECIDED TO BUY A HOUSE', translation: 'Ellos decidieron comprar una casa', distractors: ['BUYING', 'ARE'] },
                    { text: 'DO YOU LIKE WATCHING T V', translation: '¿Te gusta ver la tele?', distractors: ['TO', 'IS'] },
                    { text: 'I HOPE TO FIND A JOB', translation: 'Espero encontrar un trabajo', distractors: ['FINDING', 'WAS'] },
                    { text: 'HE SUGGESTED GOING OUT NOW', translation: 'Él sugirió salir ahora', distractors: ['TO', 'GOES'] },
                    { text: 'STOP TALKING PLEASE AT ONCE', translation: 'Deja de hablar de una vez', distractors: ['TO', 'ARE'] },
                    { text: 'WOULD YOU LIKE TO STAY HERE', translation: '¿Te gustaría quedarte aquí?', distractors: ['STAYING', 'IS'] },
                    { text: 'I HATE ARRIVING LATE AGAIN', translation: 'Odio llegar tarde otra vez', distractors: ['TO', 'ARE'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Verb + Pattern Match',
                instruction: 'Match the verb with its correct follow-up form!',
                pairs: [
                    { emoji: 'Want', word: 'to + verb' },
                    { emoji: 'Decide', word: 'to + verb' },
                    { emoji: 'Hope', word: 'to + verb' },
                    { emoji: 'Need', word: 'to + verb' },
                    { emoji: 'Enjoy', word: 'verb + -ing' },
                    { emoji: 'Hate', word: 'verb + -ing' },
                    { emoji: 'Finish', word: 'verb + -ing' },
                    { emoji: 'Avoid', word: 'verb + -ing' },
                    { emoji: 'Miss', word: 'verb + -ing' },
                    { emoji: 'Plan', word: 'to + verb' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Verb Extensions ☠️',
                instruction: 'Guess the word!',
                words: [
                    { word: 'GERUND', hint: 'The -ing form of a verb' },
                    { word: 'INFINITIVE', hint: 'The to + base form' },
                    { word: 'PATTERNS', hint: 'How verbs combine together' },
                    { word: 'ENJOYING', hint: 'Receiving pleasure from' },
                    { word: 'WANTING', hint: 'Desiring something' },
                    { word: 'PLANNING', hint: 'Designing a future action' },
                    { word: 'DECIDING', hint: 'Making a choice' },
                    { word: 'FINISHING', hint: 'Ending an action' },
                    { word: 'AVOIDING', hint: 'Staying away from' },
                    { word: 'SUGGESTING', hint: 'Recommending' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 14]);
        console.log('✅ Successfully updated A2 Topic 14 — Gerunds vs. Infinitives');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
