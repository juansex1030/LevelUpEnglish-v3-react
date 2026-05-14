const fs = require('fs');
const path = 'backend/data/topics.json';
const topics = JSON.parse(fs.readFileSync(path, 'utf8'));

const updateTopic = (number, games) => {
    const t = topics.find(topic => topic.level === 'A1' && topic.number === number);
    if (t) {
        t.premium_practice = JSON.stringify({ games }, null, 2);
    }
};

// --- TOPIC 21: Giving Directions ---
updateTopic(21, [
    {
        type: 'multiple_choice',
        title: 'Finding the Way',
        questions: [
            { q: 'Go [___] on this street.', a: 'straight', o: ['left', 'right', 'back'] },
            { q: 'Take the first [___] on the left.', a: 'turning', o: ['street', 'road', 'corner'] },
            { q: 'Go [___] the bank and the post office.', a: 'past', o: ['under', 'over', 'into'] },
            { q: 'The park is [___] to the library.', a: 'next', o: ['near', 'far', 'between'] },
            { q: 'Turn [___] at the traffic lights.', a: 'right', o: ['straight', 'past', 'across'] },
            { q: 'The cinema is [___] the supermarket.', a: 'opposite', o: ['behind', 'next', 'on'] },
            { q: 'Go [___] the bridge.', a: 'across', o: ['in', 'at', 'between'] },
            { q: 'The museum is [___] the corner.', a: 'on', o: ['at', 'in', 'into'] },
            { q: 'Excuse me, [___] is the station?', a: 'where', o: ['how', 'what', 'when'] },
            { q: 'It\'s about five minutes [___] foot.', a: 'on', o: ['by', 'with', 'in'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Directions Keywords',
        words: ['STRAIGHT', 'CORNER', 'OPPOSITE', 'TRAFFIC', 'BRIDGE', 'STREET', 'LEFT', 'RIGHT', 'BETWEEN', 'BEHIND']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Direction',
        questions: [
            { q: 'Go / past / the / hospital / .', a: 'Go past the hospital.' },
            { q: 'Turn / at / left / the / corner / .', a: 'Turn left at the corner.' },
            { q: 'It / is / next / to / the / bank / .', a: 'It is next to the bank.' },
            { q: 'How / do / I / get / to / the / park / ?', a: 'How do I get to the park?' },
            { q: 'Go / straight / on / for / two / blocks / .', a: 'Go straight on for two blocks.' },
            { q: 'The / library / is / opposite / the / school / .', a: 'The library is opposite the school.' },
            { q: 'Take / the / second / road / on / the / right / .', a: 'Take the second road on the right.' },
            { q: 'Is / there / a / pharmacy / near / here / ?', a: 'Is there a pharmacy near here?' },
            { q: 'Cross / the / street / at / the / lights / .', a: 'Cross the street at the lights.' },
            { q: 'It / is / between / the / cafe / and / the / shop / .', a: 'It is between the cafe and the shop.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Map Vocabulary',
        questions: [
            { q: 'What do you call the place where two streets meet?', a: 'Corner', o: ['Bridge', 'Tunnel', 'Park'] },
            { q: 'What are the red, yellow, and green lights called?', a: 'Traffic lights', o: ['Street lights', 'Car lights'] },
            { q: 'What do you call a path for people to walk over a river?', a: 'Bridge', o: ['Road', 'Highway', 'Square'] },
            { q: 'If a building is "opposite", it is...', a: 'Across the street', o: ['Next to you', 'Behind you'] },
            { q: '"Go straight" means...', a: 'Don\'t turn', o: ['Turn left', 'Turn right'] },
            { q: 'Where do you catch a bus?', a: 'Bus stop', o: ['Bus station', 'Parking lot'] },
            { q: 'What is a "Roundabout"?', a: 'A circular junction', o: ['A long bridge', 'A narrow street'] },
            { q: 'How do you ask for directions politely?', a: 'Excuse me...', o: ['Hey you!', 'Tell me!'] },
            { q: 'If something is "behind", it is...', a: 'At the back', o: ['In front', 'Above'] },
            { q: 'A "Zebra crossing" is for...', a: 'Pedestrians', o: ['Cars', 'Bicycles'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Follow the Instructions',
        questions: [
            { q: 'Go [___] on until you see the park.', a: 'straight' },
            { q: 'Turn [___] at the first corner.', a: 'left' },
            { q: 'The bank is [___] to the cinema.', a: 'next' },
            { q: 'Is it [___] from here? (long distance)', a: 'far' },
            { q: 'Walk [___] the bridge.', a: 'across' },
            { q: 'The shop is [___] the cafe and the post office.', a: 'between' },
            { q: 'Go [___] the supermarket (don\'t stop).', a: 'past' },
            { q: 'It\'s on the [___] side of the road.', a: 'other' },
            { q: '[___] me, where is the museum?', a: 'Excuse' },
            { q: 'You can\'t [___] it, it\'s a huge building.', a: 'miss' }
        ]
    }
]);

// --- TOPIC 22: Superlatives ---
updateTopic(22, [
    {
        type: 'multiple_choice',
        title: 'The Best of the Best',
        questions: [
            { q: 'He is the [___] student in class.', a: 'tallest', o: ['taller', 'tall', 'most tall'] },
            { q: 'Mount Everest is the [___] mountain.', a: 'highest', o: ['higher', 'high', 'most high'] },
            { q: 'This is the [___] book I have ever read.', a: 'best', o: ['better', 'good', 'most good'] },
            { q: 'That was the [___] day of my life.', a: 'worst', o: ['worse', 'bad', 'most bad'] },
            { q: 'She is the [___] girl in the school.', a: 'most beautiful', o: ['beautifulest', 'more beautiful', 'beautifuler'] },
            { q: 'The cheetah is the [___] animal.', a: 'fastest', o: ['faster', 'fast', 'fastly'] },
            { q: 'This is the [___] computer in the shop.', a: 'most expensive', o: ['expensivest', 'more expensive', 'expensive'] },
            { q: 'Russia is the [___] country in the world.', a: 'largest', o: ['larger', 'large', 'most large'] },
            { q: 'He is the [___] person I know.', a: 'funniest', o: ['funnyer', 'more funny', 'funny'] },
            { q: 'It was the [___] exam of the year.', a: 'easiest', o: ['easyer', 'more easy', 'easy'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Superlative Adjectives',
        words: ['BIGGEST', 'SMALLEST', 'FASTEST', 'SLOWEST', 'HAPPIEST', 'SADDEST', 'OLDEST', 'YOUNGEST', 'BEST', 'WORST']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Sentence',
        questions: [
            { q: 'He / is / the / tallest / boy / .', a: 'He is the tallest boy.' },
            { q: 'This / is / the / best / pizza / .', a: 'This is the best pizza.' },
            { q: 'She / is / the / most / intelligent / student / .', a: 'She is the most intelligent student.' },
            { q: 'It / was / the / coldest / day / .', a: 'It was the coldest day.' },
            { q: 'The / blue / whale / is / the / largest / animal / .', a: 'The blue whale is the largest animal.' },
            { q: 'Who / is / the / oldest / person / in / your / family / ?', a: 'Who is the oldest person in your family?' },
            { q: 'That / is / the / most / interesting / movie / .', a: 'That is the most interesting movie.' },
            { q: 'I / am / the / youngest / child / .', a: 'I am the youngest child.' },
            { q: 'Summer / is / the / hottest / season / .', a: 'Summer is the hottest season.' },
            { q: 'What / is / the / most / famous / city / ?', a: 'What is the most famous city?' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Superlative Rules',
        questions: [
            { q: 'What do we add to short adjectives?', a: '-est', o: ['-er', 'most', '-y'] },
            { q: 'What word usually comes before a superlative?', a: 'The', o: ['A', 'An', 'Some'] },
            { q: 'What do we use for long adjectives?', a: 'Most', o: ['-est', 'More', 'Best'] },
            { q: 'Superlative of "Good":', a: 'Best', o: ['Goodest', 'Better', 'Most good'] },
            { q: 'Superlative of "Bad":', a: 'Worst', o: ['Worse', 'Baddest', 'Most bad'] },
            { q: 'Superlative of "Happy":', a: 'Happiest', o: ['Happyest', 'More happy', 'Most happy'] },
            { q: 'Is "the most tallest" correct?', a: 'No', o: ['Yes', 'Only in formal English'] },
            { q: 'Superlative of "Far":', a: 'Farthest/Furthest', o: ['Farer', 'Farest', 'Most far'] },
            { q: 'Superlative of "Hot":', a: 'Hottest', o: ['Hotest', 'Most hot', 'Hotter'] },
            { q: 'Which is correct: "The most beautiful" or "Beautifulest"?', a: 'The most beautiful', o: ['Beautifulest'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'The Ultimate Comparison',
        questions: [
            { q: 'Jupiter is the [___] (large) planet.', a: 'largest' },
            { q: 'I am the [___] (old) in my family.', a: 'oldest' },
            { q: 'This is the [___] (difficult) exercise.', a: 'most difficult' },
            { q: 'What is the [___] (high) building in the city?', a: 'highest' },
            { q: 'That was the [___] (funny) joke!', a: 'funniest' },
            { q: 'Ferrari is the [___] (expensive) car.', a: 'most expensive' },
            { q: 'Who is the [___] (rich) person in the world?', a: 'richest' },
            { q: 'Winter is the [___] (cold) time of the year.', a: 'coldest' },
            { q: 'This is the [___] (bad) coffee ever.', a: 'worst' },
            { q: 'You are my [___] (good) friend.', a: 'best' }
        ]
    }
]);

// --- TOPIC 23: Present Perfect ---
updateTopic(23, [
    {
        type: 'multiple_choice',
        title: 'Have you ever...?',
        questions: [
            { q: 'I [___] my homework.', a: 'have finished', o: ['has finished', 'finished', 'am finished'] },
            { q: 'She [___] to London three times.', a: 'has been', o: ['have been', 'was', 'is been'] },
            { q: 'We [___] that movie before.', a: 'have seen', o: ['has seen', 'saw', 'see'] },
            { q: 'They [___] their keys.', a: 'have lost', o: ['has lost', 'lose', 'lost'] },
            { q: 'He [___] his lunch.', a: 'has eaten', o: ['have eaten', 'eat', 'eats'] },
            { q: 'I [___] never traveled by plane.', a: 'have', o: ['has', 'am', 'was'] },
            { q: 'She [___] lived here for ten years.', a: 'has', o: ['have', 'is', 'was'] },
            { q: '[___] you ever eaten sushi?', a: 'Have', o: ['Has', 'Did', 'Are'] },
            { q: '[___] she visited the Eiffel Tower?', a: 'Has', o: ['Have', 'Did', 'Is'] },
            { q: 'They [___] (not) arrived yet.', a: 'haven\'t', o: ['hasn\'t', 'didn\'t', 'don\'t'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Past Participles',
        words: ['BEEN', 'DONE', 'GONE', 'SEEN', 'EATEN', 'MADE', 'TAKEN', 'WRITTEN', 'SPOKEN', 'KNOWN']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Sentence',
        questions: [
            { q: 'I / have / finished / my / work / .', a: 'I have finished my work.' },
            { q: 'She / has / never / been / to / Italy / .', a: 'She has never been to Italy.' },
            { q: 'We / have / seen / this / film / .', a: 'We have seen this film.' },
            { q: 'They / haven\'t / arrived / yet / .', a: 'They haven\'t arrived yet.' },
            { q: 'Have / you / ever / met / a / famous / person / ?', a: 'Have you ever met a famous person?' },
            { q: 'He / has / lost / his / passport / .', a: 'He has lost his passport.' },
            { q: 'I / have / lived / here / for / years / .', a: 'I have lived here for years.' },
            { q: 'Has / she / called / you / ?', a: 'Has she called you?' },
            { q: 'We / have / bought / a / new / car / .', a: 'We have bought a new car.' },
            { q: 'They / have / already / left / .', a: 'They have already left.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Grammar Rules',
        questions: [
            { q: 'Which auxiliary verb do we use for "I, You, We, They"?', a: 'Have', o: ['Has', 'Do', 'Am'] },
            { q: 'Which auxiliary verb do we use for "He, She, It"?', a: 'Has', o: ['Have', 'Does', 'Is'] },
            { q: 'What form of the verb do we use?', a: 'Past Participle (V3)', o: ['Past Simple (V2)', 'Base Form', '-ing'] },
            { q: 'What is the past participle of "Go"?', a: 'Gone/Been', o: ['Went', 'Goes', 'Going'] },
            { q: 'What is the past participle of "See"?', a: 'Seen', o: ['Saw', 'Seed', 'Sees'] },
            { q: 'Present Perfect is used for...', a: 'Life experiences', o: ['Specific past times', 'Habits'] },
            { q: 'Can we say "I have finished yesterday"?', a: 'No (no specific time)', o: ['Yes', 'Only in American English'] },
            { q: 'Negative of "She has":', a: "She hasn't", o: ["She haven't", "She didn't"] },
            { q: 'Question form of "You have":', a: 'Have you...?', o: ['Has you...?', 'Did you...?'] },
            { q: 'Past participle of "Read" (spelling):', a: 'Read', o: ['Red', 'Readed', 'Reading'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Complete the Experience',
        questions: [
            { q: 'I [___] (see) that movie before.', a: 'have seen' },
            { q: 'She [___] (not / finish) her breakfast.', a: "hasn't finished" },
            { q: 'We [___] (live) here since 2015.', a: 'have lived' },
            { q: 'They [___] (go) to the supermarket.', a: 'have gone' },
            { q: 'He [___] (write) three books.', a: 'has written' },
            { q: '[___] you ever been to Paris?', a: 'Have' },
            { q: 'My dog [___] (eat) my homework!', a: 'has eaten' },
            { q: 'I [___] (never / try) sushi.', a: 'have never tried' },
            { q: '[___] she found her keys?', a: 'Has' },
            { q: 'We [___] (not / meet) him yet.', a: "haven't met" }
        ]
    }
]);

// --- TOPIC 24: Present Perfect vs. Past ---
updateTopic(24, [
    {
        type: 'multiple_choice',
        title: 'Then or Now?',
        questions: [
            { q: 'I [___] to London last year.', a: 'went', o: ['have gone', 'go', 'going'] },
            { q: 'I [___] to London twice.', a: 'have been', o: ['went', 'was', 'am been'] },
            { q: 'She [___] her homework ten minutes ago.', a: 'finished', o: ['has finished', 'finish', 'finishing'] },
            { q: 'She [___] her homework already.', a: 'has finished', o: ['finished', 'finish', 'finishes'] },
            { q: 'They [___] a new car in 2020.', a: 'bought', o: ['have bought', 'buy', 'buying'] },
            { q: 'They [___] a new car recently.', a: 'have bought', o: ['bought', 'buy', 'buys'] },
            { q: 'We [___] him yesterday.', a: 'saw', o: ['have seen', 'see', 'seeing'] },
            { q: 'We [___] him many times.', a: 'have seen', o: ['saw', 'see', 'seeing'] },
            { q: '[___] you see the match last night?', a: 'Did', o: ['Have', 'Do', 'Were'] },
            { q: '[___] you ever seen a lion?', a: 'Have', o: ['Did', 'Do', 'Are'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Time Markers',
        words: ['YESTERDAY', 'AGO', 'ALREADY', 'YET', 'LAST', 'EVER', 'NEVER', 'SINCE', 'FOR', 'JUST']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Sentence',
        questions: [
            { q: 'I / went / to / Paris / last / month / .', a: 'I went to Paris last month.' },
            { q: 'I / have / been / to / Paris / twice / .', a: 'I have been to Paris twice.' },
            { q: 'She / didn\'t / call / me / yesterday / .', a: 'She didn\'t call me yesterday.' },
            { q: 'She / hasn\'t / called / me / yet / .', a: 'She hasn\'t called me yet.' },
            { q: 'Did / you / eat / breakfast / ?', a: 'Did you eat breakfast?' },
            { q: 'Have / you / eaten / breakfast / ?', a: 'Have you eaten breakfast?' },
            { q: 'They / lived / in / Rome / in / 1990 / .', a: 'They lived in Rome in 1990.' },
            { q: 'They / have / lived / here / for / years / .', a: 'They have lived here for years.' },
            { q: 'We / saw / a / movie / last / night / .', a: 'We saw a movie last night.' },
            { q: 'We / have / seen / this / movie / .', a: 'We have seen this movie.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Tense Choice',
        questions: [
            { q: 'Which tense is for a finished time (e.g., yesterday)?', a: 'Past Simple', o: ['Present Perfect'] },
            { q: 'Which tense is for an unfinished time (e.g., today)?', a: 'Present Perfect', o: ['Past Simple'] },
            { q: 'Which tense is for life experiences?', a: 'Present Perfect', o: ['Past Simple'] },
            { q: 'Which tense uses "Did"?', a: 'Past Simple', o: ['Present Perfect'] },
            { q: 'Which tense uses "Have/Has"?', a: 'Present Perfect', o: ['Past Simple'] },
            { q: 'Marker for Past Simple:', a: 'Two days ago', o: ['Never', 'Already', 'Just'] },
            { q: 'Marker for Present Perfect:', a: 'Ever', o: ['Last week', 'In 2010', 'When I was a kid'] },
            { q: 'Which is correct: "I have seen him yesterday"?', a: 'No, "yesterday" needs Past Simple', o: ['Yes'] },
            { q: 'Which is correct: "I saw him three times"?', a: 'Yes (finished actions)', o: ['No'] },
            { q: 'Correct: "Where [___] you born?"', a: 'were', o: ['have been', 'are'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Choose the Tense',
        questions: [
            { q: 'I [___] (buy) this shirt last week.', a: 'bought' },
            { q: 'I [___] (never / be) to America.', a: 'have never been' },
            { q: 'She [___] (live) in London since 2010.', a: 'has lived' },
            { q: 'She [___] (live) in London when she was a student.', a: 'lived' },
            { q: 'We [___] (not / see) him yesterday.', a: "didn't see" },
            { q: 'We [___] (not / see) him for a long time.', a: "haven't seen" },
            { q: '[___] you finish your work yet?', a: 'Have' },
            { q: '[___] you finish your work at 5:00?', a: 'Did' },
            { q: 'They [___] (arrive) five minutes ago.', a: 'arrived' },
            { q: 'They [___] (just / arrive).', a: 'have just arrived' }
        ]
    }
]);

// --- TOPIC 25: Already, Yet, Since & For ---
updateTopic(25, [
    {
        type: 'multiple_choice',
        title: 'Timing Matters',
        questions: [
            { q: 'I have [___] finished my work. It\'s done!', a: 'already', o: ['yet', 'since', 'for'] },
            { q: 'I haven\'t finished my work [___].', a: 'yet', o: ['already', 'since', 'for'] },
            { q: 'I have lived here [___] 2010.', a: 'since', o: ['for', 'already', 'yet'] },
            { q: 'I have lived here [___] ten years.', a: 'for', o: ['since', 'already', 'yet'] },
            { q: 'Have you finished [___]?', a: 'yet', o: ['already', 'since', 'for'] },
            { q: 'He has [___] left the office.', a: 'already', o: ['yet', 'for', 'since'] },
            { q: 'They haven\'t called me [___].', a: 'yet', o: ['already', 'for', 'since'] },
            { q: 'We have known him [___] a long time.', a: 'for', o: ['since', 'yet', 'already'] },
            { q: 'She has been sick [___] Monday.', a: 'since', o: ['for', 'already', 'yet'] },
            { q: 'I have [___] eaten breakfast.', a: 'already', o: ['yet', 'since', 'for'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Timing Keywords',
        words: ['ALREADY', 'YET', 'SINCE', 'FOR', 'JUST', 'EVER', 'NEVER', 'STILL', 'RECENTLY', 'LATELY']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Sentence',
        questions: [
            { q: 'I / have / already / eaten / .', a: 'I have already eaten.' },
            { q: 'I / haven\'t / eaten / yet / .', a: 'I haven\'t eaten yet.' },
            { q: 'We / have / lived / here / since / 2005 / .', a: 'We have lived here since 2005.' },
            { q: 'We / have / lived / here / for / 15 / years / .', a: 'We have lived here for 15 years.' },
            { q: 'Has / she / arrived / yet / ?', a: 'Has she arrived yet?' },
            { q: 'He / has / already / finished / his / book / .', a: 'He has already finished his book.' },
            { q: 'They / have / been / married / for / decades / .', a: 'They have been married for decades.' },
            { q: 'I / haven\'t / seen / him / since / yesterday / .', a: 'I haven\'t seen him since yesterday.' },
            { q: 'Have / you / already / seen / this / ?', a: 'Have you already seen this?' },
            { q: 'She / has / worked / here / since / July / .', a: 'She has worked here since July.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Usage Rules',
        questions: [
            { q: 'Which word is for a period of time (e.g., 3 hours)?', a: 'For', o: ['Since', 'Yet', 'Already'] },
            { q: 'Which word is for a specific point in time (e.g., 9:00)?', a: 'Since', o: ['For', 'Yet', 'Already'] },
            { q: 'Which word goes at the end of negative sentences?', a: 'Yet', o: ['Already', 'Since', 'For'] },
            { q: 'Which word means "sooner than expected"?', a: 'Already', o: ['Yet', 'Since', 'For'] },
            { q: 'Where does "Already" usually go?', a: 'Between have/has and V3', o: ['At the end of the sentence'] },
            { q: 'Which word do we use for "a long time"?', a: 'For', o: ['Since', 'Already', 'Yet'] },
            { q: 'Which word do we use for "last week"?', a: 'Since', o: ['For', 'Already', 'Yet'] },
            { q: 'Can we use "Yet" in questions?', a: 'Yes', o: ['No'] },
            { q: 'Can we use "Already" in negative sentences?', a: 'Usually no', o: ['Yes'] },
            { q: 'Which is correct: "For 2010" or "Since 2010"?', a: 'Since 2010', o: ['For 2010'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Complete the Time',
        questions: [
            { q: 'I have worked here [___] five years.', a: 'for' },
            { q: 'I have worked here [___] 2018.', a: 'since' },
            { q: 'I haven\'t seen the movie [___].', a: 'yet' },
            { q: 'I have [___] seen the movie. It was good.', a: 'already' },
            { q: 'She has been a doctor [___] a long time.', a: 'for' },
            { q: 'They have been here [___] 8:00 AM.', a: 'since' },
            { q: 'Have you called your mom [___]?', a: 'yet' },
            { q: 'We have [___] booked the flights.', a: 'already' },
            { q: 'I haven\'t eaten anything [___] breakfast.', a: 'since' },
            { q: 'He has waited [___] twenty minutes.', a: 'for' }
        ]
    }
]);

fs.writeFileSync(path, JSON.stringify(topics, null, 2));
console.log('Batch 2: A1 Topics 21-25 updated successfully.');
