const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '../backend/data/topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const batchContent = {
  5: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #F59E0B;">
    <h4>👤 Subject Pronouns: The Doers</h4>
    <p>Subject pronouns (I, You, He, She, It, We, They) replace specific names to avoid repetition. Remember that "I" is always capitalized, and "You" serves for both singular and plural. Use "It" for all non-human subjects like objects, animals, or weather. These small words are the foundation of every English sentence, acting as the "doers" of actions.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 <strong>I</strong> am a teacher. &rarr; 👨‍🏫 [Point to yourself].</li>
      <li>📝 <strong>She</strong> is my boss. &rarr; 👩‍💼 [Pointing to a woman].</li>
      <li>📝 <strong>It</strong> is very cold. &rarr; ❄️ [Talking about weather].</li>
      <li>📝 <strong>They</strong> are happy. &rarr; 👨‍👩‍👧 [Looking at a family].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(245, 158, 11, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Introducing a group:</strong> "<strong>We</strong> are here for the meeting."</p>
    <p><strong>2. Talking about a pet:</strong> "This is my dog. <strong>It</strong> is very friendly."</p>
    <p><strong>3. Describing a colleague:</strong> "John is busy. <strong>He</strong> is in a call."</p>
  </div>
</div>`,
  6: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #10B981;">
    <h4>✅ Verb To Be (Affirmative)</h4>
    <p>The verb "To Be" describes states, identities, and locations. It has three forms: <strong>Am</strong>, <strong>Is</strong>, and <strong>Are</strong>. Use contractions like "I'm" or "She's" for natural-sounding English in conversations. Always match the verb to the subject pronoun. Without this verb, you cannot describe who you are, where you are, or how you feel in any basic interaction.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 <strong>I'm</strong> ready! &rarr; ✅ [Thumb up].</li>
      <li>📝 <strong>He's</strong> at home. &rarr; 🏠 [Location].</li>
      <li>📝 <strong>We're</strong> friends. &rarr; 👫 [Relationship].</li>
      <li>📝 <strong>The coffee is</strong> hot. &rarr; ☕ [Quality].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(16, 185, 129, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Describing a room:</strong> "The office <strong>is</strong> very big and bright."</p>
    <p><strong>2. Checking into a hotel:</strong> "I <strong>am</strong> here for my reservation."</p>
    <p><strong>3. Meeting a coworker:</strong> "She <strong>is</strong> the new project manager."</p>
  </div>
</div>`,
  7: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #EF4444;">
    <h4>❓ Verb To Be (Negatives & Questions)</h4>
    <p>To make negatives, add "not" after the verb (is not / are not). In questions, "flip" the order: move the verb to the beginning of the sentence (Are you...?). Use short answers like "Yes, I am" or "No, he isn't" for efficiency. Mastering this inversion is your first step toward asking and answering basic questions with confidence and clarity.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 <strong>Are you</strong> hungry? &rarr; 🍕 [Asking a question].</li>
      <li>📝 <strong>He isn't</strong> here. &rarr; 🚫 [Negative state].</li>
      <li>📝 <strong>Is it</strong> expensive? &rarr; 💰 [Asking about price].</li>
      <li>📝 <strong>No, they aren't</strong> ready. &rarr; ⏳ [Negative status].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(239, 68, 68, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Confirming an order:</strong> "<strong>Is</strong> the salad for you?" - "Yes, it <strong>is</strong>."</p>
    <p><strong>2. Asking at the door:</strong> "<strong>Is</strong> Maria home?" - "No, she <strong>isn't</strong>."</p>
    <p><strong>3. Clarifying a mistake:</strong> "I <strong>am not</strong> the owner, I'm the assistant."</p>
  </div>
</div>`,
  8: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #3B82F6;">
    <h4>📦 Articles: A, An, The</h4>
    <p>Use "A" or "An" for non-specific, singular items. Choose "An" before vowel sounds (an apple) and "A" before consonant sounds (a book). Use "The" when referring to a specific item both speakers know. Articles are essential signals that tell the listener whether you are talking about something general or something very specific in your conversation.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I have <strong>a</strong> car. &rarr; 🚗 [General car].</li>
      <li>📝 Eat <strong>an</strong> orange. &rarr; 🍊 [Vowel sound].</li>
      <li>📝 Give me <strong>the</strong> keys. &rarr; 🔑 [Specific keys].</li>
      <li>📝 Look at <strong>the</strong> moon. &rarr; 🌕 [Unique item].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(59, 130, 246, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Ordering food:</strong> "I would like <strong>a</strong> sandwich and <strong>an</strong> apple juice."</p>
    <p><strong>2. Looking for keys:</strong> "Where are <strong>the</strong> car keys? I can't find them."</p>
    <p><strong>3. Describing an object:</strong> "There is <strong>a</strong> pen on <strong>the</strong> table."</p>
  </div>
</div>`,
  9: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #8B5CF6;">
    <h4>👥 Plural Nouns</h4>
    <p>Most nouns become plural by adding "-s" or "-es." However, watch out for irregulars like "man/men" or "child/children." If a word ends in "y" preceded by a consonant, change "y" to "ies" (city/cities). Correct plurals are vital for accuracy when describing quantities, shopping, or talking about groups of people and objects in your daily life.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 Two <strong>cats</strong>. &rarr; 🐱🐱 [Regular plural].</li>
      <li>📝 Many <strong>boxes</strong>. &rarr; 📦📦 [Ends in 'x'].</li>
      <li>📝 Five <strong>children</strong>. &rarr; 👦👧 [Irregular].</li>
      <li>📝 Three <strong>cities</strong>. &rarr; 🏙️🏙️ [Consonant + y].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(139, 92, 246, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Grocery shopping:</strong> "I need three <strong>tomatoes</strong> and four <strong>potatoes</strong>."</p>
    <p><strong>2. Describing a family:</strong> "My brother has two <strong>babies</strong>, a boy and a girl."</p>
    <p><strong>3. Taking inventory:</strong> "There are ten <strong>computers</strong> in the classroom."</p>
  </div>
</div>`,
  10: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #EC4899;">
    <h4>📍 Demonstratives: This, That, These, Those</h4>
    <p>Use "This" and "These" for things physically near you. Use "That" and "Those" for things farther away. "This/That" are singular, while "These/Those" are plural. These pointers help you identify objects without repeating their names constantly. They are indispensable for shopping, giving directions, or pointing out specific items in a busy or crowded environment.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 <strong>This</strong> book. &rarr; 📕 [In my hand].</li>
      <li>📝 <strong>That</strong> star. &rarr; ✨ [In the sky].</li>
      <li>📝 <strong>These</strong> shoes. &rarr; 👟👟 [On my feet].</li>
      <li>📝 <strong>Those</strong> birds. &rarr; 🦅🦅 [Far away].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(236, 72, 153, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Shopping for clothes:</strong> "How much is <strong>this</strong> shirt? And <strong>those</strong> pants?"</p>
    <p><strong>2. Choosing bakery items:</strong> "I want <strong>these</strong> cookies and <strong>that</strong> cake, please."</p>
    <p><strong>3. Giving a presentation:</strong> "Look at <strong>these</strong> charts on the screen behind me."</p>
  </div>
</div>`
};

topics.forEach(t => {
  if (batchContent[t.id]) {
    t.theory = batchContent[t.id].trim();
  }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('✅ A1 Topics 5-10 updated successfully.');
