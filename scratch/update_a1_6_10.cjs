const fs = require('fs');
const path = 'backend/data/topics.json';
const topics = JSON.parse(fs.readFileSync(path, 'utf8'));

const updateTopic = (number, games) => {
    const t = topics.find(topic => topic.level === 'A1' && topic.number === number);
    if (t) {
        t.premium_practice = JSON.stringify({ games }, null, 2);
    }
};

// --- TOPIC 6: Verb "To Be" ---
updateTopic(6, [
    {
        type: 'multiple_choice',
        title: 'Choose the correct form of To Be',
        questions: [
            { q: 'I [___] a student.', a: 'am', o: ['is', 'are', 'be'] },
            { q: 'You [___] my friend.', a: 'are', o: ['am', 'is', 'be'] },
            { q: 'He [___] tall.', a: 'is', o: ['am', 'are', 'be'] },
            { q: 'She [___] a doctor.', a: 'is', o: ['am', 'are', 'be'] },
            { q: 'It [___] cold today.', a: 'is', o: ['am', 'are', 'be'] },
            { q: 'We [___] happy.', a: 'are', o: ['am', 'is', 'be'] },
            { q: 'They [___] from Spain.', a: 'are', o: ['am', 'is', 'be'] },
            { q: 'The dog [___] hungry.', a: 'is', o: ['am', 'are', 'be'] },
            { q: 'My parents [___] at home.', a: 'are', o: ['am', 'is', 'be'] },
            { q: 'Who [___] you?', a: 'are', o: ['am', 'is', 'be'] }
        ]
    },
    {
        type: 'word_search',
        title: 'To Be Vocabulary',
        words: ['AM', 'IS', 'ARE', 'BEING', 'BEEN', 'WAS', 'WERE', 'SUBJECT', 'VERB', 'PRONOUN']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Sentence',
        questions: [
            { q: 'am / I / happy / .', a: 'I am happy.' },
            { q: 'are / You / tall / .', a: 'You are tall.' },
            { q: 'is / He / my / brother / .', a: 'He is my brother.' },
            { q: 'is / She / a / nurse / .', a: 'She is a nurse.' },
            { q: 'is / It / a / cat / .', a: 'It is a cat.' },
            { q: 'are / We / students / .', a: 'We are students.' },
            { q: 'are / They / teachers / .', a: 'They are teachers.' },
            { q: 'Is / hungry / he / ?', a: 'Is he hungry?' },
            { q: 'Am / right / I / ?', a: 'Am I right?' },
            { q: 'at / are / We / home / .', a: 'We are at home.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'To Be Rules',
        questions: [
            { q: 'Which form of "be" goes with "I"?', a: 'am', o: ['is', 'are'] },
            { q: 'Which form of "be" goes with "He, She, It"?', a: 'is', o: ['am', 'are'] },
            { q: 'Which form of "be" goes with "You, We, They"?', a: 'are', o: ['am', 'is'] },
            { q: 'What is the negative of "I am"?', a: 'I am not', o: ['I is not', 'I are not'] },
            { q: 'What is the contraction of "He is"?', a: "He's", o: ["He're", "He'm"] },
            { q: 'What is the contraction of "We are"?', a: "We're", o: ["We's", "We'm"] },
            { q: 'Is "You is" correct?', a: 'No', o: ['Yes', 'Sometimes'] },
            { q: 'What is the question form of "She is"?', a: 'Is she...?', o: ['She is...?', 'Are she...?'] },
            { q: 'What is the negative of "They are"?', a: "They aren't", o: ["They isn't", "They am not"] },
            { q: 'Is "It am" correct?', a: 'No', o: ['Yes', 'Maybe'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill with To Be',
        questions: [
            { q: 'My name [___] Peter.', a: 'is' },
            { q: 'I [___] from Italy.', a: 'am' },
            { q: 'How [___] you?', a: 'are' },
            { q: 'She [___] my sister.', a: 'is' },
            { q: 'We [___] in the classroom.', a: 'are' },
            { q: 'It [___] a beautiful day.', a: 'is' },
            { q: 'They [___] very nice.', a: 'are' },
            { q: '[___] you ready?', a: 'Are' },
            { q: 'He [___] not here.', a: 'is' },
            { q: 'The book [___] blue.', a: 'is' }
        ]
    }
]);

// --- TOPIC 7: Wh- Questions ---
updateTopic(7, [
    {
        type: 'multiple_choice',
        title: 'Choose the correct Wh- word',
        questions: [
            { q: '[___] is your name?', a: 'What', o: ['Who', 'Where', 'When'] },
            { q: '[___] are you from?', a: 'Where', o: ['What', 'Why', 'Who'] },
            { q: '[___] is that man?', a: 'Who', o: ['What', 'Where', 'When'] },
            { q: '[___] is your birthday?', a: 'When', o: ['What', 'Who', 'How'] },
            { q: '[___] are you today?', a: 'How', o: ['What', 'Who', 'Where'] },
            { q: '[___] is the bathroom?', a: 'Where', o: ['Who', 'When', 'Why'] },
            { q: '[___] is your favorite color?', a: 'What', o: ['Who', 'Where', 'How'] },
            { q: '[___] are you crying?', a: 'Why', o: ['What', 'Who', 'Where'] },
            { q: '[___] old are you?', a: 'How', o: ['What', 'Who', 'When'] },
            { q: '[___] time is it?', a: 'What', o: ['Who', 'Where', 'When'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Wh- Words Search',
        words: ['WHAT', 'WHERE', 'WHO', 'WHEN', 'WHY', 'HOW', 'WHICH', 'QUESTION', 'ASK', 'ANSWER']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Question',
        questions: [
            { q: 'is / What / name / your / ?', a: 'What is your name?' },
            { q: 'from / are / Where / you / ?', a: 'Where are you from?' },
            { q: 'is / When / party / the / ?', a: 'When is the party?' },
            { q: 'are / How / you / ?', a: 'How are you?' },
            { q: 'Why / late / are / you / ?', a: 'Why are you late?' },
            { q: 'Who / best / is / your / friend / ?', a: 'Who is your best friend?' },
            { q: 'color / What / is / your / car / ?', a: 'What color is your car?' },
            { q: 'time / is / What / it / ?', a: 'What time is it?' },
            { q: 'live / do / Where / you / ?', a: 'Where do you live?' },
            { q: 'do / What / you / do / ?', a: 'What do you do?' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Question Word Meanings',
        questions: [
            { q: 'Which word asks about a place?', a: 'Where', o: ['What', 'When', 'Who'] },
            { q: 'Which word asks about a person?', a: 'Who', o: ['What', 'Where', 'Why'] },
            { q: 'Which word asks about a time?', a: 'When', o: ['Who', 'Where', 'Why'] },
            { q: 'Which word asks about a reason?', a: 'Why', o: ['How', 'What', 'Who'] },
            { q: 'Which word asks about a thing or action?', a: 'What', o: ['Who', 'Where', 'When'] },
            { q: 'Which word asks about the way or manner?', a: 'How', o: ['Who', 'What', 'Why'] },
            { q: 'Which word asks for a choice?', a: 'Which', o: ['Who', 'Where', 'When'] },
            { q: 'If the answer is "My father", the question starts with...', a: 'Who', o: ['What', 'Where', 'When'] },
            { q: 'If the answer is "In Paris", the question starts with...', a: 'Where', o: ['What', 'Who', 'When'] },
            { q: 'If the answer is "Tomorrow", the question starts with...', a: 'When', o: ['What', 'Who', 'Why'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Wh- Word',
        questions: [
            { q: '[___] are my keys?', a: 'Where' },
            { q: '[___] is that girl?', a: 'Who' },
            { q: '[___] is your hobby?', a: 'What' },
            { q: '[___] is the concert?', a: 'When' },
            { q: '[___] many brothers do you have?', a: 'How' },
            { q: '[___] is he sad?', a: 'Why' },
            { q: '[___] do you live?', a: 'Where' },
            { q: '[___] one do you want, red or blue?', a: 'Which' },
            { q: '[___] are you doing?', a: 'What' },
            { q: '[___] is your teacher?', a: 'Who' }
        ]
    }
]);

// --- TOPIC 8: Demonstratives ---
updateTopic(8, [
    {
        type: 'multiple_choice',
        title: 'Choose This, That, These, or Those',
        questions: [
            { q: 'Single object, near me:', a: 'This', o: ['That', 'These', 'Those'] },
            { q: 'Single object, far from me:', a: 'That', o: ['This', 'These', 'Those'] },
            { q: 'Plural objects, near me:', a: 'These', o: ['Those', 'This', 'That'] },
            { q: 'Plural objects, far from me:', a: 'Those', o: ['These', 'This', 'That'] },
            { q: '[___] apple (here in my hand).', a: 'This', o: ['That', 'These', 'Those'] },
            { q: '[___] stars (up in the sky).', a: 'Those', o: ['These', 'This', 'That'] },
            { q: '[___] books (on my desk here).', a: 'These', o: ['Those', 'This', 'That'] },
            { q: '[___] car (across the street).', a: 'That', o: ['This', 'These', 'Those'] },
            { q: 'Is [___] your pencil? (holding it).', a: 'this', o: ['that', 'these', 'those'] },
            { q: 'Are [___] your friends over there?', a: 'those', o: ['these', 'this', 'that'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Demonstrative Search',
        words: ['THIS', 'THAT', 'THESE', 'THOSE', 'NEAR', 'FAR', 'SINGULAR', 'PLURAL', 'OBJECT', 'POINTER']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Sentence',
        questions: [
            { q: 'is / my / This / book / .', a: 'This is my book.' },
            { q: 'is / your / That / house / .', a: 'That is your house.' },
            { q: 'are / my / These / pens / .', a: 'These are my pens.' },
            { q: 'are / those / What / ?', a: 'What are those?' },
            { q: 'pen / This / blue / is / .', a: 'This pen is blue.' },
            { q: 'dogs / These / big / are / .', a: 'These dogs are big.' },
            { q: 'that / What / is / ?', a: 'What is that?' },
            { q: 'are / those / Who / people / ?', a: 'Who are those people?' },
            { q: 'is / my / This / sister / .', a: 'This is my sister.' },
            { q: 'shoes / Those / new / are / .', a: 'Those shoes are new.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Demonstrative Logic',
        questions: [
            { q: 'Which is singular and near?', a: 'This', o: ['That', 'These', 'Those'] },
            { q: 'Which is singular and far?', a: 'That', o: ['This', 'These', 'Those'] },
            { q: 'Which is plural and near?', a: 'These', o: ['Those', 'This', 'That'] },
            { q: 'Which is plural and far?', a: 'Those', o: ['These', 'This', 'That'] },
            { q: 'What is the plural of "This"?', a: 'These', o: ['Those', 'Thats', 'Thises'] },
            { q: 'What is the plural of "That"?', a: 'Those', o: ['These', 'Thats', 'Thosees'] },
            { q: 'If I point to something far, I use...', a: 'That/Those', o: ['This/These', 'I/We', 'My/Your'] },
            { q: 'If I hold something in my hand, I use...', a: 'This', o: ['That', 'These', 'Those'] },
            { q: 'Are "these" for one or many?', a: 'Many', o: ['One', 'None'] },
            { q: 'Is "those" for things near or far?', a: 'Far', o: ['Near', 'Both'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill with Demonstratives',
        questions: [
            { q: 'Look at [___] birds in that tree!', a: 'those' },
            { q: '[___] cake here is delicious.', a: 'This' },
            { q: 'Do you like [___] shoes I am wearing?', a: 'these' },
            { q: 'Who is [___] boy over there?', a: 'that' },
            { q: '[___] are my parents here next to me.', a: 'These' },
            { q: 'What is [___] noise coming from outside?', a: 'that' },
            { q: 'I want [___] orange, the one here.', a: 'this' },
            { q: '[___] clouds look like rain.', a: 'Those' },
            { q: 'Is [___] your phone on the table there?', a: 'that' },
            { q: 'Take [___] keys here.', a: 'these' }
        ]
    }
]);

// --- TOPIC 9: Possessives ---
updateTopic(9, [
    {
        type: 'multiple_choice',
        title: 'Choose the correct possessive adjective',
        questions: [
            { q: 'I have a book. It is [___] book.', a: 'my', o: ['your', 'his', 'her'] },
            { q: 'You have a pen. It is [___] pen.', a: 'your', o: ['my', 'our', 'their'] },
            { q: 'He has a car. It is [___] car.', a: 'his', o: ['her', 'its', 'my'] },
            { q: 'She has a cat. It is [___] cat.', a: 'her', o: ['his', 'its', 'your'] },
            { q: 'The dog has a bone. It is [___] bone.', a: 'its', o: ['his', 'her', 'my'] },
            { q: 'We have a house. It is [___] house.', a: 'our', o: ['their', 'your', 'my'] },
            { q: 'They have a dog. It is [___] dog.', a: 'their', o: ['our', 'your', 'his'] },
            { q: 'Mary has a bike. It is [___] bike.', a: 'her', o: ['his', 'its', 'our'] },
            { q: 'Tom and I have a secret. It is [___] secret.', a: 'our', o: ['their', 'your', 'his'] },
            { q: 'The children have toys. They are [___] toys.', a: 'their', o: ['our', 'your', 'her'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Possessive Search',
        words: ['MY', 'YOUR', 'HIS', 'HER', 'ITS', 'OUR', 'THEIR', 'POSSESSIVE', 'MINE', 'YOURS']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Sentence',
        questions: [
            { q: 'is / my / This / bag / .', a: 'This is my bag.' },
            { q: 'your / Where / is / car / ?', a: 'Where is your car?' },
            { q: 'name / His / is / John / .', a: 'His name is John.' },
            { q: 'favorite / color / Her / is / red / .', a: 'Her favorite color is red.' },
            { q: 'house / is / Our / big / .', a: 'Our house is big.' },
            { q: 'Their / are / teachers / nice / .', a: 'Their teachers are nice.' },
            { q: 'its / The / cat / drinks / milk / .', a: 'The cat drinks its milk.' },
            { q: 'friends / are / my / They / .', a: 'They are my friends.' },
            { q: 'is / phone / your / This / ?', a: 'Is this your phone?' },
            { q: 'Are / these / keys / our / ?', a: 'Are these our keys?' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Possessive Pairs',
        questions: [
            { q: 'What is the possessive of "I"?', a: 'my', o: ['mine', 'me', 'myself'] },
            { q: 'What is the possessive of "He"?', a: 'his', o: ['him', 'he\'s', 'her'] },
            { q: 'What is the possessive of "She"?', a: 'her', o: ['hers', 'she\'s', 'his'] },
            { q: 'What is the possessive of "We"?', a: 'our', o: ['ours', 'us', 'their'] },
            { q: 'What is the possessive of "They"?', a: 'their', o: ['theirs', 'them', 'our'] },
            { q: 'What is the possessive of "You"?', a: 'your', o: ['yours', 'you\'re', 'my'] },
            { q: 'What is the possessive of "It"?', a: 'its', o: ["it's", 'it', 'his'] },
            { q: 'Do possessive adjectives have an apostrophe?', a: 'No', o: ['Yes', 'Only its'] },
            { q: 'Which is correct: "My car" or "The car my"?', a: 'My car', o: ['The car my'] },
            { q: 'Is "Her" for a man or a woman?', a: 'Woman', o: ['Man', 'Neutral'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill with Possessives',
        questions: [
            { q: 'I like [___] new school.', a: 'my' },
            { q: 'What is [___] phone number?', a: 'your' },
            { q: 'He lives with [___] parents.', a: 'his' },
            { q: 'She loves [___] husband.', a: 'her' },
            { q: 'We are in [___] English class.', a: 'our' },
            { q: 'They sold [___] house.', a: 'their' },
            { q: 'The dog wagged [___] tail.', a: 'its' },
            { q: 'This is Jane. [___] mother is a lawyer.', a: 'Her' },
            { q: 'This is Mark. [___] father is a pilot.', a: 'His' },
            { q: 'We need [___] passports.', a: 'our' }
        ]
    }
]);

// --- TOPIC 10: What Time Is It? ---
updateTopic(10, [
    {
        type: 'multiple_choice',
        title: 'Choose the correct time',
        questions: [
            { q: '10:00', a: "Ten o'clock", o: ['Ten thirty', 'Quarter past ten', 'Ten to ten'] },
            { q: '10:30', a: 'Half past ten', o: ['Ten fifteen', 'Ten o\'clock', 'Quarter to ten'] },
            { q: '10:15', a: 'Quarter past ten', o: ['Quarter to ten', 'Ten thirty', 'Ten o\'clock'] },
            { q: '10:45', a: 'Quarter to eleven', o: ['Quarter past ten', 'Ten forty-five', 'Half past ten'] },
            { q: '12:00 PM', a: 'Midday', o: ['Midnight', 'Morning', 'Evening'] },
            { q: '12:00 AM', a: 'Midnight', o: ['Midday', 'Noon', 'Afternoon'] },
            { q: '8:05', a: 'Five past eight', o: ['Five to eight', 'Eight fifty', 'Eight fifteen'] },
            { q: '7:55', a: 'Five to eight', o: ['Five past eight', 'Seven past five', 'Eight five'] },
            { q: '9:30', a: 'Nine thirty', o: ['Nine twenty', 'Ten thirty', 'Half past eight'] },
            { q: '6:15', a: 'Six fifteen', o: ['Quarter to six', 'Half past six', 'Six o\'clock'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Time Vocabulary',
        words: ['CLOCK', 'WATCH', 'HOUR', 'MINUTE', 'SECOND', 'QUARTER', 'HALF', 'PAST', 'MORNING', 'NIGHT']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Sentence',
        questions: [
            { q: 'is / What / time / it / ?', a: 'What time is it?' },
            { q: 'is / It / o\'clock / ten / .', a: 'It is ten o\'clock.' },
            { q: 'is / half / It / past / six / .', a: 'It is half past six.' },
            { q: 'quarter / is / It / to / nine / .', a: 'It is quarter to nine.' },
            { q: 'midnight / is / It / .', a: 'It is midnight.' },
            { q: 'time / do / What / you / get / up / ?', a: 'What time do you get up?' },
            { q: 'I / up / at / seven / get / .', a: 'I get up at seven.' },
            { q: 'past / five / is / It / two / .', a: 'It is five past two.' },
            { q: 'starts / school / at / The / eight / .', a: 'The school starts at eight.' },
            { q: 'time / is / lunch / What / ?', a: 'What time is lunch?' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Time Trivia',
        questions: [
            { q: 'How many minutes are in an hour?', a: '60', o: ['30', '100', '12'] },
            { q: 'How many hours are in a day?', a: '24', o: ['12', '60', '20'] },
            { q: 'How many seconds are in a minute?', a: '60', o: ['100', '30', '12'] },
            { q: 'What does "a.m." mean?', a: 'Before noon', o: ['After noon', 'At night', 'Always morning'] },
            { q: 'What does "p.m." mean?', a: 'After noon', o: ['Before noon', 'Past midnight', 'Please morning'] },
            { q: 'A quarter of an hour is...', a: '15 minutes', o: ['30 minutes', '20 minutes', '10 minutes'] },
            { q: 'Half an hour is...', a: '30 minutes', o: ['15 minutes', '60 minutes', '45 minutes'] },
            { q: 'If it is 1:50, it is...', a: 'Ten to two', o: ['Ten past one', 'Fifty past one', 'One fifty'] },
            { q: 'Noon is another word for...', a: '12:00 PM', o: ['12:00 AM', '6:00 PM', '8:00 AM'] },
            { q: 'Midday is at...', a: 'Lunchtime', o: ['Bedtime', 'Breakfast', 'Midnight'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Time',
        questions: [
            { q: 'It is eight [___] (8:00).', a: "o'clock" },
            { q: 'It is [___] past ten (10:30).', a: 'half' },
            { q: 'It is [___] past four (4:15).', a: 'quarter' },
            { q: 'It is quarter [___] five (4:45).', a: 'to' },
            { q: 'I wake up [___] 6:00 a.m.', a: 'at' },
            { q: 'There are [___] minutes in one hour.', a: '60' },
            { q: 'It is twelve o\'clock at night: [___].', a: 'midnight' },
            { q: 'It is twelve o\'clock in the day: [___].', a: 'noon' },
            { q: '1:05 is [___] past one.', a: 'five' },
            { q: '2:50 is ten [___] three.', a: 'to' }
        ]
    }
]);

fs.writeFileSync(path, JSON.stringify(topics, null, 2));
console.log('A1 Topics 6-10 updated successfully.');
