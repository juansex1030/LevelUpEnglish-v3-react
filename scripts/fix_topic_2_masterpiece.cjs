const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

// Topic 2: Personal Information - MASTERPIECE EDITION
const topic2 = topics.find(t => t.id === 2);
if (topic2) {
    topic2.theory = `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Exchanging Personal Information</h4>
                <p>Exchanging basic details is the most common social interaction. Accuracy in providing names, origin, and contact details is paramount.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Identification & Names</h5>
                <p>Listen to how to ask and answer about identity.</p>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Audio</th>
                            <th>Polite Response</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>"What's your full name?"</td>
                            <td><button class="btn btn-sm btn-outline-warning" data-audio="What is your full name?">🔊</button></td>
                            <td>"My full name is [Name] [Surname]."</td>
                        </tr>
                        <tr>
                            <td>"How do you spell your last name?"</td>
                            <td><button class="btn btn-sm btn-outline-warning" data-audio="How do you spell your last name?">🔊</button></td>
                            <td>"It's spelled S-M-I-T-H."</td>
                        </tr>
                        <tr>
                            <td>"What's your nickname?"</td>
                            <td><button class="btn btn-sm btn-outline-warning" data-audio="What is your nickname?">🔊</button></td>
                            <td>"You can call me [Nickname]."</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-list">
                <h5>2. Origin & Residence</h5>
                <ul class="premium-list">
                    <li><strong>"Where are you from?"</strong> <button class="btn btn-sm btn-link p-0" data-audio="Where are you from?">🔊</button> &rarr; Asks about your nationality/hometown.</li>
                    <li><strong>"Where do you live?"</strong> <button class="btn btn-sm btn-link p-0" data-audio="Where do you live?">🔊</button> &rarr; Asks about your current city or address.</li>
                    <li><strong>"What's your nationality?"</strong> <button class="btn btn-sm btn-link p-0" data-audio="What is your nationality?">🔊</button> &rarr; More formal than "Where are you from?".</li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Telling your Age</h5>
                <p>In English, we treat age as a <strong>state</strong> (how we are), not a possession.</p>
                <ul>
                    <li>✅ <strong>Correct:</strong> "I <strong>am</strong> twenty-five years old." <button class="btn btn-sm btn-link p-0" data-audio="I am twenty five years old">🔊</button></li>
                    <li>✅ <strong>Common:</strong> "I <strong>am</strong> twenty-five." <button class="btn btn-sm btn-link p-0" data-audio="I am twenty five">🔊</button></li>
                    <li>❌ <strong>Incorrect:</strong> "I have twenty-five years."</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Master Dialogue: Introduction</h5>
                <div class="p-4 bg-dark text-white rounded-4 border border-secondary shadow-sm" style="background: rgba(0,0,0,0.4)">
                    <p class="mb-2"><strong>A:</strong> "Hello! What's your name and where are you from?" <button class="btn btn-sm btn-link p-0 text-warning" data-audio="Hello! What is your name and where are you from?">🔊</button></p>
                    <p class="mb-2"><strong>B:</strong> "Hi! My name is Clara and I'm from Colombia. I'm twenty years old. And you?" <button class="btn btn-sm btn-link p-0 text-warning" data-audio="Hi! My name is Clara and I am from Colombia. I am twenty years old. And you?">🔊</button></p>
                    <p class="mb-0"><strong>A:</strong> "Nice to meet you, Clara! I'm John, from Canada." <button class="btn btn-sm btn-link p-0 text-warning" data-audio="Nice to meet you, Clara! I am John, from Canada.">🔊</button></p>
                </div>
            </div>
        </div>
    `.trim();
}

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('Topic 2 (Personal Info) updated to MASTERPIECE edition.');
