const Database = require('better-sqlite3');
const db = new Database('./data/database.db');

const teal = '#00ADB5';
const tipBg = 'rgba(0,173,181,0.08)';
const cardBg = 'rgba(0,173,181,0.07)';

const tip = (text) => `
  <div style="background:${tipBg}; border-radius:0.5rem; padding:0.75rem 1rem; margin-top:0.75rem; font-size:0.9rem;">
    💡 <strong>Tip:</strong> ${text}
  </div>`;

const miniCard = (emoji, title, desc) => `
  <div style="background:${cardBg}; border-radius:0.75rem; padding:1rem; text-align:center;">
    <div style="font-size:2rem;">${emoji}</div>
    <strong>${title}</strong>
    <p style="font-size:0.85rem; margin:0.25rem 0 0;">${desc}</p>
  </div>`;

const updates = [

  // ── Topic 2: Personal Introduction ─────────────────────────────────
  { number: 2, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/FDoMmBqBo6MAAAAC/hi-im-new-here.gif" alt="Personal intro" style="width:100px;height:100px;border-radius:50%;object-fit:cover;flex-shrink:0;" />
    <div>
      <h5 style="margin:0 0 0.5rem;">🙋 Personal Introduction</h5>
      <p style="margin:0;">Introducing yourself is fundamental. We use the verb <strong>"to be"</strong> to share basic information and ask about others.</p>
    </div>
  </div>
  <div class="visual-card card-concept">
    <h5>🔑 Key Phrases</h5>
    <ul>
      <li>🏷️ <strong>My name is...</strong> / <strong>I am...</strong> — to say your name (the second is slightly informal).</li>
      <li>❓ <strong>What is your name?</strong> — to ask for someone's name.</li>
      <li>🌎 <strong>I am from...</strong> — to say where you are from.</li>
      <li>❓ <strong>Where are you from?</strong> — to ask where someone is from.</li>
      <li>🤝 <strong>Nice to meet you.</strong> → Reply: <strong>Nice to meet you too.</strong></li>
    </ul>
    ${tip('"I am from" = "Soy de". Don\'t try to translate word for word — learn the phrase as a fixed expression!')}
  </div>
  <div class="visual-card card-example">
    <h5>💬 Full Conversation Example</h5>
    <div style="background:rgba(0,0,0,0.15);border-radius:0.75rem;padding:1.25rem;line-height:2;">
      <p style="margin:0;">
        🔵 A: Hello! <strong>My name is</strong> Ana. <strong>What is your name?</strong><br/>
        🟢 B: Hi Ana! <strong>I am</strong> Carlos. <strong>Nice to meet you.</strong><br/>
        🔵 A: <strong>Nice to meet you too</strong>, Carlos. <strong>Where are you from?</strong><br/>
        🟢 B: <strong>I am from</strong> Mexico. And you?<br/>
        🔵 A: <strong>I am from</strong> Colombia.
      </p>
    </div>
  </div>
</div>`.trim() },

  // ── Topic 3: The Alphabet ───────────────────────────────────────────
  { number: 3, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/Xs7KWMpTNIQAAAAC/alphabet-letters.gif" alt="Alphabet" style="width:100px;height:100px;border-radius:50%;object-fit:cover;flex-shrink:0;" />
    <div>
      <h5 style="margin:0 0 0.5rem;">🔤 The Alphabet</h5>
      <p style="margin:0;">Knowing the <strong>pronunciation</strong> of each letter is crucial for <strong>spelling</strong> — names, emails, addresses. English spelling ≠ English sound!</p>
    </div>
  </div>
  <div class="visual-card card-concept">
    <h5>❓ The Magic Question</h5>
    <p style="font-size:1.05rem;"><strong>"How do you spell that?"</strong> → Answer letter by letter.</p>
    ${tip('"Spell" means to say each letter one by one. In English this is very common in real life!')}
  </div>
  <div class="visual-card card-example">
    <h5>📝 Spelling Examples</h5>
    <ul>
      <li>📚 <strong>Book:</strong> B – O – O – K <em style="color:#888;">(bi – ou – ou – kei)</em></li>
      <li>👤 <strong>John:</strong> J – O – H – N <em style="color:#888;">(yei – ou – eich – en)</em></li>
      <li>👋 <strong>Hello:</strong> H – E – L – L – O <em style="color:#888;">(eich – i – el – el – ou)</em></li>
    </ul>
  </div>
  <div class="visual-card card-warning">
    <h5>⚠️ Easily Confused Letters</h5>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
      <div style="text-align:center;padding:0.75rem;background:rgba(245,158,11,0.1);border-radius:0.5rem;">
        <strong style="font-size:1.5rem;">B</strong> <span style="color:#888;">vs</span> <strong style="font-size:1.5rem;">V</strong><br/>
        <small>(bi) vs (vi)</small>
      </div>
      <div style="text-align:center;padding:0.75rem;background:rgba(245,158,11,0.1);border-radius:0.5rem;">
        <strong style="font-size:1.5rem;">G</strong> <span style="color:#888;">vs</span> <strong style="font-size:1.5rem;">J</strong><br/>
        <small>(yi) vs (yei)</small>
      </div>
    </div>
  </div>
</div>`.trim() },

  // ── Topic 4: Numbers ────────────────────────────────────────────────
  { number: 4, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/Z9vwNPNSFxoAAAAC/numbers-counting.gif" alt="Numbers" style="width:100px;height:100px;border-radius:50%;object-fit:cover;flex-shrink:0;" />
    <div>
      <h5 style="margin:0 0 0.5rem;">🔢 Numbers in English</h5>
      <p style="margin:0;">Numbers are everywhere — prices 💰, phone numbers 📞, addresses 🏠, dates 📅. Master them to navigate daily life in English!</p>
    </div>
  </div>
  <div class="visual-card card-concept">
    <h5>1️⃣ Cardinal Numbers (1–20)</h5>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.5rem;text-align:center;">
      ${[['1','one'],['2','two'],['3','three'],['4','four'],['5','five'],['6','six'],['7','seven'],['8','eight'],['9','nine'],['10','ten'],['11','eleven'],['12','twelve'],['13','thirteen'],['14','fourteen'],['15','fifteen'],['16','sixteen'],['17','seventeen'],['18','eighteen'],['19','nineteen'],['20','twenty']].map(([n,w])=>`<div style="padding:0.4rem;background:rgba(0,173,181,0.07);border-radius:0.5rem;"><strong>${n}</strong><br/><small>${w}</small></div>`).join('')}
    </div>
  </div>
  <div class="visual-card card-concept">
    <h5>🔟 Tens (20–100)</h5>
    <ul>
      <li>20 → <strong>twenty</strong></li><li>30 → <strong>thirty</strong></li><li>40 → <strong>forty</strong></li>
      <li>50 → <strong>fifty</strong></li><li>60 → <strong>sixty</strong></li><li>70 → <strong>seventy</strong></li>
      <li>80 → <strong>eighty</strong></li><li>90 → <strong>ninety</strong></li><li>100 → <strong>one hundred</strong></li>
    </ul>
    ${tip('Combine tens + units with a hyphen: 21 = twenty-<strong>one</strong>, 35 = thirty-<strong>five</strong>.')}
  </div>
  <div class="visual-card card-example">
    <h5>🚀 Ordinal Numbers (1st–10th)</h5>
    <p>Used for <strong>order, dates, and floors</strong>:</p>
    <ul>
      <li>1st = <strong>first</strong> &nbsp;|&nbsp; 2nd = <strong>second</strong> &nbsp;|&nbsp; 3rd = <strong>third</strong></li>
      <li>4th–10th: just add <strong>-th</strong> → fourth, fifth*, sixth, seventh, eighth*, ninth*, tenth</li>
    </ul>
    ${tip('Irregular ordinals: five→fif<strong>th</strong>, eight→eigh<strong>th</strong>, nine→nin<strong>th</strong>.')}
  </div>
</div>`.trim() },

  // ── Topic 5: Subject Pronouns ───────────────────────────────────────
  { number: 5, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/Gk0G02aGMT4AAAAC/me-myself.gif" alt="Subject pronouns" style="width:100px;height:100px;border-radius:50%;object-fit:cover;flex-shrink:0;" />
    <div>
      <h5 style="margin:0 0 0.5rem;">👤 Subject Pronouns</h5>
      <p style="margin:0;">Subject pronouns <strong>replace nouns</strong> as the subject of a sentence. Without them, you'd have to repeat the person's name every time!</p>
    </div>
  </div>
  <div class="visual-card card-concept">
    <h5>📋 The 7 Subject Pronouns</h5>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;text-align:center;">
      ${[['I','Yo','👤'],['You','Tú / Usted','👥'],['He','Él','👦'],['She','Ella','👧'],['It','Eso / animal / cosa','🐾'],['We','Nosotros','👨‍👩‍👦'],['They','Ellos/as','👨‍👩‍👧‍👦']].map(([en,es,em])=>`<div style="background:rgba(0,173,181,0.07);border-radius:0.75rem;padding:0.75rem;"><div style="font-size:1.5rem;">${em}</div><strong style="font-size:1.1rem;">${en}</strong><br/><small style="color:#888;">${es}</small></div>`).join('')}
    </div>
    ${tip('<strong>It</strong> is used for animals, objects, and places — never for people!')}
  </div>
  <div class="visual-card card-example">
    <h5>✍️ In Sentences</h5>
    <ul>
      <li>👤 <strong>I</strong> am a student.</li>
      <li>👦 <strong>He</strong> is from Canada.</li>
      <li>👧 <strong>She</strong> is a teacher.</li>
      <li>🐾 <strong>It</strong> is a big dog.</li>
      <li>👨‍👩‍👦 <strong>We</strong> are friends.</li>
      <li>👨‍👩‍👧‍👦 <strong>They</strong> are students.</li>
    </ul>
  </div>
</div>`.trim() },

  // ── Topic 6: Verb "To Be" ────────────────────────────────────────────
  { number: 6, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/EFoHHBjGBLkAAAAC/be-yourself.gif" alt="To Be" style="width:100px;height:100px;border-radius:50%;object-fit:cover;flex-shrink:0;" />
    <div>
      <h5 style="margin:0 0 0.5rem;">🌟 Verb "To Be" — am / is / are</h5>
      <p style="margin:0;">The most important verb in English. Used to describe <strong>identity, nationality, profession, feelings</strong>, and more.</p>
    </div>
  </div>
  <div class="visual-card card-concept">
    <h5>📋 Conjugation Table</h5>
    <table style="width:100%;border-collapse:collapse;font-size:0.95rem;">
      <thead><tr style="border-bottom:2px solid rgba(0,173,181,0.3);">
        <th style="padding:0.5rem;text-align:left;">Pronoun</th>
        <th style="padding:0.5rem;text-align:center;">Verb</th>
        <th style="padding:0.5rem;text-align:center;">Contraction</th>
        <th style="padding:0.5rem;text-align:left;">Example</th>
      </tr></thead>
      <tbody>
        ${[['I','am',"I'm",'I am a student.'],['You','are',"You're",'You are from Spain.'],['He','is',"He's",'He is a doctor.'],['She','is',"She's",'She is happy.'],['It','is',"It's",'It is cold today.'],['We','are',"We're",'We are friends.'],['They','are',"They're",'They are late.']].map(([p,v,c,e],i)=>`<tr style="border-bottom:1px solid rgba(255,255,255,0.05);${i%2?'background:rgba(255,255,255,0.02)':''}"><td style="padding:0.5rem;"><strong>${p}</strong></td><td style="padding:0.5rem;text-align:center;color:#00ADB5;">${v}</td><td style="padding:0.5rem;text-align:center;color:#888;">${c}</td><td style="padding:0.5rem;font-size:0.85rem;">${e}</td></tr>`).join('')}
      </tbody>
    </table>
  </div>
  <div class="visual-card card-warning">
    <h5>❌ Negative & ❓ Question Forms</h5>
    <ul>
      <li>➖ <strong>Negative:</strong> I am <strong>not</strong> → I'm not &nbsp;|&nbsp; He is <strong>not</strong> → He isn't</li>
      <li>❓ <strong>Question:</strong> Invert subject and verb → <strong>Are</strong> you a teacher? / <strong>Is</strong> she happy?</li>
    </ul>
    ${tip('There is no contraction for <strong>I am not</strong> → always "I\'m not" (never "I amn\'t")!')}
  </div>
</div>`.trim() },

  // ── Topic 7: Wh- Questions ──────────────────────────────────────────
  { number: 7, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/ABp7wrP0sucAAAAC/questions-ask.gif" alt="Questions" style="width:100px;height:100px;border-radius:50%;object-fit:cover;flex-shrink:0;" />
    <div>
      <h5 style="margin:0 0 0.5rem;">❓ Wh- Questions</h5>
      <p style="margin:0;">Wh- questions ask for <strong>specific information</strong>, not just yes/no. They always start with a question word!</p>
    </div>
  </div>
  <div class="visual-card card-concept">
    <h5>📋 Question Words & Uses</h5>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
      ${[['What','Qué','🤔','What is your name?'],['Where','Dónde','📍','Where are you from?'],['When','Cuándo','📅','When is your birthday?'],['Who','Quién','👤','Who is she?'],['Why','Por qué','💭','Why are you late?'],['How','Cómo','🔄','How are you?']].map(([w,s,e,ex])=>`<div style="background:rgba(0,173,181,0.07);border-radius:0.75rem;padding:0.75rem;"><span style="font-size:1.2rem;">${e}</span> <strong>${w}</strong> <small style="color:#888;">(${s})</small><br/><small style="color:#aaa;font-style:italic;">"${ex}"</small></div>`).join('')}
    </div>
    ${tip('<strong>How old are you?</strong> is used to ask about age — "How old" goes together as a fixed phrase!')}
  </div>
  <div class="visual-card card-example">
    <h5>✍️ Structure</h5>
    <p style="font-size:1rem;text-align:center;padding:0.75rem;background:rgba(0,173,181,0.08);border-radius:0.5rem;">
      <strong>Wh- word + verb (to be) + subject ?</strong><br/>
      <em>Where <span style="color:#00ADB5;">is</span> she from?</em>
    </p>
  </div>
</div>`.trim() },

  // ── Topic 8: Demonstratives ─────────────────────────────────────────
  { number: 8, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/fhXBqekAEgkAAAAC/this-that.gif" alt="Demonstratives" style="width:100px;height:100px;border-radius:50%;object-fit:cover;flex-shrink:0;" />
    <div>
      <h5 style="margin:0 0 0.5rem;">👆 Demonstratives: This / That / These / Those</h5>
      <p style="margin:0;">Demonstratives <strong>point to things</strong> and tell us if they are <strong>near</strong> or <strong>far</strong>.</p>
    </div>
  </div>
  <div class="visual-card card-concept">
    <h5>📋 The 4 Demonstratives</h5>
    <table style="width:100%;border-collapse:collapse;text-align:center;font-size:0.95rem;">
      <thead><tr style="border-bottom:2px solid rgba(0,173,181,0.3);">
        <th style="padding:0.5rem;"></th><th style="padding:0.5rem;">Near 👋</th><th style="padding:0.5rem;">Far 🏔️</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:0.5rem;font-weight:bold;">Singular (1)</td>
          <td style="padding:0.5rem;color:#00ADB5;font-size:1.1rem;"><strong>This</strong><br/><small style="color:#888;">este / esta / esto</small></td>
          <td style="padding:0.5rem;color:#00ADB5;font-size:1.1rem;"><strong>That</strong><br/><small style="color:#888;">ese / esa / eso</small></td>
        </tr>
        <tr>
          <td style="padding:0.5rem;font-weight:bold;">Plural (+1)</td>
          <td style="padding:0.5rem;color:#00ADB5;font-size:1.1rem;"><strong>These</strong><br/><small style="color:#888;">estos / estas</small></td>
          <td style="padding:0.5rem;color:#00ADB5;font-size:1.1rem;"><strong>Those</strong><br/><small style="color:#888;">esos / esas</small></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="visual-card card-example">
    <h5>✍️ Examples</h5>
    <ul>
      <li>👋 <strong>This</strong> is my book. <em style="color:#888;">(near, singular)</em></li>
      <li>🏔️ <strong>That</strong> is a big house. <em style="color:#888;">(far, singular)</em></li>
      <li>👋 <strong>These</strong> are my keys. <em style="color:#888;">(near, plural)</em></li>
      <li>🏔️ <strong>Those</strong> are expensive shoes. <em style="color:#888;">(far, plural)</em></li>
    </ul>
    ${tip('"This is..." is also used to introduce someone: <strong>"This is my friend Ana."</strong>')}
  </div>
</div>`.trim() },

  // ── Topic 9: Possessives ─────────────────────────────────────────────
  { number: 9, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/KN9Y4RGBBGwAAAAC/mine-its-mine.gif" alt="Possessives" style="width:100px;height:100px;border-radius:50%;object-fit:cover;flex-shrink:0;" />
    <div>
      <h5 style="margin:0 0 0.5rem;">💼 Possessives</h5>
      <p style="margin:0;">Possessives show <strong>ownership</strong> — who something belongs to. English has two systems: <strong>adjectives</strong> and the <strong>'s</strong>.</p>
    </div>
  </div>
  <div class="visual-card card-concept">
    <h5>📋 Possessive Adjectives</h5>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.5rem;text-align:center;">
      ${[['I','my'],['You','your'],['He','his'],['She','her'],['It','its'],['We','our'],['They','their']].map(([p,a])=>`<div style="background:rgba(0,173,181,0.07);border-radius:0.5rem;padding:0.5rem;"><small style="color:#888;">${p}</small><br/><strong style="color:#00ADB5;">${a}</strong></div>`).join('')}
    </div>
    ${tip('Possessive adjectives always come <strong>before a noun</strong>: <em>my book</em>, <em>her car</em>. Never alone!')}
  </div>
  <div class="visual-card card-example">
    <h5>✍️ Possessive 's — for people</h5>
    <p>Add <strong>'s</strong> to a person's name to show what they own:</p>
    <ul>
      <li>👦 <strong>Carlos's</strong> book is blue.</li>
      <li>👧 <strong>Ana's</strong> phone is new.</li>
      <li>👨‍👩‍👦 <strong>My parents'</strong> house is big. <em style="color:#888;">(plural noun: just add ')</em></li>
    </ul>
  </div>
</div>`.trim() },

  // ── Topic 10: What Time Is It? ──────────────────────────────────────
  { number: 10, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/qJq6FcAlHxwAAAAC/what-time-is-it-clock.gif" alt="Clock" style="width:100px;height:100px;border-radius:50%;object-fit:cover;flex-shrink:0;" />
    <div>
      <h5 style="margin:0 0 0.5rem;">🕐 What Time Is It?</h5>
      <p style="margin:0;">Telling and asking the time is an essential daily skill. English uses two systems: the <strong>12-hour</strong> clock and the <strong>24-hour</strong> clock.</p>
    </div>
  </div>
  <div class="visual-card card-concept">
    <h5>❓ Asking the Time</h5>
    <ul>
      <li>🕐 <strong>What time is it?</strong> — informal</li>
      <li>🕐 <strong>What's the time?</strong> — informal</li>
      <li>🕐 <strong>Could you tell me the time, please?</strong> — formal</li>
    </ul>
  </div>
  <div class="visual-card card-concept">
    <h5>🕐 Reading the Clock</h5>
    <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
      <tbody>
        ${[['3:00','It\'s three o\'clock','⏰'],['3:15',"It's quarter past three",'⏰'],['3:30',"It's half past three",'⏰'],['3:45',"It's quarter to four",'⏰'],['3:10',"It's ten past three",'⏰'],['3:50',"It's ten to four",'⏰']].map(([t,s,e])=>`<tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;color:#00ADB5;font-weight:bold;">${t}</td><td style="padding:0.4rem;">${e} <em>${s}</em></td></tr>`).join('')}
      </tbody>
    </table>
    ${tip('Use <strong>AM</strong> for morning (12am–11:59am) and <strong>PM</strong> for afternoon/night (12pm–11:59pm).')}
  </div>
</div>`.trim() },

  // ── Topic 26: Describing People ─────────────────────────────────────
  { number: 26, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/4h4plh6rJvwAAAAC/describe-description.gif" alt="Describing people" style="width:100px;height:100px;border-radius:50%;object-fit:cover;flex-shrink:0;" />
    <div>
      <h5 style="margin:0 0 0.5rem;">🧑 Describing People</h5>
      <p style="margin:0;">We use adjectives to describe <strong>physical appearance</strong> and <strong>personality</strong>. Adjectives in English always go <strong>before the noun</strong>.</p>
    </div>
  </div>
  <div class="visual-card card-concept">
    <h5>👀 Physical Appearance</h5>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
      <div>
        <p><strong>Height:</strong></p>
        <ul><li>tall / short</li><li>medium height</li></ul>
        <p><strong>Build:</strong></p>
        <ul><li>slim / thin</li><li>heavy / overweight</li><li>muscular</li></ul>
      </div>
      <div>
        <p><strong>Hair:</strong></p>
        <ul><li>long / short / medium</li><li>straight / curly / wavy</li><li>blonde / brown / black / red / grey</li></ul>
        <p><strong>Eyes:</strong></p>
        <ul><li>blue / green / brown / hazel</li></ul>
      </div>
    </div>
  </div>
  <div class="visual-card card-example">
    <h5>😊 Personality Adjectives</h5>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;">
      ${[['😄','funny'],['🤝','friendly'],['💪','confident'],['📚','intelligent'],['😴','lazy'],['🏃','energetic'],['🤫','shy'],['🤲','generous']].map(([e,w])=>`<div style="background:rgba(0,173,181,0.07);border-radius:0.5rem;padding:0.4rem 0.75rem;">${e} <strong>${w}</strong></div>`).join('')}
    </div>
    ${tip('In English: adjective + noun → <strong>"a tall man"</strong>, NOT "a man tall". Order matters!')}
  </div>
</div>`.trim() }
];

// Apply all updates
let count = 0;
for (const update of updates) {
  const result = db.prepare("UPDATE topics SET theory = ? WHERE level = 'A1' AND number = ?")
    .run(update.theory, update.number);
  if (result.changes > 0) {
    console.log(`✅ Updated A1 Topic ${update.number}`);
    count++;
  } else {
    console.log(`⚠️  Topic ${update.number} not found`);
  }
}
console.log(`\n🎉 Done! Updated ${count}/${updates.length} A1 topics.`);
