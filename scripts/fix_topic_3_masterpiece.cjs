const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

// Topic 3: The Alphabet - MASTERPIECE EDITION (VOCABULARY STYLE)
const topic3 = topics.find(t => t.id === 3);
if (topic3) {
    topic3.theory = `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Mastering the English Alphabet 🔊</h4>
                <p>The English alphabet is the foundation of literacy. Beyond simple letters, mastering the <strong>pronunciation</strong> and <strong>phonetic spelling</strong> is crucial for professional communication.</p>
            </div>

            <div class="alphabet-grid mt-4">
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Letter</th>
                            <th>IPA</th>
                            <th>Audio</th>
                            <th>Letter</th>
                            <th>IPA</th>
                            <th>Audio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>A</strong></td>
                            <td>/eɪ/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="A" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                            <td><strong>B</strong></td>
                            <td>/biː/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="B" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                        </tr>
                        <tr>
                            <td><strong>C</strong></td>
                            <td>/siː/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="C" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                            <td><strong>D</strong></td>
                            <td>/diː/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="D" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                        </tr>
                        <tr>
                            <td><strong>E</strong></td>
                            <td>/iː/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="E" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                            <td><strong>F</strong></td>
                            <td>/ɛf/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="F" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                        </tr>
                        <tr>
                            <td><strong>G</strong></td>
                            <td>/dʒiː/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="G" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                            <td><strong>H</strong></td>
                            <td>/eɪtʃ/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="H" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                        </tr>
                        <tr>
                            <td><strong>I</strong></td>
                            <td>/aɪ/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="I" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                            <td><strong>J</strong></td>
                            <td>/dʒeɪ/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="J" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                        </tr>
                        <tr>
                            <td><strong>K</strong></td>
                            <td>/keɪ/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="K" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                            <td><strong>L</strong></td>
                            <td>/ɛl/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="L" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                        </tr>
                        <tr>
                            <td><strong>M</strong></td>
                            <td>/ɛm/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="M" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                            <td><strong>N</strong></td>
                            <td>/ɛn/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="N" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                        </tr>
                        <tr>
                            <td><strong>O</strong></td>
                            <td>/oʊ/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="O" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                            <td><strong>P</strong></td>
                            <td>/piː/</td>
                            <td><i class="bi bi-volume-up text-primary="cursor-pointer" data-audio="P" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                        </tr>
                        <tr>
                            <td><strong>Q</strong></td>
                            <td>/kjuː/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="Q" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                            <td><strong>R</strong></td>
                            <td>/ɑːr/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="R" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                        </tr>
                        <tr>
                            <td><strong>S</strong></td>
                            <td>/ɛs/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="S" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                            <td><strong>T</strong></td>
                            <td>/tiː/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="T" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                        </tr>
                        <tr>
                            <td><strong>U</strong></td>
                            <td>/juː/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="U" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                            <td><strong>V</strong></td>
                            <td>/viː/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="V" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                        </tr>
                        <tr>
                            <td><strong>W</strong></td>
                            <td>/ˈdʌbəl.juː/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="W" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                            <td><strong>X</strong></td>
                            <td>/ɛks/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="X" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                        </tr>
                        <tr>
                            <td><strong>Y</strong></td>
                            <td>/waɪ/</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="Y" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                            <td><strong>Z</strong></td>
                            <td>/zɛd/ (UK) /ziː/ (US)</td>
                            <td><i class="bi bi-volume-up text-primary cursor-pointer" data-audio="Z" style="font-size: 1.2rem; cursor: pointer;"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Professional Spelling (Symbols)</h5>
                <p>In business English, you must know how to spell symbols for email addresses:</p>
                <ul class="premium-list">
                    <li><strong>@</strong> (At) <i class="bi bi-volume-up text-primary cursor-pointer" data-audio="At symbol"></i></li>
                    <li><strong>.</strong> (Dot) <i class="bi bi-volume-up text-primary cursor-pointer" data-audio="Dot"></i></li>
                    <li><strong>-</strong> (Hyphen) <i class="bi bi-volume-up text-primary cursor-pointer" data-audio="Hyphen"></i></li>
                    <li><strong>_</strong> (Underscore) <i class="bi bi-volume-up text-primary cursor-pointer" data-audio="Underscore"></i></li>
                </ul>
            </div>
        </div>
    `.trim();
}

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('Topic 3 (Alphabet) updated with VOCABULARY STYLE icons.');
