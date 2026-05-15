const fs = require('fs');
const path = require('path');
const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const updates = {
    16: `<div class="theory-premium academic-style">
  <div class="visual-card card-concept">
    <h4>🏫 Classroom Vocabulary</h4>
    <p>Whether you are a student or a professional in an English-speaking environment, knowing classroom and workplace vocabulary helps you communicate clearly and confidently.</p>
  </div>
  <div class="visual-card card-structure">
    <h5>📚 Objects in a Classroom</h5>
    <table class="theory-table">
      <thead><tr><th>Object</th><th>What it's for</th></tr></thead>
      <tbody>
        <tr><td><strong>Whiteboard</strong></td><td>The board the teacher writes on (modern version of blackboard)</td></tr>
        <tr><td><strong>Marker / Chalk</strong></td><td>Used to write on the whiteboard or blackboard</td></tr>
        <tr><td><strong>Textbook</strong></td><td>The main book for the class</td></tr>
        <tr><td><strong>Notebook</strong></td><td>Where students write their notes</td></tr>
        <tr><td><strong>Desk</strong></td><td>The student's table</td></tr>
        <tr><td><strong>Backpack</strong></td><td>The bag students carry to class</td></tr>
        <tr><td><strong>Highlighter</strong></td><td>A pen used to mark important text with color</td></tr>
        <tr><td><strong>Eraser</strong></td><td>Used to remove pencil marks</td></tr>
      </tbody>
    </table>
  </div>
  <div class="visual-card card-examples">
    <h5>🗣️ Real Classroom Phrases</h5>
    <ul class="premium-list">
      <li>"Could you open your <strong>textbooks</strong> to page 24?"</li>
      <li>"Please write this down in your <strong>notebooks</strong>."</li>
      <li>"Can I borrow your <strong>eraser</strong>?"</li>
      <li>"The answer is on the <strong>whiteboard</strong>."</li>
    </ul>
  </div>
  <div class="visual-card card-advanced">
    <h5>🚀 Key Classroom Verbs</h5>
    <table class="theory-table">
      <thead><tr><th>Verb</th><th>Meaning</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td><strong>Pass</strong></td><td>To succeed in a test</td><td>"I <strong>passed</strong> my English exam!"</td></tr>
        <tr><td><strong>Fail</strong></td><td>To not succeed in a test</td><td>"He <strong>failed</strong> because he didn't study."</td></tr>
        <tr><td><strong>Take notes</strong></td><td>To write down important information</td><td>"Always <strong>take notes</strong> during the lesson."</td></tr>
        <tr><td><strong>Raise your hand</strong></td><td>To signal you want to speak</td><td>"<strong>Raise your hand</strong> if you have a question."</td></tr>
      </tbody>
    </table>
  </div>
</div>`,

    17: `<div class="theory-premium academic-style">
  <div class="visual-card card-concept">
    <h4>🎨 Adjectives</h4>
    <p>Adjectives are describing words. They add color, detail, and personality to your sentences. Without them, English would be flat and robotic. A great speaker uses adjectives generously and precisely.</p>
  </div>
  <div class="visual-card card-structure">
    <h5>📌 Position of Adjectives</h5>
    <p>In English, adjectives almost always come <strong>BEFORE</strong> the noun, unlike in Spanish.</p>
    <table class="theory-table">
      <thead><tr><th>❌ Spanish word order</th><th>✅ English word order</th></tr></thead>
      <tbody>
        <tr><td>Un carro rojo</td><td>A <strong>red</strong> car</td></tr>
        <tr><td>Una casa grande</td><td>A <strong>big</strong> house</td></tr>
        <tr><td>Una persona inteligente</td><td>An <strong>intelligent</strong> person</td></tr>
      </tbody>
    </table>
  </div>
  <div class="visual-card card-structure">
    <h5>🔤 Common Adjective Categories</h5>
    <table class="theory-table">
      <thead><tr><th>Category</th><th>Examples</th></tr></thead>
      <tbody>
        <tr><td><strong>Size</strong></td><td>big, small, huge, tiny, large</td></tr>
        <tr><td><strong>Age</strong></td><td>old, young, new, ancient, modern</td></tr>
        <tr><td><strong>Shape</strong></td><td>round, square, flat, curved</td></tr>
        <tr><td><strong>Color</strong></td><td>red, dark blue, light green, pale yellow</td></tr>
        <tr><td><strong>Opinion</strong></td><td>beautiful, ugly, amazing, terrible</td></tr>
        <tr><td><strong>Material</strong></td><td>wooden, plastic, metal, cotton</td></tr>
      </tbody>
    </table>
  </div>
  <div class="visual-card card-examples">
    <h5>💬 Real Situation: Describing a Person</h5>
    <ul class="premium-list">
      <li>"She is a <strong>tall, young, beautiful</strong> woman."</li>
      <li>"He is a <strong>hard-working, intelligent</strong> employee."</li>
      <li>"They live in a <strong>small, cozy, wooden</strong> house."</li>
    </ul>
  </div>
  <div class="visual-card card-warning">
    <h5>⚠️ Adjectives Don't Have a Plural Form</h5>
    <p>In English, adjectives NEVER change to match the noun's number or gender.</p>
    <ul class="premium-list">
      <li>✅ Two <strong>red</strong> cars. ❌ Two <strong>reds</strong> cars.</li>
      <li>✅ Three <strong>beautiful</strong> girls. ❌ Three <strong>beautifuls</strong> girls.</li>
    </ul>
  </div>
</div>`,

    18: `<div class="theory-premium academic-style">
  <div class="visual-card card-concept">
    <h4>🎨 Colors</h4>
    <p>Colors are among the first words we learn in any language, but in professional English, knowing how to combine and modify them makes your descriptions much more precise and natural.</p>
  </div>
  <div class="visual-card card-structure">
    <h5>🌈 Core Colors & Their Shades</h5>
    <table class="theory-table">
      <thead><tr><th>Base Color</th><th>Light Shade</th><th>Dark Shade</th></tr></thead>
      <tbody>
        <tr><td><strong>Blue</strong></td><td>Light blue / Sky blue</td><td>Dark blue / Navy blue</td></tr>
        <tr><td><strong>Green</strong></td><td>Light green / Mint green</td><td>Dark green / Olive green</td></tr>
        <tr><td><strong>Red</strong></td><td>Light red / Pink</td><td>Dark red / Crimson</td></tr>
        <tr><td><strong>Yellow</strong></td><td>Light yellow / Cream</td><td>Dark yellow / Mustard</td></tr>
        <tr><td><strong>Brown</strong></td><td>Light brown / Beige</td><td>Dark brown / Chocolate</td></tr>
        <tr><td><strong>Gray</strong></td><td>Light gray / Silver</td><td>Dark gray / Charcoal</td></tr>
      </tbody>
    </table>
  </div>
  <div class="visual-card card-examples">
    <h5>🗣️ Real Situation: Shopping for Clothes</h5>
    <ul class="premium-list">
      <li>"Do you have this shirt in <strong>dark blue</strong>?"</li>
      <li>"I'm looking for a <strong>light gray</strong> jacket."</li>
      <li>"The sofa comes in <strong>beige</strong>, <strong>charcoal</strong>, or <strong>navy</strong>."</li>
    </ul>
  </div>
  <div class="visual-card card-advanced">
    <h5>🚀 UK vs US Spelling</h5>
    <p>Two common colors have different spellings depending on the variety of English:</p>
    <ul class="premium-list">
      <li><strong>Color</strong> (US) — <strong>Colour</strong> (UK)</li>
      <li><strong>Gray</strong> (US) — <strong>Grey</strong> (UK)</li>
    </ul>
    <p>Both are correct — just be consistent with one style.</p>
  </div>
</div>`,

    19: `<div class="theory-premium academic-style">
  <div class="visual-card card-concept">
    <h4>⏰ Telling the Time</h4>
    <p>Telling the time in English is a daily skill. There are two methods: the simple <strong>digital</strong> way and the traditional <strong>native</strong> way. Mastering both makes you sound natural in any context.</p>
  </div>
  <div class="visual-card card-structure">
    <h5>1. Digital Method (Simple & Safe)</h5>
    <p>Just say the hour, then the minutes as a number. Easy for beginners and always understood.</p>
    <table class="theory-table">
      <thead><tr><th>Time</th><th>How to say it</th></tr></thead>
      <tbody>
        <tr><td>3:00</td><td>"Three o'clock"</td></tr>
        <tr><td>3:10</td><td>"Three ten"</td></tr>
        <tr><td>3:25</td><td>"Three twenty-five"</td></tr>
        <tr><td>3:45</td><td>"Three forty-five"</td></tr>
        <tr><td>12:00</td><td>"Twelve o'clock" / "Noon" (midday) / "Midnight"</td></tr>
      </tbody>
    </table>
  </div>
  <div class="visual-card card-structure">
    <h5>2. Traditional Method (Native Speakers)</h5>
    <table class="theory-table">
      <thead><tr><th>Time</th><th>Traditional expression</th></tr></thead>
      <tbody>
        <tr><td>3:15</td><td>"A quarter <strong>past</strong> three"</td></tr>
        <tr><td>3:30</td><td>"Half <strong>past</strong> three"</td></tr>
        <tr><td>3:45</td><td>"A quarter <strong>to</strong> four"</td></tr>
        <tr><td>3:05</td><td>"Five <strong>past</strong> three"</td></tr>
        <tr><td>3:50</td><td>"Ten <strong>to</strong> four"</td></tr>
      </tbody>
    </table>
  </div>
  <div class="visual-card card-examples">
    <h5>🗣️ Real Situation: At Work or School</h5>
    <ul class="premium-list">
      <li>"The meeting starts at <strong>half past nine</strong>." (9:30)</li>
      <li>"My flight is at <strong>a quarter to seven</strong> in the morning." (6:45)</li>
      <li>"What time is it?" — "It's <strong>ten past two</strong>." (2:10)</li>
    </ul>
  </div>
  <div class="visual-card card-warning">
    <h5>⚠️ AM vs PM</h5>
    <p>English uses a 12-hour clock in conversation, so you must specify:</p>
    <ul class="premium-list">
      <li><strong>AM</strong> — Ante Meridiem (from midnight to 11:59 morning)</li>
      <li><strong>PM</strong> — Post Meridiem (from noon to 11:59 at night)</li>
      <li>"The store opens at <strong>9 AM</strong> and closes at <strong>9 PM</strong>."</li>
    </ul>
  </div>
</div>`,

    20: `<div class="theory-premium academic-style">
  <div class="visual-card card-concept">
    <h4>📅 Days & Months</h4>
    <p>Days of the week and months of the year are essential for scheduling meetings, making plans, and discussing dates. In English, they are always written with a <strong>capital letter</strong>.</p>
  </div>
  <div class="visual-card card-structure">
    <h5>📆 Days of the Week</h5>
    <table class="theory-table">
      <thead><tr><th>Day</th><th>Abbreviation</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td><strong>Monday</strong></td><td>Mon</td><td>"The week starts on <strong>Monday</strong>."</td></tr>
        <tr><td><strong>Tuesday</strong></td><td>Tue</td><td>"The report is due on <strong>Tuesday</strong>."</td></tr>
        <tr><td><strong>Wednesday</strong></td><td>Wed</td><td>"We have a meeting every <strong>Wednesday</strong>."</td></tr>
        <tr><td><strong>Thursday</strong></td><td>Thu</td><td>"The training is on <strong>Thursday</strong>."</td></tr>
        <tr><td><strong>Friday</strong></td><td>Fri</td><td>"Let's celebrate on <strong>Friday</strong> night!"</td></tr>
        <tr><td><strong>Saturday</strong></td><td>Sat</td><td>"I rest on <strong>Saturday</strong>."</td></tr>
        <tr><td><strong>Sunday</strong></td><td>Sun</td><td>"Shops are closed on <strong>Sunday</strong> here."</td></tr>
      </tbody>
    </table>
  </div>
  <div class="visual-card card-structure">
    <h5>🗓️ Time Prepositions with Days & Months</h5>
    <table class="theory-table">
      <thead><tr><th>Preposition</th><th>Use with</th><th>Examples</th></tr></thead>
      <tbody>
        <tr><td><strong>ON</strong></td><td>Days &amp; dates</td><td>"<strong>On</strong> Monday" / "<strong>On</strong> June 5th"</td></tr>
        <tr><td><strong>IN</strong></td><td>Months, years, seasons</td><td>"<strong>In</strong> July" / "<strong>In</strong> 2024" / "<strong>In</strong> winter"</td></tr>
        <tr><td><strong>AT</strong></td><td>Specific times &amp; holidays</td><td>"<strong>At</strong> noon" / "<strong>At</strong> Christmas"</td></tr>
      </tbody>
    </table>
  </div>
  <div class="visual-card card-examples">
    <h5>🗣️ Real Situation: Making Plans</h5>
    <ul class="premium-list">
      <li>"Are you free <strong>on Friday</strong>?" — "Yes, let's meet <strong>at 6 PM</strong>."</li>
      <li>"The project deadline is <strong>in March</strong>."</li>
      <li>"My birthday is <strong>on the 14th of July</strong>."</li>
      <li>"We'll launch the product <strong>in 2025</strong>."</li>
    </ul>
  </div>
  <div class="visual-card card-warning">
    <h5>⚠️ Capital Letters — Always!</h5>
    <p>Unlike Spanish, English ALWAYS capitalizes days and months, even in the middle of a sentence.</p>
    <ul class="premium-list">
      <li>✅ "See you on <strong>Thursday</strong>."</li>
      <li>❌ "See you on <strong>thursday</strong>."</li>
    </ul>
  </div>
</div>`,
};

topics.forEach(t => {
    if (updates[t.id]) t.theory = updates[t.id].trim();
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('Topics 16-20 updated.');
