const Database = require('better-sqlite3');
const db = new Database('./data/database.db');
const tipBox = (t) => `<div style="background:rgba(0,173,181,0.1);border-left:3px solid #00ADB5;border-radius:0 0.5rem 0.5rem 0;padding:0.75rem 1rem;margin-top:1rem;font-size:0.92rem;">💡 <strong>Tip:</strong> ${t}</div>`;
const warn = (t) => `<div style="background:rgba(245,158,11,0.1);border-left:3px solid #F59E0B;border-radius:0 0.5rem 0.5rem 0;padding:0.75rem 1rem;margin-top:1rem;font-size:0.92rem;">⚠️ <strong>Watch out:</strong> ${t}</div>`;

const updates = [

// ── Topic 8: Demonstratives ──────────────────────────────────────────
{ number: 8, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/fhXBqekAEgkAAAAC/this-that.gif" alt="This That" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">👆 Demonstratives: This / That / These / Those</h5>
    <p style="margin:0;">Demonstratives are words that <strong>point to specific people or things</strong>. Just like pointing with your finger! The choice depends on <strong>how far away</strong> something is and <strong>how many</strong> there are.</p></div>
  </div>

  <div class="visual-card card-concept">
    <h5>📋 The 4 Demonstratives at a Glance</h5>
    <table style="width:100%;border-collapse:collapse;text-align:center;font-size:0.95rem;">
      <thead><tr style="border-bottom:2px solid rgba(0,173,181,0.3);">
        <th style="padding:0.6rem;"></th><th style="padding:0.6rem;">Near 👋 <small>(close to you)</small></th><th style="padding:0.6rem;">Far 🏔️ <small>(away from you)</small></th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:0.6rem;font-weight:bold;text-align:left;">One thing (singular)</td>
          <td style="padding:0.6rem;"><strong style="color:#00ADB5;font-size:1.2rem;">This</strong><br/><small style="color:#aaa;">este / esta / esto</small></td>
          <td style="padding:0.6rem;"><strong style="color:#00ADB5;font-size:1.2rem;">That</strong><br/><small style="color:#aaa;">ese / esa / eso / aquel</small></td>
        </tr>
        <tr>
          <td style="padding:0.6rem;font-weight:bold;text-align:left;">More than one (plural)</td>
          <td style="padding:0.6rem;"><strong style="color:#00ADB5;font-size:1.2rem;">These</strong><br/><small style="color:#aaa;">estos / estas</small></td>
          <td style="padding:0.6rem;"><strong style="color:#00ADB5;font-size:1.2rem;">Those</strong><br/><small style="color:#aaa;">esos / esas / aquellos</small></td>
        </tr>
      </tbody>
    </table>
    ${tipBox('Think of it this way: <strong>This / These</strong> = right here (you could touch it). <strong>That / Those</strong> = over there (you would have to walk to reach it).')}
  </div>

  <div class="visual-card card-concept">
    <h5>✍️ How to Use Them</h5>
    <p>Demonstratives can be used in two ways:</p>
    <p><strong>1. As adjectives</strong> (before a noun):</p>
    <ul>
      <li>👋 <strong>This</strong> book is interesting. <em style="color:#aaa;">(este libro)</em></li>
      <li>🏔️ <strong>That</strong> car is expensive. <em style="color:#aaa;">(ese carro)</em></li>
      <li>👋 <strong>These</strong> shoes are new. <em style="color:#aaa;">(estos zapatos)</em></li>
      <li>🏔️ <strong>Those</strong> students are smart. <em style="color:#aaa;">(esos estudiantes)</em></li>
    </ul>
    <p style="margin-top:0.75rem;"><strong>2. As pronouns</strong> (replacing a noun):</p>
    <ul>
      <li>👋 <strong>This</strong> is my phone. <em style="color:#aaa;">(Este es mi teléfono.)</em></li>
      <li>🏔️ <strong>That</strong> is a great idea! <em style="color:#aaa;">(¡Esa es una gran idea!)</em></li>
      <li>👋 <strong>These</strong> are delicious. <em style="color:#aaa;">(Estos están deliciosos.)</em></li>
      <li>🏔️ <strong>Those</strong> were the best days. <em style="color:#aaa;">(Esos eran los mejores días.)</em></li>
    </ul>
  </div>

  <div class="visual-card card-example">
    <h5>🤝 Special Use: Introductions</h5>
    <p>"<strong>This is...</strong>" is very commonly used to introduce someone:</p>
    <div style="background:rgba(0,0,0,0.15);border-radius:0.75rem;padding:1rem;line-height:2;">
      <em>"<strong>This is</strong> my friend Carlos."</em> = Te presento a mi amigo Carlos.<br/>
      <em>"<strong>This is</strong> my teacher, Mrs. Smith."</em><br/>
      <em>"<strong>These are</strong> my parents."</em>
    </div>
    ${warn('"This" and "These" do NOT change for masculine/feminine like in Spanish. They work the same for any noun!')}
  </div>

  <div class="visual-card card-example">
    <h5>💬 Dialogue Example</h5>
    <div style="background:rgba(0,0,0,0.15);border-radius:0.75rem;padding:1.25rem;line-height:2.2;font-size:0.93rem;">
      🔵 A: <em>Is <strong>this</strong> your bag?</em><br/>
      🟢 B: <em>No, <strong>that</strong> one over there is mine.</em><br/>
      🔵 A: <em>And <strong>these</strong> books? Are they yours too?</em><br/>
      🟢 B: <em>Yes! And <strong>those</strong> on the shelf are also mine.</em>
    </div>
  </div>
</div>`.trim() },

// ── Topic 9: Possessives ──────────────────────────────────────────────
{ number: 9, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/KN9Y4RGBBGwAAAAC/mine-its-mine.gif" alt="Mine" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">💼 Possessives</h5>
    <p style="margin:0;">Possessives show that something <strong>belongs to someone</strong>. English has two main ways to express possession: <strong>possessive adjectives</strong> (my, your, his...) and the <strong>apostrophe 's</strong> (Carlos's, Ana's...).</p></div>
  </div>

  <div class="visual-card card-concept">
    <h5>📋 Possessive Adjectives</h5>
    <p>These always come <strong>before a noun</strong> and tell us who owns something:</p>
    <table style="width:100%;border-collapse:collapse;font-size:0.93rem;">
      <thead><tr style="border-bottom:2px solid rgba(0,173,181,0.3);">
        <th style="padding:0.5rem;">Subject</th><th style="padding:0.5rem;text-align:center;">Possessive adj.</th><th style="padding:0.5rem;">Example</th>
      </tr></thead>
      <tbody>
        ${[['I','my','my book, my name'],['You','your','your pen, your phone'],['He','his','his car, his bag'],['She','her','her house, her cat'],['It','its','its color, its name'],['We','our','our school, our friends'],['They','their','their room, their parents']].map(([s,p,e],i)=>`<tr style="border-bottom:1px solid rgba(255,255,255,0.05);${i%2?'background:rgba(255,255,255,0.02)':''}"><td style="padding:0.4rem;">${s}</td><td style="padding:0.4rem;text-align:center;color:#00ADB5;font-weight:bold;">${p}</td><td style="padding:0.4rem;font-style:italic;font-size:0.88rem;">${e}</td></tr>`).join('')}
      </tbody>
    </table>
    ${warn('"its" (no apostrophe) is the possessive of "it". "It\'s" (with apostrophe) means "it is". These are completely different!')}
  </div>

  <div class="visual-card card-concept">
    <h5>✍️ Possessive Adjectives in Sentences</h5>
    <ul>
      <li>🏠 I love <strong>my</strong> house. <em style="color:#aaa;">(mi casa)</em></li>
      <li>📱 Is this <strong>your</strong> phone? <em style="color:#aaa;">(tu teléfono)</em></li>
      <li>🚗 <strong>His</strong> car is red. <em style="color:#aaa;">(Su carro — de él)</em></li>
      <li>👩 <strong>Her</strong> name is Sofia. <em style="color:#aaa;">(Su nombre — de ella)</em></li>
      <li>📚 <strong>Our</strong> class starts at 8. <em style="color:#aaa;">(Nuestra clase)</em></li>
      <li>🐶 <strong>Their</strong> dog is very big. <em style="color:#aaa;">(Su perro — de ellos)</em></li>
    </ul>
    ${tipBox('"his" = de él (masculino) / "her" = de ella (femenino). In Spanish both are "su" — in English, they are different!')}
  </div>

  <div class="visual-card card-example">
    <h5>🔑 Possessive 's — To Show Ownership</h5>
    <p>Add <strong>'s</strong> directly after a person's name or noun:</p>
    <ul>
      <li>👦 <strong>Carlos's</strong> book is on the table. <em style="color:#aaa;">(el libro de Carlos)</em></li>
      <li>👧 <strong>Ana's</strong> dress is beautiful. <em style="color:#aaa;">(el vestido de Ana)</em></li>
      <li>🐕 The <strong>dog's</strong> food is here. <em style="color:#aaa;">(la comida del perro)</em></li>
      <li>👨‍👩‍👧 <strong>My parents'</strong> house is big. <em style="color:#aaa;">(plural: only ' at the end)</em></li>
    </ul>
    ${warn('For <strong>plural nouns</strong> that already end in -s (parents, students, friends), just add the apostrophe after: <strong>parents\'</strong> house, <strong>students\'</strong> books.')}
  </div>
</div>`.trim() },

// ── Topic 10: What Time Is It? ────────────────────────────────────────
{ number: 10, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/qJq6FcAlHxwAAAAC/what-time-is-it-clock.gif" alt="Clock" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">🕐 What Time Is It?</h5>
    <p style="margin:0;">Telling and asking the time is an <strong>everyday skill</strong>. Whether you're at work, a restaurant, or school, you need to understand and express time clearly in English.</p></div>
  </div>

  <div class="visual-card card-concept">
    <h5>❓ How to Ask the Time</h5>
    <ul>
      <li>🕐 <strong>"What time is it?"</strong> — most common, informal</li>
      <li>🕐 <strong>"What's the time?"</strong> — also informal and common</li>
      <li>🕐 <strong>"Do you have the time?"</strong> — asking someone with a watch</li>
      <li>🕐 <strong>"Could you tell me the time, please?"</strong> — formal / polite</li>
    </ul>
  </div>

  <div class="visual-card card-concept">
    <h5>🕐 How to Tell the Time</h5>
    <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
      <thead><tr style="border-bottom:2px solid rgba(0,173,181,0.3);">
        <th style="padding:0.5rem;">Clock shows</th><th style="padding:0.5rem;">What you say</th><th style="padding:0.5rem;">Spanish equivalent</th>
      </tr></thead>
      <tbody>
        ${[
          ["3:00","It's three o'clock",'Son las tres en punto'],
          ["3:05","It's five past three",'Son las tres y cinco'],
          ["3:15","It's quarter past three",'Son las tres y cuarto'],
          ["3:30","It's half past three",'Son las tres y media'],
          ["3:45","It's quarter to four",'Son las cuatro menos cuarto'],
          ["3:50","It's ten to four",'Son las cuatro menos diez'],
          ["3:55","It's five to four",'Son las cuatro menos cinco'],
        ].map(([t,s,sp],i)=>`<tr style="border-bottom:1px solid rgba(255,255,255,0.05);${i%2?'background:rgba(255,255,255,0.02)':''}">
          <td style="padding:0.4rem;color:#00ADB5;font-weight:bold;">🕐 ${t}</td>
          <td style="padding:0.4rem;font-style:italic;">${s}</td>
          <td style="padding:0.4rem;color:#aaa;font-size:0.85rem;">${sp}</td>
        </tr>`).join('')}
      </tbody>
    </table>
    ${tipBox('Minutes 1-30: say "past" → <em>ten past three</em>. Minutes 31-59: say "to" (the next hour) → <em>quarter to four</em>.')}
  </div>

  <div class="visual-card card-concept">
    <h5>🌅 AM and PM</h5>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
      <div style="background:rgba(0,173,181,0.07);border-radius:0.75rem;padding:1rem;text-align:center;">
        <div style="font-size:2rem;">🌅</div>
        <strong>AM</strong><br/>
        <small>Midnight (12:00am) to Noon (11:59am)</small><br/>
        <em style="font-size:0.85rem;">7:00 AM = seven in the morning</em>
      </div>
      <div style="background:rgba(0,173,181,0.07);border-radius:0.75rem;padding:1rem;text-align:center;">
        <div style="font-size:2rem;">🌙</div>
        <strong>PM</strong><br/>
        <small>Noon (12:00pm) to Midnight (11:59pm)</small><br/>
        <em style="font-size:0.85rem;">3:00 PM = three in the afternoon</em>
      </div>
    </div>
    ${warn('"12:00 AM" = midnight (medianoche). "12:00 PM" = noon (mediodía). This often confuses people!')}
  </div>

  <div class="visual-card card-example">
    <h5>💬 Talking About Time in a Dialogue</h5>
    <div style="background:rgba(0,0,0,0.15);border-radius:0.75rem;padding:1.25rem;line-height:2.2;font-size:0.93rem;">
      🔵 A: <em>Excuse me, <strong>what time is it?</strong></em><br/>
      🟢 B: <em>It's <strong>half past two</strong>.</em><br/>
      🔵 A: <em>Oh! <strong>What time</strong> does the movie start?</em><br/>
      🟢 B: <em>At <strong>three o'clock</strong>. We have 30 minutes!</em><br/>
      🔵 A: <em>Great! <strong>What time</strong> does it end?</em><br/>
      🟢 B: <em>At <strong>five fifteen</strong>, I think.</em>
    </div>
  </div>
</div>`.trim() },

// ── Topic 26: Describing People ────────────────────────────────────────
{ number: 26, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/4h4plh6rJvwAAAAC/describe-description.gif" alt="Describing" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">🧑 Describing People</h5>
    <p style="margin:0;">In English we use <strong>adjectives</strong> to describe how someone looks (<strong>physical appearance</strong>) and what their character is like (<strong>personality</strong>). Adjectives always go <strong>before the noun</strong> in English, unlike Spanish!</p></div>
  </div>

  <div class="visual-card card-concept">
    <h5>📏 Physical Appearance</h5>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;font-size:0.92rem;">
      <div>
        <p><strong>📐 Height (altura):</strong></p>
        <ul><li>tall → alto/a</li><li>short → bajo/a</li><li>medium height → estatura media</li></ul>
        <p><strong>💪 Build (complexión):</strong></p>
        <ul><li>slim / thin → delgado/a</li><li>heavy / overweight → robusto/a</li><li>muscular → musculoso/a</li><li>average build → complexión media</li></ul>
      </div>
      <div>
        <p><strong>💇 Hair (cabello):</strong></p>
        <ul><li>long / short / medium</li><li>straight / curly / wavy</li><li>blonde / brown / black / red / grey / white</li></ul>
        <p><strong>👁️ Eyes (ojos):</strong></p>
        <ul><li>blue / green / brown / grey / hazel</li></ul>
        <p><strong>👴 Age:</strong></p>
        <ul><li>young / middle-aged / elderly</li></ul>
      </div>
    </div>
    ${tipBox('In English, adjectives NEVER change for plural or gender: "a tall man" / "a tall woman" / "tall people" → always <strong>tall</strong>!')}
  </div>

  <div class="visual-card card-concept">
    <h5>😊 Personality Adjectives</h5>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.5rem;font-size:0.88rem;">
      ${[['😄','funny','gracioso'],['🤝','friendly','amigable'],['💪','confident','seguro de sí'],['📚','intelligent','inteligente'],['😴','lazy','perezoso'],['🏃','energetic','energético'],['🤫','shy','tímido'],['🤲','generous','generoso'],['😎','outgoing','extrovertido'],['🧘','calm','tranquilo'],['💡','creative','creativo'],['🙁','serious','serio']].map(([e,en,es])=>`<div style="background:rgba(0,173,181,0.07);border-radius:0.5rem;padding:0.5rem 0.75rem;">${e} <strong>${en}</strong><br/><small style="color:#aaa;">${es}</small></div>`).join('')}
    </div>
  </div>

  <div class="visual-card card-example">
    <h5>✍️ How to Describe Someone</h5>
    <p>Use the verb <strong>"to be"</strong> + adjective:</p>
    <ul>
      <li>👦 Carlos is <strong>tall, slim, and friendly</strong>.</li>
      <li>👧 She has <strong>long, curly, brown</strong> hair and <strong>green</strong> eyes.</li>
      <li>👴 My grandfather is <strong>short, elderly</strong>, and has <strong>short grey</strong> hair.</li>
      <li>👩‍🏫 My teacher is <strong>middle-aged, confident</strong>, and very <strong>creative</strong>.</li>
    </ul>
    ${warn('Use "has" with hair/eyes: She <strong>has</strong> blue eyes. / He <strong>has</strong> curly hair. Use "is" with other traits: She <strong>is</strong> tall.')}
  </div>

  <div class="visual-card card-example">
    <h5>💬 Real Description Dialogue</h5>
    <div style="background:rgba(0,0,0,0.15);border-radius:0.75rem;padding:1.25rem;line-height:2.2;font-size:0.93rem;">
      🔵 A: <em>Can you <strong>describe</strong> your friend?</em><br/>
      🟢 B: <em>Sure! She is <strong>tall</strong> and <strong>slim</strong>. She has <strong>long, straight, black hair</strong> and <strong>brown eyes</strong>.</em><br/>
      🔵 A: <em>What is she like? What's her personality?</em><br/>
      🟢 B: <em>She is very <strong>outgoing</strong> and <strong>funny</strong>. Everyone likes her!</em>
    </div>
  </div>
</div>`.trim() }
];

let count = 0;
for (const u of updates) {
  const r = db.prepare("UPDATE topics SET theory=? WHERE level='A1' AND number=?").run(u.theory, u.number);
  if (r.changes > 0) { console.log('✅ A1 Topic', u.number); count++; }
  else console.log('⚠️  Not found:', u.number);
}
console.log(`\nDone: ${count}/${updates.length}`);
