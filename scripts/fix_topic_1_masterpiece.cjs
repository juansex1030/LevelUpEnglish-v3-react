const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

// Topic 1: Greetings & Farewells - MASTERPIECE EDITION
const topic1 = topics.find(t => t.id === 1);
if (topic1) {
    topic1.theory = `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Greetings & Farewells Masterclass</h4>
                <p>Greetings are more than just words; they set the tone for every social and professional interaction. Understanding the <strong>nuances</strong> of each phrase is vital.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. The Formal Spectrum</h5>
                <p>Use these in business, interviews, or when meeting someone for the first time.</p>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Greeting</th>
                            <th>Audio</th>
                            <th>Usage Context</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>"Good morning"</td>
                            <td><button class="btn btn-sm btn-outline-warning" data-audio="Good morning">🔊</button></td>
                            <td>From sunrise until 12:00 PM.</td>
                        </tr>
                        <tr>
                            <td>"Good afternoon"</td>
                            <td><button class="btn btn-sm btn-outline-warning" data-audio="Good afternoon">🔊</button></td>
                            <td>From 12:00 PM until 6:00 PM.</td>
                        </tr>
                        <tr>
                            <td>"How do you do?"</td>
                            <td><button class="btn btn-sm btn-outline-warning" data-audio="How do you do?">🔊</button></td>
                            <td>Very formal. Only used the <strong>first time</strong> you meet someone.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-list">
                <h5>2. Casual & Slang Greetings</h5>
                <p>Perfect for friends, colleagues you know well, and relaxed environments.</p>
                <ul class="premium-list">
                    <li><strong>"What's up?"</strong> <button class="btn btn-sm btn-link p-0" data-audio="What is up?">🔊</button> &rarr; Very casual. Often answered with "Not much."</li>
                    <li><strong>"How's it going?"</strong> <button class="btn btn-sm btn-link p-0" data-audio="How is it going?">🔊</button> &rarr; A friendly way to ask about someone's life.</li>
                    <li><strong>"Hey there!"</strong> <button class="btn btn-sm btn-link p-0" data-audio="Hey there">🔊</button> &rarr; Warm and welcoming.</li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: The 'Goodnight' Trap</h5>
                <p>Never use "Goodnight" as a greeting. It is strictly a <strong>departure</strong> phrase.</p>
                <ul>
                    <li>✅ <strong>Arriving at 8 PM:</strong> "Good evening!" <button class="btn btn-sm btn-link p-0" data-audio="Good evening">🔊</button></li>
                    <li>✅ <strong>Leaving at 8 PM:</strong> "Goodnight!" <button class="btn btn-sm btn-link p-0" data-audio="Good night">🔊</button></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Real-Life Dialogues</h5>
                <div class="p-3 bg-light rounded border mb-2">
                    <p class="mb-1"><strong>A:</strong> "Good afternoon, Mr. Smith. How do you do?" <button class="btn btn-sm btn-link p-0" data-audio="Good afternoon, Mr. Smith. How do you do?">🔊</button></p>
                    <p class="mb-0"><strong>B:</strong> "How do you do? It is a pleasure to meet you." <button class="btn btn-sm btn-link p-0" data-audio="How do you do? It is a pleasure to meet you.">🔊</button></p>
                </div>
            </div>
        </div>
    `.trim();
}

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('Topic 1 (Greetings) updated to MASTERPIECE edition.');
