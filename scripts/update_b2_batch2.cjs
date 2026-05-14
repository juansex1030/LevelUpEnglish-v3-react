const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const b2Batch2 = {
    106: { // B2-14: Unreal Conditionals
        games: [
            { type: "matching", title: "Unreal Matcher 🧩", questions: [
                { q: "If I were you...", a: "...I would go." },
                { q: "If I had money...", a: "...I would buy it." },
                { q: "If she knew...", a: "...she would tell us." },
                { q: "If we lived there...", a: "...we would be happy." },
                { q: "If they tried...", a: "...they would succeed." }
            ]},
            { type: "trivia_game", title: "Conditional Quiz 🏆", questions: [
                { q: "If I ___ (be) rich, I would travel.", a: "were", o: ["am", "was", "be"] },
                { q: "She would help you if she ___ (can).", a: "could", o: ["can", "will", "would"] },
                { q: "If we ___ (win), we would celebrate.", a: "won", o: ["win", "wins", "winning"] },
                { q: "I would buy that if I ___ (have) enough money.", a: "had", o: ["have", "has", "having"] },
                { q: "They ___ (be) surprised if you showed up.", a: "would be", o: ["will be", "are", "be"] }
            ]},
            { type: "cloze_test", title: "Imaginary Life 🌈", text: "If I {{0}} a pilot, I {{1}} fly around the world. I {{2}} visit every country if I {{3}} enough time.", answers: ["were", "would", "would", "had"], distractors: ["was", "will", "have"] },
            { type: "word_search", title: "Unreal Search 🔍", words: ["WOULD", "COULD", "WERE", "HAD", "WISH", "IF", "UNREAL", "DREAM", "POSSIBLE", "FUTURE"] },
            { type: "sentence_builder", title: "Conditional Builder 🏗️", sentences: [
                { text: "IF I WERE YOU I WOULD GO", translation: "Si yo fuera tú, iría", distractors: ["WAS", "WILL"] },
                { text: "SHE WOULD HELP IF SHE KNEW", translation: "Ella ayudaría si lo supiera", distractors: ["KNOW", "HELPS"] }
            ]}
        ]
    },
    107: { // B2-15: Indirect Questions
        games: [
            { type: "matching", title: "Direct to Indirect 🧩", questions: [
                { q: "Where is it?", a: "Do you know where it is?" },
                { q: "What time is it?", a: "Can you tell me what time it is?" },
                { q: "Is he coming?", a: "I wonder if he is coming." },
                { q: "Why did he leave?", a: "Do you know why he left?" },
                { q: "How much is it?", a: "Can you tell me how much it is?" }
            ]},
            { type: "trivia_game", title: "Polite Quiz 🏆", questions: [
                { q: "Can you tell me where ___?", a: "the station is", o: ["is the station", "the station", "does the station"] },
                { q: "Do you know if ___?", a: "she is coming", o: ["is she coming", "she coming", "does she come"] },
                { q: "I wonder what time ___.", a: "it starts", o: ["does it start", "starts it", "it start"] },
                { q: "Can you tell me how much ___?", a: "this costs", o: ["does this cost", "this cost", "is this cost"] },
                { q: "Do you know why ___?", a: "he was late", o: ["was he late", "he late", "did he late"] }
            ]},
            { type: "cloze_test", title: "Asking Politely 🤝", text: "Excuse me, can you tell me {{0}} the library is? Also, do you know {{1}} it opens? I wonder {{2}} they have English books. Can you tell me {{3}} much they cost?", answers: ["where", "when", "if", "how"], distractors: ["that", "what", "which"] },
            { type: "word_search", title: "Polite Search 🔍", words: ["KNOW", "TELL", "WONDER", "WHERE", "WHEN", "WHY", "HOW", "IF", "WHETHER", "PLEASE"] },
            { type: "sentence_builder", title: "Polite Builder 🏗️", sentences: [
                { text: "CAN YOU TELL ME WHERE IT IS", translation: "¿Puedes decirme dónde está?", distractors: ["IS", "IT"] },
                { text: "DO YOU KNOW IF SHE IS HERE", translation: "¿Sabes si ella está aquí?", distractors: ["HERE", "SHE"] }
            ]}
        ]
    },
    108: { // B2-16: Gerunds vs Infinitives
        games: [
            { type: "matching", title: "Verb Preference 🧩", questions: [
                { q: "Enjoy...", a: "...dancing (Gerund)" },
                { q: "Decide...", a: "...to go (Infinitive)" },
                { q: "Stop...", a: "...smoking (Gerund)" },
                { q: "Want...", a: "...to help (Infinitive)" },
                { q: "Avoid...", a: "...talking (Gerund)" }
            ]},
            { type: "trivia_game", title: "Verb Choice 🏆", questions: [
                { q: "I enjoy ___ movies.", a: "watching", o: ["to watch", "watch", "watched"] },
                { q: "I want ___ to the beach.", a: "to go", o: ["going", "go", "gone"] },
                { q: "She suggested ___ a pizza.", a: "ordering", o: ["to order", "order", "ordered"] },
                { q: "We decided ___ a new car.", a: "to buy", o: ["buying", "buy", "bought"] },
                { q: "He avoids ___ fast food.", a: "eating", o: ["to eat", "eat", "eats"] }
            ]},
            { type: "cloze_test", title: "My Weekend 🍿", text: "I enjoy {{0}} home on Saturdays. I want {{1}} a new book. My friend suggested {{2}} a movie, but I decided {{3}} at home.", answers: ["staying", "to read", "watching", "to stay"], distractors: ["stay", "reading", "watch"] },
            { type: "word_search", title: "Verb Search 🔍", words: ["ENJOY", "WANT", "SUGGEST", "DECIDE", "AVOID", "PROMISE", "KEEP", "LEARN", "FINISH", "PLAN"] },
            { type: "sentence_builder", title: "Verb Builder 🏗️", sentences: [
                { text: "I ENJOY LISTENING TO MUSIC", translation: "Disfruto escuchando música", distractors: ["TO", "LISTENS"] },
                { text: "I WANT TO SEE YOU", translation: "Quiero verte", distractors: ["SEEING", "SEE"] }
            ]}
        ]
    },
    109: { // B2-17: Other Uses of To
        games: [
            { type: "matching", title: "To Uses Match 🧩", questions: [
                { q: "Purpose...", a: "I went there to help." },
                { q: "Adjective + To...", a: "It is hard to believe." },
                { q: "Noun + To...", a: "It's time to go." },
                { q: "Verb + To...", a: "I want to see." },
                { q: "Too + Adj + To...", a: "It's too hot to drink." }
            ]},
            { type: "trivia_game", title: "To Quiz 🏆", questions: [
                { q: "It is nice ___ meet you.", a: "to", o: ["for", "at", "on"] },
                { q: "I am happy ___ help.", a: "to", o: ["for", "at", "on"] },
                { q: "It's too late ___ call him.", a: "to", o: ["for", "at", "on"] },
                { q: "I have something ___ tell you.", a: "to", o: ["for", "at", "on"] },
                { q: "We went there ___ buy food.", a: "to", o: ["for", "at", "on"] }
            ]},
            { type: "cloze_test", title: "The Decision ⚖️", text: "It was hard {{0}} decide. I wanted {{1}} do the right thing. It's time {{2}} move on. I am ready {{3}} start.", answers: ["to", "to", "to", "to"], distractors: ["for", "at", "on"] },
            { type: "word_search", title: "To Contexts 🔍", words: ["PURPOSE", "TIME", "READY", "EASY", "HARD", "WANT", "NEED", "PLAN", "LEARN", "AGREE"] },
            { type: "sentence_builder", title: "To Builder 🏗️", sentences: [
                { text: "IT IS TIME TO GO", translation: "Es hora de irse", distractors: ["FOR", "AT"] },
                { text: "I AM READY TO START", translation: "Estoy listo para empezar", distractors: ["FOR", "IN"] }
            ]}
        ]
    },
    110: { // B2-18: Wish & If Only
        games: [
            { type: "matching", title: "Wish Matcher 🧩", questions: [
                { q: "Present Wish...", a: "I wish I were rich." },
                { q: "Past Wish...", a: "I wish I had studied." },
                { q: "Future Wish...", a: "I wish it would stop raining." },
                { q: "Regret...", a: "If only I had known." },
                { q: "Desire...", a: "I wish I could help." }
            ]},
            { type: "trivia_game", title: "Wish Quiz 🏆", questions: [
                { q: "I wish I ___ (be) taller.", a: "were", o: ["am", "was", "be"] },
                { q: "I wish I ___ (study) more last year.", a: "had studied", o: ["studied", "study", "was studying"] },
                { q: "I wish it ___ (stop) raining.", a: "would stop", o: ["stops", "stop", "stopped"] },
                { q: "If only I ___ (know) the truth.", a: "had known", o: ["knew", "know", "have known"] },
                { q: "She wishes she ___ (can) swim.", a: "could", o: ["can", "will", "would"] }
            ]},
            { type: "cloze_test", title: "Life Regrets 😔", text: "I wish I {{0}} more money. If only I {{1}} better decisions in the past. I wish my boss {{2}} be nicer. If only it {{3}} Friday!", answers: ["had", "had made", "would", "were"], distractors: ["have", "did", "was"] },
            { type: "word_search", title: "Wish Search 🔍", words: ["WISH", "ONLY", "WERE", "HAD", "WOULD", "COULD", "REGRET", "PAST", "FUTURE", "HOPE"] },
            { type: "sentence_builder", title: "Wish Builder 🏗️", sentences: [
                { text: "I WISH I WERE RICH", translation: "Desearía ser rico", distractors: ["WAS", "AM"] },
                { text: "IF ONLY I HAD KNOWN", translation: "Si tan solo lo hubiera sabido", distractors: ["KNEW", "KNOW"] }
            ]}
        ]
    },
    111: { // B2-19: Perfect Modals
        games: [
            { type: "matching", title: "Perfect Modal Match 🧩", questions: [
                { q: "Past Obligation (not done)...", a: "Should have" },
                { q: "Past Possibility...", a: "Might have" },
                { q: "Past Deduction...", a: "Must have" },
                { q: "Past Ability...", a: "Could have" },
                { q: "Negative Deduction...", a: "Can't have" }
            ]},
            { type: "trivia_game", title: "Perfect Modal Quiz 🏆", questions: [
                { q: "You ___ (call) me. I was worried.", a: "should have called", o: ["must have called", "might have called", "should call"] },
                { q: "He ___ (leave) early. His car is gone.", a: "must have left", o: ["can't have left", "might leave", "must leave"] },
                { q: "She ___ (miss) the bus. She is late.", a: "might have missed", o: ["can't have missed", "should have missed", "might miss"] },
                { q: "We ___ (won) if we had tried.", a: "could have won", o: ["must have won", "should have won", "could win"] },
                { q: "You ___ (seen) him. He was in London.", a: "can't have seen", o: ["must have seen", "should have seen", "can't see"] }
            ]},
            { type: "cloze_test", title: "The Investigation 🕵️", text: "The money is gone. Someone {{0}} have taken it. The door was locked, so it {{1}} have been an outsider. The manager {{2}} have left the safe open. We {{3}} have been more careful.", answers: ["must", "can't", "might", "should"], distractors: ["would", "shall", "could"] },
            { type: "word_search", title: "Perfect Search 🔍", words: ["SHOULD", "MUST", "COULD", "MIGHT", "CANT", "HAVE", "BEEN", "DONE", "GONE", "SEEN"] },
            { type: "sentence_builder", title: "Perfect Builder 🏗️", sentences: [
                { text: "HE MUST HAVE LEFT EARLY", translation: "Él debe haberse ido temprano", distractors: ["CAN'T", "MIGHT"] },
                { text: "SHE SHOULD HAVE CALLED", translation: "Ella debería haber llamado", distractors: ["MUST", "COULD"] }
            ]}
        ]
    },
    112: { // B2-20: Subordinating Conjunctions
        games: [
            { type: "matching", title: "Conjunction Match 🧩", questions: [
                { q: "Time...", a: "When, While, Before" },
                { q: "Reason...", a: "Because, Since, As" },
                { q: "Condition...", a: "If, Unless, Provided" },
                { q: "Contrast...", a: "Although, Even though, While" },
                { q: "Purpose...", a: "So that, In order that" }
            ]},
            { type: "trivia_game", title: "Conjunction Quiz 🏆", questions: [
                { q: "___ it was raining, we stayed home.", a: "Because", o: ["Although", "Unless", "While"] },
                { q: "I will go ___ you come with me.", a: "if", o: ["unless", "although", "because"] },
                { q: "___ she is rich, she is not happy.", a: "Although", o: ["Because", "Since", "If"] },
                { q: "We won't go ___ it stops raining.", a: "unless", o: ["if", "because", "since"] },
                { q: "Call me ___ you arrive.", a: "when", o: ["while", "unless", "although"] }
            ]},
            { type: "cloze_test", title: "The Trip 🚗", text: "{{0}} it was late, we decided to drive. We took a map {{1}} we wouldn't get lost. {{2}} we were driving, we saw a deer. We didn't stop {{3}} we were in a hurry.", answers: ["Although", "so that", "While", "because"], distractors: ["Unless", "If", "Since"] },
            { type: "word_search", title: "Conjunction Search 🔍", words: ["BECAUSE", "ALTHOUGH", "UNLESS", "WHILE", "BEFORE", "SINCE", "UNLESS", "WHETHER", "THOUGH", "AFTER"] },
            { type: "sentence_builder", title: "Conjunction Builder 🏗️", sentences: [
                { text: "I AM HAPPY BECAUSE OF YOU", translation: "Soy feliz por ti", distractors: ["ALTHOUGH", "UNLESS"] },
                { text: "CALL ME WHEN YOU ARRIVE", translation: "Llamame cuando llegues", distractors: ["WHILE", "UNTIL"] }
            ]}
        ]
    },
    113: { // B2-21: Present Perfect Continuous
        games: [
            { type: "matching", title: "Context Match 🧩", questions: [
                { q: "I have been working...", a: "...for 5 hours." },
                { q: "She has been waiting...", a: "...since 8 AM." },
                { q: "They have been living here...", a: "...for years." },
                { q: "We have been studying...", a: "...all day." },
                { q: "He has been running...", a: "...since noon." }
            ]},
            { type: "trivia_game", title: "Continuous Quiz 🏆", questions: [
                { q: "I ___ (work) here for 3 years.", a: "have been working", o: ["has been working", "am working", "worked"] },
                { q: "She ___ (wait) for you all morning.", a: "has been waiting", o: ["have been waiting", "is waiting", "waited"] },
                { q: "How long ___ (you / live) here?", a: "have you been living", o: ["has you been living", "are you living", "did you live"] },
                { q: "It ___ (rain) since yesterday.", a: "has been raining", o: ["have been raining", "is raining", "rained"] },
                { q: "They ___ (play) football for 2 hours.", a: "have been playing", o: ["has been playing", "are playing", "played"] }
            ]},
            { type: "cloze_test", title: "The Long Day 😴", text: "I am so tired. I {{0}} been working since 6 AM. My boss {{1}} been calling me all day. We {{2}} been trying to finish the report. It {{3}} been a long day.", answers: ["have", "has", "have", "has"], distractors: ["am", "is", "was"] },
            { type: "word_search", title: "Continuous Search 🔍", words: ["HAVE", "HAS", "BEEN", "WORKING", "WAITING", "LIVING", "STUDYING", "RUNNING", "PLAYING", "RAIN"] },
            { type: "sentence_builder", title: "Continuous Builder 🏗️", sentences: [
                { text: "I HAVE BEEN WORKING ALL DAY", translation: "He estado trabajando todo el día", distractors: ["AM", "WAS"] },
                { text: "SHE HAS BEEN WAITING FOR YOU", translation: "Ella te ha estado esperando", distractors: ["HAVE", "IS"] }
            ]}
        ]
    },
    114: { // B2-22: Used To Structures
        games: [
            { type: "matching", title: "Structure Match 🧩", questions: [
                { q: "Past Habit...", a: "I used to smoke." },
                { q: "Familiarity...", a: "I am used to the cold." },
                { q: "Process...", a: "I am getting used to it." },
                { q: "Past State...", a: "I used to be shy." },
                { q: "Current Habit...", a: "I usually go early." }
            ]},
            { type: "trivia_game", title: "Used To Quiz 🏆", questions: [
                { q: "I ___ (live) in London when I was young.", a: "used to live", o: ["am used to living", "get used to live", "usually live"] },
                { q: "I am ___ (live) in a big city now.", a: "used to living", o: ["used to live", "get used to live", "usually live"] },
                { q: "I am ___ (the heat) slowly.", a: "getting used to", o: ["used to", "usually", "get used"] },
                { q: "Did you ___ (have) long hair?", a: "use to have", o: ["used to have", "using to have", "usually have"] },
                { q: "She ___ (be) very shy.", a: "used to be", o: ["is used to being", "gets used to be", "usually is"] }
            ]},
            { type: "cloze_test", title: "Changing Lives 🌱", text: "I {{0}} to live in a small town. Now I live in New York, and I am {{1}} to the noise. At first it was hard, but I am {{2}} used to it. I {{3}} miss my old home.", answers: ["used", "used", "getting", "still"], distractors: ["use", "was", "got"] },
            { type: "word_search", title: "Habit Search 🔍", words: ["USED", "GETTING", "HABIT", "PAST", "STATE", "FAMILIAR", "LIVING", "BEING", "WORKING", "SMOKING"] },
            { type: "sentence_builder", title: "Habit Builder 🏗️", sentences: [
                { text: "I USED TO SMOKE", translation: "Yo solía fumar", distractors: ["AM", "USE"] },
                { text: "I AM USED TO COLD", translation: "Estoy acostumbrado al frío", distractors: ["USE", "GET"] }
            ]}
        ]
    },
    115: { // B2-23: Past Perfect Continuous
        games: [
            { type: "matching", title: "Past Context Match 🧩", questions: [
                { q: "I had been working...", a: "...when the phone rang." },
                { q: "She had been waiting...", a: "...for 2 hours." },
                { q: "They had been living there...", a: "...before they moved." },
                { q: "We had been studying...", a: "...all night." },
                { q: "It had been raining...", a: "...before the sun came out." }
            ]},
            { type: "trivia_game", title: "Past Continuous Quiz 🏆", questions: [
                { q: "I ___ (work) for 5 hours before I finished.", a: "had been working", o: ["have been working", "was working", "worked"] },
                { q: "She ___ (wait) for 2 hours when he arrived.", a: "had been waiting", o: ["has been waiting", "is waiting", "waited"] },
                { q: "We ___ (live) there for 10 years before we moved.", a: "had been living", o: ["have been living", "were living", "lived"] },
                { q: "It ___ (rain) for days before it stopped.", a: "had been raining", o: ["has been raining", "is raining", "rained"] },
                { q: "They ___ (play) for 2 hours when it started to snow.", a: "had been playing", o: ["have been playing", "were playing", "played"] }
            ]},
            { type: "cloze_test", title: "The Big Move 📦", text: "We {{0}} been living in Paris for years. I {{1}} been working at the same bank. My wife {{2}} been studying French. We {{3}} been planning to move for a long time.", answers: ["had", "had", "had", "had"], distractors: ["have", "has", "were"] },
            { type: "word_search", title: "Past Search 🔍", words: ["HAD", "BEEN", "WORKING", "WAITING", "LIVING", "STUDYING", "RUNNING", "PLAYING", "BEFORE", "WHEN"] },
            { type: "sentence_builder", title: "Past Builder 🏗️", sentences: [
                { text: "I HAD BEEN WORKING ALL DAY", translation: "Había estado trabajando todo el día", distractors: ["HAVE", "WAS"] },
                { text: "SHE HAD BEEN WAITING FOR YOU", translation: "Ella te había estado esperando", distractors: ["HAS", "IS"] }
            ]}
        ]
    },
    116: { // B2-24: Future Perfect Continuous
        games: [
            { type: "matching", title: "Future Context Match 🧩", questions: [
                { q: "By next year...", a: "...I will have been working here for 5 years." },
                { q: "By 8 PM...", a: "...she will have been waiting for 2 hours." },
                { q: "By tomorrow...", a: "...it will have been raining for a week." },
                { q: "In 10 minutes...", a: "...we will have been playing for an hour." },
                { q: "By then...", a: "...they will have been living here for a month." }
            ]},
            { type: "trivia_game", title: "Future Continuous Quiz 🏆", questions: [
                { q: "By next year, I ___ (work) here for 5 years.", a: "will have been working", o: ["will be working", "have been working", "work"] },
                { q: "By 8 PM, she ___ (wait) for 2 hours.", a: "will have been waiting", o: ["will be waiting", "has been waiting", "waits"] },
                { q: "By tomorrow, it ___ (rain) for a week.", a: "will have been raining", o: ["will be raining", "has been raining", "rains"] },
                { q: "In 10 minutes, we ___ (play) for an hour.", a: "will have been playing", o: ["will be playing", "have been playing", "play"] },
                { q: "By then, they ___ (live) here for a month.", a: "will have been living", o: ["will be living", "have been living", "live"] }
            ]},
            { type: "cloze_test", title: "The Anniversary 🥂", text: "By next month, we {{0}} have been married for 10 years. We {{1}} have been living in this house for 5 years. I {{2}} have been working here for a decade. We {{3}} have been planning this party for months.", answers: ["will", "will", "will", "will"], distractors: ["shall", "would", "must"] },
            { type: "word_search", title: "Future Search 🔍", words: ["WILL", "HAVE", "BEEN", "WORKING", "WAITING", "LIVING", "PLAYING", "RAIN", "YEAR", "MONTH"] },
            { type: "sentence_builder", title: "Future Builder 🏗️", sentences: [
                { text: "I WILL HAVE BEEN WORKING", translation: "Habré estado trabajando", distractors: ["HAVE", "BEEN"] },
                { text: "SHE WILL HAVE BEEN WAITING", translation: "Ella habrá estado esperando", distractors: ["WILL", "HAVE"] }
            ]}
        ]
    },
    117: { // B2-25: Mixed Conditionals
        games: [
            { type: "matching", title: "Mixed Matcher 🧩", questions: [
                { q: "Past Cause, Present Result...", a: "If I had eaten, I wouldn't be hungry." },
                { q: "Present Cause, Past Result...", a: "If I were rich, I would have bought it." },
                { q: "Regret...", a: "If I had known, I would be there." },
                { q: "Permanent State...", a: "If I spoke French, I would have helped." },
                { q: "Hypothetical...", a: "If I were you, I would have left." }
            ]},
            { type: "trivia_game", title: "Mixed Quiz 🏆", questions: [
                { q: "If I ___ (study) harder, I would be rich now.", a: "had studied", o: ["studied", "study", "have studied"] },
                { q: "If I ___ (be) you, I would have called him.", a: "were", o: ["was", "am", "be"] },
                { q: "She would be here if she ___ (take) the bus.", a: "had taken", o: ["took", "takes", "has taken"] },
                { q: "If they ___ (know) the truth, they would be angry.", a: "knew", o: ["know", "had known", "have known"] },
                { q: "I would have helped if I ___ (speak) English.", a: "spoke", o: ["speak", "had spoken", "have spoken"] }
            ]},
            { type: "cloze_test", title: "What If? 🤔", text: "If I {{0}} born in the UK, I would speak perfect English. If I {{1}} studied harder at school, I {{2}} be a doctor now. If I {{3}} you, I would have stayed.", answers: ["had been", "had", "would", "were"], distractors: ["was", "have", "will"] },
            { type: "word_search", title: "Mixed Search 🔍", words: ["WOULD", "COULD", "HAD", "BEEN", "WERE", "IF", "MIXED", "PAST", "PRESENT", "RESULT"] },
            { type: "sentence_builder", title: "Mixed Builder 🏗️", sentences: [
                { text: "IF I HAD EATEN I WOULD NOT BE HUNGRY", translation: "Si hubiera comido no tendría hambre", distractors: ["AM", "WAS"] },
                { text: "IF I WERE RICH I WOULD HAVE BOUGHT IT", translation: "Si fuera rico lo habría comprado", distractors: ["AM", "WILL"] }
            ]}
        ]
    }
};

topics.forEach(topic => {
    if (b2Batch2[topic.id]) {
        topic.premium_practice = JSON.stringify(b2Batch2[topic.id]);
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('B2 Practice Zone Batch 2 COMPLETE (Topics 14-25) with 5 games each.');
