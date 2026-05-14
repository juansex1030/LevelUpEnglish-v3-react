const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

// Topic 4: Numbers 1-100 - MASTERPIECE EDITION
const topic4 = topics.find(t => t.id === 4);
if (topic4) {
    topic4.theory = `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Numbers 1-100 & Beyond</h4>
                <p>Numbers are essential for daily life: prices, dates, ages, and phone numbers. The secret to mastering English numbers lies in <strong>word stress</strong> and <strong>spelling rules</strong>.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. The "-teen" vs "-ty" Distinction 🔊</h5>
                <p>Many students confuse these. The key is that <strong>-teen</strong> numbers have a long, stressed end, while <strong>-ty</strong> numbers are short and flat.</p>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Audio</th>
                            <th>vs</th>
                            <th>Number</th>
                            <th>Audio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>13 (Thirteen)</td>
                            <td><button class="btn btn-sm btn-outline-warning" data-audio="Thirteen">🔊</button></td>
                            <td class="text-muted">vs</td>
                            <td>30 (Thirty)</td>
                            <td><button class="btn btn-sm btn-outline-warning" data-audio="Thirty">🔊</button></td>
                        </tr>
                        <tr>
                            <td>14 (Fourteen)</td>
                            <td><button class="btn btn-sm btn-outline-warning" data-audio="Fourteen">🔊</button></td>
                            <td class="text-muted">vs</td>
                            <td>40 (Forty)</td>
                            <td><button class="btn btn-sm btn-outline-warning" data-audio="Forty">🔊</button></td>
                        </tr>
                        <tr>
                            <td>15 (Fifteen)</td>
                            <td><button class="btn btn-sm btn-outline-warning" data-audio="Fifteen">🔊</button></td>
                            <td class="text-muted">vs</td>
                            <td>50 (Fifty)</td>
                            <td><button class="btn btn-sm btn-outline-warning" data-audio="Fifty">🔊</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-list">
                <h5>2. Spelling & Hyphens (-)</h5>
                <p>When writing numbers between <strong>21 and 99</strong>, you MUST use a hyphen.</p>
                <ul class="premium-list">
                    <li>21 &rarr; <strong>Twenty-one</strong> <button class="btn btn-sm btn-link p-0" data-audio="Twenty one">🔊</button></li>
                    <li>55 &rarr; <strong>Fifty-five</strong> <button class="btn btn-sm btn-link p-0" data-audio="Fifty five">🔊</button></li>
                    <li>99 &rarr; <strong>Ninety-nine</strong> <button class="btn btn-sm btn-link p-0" data-audio="Ninety nine">🔊</button></li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: 100 and Beyond</h5>
                <p>For 100, you can say "A hundred" (informal) or "One hundred" (formal).</p>
                <ul>
                    <li>100 &rarr; <strong>A hundred</strong> <button class="btn btn-sm btn-link p-0" data-audio="A hundred">🔊</button></li>
                    <li>101 &rarr; <strong>A hundred and one</strong> <button class="btn btn-sm btn-link p-0" data-audio="A hundred and one">🔊</button> (British English uses "and").</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Numbers in Context</h5>
                <p>Listen to how we use numbers for phone numbers and prices:</p>
                <ul>
                    <li><strong>Phone:</strong> 555-0199 &rarr; "Five five five, zero one double nine." <button class="btn btn-sm btn-link p-0" data-audio="Five five five, zero one double nine">🔊</button></li>
                    <li><strong>Price:</strong> $45.50 &rarr; "Forty-five dollars and fifty cents." <button class="btn btn-sm btn-link p-0" data-audio="Forty five dollars and fifty cents">🔊</button></li>
                </ul>
            </div>
        </div>
    `.trim();
}

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('Topic 4 (Numbers) updated to MASTERPIECE edition.');
