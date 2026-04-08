const Database = require('better-sqlite3');
const db = new Database('./data/database.db');

const tipBox = (text) => `<div style="background:rgba(0,173,181,0.1);border-left:3px solid #00ADB5;border-radius:0 0.5rem 0.5rem 0;padding:0.75rem 1rem;margin-top:1rem;font-size:0.92rem;">💡 <strong>Tip:</strong> ${text}</div>`;
const warn = (text) => `<div style="background:rgba(245,158,11,0.1);border-left:3px solid #F59E0B;border-radius:0 0.5rem 0.5rem 0;padding:0.75rem 1rem;margin-top:1rem;font-size:0.92rem;">⚠️ <strong>Watch out:</strong> ${text}</div>`;

const updates = [

// ── Topic 2: Personal Introduction ──────────────────────────────────
{ number: 2, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/FDoMmBqBo6MAAAAC/hi-im-new-here.gif" alt="Hi" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">🙋 Personal Introduction</h5>
    <p style="margin:0;">When you meet someone for the first time in English, you need to know how to <strong>give your name, say where you're from, and be polite</strong>. These phrases are used in real life every day!</p></div>
  </div>

  <div class="visual-card card-concept">
    <h5>🔑 How to Say Your Name</h5>
    <p>There are two main ways to introduce your name:</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:0.75rem 0;">
      <div style="background:rgba(0,173,181,0.07);border-radius:0.75rem;padding:1rem;">
        <strong style="color:#00ADB5;">My name is ___.</strong><br/>
        <small>More formal / neutral. Good in any situation.</small><br/><br/>
        <em>My name is Carlos.</em><br/>
        <em>My name is Sofia.</em>
      </div>
      <div style="background:rgba(0,173,181,0.07);border-radius:0.75rem;padding:1rem;">
        <strong style="color:#00ADB5;">I am ___ / I'm ___.</strong><br/>
        <small>Slightly informal. Very common in conversation.</small><br/><br/>
        <em>I am Carlos.</em><br/>
        <em>I'm Sofia.</em>
      </div>
    </div>
    ${tipBox('"My name is" and "I am" mean exactly the same thing. Use whichever feels more natural!')}
  </div>

  <div class="visual-card card-concept">
    <h5>🌎 Where Are You From?</h5>
    <p>To say your country or city:</p>
    <ul>
      <li>✅ <strong>I am from Colombia.</strong></li>
      <li>✅ <strong>I am from Bogotá.</strong></li>
      <li>✅ <strong>I am from Mexico City.</strong></li>
    </ul>
    <p>To ask someone where they are from:</p>
    <ul>
      <li>❓ <strong>Where are you from?</strong></li>
      <li>❓ <strong>Where do you come from?</strong> <em>(slightly more formal)</em></li>
    </ul>
    ${tipBox('To talk about your nationality (not your country): <strong>I am Colombian. / I am Mexican. / I am American.</strong>')}
  </div>

  <div class="visual-card card-concept">
    <h5>👔 How Old Are You?</h5>
    <ul>
      <li>To say your age: <strong>I am ___ years old.</strong> → <em>I am 25 years old.</em></li>
      <li>To ask: <strong>How old are you?</strong></li>
    </ul>
    ${warn('Never say "I have 25 years" — that is a Spanish translation error. In English: <strong>I AM 25 years old.</strong>')}
  </div>

  <div class="visual-card card-concept">
    <h5>🤝 Polite Phrases</h5>
    <table style="width:100%;border-collapse:collapse;font-size:0.92rem;">
      <thead><tr style="border-bottom:2px solid rgba(0,173,181,0.3);">
        <th style="padding:0.5rem;text-align:left;">Phrase</th><th style="padding:0.5rem;text-align:left;">Response</th><th style="padding:0.5rem;text-align:left;">When to use</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.5rem;"><strong>Nice to meet you.</strong></td><td style="padding:0.5rem;"><em>Nice to meet you too.</em></td><td style="padding:0.5rem;">First meeting</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.5rem;"><strong>Pleased to meet you.</strong></td><td style="padding:0.5rem;"><em>Pleased to meet you too.</em></td><td style="padding:0.5rem;">More formal</td></tr>
        <tr><td style="padding:0.5rem;"><strong>How do you do?</strong></td><td style="padding:0.5rem;"><em>How do you do?</em></td><td style="padding:0.5rem;">Very formal (rare)</td></tr>
      </tbody>
    </table>
  </div>

  <div class="visual-card card-example">
    <h5>💬 Full Conversation: First Meeting</h5>
    <div style="background:rgba(0,0,0,0.15);border-radius:0.75rem;padding:1.25rem;line-height:2.2;font-size:0.95rem;">
      🔵 A: <em>Hello! <strong>My name is</strong> Ana. <strong>What is your name?</strong></em><br/>
      🟢 B: <em>Hi Ana! <strong>I'm</strong> Carlos. <strong>Nice to meet you!</strong></em><br/>
      🔵 A: <em><strong>Nice to meet you too!</strong> <strong>Where are you from,</strong> Carlos?</em><br/>
      🟢 B: <em><strong>I'm from</strong> Mexico. And you?</em><br/>
      🔵 A: <em><strong>I'm from</strong> Colombia. <strong>How old are you?</strong></em><br/>
      🟢 B: <em><strong>I'm 22 years old.</strong> And you?</em><br/>
      🔵 A: <em><strong>I'm 20.</strong> It's great to meet you, Carlos!</em>
    </div>
  </div>

  <div class="visual-card card-example">
    <h5>⚡ Quick Reference</h5>
    <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;color:#00ADB5;width:40%;"><strong>My name is Ana.</strong></td><td style="padding:0.4rem;">Mi nombre es Ana.</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;color:#00ADB5;"><strong>I'm from Colombia.</strong></td><td style="padding:0.4rem;">Soy de Colombia.</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;color:#00ADB5;"><strong>I'm 20 years old.</strong></td><td style="padding:0.4rem;">Tengo 20 años.</td></tr>
        <tr><td style="padding:0.4rem;color:#00ADB5;"><strong>Nice to meet you.</strong></td><td style="padding:0.4rem;">Mucho gusto.</td></tr>
      </tbody>
    </table>
  </div>
</div>`.trim() },

// ── Topic 3: The Alphabet ──────────────────────────────────────────────
{ number: 3, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/Xs7KWMpTNIQAAAAC/alphabet-letters.gif" alt="Alphabet" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">🔤 The English Alphabet</h5>
    <p style="margin:0;">The English alphabet has <strong>26 letters</strong>. Knowing their names (how to pronounce them) is crucial because in real life you will often need to <strong>spell your name, email address, or a word you don't know</strong>.</p></div>
  </div>

  <div class="visual-card card-concept">
    <h5>🔤 All 26 Letters with Pronunciation</h5>
    <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:0.4rem;text-align:center;font-size:0.85rem;">
      ${[['A','ei'],['B','bi'],['C','si'],['D','di'],['E','i'],['F','ef'],['G','yi'],['H','eich'],['I','ai'],['J','yei'],['K','kei'],['L','el'],['M','em'],['N','en'],['O','ou'],['P','pi'],['Q','kyu'],['R','ar'],['S','es'],['T','ti'],['U','yu'],['V','vi'],['W','dablyu'],['X','eks'],['Y','wai'],['Z','zi']].map(([l,p])=>`<div style="background:rgba(0,173,181,0.07);border-radius:0.5rem;padding:0.4rem 0.2rem;"><strong style="font-size:1.1rem;color:#00ADB5;">${l}</strong><br/><small style="color:#aaa;">${p}</small></div>`).join('')}
    </div>
    ${tipBox('"H" is pronounced <strong>eich</strong> — NOT "hache" like in Spanish. And "W" is <strong>dablyu</strong>, very different!')}
  </div>

  <div class="visual-card card-concept">
    <h5>❓ How to Spell Something</h5>
    <p>When someone says a word you don't know, ask:</p>
    <ul>
      <li>❓ <strong>"How do you spell that?"</strong> — the most common way</li>
      <li>❓ <strong>"Can you spell that for me, please?"</strong> — polite version</li>
    </ul>
    <p>To answer, say each letter clearly:</p>
    <div style="background:rgba(0,0,0,0.15);border-radius:0.75rem;padding:1rem;margin-top:0.5rem;">
      <p style="margin:0;">Q: <em>"How do you spell your name?"</em><br/>
      A: <em>"S – O – F – I – A" → (es – ou – ef – ai – ei)</em></p>
    </div>
  </div>

  <div class="visual-card card-example">
    <h5>📝 Spelling Real Words</h5>
    <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;color:#00ADB5;"><strong>BOOK</strong></td><td style="padding:0.4rem;">B – O – O – K</td><td style="padding:0.4rem;color:#aaa;">(bi – ou – ou – kei)</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;color:#00ADB5;"><strong>HELLO</strong></td><td style="padding:0.4rem;">H – E – L – L – O</td><td style="padding:0.4rem;color:#aaa;">(eich – i – el – el – ou)</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;color:#00ADB5;"><strong>SCHOOL</strong></td><td style="padding:0.4rem;">S – C – H – O – O – L</td><td style="padding:0.4rem;color:#aaa;">(es – si – eich – ou – ou – el)</td></tr>
        <tr><td style="padding:0.4rem;color:#00ADB5;"><strong>ENGLISH</strong></td><td style="padding:0.4rem;">E – N – G – L – I – S – H</td><td style="padding:0.4rem;color:#aaa;">(i – en – yi – el – ai – es – eich)</td></tr>
      </tbody>
    </table>
  </div>

  <div class="visual-card card-warning">
    <h5>⚠️ Easily Confused Letters</h5>
    <p>These pairs sound similar and are often confused. Practice them!</p>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.75rem;text-align:center;margin-top:0.75rem;">
      <div style="background:rgba(245,158,11,0.1);border-radius:0.5rem;padding:0.75rem;"><strong style="font-size:1.3rem;">B</strong> vs <strong style="font-size:1.3rem;">V</strong><br/><small>(bi) vs (vi)</small></div>
      <div style="background:rgba(245,158,11,0.1);border-radius:0.5rem;padding:0.75rem;"><strong style="font-size:1.3rem;">G</strong> vs <strong style="font-size:1.3rem;">J</strong><br/><small>(yi) vs (yei)</small></div>
      <div style="background:rgba(245,158,11,0.1);border-radius:0.5rem;padding:0.75rem;"><strong style="font-size:1.3rem;">I</strong> vs <strong style="font-size:1.3rem;">E</strong><br/><small>(ai) vs (i)</small></div>
    </div>
    <p style="margin-top:0.75rem;">Tip: when spelling, say the letter name slowly and clearly. Ask them to repeat if needed — it's totally normal!</p>
  </div>
</div>`.trim() },

// ── Topic 4: Numbers ────────────────────────────────────────────────
{ number: 4, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/Z9vwNPNSFxoAAAAC/numbers-counting.gif" alt="Numbers" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">🔢 Numbers in English</h5>
    <p style="margin:0;">Numbers are used <strong>constantly</strong> in English — for prices 💰, phone numbers 📞, addresses 🏠, ages 🎂, and dates 📅. Learning them well is one of the best investments for an English beginner!</p></div>
  </div>

  <div class="visual-card card-concept">
    <h5>1️⃣ Cardinal Numbers: 1 to 20</h5>
    <p>These are the building blocks — memorize them well!</p>
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:0.5rem;text-align:center;font-size:0.88rem;">
      ${[['1','one'],['2','two'],['3','three'],['4','four'],['5','five'],['6','six'],['7','seven'],['8','eight'],['9','nine'],['10','ten'],['11','eleven'],['12','twelve'],['13','thirteen'],['14','fourteen'],['15','fifteen'],['16','sixteen'],['17','seventeen'],['18','eighteen'],['19','nineteen'],['20','twenty']].map(([n,w])=>`<div style="padding:0.5rem;background:rgba(0,173,181,0.07);border-radius:0.5rem;"><strong style="color:#00ADB5;font-size:1rem;">${n}</strong><br/><small>${w}</small></div>`).join('')}
    </div>
    ${tipBox('11 = eleven, 12 = twelve — these two are irregular. All others from 13-19 end in <strong>-teen</strong>.')}
  </div>

  <div class="visual-card card-concept">
    <h5>🔟 Tens: 20 to 100</h5>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.5rem;text-align:center;font-size:0.88rem;">
      ${[['20','twenty'],['30','thirty'],['40','forty'],['50','fifty'],['60','sixty'],['70','seventy'],['80','eighty'],['90','ninety'],['100','one hundred']].map(([n,w])=>`<div style="padding:0.5rem;background:rgba(0,173,181,0.07);border-radius:0.5rem;"><strong style="color:#00ADB5;">${n}</strong><br/><small>${w}</small></div>`).join('')}
    </div>
    ${warn('"Forty" — NOT "fourty". And "Fifty" — NOT "fivety". These are the most common spelling mistakes!')}
  </div>

  <div class="visual-card card-concept">
    <h5>🧩 How to Build Numbers 21–99</h5>
    <p>Combine a ten + a unit with a <strong>hyphen (-)</strong>:</p>
    <ul>
      <li>21 = twenty-<strong>one</strong></li>
      <li>35 = thirty-<strong>five</strong></li>
      <li>48 = forty-<strong>eight</strong></li>
      <li>67 = sixty-<strong>seven</strong></li>
      <li>99 = ninety-<strong>nine</strong></li>
    </ul>
    <div style="background:rgba(0,0,0,0.15);border-radius:0.75rem;padding:1rem;margin-top:0.5rem;">
      <strong>Pattern:</strong> [ten] + <strong>-</strong> + [unit]<br/>
      <em>seventy + three = seventy-three (73)</em>
    </div>
  </div>

  <div class="visual-card card-concept">
    <h5>🔢 Large Numbers</h5>
    <ul>
      <li>100 = <strong>one hundred</strong></li>
      <li>200 = <strong>two hundred</strong></li>
      <li>1,000 = <strong>one thousand</strong></li>
      <li>1,000,000 = <strong>one million</strong></li>
    </ul>
    <p>Combining: 250 = <strong>two hundred and fifty</strong></p>
    <p>1,450 = <strong>one thousand, four hundred and fifty</strong></p>
    ${tipBox('In English we say "and" between hundreds and the rest: "three hundred <strong>and</strong> forty-two."')}
  </div>

  <div class="visual-card card-example">
    <h5>🏆 Ordinal Numbers (1st, 2nd, 3rd…)</h5>
    <p>Used for <strong>order, dates, floors, and rankings</strong>:</p>
    <table style="width:100%;border-collapse:collapse;font-size:0.88rem;">
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.3rem;color:#00ADB5;"><strong>1st</strong> first</td><td style="padding:0.3rem;color:#00ADB5;"><strong>2nd</strong> second</td><td style="padding:0.3rem;color:#00ADB5;"><strong>3rd</strong> third</td><td style="padding:0.3rem;color:#00ADB5;"><strong>4th</strong> fourth</td></tr>
        <tr><td style="padding:0.3rem;color:#00ADB5;"><strong>5th</strong> fifth</td><td style="padding:0.3rem;color:#00ADB5;"><strong>8th</strong> eighth</td><td style="padding:0.3rem;color:#00ADB5;"><strong>9th</strong> ninth</td><td style="padding:0.3rem;color:#00ADB5;"><strong>12th</strong> twelfth</td></tr>
      </tbody>
    </table>
    <p style="margin-top:0.75rem;">From 4 onwards: just add <strong>-th</strong> → fourth, sixth, seventh, tenth...</p>
    ${warn('The first three are completely irregular: first, second, third — memorize them!')}
  </div>

  <div class="visual-card card-example">
    <h5>💬 Numbers in Real Life</h5>
    <ul>
      <li>📞 "My phone number is <strong>three – one – five – four – two – seven – eight – nine – six – zero</strong>."</li>
      <li>💰 "That's <strong>twenty-five</strong> dollars."</li>
      <li>🎂 "I'm <strong>twenty-two</strong> years old."</li>
      <li>🏠 "I live on the <strong>third</strong> floor."</li>
      <li>📅 "Today is <strong>March twenty-fourth</strong>."</li>
    </ul>
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
