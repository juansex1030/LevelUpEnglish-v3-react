const fs = require('fs');
const path = 'backend/data/topics.json';
const topics = JSON.parse(fs.readFileSync(path, 'utf8'));

const updateTopic = (level, number, games) => {
    const t = topics.find(topic => topic.level === level && topic.number === number);
    if (t) {
        t.premium_practice = JSON.stringify({ games }, null, 2);
    }
};

// --- TOPIC 21: Passive Voice (Simple Forms) ---
updateTopic('A2', 21, [
    {
        type: 'multiple_choice',
        title: 'Focus on the Object',
        questions: [
            { q: 'The letter [___] by the postman.', a: 'is delivered', o: ['delivers', 'delivered', 'is deliver'] },
            { q: 'The window [___] by the ball yesterday.', a: 'was broken', o: ['broke', 'is broken', 'break'] },
            { q: 'Spanish [___] in many countries.', a: 'is spoken', o: ['speaks', 'spoken', 'is speaking'] },
            { q: 'The house [___] in 1990.', a: 'was built', o: ['built', 'is built', 'build'] },
            { q: 'My car [___] by a mechanic right now.', a: 'is being repaired', o: ['repairs', 'repaired', 'is repair'] },
            { q: 'The books [___] (not) returned yet.', a: 'haven\'t been', o: ['didn\'t', 'aren\'t', 'haven\'t'] },
            { q: 'The thief [___] by the police last night.', a: 'was caught', o: ['caught', 'is caught', 'catches'] },
            { q: 'Rice [___] in Asia.', a: 'is grown', o: ['grows', 'grown', 'is growing'] },
            { q: 'The message [___] five minutes ago.', a: 'was sent', o: ['sent', 'is sent', 'sends'] },
            { q: 'The rooms [___] every day.', a: 'are cleaned', o: ['clean', 'cleaned', 'is cleaning'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Passive Verbs',
        words: ['WRITTEN', 'MADE', 'BUILT', 'SPOKEN', 'TAKEN', 'GIVEN', 'FOUND', 'KEPT', 'DONE', 'CLEANED']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Passive',
        questions: [
            { q: 'The / cake / was / eaten / by / me / .', a: 'The cake was eaten by me.' },
            { q: 'The / letter / was / sent / yesterday / .', a: 'The letter was sent yesterday.' },
            { q: 'Spanish / is / spoken / here / .', a: 'Spanish is spoken here.' },
            { q: 'The / car / was / repaired / .', a: 'The car was repaired.' },
            { q: 'The / house / was / built / in / 1990 / .', a: 'The house was built in 1990.' },
            { q: 'The / room / is / cleaned / daily / .', a: 'The room is cleaned daily.' },
            { q: 'The / book / was / written / by / him / .', a: 'The book was written by him.' },
            { q: 'The / keys / were / found / .', a: 'The keys were found.' },
            { q: 'English / is / taught / in / schools / .', a: 'English is taught in schools.' },
            { q: 'The / window / was / broken / .', a: 'The window was broken.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Passive Rules',
        questions: [
            { q: 'Passive structure:', a: 'Be + Past Participle', o: ['Have + Past Participle', 'Do + Verb'] },
            { q: 'Which word introduces the "agent" (the doer)?', a: 'By', o: ['With', 'From', 'Of'] },
            { q: 'When do we use Passive?', a: 'When the action is more important than the actor', o: ['Always'] },
            { q: 'Passive of "They speak English":', a: 'English is spoken', o: ['English is spoke', 'English speaks'] },
            { q: 'Passive of "He stole the bag":', a: 'The bag was stolen', o: ['The bag is stolen', 'The bag stolen'] },
            { q: 'Past participle of "Write":', a: 'Written', o: ['Wrote', 'Writes'] },
            { q: 'Past participle of "Eat":', a: 'Eaten', o: ['Ate', 'Eating'] },
            { q: 'Past participle of "Take":', a: 'Taken', o: ['Took', 'Taking'] },
            { q: 'Is Passive more formal?', a: 'Yes', o: ['No'] },
            { q: 'Can we say "The car is repair"?', a: 'No (needs V3: repaired)', o: ['Yes'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Action Received',
        questions: [
            { q: 'The book [___] (write) by a famous author.', a: 'was written' },
            { q: 'The rooms [___] (clean) every morning.', a: 'are cleaned' },
            { q: 'Coffee [___] (grow) in Colombia.', a: 'is grown' },
            { q: 'The window [___] (break) by the wind.', a: 'was broken' },
            { q: 'My bike [___] (steal) last night.', a: 'was stolen' },
            { q: 'The result [___] (announce) soon.', a: 'will be announced' },
            { q: 'The pyramids [___] (build) in Egypt.', a: 'were built' },
            { q: 'Many languages [___] (speak) here.', a: 'are spoken' },
            { q: 'The project [___] (finish) on time.', a: 'was finished' },
            { q: 'The letter [___] (send) yesterday.', a: 'was sent' }
        ]
    }
]);

// --- TOPIC 22: Indefinite Pronouns ---
updateTopic('A2', 22, [
    {
        type: 'multiple_choice',
        title: 'Someone or Anyone?',
        questions: [
            { q: '[___] called you on the phone.', a: 'Someone', o: ['Anyone', 'No one', 'Everyone'] },
            { q: 'I don\'t have [___] to eat.', a: 'anything', o: ['something', 'nothing', 'everything'] },
            { q: 'Is there [___] at the door?', a: 'anyone', o: ['someone', 'no one', 'everyone'] },
            { q: '[___] knows the answer. It\'s a secret.', a: 'No one', o: ['Someone', 'Anyone', 'Everyone'] },
            { q: '[___] was happy at the party.', a: 'Everyone', o: ['Someone', 'Anyone', 'No one'] },
            { q: 'I looked [___], but I couldn\'t find my keys.', a: 'everywhere', o: ['somewhere', 'anywhere', 'nowhere'] },
            { q: 'I want to go [___] quiet.', a: 'somewhere', o: ['anywhere', 'everywhere', 'nowhere'] },
            { q: 'There is [___] in the box. It\'s empty.', a: 'nothing', o: ['something', 'anything', 'everything'] },
            { q: 'Does [___] have a pen?', a: 'anyone', o: ['someone', 'no one', 'everyone'] },
            { q: 'I can\'t find my phone [___].', a: 'anywhere', o: ['somewhere', 'everywhere', 'nowhere'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Indefinite Words',
        words: ['SOMEONE', 'ANYTHING', 'NOBODY', 'EVERYWHERE', 'SOMETHING', 'ANYWHERE', 'NOTHING', 'EVERYONE', 'SOMEWHERE', 'ANYONE']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Pronoun',
        questions: [
            { q: 'Someone / is / waiting / for / you / .', a: 'Someone is waiting for you.' },
            { q: 'I / don\'t / have / anything / to / do / .', a: 'I don\'t have anything to do.' },
            { q: 'Is / there / anyone / here / ?', a: 'Is there anyone here?' },
            { q: 'Everything / is / going / to / be / okay / .', a: 'Everything is going to be okay.' },
            { q: 'I / found / it / somewhere / .', a: 'I found it somewhere.' },
            { q: 'No / one / knows / the / truth / .', a: 'No one knows the truth.' },
            { q: 'We / went / everywhere / .', a: 'We went everywhere.' },
            { q: 'There / is / nothing / in / the / fridge / .', a: 'There is nothing in the fridge.' },
            { q: 'Can / anyone / help / me / ?', a: 'Can anyone help me?' },
            { q: 'Something / is / wrong / .', a: 'Something is wrong.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Pronoun Rules',
        questions: [
            { q: 'Use "some-" in...', a: 'Positive sentences', o: ['Negative sentences', 'Questions'] },
            { q: 'Use "any-" in...', a: 'Negative sentences / Questions', o: ['Positive sentences'] },
            { q: 'Use "no-" for...', a: 'Negative meaning in positive verbs', o: ['Positive meaning'] },
            { q: 'Use "every-" for...', a: 'All people/things', o: ['One person'] },
            { q: 'Are indefinite pronouns singular or plural?', a: 'Singular (e.g. Everyone is)', o: ['Plural (e.g. Everyone are)'] },
            { q: 'Which is for people?', a: 'Someone / Anyone / No one', o: ['Something / Anything'] },
            { q: 'Which is for things?', a: 'Something / Anything / Nothing', o: ['Someone / Somewhere'] },
            { q: 'Which is for places?', a: 'Somewhere / Anywhere / Nowhere', o: ['Someone / Something'] },
            { q: 'Can we use "no one" with a negative verb?', a: 'No (no double negative)', o: ['Yes'] },
            { q: 'Correct: "[___] is perfect."', a: 'No one', o: ['Anyone'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Indefinite',
        questions: [
            { q: '[___] (positive person) called you.', a: 'Someone' },
            { q: 'I don\'t want [___] (negative thing) to drink.', a: 'anything' },
            { q: 'Is there [___] (question person) in the room?', a: 'anyone' },
            { q: 'There is [___] (nothing) left.', a: 'nothing' },
            { q: 'I want to go [___] (positive place) sunny.', a: 'somewhere' },
            { q: 'He knows [___] (every person) here.', a: 'everyone' },
            { q: 'I can\'t find my keys [___] (negative place).', a: 'anywhere' },
            { q: '[___] (no person) liked the movie.', a: 'No one' },
            { q: 'Did you see [___] (question thing) interesting?', a: 'anything' },
            { q: 'I have [___] (positive thing) to tell you.', a: 'something' }
        ]
    }
]);

// --- TOPIC 23: Too vs. Enough ---
updateTopic('A2', 23, [
    {
        type: 'multiple_choice',
        title: 'Measure it Right',
        questions: [
            { q: 'This coffee is [___] hot. I can\'t drink it.', a: 'too', o: ['enough', 'as', 'very'] },
            { q: 'I am not tall [___] to reach the shelf.', a: 'enough', o: ['too', 'as', 'very'] },
            { q: 'There is [___] much noise here.', a: 'too', o: ['enough', 'as', 'very'] },
            { q: 'We don\'t have [___] money for a new car.', a: 'enough', o: ['too', 'as', 'very'] },
            { q: 'The exam was [___] difficult.', a: 'too', o: ['enough', 'as', 'very'] },
            { q: 'He is old [___] to drive.', a: 'enough', o: ['too', 'as', 'very'] },
            { q: 'It\'s [___] late to go out.', a: 'too', o: ['enough', 'as', 'very'] },
            { q: 'Are you warm [___]?', a: 'enough', o: ['too', 'as', 'very'] },
            { q: 'You drink [___] much coffee.', a: 'too', o: ['enough', 'as', 'very'] },
            { q: 'I didn\'t sleep [___] last night.', a: 'enough', o: ['too', 'as', 'very'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Quantity Words',
        words: ['TOO', 'ENOUGH', 'MUCH', 'MANY', 'LITTLE', 'PLENTY', 'EXCESS', 'SUFFICE', 'QUITE', 'VERY']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Measure',
        questions: [
            { q: 'It / is / too / hot / .', a: 'It is too hot.' },
            { q: 'I / am / not / old / enough / .', a: 'I am not old enough.' },
            { q: 'There / is / too / much / traffic / .', a: 'There is too much traffic.' },
            { q: 'We / have / enough / food / .', a: 'We have enough food.' },
            { q: 'You / work / too / hard / .', a: 'You work too hard.' },
            { q: 'Is / it / big / enough / ?', a: 'Is it big enough?' },
            { q: 'He / is / too / short / .', a: 'He is too short.' },
            { q: 'I / don\'t / have / enough / time / .', a: 'I don\'t have enough time.' },
            { q: 'The / water / is / warm / enough / .', a: 'The water is warm enough.' },
            { q: 'There / are / too / many / people / .', a: 'There are too many people.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Too/Enough Rules',
        questions: [
            { q: 'Where does "too" go with adjectives?', a: 'Before the adjective', o: ['After the adjective'] },
            { q: 'Where does "enough" go with adjectives?', a: 'After the adjective', o: ['Before the adjective'] },
            { q: 'Where does "enough" go with nouns?', a: 'Before the noun', o: ['After the noun'] },
            { q: 'What does "too" mean?', a: 'More than enough (negative result)', o: ['The right amount'] },
            { q: 'What does "enough" mean?', a: 'Satisfactory amount', o: ['Excessive amount'] },
            { q: 'Correct: "too [___] books."', a: 'many', o: ['much'] },
            { q: 'Correct: "too [___] sugar."', a: 'much', o: ['many'] },
            { q: 'Is "enough big" correct?', a: 'No (big enough)', o: ['Yes'] },
            { q: 'Is "too much people" correct?', a: 'No (too many people)', o: ['Yes'] },
            { q: 'Can we say "not enough tall"?', a: 'No (not tall enough)', o: ['Yes'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Measure',
        questions: [
            { q: 'This shirt is [___] small for me.', a: 'too' },
            { q: 'I haven\'t got [___] money.', a: 'enough' },
            { q: 'The soup is [___] hot to eat.', a: 'too' },
            { q: 'Are you [___] (strong) to lift this?', a: 'strong enough' },
            { q: 'He speaks [___] (fast). I can\'t understand.', a: 'too fast' },
            { q: 'We have [___] (time). Don\'t worry.', a: 'enough time' },
            { q: 'There are [___] (many) people here.', a: 'too many' },
            { q: 'It\'s [___] (expensive). I won\'t buy it.', a: 'too expensive' },
            { q: 'Is the room [___] (large)?', a: 'large enough' },
            { q: 'You eat [___] (much) salt.', a: 'too much' }
        ]
    }
]);

// --- TOPIC 24: So vs. Such ---
updateTopic('A2', 24, [
    {
        type: 'multiple_choice',
        title: 'So or Such?',
        questions: [
            { q: 'She is [___] beautiful!', a: 'so', o: ['such', 'very', 'too'] },
            { q: 'It was [___] a beautiful day!', a: 'such', o: ['so', 'very', 'too'] },
            { q: 'They are [___] nice people!', a: 'such', o: ['so', 'very', 'too'] },
            { q: 'The movie was [___] boring.', a: 'so', o: ['such', 'very', 'too'] },
            { q: 'He is [___] a good teacher.', a: 'such', o: ['so', 'very', 'too'] },
            { q: 'It is [___] hot today.', a: 'so', o: ['such', 'very', 'too'] },
            { q: 'I have [___] much work.', a: 'so', o: ['such', 'very', 'too'] },
            { q: 'It was [___] an interesting story.', a: 'such', o: ['so', 'very', 'too'] },
            { q: 'The food was [___] good.', a: 'so', o: ['such', 'very', 'too'] },
            { q: 'They have [___] a big house.', a: 'such', o: ['so', 'very', 'too'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Emphasis Keywords',
        words: ['SO', 'SUCH', 'VERY', 'REALLY', 'EXTREME', 'EXCESS', 'GREAT', 'TOTAL', 'QUITE', 'RATHER']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Emphasis',
        questions: [
            { q: 'It / is / so / cold / .', a: 'It is so cold.' },
            { q: 'She / is / such / a / nice / girl / .', a: 'She is such a nice girl.' },
            { q: 'The / cake / was / so / delicious / .', a: 'The cake was so delicious.' },
            { q: 'They / are / such / smart / students / .', a: 'They are such smart students.' },
            { q: 'I / am / so / tired / .', a: 'I am so tired.' },
            { q: 'It / was / such / an / easy / test / .', a: 'It was such an easy test.' },
            { q: 'He / is / so / tall / .', a: 'He is so tall.' },
            { q: 'We / had / such / a / good / time / .', a: 'We had such a good time.' },
            { q: 'The / view / is / so / beautiful / .', a: 'The view is so beautiful.' },
            { q: 'It / was / such / a / long / journey / .', a: 'It was such a long journey.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'So/Such Rules',
        questions: [
            { q: 'When do we use "so"?', a: 'Before an adjective/adverb', o: ['Before an adjective + noun'] },
            { q: 'When do we use "such"?', a: 'Before an adjective + noun', o: ['Before an adjective only'] },
            { q: 'Structure for "so":', a: 'So + Adjective', o: ['So + a + Adjective'] },
            { q: 'Structure for "such":', a: 'Such + (a/an) + Adjective + Noun', o: ['Such + Adjective'] },
            { q: 'Correct: "[___] a good day"', a: 'Such', o: ['So'] },
            { q: 'Correct: "[___] good"', a: 'So', o: ['Such'] },
            { q: 'Can we use "so" with "much/many"?', a: 'Yes (so much/so many)', o: ['No'] },
            { q: 'Can we use "such" with "a lot of"?', a: 'Yes', o: ['No'] },
            { q: 'Is "so a big house" correct?', a: 'No (such a big house)', o: ['Yes'] },
            { q: 'Is "such hot" correct?', a: 'No (so hot)', o: ['Yes'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Emphasis',
        questions: [
            { q: 'The music is [___] loud!', a: 'so' },
            { q: 'He is [___] a nice boy.', a: 'such' },
            { q: 'It was [___] an amazing trip.', a: 'such' },
            { q: 'The weather is [___] nice.', a: 'so' },
            { q: 'They are [___] good friends.', a: 'such' },
            { q: 'I was [___] surprised.', a: 'so' },
            { q: 'She has [___] a beautiful voice.', a: 'such' },
            { q: 'It happened [___] quickly.', a: 'so' },
            { q: 'We had [___] a lot of fun.', a: 'such' },
            { q: 'The water is [___] cold.', a: 'so' }
        ]
    }
]);

// --- TOPIC 25: Both, Either, Neither ---
updateTopic('A2', 25, [
    {
        type: 'multiple_choice',
        title: 'Two Options',
        questions: [
            { q: '[___] of the books are good.', a: 'Both', o: ['Either', 'Neither', 'Each'] },
            { q: 'You can have [___] coffee or tea.', a: 'either', o: ['neither', 'both', 'none'] },
            { q: '[___] of my parents is here. They are on holiday.', a: 'Neither', o: ['Both', 'Either', 'None'] },
            { q: 'I like [___] of them.', a: 'both', o: ['either', 'neither', 'none'] },
            { q: 'Neither Jack [___] Jill was there.', a: 'nor', o: ['or', 'and', 'but'] },
            { q: 'Either you stay [___] you go.', a: 'or', o: ['nor', 'and', 'but'] },
            { q: '[___] of us knew the answer.', a: 'Neither', o: ['Both', 'Either', 'None'] },
            { q: 'Do you want [___] of these?', a: 'either', o: ['neither', 'both', 'none'] },
            { q: '[___] brothers are doctors.', a: 'Both', o: ['Either', 'Neither', 'Each'] },
            { q: 'I can\'t find [___] of my keys.', a: 'either', o: ['neither', 'both', 'none'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Dual Keywords',
        words: ['BOTH', 'EITHER', 'NEITHER', 'OPTIONS', 'CHOICE', 'PAIR', 'COUPLE', 'SELECT', 'MATCH', 'DUAL']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Pair',
        questions: [
            { q: 'Both / of / them / are / here / .', a: 'Both of them are here.' },
            { q: 'Either / you / or / me / .', a: 'Either you or me.' },
            { q: 'Neither / of / us / knows / .', a: 'Neither of us knows.' },
            { q: 'We / like / both / books / .', a: 'We like both books.' },
            { q: 'You / can / take / either / one / .', a: 'You can take either one.' },
            { q: 'Neither / my / mom / nor / my / dad / came / .', a: 'Neither my mom nor my dad came.' },
            { q: 'Both / sisters / are / tall / .', a: 'Both sisters are tall.' },
            { q: 'I / don\'t / want / either / of / them / .', a: 'I don\'t want either of them.' },
            { q: 'Neither / of / the / cars / is / new / .', a: 'Neither of the cars is new.' },
            { q: 'They / bought / both / houses / .', a: 'They bought both houses.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Dual Rules',
        questions: [
            { q: 'What does "Both" mean?', a: 'The two together', o: ['One or the other', 'Not one and not the other'] },
            { q: 'What does "Either" mean?', a: 'One or the other', o: ['The two together', 'None of the two'] },
            { q: 'What does "Neither" mean?', a: 'Not one and not the other', o: ['One or the other'] },
            { q: 'Which word goes with "Either"?', a: 'Or', o: ['Nor', 'And'] },
            { q: 'Which word goes with "Neither"?', a: 'Nor', o: ['Or', 'And'] },
            { q: 'Which word goes with "Both"?', a: 'And', o: ['Or', 'Nor'] },
            { q: 'Is "Neither of us are" correct?', a: 'Technically "is" (singular)', o: ['Yes ("are")'] },
            { q: 'Can we say "I don\'t like neither"?', a: 'No (double negative)', o: ['Yes'] },
            { q: 'Correct: "I like [___] coffee and tea."', a: 'both', o: ['either'] },
            { q: 'Correct: "[___] of them was ready."', a: 'Neither', o: ['Both'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Pair',
        questions: [
            { q: '[___] of my parents are teachers.', a: 'Both' },
            { q: 'You can choose [___] the red one or the blue one.', a: 'either' },
            { q: '[___] of the two movies was good.', a: 'Neither' },
            { q: 'Both my brother [___] my sister are here.', a: 'and' },
            { q: 'Neither the car [___] the bike is working.', a: 'nor' },
            { q: 'Do you like [___] of these options?', a: 'either' },
            { q: 'I have [___] of the books.', a: 'both' },
            { q: 'I don\'t like [___] of them.', a: 'either' },
            { q: 'Neither of us [___] (be) happy.', a: 'is' },
            { q: '[___] John nor Mary called.', a: 'Neither' }
        ]
    }
]);

fs.writeFileSync(path, JSON.stringify(topics, null, 2));
console.log('Batch 8: A2 Topics 21-25 updated successfully.');
