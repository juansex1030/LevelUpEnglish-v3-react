const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const c1Batch2 = {
    129: { // C1-12: Neither / Either / Both
        games: [
            { type: "matching", title: "Pair Matcher 🧩", questions: [
                { q: "Both John and Mary...", a: "...are here." },
                { q: "Neither John nor Mary...", a: "...is here." },
                { q: "Either John or Mary...", a: "...is coming." },
                { q: "I like both...", a: "...tea and coffee." },
                { q: "I like neither...", a: "...tea nor coffee." }
            ]},
            { type: "trivia_game", title: "Pair Quiz 🏆", questions: [
                { q: "___ of the two books is good.", a: "Neither", o: ["Both", "Either", "None"] },
                { q: "I don't like ___ of them.", a: "either", o: ["both", "neither", "none"] },
                { q: "___ my parents are teachers.", a: "Both", o: ["Either", "Neither", "None"] },
                { q: "You can have ___ tea or coffee.", a: "either", o: ["both", "neither", "none"] },
                { q: "___ he nor she knows the answer.", a: "Neither", o: ["Either", "Both", "None"] }
            ]},
            { type: "cloze_test", title: "The Choice 🍎", text: "I have two sisters. {{0}} of them live in London. {{1}} of them is married yet. I can visit {{2}} Sarah {{3}} Jane this weekend.", answers: ["Both", "Neither", "either", "or"], distractors: ["None", "Both", "nor"] },
            { type: "word_search", title: "Pair Search 🔍", words: ["BOTH", "EITHER", "NEITHER", "NOR", "ALONG", "TOGETHER", "AND", "ALSO", "NONE", "WHETHER"] },
            { type: "sentence_builder", title: "Pair Builder 🏗️", sentences: [
                { text: "BOTH OF THEM ARE HERE", translation: "Ambos están aquí", distractors: ["IS", "EITHER"] },
                { text: "NEITHER OF THEM IS HERE", translation: "Ninguno de los dos está aquí", distractors: ["ARE", "BOTH"] }
            ]}
        ]
    },
    130: { // C1-13: Expressions with 'Get'
        games: [
            { type: "matching", title: "Get Meaning Match 🧩", questions: [
                { q: "Get used to...", a: "...become familiar with." },
                { q: "Get over...", a: "...recover from." },
                { q: "Get by...", a: "...survive with little." },
                { q: "Get rid of...", a: "...eliminate something." },
                { q: "Get along with...", a: "...have a good relationship." }
            ]},
            { type: "trivia_game", title: "Get Quiz 🏆", questions: [
                { q: "I need to ___ this cold.", a: "get over", o: ["get by", "get along", "get in"] },
                { q: "Do you ___ your boss?", a: "get along with", o: ["get over", "get by", "get through"] },
                { q: "I can ___ with $20 a day.", a: "get by", o: ["get over", "get along", "get on"] },
                { q: "We should ___ these old clothes.", a: "get rid of", o: ["get by", "get over", "get along"] },
                { q: "I am ___ the new schedule.", a: "getting used to", o: ["getting over", "getting by", "getting along"] }
            ]},
            { type: "cloze_test", title: "The New Job 💼", text: "It's hard to {{0}} the new routine. However, I {{1}} with my colleagues very well. I hope I can {{2}} the first month. I need to {{3}} my fear of public speaking.", answers: ["get used to", "get along", "get through", "get over"], distractors: ["get by", "get rid", "get on"] },
            { type: "word_search", title: "Get Search 🔍", words: ["GET", "OVER", "RID", "ALONG", "USED", "BY", "THROUGH", "AWAY", "BACK", "DOWN"] },
            { type: "sentence_builder", title: "Get Builder 🏗️", sentences: [
                { text: "I GET ALONG WITH HIM", translation: "Me llevo bien con él", distractors: ["OVER", "BY"] },
                { text: "GET RID OF IT", translation: "Deshazte de ello", distractors: ["OVER", "BY"] }
            ]}
        ]
    },
    131: { // C1-14: Ellipsis & Substitution
        games: [
            { type: "matching", title: "Substitution Match 🧩", questions: [
                { q: "I hope so...", a: "...I hope that happens." },
                { q: "I don't think so...", a: "...I think it won't happen." },
                { q: "Do you like it? Yes, I do.", a: "...Yes, I like it." },
                { q: "I am tired. So am I.", a: "...I am also tired." },
                { q: "I'm not coming. Neither am I.", a: "...I'm also not coming." }
            ]},
            { type: "trivia_game", title: "Short Form Quiz 🏆", questions: [
                { q: "Is he coming? I hope ___.", a: "so", o: ["it", "that", "not"] },
                { q: "Will it rain? I hope ___.", a: "not", o: ["so", "it", "that"] },
                { q: "I like pizza. ___ do I.", a: "So", o: ["Also", "Neither", "Either"] },
                { q: "I don't like sushi. ___ do I.", a: "Neither", o: ["So", "Either", "Also"] },
                { q: "Are you coming? I suppose ___.", a: "so", o: ["it", "that", "not"] }
            ]},
            { type: "cloze_test", title: "Short Chat 💬", text: "A: Are you ready? B: I think {{0}}. A: I'm not. B: Neither {{1}} I. A: We should go. B: I suppose {{2}}. A: Do you have the keys? B: Yes, I {{3}}.", answers: ["so", "am", "so", "do"], distractors: ["it", "do", "is"] },
            { type: "word_search", title: "Short Search 🔍", words: ["SO", "NOT", "NEITHER", "EITHER", "DO", "AM", "DID", "HAVE", "WAS", "WERE"] },
            { type: "sentence_builder", title: "Short Builder 🏗️", sentences: [
                { text: "I HOPE SO", translation: "Eso espero", distractors: ["IT", "THAT"] },
                { text: "SO DO I", translation: "Yo también", distractors: ["AM", "ME"] }
            ]}
        ]
    },
    132: { // C1-15: -ever Words
        games: [
            { type: "matching", title: "Ever Matcher 🧩", questions: [
                { q: "Whatever...", a: "...anything." },
                { q: "Whenever...", a: "...any time." },
                { q: "Wherever...", a: "...any place." },
                { q: "Whoever...", a: "...any person." },
                { q: "However...", a: "...in any way." }
            ]},
            { type: "trivia_game", title: "Ever Quiz 🏆", questions: [
                { q: "Call me ___ you arrive.", a: "whenever", o: ["whatever", "wherever", "whoever"] },
                { q: "___ you do, don't tell him.", a: "Whatever", o: ["Whenever", "Wherever", "However"] },
                { q: "Go ___ you want.", a: "wherever", o: ["whatever", "whenever", "whoever"] },
                { q: "___ told you that was wrong.", a: "Whoever", o: ["Whatever", "Whenever", "However"] },
                { q: "___ much it costs, I will buy it.", a: "However", o: ["Whatever", "Whenever", "Wherever"] }
            ]},
            { type: "cloze_test", title: "Total Freedom 🕊️", text: "You can come {{0}} you like. Bring {{1}} you want. Eat {{2}} you like. {{3}} you do, stay happy.", answers: ["whenever", "whoever", "whatever", "Whatever"], distractors: ["however", "wherever", "whenever"] },
            { type: "word_search", title: "Ever Search 🔍", words: ["WHATEVER", "WHENEVER", "WHEREVER", "WHOEVER", "HOWEVER", "WHICHEVER", "ANY", "TIME", "PLACE", "PERSON"] },
            { type: "sentence_builder", title: "Ever Builder 🏗️", sentences: [
                { text: "WHATEVER YOU DO IS FINE", translation: "Lo que sea que hagas está bien", distractors: ["WHENEVER", "HOWEVER"] },
                { text: "WHENEVER YOU WANT", translation: "Cuando quieras", distractors: ["WHATEVER", "WHOEVER"] }
            ]}
        ]
    },
    133: { // C1-16: Direct & Indirect Objects
        games: [
            { type: "matching", title: "Object Matcher 🧩", questions: [
                { q: "Give me the book.", a: "Me (Indirect), Book (Direct)" },
                { q: "Tell her the truth.", a: "Her (Indirect), Truth (Direct)" },
                { q: "Buy him a gift.", a: "Him (Indirect), Gift (Direct)" },
                { q: "Show us the way.", a: "Us (Indirect), Way (Direct)" },
                { q: "Send them a letter.", a: "Them (Indirect), Letter (Direct)" }
            ]},
            { type: "trivia_game", title: "Object Quiz 🏆", questions: [
                { q: "Give the book ___ me.", a: "to", o: ["for", "at", "on"] },
                { q: "Buy a gift ___ her.", a: "for", o: ["to", "at", "on"] },
                { q: "Show the way ___ us.", a: "to", o: ["for", "at", "on"] },
                { q: "Send a letter ___ them.", a: "to", o: ["for", "at", "on"] },
                { q: "Make a cake ___ him.", a: "for", o: ["to", "at", "on"] }
            ]},
            { type: "cloze_test", title: "The Delivery 📦", text: "I sent {{0}} a package yesterday. I gave it {{1}} the mailman. He told {{2}} that it would arrive soon. I bought {{3}} for my mother.", answers: ["her", "to", "me", "it"], distractors: ["for", "him", "she"] },
            { type: "word_search", title: "Object Search 🔍", words: ["DIRECT", "INDIRECT", "OBJECT", "GIVE", "SEND", "SHOW", "TELL", "BUY", "MAKE", "PASS"] },
            { type: "sentence_builder", title: "Object Builder 🏗️", sentences: [
                { text: "GIVE ME THE BOOK", translation: "Dame el libro", distractors: ["TO", "FOR"] },
                { text: "BUY A GIFT FOR HER", translation: "Compra un regalo para ella", distractors: ["TO", "ME"] }
            ]}
        ]
    },
    134: { // C1-17: Advanced Compound Adj.
        games: [
            { type: "matching", title: "Advanced Compound 🧩", questions: [
                { q: "Life-changing...", a: "...experience." },
                { q: "Breath-taking...", a: "...view." },
                { q: "Heart-warming...", a: "...story." },
                { q: "Mouth-watering...", a: "...food." },
                { q: "Mind-blowing...", a: "...fact." }
            ]},
            { type: "trivia_game", title: "Advanced Adj. Quiz 🏆", questions: [
                { q: "A ___ experience.", a: "once-in-a-lifetime", o: ["once lifetime", "once in lifetime", "once-lifetime"] },
                { q: "A ___ decision.", a: "last-minute", o: ["last minute", "lastly minute", "last-minuted"] },
                { q: "A ___ performance.", a: "world-class", o: ["world class", "worldly class", "world-classed"] },
                { q: "A ___ project.", a: "large-scale", o: ["large scale", "largely scale", "large-scaled"] },
                { q: "A ___ document.", a: "top-secret", o: ["top secret", "toply secret", "top-secreted"] }
            ]},
            { type: "cloze_test", title: "The Adventure 🌄", text: "It was a {{0}} trip. We saw a {{1}} sunset. The food was {{2}}. It was truly a {{3}} adventure.", answers: ["life-changing", "breath-taking", "mouth-watering", "world-class"], distractors: ["life changing", "breath taking", "mouth watering"] },
            { type: "word_search", title: "Advanced Search 🔍", words: ["CHANGE", "LIFE", "TAKE", "BREATH", "HEART", "WARM", "MOUTH", "WATER", "MIND", "BLOW"] },
            { type: "sentence_builder", title: "Advanced Builder 🏗️", sentences: [
                { text: "IT WAS A LIFE CHANGING TRIP", translation: "Fue un viaje que cambió mi vida", distractors: ["CHANGES", "CHANGED"] },
                { text: "A BREATH TAKING VIEW", translation: "Una vista impresionante", distractors: ["TAKEN", "TAKES"] }
            ]}
        ]
    },
    135: { // C1-18: Relative Pronouns
        games: [
            { type: "matching", title: "Relative Match 🧩", questions: [
                { q: "People...", a: "Who / Whom" },
                { q: "Things...", a: "Which / That" },
                { q: "Possession...", a: "Whose" },
                { q: "Places...", a: "Where" },
                { q: "Times...", a: "When" }
            ]},
            { type: "trivia_game", title: "Relative Quiz 🏆", questions: [
                { q: "The person ___ I met was nice.", a: "whom", o: ["which", "whose", "where"] },
                { q: "The house ___ roof is red.", a: "whose", o: ["who", "which", "that"] },
                { q: "The reason ___ I am late.", a: "why", o: ["where", "when", "which"] },
                { q: "The year ___ I was born.", a: "when", o: ["where", "which", "who"] },
                { q: "The company ___ I work.", a: "for which", o: ["who", "whose", "where"] }
            ]},
            { type: "cloze_test", title: "The Professor 🎓", text: "The man {{0}} you see is the dean. He is the person {{1}} wrote the book. The university {{2}} he teaches is famous. The time {{3}} he speaks is 10 AM.", answers: ["whom", "who", "where", "when"], distractors: ["which", "whose", "that"] },
            { type: "word_search", title: "Relative Search 🔍", words: ["WHO", "WHOM", "WHOSE", "WHICH", "THAT", "WHERE", "WHEN", "WHY", "PERSON", "THING"] },
            { type: "sentence_builder", title: "Relative Builder 🏗️", sentences: [
                { text: "THE MAN WHOM I MET", translation: "El hombre a quien conocí", distractors: ["WHO", "WHICH"] },
                { text: "THE HOUSE WHOSE ROOF IS RED", translation: "La casa cuyo techo es rojo", distractors: ["WHO", "THAT"] }
            ]}
        ]
    },
    136: { // C1-19: As if / As though / Like
        games: [
            { type: "matching", title: "Comparison Match 🧩", questions: [
                { q: "He acts as if...", a: "...he were rich." },
                { q: "She looks like...", a: "...she is tired." },
                { q: "It sounds as though...", a: "...it is raining." },
                { q: "He speaks like...", a: "...he knows everything." },
                { q: "It feels as if...", a: "...we are lost." }
            ]},
            { type: "trivia_game", title: "Comparison Quiz 🏆", questions: [
                { q: "He looks ___ he seen a ghost.", a: "as if", o: ["like", "though", "as"] },
                { q: "She acts ___ she is the boss.", a: "as though", o: ["like", "as", "if"] },
                { q: "It sounds ___ a cat.", a: "like", o: ["as if", "as though", "as"] },
                { q: "He speaks ___ he were an expert.", a: "as if", o: ["like", "as", "though"] },
                { q: "It feels ___ winter.", a: "like", o: ["as if", "as though", "as"] }
            ]},
            { type: "cloze_test", title: "The Actor 🎭", text: "He acts {{0}} he were a king. He looks {{1}} a real leader. It sounds {{2}} he is very powerful. He speaks {{3}} though he knows the future.", answers: ["as if", "like", "as though", "as"], distractors: ["if", "though", "like"] },
            { type: "word_search", title: "Comparison Search 🔍", words: ["LIKE", "AS", "IF", "THOUGH", "SOUNDS", "LOOKS", "FEELS", "ACTS", "SEEMS", "APPEARS"] },
            { type: "sentence_builder", title: "Comparison Builder 🏗️", sentences: [
                { text: "HE ACTS AS IF HE WERE RICH", translation: "Él actúa como si fuera rico", distractors: ["WAS", "IS"] },
                { text: "SHE LOOKS LIKE HER MOTHER", translation: "Ella se parece a su madre", distractors: ["AS", "IF"] }
            ]}
        ]
    },
    137: { // C1-20: Subjunctive Verbs
        games: [
            { type: "matching", title: "Subjunctive Match 🧩", questions: [
                { q: "I suggest that he...", a: "...be careful." },
                { q: "It is important that she...", a: "...arrive on time." },
                { q: "I demand that they...", a: "...be quiet." },
                { q: "It is vital that he...", a: "...study." },
                { q: "I recommend that you...", a: "...stay." }
            ]},
            { type: "trivia_game", title: "Subjunctive Quiz 🏆", questions: [
                { q: "I suggest that he ___ here.", a: "stay", o: ["stays", "stayed", "to stay"] },
                { q: "It is essential that she ___ the truth.", a: "know", o: ["knows", "knew", "knowing"] },
                { q: "I demand that they ___ immediately.", a: "leave", o: ["leaves", "left", "leaving"] },
                { q: "It is important that he ___ early.", a: "be", o: ["is", "was", "been"] },
                { q: "I recommend that she ___ a doctor.", a: "see", o: ["sees", "saw", "seeing"] }
            ]},
            { type: "cloze_test", title: "The Board Meeting 💼", text: "I suggest that the CEO {{0}} present. It is vital that he {{1}} the situation. I demand that the report {{2}} finished. It is essential that we {{3}} calm.", answers: ["be", "understand", "be", "stay"], distractors: ["is", "understands", "was"] },
            { type: "word_search", title: "Subjunctive Search 🔍", words: ["SUGGEST", "DEMAND", "VITAL", "CRUCIAL", "ESSENTIAL", "IMPORTANT", "BE", "HAVE", "STAY", "KNOW"] },
            { type: "sentence_builder", title: "Subjunctive Builder 🏗️", sentences: [
                { text: "I SUGGEST THAT HE BE HERE", translation: "Sugiero que él esté aquí", distractors: ["IS", "WAS"] },
                { text: "IT IS VITAL THAT SHE KNOW", translation: "Es vital que ella sepa", distractors: ["KNOWS", "KNEW"] }
            ]}
        ]
    },
    138: { // C1-21: Subject-Verb Agreement
        games: [
            { type: "matching", title: "Agreement Matcher 🧩", questions: [
                { q: "Each of the boys...", a: "...is here." },
                { q: "None of the money...", a: "...was found." },
                { q: "Everyone...", a: "...knows the truth." },
                { q: "The news...", a: "...is good." },
                { q: "Physics...", a: "...is hard." }
            ]},
            { type: "trivia_game", title: "Agreement Quiz 🏆", questions: [
                { q: "Each of the students ___ a book.", a: "has", o: ["have", "having", "had"] },
                { q: "Neither of them ___ ready.", a: "is", o: ["are", "were", "been"] },
                { q: "Everyone ___ happy.", a: "is", o: ["are", "were", "been"] },
                { q: "The news ___ shocking.", a: "is", o: ["are", "were", "been"] },
                { q: "A number of people ___ waiting.", a: "are", o: ["is", "was", "been"] }
            ]},
            { type: "cloze_test", title: "The University 🏫", text: "Each of the professors {{0}} a PhD. The news about the budget {{1}} bad. Physics {{2}} my favorite subject. Everyone {{3}} to succeed.", answers: ["has", "is", "is", "wants"], distractors: ["have", "are", "want"] },
            { type: "word_search", title: "Agreement Search 🔍", words: ["EACH", "EVERYONE", "NONE", "NEITHER", "EITHER", "NEWS", "PHYSICS", "IS", "ARE", "HAS"] },
            { type: "sentence_builder", title: "Agreement Builder 🏗️", sentences: [
                { text: "EACH OF THEM IS HERE", translation: "Cada uno de ellos está aquí", distractors: ["ARE", "BEEN"] },
                { text: "THE NEWS IS GOOD", translation: "Las noticias son buenas", distractors: ["ARE", "WERE"] }
            ]}
        ]
    }
};

topics.forEach(topic => {
    if (c1Batch2[topic.id]) {
        topic.premium_practice = JSON.stringify(c1Batch2[topic.id]);
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('C1 Practice Zone Batch 2 COMPLETE (Topics 12-21) with 5 games each.');
