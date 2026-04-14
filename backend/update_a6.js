require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [

            // ── GAME 1: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Verb To Be',
                instruction: 'Arrange the words to build a correct sentence using the verb "To Be"',
                sentences: [
                    {
                        text: 'I am a student.',
                        translation: 'Soy un/a estudiante.',
                        distractors: ['was', 'is']
                    },
                    {
                        text: 'She is my teacher.',
                        translation: 'Ella es mi profesora.',
                        distractors: ['am', 'are']
                    },
                    {
                        text: 'We are from Colombia.',
                        translation: 'Somos de Colombia.',
                        distractors: ['is', 'am']
                    },
                    {
                        text: 'He is not at home.',
                        translation: 'Él no está en casa.',
                        distractors: ['are', 'was']
                    },
                    {
                        text: 'They are very happy today.',
                        translation: 'Ellos están muy felices hoy.',
                        distractors: ['is', 'was']
                    },
                    {
                        text: 'Are you a doctor?',
                        translation: '¿Eres médico/a?',
                        distractors: ['Is', 'Am']
                    },
                    {
                        text: 'The weather is cold today.',
                        translation: 'El clima está frío hoy.',
                        distractors: ['are', 'was']
                    },
                    {
                        text: 'I am not scared.',
                        translation: 'No tengo miedo.',
                        distractors: ['are', 'is']
                    },
                    {
                        text: 'My parents are at work.',
                        translation: 'Mis padres están en el trabajo.',
                        distractors: ['is', 'am']
                    },
                    {
                        text: 'Is she your sister?',
                        translation: '¿Es ella tu hermana?',
                        distractors: ['Are', 'Am']
                    },
                ]
            },

            // ── GAME 2: Fill In – 12 questions ───────────────────────────
            {
                type: 'fill_in',
                title: '✏️ Fill In: am / is / are',
                instruction: 'Type the correct form of "To Be": am, is, or are',
                questions: [
                    { q: 'I ___ a teacher.',                     a: 'am'  },
                    { q: 'She ___ from Spain.',                  a: 'is'  },
                    { q: 'We ___ best friends.',                 a: 'are' },
                    { q: 'He ___ very tall.',                    a: 'is'  },
                    { q: 'You ___ so kind!',                     a: 'are' },
                    { q: 'It ___ a sunny day.',                  a: 'is'  },
                    { q: 'They ___ at the park.',                a: 'are' },
                    { q: 'I ___ not ready yet.',                 a: 'am'  },
                    { q: 'The cats ___ sleeping.',               a: 'are' },
                    { q: 'The book ___ on the table.',           a: 'is'  },
                    { q: 'My sister and I ___ students.',        a: 'are' },
                    { q: 'The sky ___ blue today.',              a: 'is'  },
                ]
            },

            // ── GAME 3: Unscramble – 10 sentences ────────────────────────
            {
                type: 'unscramble',
                title: '🔀 Unscramble: Verb To Be Sentences',
                instruction: 'Rearrange the scrambled words into a correct "To Be" sentence',
                questions: [
                    { q: 'teacher am a I',                          a: 'I am a teacher'                    },
                    { q: 'happy today is she',                       a: 'she is happy today'                },
                    { q: 'tired you are',                            a: 'you are tired'                     },
                    { q: 'from Mexico they are',                     a: 'they are from Mexico'              },
                    { q: 'cold is the water',                        a: 'the water is cold'                 },
                    { q: 'not am I scared',                          a: 'I am not scared'                   },
                    { q: 'is he at home not',                        a: 'he is not at home'                 },
                    { q: 'you are a student',                        a: 'are you a student'                 },
                    { q: 'hungry we are very',                       a: 'we are very hungry'                },
                    { q: 'is the dog cute very',                     a: 'the dog is very cute'              },
                ]
            },

            // ── GAME 4: Memory Game – 12 pairs ───────────────────────────
            // Match pronoun → contracted "to be" form
            {
                type: 'memory_game',
                title: '🧠 Memory: Pronouns & Contractions',
                instruction: 'Match each subject pronoun to its correct "To Be" contraction!',
                pairs: [
                    { emoji: 'I',       word: "I'm"      },
                    { emoji: 'You',     word: "You're"   },
                    { emoji: 'He',      word: "He's"     },
                    { emoji: 'She',     word: "She's"    },
                    { emoji: 'It',      word: "It's"     },
                    { emoji: 'We',      word: "We're"    },
                    { emoji: 'They',    word: "They're"  },
                    { emoji: 'am',      word: '1st sing.'  },
                    { emoji: 'is',      word: '3rd sing.'  },
                    { emoji: 'are',     word: '2nd/Plural' },
                    { emoji: 'was',     word: 'Past: am/is' },
                    { emoji: 'were',    word: 'Past: are'  },
                ]
            },

            // ── GAME 5: Crossword – "To Be" vocabulary ───────────────────
            // Grid (6 rows × 6 cols):
            //      0    1    2    3    4    5
            // 0  [ V ][ E ][ R ][ B ][ .  ][ .  ]
            // 1  [ .  ][ .  ][ .  ][ E ][ .  ][ .  ]
            // 2  [ .  ][ .  ][ .  ][ E ][ .  ][ .  ]
            // 3  [ A ][ R ][ E ][ N ][ O ][ T ]
            // 4  [ .  ][ .  ][ .  ][ .  ][ N ][ .  ]
            // 5  [ .  ][ .  ][ .  ][ .  ][ E ][ .  ]
            //
            // 1. VERB  across (0,0): V(0,0)E(0,1)R(0,2)B(0,3)
            // 2. BEEN  down   (0,3): B(0,3)E(1,3)E(2,3)N(3,3) — shares B with VERB
            // 3. ARE   across (3,0): A(3,0)R(3,1)E(3,2)       
            // 4. NOT   across (3,3): N(3,3)O(3,4)T(3,5)       — shares N with BEEN
            // 5. ONE   down   (3,4): O(3,4)N(4,4)E(5,4)       — shares O with NOT
            {
                type: 'crossword_game',
                title: '📝 Crossword: Verb To Be Vocabulary',
                instruction: 'Click a cell, then type letters using your keyboard. Check clues below!',
                gridSize: { rows: 6, cols: 6 },
                words: [
                    { word: 'VERB', hint: 'A word that expresses action or state. "To Be" is a ___',  row: 0, col: 0, dir: 'across', num: 1 },
                    { word: 'BEEN', hint: 'Past participle of "To Be" (I have ___ here before)',       row: 0, col: 3, dir: 'down',   num: 2 },
                    { word: 'ARE',  hint: 'Form of "To Be" for You / We / They',                       row: 3, col: 0, dir: 'across', num: 3 },
                    { word: 'NOT',  hint: 'Used to make a negative: "She is ___ here"',                row: 3, col: 3, dir: 'across', num: 4 },
                    { word: 'ONE',  hint: 'The number 1 in English words',                              row: 3, col: 4, dir: 'down',   num: 5 },
                ]
            },
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query(
            'UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3',
            [strData, 'A1', 6]
        );
        console.log('✅ Successfully updated A1 Topic 6 — Verb To Be');
        console.log('   → Game 1 (sentence_builder): 10 sentences');
        console.log('   → Game 2 (fill_in):          12 questions');
        console.log('   → Game 3 (unscramble):       10 sentences');
        console.log('   → Game 4 (memory_game):      12 pairs');
        console.log('   → Game 5 (crossword_game):   5 words');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
