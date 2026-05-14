const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

// Topic 3: The Alphabet - MASTERPIECE EDITION
const topic3 = topics.find(t => t.id === 3);
if (topic3) {
    topic3.theory = `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: The English Alphabet Masterclass</h4>
                <p>The English alphabet consists of <strong>26 letters</strong>. Mastering the pronunciation of each letter is the first step toward perfect spelling and clear communication.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. The Complete Alphabet Table (A-Z)</h5>
                <p>Click the 🔊 icon to hear the correct pronunciation of each letter.</p>
                <div class="alphabet-grid">
                    <table class="theory-table text-center">
                        <thead>
                            <tr>
                                <th>Letter</th>
                                <th>Phonetic</th>
                                <th>Audio</th>
                                <th>Letter</th>
                                <th>Phonetic</th>
                                <th>Audio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="fw-bold">A</td><td>[eɪ]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="A">🔊</button></td>
                                <td class="fw-bold">N</td><td>[ɛn]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="N">🔊</button></td>
                            </tr>
                            <tr>
                                <td class="fw-bold">B</td><td>[biː]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="B">🔊</button></td>
                                <td class="fw-bold">O</td><td>[oʊ]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="O">🔊</button></td>
                            </tr>
                            <tr>
                                <td class="fw-bold">C</td><td>[siː]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="C">🔊</button></td>
                                <td class="fw-bold">P</td><td>[piː]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="P">🔊</button></td>
                            </tr>
                            <tr>
                                <td class="fw-bold">D</td><td>[diː]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="D">🔊</button></td>
                                <td class="fw-bold">Q</td><td>[kjuː]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="Q">🔊</button></td>
                            </tr>
                            <tr>
                                <td class="fw-bold">E</td><td>[iː]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="E">🔊</button></td>
                                <td class="fw-bold">R</td><td>[ɑːr]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="R">🔊</button></td>
                            </tr>
                            <tr>
                                <td class="fw-bold">F</td><td>[ɛf]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="F">🔊</button></td>
                                <td class="fw-bold">S</td><td>[ɛs]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="S">🔊</button></td>
                            </tr>
                            <tr>
                                <td class="fw-bold">G</td><td>[dʒiː]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="G">🔊</button></td>
                                <td class="fw-bold">T</td><td>[tiː]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="T">🔊</button></td>
                            </tr>
                            <tr>
                                <td class="fw-bold">H</td><td>[eɪtʃ]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="H">🔊</button></td>
                                <td class="fw-bold">U</td><td>[juː]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="U">🔊</button></td>
                            </tr>
                            <tr>
                                <td class="fw-bold">I</td><td>[aɪ]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="I">🔊</button></td>
                                <td class="fw-bold">V</td><td>[viː]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="V">🔊</button></td>
                            </tr>
                            <tr>
                                <td class="fw-bold">J</td><td>[dʒeɪ]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="J">🔊</button></td>
                                <td class="fw-bold">W</td><td>[ˈdʌbljuː]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="W">🔊</button></td>
                            </tr>
                            <tr>
                                <td class="fw-bold">K</td><td>[keɪ]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="K">🔊</button></td>
                                <td class="fw-bold">X</td><td>[ɛks]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="X">🔊</button></td>
                            </tr>
                            <tr>
                                <td class="fw-bold">L</td><td>[ɛl]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="L">🔊</button></td>
                                <td class="fw-bold">Y</td><td>[waɪ]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="Y">🔊</button></td>
                            </tr>
                            <tr>
                                <td class="fw-bold">M</td><td>[ɛm]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="M">🔊</button></td>
                                <td class="fw-bold">Z</td><td>[ziː] / [zɛd]</td><td><button class="btn btn-sm btn-outline-warning" data-audio="Z">🔊</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Spelling Emails & Symbols</h5>
                <p>When giving your email address, these symbols are essential:</p>
                <ul class="premium-list">
                    <li><strong>@</strong> &rarr; <strong>At</strong> (e.g., info@example.com is "info AT example dot com")</li>
                    <li><strong>.</strong> &rarr; <strong>Dot</strong></li>
                    <li><strong>-</strong> &rarr; <strong>Hyphen</strong> or <strong>Dash</strong></li>
                    <li><strong>_</strong> &rarr; <strong>Underscore</strong></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Practice Examples (Spelling)</h5>
                <p>Listen and follow the spelling of these complex names:</p>
                <ul>
                    <li><strong>SCHWARZENEGGER:</strong> <button class="btn btn-sm btn-link" data-audio="S C H W A R Z E N E G G E R">🔊 Play Spelling</button></li>
                    <li><strong>RESTAURANT:</strong> <button class="btn btn-sm btn-link" data-audio="R E S T A U R A N T">🔊 Play Spelling</button></li>
                    <li><strong>QUEUE:</strong> <button class="btn btn-sm btn-link" data-audio="Q U E U E">🔊 Play Spelling</button></li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Common Confusion: G vs J</h5>
                <p>Don't confuse <strong>G</strong> [dʒiː] as in <em>George</em> with <strong>J</strong> [dʒeɪ] as in <em>Jack</em>. This is a very common mistake for Spanish speakers!</p>
            </div>
        </div>
    `.trim();
}

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('Topic 3 (Alphabet) updated to MASTERPIECE edition.');
