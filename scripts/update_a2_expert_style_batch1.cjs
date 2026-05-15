const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '../backend/data/topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const batchContent = {
  31: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #6366F1;">
    <h4>⏳ Past Simple: Was / Were</h4>
    <p>"Was" and "Were" are the past forms of the verb "To Be." Use "Was" for I, He, She, It, and "Were" for You, We, They. This tense describes finished states, locations, or identities in the past. It is essential for storytelling, describing history, or explaining where you were yesterday in any conversation.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #6366F1; background: rgba(99, 102, 241, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>[was / were]</strong> + <strong>[Complement]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I <strong>was</strong> happy. &rarr; 😊 [Past state].</li>
      <li>📝 They <strong>were</strong> at the party. &rarr; 🥳 [Past location].</li>
      <li>📝 It <strong>was</strong> cold yesterday. &rarr; ❄️ [Past weather].</li>
      <li>📝 We <strong>were</strong> late. &rarr; 🏃‍♂️ [Past status].</li>
      <li>📝 She <strong>was</strong> a doctor. &rarr; 👩‍⚕️ [Past identity].</li>
      <li>📝 You <strong>were</strong> right! &rarr; ✅ [Confirmation].</li>
      <li>📝 The food <strong>was</strong> great. &rarr; 🍕 [Opinion].</li>
      <li>📝 <strong>Was</strong> he there? &rarr; 🤔 [Question].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(99, 102, 241, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Describing a vacation:</strong> "The hotel <strong>was</strong> amazing and the people <strong>were</strong> very friendly."</p>
    <p><strong>2. Explaining an absence:</strong> "I'm sorry I <strong>was</strong> sick yesterday. I <strong>wasn't</strong> at the office."</p>
    <p><strong>3. Talking about childhood:</strong> "When I <strong>was</strong> ten, my favorite sport <strong>was</strong> swimming."</p>
  </div>
</div>`,
  32: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #10B981;">
    <h4>⏳ Past Simple: Regular Verbs</h4>
    <p>Regular verbs in the past simple always end in <strong>-ed</strong> (e.g., worked, played, visited). This tense describes completed actions at a specific time in the past. Remember: the spelling changes slightly if the verb ends in 'y' (study &rarr; studied). It is the primary tool for narrating events and reporting finished tasks.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #10B981; background: rgba(16, 185, 129, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>[Verb + -ed]</strong> + <strong>[Complement]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I <strong>worked</strong> late. &rarr; 💼 [Completed action].</li>
      <li>📝 She <strong>played</strong> tennis. &rarr; 🎾 [Finished activity].</li>
      <li>📝 They <strong>visited</strong> Paris. &rarr; 🗼 [Past trip].</li>
      <li>📝 We <strong>studied</strong> hard. &rarr; 📚 [Spelling change].</li>
      <li>📝 He <strong>called</strong> me. &rarr; 📞 [Phone call].</li>
      <li>📝 It <strong>started</strong> to rain. &rarr; 🌧️ [Past event].</li>
      <li>📝 You <strong>cooked</strong> dinner. &rarr; 🍳 [Completed task].</li>
      <li>📝 They <strong>danced</strong> all night. &rarr; 💃 [Social activity].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(16, 185, 129, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Reporting work tasks:</strong> "I <strong>finished</strong> the report and <strong>emailed</strong> it to the manager."</p>
    <p><strong>2. Weekend activities:</strong> "Last Saturday, we <strong>walked</strong> in the park and <strong>talked</strong> for hours."</p>
    <p><strong>3. Historic dates:</strong> "The company <strong>started</strong> in 1995 and <strong>expanded</strong> quickly."</p>
  </div>
</div>`,
  33: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #3B82F6;">
    <h4>⏳ Past Simple: Irregular Verbs</h4>
    <p>Irregular verbs do NOT follow the "-ed" rule. Instead, they change their form completely (e.g., go &rarr; went, eat &rarr; ate, see &rarr; saw). There is no specific rule for these changes, so they must be learned by heart. These verbs are extremely common and essential for describing nearly every daily activity in the past.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #3B82F6; background: rgba(59, 130, 246, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>[Irregular Past Verb]</strong> + <strong>[Complement]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I <strong>went</strong> to school. &rarr; 🏫 [Go &rarr; Went].</li>
      <li>📝 She <strong>ate</strong> an apple. &rarr; 🍎 [Eat &rarr; Ate].</li>
      <li>📝 We <strong>saw</strong> a movie. &rarr; 🎬 [See &rarr; Saw].</li>
      <li>📝 He <strong>bought</strong> a car. &rarr; 🚗 [Buy &rarr; Bought].</li>
      <li>📝 They <strong>gave</strong> me a gift. &rarr; 🎁 [Give &rarr; Gave].</li>
      <li>📝 You <strong>wrote</strong> a book. &rarr; ✍️ [Write &rarr; Wrote].</li>
      <li>📝 It <strong>took</strong> two hours. &rarr; ⏳ [Take &rarr; Took].</li>
      <li>📝 I <strong>had</strong> a dream. &rarr; 😴 [Have &rarr; Had].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(59, 130, 246, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Daily recap:</strong> "I <strong>woke</strong> up at 6, <strong>drank</strong> some coffee, and <strong>left</strong> for work."</p>
    <p><strong>2. Shopping trip:</strong> "I <strong>spent</strong> $50 and <strong>bought</strong> some new shoes at the mall."</p>
    <p><strong>3. Social meeting:</strong> "I <strong>met</strong> my friends at 8 PM and we <strong>had</strong> a great time."</p>
  </div>
</div>`,
  34: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #EF4444;">
    <h4>❓ Past Simple (Negatives & Questions)</h4>
    <p>To make negatives and questions in the past, you must use the auxiliary verb <strong>Did</strong>. In negatives, use "Didn't" + the base verb (not the past form!). In questions, move "Did" to the front. Using the auxiliary is mandatory for all verbs except "To Be," allowing you to clarify and investigate past events accurately.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #EF4444; background: rgba(239, 68, 68, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>Negative:</strong> [Subject] + <strong>didn't</strong> + [Base Verb] + [Complement]</p>
    <p><strong>Question:</strong> <strong>Did</strong> + [Subject] + [Base Verb] + [Complement]?</p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I <strong>didn't go</strong>. &rarr; 🚫 [Negative].</li>
      <li>📝 <strong>Did you see</strong> it? &rarr; 👀 [Question].</li>
      <li>📝 She <strong>didn't eat</strong> lunch. &rarr; 🍱🚫 [Negative action].</li>
      <li>📝 <strong>Did they call</strong>? &rarr; 📞 [Asking about a call].</li>
      <li>📝 We <strong>didn't like</strong> the food. &rarr; 🤢 [Negative opinion].</li>
      <li>📝 <strong>Did it work</strong>? &rarr; ⚙️ [Questioning status].</li>
      <li>📝 He <strong>didn't finish</strong>. &rarr; ⏳ [Uncompleted task].</li>
      <li>📝 <strong>Did you buy</strong> milk? &rarr; 🥛 [Shopping question].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(239, 68, 68, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Investigating a problem:</strong> "<strong>Did you receive</strong> my email? No, I <strong>didn't see</strong> it in my inbox."</p>
    <p><strong>2. Checking on tasks:</strong> "<strong>Did she complete</strong> the registration? No, she <strong>didn't have</strong> her ID."</p>
    <p><strong>3. Clarifying past events:</strong> "I <strong>didn't attend</strong> the meeting because I <strong>didn't know</strong> the time."</p>
  </div>
</div>`,
  35: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #8B5CF6;">
    <h4>🕰️ Used to (Past Habits)</h4>
    <p>"Used to" describes habits or states that were true in the past but are <strong>not true anymore</strong>. It is different from the simple past because it emphasizes the repetitive nature of the action. This structure is perfect for comparing your current life to your childhood or describing how things changed over time.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #8B5CF6; background: rgba(139, 92, 246, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>used to</strong> + <strong>[Base Verb]</strong> + <strong>[Complement]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I <strong>used to</strong> smoke. &rarr; 🚬🚫 [Old habit].</li>
      <li>📝 She <strong>used to</strong> live here. &rarr; 🏠 [Past location].</li>
      <li>📝 We <strong>used to</strong> be friends. &rarr; 👬 [Past relationship].</li>
      <li>📝 He <strong>used to</strong> play piano. &rarr; 🎹 [Old hobby].</li>
      <li>📝 They <strong>didn't use to</strong> exercise. &rarr; 🏃‍♂️🚫 [Negative past habit].</li>
      <li>📝 <strong>Did you use to</strong> travel? &rarr; ✈️ [Questioning past].</li>
      <li>📝 It <strong>used to</strong> be a bank. &rarr; 🏦 [Past state of a building].</li>
      <li>📝 I <strong>used to</strong> study every night. &rarr; 📖 [Routine that changed].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(139, 92, 246, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Talking about childhood:</strong> "I <strong>used to</strong> play with dinosaurs all day when I was a kid."</p>
    <p><strong>2. Discussing lifestyle changes:</strong> "I <strong>used to</strong> eat a lot of junk food, but now I'm very healthy."</p>
    <p><strong>3. Company history:</strong> "This building <strong>used to</strong> be a factory before it became a modern office."</p>
  </div>
</div>`
};

topics.forEach(t => {
  if (batchContent[t.id]) {
    t.theory = batchContent[t.id].trim();
  }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('✅ A2 Topics 31-35 updated successfully.');
