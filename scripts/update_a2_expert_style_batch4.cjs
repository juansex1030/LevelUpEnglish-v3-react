const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '../backend/data/topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const batchContent = {
  47: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #10B981;">
    <h4>💡 Should / Shouldn't: Giving Advice</h4>
    <p>Use "Should" to give advice, suggestions, or opinions. It is a modal verb, so it does not change for the third person and is always followed by a base verb. Using "Should" effectively allows you to offer guidance and help others make decisions in both professional and social interactions.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #10B981; background: rgba(16, 185, 129, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>should / shouldn't</strong> + <strong>[Base Verb]</strong> + <strong>[Complement]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 You <strong>should study</strong>. &rarr; 📖 [Advice].</li>
      <li>📝 He <strong>shouldn't smoke</strong>. &rarr; 🚬🚫 [Recommendation].</li>
      <li>📝 <strong>Should I</strong> call her? &rarr; 📞? [Asking for opinion].</li>
      <li>📝 We <strong>should go</strong> now. &rarr; 🏃‍♂️ [Suggestion].</li>
      <li>📝 They <strong>should rest</strong>. &rarr; 🛌 [Health advice].</li>
      <li>📝 You <strong>shouldn't worry</strong>. &rarr; 😊 [Comforting advice].</li>
      <li>📝 It <strong>should work</strong>. &rarr; ⚙️ [Expectation].</li>
      <li>📝 <strong>Should we</strong> start? &rarr; 🚀 [Checking].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(16, 185, 129, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Doctor's visit:</strong> "You <strong>should drink</strong> more water and you <strong>shouldn't eat</strong> so much sugar."</p>
    <p><strong>2. Planning a trip:</strong> "I think we <strong>should buy</strong> the tickets today while they are cheap."</p>
    <p><strong>3. Work advice:</strong> "You <strong>should check</strong> the report one more time before you send it."</p>
  </div>
</div>`,
  48: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #EF4444;">
    <h4>👮 Must / Mustn't: Strong Obligation</h4>
    <p>Use "Must" for strong obligations or personal decisions that something is necessary. Use "Mustn't" to express prohibition (actions that are forbidden). Unlike "Should," "Must" carries a much stronger tone of authority. Mastering this distinction is vital for understanding rules, safety instructions, and official requirements in English-speaking environments.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #EF4444; background: rgba(239, 68, 68, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>must / mustn't</strong> + <strong>[Base Verb]</strong> + <strong>[Complement]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 You <strong>must stop</strong>. &rarr; 🛑 [Rule].</li>
      <li>📝 You <strong>mustn't park</strong> here. &rarr; 🅿️🚫 [Prohibition].</li>
      <li>📝 I <strong>must finish</strong> today. &rarr; ⏳ [Personal obligation].</li>
      <li>📝 We <strong>must wear</strong> masks. &rarr; 😷 [Safety rule].</li>
      <li>📝 You <strong>mustn't touch</strong> that. &rarr; ⚠️ [Danger].</li>
      <li>📝 They <strong>must pay</strong> now. &rarr; 💸 [Requirement].</li>
      <li>📝 She <strong>must see</strong> a doctor. &rarr; 👨‍⚕️ [Emergency].</li>
      <li>📝 <strong>Must I</strong> do it? &rarr; 🤔 [Formal question].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(239, 68, 68, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Airport rules:</strong> "Passengers <strong>must show</strong> their passport before boarding the plane."</p>
    <p><strong>2. Library sign:</strong> "You <strong>mustn't talk</strong> loudly in the study area."</p>
    <p><strong>3. Work safety:</strong> "Workers <strong>must wear</strong> a helmet at all times inside the construction zone."</p>
  </div>
</div>`,
  49: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #3B82F6;">
    <h4>📝 Have to / Don't have to</h4>
    <p>Use "Have to" for external obligations (rules, work requirements). Use "Don't have to" when an action is <strong>not necessary</strong> (you have a choice). Unlike "Must," "Have to" changes its form for the third person (He has to). Understanding this allows you to discuss responsibilities and flexibility with high accuracy.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #3B82F6; background: rgba(59, 130, 246, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>have to / has to</strong> + <strong>[Base Verb]</strong></p>
    <p><strong>Negative:</strong> [Subject] + <strong>don't / doesn't have to</strong> + [Base Verb]</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I <strong>have to</strong> work. &rarr; 💼 [Obligation].</li>
      <li>📝 He <strong>has to</strong> go. &rarr; 🚶‍♂️ [Third person].</li>
      <li>📝 You <strong>don't have to</strong> pay. &rarr; 🆓 [Optional].</li>
      <li>📝 We <strong>don't have to</strong> stay. &rarr; 🚪 [Choice].</li>
      <li>📝 <strong>Do you have to</strong> leave? &rarr; ❓ [Question].</li>
      <li>📝 She <strong>doesn't have to</strong> cook. &rarr; 🍕 [Optional task].</li>
      <li>📝 They <strong>have to</strong> wait. &rarr; ⏳ [Requirement].</li>
      <li>📝 <strong>Does he have to</strong> come? &rarr; 🤔 [Asking about obligation].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(59, 130, 246, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Work responsibilities:</strong> "In my job, I <strong>have to</strong> speak English every day with clients."</p>
    <p><strong>2. Weekend flexibility:</strong> "It is Saturday tomorrow, so I <strong>don't have to</strong> wake up early."</p>
    <p><strong>3. Formal rules:</strong> "Do we <strong>have to</strong> wear a suit for the wedding? No, it's casual."</p>
  </div>
</div>`,
  50: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #F59E0B;">
    <h4>🌡️ Zero Conditional: Facts</h4>
    <p>Use the Zero Conditional to describe general truths, scientific facts, or things that always happen. Use the Present Simple in both the "if" clause and the main clause. It establishes a cause-and-effect relationship that is 100% certain, making it essential for explaining how things work or describing permanent rules.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #F59E0B; background: rgba(245, 158, 11, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>If</strong> + <strong>[Present Simple]</strong> , <strong>[Present Simple]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 If you <strong>heat</strong> ice, it <strong>melts</strong>. &rarr; 🧊🔥 [Scientific fact].</li>
      <li>📝 If I <strong>drink</strong> coffee, I <strong>can't</strong> sleep. &rarr; ☕😳 [Personal truth].</li>
      <li>📝 If it <strong>rains</strong>, the grass <strong>gets</strong> wet. &rarr; 🌧️🌱 [General truth].</li>
      <li>📝 If you <strong>press</strong> the button, it <strong>works</strong>. &rarr; 🔘 [Cause/Effect].</li>
      <li>📝 If she <strong>is</strong> late, she <strong>calls</strong>. &rarr; 📞 [Habit].</li>
      <li>📝 If you <strong>mix</strong> red and blue, you <strong>get</strong> purple. &rarr; 🎨 [Fact].</li>
      <li>📝 If I <strong>don't eat</strong>, I <strong>feel</strong> hungry. &rarr; 🍕🚫 [Logic].</li>
      <li>📝 If you <strong>touch</strong> fire, you <strong>get</strong> burned. &rarr; 🔥⚠️ [Warning].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(245, 158, 11, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Science lesson:</strong> "If you <strong>boil</strong> water to 100 degrees, it <strong>turns</strong> into steam."</p>
    <p><strong>2. Office rules:</strong> "If the light <strong>is</strong> red, the printer <strong>needs</strong> more paper."</p>
    <p><strong>3. Daily logic:</strong> "If I <strong>don't have</strong> my glasses, I <strong>can't</strong> see anything clearly."</p>
  </div>
</div>`,
  51: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #8B5CF6;">
    <h4>🔮 First Conditional: Possibilities</h4>
    <p>Use the First Conditional to talk about a <strong>possible</strong> future situation and its likely result. Use the Present Simple in the "if" clause and "Will" in the main clause. This structure is the key to discussing plans, negotiating conditions, and predicting outcomes based on realistic possibilities in your future.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #8B5CF6; background: rgba(139, 92, 246, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>If</strong> + <strong>[Present Simple]</strong> , <strong>will</strong> + <strong>[Base Verb]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 If it <strong>rains</strong>, I <strong>will stay</strong>. &rarr; 🌧️🏠 [Future possibility].</li>
      <li>📝 If you <strong>study</strong>, you <strong>will pass</strong>. &rarr; 📖🎓 [Result].</li>
      <li>📝 I <strong>will call</strong> you if I <strong>have</strong> time. &rarr; 📞 [Condition].</li>
      <li>📝 If we <strong>hurry</strong>, we <strong>will catch</strong> the bus. &rarr; 🏃‍♂️🚌 [Plan].</li>
      <li>📝 She <strong>won't go</strong> if it <strong>is</strong> expensive. &rarr; 💰🚫 [Negotiation].</li>
      <li>📝 If I <strong>see</strong> him, I <strong>will tell</strong> him. &rarr; 👀 [Future action].</li>
      <li>📝 If you <strong>don't pay</strong>, they <strong>will cancel</strong>. &rarr; 💳🚫 [Consequence].</li>
      <li>📝 <strong>Will you</strong> come if I <strong>invite</strong> you? &rarr; 💌? [Asking about conditions].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(139, 92, 246, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Negotiating:</strong> "If you <strong>buy</strong> two shirts, I <strong>will give</strong> you a 20% discount."</p>
    <p><strong>2. Planning weather:</strong> "If it <strong>is</strong> sunny tomorrow, we <strong>will go</strong> to the beach for a picnic."</p>
    <p><strong>3. Work consequence:</strong> "If you <strong>don't finish</strong> the project today, we <strong>will have</strong> problems tomorrow."</p>
  </div>
</div>`
};

topics.forEach(t => {
  if (batchContent[t.id]) {
    t.theory = batchContent[t.id].trim();
  }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('✅ A2 Topics 47-51 updated successfully.');
