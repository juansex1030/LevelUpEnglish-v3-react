const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '../backend/data/topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const batchContent = {
  26: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #EF4444;">
    <h4>❓ Present Continuous (Negatives & Questions)</h4>
    <p>To make negatives, add "not" after the verb "To Be" (I'm not working). For questions, move the verb "To Be" to the beginning (Are you working?). This inversion is identical to the Verb "To Be" rules you learned earlier. Mastering this allows you to check what others are doing and clarify ongoing actions in real-time.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 <strong>Are you</strong> listening? &rarr; 👂 [Question].</li>
      <li>📝 He <strong>isn't</strong> sleeping. &rarr; 🛌🚫 [Negative].</li>
      <li>📝 <strong>Is she</strong> coming? &rarr; 🚶‍♀️ [Asking about progress].</li>
      <li>📝 We <strong>aren't</strong> staying. &rarr; 🏨🚫 [Temporary negative].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(239, 68, 68, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Checking progress:</strong> "<strong>Are you</strong> still working on that report for today?"</p>
    <p><strong>2. Asking if busy:</strong> "Excuse me, <strong>are you</strong> using this chair right now?"</p>
    <p><strong>3. Clarifying:</strong> "No, I <strong>am not</strong> joking. This is a very serious situation."</p>
  </div>
</div>`,
  27: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #F59E0B;">
    <h4>❓ Wh- Questions (Who, What, Where...)</h4>
    <p>"Wh-" words (Who, What, Where, When, Why, How) are the "Information Keys" of English. Place them at the very beginning of your question, followed by the auxiliary verb or "To Be." They allow you to move beyond "Yes/No" answers and gather specific details, which is essential for networking, travel, and professional problem-solving.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 <strong>Who</strong> is he? &rarr; 👤 [Person].</li>
      <li>📝 <strong>What</strong> is this? &rarr; 📦 [Object].</li>
      <li>📝 <strong>Where</strong> are you? &rarr; 📍 [Location].</li>
      <li>📝 <strong>When</strong> is the meeting? &rarr; 📅 [Time].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(245, 158, 11, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Asking for directions:</strong> "Excuse me, <strong>where</strong> is the nearest train station?"</p>
    <p><strong>2. Networking:</strong> "<strong>What</strong> do you do for a living? And <strong>where</strong> do you work?"</p>
    <p><strong>3. Problem-solving:</strong> "<strong>Why</strong> is the computer not working? <strong>How</strong> can I fix it?"</p>
  </div>
</div>`,
  28: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #3B82F6;">
    <h4>📢 Imperatives: Instructions</h4>
    <p>Use the base form of the verb without a subject to give orders, instructions, or advice (Stop!, Open the door). For negatives, add "Don't" (Don't touch). Although they sound direct, adding "please" makes them polite. Imperatives are the "Action" words used for following recipes, giving directions, or managing a team effectively.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 <strong>Sit</strong> down, please. &rarr; 🪑 [Polite order].</li>
      <li>📝 <strong>Don't</strong> touch that! &rarr; 🚫 [Negative command].</li>
      <li>📝 <strong>Turn</strong> left here. &rarr; ⬅️ [Direction].</li>
      <li>📝 <strong>Wait</strong> for me. &rarr; ⏳ [Instruction].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(59, 130, 246, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Giving directions:</strong> "<strong>Go</strong> straight for two blocks and then <strong>turn</strong> right."</p>
    <p><strong>2. Software instructions:</strong> "<strong>Click</strong> the button and <strong>enter</strong> your password."</p>
    <p><strong>3. Managing a team:</strong> "Everyone, <strong>listen</strong> carefully to the new safety rules."</p>
  </div>
</div>`,
  29: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #8B5CF6;">
    <h4>🎁 Object Pronouns: Me, Him, Her...</h4>
    <p>Object pronouns (Me, You, Him, Her, It, Us, Them) receive the action in a sentence and usually come <strong>after</strong> the verb or a preposition. Use them to avoid repeating names. For example, "I like John. I like <strong>him</strong>." Mastering these ensures your sentences flow naturally and professionally without sounding repetitive or clunky.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 Call <strong>me</strong> later. &rarr; 📞 [Me].</li>
      <li>📝 I love <strong>her</strong>. &rarr; ❤️ [Her].</li>
      <li>📝 Help <strong>us</strong>, please. &rarr; 🤝 [Us].</li>
      <li>📝 Look at <strong>them</strong>. &rarr; 👀 [Them].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(139, 92, 246, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Asking for a favor:</strong> "This box is heavy. Can you help <strong>me</strong> carry <strong>it</strong>?"</p>
    <p><strong>2. Describing a gift:</strong> "I bought this for my sister. I hope she likes <strong>it</strong>."</p>
    <p><strong>3. Talking about colleagues:</strong> "I work with Sarah and Mark. I see <strong>them</strong> every day."</p>
  </div>
</div>`,
  30: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #10B981;">
    <h4>🍎 Countable & Uncountable (Some, Any)</h4>
    <p>Countable nouns have a plural (books). Uncountable nouns don't (water, money). Use "Some" for affirmative sentences and "Any" for negatives and questions. A vital rule: use "A/An" only for countable, singular items. Mastering this distinction is key to ordering food, managing finances, and describing quantities accurately in any English context.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I have <strong>some</strong> water. &rarr; 💧 [Uncountable + some].</li>
      <li>📝 Are there <strong>any</strong> apples? &rarr; 🍎🍎 [Countable plural + any].</li>
      <li>📝 I don't have <strong>any</strong> money. &rarr; 💸🚫 [Uncountable + any].</li>
      <li>📝 I want <strong>a</strong> banana. &rarr; 🍌 [Countable singular + a].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(16, 185, 129, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Ordering at a restaurant:</strong> "I would like <strong>some</strong> bread and <strong>a</strong> glass of wine."</p>
    <p><strong>2. Shopping for groceries:</strong> "Do we need <strong>any</strong> milk? No, but we need <strong>some</strong> eggs."</p>
    <p><strong>3. Describing a workspace:</strong> "There are <strong>some</strong> pens, but there isn't <strong>any</strong> paper."</p>
  </div>
</div>`
};

topics.forEach(t => {
  if (batchContent[t.id]) {
    t.theory = batchContent[t.id].trim();
  }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('✅ A1 Topics 26-30 updated successfully. A1 Completion reached.');
