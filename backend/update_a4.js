require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [

            // ── GAME 1: Multiple Choice – 12 questions ───────────────────
            {
                type: 'multiple_choice',
                title: '🔢 Multiple Choice: Numbers in English',
                instruction: 'Choose the correct English word for each number',
                questions: [
                    { q: 'How do you say 13 in English?',          options: ['thirty', 'thirteen', 'thirdteen', 'threeten'],   a: 'thirteen'   },
                    { q: 'What does "forty" mean?',                 options: ['14', '40', '4', '400'],                          a: '40'          },
                    { q: 'How do you write 21?',                    options: ['twenty-one', 'two-one', 'twentyone', 'twen-one'], a: 'twenty-one'  },
                    { q: 'Which is correct for 1,000?',             options: ['one thousand', 'ten hundred', 'a thousand of', 'onethousand'], a: 'one thousand' },
                    { q: 'How do you say 15?',                      options: ['fiveteen', 'fifteen', 'fifty', 'fivety'],         a: 'fifteen'     },
                    { q: 'What is "eighty" in numbers?',            options: ['18', '80', '8', '800'],                          a: '80'          },
                    { q: 'How do you say 2nd?',                     options: ['two', 'twoth', 'second', 'secondly'],             a: 'second'      },
                    { q: 'What comes AFTER "nineteen"?',            options: ['ninety', 'twenty', 'eighteen', 'tenteen'],        a: 'twenty'      },
                    { q: 'How do you say 100?',                     options: ['ten tens', 'a hundred', 'one hundred', 'hundredth'], a: 'one hundred' },
                    { q: 'How do you say 3rd?',                     options: ['three', 'threeth', 'third', 'thirdy'],            a: 'third'       },
                    { q: 'Which is correct for 45?',                options: ['forty-five', 'four-five', 'fortyfive', 'four ty five'], a: 'forty-five' },
                    { q: 'What does "a dozen" mean?',               options: ['10', '11', '12', '20'],                          a: '12'          },
                ]
            },

            // ── GAME 2: Fill In – 12 questions ──────────────────────────
            {
                type: 'fill_in',
                title: '✏️ Fill In: Write the Number in Words',
                instruction: 'Type the number in English words (e.g., "twenty-three")',
                questions: [
                    { q: 'Write 5 in words:',          a: 'five'          },
                    { q: 'Write 11 in words:',         a: 'eleven'        },
                    { q: 'Write 12 in words:',         a: 'twelve'        },
                    { q: 'Write 20 in words:',         a: 'twenty'        },
                    { q: 'Write 30 in words:',         a: 'thirty'        },
                    { q: 'Write 40 in words:',         a: 'forty'         },
                    { q: 'Write 50 in words:',         a: 'fifty'         },
                    { q: 'Write 16 in words:',         a: 'sixteen'       },
                    { q: 'Write 19 in words:',         a: 'nineteen'      },
                    { q: 'Write 100 in words:',        a: 'one hundred'   },
                    { q: 'Write 1,000 in words:',      a: 'one thousand'  },
                    { q: 'Write 1st in words:',        a: 'first'         },
                ]
            },

            // ── GAME 3: Unscramble – 10 sentences ───────────────────────
            {
                type: 'unscramble',
                title: '🔀 Unscramble: Number Sentences',
                instruction: 'Rearrange the scrambled words to form a correct sentence about numbers',
                questions: [
                    { q: 'has twenty six letters English alphabet the',           a: 'the english alphabet has twenty six letters'       },
                    { q: 'is thirty one January days has',                        a: 'january has thirty one days'                       },
                    { q: 'old twelve years I am',                                 a: 'i am twelve years old'                             },
                    { q: 'hundred a year has days three sixty five',              a: 'a year has three hundred sixty five days'           },
                    { q: 'five fingers hand each on has',                         a: 'each hand has five fingers'                        },
                    { q: 'are week seven days the in',                            a: 'there are seven days in the week'                  },
                    { q: 'sixty has hour an minutes',                             a: 'an hour has sixty minutes'                         },
                    { q: 'floor live I on the third',                             a: 'i live on the third floor'                         },
                    { q: 'two hundred fifty costs dollars it',                    a: 'it costs two hundred fifty dollars'                },
                    { q: 'phone my number zero one five four is',                 a: 'my phone number is zero one five four'             },
                ]
            },

            // ── GAME 4: Matching – 10 pairs ──────────────────────────────
            {
                type: 'matching',
                title: '🔗 Matching: Numbers to Words',
                instruction: 'Match each number on the left to its correct English word on the right',
                questions: [
                    { q: '1',      a: 'one'         },
                    { q: '2',      a: 'two'         },
                    { q: '5',      a: 'five'        },
                    { q: '8',      a: 'eight'       },
                    { q: '10',     a: 'ten'         },
                    { q: '12',     a: 'twelve'      },
                    { q: '20',     a: 'twenty'      },
                    { q: '50',     a: 'fifty'       },
                    { q: '100',    a: 'one hundred' },
                    { q: '1,000',  a: 'one thousand' },
                ]
            },

            // ── GAME 5: Crossword – number words ────────────────────────
            // Grid layout (9 rows × 9 cols):
            //      0    1    2    3    4    5    6    7    8
            // 0  [ T ][ W ][ O ][ .  ][ .  ][ .  ][ .  ][ .  ][ .  ]
            // 1  [ E ][ .  ][ N ][ .  ][ .  ][ .  ][ .  ][ .  ][ .  ]
            // 2  [ N ][ .  ][ E ][ .  ][ .  ][ .  ][ .  ][ .  ][ .  ]
            // 3  [ .  ][ F ][ I ][ V ][ E ][ .  ][ .  ][ .  ][ .  ]
            // 4  [ .  ][ O ][ G ][ .  ][ I ][ .  ][ .  ][ .  ][ .  ]
            // 5  [ .  ][ U ][ H ][ .  ][ G ][ .  ][ .  ][ .  ][ .  ]
            // 6  [ .  ][ R ][ T ][ H ][ R ][ E ][ E ][ .  ][ .  ]
            // 7  [ .  ][ .  ][ .  ][ .  ][ .  ][ .  ][ .  ][ .  ][ .  ]
            //
            // Words:
            // 1 (across, row0, col0): TWO
            // 2 (down,   row0, col0): TEN
            // 3 (down,   row0, col2): ONE
            // 4 (across, row3, col1): FIVE    → shares I(row3,col2) with ONE
            // 5 (down,   row3, col1): FOUR    → starts F(row3,col1)
            // 6 (across, row6, col1): RTHREE? No...
            //
            // Let me use a cleaner layout:
            //
            //      0    1    2    3    4    5    6    7
            // 0  [ F ][ I ][ V ][ E ][ .  ][ .  ][ .  ][ .  ]
            // 1  [ O ][ .  ][ .  ][ I ][ .  ][ .  ][ .  ][ .  ]
            // 2  [ U ][ .  ][ .  ][ G ][ .  ][ .  ][ .  ][ .  ]
            // 3  [ R ][ .  ][ .  ][ H ][ .  ][ .  ][ .  ][ .  ]
            // 4  [ .  ][ T ][ W ][ T ][ .  ][ .  ][ .  ][ .  ]
            // 5  [ .  ][ E ][ .  ][ .  ][ .  ][ .  ][ .  ][ .  ]
            // 6  [ .  ][ N ][ .  ][ .  ][ .  ][ .  ][ .  ][ .  ]
            //
            // 1. FIVE across (0,0): F(0,0)I(0,1)V(0,2)E(0,3)
            // 2. FOUR down   (0,0): F(0,0)O(1,0)U(2,0)R(3,0)  -- shares F(0,0) with FIVE
            // 3. EIGHT down  (0,3): E(0,3)I(1,3)G(2,3)H(3,3)T(4,3) -- shares E(0,3) with FIVE
            // 4. TWO  across (4,1): T(4,1)W(4,2)O(4,3)  -- T(4,3)!=O from EIGHT(4,3)=T → conflict at (4,3)
            //    EIGHT(4,3)=T and TWO(4,3)?  TWO would be T(4,1)W(4,2)O(4,3) — O vs T conflict
            //
            // Final clean design:
            //      0    1    2    3    4    5    6
            // 0  [ F ][ I ][ V ][ E ][ .  ][ .  ][ .  ]
            // 1  [ O ][ .  ][ .  ][ I ][ .  ][ .  ][ .  ]
            // 2  [ U ][ .  ][ .  ][ G ][ .  ][ .  ][ .  ]
            // 3  [ R ][ .  ][ .  ][ H ][ .  ][ .  ][ .  ]
            // 4  [ .  ][ T ][ E ][ T ][ .  ][ .  ][ .  ]
            // 5  [ .  ][ W ][ L ][ .  ][ .  ][ .  ][ .  ]
            // 6  [ .  ][ O ][ E ][ .  ][ .  ][ .  ][ .  ]
            // 7  [ .  ][ .  ][ V ][ .  ][ .  ][ .  ][ .  ]
            // 8  [ .  ][ .  ][ E ][ .  ][ .  ][ .  ][ .  ]
            // 9  [ .  ][ .  ][ N ][ .  ][ .  ][ .  ][ .  ]
            //    FIVE across  (0,0) ✓
            //    FOUR down    (0,0) ✓ shares F
            //    EIGHT down   (0,3) E(0,3)I(1,3)G(2,3)H(3,3)T(4,3)
            //    TWO down     (4,1) T(4,1)W(5,1)O(6,1)
            //    ELEVEN down  (4,2) E(4,2)L(5,2)E(6,2)V(7,2)E(8,2)N(9,2)
            //
            // Check for conflicts:
            // (4,3) = T from EIGHT and nothing from TWO (TWO is at col1) ✓
            // (4,2) = E from ELEVEN, nothing else there ✓
            // (4,1) = T from TWO, nothing else ✓
            // All good!
            {
                type: 'crossword_game',
                title: '📝 Crossword: Number Words',
                instruction: 'Click a cell and type to fill in the crossword. Use the clues below!',
                gridSize: { rows: 10, cols: 7 },
                words: [
                    { word: 'FIVE',   hint: 'The number 5',              row: 0, col: 0, dir: 'across', num: 1 },
                    { word: 'FOUR',   hint: 'The number 4 (2+2)',        row: 0, col: 0, dir: 'down',   num: 2 },
                    { word: 'EIGHT',  hint: 'The number 8 (4+4)',        row: 0, col: 3, dir: 'down',   num: 3 },
                    { word: 'TWO',    hint: 'The number 2 (1+1)',        row: 4, col: 1, dir: 'down',   num: 4 },
                    { word: 'ELEVEN', hint: 'The number 11',             row: 4, col: 2, dir: 'down',   num: 5 },
                ]
            },
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query(
            'UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3',
            [strData, 'A1', 4]
        );
        console.log('✅ Successfully updated A1 Topic 4 — Numbers');
        console.log('   → 5 games, all different types from Topic 3');
        console.log('   → Game 1 (multiple_choice):  12 questions');
        console.log('   → Game 2 (fill_in):          12 questions');
        console.log('   → Game 3 (unscramble):       10 sentences');
        console.log('   → Game 4 (matching):         10 pairs');
        console.log('   → Game 5 (crossword_game):   5 words interconnected');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
