const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '../backend/data/topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const batchContent = {
  11: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #10B981;">
    <h4>🏠 Possessives: My, Your, His, Her...</h4>
    <p>Possessive adjectives show ownership. Crucially, they always come <strong>before</strong> a noun. In English, "His" and "Her" depend on the <strong>owner</strong>, not the object. "His car" means the car belongs to a man, while "Her car" belongs to a woman. Master these to clearly identify relationships and belongings in any dialogue.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 <strong>My</strong> phone is new. &rarr; 📱 [Possession].</li>
      <li>📝 <strong>His</strong> name is John. &rarr; 👨 [Owner is male].</li>
      <li>📝 <strong>Her</strong> eyes are blue. &rarr; 👁️ [Owner is female].</li>
      <li>📝 <strong>Our</strong> house is big. &rarr; 🏠 [Shared ownership].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(16, 185, 129, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Introducing family:</strong> "This is <strong>my</strong> wife and <strong>our</strong> children."</p>
    <p><strong>2. Finding a lost item:</strong> "Is this <strong>your</strong> wallet? I found it on the floor."</p>
    <p><strong>3. Talking about a celebrity:</strong> "<strong>His</strong> movies are very famous all over the world."</p>
  </div>
</div>`,
  12: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #3B82F6;">
    <h4>💎 Verb To Have (Affirmative)</h4>
    <p>The verb "To Have" expresses possession, relationships, and characteristics. It has two forms: <strong>Have</strong> (for I, You, We, They) and <strong>Has</strong> (for He, She, It). It is one of the most common verbs in English. Use it to talk about your family, your belongings, or even physical traits like hair color or height.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I <strong>have</strong> a cat. &rarr; 🐱 [Possession].</li>
      <li>📝 She <strong>has</strong> a brother. &rarr; 👦 [Relationship].</li>
      <li>📝 He <strong>has</strong> brown hair. &rarr; 👨‍🦱 [Characteristic].</li>
      <li>📝 They <strong>have</strong> a car. &rarr; 🚗 [Ownership].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(59, 130, 246, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Describing a pet:</strong> "I <strong>have</strong> a small dog named Rocky."</p>
    <p><strong>2. Talking about your phone:</strong> "My phone <strong>has</strong> a very good camera."</p>
    <p><strong>3. Listing ingredients:</strong> "We <strong>have</strong> flour, but we don't <strong>have</strong> eggs."</p>
  </div>
</div>`,
  13: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #EF4444;">
    <h4>❓ Verb To Have (Negatives & Questions)</h4>
    <p>To make negatives and questions with "Have," you MUST use the auxiliary verb <strong>Do/Does</strong>. Say "I don't have" or "Does he have?". A common mistake is saying "I haven't" or "Has he?". Using the auxiliary is the standard way to ask for things or deny possession in both formal and casual English conversations.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I <strong>don't have</strong> time. &rarr; ⏰ [Negative].</li>
      <li>📝 <strong>Do you have</strong> a pen? &rarr; 🖊️ [Question].</li>
      <li>📝 <strong>Does she have</strong> a key? &rarr; 🔑 [Third person question].</li>
      <li>📝 We <strong>don't have</strong> money. &rarr; 💸 [Negative possession].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(239, 68, 68, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Asking for a pen:</strong> "Excuse me, <strong>do you have</strong> an extra pen for a moment?"</p>
    <p><strong>2. Denying a request:</strong> "I'm sorry, I <strong>don't have</strong> any change right now."</p>
    <p><strong>3. Checking for a passport:</strong> "<strong>Does he have</strong> his passport in his bag?"</p>
  </div>
</div>`,
  14: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #8B5CF6;">
    <h4>👨‍👩‍👧‍👦 Family Members</h4>
    <p>English family vocabulary distinguishes between immediate family (parents, siblings) and extended family (uncles, cousins). Remember that "Parents" means mother and father, not relatives. Use possessives like "My sister's husband" to describe relationships. Knowing these terms is essential for sharing your personal life and understanding the social connections of others you meet.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 This is my <strong>mother</strong>. &rarr; 👩 [Female parent].</li>
      <li>📝 I have two <strong>brothers</strong>. &rarr; 👦👦 [Male siblings].</li>
      <li>📝 My <strong>grandfather</strong> is 80. &rarr; 👴 [Parent's father].</li>
      <li>📝 My <strong>aunt</strong> lives in London. &rarr; 👩‍🦰 [Parent's sister].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(139, 92, 246, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Showing family photos:</strong> "This is my <strong>daughter</strong>. She is three years old."</p>
    <p><strong>2. Describing a family tree:</strong> "My <strong>uncle</strong> is my father's brother."</p>
    <p><strong>3. Inviting to an event:</strong> "Please bring your <strong>husband</strong> to the party tomorrow."</p>
  </div>
</div>`,
  15: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #F59E0B;">
    <h4>⏰ Telling the Time</h4>
    <p>English uses the 12-hour clock with "AM" and "PM." For exact hours, use "o'clock." For half-hours, say "half past [hour]." Use "past" for the first 30 minutes and "to" for the last 30. Mastering time is critical for making appointments, catching transport, and managing your schedule accurately in an English-speaking environment.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 It's three <strong>o'clock</strong>. &rarr; 3️⃣:0️⃣0️⃣ [Exact hour].</li>
      <li>📝 It's <strong>half past</strong> six. &rarr; 6️⃣:3️⃣0️⃣ [30 minutes past].</li>
      <li>📝 It's <strong>quarter past</strong> ten. &rarr; 1️⃣0️⃣:1️⃣5️⃣ [15 minutes past].</li>
      <li>📝 It's <strong>quarter to</strong> five. &rarr; 4️⃣:4️⃣5️⃣ [15 minutes to].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(245, 158, 11, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Making a doctor's appointment:</strong> "Can I see the doctor at <strong>quarter past</strong> four?"</p>
    <p><strong>2. Asking for time at a station:</strong> "Excuse me, what time is <strong>the next</strong> train to London?"</p>
    <p><strong>3. Setting a meeting:</strong> "Let's meet for coffee at <strong>half past</strong> ten tomorrow morning."</p>
  </div>
</div>`
};

topics.forEach(t => {
  if (batchContent[t.id]) {
    t.theory = batchContent[t.id].trim();
  }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('✅ A1 Topics 11-15 updated successfully.');
