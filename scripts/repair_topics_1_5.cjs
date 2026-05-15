const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const masterpieceUpdates = {
    1: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>👋 Greetings & Farewells Masterclass</h4>
                <p>Greetings are more than just words; they set the tone for every social and professional interaction. Understanding the <strong>nuances</strong> of each phrase is vital.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. The Formal Spectrum</h5>
                <p>Use these in business, interviews, or when meeting someone for the first time.</p>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Greeting</th>
                            <th>Usage Context</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Good morning</strong></td>
                            <td>From sunrise until 12:00 PM.</td>
                        </tr>
                        <tr>
                            <td><strong>Good afternoon</strong></td>
                            <td>From 12:00 PM until 6:00 PM.</td>
                        </tr>
                        <tr>
                            <td><strong>How do you do?</strong></td>
                            <td>Very formal. Only used the <strong>first time</strong> you meet someone.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-list">
                <h5>2. Casual & Slang Greetings</h5>
                <p>Perfect for friends, colleagues you know well, and relaxed environments.</p>
                <ul class="premium-list">
                    <li><strong>"What's up?"</strong>  &rarr; Very casual. Often answered with "Not much."</li>
                    <li><strong>"How's it going?"</strong>  &rarr; A friendly way to ask about someone's life.</li>
                    <li><strong>"Hey there!"</strong>  &rarr; Warm and welcoming.</li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: The 'Goodnight' Trap</h5>
                <p>Never use "Goodnight" as a greeting. It is strictly a <strong>departure</strong> phrase.</p>
                <ul class="premium-list">
                    <li>✅ <strong>Arriving at 8 PM:</strong> "Good evening!" </li>
                    <li>✅ <strong>Leaving at 8 PM:</strong> "Goodnight!" </li>
                </ul>
            </div>
        </div>
    `,
    2: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>🆔 Personal Information</h4>
                <p>Introducing yourself is more than just saying your name. It forms the foundation for networking and connecting with others in a new environment.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📝 Key Questions & Answers</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Meaning</th>
                            <th>Typical Answer</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>What's your name?</strong></td>
                            <td>¿Cómo te llamas?</td>
                            <td>My name is... / I'm...</td>
                        </tr>
                        <tr>
                            <td><strong>Where are you from?</strong></td>
                            <td>¿De dónde eres?</td>
                            <td>I'm from Colombia.</td>
                        </tr>
                        <tr>
                            <td><strong>How old are you?</strong></td>
                            <td>¿Cuántos años tienes?</td>
                            <td>I am 25 years old.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Professional Tip: "I have" vs "I am"</h5>
                <p>In Spanish, we say "Tengo 25 años" (I have). In English, age is a state of being, not a possession. Always use the verb <strong>To Be</strong>.</p>
                <ul class="premium-list">
                    <li>✅ I <strong>am</strong> 25 years old.</li>
                    <li>❌ I <strong>have</strong> 25 years.</li>
                </ul>
            </div>
        </div>
    `,
    4: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>🔢 Numbers 1-100</h4>
                <p>Numbers are essential for prices, ages, dates, and phone numbers. Mastering their pronunciation prevents costly miscommunications.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🚀 The Suffix Secret: -TEEN vs -TY</h5>
                <p>Many students confuse 13 with 30, or 14 with 40. Here is the key:</p>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Suffix</th>
                            <th>Rule</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>-TEEN</strong> (13-19)</td>
                            <td>Long and stressed at the end.</td>
                            <td>Thir-<strong>TEEN</strong>, Four-<strong>TEEN</strong></td>
                        </tr>
                        <tr>
                            <td><strong>-TY</strong> (20-90)</td>
                            <td>Short, sharp, and unstressed.</td>
                            <td><strong>THIR</strong>-ty, <strong>FOR</strong>-ty</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Building Complex Numbers</h5>
                <p>For numbers greater than 20, simply join the tens and units with a hyphen:</p>
                <ul class="premium-list">
                    <li>25 &rarr; Twenty-five</li>
                    <li>42 &rarr; Forty-two</li>
                    <li>88 &rarr; Eighty-eight</li>
                </ul>
            </div>
        </div>
    `,
    5: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>🌍 Countries & Nationalities</h4>
                <p>Learning country names and nationalities allows you to discuss origins, products, and cultural backgrounds with precision.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. The Suffix Groups</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Nationality</th>
                            <th>Suffix</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Brazil</strong></td>
                            <td>Brazilian</td>
                            <td><span class="text-highlight">-ian</span></td>
                        </tr>
                        <tr>
                            <td><strong>China</strong></td>
                            <td>Chinese</td>
                            <td><span class="text-highlight">-ese</span></td>
                        </tr>
                        <tr>
                            <td><strong>Spain</strong></td>
                            <td>Spanish</td>
                            <td><span class="text-highlight">-ish</span></td>
                        </tr>
                        <tr>
                            <td><strong>France</strong></td>
                            <td>French</td>
                            <td>Irregular</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Important Rule: Capitalization</h5>
                <p>In English, both Countries and Nationalities are <strong>Proper Nouns</strong> and must ALWAYS be written with a capital letter.</p>
                <ul class="premium-list">
                    <li>✅ <strong>I am Spanish.</strong></li>
                    <li>❌ i am spanish.</li>
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
console.log('Masterpiece Theory repair applied for Topics 1, 2, 4, 5.');
