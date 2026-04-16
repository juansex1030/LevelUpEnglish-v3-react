require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Hangman – 12 words ──────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: Spell the Word!',
                instruction: 'Guess the letters to spell the word. Use what you know about the English alphabet!',
                words: [
                    { word: 'APPLE',      hint: 'A red or green fruit 🍎' },
                    { word: 'BOOK',       hint: 'You read this 📖' },
                    { word: 'ENGLISH',    hint: 'The language you are learning 🇬🇧' },
                    { word: 'SCHOOL',     hint: 'A place where you learn 🏫' },
                    { word: 'ELEPHANT',   hint: 'A very big grey animal 🐘' },
                    { word: 'PENCIL',     hint: 'You write with this ✏️' },
                    { word: 'UMBRELLA',   hint: 'Used when it rains ☂️' },
                    { word: 'NOTEBOOK',   hint: 'You take notes in this 📓' },
                    { word: 'GUITAR',     hint: 'A musical instrument 🎸' },
                    { word: 'WINDOW',     hint: 'You look outside through this 🪟' },
                    { word: 'JUNGLE',     hint: 'A dense tropical forest 🌿' },
                    { word: 'QUESTION',   hint: 'You ask this when you want to know something ❓' },
                ]
            },

            // ── GAME 2: Memory Game – 12 pairs (letters ↔ phonetics) ────
            {
                type: 'memory_game',
                title: '🧠 Memory: Letters & Sounds',
                instruction: 'Match each English letter to its correct pronunciation. Click pairs to reveal them!',
                pairs: [
                    { emoji: 'A', word: 'ei'     },
                    { emoji: 'E', word: 'i'       },
                    { emoji: 'I', word: 'ai'      },
                    { emoji: 'O', word: 'ou'      },
                    { emoji: 'U', word: 'yu'      },
                    { emoji: 'H', word: 'eich'    },
                    { emoji: 'G', word: 'yi'      },
                    { emoji: 'J', word: 'yei'     },
                    { emoji: 'W', word: 'dablyu'  },
                    { emoji: 'Y', word: 'wai'     },
                    { emoji: 'B', word: 'bi'      },
                    { emoji: 'Z', word: 'zi'      },
                ]
            },

            // ── GAME 3: Trivia – 10 questions ───────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Alphabet Knowledge',
                instruction: 'Answer each question about the English alphabet. Choose the correct option!',
                questions: [
                    {
                        question: 'How many letters are in the English alphabet?',
                        options: ['24', '25', '26', '27'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which of these is a VOWEL?',
                        options: ['B', 'C', 'E', 'T'],
                        correctIdx: 2
                    },
                    {
                        question: 'How do you pronounce the letter "H" in English?',
                        options: ['hache', 'eich', 'ache', 'hi'],
                        correctIdx: 1
                    },
                    {
                        question: 'How many VOWELS does the English alphabet have?',
                        options: ['4', '5', '6', '7'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which letter comes AFTER "M" in the alphabet?',
                        options: ['L', 'O', 'N', 'P'],
                        correctIdx: 2
                    },
                    {
                        question: 'How do you spell "SCHOOL"?',
                        options: ['S-C-H-O-O-L', 'S-K-O-L', 'S-C-H-O-L', 'S-C-O-L'],
                        correctIdx: 0
                    },
                    {
                        question: 'How do you pronounce the letter "W"?',
                        options: ['doble u', 'dablyu', 'vee', 'wee'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which letter sounds like "wai"?',
                        options: ['I', 'U', 'Y', 'A'],
                        correctIdx: 2
                    },
                    {
                        question: 'What is the LAST letter of the English alphabet?',
                        options: ['X', 'Y', 'W', 'Z'],
                        correctIdx: 3
                    },
                    {
                        question: 'How do you ask someone to spell a word in English?',
                        options: [
                            '"What letters?"',
                            '"How do you spell that?"',
                            '"Can you alphabet that?"',
                            '"Write the letters."'
                        ],
                        correctIdx: 1
                    },
                ]
            },

            // ── GAME 4: Fill in the Blanks – 12 sequences ───────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Alphabet Sequences',
                instruction: 'Type the missing letter to complete the alphabet sequence',
                sentences: [
                    { text: 'A, B, ____, D',        answer: 'C'  },
                    { text: 'D, E, F, ____',        answer: 'G'  },
                    { text: 'H, ____, J, K',        answer: 'I'  },
                    { text: 'L, M, ____, O',        answer: 'N'  },
                    { text: 'P, Q, ____, S',        answer: 'R'  },
                    { text: 'T, U, V, ____',        answer: 'W'  },
                    { text: 'W, ____, Y, Z',        answer: 'X'  },
                    { text: '____, F, G, H',        answer: 'E'  },
                    { text: 'K, L, ____, N',        answer: 'M'  },
                    { text: 'S, T, ____, V',        answer: 'U'  },
                    { text: 'A, ____, C, D',        answer: 'B'  },
                    { text: 'V, W, X, ____, Z',     answer: 'Y'  },
                ]
            },

            // ── GAME 5: Sentence Builder – 10 sentences ─────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Spelling Phrases',
                instruction: 'Arrange the words in the correct order to form a natural English spelling phrase',
                sentences: [
                    {
                        text: 'How do you spell that?',
                        translation: '¿Cómo se deletrea eso?',
                        distractors: ['what', 'when']
                    },
                    {
                        text: 'Can you spell your name please?',
                        translation: '¿Puedes deletrear tu nombre por favor?',
                        distractors: ['write', 'say']
                    },
                    {
                        text: 'My name starts with the letter A.',
                        translation: 'Mi nombre empieza con la letra A.',
                        distractors: ['ends', 'before']
                    },
                    {
                        text: 'The English alphabet has twenty six letters.',
                        translation: 'El alfabeto inglés tiene veintiséis letras.',
                        distractors: ['five', 'hundred']
                    },
                    {
                        text: 'B and V sound very similar in Spanish.',
                        translation: 'La B y la V suenan muy similares en español.',
                        distractors: ['look', 'feel']
                    },
                    {
                        text: 'Please write your email letter by letter.',
                        translation: 'Por favor escribe tu email letra por letra.',
                        distractors: ['word', 'number']
                    },
                    {
                        text: 'I do not know how to spell that word.',
                        translation: 'No sé cómo deletrear esa palabra.',
                        distractors: ['write', 'say']
                    },
                    {
                        text: 'The letter H is pronounced eich in English.',
                        translation: 'La letra H se pronuncia "eich" en inglés.',
                        distractors: ['hache', 'silent']
                    },
                    {
                        text: 'A E I O U are the five vowels.',
                        translation: 'A E I O U son las cinco vocales.',
                        distractors: ['consonants', 'numbers']
                    },
                    {
                        text: 'Can you repeat that letter slowly please?',
                        translation: '¿Puedes repetir esa letra despacio por favor?',
                        distractors: ['fast', 'again']
                    },
                ]
            },
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query(
            'UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3',
            [strData, 'A1', 3]
        );
        console.log('✅ Successfully updated A1 Topic 3 — The Alphabet');
        console.log(`   → 5 games`);
        console.log(`   → Game 1 (Hangman):       12 words`);
        console.log(`   → Game 2 (Memory):        12 pairs`);
        console.log(`   → Game 3 (Trivia):        10 questions`);
        console.log(`   → Game 4 (Fill Blanks):   12 sequences`);
        console.log(`   → Game 5 (Sentence):      10 sentences`);
        process.exit(0);
    } catch (err) {
        console.error('❌ Error updating topic:', err);
        process.exit(1);
    }
}

run();
