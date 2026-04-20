const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
};

const scramble = (str) => {
    const original = str.toUpperCase();
    const words = original.split(' ');
    if (words.length <= 1) return original;
    let res = original;
    let attempts = 0;
    while (res === original && attempts < 10) {
        res = shuffle([...words]).join(' ');
        attempts++;
    }
    return res;
};

const b1FullContent = {
    63: { // B1-1: Relative Pronouns
        games: [
            {
                type: "reading_comprehension",
                title: "Reading: The Professional Network 🌐",
                instruction: "Read the article and answer the 5 questions correctly.",
                text: "Networking is the practice of meeting new people who share your professional interests. A person whose network is large often finds job opportunities more easily. \n\nThe conferences where these events take place are vital for career growth. You should always bring business cards that include your contact information. This is a skill which takes time to master, but that pays off in the long run. \n\nProfessional recruiters, who are always looking for talent, value candidates who can explain their experience clearly. Company owners whose focus is on innovation often attend these meetups to find fresh perspectives.",
                questions: [
                    { question: "What is networking?", options: ["Meeting people with similar interests", "Selling products", "Working alone", "Playing video games"], correctIdx: 0 },
                    { question: "Why is a large network helpful?", options: ["It is not helpful", "It helps find jobs more easily", "It is for making friends", "It is for social media"], correctIdx: 1 },
                    { question: "Where do vital networking events happen?", options: ["Parks", "Conferences", "Schools", "Canteens"], correctIdx: 1 },
                    { question: "Who values candidates with clear communication?", options: ["Recruiters", "Doctors", "Chefs", "Drivers"], correctIdx: 0 },
                    { question: "Why do innovative owners attend meetups?", options: ["To eat", "To find fresh perspectives", "To sell cars", "To sleep"], correctIdx: 1 }
                ]
            },
            {
                type: "sentence_builder",
                title: "Clause Joiner 🏗️",
                instruction: "Connect the two ideas using the correct relative pronoun.",
                sentences: [
                    { text: "THAT IS THE MAN WHO LIVES NEXT DOOR", translation: "Ese es el hombre que vive al lado", distractors: ["WHICH", "WHOSE"] },
                    { text: "SHE IS THE GIRL WHOSE BROTHER IS FAMOUS", translation: "Ella es la chica cuyo hermano es famoso", distractors: ["WHO", "THAT"] },
                    { text: "I KNOW THE PLACE WHERE THEY MET", translation: "Conozco el lugar donde se conocieron", distractors: ["WHEN", "WHICH"] },
                    { text: "THE BOOK WHICH I BOUGHT IS GREAT", translation: "El libro que compré es genial", distractors: ["WHO", "WHOM"] },
                    { text: "HE IS THE COLLEAGUE WHOM I TOLD YOU ABOUT", translation: "Él es el colega del que te hablé", distractors: ["WHOSE", "WHERE"] },
                    { text: "THE DAY WHEN WE ARRIVED WAS COLD", translation: "El día en que llegamos era frío", distractors: ["WHICH", "THAT"] },
                    { text: "THE COMPUTER THAT I USE IS VERY FAST", translation: "El ordenador que uso es muy rápido", distractors: ["WHO", "WHOM"] },
                    { text: "THIS IS THE OFFICE WHERE I WORK", translation: "Esta es la oficina donde trabajo", distractors: ["WHICH", "WHOSE"] }
                ]
            },
            {
                type: "trivia_game",
                title: "Pronoun Mastery 🏆",
                instruction: "Complete the 10 sentences with the correct relative pronoun.",
                questions: [
                    { question: "The woman ___ lives upstairs is a doctor.", options: ["who", "which", "whose", "where"], correctIdx: 0 },
                    { question: "The house ___ roof is red is mine.", options: ["who", "which", "whose", "that"], correctIdx: 2 },
                    { question: "I remember the time ___ we first met.", options: ["when", "where", "which", "who"], correctIdx: 0 },
                    { question: "The laptop ___ I use is broken.", options: ["who", "which", "whose", "where"], correctIdx: 1 },
                    { question: "This is the city ___ I was born.", options: ["which", "where", "who", "that"], correctIdx: 1 },
                    { question: "The teacher ___ taught me is retired.", options: ["who", "whose", "which", "whom"], correctIdx: 0 },
                    { question: "The dog ___ tail is short is cute.", options: ["who", "whose", "which", "that"], correctIdx: 1 },
                    { question: "That's the reason ___ I called you.", options: ["why", "who", "where", "which"], correctIdx: 0 },
                    { question: "The movie ___ we saw was great.", options: ["who", "which", "whose", "where"], correctIdx: 1 },
                    { question: "A scientist is a person ___ studies nature.", options: ["who", "which", "whose", "whom"], correctIdx: 0 }
                ]
            },
            {
                type: "matching",
                title: "Sentence Connect 🧩",
                instruction: "Connect each description to the correct person or place.",
                questions: [
                    { q: "Someone who represents clients in court.", a: "A lawyer" },
                    { q: "A place where people exercise and lift weights.", a: "A gym" },
                    { q: "A child whose parents are no longer alive.", a: "An orphan" },
                    { q: "A building where books are stored for lending.", a: "A library" },
                    { q: "An instrument which shows the current time.", a: "A watch" },
                    { q: "Someone who flies an aircraft professionally.", a: "A pilot" },
                    { q: "The season when students have a long holiday.", a: "Summer" },
                    { q: "A doctor who specializes in treating animals.", a: "A vet" },
                    { q: "A tool which is used to capture photographs.", a: "A camera" },
                    { q: "A land where there is almost no rain and very little water.", a: "A desert" }
                ]
            },
            {
                type: "unscramble",
                title: "Structure Scramble 🌪️",
                instruction: "Unscramble these 8 relative clauses.",
                questions: [
                    { a: "The man who I saw is tall", q: scramble("The man who I saw is tall") },
                    { a: "The car which is blue is fast", q: scramble("The car which is blue is fast") },
                    { a: "This is the place where I live", q: scramble("This is the place where I live") },
                    { a: "The girl whose brother is here", q: scramble("The girl whose brother is here") },
                    { a: "The book that I am reading", q: scramble("The book that I am reading") },
                    { a: "He is the man whom I know", q: scramble("He is the man whom I know") },
                    { a: "Spring is the time when flowers grow", q: scramble("Spring is the time when flowers grow") },
                    { a: "The reason why I am late", q: scramble("The reason why I am late") }
                ]
            }
        ]
    },
    64: { // B1-2: Gerund Phrases
        games: [
            {
                type: "matching",
                title: "Benefit Matcher 🧠",
                instruction: "Match each action sentence to its corresponding benefit.",
                questions: [
                    { q: "Going to the gym on a daily basis.", a: "Keeps you fit" },
                    { q: "Consuming a balanced diet with vegetables.", a: "Gives you energy" },
                    { q: "Reading literature before going to sleep.", a: "Improves vocabulary" },
                    { q: "Practicing meditation in the morning.", a: "Reduces stress" },
                    { q: "Exploring different countries and cultures.", a: "Expands your mind" },
                    { q: "Putting aside money for an emergency fund.", a: "Prevents future crisis" },
                    { q: "Setting an alarm to wake up at 5:00 AM.", a: "Increases productivity" },
                    { q: "Staying hydrated throughout the whole day.", a: "Is good for skin" },
                    { q: "Riding a bicycle instead of taking a car.", a: "Is great for cardio" },
                    { q: "Getting at least eight hours of rest.", a: "Improves focus" }
                ]
            },
            {
                type: "fill_in",
                title: "Gerund Starter ✍️",
                instruction: "Convert the verb in brackets to a gerund subject.",
                questions: [
                    { q: "___ (Learn) English is a long process.", a: "Learning" },
                    { q: "___ (Smoke) is bad for your lungs.", a: "Smoking" },
                    { q: "___ (Cook) at home saves money.", a: "Cooking" },
                    { q: "___ (Drive) fast is dangerous.", a: "Driving" },
                    { q: "___ (Swim) is a full-body workout.", a: "Swimming" },
                    { q: "___ (Plant) trees helps the climate.", a: "Planting" },
                    { q: "___ (Watch) too much TV is bad.", a: "Watching" },
                    { q: "___ (Listen) to music is relaxing.", a: "Listening" }
                ]
            },
            {
                type: "cloze_test",
                title: "Cloze: Healthy Habits 🧘",
                instruction: "Organize the gerunds to complete the professional wellness advice.",
                text: "Many professionals believe that {{0}} is the key to longevity. Research shows that {{1}} enough sleep improves decision-making. In addition, {{2}} junk food should be a priority for everyone. {{3}} regular breaks during work can prevent burnout. Finally, {{4}} with colleagues outside of work helps build team spirit.",
                answers: ["exercising", "getting", "avoiding", "Taking", "socializing"],
                distractors: ["breaking", "crying", "dying"]
            },
            {
                type: "hangman_game",
                title: "Gerund Vocabulary ☠️",
                instruction: "Guess the 10 gerund-based activities.",
                words: [
                    { word: "STUDYING", hint: "Formal academic learning" },
                    { word: "TRAINING", hint: "Physical or skill practice" },
                    { word: "JOGGING", hint: "Slow running for exercise" },
                    { word: "PAINTING", hint: "Creating art with colors" },
                    { word: "CLEANING", hint: "Removing dirt from a place" },
                    { word: "SHOPPING", hint: "Buying things from a store" },
                    { word: "COOKING", hint: "Preparing food to eat" },
                    { word: "FISHING", hint: "Catching animals from water" },
                    { word: "CAMPING", hint: "Sleeping in a tent outside" },
                    { word: "HIKING", hint: "Walking in nature or mountains" }
                ]
            },
            {
                type: "sentence_builder",
                title: "Subject Builder 🏗️",
                instruction: "Build 8 sentences using gerund phrases as subjects.",
                sentences: [
                    { text: "DRINKING WATER IS GOOD FOR YOU", translation: "Beber agua es bueno para ti", distractors: ["DRINK", "DRINKS"] },
                    { text: "SMOKING IS BAD FOR YOUR HEALTH", translation: "Fumar es malo para tu salud", distractors: ["SMOKE", "SMOKES"] },
                    { text: "READING BOOKS EXPANDS YOUR KNOWLEDGE", translation: "Leer libros expande tu conocimiento", distractors: ["READ", "READS"] },
                    { text: "EXERCISING DAILY KEEPS YOU FIT", translation: "Hacer ejercicio diario te mantiene en forma", distractors: ["EXERCISE", "EXERCISES"] },
                    { text: "LEARNING A NEW LANGUAGE IS FUN", translation: "Aprender un nuevo idioma es divertido", distractors: ["LEARN", "LEARNS"] },
                    { text: "TRAVELLING MAKES YOU OPEN MINDED", translation: "Viajar te hace de mente abierta", distractors: ["TRAVEL", "TRAVELS"] },
                    { text: "COOKING AT HOME IS CHEAPER", translation: "Cocinar en casa es más barato", distractors: ["COOK", "COOKS"] },
                    { text: "SLEEPING WELL IMPROVES YOUR MEMORY", translation: "Dormir bien mejora tu memoria", distractors: ["SLEEP", "SLEEPS"] }
                ]
            }
        ]
    },
    65: { // B1-3: Gerunds/Infinitives
        games: [
            {
                type: "matching",
                title: "Verb Connection 🧩",
                instruction: "Connect each verb to its required pattern in professional contexts.",
                questions: [
                    { q: "Avoid ... (confronting a boss)", a: "Doing" },
                    { q: "Want ... (to achieve success)", a: "To do" },
                    { q: "Suggest ... (improving the quality)", a: "Doing" },
                    { q: "Hope ... (to get a promotion)", a: "To do" },
                    { q: "Enjoy ... (collaborating with teams)", a: "Doing" },
                    { q: "Decide ... (to implement changes)", a: "To do" },
                    { q: "Consider ... (hiring new staff)", a: "Doing" },
                    { q: "Promise ... (to meet the deadline)", a: "To do" },
                    { q: "Finish ... (reporting the progress)", a: "Doing" },
                    { q: "Need ... (to schedule a meeting)", a: "To do" }
                ]
            },
            {
                type: "cloze_test",
                title: "Cloze: Project Launch 🚀",
                instruction: "Complete the project report using correct verb patterns.",
                text: "We have decided {{0}} the new marketing campaign next week. The team suggested {{1}} social media more effectively. We hope {{2}} our sales by twenty percent. However, we should avoid {{3}} too much on traditional ads. Most managers enjoy {{4}} the results of their hard work.",
                answers: ["to launch", "using", "to increase", "spending", "seeing"],
                distractors: ["launching", "to use", "increased"]
            },
            {
                type: "trivia_game",
                title: "Pattern Challenge 🏆",
                instruction: "Select the correct follow-up form for these 10 common verbs.",
                questions: [
                    { question: "I enjoy ___.", options: ["to swim", "swimming", "swim", "swam"], correctIdx: 1 },
                    { question: "I want ___.", options: ["to go", "going", "go", "gone"], correctIdx: 0 },
                    { question: "She suggested ___.", options: ["to meet", "meeting", "meet", "met"], correctIdx: 1 },
                    { question: "He promised ___.", options: ["to help", "helping", "help", "helped"], correctIdx: 0 },
                    { question: "They avoided ___.", options: ["to talk", "talking", "talk", "talked"], correctIdx: 1 },
                    { question: "I hope ___.", options: ["to pass", "passing", "pass", "passed"], correctIdx: 0 },
                    { question: "We finished ___.", options: ["to work", "working", "work", "worked"], correctIdx: 1 },
                    { question: "You need ___.", options: ["to study", "studying", "study", "studied"], correctIdx: 0 },
                    { question: "Keep ___.", options: ["to try", "trying", "try", "tried"], correctIdx: 1 },
                    { question: "Decide ___.", options: ["to leave", "leaving", "leave", "left"], correctIdx: 0 }
                ]
            },
            {
                type: "sentence_builder",
                title: "Pattern Builder 🏗️",
                instruction: "Assemble 8 correct sentences using verb patterns.",
                sentences: [
                    { text: "I ENJOY LISTENING TO MUSIC", translation: "Disfruto escuchando música", distractors: ["TO LISTENING", "LISTENS"] },
                    { text: "HE PROMISED TO CALL ME", translation: "Él prometió llamarme", distractors: ["CALLING", "CALLS"] },
                    { text: "THEY AVOIDED TALKING TO HIM", translation: "Ellos evitaron hablar con él", distractors: ["TO TALKING", "TALK"] },
                    { text: "SHE SUGGESTED GOING TO THE CINEMA", translation: "Ella sugirió ir al cine", distractors: ["TO GO", "GOES"] },
                    { text: "WE DECIDED TO BUY A CAR", translation: "Decidimos comprar un coche", distractors: ["BUYING", "BUYS"] },
                    { text: "I FORGOT TO CLOSE THE WINDOW", translation: "Olvidé cerrar la ventana", distractors: ["CLOSING", "CLOSES"] },
                    { text: "YOU NEED TO PRACTICE EVERY DAY", translation: "Necesitas practicar cada día", distractors: ["PRACTICING", "PRACTICES"] },
                    { text: "STOP WASTING YOUR PRECIOUS TIME", translation: "Deja de perder tu precioso tiempo", distractors: ["TO WASTE", "WASTES"] }
                ]
            },
            {
                type: "unscramble",
                title: "Structure Scramble 🌪️",
                instruction: "Unscramble these 8 complex patterns.",
                questions: [
                    { a: "I suggested going for a walk", q: scramble("I suggested going for a walk") },
                    { a: "He promised to stay at home", q: scramble("He promised to stay at home") },
                    { a: "She avoided looking at the screen", q: scramble("She avoided looking at the screen") },
                    { a: "They decided to finish the project", q: scramble("They decided to finish the project") },
                    { a: "We wanted to see the movie", q: scramble("We wanted to see the movie") },
                    { a: "Keep practicing your basketball skills", q: scramble("Keep practicing your basketball skills") },
                    { a: "I hope to see you soon", q: scramble("I hope to see you soon") },
                    { a: "She finished writing the formal email", q: scramble("She finished writing the formal email") }
                ]
            }
        ]
    },
    66: { // B1-4: Describing Problems 1
        games: [
            {
                type: "reading_comprehension",
                title: "Reading: Incident Report 📜",
                instruction: "Read the technical report and answer 5 comprehension questions.",
                text: "At 9:00 AM, the technician noticed that the cooling system was leaking oil. This malfunction caused the entire server to overheat suddenly. \n\nWe immediately contacted the maintenance team, who informed us that there was a shortage of spare parts in the warehouse. Due to this delay, the replacement will not be possible until next Friday. In the meantime, we have activated the backup system to prevent data loss.",
                questions: [
                    { question: "What was leaking from the system?", options: ["Water", "Oil", "Gas", "Coolant"], correctIdx: 1 },
                    { question: "What was the result of the leak?", options: ["Server explosion", "Server overheating", "System upgrade", "Nothing"], correctIdx: 1 },
                    { question: "Why is the replacement delayed?", options: ["Budget issues", "Shortage of spare parts", "Staff holiday", "Power outage"], correctIdx: 1 },
                    { question: "When will the replacement happen?", options: ["Today", "Next Friday", "In a month", "Tomorrow"], correctIdx: 1 },
                    { question: "What was done to prevent data loss?", options: ["Turned off the server", "Activated backup system", "Called the police", "Rebooted the PCs"], correctIdx: 1 }
                ]
            },
            {
                type: "matching",
                title: "Issue Classifier 🏗️",
                instruction: "Match the 10 professional problems to their categories.",
                questions: [
                    { q: "The pipe is leaking oil.", a: "Plumbing issue" },
                    { q: "The screen is flickering constantly.", a: "Technical fault" },
                    { q: "The wall is cracked near the window.", a: "Structural damage" },
                    { q: "The carpet is stained with ink.", a: "Cleaning issue" },
                    { q: "The power is out in the lobby.", a: "Electrical failure" },
                    { q: "The budget report is late again.", a: "Administrative delay" },
                    { q: "The ladder is broken and unsafe.", a: "Equipment safety" },
                    { q: "The noise from the AC is loud.", a: "Environmental issue" },
                    { q: "The internet connection is very slow.", a: "Connectivity problem" },
                    { q: "The desk is wobbly and unstable.", a: "Furniture defect" }
                ]
            },
            {
                type: "cloze_test",
                title: "Cloze: Office Hazards 👷",
                instruction: "Organize the problem vocabulary into the safety report.",
                text: "During the inspection, we found several {{0}}. First, the fire escape door was {{1}} and wouldn't open. Then, we noticed a {{2}} under the sink in the kitchen. The kitchen floor was {{3}} with old spilled juice. Furthermore, some electrical cables were {{4}}, which is a huge fire risk. We must {{5}} these issues before anyone gets hurt.",
                answers: ["hazards", "jammed", "leak", "stained", "damaged", "resolve"],
                distractors: ["laughing", "singing", "eating"]
            },
            {
                type: "spell_tool",
                title: "Crisis Spelling 🔤",
                instruction: "Spell these 8 problematic terms correctly.",
                alphabet: { "F": "Fox", "L": "Lima", "I": "India", "C": "Charlie", "K": "Kilo", "E": "Echo", "R": "Romeo", "S": "Sierra", "H": "Hotel", "A": "Alpha", "T": "Tango", "G": "Golf" },
                questions: [
                    { word: "FLICKER", hint: "Rapid flashing of a screen" },
                    { word: "LEAKAGE", hint: "Escaping liquid or gas" },
                    { word: "STAINED", hint: "Dirty mark on fabric" },
                    { word: "CRACKED", hint: "Broken line on a surface" },
                    { word: "FAULTY", hint: "Not working as intended" },
                    { word: "OUTAGE", hint: "Total loss of power or signal" },
                    { word: "SHORTAGE", hint: "Not enough of something" },
                    { word: "DAMAGE", hint: "Physical harm to an object" }
                ]
            },
            {
                type: "hangman_game",
                title: "Fault Finder ☠️",
                instruction: "Guess the 10 adjectives used for describing problems.",
                words: [
                    { word: "UNSTABLE", hint: "Likely to change or fall" },
                    { word: "DEFECTIVE", hint: "Has a manufacturing flaw" },
                    { word: "BROKEN", hint: "In pieces or not working" },
                    { word: "RECURRING", hint: "Happening again and again" },
                    { word: "CRITICAL", hint: "Very serious or dangerous" },
                    { word: "MISSING", hint: "Not in its proper place" },
                    { word: "RUSTED", hint: "Corroded by water and oxygen" },
                    { word: "JAMMED", hint: "Stuck and cannot move" },
                    { word: "CLOGGED", hint: "Blocked so liquid cannot pass" },
                    { word: "EXPIRED", hint: "No longer valid for use" }
                ]
            }
        ]
    },
    67: { // B1-5: Describing Problems 2
        games: [
            {
                type: "sentence_builder",
                title: "Formal Complaint ✉️",
                instruction: "Construct 8 formal complaint sentences.",
                sentences: [
                    { text: "I AM WRITING TO REPORT A PROBLEM", translation: "Le escribo para informar de un problema", distractors: ["NEWS", "HAPPY"] },
                    { text: "THE SERVICE WAS EXTREMELY DISAPPOINTING", translation: "El servicio fue extremadamente decepcionante", distractors: ["GREAT", "FAST"] },
                    { text: "I WOULD LIKE TO REQUEST A REFUND", translation: "Me gustaría solicitar un reembolso", distractors: ["GIVE", "OFFER"] },
                    { text: "PLEASE RESOLVE THIS ISSUE IMMEDIATELY", translation: "Por favor resuelva este asunto de inmediato", distractors: ["LATER", "SLOWLY"] },
                    { text: "YOUR STAFF WAS QUITE UNHELPFUL", translation: "Su personal fue bastante poco colaborador", distractors: ["KIND", "NICE"] },
                    { text: "THE PRODUCT IS COMPLETELY FAULTY", translation: "El producto es completamente defectuoso", distractors: ["NEW", "GOOD"] },
                    { text: "I AM UNHAPPY WITH THE DELIVERY", translation: "No estoy contento con la entrega", distractors: ["GLAD", "MERRY"] },
                    { text: "EXPECTING A RESPONSE BY TOMORROW", translation: "Esperando una respuesta para mañana", distractors: ["YESTERDAY", "MONTH"] }
                ]
            },
            {
                type: "reading_comprehension",
                title: "Reading: Service Letter 📝",
                instruction: "Read the manager's response and answer 5 questions.",
                text: "Dear Customer,\n\nWe would like to apologize for the inconvenience caused by the late delivery of your order. After checking our records, we found that a logistical error resulted in your package being sent to the wrong city. \n\nWe have now dispatched a replacement unit via express shipping, and you should receive it within 24 hours. Additionally, we have applied a 20% discount code to your account for future use. We value your business and hope to resolve this matter to your satisfaction.\n\nBest regards,\nCustomer Service Manager",
                questions: [
                    { question: "What is the main purpose of the letter?", options: ["To sell a product", "To apologize for a delay", "To ask for money", "To announce a sale"], correctIdx: 1 },
                    { question: "What was the cause of the problem?", options: ["Bad luck", "Logistical error", "Weather problems", "Staff strike"], correctIdx: 1 },
                    { question: "Where was the package sent?", options: ["To the bin", "To the wrong city", "To the right city", "To the airport"], correctIdx: 1 },
                    { question: "How long will the replacement take?", options: ["A week", "Within 24 hours", "A month", "It is not coming"], correctIdx: 1 },
                    { question: "What compensation is offered?", options: ["Free gift", "20% discount code", "Full refund", "Nothing"], correctIdx: 1 }
                ]
            },
            {
                type: "cloze_test",
                title: "Cloze: Escalating the Issue 📞",
                instruction: "Complete the formal escalated complaint paragraph.",
                text: "Since my previous email was {{0}}, I have decided to take this further. I {{1}} with your current policy on returns. It is {{2}} that a customer has to wait this long. I am now {{3}} a written explanation and a full apology. Failure to {{4}} will result in me contacting the local authorities. I {{5}} a prompt reply.",
                answers: ["ignored", "disagree", "unacceptable", "demanding", "comply", "expect"],
                distractors: ["laughing", "singing", "crying"]
            },
            {
                type: "multiple_choice",
                title: "Tone Evaluator 🤵",
                instruction: "Select the most appropriate formal sentence from the set of 10.",
                questions: [
                    { q: "Complaint about delay?", options: ["Hey, where's my stuff?", "I am writing regarding the delay", "You guys are so slow!", "Give me my package now"], a: "I am writing regarding the delay" },
                    { q: "Asking for help?", options: ["Help me!", "Fix this!", "I would appreciate your assistance", "You must help me"], a: "I would appreciate your assistance" },
                    { q: "Ending the email?", options: ["Bye then", "See ya", "Yours faithfully", "Talk later"], a: "Yours faithfully" },
                    { q: "Reporting a fault?", options: ["It's broken", "The item is malfunctioning", "It is bad", "Take it back"], a: "The item is malfunctioning" },
                    { q: "Requesting a refund?", options: ["Gimme cash", "Where's my refund?", "I would like to request a refund", "Money back please"], a: "I would like to request a refund" },
                    { q: "Expressing disappointment?", options: ["I am unhappy with this", "This sucks", "Very bad service", "No good"], a: "I am unhappy with this" },
                    { q: "Apologizing formally?", options: ["Sorry lol", "My bad", "Please accept our apologies", "Oops"], a: "Please accept our apologies" },
                    { q: "Requesting a phone call?", options: ["Call me", "Pick up the phone", "I look forward to your call", "Dial my number"], a: "I look forward to your call" },
                    { q: "Providing details?", options: ["Look at this", "See below", "Please find the details attached", "Check this out"], a: "Please find the details attached" },
                    { q: "Asking for contact?", options: ["Call me maybe", "Ring me", "Please contact me at your earliest convenience", "Text me"], a: "Please contact me at your earliest convenience" }
                ]
            },
            {
                type: "matching",
                title: "Problem Solver 🧠",
                instruction: "Match each professional problem to its most formal resolution.",
                questions: [
                    { q: "The smartphone display is physically shattered.", a: "Screen repair" },
                    { q: "An item from the order was not in the box.", a: "Replacement unit" },
                    { q: "The customer paid more than the advertised price.", a: "Price adjustment" },
                    { q: "The shipment did not arrive on the scheduled date.", a: "Express shipping" },
                    { q: "The equipment is not starting or responding.", a: "Technical support" },
                    { q: "The contract contains several spelling mistakes.", a: "Corrected copy" },
                    { q: "The garment is too tight for the customer's size.", a: "Size exchange" },
                    { q: "The entire building has lost its electrical connection.", a: "Backup generator" },
                    { q: "The construction noise outside is bothering staff.", a: "Quiet room access" },
                    { q: "The conference room is dusty and unorganized.", a: "Cleaning service" }
                ]
            }
        ]
    },
    68: { // B1-6: Passions & Talents
        games: [
            {
                type: "cloze_test",
                title: "Cloze: Discovering Your Talent 🌟",
                instruction: "Click a gap, then select the missing word from the Word Bank.",
                text: "Many people spend years {{0}} for their true passion. Finding a talent often {{1}} trying many different activities. Instead of {{2}} afraid of failure, you should focus on {{3}} new skills. Some individuals are naturally gifted at {{4}} musical instruments, while others excel at {{5}} complex problems. The key is to keep {{6}} until you find what makes you happy. {{7}} a hobby can eventually lead to a successful career.",
                answers: ["searching", "involves", "being", "developing", "playing", "solving", "exploring", "Starting"],
                distractors: ["running", "eating", "breaking"]
            },
            {
                type: "matching",
                title: "Passion Matcher 🧩",
                instruction: "Connect the passion description to the corresponding field.",
                questions: [
                    { q: "The art of preparing high-quality meals.", a: "Gastronomy" },
                    { q: "The skill of designing safe buildings.", a: "Architecture" },
                    { q: "The passion for protecting the environment.", a: "Ecology" },
                    { q: "The talent for writing computer code.", a: "Programming" },
                    { q: "The ability to speak multiple languages.", a: "Linguistics" },
                    { q: "The interest in studying ancient history.", a: "Archaeology" },
                    { q: "The talent for performing in front of crowds.", a: "Acting" },
                    { q: "The skill of managing large company finances.", a: "Accounting" },
                    { q: "The passion for exploring distant galaxies.", a: "Astronomy" },
                    { q: "The ability to heal animals in a clinic.", a: "Veterinary" }
                ]
            },
            {
                type: "sentence_builder",
                title: "Passion Structure 🏗️",
                instruction: "Build 8 sentences about professional talents.",
                sentences: [
                    { text: "I AM REALLY GOOD AT SOLVING PROBLEMS", translation: "Soy muy bueno resolviendo problemas", distractors: ["TO SOLVE", "SOLVES"] },
                    { text: "SHE HAS A NATURAL TALENT FOR PAINTING", translation: "Ella tiene un talento natural para la pintura", distractors: ["TO PAINT", "PAINTS"] },
                    { text: "FINDING YOUR PASSION TAKES SOME TIME", translation: "Encontrar tu pasión toma algo de tiempo", distractors: ["FIND", "FOUND"] },
                    { text: "HE IS INTERESTED IN LEARNING JAPANESE", translation: "Él está interesado en aprender japonés", distractors: ["TO LEARN", "LEARNT"] },
                    { text: "WORKING HARD IS NECESSARY FOR SUCCESS", translation: "Trabajar duro es necesario para el éxito", distractors: ["WORK", "WORKS"] },
                    { text: "YOU SHOULD NEVER STOP FOLLOWING YOUR DREAMS", translation: "Nunca deberías dejar de seguir tus sueños", distractors: ["TO FOLLOW", "FOLLOWS"] },
                    { text: "THEY ENJOY COLLABORATING ON BIG PROJECTS", translation: "Ellos disfrutan colaborando en grandes proyectos", distractors: ["TO COLLABORATE", "COLLABORATES"] },
                    { text: "DEVELOPING A SKILL REQUIRES CONSTANT PRACTICE", translation: "Desarrollar una habilidad requiere práctica constante", distractors: ["DEVELOP", "DEVELOPED"] }
                ]
            },
            {
                type: "trivia_game",
                title: "Talent Trivia 🏆",
                instruction: "Select the correct verb form for these 10 talent descriptions.",
                questions: [
                    { question: "She is capable of ___ fast.", options: ["running", "to run", "run", "ran"], correctIdx: 0 },
                    { question: "___ a new language is hard.", options: ["Study", "Studying", "To studying", "Studies"], correctIdx: 1 },
                    { question: "He is talented at ___.", options: ["sing", "singing", "to sing", "sang"], correctIdx: 1 },
                    { question: "They considered ___ a business.", options: ["starting", "to start", "start", "started"], correctIdx: 0 },
                    { question: "I plan on ___ a doctor.", options: ["becoming", "to become", "become", "became"], correctIdx: 0 },
                    { question: "We suggest ___ every day.", options: ["practice", "practicing", "to practice", "practiced"], correctIdx: 1 },
                    { question: "Is he used to ___ late?", options: ["working", "work", "to work", "worked"], correctIdx: 0 },
                    { question: "The goal is ___ the match.", options: ["to win", "winning", "win", "won"], correctIdx: 0 },
                    { question: "Stop ___ about the past.", options: ["to think", "thinking", "think", "thought"], correctIdx: 1 },
                    { question: "Keep ___ toward your goal.", options: ["move", "moving", "to move", "moved"], correctIdx: 1 }
                ]
            },
            {
                type: "unscramble",
                title: "Talent Scramble 🌪️",
                instruction: "Unscramble these 8 complex sentences about skills.",
                questions: [
                    { a: "Developing a new talent takes time", q: scramble("Developing a new talent takes time") },
                    { a: "She is gifted at playing the piano", q: scramble("She is gifted at playing the piano") },
                    { a: "Working in a team is essential now", q: scramble("Working in a team is essential now") },
                    { a: "Finding a passion is very rewarding", q: scramble("Finding a passion is very rewarding") },
                    { a: "I enjoy learning about different cultures", q: scramble("I enjoy learning about different cultures") },
                    { a: "Solving problems requires a lot of focus", q: scramble("Solving problems requires a lot of focus") },
                    { a: "Starting a business is a big challenge", q: scramble("Starting a business is a big challenge") },
                    { a: "He is interested in studying modern art", q: scramble("He is interested in studying modern art") }
                ]
            }
        ]
    },
    69: { // B1-7: Giving Opinions
        games: [
            {
                type: "cloze_test",
                title: "Cloze: Formal Debate 🎙️",
                instruction: "Organize the formal opinion expressions in the text.",
                text: "In my {{0}}, we should invest more in technology. Although some people {{1}}, I believe that the benefits outweigh the costs. It {{2}} to me that we are losing time. From my {{3}}, the solution is quite simple. I {{4}} with your previous statement about the budget. However, we must {{5}} the risks involved. Broadly {{6}}, the plan is solid but needs minor adjustments.",
                answers: ["opinion", "disagree", "seems", "perspective", "agree", "consider", "speaking"],
                distractors: ["singing", "eating", "breaking"]
            },
            {
                type: "matching",
                title: "Opinion Connector 🧩",
                instruction: "Connect the opinion opening to the correct ending.",
                questions: [
                    { q: "I firmly believe that", a: "we can achieve this goal." },
                    { q: "In my humble opinion,", a: "this is not the right choice." },
                    { q: "As far as I am concerned,", a: "the results are acceptable." },
                    { q: "I would like to point out", a: "that time is running out." },
                    { q: "It strikes me that", a: "we need a new strategy." },
                    { q: "To be perfectly honest,", a: "I am not convinced yet." },
                    { q: "I couldn't agree more", a: "with your last proposal." },
                    { q: "I tend to think", a: "that quality is decreasing." },
                    { q: "On the other hand,", a: "we must save some money." },
                    { q: "I have no doubt", a: "that the team will succeed." }
                ]
            },
            {
                type: "multiple_choice",
                title: "Tone Evaluator 🤵",
                instruction: "Select the most appropriate formal opinion for each situation.",
                questions: [
                    { q: "Agreeing in a meeting?", options: ["Yeah, whatever", "I concur with your point", "You are totally right", "Cool beans"], a: "I concur with your point" },
                    { q: "Disagreeing politely?", options: ["You're wrong", "I see it differently", "I beg to differ", "Stop talking"], a: "I beg to differ" },
                    { q: "Asking for an opinion?", options: ["What's up?", "What are your thoughts on this?", "Tell me now", "Do you like it?"], a: "What are your thoughts on this?" },
                    { q: "Giving a strong opinion?", options: ["I guess so", "I am absolutely convinced that", "Maybe yes", "Perhaps"], a: "I am absolutely convinced that" },
                    { q: "Clarifying a thought?", options: ["Wait", "What I meant to say was", "Listen to me", "Look"], a: "What I meant to say was" }
                ]
            },
            {
                type: "sentence_builder",
                title: "Opinion Builder 🏗️",
                instruction: "Build 8 formal opinion sentences.",
                sentences: [
                    { text: "IN MY OPINION THE PLAN IS GOOD", translation: "En mi opinión el plan es bueno", distractors: ["ON", "THINK"] },
                    { text: "I STRONGLY DISAGREE WITH THIS CHOICE", translation: "Desacuerdo fuertemente con esta elección", distractors: ["STRONG", "DISAGREED"] },
                    { text: "AS FAR AS I AM CONCERNED", translation: "En lo que a mí respecta", distractors: ["IS", "KNOW"] },
                    { text: "IT SEEMS TO ME THAT WE CAN", translation: "Me parece que podemos", distractors: ["LOOKS", "COULD"] },
                    { text: "I WOULD LIKE TO SUGGEST A CHANGE", translation: "Me gustaría sugerir un cambio", distractors: ["LIKED", "WANT"] },
                    { text: "FROM MY PERSPECTIVE THIS IS VITAL", translation: "Desde mi perspectiva esto es vital", distractors: ["ON", "VIEW"] },
                    { text: "I TOTALLY AGREE WITH YOUR ANALYSIS", translation: "Estoy totalmente de acuerdo con tu análisis", distractors: ["AGREED", "TOTAL"] },
                    { text: "THERE IS NO DOUBT ABOUT IT", translation: "No hay duda al respecto", distractors: ["NONE", "DOUBTS"] }
                ]
            },
            {
                type: "unscramble",
                title: "Opinion Scramble 🌪️",
                instruction: "Unscramble these 8 formal expressions.",
                questions: [
                    { a: "I would like to express my opinion", q: scramble("I would like to express my opinion") },
                    { a: "It is important to consider all views", q: scramble("It is important to consider all views") },
                    { a: "I partially agree with your statement", q: scramble("I partially agree with your statement") },
                    { a: "That is an interesting point of view", q: scramble("That is an interesting point of view") },
                    { a: "As I see it the problem is complex", q: scramble("As I see it the problem is complex") },
                    { a: "I am not sure if I agree", q: scramble("I am not sure if I agree") },
                    { a: "To my mind this is the solution", q: scramble("To my mind this is the solution") },
                    { a: "We should look at the bigger picture", q: scramble("We should look at the bigger picture") }
                ]
            }
        ]
    },
    70: { // B1-8: Formal Correspondence
        games: [
            {
                type: "cloze_test",
                title: "Cloze: Formal Letter ✍️",
                instruction: "Organize the formal letter components.",
                text: "Dear Sir or {{0}}, I am writing to {{1}} about the quality of the service. I {{2}} a deluxe room last month. However, the {{3}} condition was very poor. Although I notified the staff, they were {{4}} and rude. Therefore, I insist on receiving a full {{5}}. I look forward to {{6}} your response soon. Yours {{7}}, John Doe.",
                answers: ["Madam", "complain", "booked", "room", "unhelpful", "refund", "receiving", "faithfully"],
                distractors: ["shouting", "dancing", "breaking"]
            },
            {
                type: "matching",
                title: "Formal vs Informal 🧩",
                instruction: "Connect the informal phrase to its professional equivalent.",
                questions: [
                    { q: "Hi!", a: "Dear Sir/Madam," },
                    { q: "Thanks a lot", a: "Thank you for your assistance." },
                    { q: "I'm sorry", a: "Please accept my apologies." },
                    { q: "Wait a minute", a: "I would appreciate a moment." },
                    { q: "Tell me more", a: "Could you provide further details?" },
                    { q: "It's broken", a: "The item is malfunctioning." },
                    { q: "I want money back", a: "I am requesting a refund." },
                    { q: "Call me", a: "I look forward to your call." },
                    { q: "Bye!", a: "Yours faithfully," },
                    { q: "Help me", a: "I would like to request assistance." }
                ]
            },
            {
                type: "sentence_builder",
                title: "Correspondence Builder 🏗️",
                instruction: "Construct 8 formal writing structures.",
                sentences: [
                    { text: "I AM WRITING WITH REGARD TO", translation: "Le escribo con respecto a", distractors: ["ON", "ABOUT"] },
                    { text: "PLEASE FIND THE ATTACHED FILE", translation: "Por favor encuentre el archivo adjunto", distractors: ["FOUND", "ATTACH"] },
                    { text: "I WOULD APPRECIATE AN EARLY RESPONSE", translation: "Agradecería una respuesta pronta", distractors: ["LIKED", "SOON"] },
                    { text: "THANK YOU FOR YOUR KIND ATTENTION", translation: "Gracias por su amable atención", distractors: ["NICE", "THANKS"] },
                    { text: "I APOLOGIZE FOR ANY INCONVENIENCE", translation: "Me disculpo por cualquier inconveniente", distractors: ["AM", "SORRY"] },
                    { text: "COULD YOU PLEASE CLARIFY THIS POINT", translation: "Podría por favor aclarar este punto", distractors: ["CAN", "CLEAR"] },
                    { text: "WE REGRET TO INFORM YOU THAT", translation: "Lamentamos informarle que", distractors: ["SAD", "TELL"] },
                    { text: "I LOOK FORWARD TO MEETING YOU", translation: "Espero con ansias conocerle", distractors: ["MEET", "FORWARDS"] }
                ]
            },
            {
                type: "trivia_game",
                title: "Writing Rules 🏆",
                instruction: "Select the correct formal ending or structure for these 10 cases.",
                questions: [
                    { question: "Ending for 'Dear Sir/Madam'?", options: ["Sincerely", "Faithfully", "Love", "Best"], correctIdx: 1 },
                    { question: "Ending for 'Dear Mr. Jones'?", options: ["Faithfully", "Sincerely", "Cheers", "Bye"], correctIdx: 1 },
                    { question: "Formal way to say 'help'?", options: ["Assistance", "Help", "Aid", "Support"], correctIdx: 0 },
                    { question: "Formal way to say 'need'?", options: ["Want", "Require", "Need", "Have to"], correctIdx: 1 },
                    { question: "Formal way to start?", options: ["Hey", "To whom it may concern", "What's up", "Greetings"], correctIdx: 1 },
                    { question: "Formal way to say 'check'?", options: ["Verify", "Look at", "Check", "See"], correctIdx: 0 },
                    { question: "Formal way to say 'get'?", options: ["Obtain", "Get", "Take", "Have"], correctIdx: 0 },
                    { question: "Formal way to say 'tell'?", options: ["Inform", "Tell", "Say", "Talk"], correctIdx: 0 },
                    { question: "Formal way to say 'ask'?", options: ["Inquire", "Ask", "Request", "Wonder"], correctIdx: 0 },
                    { question: "Formal way to say 'buy'?", options: ["Purchase", "Buy", "Get", "Shop"], correctIdx: 0 }
                ]
            },
            {
                type: "spell_tool",
                title: "Correspondence Spelling 🔤",
                instruction: "Spell these 10 formal writing terms.",
                alphabet: { "S": "Sierra", "I": "India", "N": "November", "C": "Charlie", "E": "Echo", "R": "Romeo", "L": "Lima", "Y": "Yankee", "A": "Alpha", "T": "Tango", "H": "Hotel", "F": "Fox", "U": "Uniform", "G": "Golf" },
                questions: [
                    { word: "SINCERELY", hint: "Ending for named recipients" },
                    { word: "FAITHFULLY", hint: "Ending for unknown recipients" },
                    { word: "ATTACHED", hint: "Included with an email" },
                    { word: "REGARDING", hint: "Concerning a topic" },
                    { word: "INQUIRY", hint: "A formal question" },
                    { word: "PURCHASE", hint: "The act of buying" },
                    { word: "RESPONSE", hint: "A formal answer" },
                    { word: "ASSIST", hint: "To help someone" },
                    { word: "REQUEST", hint: "To ask for something" },
                    { word: "APOLOGY", hint: "Saying sorry formally" }
                ]
            }
        ]
    },
    71: { // B1-9: Future Predictions
        games: [
            {
                type: "cloze_test",
                title: "Cloze: 2050 Predictions 🚀",
                instruction: "Organize the future structures in the text.",
                text: "By the year 2050, technology {{0}} changed our lives completely. Most people {{1}} be working from home using virtual reality. I {{2}} that cars {{3}} fly over major cities. We are {{4}} to see many new space colonies on Mars. Scientists {{5}} be discovering cures for many diseases. Life in the future {{6}} going to be very different from today.",
                answers: ["will", "will", "think", "will", "going", "will", "is"],
                distractors: ["was", "did", "were"]
            },
            {
                type: "matching",
                title: "Future Conditions 🧩",
                instruction: "Connect the prediction to its likely consequence.",
                questions: [
                    { q: "If robots take all jobs,", a: "humanity will need a new income." },
                    { q: "Once AI is super-intelligent,", a: "life will never be the same." },
                    { q: "When we land on Mars,", a: "we will start a new civilization." },
                    { q: "Supposing it rains tomorrow,", a: "the match will be cancelled." },
                    { q: "Provided we save money,", a: "we will travel next year." },
                    { q: "As soon as I graduate,", a: "I will find a professional job." },
                    { q: "Unless we act now,", a: "the climate will worsen." },
                    { q: "Even if it is expensive,", a: "I will buy the new laptop." },
                    { q: "Whether you like it or not,", a: "technology will keep advancing." },
                    { q: "In case of emergency,", a: "the system will shut down." }
                ]
            },
            {
                type: "trivia_game",
                title: "Future Forms 🏆",
                instruction: "Select the correct future form for these 10 predictions.",
                questions: [
                    { question: "I think it ___ rain.", options: ["will", "going to", "is", "was"], correctIdx: 0 },
                    { question: "Look! The bus ___ leave.", options: ["will", "is going to", "leaves", "left"], correctIdx: 1 },
                    { question: "This time tomorrow, I ___.", options: ["will fly", "will be flying", "fly", "flying"], correctIdx: 1 },
                    { question: "By next year, I ___ my degree.", options: ["will get", "will have gotten", "got", "get"], correctIdx: 1 },
                    { question: "I ___ you later.", options: ["see", "will see", "am seeing", "saw"], correctIdx: 1 },
                    { question: "The train ___ at 9:00 PM.", options: ["leaves", "will leave", "is leaving", "left"], correctIdx: 0 },
                    { question: "I ___ a party tonight.", options: ["have", "am having", "will have", "had"], correctIdx: 1 },
                    { question: "He ___ be 30 next month.", options: ["will", "is going to", "is", "was"], correctIdx: 0 },
                    { question: "___ you help me?", options: ["Will", "Are", "Do", "Have"], correctIdx: 0 },
                    { question: "It ___ be cold tomorrow.", options: ["is", "is going to", "will", "was"], correctIdx: 2 }
                ]
            },
            {
                type: "sentence_builder",
                title: "Prediction Builder 🏗️",
                instruction: "Build 8 sentences about the future.",
                sentences: [
                    { text: "I THINK CARS WILL FLY SOON", translation: "Creo que los coches volarán pronto", distractors: ["FLYING", "FLOWN"] },
                    { text: "SHE IS GOING TO BUY A HOUSE", translation: "Ella va a comprar una casa", distractors: ["WILL", "BUYS"] },
                    { text: "WE WILL BE WORKING FROM HOME", translation: "Estaremos trabajando desde casa", distractors: ["WORK", "WORKED"] },
                    { text: "BY NEXT YEAR I WILL GRADUATE", translation: "Para el próximo año me graduaré", distractors: ["GRADUATING", "GRADUATED"] },
                    { text: "IT IS GOING TO RAIN TODAY", translation: "Va a llover hoy", distractors: ["WILL", "RAINS"] },
                    { text: "THEY WILL HAVE FINISHED BY THEN", translation: "Habrán terminado para entonces", distractors: ["FINISH", "FINISHING"] },
                    { text: "I AM MEETING HIM AT NOON", translation: "Me reuniré con él al mediodía", distractors: ["MEET", "MET"] },
                    { text: "WILL YOU BE JOINING US LATER", translation: "¿Te unirás a nosotros luego?", distractors: ["JOIN", "JOINED"] }
                ]
            },
            {
                type: "unscramble",
                title: "Future Scramble 🌪️",
                instruction: "Unscramble 8 future predictions.",
                questions: [
                    { a: "Everything will be different in the future", q: scramble("Everything will be different in the future") },
                    { a: "We are going to travel to Mars", q: scramble("We are going to travel to Mars") },
                    { a: "Technology will have advanced a lot", q: scramble("Technology will have advanced a lot") },
                    { a: "I will be studying all night long", q: scramble("I will be studying all night long") },
                    { a: "The sun is going to shine tomorrow", q: scramble("The sun is going to shine tomorrow") },
                    { a: "Robot assistants will help the elderly", q: scramble("Robot assistants will help the elderly") },
                    { a: "Flying cars will solve the traffic problem", q: scramble("Flying cars will solve the traffic problem") },
                    { a: "People will live longer lives then", q: scramble("People will live longer lives then") }
                ]
            }
        ]
    },
    72: { // B1-10: Advice & Suggestions
        games: [
            {
                type: "cloze_test",
                title: "Cloze: Expert Advice 👩‍⚕️",
                instruction: "Organize the modal verbs for advice in the text.",
                text: "If you want to stay healthy, you {{0}} drink plenty of water. You {{1}} avoid eating too much sugar. It is better {{2}} to go for a walk every day. You {{3}} better see a doctor if you feel ill. Perhaps you {{4}} consider joining a gym. I {{5}} that you start a new hobby. You {{6}} to try meditation for stress. In my view, you {{7}} not worry so much.",
                answers: ["should", "must", "to", "had", "ought", "suggest", "ought", "should"],
                distractors: ["did", "was", "were"]
            },
            {
                type: "matching",
                title: "Problem & Advice 🧩",
                instruction: "Connect the problem to the most balanced advice.",
                questions: [
                    { q: "I am always tired.", a: "You should go to bed earlier." },
                    { q: "I have a headache.", a: "You ought to take an aspirin." },
                    { q: "I am failing math.", a: "You had better find a tutor." },
                    { q: "I want to save money.", a: "You should stop eating out." },
                    { q: "My car is broken.", a: "You must take it to a mechanic." },
                    { q: "I am bored.", a: "Why don't you start a hobby?" },
                    { q: "I lost my phone.", a: "You should report it immediately." },
                    { q: "I am stressed.", a: "I suggest trying some yoga." },
                    { q: "I want a new job.", a: "You should update your CV." },
                    { q: "I am hungry.", a: "You had better cook something." }
                ]
            },
            {
                type: "trivia_game",
                title: "Modal Mastery 🏆",
                instruction: "Select the correct advice modal (Should, Ought to, Had better) for 10 cases.",
                questions: [
                    { question: "You ___ see a doctor.", options: ["should", "should to", "ought", "must"], correctIdx: 0 },
                    { question: "You ___ to work harder.", options: ["should", "ought", "must", "had better"], correctIdx: 1 },
                    { question: "You had ___ hurry up!", options: ["better", "good", "best", "should"], correctIdx: 0 },
                    { question: "I suggest ___ a break.", options: ["taking", "to take", "take", "took"], correctIdx: 0 },
                    { question: "___ about calling him?", options: ["How", "Why", "When", "What"], correctIdx: 0 },
                    { question: "You ___ not smoke here.", options: ["should", "must", "ought", "better"], correctIdx: 1 },
                    { question: "It's cold. You ___ wear a coat.", options: ["should", "must", "ought to", "better"], correctIdx: 0 },
                    { question: "You ___ better not be late.", options: ["had", "should", "must", "would"], correctIdx: 0 },
                    { question: "Why ___ you take the bus?", options: ["don't", "not", "should", "must"], correctIdx: 0 },
                    { question: "You ___ to be more careful.", options: ["ought", "should", "must", "better"], correctIdx: 0 }
                ]
            },
            {
                type: "sentence_builder",
                title: "Advice Builder 🏗️",
                instruction: "Build 8 sentences giving suggestions.",
                sentences: [
                    { text: "YOU SHOULD DRINK MORE WATER", translation: "Deberías beber más agua", distractors: ["TO DRINK", "DRINKS"] },
                    { text: "I SUGGEST GOING TO THE DOCTOR", translation: "Sugiero ir al médico", distractors: ["TO GO", "GOES"] },
                    { text: "YOU HAD BETTER NOT BE LATE", translation: "Más vale que no llegues tarde", distractors: ["SHOULD", "BEST"] },
                    { text: "YOU OUGHT TO STUDY HARDER", translation: "Deberías estudiar más duro", distractors: ["TO STUDYING", "STUDIES"] },
                    { text: "WHY DONT YOU TAKE A BREAK", translation: "¿Por qué no tomas un descanso?", distractors: ["DO", "TAKING"] },
                    { text: "HOW ABOUT WATCHING A MOVIE", translation: "¿Qué tal ver una película?", distractors: ["TO WATCH", "WATCH"] },
                    { text: "YOU MUST WEAR A HELMET", translation: "Debes usar un casco", distractors: ["TO WEAR", "WEARS"] },
                    { text: "I WOULD ADVISE YOU TO STAY", translation: "Te aconsejaría quedarte", distractors: ["ADVISE", "STAYING"] }
                ]
            },
            {
                type: "unscramble",
                title: "Advice Scramble 🌪️",
                instruction: "Unscramble 8 sentences of helpful advice.",
                questions: [
                    { a: "You should take care of yourself", q: scramble("You should take care of yourself") },
                    { a: "I suggest reading a good book", q: scramble("I suggest reading a good book") },
                    { a: "You had better listen to me", q: scramble("You had better listen to me") },
                    { a: "You ought to be more careful", q: scramble("You ought to be more careful") },
                    { a: "Why don't we go out tonight", q: scramble("Why don't we go out tonight") },
                    { a: "How about having some lunch now", q: scramble("How about having some lunch now") },
                    { a: "You should not worry about it", q: scramble("You should not worry about it") },
                    { a: "It is better to tell the truth", q: scramble("It is better to tell the truth") }
                ]
            }
        ]
    }
};

topics.forEach(topic => {
    if (b1FullContent[topic.id]) {
        topic.premium_practice = JSON.stringify(b1FullContent[topic.id]);
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('B1 Arcade COMPLETE (Topics 1-10) with CLOZE TEST and MAX VARIETY.');
