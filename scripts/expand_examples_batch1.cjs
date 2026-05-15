const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '../backend/data/topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const batchUpdates = {
  5: {
    moreExamples: `
      <li>📝 <strong>We</strong> are students. &rarr; 👨‍🎓👩‍🎓 [A group of people].</li>
      <li>📝 <strong>You</strong> are very kind. &rarr; 😊 [Talking to one person].</li>
      <li>📝 <strong>He</strong> is my brother. &rarr; 👦 [Male relative].</li>
      <li>📝 <strong>You</strong> are all welcome. &rarr; 👐 [Talking to many people].</li>`
  },
  6: {
    moreExamples: `
      <li>📝 <strong>You're</strong> a doctor. &rarr; 👨‍⚕️ [Profession].</li>
      <li>📝 <strong>She's</strong> very smart. &rarr; 🧠 [Quality].</li>
      <li>📝 <strong>It's</strong> a beautiful cat. &rarr; 🐱 [Animal].</li>
      <li>📝 <strong>They're</strong> at the park. &rarr; 🌳 [Location].</li>`
  },
  7: {
    moreExamples: `
      <li>📝 <strong>Am I</strong> right? &rarr; 🤔 [Asking for confirmation].</li>
      <li>📝 <strong>We aren't</strong> busy. &rarr; ☕ [Negative state].</li>
      <li>📝 <strong>Is he</strong> your father? &rarr; 👴 [Relationship question].</li>
      <li>📝 <strong>You aren't</strong> alone. &rarr; 🤝 [Supportive negative].</li>`
  },
  8: {
    moreExamples: `
      <li>📝 I need <strong>an</strong> umbrella. &rarr; ☂️ [Starts with vowel sound].</li>
      <li>📝 She has <strong>a</strong> dog. &rarr; 🐕 [Starts with consonant].</li>
      <li>📝 Open <strong>the</strong> window. &rarr; 🪟 [Specific window].</li>
      <li>📝 <strong>The</strong> sun is yellow. &rarr; ☀️ [Unique object].</li>`
  },
  9: {
    moreExamples: `
      <li>📝 Many <strong>people</strong>. &rarr; 👨‍👩‍👧‍👦 [Irregular plural of person].</li>
      <li>📝 Ten <strong>buses</strong>. &rarr; 🚌🚌 [Ends in 's'].</li>
      <li>📝 Six <strong>knives</strong>. &rarr; 🔪🔪 [Ends in 'fe'].</li>
      <li>📝 Four <strong>tomatoes</strong>. &rarr; 🍅🍅 [Ends in 'o'].</li>`
  },
  10: {
    moreExamples: `
      <li>📝 <strong>This</strong> is my pen. &rarr; 🖊️ [Singular, near].</li>
      <li>📝 <strong>That</strong> is a mountain. &rarr; 🏔️ [Singular, far].</li>
      <li>📝 <strong>These</strong> are my friends. &rarr; 👫 [Plural, near].</li>
      <li>📝 <strong>Those</strong> are birds. &rarr; 🦅 [Plural, far].</li>`
  },
  11: {
    moreExamples: `
      <li>📝 <strong>Your</strong> car is fast. &rarr; 🏎️ [Ownership].</li>
      <li>📝 <strong>Its</strong> tail is long. &rarr; 🐕 [Animal's part].</li>
      <li>📝 <strong>Their</strong> house is new. &rarr; 🏠 [Group ownership].</li>
      <li>📝 <strong>Our</strong> teacher is nice. &rarr; 👩‍🏫 [Shared relationship].</li>`
  },
  12: {
    moreExamples: `
      <li>📝 We <strong>have</strong> a house. &rarr; 🏠 [Possession].</li>
      <li>📝 You <strong>have</strong> mail. &rarr; 📧 [Receiving].</li>
      <li>📝 It <strong>has</strong> four legs. &rarr; 🐕 [Animal characteristic].</li>
      <li>📝 They <strong>have</strong> breakfast. &rarr; 🍳 [Routine].</li>`
  },
  13: {
    moreExamples: `
      <li>📝 We <strong>don't have</strong> a car. &rarr; 🚗🚫 [Negative].</li>
      <li>📝 <strong>Do they have</strong> kids? &rarr; 👶 [Question].</li>
      <li>📝 <strong>Does he have</strong> a job? &rarr; 💼 [Third person question].</li>
      <li>📝 She <strong>doesn't have</strong> money. &rarr; 💸🚫 [Negative].</li>`
  },
  14: {
    moreExamples: `
      <li>📝 My <strong>grandmother</strong>. &rarr; 👵 [Parent's mother].</li>
      <li>📝 Her <strong>cousin</strong>. &rarr; 👦 [Aunt/Uncle's child].</li>
      <li>📝 His <strong>nephew</strong>. &rarr; 👦 [Brother/Sister's son].</li>
      <li>📝 Our <strong>parents</strong>. &rarr; 👨‍👩‍👧 [Mother and father].</li>`
  },
  15: {
    moreExamples: `
      <li>📝 It's <strong>five to</strong> nine. &rarr; 8️⃣:5️⃣5️⃣ [Minutes to].</li>
      <li>📝 It's <strong>ten past</strong> four. &rarr; 4️⃣:1️⃣0️⃣ [Minutes past].</li>
      <li>📝 It's <strong>noon</strong>. &rarr; 1️⃣2️⃣:0️⃣0️⃣ [Midday].</li>
      <li>📝 It's <strong>midnight</strong>. &rarr; 0️⃣0️⃣:0️⃣0️⃣ [Night].</li>`
  }
};

topics.forEach(t => {
  if (batchUpdates[t.id]) {
    // Insert more examples before the closing </ul> of the examples card
    const closingUlIndex = t.theory.lastIndexOf('</ul>');
    if (closingUlIndex !== -1) {
      t.theory = t.theory.slice(0, closingUlIndex) + batchUpdates[t.id].moreExamples + t.theory.slice(closingUlIndex);
    }
  }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('✅ A1 Topics 5-15 expanded with MORE examples.');
