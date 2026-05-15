const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const masterpieceUpdates = {
    5: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>👤 Subject Pronouns Masterclass</h4>
                <p>Subject pronouns replace nouns to avoid repetition. They are the "actors" of your sentences.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📌 The Pronoun Grid</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Pronoun</th>
                            <th>Meaning</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>I</strong></td>
                            <td>Yo (Always capitalized)</td>
                        </tr>
                        <tr>
                            <td><strong>You</strong></td>
                            <td>Tú / Usted / Ustedes (Singular & Plural)</td>
                        </tr>
                        <tr>
                            <td><strong>He</strong></td>
                            <td>Él (Male persons)</td>
                        </tr>
                        <tr>
                            <td><strong>She</strong></td>
                            <td>Ella (Female persons)</td>
                        </tr>
                        <tr>
                            <td><strong>It</strong></td>
                            <td>Ello (Things, animals, concepts, weather)</td>
                        </tr>
                        <tr>
                            <td><strong>We</strong></td>
                            <td>Nosotros</td>
                        </tr>
                        <tr>
                            <td><strong>They</strong></td>
                            <td>Ellos / Ellas (Plural for people AND things)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ The "IT" Mandatory Rule</h5>
                <p>In Spanish, we can drop the subject (e.g., "Llueve"). In English, a sentence <strong>MUST</strong> have a subject. We use "It" as a dummy subject.</p>
                <ul class="premium-list">
                    <li>✅ <strong>It</strong> is raining.</li>
                    <li>❌ Is raining.</li>
                </ul>
            </div>
        </div>
    `,
    6: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>✨ The Verb "To Be"</h4>
                <p>The verb "To Be" is the backbone of the English language. It expresses existence (who you are) and state (how or where you are). Mastering its pronunciation is the first step to fluency.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📊 Conjugation & Phonetics</h5>
                <p>Native speakers rarely use the full forms in conversation. Focus on the <strong>contractions</strong>.</p>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Pronoun</th>
                            <th>Full Form</th>
                            <th>Contraction</th>
                            <th>Negative</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>I</strong></td>
                            <td>am</td>
                            <td><span class="text-highlight">I'm</span></td>
                            <td>I'm not</td>
                        </tr>
                        <tr>
                            <td><strong>You</strong></td>
                            <td>are</td>
                            <td><span class="text-highlight">You're</span></td>
                            <td>You aren't</td>
                        </tr>
                        <tr>
                            <td><strong>He/She/It</strong></td>
                            <td>is</td>
                            <td><span class="text-highlight">He's / She's / It's</span></td>
                            <td>isn't</td>
                        </tr>
                        <tr>
                            <td><strong>We/They</strong></td>
                            <td>are</td>
                            <td><span class="text-highlight">We're / They're</span></td>
                            <td>aren't</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Professional Tip: The "It's" Confusion</h5>
                <p>Do not confuse <strong>It's</strong> (It is) with <strong>Its</strong> (Possessive). </p>
                <ul class="premium-list">
                    <li>✅ <strong>It's</strong> a beautiful day. (It is)</li>
                    <li>✅ The company doubled <strong>its</strong> profits. (Possessive)</li>
                </ul>
            </div>
        </div>
    `,
    7: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>❓ Wh- Questions</h4>
                <p>These are question words used to ask for specific information, not just a "Yes" or "No" answer.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🔍 The Wh- Words</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Wh- Word</th>
                            <th>Usage</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Who</strong></td>
                            <td>For people</td>
                            <td><span class="text-highlight">Who</span> is that man?</td>
                        </tr>
                        <tr>
                            <td><strong>What</strong></td>
                            <td>For things/actions</td>
                            <td><span class="text-highlight">What</span> is your name?</td>
                        </tr>
                        <tr>
                            <td><strong>Where</strong></td>
                            <td>For places</td>
                            <td><span class="text-highlight">Where</span> are you from?</td>
                        </tr>
                        <tr>
                            <td><strong>When</strong></td>
                            <td>For time</td>
                            <td><span class="text-highlight">When</span> is the meeting?</td>
                        </tr>
                        <tr>
                            <td><strong>Why</strong></td>
                            <td>For reasons</td>
                            <td><span class="text-highlight">Why</span> are you late?</td>
                        </tr>
                        <tr>
                            <td><strong>How</strong></td>
                            <td>For manner/condition</td>
                            <td><span class="text-highlight">How</span> are you?</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 How + Adjective</h5>
                <p>"How" can combine with adjectives for specific questions:</p>
                <ul class="premium-list">
                    <li><strong>How old:</strong> For age (How old are you?)</li>
                    <li><strong>How much:</strong> For price/quantity (How much is it?)</li>
                </ul>
            </div>
        </div>
    `,
    8: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>👉 Demonstratives (This, That, These, Those)</h4>
                <p>Demonstratives show where an object, event, or person is in relation to the speaker. They depend on two things: <strong>Distance</strong> and <strong>Quantity</strong>.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📌 The Demonstrative Grid</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Distance</th>
                            <th>Singular (1)</th>
                            <th>Plural (2+)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Close (Aquí)</strong></td>
                            <td><span class="text-highlight">This</span> (Este/Esta)</td>
                            <td><span class="text-highlight">These</span> (Estos/Estas)</td>
                        </tr>
                        <tr>
                            <td><strong>Far (Allá)</strong></td>
                            <td><span class="text-highlight">That</span> (Ese/Aquel)</td>
                            <td><span class="text-highlight">Those</span> (Esos/Aquellos)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Pronunciation Trick</h5>
                <p>It's crucial to pronounce "This" and "These" differently to avoid confusion:</p>
                <ul class="premium-list">
                    <li><strong>This:</strong> Short sound, like a quick 'i'.</li>
                    <li><strong>These:</strong> Long sound, like a smiling 'ii'.</li>
                </ul>
            </div>
        </div>
    `,
    9: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>🏠 Possessives</h4>
                <p>Possessive adjectives show ownership. They always sit directly <strong>in front</strong> of the noun they describe.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🔗 Subject to Possessive Mapping</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Possessive</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>I</td><td><strong>My</strong></td><td>My laptop</td></tr>
                        <tr><td>You</td><td><strong>Your</strong></td><td>Your office</td></tr>
                        <tr><td>He</td><td><strong>His</strong></td><td>His project</td></tr>
                        <tr><td>She</td><td><strong>Her</strong></td><td>Her email</td></tr>
                        <tr><td>It</td><td><strong>Its</strong></td><td>Its battery</td></tr>
                        <tr><td>We</td><td><strong>Our</strong></td><td>Our team</td></tr>
                        <tr><td>They</td><td><strong>Their</strong></td><td>Their budget</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Professional Nuance: Their vs There vs They're</h5>
                <p>These three words sound exactly the same but have entirely different meanings:</p>
                <ul class="premium-list">
                    <li><strong>Their:</strong> Possessive (Their house).</li>
                    <li><strong>There:</strong> Location (Over there).</li>
                    <li><strong>They're:</strong> Contraction of "They are" (They're coming).</li>
                </ul>
            </div>
        </div>
    `,
    10: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>⏱️ What Time Is It?</h4>
                <p>There are two primary ways to tell the time in English: the "Digital" way and the "Traditional" way.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Digital vs Traditional</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Digital (Easy)</th>
                            <th>Traditional (Native)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10:00</td>
                            <td>Ten o'clock</td>
                            <td>Ten o'clock</td>
                        </tr>
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
                <ul class="premium-list">
                    <li>14:00 &rarr; 2:00 PM</li>
                    <li>20:00 &rarr; 8:00 PM</li>
                </ul>
            </div>
        </div>
    `
};

topics.forEach(topic => {
    if (masterpieceUpdates[topic.id]) {
        topic.theory = masterpieceUpdates[topic.id].trim();
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('Fixed Topic mismatches for Topics 5-10, without IPA.');
