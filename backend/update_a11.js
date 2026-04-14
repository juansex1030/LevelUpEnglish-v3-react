require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [

            // ── GAME 1: Trivia – 10 questions ─────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Prepositions of Time',
                instruction: 'Test your knowledge of at, on, in and other time prepositions!',
                questions: [
                    {
                        question: 'Which preposition do we use with DAYS? (e.g., Monday, Friday)',
                        options: ['at', 'in', 'on', 'by'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which preposition do we use with MONTHS and YEARS? (e.g., March, 2024)',
                        options: ['at', 'in', 'on', 'during'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which preposition do we use with EXACT TIMES? (e.g., 3 PM, noon)',
                        options: ['in', 'on', 'at', 'for'],
                        correctIdx: 2
                    },
                    {
                        question: '"___ the morning / afternoon / evening" — Which preposition?',
                        options: ['at', 'on', 'by', 'in'],
                        correctIdx: 3
                    },
                    {
                        question: 'Which preposition is used with "noon" and "midnight"?',
                        options: ['in', 'on', 'at', 'since'],
                        correctIdx: 2
                    },
                    {
                        question: '"She has lived here ___ 2010." — She started in 2010 and still lives here.',
                        options: ['for', 'until', 'since', 'by'],
                        correctIdx: 2
                    },
                    {
                        question: '"I studied ___ three hours." — How long did the action last?',
                        options: ['since', 'for', 'until', 'during'],
                        correctIdx: 1
                    },
                    {
                        question: '"Please finish this ___ Friday." — No later than Friday.',
                        options: ['since', 'during', 'on', 'by'],
                        correctIdx: 3
                    },
                    {
                        question: '"I fell asleep ___ the movie." — Throughout the movie.',
                        options: ['for', 'until', 'during', 'since'],
                        correctIdx: 2
                    },
                    {
                        question: '"The store is open ___ 9 AM ___ 9 PM." — From start to end.',
                        options: ['during / after', 'from / to', 'at / in', 'on / by'],
                        correctIdx: 1
                    },
                ]
            },

            // ── GAME 2: Fill Blanks – 12 sentences ────────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: at / on / in',
                instruction: 'Type the correct preposition of time: at, on, or in',
                sentences: [
                    { text: 'I wake up ___ 7 AM every day.',                     answer: 'at'  },
                    { text: 'She was born ___ July.',                             answer: 'in'  },
                    { text: 'The concert is ___ Monday night.',                   answer: 'on'  },
                    { text: 'We have a meeting ___ noon.',                        answer: 'at'  },
                    { text: 'He came home late ___ the evening.',                 answer: 'in'  },
                    { text: 'They lived in Paris ___ 2010.',                      answer: 'in'  },
                    { text: 'I always go to church ___ Sundays.',                 answer: 'on'  },
                    { text: 'She graduated ___ 2022.',                            answer: 'in'  },
                    { text: 'The store opens ___ 9 in the morning.',              answer: 'at'  },
                    { text: 'We met ___ the afternoon.',                          answer: 'in'  },
                    { text: 'My birthday is ___ March 15th.',                     answer: 'on'  },
                    { text: 'The flight arrives ___ midnight.',                   answer: 'at'  },
                ]
            },

            // ── GAME 3: Matching – 10 pairs ───────────────────────────────
            {
                type: 'matching',
                title: '🔗 Matching: Prepositions & Their Uses',
                instruction: 'Match each preposition on the left to the correct explanation on the right',
                questions: [
                    { q: 'at',     a: 'Exact times (at 3 PM, at noon)'         },
                    { q: 'on',     a: 'Days and dates (on Monday, on July 4th)' },
                    { q: 'in',     a: 'Months, years, seasons (in winter)'      },
                    { q: 'before', a: 'Earlier than / prior to an event'        },
                    { q: 'after',  a: 'Later than / following an event'         },
                    { q: 'by',     a: 'No later than (finish by Friday)'        },
                    { q: 'until',  a: 'Up to a specific point in time'          },
                    { q: 'since',  a: 'From a past time continuing to now'      },
                    { q: 'during', a: 'Throughout a period (during the movie)'  },
                    { q: 'for',    a: 'A duration of time (for 3 hours)'        },
                ]
            },

            // ── GAME 4: Crossword ─────────────────────────────────────────
            // Grid (9 rows × 7 cols):
            //      0    1    2    3    4    5    6
            // 0               [ B ]
            // 1  [ A ][ F ][ T ][ E ][ R ]
            // 2               [ F ]
            // 3               [ O ]
            // 4       [ D ][ U ][ R ][ I ][ N ][ G ]
            // 5  [ N ][ I ][ N ][ E ]
            // 6               [ T ]
            // 7               [ I ]
            // 8               [ L ]
            //
            // 1. BEFORE down  (0,3): shares E(1,3) w/ AFTER, R(4,3) w/ DURING, E(5,3) w/ NINE
            // 2. AFTER  across(1,0): shares E(1,3) w/ BEFORE
            // 3. DURING across(4,1): shares R(4,3) w/ BEFORE, U(4,2) w/ UNTIL
            // 4. UNTIL  down  (4,2): shares U(4,2) w/ DURING, N(5,2) w/ NINE
            // 5. NINE   across(5,0): shares N(5,2) w/ UNTIL, E(5,3) w/ BEFORE
            {
                type: 'crossword_game',
                title: '📝 Crossword: Prepositions of Time',
                instruction: 'Click a cell and type letters using your keyboard. Use the clues below!',
                gridSize: { rows: 9, cols: 7 },
                words: [
                    { word: 'BEFORE', hint: 'Earlier than — "Call me ___ you leave"',         row: 0, col: 3, dir: 'down',   num: 1 },
                    { word: 'AFTER',  hint: 'Later than — "We eat ___ class"',                 row: 1, col: 0, dir: 'across', num: 2 },
                    { word: 'DURING', hint: 'Throughout a period — "___ the lesson"',          row: 4, col: 1, dir: 'across', num: 3 },
                    { word: 'UNTIL',  hint: 'Up to a point — "I waited ___ midnight"',         row: 4, col: 2, dir: 'down',   num: 4 },
                    { word: 'NINE',   hint: 'The number 9 — "The store opens at ___ AM"',      row: 5, col: 0, dir: 'across', num: 5 },
                ]
            },

            // ── GAME 5: Unscramble – 10 sentences ─────────────────────────
            {
                type: 'unscramble',
                title: '🔀 Unscramble: Time Preposition Sentences',
                instruction: 'Rearrange the scrambled words to form a correct sentence',
                questions: [
                    { q: 'morning I in wake up the',                a: 'I wake up in the morning'                },
                    { q: 'she plays tennis on Monday',              a: 'she plays tennis on Monday'              },
                    { q: 'was born she in March',                   a: 'she was born in March'                   },
                    { q: 'class at starts nine the',                a: 'the class starts at nine'                },
                    { q: 'finish by please this Friday',            a: 'please finish this by Friday'            },
                    { q: 'movie slept during he the',               a: 'he slept during the movie'               },
                    { q: 'here since 2019 lived she has',           a: 'she has lived here since 2019'           },
                    { q: 'three hours for studied I',               a: 'I studied for three hours'               },
                    { q: 'before go bed I read',                    a: 'I read before I go to bed'              },
                    { q: 'midnight sleep after they never',         a: 'they never sleep after midnight'         },
                ]
            },
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query(
            'UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3',
            [strData, 'A1', 11]
        );
        console.log('✅ Successfully updated A1 Topic 11 — Prepositions of Time');
        console.log('   → Game 1 (trivia_game):      10 questions');
        console.log('   → Game 2 (fill_blanks_game): 12 sentences');
        console.log('   → Game 3 (matching):         10 pairs');
        console.log('   → Game 4 (crossword_game):   5 words');
        console.log('   → Game 5 (unscramble):       10 sentences');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
