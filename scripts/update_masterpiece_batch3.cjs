const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const masterpieceUpdates = {
    6: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>✨ The Verb "To Be" (Affirmative)</h4>
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
                            <th>IPA (Pronunciation)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>I</strong> (Yo)</td>
                            <td>am</td>
                            <td><span class="text-highlight">I'm</span></td>
                            <td>/aɪm/</td>
                        </tr>
                        <tr>
                            <td><strong>You</strong> (Tú/Ustedes)</td>
                            <td>are</td>
                            <td><span class="text-highlight">You're</span></td>
                            <td>/jʊər/ or /jɔːr/</td>
                        </tr>
                        <tr>
                            <td><strong>He/She/It</strong> (Él/Ella/Eso)</td>
                            <td>is</td>
                            <td><span class="text-highlight">He's / She's / It's</span></td>
                            <td>/hiːz/ /ʃiːz/ /ɪts/</td>
                        </tr>
                        <tr>
                            <td><strong>We/They</strong> (Nosotros/Ellos)</td>
                            <td>are</td>
                            <td><span class="text-highlight">We're / They're</span></td>
                            <td>/wɪər/ /ðeər/</td>
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
                <h4>❓ The Verb "To Be" (Negative & Questions)</h4>
                <p>Unlike most English verbs, "To Be" is independent. It does not need auxiliary verbs like "do" or "does" to form negatives or questions.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🚫 Forming Negatives (With Phonetics)</h5>
                <p>Add <strong>NOT</strong> after the verb. In speech, always use the contracted forms.</p>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Pronoun</th>
                            <th>Negative Contraction</th>
                            <th>IPA (Pronunciation)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>I</strong></td>
                            <td>I'm not</td>
                            <td>/aɪm nɒt/</td>
                        </tr>
                        <tr>
                            <td><strong>He/She/It</strong></td>
                            <td>isn't</td>
                            <td>/ˈɪz.ənt/</td>
                        </tr>
                        <tr>
                            <td><strong>You/We/They</strong></td>
                            <td>aren't</td>
                            <td>/ɑːnt/ (UK) /ɑːrnt/ (US)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-example">
                <h5>🤔 Forming Questions (Inversion)</h5>
                <p>To ask a question, simply swap the subject and the verb. This is called <strong>Subject-Verb Inversion</strong>.</p>
                <ul class="premium-list">
                    <li><strong>Statement:</strong> You are ready.</li>
                    <li><strong>Question:</strong> <span class="text-highlight">Are you</span> ready?</li>
                    <li><strong>Statement:</strong> She is the manager.</li>
                    <li><strong>Question:</strong> <span class="text-highlight">Is she</span> the manager?</li>
                </ul>
            </div>
        </div>
    `,
    8: `
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
                            <th>IPA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>I</strong></td>
                            <td>Yo (Always capitalized)</td>
                            <td>/aɪ/</td>
                        </tr>
                        <tr>
                            <td><strong>You</strong></td>
                            <td>Tú / Usted / Ustedes (Singular & Plural)</td>
                            <td>/juː/</td>
                        </tr>
                        <tr>
                            <td><strong>He</strong></td>
                            <td>Él (Male persons)</td>
                            <td>/hiː/</td>
                        </tr>
                        <tr>
                            <td><strong>She</strong></td>
                            <td>Ella (Female persons)</td>
                            <td>/ʃiː/</td>
                        </tr>
                        <tr>
                            <td><strong>It</strong></td>
                            <td>Ello (Things, animals, concepts, weather)</td>
                            <td>/ɪt/</td>
                        </tr>
                        <tr>
                            <td><strong>We</strong></td>
                            <td>Nosotros</td>
                            <td>/wiː/</td>
                        </tr>
                        <tr>
                            <td><strong>They</strong></td>
                            <td>Ellos / Ellas (Plural for people AND things)</td>
                            <td>/ðeɪ/</td>
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
    9: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>🏠 Possessive Adjectives</h4>
                <p>Possessive adjectives show ownership. They always sit directly <strong>in front</strong> of the noun they describe.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🔗 Subject to Possessive Mapping</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Possessive</th>
                            <th>IPA</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>I</td><td><strong>My</strong></td><td>/maɪ/</td><td>My laptop</td></tr>
                        <tr><td>You</td><td><strong>Your</strong></td><td>/jɔːr/</td><td>Your office</td></tr>
                        <tr><td>He</td><td><strong>His</strong></td><td>/hɪz/</td><td>His project</td></tr>
                        <tr><td>She</td><td><strong>Her</strong></td><td>/hɜːr/</td><td>Her email</td></tr>
                        <tr><td>It</td><td><strong>Its</strong></td><td>/ɪts/</td><td>Its battery</td></tr>
                        <tr><td>We</td><td><strong>Our</strong></td><td>/aʊər/</td><td>Our team</td></tr>
                        <tr><td>They</td><td><strong>Their</strong></td><td>/ðeər/</td><td>Their budget</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Professional Nuance: Their vs There vs They're</h5>
                <p>These three words sound exactly the same (/ðeər/) but have entirely different meanings:</p>
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
                <h4>👨‍👩‍👧 Family & Relationships</h4>
                <p>Discussing family is a common icebreaker. Using precise vocabulary demonstrates cultural fluency.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🌳 Core Family Vocabulary</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Male</th>
                            <th>Female</th>
                            <th>Gender Neutral (Plural)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Father /fɑːðər/</td>
                            <td>Mother /ˈmʌðər/</td>
                            <td><strong>Parents</strong> (Padres)</td>
                        </tr>
                        <tr>
                            <td>Brother /ˈbrʌðər/</td>
                            <td>Sister /ˈsɪstər/</td>
                            <td><strong>Siblings</strong> (Hermanos)</td>
                        </tr>
                        <tr>
                            <td>Son /sʌn/</td>
                            <td>Daughter /ˈdɔːtər/</td>
                            <td><strong>Children</strong> (Hijos)</td>
                        </tr>
                        <tr>
                            <td>Husband /ˈhʌzbənd/</td>
                            <td>Wife /waɪf/</td>
                            <td><strong>Spouse</strong> (Cónyuge)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 The "In-Laws" (Familia Política)</h5>
                <p>In English, we simply add <strong>"-in-law"</strong> to the base family word to describe family by marriage.</p>
                <ul class="premium-list">
                    <li>Mother-in-law (Suegra)</li>
                    <li>Brother-in-law (Cuñado)</li>
                    <li>Daughter-in-law (Nuera)</li>
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
console.log('Masterpiece Theory Batch (Topics 6-10) applied successfully.');
