require('dotenv').config();
const { query } = require('./db.js');

async function run() {
    const data = {
        games: [
            // ── GAME 1: Trivia – 10 questions ────────────────────────────
            {
                type: 'trivia_game',
                title: '🏆 Trivia: Describing Places',
                instruction: 'Can you describe these places correctly?',
                questions: [
                    {
                        question: 'Which word describes a place with NO noise?',
                        options: ['Noisy', 'Quiet', 'Busy', 'Crowded'],
                        correctIdx: 1
                    },
                    {
                        question: 'Which word describes a city with many people?',
                        options: ['Empty', 'Quiet', 'Crowded', 'Safe'],
                        correctIdx: 2
                    },
                    {
                        question: 'A building that is NOT old is...',
                        options: ['Classic', 'Modern', 'Ancient', 'Traditional'],
                        correctIdx: 1
                    },
                    {
                        question: 'Where do you go to buy food?',
                        options: ['Library', 'Cinema', 'Supermarket', 'Theater'],
                        correctIdx: 2
                    },
                    {
                        question: 'Where do you go when you are sick?',
                        options: ['School', 'Park', 'Hospital', 'Police station'],
                        correctIdx: 2
                    },
                    {
                        question: 'Which preposition means "al lado de"?',
                        options: ['In front of', 'Next to', 'Behind', 'Under'],
                        correctIdx: 1
                    },
                    {
                        question: 'Opposite of "cheap"?',
                        options: ['Inexpensive', 'Pricey / Expensive', 'Big', 'Modern'],
                        correctIdx: 1
                    },
                    {
                        question: 'A place where you can borrow books is a...',
                        options: ['Bookstore', 'Library', 'Museum', 'Gallery'],
                        correctIdx: 1
                    },
                    {
                        question: 'Opposite of "safe"?',
                        options: ['Dangerous', 'Beautiful', 'Clean', 'Boring'],
                        correctIdx: 0
                    },
                    {
                        question: '"There is a park ____ the house." (en frente de)',
                        options: ['behind', 'in front of', 'under', 'on'],
                        correctIdx: 1
                    }
                ]
            },
            // ── GAME 2: Fill Blanks – 12 sentences ──────────────────────
            {
                type: 'fill_blanks_game',
                title: '✍️ Fill the Blank: Adjectives & Prepositions',
                instruction: 'Type the correct word to complete the description',
                sentences: [
                    { text: 'My city is very ___ because many people live here. (numerosa)', answer: 'crowded' },
                    { text: 'The hotel is ___ to the airport. (al lado)', answer: 'next' },
                    { text: 'Berlin is a very ___ city with many new buildings. (moderna)', answer: 'modern' },
                    { text: 'It is very ___ here at night; I can\'t sleep! (ruidoso)', answer: 'noisy' },
                    { text: 'The cinema is ___ the restaurant and the bank. (entre)', answer: 'between' },
                    { text: 'Be careful! That street is ___ at night. (peligrosa)', answer: 'dangerous' },
                    { text: 'The park is located ___ front of the school.', answer: 'in' },
                    { text: 'Singapore is a very ___ city. (limpia)', answer: 'clean' },
                    { text: 'The bus stop is ___ the post office. (atras)', answer: 'behind' },
                    { text: 'This village is very ___. Nothing ever happens! (aburrida)', answer: 'boring' },
                    { text: 'I love this beach because it is so ___. (tranquila)', answer: 'peaceful' },
                    { text: 'The capital city is very ___ to live in. (cara)', answer: 'expensive' }
                ]
            },
            // ── GAME 3: Sentence Builder – 10 sentences ──────────────────
            {
                type: 'sentence_builder',
                title: '🧩 Sentence Builder: Describe Your Town',
                instruction: 'Build correct sentences to describe a town or city',
                sentences: [
                    { text: 'THERE IS A BIG PARK HERE', translation: 'Hay un parque grande aquí', distractors: ['ARE', 'HAVE'] },
                    { text: 'THE CINEMA IS NEXT TO THE BANK', translation: 'El cine está al lado del banco', distractors: ['BETWEEN', 'IN'] },
                    { text: 'MY TOWN IS VERY NOISY AT NIGHT', translation: 'Mi ciudad es muy ruidosa de noche', distractors: ['QUIET', 'WAS'] },
                    { text: 'IS THERE A SUPERMARKET NEAR HERE', translation: '¿Hay un supermercado cerca de aquí?', distractors: ['DOES', 'BEYOND'] },
                    { text: 'LONDON IS AN EXPENSIVE CITY', translation: 'Londres es una ciudad cara', distractors: ['CHEAP', 'BE'] },
                    { text: 'HOW MANY MUSEUMS ARE THERE', translation: '¿Cuántos museos hay?', distractors: ['MUCH', 'DO'] },
                    { text: 'THE LIBRARY IS ON THE CORNER', translation: 'La biblioteca está en la esquina', distractors: ['AT', 'IN'] },
                    { text: 'IT IS A VERY BEAUTIFUL PLACE', translation: 'Es un lugar muy hermoso', distractors: ['UGLY', 'ARE'] },
                    { text: 'WE LIVE IN A SAFE NEIGHBORHOOD', translation: 'Vivimos en un barrio seguro', distractors: ['DANGEROUS', 'ON'] },
                    { text: 'THESE BUILDINGS ARE VERY MODERN', translation: 'Estos edificios son muy modernos', distractors: ['IS', 'OLD'] }
                ]
            },
            // ── GAME 4: Memory Game – 10 pairs ───────────────────────────
            {
                type: 'memory_game',
                title: '🧠 Memory: Opposite Adjectives',
                instruction: 'Match the adjectives with their opposites!',
                pairs: [
                    { emoji: 'Big', word: 'Small' },
                    { emoji: 'Noisy', word: 'Quiet' },
                    { emoji: 'Modern', word: 'Old' },
                    { emoji: 'Expensive', word: 'Cheap' },
                    { emoji: 'Beautiful', word: 'Ugly' },
                    { emoji: 'Clean', word: 'Dirty' },
                    { emoji: 'Safe', word: 'Dangerous' },
                    { emoji: 'Interesting', word: 'Boring' },
                    { emoji: 'Crowded', word: 'Empty' },
                    { emoji: 'Wide', word: 'Narrow' }
                ]
            },
            // ── GAME 5: Hangman – 10 words ───────────────────────────────
            {
                type: 'hangman_game',
                title: '☠️ Hangman: City Places ☠️',
                instruction: 'Guess the place in the city!',
                words: [
                    { word: 'SUPERMARKET', hint: 'Where you buy food' },
                    { word: 'HOSPITAL', hint: 'Where you go if sick' },
                    { word: 'LIBRARY', hint: 'Where you borrow books' },
                    { word: 'RESTAURANT', hint: 'Where you eat out' },
                    { word: 'UNIVERSITY', hint: 'Where you study degree' },
                    { word: 'MUSEUM', hint: 'Where history is on display' },
                    { word: 'THEATER', hint: 'Where you see plays' },
                    { word: 'PHARMACY', hint: 'Where you buy medicine' },
                    { word: 'AIRPORT', hint: 'Where planes land' },
                    { word: 'STADIUM', hint: 'Where you watch sports' }
                ]
            }
        ]
    };

    try {
        const strData = JSON.stringify(data);
        await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND number = $3', [strData, 'A1', 20]);
        console.log('✅ Successfully updated A1 Topic 20 — Describing Places');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
}

run();
