const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const superPremiumTheoryA1_P1 = {
    1: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Greetings & Farewells</h4>
                <p>Greetings are the foundation of any interaction. In English, we categorize them by <strong>formality</strong> and <strong>time of day</strong>.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Formal vs Informal Greetings</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Formal</th>
                            <th>Informal</th>
                            <th>Context</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Good morning / afternoon</td>
                            <td>Hi / Hey / Hey there</td>
                            <td>Professional / Friends</td>
                        </tr>
                        <tr>
                            <td>How do you do?</td>
                            <td>What's up? / How's it going?</td>
                            <td>First meeting / Casual</td>
                        </tr>
                        <tr>
                            <td>It is a pleasure to meet you</td>
                            <td>Nice to meet you</td>
                            <td>Business / Social</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-list">
                <h5>2. Standard Farewells</h5>
                <ul class="premium-list">
                    <li><strong>Goodbye:</strong> Formal and neutral.</li>
                    <li><strong>See you later / See you soon:</strong> Very common in daily life.</li>
                    <li><strong>Take care:</strong> Shows warmth and concern.</li>
                    <li><strong>Have a nice day:</strong> Professional and polite.</li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Note: Good Evening vs Good Night</h5>
                <p>One of the most common mistakes for beginners:</p>
                <ul>
                    <li><strong>Good evening:</strong> Use this to <strong>greet</strong> someone after 6:00 PM.</li>
                    <li><strong>Good night:</strong> Use this ONLY to <strong>say goodbye</strong> when leaving or going to sleep.</li>
                </ul>
            </div>
        </div>
    `,
    2: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Personal Information</h4>
                <p>Providing personal details is essential for registrations, introductions, and social networking.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Key Questions and Answers</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Question</th>
                            <th>Correct Response</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>What's your full name?</td>
                            <td>My name is [Name] [Surname].</td>
                        </tr>
                        <tr>
                            <td>Origin</td>
                            <td>Where are you from?</td>
                            <td>I am from [Country].</td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>How old are you?</td>
                            <td>I am [Number] years old.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: To Be for Age</h5>
                <p>In English, we <strong>ARE</strong> an age; we do not "have" it.</p>
                <ul>
                    <li>✅ <strong>I am 20.</strong></li>
                    <li>❌ <strong>I have 20 years.</strong> (Literal translation error).</li>
                </ul>
            </div>
        </div>
    `,
    3: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Alphabet & Spelling</h4>
                <p>Mastering the English alphabet is critical for spelling names, emails, and addresses accurately.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Tricky Vowel Sounds</h5>
                <p>Focus on these three often confused sounds:</p>
                <ul>
                    <li><strong>A</strong> [eɪ] - as in "Cake"</li>
                    <li><strong>E</strong> [iː] - as in "Keep"</li>
                    <li><strong>I</strong> [aɪ] - as in "Ice"</li>
                </ul>
            </div>

            <div class="visual-card card-list">
                <h5>2. Consonants with specific sounds</h5>
                <ul class="premium-list">
                    <li><strong>G</strong> [dʒiː] vs <strong>J</strong> [dʒeɪ]</li>
                    <li><strong>H</strong> [eɪtʃ]</li>
                    <li><strong>W</strong> [ˈdʌbljuː]</li>
                    <li><strong>Y</strong> [waɪ]</li>
                </ul>
            </div>
        </div>
    `,
    4: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Numbers 1-100</h4>
                <p>Numbers are used in almost every conversation, from telling the time to discussing prices.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. The "-teen" vs "-ty" Distinction</h5>
                <p>Pay close attention to word stress to avoid confusion:</p>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Teen (13-19)</th>
                            <th>Ty (20-90)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Thir<strong>teen</strong> (Long)</td>
                            <td>Thir<strong>ty</strong> (Short/Dull)</td>
                        </tr>
                        <tr>
                            <td>Four<strong>teen</strong> (Long)</td>
                            <td>For<strong>ty</strong> (Short/Dull)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: The Hyphen</h5>
                <p>When writing numbers between 21 and 99, always use a hyphen between the tens and units.</p>
                <ul>
                    <li>✅ <strong>Twenty-five</strong></li>
                    <li>✅ <strong>Eighty-eight</strong></li>
                </ul>
            </div>
        </div>
    `,
    5: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Countries & Nationalities</h4>
                <p>Learning how to describe origins involves understanding specific suffix patterns.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Nationality Suffixes</h5>
                <ul>
                    <li><strong>-an / -ian:</strong> Brazil &rarr; Brazilian, Germany &rarr; German.</li>
                    <li><strong>-ish:</strong> Spain &rarr; Spanish, Poland &rarr; Polish.</li>
                    <li><strong>-ese:</strong> China &rarr; Chinese, Portugal &rarr; Portuguese.</li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Capitalization</h5>
                <p>Unlike many languages, in English, both <strong>Countries</strong> and <strong>Nationalities</strong> must always be capitalized.</p>
                <ul>
                    <li>✅ <strong>He is Japanese.</strong></li>
                    <li>❌ <strong>He is japanese.</strong></li>
                </ul>
            </div>
        </div>
    `,
    6: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Verb To Be (Positive)</h4>
                <p>The verb "To Be" is the most versatile verb in English, representing both "to exist" (ser) and "to be in a location/state" (estar).</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Full Forms vs Contractions</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Full Form</th>
                            <th>Contraction</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>I</td>
                            <td>I am</td>
                            <td>I'm</td>
                        </tr>
                        <tr>
                            <td>He / She / It</td>
                            <td>He is</td>
                            <td>He's / She's / It's</td>
                        </tr>
                        <tr>
                            <td>You / We / They</td>
                            <td>You are</td>
                            <td>You're / We're / They're</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: The Pronoun "It"</h5>
                <p>In English, a sentence <strong>must</strong> have a subject. We use "It" for weather, time, and objects.</p>
                <ul>
                    <li>✅ <strong>It is raining.</strong></li>
                    <li>❌ <strong>Is raining.</strong></li>
                </ul>
            </div>
        </div>
    `,
    7: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Verb To Be (Negative & Questions)</h4>
                <p>To create negatives and questions with "To Be," we do not need auxiliary verbs like "do" or "does."</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Negation</h5>
                <p>Simply add <strong>NOT</strong> after the verb:</p>
                <ul>
                    <li>I am <strong>not</strong> a student.</li>
                    <li>She is <strong>not</strong> (isn't) hungry.</li>
                    <li>They are <strong>not</strong> (aren't) here.</li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Inversion for Questions</h5>
                <p>To ask a question, swap the subject and the verb. Do not use a question mark at the beginning.</p>
                <ul>
                    <li>Affirmative: <strong>You are</strong> tired.</li>
                    <li>Question: <strong>Are you</strong> tired?</li>
                </ul>
            </div>
        </div>
    `,
    8: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Subject Pronouns</h4>
                <p>Subject pronouns replace nouns to avoid repetition and indicate who is performing the action.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Singular vs Plural</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Singular</th>
                            <th>Plural</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>I, You, He, She, It</td>
                            <td>We, You, They</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Singular "They"</h5>
                <p>In modern English, "They" is often used to refer to a single person when their gender is unknown or irrelevant.</p>
                <ul>
                    <li>"Someone left <strong>their</strong> umbrella here."</li>
                </ul>
            </div>
        </div>
    `,
    9: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Possessive Adjectives</h4>
                <p>Possessive adjectives are placed before a noun to indicate ownership or a relationship.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Subject to Possessive Mapping</h5>
                <ul class="premium-list">
                    <li>I &rarr; <strong>My</strong></li>
                    <li>You &rarr; <strong>Your</strong></li>
                    <li>He &rarr; <strong>His</strong></li>
                    <li>She &rarr; <strong>Her</strong></li>
                    <li>It &rarr; <strong>Its</strong> (No apostrophe!)</li>
                    <li>We &rarr; <strong>Our</strong></li>
                    <li>They &rarr; <strong>Their</strong></li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Your vs You're</h5>
                <p>Confusing these two is a common error even for natives:</p>
                <ul>
                    <li><strong>Your:</strong> Possessive. (Your car).</li>
                    <li><strong>You're:</strong> Contraction of "You are". (You're late).</li>
                </ul>
            </div>
        </div>
    `,
    10: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Family Members</h4>
                <p>Vocabulary related to family tree structure and extended relatives.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Core Family Vocabulary</h5>
                <ul>
                    <li><strong>Parents:</strong> Father and Mother.</li>
                    <li><strong>Siblings:</strong> Brother and Sister.</li>
                    <li><strong>Children:</strong> Son and Daughter.</li>
                    <li><strong>Spouse:</strong> Husband and Wife.</li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Gender Neutral Terms</h5>
                <p>Use these terms to refer to family members without specifying gender:</p>
                <ul>
                    <li><strong>Sibling</strong> (instead of brother/sister).</li>
                    <li><strong>Child</strong> (instead of son/daughter).</li>
                    <li><strong>Spouse</strong> (instead of husband/wife).</li>
                </ul>
            </div>
        </div>
    `,
    11: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Jobs & Professions</h4>
                <p>Describing career paths and employment roles is fundamental for professional networking.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Professional Roles</h5>
                <ul class="premium-list">
                    <li><strong>Healthcare:</strong> Doctor, Nurse, Surgeon.</li>
                    <li><strong>Education:</strong> Teacher, Professor, Tutor.</li>
                    <li><strong>Office:</strong> Manager, Secretary, Accountant.</li>
                    <li><strong>Manual:</strong> Plumber, Electrician, Carpenter.</li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: A/An with Jobs</h5>
                <p>In English, you must always use an indefinite article before a job title in the singular.</p>
                <ul>
                    <li>✅ <strong>I am a lawyer.</strong></li>
                    <li>❌ <strong>I am lawyer.</strong></li>
                </ul>
            </div>
        </div>
    `,
    12: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Workplace Vocabulary</h4>
                <p>Key terminology for office environments, equipment, and daily operations.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Office Equipment</h5>
                <ul>
                    <li><strong>Hardware:</strong> Desktop, Laptop, Keyboard, Monitor.</li>
                    <li><strong>Furniture:</strong> Desk, Ergonomic chair, Filing cabinet.</li>
                    <li><strong>Supplies:</strong> Stapler, Paper clips, Highlighter.</li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Colleagues vs Coworkers</h5>
                <p>Both terms are common. "Colleague" is slightly more formal and often used in professional environments.</p>
            </div>
        </div>
    `,
    13: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Singular & Plural Nouns</h4>
                <p>Pluralization follows specific phonetic and spelling rules based on the ending of the noun.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Standard Spelling Rules</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Ending</th>
                            <th>Rule</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>General</td>
                            <td>Add <strong>-s</strong></td>
                            <td>Book &rarr; Books</td>
                        </tr>
                        <tr>
                            <td>-s, -sh, -ch, -x, -z</td>
                            <td>Add <strong>-es</strong></td>
                            <td>Bus &rarr; Buses</td>
                        </tr>
                        <tr>
                            <td>Consonant + y</td>
                            <td>Change y to <strong>-ies</strong></td>
                            <td>City &rarr; Cities</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Irregular Plurals</h5>
                <p>Some nouns change completely or not at all:</p>
                <ul>
                    <li>Person &rarr; <strong>People</strong></li>
                    <li>Man &rarr; <strong>Men</strong></li>
                    <li>Tooth &rarr; <strong>Teeth</strong></li>
                    <li>Sheep &rarr; <strong>Sheep</strong> (No change)</li>
                </ul>
            </div>
        </div>
    `,
    14: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Articles (A / An)</h4>
                <p>Indefinite articles are used with singular, countable nouns when they are non-specific.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Sound vs Spelling</h5>
                <p>The choice between A and An depends on the <strong>sound</strong> of the next word, not the letter.</p>
                <ul>
                    <li><strong>A:</strong> Before a consonant sound. (A car, A pen).</li>
                    <li><strong>An:</strong> Before a vowel sound. (An egg, An apple).</li>
                </ul>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Tricky H and U</h5>
                <ul>
                    <li><strong>An hour:</strong> The 'H' is silent, so it starts with a vowel sound.</li>
                    <li><strong>A university:</strong> The 'U' sounds like 'You', which is a consonant sound.</li>
                </ul>
            </div>
        </div>
    `,
    15: `
        <div class="theory-premium academic-style">
            <div class="visual-card card-concept">
                <h4>Theory: Demonstratives (This, That, These, Those)</h4>
                <p>Demonstratives indicate the physical or temporal distance of a noun from the speaker.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>1. Distance Matrix</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Distance</th>
                            <th>Singular</th>
                            <th>Plural</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Near (Here)</strong></td>
                            <td class="text-highlight">This</td>
                            <td class="text-highlight">These</td>
                        </tr>
                        <tr>
                            <td><strong>Far (There)</strong></td>
                            <td class="text-highlight-alt">That</td>
                            <td class="text-highlight-alt">Those</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-advanced">
                <h5>🚀 Advanced Rule: Pronunciation</h5>
                <p>Distinguish between the short sound in <strong>This</strong> [ðɪs] and the long sound in <strong>These</strong> [ðiːz].</p>
            </div>
        </div>
    `
};

topics.forEach(topic => {
    if (superPremiumTheoryA1_P1[topic.id]) {
        topic.theory = superPremiumTheoryA1_P1[topic.id].trim();
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('Batch 1 (1-15) updated to Super Premium English.');
