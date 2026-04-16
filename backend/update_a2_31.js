require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Reported Speech (Basics)',
                instruction: 'Can you report what someone said?',
                questions: [
                    {
                        question: 'In reported speech, we usually move the tense:',
                        options: ['One step back into the past', 'One step forward to the future', 'Stay the same', 'To -ing form'],
                        correctIdx: 0
                    },
                    {
                        question: '"I am tired." → He said he ____ tired.',
                        options: ['is', 'was', 'am', 'be'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which word is optional in "He said (that) he was ready"?',
                        options: ['He', 'said', 'that', 'was'],
                        correctIdx: 2
                    },
                    {
                        question: '"I live in Paris." → She said she ____ in Paris.',
                        options: ['lives', 'lived', 'live', 'living'],
                        correctIdx: 1
                    },
                    {
                        question: 'We use "told" when we specify:',
                        options: ['The listener', 'The time', 'The message', 'The verb'],
                        correctIdx: 0
                    },
                    {
                        question: '"I saw the movie." → They said they ____ the movie. (Past becomes...)',
                        options: ['saw', 'had seen', 'see', 'was seeing'],
                        correctIdx: 1
                    },
                    {
                        question: '"Open the door!" (Request) → He told me ____ the door.',
                        options: ['open', 'to open', 'opening', 'opened'],
                        correctIdx: 1
                    },
                    {
                        question: '"Don\'t cry!" → She told me ____ cry.',
                        options: ['not cry', 'not to cry', 'no cry', 'to not cry'],
                        correctIdx: 1
                    },
                    {
                        question: 'What does "today" become in reported speech?',
                        options: ['Yesterday', 'That day', 'Now', 'Then'],
                        correctIdx: 1
                    },
                    {
                        question: 'What does "now" become in reported speech?',
                        options: ['Then / At that time', 'Today', 'Before', 'Wait'],
                        correctIdx: 0
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Reporting the Message',
                instruction: 'Complete the reported sentence (move the tense back)',
                sentences: [
                    { text: '"I like pizza." → She said she ___ pizza.', answer: 'liked' },
                    { text: '"I am working." → He said he ___ working.', answer: 'was' },
                    { text: '"We won!" → They said they ___ won. (had + participle)', answer: 'had' },
                    { text: '"I will go." → She said she ___ go.', answer: 'would' },
                    { text: '"Please sit down." → The teacher told us ___ sit down.', answer: 'to' },
                    { text: '"Don\'t talk." → She told me ___ talk.', answer: 'not to' },
                    { text: '"I have finished." → He said he ___ finished. (had + participle)', answer: 'had' },
                    { text: '"You can swim." → She told me I ___ swim.', answer: 'could' },
                    { text: '"This is nice." → He said that ___ was nice. (this -> ...)', answer: 'that' },
                    { text: '"I am here." → She said she was ___ . (here -> ...)', answer: 'there' },
                    { text: '"See you tomorrow." → He said he would see me the ___ day.', answer: 'next' },
                    { text: '"I saw him." → She said she had ___ him.', answer: 'seen' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Reporting Words',
                instruction: 'Order the words to build correct reported sentences',
                sentences: [
                    { text: 'SHE SAID SHE WAS TIRED', translation: 'Ella dijo que estaba cansada', distractors: ['IS', 'AM'] },
                    { text: 'HE TOLD ME TO WAIT', translation: 'Él me dijo que esperara', distractors: ['SAID', 'WAITS'] },
                    { text: 'THEY SAID THEY LIKED IT', translation: 'Ellos dijeron que les gustaba', distractors: ['LIKE', 'ARE'] },
                    { text: 'SHE TOLD US NOT TO GO', translation: 'Ella nos dijo que no fuéramos', distractors: ['TO', 'DONT'] },
                    { text: 'I SAID THAT I WAS BUSY', translation: 'Dije que estaba ocupado', distractors: ['AM', 'IS'] },
                    { text: 'HE SAID HE HAD FINISHED', translation: 'Él dijo que había terminado', distractors: ['HAS', 'WAS'] },
                    { text: 'THEY TOLD HIM TO LEAVE', translation: 'Ellos le dijeron que se fuera', distractors: ['SAID', 'LEAVING'] },
                    { text: 'SHE SAID SHE WOULD CALL', translation: 'Ella dijo que llamaría', distractors: ['WILL', 'ARE'] },
                    { text: 'THEY SAID THEY WERE READY', translation: 'Dijeron que estaban listos', distractors: ['ARE', 'WAS'] },
                    { text: 'HE SAID SHE WAS HAPPY', translation: 'Él dijo que ella estaba feliz', distractors: ['IS', 'BE'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Tense Backshift Match',
                instruction: 'Match the direct tense with its reported form!',
                pairs: [
                    { emoji: 'Present Simple', word: 'Past Simple' },
                    { emoji: 'Past Simple', word: 'Past Perfect' },
                    { emoji: 'Present Continuous', word: 'Past Continuous' },
                    { emoji: 'Will', word: 'Would' },
                    { emoji: 'Can', word: 'Could' },
                    { emoji: 'Am / Is', word: 'Was' },
                    { emoji: 'Are', word: 'Were' },
                    { emoji: 'Have / Has', word: 'Had' },
                    { emoji: 'Do / Does', word: 'Did (if used)' },
                    { emoji: 'Today', word: 'That day' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Reporting Speech ☠️',
                instruction: 'Guess the word!',
                words: [
                    { word: 'REPORTED', hint: 'Speech told by someone else' },
                    { word: 'BACKSHIFT', hint: 'The move of tenses to the past' },
                    { word: 'STATEMENT', hint: 'A normal sentence' },
                    { word: 'PRONOUNS', hint: 'Words like I/He/She that change' },
                    { word: 'OPTIONAL', hint: 'The word "that" is ____' },
                    { word: 'LISTENER', hint: 'The person who hears the message' },
                    { word: 'SPEAKER', hint: 'The person who says the original words' },
                    { word: 'DISTANCE', hint: 'Here becomes there, this becomes that' },
                    { word: 'INDIRECT', hint: 'Another word for reported speech' },
                    { word: 'AUXILIARY', hint: 'The helping verb in the sentence' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A2', 31]);
        console.log('✅ Successfully updated A2 Topic 31 — Reported Speech (Statements & Requests)');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
