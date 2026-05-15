const fs = require('fs');
const path = require('path');
const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const b1ExpansionBatch1 = {
  63: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>🔗 B1 Mastery: Relative Pronouns (Who, Which, That, Whose)</h4>
    <p>In B1, we don't just use relative pronouns to connect sentences; we use them to <strong>define and identify</strong> specifically what or who we are talking about in complex contexts.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>🏗️ Defining vs. Non-Defining Clauses</h5>
    <table class="theory-table">
      <thead><tr><th>Type</th><th>Usage</th><th>Punctuation</th></tr></thead>
      <tbody>
        <tr><td><strong>Defining</strong></td><td>Essential info to identify the subject.</td><td>No commas.</td></tr>
        <tr><td><strong>Non-Defining</strong></td><td>Extra info (nice to have).</td><td>Uses commas.</td></tr>
      </tbody>
    </table>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #6366F1;">
    <h5>🏢 Scenario A: Working in a Global Office</h5>
    <ul>
      <li>👤 "The manager <strong>who</strong> leads the marketing team is from Berlin." (Defining)</li>
      <li>📂 "This report, <strong>which</strong> took three weeks to complete, is finally ready." (Non-defining)</li>
      <li>💻 "The IT guy <strong>whose</strong> computer was stolen yesterday is very upset." (Possession)</li>
      <li>💼 "I need a job <strong>that</strong> allows me to work from home." (Defining)</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #F59E0B;">
    <h5>🕵️ Scenario B: Identifying a Suspect</h5>
    <ul>
      <li>👮 "The man <strong>who</strong> was wearing the mask escaped through the back."</li>
      <li>🚗 "The car, <strong>which</strong> was a silver sedan, disappeared in seconds."</li>
      <li>🏪 "This is the shop <strong>where</strong> the incident happened."</li>
      <li>🧔 "The person <strong>whose</strong> photo you showed me is my neighbor."</li>
    </ul>
  </div>

  <div class="visual-card card-warning">
    <h5>⚠️ That vs. Which</h5>
    <p>In <strong>Non-Defining</strong> clauses (with commas), you MUST use <strong>Which</strong>. Never use "that". <br>❌ "The house, that was built in 1900..." <br>✅ "The house, <strong>which</strong> was built in 1900..."</p>
  </div>
</div>`,

  64: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>🧘 Gerund Phrases as Subjects</h4>
    <p>In B1, we learn to use actions as <strong>abstract nouns</strong>. This is common in formal writing, philosophy, and discussing lifestyle benefits.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>🏗️ The Abstract Subject Formula</h5>
    <p><strong>[Verb-ing + Complement] + IS / MAKES / REQUIRES + Result</strong></p>
    <ul>
      <li>🍎 "<strong>Eating healthy</strong> is essential."</li>
      <li>🧘 "<strong>Meditating every day</strong> makes you calmer."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #10B981;">
    <h5>🏃 Scenario A: Health & Lifestyle Benefits</h5>
    <ul>
      <li>💤 "<strong>Getting eight hours of sleep</strong> improves your memory significantly."</li>
      <li>🥗 "<strong>Avoiding processed sugar</strong> is the first step to weight loss."</li>
      <li>🚶 "<strong>Walking in nature</strong> helps people reduce stress levels."</li>
      <li>🚴 "<strong>Cycling to work</strong> instead of driving saves a lot of money."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #8B5CF6;">
    <h5>📖 Scenario B: Philosophy & Life Lessons</h5>
    <ul>
      <li>🌍 "<strong>Traveling the world</strong> broadens your perspective on life."</li>
      <li>🗣️ "<strong>Learning a new language</strong> is like gaining a second soul."</li>
      <li>🤝 "<strong>Helping others</strong> provides a deep sense of fulfillment."</li>
      <li>⏳ "<strong>Waiting for the perfect moment</strong> often results in doing nothing."</li>
    </ul>
  </div>

  <div class="visual-card card-warning">
    <h5>⚠️ Singular Verb Agreement</h5>
    <p>Even if the complement is plural, the Gerund Phrase is always <strong>SINGULAR</strong>. <br>✅ "<strong>Reading books</strong> IS fun." <br>❌ "Reading books ARE fun."</p>
  </div>
</div>`,

  65: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>👔 B1 Deep Dive: Gerunds and Infinitives</h4>
    <p>This is the most common B1 hurdle. We move beyond simple "want to" and explore verbs that change meaning depending on the form.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>🔄 The "Meaning Shifters"</h5>
    <table class="theory-table">
      <thead><tr><th>Verb</th><th>+ Gerund (-ing)</th><th>+ Infinitive (to...)</th></tr></thead>
      <tbody>
        <tr><td><strong>Stop</strong></td><td>Stop an action.</td><td>Stop to do something else.</td></tr>
        <tr><td><strong>Remember</strong></td><td>Recall a past memory.</td><td>Remember a duty/task.</td></tr>
        <tr><td><strong>Forget</strong></td><td>A memory is gone.</td><td>Forgot to do a task.</td></tr>
      </tbody>
    </table>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #F43F5E;">
    <h5>👔 Scenario A: Job Interview & Productivity</h5>
    <ul>
      <li>📈 "I <strong>plan to increase</strong> the sales by 20% next year."</li>
      <li>💻 "I <strong>remember installing</strong> that software last month." (Memory)</li>
      <li>📋 "Please <strong>remember to install</strong> the update tonight." (Duty)</li>
      <li>🤝 "I <strong>enjoy working</strong> in diverse environments."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #3B82F6;">
    <h5>🎨 Scenario B: New Creative Projects</h5>
    <ul>
      <li>🎨 "She <strong>stopped painting</strong> because she was tired." (She quit)</li>
      <li>🌳 "She <strong>stopped to paint</strong> the landscape." (She stopped her walk to start painting)</li>
      <li>📸 "I'll never <strong>forget visiting</strong> the Louvre in Paris." (Memory)</li>
      <li>🎸 "I <strong>decided to start</strong> playing the electric guitar."</li>
    </ul>
  </div>
</div>`,

  66: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>🏨 Describing Problems 1: Hotel & Travel</h4>
    <p>Learn to describe malfunctions and problems with precision. In B1, we use specific vocabulary for different types of failures.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>🔧 Vocabulary of Malfunction</h5>
    <ul>
      <li>💧 <strong>Leaking:</strong> Water coming out. (A leaking pipe).</li>
      <li>🦟 <strong>Infested:</strong> Full of insects. (An infested room).</li>
      <li>💨 <strong>Drafty:</strong> Cold air coming in. (A drafty window).</li>
      <li>🚽 <strong>Clogged:</strong> Blocked. (A clogged toilet).</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #F59E0B;">
    <h5>🏨 Scenario A: Complaining at the Reception</h5>
    <ul>
      <li>🚿 "The shower in room 302 is <strong>leaking</strong> all over the floor."</li>
      <li>❄️ "The air conditioning is <strong>making a loud noise</strong> and won't turn off."</li>
      <li>🚽 "I'm sorry, but the toilet is <strong>clogged</strong>. Can someone fix it?"</li>
      <li>🛌 "The sheets are <strong>stained</strong>, and the room is quite <strong>drafty</strong>."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #EF4444;">
    <h5>💻 Scenario B: Software & App Errors</h5>
    <ul>
      <li>📱 "The app keeps <strong>crashing</strong> every time I open the gallery."</li>
      <li>⏳ "The website is <strong>loading very slowly</strong> today."</li>
      <li>💾 "My files are <strong>corrupted</strong> and I can't open them."</li>
      <li>🔋 "The software is <strong>draining</strong> my battery too fast."</li>
    </ul>
  </div>
</div>`,

  67: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>🚗 Describing Problems 2: Maintenance & Repairs</h4>
    <p>How to describe physical damage and technical issues in houses and vehicles.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>🛠️ Damage Vocabulary</h5>
    <table class="theory-table">
      <thead><tr><th>Problem</th><th>Context</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td><strong>Dented</strong></td><td>Metal/Car body</td><td>"The door is <strong>dented</strong>."</td></tr>
        <tr><td><strong>Scratched</strong></td><td>Surfaces</td><td>"The screen is <strong>scratched</strong>."</td></tr>
        <tr><td><strong>Flickering</strong></td><td>Lights</td><td>"The bulb is <strong>flickering</strong>."</td></tr>
        <tr><td><strong>Squeaking</strong></td><td>Doors/Brakes</td><td>"The brakes are <strong>squeaking</strong>."</td></tr>
      </tbody>
    </table>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #6B7280;">
    <h5>🚗 Scenario A: At the Mechanic</h5>
    <ul>
      <li>🚗 "My car's front bumper is <strong>dented</strong> from the accident."</li>
      <li>💨 "The engine is <strong>overheating</strong> after 20 minutes of driving."</li>
      <li>🛑 "The brakes are <strong>squeaking</strong> every time I stop."</li>
      <li>🚜 "The tires are <strong>worn out</strong> and need replacing."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #FBBF24;">
    <h5>🏠 Scenario B: Home Maintenance Issues</h5>
    <ul>
      <li>💡 "The lights in the hallway are <strong>flickering</strong> constantly."</li>
      <li>🏚️ "The wall is <strong>cracked</strong> and needs some plaster."</li>
      <li>🚪 "The front door is <strong>stuck</strong>; I can't open it from the outside."</li>
      <li>🚰 "There is <strong>no hot water</strong> in the kitchen."</li>
    </ul>
  </div>
</div>`,

  68: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>📞 B1 Reported Speech: Indirect Requests</h4>
    <p>Reporting what someone asked you to do. We use the <strong>ASK + Object + TO + Verb</strong> structure.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>🏗️ The Request Reporting Formula</h5>
    <p>Direct: "Please, can you help me?" → Reported: "She <strong>asked me to help</strong> her."</p>
    <ul>
      <li>✅ Positive: <strong>Asked + to + verb</strong></li>
      <li>❌ Negative: <strong>Asked + NOT to + verb</strong></li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #0EA5E9;">
    <h5>📞 Scenario A: Office Messages</h5>
    <ul>
      <li>💼 "My boss <strong>asked me to finish</strong> the report by Friday."</li>
      <li>📂 "The client <strong>asked us to send</strong> more samples."</li>
      <li>🤝 "The manager <strong>asked the team not to be</strong> late for the meeting."</li>
      <li>☕ "She <strong>asked him to bring</strong> her a coffee."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #8B5CF6;">
    <h5>📩 Scenario B: Client Requests</h5>
    <ul>
      <li>🏨 "The guest <strong>asked the hotel to change</strong> his room."</li>
      <li>🍽️ "The customer <strong>asked the waiter to bring</strong> the bill."</li>
      <li>🚗 "I <strong>asked the driver to slow down</strong>."</li>
      <li>📦 "She <strong>asked the delivery guy to leave</strong> the package at the door."</li>
    </ul>
  </div>
</div>`,

  69: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>🎖️ B1 Reported Speech: Indirect Commands</h4>
    <p>Reporting direct orders. We use <strong>TELL + Object + TO + Verb</strong>. This is stronger than a request.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>🏗️ The Command Reporting Formula</h5>
    <p>Direct: "Stop!" → Reported: "He <strong>told me to stop</strong>."</p>
    <ul>
      <li>✅ Positive: <strong>Told + to + verb</strong></li>
      <li>❌ Negative: <strong>Told + NOT to + verb</strong></li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #EF4444;">
    <h5>🎖️ Scenario A: Military Training</h5>
    <ul>
      <li>🪖 "The sergeant <strong>told the soldiers to run</strong> ten miles."</li>
      <li>🚫 "He <strong>told them not to stop</strong> until they finished."</li>
      <li>🔫 "The officer <strong>told us to clean</strong> our equipment."</li>
      <li>⛺ "He <strong>told the recruits to sleep</strong> in their tents."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #374151;">
    <h5>👮 Scenario B: Police Instructions</h5>
    <ul>
      <li>✋ "The officer <strong>told the driver to get out</strong> of the car."</li>
      <li>✋ "She <strong>told him not to move</strong> his hands."</li>
      <li>🆔 "He <strong>told me to show</strong> him my identification."</li>
      <li>🚧 "The police <strong>told the people to stay</strong> behind the line."</li>
    </ul>
  </div>
</div>`,

  70: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>💰 B1 Quantifiers: Advanced Comparison</h4>
    <p>Using <em>Less, Fewer, More, Enough</em> to discuss complex quantities like money, resources, and statistics.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>⚖️ Countable vs. Uncountable Rules</h5>
    <table class="theory-table">
      <thead><tr><th>Quantity</th><th>Countable (Cars)</th><th>Uncountable (Money)</th></tr></thead>
      <tbody>
        <tr><td>➕ Increase</td><td><strong>More</strong></td><td><strong>More</strong></td></tr>
        <tr><td>➖ Decrease</td><td><strong>Fewer</strong></td><td><strong>Less</strong></td></tr>
        <tr><td>✅ Sufficient</td><td><strong>Enough</strong></td><td><strong>Enough</strong></td></tr>
      </tbody>
    </table>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #10B981;">
    <h5>💰 Scenario A: Financial Investments</h5>
    <ul>
      <li>📈 "We need <strong>more</strong> investors to expand the business."</li>
      <li>📉 "We have <strong>less</strong> capital than last year."</li>
      <li>🏢 "There are <strong>fewer</strong> empty offices in the building now."</li>
      <li>💳 "Do we have <strong>enough</strong> money to pay the taxes?"</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #3B82F6;">
    <h5>🌍 Scenario B: Global Resources</h5>
    <ul>
      <li>🚰 "Many countries have <strong>less</strong> water than they need."</li>
      <li>🌳 "There are <strong>fewer</strong> forests today than fifty years ago."</li>
      <li>🔋 "We must use <strong>more</strong> renewable energy."</li>
      <li>🌾 "Is there <strong>enough</strong> food for the growing population?"</li>
    </ul>
  </div>

  <div class="visual-card card-warning">
    <h5>⚠️ Less vs. Fewer</h5>
    <p>This is a common error! <br>✅ "<strong>Fewer</strong> people" (Countable). <br>✅ "<strong>Less</strong> time" (Uncountable). <br>❌ "Less people".</p>
  </div>
</div>`
};

topics.forEach(t => {
  if (b1ExpansionBatch1[t.id]) {
    t.theory = b1ExpansionBatch1[t.id].trim();
  }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('✅ B1 Expansion: Batch 1 (Topics 63-70) updated with ultra-premium content.');
