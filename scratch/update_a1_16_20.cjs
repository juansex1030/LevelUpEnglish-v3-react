const fs = require('fs');
const path = 'backend/data/topics.json';
const topics = JSON.parse(fs.readFileSync(path, 'utf8'));

const updateTopic = (number, games) => {
    const t = topics.find(topic => topic.level === 'A1' && topic.number === number);
    if (t) {
        t.premium_practice = JSON.stringify({ games }, null, 2);
    }
};

// --- TOPIC 16: Likes and Dislikes ---
updateTopic(16, [
    {
        type: 'multiple_choice',
        title: 'Expressing Preferences',
        questions: [
            { q: 'I [___] chocolate. It\'s my favorite!', a: 'love', o: ['hate', 'don\'t like', 'mind'] },
            { q: 'She [___] doing homework. She thinks it\'s boring.', a: 'doesn\'t like', o: ['loves', 'enjoys', 'likes'] },
            { q: 'We [___] watching horror movies. We are too scared!', a: 'hate', o: ['enjoy', 'love', 'like'] },
            { q: 'Do you [___] playing video games?', a: 'like', o: ['hates', 'dislike', 'minds'] },
            { q: 'He [___] swimming in the ocean.', a: 'enjoys', o: ['don\'t like', 'hate', 'dislikes'] },
            { q: 'They [___] spicy food.', a: 'dislike', o: ['loves', 'enjoy', 'likes'] },
            { q: 'I don\'t [___] cleaning my room. It\'s okay.', a: 'mind', o: ['love', 'hate', 'enjoy'] },
            { q: 'My cat [___] sleeping in the sun.', a: 'loves', o: ['hates', 'dislikes', 'doesn\'t like'] },
            { q: 'We [___] going to the dentist.', a: 'hate', o: ['love', 'enjoy', 'like'] },
            { q: 'Does she [___] cooking dinner?', a: 'enjoy', o: ['hates', 'dislikes', 'minds'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Preferences Keywords',
        words: ['LOVE', 'LIKE', 'ENJOY', 'HATE', 'DISLIKE', 'MIND', 'FAVORITE', 'ADORE', 'DETEST', 'PREFER']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Sentence',
        questions: [
            { q: 'I / like / pizza / eating / .', a: 'I like eating pizza.' },
            { q: 'She / hates / early / waking / up / .', a: 'She hates waking up early.' },
            { q: 'We / enjoy / music / listening / to / .', a: 'We enjoy listening to music.' },
            { q: 'They / don\'t / like / winter / .', a: 'They don\'t like winter.' },
            { q: 'He / loves / books / reading / .', a: 'He loves reading books.' },
            { q: 'Do / you / like / dancing / ?', a: 'Do you like dancing?' },
            { q: 'I / don\'t / mind / waiting / .', a: 'I don\'t mind waiting.' },
            { q: 'My / brother / dislikes / sports / .', a: 'My brother dislikes sports.' },
            { q: 'We / prefer / tea / to / coffee / .', a: 'We prefer tea to coffee.' },
            { q: 'She / adores / her / new / dog / .', a: 'She adores her new dog.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Verb Patterns',
        questions: [
            { q: 'After "like/love/hate", we usually use the verb with...', a: '-ing', o: ['-ed', '-s', 'will'] },
            { q: 'Which is stronger: "Like" or "Love"?', a: 'Love', o: ['Like', 'They are the same'] },
            { q: 'Which is stronger: "Don\'t like" or "Hate"?', a: 'Hate', o: ['Don\'t like', 'They are the same'] },
            { q: 'What does "I don\'t mind" mean?', a: 'It\'s okay / not a problem', o: ['I hate it', 'I love it'] },
            { q: 'Correct negative for "He likes":', a: "He doesn't like", o: ["He don't like", "He not like"] },
            { q: 'Can we say "I am liking"?', a: 'Usually no (it\'s a state verb)', o: ['Yes', 'Only in the past'] },
            { q: 'What is a synonym for "Hate"?', a: 'Detest', o: ['Adore', 'Enjoy'] },
            { q: 'What is a synonym for "Love"?', a: 'Adore', o: ['Dislike', 'Mind'] },
            { q: 'Question form: "[___] you like coffee?"', a: 'Do', o: ['Does', 'Are'] },
            { q: 'Question form: "[___] he like coffee?"', a: 'Does', o: ['Do', 'Is'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Preference',
        questions: [
            { q: 'I [___] (100%) playing soccer. It\'s great!', a: 'love' },
            { q: 'She [___] (0%) eating broccoli. She thinks it\'s gross.', a: 'hates' },
            { q: 'Do you [___] going to the cinema?', a: 'like' },
            { q: 'I don\'t [___] washing the dishes. It\'s not bad.', a: 'mind' },
            { q: 'We [___] traveling to new places.', a: 'enjoy' },
            { q: 'My sister [___] (not like) cold weather.', a: "doesn't like" },
            { q: 'They [___] listening to loud music.', a: 'dislike' },
            { q: 'I [___] tea to coffee.', a: 'prefer' },
            { q: 'He [___] his job. He is very happy.', a: 'loves' },
            { q: 'We [___] waiting in long lines.', a: 'hate' }
        ]
    }
]);

// --- TOPIC 17: Present Continuous ---
updateTopic(17, [
    {
        type: 'multiple_choice',
        title: 'What are they doing?',
        questions: [
            { q: 'I [___] English right now.', a: 'am studying', o: ['is studying', 'are studying', 'study'] },
            { q: 'He [___] a book at the moment.', a: 'is reading', o: ['am reading', 'are reading', 'reads'] },
            { q: 'They [___] soccer in the park.', a: 'are playing', o: ['is playing', 'am playing', 'play'] },
            { q: 'She [___] dinner now.', a: 'is cooking', o: ['am cooking', 'are cooking', 'cooks'] },
            { q: 'We [___] TV.', a: 'are watching', o: ['is watching', 'am watching', 'watch'] },
            { q: 'It [___] outside.', a: 'is raining', o: ['am raining', 'are raining', 'rains'] },
            { q: 'You [___] on the phone.', a: 'are talking', o: ['is talking', 'am talking', 'talk'] },
            { q: 'The dog [___] in the garden.', a: 'is running', o: ['am running', 'are running', 'runs'] },
            { q: 'Look! The bird [___] .', a: 'is flying', o: ['is fly', 'is flies', 'fly'] },
            { q: 'Listen! Someone [___] .', a: 'is singing', o: ['is sing', 'is sings', 'sing'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Continuous Actions',
        words: ['READING', 'WRITING', 'RUNNING', 'EATING', 'SLEEPING', 'TALKING', 'WORKING', 'STUDYING', 'PLAYING', 'COOKING']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Sentence',
        questions: [
            { q: 'am / I / working / now / .', a: 'I am working now.' },
            { q: 'is / She / a / song / singing / .', a: 'She is singing a song.' },
            { q: 'They / are / lunch / having / .', a: 'They are having lunch.' },
            { q: 'playing / We / are / tennis / .', a: 'We are playing tennis.' },
            { q: 'is / He / the / car / washing / .', a: 'He is washing the car.' },
            { q: 'you / Are / listening / ?', a: 'Are you listening?' },
            { q: 'not / I / am / sleeping / .', a: 'I am not sleeping.' },
            { q: 'It / snowing / is / today / .', a: 'It is snowing today.' },
            { q: 'are / Children / the / laughing / .', a: 'Children are laughing.' },
            { q: 'waiting / Who / are / you / for / ?', a: 'Who are you waiting for?' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Grammar Rules',
        questions: [
            { q: 'Present Continuous is for actions happening...', a: 'Now', o: ['Every day', 'In the past', 'Never'] },
            { q: 'Which auxiliary verb do we use?', a: 'Be (am/is/are)', o: ['Do/Does', 'Have/Has', 'Will'] },
            { q: 'What do we add to the main verb?', a: '-ing', o: ['-ed', '-s', '-es'] },
            { q: 'Negative form of "He is working":', a: 'He is not working', o: ['He not is working', 'He don\'t working'] },
            { q: 'Question form of "You are eating":', a: 'Are you eating?', o: ['Do you eating?', 'Is you eating?'] },
            { q: 'How do you spell "Run + ing"?', a: 'Running', o: ['Runing', 'Runing'] },
            { q: 'How do you spell "Make + ing"?', a: 'Making', o: ['Makeing', 'Makking'] },
            { q: 'How do you spell "Die + ing"?', a: 'Dying', o: ['Dieing', 'Diing'] },
            { q: 'Is "I am liking" common?', a: 'No', o: ['Yes', 'Only on Mondays'] },
            { q: 'Signal word for Present Continuous:', a: 'At the moment', o: ['Usually', 'Yesterday', 'Last week'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Action',
        questions: [
            { q: 'I [___] (write) an email.', a: 'am writing' },
            { q: 'She [___] (not / watch) TV.', a: 'is not watching' },
            { q: '[___] they coming to the party?', a: 'Are' },
            { q: 'He [___] (sit) on the sofa.', a: 'is sitting' },
            { q: 'We [___] (wait) for the bus.', a: 'are waiting' },
            { q: 'Look! It [___] (rain) again.', a: 'is raining' },
            { q: 'What [___] you doing?', a: 'are' },
            { q: 'The students [___] (listen) to the teacher.', a: 'are listening' },
            { q: 'I [___] (not / use) the computer.', a: 'am not using' },
            { q: 'Why [___] she crying?', a: 'is' }
        ]
    }
]);

// --- TOPIC 18: Simple vs. Continuous ---
updateTopic(18, [
    {
        type: 'multiple_choice',
        title: 'Simple or Continuous?',
        questions: [
            { q: 'I [___] tea every morning.', a: 'drink', o: ['am drinking', 'drinks', 'drinking'] },
            { q: 'I [___] tea right now.', a: 'am drinking', o: ['drink', 'drinks', 'drinking'] },
            { q: 'He usually [___] to work by car.', a: 'goes', o: ['is going', 'go', 'going'] },
            { q: 'Look! He [___] to work by bike today.', a: 'is going', o: ['goes', 'go', 'going'] },
            { q: 'They [___] in London.', a: 'live', o: ['are living', 'lives', 'living'] },
            { q: 'They [___] in a hotel this week.', a: 'are staying', o: ['stay', 'stays', 'staying'] },
            { q: 'She [___] English very well.', a: 'speaks', o: ['is speaking', 'speak', 'speaking'] },
            { q: 'Listen! She [___] English on the phone.', a: 'is speaking', o: ['speaks', 'speak', 'speaking'] },
            { q: 'It [___] a lot in winter.', a: 'rains', o: ['is raining', 'rain', 'raining'] },
            { q: 'It [___] right now.', a: 'is raining', o: ['rains', 'rain', 'raining'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Time Markers',
        words: ['NOW', 'USUALLY', 'TODAY', 'ALWAYS', 'OFTEN', 'MOMENT', 'NEVER', 'SOMETIMES', 'LISTEN', 'LOOK']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Sentence',
        questions: [
            { q: 'I / always / my / wash / car / .', a: 'I always wash my car.' },
            { q: 'am / I / washing / car / my / now / .', a: 'I am washing my car now.' },
            { q: 'She / never / eats / meat / .', a: 'She never eats meat.' },
            { q: 'is / She / eating / an / apple / .', a: 'She is eating an apple.' },
            { q: 'Do / you / coffee / like / ?', a: 'Do you like coffee?' },
            { q: 'Are / you / coffee / drinking / ?', a: 'Are you drinking coffee?' },
            { q: 'They / play / every / tennis / Friday / .', a: 'They play tennis every Friday.' },
            { q: 'They / are / tennis / playing / today / .', a: 'They are playing tennis today.' },
            { q: 'He / doesn\'t / work / here / .', a: 'He doesn\'t work here.' },
            { q: 'He / isn\'t / working / today / .', a: 'He isn\'t working today.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Usage Rules',
        questions: [
            { q: 'Which tense is for habits and routines?', a: 'Present Simple', o: ['Present Continuous', 'Past Simple'] },
            { q: 'Which tense is for actions happening now?', a: 'Present Continuous', o: ['Present Simple', 'Future Simple'] },
            { q: 'Which tense uses "Do/Does" in questions?', a: 'Present Simple', o: ['Present Continuous', 'Past Continuous'] },
            { q: 'Which tense uses "Am/Is/Are" + "-ing"?', a: 'Present Continuous', o: ['Present Simple', 'Past Simple'] },
            { q: 'Which is correct: "I am knowing him"?', a: 'No, "know" is a stative verb', o: ['Yes', 'Only if I met him now'] },
            { q: 'Is "usually" a marker for...', a: 'Present Simple', o: ['Present Continuous', 'Past Simple'] },
            { q: 'Is "at the moment" a marker for...', a: 'Present Continuous', o: ['Present Simple', 'Future Simple'] },
            { q: 'Correct: "She [___] a headache."', a: 'has', o: ['is having', 'haves'] },
            { q: 'Correct: "I [___] what you mean."', a: 'understand', o: ['am understanding', 'understands'] },
            { q: 'Correct: "Water [___] at 100 degrees."', a: 'boils', o: ['is boiling', 'boil'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Simple or Continuous?',
        questions: [
            { q: 'I [___] (live) in Madrid.', a: 'live' },
            { q: 'This month, I [___] (stay) with my aunt.', a: 'am staying' },
            { q: 'He [___] (not / like) football.', a: "doesn't like" },
            { q: 'Wait! I [___] (come) now!', a: 'am coming' },
            { q: 'She [___] (go) to the gym twice a week.', a: 'goes' },
            { q: 'What [___] (you / do) right now?', a: 'are you doing' },
            { q: 'What [___] (you / do) for a living?', a: 'do you do' },
            { q: 'The sun [___] (rise) in the east.', a: 'rises' },
            { q: 'Look! The sun [___] (rise).', a: 'is rising' },
            { q: 'I [___] (not / understand) this rule.', a: "don't understand" }
        ]
    }
]);

// --- TOPIC 19: Simple Past ---
updateTopic(19, [
    {
        type: 'multiple_choice',
        title: 'Past Actions',
        questions: [
            { q: 'Yesterday, I [___] to the park.', a: 'went', o: ['go', 'goes', 'gone'] },
            { q: 'She [___] a movie last night.', a: 'watched', o: ['watch', 'watches', 'watching'] },
            { q: 'They [___] pizza for dinner.', a: 'ate', o: ['eat', 'eats', 'eating'] },
            { q: 'He [___] his homework two hours ago.', a: 'finished', o: ['finish', 'finishes', 'finishing'] },
            { q: 'We [___] in London in 2010.', a: 'lived', o: ['live', 'lives', 'living'] },
            { q: 'I [___] my keys this morning.', a: 'lost', o: ['lose', 'loses', 'losing'] },
            { q: 'She [___] a beautiful song.', a: 'sang', o: ['sing', 'sings', 'singing'] },
            { q: 'They [___] to Paris by plane.', a: 'traveled', o: ['travel', 'travels', 'traveling'] },
            { q: 'He [___] me a present.', a: 'gave', o: ['give', 'gives', 'giving'] },
            { q: 'We [___] a new car last month.', a: 'bought', o: ['buy', 'buys', 'buying'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Past Verbs',
        words: ['WENT', 'SAID', 'MADE', 'CAME', 'TOOK', 'FOUND', 'GAVE', 'SENT', 'KEPT', 'LOST']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Sentence',
        questions: [
            { q: 'I / went / to / yesterday / school / .', a: 'I went to school yesterday.' },
            { q: 'She / didn\'t / call / me / .', a: 'She didn\'t call me.' },
            { q: 'They / played / soccer / on / Sunday / .', a: 'They played soccer on Sunday.' },
            { q: 'Did / you / see / that / ?', a: 'Did you see that?' },
            { q: 'He / bought / a / new / phone / .', a: 'He bought a new phone.' },
            { q: 'We / lived / in / Spain / .', a: 'We lived in Spain.' },
            { q: 'The / bus / arrived / late / .', a: 'The bus arrived late.' },
            { q: 'I / found / my / wallet / .', a: 'I found my wallet.' },
            { q: 'What / did / you / eat / ?', a: 'What did you eat?' },
            { q: 'She / was / happy / yesterday / .', a: 'She was happy yesterday.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Past Simple Rules',
        questions: [
            { q: 'What is the auxiliary verb for Past Simple questions?', a: 'Did', o: ['Do', 'Does', 'Was'] },
            { q: 'What do we add to regular verbs?', a: '-ed', o: ['-s', '-ing', '-en'] },
            { q: 'Past of "Go":', a: 'Went', o: ['Goed', 'Gone', 'Gos'] },
            { q: 'Past of "Be" (I, He, She, It):', a: 'Was', o: ['Were', 'Been', 'Am'] },
            { q: 'Past of "Be" (You, We, They):', a: 'Were', o: ['Was', 'Been', 'Are'] },
            { q: 'Negative form: "I [___] work."', a: "didn't", o: ["don't", "wasn't", "not"] },
            { q: 'Does the verb change after "Did" or "Didn\'t"?', a: 'No, it stays in base form', o: ['Yes, it stays in past form'] },
            { q: 'Correct question: "[___] you sleep well?"', a: 'Did', o: ['Do', 'Were', 'Was'] },
            { q: 'Past of "Buy":', a: 'Bought', o: ['Buyed', 'Boughten', 'Boughted'] },
            { q: 'Past of "See":', a: 'Saw', o: ['Seed', 'Seen', 'Sawed'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Past',
        questions: [
            { q: 'I [___] (visit) my grandmother last week.', a: 'visited' },
            { q: 'He [___] (not / go) to the party.', a: "didn't go" },
            { q: 'They [___] (be) very tired.', a: 'were' },
            { q: 'She [___] (write) a letter.', a: 'wrote' },
            { q: 'We [___] (eat) at a restaurant.', a: 'ate' },
            { q: '[___] you see the match?', a: 'Did' },
            { q: 'I [___] (be) born in 1998.', a: 'was' },
            { q: 'The movie [___] (start) at 8:00.', a: 'started' },
            { q: 'They [___] (not / have) enough money.', a: "didn't have" },
            { q: 'Where [___] you go on holiday?', a: 'did' }
        ]
    }
]);

// --- TOPIC 20: Describing Places ---
updateTopic(20, [
    {
        type: 'multiple_choice',
        title: 'City and Country',
        questions: [
            { q: 'A city with many people is [___] .', a: 'crowded', o: ['empty', 'quiet', 'small'] },
            { q: 'A place with no noise is [___] .', a: 'peaceful', o: ['noisy', 'busy', 'loud'] },
            { q: 'Buildings that are very tall are [___] .', a: 'skyscrapers', o: ['huts', 'cottages', 'parks'] },
            { q: 'The [___] is the area outside the city.', a: 'countryside', o: ['downtown', 'center', 'subway'] },
            { q: 'A [___] is a place where you can see art.', a: 'museum', o: ['library', 'stadium', 'factory'] },
            { q: 'A city with a lot of traffic is [___] .', a: 'busy', o: ['lonely', 'calm', 'dead'] },
            { q: 'This old castle is very [___] .', a: 'historic', o: ['modern', 'new', 'futuristic'] },
            { q: 'The air in the mountains is [___] .', a: 'fresh', o: ['polluted', 'dirty', 'smoky'] },
            { q: 'New York is a [___] city.', a: 'huge', o: ['tiny', 'narrow', 'short'] },
            { q: 'The streets are very [___] at night.', a: 'quiet', o: ['crowded', 'loud', 'vibrant'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Place Adjectives',
        words: ['BEAUTIFUL', 'MODERN', 'ANCIENT', 'QUIET', 'NOISY', 'CROWDED', 'CLEAN', 'DIRTY', 'FAMOUS', 'BORING']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Sentence',
        questions: [
            { q: 'My / is / city / very / big / .', a: 'My city is very big.' },
            { q: 'The / is / beautiful / countryside / .', a: 'The countryside is beautiful.' },
            { q: 'There / many / are / parks / here / .', a: 'There are many parks here.' },
            { q: 'It / is / a / noisy / place / .', a: 'It is a noisy place.' },
            { q: 'The / is / clean / air / .', a: 'The air is clean.' },
            { q: 'Is / your / town / famous / ?', a: 'Is your town famous?' },
            { q: 'I / live / in / a / small / village / .', a: 'I live in a small village.' },
            { q: 'The / museum / is / interesting / .', a: 'The museum is interesting.' },
            { q: 'There / isn\'t / much / traffic / .', a: 'There isn\'t much traffic.' },
            { q: 'We / visited / an / old / church / .', a: 'We visited an old church.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Vocabulary Check',
        questions: [
            { q: 'Opposite of "Modern":', a: 'Ancient/Old', o: ['New', 'Fast', 'Tall'] },
            { q: 'Opposite of "Quiet":', a: 'Noisy', o: ['Peaceful', 'Calm', 'Slow'] },
            { q: 'Opposite of "Crowded":', a: 'Empty', o: ['Busy', 'Full', 'Large'] },
            { q: 'Opposite of "Clean":', a: 'Dirty', o: ['Fresh', 'Vibrant', 'Bright'] },
            { q: 'What is a "Skyscraper"?', a: 'A very tall building', o: ['A fast plane', 'A high mountain'] },
            { q: 'Where do you go to catch a train?', a: 'Station', o: ['Airport', 'Library', 'Park'] },
            { q: 'Where do you go to buy food?', a: 'Market/Supermarket', o: ['Cinema', 'Bank', 'School'] },
            { q: 'What is the "Suburbs"?', a: 'Area outside city center', o: ['The main square', 'The beach'] },
            { q: 'Place where kings lived:', a: 'Castle/Palace', o: ['Factory', 'Office', 'Barn'] },
            { q: 'Area with many trees:', a: 'Forest/Park', o: ['Desert', 'Beach', 'Ocean'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Describe the Place',
        questions: [
            { q: 'Tokyo is a very [___] city (many people).', a: 'crowded' },
            { q: 'I love the [___] because it\'s quiet.', a: 'countryside' },
            { q: 'The hotel was very [___] (new style).', a: 'modern' },
            { q: 'There are [___] of tourists in Paris.', a: 'thousands' },
            { q: 'The [___] is very bad in the morning (cars).', a: 'traffic' },
            { q: 'Is there a [___] near here? (books)', a: 'library' },
            { q: 'The water in the lake is [___].', a: 'clear' },
            { q: 'This village is very [___] (old history).', a: 'historic' },
            { q: 'Don\'t go there, it\'s [___] (danger).', a: 'dangerous' },
            { q: 'The [___] from the mountain is amazing.', a: 'view' }
        ]
    }
]);

fs.writeFileSync(path, JSON.stringify(topics, null, 2));
console.log('Batch 1: A1 Topics 16-20 updated successfully.');
