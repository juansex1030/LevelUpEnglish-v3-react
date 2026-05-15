const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '../backend/data/topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const formulas = {
  5: `
  <div class="visual-card card-structure" style="border-left: 5px solid #F59E0B; background: rgba(245, 158, 11, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject Pronoun]</strong> + <strong>[Verb]</strong> + <strong>[Complement]</strong></p>
  </div>`,
  6: `
  <div class="visual-card card-structure" style="border-left: 5px solid #10B981; background: rgba(16, 185, 129, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>[am / is / are]</strong> + <strong>[Adjective / Noun / Place]</strong></p>
  </div>`,
  7: `
  <div class="visual-card card-structure" style="border-left: 5px solid #EF4444; background: rgba(239, 68, 68, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>Negative:</strong> [Subject] + [am/is/are] + <strong>not</strong> + [Complement]</p>
    <p><strong>Question:</strong> <strong>[Am / Is / Are]</strong> + [Subject] + [Complement]?</p>
  </div>`,
  8: `
  <div class="visual-card card-structure" style="border-left: 5px solid #3B82F6; background: rgba(59, 130, 246, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[A / An / The]</strong> + <strong>[Noun]</strong></p>
  </div>`,
  9: `
  <div class="visual-card card-structure" style="border-left: 5px solid #8B5CF6; background: rgba(139, 92, 246, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Singular Noun]</strong> + <strong>[-s / -es / -ies]</strong> = Plural</p>
  </div>`,
  10: `
  <div class="visual-card card-structure" style="border-left: 5px solid #EC4899; background: rgba(236, 72, 153, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[This / That / These / Those]</strong> + <strong>[Noun]</strong></p>
  </div>`,
  11: `
  <div class="visual-card card-structure" style="border-left: 5px solid #10B981; background: rgba(16, 185, 129, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Possessive Adjective]</strong> + <strong>[Noun]</strong></p>
  </div>`,
  12: `
  <div class="visual-card card-structure" style="border-left: 5px solid #3B82F6; background: rgba(59, 130, 246, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>[have / has]</strong> + <strong>[Object / Person]</strong></p>
  </div>`,
  13: `
  <div class="visual-card card-structure" style="border-left: 5px solid #EF4444; background: rgba(239, 68, 68, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>Negative:</strong> [Subject] + <strong>do/does not</strong> + [have] + [Complement]</p>
    <p><strong>Question:</strong> <strong>Do / Does</strong> + [Subject] + [have] + [Complement]?</p>
  </div>`,
  14: `
  <div class="visual-card card-structure" style="border-left: 5px solid #8B5CF6; background: rgba(139, 92, 246, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Owner] + 's + [Relative]</strong> (e.g., Maria's son)</p>
  </div>`,
  15: `
  <div class="visual-card card-structure" style="border-left: 5px solid #F59E0B; background: rgba(245, 158, 11, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>It is + [Time] + [o'clock / am / pm]</strong></p>
  </div>`
};

topics.forEach(t => {
  if (formulas[t.id]) {
    // Insert after the first visual-card (concept card)
    const firstCardEnd = t.theory.indexOf('</div>') + 6;
    if (firstCardEnd > 5) {
      t.theory = t.theory.slice(0, firstCardEnd) + formulas[t.id] + t.theory.slice(firstCardEnd);
    }
  }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('✅ Grammar formulas added to A1 Topics 5-15.');
