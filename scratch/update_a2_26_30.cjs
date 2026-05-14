const fs = require('fs');
const path = 'backend/data/topics.json';
const topics = JSON.parse(fs.readFileSync(path, 'utf8'));

const updateTopic = (level, number, games) => {
    const t = topics.find(topic => topic.level === level && topic.number === number);
    if (t) {
        t.premium_practice = JSON.stringify({ games }, null, 2);
    }
};

// --- TOPIC 26: Adverbs for Possibility ---
updateTopic('A2', 26, [
    {
        type: 'multiple_choice',
        title: 'How likely is it?',
        questions: [
            { q: 'It [___] rain today. The sky is grey.', a: 'might', o: ['must', 'should', 'can'] },
            { q: '[___] she is late because of traffic.', a: 'Maybe', o: ['Probably', 'Certainly', 'Definitely'] },
            { q: 'He will [___] pass the exam. He studied a lot.', a: 'probably', o: ['maybe', 'might', 'could'] },
            { q: 'She [___] (not) come to the party. She isn\'t sure.', a: 'might not', o: ['cannot', 'shouldn\'t', 'mustn\'t'] },
            { q: 'It is [___] true. I\'m 100% sure.', a: 'definitely', o: ['probably', 'maybe', 'perhaps'] },
            { q: '[___] we can go out later.', a: 'Perhaps', o: ['Definitely', 'Certainly', 'Surely'] },
            { q: 'He [___] be at home. I saw his car.', a: 'could', o: ['might not', 'shouldn\'t', 'may not'] },
            { q: 'We [___] go to Spain this summer.', a: 'may', o: ['must', 'have to', 'should'] },
            { q: 'It\'s [___] that he forgot.', a: 'possible', o: ['definitely', 'certainly', 'surely'] },
            { q: 'They are [___] sleeping now.', a: 'likely', o: ['maybe', 'perhaps', 'might'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Possibility Words',
        words: ['MAYBE', 'PERHAPS', 'MIGHT', 'COULD', 'PROBABLY', 'POSSIBLE', 'LIKELY', 'MAY', 'CERTAINLY', 'SURELY']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Chance',
        questions: [
            { q: 'Maybe / I / will / see / you / tomorrow / .', a: 'Maybe I will see you tomorrow.' },
            { q: 'It / might / rain / later / .', a: 'It might rain later.' },
            { q: 'He / will / probably / be / late / .', a: 'He will probably be late.' },
            { q: 'Perhaps / they / are / at / home / .', a: 'Perhaps they are at home.' },
            { q: 'I / might / not / go / out / tonight / .', a: 'I might not go out tonight.' },
            { q: 'She / could / be / at / work / .', a: 'She could be at work.' },
            { q: 'It / is / definitely / a / good / idea / .', a: 'It is definitely a good idea.' },
            { q: 'We / may / visit / them / next / week / .', a: 'We may visit them next week.' },
            { q: 'They / will / surely / win / .', a: 'They will surely win.' },
            { q: 'Is / it / possible / to / help / me / ?', a: 'Is it possible to help me?' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Possibility Rules',
        questions: [
            { q: 'Which adverb usually goes at the beginning of a sentence?', a: 'Maybe / Perhaps', o: ['Probably', 'Definitely'] },
            { q: 'Where does "probably" go with the verb "to be"?', a: 'After the verb', o: ['Before the verb'] },
            { q: 'Where does "probably" go with other verbs?', a: 'Before the verb', o: ['After the verb'] },
            { q: 'Which modal expresses a small possibility?', a: 'Might / Could', o: ['Must', 'Should'] },
            { q: 'Negative of "might":', a: 'Might not', o: ["Mightn't (rare)", "Don't might"] },
            { q: 'What does "definitely" mean?', a: '100% sure', o: ['50% sure'] },
            { q: 'What does "likely" mean?', a: 'More than 50% chance', o: ['Less than 50% chance'] },
            { q: 'Can we say "I maybe will go"?', a: 'No (use "Maybe I will go")', o: ['Yes'] },
            { q: 'Can we say "He probably is late"?', a: 'No (use "He is probably late")', o: ['Yes'] },
            { q: 'Is "perhaps" more formal than "maybe"?', a: 'Yes', o: ['No'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Probability',
        questions: [
            { q: '[___] (50%) it will snow tonight.', a: 'Maybe / Perhaps' },
            { q: 'I [___] (50%) go to the party, I\'m not sure.', a: 'might / may' },
            { q: 'He [___] (80%) knows the answer.', a: 'probably' },
            { q: 'It is [___] (100%) true.', a: 'definitely' },
            { q: 'We [___] (50%) be late.', a: 'could / might' },
            { q: 'She [___] (not sure) won\'t come.', a: 'probably' },
            { q: '[___] (formal 50%) we should wait.', a: 'Perhaps' },
            { q: 'They are [___] (likely) to win.', a: 'likely' },
            { q: 'I [___] (50%) see you later.', a: 'might / may' },
            { q: 'It\'s [___] (possible) that he lost it.', a: 'possible' }
        ]
    }
]);

// --- TOPIC 27: Modals for Prohibition ---
updateTopic('A2', 27, [
    {
        type: 'multiple_choice',
        title: 'Not Allowed!',
        questions: [
            { q: 'You [___] smoke here. It\'s a hospital.', a: 'mustn\'t', o: ['don\'t have to', 'should', 'can'] },
            { q: 'You [___] park your car in front of the exit.', a: 'can\'t', o: ['should', 'have to', 'must'] },
            { q: 'Students [___] use mobile phones during the exam.', a: 'are not allowed to', o: ['don\'t have to', 'should', 'can'] },
            { q: 'You [___] enter this room. It\'s private.', a: 'mustn\'t', o: ['don\'t have to', 'should', 'can'] },
            { q: 'We [___] (not) talk in the library.', a: 'aren\'t allowed to', o: ['don\'t have to', 'should', 'must'] },
            { q: 'You [___] touch the paintings.', a: 'mustn\'t', o: ['don\'t have to', 'can', 'should'] },
            { q: 'Employees [___] (not) wear jeans.', a: 'can\'t', o: ['don\'t have to', 'should', 'must'] },
            { q: 'You [___] feed the animals in the zoo.', a: 'mustn\'t', o: ['don\'t have to', 'should', 'can'] },
            { q: 'Is it [___] to take photos here?', a: 'forbidden', o: ['allowed', 'mandatory', 'legal'] },
            { q: 'You [___] (not) go inside without a ticket.', a: 'are not allowed to', o: ['don\'t have to', 'should', 'can'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Prohibition Words',
        words: ['MUSTNT', 'CANT', 'FORBIDDEN', 'BANNED', 'ILLEGAL', 'ALLOWED', 'PERMIT', 'RULE', 'STOP', 'OFF']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Ban',
        questions: [
            { q: 'You / mustn\'t / smoke / here / .', a: 'You mustn\'t smoke here.' },
            { q: 'You / can\'t / park / there / .', a: 'You can\'t park there.' },
            { q: 'It / is / forbidden / to / enter / .', a: 'It is forbidden to enter.' },
            { q: 'We / aren\'t / allowed / to / talk / .', a: 'We aren\'t allowed to talk.' },
            { q: 'You / mustn\'t / touch / the / art / .', a: 'You mustn\'t touch the art.' },
            { q: 'Mobile / phones / are / not / allowed / .', a: 'Mobile phones are not allowed.' },
            { q: 'You / can\'t / go / in / without / a / mask / .', a: 'You can\'t go in without a mask.' },
            { q: 'Smoking / is / banned / in / the / building / .', a: 'Smoking is banned in the building.' },
            { q: 'You / mustn\'t / feed / the / birds / .', a: 'You mustn\'t feed the birds.' },
            { q: 'He / is / not / allowed / to / stay / late / .', a: 'He is not allowed to stay late.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Prohibition Rules',
        questions: [
            { q: 'What does "mustn\'t" mean?', a: 'It is forbidden / prohibited', o: ['It is not necessary'] },
            { q: 'What does "don\'t have to" mean?', a: 'It is not necessary (but you can)', o: ['It is forbidden'] },
            { q: 'Which modal is used for lack of permission?', a: 'Can\'t', o: ['Mustn\'t'] },
            { q: 'Which phrase is more formal?', a: 'Are not allowed to', o: ['Can\'t'] },
            { q: 'What follows "mustn\'t"?', a: 'Base form of the verb', o: ['Verb with "to"'] },
            { q: 'What follows "allowed"?', a: '"to" + Base form', o: ['Base form'] },
            { q: 'Can we use "mustn\'t" for advice?', a: 'Yes (strong negative advice)', o: ['No'] },
            { q: 'Correct: "You [___] drink and drive."', a: "mustn't / can't", o: ["don't have to"] },
            { q: 'Correct: "Students [___] be late."', a: "mustn't", o: ["don't have to"] },
            { q: 'Is "forbidden" an adjective or a verb here?', a: 'Adjective', o: ['Verb'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Stop!',
        questions: [
            { q: 'You [___] (forbidden) park here.', a: "mustn't" },
            { q: 'You [___] (no permission) enter.', a: "can't" },
            { q: 'We are not [___] (permission) to use calculators.', a: 'allowed' },
            { q: 'It is [___] (prohibited) to smoke.', a: 'forbidden' },
            { q: 'You [___] (strong advice) tell anyone.', a: "mustn't" },
            { q: 'Cameras are [___] (not allowed) in the museum.', a: 'banned / forbidden' },
            { q: 'You [___] (not) touch the animal.', a: "mustn't" },
            { q: 'Is it [___] (legal) to fish here?', a: 'allowed / legal' },
            { q: 'He [___] (not) allowed to leave.', a: 'is not' },
            { q: 'You [___] (not) bring food inside.', a: "can't / mustn't" }
        ]
    }
]);

// --- TOPIC 28: Second Conditional ---
updateTopic('A2', 28, [
    {
        type: 'multiple_choice',
        title: 'Imaginary Situations',
        questions: [
            { q: 'If I [___] a million dollars, I would buy a boat.', a: 'had', o: ['have', 'will have', 'would have'] },
            { q: 'If she [___] taller, she could be a model.', a: 'were / was', o: ['is', 'will be', 'would be'] },
            { q: 'I [___] around the world if I had time.', a: 'would travel', o: ['will travel', 'travel', 'traveled'] },
            { q: 'If you [___] more, you would pass.', a: 'studied', o: ['study', 'will study', 'would study'] },
            { q: 'He [___] more exercise if he wasn\'t so busy.', a: 'would do', o: ['will do', 'did', 'does'] },
            { q: 'If I [___] you, I would tell the truth.', a: 'were', o: ['am', 'was', 'be'] },
            { q: 'What [___] you do if you saw a ghost?', a: 'would', o: ['will', 'do', 'did'] },
            { q: 'If we [___] in London, we would go to the theater.', a: 'lived', o: ['live', 'will live', 'would live'] },
            { q: 'She [___] (not) be so tired if she went to bed early.', a: 'wouldn\'t', o: ['won\'t', 'doesn\'t', 'didn\'t'] },
            { q: 'If I [___] his number, I would call him.', a: 'had', o: ['have', 'will have', 'knew'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Imaginary Keywords',
        words: ['WOULD', 'COULD', 'WERE', 'HAD', 'IF', 'DREAM', 'IMAGINE', 'HYPOTHESIS', 'UNREAL', 'CONDITION']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Dream',
        questions: [
            { q: 'If / I / were / rich / I / would / travel / .', a: 'If I were rich I would travel.' },
            { q: 'She / would / help / you / if / she / could / .', a: 'She would help you if she could.' },
            { q: 'If / it / stopped / raining / we / could / go / .', a: 'If it stopped raining we could go.' },
            { q: 'What / would / you / do / with / the / money / ?', a: 'What would you do with the money?' },
            { q: 'I / wouldn\'t / do / that / if / I / were / you / .', a: 'I wouldn\'t do that if I were you.' },
            { q: 'If / he / knew / her / he / would / call / her / .', a: 'If he knew her he would call her.' },
            { q: 'They / would / be / happy / if / they / won / .', a: 'They would be happy if they won.' },
            { q: 'If / I / had / a / car / I / would / drive / .', a: 'If I had a car I would drive.' },
            { q: 'We / would / buy / it / if / it / were / cheaper / .', a: 'We would buy it if it were cheaper.' },
            { q: 'If / she / saw / him / she / would / be / surprised / .', a: 'If she saw him she would be surprised.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Second Conditional Rules',
        questions: [
            { q: 'Second Conditional is for...', a: 'Imaginary / Unreal situations', o: ['Real possibilities', 'Past events'] },
            { q: 'Which tense follows "if"?', a: 'Past Simple', o: ['Present Simple', 'Future Simple'] },
            { q: 'Which modal is used in the result clause?', a: 'Would / Could', o: ['Will / Can', 'Should'] },
            { q: 'With "be", which form is preferred for all subjects?', a: 'Were (If I were, If he were)', o: ['Was', 'Am', 'Be'] },
            { q: 'Can we say "If I would have"?', a: 'No (no "would" after "if")', o: ['Yes'] },
            { q: 'Does "If I were you" give advice?', a: 'Yes', o: ['No'] },
            { q: 'If the "if" clause comes first, do we need a comma?', a: 'Yes', o: ['No'] },
            { q: 'Correct: "If she [___] here, she would help."', a: 'were', o: ['is', 'will be'] },
            { q: 'Correct: "I [___] (buy) a house if I won."', a: 'would buy', o: ['will buy', 'bought'] },
            { q: 'What is the negative of "would"?', a: "Wouldn't", o: ["Won't", "Don't would"] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Complete the Image',
        questions: [
            { q: 'If I [___] (be) you, I would apologize.', a: 'were' },
            { q: 'If she [___] (have) more time, she would exercise.', a: 'had' },
            { q: 'He [___] (travel) more if he was rich.', a: 'would travel' },
            { q: 'If they [___] (not / live) so far, we would visit them.', a: "didn't live" },
            { q: 'What [___] you [___] (do) if you found a wallet?', a: 'would you do' },
            { q: 'I [___] (be) happy if I passed.', a: 'would be' },
            { q: 'If it [___] (snow) in summer, I would be surprised.', a: 'snowed' },
            { q: 'She [___] (not / stay) here if she didn\'t like it.', a: "wouldn't stay" },
            { q: 'If I [___] (know) the answer, I would tell you.', a: 'knew' },
            { q: 'If he [___] (see) the boss, he would be scared.', a: 'saw' }
        ]
    }
]);

// --- TOPIC 29: First vs Second Conditional ---
updateTopic('A2', 29, [
    {
        type: 'multiple_choice',
        title: 'Real or Unreal?',
        questions: [
            { q: 'If it rains, I [___] an umbrella. (Likely)', a: 'will take', o: ['would take', 'took', 'take'] },
            { q: 'If it rained in the desert, I [___] surprised. (Unlikely)', a: 'would be', o: ['will be', 'am', 'was'] },
            { q: 'If she studies hard, she [___] the test. (Possible)', a: 'will pass', o: ['would pass', 'passes', 'passed'] },
            { q: 'If she studied hard, she [___] the test. (But she doesn\'t)', a: 'would pass', o: ['will pass', 'passed', 'pass'] },
            { q: 'If I win the lottery, I [___] a house. (Real hope)', a: 'will buy', o: ['would buy', 'bought', 'buy'] },
            { q: 'If I won the lottery, I [___] a house. (Dreaming)', a: 'would buy', o: ['will buy', 'bought', 'buy'] },
            { q: 'If you [___] me, I will help. (Real offer)', a: 'ask', o: ['asked', 'will ask', 'would ask'] },
            { q: 'If you [___] me, I would help. (But you won\'t)', a: 'asked', o: ['ask', 'will ask', 'would ask'] },
            { q: 'If he is late, we [___] wait. (Possible)', a: 'won\'t', o: ["wouldn't", "don't", "didn't"] },
            { q: 'If he was late, we [___] wait. (Unlikely)', a: "wouldn't", o: ["won't", "don't", "didn't"] }
        ]
    },
    {
        type: 'word_search',
        title: 'Logic Match',
        words: ['REAL', 'UNREAL', 'PROBABLE', 'IMAGINARY', 'IF', 'WILL', 'WOULD', 'CONDITION', 'TENSE', 'RESULT']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Choice',
        questions: [
            { q: 'If / I / have / time / I / will / come / .', a: 'If I have time I will come.' },
            { q: 'If / I / had / time / I / would / come / .', a: 'If I had time I would come.' },
            { q: 'She / will / pass / if / she / studies / .', a: 'She will pass if she studies.' },
            { q: 'She / would / pass / if / she / studied / .', a: 'She would pass if she studied.' },
            { q: 'If / you / go / now / you / will / catch / it / .', a: 'If you go now you will catch it.' },
            { q: 'If / you / went / now / you / would / catch / it / .', a: 'If you went now you would catch it.' },
            { q: 'I / will / buy / it / if / I / can / .', a: 'I will buy it if I can.' },
            { q: 'I / would / buy / it / if / I / could / .', a: 'I would buy it if I could.' },
            { q: 'If / he / calls / I / will / answer / .', a: 'If he calls I will answer.' },
            { q: 'If / he / called / I / would / answer / .', a: 'If he called I would answer.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Compare the Rules',
        questions: [
            { q: 'First Conditional is for...', a: 'Real/Possible future', o: ['Imaginary future'] },
            { q: 'Second Conditional is for...', a: 'Unlikely/Imaginary future', o: ['Real future'] },
            { q: 'Tenses for 1st Conditional:', a: 'Present Simple + Will', o: ['Past Simple + Would'] },
            { q: 'Tenses for 2nd Conditional:', a: 'Past Simple + Would', o: ['Present Simple + Will'] },
            { q: 'Which uses "If I have..."?', a: 'First Conditional', o: ['Second Conditional'] },
            { q: 'Which uses "If I had..."?', a: 'Second Conditional', o: ['First Conditional'] },
            { q: 'Which structure is for a promise?', a: 'First Conditional', o: ['Second Conditional'] },
            { q: 'Which structure is for a dream?', a: 'Second Conditional', o: ['First Conditional'] },
            { q: 'Correct 1st: "If he [___] here, I [___] call you."', a: 'is / will', o: ['was / would'] },
            { q: 'Correct 2nd: "If he [___] here, I [___] call you."', a: 'was / would', o: ['is / will'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Complete the Type',
        questions: [
            { q: 'If I [___] (find) your keys, I will tell you. (Real)', a: 'find' },
            { q: 'If I [___] (find) a bag of gold, I would be rich. (Unreal)', a: 'found' },
            { q: 'She [___] (be) happy if you come. (Real)', a: 'will be' },
            { q: 'She [___] (be) happy if you came. (Unreal)', a: 'would be' },
            { q: 'If we [___] (not / hurry), we will be late.', a: "don't hurry" },
            { q: 'If we [___] (not / hurry), we would be late. (But we are)', a: "didn't hurry" },
            { q: 'I [___] (travel) to Mars if I could.', a: 'would travel' },
            { q: 'I [___] (travel) to London if I have time.', a: 'will travel' },
            { q: 'If it [___] (snow), we will stay inside.', a: 'snows' },
            { q: 'If it [___] (snow) in July, I would be shocked.', a: 'snowed' }
        ]
    }
]);

// --- TOPIC 30: Past Modals ---
updateTopic('A2', 30, [
    {
        type: 'multiple_choice',
        title: 'Regrets and Guesses',
        questions: [
            { q: 'I [___] have studied more. I failed the exam.', a: 'should', o: ['could', 'must', 'might'] },
            { q: 'He [___] have forgotten. He didn\'t come.', a: 'must', o: ['should', 'can', 'shall'] },
            { q: 'You [___] (not) have said that. It was mean.', a: 'shouldn\'t', o: ['mustn\'t', 'couldn\'t', 'won\'t'] },
            { q: 'I [___] have finished earlier, but I was slow.', a: 'could', o: ['should', 'must', 'may'] },
            { q: 'She [___] have been sick. She wasn\'t at work.', a: 'might / could', o: ['should', 'will', 'does'] },
            { q: 'They [___] have arrived by now. It\'s 10 PM.', a: 'must', o: ['shouldn\'t', 'couldn\'t', 'won\'t'] },
            { q: 'You [___] have called me! I was worried.', a: 'should', o: ['must', 'might', 'could'] },
            { q: 'I [___] have gone to the party, but I was tired.', a: 'could', o: ['should', 'must', 'would'] },
            { q: 'It [___] have been him. I saw his face.', a: 'must', o: ['should', 'couldn\'t', 'might'] },
            { q: 'I [___] (not) have eaten so much.', a: 'shouldn\'t', o: ['mustn\'t', 'couldn\'t', 'can\'t'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Past Modal Keywords',
        words: ['SHOULD', 'MUST', 'COULD', 'MIGHT', 'HAVE', 'REGRET', 'GUESS', 'PAST', 'REASON', 'MISTAKE']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Past Modal',
        questions: [
            { q: 'I / should / have / called / you / .', a: 'I should have called you.' },
            { q: 'He / must / have / forgotten / .', a: 'He must have forgotten.' },
            { q: 'You / shouldn\'t / have / said / that / .', a: 'You shouldn\'t have said that.' },
            { q: 'They / could / have / won / .', a: 'They could have won.' },
            { q: 'She / might / have / been / sick / .', a: 'She might have been sick.' },
            { q: 'I / should / have / studied / more / .', a: 'I should have studied more.' },
            { q: 'It / must / have / rained / .', a: 'It must have rained.' },
            { q: 'You / could / have / helped / me / .', a: 'You could have helped me.' },
            { q: 'We / shouldn\'t / have / come / here / .', a: 'We shouldn\'t have come here.' },
            { q: 'They / must / have / left / .', a: 'They must have left.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Past Modal Rules',
        questions: [
            { q: 'Structure for Past Modals:', a: 'Modal + Have + Past Participle', o: ['Modal + Past Simple', 'Modal + Be + V-ing'] },
            { q: 'What does "should have" express?', a: 'Regret / Good advice for the past', o: ['Certainty'] },
            { q: 'What does "must have" express?', a: 'Strong deduction / Certainty about the past', o: ['Regret'] },
            { q: 'What does "could/might have" express?', a: 'Possibility in the past', o: ['Obligation'] },
            { q: 'What does "shouldn\'t have" express?', a: 'A past mistake', o: ['A past impossibility'] },
            { q: 'Is "must have" for rules?', a: 'No, it\'s for guessing/deduction', o: ['Yes'] },
            { q: 'Correct: "I should [___] (buy) it."', a: 'have bought', o: ['buy', 'bought'] },
            { q: 'Correct: "He [___] (must / be) happy."', a: 'must have been', o: ['must was', 'must be'] },
            { q: 'Correct: "They [___] (could / see) us."', a: 'could have seen', o: ['could saw', 'could seen'] },
            { q: 'Is "should have went" correct?', a: 'No (should have gone)', o: ['Yes'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Regret or Guess?',
        questions: [
            { q: 'I [___] (regret) gone to bed earlier.', a: 'should have' },
            { q: 'He [___] (certain) left his keys at home.', a: 'must have' },
            { q: 'She [___] (possible) forgotten the meeting.', a: 'might / could have' },
            { q: 'You [___] (mistake) said that to her.', a: "shouldn't have" },
            { q: 'They [___] (ability in past) won the game.', a: 'could have' },
            { q: 'I [___] (regret) finished my homework yesterday.', a: 'should have' },
            { q: 'It [___] (certain) rained during the night.', a: 'must have' },
            { q: 'We [___] (possible) lost the map.', a: 'might have' },
            { q: 'You [___] (regret) called me earlier.', a: 'should have' },
            { q: 'She [___] (certain) been very tired.', a: 'must have' }
        ]
    }
]);

fs.writeFileSync(path, JSON.stringify(topics, null, 2));
console.log('Batch 9: A2 Topics 26-30 updated successfully.');
