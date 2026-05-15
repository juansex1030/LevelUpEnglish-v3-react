const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '../backend/data/topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const batchContent = {
  57: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #EF4444;">
    <h4>🏥 Health and Medicine</h4>
    <p>Vocabulary for health (e.g., headache, fever, prescription) is often used with "Have" or "Feel." For symptoms, say "I have a [pain]" or "I feel [adjective]." Mastering these terms is critical for navigating medical situations, explaining how you feel to a doctor, and understanding safety labels on medication.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #EF4444; background: rgba(239, 68, 68, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>have / feel</strong> + <strong>[Symptom / Feeling]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I <strong>have a headache</strong>. &rarr; 🤕 [Symptom].</li>
      <li>📝 She <strong>feels dizzy</strong>. &rarr; 😵‍💫 [Feeling].</li>
      <li>📝 He <strong>has a fever</strong>. &rarr; 🌡️ [Illness].</li>
      <li>📝 I <strong>need medicine</strong>. &rarr; 💊 [Requirement].</li>
      <li>📝 <strong>My arm hurts</strong>. &rarr; 💪😫 [Specific pain].</li>
      <li>📝 They <strong>are healthy</strong>. &rarr; 🥗 [State].</li>
      <li>📝 I <strong>have a cough</strong>. &rarr; 🗣️💨 [Symptom].</li>
      <li>📝 <strong>Take a rest</strong>. &rarr; 🛌 [Advice].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(239, 68, 68, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Explaining to a doctor:</strong> "I <strong>have a sore throat</strong> and I <strong>feel</strong> very tired today."</p>
    <p><strong>2. Asking for help:</strong> "Excuse me, where is the nearest pharmacy? I <strong>need a prescription</strong>."</p>
    <p><strong>3. Giving health advice:</strong> "If you <strong>have a fever</strong>, you should stay in bed and drink water."</p>
  </div>
</div>`,
  58: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #3B82F6;">
    <h4>✈️ Travel and Transport</h4>
    <p>Use specific prepositions for transport: "By" for the method (by car, by plane) and "On/In" for the physical location. Use "On" for large transport where you can walk (on a bus, on a train) and "In" for small ones (in a car, in a taxi). These details ensure you give and receive directions accurately.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #3B82F6; background: rgba(59, 130, 246, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>by</strong> + <strong>[Transport]</strong> / <strong>on / in</strong> + <strong>the</strong> + <strong>[Transport]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I go <strong>by train</strong>. &rarr; 🚆 [Method].</li>
      <li>📝 I am <strong>on the bus</strong>. &rarr; 🚌 [Location].</li>
      <li>📝 We travel <strong>by plane</strong>. &rarr; ✈️ [Method].</li>
      <li>📝 He is <strong>in the car</strong>. &rarr; 🚗 [Location].</li>
      <li>📝 <strong>Take a taxi</strong>. &rarr; 🚕 [Action].</li>
      <li>📝 Go <strong>on foot</strong>. &rarr; 🚶‍♂️ [Walking].</li>
      <li>📝 The <strong>flight is late</strong>. &rarr; ⏳✈️ [Status].</li>
      <li>📝 <strong>Buy a ticket</strong>. &rarr; 🎟️ [Requirement].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(59, 130, 246, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Commuting to work:</strong> "I usually go to the office <strong>by subway</strong> because it is faster."</p>
    <p><strong>2. Arriving at a destination:</strong> "I'm <strong>on the train</strong> now. I will be at the station in ten minutes."</p>
    <p><strong>3. Booking a trip:</strong> "We <strong>booked a flight</strong> to Italy and we are going <strong>by boat</strong> to the islands."</p>
  </div>
</div>`,
  59: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #10B981;">
    <h4>🌳 Environment and Nature</h4>
    <p>When discussing nature and the environment, use uncountable nouns (pollution, weather, nature) and countable ones (forests, oceans). Use "Should" to talk about environmental protection and "Will" for predictions about the planet's future. Mastering this vocabulary allows you to engage in global conversations about climate and the world around us.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #10B981; background: rgba(16, 185, 129, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Uncountable Noun]</strong> + <strong>[Verb]</strong> / <strong>[Adjective]</strong> + <strong>[Countable Noun]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 Save <strong>the planet</strong>. &rarr; 🌍 [Goal].</li>
      <li>📝 Plant <strong>a tree</strong>. &rarr; 🌱 [Action].</li>
      <li>📝 <strong>Air pollution</strong> is bad. &rarr; 💨🚫 [Uncountable].</li>
      <li>📝 The <strong>ocean is deep</strong>. &rarr; 🌊 [Countable].</li>
      <li>📝 <strong>Recycle plastic</strong>. &rarr; ♻️ [Action].</li>
      <li>📝 <strong>Global warming</strong>. &rarr; 🔥🌡️ [Concept].</li>
      <li>📝 <strong>Beautiful forest</strong>. &rarr; 🌲 [Description].</li>
      <li>📝 <strong>Clean water</strong>. &rarr; 💧✨ [Essential].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(16, 185, 129, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Discussing pollution:</strong> "Many cities have <strong>too much pollution</strong> in the air today."</p>
    <p><strong>2. Nature walk:</strong> "We should protect the <strong>forests</strong> because they have many <strong>animals</strong>."</p>
    <p><strong>3. Sustainable living:</strong> "I <strong>recycle</strong> my paper and plastic to help <strong>the environment</strong>."</p>
  </div>
</div>`,
  60: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #8B5CF6;">
    <h4>💻 Technology and Media</h4>
    <p>Technology vocabulary often involves phrasal verbs (log in, scroll up, shut down) and specific verbs like "use," "click," or "browse." Use the present continuous to describe ongoing digital actions (I am downloading). This vocabulary is essential for working in a modern office and navigating the digital world effectively every day.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #8B5CF6; background: rgba(139, 92, 246, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>[Technology Verb]</strong> + <strong>the</strong> + <strong>[Device]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 <strong>Log in</strong> now. &rarr; 🔑 [Action].</li>
      <li>📝 <strong>Click the mouse</strong>. &rarr; 🖱️ [Instruction].</li>
      <li>📝 <strong>Download a file</strong>. &rarr; 📥 [Digital action].</li>
      <li>📝 <strong>Browse the web</strong>. &rarr; 🌐 [Activity].</li>
      <li>📝 <strong>Check emails</strong>. &rarr; 📧 [Work routine].</li>
      <li>📝 <strong>Social media</strong>. &rarr; 📱💬 [Concept].</li>
      <li>📝 <strong>Upload a photo</strong>. &rarr; 📤📸 [Digital sharing].</li>
      <li>📝 <strong>Recharge the phone</strong>. &rarr; 🔌🔋 [Requirement].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(139, 92, 246, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Work instruction:</strong> "Please <strong>log in</strong> to the system and <strong>upload</strong> your weekly report."</p>
    <p><strong>2. Trouble-shooting:</strong> "I can't <strong>connect to the Wi-Fi</strong>. I think I need to <strong>restart</strong> my computer."</p>
    <p><strong>3. Online activity:</strong> "I spend one hour every day <strong>browsing</strong> the news on my <strong>tablet</strong>."</p>
  </div>
</div>`,
  61: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #10B981;">
    <h4>💼 Work and Careers</h4>
    <p>Use the Present Perfect to describe your career history (I have worked...) and the Simple Present for current duties. Distinguish between "Job" (countable) and "Work" (uncountable). Knowing these terms and tenses allows you to present yourself professionally in interviews and discuss your responsibilities with colleagues and managers.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #10B981; background: rgba(16, 185, 129, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>work / as</strong> + <strong>[Job Title]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I <strong>am a manager</strong>. &rarr; 👔 [Job title].</li>
      <li>📝 She <strong>works as a nurse</strong>. &rarr; 👩‍⚕️ [Role].</li>
      <li>📝 I <strong>have a good job</strong>. &rarr; ✅ [Countable].</li>
      <li>📝 I <strong>start work</strong> at 9. &rarr; 🕘 [Uncountable].</li>
      <li>📝 <strong>Apply for</strong> a job. &rarr; 📄 [Process].</li>
      <li>📝 <strong>Company meeting</strong>. &rarr; 🤝 [Work event].</li>
      <li>📝 <strong>Earn money</strong>. &rarr; 💵 [Result].</li>
      <li>📝 <strong>Retire</strong> from work. &rarr; 👴 [End of career].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(16, 185, 129, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Interview:</strong> "I <strong>have worked as a teacher</strong> for five years in a language school."</p>
    <p><strong>2. Office routine:</strong> "I have a lot of <strong>work</strong> today, so I <strong>will stay</strong> late at the office."</p>
    <p><strong>3. Promotion:</strong> "She <strong>received a promotion</strong> and she is now the <strong>CEO</strong> of the company."</p>
  </div>
</div>`,
  62: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #F59E0B;">
    <h4>🍳 Food and Cooking</h4>
    <p>Food vocabulary combines countable/uncountable nouns with specific cooking verbs (boil, fry, bake). Use "Would like" to order politely in restaurants. Mastering these terms is the key to following recipes, ordering food without mistakes, and discussing your culinary preferences in social situations around the world.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #F59E0B; background: rgba(245, 158, 11, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>would like</strong> + <strong>[Food / Drink]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I <strong>would like pasta</strong>. &rarr; 🍝 [Ordering].</li>
      <li>📝 <strong>Boil the water</strong>. &rarr; 💧🔥 [Cooking verb].</li>
      <li>📝 <strong>Fry an egg</strong>. &rarr; 🍳 [Action].</li>
      <li>📝 <strong>Bake a cake</strong>. &rarr; 🎂 [Oven action].</li>
      <li>📝 <strong>Add some salt</strong>. &rarr; 🧂 [Instruction].</li>
      <li>📝 <strong>Delicious meal</strong>. &rarr; 😋 [Opinion].</li>
      <li>📝 <strong>Spicy food</strong>. &rarr; 🌶️ [Flavor].</li>
      <li>📝 <strong>Pay the bill</strong>. &rarr; 🧾 [Restaurant action].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(245, 158, 11, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Ordering food:</strong> "I <strong>would like</strong> a grilled chicken salad and a bottle of <strong>water</strong>, please."</p>
    <p><strong>2. Reading a recipe:</strong> "First, <strong>chop</strong> the onions and then <strong>fry</strong> them in a large pan with oil."</p>
    <p><strong>3. Dinner invitation:</strong> "Would you like to have <strong>dinner</strong> with us at a <strong>steakhouse</strong> tonight?"</p>
  </div>
</div>`
};

topics.forEach(t => {
  if (batchContent[t.id]) {
    t.theory = batchContent[t.id].trim();
  }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('✅ A2 Topics 57-62 updated successfully. A2 Completion reached.');
