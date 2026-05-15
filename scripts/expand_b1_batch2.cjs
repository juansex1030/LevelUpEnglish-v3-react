const fs = require('fs');
const path = require('path');
const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const b1ExpansionBatch2 = {
  71: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>🕵️ Narrative Tenses: Storytelling Mastery</h4>
    <p>In B1, we don't just use Past Simple. We combine **Past Simple**, **Past Continuous**, and **Past Perfect** to create rich, layered stories.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>🔍 The Tense Time-Map</h5>
    <ul>
      <li>🎥 <strong>Past Continuous:</strong> The background/scene. <em>"The sun was shining..."</em></li>
      <li>💥 <strong>Past Simple:</strong> The main events. <em>"I heard a noise..."</em></li>
      <li>⏪ <strong>Past Perfect:</strong> The "Past of the Past". <em>"I had forgotten my keys."</em></li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #EF4444;">
    <h5>🕵️ Scenario A: The Robbery Investigation</h5>
    <ul>
      <li>🕵️ "When the police arrived (PS), the thief <strong>had already escaped</strong> (PP)."</li>
      <li>🔦 "The guard <strong>was sleeping</strong> (PC) because he <strong>had worked</strong> (PP) 24 hours."</li>
      <li>💎 "Someone <strong>stole</strong> (PS) the diamond while the lights <strong>were flickering</strong> (PC)."</li>
      <li>👮 "The detective <strong>realized</strong> (PS) that the suspect <strong>had lied</strong> (PP) to him."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #8B5CF6;">
    <h5>🏛️ Scenario B: Historical Context</h5>
    <ul>
      <li>🚢 "By the time the rescue ships arrived (PS), the Titanic <strong>had already sunk</strong> (PP)."</li>
      <li>⚔️ "The soldiers <strong>were retreating</strong> (PC) because they <strong>had lost</strong> (PP) many supplies."</li>
      <li>📜 "When the king died (PS), he <strong>had ruled</strong> (PP) for fifty years."</li>
    </ul>
  </div>
</div>`,

  72: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>🎩 Advanced Noun Phrases</h4>
    <p>Noun phrases allow you to describe things with extreme precision using adjectives, prepositions, and modifiers. This is essential for formal invitations and technical writing.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>🏗️ The "Description Ladder"</h5>
    <p><strong>[Determiner] + [Adjective] + [Noun] + [Prepositional Phrase]</strong></p>
    <ul>
      <li>📝 "A <strong>beautiful golden</strong> watch <strong>with a leather strap</strong>."</li>
      <li>🏙️ "A <strong>modern high-tech</strong> city <strong>near the coast</strong>."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #10B981;">
    <h5>🎩 Scenario A: A Formal Gala Invitation</h5>
    <ul>
      <li>🥂 "You are invited to a <strong>prestigious black-tie</strong> event <strong>at the Grand Palace</strong>."</li>
      <li>🎭 "Enjoy a <strong>spectacular live</strong> performance <strong>by the Royal Orchestra</strong>."</li>
      <li>🍽️ "A <strong>delicious four-course</strong> dinner <strong>with vegetarian options</strong> will be served."</li>
      <li>💎 "Don't miss the <strong>rare historical</strong> jewelry exhibition <strong>in the East Wing</strong>."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #6B7280;">
    <h5>⚙️ Scenario B: Technical Specifications</h5>
    <ul>
      <li>📱 "This is a <strong>next-generation portable</strong> device <strong>with 5G connectivity</strong>."</li>
      <li>🔋 "It features a <strong>long-lasting rechargeable</strong> battery <strong>of 5000mAh</strong>."</li>
      <li>💻 "A <strong>super-slim aluminum</strong> body <strong>available in three colors</strong>."</li>
      <li>🛡️ "Includes a <strong>shock-resistant protective</strong> case <strong>made of recycled plastic</strong>."</li>
    </ul>
  </div>
</div>`,

  73: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>✈️ Future Forms Master Review</h4>
    <p>B1 students must choose the future form based on <strong>Certainty</strong> and <strong>Arrangement</strong>.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>📊 The Certainty Pyramid</h5>
    <table class="theory-table">
      <thead><tr><th>Certainty</th><th>Form</th><th>Context</th></tr></thead>
      <tbody>
        <tr><td>100% (Fixed)</td><td>Present Continuous</td><td>Arrangements (Time/Place set)</td></tr>
        <tr><td>80% (Planned)</td><td>Be Going To</td><td>Personal intentions</td></tr>
        <tr><td>50% (Prediction)</td><td>Will</td><td>Opinions / Spontaneous decisions</td></tr>
        <tr><td>🗓️ Timetable</td><td>Present Simple</td><td>Schedules (Trains, Flights)</td></tr>
      </tbody>
    </table>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #0EA5E9;">
    <h5>✈️ Scenario A: Scheduling a Business Trip</h5>
    <ul>
      <li>🗓️ "My flight <strong>leaves</strong> at 6 AM tomorrow." (Timetable - PS)</li>
      <li>🤝 "I <strong>am meeting</strong> the CEO at 10 AM in London." (Arrangement - PC)</li>
      <li>🏨 "I <strong>am going to stay</strong> at the Hilton for three nights." (Intention - Going to)</li>
      <li>🚕 "Don't worry, I'<strong>ll call</strong> a taxi when I arrive." (Spontaneous - Will)</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #F59E0B;">
    <h5>🗳️ Scenario B: Election Predictions</h5>
    <ul>
      <li>🗳️ "I think the Green Party <strong>will win</strong> the election." (Opinion - Will)</li>
      <li>📉 "Look at the polls! They <strong>are going to lose</strong> seats." (Evidence - Going to)</li>
      <li>📺 "The results <strong>come out</strong> at midnight." (Timetable - PS)</li>
      <li>🗣️ "The candidate <strong>is giving</strong> a speech tonight." (Arrangement - PC)</li>
    </ul>
  </div>
</div>`,

  74: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>🍫 Passives Review: The Life of a Product</h4>
    <p>Passive voice is essential for describing processes where the creator is less important than the creation.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>🏗️ Mixed Tense Passives</h5>
    <ul>
      <li>📦 <strong>Present Simple:</strong> "Coffee <strong>is grown</strong>." (Fact)</li>
      <li>⏪ <strong>Past Simple:</strong> "The wheel <strong>was invented</strong>." (History)</li>
      <li>🚀 <strong>Future Simple:</strong> "New laws <strong>will be passed</strong>." (Prediction)</li>
      <li>🔄 <strong>Present Perfect:</strong> "The bridge <strong>has been built</strong>." (Result)</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #8B5CF6;">
    <h5>🍫 Scenario A: The Origin of Chocolate</h5>
    <ul>
      <li>🌳 "Cocoa beans <strong>are harvested</strong> by hand in tropical regions."</li>
      <li>🚢 "Then, they <strong>are shipped</strong> to factories across Europe."</li>
      <li>🏺 "Chocolate <strong>was first discovered</strong> by ancient civilizations."</li>
      <li>🍬 "Millions of bars <strong>have been sold</strong> since the factory opened."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #3B82F6;">
    <h5>📱 Scenario B: Building a Smartphone</h5>
    <ul>
      <li>🔬 "The screen <strong>is tested</strong> for scratches by a robot."</li>
      <li>🔋 "A lithium battery <strong>is inserted</strong> into the aluminum body."</li>
      <li>📦 "The final product <strong>is packed</strong> in a recycled box."</li>
      <li>✈️ "The devices <strong>will be delivered</strong> to stores next week."</li>
    </ul>
  </div>
</div>`,

  75: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>🏃 Purpose Clauses: In order to / So that</h4>
    <p>In B1, we use these to explain <strong>motivation</strong> and <strong>goals</strong> with higher precision than just saying "for".</p>
  </div>

  <div class="visual-card card-structure">
    <h5>🏗️ Goal Formulas</h5>
    <ul>
      <li>🎯 <strong>In order to + Verb:</strong> "I study <strong>in order to pass</strong>."</li>
      <li>🎯 <strong>So that + Subject + Modal:</strong> "I study <strong>so that I can pass</strong>."</li>
      <li>🚫 <strong>In order not to:</strong> (Negative purpose).</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #10B981;">
    <h5>🏃 Scenario A: Training for a Marathon</h5>
    <ul>
      <li>🥦 "I eat healthy <strong>in order to have</strong> enough energy for the race."</li>
      <li>⏰ "I wake up early <strong>so that I can run</strong> before work."</li>
      <li>👟 "I bought professional shoes <strong>in order not to injure</strong> my knees."</li>
      <li>💧 "I drink water constantly <strong>so that I don't get</strong> dehydrated."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #F43F5E;">
    <h5>🌿 Scenario B: Eco-Friendly Living</h5>
    <ul>
      <li>♻️ "We recycle <strong>in order to reduce</strong> our impact on the planet."</li>
      <li>🚲 "I cycle to work <strong>so that I can save</strong> money on fuel."</li>
      <li>💡 "We turn off the lights <strong>in order not to waste</strong> electricity."</li>
      <li>🧺 "She uses reusable bags <strong>so that she doesn't use</strong> plastic."</li>
    </ul>
  </div>
</div>`,

  76: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>📞 Verbs with Prepositions (Advanced Flow)</h4>
    <p>Verbs in English are "married" to specific prepositions. Mastering these pairs is the difference between an A2 and a B1 speaker.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>🔗 The Verb-Preposition Pairs</h5>
    <table class="theory-table">
      <thead><tr><th>Verb</th><th>Preposition</th><th>Context</th></tr></thead>
      <tbody>
        <tr><td><strong>Complain</strong></td><td>About</td><td>Problems</td></tr>
        <tr><td><strong>Succeed</strong></td><td>In</td><td>Achievements</td></tr>
        <tr><td><strong>Apologize</strong></td><td>For</td><td>Mistakes</td></tr>
        <tr><td><strong>Agree</strong></td><td>With / On</td><td>Opinions / Dates</td></tr>
      </tbody>
    </table>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #EF4444;">
    <h5>📞 Scenario A: Complaining to Customer Support</h5>
    <ul>
      <li>😠 "I'd like to <strong>complain about</strong> the quality of the service."</li>
      <li>🙇 "We <strong>apologize for</strong> the delay in your delivery."</li>
      <li>⏳ "I am <strong>waiting for</strong> an answer since Monday."</li>
      <li>🤝 "I don't <strong>agree with</strong> your refund policy."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #10B981;">
    <h5>🏆 Scenario B: Talking about Achievements</h5>
    <ul>
      <li>🥇 "She <strong>succeeded in</strong> passing the exam with honors."</li>
      <li>🎓 "I am <strong>thinking of</strong> applying for a master's degree."</li>
      <li>🌟 "He <strong>dreams of</strong> becoming a famous scientist one day."</li>
      <li>🤝 "We finally <strong>agreed on</strong> a date for the wedding."</li>
    </ul>
  </div>
</div>`,

  77: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>🚀 Future Perfect: Looking Back from the Future</h4>
    <p>Use the Future Perfect to talk about an action that will be <strong>completed</strong> at a certain point in the future. It's the "Past of the Future".</p>
  </div>

  <div class="visual-card card-structure">
    <h5>🏗️ The Completion Formula</h5>
    <p><strong>WILL + HAVE + Past Participle (V3)</strong></p>
    <ul>
      <li>🏁 "By 2030, I <strong>will have finished</strong> my degree."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #8B5CF6;">
    <h5>👴 Scenario A: Retirement Planning</h5>
    <ul>
      <li>💰 "By the time I retire, I <strong>will have saved</strong> $500,000."</li>
      <li>🌍 "I <strong>will have traveled</strong> to every continent by my 60th birthday."</li>
      <li>🏠 "We <strong>will have lived</strong> in this house for 30 years by next June."</li>
      <li>📚 "I <strong>will have read</strong> all the classics before I turn 70."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #3B82F6;">
    <h5>🚀 Scenario B: Space Colonization Goals</h5>
    <ul>
      <li>🌕 "By 2040, humans <strong>will have built</strong> a base on the Moon."</li>
      <li>🚀 "Spacecraft <strong>will have landed</strong> on Mars multiple times."</li>
      <li>🛰️ "Scientists <strong>will have discovered</strong> new planets in other galaxies."</li>
      <li>💻 "Technology <strong>will have advanced</strong> beyond our imagination."</li>
    </ul>
  </div>
</div>`,

  78: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>🛠️ The Causative: Have/Get Something Done</h4>
    <p>Use this when you **pay someone else** to do a task for you. You are the "cause" of the action, but not the "doer".</p>
  </div>

  <div class="visual-card card-structure">
    <h5>🏗️ The "Service" Formula</h5>
    <p><strong>HAVE / GET + Object + Past Participle (V3)</strong></p>
    <ul>
      <li>💇 "I <strong>had my hair cut</strong>." (The barber did it).</li>
      <li>🚗 "I <strong>got my car repaired</strong>." (The mechanic did it).</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #6B7280;">
    <h5>🚗 Scenario A: At the Car Service Center</h5>
    <ul>
      <li>🔧 "I need to <strong>have the oil changed</strong> today."</li>
      <li>🛑 "I'm going to <strong>get the brakes checked</strong> before our trip."</li>
      <li>🧼 "He <strong>had his car washed</strong> and waxed."</li>
      <li>🛠️ "We <strong>got the engine repaired</strong> after the breakdown."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #F59E0B;">
    <h5>🏠 Scenario B: Home Renovation</h5>
    <ul>
      <li>🎨 "We are <strong>having the house painted</strong> next week."</li>
      <li>🛁 "They <strong>got a new bathtub installed</strong> in the bathroom."</li>
      <li>🌳 "I <strong>had the trees trimmed</strong> in the garden."</li>
      <li>🏘️ "She <strong>gets the windows cleaned</strong> every month."</li>
    </ul>
  </div>
</div>`
};

topics.forEach(t => {
  if (b1ExpansionBatch2[t.id]) {
    t.theory = b1ExpansionBatch2[t.id].trim();
  }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('✅ B1 Expansion: Batch 2 (Topics 71-78) updated with ultra-premium content.');
