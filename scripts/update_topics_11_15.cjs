const fs = require('fs');
const path = require('path');
const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const updates = {
    11: `<div class="theory-premium academic-style">
  <div class="visual-card card-concept">
    <h4>📍 Prepositions of Place</h4>
    <p>Prepositions of place tell us <strong>where</strong> something or someone is located. They are one of the most used grammar tools in daily English — from giving directions to describing your home.</p>
  </div>
  <div class="visual-card card-structure">
    <h5>📌 The Core Prepositions</h5>
    <table class="theory-table">
      <thead><tr><th>Preposition</th><th>Meaning</th><th>Real-life Example</th></tr></thead>
      <tbody>
        <tr><td><strong>In</strong></td><td>Inside a space or area</td><td>"The keys are <strong>in</strong> my bag." / "She lives <strong>in</strong> Colombia."</td></tr>
        <tr><td><strong>On</strong></td><td>On a surface</td><td>"The book is <strong>on</strong> the table." / "The cat is <strong>on</strong> the roof."</td></tr>
        <tr><td><strong>At</strong></td><td>A specific point or location</td><td>"I'm <strong>at</strong> the office." / "Meet me <strong>at</strong> the door."</td></tr>
        <tr><td><strong>Under</strong></td><td>Below something</td><td>"The dog is sleeping <strong>under</strong> the bed."</td></tr>
        <tr><td><strong>Next to</strong></td><td>Beside something</td><td>"The pharmacy is <strong>next to</strong> the bank."</td></tr>
        <tr><td><strong>Between</strong></td><td>In the middle of two things</td><td>"The café is <strong>between</strong> the library and the park."</td></tr>
        <tr><td><strong>Behind</strong></td><td>At the back of something</td><td>"My car is <strong>behind</strong> the building."</td></tr>
        <tr><td><strong>In front of</strong></td><td>Facing something</td><td>"Wait <strong>in front of</strong> the main entrance."</td></tr>
      </tbody>
    </table>
  </div>
  <div class="visual-card card-examples">
    <h5>🗺️ Real Situation: Describing Your Home</h5>
    <ul class="premium-list">
      <li>"The TV is <strong>on</strong> the wall."</li>
      <li>"My shoes are <strong>under</strong> the bed."</li>
      <li>"The fridge is <strong>next to</strong> the oven."</li>
      <li>"The children are <strong>in</strong> the garden."</li>
    </ul>
  </div>
  <div class="visual-card card-warning">
    <h5>⚠️ IN vs AT — The Classic Confusion</h5>
    <p>Use <strong>IN</strong> for enclosed spaces and cities/countries. Use <strong>AT</strong> for specific points or addresses.</p>
    <ul class="premium-list">
      <li>✅ I live <strong>in</strong> Bogotá. / ✅ I'm <strong>at</strong> Calle 100.</li>
      <li>✅ She's <strong>in</strong> the room. / ✅ She's <strong>at</strong> the door.</li>
    </ul>
  </div>
</div>`,

    12: `<div class="theory-premium academic-style">
  <div class="visual-card card-concept">
    <h4>🏠 There Is / There Are</h4>
    <p>We use <strong>"There is"</strong> and <strong>"There are"</strong> to say that something <em>exists</em> or to describe what is in a place. This is one of the most practical structures in everyday English.</p>
  </div>
  <div class="visual-card card-structure">
    <h5>📌 The Core Structure</h5>
    <table class="theory-table">
      <thead><tr><th>Structure</th><th>When to use</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td><strong>There is</strong> (There's)</td><td>For singular or uncountable nouns</td><td>"<strong>There is</strong> a bank near here." / "<strong>There's</strong> some water in the glass."</td></tr>
        <tr><td><strong>There are</strong></td><td>For plural nouns</td><td>"<strong>There are</strong> three bedrooms in my apartment."</td></tr>
        <tr><td><strong>There isn't</strong></td><td>Negative singular</td><td>"<strong>There isn't</strong> a parking lot here."</td></tr>
        <tr><td><strong>There aren't</strong></td><td>Negative plural</td><td>"<strong>There aren't</strong> any eggs in the fridge."</td></tr>
        <tr><td><strong>Is there...?</strong></td><td>Question singular</td><td>"<strong>Is there</strong> a hospital nearby?"</td></tr>
        <tr><td><strong>Are there...?</strong></td><td>Question plural</td><td>"<strong>Are there</strong> any seats available?"</td></tr>
      </tbody>
    </table>
  </div>
  <div class="visual-card card-examples">
    <h5>🌍 Real Situation: Describing a City</h5>
    <ul class="premium-list">
      <li>"<strong>There are</strong> many restaurants in this neighborhood."</li>
      <li>"<strong>There is</strong> a metro station two blocks away."</li>
      <li>"<strong>Is there</strong> a grocery store open at night?" — "Yes, <strong>there is</strong> one on the corner."</li>
    </ul>
  </div>
  <div class="visual-card card-advanced">
    <h5>🚀 Professional Tip: Answering Questions</h5>
    <p>Short answers use the same "there" structure, not "it" or "they":</p>
    <ul class="premium-list">
      <li>"Is there a gym?" — ✅ "Yes, <strong>there is</strong>." ❌ "Yes, <strong>it is</strong>."</li>
      <li>"Are there any rooms?" — ✅ "No, <strong>there aren't</strong>." ❌ "No, <strong>they aren't</strong>."</li>
    </ul>
  </div>
</div>`,

    13: `<div class="theory-premium academic-style">
  <div class="visual-card card-concept">
    <h4>📝 Articles: A, An, The</h4>
    <p>Articles are tiny words with a huge impact. They tell your listener whether you are talking about something <strong>general</strong> (a/an) or something <strong>specific</strong> (the). Getting them right is a sign of fluency.</p>
  </div>
  <div class="visual-card card-structure">
    <h5>📌 When to Use Each Article</h5>
    <table class="theory-table">
      <thead><tr><th>Article</th><th>Rule</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td><strong>A</strong></td><td>Singular noun starting with a consonant sound. First mention.</td><td>"I have <strong>a</strong> dog." / "She is <strong>a</strong> doctor."</td></tr>
        <tr><td><strong>An</strong></td><td>Singular noun starting with a vowel sound.</td><td>"I ate <strong>an</strong> apple." / "He is <strong>an</strong> engineer."</td></tr>
        <tr><td><strong>The</strong></td><td>Both speaker and listener know which one. Specific.</td><td>"Can you close <strong>the</strong> door?" / "I love <strong>the</strong> restaurant we went to."</td></tr>
        <tr><td><strong>No article (Ø)</strong></td><td>General ideas, uncountable nouns, plural general statements.</td><td>"I love <strong>Ø</strong> music." / "<strong>Ø</strong> Dogs are loyal."</td></tr>
      </tbody>
    </table>
  </div>
  <div class="visual-card card-examples">
    <h5>💬 Real Situation: Telling a Story</h5>
    <p>Notice how A/An introduces, then The refers back to it:</p>
    <ul class="premium-list">
      <li>"I saw <strong>a</strong> man on the street. <strong>The</strong> man was wearing a red jacket."</li>
      <li>"I bought <strong>a</strong> new phone yesterday. <strong>The</strong> phone is really fast."</li>
    </ul>
  </div>
  <div class="visual-card card-warning">
    <h5>⚠️ The "AN" Sound Trick</h5>
    <p>"AN" is used before a <em>vowel sound</em>, not just a vowel letter. Focus on the pronunciation!</p>
    <ul class="premium-list">
      <li>✅ <strong>An</strong> hour (the H is silent, sounds like "ower")</li>
      <li>✅ <strong>A</strong> university (sounds like "yoo-niversity", starts with Y sound)</li>
      <li>✅ <strong>An</strong> honest person (H is silent)</li>
    </ul>
  </div>
</div>`,

    14: `<div class="theory-premium academic-style">
  <div class="visual-card card-concept">
    <h4>📦 Plural Nouns</h4>
    <p>In English, most nouns change their form when referring to more than one thing. Understanding the rules — and the exceptions — is essential for building correct sentences.</p>
  </div>
  <div class="visual-card card-structure">
    <h5>📌 The Spelling Rules</h5>
    <table class="theory-table">
      <thead><tr><th>Rule</th><th>Singular → Plural</th><th>Examples</th></tr></thead>
      <tbody>
        <tr><td>Most nouns → add <strong>-S</strong></td><td>book → books</td><td>car → cars, phone → phones</td></tr>
        <tr><td>Ends in -s, -sh, -ch, -x, -z → add <strong>-ES</strong></td><td>bus → buses</td><td>church → churches, box → boxes</td></tr>
        <tr><td>Ends in consonant + -Y → change to <strong>-IES</strong></td><td>city → cities</td><td>baby → babies, country → countries</td></tr>
        <tr><td>Ends in vowel + -Y → add <strong>-S</strong></td><td>day → days</td><td>key → keys, toy → toys</td></tr>
        <tr><td>Many -F / -FE endings → change to <strong>-VES</strong></td><td>leaf → leaves</td><td>wife → wives, knife → knives</td></tr>
      </tbody>
    </table>
  </div>
  <div class="visual-card card-advanced">
    <h5>🚀 Irregular Plurals — Must Memorize!</h5>
    <table class="theory-table">
      <thead><tr><th>Singular</th><th>Plural</th></tr></thead>
      <tbody>
        <tr><td>man</td><td><strong>men</strong></td></tr>
        <tr><td>woman</td><td><strong>women</strong></td></tr>
        <tr><td>child</td><td><strong>children</strong></td></tr>
        <tr><td>tooth</td><td><strong>teeth</strong></td></tr>
        <tr><td>foot</td><td><strong>feet</strong></td></tr>
        <tr><td>mouse</td><td><strong>mice</strong></td></tr>
        <tr><td>person</td><td><strong>people</strong></td></tr>
      </tbody>
    </table>
  </div>
  <div class="visual-card card-warning">
    <h5>⚠️ Words That Don't Change</h5>
    <p>Some nouns are the same in singular and plural. You need context to understand which:</p>
    <ul class="premium-list">
      <li><strong>sheep</strong> → one sheep, three sheep</li>
      <li><strong>fish</strong> → one fish, five fish</li>
      <li><strong>deer</strong> → one deer, many deer</li>
    </ul>
  </div>
</div>`,

    15: `<div class="theory-premium academic-style">
  <div class="visual-card card-concept">
    <h4>🏙️ Places in a City</h4>
    <p>Knowing the vocabulary for places around a city is one of the most practical skills in English — essential for travel, asking for directions, and everyday conversation.</p>
  </div>
  <div class="visual-card card-structure">
    <h5>📍 Essential City Vocabulary</h5>
    <table class="theory-table">
      <thead><tr><th>Place</th><th>What it is</th><th>Example sentence</th></tr></thead>
      <tbody>
        <tr><td><strong>Bank</strong></td><td>Where you manage money</td><td>"I need to go to the <strong>bank</strong> to withdraw cash."</td></tr>
        <tr><td><strong>Hospital</strong></td><td>Medical care center</td><td>"Take me to the <strong>hospital</strong>, I feel terrible."</td></tr>
        <tr><td><strong>Supermarket</strong></td><td>Large grocery store</td><td>"I'll stop by the <strong>supermarket</strong> after work."</td></tr>
        <tr><td><strong>Pharmacy</strong></td><td>Where you buy medicine</td><td>"Is there a <strong>pharmacy</strong> near here?"</td></tr>
        <tr><td><strong>Post office</strong></td><td>For sending mail and packages</td><td>"I need to send a package at the <strong>post office</strong>."</td></tr>
        <tr><td><strong>Library</strong></td><td>Books and study space</td><td>"The kids love reading at the <strong>library</strong>."</td></tr>
        <tr><td><strong>Police station</strong></td><td>Where police work</td><td>"Report theft at the <strong>police station</strong>."</td></tr>
        <tr><td><strong>Train station</strong></td><td>For train travel</td><td>"The <strong>train station</strong> is downtown."</td></tr>
      </tbody>
    </table>
  </div>
  <div class="visual-card card-examples">
    <h5>🗣️ Real Situation: Asking for Directions</h5>
    <ul class="premium-list">
      <li>"Excuse me, where is the nearest <strong>pharmacy</strong>?"</li>
      <li>"Go straight, turn left, and the <strong>bank</strong> is on your right."</li>
      <li>"Is there a <strong>supermarket</strong> open on Sundays?"</li>
    </ul>
  </div>
  <div class="visual-card card-advanced">
    <h5>🚀 Useful Phrases to Ask for Help</h5>
    <ul class="premium-list">
      <li>"<strong>Excuse me, could you tell me where</strong> the post office is?"</li>
      <li>"<strong>How far is</strong> the hospital from here?"</li>
      <li>"<strong>Is it far?</strong>" — "No, it's just around the corner."</li>
    </ul>
  </div>
</div>`,
};

topics.forEach(t => {
    if (updates[t.id]) t.theory = updates[t.id].trim();
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('Topics 11-15 updated with rich beginner-friendly content.');
