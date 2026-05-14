const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

// Topic 5: Countries & Nationalities - MASTERPIECE EDITION
const topic5 = topics.find(t => t.id === 5);
if (topic5) {
    topic5.theory = `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Global Identity (Countries & Nationalities)</h4>
                <p>Talking about where you are from is a fundamental part of English. Nationalities usually follow specific suffix patterns (-ian, -ese, -ish).</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. The Suffix Groups 🔊</h5>
                <p>Listen to how the word stress changes between the Country and the Nationality.</p>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Nationality</th>
                            <th>Audio (Nat.)</th>
                            <th>Suffix</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Brazil</td>
                            <td>Brazilian</td>
                            <td><button class="btn btn-sm btn-outline-warning" data-audio="Brazilian">🔊</button></td>
                            <td><strong>-ian</strong></td>
                        </tr>
                        <tr>
                            <td>China</td>
                            <td>Chinese</td>
                            <td><button class="btn btn-sm btn-outline-warning" data-audio="Chinese">🔊</button></td>
                            <td><strong>-ese</strong></td>
                        </tr>
                        <tr>
                            <td>Spain</td>
                            <td>Spanish</td>
                            <td><button class="btn btn-sm btn-outline-warning" data-audio="Spanish">🔊</button></td>
                            <td><strong>-ish</strong></td>
                        </tr>
                        <tr>
                            <td>France</td>
                            <td>French</td>
                            <td><button class="btn btn-sm btn-outline-warning" data-audio="French">🔊</button></td>
                            <td>Irregular</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: The 'The' with Countries</h5>
                <p>Most countries do not use "The". However, if the name includes words like "Republic", "States", or "Kingdom", you <strong>must</strong> use it.</p>
                <ul>
                    <li>✅ <strong>Correct:</strong> "I am from <strong>The</strong> United States." <button class="btn btn-sm btn-link p-0" data-audio="I am from the United States">🔊</button></li>
                    <li>✅ <strong>Correct:</strong> "I am from <strong>The</strong> Czech Republic." <button class="btn btn-sm btn-link p-0" data-audio="I am from the Czech Republic">🔊</button></li>
                    <li>❌ <strong>Incorrect:</strong> "I am from The Brazil."</li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Capitalization Rule</h5>
                <p>In English, Countries, Nationalities, and Languages are <strong>always</strong> capitalized. Always.</p>
                <ul>
                    <li>✅ "He speaks <strong>E</strong>nglish."</li>
                    <li>❌ "He speaks english."</li>
                </ul>
            </div>
        </div>
    `.trim();
}

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('Topic 5 (Countries) updated to MASTERPIECE edition.');
