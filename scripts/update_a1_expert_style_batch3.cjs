const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '../backend/data/topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const batchContent = {
  16: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #F59E0B;">
    <h4>📅 Days of the Week & Months</h4>
    <p>In English, we always <strong>capitalize</strong> the names of days and months (e.g., Monday, July). For days, use the preposition "On" (On Monday). For months, use "In" (In June). Understanding this capitalization and preposition use is a small but vital detail that demonstrates your literacy and professionalism in written English.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 <strong>Monday</strong> is the first day. &rarr; 📅 [Start of the week].</li>
      <li>📝 My birthday is in <strong>July</strong>. &rarr; 🎂 [Month].</li>
      <li>📝 See you <strong>on Friday</strong>. &rarr; 👋 [Specific day].</li>
      <li>📝 It's cold <strong>in December</strong>. &rarr; ❄️ [Season/Month].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(245, 158, 11, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Planning a meeting:</strong> "Are you free for a call <strong>on Tuesday</strong> morning?"</p>
    <p><strong>2. Booking a holiday:</strong> "I want to visit New York <strong>in October</strong>."</p>
    <p><strong>3. Stating your birth month:</strong> "My brother's birthday is <strong>in May</strong>."</p>
  </div>
</div>`,
  17: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #10B981;">
    <h4>⏳ Prepositions of Time (In, On, At)</h4>
    <p>Use "At" for specific times (at 5 PM). Use "On" for days and dates (on Friday, on June 5th). Use "In" for longer periods like months, years, and seasons (in summer). Mastering these "time anchors" allows you to schedule events and describe history with precision and without confusing your listener.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 The class starts <strong>at 8:00</strong>. &rarr; 🕗 [Exact time].</li>
      <li>📝 The party is <strong>on Saturday</strong>. &rarr; 🎈 [Day].</li>
      <li>📝 I was born <strong>in 1995</strong>. &rarr; 👶 [Year].</li>
      <li>📝 We travel <strong>in summer</strong>. &rarr; 🏖️ [Season].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(16, 185, 129, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Arriving for a flight:</strong> "The flight departs <strong>at 10:30 PM</strong> sharp."</p>
    <p><strong>2. Inviting to a trip:</strong> "Let's go to the beach <strong>on the weekend</strong>."</p>
    <p><strong>3. Discussing a deadline:</strong> "The project is due <strong>in February</strong>."</p>
  </div>
</div>`,
  18: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #3B82F6;">
    <h4>📍 Prepositions of Place (In, On, At...)</h4>
    <p>Use "In" for enclosed spaces (in the box), "On" for surfaces (on the table), and "At" for specific points (at the bus stop). Use "Under," "Next to," and "Between" to provide more detail. These spatial prepositions are the "GPS" of language, helping you locate objects and people accurately in any physical environment.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 The cat is <strong>in</strong> the bag. &rarr; 🐱🛍️ [Inside].</li>
      <li>📝 The book is <strong>on</strong> the desk. &rarr; 📖📖 [Surface].</li>
      <li>📝 Meet me <strong>at</strong> the park. &rarr; 🌳 [Specific point].</li>
      <li>📝 My keys are <strong>under</strong> the sofa. &rarr; 🔑🛋️ [Below].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(59, 130, 246, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Finding your keys:</strong> "Are they <strong>on</strong> the kitchen counter or <strong>in</strong> your pocket?"</p>
    <p><strong>2. Giving directions:</strong> "The bathroom is <strong>next to</strong> the main entrance."</p>
    <p><strong>3. Describing where you live:</strong> "My apartment is <strong>between</strong> a bakery and a pharmacy."</p>
  </div>
</div>`,
  19: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #8B5CF6;">
    <h4>🔄 Simple Present (Affirmative)</h4>
    <p>The Simple Present describes habits, routines, and permanent facts. For "He, She, It," always add <strong>-s</strong> or <strong>-es</strong> to the verb (He works). For all other subjects, use the base form. This tense is the workhorse of English, used for daily life descriptions, professional routines, and stating general truths about the world.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I <strong>work</strong> every day. &rarr; 💼 [Routine].</li>
      <li>📝 She <strong>drinks</strong> coffee. &rarr; ☕ [Habit].</li>
      <li>📝 They <strong>live</strong> in London. &rarr; 🇬🇧 [Permanent state].</li>
      <li>📝 The sun <strong>rises</strong> in the east. &rarr; 🌅 [Fact].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(139, 92, 246, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Morning routine:</strong> "I <strong>wake up</strong> at 7 AM and <strong>have</strong> breakfast."</p>
    <p><strong>2. Job duties:</strong> "My manager <strong>sends</strong> many emails every morning."</p>
    <p><strong>3. Stating a fact:</strong> "Water <strong>boils</strong> at 100 degrees Celsius."</p>
  </div>
</div>`,
  20: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #EF4444;">
    <h4>❓ Simple Present (Negatives & Questions)</h4>
    <p>To make negatives and questions, use the auxiliary <strong>Do</strong> or <strong>Does</strong>. Use "Don't" for most subjects and "Doesn't" for the third person (He, She, It). In questions, the auxiliary comes first (Do you...?). This structure allows you to inquire about others' lives and clarify facts, making it essential for effective social and professional communication.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 <strong>Do you</strong> like pizza? &rarr; 🍕 [Question].</li>
      <li>📝 He <strong>doesn't</strong> eat meat. &rarr; 🥦 [Negative].</li>
      <li>📝 <strong>Does she</strong> speak English? &rarr; 🗣️ [Third person question].</li>
      <li>📝 We <strong>don't</strong> have a car. &rarr; 🚫🚗 [Negative state].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(239, 68, 68, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Asking about hobbies:</strong> "<strong>Do you</strong> play any sports on the weekend?"</p>
    <p><strong>2. Clarifying shop hours:</strong> "<strong>Does</strong> this store open on Sundays?"</p>
    <p><strong>3. Denying a habit:</strong> "No, I <strong>don't</strong> smoke. It's bad for your health."</p>
  </div>
</div>`
};

topics.forEach(t => {
  if (batchContent[t.id]) {
    t.theory = batchContent[t.id].trim();
  }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('✅ A1 Topics 16-20 updated successfully.');
