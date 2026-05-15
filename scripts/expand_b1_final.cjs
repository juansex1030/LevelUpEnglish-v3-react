const fs = require('fs');
const path = require('path');
const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const b1ExpansionBatchFinal = {
  87: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>🛡️ B1 Conditionals Master Review</h4>
    <p>In B1, we mix conditionals to talk about different levels of reality. From logical truths to complete past fantasies.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>📊 The Conditional Matrix</h5>
    <table class="theory-table">
      <thead><tr><th>Type</th><th>Structure</th><th>Reality</th></tr></thead>
      <tbody>
        <tr><td><strong>Zero</strong></td><td>If + Pres, + Pres</td><td>100% True (Science)</td></tr>
        <tr><td><strong>First</strong></td><td>If + Pres, + Will</td><td>Possible Future</td></tr>
        <tr><td><strong>Second</strong></td><td>If + Past, + Would</td><td>Imaginary Present</td></tr>
        <tr><td><strong>Third</strong></td><td>If + PP, + Would Have</td><td>Past Regret</td></tr>
      </tbody>
    </table>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #EF4444;">
    <h5>🛡️ Scenario A: Security Protocols</h5>
    <ul>
      <li>🚨 "If the alarm <strong>rings</strong>, <strong>evacuate</strong> the building immediately." (Zero)</li>
      <li>🔥 "If there <strong>is</strong> a fire, I <strong>will call</strong> the fire department." (First)</li>
      <li>🛡️ "If the system <strong>crashed</strong>, we <strong>would lose</strong> all data." (Second/Imaginary)</li>
      <li>🚒 "If we <strong>had checked</strong> the sprinklers, the damage <strong>would have been</strong> less." (Third/Past)</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #8B5CF6;">
    <h5>💭 Scenario B: An Alternative Life</h5>
    <ul>
      <li>🌍 "If I <strong>had been</strong> born in the 1800s, I <strong>wouldn't have used</strong> a computer."</li>
      <li>🎓 "If I <strong>finish</strong> my degree, I <strong>will move</strong> to Canada."</li>
      <li>🦸 "If I <strong>had</strong> superpowers, I <strong>would solve</strong> global warming."</li>
    </ul>
  </div>
</div>`,

  88: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>🧪 Advanced Modals of Probability</h4>
    <p>Expressing scientific and professional uncertainty using *Might, May, Could, Must, Can't*.</p>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #10B981;">
    <h5>🧪 Scenario A: Interpreting Lab Results</h5>
    <ul>
      <li>🧬 "The DNA <strong>must be</strong> a match; the results are 99% certain."</li>
      <li>🔬 "The sample <strong>might contain</strong> traces of water, but more tests are needed."</li>
      <li>🦠 "This bacteria <strong>can't be</strong> harmful to humans at this temperature."</li>
      <li>📈 "The chemical reaction <strong>could take</strong> up to three hours to complete."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #3B82F6;">
    <h5>🤖 Scenario B: Predicting the Future of AI</h5>
    <ul>
      <li>🤖 "Artificial Intelligence <strong>may replace</strong> some jobs in the next decade."</li>
      <li>🌍 "Universal basic income <strong>might become</strong> a reality in some countries."</li>
      <li>💻 "Computers <strong>can't think</strong> like humans, but they are getting closer."</li>
      <li>🚀 "Automation <strong>must improve</strong> productivity if we want to grow."</li>
    </ul>
  </div>
</div>`,

  89: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>⚖️ B1 Past Modals: Ethics & Judgments</h4>
    <p>Using *Should have / Ought to have* to evaluate professional and personal ethics in the past.</p>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #EF4444;">
    <h5>⚖️ Scenario A: Ethics in Business</h5>
    <ul>
      <li>💼 "The CEO <strong>should have been</strong> more transparent about the losses."</li>
      <li>📊 "Investors <strong>ought to have checked</strong> the company's debt earlier."</li>
      <li>🚫 "We <strong>shouldn't have ignored</strong> the environmental impact of the factory."</li>
      <li>🤝 "The board <strong>should have consulted</strong> with the employees before the merger."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #F59E0B;">
    <h5>📉 Scenario B: Post-Crisis Review</h5>
    <ul>
      <li>🚒 "The emergency team <strong>should have arrived</strong> faster."</li>
      <li>📢 "The government <strong>should have warned</strong> the public about the storm."</li>
      <li>💰 "We <strong>shouldn't have invested</strong> all our money in a single project."</li>
      <li>📞 "I <strong>should have called</strong> you as soon as I heard the news."</li>
    </ul>
  </div>
</div>`,

  90: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>🏆 Past Accomplishments: Could vs. Managed to</h4>
    <p>A crucial B1 distinction. *Could* is for general ability; *Managed to / Was able to* is for a **specific success** in a difficult situation.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>🏗️ General vs. Specific Success</h5>
    <ul>
      <li>🏊 <strong>Could:</strong> "I <strong>could swim</strong> when I was 5." (General ability).</li>
      <li>🏅 <strong>Managed to:</strong> "The water was freezing, but I <strong>managed to swim</strong> across." (Specific achievement).</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #F43F5E;">
    <h5>🏆 Scenario A: Sporting Records & Struggles</h5>
    <ul>
      <li>🏃 "He was tired, but he <strong>managed to finish</strong> the marathon."</li>
      <li>🎾 "She <strong>was able to win</strong> the match despite her injury."</li>
      <li>🏊 "I <strong>could swim</strong> fast, but I never <strong>managed to win</strong> a gold medal."</li>
      <li>🧗 "The climbers <strong>managed to reach</strong> the summit just before the storm."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #10B981;">
    <h5>🏗️ Scenario B: Overcoming a Business Crisis</h5>
    <ul>
      <li>📉 "The company <strong>managed to avoid</strong> bankruptcy by selling its assets."</li>
      <li>💻 "The IT team <strong>was able to recover</strong> all the data after the cyberattack."</li>
      <li>🤝 "I <strong>managed to convince</strong> the client to sign the contract."</li>
      <li>🏢 "We <strong>couldn't open</strong> the office because of the snow, but we <strong>managed to work</strong> from home."</li>
    </ul>
  </div>
</div>`,

  91: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>♻️ B1 Passive Process: How things work</h4>
    <p>Using the passive voice to describe step-by-step cycles in nature, industry, and law.</p>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #10B981;">
    <h5>♻️ Scenario A: The Recycling Cycle</h5>
    <ul>
      <li>🗑️ "First, the waste <strong>is collected</strong> from the bins."</li>
      <li>🏭 "Then, the materials <strong>are sorted</strong> into paper, plastic, and glass."</li>
      <li>🔥 "The plastic <strong>is melted</strong> down and <strong>is turned</strong> into small pellets."</li>
      <li>📦 "Finally, new products <strong>are manufactured</strong> from the recycled materials."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #6366F1;">
    <h5>📜 Scenario B: How a Law is Made</h5>
    <ul>
      <li>📑 "A new idea <strong>is proposed</strong> by a member of the government."</li>
      <li>🗣️ "The proposal <strong>is debated</strong> in the parliament."</li>
      <li>🗳️ "Then, a vote <strong>is taken</strong> by all representatives."</li>
      <li>✍️ "Finally, the law <strong>is signed</strong> and <strong>is published</strong> in the official gazette."</li>
    </ul>
  </div>
</div>`,

  92: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>💰 Advanced Future Perfect Goals</h4>
    <p>Use *Future Perfect* to project your life goals and set deadlines for success.</p>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #F59E0B;">
    <h5>💰 Scenario A: Long-Term Financial Goals</h5>
    <ul>
      <li>📈 "By the age of 40, I <strong>will have invested</strong> in three different properties."</li>
      <li>🏢 "I <strong>will have established</strong> my own company by next year."</li>
      <li>💸 "We <strong>will have paid off</strong> our mortgage by 2035."</li>
      <li>🎓 "I <strong>will have saved</strong> enough money for my children's education."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #3B82F6;">
    <h5>🚀 Scenario B: Space Exploration Milestones</h5>
    <ul>
      <li>🛸 "By the end of the century, humans <strong>will have colonized</strong> Mars."</li>
      <li>🛰️ "Space agencies <strong>will have launched</strong> a mission to Alpha Centauri."</li>
      <li>👽 "Scientists <strong>will have found</strong> evidence of life on other planets."</li>
      <li>🌌 "Space tourism <strong>will have become</strong> a normal activity for the wealthy."</li>
    </ul>
  </div>
</div>`,

  93: `<div class="theory-premium">
  <div class="visual-card card-concept">
    <h4>🏠 B1 Relative Clauses: Non-Defining Precision</h4>
    <p>Use commas to add "bonus" information about people and places without changing the identity of the subject.</p>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #8B5CF6;">
    <h5>🏠 Scenario A: Luxury Real Estate Descriptions</h5>
    <ul>
      <li>🏰 "The penthouse, <strong>which</strong> overlooks Central Park, costs $10 million."</li>
      <li>🏊 "The villa, <strong>which</strong> includes a private infinity pool, is perfect for parties."</li>
      <li>🏙️ "Miami, <strong>where</strong> the weather is always warm, is a top destination."</li>
      <li>🌳 "The garden, <strong>whose</strong> trees were planted in 1850, is very peaceful."</li>
    </ul>
  </div>

  <div class="visual-card card-examples" style="border-left: 5px solid #0EA5E9;">
    <h5>📖 Scenario B: Biographies of Famous People</h5>
    <ul>
      <li>🎨 "Pablo Picasso, <strong>who</strong> was born in Spain, lived most of his life in France."</li>
      <li>🔬 "Marie Curie, <strong>whose</strong> research led to the discovery of radium, won two Nobel Prizes."</li>
      <li>💻 "Steve Jobs, <strong>who</strong> co-founded Apple, changed the world of technology."</li>
      <li>🏛️ "Rome, <strong>where</strong> the Colosseum is located, is a city full of history."</li>
    </ul>
  </div>
</div>`,

  94: `<div class="theory-premium">
  <div class="visual-card card-concept" style="background: linear-gradient(135deg, #6366F1, #A855F7); color: white;">
    <h4>🎓 B1 Final Mastery Review</h4>
    <p>Congratulations! You have reached the end of the B1 Intermediate curriculum. You are now capable of discussing complex topics, describing technical problems, and analyzing the past and future with precision.</p>
  </div>

  <div class="visual-card card-structure">
    <h5>🌟 B1 Skill Portfolio</h5>
    <ul>
      <li>✅ <strong>Advanced Storytelling:</strong> Using Narrative Tenses and Relative Clauses.</li>
      <li>✅ <strong>Critical Thinking:</strong> Using Modals of Deduction and Judgments.</li>
      <li>✅ <strong>Professional Accuracy:</strong> Using Passives and Reported Speech.</li>
      <li>✅ <strong>Goal Orientation:</strong> Using Future Perfect and Purpose Clauses.</li>
    </ul>
  </div>

  <div class="visual-card card-concept">
    <h5>🚀 Your Next Step: B2 Upper-Intermediate</h5>
    <p>The journey continues! In B2, you will learn to argue complex points of view, use advanced phrasal verbs, and understand subtle nuances in native speech.</p>
  </div>
</div>`
};

topics.forEach(t => {
  if (b1ExpansionBatchFinal[t.id]) {
    t.theory = b1ExpansionBatchFinal[t.id].trim();
  }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('✅ B1 Expansion: Final Batch (Topics 87-94) updated with ultra-premium content.');
