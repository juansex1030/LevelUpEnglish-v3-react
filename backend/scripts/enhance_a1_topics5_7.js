const Database = require('better-sqlite3');
const db = new Database('./data/database.db');
const tipBox = (t) => `<div style="background:rgba(0,173,181,0.1);border-left:3px solid #00ADB5;border-radius:0 0.5rem 0.5rem 0;padding:0.75rem 1rem;margin-top:1rem;font-size:0.92rem;">💡 <strong>Tip:</strong> ${t}</div>`;
const warn = (t) => `<div style="background:rgba(245,158,11,0.1);border-left:3px solid #F59E0B;border-radius:0 0.5rem 0.5rem 0;padding:0.75rem 1rem;margin-top:1rem;font-size:0.92rem;">⚠️ <strong>Watch out:</strong> ${t}</div>`;

const updates = [

// ── Topic 5: Subject Pronouns ──────────────────────────────────────
{ number: 5, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/Gk0G02aGMT4AAAAC/me-myself.gif" alt="Subject pronouns" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">👤 Subject Pronouns</h5>
    <p style="margin:0;">A subject pronoun <strong>replaces the name of a person or thing</strong> as the subject of a sentence. Instead of repeating "Maria" every time, you say <strong>"She"</strong>. They are one of the most fundamental building blocks of English grammar!</p></div>
  </div>

  <div class="visual-card card-concept">
    <h5>📋 The 7 Subject Pronouns — Explained</h5>
    <table style="width:100%;border-collapse:collapse;font-size:0.93rem;">
      <thead><tr style="border-bottom:2px solid rgba(0,173,181,0.3);">
        <th style="padding:0.5rem;text-align:left;">Pronoun</th>
        <th style="padding:0.5rem;text-align:left;">Spanish</th>
        <th style="padding:0.5rem;text-align:left;">Used for</th>
        <th style="padding:0.5rem;text-align:left;">Example</th>
      </tr></thead>
      <tbody>
        ${[
          ['I 👤','Yo','Yourself (always capitalized!)','I am a student.'],
          ['You 👥','Tú / Usted','One person — singular and formal','Are you from Spain?'],
          ['He 👦','Él','A male person','He is my brother.'],
          ['She 👧','Ella','A female person','She is a doctor.'],
          ['It 🐾','Eso/a (neutro)','An animal, object, or place','It is a big dog. / It is cold.'],
          ['We 👨‍👩‍👦','Nosotros/as','You + other people','We are friends.'],
          ['They 👨‍👩‍👧‍👦','Ellos/as','Multiple people OR one person (non-binary)','They are students.'],
        ].map(([p,s,u,e],i)=>`<tr style="border-bottom:1px solid rgba(255,255,255,0.05);${i%2?'background:rgba(255,255,255,0.02)':''}">
          <td style="padding:0.5rem;color:#00ADB5;font-weight:bold;">${p}</td>
          <td style="padding:0.5rem;color:#aaa;">${s}</td>
          <td style="padding:0.5rem;font-size:0.85rem;">${u}</td>
          <td style="padding:0.5rem;font-size:0.85rem;font-style:italic;">${e}</td>
        </tr>`).join('')}
      </tbody>
    </table>
    ${tipBox('"I" in English is <strong>always capitalized</strong>, even in the middle of a sentence. Example: "Yesterday, <strong>I</strong> went to the park."')}
  </div>

  <div class="visual-card card-warning">
    <h5>🐾 The Special Case of "It"</h5>
    <p>"It" is used for <strong>animals</strong> (when you don't know the gender), <strong>objects</strong>, <strong>places</strong>, <strong>weather</strong>, and <strong>time</strong>. Never use "it" for people!</p>
    <ul>
      <li>✅ <strong>It</strong> is raining. <em>(weather)</em></li>
      <li>✅ <strong>It</strong> is 3 o'clock. <em>(time)</em></li>
      <li>✅ <strong>It</strong> is a beautiful city. <em>(place)</em></li>
      <li>✅ <strong>It</strong> is my dog. <em>(animal, gender unknown)</em></li>
      <li>❌ "It is Maria." ← Wrong! She is Maria.</li>
    </ul>
    ${warn('"You" in English is used for <strong>both singular and plural</strong>: "Are <strong>you</strong> ready?" (one person) = "Are <strong>you</strong> ready?" (group). Context makes the difference!')}
  </div>

  <div class="visual-card card-example">
    <h5>✍️ Replacing Names with Pronouns</h5>
    <p>This is how pronouns work in practice:</p>
    <table style="width:100%;border-collapse:collapse;font-size:0.92rem;">
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;">Carlos is from Mexico.</td><td style="padding:0.4rem;color:#00ADB5;">→ <strong>He</strong> is from Mexico.</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;">Maria is a teacher.</td><td style="padding:0.4rem;color:#00ADB5;">→ <strong>She</strong> is a teacher.</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;">The book is on the table.</td><td style="padding:0.4rem;color:#00ADB5;">→ <strong>It</strong> is on the table.</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;">Carlos and I are friends.</td><td style="padding:0.4rem;color:#00ADB5;">→ <strong>We</strong> are friends.</td></tr>
        <tr><td style="padding:0.4rem;">Ana and Carlos are students.</td><td style="padding:0.4rem;color:#00ADB5;">→ <strong>They</strong> are students.</td></tr>
      </tbody>
    </table>
  </div>
</div>`.trim() },

// ── Topic 6: Verb "To Be" ──────────────────────────────────────────────
{ number: 6, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/EFoHHBjGBLkAAAAC/be-yourself.gif" alt="To Be" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">🌟 Verb "To Be" — am / is / are</h5>
    <p style="margin:0;">This is <strong>the most important verb in English</strong>. It is used to describe identity, feelings, nationalities, professions, locations, and more. Everything starts here!</p></div>
  </div>

  <div class="visual-card card-concept">
    <h5>📋 Positive Form</h5>
    <table style="width:100%;border-collapse:collapse;font-size:0.93rem;">
      <thead><tr style="border-bottom:2px solid rgba(0,173,181,0.3);">
        <th style="padding:0.5rem;">Subject</th><th style="padding:0.5rem;text-align:center;">Verb</th><th style="padding:0.5rem;text-align:center;">Contraction</th><th style="padding:0.5rem;">Example</th>
      </tr></thead>
      <tbody>
        ${[['I','am',"I'm",'I am happy.'],['You','are',"You're",'You are my friend.'],['He','is',"He's",'He is a teacher.'],['She','is',"She's",'She is from Brazil.'],['It','is',"It's",'It is cold today.'],['We','are',"We're",'We are at school.'],['They','are',"They're",'They are brothers.']].map(([s,v,c,e],i)=>`<tr style="border-bottom:1px solid rgba(255,255,255,0.05);${i%2?'background:rgba(255,255,255,0.02)':''}"><td style="padding:0.4rem;font-weight:bold;">${s}</td><td style="padding:0.4rem;text-align:center;color:#00ADB5;font-weight:bold;">${v}</td><td style="padding:0.4rem;text-align:center;color:#aaa;">${c}</td><td style="padding:0.4rem;font-style:italic;font-size:0.88rem;">${e}</td></tr>`).join('')}
      </tbody>
    </table>
    ${tipBox('Contractions (I\'m, You\'re, He\'s...) are used in <strong>speaking and informal writing</strong>. In formal writing, use the full form.')}
  </div>

  <div class="visual-card card-warning">
    <h5>❌ Negative Form: am not / is not / are not</h5>
    <p>Add <strong>not</strong> after the verb:</p>
    <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
      <tbody>
        ${[['I am not','I\'m not','I am not tired.'],['You are not','You aren\'t','You are not late.'],['He is not','He isn\'t','He is not a doctor.'],['She is not','She isn\'t','She is not from Spain.'],['It is not','It isn\'t','It is not cold.'],['We are not','We aren\'t','We are not ready.'],['They are not','They aren\'t','They are not home.']].map(([f,c,e])=>`<tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.35rem;font-size:0.88rem;">${f}</td><td style="padding:0.35rem;color:#aaa;font-size:0.88rem;">(${c})</td><td style="padding:0.35rem;font-style:italic;font-size:0.85rem;">${e}</td></tr>`).join('')}
      </tbody>
    </table>
    ${warn('There is <strong>no contraction</strong> for "I am not" → always "I\'m not". Never "I amn\'t"!')}
  </div>

  <div class="visual-card card-example">
    <h5>❓ Question Form</h5>
    <p>To make a question, <strong>invert the subject and the verb</strong>:</p>
    <div style="background:rgba(0,0,0,0.15);border-radius:0.75rem;padding:1rem;margin-bottom:0.75rem;">
      Statement: <em>She <strong>is</strong> a student.</em><br/>
      Question: <em><strong>Is</strong> she a student?</em>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;color:#00ADB5;"><strong>Am I</strong> late?</td><td style="padding:0.4rem;">Yes, you are. / No, you aren't.</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;color:#00ADB5;"><strong>Are you</strong> a student?</td><td style="padding:0.4rem;">Yes, I am. / No, I'm not.</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;color:#00ADB5;"><strong>Is she</strong> from France?</td><td style="padding:0.4rem;">Yes, she is. / No, she isn't.</td></tr>
        <tr><td style="padding:0.4rem;color:#00ADB5;"><strong>Are they</strong> ready?</td><td style="padding:0.4rem;">Yes, they are. / No, they aren't.</td></tr>
      </tbody>
    </table>
  </div>

  <div class="visual-card card-concept">
    <h5>🧰 What "To Be" Is Used For</h5>
    <ul>
      <li>🏷️ <strong>Names:</strong> My name <strong>is</strong> Ana. / I <strong>am</strong> Ana.</li>
      <li>🌎 <strong>Nationality:</strong> She <strong>is</strong> Colombian.</li>
      <li>👔 <strong>Profession:</strong> He <strong>is</strong> a doctor.</li>
      <li>😊 <strong>Feelings:</strong> I <strong>am</strong> happy. / They <strong>are</strong> tired.</li>
      <li>📍 <strong>Location:</strong> We <strong>are</strong> at home.</li>
      <li>📏 <strong>Description:</strong> The cat <strong>is</strong> small.</li>
      <li>🕐 <strong>Time/Weather:</strong> It <strong>is</strong> 3 o'clock. / It <strong>is</strong> hot today.</li>
    </ul>
  </div>
</div>`.trim() },

// ── Topic 7: Wh- Questions ──────────────────────────────────────────────
{ number: 7, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/ABp7wrP0sucAAAAC/questions-ask.gif" alt="Questions" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">❓ Wh- Questions</h5>
    <p style="margin:0;">Wh- questions ask for <strong>specific information</strong> — not just a yes or no answer. They are called "Wh-" questions because most of them start with the letters <strong>W</strong> and <strong>H</strong>.</p></div>
  </div>

  <div class="visual-card card-concept">
    <h5>📋 The 6 Main Question Words</h5>
    <table style="width:100%;border-collapse:collapse;font-size:0.93rem;">
      <thead><tr style="border-bottom:2px solid rgba(0,173,181,0.3);">
        <th style="padding:0.5rem;">Word</th><th style="padding:0.5rem;">Spanish</th><th style="padding:0.5rem;">Asks about</th><th style="padding:0.5rem;">Example</th>
      </tr></thead>
      <tbody>
        ${[
          ['What 🤔','Qué','Things / actions','What is your name?'],
          ['Where 📍','Dónde','Places / location','Where are you from?'],
          ['When 📅','Cuándo','Time / dates','When is your birthday?'],
          ['Who 👤','Quién','People','Who is she?'],
          ['Why 💭','Por qué','Reason / cause','Why are you late?'],
          ['How 🔄','Cómo','Manner / condition','How are you?'],
        ].map(([w,s,a,e],i)=>`<tr style="border-bottom:1px solid rgba(255,255,255,0.05);${i%2?'background:rgba(255,255,255,0.02)':''}">
          <td style="padding:0.5rem;color:#00ADB5;font-weight:bold;">${w}</td>
          <td style="padding:0.5rem;color:#aaa;">${s}</td>
          <td style="padding:0.5rem;font-size:0.85rem;">${a}</td>
          <td style="padding:0.5rem;font-style:italic;font-size:0.85rem;">${e}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div class="visual-card card-concept">
    <h5>🧱 Structure of a Wh- Question</h5>
    <div style="background:rgba(0,173,181,0.08);border-radius:0.75rem;padding:1rem;text-align:center;margin-bottom:0.75rem;">
      <strong style="font-size:1.1rem;">Wh- word + verb "to be" + subject ?</strong>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;color:#00ADB5;">What</td><td style="padding:0.4rem;">is</td><td style="padding:0.4rem;">your name?</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;color:#00ADB5;">Where</td><td style="padding:0.4rem;">are</td><td style="padding:0.4rem;">you from?</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;color:#00ADB5;">Who</td><td style="padding:0.4rem;">is</td><td style="padding:0.4rem;">she?</td></tr>
        <tr><td style="padding:0.4rem;color:#00ADB5;">Why</td><td style="padding:0.4rem;">are</td><td style="padding:0.4rem;">you tired?</td></tr>
      </tbody>
    </table>
  </div>

  <div class="visual-card card-example">
    <h5>🔍 "How" + Adjective Combinations</h5>
    <p>"How" combines with adjectives to ask specific questions:</p>
    <ul>
      <li>🎂 <strong>How old</strong> are you? → I am 22 years old.</li>
      <li>📏 <strong>How tall</strong> is he? → He is 1.80m tall.</li>
      <li>💰 <strong>How much</strong> is it? → It's $10.</li>
      <li>📦 <strong>How many</strong> books do you have? → I have 5.</li>
      <li>🕐 <strong>How long</strong> is the class? → It's 2 hours long.</li>
    </ul>
    ${tipBox('"How old are you?" — never translate directly as "¿Cuántos años tienes?" → In English, you use <strong>to be</strong>: How old <strong>are</strong> you?')}
  </div>

  <div class="visual-card card-example">
    <h5>💬 Wh- Questions in a Real Conversation</h5>
    <div style="background:rgba(0,0,0,0.15);border-radius:0.75rem;padding:1.25rem;line-height:2.2;font-size:0.93rem;">
      🔵 A: <em><strong>What</strong> is your name?</em><br/>
      🟢 B: <em>My name is Lucia.</em><br/>
      🔵 A: <em><strong>Where</strong> are you from, Lucia?</em><br/>
      🟢 B: <em>I'm from Peru. <strong>Where</strong> are you from?</em><br/>
      🔵 A: <em>I'm from Colombia. <strong>How old</strong> are you?</em><br/>
      🟢 B: <em>I'm 24. <strong>Why</strong> are you studying English?</em><br/>
      🔵 A: <em>Because I want to travel! <strong>What</strong> about you?</em>
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
