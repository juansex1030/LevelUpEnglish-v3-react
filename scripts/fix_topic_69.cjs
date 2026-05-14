const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

// Topic 69: Relative Clauses (Super Premium English Version)
const topic69 = topics.find(t => t.id === 69);
if (topic69) {
    topic69.theory = `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Relative Pronouns</h4>
                <p>Relative pronouns connect clauses to describe a noun. In B1, understanding the <strong>types of clauses</strong> and <strong>omission rules</strong> is key.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Defining vs Non-Defining Clauses</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Function</th>
                            <th>Punctuation</th>
                            <th>"That"?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-highlight">Defining</td>
                            <td>Identifies exactly <em>which</em> person/thing we mean. <br> "The man <strong>who</strong> helps me is nice."</td>
                            <td>No commas</td>
                            <td>✅ Yes</td>
                        </tr>
                        <tr>
                            <td class="text-highlight-alt">Non-Defining</td>
                            <td>Adds <em>extra</em> information. The sentence works without it. <br> "My dad, <strong>who</strong> helps everyone, is nice."</td>
                            <td><strong>Must use commas</strong> (brackets)</td>
                            <td>❌ NEVER</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-list">
                <h5>2. The Pronouns & Usage</h5>
                <ul class="premium-list">
                    <li><strong>Who:</strong> People. (The girl who called.)</li>
                    <li><strong>Which:</strong> Things/Animals. (The car which I drove.)</li>
                    <li><strong>That:</strong> People/Things (Informal, Defining clauses ONLY).</li>
                    <li><strong>Whose:</strong> Possession (His/Her/Its). (The boy <strong>whose</strong> bike was stolen.)</li>
                    <li><strong>Where:</strong> Places. (The city <strong>where</strong> I live.)</li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Omission</h5>
                <p>You can <strong>delete</strong> the pronoun (who/which/that) IF it is the <strong>object</strong> of the verb.</p>
                <ul>
                    <li>- "The book (which) I read is good." (I read the book &rarr; Object &rarr; Optional)</li>
                    <li>- "The man <strong>who</strong> lives here." (He lives &rarr; Subject &rarr; <strong>Required</strong>)</li>
                </ul>
            </div>
        </div>
    `.trim();
}

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('Topic 69 updated to SUPER PREMIUM English version.');
