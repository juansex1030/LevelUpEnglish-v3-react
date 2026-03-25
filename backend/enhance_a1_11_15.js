const Database = require('better-sqlite3');
const db = new Database('./data/database.db');
const tipBox = (t) => `<div style="background:rgba(0,173,181,0.1);border-left:3px solid #00ADB5;border-radius:0 0.5rem 0.5rem 0;padding:0.75rem 1rem;margin-top:1rem;font-size:0.92rem;">💡 <strong>Tip:</strong> ${t}</div>`;
const warn = (t) => `<div style="background:rgba(245,158,11,0.1);border-left:3px solid #F59E0B;border-radius:0 0.5rem 0.5rem 0;padding:0.75rem 1rem;margin-top:1rem;font-size:0.92rem;">⚠️ <strong>Watch out:</strong> ${t}</div>`;

const updates = [

// ── Topic 11: Prepositions of Time ────────────────────────────────────
{ number: 11, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/Jf3vZKv3gIYAAAAC/time-clock.gif" alt="Time" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">⏰ Prepositions of Time: AT / ON / IN</h5>
    <p style="margin:0;">Prepositions of time tell us <strong>when</strong> something happens. The three main ones are <strong>at</strong>, <strong>on</strong>, and <strong>in</strong>. Each one is used in very specific situations — they are NOT interchangeable!</p></div>
  </div>
  <div class="visual-card card-concept">
    <h5>📋 The Golden Rule</h5>
    <table style="width:100%;border-collapse:collapse;font-size:0.93rem;">
      <thead><tr style="border-bottom:2px solid rgba(0,173,181,0.3);">
        <th style="padding:0.5rem;text-align:center;">Preposition</th><th style="padding:0.5rem;">Used with</th><th style="padding:0.5rem;">Examples</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.5rem;text-align:center;color:#00ADB5;font-size:1.3rem;font-weight:bold;">AT</td><td style="padding:0.5rem;">⏰ Exact times<br/>🌙 Night / noon / midnight</td><td style="padding:0.5rem;font-size:0.88rem;font-style:italic;">at 3:00 PM<br/>at night, at noon</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);background:rgba(255,255,255,0.02);"><td style="padding:0.5rem;text-align:center;color:#00ADB5;font-size:1.3rem;font-weight:bold;">ON</td><td style="padding:0.5rem;">📅 Days of the week<br/>📆 Specific dates</td><td style="padding:0.5rem;font-size:0.88rem;font-style:italic;">on Monday<br/>on March 5th</td></tr>
        <tr><td style="padding:0.5rem;text-align:center;color:#00ADB5;font-size:1.3rem;font-weight:bold;">IN</td><td style="padding:0.5rem;">🌅 Parts of the day<br/>📅 Months, seasons, years</td><td style="padding:0.5rem;font-size:0.88rem;font-style:italic;">in the morning<br/>in March, in 2024</td></tr>
      </tbody>
    </table>
    ${tipBox('Memory trick: <strong>AT</strong> = a point (sharp time) → <strong>ON</strong> = a surface (day) → <strong>IN</strong> = inside a period (month, year, season).')}
  </div>
  <div class="visual-card card-example">
    <h5>✍️ Examples in Context</h5>
    <ul>
      <li>⏰ The class starts <strong>at</strong> 8:00 AM.</li>
      <li>🌙 I study <strong>at</strong> night.</li>
      <li>📅 I go to the gym <strong>on</strong> Mondays.</li>
      <li>📆 Her birthday is <strong>on</strong> April 3rd.</li>
      <li>🌅 I wake up <strong>in</strong> the morning.</li>
      <li>📅 We travel <strong>in</strong> the summer.</li>
      <li>🗓️ She was born <strong>in</strong> 2001.</li>
    </ul>
    ${warn('"In the morning/afternoon/evening" BUT "<strong>at</strong> night" — night is the exception! Never say "in night".')}
  </div>
  <div class="visual-card card-example">
    <h5>💬 Dialogue</h5>
    <div style="background:rgba(0,0,0,0.15);border-radius:0.75rem;padding:1.25rem;line-height:2.2;font-size:0.93rem;">
      🔵 A: <em>When is the meeting?</em><br/>
      🟢 B: <em>It's <strong>on</strong> Friday, <strong>at</strong> 10 AM.</em><br/>
      🔵 A: <em>And when does the project end?</em><br/>
      🟢 B: <em><strong>In</strong> June, I think.</em>
    </div>
  </div>
</div>`.trim() },

// ── Topic 12: Simple Present ────────────────────────────────────────────
{ number: 12, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/0G7sI_A4POEAAAAC/everyday-routine.gif" alt="Routine" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">📆 Simple Present Tense</h5>
    <p style="margin:0;">The Simple Present is used to talk about <strong>habits, routines, facts, and things that are generally true</strong>. It is one of the most used tenses in English!</p></div>
  </div>
  <div class="visual-card card-concept">
    <h5>📋 How to Form It</h5>
    <div style="background:rgba(0,173,181,0.08);border-radius:0.75rem;padding:1rem;text-align:center;margin-bottom:1rem;">
      <strong>Subject + base verb</strong> (add <strong>-s/-es</strong> for he/she/it)
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
      <thead><tr style="border-bottom:2px solid rgba(0,173,181,0.3);"><th style="padding:0.4rem;">Subject</th><th style="padding:0.4rem;">Verb "to work"</th><th style="padding:0.4rem;">Example</th></tr></thead>
      <tbody>
        ${[['I','work','I work every day.'],['You','work','You work hard.'],['He / She / It','works ⚠️','She works at a school.'],['We','work','We work together.'],['They','work','They work from home.']].map(([s,v,e],i)=>`<tr style="border-bottom:1px solid rgba(255,255,255,0.05);${i%2?'background:rgba(255,255,255,0.02)':''}"><td style="padding:0.4rem;">${s}</td><td style="padding:0.4rem;color:#00ADB5;font-weight:bold;">${v}</td><td style="padding:0.4rem;font-style:italic;font-size:0.85rem;">${e}</td></tr>`).join('')}
      </tbody>
    </table>
    ${warn('He / She / It always needs <strong>-s</strong> or <strong>-es</strong>! This is the most common mistake for beginners: "She work" ❌ → "She <strong>works</strong>" ✅')}
  </div>
  <div class="visual-card card-concept">
    <h5>❌ Negative: don't / doesn't</h5>
    <ul>
      <li>I / You / We / They + <strong>don't</strong> + verb → I <strong>don't</strong> eat meat.</li>
      <li>He / She / It + <strong>doesn't</strong> + verb (base!) → She <strong>doesn't</strong> like coffee.</li>
    </ul>
    ${tipBox('After "doesn\'t", use the base verb (no -s): "She doesn\'t <strong>work</strong>" NOT "She doesn\'t works".')}
  </div>
  <div class="visual-card card-example">
    <h5>❓ Questions: Do / Does</h5>
    <ul>
      <li><strong>Do</strong> you like music? → Yes, I do. / No, I don't.</li>
      <li><strong>Does</strong> he play football? → Yes, he does. / No, he doesn't.</li>
      <li>What <strong>do</strong> you study? → I study English.</li>
      <li>Where <strong>does</strong> she live? → She lives in Madrid.</li>
    </ul>
  </div>
  <div class="visual-card card-concept">
    <h5>🧰 When to Use Simple Present</h5>
    <ul>
      <li>🔄 <strong>Habits/Routines:</strong> I wake up at 7 every day.</li>
      <li>📖 <strong>Facts:</strong> The Earth orbits the Sun.</li>
      <li>❤️ <strong>Preferences:</strong> She loves Italian food.</li>
      <li>📅 <strong>Schedules:</strong> The train leaves at 9 AM.</li>
    </ul>
  </div>
</div>`.trim() },

// ── Topic 13: Adverbs of Frequency ────────────────────────────────────
{ number: 13, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/y9JqoJqy3NQAAAAC/always-always-always.gif" alt="Always" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">📊 Adverbs of Frequency</h5>
    <p style="margin:0;">Adverbs of frequency tell us <strong>how often</strong> something happens. They are used with the Simple Present and answer the question: <strong>"How often do you...?"</strong></p></div>
  </div>
  <div class="visual-card card-concept">
    <h5>📊 Frequency Scale (100% → 0%)</h5>
    <div style="display:flex;flex-direction:column;gap:0.4rem;">
      ${[['100%','always','Siempre','#00ADB5'],['90%','usually / generally','Generalmente','#1ab8bf'],['70%','often / frequently','Frecuentemente','#45c4ca'],['50%','sometimes','A veces','#70cfd4'],['30%','occasionally','Ocasionalmente','#a0dde0'],['10%','rarely / seldom','Raramente','#c5eaec'],['0%','never','Nunca','#888']].map(([p,w,s,c])=>`<div style="display:flex;align-items:center;gap:0.75rem;padding:0.4rem 0.75rem;background:rgba(255,255,255,0.03);border-radius:0.4rem;"><span style="color:${c};font-weight:bold;width:40px;text-align:right;font-size:0.85rem;">${p}</span><strong style="color:${c};width:120px;">${w}</strong><span style="color:#aaa;font-size:0.85rem;">${s}</span></div>`).join('')}
    </div>
  </div>
  <div class="visual-card card-example">
    <h5>📍 Where to Put Adverbs of Frequency</h5>
    <p><strong>Before the main verb</strong> (but after "to be"):</p>
    <ul>
      <li>✅ I <strong>always</strong> eat breakfast. <em style="color:#aaa;">(before main verb)</em></li>
      <li>✅ She <strong>never</strong> eats meat. <em style="color:#aaa;">(before main verb)</em></li>
      <li>✅ He is <strong>usually</strong> late. <em style="color:#aaa;">(after "to be")</em></li>
      <li>❌ I eat always breakfast. ← Wrong!</li>
    </ul>
    ${tipBox('"Always", "usually", "often", "sometimes", "rarely", "never" go <strong>before</strong> the main verb and <strong>after</strong> the verb "to be".')}
  </div>
  <div class="visual-card card-example">
    <h5>💬 Conversation</h5>
    <div style="background:rgba(0,0,0,0.15);border-radius:0.75rem;padding:1.25rem;line-height:2.2;font-size:0.93rem;">
      🔵 A: <em>How often do you exercise?</em><br/>
      🟢 B: <em>I <strong>usually</strong> go to the gym three times a week. And you?</em><br/>
      🔵 A: <em>I <strong>rarely</strong> exercise. I'm <strong>always</strong> busy with work.</em><br/>
      🟢 B: <em>You should <strong>sometimes</strong> take a break!</em>
    </div>
  </div>
</div>`.trim() },

// ── Topic 14: Comparatives ─────────────────────────────────────────────
{ number: 14, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/PkIMgrUepRUAAAAC/compare-comparison.gif" alt="Compare" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">⚖️ Comparatives</h5>
    <p style="margin:0;">Comparatives are used to <strong>compare two people, things, or places</strong>. We use them to say one is bigger, better, faster, etc. than the other. The keyword is <strong>"than"</strong>!</p></div>
  </div>
  <div class="visual-card card-concept">
    <h5>📋 How to Form Comparatives</h5>
    <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
      <thead><tr style="border-bottom:2px solid rgba(0,173,181,0.3);"><th style="padding:0.5rem;">Adjective type</th><th style="padding:0.5rem;">Rule</th><th style="padding:0.5rem;">Example</th></tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;">Short (1 syllable)<br/><small>fast, tall, big</small></td><td style="padding:0.4rem;color:#00ADB5;">Add <strong>-er</strong></td><td style="padding:0.4rem;font-style:italic;">fast → fast<strong>er</strong></td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);background:rgba(255,255,255,0.02);"><td style="padding:0.4rem;">Ends in -e<br/><small>nice, large</small></td><td style="padding:0.4rem;color:#00ADB5;">Add <strong>-r</strong></td><td style="padding:0.4rem;font-style:italic;">nice → nice<strong>r</strong></td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;">1 vowel + 1 consonant<br/><small>big, hot</small></td><td style="padding:0.4rem;color:#00ADB5;">Double consonant + <strong>-er</strong></td><td style="padding:0.4rem;font-style:italic;">big → big<strong>ger</strong></td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);background:rgba(255,255,255,0.02);"><td style="padding:0.4rem;">Ends in -y<br/><small>happy, easy</small></td><td style="padding:0.4rem;color:#00ADB5;">Change y → <strong>ier</strong></td><td style="padding:0.4rem;font-style:italic;">happy → happ<strong>ier</strong></td></tr>
        <tr><td style="padding:0.4rem;">Long (2+ syllables)<br/><small>beautiful, expensive</small></td><td style="padding:0.4rem;color:#00ADB5;">Use <strong>more</strong> + adj</td><td style="padding:0.4rem;font-style:italic;"><strong>more</strong> beautiful</td></tr>
      </tbody>
    </table>
    ${tipBox('The structure is: <strong>Subject + verb + comparative + "than" + second subject</strong>. Example: Dogs are smarter <strong>than</strong> cats.')}
  </div>
  <div class="visual-card card-warning">
    <h5>🚨 Irregular Comparatives</h5>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.75rem;text-align:center;">
      ${[['good','better'],['bad','worse'],['far','farther/further'],['little','less'],['much/many','more']].map(([a,c])=>`<div style="background:rgba(245,158,11,0.1);border-radius:0.5rem;padding:0.6rem;"><strong>${a}</strong> → <strong style="color:#00ADB5;">${c}</strong></div>`).join('')}
    </div>
  </div>
  <div class="visual-card card-example">
    <h5>✍️ Examples</h5>
    <ul>
      <li>🐢 A turtle is <strong>slower than</strong> a rabbit.</li>
      <li>🏔️ Everest is <strong>taller than</strong> any other mountain.</li>
      <li>😊 Today I feel <strong>better than</strong> yesterday.</li>
      <li>💰 This car is <strong>more expensive than</strong> mine.</li>
      <li>📚 English is <strong>easier than</strong> I thought!</li>
    </ul>
  </div>
</div>`.trim() },

// ── Topic 15: Food ─────────────────────────────────────────────────────
{ number: 15, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/7lKp93Nl788AAAAC/eating-food.gif" alt="Food" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">🍽️ Food Vocabulary</h5>
    <p style="margin:0;">Knowing food vocabulary is essential for shopping 🛒, restaurants 🍴, and everyday conversations. In English, food nouns can be <strong>countable</strong> (individual items) or <strong>uncountable</strong> (mass nouns).</p></div>
  </div>
  <div class="visual-card card-concept">
    <h5>🥦 Food Groups Vocabulary</h5>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;font-size:0.9rem;">
      <div><p><strong>🥩 Protein:</strong></p><ul><li>chicken, beef, pork, fish</li><li>eggs, beans, tofu, nuts</li></ul>
      <p><strong>🥦 Vegetables:</strong></p><ul><li>carrots, broccoli, tomatoes</li><li>onions, peppers, spinach</li></ul></div>
      <div><p><strong>🍎 Fruit:</strong></p><ul><li>apples, bananas, oranges</li><li>grapes, strawberries, mango</li></ul>
      <p><strong>🌾 Grains / Carbs:</strong></p><ul><li>rice, bread, pasta, cereal</li><li>potatoes, oats, corn</li></ul></div>
    </div>
  </div>
  <div class="visual-card card-concept">
    <h5>🔢 Countable vs. Uncountable</h5>
    <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
      <thead><tr style="border-bottom:2px solid rgba(0,173,181,0.3);"><th style="padding:0.4rem;">Countable (a/an, numbers)</th><th style="padding:0.4rem;">Uncountable (some, any, much)</th></tr></thead>
      <tbody>
        <tr><td style="padding:0.4rem;font-size:0.88rem;">an apple, two eggs, three carrots</td><td style="padding:0.4rem;font-size:0.88rem;">rice, water, bread, sugar, milk</td></tr>
        <tr style="background:rgba(255,255,255,0.02);"><td style="padding:0.4rem;font-size:0.85rem;font-style:italic;">I want <strong>an</strong> egg. I have <strong>three</strong> apples.</td><td style="padding:0.4rem;font-size:0.85rem;font-style:italic;">I want <strong>some</strong> rice. There isn't <strong>any</strong> milk.</td></tr>
      </tbody>
    </table>
    ${warn('"Bread", "rice", "water" are uncountable — you cannot say "a bread" or "two rices". Say "a <strong>loaf of</strong> bread" or "a <strong>glass of</strong> water".')}
  </div>
  <div class="visual-card card-example">
    <h5>🍴 Useful Food Phrases</h5>
    <ul>
      <li>🛒 "I need to buy <strong>some</strong> vegetables." / "Do we have <strong>any</strong> milk?"</li>
      <li>🍴 "I'd like <strong>a</strong> chicken sandwich, please."</li>
      <li>😋 "This pizza is <strong>delicious</strong>!"</li>
      <li>🚫 "I don't eat meat. I'm a <strong>vegetarian</strong>."</li>
      <li>🤤 "I'm <strong>hungry</strong>. Let's get something to eat."</li>
    </ul>
  </div>
</div>`.trim() }
];

let count = 0;
for (const u of updates) {
  const r = db.prepare("UPDATE topics SET theory=? WHERE LOWER(level)='a1' AND number=?").run(u.theory, u.number);
  if (r.changes > 0) { console.log('✅ A1 Topic', u.number); count++; }
  else console.log('⚠️  Not found:', u.number);
}
console.log(`\nDone: ${count}/${updates.length}`);
