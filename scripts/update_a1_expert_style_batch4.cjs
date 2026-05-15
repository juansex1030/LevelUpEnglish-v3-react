const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '../backend/data/topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const batchContent = {
  21: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #10B981;">
    <h4>📊 Adverbs of Frequency (Always, Never...)</h4>
    <p>Adverbs of frequency describe how often an action happens. Position them <strong>before</strong> the main verb (I always study) but <strong>after</strong> the verb "To Be" (I am never late). Use "Always" for 100% and "Never" for 0%. These words add vital context to your routines, helping others understand your habits and reliability in both social and work environments.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I <strong>always</strong> drink water. &rarr; 💧 [100%].</li>
      <li>📝 She <strong>usually</strong> walks. &rarr; 🚶‍♀️ [80%].</li>
      <li>📝 We <strong>sometimes</strong> eat out. &rarr; 🍕 [50%].</li>
      <li>📝 He <strong>never</strong> smokes. &rarr; 🚫 [0%].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(16, 185, 129, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Discussing work habits:</strong> "I <strong>usually</strong> arrive at the office at 8:30 AM."</p>
    <p><strong>2. Describing a lifestyle:</strong> "She <strong>always</strong> exercises in the morning before breakfast."</p>
    <p><strong>3. Planning an activity:</strong> "We <strong>never</strong> go to the park when it is raining."</p>
  </div>
</div>`,
  22: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #3B82F6;">
    <h4>💪 Can / Can't (Ability)</h4>
    <p>"Can" expresses ability or possibility. Unlike most verbs, it does not change for the third person (He can, not He cans). To make negatives, use "Can't." In questions, move "Can" to the start (Can you...?). This modal verb is essential for discussing skills, asking for permission, or checking what is possible in any given situation.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I <strong>can</strong> swim. &rarr; 🏊‍♂️ [Ability].</li>
      <li>📝 <strong>Can you</strong> help me? &rarr; 🤝 [Request].</li>
      <li>📝 She <strong>can't</strong> drive. &rarr; 🚗🚫 [No ability].</li>
      <li>📝 <strong>Can</strong> we park here? &rarr; 🅿️ [Possibility].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(59, 130, 246, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Asking for a favor:</strong> "Excuse me, <strong>can you</strong> open the window, please?"</p>
    <p><strong>2. Listing skills:</strong> "I <strong>can</strong> speak three languages and I <strong>can</strong> use Excel."</p>
    <p><strong>3. Checking rules:</strong> "<strong>Can</strong> I use my phone during the exam? No, you <strong>can't</strong>."</p>
  </div>
</div>`,
  23: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #F59E0B;">
    <h4>🏢 There is / There are</h4>
    <p>Use "There is" for singular objects and "There are" for plural ones. For negatives, add "not" (There isn't / There aren't). In questions, invert the order (Is there / Are there?). These structures are the "existence" markers of English, used to describe what is available in a room, a city, or a menu during your daily interactions.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 <strong>There is</strong> a pen. &rarr; 🖊️ [Singular].</li>
      <li>📝 <strong>There are</strong> two cars. &rarr; 🚗🚗 [Plural].</li>
      <li>📝 <strong>Is there</strong> any milk? &rarr; 🥛 [Question].</li>
      <li>📝 <strong>There aren't</strong> any seats. &rarr; 🪑🚫 [Negative plural].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(245, 158, 11, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Describing a hotel room:</strong> "<strong>There is</strong> a king-size bed and <strong>there are</strong> two towels."</p>
    <p><strong>2. Asking for ingredients:</strong> "<strong>Is there</strong> any sugar in this coffee?"</p>
    <p><strong>3. Checking for seats:</strong> "Excuse me, <strong>are there</strong> any free tables for four people?"</p>
  </div>
</div>`,
  24: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #EC4899;">
    <h4>🎨 Adjectives: Opposites</h4>
    <p>Adjectives describe nouns and usually come <strong>before</strong> them (a big house). At the A1 level, learning adjectives in "opposite pairs" (big/small, hot/cold) is the fastest way to double your vocabulary. Mastering these descriptive words allows you to express opinions, provide details, and differentiate between options when shopping or making choices in English.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 A <strong>big</strong> dog / A <strong>small</strong> cat. &rarr; 🐘 / 🐭</li>
      <li>📝 <strong>Hot</strong> coffee / <strong>Cold</strong> water. &rarr; ☕ / 🧊</li>
      <li>📝 An <strong>expensive</strong> watch / A <strong>cheap</strong> pen. &rarr; 💎 / 🖊️</li>
      <li>📝 A <strong>new</strong> car / An <strong>old</strong> bike. &rarr; ✨🚗 / 🚲</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(236, 72, 153, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Comparing products:</strong> "This phone is <strong>expensive</strong>, but the other one is <strong>cheap</strong>."</p>
    <p><strong>2. Restaurant review:</strong> "The food was <strong>delicious</strong>, but the service was <strong>slow</strong>."</p>
    <p><strong>3. Describing people:</strong> "My brother is <strong>tall</strong> and <strong>thin</strong>, like my father."</p>
  </div>
</div>`,
  25: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #8B5CF6;">
    <h4>🎬 Present Continuous (Affirmative)</h4>
    <p>The Present Continuous describes actions happening <strong>right now</strong>. Use the formula: <strong>Verb To Be + Verb-ing</strong> (I am working). It can also describe temporary situations. This tense makes your English feel dynamic and immediate, allowing you to narrate your life as it happens and describe ongoing events in your social or professional world.</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I <strong>am eating</strong>. &rarr; 🍕 [Action in progress].</li>
      <li>📝 She <strong>is dancing</strong>. &rarr; 💃 [Right now].</li>
      <li>📝 We <strong>are studying</strong>. &rarr; 📚 [Current activity].</li>
      <li>📝 They <strong>are playing</strong>. &rarr; ⚽ [Immediate action].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(139, 92, 246, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Explaining a call:</strong> "I'm sorry, I can't talk. I <strong>am working</strong> right now."</p>
    <p><strong>2. Describing a scene:</strong> "Look at the photo! Everyone <strong>is smiling</strong> and <strong>having</strong> fun."</p>
    <p><strong>3. Current project:</strong> "We <strong>are building</strong> a new website for our company this month."</p>
  </div>
</div>`
};

topics.forEach(t => {
  if (batchContent[t.id]) {
    t.theory = batchContent[t.id].trim();
  }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('✅ A1 Topics 21-25 updated successfully.');
