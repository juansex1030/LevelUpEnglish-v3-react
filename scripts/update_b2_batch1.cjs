const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const b2Batch1 = {
    93: { // B2-1: Verbs + Gerunds
        games: [
            { type: "trivia_game", title: "Gerund Masters 🏆", questions: [
                { q: "I enjoy ___ in the ocean.", a: "swimming", o: ["to swim", "swim", "swam"] },
                { q: "She suggested ___ a break.", a: "taking", o: ["to take", "take", "taken"] },
                { q: "He avoids ___ about work.", a: "talking", o: ["to talk", "talk", "talks"] },
                { q: "They finished ___ the project.", a: "cleaning", o: ["to clean", "clean", "cleaned"] },
                { q: "Do you mind ___ the window?", a: "opening", o: ["to open", "open", "opened"] }
            ]},
            { type: "word_search", title: "Gerund Verbs 🔍", words: ["ENJOY", "AVOID", "SUGGEST", "FINISH", "MIND", "CONSIDER", "ADMIT", "DENY", "KEEP", "MISS"] },
            { type: "matching", title: "Verb & Meaning 🧩", questions: [
                { q: "Avoid...", a: "...doing something wrong." },
                { q: "Consider...", a: "...thinking about an idea." },
                { q: "Admit...", a: "...saying you did something." },
                { q: "Keep...", a: "...continuing an action." },
                { q: "Miss...", a: "...feeling sad about an absence." }
            ]},
            { type: "sentence_builder", title: "Gerund Builder 🏗️", sentences: [
                { text: "I ENJOY LISTENING TO MUSIC", translation: "Disfruto escuchando música", distractors: ["TO LISTENING", "LISTENS"] },
                { text: "SHE AVOIDS TALKING TO HIM", translation: "Ella evita hablar con él", distractors: ["TO TALKING", "TALK"] }
            ]},
            { type: "cloze_test", title: "Daily Habits 🧘", text: "I really enjoy {{0}} in the morning. However, I avoid {{1}} coffee before bed. My friend suggested {{2}} a yoga class. I am considering {{3}} the gym next week.", answers: ["running", "drinking", "joining", "entering"], distractors: ["to run", "drink", "join"] }
        ]
    },
    94: { // B2-2: Noun Clauses
        games: [
            { type: "matching", title: "Noun Clause Match 🧩", questions: [
                { q: "I don't know...", a: "...what he said." },
                { q: "Do you know...", a: "...where she is?" },
                { q: "I wonder...", a: "...if it will rain." },
                { q: "I believe...", a: "...that you are right." },
                { q: "She told me...", a: "...why she was late." }
            ]},
            { type: "trivia_game", title: "Clause Quiz 🏆", questions: [
                { q: "I know ___ you mean.", a: "what", o: ["that", "where", "who"] },
                { q: "He asked ___ I was okay.", a: "if", o: ["that", "what", "which"] },
                { q: "I wonder ___ the bus arrives.", a: "when", o: ["that", "who", "which"] },
                { q: "Tell me ___ you are going.", a: "where", o: ["that", "what", "which"] },
                { q: "I believe ___ he is honest.", a: "that", o: ["what", "if", "whether"] }
            ]},
            { type: "sentence_builder", title: "Clause Builder 🏗️", sentences: [
                { text: "I KNOW WHAT YOU DID", translation: "Sé lo que hiciste", distractors: ["THAT", "WHICH"] },
                { text: "TELL ME WHERE SHE LIVES", translation: "Dime dónde vive ella", distractors: ["WHICH", "THAT"] }
            ]},
            { type: "cloze_test", title: "The Mystery 🕵️", text: "I don't know {{0}} happened last night. Nobody can tell me {{1}} the key is. I wonder {{2}} anyone saw the thief. I believe {{3}} someone knows the truth.", answers: ["what", "where", "if", "that"], distractors: ["who", "which", "whether"] },
            { type: "word_search", title: "Clause Linkers 🔍", words: ["WHAT", "WHERE", "WHEN", "WHY", "HOW", "THAT", "IF", "WHETHER", "WHICH", "WHO"] }
        ]
    },
    95: { // B2-3: Past Modals
        games: [
            { type: "matching", title: "Past Modal Match 🧩", questions: [
                { q: "It was a mistake.", a: "Should have" },
                { q: "I'm 100% sure.", a: "Must have" },
                { q: "I'm 100% sure it didn't.", a: "Can't have" },
                { q: "It was a possibility.", a: "Could have" },
                { q: "Maybe it happened.", a: "Might have" }
            ]},
            { type: "trivia_game", title: "Past Deduction 🏆", questions: [
                { q: "The floor is wet. It ___ rained.", a: "must have", o: ["can't have", "should have", "might have"] },
                { q: "He is still hungry. He ___ eaten much.", a: "can't have", o: ["must have", "should have", "could have"] },
                { q: "I lost my phone. I ___ left it at home.", a: "might have", o: ["must have", "should have", "can't have"] },
                { q: "You ___ called me. I was worried!", a: "should have", o: ["must have", "can't have", "might have"] },
                { q: "We ___ won if we had tried.", a: "could have", o: ["must have", "should have", "can't have"] }
            ]},
            { type: "cloze_test", title: "The Missing Watch ⌚", text: "I can't find my watch. I {{0}} have left it in the bathroom. No, I {{1}} have, I didn't go there. Someone {{2}} have stolen it! I {{3}} have been more careful.", answers: ["might", "can't", "must", "should"], distractors: ["would", "shall", "could"] },
            { type: "word_search", title: "Modal Search 🔍", words: ["SHOULD", "MUST", "COULD", "MIGHT", "CANT", "WOULD", "HAVE", "BEEN", "DONE", "GONE"] },
            { type: "sentence_builder", title: "Past Builder 🏗️", sentences: [
                { text: "HE MUST HAVE LEFT EARLY", translation: "Él debe haberse ido temprano", distractors: ["CAN'T", "MIGHT"] },
                { text: "SHE SHOULD HAVE CALLED", translation: "Ella debería haber llamado", distractors: ["MUST", "COULD"] }
            ]}
        ]
    },
    96: { // B2-4: Modal Uses
        games: [
            { type: "trivia_game", title: "Modal Power 🏆", questions: [
                { q: "You ___ stop at a red light.", a: "must", o: ["should", "might", "could"] },
                { q: "___ you pass the salt, please?", a: "Could", o: ["Must", "Should", "Shall"] },
                { q: "It ___ rain tomorrow.", a: "might", o: ["must", "should", "will"] },
                { q: "I ___ speak three languages.", a: "can", o: ["must", "should", "might"] },
                { q: "You ___ see a doctor about that.", a: "should", o: ["must", "might", "can"] }
            ]},
            { type: "word_search", title: "Modal Words 🔍", words: ["CAN", "COULD", "MUST", "SHOULD", "MIGHT", "MAY", "SHALL", "WILL", "WOULD", "OUGHT"] },
            { type: "matching", title: "Modal & Function 🧩", questions: [
                { q: "Permission...", a: "...May I?" },
                { q: "Obligation...", a: "...You must." },
                { q: "Advice...", a: "...You should." },
                { q: "Ability...", a: "...I can." },
                { q: "Possibility...", a: "...It might." }
            ]},
            { type: "cloze_test", title: "Rules of the Road 🚗", text: "Drivers {{0}} follow the speed limit. You {{1}} not use your phone while driving. If you see an accident, you {{2}} call the police. You {{3}} be very careful in the rain.", answers: ["must", "should", "should", "must"], distractors: ["can", "might", "shall"] },
            { type: "sentence_builder", title: "Rule Builder 🏗️", sentences: [
                { text: "YOU MUST WEAR A HELMET", translation: "Debes usar un casco", distractors: ["SHOULD", "CAN"] },
                { text: "CAN I HELP YOU PLEASE", translation: "¿Puedo ayudarte por favor?", distractors: ["MUST", "SHOULD"] }
            ]}
        ]
    },
    97: { // B2-5: Relative Clauses
        games: [
            { type: "matching", title: "Clause Matcher 🧩", questions: [
                { q: "The man...", a: "...who lives next door." },
                { q: "The car...", a: "...which is red." },
                { q: "The house...", a: "...where I was born." },
                { q: "The day...", a: "...when we met." },
                { q: "The girl...", a: "...whose father is a pilot." }
            ]},
            { type: "trivia_game", title: "Relative Quiz 🏆", questions: [
                { q: "The book ___ I am reading is great.", a: "that", o: ["who", "whom", "whose"] },
                { q: "The person ___ called you is my brother.", a: "who", o: ["which", "whose", "where"] },
                { q: "This is the cafe ___ we met.", a: "where", o: ["which", "who", "when"] },
                { q: "I know a boy ___ brother is famous.", a: "whose", o: ["who", "which", "that"] },
                { q: "The time ___ we arrived was 9 PM.", a: "when", o: ["where", "which", "who"] }
            ]},
            { type: "cloze_test", title: "The New Neighbor 🏠", text: "I met a woman {{0}} moved in yesterday. She has a dog {{1}} is very friendly. The house {{2}} she lives was empty for years. I don't know {{3}} she is from.", answers: ["who", "which", "where", "where"], distractors: ["that", "whose", "when"] },
            { type: "word_search", title: "Relative Search 🔍", words: ["WHO", "WHOM", "WHOSE", "WHICH", "THAT", "WHERE", "WHEN", "WHY", "PERSON", "THING"] },
            { type: "sentence_builder", title: "Clause Builder 🏗️", sentences: [
                { text: "THE MAN WHO IS TALL", translation: "El hombre que es alto", distractors: ["WHICH", "WHOSE"] },
                { text: "THE CAR WHICH IS FAST", translation: "El coche que es rápido", distractors: ["WHO", "THAT"] }
            ]}
        ]
    },
    98: { // B2-6: Order of Modifiers
        games: [
            { type: "matching", title: "Order Matcher 🧩", questions: [
                { q: "Size...", a: "...Big, Small, Large" },
                { q: "Age...", a: "...Old, New, Ancient" },
                { q: "Color...", a: "...Red, Blue, Green" },
                { q: "Origin...", a: "...French, Italian, Chinese" },
                { q: "Material...", a: "...Wooden, Plastic, Metal" }
            ]},
            { type: "trivia_game", title: "Adjective Order 🏆", questions: [
                { q: "A ___ car.", a: "beautiful big new red", o: ["red new big beautiful", "big red beautiful new", "new beautiful red big"] },
                { q: "An ___ table.", a: "old wooden Italian", o: ["wooden old Italian", "Italian old wooden", "old Italian wooden"] },
                { q: "A ___ bag.", a: "small black leather", o: ["black small leather", "leather black small", "small leather black"] },
                { q: "A ___ house.", a: "large modern white", o: ["white large modern", "modern large white", "large white modern"] },
                { q: "A ___ box.", a: "square metal blue", o: ["blue square metal", "metal blue square", "square blue metal"] }
            ]},
            { type: "cloze_test", title: "The Antique Shop 🏺", text: "I found a {{0}} {{1}} {{2}} vase. It was made of {{3}} and had a {{4}} pattern.", answers: ["beautiful", "old", "Chinese", "ceramic", "gold"], distractors: ["big", "small", "new"] },
            { type: "word_search", title: "Adjective Types 🔍", words: ["OPINION", "SIZE", "AGE", "SHAPE", "COLOR", "ORIGIN", "MATERIAL", "PURPOSE", "NOUN", "ORDER"] },
            { type: "sentence_builder", title: "Order Builder 🏗️", sentences: [
                { text: "A BEAUTIFUL BIG ROUND TABLE", translation: "Una hermosa mesa grande y redonda", distractors: ["ROUND", "BIG"] },
                { text: "AN OLD FRENCH WOODEN CHAIR", translation: "Una vieja silla de madera francesa", distractors: ["WOODEN", "FRENCH"] }
            ]}
        ]
    },
    99: { // B2-7: Passive Voice Past
        games: [
            { type: "matching", title: "Passive Past Match 🧩", questions: [
                { q: "Direct: They built the house.", a: "Passive: The house was built." },
                { q: "Direct: She wrote the book.", a: "Passive: The book was written." },
                { q: "Direct: He fixed the car.", a: "Passive: The car was fixed." },
                { q: "Direct: We cleaned the room.", a: "Passive: The room was cleaned." },
                { q: "Direct: They stole the money.", a: "Passive: The money was stolen." }
            ]},
            { type: "trivia_game", title: "Past Passive Quiz 🏆", questions: [
                { q: "The letter ___ yesterday.", a: "was sent", o: ["was send", "were sent", "did send"] },
                { q: "The windows ___ last week.", a: "were cleaned", o: ["was cleaned", "were clean", "cleaned"] },
                { q: "The cake ___ by my mother.", a: "was made", o: ["were made", "was make", "did make"] },
                { q: "The keys ___ in the park.", a: "were found", o: ["was found", "were find", "found"] },
                { q: "The movie ___ in 1995.", a: "was filmed", o: ["were filmed", "was film", "filmed"] }
            ]},
            { type: "cloze_test", title: "The Crime Scene 🚔", text: "The store {{0}} robbed last night. The glass {{1}} broken and several items {{2}} stolen. Luckily, the thief {{3}} caught by the police.", answers: ["was", "was", "were", "was"], distractors: ["is", "are", "did"] },
            { type: "word_search", title: "Passive Search 🔍", words: ["WRITTEN", "BUILT", "TAUGHT", "FOUND", "STOLEN", "CLEANED", "FIXED", "MADE", "KEPT", "DONE"] },
            { type: "sentence_builder", title: "Passive Builder 🏗️", sentences: [
                { text: "THE BOOK WAS WRITTEN BY HIM", translation: "El libro fue escrito por él", distractors: ["WROTE", "WRITING"] },
                { text: "THE CAR WAS STOLEN AT NIGHT", translation: "El coche fue robado por la noche", distractors: ["STEAL", "STOLE"] }
            ]}
        ]
    },
    100: { // B2-8: Infinitive Patterns
        games: [
            { type: "trivia_game", title: "Infinitive Quiz 🏆", questions: [
                { q: "I want ___ to the park.", a: "to go", o: ["going", "go", "gone"] },
                { q: "She decided ___ the job.", a: "to take", o: ["taking", "take", "taken"] },
                { q: "He promised ___ me.", a: "to help", o: ["helping", "help", "helped"] },
                { q: "They hope ___ soon.", a: "to arrive", o: ["arriving", "arrive", "arrived"] },
                { q: "I forgot ___ the door.", a: "to lock", o: ["locking", "lock", "locked"] }
            ]},
            { type: "word_search", title: "Infinitive Verbs 🔍", words: ["WANT", "HOPE", "DECIDE", "PROMISE", "FORGET", "PLAN", "LEARN", "NEED", "OFFER", "AGREE"] },
            { type: "matching", title: "Pattern Match 🧩", questions: [
                { q: "I need...", a: "...to study." },
                { q: "She plans...", a: "...to travel." },
                { q: "We agreed...", a: "...to meet." },
                { q: "He learned...", a: "...to drive." },
                { q: "They offered...", a: "...to help." }
            ]},
            { type: "cloze_test", title: "The New Project 🚀", text: "We decided {{0}} a new project. I hope {{1}} it by Friday. My boss offered {{2}} us with the budget. We need {{3}} hard to succeed.", answers: ["to start", "to finish", "to help", "to work"], distractors: ["starting", "finishing", "helping"] },
            { type: "sentence_builder", title: "Pattern Builder 🏗️", sentences: [
                { text: "I WANT TO SEE YOU", translation: "Quiero verte", distractors: ["SEEING", "SEE"] },
                { text: "SHE DECIDED TO LEAVE", translation: "Ella decidió irse", distractors: ["LEAVE", "LEAVING"] }
            ]}
        ]
    },
    101: { // B2-9: Noun-forming Suffixes
        games: [
            { type: "matching", title: "Suffix Match 🧩", questions: [
                { q: "Happy...", a: "...Happiness (-ness)" },
                { q: "Develop...", a: "...Development (-ment)" },
                { q: "Inform...", a: "...Information (-tion)" },
                { q: "Friend...", a: "...Friendship (-ship)" },
                { q: "Able...", a: "...Ability (-ity)" }
            ]},
            { type: "trivia_game", title: "Noun Suffixes 🏆", questions: [
                { q: "The ___ of the project was great.", a: "completion", o: ["completeness", "completing", "complete"] },
                { q: "I value our ___ very much.", a: "friendship", o: ["friendness", "friendity", "friend"] },
                { q: "His ___ is inspiring.", a: "kindness", o: ["kindment", "kindship", "kind"] },
                { q: "The ___ was successful.", a: "movement", o: ["movetion", "moveship", "move"] },
                { q: "She has great ___.", a: "creativity", o: ["creativeness", "creationship", "creative"] }
            ]},
            { type: "word_search", title: "Noun Search 🔍", words: ["NESS", "MENT", "TION", "SHIP", "ITY", "ANCE", "ENCE", "DOM", "HOOD", "ISM"] },
            { type: "cloze_test", title: "The Community 🏘️", text: "The {{0}} of the park was a big {{1}}. We worked with great {{2}} and {{3}} to finish it.", answers: ["development", "achievement", "kindness", "dedication"], distractors: ["develop", "achieve", "kind"] },
            { type: "sentence_builder", title: "Suffix Builder 🏗️", sentences: [
                { text: "HAPPINESS IS IMPORTANT", translation: "La felicidad es importante", distractors: ["HAPPY", "HAPPILY"] },
                { text: "THE INFORMATION WAS WRONG", translation: "La información estaba mal", distractors: ["INFORM", "INFORMED"] }
            ]}
        ]
    },
    102: { // B2-10: Tag Questions
        games: [
            { type: "matching", title: "Tag Matcher 🧩", questions: [
                { q: "You are tired...", a: "...aren't you?" },
                { q: "He works here...", a: "...doesn't he?" },
                { q: "She can sing...", a: "...can't she?" },
                { q: "They won't go...", a: "...will they?" },
                { q: "I am late...", a: "...aren't I?" }
            ]},
            { type: "trivia_game", title: "Tag Challenge 🏆", questions: [
                { q: "It is a nice day, ___?", a: "isn't it", o: ["is it", "doesn't it", "it is"] },
                { q: "You like pizza, ___?", a: "don't you", o: ["do you", "aren't you", "you like"] },
                { q: "She didn't call, ___?", a: "did she", o: ["didn't she", "does she", "she did"] },
                { q: "We must go, ___?", a: "mustn't we", o: ["must we", "should we", "don't we"] },
                { q: "They were there, ___?", a: "weren't they", o: ["were they", "didn't they", "wasn't they"] }
            ]},
            { type: "cloze_test", title: "Daily Chat 💬", text: "You're coming, {{0}} you? He hasn't left yet, {{1}} he? We can start now, {{2}} we? It's easy, {{3}} it?", answers: ["aren't", "has", "can't", "isn't"], distractors: ["are", "hasn't", "can"] },
            { type: "word_search", title: "Tag Verbs 🔍", words: ["ISNT", "ARENT", "DONT", "DOESNT", "CANT", "WONT", "DIDNT", "HAVENT", "HASNT", "MUSTNT"] },
            { type: "sentence_builder", title: "Tag Builder 🏗️", sentences: [
                { text: "YOU ARE READY ARENT YOU", translation: "Estás listo, ¿verdad?", distractors: ["ARE", "YOU"] },
                { text: "SHE LIKES IT DOESNT SHE", translation: "A ella le gusta, ¿verdad?", distractors: ["DOES", "SHE"] }
            ]}
        ]
    },
    103: { // B2-11: Adjective-forming Suffixes
        games: [
            { type: "matching", title: "Suffix Match 🧩", questions: [
                { q: "Beauty...", a: "...Beautiful (-ful)" },
                { q: "Danger...", a: "...Dangerous (-ous)" },
                { q: "Health...", a: "...Healthy (-y)" },
                { q: "Possible...", a: "...Possibility (N/A)" },
                { q: "Interest...", a: "...Interesting (-ing)" }
            ]},
            { type: "trivia_game", title: "Adjective Suffixes 🏆", questions: [
                { q: "This is a ___ place.", a: "wonderful", o: ["wonderment", "wondertion", "wonder"] },
                { q: "The climb was ___.", a: "dangerous", o: ["dangerly", "dangery", "danger"] },
                { q: "He is a ___ student.", a: "studious", o: ["studiful", "studiment", "study"] },
                { q: "It was a ___ day.", a: "sunny", o: ["sunful", "sunous", "sun"] },
                { q: "The movie was ___.", a: "exciting", o: ["excitedly", "excitement", "excite"] }
            ]},
            { type: "word_search", title: "Adjective Search 🔍", words: ["FUL", "OUS", "ING", "IVE", "ABLE", "IBLE", "LESS", "ISH", "AL", "IC"] },
            { type: "cloze_test", title: "The Trip ✈️", text: "The weather was {{0}} and the view was {{1}}. We met many {{2}} people. It was an {{3}} experience.", answers: ["sunny", "wonderful", "friendly", "amazing"], distractors: ["sun", "wonder", "friend"] },
            { type: "sentence_builder", title: "Suffix Builder 🏗️", sentences: [
                { text: "SHE IS A BEAUTIFUL GIRL", translation: "Ella es una chica hermosa", distractors: ["BEAUTY", "BEAUTIFULLY"] },
                { text: "IT WAS A DANGEROUS TRIP", translation: "Fue un viaje peligroso", distractors: ["DANGER", "DANGEROUSLY"] }
            ]}
        ]
    },
    104: { // B2-12: Reported Speech
        games: [
            { type: "matching", title: "Speech Transformer 🧩", questions: [
                { q: "Direct: 'I am happy.'", a: "Reported: He said he was happy." },
                { q: "Direct: 'I will go.'", a: "Reported: He said he would go." },
                { q: "Direct: 'I have seen it.'", a: "Reported: He said he had seen it." },
                { q: "Direct: 'I can help.'", a: "Reported: He said he could help." },
                { q: "Direct: 'I went there.'", a: "Reported: He said he had gone there." }
            ]},
            { type: "trivia_game", title: "Reporting Quiz 🏆", questions: [
                { q: "'I love sushi.' -> He said he ___ sushi.", a: "loved", o: ["love", "loves", "will love"] },
                { q: "'I am working.' -> She said she ___ working.", a: "was", o: ["is", "were", "been"] },
                { q: "'I will call you.' -> They said they ___ call me.", a: "would", o: ["will", "can", "shall"] },
                { q: "'I can't swim.' -> He said he ___ swim.", a: "couldn't", o: ["can't", "won't", "doesn't"] },
                { q: "'Wait here.' -> He told me ___ there.", a: "to wait", o: ["wait", "waiting", "waited"] }
            ]},
            { type: "cloze_test", title: "The News 📰", text: "The reporter said that the president {{0}} arriving soon. He added that the crowd {{1}} very excited. He asked the people {{2}} to stay calm.", answers: ["was", "was", "to", "not"], distractors: ["is", "were", "did"] },
            { type: "word_search", title: "Reporting Verbs 🔍", words: ["SAID", "TOLD", "ASKED", "REPLIED", "STATED", "ADDED", "DENIED", "AGREED", "CLAIMED", "SHOUTED"] },
            { type: "sentence_builder", title: "Speech Builder 🏗️", sentences: [
                { text: "HE SAID HE WAS TIRED", translation: "Dijo que estaba cansado", distractors: ["IS", "BEEN"] },
                { text: "SHE TOLD ME TO WAIT", translation: "Me dijo que esperara", distractors: ["WAITS", "WAITING"] }
            ]}
        ]
    },
    105: { // B2-13: Participial Adjectives
        games: [
            { type: "matching", title: "Adjective Pairs 🧩", questions: [
                { q: "Bored...", a: "...Boring" },
                { q: "Excited...", a: "...Exciting" },
                { q: "Tired...", a: "...Tiring" },
                { q: "Interested...", a: "...Interesting" },
                { q: "Confused...", a: "...Confusing" }
            ]},
            { type: "trivia_game", title: "Participial Quiz 🏆", questions: [
                { q: "I am ___ with this movie.", a: "bored", o: ["boring", "bore", "bores"] },
                { q: "This lesson is very ___.", a: "interesting", o: ["interested", "interest", "interests"] },
                { q: "The kids are ___ about the trip.", a: "excited", o: ["exciting", "excite", "excites"] },
                { q: "That was a ___ day.", a: "tiring", o: ["tired", "tire", "tires"] },
                { q: "I am ___ by the map.", a: "confused", o: ["confusing", "confuse", "confuses"] }
            ]},
            { type: "word_search", title: "Adjective Search 🔍", words: ["BORED", "BORING", "TIRED", "TIRING", "AMAZED", "AMAZING", "SHOCKED", "SHOCKING", "SCARED", "SCARY"] },
            { type: "cloze_test", title: "The Concert 🎸", text: "The music was {{0}} and the fans were {{1}}. I felt {{2}} after the long night, but it was {{3}}.", answers: ["amazing", "excited", "tired", "exciting"], distractors: ["amazed", "exciting", "tiring"] },
            { type: "sentence_builder", title: "Adjective Builder 🏗️", sentences: [
                { text: "I AM INTERESTED IN ART", translation: "Estoy interesado en el arte", distractors: ["INTERESTING", "INTEREST"] },
                { text: "THE MOVIE WAS BORING", translation: "La película era aburrida", distractors: ["BORED", "BORE"] }
            ]}
        ]
    }
};

topics.forEach(topic => {
    if (b2Batch1[topic.id]) {
        topic.premium_practice = JSON.stringify(b2Batch1[topic.id]);
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('B2 Practice Zone Batch 1 COMPLETE (Topics 1-13) with 5 games each.');
