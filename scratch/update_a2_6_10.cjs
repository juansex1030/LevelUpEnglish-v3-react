const fs = require('fs');
const path = 'backend/data/topics.json';
const topics = JSON.parse(fs.readFileSync(path, 'utf8'));

const updateTopic = (level, number, games) => {
    const t = topics.find(topic => topic.level === level && topic.number === number);
    if (t) {
        t.premium_practice = JSON.stringify({ games }, null, 2);
    }
};

// --- TOPIC 6: Indirect Questions ---
updateTopic('A2', 6, [
    {
        type: 'multiple_choice',
        title: 'Polite Inquiries',
        questions: [
            { q: 'Could you tell me [___]?', a: 'where the station is', o: ['where is the station', 'where the station was', 'is where the station'] },
            { q: 'Do you know [___]?', a: 'what time it is', o: ['what time is it', 'is what time', 'time it is'] },
            { q: 'I was wondering [___] me.', a: 'if you could help', o: ['can you help', 'if could you help', 'help me'] },
            { q: 'Can you remember [___] his keys?', a: 'where he put', o: ['where did he put', 'where put he', 'where does he put'] },
            { q: 'I\'d like to know [___] .', a: 'how much it costs', o: ['how much does it cost', 'how much costs it', 'how much is cost'] },
            { q: 'Do you have any idea [___]?', a: 'when the train leaves', o: ['when does the train leave', 'when leaves the train', 'is the train leaving when'] },
            { q: 'Could you explain [___]?', a: 'how this works', o: ['how does this work', 'how works this', 'how is this work'] },
            { q: 'I\'m not sure [___] .', a: 'if she is coming', o: ['is she coming', 'if is she coming', 'comes she'] },
            { q: 'Can you tell me [___]?', a: 'what your name is', o: ['what is your name', 'is what your name', 'name is what'] },
            { q: 'Do you know [___]?', a: 'if there is a bank near here', o: ['is there a bank near here', 'where is a bank', 'bank near here'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Politeness Keywords',
        words: ['COULD', 'WOULD', 'WONDER', 'KNOW', 'POLITE', 'EXPLAIN', 'QUESTION', 'INDIRECT', 'TELL', 'SURE']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Request',
        questions: [
            { q: 'Could / you / tell / me / where / it / is / ?', a: 'Could you tell me where it is?' },
            { q: 'Do / you / know / what / time / it / is / ?', a: 'Do you know what time it is?' },
            { q: 'I / was / wondering / if / you / were / free / .', a: 'I was wondering if you were free.' },
            { q: 'Can / you / tell / me / who / he / is / ?', a: 'Can you tell me who he is?' },
            { q: 'Do / you / have / any / idea / where / they / are / ?', a: 'Do you have any idea where they are?' },
            { q: 'Could / you / explain / how / this / works / ?', a: 'Could you explain how this works?' },
            { q: 'I\'d / like / to / know / if / she / called / .', a: 'I\'d like to know if she called.' },
            { q: 'Can / you / remember / what / he / said / ?', a: 'Can you remember what he said?' },
            { q: 'I\'m / not / sure / where / the / bank / is / .', a: 'I\'m not sure where the bank is.' },
            { q: 'Do / you / know / if / it / will / rain / ?', a: 'Do you know if it will rain?' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Indirect Rules',
        questions: [
            { q: 'What is the word order in an indirect question?', a: 'Subject + Verb', o: ['Verb + Subject', 'Auxiliary + Subject'] },
            { q: 'Do we use "do/does/did" in indirect questions?', a: 'No', o: ['Yes', 'Only in formal English'] },
            { q: 'Which word do we use for Yes/No indirect questions?', a: 'If / Whether', o: ['What', 'When', 'How'] },
            { q: 'Indirect form of "Where is he?":', a: '...where he is', o: ['...where is he'] },
            { q: 'Indirect form of "What time does it start?":', a: '...what time it starts', o: ['...what time does it start'] },
            { q: 'Which is more polite?', a: 'Indirect Questions', o: ['Direct Questions'] },
            { q: 'Common opening phrase:', a: 'Could you tell me...', o: ['Tell me...', 'I want to know...'] },
            { q: 'Correct: "Do you know [___]?"', a: 'where she lives', o: ['where does she live'] },
            { q: 'Correct: "I wonder [___] today."', a: 'if it is open', o: ['is it open'] },
            { q: 'Does an indirect question always end with a question mark?', a: 'Only if the opening phrase is a question', o: ['Yes, always', 'No, never'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Make it Polite',
        questions: [
            { q: 'Could you tell me what time [___] (it / be)?', a: 'it is' },
            { q: 'Do you know where [___] (he / live)?', a: 'he lives' },
            { q: 'I wonder [___] (if / they / arrive) yet.', a: 'if they have arrived' },
            { q: 'Can you remember what [___] (she / say)?', a: 'she said' },
            { q: 'I\'d like to know how much [___] (it / cost).', a: 'it costs' },
            { q: 'Do you have any idea when [___] (the / bus / come)?', a: 'the bus comes' },
            { q: 'Could you explain why [___] (you / be) late?', a: 'you are' },
            { q: 'I\'m not sure where [___] (my / keys / be).', a: 'my keys are' },
            { q: 'Can you tell me [___] (who / be / that / man)?', a: 'who that man is' },
            { q: 'Do you know if [___] (there / be) a pharmacy nearby?', a: 'there is' }
        ]
    }
]);

// --- TOPIC 7: Adverbs of Time ---
updateTopic('A2', 7, [
    {
        type: 'multiple_choice',
        title: 'When did it happen?',
        questions: [
            { q: 'I will see you [___].', a: 'tomorrow', o: ['yesterday', 'last week', 'ago'] },
            { q: 'He finished his work [___].', a: 'an hour ago', o: ['tomorrow', 'next year', 'soon'] },
            { q: 'We [___] go to the park on Sundays.', a: 'often', o: ['yesterday', 'last month', 'already'] },
            { q: 'She has [___] eaten breakfast.', a: 'already', o: ['yet', 'tomorrow', 'next week'] },
            { q: 'I haven\'t seen him [___].', a: 'lately', o: ['yesterday', 'ago', 'last year'] },
            { q: 'The train is [___] arriving.', a: 'finally', o: ['yesterday', 'ago', 'next week'] },
            { q: 'We will be there [___].', a: 'soon', o: ['ago', 'yesterday', 'last night'] },
            { q: 'I [___] met him in Paris.', a: 'once', o: ['next year', 'tomorrow', 'yet'] },
            { q: 'She is [___] working.', a: 'still', o: ['ago', 'yesterday', 'last week'] },
            { q: 'They left [___].', a: 'early', o: ['tomorrow', 'soon', 'yet'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Time Adverbs',
        words: ['YESTERDAY', 'TOMORROW', 'ALREADY', 'FINALLY', 'LATELY', 'RECENTLY', 'SOON', 'BEFORE', 'AFTER', 'EARLY']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Time',
        questions: [
            { q: 'I / saw / him / yesterday / .', a: 'I saw him yesterday.' },
            { q: 'We / are / going / tomorrow / .', a: 'We are going tomorrow.' },
            { q: 'She / has / already / left / .', a: 'She has already left.' },
            { q: 'He / arrived / an / hour / ago / .', a: 'He arrived an hour ago.' },
            { q: 'They / will / be / here / soon / .', a: 'They will be here soon.' },
            { q: 'I / haven\'t / seen / her / lately / .', a: 'I haven\'t seen her lately.' },
            { q: 'Finally / the / rain / stopped / .', a: 'Finally the rain stopped.' },
            { q: 'We / meet / every / week / .', a: 'We meet every week.' },
            { q: 'He / is / still / sleeping / .', a: 'He is still sleeping.' },
            { q: 'I / went / to / bed / early / .', a: 'I went to bed early.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Time Grammar',
        questions: [
            { q: 'Which adverb means "not long ago"?', a: 'Recently', o: ['Soon', 'Already', 'Next'] },
            { q: 'Which adverb means "in a short time"?', a: 'Soon', o: ['Yesterday', 'Ago', 'Before'] },
            { q: 'Where do we usually put "yesterday"?', a: 'At the end of the sentence', o: ['In the middle', 'Before the subject'] },
            { q: 'Which adverb is used with present perfect for "up to now"?', a: 'Lately / Recently', o: ['Tomorrow', 'Ago'] },
            { q: 'What does "still" mean?', a: 'An action continues', o: ['An action stopped', 'An action will start'] },
            { q: 'What does "already" mean?', a: 'Sooner than expected', o: ['Later than expected'] },
            { q: 'What does "yet" mean (in negatives)?', a: 'Up to the present moment', o: ['In the past'] },
            { q: 'Can "ago" be used with "since"?', a: 'No', o: ['Yes'] },
            { q: 'Correct: "I [___] (before) met him."', a: 'have before', o: ['met before'] },
            { q: 'Correct: "I will call you [___]."', a: 'later', o: ['ago', 'yesterday'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Time',
        questions: [
            { q: 'I saw a great movie [___] (past day).', a: 'yesterday' },
            { q: 'We are leaving [___] (next day).', a: 'tomorrow' },
            { q: 'He has [___] (already) finished.', a: 'already' },
            { q: 'She hasn\'t called me [___] (lately).', a: 'lately' },
            { q: 'The train will arrive [___] (short time).', a: 'soon' },
            { q: 'I [___] (still) love you.', a: 'still' },
            { q: 'He left the office [___] (before time).', a: 'early' },
            { q: 'We [___] (finally) finished the project.', a: 'finally' },
            { q: 'I met her [___] (one time).', a: 'once' },
            { q: 'It happened three years [___].', a: 'ago' }
        ]
    }
]);

// --- TOPIC 8: Future: be going to vs. will ---
updateTopic('A2', 8, [
    {
        type: 'multiple_choice',
        title: 'Plans or Predictions?',
        questions: [
            { q: 'I [___] a cake for the party. I bought the ingredients.', a: 'am going to make', o: ['will make', 'make', 'made'] },
            { q: 'I think it [___] tomorrow.', a: 'will rain', o: ['is going to rain', 'rains', 'rained'] },
            { q: 'Look at those black clouds! It [___].', a: 'is going to rain', o: ['will rain', 'rains', 'rain'] },
            { q: 'Wait! I [___] you with those bags.', a: 'will help', o: ['am going to help', 'help', 'helped'] },
            { q: 'We [___] to Spain next summer. We booked the flights.', a: 'are going to fly', o: ['will fly', 'fly', 'flew'] },
            { q: 'I\'m sure you [___] the exam.', a: 'will pass', o: ['are going to pass', 'pass', 'passed'] },
            { q: 'What [___] you [___] do tonight?', a: 'are / going to', o: ['will / do', 'do / do', 'did / do'] },
            { q: 'I [___] a glass of water, please.', a: 'will have', o: ['am going to have', 'have', 'had'] },
            { q: 'She [___] (not) come to the party.', a: 'isn\'t going to', o: ['won\'t', 'doesn\'t', 'didn\'t'] },
            { q: 'I promise I [___] you every day.', a: 'will call', o: ['am going to call', 'call', 'called'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Future Keywords',
        words: ['WILL', 'GOING', 'PLAN', 'INTENTION', 'PREDICTION', 'PROMISE', 'DECISION', 'FUTURE', 'EXPECT', 'SOON']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Future',
        questions: [
            { q: 'I / am / going / to / study / tonight / .', a: 'I am going to study tonight.' },
            { q: 'He / will / be / a / doctor / one / day / .', a: 'He will be a doctor one day.' },
            { q: 'They / are / going / to / buy / a / house / .', a: 'They are going to buy a house.' },
            { q: 'I / will / help / you / with / that / .', a: 'I will help you with that.' },
            { q: 'It / is / going / to / snow / look / at / the / sky / !', a: 'It is going to snow look at the sky!' },
            { q: 'We / will / probably / go / to / the / beach / .', a: 'We will probably go to the beach.' },
            { q: 'She / isn\'t / going / to / come / .', a: 'She isn\'t going to come.' },
            { q: 'What / will / happen / next / ?', a: 'What will happen next?' },
            { q: 'I / promise / I / will / be / there / .', a: 'I promise I will be there.' },
            { q: 'We / are / going / to / have / fun / !', a: 'We are going to have fun!' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Future Choice',
        questions: [
            { q: 'Which is for spontaneous decisions?', a: 'Will', o: ['Be going to'] },
            { q: 'Which is for pre-planned intentions?', a: 'Be going to', o: ['Will'] },
            { q: 'Which is for predictions with evidence?', a: 'Be going to', o: ['Will'] },
            { q: 'Which is for general predictions/opinions?', a: 'Will', o: ['Be going to'] },
            { q: 'Which is for promises and offers?', a: 'Will', o: ['Be going to'] },
            { q: 'Negative of "Will":', a: "Won't", o: ["Willn't", "Don't will"] },
            { q: 'Full form of "Won\'t":', a: 'Will not', o: ['Would not', 'Want not'] },
            { q: 'Can we use Present Continuous for the future?', a: 'Yes (for fixed arrangements)', o: ['No'] },
            { q: 'Correct: "I [___] (be) 30 next year."', a: 'will be', o: ['am going to be'] },
            { q: 'Correct: "I [___] (see) the doctor at 4 PM."', a: 'am seeing / am going to see', o: ['will see'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Plan or Predict?',
        questions: [
            { q: 'I [___] (travel) to Japan next year. I saved the money.', a: 'am going to travel' },
            { q: 'I think robots [___] (do) everything in the future.', a: 'will do' },
            { q: 'Look! That man [___] (fall).', a: 'is going to fall' },
            { q: 'I\'m thirsty. I [___] (get) some water.', a: 'will get' },
            { q: 'We [___] (have) a party on Saturday.', a: 'are going to have' },
            { q: 'I promise I [___] (not / tell) anyone.', a: "won't tell" },
            { q: 'What [___] you [___] (do) after school?', a: 'are you going to do' },
            { q: 'I expect they [___] (be) late.', a: 'will be' },
            { q: 'She [___] (start) university in October.', a: 'is going to start' },
            { q: 'Don\'t worry, I [___] (help) you.', a: 'will help' }
        ]
    }
]);

// --- TOPIC 9: Modal Verbs for Necessity ---
updateTopic('A2', 9, [
    {
        type: 'multiple_choice',
        title: 'Must or Have to?',
        questions: [
            { q: 'I [___] wear a uniform at work. It\'s the rule.', a: 'have to', o: ['must', 'should', 'can'] },
            { q: 'You [___] stop at the red light.', a: 'must', o: ['should', 'can', 'don\'t have to'] },
            { q: 'I [___] (not) work on Sundays.', a: 'don\'t have to', o: ['mustn\'t', 'shouldn\'t', 'can\'t'] },
            { q: 'You [___] smoke here. It\'s forbidden.', a: 'mustn\'t', o: ['don\'t have to', 'should', 'can'] },
            { q: 'Does she [___] go now?', a: 'have to', o: ['must', 'should', 'has to'] },
            { q: 'You [___] try this cake. It\'s delicious!', a: 'must', o: ['have to', 'should', 'can'] },
            { q: 'We [___] (not) buy more milk. We have some.', a: 'don\'t have to', o: ['mustn\'t', 'shouldn\'t', 'can\'t'] },
            { q: 'Students [___] be quiet in the library.', a: 'must', o: ['have to', 'should', 'can'] },
            { q: 'I [___] call my mom. I haven\'t talked to her for days.', a: 'must', o: ['have to', 'should', 'can'] },
            { q: 'Do you [___] get up early?', a: 'have to', o: ['must', 'should', 'has to'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Necessity Keywords',
        words: ['MUST', 'HAVE', 'NEED', 'OBLIGATION', 'RULE', 'FORBIDDEN', 'NECESSARY', 'REQUIRE', 'PERMISSION', 'OPTION']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Obligation',
        questions: [
            { q: 'I / have / to / go / now / .', a: 'I have to go now.' },
            { q: 'You / must / listen / to / me / .', a: 'You must listen to me.' },
            { q: 'She / doesn\'t / have / to / work / today / .', a: 'She doesn\'t have to work today.' },
            { q: 'You / mustn\'t / park / here / .', a: 'You mustn\'t park here.' },
            { q: 'Do / I / have / to / pay / ?', a: 'Do I have to pay?' },
            { q: 'We / must / be / careful / .', a: 'We must be careful.' },
            { q: 'He / has / to / study / hard / .', a: 'He has to study hard.' },
            { q: 'You / don\'t / have / to / come / .', a: 'You don\'t have to come.' },
            { q: 'Must / I / do / this / ?', a: 'Must I do this?' },
            { q: 'They / have / to / arrive / on / time / .', a: 'They have to arrive on time.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Obligation Rules',
        questions: [
            { q: 'Which is usually for rules and external laws?', a: 'Have to', o: ['Must'] },
            { q: 'Which is usually for personal feelings/obligations?', a: 'Must', o: ['Have to'] },
            { q: 'What does "mustn\'t" mean?', a: 'Prohibited / Forbidden', o: ['Not necessary'] },
            { q: 'What does "don\'t have to" mean?', a: 'Not necessary (but optional)', o: ['Prohibited'] },
            { q: 'Does "must" have a past form?', a: 'No (use "had to")', o: ['Yes ("musted")'] },
            { q: 'Question form of "He has to":', a: 'Does he have to...?', o: ['Has he to...?', 'Must he...?'] },
            { q: 'What follows "must"?', a: 'Base form of the verb', o: ['Verb with "to"'] },
            { q: 'What follows "have"?', a: '"to" + Base form', o: ['Base form'] },
            { q: 'Correct: "I [___] (strong advice) go now."', a: 'must', o: ['have to'] },
            { q: 'Correct: "You [___] (no choice) go now."', a: 'have to', o: ['must'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Must or Have to?',
        questions: [
            { q: 'I [___] (internal) stop eating so much sugar.', a: 'must' },
            { q: 'We [___] (rule) wear helmets.', a: 'have to' },
            { q: 'You [___] (prohibited) talk during the exam.', a: "mustn't" },
            { q: 'She [___] (not necessary) cook tonight. We can go out.', a: "doesn't have to" },
            { q: 'Do you [___] (question) work tomorrow?', a: 'have to' },
            { q: 'He [___] (past obligation) stay late yesterday.', a: 'had to' },
            { q: 'You [___] (strong recommendation) see this movie!', a: 'must' },
            { q: 'Dogs [___] (rule) be on a leash here.', a: 'must / have to' },
            { q: 'I [___] (not necessary) wake up early on Saturdays.', a: "don't have to" },
            { q: 'You [___] (prohibited) touch that. It\'s dangerous.', a: "mustn't" }
        ]
    }
]);

// --- TOPIC 10: Modal Verbs for Requests ---
updateTopic('A2', 10, [
    {
        type: 'multiple_choice',
        title: 'Asking for Help',
        questions: [
            { q: '[___] you help me with this?', a: 'Can', o: ['Are', 'Do', 'Does'] },
            { q: '[___] you open the door, please?', a: 'Could', o: ['Are', 'Should', 'Have'] },
            { q: '[___] I have a glass of water?', a: 'May', o: ['Must', 'Will', 'Am'] },
            { q: '[___] you mind opening the window?', a: 'Would', o: ['Do', 'Can', 'Could'] },
            { q: '[___] you like some coffee?', a: 'Would', o: ['Do', 'Can', 'Should'] },
            { q: 'Can I [___] your pen?', a: 'borrow', o: ['lend', 'borrowed', 'borrows'] },
            { q: 'Could you [___] me a favor?', a: 'do', o: ['make', 'did', 'does'] },
            { q: '[___] I use your phone?', a: 'May', o: ['Am', 'Do', 'Would'] },
            { q: 'Would you [___] helping me?', a: 'mind', o: ['like', 'want', 'think'] },
            { q: 'Sure, [___] you go.', a: 'here', o: ['there', 'where', 'this'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Request Keywords',
        words: ['REQUEST', 'POLITE', 'PLEASE', 'COULD', 'WOULD', 'MIND', 'BORROW', 'LEND', 'FAVOR', 'HELP']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Request',
        questions: [
            { q: 'Can / you / help / me / ?', a: 'Can you help me?' },
            { q: 'Could / you / pass / the / salt / ?', a: 'Could you pass the salt?' },
            { q: 'Would / you / like / some / tea / ?', a: 'Would you like some tea?' },
            { q: 'May / I / come / in / ?', a: 'May I come in?' },
            { q: 'Would / you / mind / closing / the / door / ?', a: 'Would you mind closing the door?' },
            { q: 'Can / I / borrow / your / book / ?', a: 'Can I borrow your book?' },
            { q: 'Could / you / tell / me / the / time / ?', a: 'Could you tell me the time?' },
            { q: 'Would / you / like / to / go / out / ?', a: 'Would you like to go out?' },
            { q: 'May / I / sit / here / ?', a: 'May I sit here?' },
            { q: 'Can / you / do / me / a / favor / ?', a: 'Can you do me a favor?' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Request Rules',
        questions: [
            { q: 'Which is more polite: "Can you" or "Could you"?', a: 'Could you', o: ['Can you'] },
            { q: 'What is the most formal way to ask for permission?', a: 'May I', o: ['Can I', 'Could I'] },
            { q: 'After "Would you mind...", we use...', a: 'Verb + -ing', o: ['Base form', 'Verb + to'] },
            { q: 'If someone asks "Would you mind...", what is a positive response?', a: 'No, not at all', o: ['Yes, I mind', 'Yes, sure'] },
            { q: 'What does "Would you like..." mean?', a: 'An offer / invitation', o: ['A question about habits'] },
            { q: 'What follows "Could you..."?', a: 'Base form of the verb', o: ['Verb + -ing', 'Verb + to'] },
            { q: 'Is "Can I lend your pen" correct?', a: 'No (use "borrow")', o: ['Yes'] },
            { q: 'What does "lend" mean?', a: 'To give something for a short time', o: ['To take something for a short time'] },
            { q: 'Polite way to say "No":', a: 'I\'m sorry, I can\'t', o: ['No!', 'I don\'t want to'] },
            { q: 'Response to "Could you...":', a: 'Certainly / Sure / Of course', o: ['Maybe', 'What?'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Ask Nicely',
        questions: [
            { q: '[___] (can/could) you help me?', a: 'Can / Could' },
            { q: '[___] (formal) I use your computer?', a: 'May' },
            { q: 'Would you mind [___] (open) the window?', a: 'opening' },
            { q: 'Would you [___] some more coffee?', a: 'like' },
            { q: 'Can I [___] (take) your umbrella?', a: 'borrow' },
            { q: 'Could you [___] (give) me your phone number?', a: 'give' },
            { q: 'May I [___] (formal) ask a question?', a: 'ask' },
            { q: 'Would you [___] giving me a hand?', a: 'mind' },
            { q: 'Sure, [___] problem!', a: 'no' },
            { q: 'Of [___], here you go.', a: 'course' }
        ]
    }
]);

fs.writeFileSync(path, JSON.stringify(topics, null, 2));
console.log('Batch 5: A2 Topics 6-10 updated successfully.');
