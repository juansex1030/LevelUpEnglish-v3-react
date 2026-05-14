const fs = require('fs');
const path = 'backend/data/topics.json';
const topics = JSON.parse(fs.readFileSync(path, 'utf8'));

const updateTopic = (level, number, games) => {
    const t = topics.find(topic => topic.level === level && topic.number === number);
    if (t) {
        t.premium_practice = JSON.stringify({ games }, null, 2);
    }
};

// --- TOPIC 16: First Conditional ---
updateTopic('A2', 16, [
    {
        type: 'multiple_choice',
        title: 'Real Possibilities',
        questions: [
            { q: 'If it [___] tomorrow, we will go to the beach.', a: 'is sunny', o: ['will be sunny', 'sunny', 'is being sunny'] },
            { q: 'She will pass the exam if she [___] .', a: 'studies', o: ['will study', 'study', 'studied'] },
            { q: 'If you [___] (not) hurry, you will miss the train.', a: 'don\'t', o: ['won\'t', 'doesn\'t', 'not'] },
            { q: 'I [___] you if I find your phone.', a: 'will call', o: ['call', 'called', 'calling'] },
            { q: 'If he [___] here, he will help us.', a: 'comes', o: ['will come', 'come', 'coming'] },
            { q: 'We [___] late if we don\'t leave now.', a: 'will be', o: ['are', 'be', 'were'] },
            { q: 'If they [___] (not) arrive soon, I will leave.', a: 'don\'t', o: ['won\'t', 'doesn\'t', 'not'] },
            { q: 'What [___] you do if you win the lottery?', a: 'will', o: ['do', 'are', 'did'] },
            { q: 'If I have time, I [___] you tonight.', a: 'will visit', o: ['visit', 'visited', 'visits'] },
            { q: 'She will be angry if you [___] (not) call her.', a: 'don\'t', o: ['won\'t', 'doesn\'t', 'not'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Future Keywords',
        words: ['IF', 'WILL', 'UNLESS', 'HAPPEN', 'RESULT', 'POSSIBLE', 'PROBABLE', 'FUTURE', 'ACTION', 'CHANCE']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Future',
        questions: [
            { q: 'If / it / rains / I / will / stay / home / .', a: 'If it rains I will stay home.' },
            { q: 'She / will / pass / if / she / studies / .', a: 'She will pass if she studies.' },
            { q: 'If / you / help / me / I / will / help / you / .', a: 'If you help me I will help you.' },
            { q: 'We / will / be / late / if / we / don\'t / hurry / .', a: 'We will be late if we don\'t hurry.' },
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

// --- TOPIC 17: Dates (Fechas) ---
updateTopic('A2', 17, [
    {
        type: 'multiple_choice',
        title: 'Time and Calendar',
        questions: [
            { q: 'Today is [___] October.', a: 'the fifth of', o: ['the five of', 'five', 'fifth'] },
            { q: 'My birthday is [___] March 10th.', a: 'on', o: ['in', 'at', 'the'] },
            { q: 'Halloween is [___] October 31st.', a: 'on', o: ['in', 'at', 'the'] },
            { q: 'I was born [___] 1995.', a: 'in', o: ['on', 'at', 'the'] },
            { q: 'The meeting is [___] Monday.', a: 'on', o: ['in', 'at', 'the'] },
            { q: 'It is very cold [___] winter.', a: 'in', o: ['on', 'at', 'the'] },
            { q: 'Christmas is [___] December 25th.', a: 'on', o: ['in', 'at', 'the'] },
            { q: 'The shop opens [___] 9:00 AM.', a: 'at', o: ['in', 'on', 'the'] },
            { q: 'I will see you [___] next week.', a: '(nothing)', o: ['in', 'on', 'at'] },
            { q: 'She left [___] Friday morning.', a: 'on', o: ['in', 'at', 'the'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Date Words',
        words: ['JANUARY', 'FEBRUARY', 'MONDAY', 'TUESDAY', 'AUTUMN', 'SPRING', 'WINTER', 'SUMMER', 'FIRST', 'SECOND']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Date',
        questions: [
            { q: 'Today / is / Monday / .', a: 'Today is Monday.' },
            { q: 'My / birthday / is / in / July / .', a: 'My birthday is in July.' },
            { q: 'It / is / the / second / of / May / .', a: 'It is the second of May.' },
            { q: 'The / party / is / on / Saturday / .', a: 'The party is on Saturday.' },
            { q: 'I / was / born / in / 1990 / .', a: 'I was born in 1990.' },
            { q: 'Christmas / is / on / December / 25th / .', a: 'Christmas is on December 25th.' },
            { q: 'The / shop / closes / at / 6 / PM / .', a: 'The shop closes at 6 PM.' },
            { q: 'We / go / to / the / beach / in / summer / .', a: 'We go to the beach in summer.' },
            { q: 'She / arrived / on / Friday / morning / .', a: 'She arrived on Friday morning.' },
            { q: 'The / exam / is / next / week / .', a: 'The exam is next week.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Calendar Rules',
        questions: [
            { q: 'Which preposition is used for months?', a: 'In', o: ['On', 'At'] },
            { q: 'Which preposition is used for specific dates (e.g. May 5th)?', a: 'On', o: ['In', 'At'] },
            { q: 'Which preposition is used for days of the week?', a: 'On', o: ['In', 'At'] },
            { q: 'Which preposition is used for years?', a: 'In', o: ['On', 'At'] },
            { q: 'Which preposition is used for seasons?', a: 'In', o: ['On', 'At'] },
            { q: 'Which preposition is used for times (e.g. 8:00)?', a: 'At', o: ['In', 'On'] },
            { q: 'How do you say "1st"?', a: 'First', o: ['One', 'Oneth'] },
            { q: 'How do you say "2nd"?', a: 'Second', o: ['Two', 'Twoth'] },
            { q: 'How do you say "3rd"?', a: 'Third', o: ['Three', 'Threeth'] },
            { q: 'How do you say "12th"?', a: 'Twelfth', o: ['Twelve', 'Twelvest'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Date',
        questions: [
            { q: 'I was born [___] 1998.', a: 'in' },
            { q: 'The meeting is [___] October 5th.', a: 'on' },
            { q: 'See you [___] Monday!', a: 'on' },
            { q: 'It\'s cold [___] January.', a: 'in' },
            { q: 'The flight is [___] 10:30 AM.', a: 'at' },
            { q: 'I love going out [___] Friday nights.', a: 'on' },
            { q: 'My anniversary is [___] February.', a: 'in' },
            { q: 'We have a holiday [___] summer.', a: 'in' },
            { q: 'The class starts [___] nine o\'clock.', a: 'at' },
            { q: 'He left [___] 2020.', a: 'in' }
        ]
    }
]);

// --- TOPIC 18: Tag Questions (Preguntas Coletilla) ---
updateTopic('A2', 18, [
    {
        type: 'multiple_choice',
        title: 'Right, isn\'t it?',
        questions: [
            { q: 'You are coming, [___]?', a: 'aren\'t you', o: ['don\'t you', 'isn\'t it', 'are you'] },
            { q: 'He is a doctor, [___]?', a: 'isn\'t he', o: ['is he', 'does he', 'doesn\'t he'] },
            { q: 'She likes pizza, [___]?', a: 'doesn\'t she', o: ['don\'t she', 'likes she', 'isn\'t she'] },
            { q: 'They don\'t smoke, [___]?', a: 'do they', o: ['don\'t they', 'are they', 'aren\'t they'] },
            { q: 'We can go, [___]?', a: 'can\'t we', o: ['can we', 'don\'t we', 'aren\'t we'] },
            { q: 'You didn\'t call, [___]?', a: 'did you', o: ['didn\'t you', 'do you', 'don\'t you'] },
            { q: 'He was here, [___]?', a: 'wasn\'t he', o: ['was he', 'is he', 'isn\'t he'] },
            { q: 'I am late, [___]?', a: 'aren\'t I', o: ['am I', 'am not I', 'don\'t I'] },
            { q: 'Close the door, [___]?', a: 'will you / can you', o: ['don\'t you', 'isn\'t it'] },
            { q: 'Let\'s go, [___]?', a: 'shall we', o: ['will we', 'do we', 'aren\'t we'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Tag Keywords',
        words: ['ARENT', 'ISNT', 'DONT', 'DOESNT', 'CANT', 'SHALL', 'TAG', 'CONFIRM', 'RIGHT', 'REVERSE']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Tag',
        questions: [
            { q: 'You / are / happy / aren\'t / you / ?', a: 'You are happy aren\'t you?' },
            { q: 'He / likes / cats / doesn\'t / he / ?', a: 'He likes cats doesn\'t he?' },
            { q: 'She / can\'t / swim / can / she / ?', a: 'She can\'t swim can she?' },
            { q: 'They / went / home / didn\'t / they / ?', a: 'They went home didn\'t they?' },
            { q: 'It / is / hot / isn\'t / it / ?', a: 'It is hot isn\'t it?' },
            { q: 'We / won\'t / be / late / will / we / ?', a: 'We won\'t be late will we?' },
            { q: 'You / have / finished / haven\'t / you / ?', a: 'You have finished haven\'t you?' },
            { q: 'I / am / right / aren\'t / I / ?', a: 'I am right aren\'t I?' },
            { q: 'Don\'t / forget / will / you / ?', a: 'Don\'t forget will you?' },
            { q: 'Let\'s / dance / shall / we / ?', a: 'Let\'s dance shall we?' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Tag Rules',
        questions: [
            { q: 'If the sentence is positive, the tag is...', a: 'Negative', o: ['Positive'] },
            { q: 'If the sentence is negative, the tag is...', a: 'Positive', o: ['Negative'] },
            { q: 'Tag for "I am":', a: 'Aren\'t I?', o: ['Am I?', 'Am not I?'] },
            { q: 'Tag for "Let\'s":', a: 'Shall we?', o: ['Will we?', 'Do we?'] },
            { q: 'Which auxiliary do we use if there is no auxiliary in the sentence?', a: 'Do/Does/Did', o: ['Be', 'Have'] },
            { q: 'Tag for "You like coffee":', a: 'Don\'t you?', o: ['Aren\'t you?', 'Do you?'] },
            { q: 'Tag for "He can play":', a: 'Can\'t he?', o: ['Doesn\'t he?', 'Can he?'] },
            { q: 'Tag for "She was there":', a: 'Wasn\'t she?', o: ['Isn\'t she?', 'Was she?'] },
            { q: 'Tag for "They won\'t come":', a: 'Will they?', o: ['Won\'t they?', 'Do they?'] },
            { q: 'Tag for "Close the window":', a: 'Will you? / Can you?', o: ['Don\'t you?', 'Isn\'t it?'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Complete the Tag',
        questions: [
            { q: 'You are tired, [___]?', a: "aren't you" },
            { q: 'He doesn\'t know, [___]?', a: 'does he' },
            { q: 'She passed the exam, [___]?', a: "didn't she" },
            { q: 'We can stay, [___]?', a: "can't we" },
            { q: 'I am late, [___]?', a: "aren't I" },
            { q: 'It is beautiful, [___]?', a: "isn't it" },
            { q: 'They have left, [___]?', a: "haven't they" },
            { q: 'Let\'s eat, [___]?', a: 'shall we' },
            { q: 'You won\'t tell, [___]?', a: 'will you' },
            { q: 'She is your sister, [___]?', a: "isn't she" }
        ]
    }
]);

// --- TOPIC 19: Express Agreement (So do I / Neither do I) ---
updateTopic('A2', 19, [
    {
        type: 'multiple_choice',
        title: 'Me too / Me neither',
        questions: [
            { q: 'I like pizza. - [___].', a: 'So do I', o: ['Neither do I', 'So am I', 'I too'] },
            { q: 'I don\'t like spinach. - [___].', a: 'Neither do I', o: ['So do I', 'Me too', 'I don\'t too'] },
            { q: 'I am tired. - [___].', a: 'So am I', o: ['So do I', 'Neither am I', 'I am too'] },
            { q: 'I wasn\'t happy. - [___].', a: 'Neither was I', o: ['So was I', 'Me neither', 'I wasn\'t either'] },
            { q: 'I have finished. - [___].', a: 'So have I', o: ['So do I', 'Neither have I', 'Me too'] },
            { q: 'I can swim. - [___].', a: 'So can I', o: ['Neither can I', 'So do I', 'I can too'] },
            { q: 'I didn\'t see it. - [___].', a: 'Neither did I', o: ['So did I', 'Me neither', 'I didn\'t too'] },
            { q: 'I will go. - [___].', a: 'So will I', o: ['Neither will I', 'I will too', 'So do I'] },
            { q: 'I don\'t have a car. - [___].', a: 'Neither do I', o: ['So do I', 'I don\'t either', 'Me neither'] },
            { q: 'I love music. - [___].', a: 'So do I', o: ['Me too', 'Neither do I', 'I love too'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Agreement Keywords',
        words: ['SO', 'NEITHER', 'AGREE', 'TOO', 'EITHER', 'SAME', 'RESPONSE', 'INVERT', 'REVERSE', 'MATCH']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Agreement',
        questions: [
            { q: 'So / do / I / .', a: 'So do I.' },
            { q: 'Neither / do / I / .', a: 'Neither do I.' },
            { q: 'So / am / I / .', a: 'So am I.' },
            { q: 'Neither / was / I / .', a: 'Neither was I.' },
            { q: 'So / have / I / .', a: 'So have I.' },
            { q: 'Neither / can / I / .', a: 'Neither can I.' },
            { q: 'So / will / I / .', a: 'So will I.' },
            { q: 'Neither / did / I / .', a: 'Neither did I.' },
            { q: 'So / would / I / .', a: 'So would I.' },
            { q: 'Neither / have / I / .', a: 'Neither have I.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Agreement Rules',
        questions: [
            { q: 'When do we use "So"?', a: 'To agree with positive sentences', o: ['To agree with negative sentences'] },
            { q: 'When do we use "Neither"?', a: 'To agree with negative sentences', o: ['To agree with positive sentences'] },
            { q: 'What is the word order?', a: 'So/Neither + Auxiliary + Subject', o: ['So/Neither + Subject + Auxiliary'] },
            { q: 'Agree with "I like coffee":', a: 'So do I', o: ['So am I', 'Me too'] },
            { q: 'Agree with "I am not cold":', a: 'Neither am I', o: ['Neither do I', 'Me neither'] },
            { q: 'Agree with "I went home":', a: 'So did I', o: ['So do I', 'Me too'] },
            { q: 'Agree with "I haven\'t eaten":', a: 'Neither have I', o: ['Neither do I', 'Me neither'] },
            { q: 'Can we use "Me too"?', a: 'Yes (less formal)', o: ['No'] },
            { q: 'Can we use "Me neither"?', a: 'Yes (less formal)', o: ['No'] },
            { q: 'Agree with "I can\'t dance":', a: 'Neither can I', o: ['So can\'t I', 'Me neither'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Agree with the Speaker',
        questions: [
            { q: 'I like apples. - So [___] I.', a: 'do' },
            { q: 'I don\'t like apples. - Neither [___] I.', a: 'do' },
            { q: 'I am happy. - So [___] I.', a: 'am' },
            { q: 'I wasn\'t there. - Neither [___] I.', a: 'was' },
            { q: 'I can help. - So [___] I.', a: 'can' },
            { q: 'I didn\'t see him. - Neither [___] I.', a: 'did' },
            { q: 'I have finished. - So [___] I.', a: 'have' },
            { q: 'I won\'t go. - Neither [___] I.', a: 'will' },
            { q: 'I love you. - [___] do I.', a: 'So' },
            { q: 'I\'m not hungry. - [___] am I.', a: 'Neither' }
        ]
    }
]);

// --- TOPIC 20: Stative Verbs ---
updateTopic('A2', 20, [
    {
        type: 'multiple_choice',
        title: 'State or Action?',
        questions: [
            { q: 'I [___] (know) the answer.', a: 'know', o: ['am knowing', 'knowing', 'knows'] },
            { q: 'I [___] (think) you are right.', a: 'think', o: ['am thinking', 'thinking', 'thinks'] },
            { q: 'I [___] (think) about my vacation right now.', a: 'am thinking', o: ['think', 'thinks', 'thought'] },
            { q: 'She [___] (like) chocolate.', a: 'likes', o: ['is liking', 'liking', 'like'] },
            { q: 'This soup [___] (taste) delicious.', a: 'tastes', o: ['is tasting', 'tasting', 'taste'] },
            { q: 'He [___] (have) a fast car.', a: 'has', o: ['is having', 'haves', 'having'] },
            { q: 'I [___] (understand) what you mean.', a: 'understand', o: ['am understanding', 'understanding', 'understands'] },
            { q: 'They [___] (want) to leave now.', a: 'want', o: ['are wanting', 'wanting', 'wants'] },
            { q: 'I [___] (believe) in ghosts.', a: 'believe', o: ['am believing', 'believing', 'believes'] },
            { q: 'This book [___] (belong) to me.', a: 'belongs', o: ['is belonging', 'belonging', 'belong'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Stative Keywords',
        words: ['KNOW', 'THINK', 'LOVE', 'HATE', 'WANT', 'NEED', 'BELIEVE', 'FEEL', 'SMELL', 'TASTE']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the State',
        questions: [
            { q: 'I / know / your / name / .', a: 'I know your name.' },
            { q: 'She / likes / ice / cream / .', a: 'She likes ice cream.' },
            { q: 'He / has / a / big / house / .', a: 'He has a big house.' },
            { q: 'I / understand / the / problem / .', a: 'I understand the problem.' },
            { q: 'We / believe / you / .', a: 'We believe you.' },
            { q: 'This / belongs / to / me / .', a: 'This belongs to me.' },
            { q: 'I / need / some / help / .', a: 'I need some help.' },
            { q: 'They / want / some / pizza / .', a: 'They want some pizza.' },
            { q: 'It / smells / good / .', a: 'It smells good.' },
            { q: 'I / remember / you / .', a: 'I remember you.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Stative Rules',
        questions: [
            { q: 'What is a "Stative Verb"?', a: 'A verb about a state, not action', o: ['A verb about movement'] },
            { q: 'Can stative verbs be used in "-ing" form?', a: 'Usually no', o: ['Yes, always'] },
            { q: 'Which is a stative verb?', a: 'Know', o: ['Run', 'Eat', 'Dance'] },
            { q: 'Is "I am loving it" technically correct in formal grammar?', a: 'No (stative)', o: ['Yes'] },
            { q: 'Can "Think" be both?', a: 'Yes (opinion vs. mental process)', o: ['No'] },
            { q: 'Can "Have" be both?', a: 'Yes (possession vs. action like eating)', o: ['No'] },
            { q: 'Is "I am needing help" correct?', a: 'No (use "I need")', o: ['Yes'] },
            { q: 'Which category includes stative verbs?', a: 'Thoughts, Feelings, Senses', o: ['Sports, Activities'] },
            { q: 'Correct: "I [___] you."', a: 'believe', o: ['am believing'] },
            { q: 'Correct: "This [___] (smell) great."', a: 'smells', o: ['is smelling'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Action or State?',
        questions: [
            { q: 'I [___] (know) her for years.', a: 'have known' },
            { q: 'I [___] (think) it\'s a good idea.', a: 'think' },
            { q: 'Wait, I [___] (think) about it.', a: 'am thinking' },
            { q: 'She [___] (have) two brothers.', a: 'has' },
            { q: 'We [___] (have) lunch right now.', a: 'are having' },
            { q: 'It [___] (smell) like roses.', a: 'smells' },
            { q: 'I [___] (not / understand) the rule.', a: "don't understand" },
            { q: 'They [___] (want) to go home.', a: 'want' },
            { q: 'He [___] (believe) in magic.', a: 'believes' },
            { q: 'This [___] (belong) to my dad.', a: 'belongs' }
        ]
    }
]);

fs.writeFileSync(path, JSON.stringify(topics, null, 2));
console.log('Batch 7: A2 Topics 16-20 updated successfully.');
