const fs = require('fs');
const path = 'backend/data/topics.json';
const topics = JSON.parse(fs.readFileSync(path, 'utf8'));

const updateTopic = (level, number, games) => {
    const t = topics.find(topic => topic.level === level && topic.number === number);
    if (t) {
        t.premium_practice = JSON.stringify({ games }, null, 2);
    }
};

// --- TOPIC 1: There was / There were ---
updateTopic('A2', 1, [
    {
        type: 'multiple_choice',
        title: 'Past Existence',
        questions: [
            { q: '[___] a big tree in our garden.', a: 'There was', o: ['There were', 'There is', 'There are'] },
            { q: '[___] many people at the party.', a: 'There were', o: ['There was', 'There is', 'There are'] },
            { q: '[___] any milk in the fridge?', a: 'Was there', o: ['Were there', 'Is there', 'Are there'] },
            { q: '[___] any cars on the street?', a: 'Were there', o: ['Was there', 'Is there', 'Are there'] },
            { q: '[___] a bank near the park.', a: 'There was', o: ['There were', 'There has', 'There had'] },
            { q: '[___] three dogs in the house.', a: 'There were', o: ['There was', 'There been', 'There had'] },
            { q: 'There [___] (not) any problems.', a: 'weren\'t', o: ['wasn\'t', 'isn\'t', 'didn\'t'] },
            { q: 'There [___] (not) a phone on the table.', a: 'wasn\'t', o: ['weren\'t', 'don\'t', 'didn\'t'] },
            { q: '[___] much traffic yesterday?', a: 'Was there', o: ['Were there', 'Did there', 'Is there'] },
            { q: '[___] any mistakes in the email?', a: 'Were there', o: ['Was there', 'Had there', 'Did there'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Past Existence Words',
        words: ['THERE', 'WAS', 'WERE', 'ANY', 'SOME', 'MANY', 'MUCH', 'PEOPLE', 'THINGS', 'EXIST']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Sentence',
        questions: [
            { q: 'There / was / a / book / on / the / table / .', a: 'There was a book on the table.' },
            { q: 'There / were / many / flowers / in / the / garden / .', a: 'There were many flowers in the garden.' },
            { q: 'Was / there / a / problem / with / the / car / ?', a: 'Was there a problem with the car?' },
            { q: 'There / weren\'t / any / students / in / class / .', a: 'There weren\'t any students in class.' },
            { q: 'There / was / no / water / in / the / bottle / .', a: 'There was no water in the bottle.' },
            { q: 'Were / there / any / messages / for / me / ?', a: 'Were there any messages for me?' },
            { q: 'There / were / two / chairs / in / the / room / .', a: 'There were two chairs in the room.' },
            { q: 'There / wasn\'t / much / time / left / .', a: 'There wasn\'t much time left.' },
            { q: 'Was / there / anyone / at / the / door / ?', a: 'Was there anyone at the door?' },
            { q: 'There / were / some / apples / on / the / tree / .', a: 'There were some apples on the tree.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'There was/were Rules',
        questions: [
            { q: 'When do we use "There was"?', a: 'With singular nouns', o: ['With plural nouns', 'With all nouns'] },
            { q: 'When do we use "There were"?', a: 'With plural nouns', o: ['With singular nouns', 'With uncountable nouns'] },
            { q: 'What is the negative of "There was"?', a: 'There wasn\'t', o: ['There didn\'t', 'There not was'] },
            { q: 'What is the negative of "There were"?', a: 'There weren\'t', o: ['There didn\'t', 'There not were'] },
            { q: 'How do you ask a question with "There was"?', a: 'Was there...?', o: ['Did there...?', 'There was...?'] },
            { q: 'How do you ask a question with "There were"?', a: 'Were there...?', o: ['Did there...?', 'There were...?'] },
            { q: 'Is "much" used with "There was" or "There were"?', a: 'There was (uncountable)', o: ['There were'] },
            { q: 'Is "many" used with "There was" or "There were"?', a: 'There were (countable plural)', o: ['There was'] },
            { q: 'Correct: "[___] any milk?"', a: 'Was there', o: ['Were there'] },
            { q: 'Correct: "[___] any people?"', a: 'Were there', o: ['Was there'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Past Presence',
        questions: [
            { q: 'There [___] (be) a cat on the sofa.', a: 'was' },
            { q: 'There [___] (be) two dogs in the yard.', a: 'were' },
            { q: '[___] (be) there any coffee left?', a: 'Was' },
            { q: 'There [___] (not / be) many people at the concert.', a: "weren't" },
            { q: 'There [___] (not / be) a single mistake.', a: "wasn't" },
            { q: '[___] (be) there any eggs in the fridge?', a: 'Were' },
            { q: 'There [___] (be) a lot of noise last night.', a: 'was' },
            { q: 'There [___] (be) several reasons for the delay.', a: 'were' },
            { q: 'There [___] (not / be) any sugar in my tea.', a: "wasn't" },
            { q: 'Was [___] anyone you knew at the party?', a: 'there' }
        ]
    }
]);

// --- TOPIC 2: Used to + infinitive ---
updateTopic('A2', 2, [
    {
        type: 'multiple_choice',
        title: 'Past Habits',
        questions: [
            { q: 'I [___] play football every day when I was a kid.', a: 'used to', o: ['use to', 'am used to', 'was used to'] },
            { q: 'She [___] (not) like coffee, but now she loves it.', a: 'didn\'t use to', o: ['didn\'t used to', 'not used to', 'used to not'] },
            { q: '[___] you use to live in London?', a: 'Did', o: ['Do', 'Were', 'Have'] },
            { q: 'He [___] have long hair.', a: 'used to', o: ['use to', 'was used to', 'used'] },
            { q: 'We [___] go to the beach every summer.', a: 'used to', o: ['use to', 'were used to', 'did used to'] },
            { q: 'They [___] (not) travel much before.', a: 'didn\'t use to', o: ['didn\'t used to', 'not used to', 'use to not'] },
            { q: 'Did she [___] work at the bank?', a: 'use to', o: ['used to', 'using to', 'uses to'] },
            { q: 'I [___] swim in this river.', a: 'used to', o: ['use to', 'was used to', 'am used to'] },
            { q: 'There [___] be a park here.', a: 'used to', o: ['use to', 'used', 'was used to'] },
            { q: 'Where [___] you use to go for holidays?', a: 'did', o: ['do', 'were', 'had'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Habit Keywords',
        words: ['USED', 'PAST', 'HABIT', 'BEFORE', 'CHANGES', 'ALWAYS', 'OFTEN', 'LONG', 'TIME', 'AGO']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Habit',
        questions: [
            { q: 'I / used / to / play / tennis / .', a: 'I used to play tennis.' },
            { q: 'She / didn\'t / use / to / like / fish / .', a: 'She didn\'t use to like fish.' },
            { q: 'Did / you / use / to / smoke / ?', a: 'Did you use to smoke?' },
            { q: 'He / used / to / live / in / Spain / .', a: 'He used to live in Spain.' },
            { q: 'We / used / to / go / to / the / cinema / .', a: 'We used to go to the cinema.' },
            { q: 'They / didn\'t / use / to / have / a / car / .', a: 'They didn\'t use to have a car.' },
            { q: 'Did / he / use / to / be / a / teacher / ?', a: 'Did he use to be a teacher?' },
            { q: 'There / used / to / be / a / factory / here / .', a: 'There used to be a factory here.' },
            { q: 'I / used / to / have / a / cat / .', a: 'I used to have a cat.' },
            { q: 'Where / did / you / use / to / work / ?', a: 'Where did you use to work?' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Used to Rules',
        questions: [
            { q: 'What is "used to" used for?', a: 'Past habits/states', o: ['Present habits', 'Future plans'] },
            { q: 'What follows "used to"?', a: 'Infinitive (without "to")', o: ['Verb with -ing', 'Verb with -ed'] },
            { q: 'Negative form: "I [___] use to."', a: "didn't", o: ["don't", "not", "wasn't"] },
            { q: 'In negative/questions, do we keep the "d" in "used"?', a: 'No, it becomes "use to"', o: ['Yes, it stays "used to"'] },
            { q: 'Question form: "[___] you use to...?"', a: 'Did', o: ['Do', 'Were', 'Have'] },
            { q: 'Can "used to" be used for the present?', a: 'No', o: ['Yes'] },
            { q: 'Does "used to" imply the action still happens?', a: 'No, it implies it stopped', o: ['Yes'] },
            { q: 'Correct: "I [___] to like it."', a: 'used', o: ['use', 'used to'] },
            { q: 'Correct: "She [___] to have a dog."', a: 'used', o: ['use', 'used to'] },
            { q: 'Can we use "used to" for a one-time event?', a: 'No (use Past Simple)', o: ['Yes'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Habit',
        questions: [
            { q: 'I [___] (used to / play) the piano.', a: 'used to play' },
            { q: 'She [___] (not / use to / like) salad.', a: "didn't use to like" },
            { q: '[___] you use to live here?', a: 'Did' },
            { q: 'He [___] (used to / have) a beard.', a: 'used to have' },
            { q: 'We [___] (used to / go) skiing in winter.', a: 'used to go' },
            { q: 'They [___] (not / use to / work) together.', a: "didn't use to work" },
            { q: 'Did he [___] be your friend?', a: 'use to' },
            { q: 'I [___] (used to / think) English was hard.', a: 'used to think' },
            { q: 'There [___] (used to / be) more shops here.', a: 'used to be' },
            { q: 'Where did you [___] go to school?', a: 'use to' }
        ]
    }
]);

// --- TOPIC 3: Past Simple vs. Past Continuous ---
updateTopic('A2', 3, [
    {
        type: 'multiple_choice',
        title: 'Action or Background?',
        questions: [
            { q: 'I [___] TV when the phone rang.', a: 'was watching', o: ['watched', 'watch', 'am watching'] },
            { q: 'She [___] down the street when she saw him.', a: 'was walking', o: ['walked', 'walks', 'is walking'] },
            { q: 'The phone [___] while I was having a shower.', a: 'rang', o: ['was ringing', 'ring', 'rings'] },
            { q: 'They [___] dinner when the lights went out.', a: 'were eating', o: ['ate', 'eat', 'are eating'] },
            { q: 'It [___] when I left the house.', a: 'was raining', o: ['rained', 'rains', 'is raining'] },
            { q: 'I saw him while I [___] for the bus.', a: 'was waiting', o: ['waited', 'wait', 'am waiting'] },
            { q: 'He [___] his leg while he was playing football.', a: 'broke', o: ['was breaking', 'break', 'breaks'] },
            { q: 'We [___] about the party when she came in.', a: 'were talking', o: ['talked', 'talk', 'are talking'] },
            { q: 'She [___] a book when the door opened.', a: 'was reading', o: ['read', 'reads', 'is reading'] },
            { q: 'I [___] a noise while I was sleeping.', a: 'heard', o: ['was hearing', 'hear', 'hears'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Tense Keywords',
        words: ['WHILE', 'WHEN', 'WATCHING', 'READING', 'WALKING', 'SUDDENLY', 'BACKGROUND', 'ACTION', 'FINISHED', 'CONTINUOUS']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Sequence',
        questions: [
            { q: 'I / was / sleeping / when / you / called / .', a: 'I was sleeping when you called.' },
            { q: 'She / was / cooking / while / he / was / working / .', a: 'She was cooking while he was working.' },
            { q: 'The / bus / arrived / while / I / was / waiting / .', a: 'The bus arrived while I was waiting.' },
            { q: 'He / broke / his / arm / while / he / was / skating / .', a: 'He broke his arm while he was skating.' },
            { q: 'We / were / watching / TV / when / it / started / raining / .', a: 'We were watching TV when it started raining.' },
            { q: 'What / were / you / doing / when / I / saw / you / ?', a: 'What were you doing when I saw you?' },
            { q: 'I / was / reading / while / she / was / singing / .', a: 'I was reading while she was singing.' },
            { q: 'It / was / snowing / when / we / left / .', a: 'It was snowing when we left.' },
            { q: 'They / were / talking / when / I / entered / .', a: 'They were talking when I entered.' },
            { q: 'I / lost / my / wallet / while / I / was / shopping / .', a: 'I lost my wallet while I was shopping.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Tense Rules',
        questions: [
            { q: 'Which tense is for a finished action in the past?', a: 'Past Simple', o: ['Past Continuous'] },
            { q: 'Which tense is for an action in progress?', a: 'Past Continuous', o: ['Past Simple'] },
            { q: 'Which word often introduces Past Continuous?', a: 'While', o: ['When', 'Suddenly'] },
            { q: 'Which word often introduces Past Simple?', a: 'When / Suddenly', o: ['While', 'Background'] },
            { q: 'What is the form of Past Continuous?', a: 'Was/Were + Verb-ing', o: ['Was/Were + Verb-ed'] },
            { q: 'Can we say "I was hearing a noise"?', a: 'Usually no ("hear" is stative)', o: ['Yes'] },
            { q: 'Which tense describes the "background" of a story?', a: 'Past Continuous', o: ['Past Simple'] },
            { q: 'Which tense describes the "main events"?', a: 'Past Simple', o: ['Past Continuous'] },
            { q: 'Correct: "I [___] (walk) when I [___] (fall)."', a: 'was walking / fell', o: ['walked / was falling'] },
            { q: 'Correct: "While I [___] (cook), the phone [___] (ring)."', a: 'was cooking / rang', o: ['cooked / was ringing'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Complete the Story',
        questions: [
            { q: 'I [___] (work) when the computer crashed.', a: 'was working' },
            { q: 'She [___] (see) the accident while she was waiting.', a: 'saw' },
            { q: 'We [___] (have) dinner when the lights went out.', a: 'were having' },
            { q: 'The cat [___] (jump) onto the table while I was reading.', a: 'jumped' },
            { q: 'It [___] (rain) when I woke up.', a: 'was raining' },
            { q: 'He [___] (lose) his keys while he was running.', a: 'lost' },
            { q: 'What [___] you [___] (do) when you heard the news?', a: 'were you doing' },
            { q: 'They [___] (sleep) when the fire started.', a: 'were sleeping' },
            { q: 'I [___] (find) some money while I was cleaning.', a: 'found' },
            { q: 'The kids [___] (play) outside when it began to snow.', a: 'were playing' }
        ]
    }
]);

// --- TOPIC 4: Comparisons and Evaluations ---
updateTopic('A2', 4, [
    {
        type: 'multiple_choice',
        title: 'Better or Worse?',
        questions: [
            { q: 'This car is [___] than my old one.', a: 'more expensive', o: ['expensiver', 'as expensive', 'expensive'] },
            { q: 'Your phone is [___] as mine.', a: 'as good', o: ['better', 'the best', 'gooder'] },
            { q: 'He isn\'t [___] as his brother.', a: 'as tall', o: ['taller', 'tallest', 'more tall'] },
            { q: 'This house is too [___] for us.', a: 'small', o: ['smaller', 'smallest', 'more small'] },
            { q: 'The exam wasn\'t [___] enough.', a: 'easy', o: ['easier', 'easiest', 'as easy'] },
            { q: 'I am [___] than you.', a: 'happier', o: ['more happy', 'as happy', 'happyer'] },
            { q: 'This movie is [___] than the last one.', a: 'worse', o: ['badder', 'as bad', 'the worst'] },
            { q: 'She is [___] beautiful than her sister.', a: 'more', o: ['as', 'most', 'too'] },
            { q: 'It\'s not [___] hot today as it was yesterday.', a: 'as', o: ['more', 'too', 'than'] },
            { q: 'This coffee is [___] hot to drink.', a: 'too', o: ['enough', 'as', 'more'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Evaluation Words',
        words: ['BETTER', 'WORSE', 'ENOUGH', 'THAN', 'EITHER', 'NEITHER', 'BOTH', 'SAME', 'DIFFERENT', 'SIMILAR']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Comparison',
        questions: [
            { q: 'This / is / better / than / that / .', a: 'This is better than that.' },
            { q: 'He / is / as / tall / as / me / .', a: 'He is as tall as me.' },
            { q: 'It / is / too / cold / today / .', a: 'It is too cold today.' },
            { q: 'I / am / not / old / enough / .', a: 'I am not old enough.' },
            { q: 'Your / car / is / faster / than / mine / .', a: 'Your car is faster than mine.' },
            { q: 'She / is / more / beautiful / than / her / sister / .', a: 'She is more beautiful than her sister.' },
            { q: 'It / isn\'t / as / good / as / I / thought / .', a: 'It isn\'t as good as I thought.' },
            { q: 'This / is / the / best / day / ever / .', a: 'This is the best day ever.' },
            { q: 'He / works / harder / than / her / .', a: 'He works harder than her.' },
            { q: 'The / house / is / big / enough / .', a: 'The house is big enough.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Comparison Rules',
        questions: [
            { q: 'What word do we use after a comparative?', a: 'Than', o: ['That', 'Then', 'Like'] },
            { q: 'What structure do we use for equality?', a: 'As + Adj + As', o: ['More + Adj + Than', 'The + Adj + Est'] },
            { q: 'What word means "more than what is needed"?', a: 'Too', o: ['Enough', 'As', 'Very'] },
            { q: 'What word means "the right amount"?', a: 'Enough', o: ['Too', 'As', 'Quite'] },
            { q: 'Where does "enough" go with adjectives?', a: 'After the adjective', o: ['Before the adjective'] },
            { q: 'Where does "too" go with adjectives?', a: 'Before the adjective', o: ['After the adjective'] },
            { q: 'Comparative of "Bad":', a: 'Worse', o: ['Badder', 'Worst', 'More bad'] },
            { q: 'Is "as better as" correct?', a: 'No (use "as good as")', o: ['Yes'] },
            { q: 'Correct: "I am [___] than him."', a: 'older', o: ['more old', 'as old'] },
            { q: 'Correct: "It is [___] hot."', a: 'too', o: ['enough', 'as'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Compare the Items',
        questions: [
            { q: 'My car is [___] (fast) than yours.', a: 'faster' },
            { q: 'He is [___] (tall) as his father.', a: 'as tall' },
            { q: 'The shoes are [___] (big) for me.', a: 'too big' },
            { q: 'I am not strong [___] to lift this.', a: 'enough' },
            { q: 'This book is [___] (interesting) than that one.', a: 'more interesting' },
            { q: 'Today is [___] (hot) than yesterday.', a: 'hotter' },
            { q: 'She is [___] (happy) now.', a: 'happier' },
            { q: 'It isn\'t [___] expensive as it looks.', a: 'as' },
            { q: 'This cake is [___] sweet for me.', a: 'too' },
            { q: 'We have [___] (good) results than last year.', a: 'better' }
        ]
    }
]);

// --- TOPIC 5: Wish + Past Tense ---
updateTopic('A2', 5, [
    {
        type: 'multiple_choice',
        title: 'Dreaming of Change',
        questions: [
            { q: 'I wish I [___] more money.', a: 'had', o: ['have', 'has', 'am having'] },
            { q: 'She wishes she [___] speak French.', a: 'could', o: ['can', 'is', 'does'] },
            { q: 'I wish I [___] taller.', a: 'were / was', o: ['am', 'be', 'are'] },
            { q: 'They wish they [___] in a bigger house.', a: 'lived', o: ['live', 'lives', 'are living'] },
            { q: 'I wish it [___] (not) raining.', a: 'stopped', o: ['stop', 'stops', 'is stopping'] },
            { q: 'He wishes he [___] a car.', a: 'had', o: ['has', 'have', 'is having'] },
            { q: 'I wish you [___] here.', a: 'were', o: ['are', 'be', 'been'] },
            { q: 'She wishes she [___] a better job.', a: 'found', o: ['finds', 'find', 'finding'] },
            { q: 'We wish we [___] travel more.', a: 'could', o: ['can', 'will', 'do'] },
            { q: 'I wish I [___] the answer.', a: 'knew', o: ['know', 'knows', 'knowing'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Wish Keywords',
        words: ['WISH', 'DREAM', 'CHANGE', 'COULD', 'WOULD', 'WERE', 'HAD', 'REGRET', 'IMAGINE', 'FUTURE']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Wish',
        questions: [
            { q: 'I / wish / I / were / rich / .', a: 'I wish I were rich.' },
            { q: 'She / wishes / she / had / a / cat / .', a: 'She wishes she had a cat.' },
            { q: 'I / wish / it / would / stop / raining / .', a: 'I wish it would stop raining.' },
            { q: 'We / wish / we / could / fly / .', a: 'We wish we could fly.' },
            { q: 'He / wishes / he / knew / the / truth / .', a: 'He wishes he knew the truth.' },
            { q: 'I / wish / I / had / more / time / .', a: 'I wish I had more time.' },
            { q: 'They / wish / they / lived / in / Paris / .', a: 'They wish they lived in Paris.' },
            { q: 'She / wishes / she / could / sing / .', a: 'She wishes she could sing.' },
            { q: 'I / wish / you / were / here / .', a: 'I wish you were here.' },
            { q: 'I / wish / I / didn\'t / have / to / work / .', a: 'I wish I didn\'t have to work.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Wish Rules',
        questions: [
            { q: 'What tense do we use after "wish" for the present?', a: 'Past Simple', o: ['Present Simple', 'Future Simple'] },
            { q: 'What modal do we use after "wish" for ability?', a: 'Could', o: ['Can', 'Should', 'Must'] },
            { q: 'What modal do we use after "wish" for behavior change?', a: 'Would', o: ['Will', 'Should', 'Must'] },
            { q: 'In "I wish I [___] rich", which form of "be" is most common?', a: 'Were', o: ['Was', 'Am', 'Be'] },
            { q: 'Does "I wish I had a car" mean I have a car?', a: 'No, I don\'t have one', o: ['Yes, I have one'] },
            { q: 'Is "I wish I have" correct?', a: 'No (needs Past Simple)', o: ['Yes'] },
            { q: 'Wishes about the present are...', a: 'Imaginary / Not true', o: ['Real possibilities'] },
            { q: 'Correct: "She [___] she was taller."', a: 'wishes', o: ['wish', 'wished'] },
            { q: 'Correct: "I wish I [___] (know) him."', a: 'knew', o: ['knowed', 'know'] },
            { q: 'Correct: "I wish I [___] (go) to the party."', a: 'went', o: ['go', 'goes'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Express your Wishes',
        questions: [
            { q: 'I wish I [___] (have) a faster computer.', a: 'had' },
            { q: 'She wishes she [___] (can) swim.', a: 'could' },
            { q: 'I wish I [___] (be) on vacation now.', a: 'were' },
            { q: 'He wishes he [___] (live) in a warmer country.', a: 'lived' },
            { q: 'We wish we [___] (have) more free time.', a: 'had' },
            { q: 'I wish you [___] (not / make) so much noise.', a: "didn't make" },
            { q: 'They wish they [___] (know) the answer.', a: 'knew' },
            { q: 'She wishes she [___] (be) taller.', a: 'were' },
            { q: 'I wish I [___] (not / have) a headache.', a: "didn't have" },
            { q: 'I wish it [___] (be) Friday.', a: 'were' }
        ]
    }
]);

fs.writeFileSync(path, JSON.stringify(topics, null, 2));
console.log('Batch 4: A2 Topics 1-5 updated successfully.');
