const fs = require('fs');
const path = 'backend/data/topics.json';
const topics = JSON.parse(fs.readFileSync(path, 'utf8'));

const updateTopic = (level, number, games) => {
    const t = topics.find(topic => topic.level === level && topic.number === number);
    if (t) {
        t.premium_practice = JSON.stringify({ games }, null, 2);
    }
};

// --- TOPIC 31: Reported Speech (Statements & Requests) ---
updateTopic('A2', 31, [
    {
        type: 'multiple_choice',
        title: 'He said that...',
        questions: [
            { q: 'Direct: "I am happy." -> He said [___] .', a: 'he was happy', o: ['he is happy', 'I was happy', 'he had been happy'] },
            { q: 'Direct: "I like pizza." -> She said she [___] pizza.', a: 'liked', o: ['likes', 'liking', 'was liking'] },
            { q: 'Direct: "I went home." -> He said he [___] home.', a: 'had gone', o: ['went', 'goes', 'was going'] },
            { q: 'Direct: "Call me." -> He told me [___] him.', a: 'to call', o: ['call', 'calling', 'called'] },
            { q: 'Direct: "Don\'t go." -> She told me [___] .', a: 'not to go', o: ['don\'t go', 'not go', 'to not go'] },
            { q: 'Direct: "I will help." -> He said he [___] help.', a: 'would', o: ['will', 'was', 'did'] },
            { q: 'Direct: "I can swim." -> She said she [___] swim.', a: 'could', o: ['can', 'could to', 'was'] },
            { q: 'Direct: "I am working." -> He said he [___] .', a: 'was working', o: ['is working', 'worked', 'had worked'] },
            { q: 'Direct: "Sit down." -> The teacher told us [___] .', a: 'to sit down', o: ['sit down', 'sitting down', 'sat down'] },
            { q: 'Direct: "I have finished." -> He said he [___] .', a: 'had finished', o: ['has finished', 'finished', 'was finishing'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Reported Keywords',
        words: ['SAID', 'TOLD', 'REPORT', 'SPEECH', 'QUOTED', 'ORDER', 'REQUEST', 'TENSE', 'CHANGE', 'DIRECT']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Report',
        questions: [
            { q: 'He / said / that / he / was / happy / .', a: 'He said that he was happy.' },
            { q: 'She / told / me / to / wait / .', a: 'She told me to wait.' },
            { q: 'He / said / he / liked / the / movie / .', a: 'He said he liked the movie.' },
            { q: 'They / said / they / were / coming / .', a: 'They said they were coming.' },
            { q: 'She / told / him / not / to / leave / .', a: 'She told him not to leave.' },
            { q: 'He / said / he / had / seen / it / .', a: 'He said he had seen it.' },
            { q: 'We / told / them / to / be / quiet / .', a: 'We told them to be quiet.' },
            { q: 'She / said / she / would / help / .', a: 'She said she would help.' },
            { q: 'He / said / he / could / drive / .', a: 'He said he could drive.' },
            { q: 'They / told / us / to / sit / down / .', a: 'They told us to sit down.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Reported Rules',
        questions: [
            { q: 'When we report a statement, the tense usually goes...', a: 'One step back', o: ['One step forward', 'Stays the same'] },
            { q: '"Am/Is/Are" becomes...', a: 'Was/Were', o: ['Had been', 'Be'] },
            { q: '"Will" becomes...', a: 'Would', o: ['Won\'t', 'Was'] },
            { q: '"Can" becomes...', a: 'Could', o: ['Can\'t', 'Was'] },
            { q: '"Present Simple" becomes...', a: 'Past Simple', o: ['Past Continuous', 'Present Perfect'] },
            { q: 'For requests/orders, we use...', a: 'to + infinitive', o: ['Past Simple', '-ing form'] },
            { q: 'For negative requests, we use...', a: 'not to + infinitive', o: ['don\'t to + infinitive'] },
            { q: 'Difference between "say" and "tell":', a: '"Tell" usually needs an object (me, you)', o: ['"Say" needs an object'] },
            { q: 'Direct: "I saw it" -> Reported:', a: '...he had seen it', o: ['...he saw it'] },
            { q: 'Direct: "I have it" -> Reported:', a: '...he had it', o: ['...he has it'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Backshift the Tense',
        questions: [
            { q: 'Direct: "I\'m tired." -> He said he [___] tired.', a: 'was' },
            { q: 'Direct: "I work here." -> She said she [___] there.', a: 'worked' },
            { q: 'Direct: "I\'ll call." -> He said he [___] call.', a: 'would' },
            { q: 'Direct: "I can sing." -> She said she [___] sing.', a: 'could' },
            { q: 'Direct: "Wait here." -> He told me [___] wait there.', a: 'to' },
            { q: 'Direct: "Don\'t move." -> She told me [___] [___] move.', a: 'not to' },
            { q: 'Direct: "I have eaten." -> He said he [___] eaten.', a: 'had' },
            { q: 'Direct: "I\'m reading." -> She said she [___] reading.', a: 'was' },
            { q: 'Direct: "Help me." -> He asked me [___] help him.', a: 'to' },
            { q: 'Direct: "I saw you." -> He said he [___] seen me.', a: 'had' }
        ]
    }
]);

// --- TOPIC 32: Reported Speech (Modals) ---
updateTopic('A2', 32, [
    {
        type: 'multiple_choice',
        title: 'Modals in Reports',
        questions: [
            { q: 'Direct: "I can help." -> He said he [___] help.', a: 'could', o: ['can', 'was', 'would'] },
            { q: 'Direct: "I must go." -> She said she [___] go.', a: 'had to', o: ['must', 'should', 'musted'] },
            { q: 'Direct: "I should study." -> He said he [___] study.', a: 'should', o: ['shall', 'shoulded', 'must'] },
            { q: 'Direct: "I may come." -> She said she [___] come.', a: 'might', o: ['may', 'mayed', 'could'] },
            { q: 'Direct: "I might be late." -> He said he [___] be late.', a: 'might', o: ['may', 'must', 'should'] },
            { q: 'Direct: "You will win." -> She said I [___] win.', a: 'would', o: ['will', 'was', 'won'] },
            { q: 'Direct: "I could swim." -> He said he [___] swim.', a: 'could', o: ['can', 'coulded', 'was able to'] },
            { q: 'Direct: "I have to leave." -> She said she [___] leave.', a: 'had to', o: ['has to', 'must', 'have to'] },
            { q: 'Direct: "I would like it." -> He said he [___] like it.', a: 'would', o: ['will', 'liked', 'wants'] },
            { q: 'Direct: "Can you help?" -> She asked [___] help.', a: 'if I could', o: ['can I', 'if could I', 'I could'] }
        ]
    },
    {
        type: 'word_search',
        title: 'Modal Reports',
        words: ['COULD', 'WOULD', 'MIGHT', 'HADTO', 'SHOULD', 'MODAL', 'REPORT', 'PAST', 'CHANGE', 'SPEECH']
    },
    {
        type: 'unscramble',
        title: 'Unscramble the Modal Report',
        questions: [
            { q: 'He / said / he / could / help / me / .', a: 'He said he could help me.' },
            { q: 'She / said / she / had / to / go / .', a: 'She said she had to go.' },
            { q: 'He / said / he / would / call / later / .', a: 'He said he would call later.' },
            { q: 'They / said / they / might / be / late / .', a: 'They said they might be late.' },
            { q: 'She / said / I / should / see / a / doctor / .', a: 'She said I should see a doctor.' },
            { q: 'I / asked / her / if / she / could / dance / .', a: 'I asked her if she could dance.' },
            { q: 'He / said / he / wouldn\'t / come / .', a: 'He said he wouldn\'t come.' },
            { q: 'They / said / we / had / to / wait / .', a: 'They said we had to wait.' },
            { q: 'She / asked / me / what / I / could / do / .', a: 'She asked me what I could do.' },
            { q: 'He / said / he / might / not / stay / .', a: 'He said he might not stay.' }
        ]
    },
    {
        type: 'trivia_game',
        title: 'Modal Shift Rules',
        questions: [
            { q: '"Can" in reported speech becomes...', a: 'Could', o: ['Can', 'Was able'] },
            { q: '"Will" in reported speech becomes...', a: 'Would', o: ['Will', 'Shall'] },
            { q: '"May" (possibility) becomes...', a: 'Might', o: ['May', 'Could'] },
            { q: '"Must" (obligation) becomes...', a: 'Had to', o: ['Must', 'Musted'] },
            { q: '"Have to" becomes...', a: 'Had to', o: ['Has to', 'Must'] },
            { q: '"Should", "Could", "Might", "Would" change?', a: 'No, they stay the same', o: ['Yes, they go back one more'] },
            { q: 'Direct: "I can\'t hear" -> Reported:', a: '...he couldn\'t hear', o: ['...he can\'t hear'] },
            { q: 'Direct: "You should go" -> Reported:', a: '...I should go', o: ['...I shall go'] },
            { q: 'Direct: "I will be there" -> Reported:', a: '...he would be there', o: ['...he will be there'] },
            { q: 'Direct: "Must I go?" -> Reported:', a: '...if he had to go', o: ['...must he go'] }
        ]
    },
    {
        type: 'cloze_test',
        title: 'Fill the Reported Modal',
        questions: [
            { q: 'Direct: "I can." -> He said he [___].', a: 'could' },
            { q: 'Direct: "I will." -> She said she [___].', a: 'would' },
            { q: 'Direct: "I must." -> He said he [___] go.', a: 'had to' },
            { q: 'Direct: "I may." -> She said she [___] come.', a: 'might' },
            { q: 'Direct: "I should." -> He said he [___] study.', a: 'should' },
            { q: 'Direct: "I can\'t." -> She said she [___].', a: "couldn't" },
            { q: 'Direct: "I won\'t." -> He said he [___].', a: "wouldn't" },
            { q: 'Direct: "I have to." -> She said she [___].', a: 'had to' },
            { q: 'Direct: "I could." -> He said he [___].', a: 'could' },
            { q: 'Direct: "I might." -> She said she [___].', a: 'might' }
        ]
    }
]);

fs.writeFileSync(path, JSON.stringify(topics, null, 2));
console.log('Batch 10: A2 Topics 31-32 updated successfully.');
