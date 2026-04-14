require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [

            // ── GAME 1: Trivia – 10 questions ─────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Adverbs of Frequency',
                instruction: 'Test your knowledge about adverbs of frequency!',
                questions: [
                    {
                        question: 'Which adverb means 100% of the time?',
                        options: ['often', 'always', 'usually', 'sometimes'],
                        correctIdx: 1
                    },
                    {
                        question: 'Where do we USUALLY place the adverb of frequency?',
                        options: [
                            'At the end of the sentence',
                            'Before the main verb',
                            'After the main verb',
                            'At the beginning'
                        ],
                        correctIdx: 1
                    },
                    {
                        question: 'With the verb "To Be", where does the adverb go?',
                        options: [
                            'Before "To Be"',
                            'After "To Be"',
                            'At the end',
                            'It doesn\'t matter'
                        ],
                        correctIdx: 1
                    },
                    {
                        question: 'Which adverb means 0% of the time?',
                        options: ['rarely', 'sometimes', 'never', 'often'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which sentence is CORRECT?',
                        options: [
                            'I always am happy.',
                            'I am always happy.',
                            'Always I am happy.',
                            'I am happy always.'
                        ],
                        correctIdx: 1
                    },
                    {
                        question: 'Which sentence is CORRECT?',
                        options: [
                            'He plays often football.',
                            'He often plays football.',
                            'Often he plays football.',
                            'He plays football often.'
                        ],
                        correctIdx: 1
                    },
                    {
                        question: 'Which adverb represents about 50% of the time?',
                        options: ['always', 'usually', 'sometimes', 'rarely'],
                        correctIdx: 2
                    },
                    {
                        question: 'What question word do we use to ask about frequency?',
                        options: ['How much', 'How long', 'How often', 'How many'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which adverb is similar to "almost never"?',
                        options: ['often', 'usually', 'rarely', 'sometimes'],
                        correctIdx: 2
                    },
                    {
                        question: '"She never ___ coffee." Which is correct?',
                        options: ['drinks', 'drink', 'drinking', 'is drink'],
                        correctIdx: 0
                    },
                ]
            },

            // ── GAME 2: Fill Blanks – 12 sentences ────────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Frequency Adverbs',
                instruction: 'Complete the sentence with the correct adverb (always, usually, often, sometimes, rarely, never)',
                sentences: [
                    { text: 'I ___ brush my teeth every single morning. (100%)',   answer: 'always'    },
                    { text: 'They ___ go to the gym, but not every day. (80%)',     answer: 'usually'   },
                    { text: 'He ___ eats fast food, maybe once a month. (10%)',     answer: 'rarely'    },
                    { text: 'We ___ play video games on weekends. (70%)',           answer: 'often'     },
                    { text: 'I ___ eat breakfast; I hate eating in the morning. (0%)', answer: 'never'     },
                    { text: 'She ___ reads a book before bed, about half the time. (50%)', answer: 'sometimes'},
                    { text: 'The sun ___ rises in the east. (100%)',                 answer: 'always'    },
                    { text: 'I ___ watch horror movies because they scare me. (0%)',  answer: 'never'     },
                    { text: 'He is ___ late for work; he is very punctual. (10%)',    answer: 'rarely'    },
                    { text: 'We ___ have pizza on Fridays, it is our routine. (80%)', answer: 'usually'   },
                    { text: 'I ___ forget my keys. (50%)',                           answer: 'sometimes' },
                    { text: 'They ___ travel in summer. (70%)',                      answer: 'often'     },
                ]
            },

            // ── GAME 3: Unscramble – 10 sentences ─────────────────────────
            {
                type: 'unscramble',
                title: '🔀 Unscramble: Word Order',
                instruction: 'Rearrange the scrambled words to form a correct sentence with an adverb of frequency',
                questions: [
                    { q: 'I early always wake up',              a: 'I always wake up early'                },
                    { q: 'is late she never',                   a: 'she is never late'                     },
                    { q: 'they play often football',            a: 'they often play football'              },
                    { q: 'usually eat we dinner at seven',      a: 'we usually eat dinner at seven'        },
                    { q: 'sometimes I go to the park',          a: 'I sometimes go to the park'            },
                    { q: 'he rarely watches TV',                a: 'he rarely watches TV'                  },
                    { q: 'always is the sun hot',               a: 'the sun is always hot'                 },
                    { q: 'you how often do study',              a: 'how often do you study'                },
                    { q: 'never eats he fast food',             a: 'he never eats fast food'               },
                    { q: 'we often travel in summer',           a: 'we often travel in summer'             },
                ]
            },

            // ── GAME 4: Matching – 10 pairs ───────────────────────────────
            {
                type: 'matching',
                title: '🔗 Matching: Percentages & Meaning',
                instruction: 'Match the adverb to its corresponding percentage of time or frequency expression',
                questions: [
                    { q: '100%',                a: 'Always' },
                    { q: '80%',                 a: 'Usually' },
                    { q: '70%',                 a: 'Often' },
                    { q: '50%',                 a: 'Sometimes' },
                    { q: '10%',                 a: 'Rarely / Seldom' },
                    { q: '0%',                  a: 'Never' },
                    { q: 'Every day',           a: 'Daily' },
                    { q: 'Every week',          a: 'Weekly' },
                    { q: 'Two times',           a: 'Twice' },
                    { q: 'One time',            a: 'Once' },
                ]
            },

            // ── GAME 5: Sentence Builder – 10 sentences ───────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Adverbs',
                instruction: 'Arrange the blocks to form sentences using adverbs of frequency correctly',
                sentences: [
                    {
                        text: 'She is always happy.',
                        translation: 'Ella siempre está feliz.',
                        distractors: ['always is']
                    },
                    {
                        text: 'I usually drink coffee.',
                        translation: 'Usualmente tomo café.',
                        distractors: ['drink usually']
                    },
                    {
                        text: 'He never eats meat.',
                        translation: 'Él nunca come carne.',
                        distractors: ['not', 'eats never']
                    },
                    {
                        text: 'We often go to the cinema.',
                        translation: 'A menudo vamos al cine.',
                        distractors: ['go often']
                    },
                    {
                        text: 'They are rarely late.',
                        translation: 'Ellos rara vez llegan tarde.',
                        distractors: ['rarely are']
                    },
                    {
                        text: 'I sometimes forget my phone.',
                        translation: 'A veces olvido mi teléfono.',
                        distractors: ['forgets', 'forget sometimes']
                    },
                    {
                        text: 'How often do you exercise?',
                        translation: '¿Con qué frecuencia haces ejercicio?',
                        distractors: ['Does', 'often how']
                    },
                    {
                        text: 'He always wakes up early.',
                        translation: 'Él siempre se despierta temprano.',
                        distractors: ['wake always']
                    },
                    {
                        text: 'It is usually cold in winter.',
                        translation: 'Usualmente hace frío en invierno.',
                        distractors: ['usually is']
                    },
                    {
                        text: 'I never smoke.',
                        translation: 'Nunca fumo.',
                        distractors: ['not']
                    },
                ]
            },
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query(
            'UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3',
            [strData, 'A1', 13]
        );
        console.log('✅ Successfully updated A1 Topic 13 — Adverbs of Frequency');
        console.log('   → Game 1 (trivia_game):      10 questions');
        console.log('   → Game 2 (fill_blanks_game): 12 sentences');
        console.log('   → Game 3 (unscramble):       10 sentences');
        console.log('   → Game 4 (matching):         10 pairs');
        console.log('   → Game 5 (sentence_builder): 10 sentences');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
