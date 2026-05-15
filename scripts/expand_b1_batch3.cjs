const fs = require('fs');
const path = require('path');
const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const b1ExpansionBatch3 = {
  79: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>🏛️ Third Conditional: The "What If" of History</h4>
    <p>The Third Conditional is used to talk about **imaginary situations in the past**. It's the language of regret, relief, and historical analysis. It describes things that **did not happen**.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>🏗️ The "Past Fantasy" Formula</h5>
    <p><strong>If + Past Perfect (had + V3), + WOULD HAVE + Past Participle (V3)</strong></p>
    <ul>
      <li>😔 "If I <strong>had studied</strong> harder, I <strong>would have passed</strong>." (I didn't study, I didn't pass).</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #EF4444;">
    <h5>🏛️ Scenario A: Historical Regrets</h5>
    <ul>
      <li>🚢 "If the Titanic <strong>had seen</strong> the iceberg earlier, it <strong>wouldn't have sunk</strong>."</li>
      <li>📜 "If the explorer <strong>hadn't found</strong> the map, he <strong>would have got</strong> lost."</li>
      <li>🏰 "If the army <strong>had attacked</strong> at night, they <strong>would have won</strong> the battle."</li>
      <li>🧬 "If the scientist <strong>hadn't made</strong> that mistake, she <strong>wouldn't have discovered</strong> the cure."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #8B5CF6;">
    <h5>💔 Scenario B: The Missed Opportunity</h5>
    <ul>
      <li>💼 "If I <strong>had accepted</strong> that job in Tokyo, my life <strong>would have been</strong> very different."</li>
      <li>⏰ "If you <strong>had arrived</strong> five minutes earlier, you <strong>would have met</strong> the celebrity."</li>
      <li>💍 "If he <strong>had asked</strong> her to marry him, she <strong>would have said</strong> yes."</li>
      <li>🚶 "If we <strong>hadn't taken</strong> that shortcut, we <strong>wouldn't have been</strong> late."</li>
    </ul>
  </div>
</div>`,

  80: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>🚌 Time Clauses: Sequencing the Future</h4>
    <p>When talking about the future with words like *When, As soon as, Before, Until*, we use the **Present Simple** in the time clause, even if the meaning is future.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>🏗️ The Future Sequence Formula</h5>
    <p><strong>Time Word + Present Simple, + WILL + Verb</strong></p>
    <ul>
      <li>✅ "<strong>When</strong> I <strong>arrive</strong>, I <strong>will</strong> call you."</li>
      <li>❌ "When I will arrive, I will call you."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #0EA5E9;">
    <h5>🚌 Scenario A: Commuting to Work</h5>
    <ul>
      <li>🚌 "<strong>As soon as</strong> the bus <strong>arrives</strong>, I <strong>will buy</strong> a ticket."</li>
      <li>📧 "I'<strong>ll send</strong> you the files <strong>before</strong> I <strong>leave</strong> the office."</li>
      <li>☕ "We <strong>won't start</strong> the meeting <strong>until</strong> everyone <strong>is</strong> here."</li>
      <li>🚿 "I <strong>will have</strong> a shower <strong>after</strong> I <strong>finish</strong> my workout."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #F59E0B;">
    <h5>🍳 Scenario B: Following a Recipe</h5>
    <ul>
      <li>🥘 "<strong>Once</strong> the water <strong>boils</strong>, <strong>add</strong> the pasta."</li>
      <li>🥗 "<strong>While</strong> the pasta <strong>is</strong> cooking, <strong>prepare</strong> the sauce."</li>
      <li>🍞 "Don't take the bread out <strong>until</strong> it <strong>is</strong> golden brown."</li>
      <li>🍽️ "We <strong>will eat</strong> dinner <strong>as soon as</strong> your father <strong>gets</strong> home."</li>
    </ul>
  </div>
</div>`,

  81: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>🔒 B1 Clauses of Purpose: Why we do things</h4>
    <p>Explore the difference between formal and informal ways to express purpose using *So that, In case, To, For*.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>📊 The Purpose Grid</h5>
    <table class="theory-table">
      <thead><tr><th>Connector</th><th>Grammar Rule</th><th>Usage</th></tr></thead>
      <tbody>
        <tr><td><strong>To + Verb</strong></td><td>Infinitive</td><td>Standard / Casual</td></tr>
        <tr><td><strong>So that</strong></td><td>+ Subject + Modal</td><td>Result / Ability</td></tr>
        <tr><td><strong>In case</strong></td><td>+ Present Simple</td><td>Prevention / Preparation</td></tr>
        <tr><td><strong>For + Noun</strong></td><td>Nouns only</td><td>Reason for a tool</td></tr>
      </tbody>
    </table>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #6B7280;">
    <h5>🔒 Scenario A: Security Protocols</h5>
    <ul>
      <li>🛡️ "I'm locking the door <strong>in case</strong> someone tries to enter." (Preparation)</li>
      <li>💻 "We use encryption <strong>so that</strong> hackers <strong>cannot</strong> read our data." (Result)</li>
      <li>🔑 "I brought my ID <strong>to</strong> enter the building." (Standard purpose)</li>
      <li>🚧 "This fence is <strong>for</strong> security." (Noun purpose)</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #10B981;">
    <h5>🏋️ Scenario B: Fitness Regimen</h5>
    <ul>
      <li>👟 "I bought new shoes <strong>so that</strong> I <strong>can</strong> run faster."</li>
      <li>🥤 "I carry a protein shake <strong>in case</strong> I get hungry after training."</li>
      <li>🧘 "I do yoga <strong>to</strong> improve my flexibility."</li>
      <li>⏱️ "This app is <strong>for</strong> tracking my heart rate."</li>
    </ul>
  </div>
</div>`,

  82: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>🍕 Question Tags: Conversational Glue</h4>
    <p>In B1, we master tags for all tenses to keep the conversation flowing and verify information with style.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>🏗️ Tense Polarity Rules</h5>
    <ul>
      <li>✅ <strong>Present:</strong> "You work here, <strong>don't you</strong>?"</li>
      <li>⏪ <strong>Past:</strong> "She left early, <strong>didn't she</strong>?"</li>
      <li>🚀 <strong>Future:</strong> "They will help, <strong>won't they</strong>?"</li>
      <li>🔄 <strong>Perfect:</strong> "He's finished, <strong>hasn't he</strong>?"</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #3B82F6;">
    <h5>✈️ Scenario A: Confirming Flight Details</h5>
    <ul>
      <li>✈️ "The flight leaves from gate 4, <strong>doesn't it</strong>?"</li>
      <li>🧳 "You haven't checked in your bags yet, <strong>have you</strong>?"</li>
      <li>🆔 "We need our passports, <strong>don't we</strong>?"</li>
      <li>🕒 "The plane wasn't delayed, <strong>was it</strong>?"</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #F43F5E;">
    <h5>🍕 Scenario B: Social Small Talk at a Party</h5>
    <ul>
      <li>🎉 "This music is great, <strong>isn't it</strong>?"</li>
      <li>🍹 "You've met Sarah before, <strong>haven't you</strong>?"</li>
      <li>🕺 "He can dance really well, <strong>can't he</strong>?"</li>
      <li>🏠 "You don't live near here, <strong>do you</strong>?"</li>
    </ul>
  </div>
</div>`,

  83: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>📦 Modals of Deduction (Present): Logic & Guesses</h4>
    <p>How to use logic to guess what is happening **NOW**. It's all about how sure you are.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>📊 The Certainty Scale</h5>
    <ul>
      <li>✅ 95% Sure (+): <strong>Must</strong> ("He must be home").</li>
      <li>🤷 50% Sure: <strong>Might / May / Could</strong> ("It might be true").</li>
      <li>❌ 95% Sure (-): <strong>Can't</strong> ("It can't be him").</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #8B5CF6;">
    <h5>📦 Scenario A: The Mystery Package</h5>
    <ul>
      <li>📦 "It's very heavy. It <strong>must be</strong> a new computer."</li>
      <li>🤔 "There is no name on it. It <strong>might be</strong> a gift from a secret friend."</li>
      <li>📬 "It's Sunday. It <strong>can't be</strong> the mailman delivering it."</li>
      <li>🎁 "Wait, it's making a sound! It <strong>could be</strong> a clock."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #FBBF24;">
    <h5>🕵️ Scenario B: Guessing Someone's Job</h5>
    <ul>
      <li>🩺 "She is wearing a white coat. She <strong>must be</strong> a doctor."</li>
      <li>🎨 "He has paint on his clothes. He <strong>might be</strong> an artist."</li>
      <li>👔 "He's wearing a suit on a Saturday. He <strong>could be</strong> going to a wedding."</li>
      <li>🎾 "She's carrying a racket. She <strong>can't be</strong> a swimmer."</li>
    </ul>
  </div>
</div>`,

  84: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>🕵️ Past Modals of Deduction: The Detective's Tool</h4>
    <p>Using logic to reconstruct what happened in the **PAST**. This is essential for mystery and history.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>🏗️ The Past Deduction Formula</h5>
    <p><strong>Modal + HAVE + Past Participle (V3)</strong></p>
    <ul>
      <li>✅ "He <strong>must have seen</strong> it." (Almost certain).</li>
      <li>🤷 "She <strong>might have left</strong>." (Possible).</li>
      <li>❌ "They <strong>can't have arrived</strong>." (Impossible).</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #EF4444;">
    <h5>🔎 Scenario A: Crime Scene Investigation</h5>
    <ul>
      <li>🚨 "The window is broken. The thief <strong>must have entered</strong> through here."</li>
      <li>👣 "There are no footprints. He <strong>can't have walked</strong> on the grass."</li>
      <li>💎 "The diamond is gone. Someone <strong>might have stolen</strong> it during the party."</li>
      <li>🔦 "The guard was asleep. He <strong>could have missed</strong> the alarm."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #3B82F6;">
    <h5>🏛️ Scenario B: Archaeology & History</h5>
    <ul>
      <li>🏺 "These pots are very detailed. The culture <strong>must have been</strong> very advanced."</li>
      <li>🏹 "They <strong>can't have used</strong> metal tools, as we only found stone ones."</li>
      <li>🌋 "The city was destroyed. A volcano <strong>might have erupted</strong> suddenly."</li>
      <li>🌾 "They <strong>could have moved</strong> to the coast because of the drought."</li>
    </ul>
  </div>
</div>`,

  85: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>🤫 B1 Reported Speech Review: Gossip & News</h4>
    <p>A comprehensive review of how to report statements and questions with "Backshift" and pronoun changes.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>🔄 The Backshift Master Grid</h5>
    <table class="theory-table">
      <thead><tr><th>Direct Tense</th><th>Reported Tense</th></tr></thead>
      <tbody>
        <tr><td>Am/Is/Are</td><td>Was/Were</td></tr>
        <tr><td>Present Simple</td><td>Past Simple</td></tr>
        <tr><td>Present Continuous</td><td>Past Continuous</td></tr>
        <tr><td>Will</td><td>Would</td></tr>
        <tr><td>Can</td><td>Could</td></tr>
      </tbody>
    </table>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #8B5CF6;">
    <h5>🤫 Scenario A: Office Gossip</h5>
    <ul>
      <li>💼 "Tom said that he <strong>was looking</strong> for a new job."</li>
      <li>💔 "Sarah told me that she <strong>had broken up</strong> with her boyfriend."</li>
      <li>📈 "The boss said that our team <strong>would receive</strong> a bonus."</li>
      <li>🏢 "They told us that the office <strong>was moving</strong> to the city center."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #10B981;">
    <h5>🎙️ Scenario B: Quoting a Professional Interview</h5>
    <ul>
      <li>🌟 "The actor said that he <strong>loved</strong> working on the new film."</li>
      <li>🎥 "He told the reporter that he <strong>couldn't talk</strong> about the plot yet."</li>
      <li>🎬 "She said that she <strong>was planning</strong> to direct a movie soon."</li>
      <li>✨ "They said that the premiere <strong>would be</strong> in London."</li>
    </ul>
  </div>
</div>`,

  86: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>📊 B1 Mastery: Giving Reasons (Because of, Due to, Since)</h4>
    <p>In B1, we use more formal connectors to justify decisions and explain causes in professional contexts.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>🏗️ Connector Logic</h5>
    <ul>
      <li>💬 <strong>Because / Since / As:</strong> + Subject + Verb.</li>
      <li>📦 <strong>Because of / Due to:</strong> + Noun Phrase.</li>
      <li>🎓 <strong>Owing to the fact that:</strong> (Very formal).</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #3B82F6;">
    <h5>📊 Scenario A: Presenting Quarterly Results</h5>
    <ul>
      <li>📉 "Sales decreased <strong>due to</strong> the bad weather in December."</li>
      <li>📈 "Our profits grew <strong>because of</strong> the new marketing strategy."</li>
      <li>📊 "<strong>Since</strong> the market is unstable, we must be careful."</li>
      <li>🏢 "The office is closed <strong>owing to</strong> a technical failure."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #F59E0B;">
    <h5>🤝 Scenario B: Justifying Personal Decisions</h5>
    <ul>
      <li>🏠 "I moved to this city <strong>because of</strong> my new job."</li>
      <li>🏃 "I started running <strong>as</strong> I wanted to lose weight."</li>
      <li>🎓 "<strong>Due to</strong> my busy schedule, I can't attend the party."</li>
      <li>🌍 "She travels a lot <strong>since</strong> she works for an airline."</li>
    </ul>
  </div>
</div>`
};

topics.forEach(t => {
  if (b1ExpansionBatch3[t.id]) {
    t.theory = b1ExpansionBatch3[t.id].trim();
  }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('✅ B1 Expansion: Batch 3 (Topics 79-86) updated with ultra-premium content.');
