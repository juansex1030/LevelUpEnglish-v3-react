const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const c1Batch1 = {
    118: { // C1-1: Phrasal Verbs
        games: [
            { type: "matching", title: "Phrasal Match 🧩", questions: [
                { q: "Bring up...", a: "...mention a topic." },
                { q: "Carry on...", a: "...continue doing." },
                { q: "Look into...", a: "...investigate." },
                { q: "Turn down...", a: "...reject an offer." },
                { q: "Give up...", a: "...stop doing." }
            ]},
            { type: "trivia_game", title: "Phrasal Challenge 🏆", questions: [
                { q: "I need to ___ the problem.", a: "look into", o: ["look after", "look for", "look up"] },
                { q: "Please ___ your work.", a: "carry on with", o: ["carry out", "carry off", "carry away"] },
                { q: "He ___ the job offer.", a: "turned down", o: ["turned up", "turned in", "turned off"] },
                { q: "She ___ her children alone.", a: "brought up", o: ["brought out", "brought in", "brought back"] },
                { q: "Don't ___ yet!", a: "give up", o: ["give in", "give out", "give away"] }
            ]},
            { type: "cloze_test", title: "Office Talk 💼", text: "We need to {{0}} the budget for next year. I suggest we {{1}} the meeting until Monday. If the boss {{2}} our proposal, we will have to {{3}} a new plan.", answers: ["look into", "put off", "turns down", "come up with"], distractors: ["look for", "put on", "turns up"] },
            { type: "word_search", title: "Phrasal Search 🔍", words: ["BRING", "CARRY", "LOOK", "TURN", "GIVE", "PUT", "COME", "TAKE", "BREAK", "FALL"] },
            { type: "sentence_builder", title: "Phrasal Builder 🏗️", sentences: [
                { text: "I BROUGHT UP THE SUBJECT", translation: "Saqué el tema", distractors: ["DOWN", "OUT"] },
                { text: "SHE TURNED DOWN THE JOB", translation: "Ella rechazó el trabajo", distractors: ["UP", "OFF"] }
            ]}
        ]
    },
    119: { // C1-2: Gerund & Infinitive
        games: [
            { type: "matching", title: "Verb Preference 🧩", questions: [
                { q: "Suggest...", a: "...going (Gerund)" },
                { q: "Offer...", a: "...to go (Infinitive)" },
                { q: "Admit...", a: "...doing (Gerund)" },
                { q: "Refuse...", a: "...to do (Infinitive)" },
                { q: "Deny...", a: "...having (Gerund)" }
            ]},
            { type: "trivia_game", title: "Choice Master 🏆", questions: [
                { q: "He denied ___ the money.", a: "stealing", o: ["to steal", "steal", "stolen"] },
                { q: "I refuse ___ that.", a: "to do", o: ["doing", "do", "done"] },
                { q: "She admitted ___ a mistake.", a: "making", o: ["to make", "make", "made"] },
                { q: "They offered ___ me home.", a: "to take", o: ["taking", "take", "taken"] },
                { q: "I suggest ___ a doctor.", a: "seeing", o: ["to see", "see", "seen"] }
            ]},
            { type: "cloze_test", title: "The Confession 🙊", text: "He admitted {{0}} the secret. He refused {{1}} why he did it. I suggest {{2}} more careful next time. We plan {{3}} the project tomorrow.", answers: ["telling", "to say", "being", "to finish"], distractors: ["to tell", "saying", "be"] },
            { type: "word_search", title: "Advanced Verbs 🔍", words: ["ADMIT", "DENY", "REFUSE", "OFFER", "SUGGEST", "CONSIDER", "AVOID", "PROMISE", "DECIDE", "HOPE"] },
            { type: "sentence_builder", title: "Advanced Builder 🏗️", sentences: [
                { text: "I SUGGEST GOING NOW", translation: "Sugiero irnos ahora", distractors: ["TO GO", "GOES"] },
                { text: "HE REFUSED TO TALK", translation: "Él se negó a hablar", distractors: ["TALKING", "TALKS"] }
            ]}
        ]
    },
    120: { // C1-3: -ing Clauses
        games: [
            { type: "matching", title: "Clause Matcher 🧩", questions: [
                { q: "Having finished my work...", a: "...I went home." },
                { q: "Walking down the street...", a: "...I saw him." },
                { q: "Not knowing what to do...", a: "...I waited." },
                { q: "Feeling tired...", a: "...she went to bed." },
                { q: "Being a student...", a: "...I have no money." }
            ]},
            { type: "trivia_game", title: "Participle Quiz 🏆", questions: [
                { q: "___ the news, she cried.", a: "Hearing", o: ["Heard", "Having heard", "Hear"] },
                { q: "___ my work, I left.", a: "Having finished", o: ["Finished", "Finishing", "Finish"] },
                { q: "___ sick, I stayed home.", a: "Feeling", o: ["Felt", "Having felt", "Feel"] },
                { q: "___ rich, he travels a lot.", a: "Being", o: ["Is", "Was", "Been"] },
                { q: "___ what to say, I stayed silent.", a: "Not knowing", o: ["Not know", "Known", "Knowing not"] }
            ]},
            { type: "cloze_test", title: "A Busy Day 🏃", text: "{{0}} up early, I went for a run. {{1}} breakfast, I started working. {{2}} tired by noon, I took a nap. {{3}} much to do, I finished early.", answers: ["Waking", "Having eaten", "Feeling", "Having"], distractors: ["Woke", "Eaten", "Felt"] },
            { type: "word_search", title: "Clause Search 🔍", words: ["HAVING", "BEING", "NOT", "KNOWING", "FEELING", "WALKING", "FINISHED", "HEARING", "SEEING", "WAITING"] },
            { type: "sentence_builder", title: "Clause Builder 🏗️", sentences: [
                { text: "HAVING FINISHED I WENT HOME", translation: "Habiendo terminado me fui a casa", distractors: ["FINISHING", "FINISH"] },
                { text: "FEELING TIRED SHE LEFT", translation: "Sintiéndose cansada ella se fue", distractors: ["FELT", "FEEL"] }
            ]}
        ]
    },
    121: { // C1-4: Verb Patterns
        games: [
            { type: "matching", title: "Pattern Match 🧩", questions: [
                { q: "Help someone...", a: "...do something." },
                { q: "Make someone...", a: "...do something." },
                { q: "Let someone...", a: "...do something." },
                { q: "Want someone...", a: "...to do something." },
                { q: "Tell someone...", a: "...to do something." }
            ]},
            { type: "trivia_game", title: "Pattern Challenge 🏆", questions: [
                { q: "She made me ___ the room.", a: "clean", o: ["to clean", "cleaning", "cleaned"] },
                { q: "He let her ___ his car.", a: "drive", o: ["to drive", "driving", "drove"] },
                { q: "I want you ___ the truth.", a: "to tell", o: ["tell", "telling", "told"] },
                { q: "They told us ___ here.", a: "to wait", o: ["wait", "waiting", "waited"] },
                { q: "Can you help me ___ this?", a: "finish", o: ["to finishing", "finishing", "finished"] }
            ]},
            { type: "cloze_test", title: "Parenting 👨‍👩‍👧", text: "My parents made me {{0}} my homework. They didn't let me {{1}} out late. They always wanted me {{2}} my best. They told me {{3}} hard.", answers: ["do", "stay", "to do", "to work"], distractors: ["to do", "staying", "doing"] },
            { type: "word_search", title: "Pattern Search 🔍", words: ["MAKE", "LET", "WANT", "TELL", "HELP", "ADVISE", "ORDER", "FORCE", "ALLOW", "PERMIT"] },
            { type: "sentence_builder", title: "Pattern Builder 🏗️", sentences: [
                { text: "SHE MADE ME CRY", translation: "Ella me hizo llorar", distractors: ["TO CRY", "CRYING"] },
                { text: "HE LET ME GO", translation: "Él me dejó ir", distractors: ["TO GO", "GOING"] }
            ]}
        ]
    },
    122: { // C1-5: Cleft Sentences
        games: [
            { type: "matching", title: "Cleft Matcher 🧩", questions: [
                { q: "Standard: I like coffee.", a: "Cleft: It is coffee that I like." },
                { q: "Standard: John called.", a: "Cleft: It was John who called." },
                { q: "Standard: I need rest.", a: "Cleft: What I need is rest." },
                { q: "Standard: We met in Paris.", a: "Cleft: It was in Paris that we met." },
                { q: "Standard: She wants money.", a: "Cleft: All she wants is money." }
            ]},
            { type: "trivia_game", title: "Emphasis Quiz 🏆", questions: [
                { q: "___ I need is a vacation.", a: "What", o: ["It", "That", "Who"] },
                { q: "It was John ___ broke the window.", a: "who", o: ["which", "what", "that"] },
                { q: "___ she wants is to be happy.", a: "All", o: ["What", "It", "That"] },
                { q: "It was in 1999 ___ they married.", a: "that", o: ["who", "which", "when"] },
                { q: "What he did ___ very brave.", a: "was", o: ["is", "were", "been"] }
            ]},
            { type: "cloze_test", title: "The Mystery 🕵️", text: "It was {{0}} who saw the thief. What {{1}} needed was a witness. It was {{2}} that night that the crime occurred. {{3}} I know is that he is guilty.", answers: ["Mary", "was", "on", "What"], distractors: ["it", "were", "that"] },
            { type: "word_search", title: "Emphasis Words 🔍", words: ["CLEFT", "WHAT", "THAT", "WHO", "ALL", "WAS", "EMPHASIS", "IT", "WHICH", "WHEN"] },
            { type: "sentence_builder", title: "Cleft Builder 🏗️", sentences: [
                { text: "WHAT I NEED IS LUNCH", translation: "Lo que necesito es almuerzo", distractors: ["IT", "THAT"] },
                { text: "IT WAS JOHN WHO SAID IT", translation: "Fue John quien lo dijo", distractors: ["WHAT", "WHICH"] }
            ]}
        ]
    },
    123: { // C1-6: Compound Adjectives
        games: [
            { type: "matching", title: "Adjective Matcher 🧩", questions: [
                { q: "Part-time...", a: "...job." },
                { q: "High-speed...", a: "...internet." },
                { q: "Well-known...", a: "...actor." },
                { q: "Old-fashioned...", a: "...clothes." },
                { q: "Middle-aged...", a: "...man." }
            ]},
            { type: "trivia_game", title: "Compound Quiz 🏆", questions: [
                { q: "A ___ project.", a: "long-term", o: ["long term", "longterm", "longer term"] },
                { q: "A ___ baby.", a: "six-month-old", o: ["six month old", "six months old", "six-months-old"] },
                { q: "A ___ book.", a: "best-selling", o: ["best selling", "bestselling", "best-seller"] },
                { q: "A ___ building.", a: "ten-story", o: ["ten story", "ten stories", "ten-stories"] },
                { q: "A ___ shirt.", a: "bright-red", o: ["bright red", "brightly red", "bright-redly"] }
            ]},
            { type: "cloze_test", title: "Modern Life 🏙️", text: "I have a {{0}} job. I use {{1}} internet every day. I live in a {{2}} apartment. My car is a {{3}} model.", answers: ["full-time", "high-speed", "two-bedroom", "late-model"], distractors: ["full time", "high speed", "two bedroom"] },
            { type: "word_search", title: "Compound Search 🔍", words: ["SPEED", "TIME", "WELL", "HIGH", "LONG", "TERM", "OLD", "MIDDLE", "AGED", "KNOWN"] },
            { type: "sentence_builder", title: "Compound Builder 🏗️", sentences: [
                { text: "I HAVE A PART TIME JOB", translation: "Tengo un trabajo a tiempo parcial", distractors: ["TIMES", "PARTED"] },
                { text: "HE IS A WELL KNOWN ACTOR", translation: "Él es un actor muy conocido", distractors: ["GOOD", "KNOW"] }
            ]}
        ]
    },
    124: { // C1-7: Reporting Clauses
        games: [
            { type: "matching", title: "Reporting Match 🧩", questions: [
                { q: "He said...", a: "...that he was tired." },
                { q: "She told me...", a: "...to wait." },
                { q: "They asked...", a: "...if I was okay." },
                { q: "He wondered...", a: "...where she was." },
                { q: "She replied...", a: "...that she would go." }
            ]},
            { type: "trivia_game", title: "Reporting Quiz 🏆", questions: [
                { q: "He ___ that he was happy.", a: "said", o: ["told", "asked", "replied"] },
                { q: "She ___ me to leave.", a: "told", o: ["said", "asked", "wondered"] },
                { q: "They ___ if I liked it.", a: "asked", o: ["said", "told", "replied"] },
                { q: "I ___ where they were.", a: "wondered", o: ["said", "told", "replied"] },
                { q: "He ___ that he wouldn't do it.", a: "stated", o: ["asked", "told", "wondered"] }
            ]},
            { type: "cloze_test", title: "The Statement 📄", text: "The witness {{0}} that she saw the car. She {{1}} the police that it was black. The detective {{2}} if she recognized the driver. She {{3}} that she didn't.", answers: ["said", "told", "asked", "replied"], distractors: ["wondered", "stated", "added"] },
            { type: "word_search", title: "Reporting Search 🔍", words: ["SAID", "TOLD", "ASKED", "REPLIED", "STATED", "ADDED", "WONDERED", "CLAIMED", "DENIED", "AGREED"] },
            { type: "sentence_builder", title: "Reporting Builder 🏗️", sentences: [
                { text: "HE SAID HE WAS HAPPY", translation: "Dijo que estaba feliz", distractors: ["IS", "BEEN"] },
                { text: "SHE TOLD ME TO STAY", translation: "Me dijo que me quedara", distractors: ["STAYS", "STAYING"] }
            ]}
        ]
    },
    125: { // C1-8: Reporting in Passive
        games: [
            { type: "matching", title: "Passive Reporting 🧩", questions: [
                { q: "It is said that...", a: "...he is rich." },
                { q: "It is thought that...", a: "...they are guilty." },
                { q: "He is said to...", a: "...be rich." },
                { q: "They are thought to...", a: "...be guilty." },
                { q: "It is believed that...", a: "...she left." }
            ]},
            { type: "trivia_game", title: "Passive Quiz 🏆", questions: [
                { q: "It is ___ that he is 100 years old.", a: "said", o: ["say", "saying", "says"] },
                { q: "She is believed ___ abroad.", a: "to be living", o: ["living", "lives", "is living"] },
                { q: "It is thought ___ the accident was a mistake.", a: "that", o: ["which", "who", "where"] },
                { q: "He is reported ___ the country.", a: "to have left", o: ["leaving", "left", "has left"] },
                { q: "It is ___ that the economy is improving.", a: "rumored", o: ["rumor", "rumoring", "rumors"] }
            ]},
            { type: "cloze_test", title: "Ancient Myths 🏛️", text: "It is {{0}} that the city was built in a day. The king is {{1}} to have had magic powers. It is {{2}} that he lived for 200 years. Today, he is {{3}} to be a legend.", answers: ["said", "believed", "thought", "considered"], distractors: ["saying", "believe", "think"] },
            { type: "word_search", title: "Passive Search 🔍", words: ["SAID", "THOUGHT", "BELIEVED", "REPORTED", "RUMORED", "KNOWN", "CLAIMED", "EXPECTED", "CONSIDERED", "UNDERSTOOD"] },
            { type: "sentence_builder", title: "Passive Builder 🏗️", sentences: [
                { text: "IT IS SAID THAT HE IS RICH", translation: "Se dice que es rico", distractors: ["WAS", "BEEN"] },
                { text: "HE IS SAID TO BE RICH", translation: "Se dice de él que es rico", distractors: ["IS", "THAT"] }
            ]}
        ]
    },
    126: { // C1-9: Sentence Adverbs
        games: [
            { type: "matching", title: "Adverb Matcher 🧩", questions: [
                { q: "Honestly...", a: "...I don't know." },
                { q: "Fortunately...", a: "...no one was hurt." },
                { q: "Luckily...", a: "...I found my keys." },
                { q: "Surprisingly...", a: "...he arrived on time." },
                { q: "Interestingly...", a: "...she never called." }
            ]},
            { type: "trivia_game", title: "Adverb Quiz 🏆", questions: [
                { q: "___, I can't come tonight.", a: "Unfortunately", o: ["Unfortunate", "Unfortunated", "Unfortunatelyly"] },
                { q: "___, he failed the exam.", a: "Surprisingly", o: ["Surprising", "Surprised", "Surprisinglyly"] },
                { q: "___, I am very tired.", a: "Honestly", o: ["Honest", "Honested", "Honestlyly"] },
                { q: "___, the rain stopped.", a: "Luckily", o: ["Lucky", "Luckied", "Luckilyly"] },
                { q: "___, the project was finished.", a: "Finally", o: ["Final", "Finaled", "Finallyly"] }
            ]},
            { type: "cloze_test", title: "The Event 🎭", text: "{{0}}, the weather was perfect. {{1}}, many people arrived late. {{2}}, the show was a success. {{3}}, I enjoyed it very much.", answers: ["Fortunately", "Surprisingly", "Interestingly", "Personally"], distractors: ["Fortunate", "Surprising", "Interesting"] },
            { type: "word_search", title: "Adverb Search 🔍", words: ["HONESTLY", "LUCKILY", "FINALLY", "FORTUNATELY", "PERSONALLY", "CLEARLY", "BASICALLY", "OBVIOUSLY", "APPARENTLY", "ADMITTEDLY"] },
            { type: "sentence_builder", title: "Adverb Builder 🏗️", sentences: [
                { text: "HONESTLY I DO NOT KNOW", translation: "Honestamente no lo sé", distractors: ["HONEST", "KNOWS"] },
                { text: "LUCKILY HE FOUND IT", translation: "Por suerte lo encontró", distractors: ["LUCKY", "FINDS"] }
            ]}
        ]
    },
    127: { // C1-10: Double Comparatives
        games: [
            { type: "matching", title: "Comparative Match 🧩", questions: [
                { q: "The more I study...", a: "...the more I learn." },
                { q: "The older I get...", a: "...the wiser I become." },
                { q: "The more you practice...", a: "...the better you get." },
                { q: "The faster you run...", a: "...the sooner you arrive." },
                { q: "The less you eat...", a: "...the hungrier you feel." }
            ]},
            { type: "trivia_game", title: "Double Quiz 🏆", questions: [
                { q: "The ___ you work, the more you earn.", a: "harder", o: ["hard", "hardest", "hardly"] },
                { q: "The more you read, the ___ you know.", a: "more", o: ["most", "much", "many"] },
                { q: "The ___ the weather, the better I feel.", a: "warmer", o: ["warm", "warmest", "warmly"] },
                { q: "The ___ it is, the harder it gets.", a: "later", o: ["late", "latest", "lately"] },
                { q: "The ___ you go, the more you see.", a: "further", o: ["far", "furthest", "farther"] }
            ]},
            { type: "cloze_test", title: "Life Lessons 📚", text: "The {{0}} I live, the {{1}} I understand. The {{2}} I travel, the {{3}} I appreciate home.", answers: ["longer", "more", "more", "more"], distractors: ["long", "most", "much"] },
            { type: "word_search", title: "Comparative Search 🔍", words: ["MORE", "LESS", "BETTER", "WORSE", "OLDER", "YOUNGER", "FASTER", "SLOWER", "HARDER", "EASIER"] },
            { type: "sentence_builder", title: "Comparative Builder 🏗️", sentences: [
                { text: "THE MORE YOU EAT THE FATTER YOU GET", translation: "Cuanto más comes más gordo te pones", distractors: ["MOST", "FAT"] },
                { text: "THE SOONER THE BETTER", translation: "Cuanto antes mejor", distractors: ["SOON", "BEST"] }
            ]}
        ]
    },
    128: { // C1-11: Will & Would Habits
        games: [
            { type: "matching", title: "Habit Matcher 🧩", questions: [
                { q: "Present Habit...", a: "He will sit there for hours." },
                { q: "Past Habit...", a: "He would sit there for hours." },
                { q: "Annoying Habit...", a: "He will keep talking!" },
                { q: "Typical Behavior...", a: "She will always help." },
                { q: "Old Routine...", a: "They would go for a walk." }
            ]},
            { type: "trivia_game", title: "Habit Quiz 🏆", questions: [
                { q: "When I was a kid, I ___ play in the park.", a: "would", o: ["will", "shall", "must"] },
                { q: "He ___ always leave the door open!", a: "will", o: ["would", "shall", "must"] },
                { q: "Every Sunday, we ___ visit my grandma.", a: "would", o: ["will", "shall", "must"] },
                { q: "She ___ talk to herself for hours.", a: "will", o: ["would", "shall", "must"] },
                { q: "My cat ___ always sleep on my bed.", a: "will", o: ["would", "shall", "must"] }
            ]},
            { type: "cloze_test", title: "Grandpa's Stories 👴", text: "When we were young, Grandpa {{0}} tell us stories. He {{1}} sit by the fire for hours. Sometimes, he {{2}} even fall asleep. He {{3}} always smile at us.", answers: ["would", "would", "would", "would"], distractors: ["will", "shall", "could"] },
            { type: "word_search", title: "Habit Search 🔍", words: ["WILL", "WOULD", "HABIT", "PAST", "PRESENT", "ALWAYS", "OFTEN", "SOMETIMES", "TYPICAL", "ROUTINE"] },
            { type: "sentence_builder", title: "Habit Builder 🏗️", sentences: [
                { text: "HE WILL ALWAYS DO THAT", translation: "Él siempre hará eso (hábito)", distractors: ["WOULD", "SHALL"] },
                { text: "THEY WOULD VISIT US", translation: "Ellos solían visitarnos", distractors: ["WILL", "VISITS"] }
            ]}
        ]
    }
};

topics.forEach(topic => {
    if (c1Batch1[topic.id]) {
        topic.premium_practice = JSON.stringify(c1Batch1[topic.id]);
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('C1 Practice Zone Batch 1 COMPLETE (Topics 1-11) with 5 games each.');
