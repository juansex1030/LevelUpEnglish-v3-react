const fs = require('fs');
const path = 'backend/data/topics.json';
const topics = JSON.parse(fs.readFileSync(path, 'utf8'));

const updateTopic = (number, games) => {
    const t = topics.find(topic => topic.level === 'A1' && topic.number === number);
    if (t) {
        t.premium_practice = JSON.stringify({ games }, null, 2);
    }
};

// --- TOPIC 11: Prepositions of Time ---
updateTopic(11, [
    {
        type: 'multiple_choice',
        title: 'Choose In, On, or At',
        questions: [
            { q: '[___] Monday', a: 'On', o: ['In', 'At', 'By'] },
            { q: '[___] 8:00 AM', a: 'At', o: ['In', 'On', 'For'] },
            { q: '[___] the morning', a: 'In', o: ['At', 'On', 'With'] },
            { q: '[___] 2024', a: 'In', o: ['On', 'At', 'During'] },
            { q: '[___] May 5th', a: 'On', o: ['In', 'At', 'About'] },
            { q: '[___] night', a: 'At', o: ['In', 'On', 'From'] },
            { q: '[___] the weekend', a: 'On/At', o: ['In', 'To', 'Under'] },
            { q: '[___] summer', a: 'In', o: ['On', 'At', 'By'] },
            { q: '[___] noon', a: 'At', o: ['In', 'On', 'From'] },
            { q: '[___] my birthday', a: 'On', o: ['In', 'At', 'Into'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Time Words Search',
        words: ['MONDAY', 'JANUARY', 'SUMMER', 'MORNING', 'NIGHT', 'WEEKEND', 'YEAR', 'MONTH', 'BIRTHDAY', 'CHRISTMAS']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Sentence',
        questions: [
            { q: 'get / up / at / I / seven / .', a: 'I get up at seven.' },
            { q: 'on / My / is / birthday / Monday / .', a: 'My birthday is on Monday.' },
            { q: 'hot / It / in / is / summer / .', a: 'It is hot in summer.' },
            { q: 'go / We / at / to / night / bed / .', a: 'We go to bed at night.' },
            { q: 'play / They / on / football / Saturdays / .', a: 'They play football on Saturdays.' },
            { q: 'He / born / was / in / 1990 / .', a: 'He was born in 1990.' },
            { q: 'work / I / at / don\'t / the / weekend / .', a: 'I don\'t work at the weekend.' },
            { q: 'class / The / at / starts / nine / .', a: 'The class starts at nine.' },
            { q: 'cold / It / is / in / January / .', a: 'It is cold in January.' },
            { q: 'see / you / I / will / on / Friday / .', a: 'I will see you on Friday.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Preposition Rules',
        questions: [
            { q: 'Which preposition is used for specific times (e.g., 5 PM)?', a: 'At', o: ['In', 'On', 'To'] },
            { q: 'Which preposition is used for days of the week?', a: 'On', o: ['In', 'At', 'For'] },
            { q: 'Which preposition is used for months (e.g., April)?', a: 'In', o: ['On', 'At', 'To'] },
            { q: 'Which preposition is used for years (e.g., 2010)?', a: 'In', o: ['On', 'At', 'By'] },
            { q: 'Which preposition is used for dates (e.g., June 10th)?', a: 'On', o: ['In', 'At', 'With'] },
            { q: 'Which preposition is used for seasons (e.g., Winter)?', a: 'In', o: ['On', 'At', 'Into'] },
            { q: 'What do you say for "night"?', a: 'At night', o: ['In night', 'On night', 'To night'] },
            { q: 'What do you say for "the morning"?', a: 'In the morning', o: ['At morning', 'On morning', 'The morning at'] },
            { q: 'Preposition for "my birthday"?', a: 'On', o: ['In', 'At', 'By'] },
            { q: 'Preposition for "midday"?', a: 'At', o: ['In', 'On', 'With'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Preposition',
        questions: [
            { q: 'I drink coffee [___] the morning.', a: 'in' },
            { q: 'The meeting is [___] 10:00 AM.', a: 'at' },
            { q: 'We don\'t have classes [___] Sundays.', a: 'on' },
            { q: 'I was born [___] October.', a: 'in' },
            { q: 'The party is [___] October 31st.', a: 'on' },
            { q: 'It is dark [___] night.', a: 'at' },
            { q: 'Schools are closed [___] summer.', a: 'in' },
            { q: 'I go to the gym [___] Mondays.', a: 'on' },
            { q: 'The concert ends [___] midnight.', a: 'at' },
            { q: 'The film was made [___] 1995.', a: 'in' }
        ]
    }
]);

// --- TOPIC 12: Simple Present ---
updateTopic(12, [
    {
        type: 'multiple_choice',
        title: 'Verb Conjugation',
        questions: [
            { q: 'I [___] English.', a: 'study', o: ['studies', 'studying', 'studied'] },
            { q: 'He [___] English.', a: 'studies', o: ['study', 'studying', 'studys'] },
            { q: 'We [___] in London.', a: 'live', o: ['lives', 'living', 'lived'] },
            { q: 'She [___] in New York.', a: 'lives', o: ['live', 'living', 'lived'] },
            { q: 'They [___] breakfast at 8.', a: 'eat', o: ['eats', 'eating', 'ate'] },
            { q: 'It [___] a lot in London.', a: 'rains', o: ['rain', 'raining', 'rained'] },
            { q: 'You [___] the guitar well.', a: 'play', o: ['plays', 'playing', 'player'] },
            { q: 'The cat [___] on the sofa.', a: 'sleeps', o: ['sleep', 'sleeping', 'sleepes'] },
            { q: 'My father [___] in a bank.', a: 'works', o: ['work', 'working', 'worker'] },
            { q: 'Teachers [___] the students.', a: 'help', o: ['helps', 'helping', 'helped'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Action Verbs',
        words: ['WORK', 'STUDY', 'LIVE', 'PLAY', 'EAT', 'DRINK', 'SLEEP', 'READ', 'WRITE', 'SPEAK']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Sentence',
        questions: [
            { q: 'like / I / apples / .', a: 'I like apples.' },
            { q: 'drinks / She / coffee / .', a: 'She drinks coffee.' },
            { q: 'play / They / soccer / .', a: 'They play soccer.' },
            { q: 'works / He / hard / .', a: 'He works hard.' },
            { q: 'to / We / go / school / .', a: 'We go to school.' },
            { q: 'cat / The / fish / eats / .', a: 'The cat eats fish.' },
            { q: 'read / You / books / .', a: 'You read books.' },
            { q: 'sleep / Dogs / a / lot / .', a: 'Dogs sleep a lot.' },
            { q: 'rains / It / winter / in / .', a: 'It rains in winter.' },
            { q: 'mother / My / cooks / dinner / .', a: 'My mother cooks dinner.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Present Simple Rules',
        questions: [
            { q: 'Which pronouns add "-s" to the verb?', a: 'He, She, It', o: ['I, You', 'We, They', 'All of them'] },
            { q: 'What is the auxiliary verb for negatives (I, You, We, They)?', a: 'Do not (Don\'t)', o: ['Does not (Doesn\'t)', 'Is not', 'Am not'] },
            { q: 'What is the auxiliary verb for negatives (He, She, It)?', a: 'Does not (Doesn\'t)', o: ['Do not (Don\'t)', 'Is not', 'Are not'] },
            { q: 'When we use "Doesn\'t", does the verb keep the "-s"?', a: 'No', o: ['Yes', 'Sometimes'] },
            { q: 'Question form for "You like pizza":', a: 'Do you like pizza?', o: ['Does you like pizza?', 'Is you like pizza?'] },
            { q: 'Question form for "She likes pizza":', a: 'Does she like pizza?', o: ['Do she like pizza?', 'Is she like pizza?'] },
            { q: 'Correct negative: "He [___] like pizza."', a: "doesn't", o: ["don't", "not", "isn't"] },
            { q: 'Correct negative: "They [___] like pizza."', a: "don't", o: ["doesn't", "not", "aren't"] },
            { q: 'Third person of "Go":', a: 'Goes', o: ['Gos', 'Gois', 'Goes'] },
            { q: 'Third person of "Have":', a: 'Has', o: ['Haves', 'Hases', 'Having'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Verb',
        questions: [
            { q: 'I [___] (listen) to music.', a: 'listen' },
            { q: 'He [___] (listen) to music.', a: 'listens' },
            { q: 'They [___] (not / like) cold weather.', a: "don't like" },
            { q: 'She [___] (not / eat) meat.', a: "doesn't eat" },
            { q: 'My brother [___] (speak) three languages.', a: 'speaks' },
            { q: 'Where [___] you live?', a: 'do' },
            { q: '[___] she work here?', a: 'Does' },
            { q: 'We [___] (watch) TV every night.', a: 'watch' },
            { q: 'It [___] (open) at 9:00.', a: 'opens' },
            { q: 'I [___] (not / smoke).', a: "don't smoke" }
        ]
    }
]);

// --- TOPIC 13: Adverbs of Frequency ---
updateTopic(13, [
    {
        type: 'multiple_choice',
        title: 'Choose the Frequency',
        questions: [
            { q: '100% of the time:', a: 'Always', o: ['Usually', 'Never', 'Sometimes'] },
            { q: '0% of the time:', a: 'Never', o: ['Often', 'Rarely', 'Always'] },
            { q: '50% of the time:', a: 'Sometimes', o: ['Always', 'Never', 'Usually'] },
            { q: '80-90% of the time:', a: 'Usually', o: ['Rarely', 'Never', 'Often'] },
            { q: '10% of the time:', a: 'Rarely', o: ['Often', 'Sometimes', 'Always'] },
            { q: '60-70% of the time:', a: 'Often', o: ['Rarely', 'Never', 'Always'] },
            { q: 'I [___] drink water. (Every day)', a: 'always', o: ['never', 'rarely', 'sometimes'] },
            { q: 'She [___] eats pizza. (Not even once)', a: 'never', o: ['always', 'often', 'usually'] },
            { q: 'We [___] go to the park. (3 days a week)', a: 'sometimes', o: ['never', 'always', 'rarely'] },
            { q: 'He [___] arrives late. (Almost every day)', a: 'usually', o: ['never', 'rarely', 'sometimes'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Adverbs Search',
        words: ['ALWAYS', 'NEVER', 'OFTEN', 'USUALLY', 'SOMETIMES', 'RARELY', 'SELDOM', 'NORMALY', 'DAILY', 'WEEKLY']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Sentence',
        questions: [
            { q: 'always / I / breakfast / eat / .', a: 'I always eat breakfast.' },
            { q: 'never / She / coffee / drinks / .', a: 'She never drinks coffee.' },
            { q: 'They / often / soccer / play / .', a: 'They often play soccer.' },
            { q: 'usually / arrives / He / late / .', a: 'He usually arrives late.' },
            { q: 'sometimes / We / to / cinema / go / the / .', a: 'We sometimes go to the cinema.' },
            { q: 'am / happy / I / always / .', a: 'I am always happy.' },
            { q: 'is / She / never / angry / .', a: 'She is never angry.' },
            { q: 'often / We / tired / are / .', a: 'We are often tired.' },
            { q: 'They / usually / at / are / home / .', a: 'They are usually at home.' },
            { q: 'rarely / It / rains / here / .', a: 'It rarely rains here.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Adverb Placement',
        questions: [
            { q: 'Where do adverbs go with regular verbs (e.g., eat)?', a: 'Before the verb', o: ['After the verb', 'At the end of the sentence'] },
            { q: 'Where do adverbs go with the verb "To Be"?', a: 'After the verb', o: ['Before the verb', 'At the beginning of the sentence'] },
            { q: 'Correct order: "I [___] [___]."', a: 'always play', o: ['play always'] },
            { q: 'Correct order: "He [___] [___]."', a: 'is never', o: ['never is'] },
            { q: 'Correct order: "We [___] [___]."', a: 'often go', o: ['go often'] },
            { q: 'Correct order: "She [___] [___]."', a: 'is usually', o: ['usually is'] },
            { q: 'How do you ask for frequency?', a: 'How often...?', o: ['How many...?', 'How much...?', 'When...?'] },
            { q: 'Response to "How often do you exercise?":', a: 'Every day', o: ['In the morning', 'At 7:00', 'Yes, I do'] },
            { q: 'Which is a synonym for "Rarely"?', a: 'Seldom', o: ['Often', 'Usually', 'Frequently'] },
            { q: 'Does "Always" go before or after "drink"?', a: 'Before', o: ['After'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Adverb',
        questions: [
            { q: 'I [___] (100%) wash my hands.', a: 'always' },
            { q: 'I [___] (0%) smoke.', a: 'never' },
            { q: 'I am [___] (100%) tired on Fridays.', a: 'always' },
            { q: 'She [___] (50%) cooks at home.', a: 'sometimes' },
            { q: 'How [___] do you travel?', a: 'often' },
            { q: 'They are [___] (80%) on time.', a: 'usually' },
            { q: 'My dog [___] (90%) barks at cats.', a: 'usually' },
            { q: 'I [___] (10%) watch horror movies.', a: 'rarely' },
            { q: 'We [___] (70%) go to the beach.', a: 'often' },
            { q: 'He is [___] (0%) late.', a: 'never' }
        ]
    }
]);

// --- TOPIC 14: Comparatives ---
updateTopic(14, [
    {
        type: 'multiple_choice',
        title: 'Choose the correct comparative',
        questions: [
            { q: 'Tall ->', a: 'Taller', o: ['More tall', 'Talls', 'Tallest'] },
            { q: 'Big ->', a: 'Bigger', o: ['Bigier', 'More big', 'Biggest'] },
            { q: 'Happy ->', a: 'Happier', o: ['More happy', 'Happyer', 'Happiest'] },
            { q: 'Expensive ->', a: 'More expensive', o: ['Expensiver', 'Most expensive', 'Expensivest'] },
            { q: 'Good ->', a: 'Better', o: ['Gooder', 'Best', 'More good'] },
            { q: 'Bad ->', a: 'Worse', o: ['Badder', 'Worst', 'More bad'] },
            { q: 'Fast ->', a: 'Faster', o: ['More fast', 'Fastest', 'Fastier'] },
            { q: 'Beautiful ->', a: 'More beautiful', o: ['Beautifuler', 'Most beautiful', 'Beautifullier'] },
            { q: 'Small ->', a: 'Smaller', o: ['Smallest', 'More small', 'Smallier'] },
            { q: 'Cheap ->', a: 'Cheaper', o: ['More cheap', 'Cheapest', 'Cheapier'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Adjective Search',
        words: ['BIG', 'SMALL', 'FAST', 'SLOW', 'HAPPY', 'SAD', 'OLD', 'YOUNG', 'TALL', 'SHORT']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Sentence',
        questions: [
            { q: 'am / I / taller / you / than / .', a: 'I am taller than you.' },
            { q: 'Russia / Mexico / is / bigger / than / .', a: 'Russia is bigger than Mexico.' },
            { q: 'faster / A / is / car / a / than / bike / .', a: 'A car is faster than a bike.' },
            { q: 'cheaper / Apples / are / than / meat / .', a: 'Apples are cheaper than meat.' },
            { q: 'than / She / is / older / me / .', a: 'She is older than me.' },
            { q: 'Dogs / are / cats / friendlier / than / .', a: 'Dogs are friendlier than cats.' },
            { q: 'more / English / is / difficult / than / Spanish / .', a: 'English is more difficult than Spanish.' },
            { q: 'better / My / is / yours / than / cake / .', a: 'My cake is better than yours.' },
            { q: 'The / is / than / sun / hot / the / moon / .', a: 'The sun is hotter than the moon.' },
            { q: 'is / My / car / than / newer / yours / .', a: 'My car is newer than yours.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Comparative Rules',
        questions: [
            { q: 'What do we add to short adjectives (1 syllable)?', a: '-er', o: ['-est', 'more', '-y'] },
            { q: 'What do we use for long adjectives (3+ syllables)?', a: 'More', o: ['-er', '-est', 'lesser'] },
            { q: 'What word follows the comparative (e.g., taller [___])?', a: 'Than', o: ['That', 'Then', 'Like'] },
            { q: 'Comparative of "Hot":', a: 'Hotter', o: ['Hoter', 'More hot', 'Hottest'] },
            { q: 'Comparative of "Cold":', a: 'Colder', o: ['Coldier', 'More cold', 'Coldest'] },
            { q: 'Comparative of "Difficult":', a: 'More difficult', o: ['Difficulter', 'Most difficult', 'Difficultier'] },
            { q: 'Is "more better" correct?', a: 'No', o: ['Yes', 'Only in formal English'] },
            { q: 'Comparative of "Far":', a: 'Farther/Further', o: ['Farer', 'Farrer', 'More far'] },
            { q: 'If an adjective ends in "-y", we change it to...', a: '-ier', o: ['-yer', 'more -y', '-est'] },
            { q: 'Comparative of "Clean":', a: 'Cleaner', o: ['Cleanier', 'More clean', 'Cleanest'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Comparative',
        questions: [
            { q: 'An elephant is [___] (big) than a mouse.', a: 'bigger' },
            { q: 'A plane is [___] (fast) than a train.', a: 'faster' },
            { q: 'Summer is [___] (hot) than winter.', a: 'hotter' },
            { q: 'Ferrari is [___] (expensive) than Toyota.', a: 'more expensive' },
            { q: 'Gold is [___] (heavy) than paper.', a: 'heavier' },
            { q: 'Today is [___] (good) than yesterday.', a: 'better' },
            { q: 'Ice is [___] (cold) than water.', a: 'coder' },
            { q: 'Mount Everest is [___] (high) than K2.', a: 'higher' },
            { q: 'I am [___] (young) than my father.', a: 'younger' },
            { q: 'English is [___] (easy) than Chinese.', a: 'easier' }
        ]
    }
]);

// --- TOPIC 15: Food ---
updateTopic(15, [
    {
        type: 'multiple_choice',
        title: 'Identify the Food',
        questions: [
            { q: 'Yellow fruit:', a: 'Banana', o: ['Apple', 'Grape', 'Orange'] },
            { q: 'White drink from cows:', a: 'Milk', o: ['Water', 'Juice', 'Coffee'] },
            { q: 'Circular Italian food:', a: 'Pizza', o: ['Sushi', 'Burger', 'Taco'] },
            { q: 'Main ingredient in bread:', a: 'Flour', o: ['Sugar', 'Salt', 'Meat'] },
            { q: 'Red vegetable used in salads:', a: 'Tomato', o: ['Potato', 'Carrot', 'Onion'] },
            { q: 'Animal product used for breakfast:', a: 'Egg', o: ['Bread', 'Milk', 'Juice'] },
            { q: 'Sweet cold dessert:', a: 'Ice cream', o: ['Soup', 'Salad', 'Steak'] },
            { q: 'Long thin pasta:', a: 'Spaghetti', o: ['Rice', 'Bread', 'Pizza'] },
            { q: 'Drink made from oranges:', a: 'Orange juice', o: ['Soda', 'Tea', 'Wine'] },
            { q: 'Meat from a cow:', a: 'Beef', o: ['Pork', 'Chicken', 'Fish'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Food Search',
        words: ['APPLE', 'BREAD', 'CHICKEN', 'CHEESE', 'WATER', 'FRUIT', 'PASTA', 'RICE', 'SALAD', 'SUGAR']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Food',
        questions: [
            { q: 'a / p / p / l / e', a: 'apple' },
            { q: 'b / r / e / a / d', a: 'bread' },
            { q: 'c / h / e / e / s / e', a: 'cheese' },
            { q: 'p / i / z / z / a', a: 'pizza' },
            { q: 'm / i / l / k', a: 'milk' },
            { q: 'w / a / t / e / r', a: 'water' },
            { q: 'f / r / u / i / t', a: 'fruit' },
            { q: 's / u / g / a / r', a: 'sugar' },
            { q: 'm / e / a / t', a: 'meat' },
            { q: 'c / o / f / f / e / e', a: 'coffee' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Food Groups',
        questions: [
            { q: 'Which is a fruit?', a: 'Strawberry', o: ['Potato', 'Bread', 'Egg'] },
            { q: 'Which is a dairy product?', a: 'Cheese', o: ['Chicken', 'Rice', 'Apple'] },
            { q: 'Which is a vegetable?', a: 'Carrot', o: ['Banana', 'Beef', 'Milk'] },
            { q: 'Which is a grain?', a: 'Rice', o: ['Orange', 'Water', 'Pork'] },
            { q: 'Which is a meat?', a: 'Chicken', o: ['Pasta', 'Onion', 'Grape'] },
            { q: 'Which is a drink?', a: 'Tea', o: ['Pizza', 'Burger', 'Cookies'] },
            { q: 'What do we use to make sandwiches?', a: 'Bread', o: ['Soup', 'Cereal', 'Yogurt'] },
            { q: 'Which is sweet?', a: 'Chocolate', o: ['Salt', 'Vinegar', 'Pepper'] },
            { q: 'Which is salty?', a: 'Chips', o: ['Cake', 'Honey', 'Melon'] },
            { q: 'Where do we buy food?', a: 'Supermarket', o: ['Library', 'Cinema', 'Park'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Food',
        questions: [
            { q: 'I eat an [___] a day to be healthy.', a: 'apple' },
            { q: 'I like my coffee with [___] and sugar.', a: 'milk' },
            { q: 'Cats love eating [___].', a: 'fish' },
            { q: 'Monkeys love eating [___].', a: 'bananas' },
            { q: 'A [___] has meat, lettuce, and tomato.', a: 'burger' },
            { q: 'We need [___] to survive (H2O).', a: 'water' },
            { q: 'Bees make [___].', a: 'honey' },
            { q: 'Chickens give us [___].', a: 'eggs' },
            { q: 'Rabbits love [___].', a: 'carrots' },
            { q: 'Mice love [___].', a: 'cheese' }
        ]
    }
]);

fs.writeFileSync(path, JSON.stringify(topics, null, 2));
console.log('A1 Topics 11-15 updated successfully.');
