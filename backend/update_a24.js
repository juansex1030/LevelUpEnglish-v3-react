require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Present Perfect vs. Simple Past',
                instruction: 'Can you choose the correct tense?',
                questions: [
                    {
                        question: 'We use the Simple Past for:',
                        options: ['Unspecified past times', 'Specific times (e.g., yesterday)', 'Current actions', 'Future plans'],
                        correctIdx: 1
                    },
                    {
                        question: 'We use the Present Perfect for:',
                        options: ['Completed actions at a known time', 'Life experiences at any time', 'Daily routines', 'Things happening now'],
                        correctIdx: 1
                    },
                    {
                        question: '"I ____ that movie last night." — Which is correct?',
                        options: ['have seen', 'saw', 'see', 'seen'],
                        correctIdx: 1
                    },
                    {
                        question: '"____ you ever been to London?"',
                        options: ['Did', 'Do', 'Have', 'Are'],
                        correctIdx: 2
                    },
                    {
                        question: '"She ____ her car two years ago."',
                        options: ['bought', 'has bought', 'buys', 'buyed'],
                        correctIdx: 0
                    },
                    {
                        question: '"They ____ just arrived." — Which is correct?',
                        options: ['did', 'have', 'are', 'were'],
                        correctIdx: 1
                    },
                    {
                        question: '"I ____ my keys. I can\'t find them!"',
                        options: ['lost', 'have lost', 'lose', 'am losing'],
                        correctIdx: 1
                    },
                    {
                        question: '"____ you see him yesterday?"',
                        options: ['Have', 'Has', 'Did', 'Were'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which word usually marks the Simple Past?',
                        options: ['Ever', 'Already', 'Last week', 'Recently'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which word usually marks the Present Perfect?',
                        options: ['In 2010', 'Yesterday', 'Since', 'Two days ago'],
                        correctIdx: 2
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Tense Contrast',
                instruction: 'Type the correct form of the verb in parentheses (Simple Past or Present Perfect)',
                sentences: [
                    { text: 'I ___ (live) here since 2015.', answer: 'have lived' },
                    { text: 'We ___ (move) to this city in 2015.', answer: 'moved' },
                    { text: '___ you (see) the news yesterday? (see)', answer: 'Did see' },
                    { text: '___ you (see) my keys? I can\'t find them. (see)', answer: 'Have seen' },
                    { text: 'He ___ (already / eat) dinner.', answer: 'has already eaten' },
                    { text: 'He ___ (eat) dinner at 7 PM.', answer: 'ate' },
                    { text: 'She ___ (never / be) to Spain.', answer: 'has never been' },
                    { text: 'She ___ (go) to Spain last summer.', answer: 'went' },
                    { text: 'I ___ (just / finish) my homework.', answer: 'have just finished' },
                    { text: 'I ___ (finish) my homework an hour ago.', answer: 'finished' },
                    { text: 'They ___ (not / call) us yet.', answer: 'have not called' },
                    { text: 'They ___ (not / call) us yesterday.', answer: 'did not call' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Past vs Perfect',
                instruction: 'Build correct sentences in the right tense',
                sentences: [
                    { text: 'I HAVE SEEN THAT MOVIE BEFORE', translation: 'He visto esa película antes', distractors: ['SAW', 'WAS'] },
                    { text: 'I SAW THAT MOVIE YESTERDAY', translation: 'Vi esa película ayer', distractors: ['HAVE', 'SEEN'] },
                    { text: 'SHE HAS NOT CALLED ME YET', translation: 'Ella no me ha llamado todavía', distractors: ['DID', 'CALL'] },
                    { text: 'SHE DID NOT CALL ME LAST NIGHT', translation: 'Ella no me llamó anoche', distractors: ['HAS', 'CALLED'] },
                    { text: 'HAVE YOU EVER EATEN SUSHI', translation: '¿Has comido sushi alguna vez?', distractors: ['DID', 'ATE'] },
                    { text: 'DID YOU EAT SUSHI FOR LUNCH', translation: '¿Comiste sushi en el almuerzo?', distractors: ['HAVE', 'EATEN'] },
                    { text: 'THEY HAVE RECENTLY MOVED HOUSE', translation: 'Ellos se han mudado de casa recientemente', distractors: ['DID', 'MOVE'] },
                    { text: 'THEY MOVED HOUSE LAST MONTH', translation: 'Ellos se mudaron de casa el mes pasado', distractors: ['HAVE', 'MOVED'] },
                    { text: 'WE HAVE LIVED HERE FOR A YEAR', translation: 'Vivimos aquí desde hace un año', distractors: ['DID', 'LIVE'] },
                    { text: 'WE LIVED THERE IN TWO THOUSAND TEN', translation: 'Vivimos allí en el 2010', distractors: ['HAVE', 'LIVED'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Tense Identifiers',
                instruction: 'Match the time expression with the correct tense!',
                pairs: [
                    { emoji: 'Last week', word: 'Simple Past' },
                    { emoji: 'Since 2020', word: 'Present Perfect' },
                    { emoji: 'Yesterday', word: 'Simple Past' },
                    { emoji: 'Just', word: 'Present Perfect' },
                    { emoji: 'Two days ago', word: 'Simple Past' },
                    { emoji: 'Never', word: 'Present Perfect' },
                    { emoji: 'In 1995', word: 'Simple Past' },
                    { emoji: 'Yet', word: 'Present Perfect' },
                    { emoji: 'When I was a child', word: 'Simple Past' },
                    { emoji: 'Ever', word: 'Present Perfect' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Past or Perfect? ☠️',
                instruction: 'Guess the grammar term!',
                words: [
                    { word: 'EXPERIENCE', hint: 'Present Perfect talks about life ___' },
                    { word: 'SPECIFIC', hint: 'Simple Past talks about a ___ time' },
                    { word: 'UNSPECIFIED', hint: 'Present Perfect is for an ___ time' },
                    { word: 'PARTICIPLE', hint: 'The form used with "have/has"' },
                    { word: 'AUXILIARY', hint: 'Have, has, and did are ___' },
                    { word: 'FINISHED', hint: 'Simple Past is for ___ actions' },
                    { word: 'DURATION', hint: 'Present Perfect can show ___' },
                    { word: 'YESTERDAY', hint: 'Classic Simple Past marker' },
                    { word: 'ALREADY', hint: 'Common Present Perfect marker' },
                    { word: 'AIPORT', hint: 'Wait — this is not grammar... Let\'s use RECENTLY' },
                    { word: 'RECENTLY', hint: 'An action that happened not long ago' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A1', 24]);
        console.log('✅ Successfully updated A1 Topic 24 — Present Perfect vs. Past');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
