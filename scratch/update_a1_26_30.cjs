const fs = require('fs');
const path = 'backend/data/topics.json';
const topics = JSON.parse(fs.readFileSync(path, 'utf8'));

const updateTopic = (number, games) => {
    const t = topics.find(topic => topic.level === 'A1' && topic.number === number);
    if (t) {
        t.premium_practice = JSON.stringify({ games }, null, 2);
    }
};

// --- TOPIC 26: Modal Verbs: Can / Can't ---
updateTopic(26, [
    {
        type: 'multiple_choice',
        title: 'Abilities and Possibilities',
        questions: [
            { q: 'I [___] swim very well. I learned when I was five.', a: 'can', o: ['can\'t', 'am', 'do'] },
            { q: 'He [___] speak Chinese. It\'s too difficult for him.', a: 'can\'t', o: ['can', 'does', 'is'] },
            { q: 'They [___] come to the party. They have to work.', a: 'can\'t', o: ['can', 'are', 'do'] },
            { q: 'Can you [___] the guitar?', a: 'play', o: ['playing', 'played', 'plays'] },
            { q: 'She [___] run very fast.', a: 'can', o: ['can\'t', 'is', 'does'] },
            { q: 'We [___] hear you. Please speak louder.', a: 'can\'t', o: ['can', 'are', 'do'] },
            { q: '[___] you help me with this box?', a: 'Can', o: ['Do', 'Are', 'Is'] },
            { q: 'Cats [___] climb trees easily.', a: 'can', o: ['can\'t', 'are', 'do'] },
            { q: 'I [___] find my keys anywhere!', a: 'can\'t', o: ['can', 'am', 'do'] },
            { q: 'Birds [___] fly, but penguins [___].', a: 'can / can\'t', o: ['can\'t / can', 'can / can', 'can\'t / can\'t'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Ability Keywords',
        words: ['CAN', 'CANT', 'ABILITY', 'SKILL', 'POSSIBLE', 'SWIM', 'DANCE', 'SING', 'WRITE', 'SPEAK']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Sentence',
        questions: [
            { q: 'I / can / speak / English / .', a: 'I can speak English.' },
            { q: 'She / can\'t / drive / a / car / .', a: 'She can\'t drive a car.' },
            { q: 'Can / you / help / me / ?', a: 'Can you help me?' },
            { q: 'They / can / play / football / .', a: 'They can play football.' },
            { q: 'He / can\'t / swim / very / well / .', a: 'He can\'t swim very well.' },
            { q: 'We / can / see / the / moon / .', a: 'We can see the moon.' },
            { q: 'You / can\'t / park / here / .', a: 'You can\'t park here.' },
            { q: 'Can / she / cook / Italian / food / ?', a: 'Can she cook Italian food?' },
            { q: 'Birds / can / fly / high / .', a: 'Birds can fly high.' },
            { q: 'I / can\'t / understand / this / .', a: 'I can\'t understand this.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Modal Rules',
        questions: [
            { q: 'Do we add "-s" to "can" for He/She/It?', a: 'No', o: ['Yes', 'Sometimes'] },
            { q: 'What follows "can" or "can\'t"?', a: 'Base form of the verb', o: ['Verb with -ing', 'Verb with -ed'] },
            { q: 'Is "I can to swim" correct?', a: 'No (no "to")', o: ['Yes'] },
            { q: 'Negative form of "Can":', a: "Can't / Cannot", o: ["Don't can", "Not can"] },
            { q: 'Question form of "You can":', a: 'Can you...?', o: ['Do you can...?', 'Are you can...?'] },
            { q: 'What does "Cannot" mean?', a: 'Can\'t (formal)', o: ['Can (formal)'] },
            { q: 'Can "can" be used for permission?', a: 'Yes', o: ['No', 'Only for ability'] },
            { q: 'Can "can" be used for requests?', a: 'Yes', o: ['No'] },
            { q: 'Correct: "She [___] dance."', a: 'can', o: ['cans', 'is can'] },
            { q: 'Correct: "They [___] come."', a: "can't", o: ["don't can", "aren't can"] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Can or Can\'t?',
        questions: [
            { q: 'I [___] (ability) play the piano.', a: 'can' },
            { q: 'I [___] (no ability) speak Japanese.', a: "can't" },
            { q: '[___] you open the window, please?', a: 'Can' },
            { q: 'He [___] (permission) stay out late.', a: 'can' },
            { q: 'We [___] (possibility) see the stars tonight.', a: 'can' },
            { q: 'She [___] (no possibility) come today.', a: "can't" },
            { q: 'Dogs [___] bark, but they [___] talk.', a: "can / can't" },
            { q: 'Wait, I [___] hear you very well.', a: "can't" },
            { q: '[___] she swim across the lake?', a: 'Can' },
            { q: 'You [___] buy milk at the shop.', a: 'can' }
        ]
    }
]);

// --- TOPIC 27: Modal Verbs: Should / Shouldn't ---
updateTopic(27, [
    {
        type: 'multiple_choice',
        title: 'Giving Advice',
        questions: [
            { q: 'You look tired. You [___] go to bed.', a: 'should', o: ['shouldn\'t', 'are', 'do'] },
            { q: 'It\'s raining. You [___] take an umbrella.', a: 'should', o: ['shouldn\'t', 'is', 'was'] },
            { q: 'You [___] eat too many sweets. They are bad for you.', a: 'shouldn\'t', o: ['should', 'are', 'do'] },
            { q: 'Should I [___] this shirt?', a: 'buy', o: ['buying', 'bought', 'buys'] },
            { q: 'He [___] work so hard. He needs a break.', a: 'shouldn\'t', o: ['should', 'is', 'does'] },
            { q: 'What [___] I do?', a: 'should', o: ['do', 'am', 'shall'] },
            { q: 'You [___] be late for the meeting.', a: 'shouldn\'t', o: ['should', 'are', 'not'] },
            { q: 'People [___] be kind to animals.', a: 'should', o: ['shouldn\'t', 'are', 'do'] },
            { q: 'You [___] smoke. It\'s unhealthy.', a: 'shouldn\'t', o: ['should', 'can', 'do'] },
            { q: 'We [___] save water.', a: 'should', o: ['shouldn\'t', 'are', 'do'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Advice Keywords',
        words: ['SHOULD', 'SHOULDNT', 'ADVICE', 'OPINION', 'BETTER', 'HEALTHY', 'HELPFUL', 'SUGGEST', 'OUPHT', 'MUST']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Advice',
        questions: [
            { q: 'You / should / eat / fruit / .', a: 'You should eat fruit.' },
            { q: 'She / shouldn\'t / drink / soda / .', a: 'She shouldn\'t drink soda.' },
            { q: 'Should / I / go / home / ?', a: 'Should I go home?' },
            { q: 'He / should / study / more / .', a: 'He should study more.' },
            { q: 'We / shouldn\'t / be / late / .', a: 'We shouldn\'t be late.' },
            { q: 'You / should / call / your / mom / .', a: 'You should call your mom.' },
            { q: 'What / should / we / eat / ?', a: 'What should we eat?' },
            { q: 'They / should / listen / to / us / .', a: 'They should listen to us.' },
            { q: 'I / shouldn\'t / stay / up / late / .', a: 'I shouldn\'t stay up late.' },
            { q: 'You / should / see / a / doctor / .', a: 'You should see a doctor.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Should Rules',
        questions: [
            { q: 'What is "should" used for?', a: 'Giving advice/opinions', o: ['Giving orders', 'Talking about past'] },
            { q: 'Do we add "-s" for He/She/It?', a: 'No', o: ['Yes', 'Sometimes'] },
            { q: 'What follows "should"?', a: 'Base form of the verb', o: ['Verb with -ing', 'Verb with "to"'] },
            { q: 'Is "You should to go" correct?', a: 'No (no "to")', o: ['Yes'] },
            { q: 'Negative form of "Should":', a: "Shouldn't", o: ["Don't should", "Not should"] },
            { q: 'Question form of "You should":', a: 'Should you...?', o: ['Do you should...?', 'Are you should...?'] },
            { q: 'Is "should" stronger than "must"?', a: 'No, "must" is stronger', o: ['Yes'] },
            { q: 'Can we use "should" for the future?', a: 'Yes', o: ['No'] },
            { q: 'Correct: "He [___] exercise."', a: 'should', o: ['shoulds', 'is should'] },
            { q: 'Correct: "We [___] worry."', a: "shouldn't", o: ["don't should", "aren't should"] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Give Advice',
        questions: [
            { q: 'You [___] (advice) drink more water.', a: 'should' },
            { q: 'You [___] (negative advice) drive so fast.', a: "shouldn't" },
            { q: '[___] I tell him the truth?', a: 'Should' },
            { q: 'He [___] (advice) apologize to her.', a: 'should' },
            { q: 'We [___] (negative advice) waste our time.', a: "shouldn't" },
            { q: 'She [___] (advice) wear a coat today.', a: 'should' },
            { q: 'What time [___] we arrive?', a: 'should' },
            { q: 'You [___] (advice) try this cake. It\'s delicious.', a: 'should' },
            { q: 'They [___] (negative advice) make so much noise.', a: "shouldn't" },
            { q: 'Children [___] (advice) sleep early.', a: 'should' }
        ]
    }
]);

// --- TOPIC 28: First Conditional ---
updateTopic(28, [
    {
        type: 'multiple_choice',
        title: 'If this happens...',
        questions: [
            { q: 'If it rains, I [___] at home.', a: 'will stay', o: ['stay', 'stayed', 'am staying'] },
            { q: 'If she studies, she [___] the exam.', a: 'will pass', o: ['pass', 'passes', 'passed'] },
            { q: 'We will be late if we [___] .', a: 'don\'t hurry', o: ['won\'t hurry', 'doesn\'t hurry', 'hurry'] },
            { q: 'If you [___] me, I will help you.', a: 'ask', o: ['will ask', 'asks', 'asked'] },
            { q: 'He will buy a car if he [___] enough money.', a: 'has', o: ['will have', 'have', 'had'] },
            { q: 'If they [___] soon, they will miss the bus.', a: 'don\'t come', o: ['won\'t come', 'doesn\'t come', 'come'] },
            { q: 'I [___] you if I find your keys.', a: 'will call', o: ['call', 'called', 'calling'] },
            { q: 'If you eat too much, you [___] sick.', a: 'will feel', o: ['feel', 'feels', 'felt'] },
            { q: 'What [___] you do if it rains?', a: 'will', o: ['do', 'are', 'did'] },
            { q: 'If I have time, I [___] you.', a: 'will visit', o: ['visit', 'visited', 'visits'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Condition Keywords',
        words: ['IF', 'WILL', 'CONDITION', 'RESULT', 'FUTURE', 'HAPPEN', 'UNLESS', 'WOULD', 'MIGHT', 'MAY']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Condition',
        questions: [
            { q: 'If / it / rains / I / will / stay / home / .', a: 'If it rains I will stay home.' },
            { q: 'She / will / pass / if / she / studies / .', a: 'She will pass if she studies.' },
            { q: 'If / you / help / me / I / will / help / you / .', a: 'If you help me I will help you.' },
            { q: 'We / will / be / late / if / we / don\'t / go / now / .', a: 'We will be late if we don\'t go now.' },
            { q: 'If / he / has / money / he / will / buy / a / car / .', a: 'If he has money he will buy a car.' },
            { q: 'I / will / call / you / if / I / find / it / .', a: 'I will call you if I find it.' },
            { q: 'If / they / don\'t / come / they / will / miss / out / .', a: 'If they don\'t come they will miss out.' },
            { q: 'What / will / you / do / if / it / snows / ?', a: 'What will you do if it snows?' },
            { q: 'If / she / is / tired / she / will / sleep / .', a: 'If she is tired she will sleep.' },
            { q: 'I / will / be / happy / if / you / come / .', a: 'I will be happy if you come.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Conditional Rules',
        questions: [
            { q: 'First Conditional is for...', a: 'Real possibilities', o: ['Imaginary situations', 'Past events'] },
            { q: 'Which tense follows "if"?', a: 'Present Simple', o: ['Future Simple (will)', 'Past Simple'] },
            { q: 'Which tense is used for the result?', a: 'Future Simple (will)', o: ['Present Simple', 'Past Simple'] },
            { q: 'Can we say "If I will go"?', a: 'No (no "will" after "if")', o: ['Yes'] },
            { q: 'What does "unless" mean?', a: 'If not', o: ['If yes', 'Maybe'] },
            { q: 'If the "if" clause comes first, do we need a comma?', a: 'Yes', o: ['No'] },
            { q: 'If the result clause comes first, do we need a comma?', a: 'No', o: ['Yes'] },
            { q: 'Which is correct: "If he [___] here"?', a: 'is', o: ['will be', 'be'] },
            { q: 'Which is correct: "I [___] sad if you go"?', a: 'will be', o: ['am', 'was'] },
            { q: 'Can we use "can" instead of "will" in the result?', a: 'Yes', o: ['No'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Complete the Sentence',
        questions: [
            { q: 'If it [___] (be) sunny, we will go to the beach.', a: 'is' },
            { q: 'I [___] (call) you if I have any news.', a: 'will call' },
            { q: 'If she [___] (not / study), she will fail.', a: "doesn't study" },
            { q: 'We will be late if the bus [___] (not / arrive) soon.', a: "doesn't arrive" },
            { q: 'If you [___] (eat) that, you will be sick.', a: 'eat' },
            { q: 'He [___] (buy) a house if he wins the lottery.', a: 'will buy' },
            { q: 'If they [___] (not / hurry), they will miss the plane.', a: "don't hurry" },
            { q: 'I [___] (be) surprised if he comes.', a: 'will be' },
            { q: 'If you [___] (tell) the truth, they will forgive you.', a: 'tell' },
            { q: 'What [___] (happen) if I press this button?', a: 'will happen' }
        ]
    }
]);

// --- TOPIC 29: Relative Clauses ---
updateTopic(29, [
    {
        type: 'multiple_choice',
        title: 'Connecting Sentences',
        questions: [
            { q: 'The man [___] lives next door is a doctor.', a: 'who', o: ['which', 'where', 'whose'] },
            { q: 'The car [___] he bought is very fast.', a: 'which', o: ['who', 'where', 'whose'] },
            { q: 'The place [___] I was born is very small.', a: 'where', o: ['who', 'which', 'when'] },
            { q: 'The girl [___] bag was stolen is crying.', a: 'whose', o: ['who', 'which', 'where'] },
            { q: 'The day [___] we met was beautiful.', a: 'when', o: ['who', 'which', 'where'] },
            { q: 'I know a girl [___] speaks five languages.', a: 'who', o: ['which', 'where', 'whose'] },
            { q: 'The book [___] I am reading is interesting.', a: 'that', o: ['who', 'where', 'when'] },
            { q: 'The restaurant [___] we ate was expensive.', a: 'where', o: ['who', 'which', 'that'] },
            { q: 'The woman [___] is talking is my teacher.', a: 'who', o: ['which', 'whose', 'where'] },
            { q: 'The house [___] has a blue door is mine.', a: 'which', o: ['who', 'where', 'when'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Relative Pronouns',
        words: ['WHO', 'WHICH', 'THAT', 'WHERE', 'WHEN', 'WHOSE', 'WHOM', 'PEOPLE', 'THINGS', 'PLACES']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Clause',
        questions: [
            { q: 'The / man / who / lives / here / is / nice / .', a: 'The man who lives here is nice.' },
            { q: 'The / car / which / I / want / is / red / .', a: 'The car which I want is red.' },
            { q: 'I / know / a / place / where / we / can / go / .', a: 'I know a place where we can go.' },
            { q: 'The / book / that / I / read / was / good / .', a: 'The book that I read was good.' },
            { q: 'The / woman / who / called / was / angry / .', a: 'The woman who called was angry.' },
            { q: 'This / is / the / boy / whose / dog / died / .', a: 'This is the boy whose dog died.' },
            { q: 'I / remember / the / day / when / we / met / .', a: 'I remember the day when we met.' },
            { q: 'The / house / where / I / live / is / old / .', a: 'The house where I live is old.' },
            { q: 'He / is / the / student / who / won / .', a: 'He is the student who won.' },
            { q: 'The / film / which / we / saw / was / sad / .', a: 'The film which we saw was sad.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Relative Rules',
        questions: [
            { q: 'Which pronoun do we use for people?', a: 'Who', o: ['Which', 'Where', 'When'] },
            { q: 'Which pronoun do we use for things?', a: 'Which/That', o: ['Who', 'Where', 'When'] },
            { q: 'Which pronoun do we use for places?', a: 'Where', o: ['Who', 'Which', 'That'] },
            { q: 'Which pronoun do we use for possession?', a: 'Whose', o: ['Who', 'Which', 'Where'] },
            { q: 'Which pronoun do we use for time?', a: 'When', o: ['Who', 'Which', 'Where'] },
            { q: 'Can we use "that" for people?', a: 'Yes (informal)', o: ['No'] },
            { q: 'Can we use "that" for things?', a: 'Yes', o: ['No'] },
            { q: 'Is "The man which" correct?', a: 'No ("which" is for things)', o: ['Yes'] },
            { q: 'Is "The car who" correct?', a: 'No ("who" is for people)', o: ['Yes'] },
            { q: 'Where does the relative clause usually go?', a: 'After the noun it describes', o: ['At the end of the sentence'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Connect with Relatives',
        questions: [
            { q: 'The doctor [___] treated me was kind.', a: 'who' },
            { q: 'The cake [___] she made was delicious.', a: 'which' },
            { q: 'The town [___] I grew up is beautiful.', a: 'where' },
            { q: 'I know a man [___] son is a famous actor.', a: 'whose' },
            { q: 'Monday is the day [___] I am busiest.', a: 'when' },
            { q: 'The students [___] study hard pass.', a: 'who' },
            { q: 'The laptop [___] I bought is broken.', a: 'that' },
            { q: 'The park [___] we played is closed.', a: 'where' },
            { q: 'The teacher [___] taught us left.', a: 'who' },
            { q: 'The movie [___] won the Oscar was great.', a: 'which' }
        ]
    }
]);

// --- TOPIC 30: Passive Voice (Basic) ---
updateTopic(30, [
    {
        type: 'multiple_choice',
        title: 'Active or Passive?',
        questions: [
            { q: 'The letter [___] yesterday.', a: 'was written', o: ['wrote', 'is written', 'writes'] },
            { q: 'The car [___] by a mechanic.', a: 'is repaired', o: ['repairs', 'repaired', 'is repairing'] },
            { q: 'The cake [___] by my mother.', a: 'was made', o: ['made', 'is make', 'makes'] },
            { q: 'Spanish [___] in Mexico.', a: 'is spoken', o: ['speaks', 'spoken', 'is speaking'] },
            { q: 'The pyramids [___] thousands of years ago.', a: 'were built', o: ['built', 'are built', 'build'] },
            { q: 'The room [___] every day.', a: 'is cleaned', o: ['cleans', 'cleaned', 'is cleaning'] },
            { q: 'The thief [___] by the police.', a: 'was caught', o: ['caught', 'is catch', 'catches'] },
            { q: 'Rice [___] in China.', a: 'is grown', o: ['grows', 'grown', 'is growing'] },
            { q: 'The window [___] by the ball.', a: 'was broken', o: ['broke', 'is break', 'breaks'] },
            { q: 'The books [___] by many people.', a: 'are read', o: ['read', 'reads', 'is read'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Passive Participles',
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
            { q: 'What do we use to make the Passive Voice?', a: 'Be + Past Participle', o: ['Have + Past Participle', 'Do + Verb'] },
            { q: 'What is the "Past Participle"?', a: 'The 3rd form of the verb (V3)', o: ['The 2nd form of the verb (V2)'] },
            { q: 'Which word do we use to say who did the action?', a: 'By', o: ['From', 'With', 'Of'] },
            { q: 'Passive of "He writes a letter":', a: 'A letter is written', o: ['A letter is write', 'A letter wrote'] },
            { q: 'Passive of "He wrote a letter":', a: 'A letter was written', o: ['A letter was write', 'A letter is written'] },
            { q: 'Is the Passive Voice more formal?', a: 'Yes', o: ['No'] },
            { q: 'Do we use Passive when the actor is unknown?', a: 'Yes', o: ['No'] },
            { q: 'Past participle of "Speak":', a: 'Spoken', o: ['Spoke', 'Speaks', 'Speaking'] },
            { q: 'Past participle of "Build":', a: 'Built', o: ['Builded', 'Building', 'Builds'] },
            { q: 'Is "The car is repair" correct?', a: 'No (needs "repaired")', o: ['Yes'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Complete the Passive',
        questions: [
            { q: 'The [___] (write) in 1950.', a: 'was written' },
            { q: 'The [___] (clean) every morning.', a: 'is cleaned' },
            { q: 'The [___] (build) by my father.', a: 'was built' },
            { q: 'Coffee [___] (grow) in Brazil.', a: 'is grown' },
            { q: 'The [___] (catch) by the police.', a: 'was caught' },
            { q: 'The [___] (repaired) yesterday.', a: 'was repaired' },
            { q: 'Many [___] (speak) here.', a: 'is spoken' },
            { q: 'The [___] (break) by the wind.', a: 'was broken' },
            { q: 'The [___] (made) in Italy.', a: 'was made' },
            { q: 'The [___] (found) in the park.', a: 'was found' }
        ]
    }
]);

fs.writeFileSync(path, JSON.stringify(topics, null, 2));
console.log('Batch 3: A1 Topics 26-30 updated successfully.');
