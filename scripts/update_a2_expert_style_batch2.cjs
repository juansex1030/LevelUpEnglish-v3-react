const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '../backend/data/topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const batchContent = {
  36: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #F59E0B;">
    <h4>🎬 Past Continuous: Actions in Progress</h4>
    <p>Use the Past Continuous (was/were + verb-ing) to describe actions that were <strong>in progress</strong> at a specific moment in the past. It often sets the scene for a story or describes an action that was interrupted by another event (simple past). This tense adds a "cinematic" feel to your English, allowing you to describe ongoing past experiences.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #F59E0B; background: rgba(245, 158, 11, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>[was / were]</strong> + <strong>[Verb-ing]</strong> + <strong>[Complement]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I <strong>was sleeping</strong>. &rarr; 😴 [Action in progress].</li>
      <li>📝 They <strong>were dancing</strong>. &rarr; 💃 [Ongoing activity].</li>
      <li>📝 She <strong>was crying</strong>. &rarr; 😢 [Past emotion].</li>
      <li>📝 It <strong>was raining</strong>. &rarr; 🌧️ [Setting the scene].</li>
      <li>📝 We <strong>were eating</strong> lunch. &rarr; 🍱 [Past routine].</li>
      <li>📝 <strong>Were you</strong> listening? &rarr; 👂 [Question].</li>
      <li>📝 He <strong>wasn't working</strong>. &rarr; 🚫💼 [Negative progress].</li>
      <li>📝 I <strong>was walking</strong> home. &rarr; 🚶‍♂️ [Motion].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(245, 158, 11, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Witnessing an accident:</strong> "I <strong>was waiting</strong> for the bus when the two cars crashed."</p>
    <p><strong>2. Describing a party:</strong> "Everyone <strong>was laughing</strong> and the music <strong>was playing</strong> very loudly."</p>
    <p><strong>3. Explaining background:</strong> "Yesterday at 10 PM, I <strong>was studying</strong> for my English exam."</p>
  </div>
</div>`,
  37: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #10B981;">
    <h4>🚀 Future with "Will"</h4>
    <p>Use "Will" for spontaneous decisions, promises, offers, or predictions based on opinion. Unlike "Going to," "Will" is used when you decide something <strong>at the moment of speaking</strong>. It is the standard way to express future certainties or hopes about what might happen next in your life or the world.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #10B981; background: rgba(16, 185, 129, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>[will]</strong> + <strong>[Base Verb]</strong> + <strong>[Complement]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I <strong>will help</strong> you. &rarr; 🤝 [Offer].</li>
      <li>📝 It <strong>will rain</strong> tomorrow. &rarr; 🌦️ [Prediction].</li>
      <li>📝 I <strong>will pay</strong> for this. &rarr; 💳 [Spontaneous decision].</li>
      <li>📝 She <strong>will love</strong> it. &rarr; ❤️ [Opinion].</li>
      <li>📝 <strong>Will you</strong> marry me? &rarr; 💍 [Proposal].</li>
      <li>📝 They <strong>won't</strong> come. &rarr; 🚫 [Negative].</li>
      <li>📝 I <strong>will be</strong> there. &rarr; 📍 [Promise].</li>
      <li>📝 You <strong>will win</strong>! &rarr; 🏆 [Encouragement].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(16, 185, 129, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Snap decision:</strong> "Wait, I <strong>will go</strong> with you! Just give me a second."</p>
    <p><strong>2. Making a promise:</strong> "Don't worry, I <strong>will call</strong> you as soon as I arrive home."</p>
    <p><strong>3. Predicting weather:</strong> "I think it <strong>will be</strong> a sunny day on Saturday for the beach."</p>
  </div>
</div>`,
  38: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #3B82F6;">
    <h4>📅 Future with "Going to"</h4>
    <p>Use "Going to" for <strong>plans</strong> and intentions made before speaking, or for predictions based on present evidence (e.g., black clouds). It shows a stronger connection to the present than "Will." Mastering this allows you to discuss your schedule, upcoming events, and logical conclusions about what is about to happen.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #3B82F6; background: rgba(59, 130, 246, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>[am/is/are]</strong> + <strong>[going to]</strong> + <strong>[Base Verb]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I <strong>am going to</strong> travel. &rarr; ✈️ [Plan].</li>
      <li>📝 She <strong>is going to</strong> cook. &rarr; 🍳 [Intention].</li>
      <li>📝 Look! It <strong>is going to</strong> fall. &rarr; ⚠️ [Evidence].</li>
      <li>📝 We <strong>are going to</strong> win. &rarr; 🏅 [Strong belief].</li>
      <li>📝 They <strong>aren't going to</strong> stay. &rarr; 🏨🚫 [Negative plan].</li>
      <li>📝 <strong>Are you going to</strong> eat? &rarr; 🍽️ [Asking about plans].</li>
      <li>📝 He <strong>is going to</strong> buy a house. &rarr; 🏠 [Goal].</li>
      <li>📝 I <strong>am going to</strong> sleep early. &rarr; 💤 [Decision made before].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(59, 130, 246, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Discussing schedule:</strong> "I <strong>am going to</strong> meet my doctor at 3 PM today."</p>
    <p><strong>2. Weekend plans:</strong> "My family and I <strong>are going to</strong> visit my grandparents this weekend."</p>
    <p><strong>3. Logical conclusion:</strong> "Look at those dark clouds! It <strong>is going to</strong> rain very soon."</p>
  </div>
</div>`,
  39: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #8B5CF6;">
    <h4>🔗 Present Perfect (Affirmative)</h4>
    <p>The Present Perfect connects the past to the present. Use it for experiences, changes over time, or actions that happened at an unspecified time. Use the formula: <strong>Have/Has + Past Participle</strong>. It is essential for talking about your life achievements and completed tasks when the exact date is not as important as the action itself.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #8B5CF6; background: rgba(139, 92, 246, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>[have / has]</strong> + <strong>[Past Participle]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I <strong>have traveled</strong>. &rarr; 🌍 [Experience].</li>
      <li>📝 She <strong>has eaten</strong>. &rarr; 🍛 [Recent action].</li>
      <li>📝 We <strong>have finished</strong>. &rarr; ✅ [Completed task].</li>
      <li>📝 They <strong>have lived</strong> here. &rarr; 🏠 [State until now].</li>
      <li>📝 He <strong>has lost</strong> his keys. &rarr; 🔑🚫 [Past with present result].</li>
      <li>📝 You <strong>have grown</strong>! &rarr; 📈 [Change over time].</li>
      <li>📝 It <strong>has worked</strong> well. &rarr; ⚙️ [Past success].</li>
      <li>📝 I <strong>have seen</strong> that movie. &rarr; 🎬 [Memory].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(139, 92, 246, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Life achievements:</strong> "I <strong>have worked</strong> for this company for over ten years."</p>
    <p><strong>2. Task update:</strong> "I <strong>have sent</strong> all the invitations for the wedding."</p>
    <p><strong>3. Experiences:</strong> "She <strong>has visited</strong> many countries in Europe and Asia."</p>
  </div>
</div>`,
  40: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #EF4444;">
    <h4>❓ Present Perfect (Negatives & Questions)</h4>
    <p>To make negatives, add "not" after "have/has" (I haven't). For questions, move "Have/Has" to the beginning. This tense is vital for investigating someone's history or clarifying if a task is finished without specifying a time. It focuses on the <strong>result</strong> in the present moment, making it indispensable for professional and social updates.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #EF4444; background: rgba(239, 68, 68, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>Negative:</strong> [Subject] + <strong>haven't / hasn't</strong> + [Past Participle]</p>
    <p><strong>Question:</strong> <strong>Have / Has</strong> + [Subject] + [Past Participle]?</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I <strong>haven't eaten</strong>. &rarr; 🍽️🚫 [Negative experience].</li>
      <li>📝 <strong>Have you seen</strong> my phone? &rarr; 📱? [Question].</li>
      <li>📝 She <strong>hasn't called</strong>. &rarr; 📞🚫 [Unfinished action].</li>
      <li>📝 <strong>Has he finished</strong>? &rarr; ⏳ [Checking status].</li>
      <li>📝 We <strong>haven't traveled</strong>. &rarr; ✈️🚫 [Negative history].</li>
      <li>📝 <strong>Have they arrived</strong>? &rarr; 🏨 [Asking about result].</li>
      <li>📝 You <strong>haven't changed</strong>! &rarr; ✨ [State until now].</li>
      <li>📝 <strong>Has it rained</strong>? &rarr; 🌧️? [Asking about recent past].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(239, 68, 68, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Work progress:</strong> "<strong>Have you completed</strong> the project? No, I <strong>haven't finished</strong> yet."</p>
    <p><strong>2. Travel experience:</strong> "<strong>Has she ever visited</strong> New York? No, she <strong>hasn't been</strong> to the US."</p>
    <p><strong>3. Payment status:</strong> "<strong>Have they paid</strong> the bill? Yes, they <strong>have sent</strong> the money."</p>
  </div>
</div>`
};

topics.forEach(t => {
  if (batchContent[t.id]) {
    t.theory = batchContent[t.id].trim();
  }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('✅ A2 Topics 36-40 updated successfully.');
