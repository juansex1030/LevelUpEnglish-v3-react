require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [

            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Subject Pronouns',
                instruction: 'Test your knowledge of English subject pronouns. Choose the correct answer!',
                questions: [
                    {
                        question: 'Which pronoun replaces a male person\'s name (e.g., "Carlos")?',
                        options: ['She', 'He', 'It', 'They'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which pronoun do you use to talk about yourself?',
                        options: ['Me', 'My', 'I', 'Mine'],
                        correctIdx: 2
                    },
                    {
                        question: '"Maria is a doctor. ___ is very intelligent." — Which pronoun?',
                        options: ['He', 'It', 'They', 'She'],
                        correctIdx: 3
                    },
                    {
                        question: 'Which pronoun replaces "the dog" or "the car"?',
                        options: ['He', 'She', 'It', 'They'],
                        correctIdx: 2
                    },
                    {
                        question: '"Juan and I are friends." — Which pronoun replaces "Juan and I"?',
                        options: ['They', 'We', 'You', 'He'],
                        correctIdx: 1
                    },
                    {
                        question: '"The students are happy." — What replaces "the students"?',
                        options: ['We', 'He', 'They', 'It'],
                        correctIdx: 2
                    },
                    {
                        question: 'In English, which pronoun is ALWAYS capitalized?',
                        options: ['He', 'She', 'I', 'We'],
                        correctIdx: 2
                    },
                    {
                        question: 'How many subject pronouns does English have?',
                        options: ['5', '6', '7', '8'],
                        correctIdx: 2
                    },
                    {
                        question: '"You" in English can mean:',
                        options: [
                            'Only singular (tú)',
                            'Only plural (ustedes)',
                            'Both singular and plural',
                            'Only formal (usted)'
                        ],
                        correctIdx: 2
                    },
                    {
                        question: 'Which pronoun is used for animals and objects?',
                        options: ['He', 'She', 'They', 'It'],
                        correctIdx: 3
                    },
                ]
            },

            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Choose the Right Pronoun',
                instruction: 'Type the correct subject pronoun to complete each sentence',
                sentences: [
                    { text: '____ am a student.',                             answer: 'I'    },
                    { text: '____ are my best friend.',                       answer: 'You'  },
                    { text: 'Carlos is tall. ____ is from Mexico.',           answer: 'He'   },
                    { text: 'Ana is a teacher. ____ is very kind.',           answer: 'She'  },
                    { text: 'The cat is sleeping. ____ is very lazy.',        answer: 'It'   },
                    { text: 'My family and I are happy. ____ love music.',    answer: 'We'   },
                    { text: 'The boys are playing. ____ are very loud.',      answer: 'They' },
                    { text: 'My sister is a nurse. ____ works at night.',     answer: 'She'  },
                    { text: 'The phone is new. ____ is very expensive.',      answer: 'It'   },
                    { text: 'Tom and Sara are married. ____ have a daughter.',answer: 'They' },
                    { text: 'My brother and I study together. ____ are classmates.', answer: 'We' },
                    { text: 'My father is 50 years old. ____ is a doctor.',   answer: 'He'   },
                ]
            },

            // ── GAME 3: Matching – 10 pairs ──────────────────────────────
            {
                type: 'matching',
                title: '🔗 Matching: Pronouns & Translations',
                instruction: 'Match each English subject pronoun to its Spanish translation on the right',
                questions: [
                    { q: 'I',     a: 'Yo'            },
                    { q: 'You',   a: 'Tú / Usted'    },
                    { q: 'He',    a: 'Él'             },
                    { q: 'She',   a: 'Ella'           },
                    { q: 'It',    a: 'Eso / Esa (objects)' },
                    { q: 'We',    a: 'Nosotros/as'    },
                    { q: 'They',  a: 'Ellos/as'       },
                    { q: 'I am', a: 'Yo soy / estoy'  },
                    { q: 'He is', a: 'Él es / está'   },
                    { q: 'They are', a: 'Ellos son / están' },
                ]
            },

            // ── GAME 4: Hangman – 12 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Pronoun Grammar Vocabulary',
                instruction: 'Guess the letters to find grammar words related to subject pronouns!',
                words: [
                    { word: 'SUBJECT',   hint: 'Pronouns like I, you, he are ___ pronouns' },
                    { word: 'PRONOUN',   hint: 'A word that replaces a noun (I, she, they...)' },
                    { word: 'SINGULAR',  hint: 'Refers to ONE person or thing (opposite of plural)' },
                    { word: 'PLURAL',    hint: 'Refers to MORE THAN ONE (we, they)' },
                    { word: 'FEMININE',  hint: '"She" is the ___ pronoun' },
                    { word: 'MASCULINE', hint: '"He" is the ___ pronoun' },
                    { word: 'NEUTRAL',   hint: '"It" is the ___ pronoun (no gender)' },
                    { word: 'REPLACE',   hint: 'Pronouns ___ nouns in a sentence' },
                    { word: 'GENDER',    hint: 'He/She differ in ___' },
                    { word: 'PERSON',    hint: 'First ___ = I / We, Second ___ = You, Third ___ = He/She/It/They' },
                    { word: 'FORMAL',    hint: '"You" can be informal or ___' },
                    { word: 'OBJECT',    hint: '"It" is used for animals and ___ (things)' },
                ]
            },

            // ── GAME 5: Multiple Choice – 12 questions ───────────────────
            {
                type: 'multiple_choice',
                title: '🎯 Multiple Choice: Pick the Correct Pronoun',
                instruction: 'Select the subject pronoun that best completes each sentence',
                questions: [
                    { q: '___ am from Colombia.',                                       options: ['I', 'Me', 'My', 'Mine'],                  a: 'I'     },
                    { q: 'Ana and Pedro are brothers. ___ are very funny.',             options: ['He', 'She', 'They', 'We'],                 a: 'They'  },
                    { q: 'The weather is nice today. ___ is sunny.',                   options: ['He', 'She', 'It', 'They'],                 a: 'It'    },
                    { q: 'My mom is a chef. ___ cooks amazing food.',                  options: ['He', 'She', 'It', 'We'],                   a: 'She'   },
                    { q: 'My dad works a lot. ___ is always busy.',                    options: ['She', 'He', 'We', 'They'],                 a: 'He'    },
                    { q: 'You and I are a team. ___ can do this!',                     options: ['You', 'They', 'We', 'I'],                  a: 'We'    },
                    { q: 'The books are on the table. ___ are very heavy.',            options: ['It', 'He', 'She', 'They'],                 a: 'They'  },
                    { q: '"What\'s your name?" — Who is "you" talking to?',           options: ['First person', 'Second person', 'Third person', 'No person'], a: 'Second person' },
                    { q: 'The coffee is cold. ___ is not good anymore.',               options: ['He', 'They', 'It', 'She'],                 a: 'It'    },
                    { q: 'Maria is from Brazil. ___ speaks Portuguese.',               options: ['He', 'It', 'She', 'They'],                 a: 'She'   },
                    { q: '"___ are students." Which pronoun makes this PLURAL?',      options: ['I', 'He', 'She', 'We'],                   a: 'We'    },
                    { q: 'The children are playing outside. ___ are very happy.',     options: ['It', 'She', 'He', 'They'],                 a: 'They'  },
                ]
            },
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query(
            'UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3',
            [strData, 'A1', 5]
        );
        console.log('✅ Successfully updated A1 Topic 5 — Subject Pronouns');
        console.log('   → 5 games, rotating types');
        console.log('   → Game 1 (trivia_game):     10 questions');
        console.log('   → Game 2 (fill_blanks_game):12 sentences');
        console.log('   → Game 3 (matching):        10 pairs');
        console.log('   → Game 4 (hangman_game):    12 words');
        console.log('   → Game 5 (multiple_choice): 12 questions');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
