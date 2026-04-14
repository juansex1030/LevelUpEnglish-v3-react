require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [

            // ── GAME 1: Trivia – 10 questions ─────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Possessives in English',
                instruction: 'Test your knowledge of possessive adjectives and pronouns!',
                questions: [
                    {
                        question: 'Which possessive adjective goes with "I"?',
                        options: ['mine', 'my', 'me', 'I\'s'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which possessive goes with the pronoun "she"?',
                        options: ['his', 'its', 'her', 'their'],
                        correctIdx: 2
                    },
                    {
                        question: '"The cat hurt ___ paw." — Which possessive is correct?',
                        options: ['it\'s', 'its', 'his', 'their'],
                        correctIdx: 1
                    },
                    {
                        question: 'How many possessive adjectives does English have?',
                        options: ['5', '6', '7', '8'],
                        correctIdx: 2
                    },
                    {
                        question: '"___ is the book?" — What is the possessive for "we"?',
                        options: ['Us', 'Ours', 'Our', 'We\'s'],
                        correctIdx: 2
                    },
                    {
                        question: 'What is the difference between "its" and "it\'s"?',
                        options: [
                            'They are the same',
                            '"its" is possessive; "it\'s" means "it is"',
                            '"it\'s" is possessive; "its" means "it is"',
                            'Both are contractions'
                        ],
                        correctIdx: 1
                    },
                    {
                        question: '"Maria\'s book" — What does the apostrophe + s (\'s) indicate?',
                        options: ['A plural noun', 'A contraction', 'Possession', 'A verb tense'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which sentence is CORRECT?',
                        options: [
                            'This is my mothers car.',
                            'This is my mother\'s car.',
                            'This is my mothers\' car.',
                            'This is mothers my car.'
                        ],
                        correctIdx: 1
                    },
                    {
                        question: '"These are ___ keys." (the keys belong to them)',
                        options: ['his', 'our', 'their', 'her'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which is a possessive PRONOUN (not adjective)?',
                        options: ['my', 'your', 'his', 'mine'],
                        correctIdx: 3
                    },
                ]
            },

            // ── GAME 2: Fill Blanks – 12 sentences ────────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Possessive Adjectives',
                instruction: 'Type the correct possessive adjective (my / your / his / her / its / our / their)',
                sentences: [
                    { text: '___ name is Ana. (I)',                        answer: 'My'    },
                    { text: 'What is ___ phone number? (you)',             answer: 'your'  },
                    { text: 'Carlos loves ___ dog. (Carlos)',              answer: 'his'   },
                    { text: 'Sofia forgot ___ keys. (Sofia)',              answer: 'her'   },
                    { text: 'The dog wagged ___ tail.',                    answer: 'its'   },
                    { text: 'We love ___ country. (we)',                   answer: 'our'   },
                    { text: 'The students did ___ homework.',              answer: 'their' },
                    { text: 'I lost ___ wallet yesterday.',                answer: 'my'    },
                    { text: 'He drives ___ father\'s car.',               answer: 'his'   },
                    { text: 'She visits ___ grandmother every Sunday.',    answer: 'her'   },
                    { text: 'My family and I enjoy ___ vacations.',        answer: 'our'   },
                    { text: 'The team won ___ third game in a row.',       answer: 'their' },
                ]
            },

            // ── GAME 3: Matching – 10 pairs ───────────────────────────────
            {
                type: 'matching',
                title: '🔗 Matching: Pronouns & Possessives',
                instruction: 'Match each subject pronoun on the left to its possessive adjective on the right',
                questions: [
                    { q: 'I',       a: 'my'    },
                    { q: 'You',     a: 'your'  },
                    { q: 'He',      a: 'his'   },
                    { q: 'She',     a: 'her'   },
                    { q: 'It',      a: 'its'   },
                    { q: 'We',      a: 'our'   },
                    { q: 'They',    a: 'their' },
                    { q: 'mine',    a: 'possessive pronoun of I'   },
                    { q: 'yours',   a: 'possessive pronoun of You' },
                    { q: 'theirs',  a: 'possessive pronoun of They'},
                ]
            },

            // ── GAME 4: Unscramble – 10 sentences ─────────────────────────
            {
                type: 'unscramble',
                title: '🔀 Unscramble: Possessive Sentences',
                instruction: 'Rearrange the scrambled words to form a correct sentence with possessives',
                questions: [
                    { q: 'is name my Carlos',                  a: 'my name is Carlos'                     },
                    { q: 'your is bag this',                   a: 'this is your bag'                      },
                    { q: 'sister his very is smart',           a: 'his sister is very smart'               },
                    { q: 'dog her loves she',                  a: 'she loves her dog'                      },
                    { q: 'house our is big',                   a: 'our house is big'                      },
                    { q: 'their did students homework their',  a: 'their students did their homework'     },
                    { q: 'car father\'s drives he his',        a: 'he drives his father\'s car'            },
                    { q: 'is this book whose',                 a: 'whose book is this'                    },
                    { q: 'phone I my lost',                    a: 'I lost my phone'                       },
                    { q: 'birthday your is when',              a: 'when is your birthday'                 },
                ]
            },

            // ── GAME 5: Multiple Choice – 12 questions ────────────────────
            {
                type: 'multiple_choice',
                title: '🎯 Multiple Choice: Pick the Correct Possessive',
                instruction: 'Select the correct possessive adjective for each sentence',
                questions: [
                    { q: 'This is ___ book. (the book belongs to me)',           options: ['my', 'his', 'her', 'your'],     a: 'my'    },
                    { q: 'Is this ___ bag? (I\'m asking you)',                   options: ['my', 'his', 'your', 'our'],     a: 'your'  },
                    { q: 'Pedro lost ___ keys. (the keys belong to Pedro)',       options: ['her', 'their', 'my', 'his'],    a: 'his'   },
                    { q: 'Maria calls ___ mom every night.',                      options: ['his', 'their', 'her', 'its'],   a: 'her'   },
                    { q: 'The bird hurt ___ wing.',                               options: ['his', 'her', 'their', 'its'],   a: 'its'   },
                    { q: 'We painted ___ house last summer.',                     options: ['their', 'my', 'our', 'your'],   a: 'our'   },
                    { q: 'The kids left ___ toys on the floor.',                  options: ['its', 'our', 'her', 'their'],   a: 'their' },
                    { q: 'I always forget ___ umbrella.',                         options: ['your', 'her', 'my', 'their'],   a: 'my'    },
                    { q: '"That car is ___." (it belongs to me) — possessive pronoun', options: ['my', 'mine', 'I', 'me'], a: 'mine'  },
                    { q: 'This is Ana\'s pencil. It is ___.',                    options: ['hers', 'his', 'its', 'ours'],   a: 'hers'  },
                    { q: 'We forgot ___ tickets at home!',                       options: ['my', 'their', 'her', 'our'],    a: 'our'   },
                    { q: '"Those seats are ___." (they belong to them)',         options: ['their', 'theirs', 'them', 'they'], a: 'theirs' },
                ]
            },
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query(
            'UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3',
            [strData, 'A1', 9]
        );
        console.log('✅ Successfully updated A1 Topic 9 — Possessives');
        console.log('   → Game 1 (trivia_game):      10 questions');
        console.log('   → Game 2 (fill_blanks_game): 12 sentences');
        console.log('   → Game 3 (matching):         10 pairs');
        console.log('   → Game 4 (unscramble):       10 sentences');
        console.log('   → Game 5 (multiple_choice):  12 questions');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
