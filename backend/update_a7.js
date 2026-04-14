require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [

            // ── GAME 1: Fill Blanks – 12 sentences ───────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Wh- Question Words',
                instruction: 'Type the correct Wh- word to complete each question (What / Where / When / Who / Why / How)',
                sentences: [
                    { text: '____ is your name?',                          answer: 'What'  },
                    { text: '____ are you from?',                          answer: 'Where' },
                    { text: '____ is your birthday?',                      answer: 'When'  },
                    { text: '____ is that person? — My teacher.',          answer: 'Who'   },
                    { text: '____ are you late? — Because of traffic.',    answer: 'Why'   },
                    { text: '____ are you? — I am fine, thanks.',          answer: 'How'   },
                    { text: '____ time is it?',                            answer: 'What'  },
                    { text: '____ do you live?',                           answer: 'Where' },
                    { text: '____ does the class start?',                  answer: 'When'  },
                    { text: '____ old are you?',                           answer: 'How'   },
                    { text: '____ is your favorite color?',                answer: 'What'  },
                    { text: '____ called you? — My mom.',                  answer: 'Who'   },
                ]
            },

            // ── GAME 2: Multiple Choice – 12 questions ────────────────────
            {
                type: 'multiple_choice',
                title: '🎯 Multiple Choice: Correct Wh- Word',
                instruction: 'Choose the best Wh- question word for each sentence',
                questions: [
                    { q: '_____ is the capital of France?',                options: ['Who', 'Where', 'What', 'Why'],    a: 'What'  },
                    { q: '_____ does she live? — In New York.',            options: ['When', 'Where', 'Who', 'What'],   a: 'Where' },
                    { q: '_____ is your English class? — On Mondays.',     options: ['Why', 'How', 'Where', 'When'],    a: 'When'  },
                    { q: '_____ is at the door? — My friend.',             options: ['What', 'Where', 'Who', 'How'],    a: 'Who'   },
                    { q: '_____ are you crying? — Because I am sad.',      options: ['What', 'When', 'Who', 'Why'],     a: 'Why'   },
                    { q: '_____ do you go to school? — By bus.',           options: ['Who', 'When', 'How', 'Where'],    a: 'How'   },
                    { q: '_____ many brothers do you have?',               options: ['What', 'How', 'Why', 'When'],     a: 'How'   },
                    { q: '_____ is your phone number?',                    options: ['Where', 'Who', 'Why', 'What'],    a: 'What'  },
                    { q: '_____ does the movie finish?',                   options: ['Who', 'Where', 'Why', 'When'],    a: 'When'  },
                    { q: '_____ is your teacher? — Mrs. García.',          options: ['What', 'Why', 'Who', 'How'],      a: 'Who'   },
                    { q: '_____ do you spell that?',                       options: ['Where', 'How', 'When', 'Who'],    a: 'How'   },
                    { q: '_____ is your favorite subject?',                options: ['Where', 'When', 'Why', 'What'],   a: 'What'  },
                ]
            },

            // ── GAME 3: Matching – 10 pairs ───────────────────────────────
            {
                type: 'matching',
                title: '🔗 Matching: Questions & Answers',
                instruction: 'Match each Wh- question on the left to its correct answer on the right',
                questions: [
                    { q: 'What is your name?',          a: 'My name is Carlos.'           },
                    { q: 'Where are you from?',         a: 'I am from Colombia.'          },
                    { q: 'When is your birthday?',      a: 'It is in March.'              },
                    { q: 'Who is your best friend?',    a: 'Her name is Sofia.'           },
                    { q: 'Why are you tired?',          a: 'Because I worked all day.'    },
                    { q: 'How are you?',                a: 'I am great, thank you!'       },
                    { q: 'How old are you?',            a: 'I am twenty years old.'       },
                    { q: 'What time is it?',            a: 'It is three o\'clock.'        },
                    { q: 'Where do you live?',          a: 'I live in Bogotá.'            },
                    { q: 'How do you go to work?',      a: 'I go by bus.'                 },
                ]
            },

            // ── GAME 4: Unscramble – 10 sentences ────────────────────────
            {
                type: 'unscramble',
                title: '🔀 Unscramble: Wh- Questions',
                instruction: 'Rearrange the scrambled words to form a correct Wh- question',
                questions: [
                    { q: 'your name is what',               a: 'what is your name'                },
                    { q: 'are where you from',              a: 'where are you from'               },
                    { q: 'birthday when your is',           a: 'when is your birthday'            },
                    { q: 'your teacher who is',             a: 'who is your teacher'              },
                    { q: 'favorite what color your is',     a: 'what is your favorite color'      },
                    { q: 'how to school do you go',         a: 'how do you go to school'          },
                    { q: 'late are why you',                a: 'why are you late'                 },
                    { q: 'old how are you',                 a: 'how old are you'                  },
                    { q: 'do where you live',               a: 'where do you live'                },
                    { q: 'is what time it',                 a: 'what time is it'                  },
                ]
            },

            // ── GAME 5: Trivia – 10 questions ─────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Wh- Questions Knowledge',
                instruction: 'Answer each trivia question about Wh- question words',
                questions: [
                    {
                        question: 'How many basic Wh- question words are there in English?',
                        options: ['4', '5', '6', '7'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which word do you use to ask about a PLACE?',
                        options: ['When', 'Why', 'Where', 'Who'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which word do you use to ask about a TIME?',
                        options: ['What', 'When', 'Who', 'How'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which word do you use to ask about a PERSON?',
                        options: ['What', 'Why', 'Where', 'Who'],
                        correctIdx: 3
                    },
                    {
                        question: 'Which word do you use to ask about a REASON?',
                        options: ['When', 'Where', 'Who', 'Why'],
                        correctIdx: 3
                    },
                    {
                        question: '"___ many students are in the class?" — Which Wh- word fits?',
                        options: ['What', 'How', 'Why', 'Where'],
                        correctIdx: 1
                    },
                    {
                        question: '"___ do you spell \'beautiful\'?" — Which word?',
                        options: ['What', 'Where', 'How', 'Who'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which question is CORRECT?',
                        options: [
                            'Where is your name?',
                            'What is your name?',
                            'Who is your name?',
                            'When is your name?'
                        ],
                        correctIdx: 1
                    },
                    {
                        question: '"___ is the weather like?" — Which Wh- word?',
                        options: ['Who', 'Where', 'When', 'What'],
                        correctIdx: 3
                    },
                    {
                        question: 'What does "Wh-" stand for in grammar?',
                        options: [
                            'Words used for commands',
                            'Words used to ask questions',
                            'Words used as adjectives',
                            'Words used as verbs'
                        ],
                        correctIdx: 1
                    },
                ]
            },
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query(
            'UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3',
            [strData, 'A1', 7]
        );
        console.log('✅ Successfully updated A1 Topic 7 — Wh- Questions');
        console.log('   → Game 1 (fill_blanks_game): 12 sentences');
        console.log('   → Game 2 (multiple_choice):  12 questions');
        console.log('   → Game 3 (matching):         10 pairs');
        console.log('   → Game 4 (unscramble):       10 sentences');
        console.log('   → Game 5 (trivia_game):      10 questions');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
