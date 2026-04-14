require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [

            // ── GAME 1: Hangman – 10 words ────────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Time Vocabulary',
                instruction: 'Guess the letters to find words related to telling time in English!',
                words: [
                    { word: 'MIDNIGHT',   hint: '12:00 at night — the middle of the ___' },
                    { word: 'QUARTER',    hint: '15 minutes — "___ past" or "___ to"' },
                    { word: 'AFTERNOON',  hint: 'The time between noon and evening' },
                    { word: 'MORNING',    hint: 'The time before noon — Good ___!' },
                    { word: 'EVENING',    hint: 'The time between 6 PM and midnight' },
                    { word: 'NOON',       hint: 'Exactly 12:00 PM — the middle of the day' },
                    { word: 'CLOCK',      hint: 'A device that shows the time on a wall ⏰' },
                    { word: 'MINUTE',     hint: '60 seconds — there are 60 ___ in an hour' },
                    { word: 'SCHEDULE',   hint: 'A plan that shows times for activities' },
                    { word: 'ALARM',      hint: 'You set this to wake up in the morning ⏰' },
                ]
            },

            // ── GAME 2: Sentence Builder – 10 sentences ───────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Telling the Time',
                instruction: 'Arrange the words to form a correct sentence about time',
                sentences: [
                    {
                        text: 'It is three o\'clock.',
                        translation: 'Son las tres en punto. (3:00)',
                        distractors: ['was', 'are']
                    },
                    {
                        text: 'What time is it?',
                        translation: '¿Qué hora es?',
                        distractors: ['was', 'are']
                    },
                    {
                        text: 'It is half past four.',
                        translation: 'Son las cuatro y media. (4:30)',
                        distractors: ['to', 'before']
                    },
                    {
                        text: 'The class starts at quarter past nine.',
                        translation: 'La clase empieza a las nueve y cuarto. (9:15)',
                        distractors: ['to', 'before']
                    },
                    {
                        text: 'I go to bed at eleven o\'clock.',
                        translation: 'Me acuesto a las once en punto.',
                        distractors: ['in', 'on']
                    },
                    {
                        text: 'It is a quarter to eight.',
                        translation: 'Son las ocho menos cuarto. (7:45)',
                        distractors: ['past', 'after']
                    },
                    {
                        text: 'The store opens at nine in the morning.',
                        translation: 'La tienda abre a las nueve de la mañana.',
                        distractors: ['on', 'at night']
                    },
                    {
                        text: 'It is noon.',
                        translation: 'Es mediodía. (12:00 PM)',
                        distractors: ['midnight', 'evening']
                    },
                    {
                        text: 'I have lunch at one thirty.',
                        translation: 'Almuerzo a la una y treinta. (1:30)',
                        distractors: ['in', 'on']
                    },
                    {
                        text: 'The movie starts in ten minutes.',
                        translation: 'La película empieza en diez minutos.',
                        distractors: ['seconds', 'hours']
                    },
                ]
            },

            // ── GAME 3: Multiple Choice – 12 questions ────────────────────
            {
                type: 'multiple_choice',
                title: '🎯 Multiple Choice: Reading the Clock',
                instruction: 'Choose the correct way to say each time in English',
                questions: [
                    { q: 'How do you say 3:00?',   options: ['It is three past.',    'It is three o\'clock.',  'It is at three.',       'It is three clock.'],      a: 'It is three o\'clock.'  },
                    { q: 'How do you say 6:30?',   options: ['It is six and half.',  'It is half to six.',     'It is half past six.',  'It is six past half.'],    a: 'It is half past six.'   },
                    { q: 'How do you say 9:15?',   options: ['It is nine quarter.',  'It is quarter past nine.','It is nine past quarter.','It is nine and fifteen.'], a: 'It is quarter past nine.'},
                    { q: 'How do you say 4:45?',   options: ['It is quarter to five.','It is four forty-five past.','It is a quarter past five.','It is four quarter.'], a: 'It is quarter to five.' },
                    { q: 'How do you ask for the time?', options: ['How is the time?', 'What is the time?', 'What time is it?', 'Which is the time?'], a: 'What time is it?' },
                    { q: '12:00 PM is called:',   options: ['midnight', 'noon', 'evening', 'morning'],   a: 'noon'      },
                    { q: '12:00 AM is called:',   options: ['noon', 'afternoon', 'midnight', 'dusk'],    a: 'midnight'  },
                    { q: 'How do you say 2:10?',  options: ['It is two o\'clock ten.', 'It is ten past two.', 'It is two past ten.', 'It is ten to two.'], a: 'It is ten past two.' },
                    { q: 'How do you say 5:50?',  options: ['It is five fifty.', 'It is ten to six.', 'It is ten past five.', 'Both A and B are correct.'], a: 'Both A and B are correct.' },
                    { q: 'AM stands for:',        options: ['After Midnight', 'Ante Meridiem (before noon)', 'After Morning', 'Always Morning'],  a: 'Ante Meridiem (before noon)' },
                    { q: '"O\'clock" is used when:',  options: ['It is any time', 'The minutes are 30', 'The minutes are exactly 00', 'It is past noon'], a: 'The minutes are exactly 00' },
                    { q: 'How do you say 8:20?',  options: ['It is twenty past eight.', 'It is eight twenty past.', 'It is twenty to eight.', 'It is eight and twenty.'], a: 'It is twenty past eight.' },
                ]
            },

            // ── GAME 4: Fill In – 12 questions ────────────────────────────
            {
                type: 'fill_in',
                title: '✏️ Fill In: Time Expressions',
                instruction: 'Complete each time expression with the correct word',
                questions: [
                    { q: '12:00 PM is called ___ (middle of the day).',          a: 'noon'       },
                    { q: '3:30 = half ___ three.',                               a: 'past'       },
                    { q: '2:45 = a quarter ___ three.',                          a: 'to'         },
                    { q: '6:15 = a quarter ___ six.',                            a: 'past'       },
                    { q: '60 minutes = 1 ___.',                                  a: 'hour'       },
                    { q: '24 hours = 1 ___.',                                    a: 'day'        },
                    { q: 'We use ___ for times after midnight and before noon.',  a: 'AM'         },
                    { q: 'We use ___ for times after noon and before midnight.',  a: 'PM'         },
                    { q: 'Good ___ is said between noon and 6 PM.',              a: 'afternoon'  },
                    { q: 'Good ___ is said before noon.',                        a: 'morning'    },
                    { q: '7:00 is said as "seven ___".',                         a: 'o\'clock'   },
                    { q: '30 minutes = half an ___.',                            a: 'hour'       },
                ]
            },

            // ── GAME 5: Memory Game – 12 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Times & Expressions',
                instruction: 'Match each time expression to its correct digital clock reading!',
                pairs: [
                    { emoji: 'half past three',       word: '3:30'       },
                    { emoji: 'quarter past seven',    word: '7:15'       },
                    { emoji: 'quarter to two',        word: '1:45'       },
                    { emoji: 'midnight',              word: '12:00 AM'   },
                    { emoji: 'noon',                  word: '12:00 PM'   },
                    { emoji: 'five o\'clock',         word: '5:00'       },
                    { emoji: 'ten past four',         word: '4:10'       },
                    { emoji: 'twenty to six',         word: '5:40'       },
                    { emoji: 'five to nine',          word: '8:55'       },
                    { emoji: 'half past eight',       word: '8:30'       },
                    { emoji: 'quarter past eleven',   word: '11:15'      },
                    { emoji: 'twenty past one',       word: '1:20'       },
                ]
            },
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query(
            'UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3',
            [strData, 'A1', 10]
        );
        console.log('✅ Successfully updated A1 Topic 10 — What Time Is It?');
        console.log('   → Game 1 (hangman_game):     10 words');
        console.log('   → Game 2 (sentence_builder): 10 sentences');
        console.log('   → Game 3 (multiple_choice):  12 questions');
        console.log('   → Game 4 (fill_in):          12 questions');
        console.log('   → Game 5 (memory_game):      12 pairs');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
