require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [

            // ── GAME 1: Sentence Builder – 10 sentences ───────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: This / That / These / Those',
                instruction: 'Arrange the words to form a correct sentence using demonstratives',
                sentences: [
                    {
                        text: 'This is my book.',
                        translation: 'Este es mi libro. (cerca, singular)',
                        distractors: ['That', 'Those']
                    },
                    {
                        text: 'That is her house.',
                        translation: 'Esa es su casa. (lejos, singular)',
                        distractors: ['This', 'These']
                    },
                    {
                        text: 'These are my friends.',
                        translation: 'Estos son mis amigos. (cerca, plural)',
                        distractors: ['Those', 'That']
                    },
                    {
                        text: 'Those are his glasses.',
                        translation: 'Esos son sus anteojos. (lejos, plural)',
                        distractors: ['These', 'This']
                    },
                    {
                        text: 'Is this your phone?',
                        translation: '¿Es este tu teléfono?',
                        distractors: ['Are', 'Was']
                    },
                    {
                        text: 'What is that over there?',
                        translation: '¿Qué es eso de allá?',
                        distractors: ['this', 'these']
                    },
                    {
                        text: 'These shoes are very comfortable.',
                        translation: 'Estos zapatos son muy cómodos.',
                        distractors: ['This', 'That']
                    },
                    {
                        text: 'That man is my uncle.',
                        translation: 'Ese hombre es mi tío.',
                        distractors: ['This', 'Those']
                    },
                    {
                        text: 'Those buildings are very tall.',
                        translation: 'Esos edificios son muy altos.',
                        distractors: ['These', 'This']
                    },
                    {
                        text: 'This coffee is very hot.',
                        translation: 'Este café está muy caliente.',
                        distractors: ['That', 'These']
                    },
                ]
            },

            // ── GAME 2: Fill In – 12 questions ────────────────────────────
            {
                type: 'fill_in',
                title: '✏️ Fill In: this / that / these / those',
                instruction: 'Type the correct demonstrative: this, that, these, or those',
                questions: [
                    { q: '___ is my cat. (near me, one cat)',                         a: 'This'  },
                    { q: '___ are my books. (near me, many books)',                   a: 'These' },
                    { q: '___ is her car. (far away, one car)',                       a: 'That'  },
                    { q: '___ children are playing. (far away, many children)',       a: 'Those' },
                    { q: '___ sandwich is delicious! (the one I am eating now)',      a: 'This'  },
                    { q: '___ mountains look amazing. (far mountains you can see)',   a: 'Those' },
                    { q: '___ are my new glasses. (I am wearing them right now)',     a: 'These' },
                    { q: '___ building over there is the bank.',                      a: 'That'  },
                    { q: '___ flowers smell wonderful. (flowers right next to you)',  a: 'These' },
                    { q: '___ was a great movie! (movie you just watched)',           a: 'That'  },
                    { q: '___ is not my bag. (bag far from you)',                     a: 'That'  },
                    { q: '___ keys are mine. (keys in your hand)',                    a: 'These' },
                ]
            },

            // ── GAME 3: Hangman – 10 words ────────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Demonstrative Grammar Vocabulary',
                instruction: 'Guess the letters to find grammar words related to demonstratives!',
                words: [
                    { word: 'SINGULAR',  hint: '"This" and "that" are ___ (one thing)' },
                    { word: 'PLURAL',    hint: '"These" and "those" are ___ (more than one)' },
                    { word: 'NEARBY',    hint: '"This" and "these" point to things that are ___' },
                    { word: 'DISTANT',   hint: '"That" and "those" point to things that are ___' },
                    { word: 'OBJECTS',   hint: 'Demonstratives point to people or ___' },
                    { word: 'GRAMMAR',   hint: 'Demonstratives are a ___ topic in English' },
                    { word: 'ARTICLE',   hint: 'Demonstratives work similarly to ___ (the, a, an)' },
                    { word: 'REFERS',    hint: 'A demonstrative ___ to a specific noun' },
                    { word: 'PERSON',    hint: '"This" can point to a ___ or a thing' },
                    { word: 'REPLACE',   hint: 'Demonstratives can ___ a noun in a sentence' },
                ]
            },

            // ── GAME 4: Memory Game – 12 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Demonstratives & Meaning',
                instruction: 'Match each demonstrative to its correct category or Spanish translation',
                pairs: [
                    { emoji: 'this',   word: 'Sing. + Near'     },
                    { emoji: 'that',   word: 'Sing. + Far'      },
                    { emoji: 'these',  word: 'Plur. + Near'     },
                    { emoji: 'those',  word: 'Plur. + Far'      },
                    { emoji: 'this',   word: 'esto / este / esta'  },
                    { emoji: 'that',   word: 'eso / ese / esa'     },
                    { emoji: 'these',  word: 'estos / estas'        },
                    { emoji: 'those',  word: 'esos / esas'          },
                    { emoji: '📱 this phone',    word: 'near + singular object'  },
                    { emoji: '🏠 that house',    word: 'far + singular object'   },
                    { emoji: '👟 these shoes',   word: 'near + plural objects'   },
                    { emoji: '🌲 those trees',   word: 'far + plural objects'    },
                ]
            },

            // ── GAME 5: Crossword ─────────────────────────────────────────
            // Grid (5 rows × 5 cols):
            //      0    1    2    3    4
            // 0  [ T ][ H ][ E ][ S ][ E ]  ← THESE across (row0)
            // 1       [ A ]    [ E ][ R ]
            // 2       [ R ]    [ N ][ A ]
            // 3       [ S ]    [ S ][ S ]
            // 4  [ T ][ H ][ O ][ S ][ E ]  ← THOSE across (row4)
            //
            // Down words (cols):
            //   col 1: HARSH — H(0,1)A(1,1)R(2,1)S(3,1)H(4,1)  → shares H w/ THESE & THOSE
            //   col 3: SENSE — S(0,3)E(1,3)N(2,3)S(3,3)E(4,3)  → shares S w/ THESE & THOSE  (wait — SENSE = S-E-N-S-E, col3: (4,3)=S from THOSE ✓)
            //   col 4: ERASE — E(0,4)R(1,4)A(2,4)S(3,4)E(4,4)  → shares E w/ THESE & THOSE
            {
                type: 'crossword_game',
                title: '📝 Crossword: Demonstratives',
                instruction: 'Click a cell, type letters with your keyboard. Check clues below!',
                gridSize: { rows: 10, cols: 10 },
                words: [
                    { word: 'THESE', hint: 'Plural demonstrative for NEAR things (opposite of THOSE)',   row: 0, col: 0, dir: 'across', num: 1 },
                    { word: 'HARSH', hint: 'Severe or difficult — the opposite of EASY',                  row: 0, col: 1, dir: 'down',   num: 2 },
                    { word: 'SENSE', hint: 'When something makes ___, it is clear and logical',           row: 0, col: 3, dir: 'down',   num: 3 },
                    { word: 'ERASE', hint: 'To remove or delete — like erasing a mistake with a rubber',  row: 0, col: 4, dir: 'down',   num: 4 },
                    { word: 'THOSE', hint: 'Plural demonstrative for FAR things (opposite of THESE)',     row: 4, col: 0, dir: 'across', num: 5 },
                    { word: 'THIS',  hint: 'Singular demonstrative for NEAR things',                      row: 6, col: 0, dir: 'across', num: 6 },
                    { word: 'THAT',  hint: 'Singular demonstrative for FAR things',                       row: 6, col: 0, dir: 'down',   num: 7 },
                    { word: 'NEAR',  hint: 'Opposite of far',                                             row: 8, col: 2, dir: 'across', num: 8 },
                    { word: 'FAR',   hint: 'Opposite of near',                                            row: 2, col: 6, dir: 'down',   num: 9 },
                    { word: 'POINT', hint: 'Demonstratives are used to ___ to things',                    row: 9, col: 4, dir: 'across', num: 10 }
                ]
            },
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query(
            'UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3',
            [strData, 'A1', 8]
        );
        console.log('✅ Successfully updated A1 Topic 8 — Demonstratives');
        console.log('   → Game 1 (sentence_builder): 10 sentences');
        console.log('   → Game 2 (fill_in):          12 questions');
        console.log('   → Game 3 (hangman_game):     10 words');
        console.log('   → Game 4 (memory_game):      12 pairs');
        console.log('   → Game 5 (crossword_game):   5 words');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
