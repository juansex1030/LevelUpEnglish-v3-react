const fs = require('fs');
const path = 'backend/data/topics.json';
const topics = JSON.parse(fs.readFileSync(path, 'utf8'));

const updateTopic = (number, games) => {
    const t = topics.find(topic => topic.level === 'A1' && topic.number === number);
    if (t) {
        t.premium_practice = JSON.stringify({ games }, null, 2);
    }
};

// --- TOPIC 1: Greetings and Farewells ---
updateTopic(1, [
    {
        type: 'multiple_choice',
        title: 'Choose the correct greeting',
        questions: [
            { q: 'Formal greeting in the morning:', a: 'Good morning', o: ['Good night', 'Hi', 'Hello'] },
            { q: 'Informal greeting between friends:', a: 'What\'s up?', o: ['Good afternoon', 'Good evening', 'How do you do?'] },
            { q: 'Formal way to say goodbye:', a: 'Goodbye', o: ['See ya', 'Bye bye', 'Catch you later'] },
            { q: 'Greeting at 3:00 PM:', a: 'Good afternoon', o: ['Good morning', 'Good night', 'Good evening'] },
            { q: 'Saying goodbye late at night:', a: 'Good night', o: ['Good evening', 'Hello', 'Hi'] },
            { q: 'Common informal hello:', a: 'Hi', o: ['Goodbye', 'Good morning', 'How do you do?'] },
            { q: 'Greeting after 6:00 PM:', a: 'Good evening', o: ['Good morning', 'Good afternoon', 'Good night'] },
            { q: 'When you meet someone for the first time (formal):', a: 'Nice to meet you', o: ['What\'s up?', 'Bye', 'See ya'] },
            { q: 'Casual way to say goodbye:', a: 'See you later', o: ['Good morning', 'How do you do?', 'Good afternoon'] },
            { q: 'Short informal goodbye:', a: 'Bye', o: ['Hello', 'Good morning', 'Welcome'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Greetings Word Search',
        words: ['HELLO', 'HI', 'MORNING', 'AFTERNOON', 'EVENING', 'NIGHT', 'GOODBYE', 'FAREWELL', 'WELCOME', 'GREETING']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Greeting',
        questions: [
            { q: 'mornig / Good', a: 'Good morning' },
            { q: 'meet / Nice / to / you', a: 'Nice to meet you' },
            { q: 'you / How / are / ?', a: 'How are you?' },
            { q: 'Good / night / .', a: 'Good night.' },
            { q: 'afternoon / Good', a: 'Good afternoon' },
            { q: 'up / What\'s / ?', a: 'What\'s up?' },
            { q: 'you / later / See', a: 'See you later' },
            { q: 'evening / Good', a: 'Good evening' },
            { q: 'day / Have / nice / a', a: 'Have a nice day' },
            { q: 'doing / How / you / are / ?', a: 'How are you doing?' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Greeting Situations',
        questions: [
            { q: 'It is 8:00 AM. What do you say?', a: 'Good morning', o: ['Good evening', 'Good afternoon', 'Good night'] },
            { q: 'You are leaving a party at 11:00 PM. What do you say?', a: 'Good night', o: ['Good morning', 'Good evening', 'Hello'] },
            { q: 'You arrive at a friend\'s house at 7:00 PM. What do you say?', a: 'Good evening', o: ['Good night', 'Good morning', 'Good afternoon'] },
            { q: 'Which of these is the most formal?', a: 'How do you do?', o: ['Hi', 'What\'s up?', 'Hey'] },
            { q: 'What is a typical response to "How are you?"', a: 'I\'m fine, thank you', o: ['Good night', 'You\'re welcome', 'Hello'] },
            { q: 'What do you say when someone says "Nice to meet you"?', a: 'Nice to meet you too', o: ['Goodbye', 'I\'m okay', 'Hi'] },
            { q: 'Which is a common farewell?', a: 'Take care', o: ['Welcome', 'Howdy', 'Good morning'] },
            { q: 'What do you say at 2:00 PM?', a: 'Good afternoon', o: ['Good morning', 'Good evening', 'Good night'] },
            { q: 'Is "What\'s up?" formal or informal?', a: 'Informal', o: ['Formal', 'Neutral'] },
            { q: 'What is a common informal way to say goodbye?', a: 'Later', o: ['Good afternoon', 'How do you do?', 'Welcome'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Greeting Dialogues',
        questions: [
            { q: 'John: "Good [___], Mary!" Mary: "Morning, John!"', a: 'morning' },
            { q: 'A: "How [___] you?" B: "I am fine, thanks."', a: 'are' },
            { q: 'Formal: "It is a [___] to meet you."', a: 'pleasure' },
            { q: 'Informal: "See [___] later!"', a: 'you' },
            { q: 'Night: "Good [___], sleep well."', a: 'night' },
            { q: 'A: "Goodbye!" B: "Have a [___] day!"', a: 'nice' },
            { q: 'Arrival at 7 PM: "Good [___], everyone!"', a: 'evening' },
            { q: 'Meeting first time: "Nice to [___] you."', a: 'meet' },
            { q: 'Informal hi: "[___]! How is it going?"', a: 'Hey' },
            { q: 'Afternoon: "Good [___]!"', a: 'afternoon' }
        ]
    }
]);

// --- TOPIC 2: Personal Introduction ---
updateTopic(2, [
    {
        type: 'multiple_choice',
        title: 'Introduction Questions',
        questions: [
            { q: 'Question for a name:', a: 'What is your name?', o: ['Where are you?', 'How old are you?', 'What is your job?'] },
            { q: 'Question for age:', a: 'How old are you?', o: ['What is your age?', 'When are you?', 'How are you age?'] },
            { q: 'Question for origin:', a: 'Where are you from?', o: ['What is your from?', 'Who are you from?', 'How are you from?'] },
            { q: 'Question for occupation:', a: 'What do you do?', o: ['What are you do?', 'Where do you do?', 'How do you do?'] },
            { q: 'Question for residence:', a: 'Where do you live?', o: ['What do you live?', 'Who do you live?', 'How do you live?'] },
            { q: 'How to answer "What\'s your name?":', a: 'My name is...', o: ['I have...', 'I am live in...', 'I am from...'] },
            { q: 'How to answer "Where are you from?":', a: 'I am from...', o: ['I live in...', 'I am...', 'My name is...'] },
            { q: 'How to answer "How old are you?":', a: 'I am 20 years old', o: ['I have 20 years', 'My age is 20', 'I live 20'] },
            { q: 'How to ask about marital status:', a: 'Are you married?', o: ['Do you married?', 'What is your married?', 'How are you married?'] },
            { q: 'How to ask about hobbies:', a: 'What are your hobbies?', o: ['What is your hobby?', 'What do you hobby?', 'Where are your hobbies?'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Intro Vocabulary',
        words: ['NAME', 'AGE', 'FROM', 'LIVE', 'WORK', 'STUDENT', 'SINGLE', 'MARRIED', 'COUNTRY', 'CITY']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Intro',
        questions: [
            { q: 'is / name / My / John / .', a: 'My name is John.' },
            { q: 'old / are / How / you / ?', a: 'How old are you?' },
            { q: 'from / I / am / Mexico / .', a: 'I am from Mexico.' },
            { q: 'live / I / in / London / .', a: 'I live in London.' },
            { q: 'you / What / do / do / ?', a: 'What do you do?' },
            { q: 'am / a / I / teacher / .', a: 'I am a teacher.' },
            { q: 'meet / to / Nice / you / .', a: 'Nice to meet you.' },
            { q: 'married / Are / you / ?', a: 'Are you married?' },
            { q: 'hobbies / What / your / are / ?', a: 'What are your hobbies?' },
            { q: 'years / I / twenty / am / old / .', a: 'I am twenty years old.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Introduction Facts',
        questions: [
            { q: 'Which word refers to your job?', a: 'Occupation', o: ['Origin', 'Nationality', 'Age'] },
            { q: 'Which word refers to the country you were born in?', a: 'Nationality', o: ['Address', 'Gender', 'Status'] },
            { q: 'What do you say after someone introduces themselves?', a: 'Nice to meet you', o: ['Goodbye', 'How old are you?', 'I am hungry'] },
            { q: 'In English, do we use "have" or "am" for age?', a: 'Am', o: ['Have', 'Do', 'Got'] },
            { q: 'What is a "hobby"?', a: 'An activity for fun', o: ['A job', 'A family member', 'A food'] },
            { q: 'Which is a response to "What do you do?"', a: 'I am a student', o: ['I am fine', 'I am 20', 'I am from Italy'] },
            { q: 'What is another way to say "Where do you live?"', a: 'What is your address?', o: ['Where is your job?', 'What is your name?', 'How are you?'] },
            { q: 'Which is a status?', a: 'Single', o: ['Teacher', 'Japan', 'Red'] },
            { q: 'How do you ask someone\'s last name?', a: 'What is your surname?', o: ['What is your age?', 'What is your first name?', 'Who are you?'] },
            { q: 'What does "First name" mean?', a: 'Your given name', o: ['Your family name', 'Your middle name', 'Your job'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Intro',
        questions: [
            { q: 'Hello, my [___] is Sarah.', a: 'name' },
            { q: 'I [___] 25 years old.', a: 'am' },
            { q: 'Where [___] you from?', a: 'are' },
            { q: 'I live [___] Madrid.', a: 'in' },
            { q: 'What [___] you do?', a: 'do' },
            { q: 'I am [___] architect.', a: 'an' },
            { q: 'I am [___] (not married).', a: 'single' },
            { q: 'Nice to meet [___].', a: 'you' },
            { q: 'My [___] is dancing.', a: 'hobby' },
            { q: 'I [___] from Canada.', a: 'am' }
        ]
    }
]);

// --- TOPIC 3: The Alphabet ---
updateTopic(3, [
    {
        type: 'multiple_choice',
        title: 'Alphabet Sounds',
        questions: [
            { q: 'Which letter sounds like "A"?', a: 'H', o: ['E', 'I', 'U'] },
            { q: 'Which letter sounds like "E"?', a: 'G', o: ['F', 'S', 'X'] },
            { q: 'Which letter sounds like "I"?', a: 'Y', o: ['E', 'A', 'U'] },
            { q: 'Which letter sounds like "U"?', a: 'Q', o: ['O', 'A', 'I'] },
            { q: 'The letter "G" sounds like...', a: 'dʒiː', o: ['dʒeɪ', 'siː', 'iː'] },
            { q: 'The letter "J" sounds like...', a: 'dʒeɪ', o: ['dʒiː', 'wiː', 'eɪ'] },
            { q: 'The letter "W" sounds like...', a: 'Double-U', o: ['V', 'U', 'M'] },
            { q: 'The letter "Z" sounds like...', a: 'Zed/Zee', o: ['Sed', 'Zet', 'See'] },
            { q: 'Which letter is a vowel?', a: 'O', o: ['P', 'B', 'T'] },
            { q: 'Which letter is a consonant?', a: 'K', o: ['A', 'E', 'I'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Alphabet Fun',
        words: ['VOWEL', 'LETTER', 'SOUND', 'SPELL', 'WORD', 'ALPHA', 'BETA', 'GAMMA', 'DELTA', 'OMEGA']
    },
    {
        type: 'unscramble',
        title: 'Spell the Words',
        questions: [
            { q: 'p / a / l / e / p', a: 'apple' },
            { q: 'o / d / g', a: 'dog' },
            { q: 't / a / c', a: 'cat' },
            { q: 'h / s / f / i', a: 'fish' },
            { q: 'b / o / k / o', a: 'book' },
            { q: 'm / o / e / h', a: 'home' },
            { q: 'l / v / o / e', a: 'love' },
            { q: 't / i / m / e', a: 'time' },
            { q: 'w / o / r / k', a: 'work' },
            { q: 'n / a / m / e', a: 'name' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Alphabet Trivia',
        questions: [
            { q: 'How many letters are in the English alphabet?', a: '26', o: ['24', '28', '30'] },
            { q: 'How many vowels are there?', a: '5', o: ['6', '7', '4'] },
            { q: 'Which is the first letter?', a: 'A', o: ['Z', 'B', 'M'] },
            { q: 'Which is the last letter?', a: 'Z', o: ['A', 'Y', 'X'] },
            { q: 'How do you spell "HELLO"?', a: 'H-E-L-L-O', o: ['H-O-L-A', 'H-E-L-O', 'H-E-L-L-A'] },
            { q: 'What is the most common letter in English?', a: 'E', o: ['A', 'T', 'S'] },
            { q: 'Which letter looks like a circle?', a: 'O', o: ['Q', 'D', 'C'] },
            { q: 'Which letter is often silent in "Knife"?', a: 'K', o: ['N', 'I', 'E'] },
            { q: 'Which letter is the 10th?', a: 'J', o: ['I', 'K', 'L'] },
            { q: 'Which letter represents a question?', a: 'Y', o: ['W', 'Q', 'X'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Spelling Bee',
        questions: [
            { q: 'The first vowel is [___].', a: 'A' },
            { q: 'Apple starts with [___].', a: 'A' },
            { q: 'The letter after B is [___].', a: 'C' },
            { q: 'Dog starts with [___].', a: 'D' },
            { q: 'Elephant starts with [___].', a: 'E' },
            { q: 'The last letter is [___].', a: 'Z' },
            { q: 'Spell "CAT": C - [___] - T.', a: 'A' },
            { q: 'Spell "SUN": S - [___] - N.', a: 'U' },
            { q: 'Spell "HI": H - [___].', a: 'I' },
            { q: 'The letter before Z is [___].', a: 'Y' }
        ]
    }
]);

// --- TOPIC 4: Numbers ---
updateTopic(4, [
    {
        type: 'multiple_choice',
        title: 'Numbers 1-20',
        questions: [
            { q: 'What is 10?', a: 'Ten', o: ['Two', 'Twelve', 'Twenty'] },
            { q: 'What is 15?', a: 'Fifteen', o: ['Fifty', 'Five', 'Fiftin'] },
            { q: 'What is 11?', a: 'Eleven', o: ['One-one', 'Oneteen', 'Ten-one'] },
            { q: 'What is 20?', a: 'Twenty', o: ['Twelve', 'Two-zero', 'Tenty'] },
            { q: 'What is 13?', a: 'Thirteen', o: ['Thirty', 'Thirtin', 'Three-teen'] },
            { q: 'What is 18?', a: 'Eighteen', o: ['Eighty', 'Eight', 'Eigh-teen'] },
            { q: 'What is 12?', a: 'Twelve', o: ['Twenteen', 'Two-teen', 'Twenty'] },
            { q: 'What is 8?', a: 'Eight', o: ['Eighty', 'Hait', 'Ate'] },
            { q: 'What is 14?', a: 'Fourteen', o: ['Forty', 'Four', 'Four-teen'] },
            { q: 'What is 0?', a: 'Zero', o: ['One', 'None', 'Null'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Number Words',
        words: ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'TEN', 'TWENTY', 'FIFTY', 'HUNDRED', 'THOUSAND']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Number',
        questions: [
            { q: 'e / v / i / f', a: 'five' },
            { q: 'e / n / i / n', a: 'nine' },
            { q: 'v / e / n / e / l / e', a: 'eleven' },
            { q: 'l / v / e / w / t / e', a: 'twelve' },
            { q: 'h / e / t / r / e', a: 'three' },
            { q: 'e / v / e / s / n', a: 'seven' },
            { q: 'h / t / i / g / e', a: 'eight' },
            { q: 'r / o / u / f', a: 'four' },
            { q: 'x / i / s', a: 'six' },
            { q: 'n / e / t', a: 'ten' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Number Math',
        questions: [
            { q: 'What is 5 + 5?', a: 'Ten', o: ['Eight', 'Nine', 'Eleven'] },
            { q: 'What is 20 - 5?', a: 'Fifteen', o: ['Twelve', 'Ten', 'Twenty'] },
            { q: 'What is 3 x 4?', a: 'Twelve', o: ['Seven', 'Eleven', 'Ten'] },
            { q: 'What is 10 / 2?', a: 'Five', o: ['Three', 'Four', 'Six'] },
            { q: 'What comes after twelve?', a: 'Thirteen', o: ['Eleven', 'Fourteen', 'Ten'] },
            { q: 'What comes before twenty?', a: 'Nineteen', o: ['Eighteen', 'Seventeen', 'Twenty-one'] },
            { q: 'What is 7 + 6?', a: 'Thirteen', o: ['Twelve', 'Fourteen', 'Eleven'] },
            { q: 'What is 10 + 10?', a: 'Twenty', o: ['Ten', 'Thirty', 'Twelve'] },
            { q: 'What is 2 x 3?', a: 'Six', o: ['Five', 'Seven', 'Eight'] },
            { q: 'How many days are in a week?', a: 'Seven', o: ['Six', 'Eight', 'Five'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Numbers',
        questions: [
            { q: '1, 2, [___], 4, 5.', a: '3' },
            { q: 'Ten, Eleven, [___], Thirteen.', a: 'Twelve' },
            { q: '18, 19, [___].', a: '20' },
            { q: 'Five plus five is [___].', a: 'ten' },
            { q: 'Nine minus four is [___].', a: 'five' },
            { q: 'A dozen is [___] units.', a: '12' },
            { q: 'The number after zero is [___].', a: 'one' },
            { q: 'I have [___] fingers on one hand.', a: 'five' },
            { q: 'There are [___] months in a year.', a: '12' },
            { q: 'Seven plus three is [___].', a: 'ten' }
        ]
    }
]);

// --- TOPIC 5: Subject Pronouns ---
updateTopic(5, [
    {
        type: 'multiple_choice',
        title: 'Choose the correct pronoun',
        questions: [
            { q: 'Pronoun for a boy:', a: 'He', o: ['She', 'It', 'They'] },
            { q: 'Pronoun for a girl:', a: 'She', o: ['He', 'It', 'We'] },
            { q: 'Pronoun for a dog:', a: 'It', o: ['He', 'She', 'You'] },
            { q: 'Pronoun for "John and I":', a: 'We', o: ['They', 'You', 'He'] },
            { q: 'Pronoun for "Maria and Ana":', a: 'They', o: ['We', 'You', 'She'] },
            { q: 'Pronoun for the person I am talking to:', a: 'You', o: ['I', 'He', 'We'] },
            { q: 'Pronoun for myself:', a: 'I', o: ['Me', 'You', 'He'] },
            { q: 'Pronoun for a table:', a: 'It', o: ['They', 'She', 'He'] },
            { q: 'Pronoun for a group of people (not including me):', a: 'They', o: ['We', 'You', 'It'] },
            { q: 'Which pronoun is always capitalized?', a: 'I', o: ['He', 'She', 'They'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Pronoun Search',
        words: ['I', 'YOU', 'HE', 'SHE', 'IT', 'WE', 'THEY', 'SUBJECT', 'PERSON', 'PLURAL']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Pronoun',
        questions: [
            { q: 'h / e', a: 'he' },
            { q: 'h / s / e', a: 'she' },
            { q: 'e / t / y / h', a: 'they' },
            { q: 'o / u / y', a: 'you' },
            { q: 'e / w', a: 'we' },
            { q: 't / i', a: 'it' },
            { q: 'p / r / o / n / o / u / n', a: 'pronoun' },
            { q: 'p / l / u / r / a / l', a: 'plural' },
            { q: 's / i / n / g / u / l / a / r', a: 'singular' },
            { q: 's / u / b / j / e / c / t', a: 'subject' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Pronoun Logic',
        questions: [
            { q: 'Is "We" singular or plural?', a: 'Plural', o: ['Singular', 'Both'] },
            { q: 'Is "He" for male or female?', a: 'Male', o: ['Female', 'Neutral'] },
            { q: 'Which pronoun do we use for an object?', a: 'It', o: ['He', 'She', 'They'] },
            { q: 'What is the plural of "I"?', a: 'We', o: ['You', 'They', 'Me'] },
            { q: 'What is the plural of "He"?', a: 'They', o: ['We', 'You', 'Them'] },
            { q: 'Which pronoun can be both singular and plural?', a: 'You', o: ['I', 'He', 'She'] },
            { q: 'If I talk about myself and you, what pronoun do I use?', a: 'We', o: ['They', 'I', 'You'] },
            { q: 'If I talk about a car, what pronoun do I use?', a: 'It', o: ['She', 'He', 'They'] },
            { q: 'If I talk about two girls, what pronoun do I use?', a: 'They', o: ['She', 'We', 'You'] },
            { q: 'Which is a first person singular pronoun?', a: 'I', o: ['You', 'He', 'She'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Pronoun',
        questions: [
            { q: 'John is a boy. [___] is a student.', a: 'He' },
            { q: 'Maria is a girl. [___] is happy.', a: 'She' },
            { q: 'The book is red. [___] is on the table.', a: 'It' },
            { q: 'Tom and I are friends. [___] play football.', a: 'We' },
            { q: 'Look at the birds. [___] are flying.', a: 'They' },
            { q: 'Hello Peter! [___] are very tall.', a: 'You' },
            { q: 'My name is Alex. [___] am from Spain.', a: 'I' },
            { q: 'The cat is black. [___] is small.', a: 'It' },
            { q: 'Sarah and Linda are sisters. [___] live in New York.', a: 'They' },
            { q: 'You and your brother are late. [___] must hurry.', a: 'You' }
        ]
    }
]);

fs.writeFileSync(path, JSON.stringify(topics, null, 2));
console.log('A1 Topics 1-5 updated successfully.');
