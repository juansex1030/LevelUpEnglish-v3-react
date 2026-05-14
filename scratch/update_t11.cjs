const fs = require('fs');
const path = 'backend/data/topics.json';
const topics = JSON.parse(fs.readFileSync(path, 'utf8'));

const t11 = topics.find(t => t.level === 'B1' && t.number === 11);

// Correct the standard practice (it was about prepositions incorrectly)
t11.practice = JSON.stringify({
    games: [
        {
            type: "multiple_choice",
            title: "Future Forms Basics",
            instruction: "Choose the correct form.",
            questions: [
                { q: "I think it ______ rain tomorrow.", a: "will", options: ["will", "is going to", "is raining"] },
                { q: "Look at those clouds! It ______ rain.", a: "is going to", options: ["is going to", "will", "rains"] },
                { q: "I ______ my dentist at 4 PM today.", a: "am seeing", options: ["am seeing", "will see", "see"] },
                { q: "The train ______ at 9 AM.", a: "leaves", options: ["leaves", "will leave", "is leaving"] },
                { q: "Wait! I ______ you with those bags.", a: "will help", options: ["will help", "am helping", "help"] }
            ]
        }
    ]
});

const wsData = {"grid":[["F","F","U","T","U","R","E","T","R","U","S","P"],["T","N","E","T","T","D","S","C","W","V","C","R"],["W","P","A","W","Q","S","M","E","E","R","T","O"],["A","Z","Z","L","T","Q","T","P","L","P","J","M"],["M","M","B","B","P","D","J","X","U","R","M","I"],["O","C","K","U","R","B","G","E","D","E","J","S"],["T","L","E","P","O","H","D","W","E","D","K","E"],["U","L","U","W","C","L","T","Q","H","I","B","W"],["A","R","R","A","N","G","E","N","C","C","X","S"],["V","E","J","E","B","C","E","P","S","T","V","F"],["Q","K","L","E","J","Q","D","N","E","T","N","I"],["U","T","O","M","O","R","R","O","W","S","R","E"]],"words":["PREDICT","PLAN","INTEND","SCHEDULE","ARRANGE","HOPE","EXPECT","PROMISE","FUTURE","TOMORROW"]};

t11.premium_practice = JSON.stringify({
    games: [
        {
            type: "multiple_choice",
            title: "Advanced Future Forms",
            instruction: "Identify the most natural future form for the context.",
            questions: [
                { q: "By this time next year, I ______ my degree.", a: "will have finished", options: ["will have finished", "will finish", "am finishing"] },
                { q: "I'm sure they ______ the match.", a: "will win", options: ["will win", "are winning", "win"] },
                { q: "The flight ______ at 10:30 PM.", a: "is supposed to arrive", options: ["is supposed to arrive", "will arrive", "arrives"] },
                { q: "I ______ to the cinema tonight. Want to come?", a: "am going", options: ["am going", "will go", "go"] },
                { q: "I can't study now, I ______ my room.", a: "was supposed to clean", options: ["was supposed to clean", "am cleaning", "will clean"] },
                { q: "They ______ a baby in June.", a: "are having", options: ["are having", "will have", "have"] },
                { q: "I ______ you later, I promise.", a: "will call", options: ["will call", "am calling", "call"] },
                { q: "Watch out! You ______ that vase!", a: "are going to break", options: ["are going to break", "will break", "break"] },
                { q: "The movie ______ in five minutes.", a: "starts", options: ["starts", "is starting", "will start"] },
                { q: "I ______ to call you, but I forgot.", a: "was supposed to call", options: ["was supposed to call", "will call", "called"] }
            ]
        },
        {
            type: "sentence_builder",
            title: "Future Sentence Master",
            instruction: "Order the words to form correct future sentences.",
            sentences: [
                { text: "I am going to travel to London next week", translation: "Voy a viajar a Londres la próxima semana", distractors: ["will", "at"] },
                { text: "The meeting is supposed to start at nine", translation: "Se supone que la reunión comienza a las nueve", distractors: ["will", "on"] },
                { text: "We will have finished the project by Friday", translation: "Habremos terminado el proyecto para el viernes", distractors: ["are", "in"] },
                { text: "Are you doing anything on Saturday night ?", translation: "¿Harás algo el sábado por la noche?", distractors: ["will", "at"] },
                { text: "It is going to be a long day", translation: "Va a ser un día largo", distractors: ["will", "the"] },
                { text: "I think robots will do the housework soon", translation: "Creo que los robots harán las tareas del hogar pronto", distractors: ["are", "going"] },
                { text: "The sun is supposed to rise at six", translation: "Se supone que el sol sale a las seis", distractors: ["will", "on"] },
                { text: "I was supposed to meet him yesterday morning", translation: "Se suponía que me reuniría con él ayer por la mañana", distractors: ["am", "will"] },
                { text: "They are having a party next weekend", translation: "Ellos tendrán una fiesta el próximo fin de semana", distractors: ["will", "go"] },
                { text: "I will call you as soon as I arrive", translation: "Te llamaré tan pronto como llegue", distractors: ["am", "going"] }
            ]
        },
        {
            type: "word_search",
            title: "Future Vocabulary Search",
            instruction: "Find the 10 words related to plans, predictions, and the future.",
            grid: wsData.grid,
            words: wsData.words
        },
        {
            type: "trivia_game",
            title: "Future Rules Trivia",
            instruction: "Test your knowledge of nuanced future rules.",
            questions: [
                { question: "Which form is best for a sudden decision made at the moment of speaking?", options: ["will", "going to", "present continuous"], correctIdx: 0 },
                { question: "Which form is best for a fixed arrangement with other people?", options: ["present continuous", "will", "going to"], correctIdx: 0 },
                { question: "What does 'was supposed to' imply?", options: ["Something happened as planned", "Something was planned but didn't happen", "Something will happen definitely"], correctIdx: 1 },
                { question: "Which form is used for timetabled public events?", options: ["present simple", "will", "present continuous"], correctIdx: 0 },
                { question: "Which form is used for predictions based on present evidence?", options: ["is going to", "will", "might"], correctIdx: 0 },
                { question: "Which form is used for general predictions or opinions about the future?", options: ["will", "present continuous", "going to"], correctIdx: 0 },
                { question: "What is the negative of 'supposed to' often used for?", options: ["Prohibition", "Future plans", "Past habits"], correctIdx: 0 },
                { question: "Which is correct for a dentist appointment?", options: ["I am seeing the dentist", "I will see the dentist", "I see the dentist"], correctIdx: 0 },
                { question: "By 2050, we ______ on Mars.", options: ["will have landed", "are landing", "land"], correctIdx: 0 },
                { question: "If it rains, we ______ at home.", options: ["will stay", "are staying", "stay"], correctIdx: 0 }
            ]
        },
        {
            type: "cloze_test",
            title: "The Tech Expo 🚀",
            instruction: "Complete the text about a future event.",
            text: "Next month, our company {{0}} the International Tech Expo. We {{1}} to showcase our new AI assistant. According to the {{2}}, the event starts on Monday. I {{3}} a presentation, but my laptop broke! Now I {{4}} to borrow one from the IT department. My boss {{5}} that this {{6}} our biggest launch ever. We {{7}} to see you there!",
            answers: ["is attending", "intend", "schedule", "was supposed to give", "am going", "predicts", "will be", "hope"],
            distractors: ["running", "yesterday", "broke"]
        }
    ]
});

fs.writeFileSync(path, JSON.stringify(topics, null, 2));
console.log("Topic 11 updated successfully!");
