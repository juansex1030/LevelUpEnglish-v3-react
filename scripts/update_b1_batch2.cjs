const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const scramble = (str) => {
    const arr = str.toUpperCase().split(' ');
    if (arr.length <= 1) return str.toUpperCase();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join(' ');
};

const b1Batch2 = {
    73: { // B1-11: Future Forms Review
        games: [
            {
                type: "word_search",
                title: "Future Horizons 🚀",
                words: ["PREDICT", "PLAN", "SCHEDULE", "INTEND", "ARRIVE", "LEAVE", "MEETING", "TOMORROW", "SOON", "LATER"]
            },
            {
                type: "trivia_game",
                title: "The Choice is Yours 🏆",
                instruction: "Select the most natural future form.",
                questions: [
                    { q: "Watch out! You ___ fall.", a: "are going to", o: ["will", "shall", "go to"] },
                    { q: "The train ___ at 8 AM sharp.", a: "leaves", o: ["will leave", "is leaving", "going to leave"] },
                    { q: "I promise I ___ tell anyone.", a: "won't", o: ["don't", "am not going to", "not"] },
                    { q: "We ___ have a party tonight.", a: "are having", o: ["will have", "have", "shall have"] },
                    { q: "I think it ___ snow later.", a: "will", o: ["is going to", "is", "goes to"] }
                ]
            },
            {
                type: "sentence_builder",
                title: "Structure Builder 🏗️",
                instruction: "Order the sentence correctly.",
                sentences: [
                    { text: "I AM GOING TO STUDY TONIGHT", translation: "Voy a estudiar esta noche", distractors: ["WILL", "STUDIES"] },
                    { text: "SHE WILL BE FAMOUS ONE DAY", translation: "Ella será famosa algún día", distractors: ["IS", "BEING"] },
                    { text: "WE ARE MEETING AT THE CAFE", translation: "Nos reuniremos en el café", distractors: ["MEET", "WILL"] }
                ]
            }
        ]
    },
    74: { // B1-12: Passives Review
        games: [
            {
                type: "reading_comprehension",
                title: "The History of Tea ☕",
                instruction: "Read and answer.",
                text: "Tea was first discovered in China thousands of years ago. Today, it is grown in many countries including India and Sri Lanka. The leaves are harvested by hand and then they are processed in factories. Most tea is exported all over the world.",
                questions: [
                    { question: "Where was tea first discovered?", options: ["China", "India", "UK", "USA"], correctIdx: 0 },
                    { question: "How are the leaves harvested?", options: ["By machine", "By hand", "By robots", "They are not"], correctIdx: 1 },
                    { question: "What happens after harvesting?", options: ["It is sold", "It is processed", "It is boiled", "It is eaten"], correctIdx: 1 }
                ]
            },
            {
                type: "word_search",
                title: "Passive Actions 🔍",
                words: ["WRITTEN", "BUILT", "MADE", "GROWN", "SOLD", "TAUGHT", "FOUND", "KILLED", "STOLEN", "KEPT"]
            },
            {
                type: "cloze_test",
                title: "Tech Report 💻",
                text: "The new software was {{0}} last week. It is {{1}} to improve efficiency. Most bugs were {{2}} during the testing phase. Users are {{3}} to update their systems immediately.",
                answers: ["released", "designed", "fixed", "advised"],
                distractors: ["breaking", "crying", "fixing"]
            }
        ]
    },
    75: { // B1-13: Purpose Clauses
        games: [
            {
                type: "matching",
                title: "Action & Purpose 🧩",
                questions: [
                    { q: "I went to the store...", a: "...to buy some milk." },
                    { q: "She studied hard...", a: "...so that she could pass." },
                    { q: "He took a map...", a: "...in order not to get lost." },
                    { q: "We left early...", a: "...so as to avoid traffic." },
                    { q: "They save money...", a: "...to buy a new house." }
                ]
            },
            {
                type: "sentence_builder",
                title: "The Linker 🏗️",
                sentences: [
                    { text: "I WORK HARD IN ORDER TO SUCCEED", translation: "Trabajo duro para tener éxito", distractors: ["FOR", "THAT"] },
                    { text: "SHE RAN SO THAT SHE WOULD ARRIVE", translation: "Ella corrió para llegar (a tiempo)", distractors: ["TO", "FOR"] },
                    { text: "WE CALLED TO INVITE THEM", translation: "Llamamos para invitarlos", distractors: ["SO", "THAT"] }
                ]
            }
        ]
    },
    76: { // B1-14: Verbs with Prepositions
        games: [
            {
                type: "trivia_game",
                title: "Preposition Perfection 🏆",
                questions: [
                    { q: "I am waiting ___ the bus.", a: "for", o: ["to", "at", "on"] },
                    { q: "She apologized ___ her mistake.", a: "for", o: ["to", "about", "with"] },
                    { q: "We arrived ___ the airport.", a: "at", o: ["to", "in", "on"] },
                    { q: "He is listening ___ music.", a: "to", o: ["at", "on", "for"] },
                    { q: "They are talking ___ the project.", a: "about", o: ["on", "with", "for"] }
                ]
            },
            {
                type: "word_search",
                title: "Verb Connectors 🔍",
                words: ["WAIT", "LISTEN", "TALK", "AGREE", "DEPEND", "BELIEVE", "LAUGH", "SMILE", "SCOLD", "DREAM"]
            }
        ]
    },
    77: { // B1-15: Future Perfect
        games: [
            {
                type: "cloze_test",
                title: "Looking Back from the Future ⏳",
                text: "By this time next year, I will have {{0}} my course. My sister will have {{1}} a new job. We will have {{2}} to a new city. Hopefully, the pandemic will have {{3}} entirely.",
                answers: ["finished", "found", "moved", "ended"],
                distractors: ["finishing", "find", "move"]
            },
            {
                type: "sentence_builder",
                title: "Perfect Planning 🏗️",
                sentences: [
                    { text: "I WILL HAVE FINISHED BY NOON", translation: "Habré terminado para el mediodía", distractors: ["FINISH", "FINISHED"] },
                    { text: "SHE WILL HAVE LEFT BY THEN", translation: "Ella se habrá ido para entonces", distractors: ["LEAVE", "LEAVES"] },
                    { text: "THEY WILL HAVE ARRIVED SOON", translation: "Ellos habrán llegado pronto", distractors: ["ARRIVE", "ARRIVES"] }
                ]
            }
        ]
    },
    78: { // B1-16: Get or Have Something Done
        games: [
            {
                type: "matching",
                title: "Service Matcher 🧩",
                questions: [
                    { q: "I had my hair...", a: "...cut." },
                    { q: "She got her car...", a: "...repaired." },
                    { q: "He had his house...", a: "...painted." },
                    { q: "We got the pizza...", a: "...delivered." },
                    { q: "They had the report...", a: "...checked." }
                ]
            },
            {
                type: "trivia_game",
                title: "Causative Challenge 🏆",
                questions: [
                    { q: "I need to get my eyes ___.", a: "tested", o: ["test", "testing", "to test"] },
                    { q: "She had her nails ___.", a: "done", o: ["do", "doing", "did"] },
                    { q: "We got the window ___.", a: "fixed", o: ["fix", "fixing", "to fix"] }
                ]
            }
        ]
    },
    79: { // B1-17: Should Have & Suggestions
        games: [
            {
                type: "unscramble",
                title: "Regret Scramble 🌪️",
                questions: [
                    { a: "YOU SHOULD HAVE CALLED ME", q: "CALLED / HAVE / SHOULD / ME / YOU" },
                    { a: "SHE SHOULD HAVE STUDIED MORE", q: "MORE / STUDIED / HAVE / SHOULD / SHE" },
                    { a: "THEY SHOULD HAVE ARRIVED EARLY", q: "EARLY / ARRIVED / HAVE / SHOULD / THEY" }
                ]
            },
            {
                type: "cloze_test",
                title: "Advice for the Past 🕰️",
                text: "I am so tired today. I should have {{0}} to bed earlier. You should have {{1}} me about the meeting. We should have {{2}} a map with us. He should have {{3}} the truth.",
                answers: ["gone", "told", "taken", "told"],
                distractors: ["go", "tell", "take"]
            }
        ]
    },
    80: { // B1-18: Would Rather vs Would Prefer
        games: [
            {
                type: "trivia_game",
                title: "Preferences 🏆",
                questions: [
                    { q: "I would rather ___ home.", a: "stay", o: ["to stay", "staying", "stayed"] },
                    { q: "I would prefer ___ out.", a: "to go", o: ["go", "going", "gone"] },
                    { q: "Would you rather ___ tea or coffee?", a: "have", o: ["to have", "having", "had"] },
                    { q: "She would prefer ___ alone.", a: "to be", o: ["be", "being", "been"] }
                ]
            },
            {
                type: "sentence_builder",
                title: "Choice Builder 🏗️",
                sentences: [
                    { text: "I WOULD RATHER STAY HERE", translation: "Preferiría quedarme aquí", distractors: ["TO", "STAYING"] },
                    { text: "SHE WOULD PREFER TO LEAVE", translation: "Ella preferiría irse", distractors: ["LEAVE", "LEAVING"] }
                ]
            }
        ]
    },
    81: { // B1-19: Third Conditional
        games: [
            {
                type: "matching",
                title: "Past Regrets 🧩",
                questions: [
                    { q: "If I had studied...", a: "...I would have passed." },
                    { q: "If she had run...", a: "...she would have caught it." },
                    { q: "If we had known...", a: "...we wouldn't have gone." },
                    { q: "If they had asked...", a: "...I would have helped." }
                ]
            },
            {
                type: "cloze_test",
                title: "Conditional Dreams 💭",
                text: "If I had {{0}} more money, I would have {{1}} that car. If you had {{2}} me, I would have {{3}} you. If it had {{4}}, we would have stayed inside.",
                answers: ["had", "bought", "called", "helped", "rained"],
                distractors: ["have", "buy", "call", "help", "rain"]
            }
        ]
    },
    82: { // B1-20: Time Clauses
        games: [
            {
                type: "trivia_game",
                title: "Timing is Everything 🏆",
                questions: [
                    { q: "I will call you when I ___.", a: "arrive", o: ["will arrive", "arriving", "arrived"] },
                    { q: "Before I ___ home, I will buy milk.", a: "go", o: ["will go", "going", "went"] },
                    { q: "As soon as she ___ the news, she called.", a: "heard", o: ["will hear", "hears", "hearing"] }
                ]
            },
            {
                type: "word_search",
                title: "Time Linkers 🔍",
                words: ["WHEN", "BEFORE", "AFTER", "WHILE", "UNTIL", "SINCE", "ONCE", "SOON", "DURING", "LATER"]
            }
        ]
    }
};

topics.forEach(topic => {
    if (b1Batch2[topic.id]) {
        topic.premium_practice = JSON.stringify(b1Batch2[topic.id]);
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('B1 Practice Zone Batch 2 COMPLETE (Topics 11-20).');
