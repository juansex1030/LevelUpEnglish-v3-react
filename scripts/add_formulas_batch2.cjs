const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '../backend/data/topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const formulas = {
  16: `
  <div class="visual-card card-structure" style="border-left: 5px solid #F59E0B; background: rgba(245, 158, 11, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[On / In]</strong> + <strong>[Day / Month]</strong></p>
  </div>`,
  17: `
  <div class="visual-card card-structure" style="border-left: 5px solid #10B981; background: rgba(16, 185, 129, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[At / On / In]</strong> + <strong>[Specific Time / Day / Period]</strong></p>
  </div>`,
  18: `
  <div class="visual-card card-structure" style="border-left: 5px solid #3B82F6; background: rgba(59, 130, 246, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Preposition]</strong> + <strong>the</strong> + <strong>[Noun]</strong></p>
  </div>`,
  19: `
  <div class="visual-card card-structure" style="border-left: 5px solid #8B5CF6; background: rgba(139, 92, 246, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>[Verb (-s/es)]</strong> + <strong>[Complement]</strong></p>
  </div>`,
  20: `
  <div class="visual-card card-structure" style="border-left: 5px solid #EF4444; background: rgba(239, 68, 68, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>Negative:</strong> [Subject] + <strong>don't / doesn't</strong> + [Base Verb] + [Complement]</p>
    <p><strong>Question:</strong> <strong>Do / Does</strong> + [Subject] + [Base Verb] + [Complement]?</p>
  </div>`,
  21: `
  <div class="visual-card card-structure" style="border-left: 5px solid #10B981; background: rgba(16, 185, 129, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>[Adverb]</strong> + <strong>[Verb]</strong> / <strong>[Subject]</strong> + <strong>[To Be]</strong> + <strong>[Adverb]</strong></p>
  </div>`,
  22: `
  <div class="visual-card card-structure" style="border-left: 5px solid #3B82F6; background: rgba(59, 130, 246, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>[can / can't]</strong> + <strong>[Base Verb]</strong> + <strong>[Complement]</strong></p>
    <p><strong>Question:</strong> <strong>Can</strong> + [Subject] + [Base Verb] + [Complement]?</p>
  </div>`,
  23: `
  <div class="visual-card card-structure" style="border-left: 5px solid #F59E0B; background: rgba(245, 158, 11, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[There is / are]</strong> + <strong>(not)</strong> + <strong>[Object(s)]</strong></p>
    <p><strong>Question:</strong> <strong>Is / Are</strong> + there + [Object(s)]?</p>
  </div>`,
  24: `
  <div class="visual-card card-structure" style="border-left: 5px solid #EC4899; background: rgba(236, 72, 153, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>[To Be]</strong> + <strong>[Adjective]</strong> or <strong>[Adjective]</strong> + <strong>[Noun]</strong></p>
  </div>`,
  25: `
  <div class="visual-card card-structure" style="border-left: 5px solid #8B5CF6; background: rgba(139, 92, 246, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>[am / is / are]</strong> + <strong>[Verb-ing]</strong> + <strong>[Complement]</strong></p>
  </div>`,
  26: `
  <div class="visual-card card-structure" style="border-left: 5px solid #EF4444; background: rgba(239, 68, 68, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>Negative:</strong> [Subject] + [am/is/are] + <strong>not</strong> + [Verb-ing]</p>
    <p><strong>Question:</strong> <strong>[Am / Is / Are]</strong> + [Subject] + [Verb-ing]?</p>
  </div>`,
  27: `
  <div class="visual-card card-structure" style="border-left: 5px solid #F59E0B; background: rgba(245, 158, 11, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Wh- Word]</strong> + <strong>[Auxiliary / To Be]</strong> + <strong>[Subject]</strong> + <strong>... ?</strong></p>
  </div>`,
  28: `
  <div class="visual-card card-structure" style="border-left: 5px solid #3B82F6; background: rgba(59, 130, 246, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>Affirmative:</strong> [Base Verb] + [Complement]</p>
    <p><strong>Negative:</strong> <strong>Don't</strong> + [Base Verb] + [Complement]</p>
  </div>`,
  29: `
  <div class="visual-card card-structure" style="border-left: 5px solid #8B5CF6; background: rgba(139, 92, 246, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>[Verb]</strong> + <strong>[Object Pronoun]</strong></p>
  </div>`,
  30: `
  <div class="visual-card card-structure" style="border-left: 5px solid #10B981; background: rgba(16, 185, 129, 0.03);">
    <h5>🧩 Grammar Formula</h5>
    <p><strong>[Subject]</strong> + <strong>[Verb]</strong> + <strong>[some / any]</strong> + <strong>[Noun]</strong></p>
  </div>`
};

topics.forEach(t => {
  if (formulas[t.id]) {
    const firstCardEnd = t.theory.indexOf('</div>') + 6;
    if (firstCardEnd > 5) {
      t.theory = t.theory.slice(0, firstCardEnd) + formulas[t.id] + t.theory.slice(firstCardEnd);
    }
  }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('✅ Grammar formulas added to A1 Topics 16-30.');
