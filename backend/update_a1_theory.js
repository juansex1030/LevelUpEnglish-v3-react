const Database = require('better-sqlite3');
const db = new Database('./data/database.db');

const newTheory = `
<div style="font-family: inherit;">

  <!-- Intro banner -->
  <div class="visual-card card-concept" style="display:flex; align-items:center; gap:1.5rem; padding:1.5rem 2rem;">
    <img src="https://media.tenor.com/8eiEHDS7b9MAAAAC/hi-wave.gif" alt="Waving hand" style="width:100px; height:100px; border-radius:50%; object-fit:cover; flex-shrink:0;" />
    <div>
      <h5 style="margin:0 0 0.5rem;">👋 Greetings and Farewells</h5>
      <p style="margin:0;">The first tools of any conversation! What you say depends on the <strong>time of day</strong> and whether the situation is <strong>formal</strong> 🏢 or <strong>informal</strong> 😊.</p>
    </div>
  </div>

  <!-- Time of Day -->
  <div class="visual-card card-concept">
    <h5>🕐 Greetings by Time of Day</h5>
    <ul>
      <li>🌅 <strong>Good morning</strong> — from wake-up until <strong>12:00 PM</strong> (noon).</li>
      <li>☀️ <strong>Good afternoon</strong> — from <strong>12:00 PM</strong> until <strong>6:00 PM</strong>.</li>
      <li>🌙 <strong>Good evening</strong> — when arriving somewhere at night (after 6 PM). <em>Never use it to say goodbye!</em></li>
    </ul>
    <div style="background:rgba(0,173,181,0.08); border-radius:0.5rem; padding:0.75rem 1rem; margin-top:0.75rem; font-size:0.9rem;">
      💡 <strong>Tip:</strong> "Good night" is NOT a greeting — it's only used to say goodbye at night or before sleeping 🛏️.
    </div>
  </div>

  <!-- General Greetings -->
  <div class="visual-card card-concept">
    <h5>💬 General Greetings</h5>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
      <div style="background:rgba(0,173,181,0.07); border-radius:0.75rem; padding:1rem; text-align:center;">
        <div style="font-size:2rem;">😊</div>
        <strong>Hello</strong>
        <p style="font-size:0.85rem; margin:0.25rem 0 0;">Neutral — works in any situation.</p>
      </div>
      <div style="background:rgba(0,173,181,0.07); border-radius:0.75rem; padding:1rem; text-align:center;">
        <div style="font-size:2rem;">🤙</div>
        <strong>Hi / Hey</strong>
        <p style="font-size:0.85rem; margin:0.25rem 0 0;">Informal — for friends and family.</p>
      </div>
      <div style="background:rgba(0,173,181,0.07); border-radius:0.75rem; padding:1rem; text-align:center; grid-column: span 2;">
        <div style="font-size:2rem;">🤔</div>
        <strong>How are you?</strong>
        <p style="font-size:0.85rem; margin:0.25rem 0 0;">Most common way to ask "¿Cómo estás?". Reply: <em>"I'm fine, thank you."</em> or informally <em>"I'm good, you?"</em></p>
      </div>
    </div>
  </div>

  <!-- Farewells -->
  <div class="visual-card card-concept">
    <h5>👋 Farewells</h5>
    <ul>
      <li>🙂 <strong>Goodbye</strong> — standard, neutral. Works anywhere.</li>
      <li>🌙 <strong>Good night</strong> — ONLY at night, especially before sleeping. <em>Not a greeting!</em></li>
      <li>😄 <strong>See you later / See you soon</strong> — friendly and informal.</li>
      <li>🤗 <strong>Take care</strong> — warm farewell, shows you care about the person.</li>
    </ul>
  </div>

  <!-- Quick Reference -->
  <div class="visual-card card-example">
    <h5>⚡ Quick Reference</h5>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
        <thead>
          <tr style="border-bottom:2px solid rgba(0,173,181,0.3);">
            <th style="padding:0.5rem; text-align:left;">Expression</th>
            <th style="padding:0.5rem; text-align:center;">Formal</th>
            <th style="padding:0.5rem; text-align:center;">Informal</th>
            <th style="padding:0.5rem; text-align:left;">Use for</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
            <td style="padding:0.5rem;">Good morning ☀️</td>
            <td style="padding:0.5rem; text-align:center;">✅</td>
            <td style="padding:0.5rem; text-align:center;">✅</td>
            <td style="padding:0.5rem;">Greeting (AM)</td>
          </tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
            <td style="padding:0.5rem;">Hello 😊</td>
            <td style="padding:0.5rem; text-align:center;">✅</td>
            <td style="padding:0.5rem; text-align:center;">✅</td>
            <td style="padding:0.5rem;">Greeting (anytime)</td>
          </tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
            <td style="padding:0.5rem;">Hi / Hey 🤙</td>
            <td style="padding:0.5rem; text-align:center;">❌</td>
            <td style="padding:0.5rem; text-align:center;">✅</td>
            <td style="padding:0.5rem;">Greeting (informal)</td>
          </tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
            <td style="padding:0.5rem;">Goodbye 🙂</td>
            <td style="padding:0.5rem; text-align:center;">✅</td>
            <td style="padding:0.5rem; text-align:center;">✅</td>
            <td style="padding:0.5rem;">Farewell (anytime)</td>
          </tr>
          <tr>
            <td style="padding:0.5rem;">Good night 🌙</td>
            <td style="padding:0.5rem; text-align:center;">✅</td>
            <td style="padding:0.5rem; text-align:center;">✅</td>
            <td style="padding:0.5rem;">Farewell (at night only)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`.trim();

db.prepare('UPDATE topics SET theory = ? WHERE level = ? AND number = ?').run(newTheory, 'A1', 1);
console.log('✅ A1 Topic 1 theory updated successfully!');
