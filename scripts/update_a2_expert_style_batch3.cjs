const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '../backend/data/topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const batchContent = {
  41: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #F59E0B;">
    <h4>🌍 Present Perfect: Ever & Never</h4>
    <p>Use "Ever" in questions to ask about experiences in your entire life (Have you ever...?). Use "Never" for things you have not done (I have never...). These adverbs are essential for networking and getting to know people, as they allow you to discuss the scope of your lifetime achievements and world travels.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #F59E0B; background: rgba(245, 158, 11, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Have / Has]</strong> + <strong>[Subject]</strong> + <strong>ever</strong> + <strong>[Past Participle]</strong>?</p>
    <p><strong>[Subject]</strong> + <strong>have / has</strong> + <strong>never</strong> + <strong>[Past Participle]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 <strong>Have you ever</strong> been to Paris? &rarr; 🗼 [Lifetime experience].</li>
      <li>📝 I <strong>have never</strong> seen a shark. &rarr; 🦈🚫 [Zero experience].</li>
      <li>📝 <strong>Has she ever</strong> eaten sushi? &rarr; 🍣? [Asking about others].</li>
      <li>📝 They <strong>have never</strong> failed. &rarr; 📈 [Success history].</li>
      <li>📝 <strong>Have we ever</strong> met? &rarr; 🤝? [Recognition].</li>
      <li>📝 He <strong>has never</strong> traveled by plane. &rarr; ✈️🚫 [Specific lack of experience].</li>
      <li>📝 <strong>Have you ever</strong> won a prize? &rarr; 🏆? [Achievement].</li>
      <li>📝 I <strong>have never</strong> felt better! &rarr; 😊 [Extreme state].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(245, 158, 11, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Networking event:</strong> "<strong>Have you ever</strong> worked with a global team before?"</p>
    <p><strong>2. Personal interview:</strong> "I <strong>have never</strong> missed a deadline in my five years of experience."</p>
    <p><strong>3. Planning a vacation:</strong> "<strong>Have you ever</strong> been to a tropical beach? No, <strong>never</strong>!"</p>
  </div>
</div>`,
  42: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #10B981;">
    <h4>⏳ Present Perfect: Already & Yet</h4>
    <p>Use "Already" for actions that happened sooner than expected (usually in affirmatives). Use "Yet" for actions you expect to happen but haven't (in negatives and questions at the end). These time markers are vital for managing deadlines, updating managers, and coordinating daily tasks with others in a professional environment.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #10B981; background: rgba(16, 185, 129, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>Affirmative:</strong> [Subject] + <strong>have / has already</strong> + [Past Participle]</p>
    <p><strong>Negative:</strong> [Subject] + <strong>haven't / hasn't</strong> + [Past Participle] + <strong>yet</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 I <strong>have already</strong> finished. &rarr; ✅ [Finished early].</li>
      <li>📝 I <strong>haven't eaten yet</strong>. &rarr; 🍽️🚫 [Plan to eat later].</li>
      <li>📝 <strong>Have you</strong> called <strong>yet</strong>? &rarr; 📞? [Checking status].</li>
      <li>📝 She <strong>has already</strong> left. &rarr; 🚪 [Action complete].</li>
      <li>📝 They <strong>haven't arrived yet</strong>. &rarr; ⏳ [Still waiting].</li>
      <li>📝 <strong>Has he</strong> started <strong>yet</strong>? &rarr; 🚀? [Asking about beginning].</li>
      <li>📝 We <strong>have already</strong> paid. &rarr; 💳 [Settled early].</li>
      <li>📝 I <strong>haven't seen</strong> it <strong>yet</strong>. &rarr; 🎬🚫 [Still on the list].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(16, 185, 129, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Managing deadlines:</strong> "I <strong>have already</strong> sent the report, but I <strong>haven't</strong> received the feedback <strong>yet</strong>."</p>
    <p><strong>2. Coordinating lunch:</strong> "<strong>Have you</strong> ordered <strong>yet</strong>? No, I'm <strong>already</strong> here but waiting for you."</p>
    <p><strong>3. Work update:</strong> "The manager <strong>has already</strong> approved the project budget."</p>
  </div>
</div>`,
  43: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #3B82F6;">
    <h4>⚖️ Comparatives: Faster & More Expensive</h4>
    <p>Use comparatives to describe differences between two people or things. Add <strong>-er</strong> to short adjectives (faster) and use "More" for long adjectives (more expensive). Always use "Than" after the comparative. Mastering this allows you to evaluate options, express preferences, and provide detailed descriptions when making choices in daily life.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #3B82F6; background: rgba(59, 130, 246, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Short Adj. + er]</strong> + <strong>than</strong></p>
    <p><strong>more</strong> + <strong>[Long Adj.]</strong> + <strong>than</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 This is <strong>bigger than</strong> that. &rarr; 🐘 / 🐭 [Size].</li>
      <li>📝 I am <strong>taller than</strong> him. &rarr; 🦒 [Height].</li>
      <li>📝 It is <strong>more expensive than</strong> a car. &rarr; 💎 / 🚗 [Cost].</li>
      <li>📝 She is <strong>smarter than</strong> me. &rarr; 🧠 [Quality].</li>
      <li>📝 Today is <strong>hotter than</strong> yesterday. &rarr; ☀️ [Temperature].</li>
      <li>📝 This book is <strong>more interesting than</strong> the movie. &rarr; 📖 / 🎬 [Opinion].</li>
      <li>📝 Water is <strong>healthier than</strong> soda. &rarr; 💧 / 🥤 [Comparison].</li>
      <li>📝 He is <strong>better than</strong> before. &rarr; 📈 [Irregular: good &rarr; better].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(59, 130, 246, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Evaluating options:</strong> "The train is <strong>cheaper than</strong> the plane, but the plane is <strong>faster</strong>."</p>
    <p><strong>2. Expressing preference:</strong> "I like this apartment because it is <strong>brighter than</strong> my old one."</p>
    <p><strong>3. Comparing products:</strong> "This computer is <strong>more powerful than</strong> the laptop, but it is <strong>heavier</strong>."</p>
  </div>
</div>`,
  44: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #8B5CF6;">
    <h4>🏆 Superlatives: The Best & The Most...</h4>
    <p>Superlatives describe the extreme quality of one item in a group. Add <strong>-est</strong> to short adjectives (the biggest) and use "The Most" for long adjectives (the most beautiful). Always use "The" before the superlative. These words help you identify the best, worst, or most significant options when making final decisions or providing reviews.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #8B5CF6; background: rgba(139, 92, 246, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>the</strong> + <strong>[Short Adj. + est]</strong></p>
    <p><strong>the most</strong> + <strong>[Long Adj.]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 <strong>The biggest</strong> city. &rarr; 🏙️ [Extreme size].</li>
      <li>📝 <strong>The tallest</strong> building. &rarr; 🏢 [Height extreme].</li>
      <li>📝 <strong>The most beautiful</strong> place. &rarr; 🏞️ [Opinion extreme].</li>
      <li>📝 <strong>The fastest</strong> car. &rarr; 🏎️ [Speed extreme].</li>
      <li>📝 <strong>The best</strong> day ever! &rarr; 🌟 [Irregular: best].</li>
      <li>📝 <strong>The worst</strong> movie. &rarr; 🤢 [Irregular: worst].</li>
      <li>📝 <strong>The most expensive</strong> watch. &rarr; 💎 [Cost extreme].</li>
      <li>📝 <strong>The hottest</strong> month. &rarr; ☀️ [Weather extreme].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(139, 92, 246, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Making decisions:</strong> "Which hotel is <strong>the closest</strong> to the airport?"</p>
    <p><strong>2. Reviewing a product:</strong> "This is <strong>the most useful</strong> app I have ever downloaded."</p>
    <p><strong>3. Identifying the best:</strong> "He is <strong>the most talented</strong> musician in the entire band."</p>
  </div>
</div>`,
  45: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #EC4899;">
    <h4>🏃‍♂️ Adverbs of Manner: How we act</h4>
    <p>Adverbs of manner describe <strong>how</strong> an action is performed. Most are formed by adding <strong>-ly</strong> to an adjective (quick &rarr; quickly). Note that some are irregular (good &rarr; well). These descriptive words add nuance to your English, allowing you to explain the quality of work or behavior with high precision.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #EC4899; background: rgba(236, 72, 153, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Verb]</strong> + <strong>[Adjective + ly]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 He runs <strong>quickly</strong>. &rarr; 🏃‍♂️ [Speed].</li>
      <li>📝 She sings <strong>beautifully</strong>. &rarr; 🎶 [Quality].</li>
      <li>📝 They speak <strong>loudly</strong>. &rarr; 🗣️ [Volume].</li>
      <li>📝 You play <strong>well</strong>. &rarr; 🏅 [Irregular: well].</li>
      <li>📝 Walk <strong>slowly</strong>, please. &rarr; 🐢 [Instruction].</li>
      <li>📝 Listen <strong>carefully</strong>. &rarr; 👂 [Attention].</li>
      <li>📝 He works <strong>hard</strong>. &rarr; 💼 [Irregular: hard].</li>
      <li>📝 She smiles <strong>happily</strong>. &rarr; 😊 [Emotion].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(236, 72, 153, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Describing work quality:</strong> "He writes <strong>clearly</strong> and explains concepts <strong>patiently</strong>."</p>
    <p><strong>2. Following instructions:</strong> "Please drive <strong>carefully</strong> because the roads are very wet."</p>
    <p><strong>3. Reporting behavior:</strong> "The children played <strong>quietly</strong> in their room during the meeting."</p>
  </div>
</div>`,
  46: `
<div class="theory-premium">
  <div class="visual-card card-concept" style="border-left: 5px solid #EF4444;">
    <h4>⚖️ Too and Enough: Setting Limits</h4>
    <p>Use "Too" before adjectives to mean "more than necessary" (too hot). Use "Enough" after adjectives to mean "sufficient" (hot enough). For nouns, use "Enough" before them (enough money). Mastering these words is essential for expressing dissatisfaction, setting limits, and evaluating whether conditions are right for an action.</p>
  </div>
  <div class="visual-card card-structure" style="border-left: 5px solid #EF4444; background: rgba(239, 68, 68, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>too</strong> + <strong>[Adjective]</strong></p>
    <p><strong>[Adjective]</strong> + <strong>enough</strong></p>
    <p><strong>enough</strong> + <strong>[Noun]</strong></p>
  </div>
  <div class="visual-card card-examples">
    <h5>🎨 Visual Examples</h5>
    <ul class="premium-list">
      <li>📝 It is <strong>too cold</strong>. &rarr; ❄️ [Excessive].</li>
      <li>📝 I am tall <strong>enough</strong>. &rarr; 🦒 [Sufficient].</li>
      <li>📝 I have <strong>enough money</strong>. &rarr; 💵 [Sufficient quantity].</li>
      <li>📝 This coffee is <strong>too hot</strong>. &rarr; ☕🔥 [Excessive].</li>
      <li>📝 You are old <strong>enough</strong>. &rarr; 🆔 [Limit reached].</li>
      <li>📝 There aren't <strong>enough chairs</strong>. &rarr; 🪑🚫 [Insufficient].</li>
      <li>📝 He is <strong>too tired</strong> to work. &rarr; 😴 [Excessive exhaustion].</li>
      <li>📝 Is it good <strong>enough</strong>? &rarr; 🤔 [Questioning quality].</li>
    </ul>
  </div>
  <div class="visual-card card-logic" style="background: rgba(239, 68, 68, 0.05); border-radius: 1rem; padding: 1.5rem;">
    <h5>🌎 English in the Real World</h5>
    <p><strong>1. Expressing dissatisfaction:</strong> "The music is <strong>too loud</strong>, I can't hear you <strong>clearly</strong>."</p>
    <p><strong>2. Setting limits:</strong> "I don't have <strong>enough time</strong> to finish the project today."</p>
    <p><strong>3. Evaluating conditions:</strong> "Is the water warm <strong>enough</strong> for swimming?"</p>
  </div>
</div>`
};

topics.forEach(t => {
  if (batchContent[t.id]) {
    t.theory = batchContent[t.id].trim();
  }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('✅ A2 Topics 41-46 updated successfully.');
