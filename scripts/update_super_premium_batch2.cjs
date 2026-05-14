const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const superPremiumTheoryA1_P2 = {
    16: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Classroom Vocabulary</h4>
                <p>Essential terminology for academic environments, including physical objects and common actions.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Objects and Furniture</h5>
                <ul>
                    <li><strong>Writing:</strong> Pen, Pencil, Chalk, Marker.</li>
                    <li><strong>Surface:</strong> Desk, Whiteboard, Blackboard.</li>
                    <li><strong>Storage:</strong> Backpack, Pencil case, Locker.</li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Verbs for Class</h5>
                <ul>
                    <li><strong>Take a test:</strong> To complete an exam.</li>
                    <li><strong>Fail:</strong> Not achieving the required score.</li>
                    <li><strong>Pass:</strong> Achieving the required score.</li>
                </ul>
            </div>
        </div>
    `,
    17: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Basic Adjectives</h4>
                <p>Adjectives provide descriptions. In English, they follow specific placement and form rules.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Position in Sentence</h5>
                <p>Unlike some other languages, adjectives in English usually come <strong>before</strong> the noun.</p>
                <ul>
                    <li>✅ <strong>The blue house.</strong></li>
                    <li>❌ <strong>The house blue.</strong></li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: No Plurals</h5>
                <p>Adjectives in English are <strong>never</strong> pluralized, even if the noun is plural.</p>
                <ul>
                    <li>✅ <strong>Green apples.</strong></li>
                    <li>❌ <strong>Greens apples.</strong></li>
                </ul>
            </div>
        </div>
    `,
    18: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Colors</h4>
                <p>Colors are fundamental descriptors. Beyond basic shades, English uses compounds for precision.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Compound Colors</h5>
                <p>Use "Light" or "Dark" before a color to indicate intensity:</p>
                <ul>
                    <li>Light blue / Dark blue.</li>
                    <li>Pale green / Deep red.</li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Spelling Variation</h5>
                <p>There is a regional difference in spelling:</p>
                <ul>
                    <li><strong>Color / Gray:</strong> American English (US).</li>
                    <li><strong>Colour / Grey:</strong> British English (UK).</li>
                </ul>
            </div>
        </div>
    `,
    19: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Telling the Time</h4>
                <p>There are two primary ways to tell the time in English: the "Digital" way and the "Traditional" way.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Digital vs Traditional</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Digital</th>
                            <th>Traditional</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10:15</td>
                            <td>Ten fifteen</td>
                            <td>A quarter past ten</td>
                        </tr>
                        <tr>
                            <td>10:30</td>
                            <td>Ten thirty</td>
                            <td>Half past ten</td>
                        </tr>
                        <tr>
                            <td>10:45</td>
                            <td>Ten forty-five</td>
                            <td>A quarter to eleven</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: AM vs PM</h5>
                <p>English speakers rarely use the 24-hour clock in conversation. We use AM (morning) and PM (afternoon/night).</p>
            </div>
        </div>
    `,
    20: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Days & Months</h4>
                <p>Formatting dates and discussing schedules requires correct capitalization and preposition usage.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Prepositions for Time</h5>
                <ul>
                    <li><strong>ON:</strong> Used for specific days. (On Monday, On June 5th).</li>
                    <li><strong>IN:</strong> Used for months or years. (In July, In 2024).</li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Capitalization</h5>
                <p>Days and Months are <strong>Proper Nouns</strong> in English and must always be capitalized.</p>
                <ul>
                    <li>✅ <strong>Monday</strong> / ❌ <strong>monday</strong></li>
                </ul>
            </div>
        </div>
    `,
    21: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Present Simple (Positive)</h4>
                <p>The Present Simple describes habits, routines, and permanent states.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. The 3rd Person Singular Rule</h5>
                <p>For <strong>He, She, It</strong>, we must add an <strong>-S</strong> to the verb.</p>
                <ul>
                    <li>I / You / We / They &rarr; <strong>work</strong>.</li>
                    <li>He / She / It &rarr; <strong>works</strong>.</li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Spelling Variants</h5>
                <ul>
                    <li>Verbs ending in -ch, -sh, -s, -x &rarr; Add <strong>-es</strong> (Watch &rarr; Watches).</li>
                    <li>Verbs ending in -y (after consonant) &rarr; <strong>-ies</strong> (Study &rarr; Studies).</li>
                </ul>
            </div>
        </div>
    `,
    22: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Present Simple (Negative & Questions)</h4>
                <p>Unlike the verb "To Be," action verbs require the auxiliary <strong>DO / DOES</strong> for negatives and questions.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Using the Auxiliary</h5>
                <ul>
                    <li>I <strong>do not (don't)</strong> work.</li>
                    <li>He <strong>does not (doesn't)</strong> work.</li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: The "Ghost" S</h5>
                <p>When you use <strong>DOES</strong> or <strong>DOESN'T</strong>, the main verb <strong>loses its -S</strong>.</p>
                <ul>
                    <li>Affirmative: He <strong>works</strong>.</li>
                    <li>Question: <strong>Does</strong> he <strong>work</strong>? (Not: Does he works?)</li>
                </ul>
            </div>
        </div>
    `,
    23: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Daily Routine</h4>
                <p>Combining verbs and time expressions to describe a typical day.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Phrasal Verbs in Routine</h5>
                <ul class="premium-list">
                    <li><strong>Wake up:</strong> To stop sleeping.</li>
                    <li><strong>Get up:</strong> To leave the bed.</li>
                    <li><strong>Go to bed:</strong> To start sleeping.</li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Sequence Markers</h5>
                <p>Use these words to link your routine:</p>
                <p><em>First, Then, After that, Finally.</em></p>
            </div>
        </div>
    `,
    24: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Adverbs of Frequency</h4>
                <p>These adverbs indicate how often an action occurs.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. The Frequency Scale</h5>
                <ul class="premium-list">
                    <li><strong>Always</strong> (100%)</li>
                    <li><strong>Usually</strong> (80%)</li>
                    <li><strong>Often</strong> (60%)</li>
                    <li><strong>Sometimes</strong> (40%)</li>
                    <li><strong>Rarely / Seldom</strong> (10%)</li>
                    <li><strong>Never</strong> (0%)</li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Position</h5>
                <p>Frequency adverbs go <strong>before</strong> main verbs, but <strong>after</strong> the verb "To Be."</p>
                <ul>
                    <li>I <strong>always eat</strong> breakfast.</li>
                    <li>I <strong>am always</strong> on time.</li>
                </ul>
            </div>
        </div>
    `,
    25: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Can / Can't (Ability)</h4>
                <p>Modal verbs like "Can" express ability or possibility and do not change form.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Universal Conjugation</h5>
                <p>Unlike other verbs, "Can" is the same for all subjects:</p>
                <ul>
                    <li>I <strong>can</strong> swim.</li>
                    <li>He <strong>can</strong> swim. (No -S!)</li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Pronunciation</h5>
                <p>Focus on the vowel sound. "Can" [kæn] is short and weak. "Can't" [kɑːnt] is long and stressed.</p>
            </div>
        </div>
    `,
    26: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Like, Love, Hate (+ -ing)</h4>
                <p>Verbs of preference are usually followed by another verb in the <strong>Gerund (-ing)</strong> form.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Preferences</h5>
                <ul>
                    <li>I love <strong>reading</strong>.</li>
                    <li>She likes <strong>dancing</strong>.</li>
                    <li>They hate <strong>waiting</strong>.</li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Spelling the -ing</h5>
                <p>If a verb ends in 'e', remove it before adding -ing:</p>
                <p>Dance &rarr; Danc<strong>ing</strong>.</p>
            </div>
        </div>
    `,
    27: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Object Pronouns</h4>
                <p>Object pronouns receive the action of the verb and follow the verb or a preposition.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Mapping Subjects to Objects</h5>
                <ul class="premium-list">
                    <li>I &rarr; <strong>Me</strong></li>
                    <li>You &rarr; <strong>You</strong></li>
                    <li>He &rarr; <strong>Him</strong></li>
                    <li>She &rarr; <strong>Her</strong></li>
                    <li>It &rarr; <strong>It</strong></li>
                    <li>We &rarr; <strong>Us</strong></li>
                    <li>They &rarr; <strong>Them</strong></li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Placement</h5>
                <p>Always place them after the verb: "I love <strong>it</strong>." (Not: I it love).</p>
            </div>
        </div>
    `,
    28: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Food & Drink</h4>
                <p>Categorizing food into Countable and Uncountable nouns is key for correct grammar.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Categories</h5>
                <ul>
                    <li><strong>Fruit/Veg:</strong> Apple, Banana, Carrot.</li>
                    <li><strong>Dairy:</strong> Milk, Cheese, Yogurt.</li>
                    <li><strong>Meat:</strong> Chicken, Beef, Pork.</li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Meal Times</h5>
                <p>In English, we typically have <strong>Breakfast</strong>, <strong>Lunch</strong>, and <strong>Dinner</strong>. We do not use "the" before meals (e.g., "I have breakfast").</p>
            </div>
        </div>
    `,
    29: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Some & Any</h4>
                <p>These quantifiers are used to discuss indefinite quantities of plural or uncountable nouns.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Usage Patterns</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Sentence Type</th>
                            <th>Quantifier</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Affirmative (+)</td>
                            <td>Some</td>
                        </tr>
                        <tr>
                            <td>Negative (-)</td>
                            <td>Any</td>
                        </tr>
                        <tr>
                            <td>Question (?)</td>
                            <td>Any</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Exceptions</h5>
                <p>We use <strong>SOME</strong> in questions when offering or requesting something.</p>
                <ul>
                    <li>"Would you like <strong>some</strong> coffee?" (Offer).</li>
                </ul>
            </div>
        </div>
    `,
    30: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Countable vs Uncountable</h4>
                <p>Understanding the nature of nouns determines whether we can use numbers or plural forms.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Key Differences</h5>
                <ul>
                    <li><strong>Countable:</strong> Can be counted (1 apple, 2 apples). Can be plural.</li>
                    <li><strong>Uncountable:</strong> Cannot be counted (Water, Rice). No plural form.</li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Units of Measurement</h5>
                <p>To count uncountable things, we use "containers" or units:</p>
                <ul>
                    <li>A <strong>glass</strong> of water.</li>
                    <li>A <strong>kilogram</strong> of rice.</li>
                </ul>
            </div>
        </div>
    `
};

topics.forEach(topic => {
    if (superPremiumTheoryA1_P2[topic.id]) {
        topic.theory = superPremiumTheoryA1_P2[topic.id].trim();
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('Batch 2 (16-30) updated to Super Premium English.');
