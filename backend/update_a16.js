require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [

            // ── GAME 1: Trivia – 10 questions ─────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Likes and Dislikes',
                instruction: 'Test your knowledge on expressing preferences!',
                questions: [
                    {
                        question: 'Which word expresses a strong positive feeling?',
                        options: ['hate', 'like', 'love', 'don\'t mind'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which sentence is grammatically CORRECT?',
                        options: [
                            'I enjoy to playing tennis.',
                            'I enjoy playing tennis.',
                            'I enjoy play tennis.',
                            'I am enjoy playing tennis.'
                        ],
                        correctIdx: 1
                    },
                    {
                        question: 'What is the opposite of "love"?',
                        options: ['like', 'enjoy', 'hate', 'prefer'],
                        correctIdx: 2
                    },
                    {
                        question: 'If you feel neutral about something, you can say:',
                        options: ['I love it', 'I don\'t mind it', 'I hate it', 'I adore it'],
                        correctIdx: 1
                    },
                    {
                        question: '"She ___ watching TV." (Select the correct option for She)',
                        options: ['like', 'likes', 'liking', 'is like'],
                        correctIdx: 1
                    },
                    {
                        question: '"Do you like pizza?" - Correct short answer:',
                        options: ['Yes, I like.', 'Yes, I do.', 'Yes, do I.', 'Yes, I am.'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which word means the same as "dislike"?',
                        options: ['enjoy', 'prefer', 'not like', 'want'],
                        correctIdx: 2
                    },
                    {
                        question: 'Select the CORRECT negative sentence:',
                        options: [
                            'He don\'t like apples.',
                            'He doesn\'t likes apples.',
                            'He not like apples.',
                            'He doesn\'t like apples.'
                        ],
                        correctIdx: 3
                    },
                    {
                        question: 'After verbs like "enjoy", "love", or "hate", the next verb often ends in:',
                        options: ['-ed', '-ing', '-s', 'nothing'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which sentence expresses a preference?',
                        options: [
                            'I prefer tea over coffee.',
                            'I am drinking coffee.',
                            'Coffee is hot.',
                            'I don\'t like tea.'
                        ],
                        correctIdx: 0
                    },
                ]
            },

            // ── GAME 2: Fill Blanks – 12 sentences ────────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Preferences',
                instruction: 'Complete the sentence with the correct form of the verb or preference word',
                sentences: [
                    { text: 'I ___ listening to music in my free time. (enjoy)',              answer: 'enjoy'     },
                    { text: 'He ___ playing football; he is very passionate about it. (love)', answer: 'loves'     },
                    { text: 'She ___ not like spiders. (do)',                                 answer: 'does'      },
                    { text: 'We ___ to go to the beach rather than the mountains. (prefer)',  answer: 'prefer'    },
                    { text: 'I absolutely ___ waking up early! It is the worst. (hate)',      answer: 'hate'      },
                    { text: 'Do they ___ reading books? (like)',                              answer: 'like'      },
                    { text: 'My cat ___ eating fish. (like - third person)',                  answer: 'likes'     },
                    { text: 'I don\'t ___ walking in the rain. (mind)',                       answer: 'mind'      },
                    { text: 'She enjoys ___ novels. (read - use ing)',                        answer: 'reading'   },
                    { text: 'I love ___ movies on weekends. (watch - use ing)',               answer: 'watching'  },
                    { text: 'He hates ___ to the dentist. (go - use ing)',                    answer: 'going'     },
                    { text: '___ you like Chinese food? (do)',                                answer: 'do'        },
                ]
            },

            // ── GAME 3: Unscramble – 10 sentences ─────────────────────────
            {
                type: 'unscramble',
                title: '🔀 Unscramble: Expressing Likes',
                instruction: 'Rearrange the words to form sentences expressing likes or dislikes',
                questions: [
                    { q: 'I playing guitar like',           a: 'I like playing guitar'             },
                    { q: 'she reading loves books',         a: 'she loves reading books'           },
                    { q: 'we hate early up waking',         a: 'we hate waking up early'           },
                    { q: 'do like you pizza',               a: 'do you like pizza'                 },
                    { q: 'he enjoy doesn\'t swimming',      a: 'he doesn\'t enjoy swimming'        },
                    { q: 'I doing mind don\'t homework',    a: 'I don\'t mind doing homework'      },
                    { q: 'they prefer over tea coffee',     a: 'they prefer tea over coffee'       },
                    { q: 'she likes in the walk rain to',   a: 'she likes to walk in the rain'     },
                    { q: 'I playing hate games video',      a: 'I hate playing video games'        },
                    { q: 'loves dog my playing fetch',      a: 'my dog loves playing fetch'        },
                ]
            },

            // ── GAME 4: Sentence Builder – 10 sentences ───────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Likes & Dislikes',
                instruction: 'Arrange the blocks to build sentences about what you like and dislike',
                sentences: [
                    {
                        text: 'I love eating chocolate.',
                        translation: 'Me encanta comer chocolate.',
                        distractors: ['eat']
                    },
                    {
                        text: 'She hates washing the dishes.',
                        translation: 'Ella odia lavar los platos.',
                        distractors: ['hate']
                    },
                    {
                        text: 'We enjoy traveling the world.',
                        translation: 'Disfrutamos viajar por el mundo.',
                        distractors: ['travels']
                    },
                    {
                        text: 'Does he like spicy food?',
                        translation: '¿A él le gusta la comida picante?',
                        distractors: ['Do', 'likes']
                    },
                    {
                        text: 'I don\'t mind waiting.',
                        translation: 'No me molesta esperar.',
                        distractors: ['doesn\'t', 'mind waiting for']
                    },
                    {
                        text: 'They prefer playing soccer.',
                        translation: 'Ellos prefieren jugar fútbol.',
                        distractors: ['prefers']
                    },
                    {
                        text: 'My sister likes watching movies.',
                        translation: 'A mi hermana le gusta ver películas.',
                        distractors: ['like']
                    },
                    {
                        text: 'I absolutely hate cold weather.',
                        translation: 'Odio absolutamente el clima frío.',
                        distractors: ['hates']
                    },
                    {
                        text: 'Do you enjoy reading?',
                        translation: '¿Disfrutas leer?',
                        distractors: ['Does', 'read']
                    },
                    {
                        text: 'He doesn\'t like getting up early.',
                        translation: 'A él no le gusta levantarse temprano.',
                        distractors: ['don\'t', 'likes']
                    },
                ]
            },

            // ── GAME 5: Memory Game – 8 pairs ─────────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Preferences Words',
                instruction: 'Match the English vocabulary of expressing preference with its Spanish translation',
                pairs: [
                    { emoji: 'Love', word: 'Me encanta' },
                    { emoji: 'Like', word: 'Me gusta' },
                    { emoji: 'Enjoy', word: 'Disfrutar' },
                    { emoji: 'Prefer', word: 'Preferir' },
                    { emoji: 'Hate', word: 'Odiar' },
                    { emoji: 'Dislike', word: 'Me disgusta' },
                    { emoji: 'Don\'t mind', word: 'No me importa / molesta' },
                    { emoji: 'Can\'t stand', word: 'No soportar' },
                ]
            },
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query(
            'UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3',
            [strData, 'A1', 16]
        );
        console.log('✅ Successfully updated A1 Topic 16 — Likes and Dislikes');
        console.log('   → Game 1 (trivia_game):      10 questions');
        console.log('   → Game 2 (fill_blanks_game): 12 sentences');
        console.log('   → Game 3 (unscramble):       10 sentences');
        console.log('   → Game 4 (sentence_builder): 10 sentences');
        console.log('   → Game 5 (memory_game):       8 pairs');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
