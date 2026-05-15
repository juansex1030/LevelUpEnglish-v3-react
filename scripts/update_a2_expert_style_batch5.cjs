const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '../backend/data/topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const batchContent = {
  52: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #F59E0B;">
    <h4>🌉 Relative Pronouns: Who, Which, That</h4>
    <p>Use relative pronouns to connect two sentences or provide more information about a person or object without starting a new sentence. Use "Who" for people, "Which" for things, and "That" for both. These words act as "bridges" in your speech, making your English sound more fluent, sophisticated, and connected.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #F59E0B; background: rgba(245, 158, 11, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Noun]</strong> + <strong>who / which / that</strong> + <strong>[Information]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 The man <strong>who</strong> lives here. &rarr; 👨🏠 [Person].</li>
      <li>📝 The car <strong>which</strong> I bought. &rarr; 🚗 [Object].</li>
      <li>📝 The dog <strong>that</strong> is barking. &rarr; 🐕🔊 [Animal/Thing].</li>
      <li>📝 People <strong>who</strong> study pass. &rarr; 📖🎓 [Group].</li>
      <li>📝 A book <strong>which</strong> is famous. &rarr; 📚🌟 [Specific item].</li>
      <li>📝 The girl <strong>that</strong> I met. &rarr; 👩🤝 [Person].</li>
      <li>📝 Movies <strong>that</strong> are funny. &rarr; 🎬😂 [Category].</li>
      <li>📝 The phone <strong>which</strong> is broken. &rarr; 📱🔨 [State].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(245, 158, 11, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Describing someone:</strong> "She is the teacher <strong>who</strong> helped me with my English exam last month."</p>
    <p><strong>2. Identifying objects:</strong> "This is the computer <strong>which</strong> has all the important company files."</p>
    <p><strong>3. Giving recommendations:</strong> "I want to see a movie <strong>that</strong> has a lot of action and a good story."</p>
  </div>
</div>`,
  53: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #10B981;">
    <h4>⚙️ Passive Voice (Present)</h4>
    <p>Use the Passive Voice when the <strong>action</strong> or the <strong>object</strong> is more important than the person performing it. Use the formula: <strong>Am/Is/Are + Past Participle</strong>. It is common in formal writing, news reports, and scientific descriptions where the focus is on the process rather than the individual.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #10B981; background: rgba(16, 185, 129, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Object]</strong> + <strong>am / is / are</strong> + <strong>[Past Participle]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 Coffee <strong>is grown</strong> in Brazil. &rarr; ☕🇧🇷 [Process].</li>
      <li>📝 The car <strong>is washed</strong>. &rarr; 🚗🚿 [Action on object].</li>
      <li>📝 Phones <strong>are sold</strong> here. &rarr; 📱🏪 [Commerce].</li>
      <li>📝 Email <strong>is sent</strong>. &rarr; 📧 [Digital process].</li>
      <li>📝 Food <strong>is served</strong> hot. &rarr; 🍱🔥 [Quality].</li>
      <li>📝 Letters <strong>are delivered</strong>. &rarr; 📬 [Service].</li>
      <li>📝 English <strong>is spoken</strong> here. &rarr; 🗣️ [Language use].</li>
      <li>📝 Songs <strong>are recorded</strong>. &rarr; 🎙️ [Creation].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(16, 185, 129, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Manufacturing:</strong> "These cars <strong>are manufactured</strong> in Japan and <strong>are exported</strong> to the USA."</p>
    <p><strong>2. Services:</strong> "Breakfast <strong>is served</strong> from 7 AM to 10 AM in the main hotel dining room."</p>
    <p><strong>3. General facts:</strong> "Millions of emails <strong>are sent</strong> every second across the entire world."</p>
  </div>
</div>`,
  54: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #3B82F6;">
    <h4>🕰️ Passive Voice (Past)</h4>
    <p>Like the present passive, the Past Passive focuses on the object of the action. Use the formula: <strong>Was/Were + Past Participle</strong>. It is the standard structure for describing historical events, reporting crimes, or explaining how products were made in the past without emphasizing the specific worker or creator.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #3B82F6; background: rgba(59, 130, 246, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Object]</strong> + <strong>was / were</strong> + <strong>[Past Participle]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 It <strong>was made</strong> in Italy. &rarr; 🇮🇹 [Origin].</li>
      <li>📝 The book <strong>was written</strong>. &rarr; 📖✍️ [Creation].</li>
      <li>📝 They <strong>were invited</strong>. &rarr; 💌 [Social action].</li>
      <li>📝 The window <strong>was broken</strong>. &rarr; 🪟🔨 [Event].</li>
      <li>📝 America <strong>was discovered</strong>. &rarr; 🗺️ [History].</li>
      <li>📝 The song <strong>was sung</strong>. &rarr; 🎤 [Performance].</li>
      <li>📝 Roads <strong>were closed</strong>. &rarr; 🚧 [Situation].</li>
      <li>📝 <strong>Were they</strong> found? &rarr; 🔎? [Question].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(59, 130, 246, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Historical fact:</strong> "The Great Pyramids <strong>were built</strong> thousands of years ago in ancient Egypt."</p>
    <p><strong>2. Reporting news:</strong> "The missing cat <strong>was found</strong> yesterday afternoon by a neighbor."</p>
    <p><strong>3. Product origin:</strong> "This antique desk <strong>was bought</strong> at an auction in London many years ago."</p>
  </div>
</div>`,
  55: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #8B5CF6;">
    <h4>🔄 Gerunds vs Infinitives</h4>
    <p>Some verbs are followed by a Gerund (<strong>-ing</strong>) and others by an Infinitive (<strong>to + verb</strong>). For example, "I enjoy swimming" vs "I want to swim." Learning these pairs is essential for advanced sentence construction. It is a common nuance that separates basic learners from intermediate speakers who can express desires and preferences accurately.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #8B5CF6; background: rgba(139, 92, 246, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Verb 1]</strong> + <strong>[Verb-ing]</strong></p>
    <p><strong>[Verb 1]</strong> + <strong>to</strong> + <strong>[Verb 2]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I enjoy <strong>reading</strong>. &rarr; 📖 [Gerund after enjoy].</li>
      <li>📝 I want <strong>to go</strong>. &rarr; 🚗 [Infinitive after want].</li>
      <li>📝 She loves <strong>dancing</strong>. &rarr; 💃 [Gerund after love].</li>
      <li>📝 We decided <strong>to stay</strong>. &rarr; 🏨 [Infinitive after decide].</li>
      <li>📝 Stop <strong>talking</strong>! &rarr; 🤐 [Gerund after stop].</li>
      <li>📝 He needs <strong>to work</strong>. &rarr; 💼 [Infinitive after need].</li>
      <li>📝 They finished <strong>painting</strong>. &rarr; 🎨 [Gerund after finish].</li>
      <li>📝 I hope <strong>to see</strong> you. &rarr; 👋 [Infinitive after hope].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(139, 92, 246, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Expressing desires:</strong> "I <strong>want to travel</strong> to Japan next year to see the cherry blossoms."</p>
    <p><strong>2. Talking about hobbies:</strong> "She <strong>enjoys playing</strong> the piano during her free time in the afternoon."</p>
    <p><strong>3. Making decisions:</strong> "We <strong>decided to buy</strong> a new car because the old one was too expensive to fix."</p>
  </div>
</div>`,
  56: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #EC4899;">
    <h4>🗝️ Phrasal Verbs: Introduction</h4>
    <p>Phrasal verbs consist of a verb plus a particle (e.g., look for, turn off, get up). The particle often changes the meaning of the original verb completely. These are the "idiomatic keys" of natural English; native speakers use them constantly in daily conversation. Mastering basic phrasal verbs is the fastest way to sound more authentic.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #EC4899; background: rgba(236, 72, 153, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Verb]</strong> + <strong>[Preposition / Adverb]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 <strong>Get up</strong>. &rarr; 🛌⬆️ [Wake up/Stand up].</li>
      <li>📝 <strong>Turn off</strong> the light. &rarr; 💡🚫 [Deactivate].</li>
      <li>📝 <strong>Look for</strong> my keys. &rarr; 🔎 [Search].</li>
      <li>📝 <strong>Sit down</strong>. &rarr; 🪑 [Action].</li>
      <li>📝 <strong>Take off</strong> your coat. &rarr; 🧥 [Remove].</li>
      <li>📝 <strong>Put on</strong> your shoes. &rarr; 👟 [Wear].</li>
      <li>📝 <strong>Go on</strong>! &rarr; 🚀 [Continue].</li>
      <li>📝 <strong>Give up</strong>. &rarr; 🏳️ [Stop trying].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(236, 72, 153, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Daily routine:</strong> "I usually <strong>get up</strong> at 7 AM and <strong>turn on</strong> the coffee machine immediately."</p>
    <p><strong>2. In the classroom:</strong> "Please <strong>turn off</strong> your phones and <strong>look at</strong> the whiteboard for the lesson."</p>
    <p><strong>3. Shopping:</strong> "Can I <strong>try on</strong> this shirt? Sure, the dressing room is over there."</p>
  </div>
</div>`
};

topics.forEach(t => {
  if (batchContent[t.id]) {
    t.theory = batchContent[t.id].trim();
  }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('✅ A2 Topics 52-56 updated successfully.');
