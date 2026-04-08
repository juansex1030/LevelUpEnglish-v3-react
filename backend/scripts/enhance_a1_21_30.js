const Database = require('better-sqlite3');
const db = new Database('./data/database.db');
const tipBox = (t) => `<div style="background:rgba(0,173,181,0.1);border-left:3px solid #00ADB5;border-radius:0 0.5rem 0.5rem 0;padding:0.75rem 1rem;margin-top:1rem;font-size:0.92rem;">💡 <strong>Tip:</strong> ${t}</div>`;
const warn = (t) => `<div style="background:rgba(245,158,11,0.1);border-left:3px solid #F59E0B;border-radius:0 0.5rem 0.5rem 0;padding:0.75rem 1rem;margin-top:1rem;font-size:0.92rem;">⚠️ <strong>Watch out:</strong> ${t}</div>`;

const updates = [
// ── Topic 21: Giving Directions ──────────────────────────────────────────
{ number: 21, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/mI1R4GRE620AAAAC/directions-lost.gif" alt="Directions" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">🗺️ Giving Directions</h5>
    <p style="margin:0;">Knowing how to ask for and give directions in English is an essential real-life skill. Whether you're on a trip or helping a tourist, these phrases will save you!</p></div>
  </div>
  <div class="visual-card card-concept">
    <h5>❓ How to Ask for Directions</h5>
    <ul>
      <li>🗺️ <strong>Excuse me, how do I get to the...?</strong> (train station / museum / hotel)</li>
      <li>🗺️ <strong>Could you tell me the way to...?</strong> (more formal)</li>
      <li>🗺️ <strong>Is there a [pharmacy/bank/park] near here?</strong></li>
      <li>🗺️ <strong>Where is the nearest [supermarket]?</strong></li>
    </ul>
  </div>
  <div class="visual-card card-concept">
    <h5>🧭 Key Direction Vocabulary</h5>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;font-size:0.9rem;">
      ${[['⬆️','go straight','sigue recto'],['🔄','turn left','gira a la izquierda'],['🔃','turn right','gira a la derecha'],['⬆️','go past','pasa por delante de'],['🔛','at the corner','en la esquina'],['🏁','at the end of the street','al final de la calle'],['↩️','go back','regresa'],['🏠','opposite','enfrente de'],['🏪','next to','al lado de'],['🔴','traffic lights','semáforo']].map(([e,en,es])=>`<div style="background:rgba(0,173,181,0.07);border-radius:0.4rem;padding:0.4rem 0.6rem;">${e} <strong>${en}</strong><br/><small style="color:#aaa;">${es}</small></div>`).join('')}
    </div>
  </div>
  <div class="visual-card card-example">
    <h5>💬 Full Directions Dialogue</h5>
    <div style="background:rgba(0,0,0,0.15);border-radius:0.75rem;padding:1.25rem;line-height:2.2;font-size:0.93rem;">
      🔵 A: <em>Excuse me! <strong>How do I get to</strong> the train station?</em><br/>
      🟢 B: <em>Sure! <strong>Go straight</strong> on this street for two blocks. Then <strong>turn left</strong> at the traffic lights. The station is <strong>on your right</strong>, next to the pharmacy.</em><br/>
      🔵 A: <em>Is it far?</em><br/>
      🟢 B: <em>No, it's about 5 minutes on foot.</em><br/>
      🔵 A: <em>Thank you so much!</em>
    </div>
    ${tipBox('Always start with <strong>"Excuse me"</strong> when asking a stranger for help — it\'s polite and gets their attention!')}
  </div>
</div>`.trim() },

// ── Topic 22: Superlatives ───────────────────────────────────────────────
{ number: 22, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/vAtxSMBlGMQAAAAC/best-winner.gif" alt="Best" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">🏆 Superlatives</h5>
    <p style="margin:0;">Superlatives say that something is <strong>the most extreme</strong> of a group — the biggest, the best, the most beautiful. We use <strong>"the"</strong> before a superlative, always!</p></div>
  </div>
  <div class="visual-card card-concept">
    <h5>📋 How to Form Superlatives</h5>
    <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
      <thead><tr style="border-bottom:2px solid rgba(0,173,181,0.3);"><th style="padding:0.5rem;">Adjective type</th><th style="padding:0.5rem;">Rule</th><th style="padding:0.5rem;">Example</th></tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;">Short (1 syllable)</td><td style="padding:0.4rem;color:#00ADB5;">the + adj + <strong>-est</strong></td><td style="padding:0.4rem;font-style:italic;">tall → the tall<strong>est</strong></td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);background:rgba(255,255,255,0.02);"><td style="padding:0.4rem;">Ends in -e</td><td style="padding:0.4rem;color:#00ADB5;">the + adj + <strong>-st</strong></td><td style="padding:0.4rem;font-style:italic;">nice → the nice<strong>st</strong></td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;">Consonant + y</td><td style="padding:0.4rem;color:#00ADB5;">the + adj(y→i) + <strong>-est</strong></td><td style="padding:0.4rem;font-style:italic;">happy → the happi<strong>est</strong></td></tr>
        <tr><td style="padding:0.4rem;">Long (2+ syllables)</td><td style="padding:0.4rem;color:#00ADB5;">the <strong>most</strong> + adj</td><td style="padding:0.4rem;font-style:italic;"><strong>the most</strong> beautiful</td></tr>
      </tbody>
    </table>
    ${warn('Always use <strong>"the"</strong> before a superlative. "She is <strong>the</strong> tallest" NOT "She is tallest".')}
  </div>
  <div class="visual-card card-warning">
    <h5>🚨 Irregular Superlatives</h5>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.75rem;text-align:center;">
      ${[['good','the best'],['bad','the worst'],['far','the farthest'],['little','the least'],['much','the most']].map(([a,s])=>`<div style="background:rgba(245,158,11,0.1);border-radius:0.5rem;padding:0.6rem;font-size:0.9rem;"><strong>${a}</strong><br/>→ <strong style="color:#00ADB5;">${s}</strong></div>`).join('')}
    </div>
  </div>
  <div class="visual-card card-example">
    <h5>✍️ Examples in Sentences</h5>
    <ul>
      <li>🏔️ Everest is <strong>the highest</strong> mountain in the world.</li>
      <li>🌊 The Pacific is <strong>the largest</strong> ocean.</li>
      <li>😄 She is <strong>the funniest</strong> person I know.</li>
      <li>🍕 This is <strong>the most delicious</strong> pizza I've ever had!</li>
      <li>🐢 The turtle is <strong>the slowest</strong> animal in this race.</li>
    </ul>
  </div>
</div>`.trim() },

// ── Topic 23: Present Perfect ────────────────────────────────────────────
{ number: 23, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/qTekzz2zjekAAAAC/have-done-it.gif" alt="Done" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">✅ Present Perfect</h5>
    <p style="margin:0;">The Present Perfect connects the <strong>past to the present</strong>. It talks about experiences, recent events, or situations that started in the past but still matter now. Key formula: <strong>have/has + past participle</strong>.</p></div>
  </div>
  <div class="visual-card card-concept">
    <h5>📋 Structure</h5>
    <div style="background:rgba(0,173,181,0.08);border-radius:0.75rem;padding:1rem;text-align:center;margin-bottom:1rem;">
      <strong>Subject + have/has + past participle</strong>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
      <thead><tr style="border-bottom:2px solid rgba(0,173,181,0.3);"><th style="padding:0.4rem;">Subject</th><th style="padding:0.4rem;">Auxiliary</th><th style="padding:0.4rem;">Example</th></tr></thead>
      <tbody>
        ${[['I / You / We / They','have','I have visited Paris.'],['He / She / It','has','She has finished her homework.']].map(([s,a,e],i)=>`<tr style="border-bottom:1px solid rgba(255,255,255,0.05);${i%2?'background:rgba(255,255,255,0.02)':''}"><td style="padding:0.4rem;">${s}</td><td style="padding:0.4rem;color:#00ADB5;font-weight:bold;">${a}</td><td style="padding:0.4rem;font-style:italic;font-size:0.88rem;">${e}</td></tr>`).join('')}
      </tbody>
    </table>
    ${tipBox('"I have eaten" = present perfect. The past participle of regular verbs = -ed form. Irregular verbs have special forms: go→gone, eat→eaten, see→seen.')}
  </div>
  <div class="visual-card card-concept">
    <h5>🧰 When to Use Present Perfect</h5>
    <ul>
      <li>🌍 <strong>Life experiences</strong> (no specific time): I <strong>have visited</strong> London.</li>
      <li>⏱️ <strong>Recent actions</strong>: She <strong>has just arrived</strong>.</li>
      <li>🔁 <strong>Actions from past to now</strong>: They <strong>have lived</strong> here for 10 years.</li>
      <li>🏆 <strong>Achievements</strong>: I <strong>have finished</strong> my degree!</li>
    </ul>
  </div>
  <div class="visual-card card-warning">
    <h5>⚡ Key Words Used with Present Perfect</h5>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.5rem;text-align:center;font-size:0.9rem;">
      ${[['ever','¿alguna vez?'],['never','nunca'],['already','ya'],['yet','todavía / ya'],['just','acabar de'],['since','desde'],['for','por (tiempo)'],['recently','recientemente'],['so far','hasta ahora']].map(([w,s])=>`<div style="background:rgba(0,173,181,0.07);border-radius:0.4rem;padding:0.4rem;"><strong>${w}</strong><br/><small style="color:#aaa;">${s}</small></div>`).join('')}
    </div>
  </div>
</div>`.trim() },

// ── Topic 24: Present Perfect vs Past ────────────────────────────────────
{ number: 24, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/3Wz8H4yHJggAAAAC/vs-versus.gif" alt="vs" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">⚖️ Present Perfect vs. Simple Past</h5>
    <p style="margin:0;">This is one of the most common confusions in English! Both talk about the past, but in very different ways. Knowing the difference will make your English sound much more natural.</p></div>
  </div>
  <div class="visual-card card-concept">
    <h5>📊 Key Differences</h5>
    <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
      <thead><tr style="border-bottom:2px solid rgba(0,173,181,0.3);"><th style="padding:0.5rem;width:50%;">Present Perfect</th><th style="padding:0.5rem;width:50%;">Simple Past</th></tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;">❌ No specific time mentioned</td><td style="padding:0.4rem;">✅ Specific time is stated</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);background:rgba(255,255,255,0.02);"><td style="padding:0.4rem;">🌍 Life experience / relevance to now</td><td style="padding:0.4rem;">📅 Completed, finished, historical</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;font-style:italic;color:#00ADB5;">I <strong>have been</strong> to New York.</td><td style="padding:0.4rem;font-style:italic;color:#00ADB5;">I <strong>went</strong> to New York <strong>in 2020</strong>.</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);background:rgba(255,255,255,0.02);"><td style="padding:0.4rem;color:#aaa;font-size:0.85rem;">ever, never, just, already, yet, recently</td><td style="padding:0.4rem;color:#aaa;font-size:0.85rem;">yesterday, last week, in 2019, ago</td></tr>
      </tbody>
    </table>
    ${warn('"I have seen this movie" = experience, no specific time. / "I saw this movie <strong>yesterday</strong>" = with specific time → Simple Past.')}
  </div>
  <div class="visual-card card-example">
    <h5>🎯 Same idea, different tense</h5>
    <ul>
      <li>✅ "<strong>Have you ever eaten</strong> sushi?" → life experience question<br/>vs. "Did you eat sushi <strong>at the party last night</strong>?" → specific time</li>
      <li>✅ "She <strong>has lost</strong> her keys." → still relevant now<br/>vs. "She <strong>lost</strong> her keys <strong>on Monday</strong>." → specific past event</li>
    </ul>
  </div>
</div>`.trim() },

// ── Topic 25: Already, Yet, Since & For ──────────────────────────────────
{ number: 25, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/0TbBkOHHrdcAAAAC/already-done.gif" alt="Already" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">⏱️ Already, Yet, Since & For</h5>
    <p style="margin:0;">These four words are used with the <strong>Present Perfect</strong> to give extra information about time. Each has a very specific use — mix them up and your sentence changes meaning completely!</p></div>
  </div>
  <div class="visual-card card-concept">
    <h5>📋 Each Word Explained</h5>
    <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
      <thead><tr style="border-bottom:2px solid rgba(0,173,181,0.3);"><th style="padding:0.5rem;">Word</th><th style="padding:0.5rem;">Meaning</th><th style="padding:0.5rem;">Position</th><th style="padding:0.5rem;">Example</th></tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:0.4rem;color:#00ADB5;font-weight:bold;">already ✅</td>
          <td style="padding:0.4rem;font-size:0.88rem;">Something happened sooner than expected</td>
          <td style="padding:0.4rem;font-size:0.85rem;">Middle of sentence</td>
          <td style="padding:0.4rem;font-style:italic;font-size:0.85rem;">I've <strong>already</strong> eaten.</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);background:rgba(255,255,255,0.02);">
          <td style="padding:0.4rem;color:#00ADB5;font-weight:bold;">yet ⏳</td>
          <td style="padding:0.4rem;font-size:0.88rem;">Expected but not happened (negatives & questions)</td>
          <td style="padding:0.4rem;font-size:0.85rem;">End of sentence</td>
          <td style="padding:0.4rem;font-style:italic;font-size:0.85rem;">Have you eaten <strong>yet</strong>? / I haven't eaten <strong>yet</strong>.</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:0.4rem;color:#00ADB5;font-weight:bold;">since 📅</td>
          <td style="padding:0.4rem;font-size:0.88rem;">From a specific point in time until now</td>
          <td style="padding:0.4rem;font-size:0.85rem;">+specific time</td>
          <td style="padding:0.4rem;font-style:italic;font-size:0.85rem;">I've lived here <strong>since</strong> 2020.</td>
        </tr>
        <tr>
          <td style="padding:0.4rem;color:#00ADB5;font-weight:bold;">for ⏱️</td>
          <td style="padding:0.4rem;font-size:0.88rem;">Duration of time (how long)</td>
          <td style="padding:0.4rem;font-size:0.85rem;">+ period of time</td>
          <td style="padding:0.4rem;font-style:italic;font-size:0.85rem;">I've lived here <strong>for</strong> 5 years.</td>
        </tr>
      </tbody>
    </table>
    ${tipBox('"<strong>Since</strong> 2020 / last year / Monday" (specific point). "<strong>For</strong> 5 years / two months / a long time" (duration/period).')}
  </div>
  <div class="visual-card card-example">
    <h5>💬 Dialogue</h5>
    <div style="background:rgba(0,0,0,0.15);border-radius:0.75rem;padding:1.25rem;line-height:2.2;font-size:0.93rem;">
      🔵 A: <em>Have you done the homework <strong>yet</strong>?</em><br/>
      🟢 B: <em>Yes! I've <strong>already</strong> finished it. What about you?</em><br/>
      🔵 A: <em>Not <strong>yet</strong>. I've been studying English <strong>for</strong> two hours.</em><br/>
      🟢 B: <em>Wow! I've been studying <strong>since</strong> 6 PM!</em>
    </div>
  </div>
</div>`.trim() },

// ── Topic 27: Modal Verbs ────────────────────────────────────────────────
{ number: 27, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/3aFk-vjBEMEAAAAC/can-do-it.gif" alt="Can Do It" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">🎛️ Modal Verbs</h5>
    <p style="margin:0;">Modal verbs are <strong>auxiliary (helping) verbs</strong> that add meaning to another verb — expressing ability, permission, obligation, or possibility. They are always followed by a <strong>base verb</strong> (without "to").</p></div>
  </div>
  <div class="visual-card card-concept">
    <h5>📋 The Main Modal Verbs</h5>
    <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
      <thead><tr style="border-bottom:2px solid rgba(0,173,181,0.3);"><th style="padding:0.4rem;">Modal</th><th style="padding:0.4rem;">Meaning</th><th style="padding:0.4rem;">Example</th></tr></thead>
      <tbody>
        ${[['can','ability / permission','I can swim. / Can I leave?'],['can\'t','inability / no permission','I can\'t drive. / You can\'t smoke here.'],['must','strong obligation','You must wear a seatbelt.'],['should','advice / recommendation','You should exercise more.'],['shouldn\'t','advice against','You shouldn\'t eat too much sugar.'],['may / might','possibility','It might rain today.'],['could','past ability / polite request','I could swim when I was 5. / Could you help me?'],['would','polite request / conditional','Would you like some coffee?']].map(([m,me,e],i)=>`<tr style="border-bottom:1px solid rgba(255,255,255,0.05);${i%2?'background:rgba(255,255,255,0.02)':''}"><td style="padding:0.4rem;color:#00ADB5;font-weight:bold;">${m}</td><td style="padding:0.4rem;font-size:0.85rem;">${me}</td><td style="padding:0.4rem;font-style:italic;font-size:0.85rem;">${e}</td></tr>`).join('')}
      </tbody>
    </table>
    ${warn('Modal verbs NEVER add -s for he/she/it: "She <strong>can</strong> sing" NOT "She <strong>cans</strong> sing". And always use base verb after: "He should <strong>go</strong>" NOT "He should <strong>goes</strong>".')}
  </div>
  <div class="visual-card card-example">
    <h5>💬 Using Modals in Real Situations</h5>
    <ul>
      <li>💪 Ability: "I <strong>can</strong> speak three languages."</li>
      <li>🙏 Request: "<strong>Could</strong> you open the window, please?"</li>
      <li>🚫 Rule: "You <strong>must not</strong> use your phone here."</li>
      <li>💡 Advice: "You <strong>should</strong> drink more water."</li>
      <li>🤔 Possibility: "It <strong>might</strong> be a good idea."</li>
    </ul>
  </div>
</div>`.trim() },

// ── Topic 28: Future ─────────────────────────────────────────────────────
{ number: 28, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/YrRMUmz4Z70AAAAC/future-excited.gif" alt="Future" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">🔮 Talking About the Future</h5>
    <p style="margin:0;">English has multiple ways to talk about the future! The most common are <strong>"will"</strong> and <strong>"be going to"</strong>. Choosing the right one depends on whether the action is <strong>planned</strong> or a <strong>spontaneous decision</strong>.</p></div>
  </div>
  <div class="visual-card card-concept">
    <h5>📊 Will vs. Going To</h5>
    <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
      <thead><tr style="border-bottom:2px solid rgba(0,173,181,0.3);"><th style="padding:0.5rem;width:50%;"><em>"will" + verb</em></th><th style="padding:0.5rem;width:50%;"><em>"be going to" + verb</em></th></tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;">⚡ Spontaneous decisions</td><td style="padding:0.4rem;">📅 Planned decisions</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);background:rgba(255,255,255,0.02);"><td style="padding:0.4rem;">🔮 Predictions (general)</td><td style="padding:0.4rem;">👀 Predictions (evidence visible)</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;">🤝 Promises / offers</td><td style="padding:0.4rem;">🎯 Intentions</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);background:rgba(255,255,255,0.02);"><td style="padding:0.4rem;font-style:italic;color:#00ADB5;">"I'll help you." (spontaneous)</td><td style="padding:0.4rem;font-style:italic;color:#00ADB5;">"I'm going to study tonight." (planned)</td></tr>
        <tr><td style="padding:0.4rem;color:#aaa;font-size:0.85rem;">tomorrow, next week, soon, one day</td><td style="padding:0.4rem;color:#aaa;font-size:0.85rem;">this weekend, tonight, next month</td></tr>
      </tbody>
    </table>
    ${tipBox('Quick rule: phone rings → "I\'ll answer it!" (spontaneous). You booked a trip → "I\'m going to travel to Paris" (planned ahead).')}
  </div>
  <div class="visual-card card-example">
    <h5>✍️ Negative & Questions</h5>
    <ul>
      <li>➖ <strong>Will:</strong> I <strong>won't</strong> be late. / She <strong>will not</strong> come.</li>
      <li>❓ <strong>Will:</strong> <strong>Will</strong> you help me? → Yes, I will. / No, I won't.</li>
      <li>➖ <strong>Going to:</strong> I'm <strong>not going to</strong> eat meat anymore.</li>
      <li>❓ <strong>Going to:</strong> <strong>Are</strong> you <strong>going to</strong> study tonight?</li>
    </ul>
  </div>
</div>`.trim() },

// ── Topic 29: Giving Messages ──────────────────────────────────────────────
{ number: 29, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/IjoAiGXCEkwAAAAC/message-phone.gif" alt="Message" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">📨 Giving Messages</h5>
    <p style="margin:0;">Whether on the phone, taking a note, or passing on information, you need to know how to <strong>relay messages</strong> in English. This involves <strong>reported speech</strong> and polite telephone phrases.</p></div>
  </div>
  <div class="visual-card card-concept">
    <h5>📞 Telephone Phrases</h5>
    <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;color:#00ADB5;font-weight:bold;">Hello, this is [name].</td><td style="padding:0.4rem;font-size:0.88rem;">Introducing yourself on a call</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);background:rgba(255,255,255,0.02);"><td style="padding:0.4rem;color:#00ADB5;font-weight:bold;">Can I speak to [name], please?</td><td style="padding:0.4rem;font-size:0.88rem;">Asking to talk to someone</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;color:#00ADB5;font-weight:bold;">He/She is not available right now.</td><td style="padding:0.4rem;font-size:0.88rem;">The person is not there</td></tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);background:rgba(255,255,255,0.02);"><td style="padding:0.4rem;color:#00ADB5;font-weight:bold;">Can I take a message?</td><td style="padding:0.4rem;font-size:0.88rem;">Offering to write down the message</td></tr>
        <tr><td style="padding:0.4rem;color:#00ADB5;font-weight:bold;">Please tell him/her that...</td><td style="padding:0.4rem;font-size:0.88rem;">Leaving a message</td></tr>
      </tbody>
    </table>
  </div>
  <div class="visual-card card-concept">
    <h5>🗣️ Reported Speech Basics</h5>
    <p>When repeating what someone said, verbs often change:</p>
    <ul>
      <li>Direct: "I <strong>am</strong> tired." → Reported: She said she <strong>was</strong> tired.</li>
      <li>Direct: "I <strong>will</strong> call you." → Reported: He said he <strong>would</strong> call me.</li>
      <li>Direct: "I <strong>can</strong> help." → Reported: She said she <strong>could</strong> help.</li>
    </ul>
    ${tipBox('The most common pattern: "He/She <strong>said</strong> that..." or "He/She <strong>told me</strong> that..." Use "told" when you mention who received the message.')}
  </div>
  <div class="visual-card card-example">
    <h5>💬 Phone Call Dialogue</h5>
    <div style="background:rgba(0,0,0,0.15);border-radius:0.75rem;padding:1.25rem;line-height:2.2;font-size:0.93rem;">
      📞 A: <em>Hello, <strong>this is</strong> Lucia. <strong>Can I speak to</strong> Mark, please?</em><br/>
      🟢 B: <em>I'm sorry, Mark <strong>is not available</strong> right now. <strong>Can I take a message?</strong></em><br/>
      📞 A: <em>Yes, please. <strong>Please tell him</strong> that the meeting is at 3 PM, not 2 PM.</em><br/>
      🟢 B: <em>Of course. I'll let him know. <strong>Who should I say called?</strong></em><br/>
      📞 A: <em>Lucia from the sales team. Thank you!</em>
    </div>
  </div>
</div>`.trim() },

// ── Topic 30: Talking About Changes ──────────────────────────────────────
{ number: 30, theory: `
<div style="font-family:inherit;">
  <div class="visual-card card-concept" style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/0XEpJV1PRNEAAAAC/change-transform.gif" alt="Change" style="width:90px;height:90px;border-radius:50%;object-fit:cover;flex-shrink:0;"/>
    <div><h5 style="margin:0 0 0.5rem;">🔄 Talking About Changes</h5>
    <p style="margin:0;">We often need to describe how things <strong>have changed over time</strong> — people, places, habits, routines. English has specific structures and vocabulary for expressing change clearly.</p></div>
  </div>
  <div class="visual-card card-concept">
    <h5>📊 Key Structures for Expressing Change</h5>
    <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
      <thead><tr style="border-bottom:2px solid rgba(0,173,181,0.3);"><th style="padding:0.5rem;">Structure</th><th style="padding:0.5rem;">Example</th></tr></thead>
      <tbody>
        ${[
          ['used to + verb (past habits)','I <strong>used to</strong> eat a lot of junk food, but now I eat healthy.'],
          ['have/has + changed','My city <strong>has changed</strong> a lot in the last 10 years.'],
          ['be + different from before','He\'s <strong>completely different from</strong> how he used to be.'],
          ['be + getting + comparative','It\'s <strong>getting colder</strong> every day.'],
          ['have stopped + verb-ing','She <strong>has stopped smoking</strong>.'],
          ['have started + verb-ing','He <strong>has started</strong> exercising every morning.'],
        ].map(([s,e],i)=>`<tr style="border-bottom:1px solid rgba(255,255,255,0.05);${i%2?'background:rgba(255,255,255,0.02)':''}"><td style="padding:0.4rem;color:#00ADB5;font-size:0.85rem;">${s}</td><td style="padding:0.4rem;font-style:italic;font-size:0.85rem;">${e}</td></tr>`).join('')}
      </tbody>
    </table>
    ${tipBox('"Used to" expresses a <strong>past habit that is NO LONGER true</strong>. "I used to smoke" = I smoked in the past but I don\'t anymore.')}
  </div>
  <div class="visual-card card-example">
    <h5>✍️ Talking About Personal Changes</h5>
    <ul>
      <li>🏃 "I <strong>used to</strong> be lazy, but now I exercise every day."</li>
      <li>🌱 "The neighborhood <strong>has changed</strong> so much — it's much cleaner now."</li>
      <li>📱 "Technology <strong>is getting</strong> faster and faster."</li>
      <li>🎓 "She <strong>has become</strong> a completely different person since she went to university."</li>
    </ul>
  </div>
  <div class="visual-card card-example">
    <h5>💬 Comparing Past and Present</h5>
    <div style="background:rgba(0,0,0,0.15);border-radius:0.75rem;padding:1.25rem;line-height:2.2;font-size:0.93rem;">
      🔵 A: <em>Wow, you look so different! <strong>Have you changed</strong> a lot?</em><br/>
      🟢 B: <em>Yes! I <strong>used to</strong> have long hair, and I <strong>used to</strong> wear glasses, but not anymore.</em><br/>
      🔵 A: <em>And your English <strong>has improved</strong> so much!</em><br/>
      🟢 B: <em>Thanks! I <strong>started</strong> taking classes 6 months ago and I practice every day. It <strong>keeps getting</strong> easier!</em>
    </div>
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
