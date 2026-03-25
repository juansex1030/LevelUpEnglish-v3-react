const Database = require('better-sqlite3');
const db = new Database('./data/database.db');
const tipBox = (t) => `<div style="background:rgba(0,173,181,0.1);border-left:3px solid #00ADB5;border-radius:0 0.5rem 0.5rem 0;padding:0.75rem 1rem;margin-top:1rem;font-size:0.92rem;">💡 <strong>Tip:</strong> ${t}</div>`;
const warn = (t) => `<div style="background:rgba(245,158,11,0.1);border-left:3px solid #F59E0B;border-radius:0 0.5rem 0.5rem 0;padding:0.75rem 1rem;margin-top:1rem;font-size:0.92rem;">⚠️ <strong>Watch out:</strong> ${t}</div>`;

const updates = [
// ── Topic 16: Likes and Dislikes ────────────────────────────────────────
{ number: 16, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/P1MkZ5rJNGsAAAAC/like-dislike.gif" alt="Like Dislike" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">❤️ Expressing Likes and Dislikes</h5>
    <p style="margin:0;">Talking about what you like and dislike is one of the most natural parts of a conversation. In English, we use specific verbs and phrases for this. The key: after these verbs, use a <strong>noun</strong> or a <strong>verb + -ing</strong>!</p></div>
  </div>
  <div class="visual-card card-concept">
    <h5>📊 Expressing Preferences (Strong → Weak)</h5>
    <div style="display:flex;flex-direction:column;gap:0.4rem;">
      ${[['❤️‍🔥','love','I love pizza.','I love watching movies.'],['😊','like','I like coffee.','I like reading.'],['🤷','don\'t mind','I don\'t mind spicy food.','I don\'t mind waiting.'],['😑','don\'t like','I don\'t like horror films.','I don\'t like waking up early.'],['😤','dislike','I dislike crowded places.','I dislike cooking.'],['🤢','hate / can\'t stand','I hate traffic.','I can\'t stand loud noises.']].map(([e,v,n,g])=>`<div style="display:flex;align-items:start;gap:0.75rem;padding:0.5rem;background:rgba(255,255,255,0.02);border-radius:0.4rem;"><span style="font-size:1.3rem;width:30px;">${e}</span><div><strong style="color:#00ADB5;">${v}</strong><br/><small>+ noun: <em>${n}</em></small><br/><small>+ verb-ing: <em>${g}</em></small></div></div>`).join('')}
    </div>
    ${tipBox('After like/love/hate, use <strong>verb-ing</strong>: "I love <strong>swimming</strong>." OR a noun: "I love <strong>music</strong>." Never "I love swim" ❌')}
  </div>
  <div class="visual-card card-example">
    <h5>❓ Asking About Preferences</h5>
    <ul>
      <li>❓ <strong>Do you like</strong> soccer? → Yes, I love it! / No, I don't really like it.</li>
      <li>❓ <strong>What do you like</strong> doing on weekends? → I like hiking and reading.</li>
      <li>❓ <strong>Do you prefer</strong> tea or coffee? → I prefer coffee.</li>
      <li>❓ <strong>What's your favorite</strong> food? → My favorite food is sushi.</li>
    </ul>
    ${warn('"Do you like" is for general likes. "Would you like" is for a specific offer right now: "Would you like some water?" = ¿Quieres un poco de agua?')}
  </div>
  <div class="visual-card card-example">
    <h5>💬 Conversation about Hobbies</h5>
    <div style="background:rgba(0,0,0,0.15);border-radius:0.75rem;padding:1.25rem;line-height:2.2;font-size:0.93rem;">
      🔵 A: <em>What do you like doing in your free time?</em><br/>
      🟢 B: <em>I <strong>love</strong> reading and I <strong>enjoy</strong> cooking. And you?</em><br/>
      🔵 A: <em>I <strong>like</strong> watching series, but I <strong>don't like</strong> staying home all day.</em><br/>
      🟢 B: <em>Me too! I <strong>hate</strong> being bored!</em>
    </div>
  </div>
</div>`.trim() },

// ── Topic 17: Present Continuous ────────────────────────────────────────
{ number: 17, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/EakVGLGFV80AAAAC/working-busy.gif" alt="Working" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">🔄 Present Continuous</h5>
    <p style="margin:0;">The Present Continuous describes something happening <strong>right now</strong>, at this exact moment, or a <strong>temporary action</strong> around now. It answers: "What are you doing?"</p></div>
  </div>
  <div class="visual-card card-concept">
    <h5>🧱 Structure: am/is/are + verb-ing</h5>
    <div style="background:rgba(0,173,181,0.08);border-radius:0.75rem;padding:1rem;text-align:center;margin-bottom:1rem;">
      <strong>Subject + am/is/are + verb<span style="color:#00ADB5;">-ing</span></strong>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
      <thead><tr style="border-bottom:2px solid rgba(0,173,181,0.3);"><th style="padding:0.4rem;">Subject</th><th style="padding:0.4rem;">Form</th><th style="padding:0.4rem;">Example</th></tr></thead>
      <tbody>
        ${[['I','am working','I am studying English.'],['You','are working','You are watching TV.'],['He / She / It','is working','She is eating lunch.'],['We / They','are working','They are playing football.']].map(([s,f,e],i)=>`<tr style="border-bottom:1px solid rgba(255,255,255,0.05);${i%2?'background:rgba(255,255,255,0.02)':''}"><td style="padding:0.4rem;">${s}</td><td style="padding:0.4rem;color:#00ADB5;font-weight:bold;">${f}</td><td style="padding:0.4rem;font-style:italic;font-size:0.88rem;">${e}</td></tr>`).join('')}
      </tbody>
    </table>
  </div>
  <div class="visual-card card-concept">
    <h5>📝 Spelling Rules for -ing</h5>
    <ul>
      <li>Most verbs: just add <strong>-ing</strong> → work → work<strong>ing</strong></li>
      <li>Ends in -e: drop e + add <strong>-ing</strong> → make → mak<strong>ing</strong></li>
      <li>Short verb (1 vowel + 1 consonant): double consonant → run → run<strong>ning</strong>, sit → sit<strong>ting</strong></li>
      <li>Ends in -ie: change to <strong>y + -ing</strong> → lie → ly<strong>ing</strong></li>
    </ul>
  </div>
  <div class="visual-card card-example">
    <h5>🧰 When to Use Present Continuous</h5>
    <ul>
      <li>⏱️ <strong>Right now:</strong> Look! It <strong>is raining</strong>!</li>
      <li>📅 <strong>Temporary:</strong> I <strong>am staying</strong> at a hotel this week.</li>
      <li>🗓️ <strong>Future plans (arranged):</strong> We <strong>are meeting</strong> at 7 PM tonight.</li>
    </ul>
    ${warn('Some verbs are NEVER used in continuous form (stative verbs): like, love, hate, know, believe, understand, want, need. Say "I <strong>know</strong>" not "I <strong>am knowing</strong>".')}
  </div>
  <div class="visual-card card-example">
    <h5>💬 Dialogue: What are you doing?</h5>
    <div style="background:rgba(0,0,0,0.15);border-radius:0.75rem;padding:1.25rem;line-height:2.2;font-size:0.93rem;">
      📞 B: <em>Hey! What <strong>are you doing</strong>?</em><br/>
      🔵 A: <em>I <strong>am cooking</strong> dinner. Why?</em><br/>
      📞 B: <em><strong>Are you watching</strong> the game tonight?</em><br/>
      🔵 A: <em>No, I <strong>am working</strong> late. <strong>Is</strong> it <strong>starting</strong> at 8?</em>
    </div>
  </div>
</div>`.trim() },

// ── Topic 18: Simple vs. Continuous ─────────────────────────────────────
{ number: 18, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/4GrxQTRIJSMAAAAC/simple-vs-continuous.gif" alt="vs" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">⚡ Simple Present vs. Present Continuous</h5>
    <p style="margin:0;">These two tenses can be confusing because they both talk about the present — but they do very different jobs! <strong>Simple Present</strong> = habits/facts. <strong>Present Continuous</strong> = happening right now.</p></div>
  </div>
  <div class="visual-card card-concept">
    <h5>📊 Side-by-Side Comparison</h5>
    <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
      <thead><tr style="border-bottom:2px solid rgba(0,173,181,0.3);"><th style="padding:0.5rem;width:50%;">Simple Present</th><th style="padding:0.5rem;width:50%;">Present Continuous</th></tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.5rem;">🔄 Habits & routines</td><td style="padding:0.5rem;">⏱️ Happening right now</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);background:rgba(255,255,255,0.02);"><td style="padding:0.5rem;">📖 Facts & permanent truths</td><td style="padding:0.5rem;">📅 Temporary situations</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.5rem;font-style:italic;color:#00ADB5;">I <strong>work</strong> every day.</td><td style="padding:0.5rem;font-style:italic;color:#00ADB5;">I <strong>am working</strong> right now.</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);background:rgba(255,255,255,0.02);"><td style="padding:0.5rem;font-style:italic;color:#00ADB5;">She <strong>lives</strong> in Paris.</td><td style="padding:0.5rem;font-style:italic;color:#00ADB5;">She <strong>is living</strong> in Paris this year.</td></tr>
        <tr><td style="padding:0.5rem;color:#aaa;font-size:0.85rem;">Key words: always, usually, every day</td><td style="padding:0.5rem;color:#aaa;font-size:0.85rem;">Key words: now, at the moment, today, this week</td></tr>
      </tbody>
    </table>
  </div>
  <div class="visual-card card-example">
    <h5>🎯 Same verb, different meaning!</h5>
    <ul>
      <li>🏠 "I <strong>live</strong> in Bogotá." → permanent fact (Simple Present)<br/>vs. 🏨 "I <strong>am living</strong> with my parents this month." → temporary (Continuous)</li>
      <li>☕ "He usually <strong>drinks</strong> coffee." → habit<br/>vs. ☕ "He <strong>is drinking</strong> coffee right now." → right now</li>
    </ul>
    ${tipBox('Clue words: "every day / always / usually" → Simple Present. "Now / at the moment / today / this week" → Present Continuous.')}
  </div>
</div>`.trim() },

// ── Topic 19: Simple Past ───────────────────────────────────────────────
{ number: 19, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/Gl1I5HgQ3PIAAAAC/yesterday-past.gif" alt="Past" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">⏮️ Simple Past</h5>
    <p style="margin:0;">The Simple Past is used to talk about <strong>completed actions in the past</strong> — things that started AND finished at a specific moment. It's like flipping from present to past!</p></div>
  </div>
  <div class="visual-card card-concept">
    <h5>📋 Regular Verbs: Add -ed</h5>
    <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
      <thead><tr style="border-bottom:2px solid rgba(0,173,181,0.3);"><th style="padding:0.4rem;">Rule</th><th style="padding:0.4rem;">Base form</th><th style="padding:0.4rem;">Past form</th></tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;">Most verbs</td><td style="padding:0.4rem;font-style:italic;">work, play, visit</td><td style="padding:0.4rem;color:#00ADB5;font-weight:bold;">worked, played, visited</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);background:rgba(255,255,255,0.02);"><td style="padding:0.4rem;">Ends in -e</td><td style="padding:0.4rem;font-style:italic;">like, love, dance</td><td style="padding:0.4rem;color:#00ADB5;font-weight:bold;">liked, loved, danced</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;">Ends in consonant+y</td><td style="padding:0.4rem;font-style:italic;">study, try</td><td style="padding:0.4rem;color:#00ADB5;font-weight:bold;">studied, tried</td></tr>
        <tr><td style="padding:0.4rem;">Short vowel + consonant</td><td style="padding:0.4rem;font-style:italic;">stop, plan</td><td style="padding:0.4rem;color:#00ADB5;font-weight:bold;">stopped, planned</td></tr>
      </tbody>
    </table>
  </div>
  <div class="visual-card card-warning">
    <h5>🚨 Common Irregular Verbs (must memorize!)</h5>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.5rem;font-size:0.88rem;text-align:center;">
      ${[['go','went'],['have','had'],['be','was/were'],['do','did'],['see','saw'],['eat','ate'],['drink','drank'],['come','came'],['take','took'],['give','gave'],['get','got'],['say','said'],['make','made'],['know','knew'],['think','thought']].map(([b,p])=>`<div style="background:rgba(245,158,11,0.08);border-radius:0.4rem;padding:0.4rem;"><span>${b}</span> → <strong style="color:#00ADB5;">${p}</strong></div>`).join('')}
    </div>
    ${warn('Irregular verbs do NOT follow the -ed rule. You must learn them individually — no shortcut here!')}
  </div>
  <div class="visual-card card-example">
    <h5>❌ Negative & ❓ Questions with "did"</h5>
    <ul>
      <li>➖ Subject + <strong>did not (didn't)</strong> + base verb → I <strong>didn't go</strong> to the party.</li>
      <li>❓ <strong>Did</strong> + subject + base verb → <strong>Did you see</strong> that movie?</li>
      <li>❓ What <strong>did</strong> you do yesterday? → I <strong>stayed</strong> home and <strong>watched</strong> TV.</li>
    </ul>
    ${tipBox('With "didn\'t" and "did", always use the <strong>base verb</strong> (no -ed): "She didn\'t <strong>go</strong>" NOT "She didn\'t <strong>went</strong>".')}
  </div>
</div>`.trim() },

// ── Topic 20: Describing Places ──────────────────────────────────────────
{ number: 20, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/xIPFUO9CaZkAAAAC/travel-city.gif" alt="Places" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">🗺️ Describing Places</h5>
    <p style="margin:0;">Whether you're talking about your city, your neighborhood, or a place you visited, you need vocabulary to <strong>describe locations, features, and opinions</strong> about places in English.</p></div>
  </div>
  <div class="visual-card card-concept">
    <h5>🏙️ Types of Places</h5>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;font-size:0.9rem;">
      <div><p><strong>🏛️ Urban:</strong></p><ul><li>city, town, village</li><li>downtown, neighborhood, suburb</li><li>district, block, street, avenue</li></ul></div>
      <div><p><strong>🌿 Natural:</strong></p><ul><li>beach, mountain, forest, river</li><li>lake, desert, valley, island</li><li>countryside, coast, cliff</li></ul></div>
    </div>
  </div>
  <div class="visual-card card-concept">
    <h5>📝 Adjectives to Describe Places</h5>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.5rem;font-size:0.88rem;">
      ${[['😍','beautiful'],['🤩','amazing'],['🏙️','modern'],['🏚️','old'],['🔇','quiet'],['📢','noisy/busy'],['🌿','green'],['🧱','crowded'],['🧹','clean'],['🗑️','dirty'],['🌡️','hot/cold'],['📐','big/small'],['🏃','lively'],['😴','boring'],['💎','expensive'],['💸','affordable']].map(([e,w])=>`<div style="background:rgba(0,173,181,0.07);border-radius:0.4rem;padding:0.4rem 0.6rem;">${e} ${w}</div>`).join('')}
    </div>
  </div>
  <div class="visual-card card-example">
    <h5>✍️ How to Describe a City</h5>
    <ul>
      <li>🏙️ "Bogotá is a <strong>big, modern</strong> city with a <strong>lively</strong> atmosphere."</li>
      <li>🏖️ "Cartagena is a <strong>beautiful, historical</strong> city on the Caribbean coast."</li>
      <li>🌿 "My town is small and <strong>quiet</strong> — I love how <strong>green</strong> and <strong>clean</strong> it is."</li>
    </ul>
    ${tipBox('Use "There is/are" to describe what a place HAS: "There <strong>is</strong> a park near my house." / "There <strong>are</strong> many restaurants downtown."')}
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
