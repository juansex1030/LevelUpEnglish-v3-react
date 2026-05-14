const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const b1Batch3 = {
    83: { // B1-21: Clauses of Purpose
        games: [
            { type: "matching", title: "Intention Match 🧩", questions: [
                { q: "I study English...", a: "...to travel the world." },
                { q: "She went to the kitchen...", a: "...to make a sandwich." },
                { q: "He saved money...", a: "...so that he could buy a car." },
                { q: "They ran...", a: "...in order to catch the train." },
                { q: "I use a map...", a: "...so as not to get lost." }
            ]},
            { type: "trivia_game", title: "Purpose Quiz 🏆", questions: [
                { q: "I exercise ___ stay fit.", a: "to", o: ["for", "so that", "that"] },
                { q: "He wore a suit ___ he would look professional.", a: "so that", o: ["to", "in order", "for"] },
                { q: "We called ___ invite them.", a: "to", o: ["for", "so that", "that"] },
                { q: "She whispered ___ anyone would hear.", a: "so that no", o: ["to", "for", "that"] },
                { q: "I went there ___ see him.", a: "to", o: ["for", "that", "so"] }
            ]},
            { type: "sentence_builder", title: "Clause Builder 🏗️", sentences: [
                { text: "I WENT THERE TO SEE HER", translation: "Fui allí para verla", distractors: ["FOR", "THAT"] },
                { text: "SHE RAN SO THAT SHE ARRIVED", translation: "Ella corrió para llegar (a tiempo)", distractors: ["TO", "FOR"] }
            ]},
            { type: "cloze_test", title: "The Inventor's Goal 💡", text: "He worked day and night {{0}} create the machine. He did it {{1}} he could help people. In {{2}} not to fail, he tested it many times. He used high-quality parts {{3}} as to ensure durability.", answers: ["to", "so that", "order", "so"], distractors: ["for", "that", "that"] },
            { type: "word_search", title: "Purpose Search 🔍", words: ["ORDER", "THAT", "INTEND", "GOAL", "REASON", "CAUSE", "AVOID", "PREVENT", "CREATE", "DESIGN"] }
        ]
    },
    84: { // B1-22: Question Tags
        games: [
            { type: "matching", title: "Tag Matcher 🧩", questions: [
                { q: "You are happy...", a: "...aren't you?" },
                { q: "He can swim...", a: "...can't he?" },
                { q: "She won't go...", a: "...will she?" },
                { q: "They have arrived...", a: "...haven't they?" },
                { q: "I am late...", a: "...aren't I?" }
            ]},
            { type: "trivia_game", title: "Tag Challenge 🏆", questions: [
                { q: "It is cold, ___?", a: "isn't it", o: ["is it", "doesn't it", "it is"] },
                { q: "You like tea, ___?", a: "don't you", o: ["do you", "aren't you", "you like"] },
                { q: "She didn't call, ___?", a: "did she", o: ["didn't she", "does she", "she did"] },
                { q: "We must leave, ___?", a: "mustn't we", o: ["must we", "should we", "don't we"] },
                { q: "They were there, ___?", a: "weren't they", o: ["were they", "didn't they", "wasn't they"] }
            ]},
            { type: "cloze_test", title: "Tag Conversation 💬", text: "You're coming, {{0}} you? He hasn't left yet, {{1}} he? We can go now, {{2}} we? It's a nice day, {{3}} it?", answers: ["aren't", "has", "can't", "isn't"], distractors: ["are", "hasn't", "can"] },
            { type: "sentence_builder", title: "Tag Builder 🏗️", sentences: [
                { text: "YOU ARE READY ARENT YOU", translation: "Estás listo, ¿verdad?", distractors: ["ARE", "YOU"] },
                { text: "SHE LIKES IT DOESNT SHE", translation: "A ella le gusta, ¿verdad?", distractors: ["DOES", "SHE"] }
            ]},
            { type: "word_search", title: "Tag Verbs 🔍", words: ["ISNT", "ARENT", "DONT", "DOESNT", "CANT", "WONT", "DIDNT", "HAVENT", "HASNT", "MUSTNT"] }
        ]
    },
    85: { // B1-23: Modals of Deduction
        games: [
            { type: "matching", title: "Deduction Match 🧩", questions: [
                { q: "It's 100% true.", a: "Must" },
                { q: "It's 100% false.", a: "Can't" },
                { q: "It's possible (50%).", a: "Might" },
                { q: "It's possible (30%).", a: "Could" },
                { q: "It's very likely.", a: "Must" }
            ]},
            { type: "trivia_game", title: "Mystery Solver 🏆", questions: [
                { q: "He has a Ferrari. He ___ be rich.", a: "must", o: ["can't", "might", "shall"] },
                { q: "She is not answering. She ___ be sleeping.", a: "might", o: ["must", "can't", "won't"] },
                { q: "They are in London. They ___ be in Paris.", a: "can't", o: ["must", "might", "could"] },
                { q: "The light is on. Someone ___ be home.", a: "must", o: ["can't", "might", "would"] },
                { q: "I'm not sure, but it ___ rain.", a: "could", o: ["must", "can't", "shall"] }
            ]},
            { type: "cloze_test", title: "The Empty Office 🏢", text: "The door is locked, so he {{0}} be inside. However, his car is gone, so he {{1}} be at home. His phone is ringing on the desk, so he {{2}} have forgotten it. I {{3}} check the cafeteria.", answers: ["must", "might", "must", "might"], distractors: ["can't", "shall", "won't"] },
            { type: "sentence_builder", title: "Deduction Builder 🏗️", sentences: [
                { text: "HE MUST BE AT HOME", translation: "Él debe estar en casa", distractors: ["CAN'T", "MIGHT"] },
                { text: "SHE CAN'T BE TIRED", translation: "Ella no puede estar cansada", distractors: ["MUST", "MIGHT"] }
            ]},
            { type: "word_search", title: "Modal Search 🔍", words: ["MUST", "MIGHT", "COULD", "CANT", "MAY", "SHOULD", "WOULD", "SHALL", "BECAUSE", "MAYBE"] }
        ]
    },
    86: { // B1-24: Past Modals of Deduction
        games: [
            { type: "matching", title: "Past Mystery Match 🧩", questions: [
                { q: "I'm sure it happened.", a: "Must have" },
                { q: "I'm sure it didn't happen.", a: "Can't have" },
                { q: "Maybe it happened.", a: "Might have" },
                { q: "It was possible.", a: "Could have" },
                { q: "Very likely in the past.", a: "Must have" }
            ]},
            { type: "trivia_game", title: "Detective Work 🏆", questions: [
                { q: "The grass is wet. It ___ rained.", a: "must have", o: ["can't have", "might have", "could have"] },
                { q: "He was here a minute ago. He ___ gone far.", a: "can't have", o: ["must have", "might have", "should have"] },
                { q: "I lost my keys. I ___ dropped them.", a: "might have", o: ["must have", "can't have", "should have"] },
                { q: "She didn't pass. She ___ studied enough.", a: "can't have", o: ["must have", "might have", "could have"] },
                { q: "The cake is gone. Someone ___ eaten it.", a: "must have", o: ["might have", "can't have", "should have"] }
            ]},
            { type: "cloze_test", title: "The Broken Window 🪟", text: "The window is broken. A ball {{0}} have hit it. It {{1}} have been the wind because it wasn't breezy. The neighbor's kids {{2}} have been playing nearby. They {{3}} have felt guilty and left.", answers: ["must", "can't", "might", "must"], distractors: ["should", "would", "shall"] },
            { type: "sentence_builder", title: "Past Builder 🏗️", sentences: [
                { text: "HE MUST HAVE LEFT EARLY", translation: "Él debe haberse ido temprano", distractors: ["CAN'T", "MIGHT"] },
                { text: "SHE CANT HAVE SEEN HIM", translation: "Ella no puede haberlo visto", distractors: ["MUST", "MIGHT"] }
            ]},
            { type: "word_search", title: "Past Modals 🔍", words: ["MUST", "MIGHT", "COULD", "CANT", "HAVE", "BEEN", "DONE", "GONE", "SEEN", "KNOWN"] }
        ]
    },
    87: { // B1-25: Reported Speech
        games: [
            { type: "matching", title: "Speech Transformer 🧩", questions: [
                { q: "Direct: 'I am tired.'", a: "Reported: He said he was tired." },
                { q: "Direct: 'I will go.'", a: "Reported: He said he would go." },
                { q: "Direct: 'I have seen it.'", a: "Reported: He said he had seen it." },
                { q: "Direct: 'I can help.'", a: "Reported: He said he could help." },
                { q: "Direct: 'I went there.'", a: "Reported: He said he had gone there." }
            ]},
            { type: "trivia_game", title: "Reporting Quiz 🏆", questions: [
                { q: "'I love pizza.' -> He said he ___ pizza.", a: "loved", o: ["love", "loves", "will love"] },
                { q: "'I am working.' -> She said she ___ working.", a: "was", o: ["is", "were", "been"] },
                { q: "'I will call you.' -> They said they ___ call me.", a: "would", o: ["will", "can", "shall"] },
                { q: "'I can't swim.' -> He said he ___ swim.", a: "couldn't", o: ["can't", "won't", "doesn't"] },
                { q: "'Open the door!' -> He told me ___ the door.", a: "to open", o: ["open", "opening", "opened"] }
            ]},
            { type: "cloze_test", title: "The Interview 🎙️", text: "The actor said he {{0}} very happy. He told us that he {{1}} working on a new film. He added that it {{2}} be released next year. He asked us {{3}} to reveal the plot.", answers: ["was", "had been", "would", "not"], distractors: ["is", "have", "will"] },
            { type: "sentence_builder", title: "Speech Builder 🏗️", sentences: [
                { text: "HE SAID HE WAS TIRED", translation: "Dijo que estaba cansado", distractors: ["IS", "BEEN"] },
                { text: "SHE TOLD ME TO WAIT", translation: "Me dijo que esperara", distractors: ["WAITS", "WAITING"] }
            ]},
            { type: "word_search", title: "Reporting Verbs 🔍", words: ["SAID", "TOLD", "ASKED", "REPLIED", "STATED", "ADDED", "DENIED", "AGREED", "CLAIMED", "SHOUTED"] }
        ]
    },
    88: { // B1-26: Giving Reasons
        games: [
            { type: "matching", title: "Cause & Effect 🧩", questions: [
                { q: "I was late...", a: "...due to the traffic." },
                { q: "We stayed home...", a: "...because it was raining." },
                { q: "She failed...", a: "...owing to a lack of study." },
                { q: "They celebrated...", a: "...since they won the match." },
                { q: "He called...", a: "...because of an emergency." }
            ]},
            { type: "trivia_game", title: "Reasoning Quiz 🏆", questions: [
                { q: "I am here ___ I want to help.", a: "because", o: ["due to", "because of", "so"] },
                { q: "The flight was cancelled ___ the storm.", a: "due to", o: ["because", "since", "as"] },
                { q: "___ it was late, we went home.", a: "Since", o: ["Due to", "Because of", "So"] },
                { q: "He cried ___ he was sad.", a: "because", o: ["due to", "owing to", "so"] },
                { q: "We lost ___ our mistakes.", a: "because of", o: ["because", "since", "as"] }
            ]},
            { type: "cloze_test", title: "The Delay ⌛", text: "The project is late {{0}} to a lack of staff. This happened {{1}} several people left. {{2}} we don't have a manager, decisions are slow. We are working hard {{3}} of the deadline.", answers: ["due", "because", "Since", "because"], distractors: ["owing", "so", "as"] },
            { type: "sentence_builder", title: "Reason Builder 🏗️", sentences: [
                { text: "I DID IT BECAUSE OF YOU", translation: "Lo hice por ti", distractors: ["SINCE", "DUE"] },
                { text: "SHE LEFT SINCE IT WAS LATE", translation: "Ella se fue ya que era tarde", distractors: ["DUE", "OWING"] }
            ]},
            { type: "word_search", title: "Reason Words 🔍", words: ["BECAUSE", "SINCE", "DUE", "OWING", "REASON", "CAUSE", "RESULT", "THANKS", "CONSEQUENTLY", "THEREFORE"] }
        ]
    },
    89: { // B1-27: Past Modals (Judgments)
        games: [
            { type: "matching", title: "Judgment Match 🧩", questions: [
                { q: "It was a mistake to do it.", a: "Shouldn't have" },
                { q: "It was necessary but not done.", a: "Should have" },
                { q: "It was possible but not done.", a: "Could have" },
                { q: "It wasn't necessary but done.", a: "Needn't have" },
                { q: "A strong past advice.", a: "Should have" }
            ]},
            { type: "trivia_game", title: "Regret & Judgment 🏆", questions: [
                { q: "You ___ more careful. You broke it!", a: "should have been", o: ["should be", "must have been", "could be"] },
                { q: "I ___ all that cake. I feel sick.", a: "shouldn't have eaten", o: ["shouldn't eat", "not should have eaten", "mustn't have eaten"] },
                { q: "We ___ an umbrella. It's pouring!", a: "should have taken", o: ["should take", "could take", "must take"] },
                { q: "They ___ late. The meeting started.", a: "shouldn't have arrived", o: ["shouldn't arrive", "not should have", "mustn't arrive"] }
            ]},
            { type: "cloze_test", title: "The Party Disaster 🎈", text: "I {{0}} have invited so many people. We {{1}} have bought more food. You {{2}} have told me earlier! We {{3}} have planned it better.", answers: ["shouldn't", "should", "should", "could"], distractors: ["must", "would", "shall"] },
            { type: "sentence_builder", title: "Judgment Builder 🏗️", sentences: [
                { text: "I SHOULD HAVE CALLED YOU", translation: "Debería haberte llamado", distractors: ["SHALL", "WOULD"] },
                { text: "YOU SHOULDNT HAVE LIED", translation: "No deberías haber mentido", distractors: ["MUSTNT", "COULDNT"] }
            ]},
            { type: "word_search", title: "Judgment Words 🔍", words: ["SHOULD", "OUGHT", "COULD", "MISTAKE", "REGRET", "SORRY", "BETTER", "WISH", "ERROR", "FAULT"] }
        ]
    },
    90: { // B1-28: Past Accomplishments
        games: [
            { type: "matching", title: "Success Match 🧩", questions: [
                { q: "I finally did it.", a: "I managed to do it." },
                { q: "It was easy for me.", a: "I was able to do it." },
                { q: "I reached the goal.", a: "I succeeded in reaching it." },
                { q: "I did it despite difficulty.", a: "I managed to do it." },
                { q: "I had the ability.", a: "I could do it." }
            ]},
            { type: "trivia_game", title: "Success Quiz 🏆", questions: [
                { q: "I ___ to fix the car.", a: "managed", o: ["could", "succeeded", "was able"] },
                { q: "She succeeded ___ passing the test.", a: "in", o: ["to", "at", "on"] },
                { q: "We ___ able to finish on time.", a: "were", o: ["was", "did", "managed"] },
                { q: "He finally ___ in finding a job.", a: "succeeded", o: ["managed", "could", "was able"] },
                { q: "___ you manage to call him?", a: "Did", o: ["Were", "Could", "Had"] }
            ]},
            { type: "cloze_test", title: "The Mountain Climb 🏔️", text: "It was a hard climb, but we {{0}} to reach the top. We {{1}} in finding a safe path. Although it was cold, we {{2}} able to survive. I finally {{3}} my dream.", answers: ["managed", "succeeded", "were", "achieved"], distractors: ["could", "did", "was"] },
            { type: "sentence_builder", title: "Success Builder 🏗️", sentences: [
                { text: "I MANAGED TO FINISH IT", translation: "Logré terminarlo", distractors: ["SUCCEEDED", "COULD"] },
                { text: "SHE SUCCEEDED IN WINNING", translation: "Ella tuvo éxito al ganar", distractors: ["MANAGED", "TO"] }
            ]},
            { type: "word_search", title: "Success Words 🔍", words: ["MANAGE", "SUCCEED", "ABLE", "COULD", "REACH", "ACHIEVE", "FINISH", "WIN", "GOAL", "VICTORY"] }
        ]
    },
    91: { // B1-29: Passive Process
        games: [
            { type: "matching", title: "Process Match 🧩", questions: [
                { q: "Raw materials...", a: "...are collected." },
                { q: "The product...", a: "...is manufactured." },
                { q: "The quality...", a: "...is checked." },
                { q: "The items...", a: "...are packed." },
                { q: "Everything...", a: "...is shipped." }
            ]},
            { type: "trivia_game", title: "Manufacturing Quiz 🏆", questions: [
                { q: "Coffee beans ___ by hand.", a: "are picked", o: ["pick", "picks", "picking"] },
                { q: "The milk ___ in a factory.", a: "is processed", o: ["process", "processes", "processing"] },
                { q: "The cars ___ on an assembly line.", a: "are built", o: ["build", "builds", "building"] },
                { q: "New designs ___ every year.", a: "are created", o: ["create", "creates", "creating"] }
            ]},
            { type: "cloze_test", title: "Paper Production 📄", text: "Trees are {{0}} down and transported. The wood is {{1}} into small pieces. It is then {{2}} with chemicals to make pulp. Finally, the paper is {{3}} and dried.", answers: ["cut", "broken", "mixed", "pressed"], distractors: ["cutting", "break", "mix"] },
            { type: "sentence_builder", title: "Process Builder 🏗️", sentences: [
                { text: "THE MILK IS BOTTLED HERE", translation: "La leche se embotella aquí", distractors: ["BOTTLE", "BOTTLING"] },
                { text: "THE CARS ARE SOLD INTERNATIONALLY", translation: "Los coches se venden internacionalmente", distractors: ["SELL", "SELLING"] }
            ]},
            { type: "word_search", title: "Process Words 🔍", words: ["MADE", "BUILT", "SOLD", "KEPT", "SENT", "CHECKED", "PACKED", "SHIPPED", "PICKED", "GROWN"] }
        ]
    },
    92: { // B1-30: Future Perfect
        games: [
            { type: "matching", title: "Future Completion 🧩", questions: [
                { q: "By 2050...", a: "...we will have landed on Mars." },
                { q: "By next month...", a: "...I will have finished my course." },
                { q: "In 10 years...", a: "...technology will have changed." },
                { q: "By tonight...", a: "...they will have arrived." },
                { q: "By next week...", a: "...the project will have ended." }
            ]},
            { type: "trivia_game", title: "Future Perfect Quiz 🏆", questions: [
                { q: "I will ___ my dinner by 8 PM.", a: "have finished", o: ["finish", "finished", "be finishing"] },
                { q: "She ___ her degree by next June.", a: "will have gotten", o: ["gets", "will get", "has gotten"] },
                { q: "They ___ the house by then.", a: "will have sold", o: ["sell", "will sell", "have sold"] }
            ]},
            { type: "cloze_test", title: "A Life Review 👵", text: "By the time I am 80, I will have {{0}} the world. I will have {{1}} a family. I will have {{2}} many books. Hopefully, I will have {{3}} a good life.", answers: ["traveled", "started", "read", "lived"], distractors: ["travel", "start", "reading"] },
            { type: "sentence_builder", title: "Perfect Builder 🏗️", sentences: [
                { text: "I WILL HAVE FINISHED IT", translation: "Lo habré terminado", distractors: ["FINISH", "FINISHING"] },
                { text: "SHE WILL HAVE LEFT SOON", translation: "Ella se habrá ido pronto", distractors: ["LEAVE", "LEAVES"] }
            ]},
            { type: "word_search", title: "Perfect Search 🔍", words: ["WILL", "HAVE", "DONE", "BEEN", "GONE", "SEEN", "KNOWN", "MADE", "KEPT", "SOLD"] }
        ]
    }
};

topics.forEach(topic => {
    if (b1Batch3[topic.id]) {
        topic.premium_practice = JSON.stringify(b1Batch3[topic.id]);
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('B1 Practice Zone Batch 3 COMPLETE (Topics 21-30) with 5 games each.');
