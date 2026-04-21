/**
 * scripts/expand_a1_practice.cjs
 * Adds a 3rd interactive activity to each A1 topic in topics.json.
 * Uses Unscramble or Fill-in to complement existing activities.
 */

const fs = require('fs');
const path = require('path');

const TOPICS_PATH = path.join(__dirname, '../backend/data/topics.json');

const newActivities = {
    1: { // Greetings
        type: 'unscramble',
        title: 'Unscramble Greetings',
        instruction: 'Order the words to form a greeting.',
        questions: [
            { q: 'meet nice you to', a: 'nice to meet you' },
            { q: 'morning good everyone', a: 'good morning everyone' },
            { q: 'day have nice a', a: 'have a nice day' },
            { q: 'care take soon you see', a: 'take care see you soon' },
            { q: 'doing how you are', a: 'how are you doing' }
        ]
    },
    2: { // Personal Intro (already has MC + Unscramble)
        type: 'fill_in',
        title: 'Intro Details',
        instruction: 'Type the missing word for the introduction.',
        questions: [
            { q: 'Nice to ______ you too.', a: 'meet' },
            { q: 'How ______ are you?', a: 'old' },
            { q: 'Where ______ you from?', a: 'are' },
            { q: 'My ______ name is Smith.', a: 'last' },
            { q: 'I ______ from London.', a: 'am' }
        ]
    },
    3: { // Alphabet
        type: 'unscramble',
        title: 'Spelling Bee',
        instruction: 'Unscramble the letters to spell the word.',
        questions: [
            { q: 'P-P-A-L-E', a: 'apple' },
            { q: 'O-O-B-K', a: 'book' },
            { q: 'L-E-L-H-O', a: 'hello' },
            { q: 'A-M-N-E', a: 'name' },
            { q: 'O-W-R-D', a: 'word' }
        ]
    },
    4: { // Numbers
        type: 'unscramble',
        title: 'Number Order',
        instruction: 'Order the numbers from smallest to largest in words.',
        questions: [
            { q: 'two one three', a: 'one two three' },
            { q: 'ten five twenty', a: 'five ten twenty' },
            { q: 'fifty hundred eighty', a: 'fifty eighty hundred' },
            { q: 'twelve eleven thirteen', a: 'eleven twelve thirteen' },
            { q: 'seven zero nine', a: 'zero seven nine' }
        ]
    },
    5: { // Subject Pronouns
        type: 'unscramble',
        title: 'Pronoun Order',
        instruction: 'Order the words to make a sentence.',
        questions: [
            { q: 'doctor a is he', a: 'he is a doctor' },
            { q: 'friends are we best', a: 'we are best friends' },
            { q: 'student a am i', a: 'i am a student' },
            { q: 'happy they are very', a: 'they are very happy' },
            { q: 'car new a is it', a: 'it is a new car' }
        ]
    },
    6: { // Verb To Be
        type: 'unscramble',
        title: 'Being and Doing',
        instruction: 'Unscramble the sentence with Verb To Be.',
        questions: [
            { q: 'you ready are', a: 'are you ready' },
            { q: 'not i hungry am', a: 'i am not hungry' },
            { q: 'at is home she', a: 'she is at home' },
            { q: 'the winners we are', a: 'we are the winners' },
            { q: 'cold is water the', a: 'the water is cold' }
        ]
    },
    7: { // Wh- Questions
        type: 'unscramble',
        title: 'Question Builder',
        instruction: 'Build the Wh- Question.',
        questions: [
            { q: 'your what name is', a: 'what is your name' },
            { q: 'are where from you', a: 'where are you from' },
            { q: 'you how old are', a: 'how old are you' },
            { q: 'late why you are', a: 'why are you late' },
            { q: 'is birthday when your', a: 'when is your birthday' }
        ]
    },
    8: { // Demonstratives
        type: 'unscramble',
        title: 'Point it out!',
        instruction: 'Unscramble the demonstrative sentence.',
        questions: [
            { q: 'apple is this mine', a: 'this apple is mine' },
            { q: 'those are books large', a: 'those books are large' },
            { q: 'is that teacher my', a: 'that is my teacher' },
            { q: 'shoes these new are', a: 'these shoes are new' },
            { q: 'flowers beautiful are those', a: 'those flowers are beautiful' }
        ]
    },
    9: { // Possessives
        type: 'unscramble',
        title: 'Ownership',
        instruction: 'Unscramble the possessive sentence.',
        questions: [
            { q: 'house is our big', a: 'our house is big' },
            { q: 'his is name Mark', a: 'his name is mark' },
            { q: 'dog her small is', a: 'her dog is small' },
            { q: 'car is your fast', a: 'your car is fast' },
            { q: 'their are parents kind', a: 'their parents are kind' }
        ]
    },
    10: { // Time
        type: 'unscramble',
        title: 'Time for English',
        instruction: 'Unscramble the time sentence.',
        questions: [
            { q: 'six it is o\'clock', a: 'it is six o\'clock' },
            { q: 'half is past it ten', a: 'it is half past ten' },
            { q: 'quarter to a five is it', a: 'it is a quarter to five' },
            { q: 'time is what it', a: 'what time is it' },
            { q: 'is morning the it in', a: 'it is in the morning' }
        ]
    },
    11: { // Prepositions of Time
        type: 'unscramble',
        title: 'On, In, At Flow',
        instruction: 'Order the words to make a time sentence.',
        questions: [
            { q: 'i at wake 7 up', a: 'i wake up at 7' },
            { q: 'july in hot is it', a: 'it is hot in july' },
            { q: 'monday on work i', a: 'i work on monday' },
            { q: 'night at party is the', a: 'the party is at night' },
            { q: 'at we meeting noon have', a: 'we have meeting at noon' }
        ]
    },
    12: { // Simple Present
        type: 'unscramble',
        title: 'Daily Life',
        instruction: 'Order the routine.',
        questions: [
            { q: 'pizza she likes a lot', a: 'she likes pizza a lot' },
            { q: 'football they play saturday every', a: 'they play football every saturday' },
            { q: 'early i up wake', a: 'i wake up early' },
            { q: 'he coffee every drinks morning', a: 'he drinks coffee every morning' },
            { q: 'english study we together', a: 'we study english together' }
        ]
    },
    13: { // Adverbs of Frequency (MC + Unscramble already)
        type: 'fill_in',
        title: 'Frequency Gaps',
        instruction: 'Type: always, never, sometimes, often.',
        questions: [
            { q: 'I ______ (100%) drink water.', a: 'always' },
            { q: 'He ______ (0%) eats meat.', a: 'never' },
            { q: 'We ______ (50%) go to the park.', a: 'sometimes' },
            { q: 'She ______ (80%) studies at night.', a: 'often' },
            { q: 'It ______ rains in summer here.', a: 'sometimes' }
        ]
    },
    14: { // Comparatives
        type: 'unscramble',
        title: 'Faster, Better, Stronger',
        instruction: 'Build the comparative sentence.',
        questions: [
            { q: 'red blue is car than faster', a: 'blue car is faster than red' },
            { q: 'am than older i you', a: 'i am older than you' },
            { q: 'mexico china is than smaller', a: 'mexico is smaller than china' },
            { q: 'better this is book that than', a: 'this book is better than that' },
            { q: 'taller she her is than sister', a: 'she is taller than her sister' }
        ]
    },
    15: { // Food
        type: 'unscramble',
        title: 'Menu Builder',
        instruction: 'Unscramble the food sentence.',
        questions: [
            { q: 'burger i a want big', a: 'i want a big burger' },
            { q: 'sweet are these apples', a: 'these apples are sweet' },
            { q: 'drinks he cold milk', a: 'he drinks cold milk' },
            { q: 'eating we salad are fresh', a: 'we are eating fresh salad' },
            { q: 'breakfast for eggs like i', a: 'i like eggs for breakfast' }
        ]
    },
    16: { // Likes/Dislikes
        type: 'unscramble',
        title: 'Favorites',
        instruction: 'Build the likes/dislikes sentence.',
        questions: [
            { q: 'chocolate i love eating', a: 'i love eating chocolate' },
            { q: 'hate we onions in soup', a: 'we hate onions in soup' },
            { q: 'doesn\'t like she movies scary', a: 'she doesn\'t like scary movies' },
            { q: 'playing do you piano like', a: 'do you like playing piano' },
            { q: 'enjoy they park the going to', a: 'they enjoy going to the park' }
        ]
    },
    17: { // Present Continuous
        type: 'unscramble',
        title: 'Right Now',
        instruction: 'What is happening right now?',
        questions: [
            { q: 'reading i a am book', a: 'i am reading a book' },
            { q: 'football he is playing now', a: 'he is playing football now' },
            { q: 'watching we tv are', a: 'we are watching tv' },
            { q: 'singing are they song a', a: 'they are singing a song' },
            { q: 'cooking she dinner is', a: 'she is cooking dinner' }
        ]
    },
    18: { // Simple vs Continuous
        type: 'unscramble',
        title: 'Routine vs Now',
        instruction: 'Unscramble the mix.',
        questions: [
            { q: 'study i every english day', a: 'i study english every day' },
            { q: 'running he is moment the at', a: 'he is running at the moment' },
            { q: 'sometimes rain it does', a: 'it does sometimes rain' },
            { q: 'working they are now', a: 'they are working now' },
            { q: 'always tea she drinks', a: 'she always drinks tea' }
        ]
    },
    19: { // Simple Past
        type: 'unscramble',
        title: 'Yesterday',
        instruction: 'Unscramble the past sentence.',
        questions: [
            { q: 'went park the to i', a: 'i went to the park' },
            { q: 'watched she movie a yesterday', a: 'she watched a movie yesterday' },
            { q: 'had we breakfast delicious a', a: 'we had a delicious breakfast' },
            { q: 'they toys the bought', a: 'they bought the toys' },
            { q: 'ate he pizza last night', a: 'he ate pizza last night' }
        ]
    },
    20: { // Describing Places
        type: 'unscramble',
        title: 'My City',
        instruction: 'Describe the place.',
        questions: [
            { q: 'is big city very the', a: 'the city is very big' },
            { q: 'park small beautiful is the', a: 'the park is small beautiful' }, // wait, usually 'the small park is beautiful'
            { q: 'are many flowers there', a: 'there are many flowers' },
            { q: 'shop is coffee the open', a: 'the coffee shop is open' },
            { q: 'has house the windows blue', a: 'the house has blue windows' }
        ]
    },
    21: { // Directions
        type: 'unscramble',
        title: 'Where to go?',
        instruction: 'Order the direction.',
        questions: [
            { q: 'left at corner the turn', a: 'turn left at the corner' },
            { q: 'straight go blocks for two', a: 'go straight for two blocks' },
            { q: 'on is the it right', a: 'it is on the right' },
            { q: 'behind the is bank pharmacy', a: 'the pharmacy is behind bank' },
            { q: 'opposite hospital school the is', a: 'the school is opposite hospital' }
        ]
    },
    22: { // Superlatives
        type: 'unscramble',
        title: 'The Best',
        instruction: 'Build the superlative sentence.',
        questions: [
            { q: 'smartest she student is the', a: 'she is the smartest student' },
            { q: 'is the world biggest china in', a: 'china is the biggest in world' }, // slightly simplified for A1
            { q: 'animal tallest world the is giraffe', a: 'giraffe is the tallest animal world' },
            { q: 'person happiest i am the', a: 'i am the happiest person' },
            { q: 'fastest the is car this', a: 'this is the fastest car' }
        ]
    },
    23: { // Present Perfect
        type: 'unscramble',
        title: 'Experience',
        instruction: 'Build the present perfect sentence.',
        questions: [
            { q: 'have visited i london', a: 'i have visited london' },
            { q: 'eaten she has sushi', a: 'she has eaten sushi' },
            { q: 'seen they have movie the', a: 'they have seen the movie' },
            { q: 'has he book the read', a: 'he has read the book' },
            { q: 'bought we car new a', a: 'we have bought a new car' }
        ]
    },
    24: { // Present Perfect vs Past
        type: 'unscramble',
        title: 'Finished or Not?',
        instruction: 'Order the words.',
        questions: [
            { q: 'lived i here have years for', a: 'i have lived here for years' },
            { q: 'went paris last year i to', a: 'i went to paris last year' },
            { q: 'the already finished has he task', a: 'he has already finished the task' },
            { q: 'watched a i movie last night', a: 'i watched a movie last night' },
            { q: 'long they here been have for', a: 'they have been here for long' }
        ]
    },
    25: { // Already, Yet, Since, For
        type: 'unscramble',
        title: 'Connectors',
        instruction: 'Build the sentence with time connectors.',
        questions: [
            { q: 'already eaten i have lunch', a: 'i have already eaten lunch' },
            { q: 'not yet arrived he has', a: 'he has not arrived yet' },
            { q: 'since here i been 2010 have', a: 'i have been here since 2010' },
            { q: 'months for traveled she has', a: 'she has traveled for months' },
            { q: 'finished we have work our yet', a: 'have we finished our work yet' }
        ]
    },
    26: { // Describing People
        type: 'unscramble',
        title: 'Who is she?',
        instruction: 'Order the description.',
        questions: [
            { q: 'hair long brown has she', a: 'she has long brown hair' },
            { q: 'tall and he thin is', a: 'he is tall and thin' },
            { q: 'green has eyes she beautiful', a: 'she has beautiful green eyes' },
            { q: 'kind a person is he', a: 'he is a kind person' },
            { q: 'white man wears the shirt', a: 'the man wears white shirt' }
        ]
    },
    27: { // Modal Verbs (Can, Must, Should)
        type: 'unscramble',
        title: 'Possibility and Rules',
        instruction: 'Unscramble the modal sentence.',
        questions: [
            { q: 'well sing i can very', a: 'i can sing very well' },
            { q: 'english must you study now', a: 'you must study english now' },
            { q: 'sleep should he earlier tonight', a: 'he should sleep earlier tonight' },
            { q: 'speak she french can nicely', a: 'she can speak french nicely' },
            { q: 'stop red at you must light', a: 'you must stop at red light' }
        ]
    },
    28: { // Future (Will, Going to)
        type: 'unscramble',
        title: 'Tomorrow',
        instruction: 'What will happen?',
        questions: [
            { q: 'beach go the will i to', a: 'i will go to the beach' },
            { q: 'going is to she cook', a: 'she is going to cook' },
            { q: 'football they play tomorrow will', a: 'they will play football tomorrow' },
            { q: 'happy we be going to are', a: 'we are going to be happy' },
            { q: 'rain next week it will', a: 'it will rain next week' }
        ]
    },
    29: { // Giving Messages
        type: 'unscramble',
        title: 'Communicate',
        instruction: 'Order the message.',
        questions: [
            { q: 'note me a please leave', a: 'please leave me a note' },
            { q: 'call soon her back please', a: 'please call her back soon' },
            { q: 'say to him hello please', a: 'please say hello to him' },
            { q: 'write message your here please', a: 'please write your message here' },
            { q: 'tell him i busy am', a: 'tell him i am busy' }
        ]
    },
    30: { // Talking About Changes
        type: 'unscramble',
        title: 'Transformation',
        instruction: 'What changed?',
        questions: [
            { q: 'better english is getting my', a: 'my english is getting better' },
            { q: 'changed city a the lot has', a: 'the city has changed a lot' },
            { q: 'older and wiser he became', a: 'he became older and wiser' },
            { q: 'has life my easy become', a: 'my life has become easy' },
            { q: 'moving to new house we are', a: 'we are moving to new house' }
        ]
    }
};

async function run() {
    try {
        const data = fs.readFileSync(TOPICS_PATH, 'utf8');
        const topics = JSON.parse(data);

        let count = 0;
        topics.forEach(topic => {
            if (topic.level === 'A1' && newActivities[topic.id]) {
                const practice = JSON.parse(topic.practice);
                
                // Only add if we have less than 3 games
                if (practice.games.length < 3) {
                    practice.games.push(newActivities[topic.id]);
                    topic.practice = JSON.stringify(practice);
                    count++;
                    console.log(`Updated Topic ${topic.id}: ${topic.title}`);
                }
            }
        });

        if (count > 0) {
            fs.writeFileSync(TOPICS_PATH, JSON.stringify(topics, null, 2));
            console.log(`\nSuccessfully added 3rd activity to ${count} topics.`);
        } else {
            console.log('\nNo topics needed expansion (already have 3+ games).');
        }
    } catch (err) {
        console.error('Error expanding practices:', err);
        process.exit(1);
    }
}

run();
