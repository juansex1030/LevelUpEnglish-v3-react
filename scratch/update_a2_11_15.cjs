const fs = require('fs');
const path = 'backend/data/topics.json';
const topics = JSON.parse(fs.readFileSync(path, 'utf8'));

const updateTopic = (level, number, games) => {
    const t = topics.find(topic => topic.level === level && topic.number === number);
    if (t) {
        t.premium_practice = JSON.stringify({ games }, null, 2);
    }
};

// --- TOPIC 11: Phrasal Verbs - Separable and Non-Separable ---
updateTopic('A2', 11, [
    {
        type: 'multiple_choice',
        title: 'Verb + Preposition',
        questions: [
            { q: 'Please [___] the light. It\'s too dark.', a: 'turn on', o: ['turn off', 'turn in', 'turn up'] },
            { q: 'Don\'t forget to [___] your shoes before entering.', a: 'take off', o: ['take on', 'take in', 'take up'] },
            { q: 'I need to [___] this word in the dictionary.', a: 'look up', o: ['look down', 'look for', 'look into'] },
            { q: 'She [___] (not) get along with her brother.', a: 'doesn\'t', o: ['isn\'t', 'don\'t', 'not'] },
            { q: 'Can you [___] the music? I\'m studying.', a: 'turn down', o: ['turn up', 'turn on', 'turn in'] },
            { q: 'He [___] his father. They look exactly the same.', a: 'takes after', o: ['takes on', 'takes off', 'takes in'] },
            { q: 'We [___] (ran) out of milk. Can you buy some?', a: 'ran', o: ['runned', 'runs', 'running'] },
            { q: 'Please [___] the form.', a: 'fill in', o: ['fill off', 'fill up', 'fill down'] },
            { q: 'I [___] early every morning.', a: 'wake up', o: ['wake off', 'wake in', 'wake on'] },
            { q: 'They [___] (give) up smoking.', a: 'gave', o: ['give', 'gives', 'giving'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Phrasal Verb Keywords',
        words: ['TURN', 'TAKE', 'LOOK', 'GIVE', 'FILL', 'PICK', 'PUT', 'GET', 'WAKE', 'BREAK']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Phrasal',
        questions: [
            { q: 'Turn / off / the / TV / .', a: 'Turn off the TV.' },
            { q: 'I / need / to / look / it / up / .', a: 'I need to look it up.' },
            { q: 'He / takes / after / his / dad / .', a: 'He takes after his dad.' },
            { q: 'Don\'t / give / up / now / !', a: 'Don\'t give up now!' },
            { q: 'Wake / me / up / at / seven / .', a: 'Wake me up at seven.' },
            { q: 'Can / you / fill / in / this / form / ?', a: 'Can you fill in this form?' },
            { q: 'She / got / on / the / bus / .', a: 'She got on the bus.' },
            { q: 'I / ran / into / an / old / friend / .', a: 'I ran into an old friend.' },
            { q: 'Please / pick / up / your / toys / .', a: 'Please pick up your toys.' },
            { q: 'Put / on / your / coat / .', a: 'Put on your coat.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Phrasal Rules',
        questions: [
            { q: 'What is a "Phrasal Verb"?', a: 'Verb + Adverb/Preposition', o: ['Noun + Verb', 'Adjective + Noun'] },
            { q: 'Can we separate "turn on"? (Turn the TV on)', a: 'Yes', o: ['No'] },
            { q: 'Can we separate "get on" (the bus)?', a: 'No', o: ['Yes'] },
            { q: 'What happens to the meaning?', a: 'It often changes completely', o: ['It stays the same'] },
            { q: 'If the object is a pronoun (it/me), where does it go in separable verbs?', a: 'In the middle (e.g. Turn it off)', o: ['At the end'] },
            { q: 'Meaning of "look for":', a: 'Search', o: ['Search in a book', 'Wait'] },
            { q: 'Meaning of "look up":', a: 'Search in a reference', o: ['Search on the floor'] },
            { q: 'Meaning of "give up":', a: 'Stop doing something', o: ['Give a present'] },
            { q: 'Meaning of "run out of":', a: 'Have no more left', o: ['Run fast outside'] },
            { q: 'Meaning of "break up":', a: 'End a relationship', o: ['Fix something'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Complete the Verb',
        questions: [
            { q: 'Please [___] (stop) the radio.', a: 'turn off' },
            { q: 'I [___] (search) for my keys.', a: 'am looking' },
            { q: 'He [___] (resembles) his mother.', a: 'takes after' },
            { q: 'Can you [___] (collect) the kids from school?', a: 'pick up' },
            { q: 'We [___] (no more) coffee.', a: 'ran out of' },
            { q: '[___] (put) your hat on, it\'s cold.', a: 'Put' },
            { q: 'I [___] (start/awaken) at 6:00.', a: 'wake up' },
            { q: 'Don\'t [___] (surrender).', a: 'give up' },
            { q: 'She [___] (entered) the car.', a: 'got in' },
            { q: 'Please [___] (complete) the document.', a: 'fill in' }
        ]
    }
]);

// --- TOPIC 12: Quantifiers ---
updateTopic('A2', 12, [
    {
        type: 'multiple_choice',
        title: 'How many / How much?',
        questions: [
            { q: 'How [___] sugar do you want?', a: 'much', o: ['many', 'few', 'little'] },
            { q: 'How [___] apples are there?', a: 'many', o: ['much', 'any', 'little'] },
            { q: 'I have [___] friends in London.', a: 'a few', o: ['a little', 'much', 'any'] },
            { q: 'There is [___] milk in the fridge.', a: 'a little', o: ['a few', 'many', 'any'] },
            { q: 'We don\'t have [___] money.', a: 'any', o: ['some', 'many', 'few'] },
            { q: 'I have [___] news for you.', a: 'some', o: ['any', 'many', 'few'] },
            { q: 'There are [___] people at the party.', a: 'a lot of', o: ['much', 'any', 'little'] },
            { q: 'I have [___] time to finish.', a: 'very little', o: ['very few', 'many', 'any'] },
            { q: 'Are there [___] eggs?', a: 'any', o: ['some', 'much', 'little'] },
            { q: 'There are [___] cars on the road today.', a: 'too many', o: ['too much', 'any', 'little'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Quantifier Keywords',
        words: ['MANY', 'MUCH', 'SOME', 'ANY', 'FEW', 'LITTLE', 'ENOUGH', 'PLENTY', 'SEVERAL', 'TOTAL']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Quantity',
        questions: [
            { q: 'I / have / a / few / friends / .', a: 'I have a few friends.' },
            { q: 'There / isn\'t / much / water / .', a: 'There isn\'t much water.' },
            { q: 'How / many / books / do / you / have / ?', a: 'How many books do you have?' },
            { q: 'She / has / a / little / money / .', a: 'She has a little money.' },
            { q: 'We / don\'t / have / any / milk / .', a: 'We don\'t have any milk.' },
            { q: 'There / are / a / lot / of / trees / .', a: 'There are a lot of trees.' },
            { q: 'Do / you / want / some / tea / ?', a: 'Do you want some tea?' },
            { q: 'I / have / too / much / work / .', a: 'I have too much work.' },
            { q: 'Are / there / many / people / ?', a: 'Are there many people?' },
            { q: 'I / have / enough / time / .', a: 'I have enough time.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Quantifier Rules',
        questions: [
            { q: 'When do we use "many"?', a: 'With countable plural nouns', o: ['With uncountable nouns'] },
            { q: 'When do we use "much"?', a: 'With uncountable nouns', o: ['With countable plural nouns'] },
            { q: 'When do we use "some"?', a: 'Positive sentences / Offers', o: ['Negative sentences', 'General questions'] },
            { q: 'When do we use "any"?', a: 'Negative sentences / Questions', o: ['Positive sentences'] },
            { q: 'Which is for a small amount of countable nouns?', a: 'A few', o: ['A little'] },
            { q: 'Which is for a small amount of uncountable nouns?', a: 'A little', o: ['A few'] },
            { q: 'What can we use for both countable and uncountable?', a: 'A lot of', o: ['Much', 'Many'] },
            { q: 'Is "too much people" correct?', a: 'No (use "too many people")', o: ['Yes'] },
            { q: 'Is "how many money" correct?', a: 'No (use "how much money")', o: ['Yes'] },
            { q: 'Correct: "I have [___] time."', a: 'a little', o: ['a few'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Quantity',
        questions: [
            { q: 'How [___] people are coming?', a: 'many' },
            { q: 'How [___] coffee do you drink?', a: 'much' },
            { q: 'I have [___] (some) good news.', a: 'some' },
            { q: 'We don\'t have [___] (any) bread.', a: 'any' },
            { q: 'There are [___] (few) cars today.', a: 'a few' },
            { q: 'There is [___] (little) hope left.', a: 'a little' },
            { q: 'I have [___] (large amount) of homework.', a: 'a lot' },
            { q: 'Are there [___] eggs in the fridge?', a: 'any' },
            { q: 'I don\'t have [___] time.', a: 'much' },
            { q: 'Do you want [___] water?', a: 'some' }
        ]
    }
]);

// --- TOPIC 13: Relative Clauses (who, which, that) ---
updateTopic('A2', 13, [
    {
        type: 'multiple_choice',
        title: 'Defining People and Things',
        questions: [
            { q: 'The woman [___] works here is very nice.', a: 'who', o: ['which', 'where', 'whose'] },
            { q: 'The book [___] I read was interesting.', a: 'that', o: ['who', 'where', 'when'] },
            { q: 'The car [___] he bought is red.', a: 'which', o: ['who', 'where', 'whose'] },
            { q: 'I know a boy [___] speaks five languages.', a: 'who', o: ['which', 'that', 'where'] },
            { q: 'The house [___] she lives in is old.', a: 'that', o: ['who', 'whose', 'when'] },
            { q: 'The students [___] study hard pass.', a: 'who', o: ['which', 'where', 'when'] },
            { q: 'This is the cake [___] I made.', a: 'which', o: ['who', 'where', 'whose'] },
            { q: 'I met a man [___] lives in Japan.', a: 'who', o: ['which', 'where', 'when'] },
            { q: 'The dog [___] is barking is mine.', a: 'that', o: ['who', 'where', 'when'] },
            { q: 'The movie [___] we saw was great.', a: 'which', o: ['who', 'where', 'that'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Relative Words',
        words: ['WHO', 'WHICH', 'THAT', 'RELATE', 'CLAUSE', 'PEOPLE', 'THINGS', 'DEFINE', 'CONNECT', 'BOND']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Relative',
        questions: [
            { q: 'The / man / who / called / was / nice / .', a: 'The man who called was nice.' },
            { q: 'The / book / which / I / read / is / good / .', a: 'The book which I read is good.' },
            { q: 'She / is / the / girl / that / I / know / .', a: 'She is the girl that I know.' },
            { q: 'I / know / a / man / who / can / help / .', a: 'I know a man who can help.' },
            { q: 'The / car / that / he / bought / is / new / .', a: 'The car that he bought is new.' },
            { q: 'This / is / the / house / where / I / live / .', a: 'This is the house where I live.' },
            { q: 'The / students / who / are / here / are / smart / .', a: 'The students who are here are smart.' },
            { q: 'The / pizza / which / we / ate / was / great / .', a: 'The pizza which we ate was great.' },
            { q: 'He / is / the / person / that / called / you / .', a: 'He is the person that called you.' },
            { q: 'The / song / which / she / sang / was / sad / .', a: 'The song which she sang was sad.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Relative Review',
        questions: [
            { q: 'Pronoun for people:', a: 'Who', o: ['Which', 'Where'] },
            { q: 'Pronoun for things:', a: 'Which / That', o: ['Who', 'Where'] },
            { q: 'Can "that" be used for both?', a: 'Yes', o: ['No'] },
            { q: 'Is "The book who" correct?', a: 'No', o: ['Yes'] },
            { q: 'Is "The boy which" correct?', a: 'No', o: ['Yes'] },
            { q: 'Can we omit "who/which/that" if it\'s the object?', a: 'Yes', o: ['No'] },
            { q: 'Can we omit "who/which/that" if it\'s the subject?', a: 'No', o: ['Yes'] },
            { q: 'What is a relative clause used for?', a: 'To define/identify a noun', o: ['To ask a question'] },
            { q: 'Where does it go?', a: 'Right after the noun', o: ['At the beginning'] },
            { q: 'Correct: "The girl [___] works here."', a: 'who', o: ['which'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Link',
        questions: [
            { q: 'The boy [___] is sitting there is my brother.', a: 'who' },
            { q: 'The laptop [___] I bought is very fast.', a: 'which' },
            { q: 'The people [___] live next door are quiet.', a: 'who' },
            { q: 'The movie [___] we saw last night was boring.', a: 'that' },
            { q: 'A doctor is someone [___] treats sick people.', a: 'who' },
            { q: 'A dictionary is a book [___] gives meanings.', a: 'which' },
            { q: 'The phone [___] is on the table is mine.', a: 'that' },
            { q: 'The students [___] were late missed the test.', a: 'who' },
            { q: 'The cake [___] she made was delicious.', a: 'which' },
            { q: 'He is the man [___] I told you about.', a: 'who / that' }
        ]
    }
]);

// --- TOPIC 14: Gerunds vs. Infinitives ---
updateTopic('A2', 14, [
    {
        type: 'multiple_choice',
        title: 'To be or Being?',
        questions: [
            { q: 'I enjoy [___] in the park.', a: 'walking', o: ['to walk', 'walk', 'walks'] },
            { q: 'I want [___] a doctor.', a: 'to be', o: ['being', 'be', 'am'] },
            { q: 'She decided [___] to London.', a: 'to move', o: ['moving', 'move', 'moves'] },
            { q: 'He finished [___] his homework.', a: 'doing', o: ['to do', 'do', 'does'] },
            { q: 'We hope [___] you soon.', a: 'to see', o: ['seeing', 'see', 'sees'] },
            { q: 'I don\'t mind [___] for a few minutes.', a: 'waiting', o: ['to wait', 'wait', 'waits'] },
            { q: 'They agreed [___] us.', a: 'to help', o: ['helping', 'help', 'helps'] },
            { q: 'She loves [___] .', a: 'dancing', o: ['to dance', 'dance', 'dances'] },
            { q: 'He promised [___] me.', a: 'to call', o: ['calling', 'call', 'calls'] },
            { q: 'Avoid [___] late.', a: 'being', o: ['to be', 'be', 'am'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Verb Patterns',
        words: ['WANT', 'HOPE', 'ENJOY', 'AVOID', 'FINISH', 'DECIDE', 'PROMISE', 'AGREE', 'MIND', 'LIKE']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Pattern',
        questions: [
            { q: 'I / want / to / go / home / .', a: 'I want to go home.' },
            { q: 'She / enjoys / reading / books / .', a: 'She enjoys reading books.' },
            { q: 'He / decided / to / buy / a / car / .', a: 'He decided to buy a car.' },
            { q: 'We / avoid / eating / junk / food / .', a: 'We avoid eating junk food.' },
            { q: 'I / hope / to / see / you / soon / .', a: 'I hope to see you soon.' },
            { q: 'They / finished / working / late / .', a: 'They finished working late.' },
            { q: 'Do / you / mind / waiting / ?', a: 'Do you mind waiting?' },
            { q: 'She / promised / to / call / back / .', a: 'She promised to call back.' },
            { q: 'I / love / listening / to / music / .', a: 'I love listening to music.' },
            { q: 'He / agreed / to / help / us / .', a: 'He agreed to help us.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Pattern Rules',
        questions: [
            { q: 'What follows "want"?', a: 'to + infinitive', o: ['-ing form'] },
            { q: 'What follows "enjoy"?', a: '-ing form (Gerund)', o: ['to + infinitive'] },
            { q: 'What follows "hope"?', a: 'to + infinitive', o: ['-ing form'] },
            { q: 'What follows "avoid"?', a: '-ing form', o: ['to + infinitive'] },
            { q: 'Which verb can take both with similar meaning?', a: 'Like / Love / Hate', o: ['Want / Hope'] },
            { q: 'What follows "decide"?', a: 'to + infinitive', o: ['-ing form'] },
            { q: 'What follows "finish"?', a: '-ing form', o: ['to + infinitive'] },
            { q: 'What follows "promise"?', a: 'to + infinitive', o: ['-ing form'] },
            { q: 'What follows "mind" (don\'t mind)?', a: '-ing form', o: ['to + infinitive'] },
            { q: 'What follows "agree"?', a: 'to + infinitive', o: ['-ing form'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'To or -ing?',
        questions: [
            { q: 'I want [___] (travel) to Japan.', a: 'to travel' },
            { q: 'She enjoys [___] (cook) for her friends.', a: 'cooking' },
            { q: 'He decided [___] (buy) a new phone.', a: 'to buy' },
            { q: 'We finished [___] (paint) the room.', a: 'painting' },
            { q: 'I hope [___] (pass) the exam.', a: 'to pass' },
            { q: 'Avoid [___] (smoke), it\'s unhealthy.', a: 'smoking' },
            { q: 'They promised [___] (come) early.', a: 'to come' },
            { q: 'Do you mind [___] (close) the window?', a: 'closing' },
            { q: 'She agreed [___] (meet) us later.', a: 'to meet' },
            { q: 'I love [___] (listen) to podcasts.', a: 'listening' }
        ]
    }
]);

// --- TOPIC 15: Zero Conditional ---
updateTopic('A2', 15, [
    {
        type: 'multiple_choice',
        title: 'General Truths',
        questions: [
            { q: 'If you heat ice, it [___] .', a: 'melts', o: ['melt', 'will melt', 'melted'] },
            { q: 'If you mix red and blue, you [___] purple.', a: 'get', o: ['will get', 'gets', 'got'] },
            { q: 'Plants die if they [___] (not) get water.', a: 'don\'t', o: ['won\'t', 'doesn\'t', 'not'] },
            { q: 'If it [___] , the ground gets wet.', a: 'rains', o: ['rain', 'will rain', 'raining'] },
            { q: 'If I drink too much coffee, I [___] (not) sleep well.', a: 'don\'t', o: ['won\'t', 'doesn\'t', 'not'] },
            { q: 'If you [___] water to 100 degrees, it boils.', a: 'heat', o: ['will heat', 'heats', 'heated'] },
            { q: 'Snakes bite if they [___] scared.', a: 'are', o: ['will be', 'be', 'were'] },
            { q: 'If I [___] late, my boss gets angry.', a: 'am', o: ['will be', 'be', 'were'] },
            { q: 'Butter melts if you [___] it in the sun.', a: 'leave', o: ['will leave', 'leaves', 'left'] },
            { q: 'If you [___] (not) eat, you get hungry.', a: 'don\'t', o: ['won\'t', 'doesn\'t', 'not'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Logic Keywords',
        words: ['FACT', 'TRUTH', 'ALWAYS', 'IF', 'WHEN', 'RESULT', 'CAUSE', 'SCIENCE', 'GENERAL', 'LOGIC']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Truth',
        questions: [
            { q: 'If / you / heat / ice / it / melts / .', a: 'If you heat ice it melts.' },
            { q: 'Plants / die / if / they / don\'t / get / water / .', a: 'Plants die if they don\'t get water.' },
            { q: 'If / it / rains / the / grass / gets / wet / .', a: 'If it rains the grass gets wet.' },
            { q: 'If / I / am / tired / I / go / to / bed / .', a: 'If I am tired I go to bed.' },
            { q: 'Water / boils / if / you / heat / it / .', a: 'Water boils if you heat it.' },
            { q: 'If / you / mix / blue / and / red / you / get / purple / .', a: 'If you mix blue and red you get purple.' },
            { q: 'If / I / eat / peanuts / I / get / sick / .', a: 'If I eat peanuts I get sick.' },
            { q: 'My / teacher / gets / angry / if / I / am / late / .', a: 'My teacher gets angry if I am late.' },
            { q: 'If / you / freeze / water / it / becomes / ice / .', a: 'If you freeze water it becomes ice.' },
            { q: 'I / feel / better / if / I / exercise / .', a: 'I feel better if I exercise.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Zero Rules',
        questions: [
            { q: 'What is the Zero Conditional used for?', a: 'General truths / Facts', o: ['Future possibilities', 'Past regrets'] },
            { q: 'Which tense do we use in both clauses?', a: 'Present Simple', o: ['Future Simple', 'Past Simple'] },
            { q: 'Can we use "when" instead of "if"?', a: 'Yes', o: ['No'] },
            { q: 'Is "If it will rain, it gets wet" correct?', a: 'No (no "will")', o: ['Yes'] },
            { q: 'What is the structure?', a: 'If + Present, Present', o: ['If + Present, Will'] },
            { q: 'Does it talk about a specific time?', a: 'No, it\'s generally true', o: ['Yes, always'] },
            { q: 'If the "if" clause comes first, do we use a comma?', a: 'Yes', o: ['No'] },
            { q: 'Correct: "Ice [___] if you heat it."', a: 'melts', o: ['melt', 'will melt'] },
            { q: 'Correct: "If I [___] hungry, I eat."', a: 'am', o: ['will be', 'was'] },
            { q: 'Correct: "He [___] angry if I am late."', a: 'gets', o: ['will get', 'got'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fact or Fiction',
        questions: [
            { q: 'If you [___] (heat) water, it boils.', a: 'heat' },
            { q: 'If I [___] (not / sleep), I feel tired.', a: "don't sleep" },
            { q: 'Plants [___] (die) if they don\'t get light.', a: 'die' },
            { q: 'If you [___] (mix) black and white, you get grey.', a: 'mix' },
            { q: 'The [___] (get) wet if it rains.', a: 'ground gets' },
            { q: 'If I [___] (be) late, my mom calls me.', a: 'am' },
            { q: 'If you [___] (touch) fire, you get burned.', a: 'touch' },
            { q: 'If I [___] (eat) too much, I feel sick.', a: 'eat' },
            { q: 'If it [___] (be) sunny, I wear sunglasses.', a: 'is' },
            { q: 'Wood [___] (burn) if you heat it enough.', a: 'burns' }
        ]
    }
]);

fs.writeFileSync(path, JSON.stringify(topics, null, 2));
console.log('Batch 6: A2 Topics 11-15 updated successfully.');
