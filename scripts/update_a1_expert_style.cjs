const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '../backend/data/topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const topic1Content = `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #6366F1;">
    <h4>👋 Greetings & Farewells: The Social Foundation</h4>
    <p>Greetings depend on "Social Register." Use formal phrases like "Good morning" (until 12 PM) or "Good afternoon" for strangers and bosses. For friends, use casual ones like "What's up?". Remember: "Good night" is only for leaving or going to bed, never for arriving. Respond to "How are you?" with a brief "I'm well, thanks" to keep conversations smooth and professional.</p>
  </div>

  <div class="visual-card card-examples">
    <h5>🎨 Visual & Engaging Examples</h5>
    <ul class="premium-list">
      <li>📝 <strong>Good morning, everyone!</strong> &rarr; 🌅 [A teacher arriving at school].</li>
      <li>📝 <strong>Hey! What's up?</strong> &rarr; ☕ [Meeting a close friend at a café].</li>
      <li>📝 <strong>It is a pleasure to meet you.</strong> &rarr; 🤝 [Shaking hands at a job interview].</li>
      <li>📝 <strong>Goodnight, see you tomorrow.</strong> &rarr; 🌙 [Leaving the office late at night].</li>
      <li>📝 <strong>Take care!</strong> &rarr; 👋 [A friendly goodbye at the end of a call].</li>
    </ul>
  </div>

  <div class="visual-card card-logic" style="background: rgba(99, 102, 241, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>Scenario A: The Job Interview</strong></p>
    <ul>
      <li><em>Candidate:</em> "Good morning, Mr. Smith. It is a pleasure to meet you."</li>
      <li><em>Interviewer:</em> "Good morning. Please, have a seat."</li>
    </ul>
    <p><strong>Scenario B: The Airport Security</strong></p>
    <ul>
      <li><em>Officer:</em> "Good afternoon, sir. Passport, please."</li>
      <li><em>Traveler:</em> "Here it is. Good afternoon."</li>
    </ul>
    <p><strong>Scenario C: A Casual Party</strong></p>
    <ul>
      <li><em>Friend 1:</em> "Hey, Sarah! What's up?"</li>
      <li><em>Friend 2:</em> "Not much, just enjoying the music. How's it going?"</li>
    </ul>
  </div>
</div>`;

const topic2Content = `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #10B981;">
    <h4>🆔 Personal Introduction: Building Your Identity</h4>
    <p>Introductions follow the "Subject + Verb To Be + Information" formula. A vital rule: in English, you <strong>are</strong> your age (I am 25), you don't "have" it. Use "I am from" for locations and "I am" for nationalities. Use formal "My name is" for business and casual "I'm" for friends. These simple structures ensure you introduce yourself accurately in any situation.</p>
  </div>

  <div class="visual-card card-examples">
    <h5>🎨 Visual & Engaging Examples</h5>
    <ul class="premium-list">
      <li>📝 <strong>My name is Alexander Great.</strong> &rarr; 🆔 [Presenting an ID card].</li>
      <li>📝 <strong>I am 25 years old.</strong> &rarr; 🎂 [Celebrating a birthday].</li>
      <li>📝 <strong>I'm from Tokyo, Japan.</strong> &rarr; 🌏 [Pointing to a map].</li>
      <li>📝 <strong>This is my friend, Maria.</strong> &rarr; 👈 [Introducing a colleague].</li>
      <li>📝 <strong>I am a software engineer.</strong> &rarr; 💻 [Stating a profession].</li>
    </ul>
  </div>

  <div class="visual-card card-logic" style="background: rgba(16, 185, 129, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>Scenario A: First Day of Class</strong></p>
    <ul>
      <li><em>Student:</em> "Hi everyone! I'm Carlos, I'm from Spain, and I'm a student here."</li>
      <li><em>Teacher:</em> "Welcome, Carlos! Nice to meet you."</li>
    </ul>
    <p><strong>Scenario B: A Networking Event</strong></p>
    <ul>
      <li><em>Professional:</em> "Hello, my name is Linda. I am the marketing manager for LevelUp."</li>
      <li><em>Guest:</em> "It's a pleasure to meet you, Linda. I'm Mark."</li>
    </ul>
    <p><strong>Scenario C: Meeting a Neighbor</strong></p>
    <ul>
      <li><em>Neighbor:</em> "Hi! I'm your new neighbor, Jessica."</li>
      <li><em>You:</em> "Oh, hi Jessica! I am David. Welcome to the building."</li>
    </ul>
  </div>
</div>`;

topics.forEach(t => {
  if (t.id === 1) t.theory = topic1Content.trim();
  if (t.id === 2) t.theory = topic2Content.trim();
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('✅ Topics 1 & 2 updated with Concise Expert ESL content.');
