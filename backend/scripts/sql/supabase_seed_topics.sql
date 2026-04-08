-- LevelUpEnglish - Supabase topics seed
-- Safe to run multiple times.

BEGIN;

SET search_path TO public;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (1, 'A1', 'Greetings and Farewells', 'Basic greetings and farewells for daily interactions', 'bi-hand-wave-fill', '<h3>Theory</h3><div class="visual-card card-concept"><p>Greetings and Farewells are the first tools for any conversation. The choice of words depends on the
                    context: the time of day and whether the situation is formal (respectful, with strangers, at work)
                    or informal (relaxed, with friends and family).</p></div><div class="visual-card card-concept"><h5>Greetings by Time of Day</h5><ul>
<li><strong>Good morning:</strong> Used from the time you wake up until 12:00 PM (noon).</li>
<li><strong>Good afternoon:</strong> Used from 12:00 PM until approximately 6:00 PM.</li>
<li><strong>Good evening:</strong> Used to greet someone when arriving at a place at night (after
                        6:00 PM). Never use it to say goodbye!</li>
</ul></div><div class="visual-card card-concept"><h5>General Greetings</h5><ul>
<li><strong>Hello:</strong> The most common and neutral greeting. Works in any situation, formal or
                        informal.</li>
<li><strong>Hi / Hey:</strong> Informal greetings, perfect for friends, family, or relaxed
                        situations. "Hey" is even more casual than "Hi".</li>
<li><strong>How are you?:</strong> The most common way to ask "¿Cómo estás?". You can answer with
                        "I''m fine, thank you." In an informal context, you can say "I''m good, you?".</li>
</ul></div><div class="visual-card card-concept"><h5>Farewells</h5><ul>
<li><strong>Goodbye:</strong> The standard and neutral way to say "adiós".</li>
<li><strong>Good night:</strong> Used ONLY to say goodbye at night, especially before going to
                        sleep. It is not a greeting.</li>
<li><strong>See you later / See you soon:</strong> Friendly and informal ways to say goodbye.</li>
<li><strong>Take care:</strong> A warm and common farewell showing concern for the other person.
                    </li>
</ul></div>', '{"games": [{"type": "multiple_choice", "title": "Choose the correct greeting", "instruction": "Select the best option to complete the greeting or farewell.", "questions": [{"q": "How ______ you?", "options": ["are", "is", "am"], "a": "are"}, {"q": "______ morning!", "options": ["Good", "Nice", "Well"], "a": "Good"}, {"q": "It is nice to ______ you.", "options": ["meet", "greeting", "see"], "a": "meet"}, {"q": "______ bye!", "options": ["Good", "Nice", "Hello"], "a": "Good"}, {"q": "See you ______.", "options": ["later", "hello", "hi"], "a": "later"}]}, {"type": "fill_in", "title": "Fill the greeting", "instruction": "Type the missing word (Hello, Hi, Good, See).", "questions": [{"q": "______ morning, how are you?", "a": "Good"}, {"q": "______ you later!", "a": "See"}, {"q": "______ to meet you.", "a": "Nice"}, {"q": "______ evening!", "a": "Good"}, {"q": "______ are you doing?", "a": "How"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (2, 'A1', 'Personal Introduction', 'How to introduce yourself and ask about others', 'bi-person-badge-fill', '<h3>Theory</h3><div class="visual-card card-concept"><p>Introducing yourself is fundamental. We use specific phrases to give our basic information and ask
                    for others''. Everything centers on the verb "to be".</p></div><div class="visual-card card-concept"><h5>Key Phrases</h5><ul>
<li>To say your name: <strong>My name is...</strong> or <strong>I am...</strong>. The second is
                        slightly more informal.</li>
<li>To ask for a name: <strong>What is your name?</strong></li>
<li>To say where you are from: <strong>I am from...</strong></li>
<li>To ask where someone is from: <strong>Where are you from?</strong></li>
<li>Polite phrases: <strong>Nice to meet you.</strong> You reply with: <strong>Nice to meet you
                            too.</strong></li>
</ul></div><div class="visual-card card-example"><h5>Full Conversation Example:</h5><p>
                    A: Hello! <strong>My name is</strong> Ana. <strong>What is your name?</strong><br/>
                    B: Hi Ana! <strong>I am</strong> Carlos. <strong>Nice to meet you.</strong><br/>
                    A: <strong>Nice to meet you too</strong>, Carlos. <strong>Where are you from?</strong><br/>
                    B: <strong>I am from</strong> Mexico. And you?<br/>
                    A: <strong>I am from</strong> Colombia.
                </p></div>', '{"games": [{"type": "multiple_choice", "title": "Who are you?", "instruction": "Choose the correct phrase for introduction.", "questions": [{"q": "My ______ is Juan.", "options": ["name", "is", "are"], "a": "name"}, {"q": "I ______ from Colombia.", "options": ["am", "is", "are"], "a": "am"}, {"q": "I ______ 25 years old.", "options": ["am", "have", "is"], "a": "am"}, {"q": "______ are you from?", "options": ["Where", "What", "Who"], "a": "Where"}, {"q": "Glad to ______ you.", "options": ["meet", "meeting", "met"], "a": "meet"}]}, {"type": "unscramble", "title": "Unscramble Introduction", "instruction": "Order the words to make an introduction.", "questions": [{"q": "name my is John", "a": "my name is john"}, {"q": "am from I Spain", "a": "i am from spain"}, {"q": "old am I 20", "a": "i am 20 old"}, {"q": "nice meet to you", "a": "nice to meet you"}, {"q": "is name her Mary", "a": "her name is mary"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (3, 'A1', 'The Alphabet', 'English alphabet pronunciation and spelling', 'bi-alphabet', '<h3>Theory</h3><div class="visual-card card-concept"><p>Knowing the pronunciation of each letter of the alphabet is crucial for <strong>spelling</strong>. In
                    English, it is very common to have to spell names, surnames, email addresses, etc., because the
                    spelling of a word does not always correspond to its sound.</p><p>The key question you will be asked or can ask is: <strong>"How do you spell that?"</strong>. To
                    answer, simply say the name of each letter one by one.</p></div><div class="visual-card card-example"><h5>Spelling Examples:</h5><ul>
<li><strong>Book:</strong> B - O - O - K (bi - ou - ou - kei)</li>
<li><strong>John:</strong> J - O - H - N (yei - ou - eich - en)</li>
<li><strong>Hello:</strong> H - E - L - L - O (eich - i - el - el - ou)</li>
</ul><p>Watch out for letters with similar sounds that can be confusing: <strong>B</strong> (bi) and
                    <strong>V</strong> (vi), or <strong>G</strong> (yi) and <strong>J</strong> (yei).
                </p></div>', '{"games": [{"type": "multiple_choice", "title": "Spell Check", "instruction": "Choose the next letter in the sequence or the correct spelling.", "questions": [{"q": "A, B, C, ______", "options": ["D", "E", "F"], "a": "D"}, {"q": "What is the first letter of ''Apple''?", "options": ["A", "B", "C"], "a": "A"}, {"q": "X, Y, ______", "options": ["Z", "W", "V"], "a": "Z"}, {"q": "How do you spell ''Cat''?", "options": ["C-A-T", "K-A-T", "C-A-D"], "a": "C-A-T"}, {"q": "The letter after ''M'' is ______.", "options": ["N", "L", "O"], "a": "N"}]}, {"type": "fill_in", "title": "Missing Letters", "instruction": "Type the missing letter.", "questions": [{"q": "A, B, _, D", "a": "C"}, {"q": "H, _, J, K", "a": "I"}, {"q": "P, Q, _, S", "a": "R"}, {"q": "U, V, W, _, Y", "a": "X"}, {"q": "E, F, _, H", "a": "G"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (4, 'A1', 'Numbers', 'Cardinal and ordinal numbers up to 10,000', 'bi-123', '<h3>Theory</h3><div class="visual-card card-concept"><p>Numbers are essential for everything: ages, prices, times, dates, etc. Learning big numbers is easy
                    if you follow a pattern. Once you master numbers 1 to 99, you only need to learn a few new words.
                </p></div><div class="visual-card card-concept"><h5>Step 1: Tens</h5><p>For numbers between 21 and 99, simply combine the ten (twenty, thirty, forty, etc.) with the single
                    number, using a hyphen (-).</p><ul>
<li><strong>25</strong> -&gt; twenty-five</li>
<li><strong>68</strong> -&gt; sixty-eight</li>
<li><strong>99</strong> -&gt; ninety-nine</li>
</ul></div><div class="visual-card card-concept"><h5>Step 2: Hundreds</h5><p>Use the word <strong>hundred</strong>. To connect hundreds with the following numbers, it is common
                    to use the word <strong>"and"</strong> (although in American English it is sometimes omitted).</p><ul>
<li><strong>100</strong> -&gt; one hundred</li>
<li><strong>450</strong> -&gt; four hundred <strong>and</strong> fifty</li>
<li><strong>892</strong> -&gt; eight hundred <strong>and</strong> ninety-two</li>
</ul></div><div class="visual-card card-concept"><h5>Step 3: Thousands</h5><p>Use the word <strong>thousand</strong>. The logic is the same. Read the number of thousands, say
                    "thousand", and then read the rest of the number. Do not use "s" at the end of "hundred" or
                    "thousand" (Incorrect: <del>five thousands</del>).</p><ul>
<li><strong>1,000</strong> -&gt; one thousand</li>
<li><strong>7,641</strong> -&gt; seven thousand, six hundred <strong>and</strong> forty-one</li>
<li><strong>10,000</strong> -&gt; ten thousand</li>
<li><strong>58,200</strong> -&gt; fifty-eight thousand, two hundred</li>
</ul></div>', '{"games": [{"type": "multiple_choice", "title": "Number Match", "instruction": "Match the word to the number.", "questions": [{"q": "What is ''ten''?", "options": ["10", "1", "100"], "a": "10"}, {"q": "What is ''fifteen''?", "options": ["15", "50", "5"], "a": "15"}, {"q": "Twenty + Five = ______", "options": ["Twenty-five", "Fifteen", "Thirty"], "a": "Twenty-five"}, {"q": "One, Two, ______", "options": ["Three", "Four", "Five"], "a": "Three"}, {"q": "Seven + Three = ______", "options": ["Ten", "Nine", "Eleven"], "a": "Ten"}]}, {"type": "fill_in", "title": "Number Words", "instruction": "Type the number in words (e.g., one, two).", "questions": [{"q": "8 is ______", "a": "eight"}, {"q": "12 is ______", "a": "twelve"}, {"q": "5 is ______", "a": "five"}, {"q": "20 is ______", "a": "twenty"}, {"q": "11 is ______", "a": "eleven"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (5, 'A1', 'Subject Pronouns', 'I, you, he, she, it, we, they', 'bi-person-fill', '<h3>Theory</h3><div class="visual-card card-concept"><p>Imagine that pronouns are "nicknames" or "substitutes" for people or things (nouns). Instead of
                    always repeating a name, we use a shorter word to make sentences flow better. In Spanish, sometimes
                    we can omit the subject, but in English, it is almost mandatory to always use a pronoun!</p></div><div class="visual-card card-example"><h5>The Golden Rule in English:</h5><p>Every sentence needs a subject. If there is no name (John, the house), there must be a pronoun (He,
                    It).</p><table class="table table-dark table-striped">
<thead>
<tr>
<th>Pronoun</th>
<th>Meaning</th>
<th>Example (Replaces...)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>I</strong></td>
<td>Yo</td>
<td><strong>I</strong> am a student.</td>
</tr>
<tr>
<td><strong>You</strong></td>
<td>Tú / Usted / Ustedes</td>
<td><strong>You</strong> are tall.</td>
</tr>
<tr>
<td><strong>He</strong></td>
<td>Él</td>
<td>(Juan) -&gt; <strong>He</strong> is my friend.</td>
</tr>
<tr>
<td><strong>She</strong></td>
<td>Ella</td>
<td>(Maria) -&gt; <strong>She</strong> is a doctor.</td>
</tr>
<tr>
<td><strong>It</strong></td>
<td>Eso (things/animals)</td>
<td>(The dog) -&gt; <strong>It</strong> is big. (The weather) -&gt; <strong>It</strong> is cold.
                            </td>
</tr>
<tr>
<td><strong>We</strong></td>
<td>Nosotros/as</td>
<td>(My family and I) -&gt; <strong>We</strong> are a team.</td>
</tr>
<tr>
<td><strong>They</strong></td>
<td>Ellos/as</td>
<td>(The students) -&gt; <strong>They</strong> are happy.</td>
</tr>
</tbody>
</table></div>', '{"games": [{"type": "multiple_choice", "title": "I, You, He, She", "instruction": "Choose the best pronoun for the sentence.", "questions": [{"q": "______ am a student.", "options": ["I", "He", "She"], "a": "I"}, {"q": "Juan is my friend. ______ is a teacher.", "options": ["He", "She", "It"], "a": "He"}, {"q": "Mary is happy. ______ is at home.", "options": ["She", "He", "It"], "a": "She"}, {"q": "The dog is small. ______ is cute.", "options": ["It", "They", "We"], "a": "It"}, {"q": "Tom and I are friends. ______ are happy.", "options": ["We", "They", "You"], "a": "We"}]}, {"type": "fill_in", "title": "Replace with Pronoun", "instruction": "Type the pronoun (I, You, He, She, It, We, They).", "questions": [{"q": "My sister is tall. ______ is a model.", "a": "She"}, {"q": "My father is working. ______ is busy.", "a": "He"}, {"q": "The books are on the table. ______ are new.", "a": "They"}, {"q": "John and Maria are married. ______ have a car.", "a": "They"}, {"q": "I have a cat. ______ is black.", "a": "It"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (6, 'A1', 'Verb "To Be"', 'Am, is, are — usage and forms', 'bi-check-circle-fill', '<h3>Theory</h3><div class="visual-card card-warning"><p>The verb "to be" is the most important and special verb in English. It means "ser" or "estar" and
                    changes shape like a chameleon depending on the pronoun it accompanies. It is used to describe,
                    identify, tell age, profession, location, and much more.</p></div><div class="visual-card card-concept"><h5>Three Magic Forms: AM, IS, ARE</h5><p>In the present tense, the verb "to be" has three forms. Each one is married to certain pronouns and
                    they never separate:</p><ul>
<li>With <strong>I</strong>, we always use <strong>AM</strong>. -&gt; <em>I am a teacher. / I am in the
                            house.</em></li>
<li>With <strong>He, She, It</strong>, we always use <strong>IS</strong>. -&gt; <em>She is happy. / It
                            is on the table.</em></li>
<li>With <strong>You, We, They</strong>, we always use <strong>ARE</strong>. -&gt; <em>They are
                            friends. / We are from Spain.</em></li>
</ul></div><div class="visual-card card-concept"><h5>Negatives and Questions</h5><p>The structure to form negatives and questions with "to be" is very simple and does not need "helper"
                    verbs like other verbs.</p><ul>
<li><strong>Negative:</strong> Just add <strong>"not"</strong> after the verb.
                        <br/><em>Ex: He is <strong>not</strong> sad. (Can also be contracted: He <strong>isn''t</strong>
                            sad).</em>
<br/><em>Ex: They are <strong>not</strong> tired. (Contraction: They <strong>aren''t</strong>
                            tired).</em>
</li>
<li><strong>Question:</strong> Put the verb <strong>at the beginning</strong> of the sentence,
                        before the subject.
                        <br/><em>Ex: <strong>Is</strong> he sad?</em>
<br/><em>Ex: <strong>Are</strong> they tired?</em>
</li>
</ul></div>', '{"games": [{"type": "multiple_choice", "title": "Am, Is, or Are?", "instruction": "Complete the sentence with the correct form of ''to be''.", "questions": [{"q": "I ______ tired.", "options": ["am", "is", "are"], "a": "am"}, {"q": "You ______ my friend.", "options": ["are", "am", "is"], "a": "are"}, {"q": "She ______ at school.", "options": ["is", "am", "are"], "a": "is"}, {"q": "We ______ happy today.", "options": ["are", "is", "am"], "a": "are"}, {"q": "They ______ in the classroom.", "options": ["are", "am", "is"], "a": "are"}]}, {"type": "fill_in", "title": "To Be Fill", "instruction": "Type: am, is, or are.", "questions": [{"q": "The cat ______ hungry.", "a": "is"}, {"q": "My parents ______ from Italy.", "a": "are"}, {"q": "I ______ ready to go.", "a": "am"}, {"q": "It ______ a sunny day.", "a": "is"}, {"q": "We ______ the winners!", "a": "are"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (7, 'A1', 'Wh- Questions', 'Who, what, where, when, why, how', 'bi-question-circle-fill', '<h3>Theory</h3><div class="visual-card card-concept"><p>"Wh-" questions are "detective questions". They cannot be answered with a simple "yes" or "no", but
                    ask for specific information: what, who, where, when, why. They are the tools to know the world.</p></div><div class="visual-card card-example"><h5>The Question Formula</h5><p>They normally follow a simple structure: <strong>Wh- Word + Verb + Subject + ...?</strong></p><table class="table table-dark table-striped">
<thead>
<tr>
<th>Word</th>
<th>Asks for</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>What?</strong></td>
<td>Things, ideas, actions</td>
<td><strong>What</strong> is your name? / <strong>What</strong> are you doing?</td>
</tr>
<tr>
<td><strong>Who?</strong></td>
<td>People</td>
<td><strong>Who</strong> is she? / <strong>Who</strong> is at the door?</td>
</tr>
<tr>
<td><strong>Where?</strong></td>
<td>Places, locations</td>
<td><strong>Where</strong> is the park? / <strong>Where</strong> do you live?</td>
</tr>
<tr>
<td><strong>When?</strong></td>
<td>Time, dates</td>
<td><strong>When</strong> is the party? / <strong>When</strong> is your birthday?</td>
</tr>
<tr>
<td><strong>Why?</strong></td>
<td>Reasons</td>
<td><strong>Why</strong> are you happy? (Usually answered with "Because...").</td>
</tr>
<tr>
<td><strong>How?</strong></td>
<td>Manner, condition</td>
<td><strong>How</strong> are you?</td>
</tr>
</tbody>
</table></div>', '{"games": [{"type": "multiple_choice", "title": "Who, What, Where?", "instruction": "Choose the best question word.", "questions": [{"q": "______ is your name?", "options": ["What", "Where", "Who"], "a": "What"}, {"q": "______ do you live?", "options": ["Where", "Why", "When"], "a": "Where"}, {"q": "______ is that man? He is my father.", "options": ["Who", "What", "When"], "a": "Who"}, {"q": "______ is the party? At 8 PM.", "options": ["When", "Where", "What"], "a": "When"}, {"q": "______ are you late?", "options": ["Why", "How", "Who"], "a": "Why"}]}, {"type": "fill_in", "title": "Wh- Fill", "instruction": "Type: What, Where, Who, When, or Why.", "questions": [{"q": "______ is your birthday?", "a": "When"}, {"q": "______ is your favorite color?", "a": "What"}, {"q": "______ are my keys?", "a": "Where"}, {"q": "______ is your best friend?", "a": "Who"}, {"q": "______ do you study English?", "a": "Why"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (8, 'A1', 'Demonstratives', 'This, that, these, those', 'bi-hand-index-fill', '<h3>Theory</h3><div class="visual-card card-concept"><p>Demonstratives are words we use to "point out" or identify something specific. The key is to know if
                    the object is <strong>near</strong> or <strong>far</strong>, and if it is <strong>singular
                        (one)</strong> or <strong>plural (many)</strong>.</p><table class="table table-dark table-striped">
<thead>
<tr>
<th></th>
<th>Singular (one)</th>
<th>Plural (many)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Near 👆</strong></td>
<td><strong>This</strong> (Este/a)</td>
<td><strong>These</strong> (Estos/as)</td>
</tr>
<tr>
<td><strong>Far 👉</strong></td>
<td><strong>That</strong> (Ese/a, Aquel/la)</td>
<td><strong>Those</strong> (Esos/as, Aquellos/as)</td>
</tr>
</tbody>
</table></div><div class="visual-card card-example"><h5>Examples in context</h5><ul>
<li><strong>This</strong> is my apple. (I have the apple in my hand).</li>
<li><strong>That</strong> car is fast. (The car is at a distance).</li>
<li><strong>These</strong> books are heavy. (I am carrying several books).</li>
<li><strong>Those</strong> houses are beautiful. (Pointing to houses far away).</li>
</ul></div>', '{"games": [{"type": "multiple_choice", "title": "This, That, These, Those", "instruction": "Choose the correct demonstrative.", "questions": [{"q": "Look at ______ book here in my hand.", "options": ["this", "that", "those"], "a": "this"}, {"q": "Wait! Is ______ (far away) your car?", "options": ["that", "this", "these"], "a": "that"}, {"q": "______ books here on my desk are mine.", "options": ["these", "those", "this"], "a": "these"}, {"q": "Who are ______ boys over there?", "options": ["those", "these", "that"], "a": "those"}, {"q": "I like ______ apple I''m eating.", "options": ["this", "that", "these"], "a": "this"}]}, {"type": "fill_in", "title": "Demonstrative Fill", "instruction": "Type: this, that, these, or those.", "questions": [{"q": "Is ______ your phone over there?", "a": "that"}, {"q": "______ shoes I''m wearing are new.", "a": "these"}, {"q": "______ is my sister Maria (standing here).", "a": "this"}, {"q": "______ stars in the sky are beautiful.", "a": "those"}, {"q": "I want ______ cake on the counter.", "a": "that"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (9, 'A1', 'Possessives', 'My, your, his, her, its, our, their', 'bi-bag-fill', '<h3>Theory</h3><div class="visual-card card-warning"><p>Possessives indicate who something belongs to (possession). There are two types and it is very
                    important not to confuse them, as their use depends on the structure of the sentence.</p><ul>
<li><strong>Possessive Adjectives:</strong> Always go <strong>before</strong> a noun (an object,
                        person, etc.). They describe who that noun belongs to.</li>
<li><strong>Possessive Pronouns:</strong> <strong>Replace</strong> the noun. Used to avoid repeating
                        the word when we already know what object we are talking about. They go at the end of the
                        sentence or alone.</li>
</ul><table class="table table-dark table-striped">
<thead>
<tr>
<th>Subject</th>
<th>Possessive Adjective (+ noun)</th>
<th>Possessive Pronoun (alone)</th>
</tr>
</thead>
<tbody>
<tr>
<td>I</td>
<td><strong>My</strong> book</td>
<td>The book is <strong>mine</strong></td>
</tr>
<tr>
<td>You</td>
<td><strong>Your</strong> car</td>
<td>The car is <strong>yours</strong></td>
</tr>
<tr>
<td>He</td>
<td><strong>His</strong> pen</td>
<td>The pen is <strong>his</strong></td>
</tr>
<tr>
<td>She</td>
<td><strong>Her</strong> house</td>
<td>The house is <strong>hers</strong></td>
</tr>
<tr>
<td>We</td>
<td><strong>Our</strong> team</td>
<td>The team is <strong>ours</strong></td>
</tr>
<tr>
<td>They</td>
<td><strong>Their</strong> bags</td>
<td>The bags are <strong>theirs</strong></td>
</tr>
</tbody>
</table></div><div class="visual-card card-example"><h5>Examples of the difference:</h5><p>
                    A: Is this <strong>your</strong> jacket?<br/>
                    B: No, <strong>my</strong> jacket is black. This jacket is <strong>hers</strong>. (Hers = her
                    jacket).
                </p></div>', '{"games": [{"type": "multiple_choice", "title": "My, Your, His, Her", "instruction": "Choose the correct possessive adjective.", "questions": [{"q": "I have a car. ______ car is blue.", "options": ["My", "Your", "His"], "a": "My"}, {"q": "He has a dog. ______ dog is big.", "options": ["His", "Her", "Its"], "a": "His"}, {"q": "She has a bike. ______ bike is red.", "options": ["Her", "His", "Their"], "a": "Her"}, {"q": "We have a house. ______ house is small.", "options": ["Our", "Your", "Their"], "a": "Our"}, {"q": "They have a child. ______ name is Leo.", "options": ["Their", "Our", "His"], "a": "Their"}]}, {"type": "fill_in", "title": "Possessive Fill", "instruction": "Type: my, your, his, her, its, our, or their.", "questions": [{"q": "What is ______ name? (asking you)", "a": "your"}, {"q": "The dog is eating ______ food.", "a": "its"}, {"q": "Jane is doing ______ homework.", "a": "her"}, {"q": "We are cleaning ______ room.", "a": "our"}, {"q": "The boys are playing with ______ ball.", "a": "their"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (10, 'A1', 'What Time Is It?', 'Telling and asking for the time', 'bi-clock-fill', '<h3>Theory</h3><div class="visual-card card-concept"><p>There are two main ways to tell time in English. Both are correct and used in different contexts.</p></div><div class="visual-card card-concept"><h5>1. The Easy Way (Like a digital clock)</h5><p>It is the most common and direct. You simply say the hour and then the minutes, number by number.</p><ul>
<li><strong>7:25</strong> -&gt; It''s seven twenty-five.</li>
<li><strong>4:32</strong> -&gt; It''s four thirty-two.</li>
<li><strong>10:05</strong> -&gt; It''s ten oh-five. (For minutes 01-09, "oh" is commonly said for zero).
                    </li>
</ul></div><div class="visual-card card-concept"><h5>2. The Classic Way (Like an analog clock)</h5><p>This way is more traditional and divides the clock into two halves: the "PAST" half (minutes that
                    have passed the hour) and the "TO" half (minutes remaining until the next hour).</p><ul>
<li><strong>Minutes 1-30:</strong> Use the formula: <strong>MINUTES + PAST + HOUR</strong>.</li>
<li><strong>Minutes 31-59:</strong> Use the formula: <strong>MINUTES REMAINING + TO + NEXT
                            HOUR</strong>.</li>
</ul><table class="table table-dark table-striped">
<thead>
<tr>
<th>Digital Time</th>
<th>Classic Way</th>
<th>Explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>3:00</strong></td>
<td>It''s three <strong>o''clock</strong></td>
<td>Just for exact hours.</td>
</tr>
<tr>
<td><strong>3:05</strong></td>
<td>It''s five <strong>past</strong> three</td>
<td>Five (minutes) past three.</td>
</tr>
<tr>
<td><strong>3:15</strong></td>
<td>It''s a <strong>quarter past</strong> three</td>
<td>A quarter (15 min) past three.</td>
</tr>
<tr>
<td><strong>3:30</strong></td>
<td>It''s <strong>half past</strong> three</td>
<td>Half an hour past three.</td>
</tr>
<tr>
<td><strong>3:40</strong></td>
<td>It''s twenty <strong>to</strong> four</td>
<td>Twenty (minutes) to four.</td>
</tr>
<tr>
<td><strong>3:45</strong></td>
<td>It''s a <strong>quarter to</strong> four</td>
<td>A quarter (15 min) to four.</td>
</tr>
</tbody>
</table></div>', '{"games": [{"type": "multiple_choice", "title": "Clock Time", "instruction": "Choose the correct time expression.", "questions": [{"q": "9:00 is ______.", "options": ["nine o''clock", "nine past", "ten to nine"], "a": "nine o''clock"}, {"q": "10:30 is ______.", "options": ["half past ten", "ten thirty", "half past eleven"], "a": "half past ten"}, {"q": "What ______ is it?", "options": ["time", "hour", "clock"], "a": "time"}, {"q": "8:15 is ______.", "options": ["a quarter past eight", "eight fifteen", "a quarter to eight"], "a": "a quarter past eight"}, {"q": "It is ______ noon.", "options": ["at", "on", "in"], "a": "at"}]}, {"type": "fill_in", "title": "Time Words", "instruction": "Type the missing word (o''clock, half, quarter).", "questions": [{"q": "It is three ______.", "a": "o''clock"}, {"q": "It is ______ past five (5:30).", "a": "half"}, {"q": "It is a ______ past six (6:15).", "a": "quarter"}, {"q": "It is ten ______ seven (7:10).", "a": "past"}, {"q": "It is five ______ eight (7:55).", "a": "to"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (11, 'A1', 'Prepositions of Time', 'In, on, at — using prepositions with time', 'bi-calendar3', '<h3>Theory</h3><div class="visual-card card-warning"><p>These little words (IN, ON, AT) are very important to say "when" something happens. Using the correct one
                is key to sounding natural. An easy way to remember them is to imagine a pyramid: from the most general
                and largest (IN) to the most specific and smallest (AT).</p><table class="table table-dark table-striped">
<thead>
<tr>
<th>Preposition</th>
<th>Main Use</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>IN</strong> (General / Long periods)</td>
<td>Centuries, decades, years, seasons, months, and parts of the day (except "night").</td>
<td><strong>in</strong> the 21st century, <strong>in</strong> the 80s, <strong>in</strong>
                            2025, <strong>in</strong> summer, <strong>in</strong> August, <strong>in</strong> the
                            morning/afternoon/evening.</td>
</tr>
<tr>
<td><strong>ON</strong> (Specific / Days)</td>
<td>Days of the week, exact dates, holidays with the word "Day".</td>
<td><strong>on</strong> Monday, <strong>on</strong> December 25th, <strong>on</strong> my
                            birthday, <strong>on</strong> New Year''s Day.</td>
</tr>
<tr>
<td><strong>AT</strong> (Very Specific / Points in time)</td>
<td>Hours, specific moments of the day, weekends, holidays without the word "Day".
                        </td>
<td><strong>at</strong> 7 PM, <strong>at</strong> midnight, <strong>at</strong> noon,
                            <strong>at</strong> the weekend, <strong>at</strong> night, <strong>at</strong>
                            Christmas.
                        </td>
</tr>
</tbody>
</table></div><div class="visual-card card-example"><h5>Additional Examples:</h5><ul>
<li>My birthday is <strong>in</strong> October, but the party is <strong>on</strong> a Saturday.
                </li>
<li>I wake up <strong>at</strong> 7 AM <strong>in</strong> the morning.</li>
</ul></div>', '{"games": [{"type": "multiple_choice", "title": "On, In, or At?", "instruction": "Choose the correct preposition of time for A1 level.", "questions": [{"q": "I see you ______ Monday.", "options": ["on", "in", "at"], "a": "on"}, {"q": "My class is ______ 8 AM.", "options": ["at", "on", "in"], "a": "at"}, {"q": "I sleep ______ night.", "options": ["at", "in", "on"], "a": "at"}, {"q": "School starts ______ September.", "options": ["in", "on", "at"], "a": "in"}, {"q": "It is cold ______ winter.", "options": ["in", "on", "at"], "a": "in"}]}, {"type": "fill_in", "title": "Time Gaps A1", "instruction": "Type: on, in, or at.", "questions": [{"q": "I wake up ______ 7:00.", "a": "at"}, {"q": "We visit family ______ Christmas.", "a": "at"}, {"q": "The party is ______ Saturday.", "a": "on"}, {"q": "It is hot ______ July.", "a": "in"}, {"q": "I am busy ______ the morning.", "a": "in"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (12, 'A1', 'Simple Present', 'Regular verbs in present tense', 'bi-arrow-repeat', '<h3>Theory</h3><div class="visual-card card-warning"><p>The Simple Present is the most important verb tense. We use it to talk about three main things:
                <strong>habits, routines, and facts that are always true</strong>.
            </p><ul>
<li><strong>Routine:</strong> <em>I wake up at 7 AM every day.</em></li>
<li><strong>Habit:</strong> <em>She plays tennis on Saturdays.</em></li>
<li><strong>Fact:</strong> <em>The Earth goes around the Sun.</em></li>
<li><strong>Permanent state:</strong> <em>He lives in London.</em></li>
</ul></div><div class="visual-card card-warning"><h5>The Golden Rule: The Sentient "-s"</h5><p>This is the most important rule: when the subject is <strong>He, She</strong> or <strong>It</strong>
                (third person singular), an <strong>-s</strong> or <strong>-es</strong> is added to the end of the verb.
            </p><table class="table table-dark table-striped">
<thead>
<tr>
<th>Rule</th>
<th>Example</th>
<th>Conversion</th>
</tr>
</thead>
<tbody>
<tr>
<td>Most verbs</td>
<td>work, eat, play</td>
<td>work -&gt; <strong>works</strong>, eat -&gt; <strong>eats</strong>, play -&gt;
                            <strong>plays</strong>
</td>
</tr>
<tr>
<td>Verbs ending in -o, -sh, -ch, -x, -ss</td>
<td>go, watch, wash</td>
<td>go -&gt; <strong>goes</strong>, watch -&gt; <strong>watches</strong>, wash -&gt;
                            <strong>washes</strong>
</td>
</tr>
<tr>
<td>Verbs ending in consonant + y</td>
<td>study, cry, fly</td>
<td>study -&gt; <strong>studies</strong>, cry -&gt; <strong>cries</strong>, fly -&gt;
                            <strong>flies</strong>
</td>
</tr>
</tbody>
</table></div><div class="visual-card card-warning"><h5>Negatives and Questions: The Helpers "DO" and "DOES"</h5><p>To negate and ask questions, we need "helper verbs": <strong>DO</strong> and <strong>DOES</strong>. They
                do the heavy lifting.</p><ul>
<li>We use <strong>DO</strong> with: I, You, We, They.</li>
<li>We use <strong>DOES</strong> with: He, She, It.</li>
</ul><p><strong>VERY IMPORTANT!</strong> When you use `doesn''t` or `Does`, the main verb relaxes and returns to
                its normal form (without the "-s"). The helper already carries the "s" for it!</p><ul>
<li><strong>Negative:</strong> <em>You <strong>don''t</strong> work. He <strong>doesn''t
                            work</strong>.</em> (Incorrect: <del>He doesn''t works</del>).</li>
<li><strong>Question:</strong> <em><strong>Do</strong> you work? <strong>Does</strong> he work?</em>
                    (Incorrect: <del>Does he works?</del>).</li>
</ul></div>', '{"games": [{"type": "multiple_choice", "title": "Work or Works?", "instruction": "Choose the correct verb form for Simple Present.", "questions": [{"q": "I ______ in an office.", "options": ["work", "works", "working"], "a": "work"}, {"q": "She ______ English Every day.", "options": ["studies", "study", "studying"], "a": "studies"}, {"q": "They ______ to the park on Sundays.", "options": ["go", "goes", "going"], "a": "go"}, {"q": "He ______ a big car.", "options": ["drives", "drive", "driving"], "a": "drives"}, {"q": "We ______ pizza for dinner.", "options": ["eat", "eats", "eating"], "a": "eat"}]}, {"type": "fill_in", "title": "Simple Present Fill", "instruction": "Type the correct verb form (e.g., play, plays).", "questions": [{"q": "He ______ (play) soccer.", "a": "plays"}, {"q": "I ______ (drink) water.", "a": "drink"}, {"q": "Mary ______ (like) cats.", "a": "likes"}, {"q": "The cat ______ (sleep) a lot.", "a": "sleeps"}, {"q": "We ______ (watch) TV.", "a": "watch"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (13, 'A1', 'Adverbs of Frequency', 'Always, usually, sometimes, never, etc.', 'bi-arrow-clockwise', '<h3>Theory</h3><div class="visual-card card-concept"><p>These words tell us <strong>how often</strong> we do something. They are the key to describing our habits
                and routines. Imagine a frequency ladder, from 100% (always) to 0% (never).</p></div><div class="visual-card card-concept"><h5>The Frequency Ladder</h5><ul class="list-group list-group-flush">
<li class="list-group-item bg-transparent text-white"><strong>Always</strong> (100%) - <em>I always
                        brush my teeth.</em>
</li>
<li class="list-group-item bg-transparent text-white"><strong>Usually</strong> (90%) - <em>We usually
                        watch a movie on Fridays.</em>
</li>
<li class="list-group-item bg-transparent text-white"><strong>Often</strong> (70%) - <em>He often calls
                        his mother.</em>
</li>
<li class="list-group-item bg-transparent text-white"><strong>Sometimes</strong> (50%) - <em>Sometimes I
                        go to the gym.</em> ("Sometimes" is flexible, it can also go at the beginning).
                </li>
<li class="list-group-item bg-transparent text-white"><strong>Occasionally</strong> (30%) - <em>They
                        occasionally eat at restaurants.</em></li>
<li class="list-group-item bg-transparent text-white"><strong>Rarely / Seldom</strong> (10%) - <em>She
                        rarely drinks coffee.</em></li>
<li class="list-group-item bg-transparent text-white"><strong>Never</strong> (0%) - <em>It never snows
                        here.</em></li>
</ul></div><div class="visual-card card-warning"><h5>The Position Rule: Where do they go?</h5><p>The position of these adverbs is very important and has two simple rules you must memorize:</p><ol>
<li>They go <strong>BEFORE</strong> the main verb (work, play, eat, etc.). <br/><em>Ex: I
                        <strong>always</strong> <u>remember</u> my keys. / They <strong>often</strong> <u>visit</u>
                        us.</em></li>
<li>They go <strong>AFTER</strong> the verb "to be" (am, is, are). <br/><em>Ex: She <u>is</u>
<strong>never</strong> late. / You <u>are</u> <strong>always</strong> right.</em></li>
</ol></div>', '{"games": [{"type": "multiple_choice", "title": "Frequency Check", "instruction": "Choose the correct adverb of frequency position.", "questions": [{"q": "I ______ breakfast at 8 AM.", "options": ["always eat", "eat always", "always eating"], "a": "always eat"}, {"q": "She is ______ happy.", "options": ["often", "often is", "be often"], "a": "often"}, {"q": "We ______ to the gym.", "options": ["never go", "go never", "never going"], "a": "never go"}, {"q": "They ______ their homework.", "options": ["usually do", "do usually", "usually doing"], "a": "usually do"}, {"q": "He ______ late.", "options": ["is sometimes", "sometimes is", "sometimes are"], "a": "is sometimes"}]}, {"type": "unscramble", "title": "Frequency Order", "instruction": "Order the words correctly.", "questions": [{"q": "always I early wake up", "a": "i always wake up early"}, {"q": "is never she late", "a": "she is never late"}, {"q": "often they pizza eat", "a": "they often eat pizza"}, {"q": "usually we study English", "a": "we usually study english"}, {"q": "sometimes he tired is", "a": "he is sometimes tired"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (14, 'A1', 'Comparatives', 'Comparing two things', 'bi-arrow-left-right', '<h3>Theory</h3><div class="visual-card card-concept"><p>We use comparatives to compare two things, people, or places. The idea is to say that something is "more
                _______ than" something else. The rules change depending on the size of the adjective (the describing
                word).</p></div><div class="visual-card card-concept"><h5>Rule 1: Short Adjectives (1 syllable, or 2 ending in -y)</h5><p>To these adjectives we add the ending <strong>-er</strong>. There are some small spelling rules:</p><ul>
<li><strong>General:</strong> Add "-er". (tall -&gt; <strong>taller</strong>)</li>
<li><strong>Ends in -e:</strong> Only add "-r". (large -&gt; <strong>larger</strong>)</li>
<li><strong>Consonant + Vowel + Consonant:</strong> Double the last consonant. (big -&gt;
                    <strong>bigger</strong>)
                </li>
<li><strong>Ends in -y:</strong> Change "y" to "-ier". (happy -&gt; <strong>happier</strong>)
                </li>
</ul></div><div class="visual-card card-concept"><h5>Rule 2: Long Adjectives (2 or more syllables)</h5><p>We don''t change the adjective. Instead, we put the word <strong>more</strong> before it.</p><ul>
<li>Expensive -&gt; <strong>more expensive</strong></li>
<li>Beautiful -&gt; <strong>more beautiful</strong></li>
<li>Interesting -&gt; <strong>more interesting</strong></li>
</ul></div><div class="visual-card card-warning"><h5>Rule 3: Irregulars (The Rebels)</h5><p>Some important adjectives don''t follow any rule and change completely. These must be memorized!</p><ul>
<li>Good -&gt; <strong>better</strong></li>
<li>Bad -&gt; <strong>worse</strong></li>
<li>Far -&gt; <strong>further / farther</strong></li>
</ul><p>To complete the comparison, we almost always use the word <strong>than</strong>.<br/><em>Example: A car is
                    faster <strong>than</strong> a bicycle.</em></p></div>', '{"games": [{"type": "multiple_choice", "title": "Taller or Faster?", "instruction": "Choose the correct comparative form.", "questions": [{"q": "A plane is ______ than a car.", "options": ["faster", "fast", "most fast"], "a": "faster"}, {"q": "My brother is ______ than me.", "options": ["taller", "tall", "more tall"], "a": "taller"}, {"q": "New York is ______ than my town.", "options": ["bigger", "big", "bigerr"], "a": "bigger"}, {"q": "This book is ______ than that one.", "options": ["better", "gooder", "good"], "a": "better"}, {"q": "English is ______ than Chinese.", "options": ["easier", "easy", "more easy"], "a": "easier"}]}, {"type": "fill_in", "title": "Comparative Fill", "instruction": "Type the comparative form (e.g., smaller, longer).", "questions": [{"q": "A cat is ______ (small) than a lion.", "a": "smaller"}, {"q": "August is ______ (hot) than May.", "a": "hotter"}, {"q": "My car is ______ (old) than yours.", "a": "older"}, {"q": "This test is ______ (easy) than the last one.", "a": "easier"}, {"q": "A mountain is ______ (high) than a hill.", "a": "higher"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (15, 'A1', 'Food', 'Common food vocabulary and meals', 'bi-cup-straw', '<h3>Theory</h3><div class="visual-card card-example"><p>Learning food vocabulary is essential for daily conversations, from shopping to ordering at a restaurant.
                Here are some basic categories.</p><table class="table table-dark table-striped">
<thead>
<tr>
<th>Category</th>
<th>Vocabulary Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Fruits</strong></td>
<td>Apple, banana, orange, strawberry, grapes</td>
</tr>
<tr>
<td><strong>Vegetables</strong></td>
<td>Carrot, potato, tomato, lettuce, onion</td>
</tr>
<tr>
<td><strong>Meat and Fish</strong></td>
<td>Chicken, beef, pork, fish, ham</td>
</tr>
<tr>
<td><strong>Dairy</strong></td>
<td>Milk, cheese, butter, yogurt</td>
</tr>
<tr>
<td><strong>Drinks</strong></td>
<td>Water, juice, coffee, tea, soda</td>
</tr>
<tr>
<td><strong>Grains</strong></td>
<td>Bread, rice, pasta, cereal</td>
</tr>
</tbody>
</table><p>It is also useful to know the names of the meals of the day: <strong>breakfast</strong>,
                <strong>lunch</strong>, and <strong>dinner</strong>.
            </p></div>', '{"games": [{"type": "multiple_choice", "title": "In the Kitchen", "instruction": "Choose the correct food item or quantifier.", "questions": [{"q": "I want an ______, please.", "options": ["apple", "milk", "bread"], "a": "apple"}, {"q": "We drink ______ for breakfast.", "options": ["orange juice", "eggs", "rice"], "a": "orange juice"}, {"q": "I need some ______ for the sandwich.", "options": ["bread", "apple", "banana"], "a": "bread"}, {"q": "He eats ______ every morning.", "options": ["cereal", "tea", "coffee"], "a": "cereal"}, {"q": "Would you like ______ water?", "options": ["some", "a", "an"], "a": "some"}]}, {"type": "fill_in", "title": "Food Gaps", "instruction": "Type the missing food word or quantifier.", "questions": [{"q": "A ______ is a yellow fruit.", "a": "banana"}, {"q": "We need ______ (uncountable) rice.", "a": "some"}, {"q": "Can I have ______ egg?", "a": "an"}, {"q": "I like ______ on my pizza.", "a": "cheese"}, {"q": "There is ______ milk in the glass.", "a": "some"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (16, 'A1', 'Likes and Dislikes', 'Expressing preferences', 'bi-heart-fill', '<h3>Theory</h3><div class="visual-card card-concept"><p>Expressing what we like and don''t like is a fundamental part of communication. We use specific verbs to
                show the degree of preference.</p></div><div class="visual-card card-concept"><h5>Verbs to express likes</h5><ul>
<li><strong>Love</strong>: <em>I love pizza.</em></li>
<li><strong>Like</strong>: <em>I like reading books.</em></li>
<li><strong>Enjoy</strong>: <em>I enjoy walking in the park.</em></li>
</ul></div><div class="visual-card card-concept"><h5>Verbs to express dislikes</h5><ul>
<li><strong>Don''t like / Do not like</strong>: <em>They don''t like vegetables.</em></li>
<li><strong>Hate</strong>: <em>He hates waking up early.</em></li>
</ul></div><div class="visual-card card-concept"><h5>Two Possible Structures</h5><p>After these verbs, you can use two types of complements:</p><ol>
<li><strong>A noun (an object):</strong><br/><em>She likes <strong>cats</strong>. / We love
                        <strong>music</strong>.</em></li>
<li><strong>A gerund verb (ending in -ing):</strong> Used to talk about activities.<br/><em>He likes
                        <strong>playing</strong> soccer. / I hate <strong>cleaning</strong> the house.</em></li>
</ol></div>', '{"games": [{"type": "multiple_choice", "title": "I Love It!", "instruction": "Choose the correct expression for likes/dislikes.", "questions": [{"q": "I ______ playing soccer.", "options": ["like", "likes", "am like"], "a": "like"}, {"q": "She ______ like onions.", "options": ["doesn''t", "don''t", "is not"], "a": "doesn''t"}, {"q": "Do you ______ chocolate?", "options": ["love", "loves", "loving"], "a": "love"}, {"q": "They ______ like rainy days.", "options": ["don''t", "doesn''t", "no"], "a": "don''t"}, {"q": "He ______ swimming in the sea.", "options": ["enjoys", "enjoy", "is enjoy"], "a": "enjoys"}]}, {"type": "fill_in", "title": "Like Fill", "instruction": "Type: like, likes, don''t, or doesn''t.", "questions": [{"q": "I ______ coffee without sugar.", "a": "like"}, {"q": "Juan ______ (not like) cold weather.", "a": "doesn''t"}, {"q": "We ______ watching movies.", "a": "like"}, {"q": "They ______ (not like) waiting.", "a": "don''t"}, {"q": "My sister ______ dancing.", "a": "likes"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (17, 'A1', 'Present Continuous', 'Actions happening right now', 'bi-arrow-clockwise', '<h3>Theory</h3><div class="visual-card card-concept"><p>Present Continuous is the tense we use to talk about actions happening <strong>RIGHT NOW</strong>, at
                this precise moment. It is the tense of action in progress. Imagine you are a reporter describing what
                you see.</p></div><div class="visual-card card-concept"><h5>The Magic Formula</h5><p>The structure is always the same and never changes. It''s very easy!</p><p class="text-center fs-5" style="color: #fff;"><strong>Subject + Verb "to be" (am/is/are) + Main
                    Verb-ing</strong></p><ul>
<li>I <strong>am working</strong>.</li>
<li>He <strong>is eating</strong>.</li>
<li>They <strong>are playing</strong>.</li>
</ul></div><div class="visual-card card-example"><h5>Rules for adding "-ing" (Gerund)</h5><table class="table table-dark table-striped">
<thead>
<tr>
<th>Rule</th>
<th>Example</th>
<th>Conversion</th>
</tr>
</thead>
<tbody>
<tr>
<td>Most verbs</td>
<td>work, eat, go</td>
<td>work -&gt; <strong>working</strong>, eat -&gt; <strong>eating</strong>, go -&gt;
                            <strong>going</strong>
</td>
</tr>
<tr>
<td>Verbs ending in <strong>-e</strong></td>
<td>make, dance, write</td>
<td>Remove the "-e" and add "-ing": make -&gt; <strong>making</strong>, write -&gt;
                            <strong>writing</strong>
</td>
</tr>
<tr>
<td>Short verbs (C+V+C)</td>
<td>run, swim, stop</td>
<td>Double the last consonant: run -&gt; <strong>running</strong>, swim -&gt;
                            <strong>swimming</strong>
</td>
</tr>
</tbody>
</table></div><div class="visual-card card-concept"><h5>Negatives and Questions</h5><p>Since we already use the verb "to be", it is very easy! We just move it.</p><ul>
<li><strong>Negative:</strong> Add "not" after "am/is/are".<br/><em>Ex: She <strong>is not (isn''t)
                            sleeping</strong>.</em></li>
<li><strong>Question:</strong> Move "am/is/are" to the beginning of the sentence.<br/><em>Ex:
                        <strong>Is</strong> she sleeping?</em></li>
</ul></div>', '{"games": [{"type": "multiple_choice", "title": "Right now", "instruction": "Choose the correct continuous form.", "questions": [{"q": "I ______ studying English now.", "options": ["am", "is", "are"], "a": "am"}, {"q": "You ______ listening to music.", "options": ["are", "am", "is"], "a": "are"}, {"q": "He ______ working in the garden.", "options": ["is", "am", "are"], "a": "is"}, {"q": "They ______ playing tennis.", "options": ["are", "is", "am"], "a": "are"}, {"q": "Is she ______ today?", "options": ["working", "work", "works"], "a": "working"}]}, {"type": "fill_in", "title": "Continuous Fill", "instruction": "Type the continuous form (e.g., am reading, is playing).", "questions": [{"q": "I ______ (write) an email.", "a": "am writing"}, {"q": "She ______ (cook) dinner.", "a": "is cooking"}, {"q": "The sun ______ (shine).", "a": "is shining"}, {"q": "We ______ (wait) for the bus.", "a": "are waiting"}, {"q": "They ______ (run) in the park.", "a": "are running"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (18, 'A1', 'Simple vs. Continuous', 'When to use simple vs. continuous tenses', 'bi-shuffle', '<h3>Theory</h3><div class="visual-card card-warning"><p>This is one of the most important differences in basic English. Using them correctly will make your
                English sound much more natural.</p><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Present Simple</th>
<th>Present Continuous</th>
</tr>
</thead>
<tbody>
<tr>
<td>Used for <strong>Routines, Habits, and Facts</strong> (things that are always or generally
                            true).</td>
<td>Used for <strong>Actions in Progress RIGHT NOW</strong> (or in a current time period).</td>
</tr>
<tr>
<td><strong>Keywords:</strong> <em>every day, always, sometimes, never, on Mondays, usually,
                                often...</em></td>
<td><strong>Keywords:</strong> <em>now, right now, at the moment, Listen!, Look!...</em></td>
</tr>
<tr>
<td><em>I <strong>work</strong> from 9 to 5.</em> (It is my routine).</td>
<td><em>I can''t talk, I''<strong>m working</strong> right now.</em> (It is happening now).</td>
</tr>
<tr>
<td><em>She <strong>plays</strong> the guitar.</em> (It is her skill or habit).</td>
<td><em>She''<strong>s playing</strong> the guitar.</em> (I can hear her now).</td>
</tr>
</tbody>
</table></div><div class="visual-card card-example"><h5>Careful with "Stative Verbs"</h5><p>There is a group of verbs that describe states or feelings, not actions. These verbs, normally, are
                <strong>NOT used in Present Continuous</strong>.
            </p><ul>
<li><strong>Correct:</strong> <em>I <strong>like</strong> this music.</em></li>
<li><strong>Incorrect:</strong> <del>I am liking this music.</del></li>
<li><strong>Other examples:</strong> love, hate, want, need, know, believe, understand.</li>
</ul></div>', '{"games": [{"type": "multiple_choice", "title": "Habit or Now?", "instruction": "Choose between Present Simple and Present Continuous.", "questions": [{"q": "I usually ______ coffee, but today I''m drinking tea.", "options": ["drink", "am drinking", "drinks"], "a": "drink"}, {"q": "Look! It ______.", "options": ["is raining", "rains", "rain"], "a": "is raining"}, {"q": "She ______ Every day.", "options": ["works", "is working", "work"], "a": "works"}, {"q": "We ______ at the moment.", "options": ["are playing", "play", "plays"], "a": "are playing"}, {"q": "He ______ his bike on Saturdays.", "options": ["rides", "is riding", "ride"], "a": "rides"}]}, {"type": "fill_in", "title": "Tense Choice", "instruction": "Use Simple or Continuous form.", "questions": [{"q": "I ______ (learn) English Every day.", "a": "learn"}, {"q": "Right now, I ______ (learn) about tenses.", "a": "am learning"}, {"q": "She ______ (cook) dinner every night.", "a": "cooks"}, {"q": "Listen! She ______ (sing) in the shower.", "a": "is singing"}, {"q": "They ______ (play) soccer on Sundays.", "a": "play"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (19, 'A1', 'Simple Past', 'Past actions and events', 'bi-clock-history', '<h3>Theory</h3><div class="visual-card card-concept"><p>Simple Past is used to talk about actions that <strong>started and finished in the past</strong>. It is
                always associated with a specific time (although not always mentioned). Keywords: <em>yesterday, last
                    week, last year, in 2010, when I was a child...</em></p></div><div class="visual-card card-concept"><h5>Regular Verbs</h5><p>Most verbs are regular and simply have <strong>-ed</strong> added to the end.</p><ul>
<li>Work -&gt; work<strong>ed</strong></li>
<li>Play -&gt; play<strong>ed</strong></li>
<li>Live -&gt; liv<strong>ed</strong> (if it already ends in -e, just add -d)</li>
<li>Study -&gt; stud<strong>ied</strong> (if it ends in consonant + y, change y to -ied)</li>
<li>Stop -&gt; sto<strong>pped</strong> (if it is C+V+C, double the last consonant)</li>
</ul></div><div class="visual-card card-concept"><h5>Irregular Verbs</h5><p>These verbs do not follow any rule and have their own past form. You have to memorize them! They are the
                most common ones.</p><ul>
<li>Go -&gt; <strong>went</strong></li>
<li>Eat -&gt; <strong>ate</strong></li>
<li>See -&gt; <strong>saw</strong></li>
<li>Have -&gt; <strong>had</strong></li>
<li>Be -&gt; <strong>was / were</strong></li>
</ul></div><div class="visual-card card-warning"><h5>Negatives and Questions: The Super Helper "DID"</h5><p>To negate and ask questions in the past, we use the auxiliary <strong>DID</strong> for ALL pronouns. The
                most important rule is that when we use <strong>didn''t</strong> (to negate) or <strong>Did</strong> (to
                ask), the main verb returns to its base form (infinitive).</p><ul>
<li><strong>Affirmative:</strong> She <strong>worked</strong> yesterday. / He <strong>went</strong> to
                    the party.</li>
<li><strong>Negative:</strong> She <strong>didn''t work</strong> yesterday. / He <strong>didn''t
                        go</strong> to the party.</li>
<li><strong>Question:</strong> <strong>Did</strong> she <strong>work</strong> yesterday? /
                    <strong>Did</strong> he <strong>go</strong> to the party?
                </li>
</ul></div>', '{"games": [{"type": "multiple_choice", "title": "What did you do?", "instruction": "Choose the correct past tense form.", "questions": [{"q": "Yesterday, I ______ to the beach.", "options": ["went", "go", "gone"], "a": "went"}, {"q": "She ______ a movie last night.", "options": ["watched", "watch", "watchs"], "a": "watched"}, {"q": "They ______ pizza for dinner yesterday.", "options": ["ate", "eat", "eaten"], "a": "ate"}, {"q": "I ______ happy to see you.", "options": ["was", "were", "am"], "a": "was"}, {"q": "We ______ our homework an hour ago.", "options": ["finished", "finish", "finishs"], "a": "finished"}]}, {"type": "fill_in", "title": "Past Fill", "instruction": "Type the past form (e.g., played, went).", "questions": [{"q": "I ______ (walk) to school yesterday.", "a": "walked"}, {"q": "He ______ (buy) a new phone last week.", "a": "bought"}, {"q": "We ______ (be) at the party on Saturday.", "a": "were"}, {"q": "The baby ______ (cry) all night.", "a": "cried"}, {"q": "She ______ (see) a doctor yesterday.", "a": "saw"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (20, 'A1', 'Describing Places', 'Vocabulary and phrases for describing locations', 'bi-geo-alt-fill', '<h3>Theory</h3><div class="visual-card card-concept"><p>To describe places and say what "is there", we use the structures <strong>There is</strong> and
                <strong>There are</strong>. We also use prepositions to indicate where things are.
            </p></div><div class="visual-card card-concept"><h5>There is / There are (Hay)</h5><ul>
<li><strong>There is</strong> (or <strong>There''s</strong>): Used to talk about <strong>a single thing
                        (singular)</strong>.
                    <br/><em>Ex: <strong>There is</strong> a book on the table. / <strong>There''s</strong> a cat in the
                        garden.</em>
</li>
<li><strong>There are</strong>: Used to talk about <strong>two or more things (plural)</strong>.
                    <br/><em>Ex: <strong>There are</strong> three apples in the kitchen. / <strong>There are</strong>
                        many people here.</em>
</li>
</ul></div><div class="visual-card card-example"><h5>Common Prepositions of Place</h5><table class="table table-dark table-striped">
<thead>
<tr>
<th>Preposition</th>
<th>Meaning</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>In</strong></td>
<td>Inside</td>
<td>The money is <strong>in</strong> the box.</td>
</tr>
<tr>
<td><strong>On</strong></td>
<td>On top of</td>
<td>The keys are <strong>on</strong> the table.</td>
</tr>
<tr>
<td><strong>Under</strong></td>
<td>Below</td>
<td>The dog is <strong>under</strong> the chair.</td>
</tr>
<tr>
<td><strong>Next to</strong></td>
<td>Beside</td>
<td>The library is <strong>next to</strong> the bank.</td>
</tr>
<tr>
<td><strong>Between</strong></td>
<td>Between (two things)</td>
<td>The pharmacy is <strong>between</strong> the shop and the cinema.</td>
</tr>
<tr>
<td><strong>Behind</strong></td>
<td>In back of</td>
<td>The garden is <strong>behind</strong> the house.</td>
</tr>
</tbody>
</table></div>', '{"games": [{"type": "multiple_choice", "title": "My Town", "instruction": "Choose the best description or quantifier (There is/are).", "questions": [{"q": "______ a park near my house.", "options": ["There is", "There are", "It is"], "a": "There is"}, {"q": "______ many trees in the garden.", "options": ["There are", "There is", "They are"], "a": "There are"}, {"q": "The city is ______ and noisy.", "options": ["big", "small", "quiet"], "a": "big"}, {"q": "Is ______ a supermarket here?", "options": ["there", "it", "they"], "a": "there"}, {"q": "My room is very ______.", "options": ["clean", "noisy", "busy"], "a": "clean"}]}, {"type": "fill_in", "title": "Place Fill", "instruction": "Type: there is, there are, or an adjective.", "questions": [{"q": "______ a library in the street.", "a": "there is"}, {"q": "______ three chairs in the kitchen.", "a": "there are"}, {"q": "The house is ______ (not dirty).", "a": "clean"}, {"q": "______ a school over there.", "a": "there is"}, {"q": "Are ______ any shops near here?", "a": "there"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (21, 'A1', 'Giving Directions', 'Finding your way and helping others', 'bi-compass', '<h3>Theory</h3><div class="visual-card card-concept"><p>Knowing how to ask for and give directions is one of the most useful skills when traveling or moving
                around a city. The grammar is based on the imperative (orders/instructions).</p></div><div class="visual-card card-concept"><h5>Asking for Directions</h5><p>It''s always good to start politely with "Excuse me...".</p><ul>
<li><em><strong>Excuse me, where is</strong> the bank?</em></li>
<li><em><strong>Excuse me, how can I get to</strong> the train station?</em></li>
<li><em><strong>Excuse me, is there a</strong> pharmacy near here?</em></li>
</ul></div><div class="visual-card card-concept"><h5>Key Vocabulary for Giving Directions</h5><table class="table table-dark table-striped">
<thead>
<tr>
<th>Imperative Phrase</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Turn left</strong> ⬅️</td>
<td>Turn to the left</td>
</tr>
<tr>
<td><strong>Turn right</strong> ➡️</td>
<td>Turn to the right</td>
</tr>
<tr>
<td><strong>Go straight ahead / Go straight on</strong> ⬆️</td>
<td>Continue straight</td>
</tr>
<tr>
<td><strong>Go past</strong> the cinema</td>
<td>Pass the cinema (go beyond)</td>
</tr>
<tr>
<td><strong>Cross</strong> the street</td>
<td>Cross to the other side</td>
</tr>
<tr>
<td>It''s <strong>on your left / on your right</strong></td>
<td>It''s on your left / right side</td>
</tr>
<tr>
<td>It''s <strong>on the corner</strong></td>
<td>It''s at the corner</td>
</tr>
<tr>
<td>It''s <strong>next to</strong> the library</td>
<td>It''s beside the library</td>
</tr>
</tbody>
</table></div>', '{"games": [{"type": "multiple_choice", "title": "Where is the post office?", "instruction": "Choose the correct direction or preposition.", "questions": [{"q": "Go ______ on and turn left.", "options": ["straight", "right", "left"], "a": "straight"}, {"q": "The bank is ______ the park.", "options": ["next to", "on", "in"], "a": "next to"}, {"q": "Turn ______ at the traffic lights.", "options": ["right", "straight", "close"], "a": "right"}, {"q": "The library is ______ the street.", "options": ["across", "on", "in"], "a": "across"}, {"q": "Go ______ the bridge.", "options": ["over", "in", "at"], "a": "over"}]}, {"type": "fill_in", "title": "Direction Fill", "instruction": "Type: straight, right, left, next, or across.", "questions": [{"q": "Go ______ ahead (not turn).", "a": "straight"}, {"q": "The cafe is ______ to the bank.", "a": "next"}, {"q": "Turn ______ (not right).", "a": "left"}, {"q": "It''s ______ the street from here.", "a": "across"}, {"q": "Take the second ______.", "a": "right"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (22, 'A1', 'Superlatives', 'The best, worst, biggest, smallest', 'bi-star-fill', '<h3>Theory</h3><div class="visual-card card-concept"><p>If comparatives are used to compare two things, superlatives are used to highlight one thing from a group
                of three or more. It is to say that something is "the most _____" of all. The keyword that is almost
                always used is <strong>"the"</strong>.</p></div><div class="visual-card card-concept"><h5>Rule 1: Short Adjectives (1 syllable, or 2 ending in -y)</h5><p>We add <strong>-est</strong> to the end of the adjective. The spelling rules are the same as for
                comparatives.</p><ul>
<li>Tall -&gt; <strong>the tallest</strong></li>
<li>Big -&gt; <strong>the biggest</strong></li>
<li>Happy -&gt; <strong>the happiest</strong></li>
</ul></div><div class="visual-card card-concept"><h5>Rule 2: Long Adjectives (2 or more syllables)</h5><p>We put the words <strong>the most</strong> before the adjective.</p><ul>
<li>Expensive -&gt; <strong>the most expensive</strong></li>
<li>Beautiful -&gt; <strong>the most beautiful</strong></li>
</ul></div><div class="visual-card card-example"><h5>Rule 3: Irregulars</h5><p>Irregulars also change uniquely in superlative.</p><ul>
<li>Good -&gt; <strong>the best</strong></li>
<li>Bad -&gt; <strong>the worst</strong></li>
<li>Far -&gt; <strong>the furthest / the farthest</strong></li>
</ul><p><em>Example: Mount Everest is <strong>the highest</strong> mountain in the world.</em></p></div>', '{"games": [{"type": "multiple_choice", "title": "The Best!", "instruction": "Choose the correct superlative form.", "questions": [{"q": "Mount Everest is the ______ mountain.", "options": ["highest", "higher", "most high"], "a": "highest"}, {"q": "The cheetah is the ______ animal.", "options": ["fastest", "faster", "most fast"], "a": "fastest"}, {"q": "This is the ______ movie ever.", "options": ["best", "goodest", "better"], "a": "best"}, {"q": "Jupiter is the ______ planet.", "options": ["biggest", "bigger", "most big"], "a": "biggest"}, {"q": "He is the ______ student in class.", "options": ["tallest", "taller", "most tall"], "a": "tallest"}]}, {"type": "fill_in", "title": "Superlative Fill", "instruction": "Type the superlative (e.g., smallest, longest).", "questions": [{"q": "Russia is the ______ (large) country.", "a": "largest"}, {"q": "Summer is the ______ (hot) season.", "a": "hottest"}, {"q": "The Nile is the ______ (long) river.", "a": "longest"}, {"q": "It was the ______ (cold) day of the year.", "a": "coldest"}, {"q": "She is the ______ (old) child.", "a": "oldest"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (23, 'A1', 'Present Perfect', 'Life experiences with have/has + past participle', 'bi-check2-circle', '<h3>Theory</h3><div class="visual-card card-concept"><p>The Present Perfect is a tense that connects the past with the present. It is mainly used for two
                situations:</p><ol>
<li><strong>Life Experiences:</strong> To talk about something that has happened (or not) at some point
                    in your life, without saying exactly when.
                    <br/><em>Ex: I <strong>have been</strong> to London. (I have been there at some point).</em>
<br/><em>Ex: She <strong>has never eaten</strong> sushi. (In her entire life).</em>
</li>
<li><strong>Past actions with a result in the present:</strong> For an action that happened in the past
                    but has a consequence or importance now.
                    <br/><em>Ex: I <strong>have lost</strong> my keys. (I lost them, and the result is I can''t enter my
                        house now).</em>
</li>
</ol></div><div class="visual-card card-concept"><h5>The Formula: HAVE/HAS + Past Participle</h5><p>The structure is: <strong>Subject + have/has + Verb in Past Participle</strong>.</p><ul>
<li>We use <strong>have</strong> with: I, You, We, They.</li>
<li>We use <strong>has</strong> with: He, She, It.</li>
</ul><p>The <strong>Past Participle</strong> is the "third form" of a verb. For regular verbs, it is the same as
                the simple past (ends in -ed). For irregulars, it has a special form that must be learned (ex: go -&gt;
                went -&gt; <strong>gone</strong>; see -&gt; saw -&gt; <strong>seen</strong>).</p></div>', '{"games": [{"type": "multiple_choice", "title": "Have you seen it?", "instruction": "Choose the correct Present Perfect form.", "questions": [{"q": "I ______ seen that movie.", "options": ["have", "has", "am"], "a": "have"}, {"q": "She ______ visited Paris twice.", "options": ["has", "have", "is"], "a": "has"}, {"q": "They ______ finished the test.", "options": ["have", "has", "did"], "a": "have"}, {"q": "______ you ever eaten sushi?", "options": ["Have", "Has", "Did"], "a": "Have"}, {"q": "He ______ lost his keys.", "options": ["has", "have", "had"], "a": "has"}]}, {"type": "fill_in", "title": "Perfect Fill A1", "instruction": "Type: have or has + past participle (e.g., have seen).", "questions": [{"q": "I ______ (write) a book.", "a": "have written"}, {"q": "She ______ (go) to the park.", "a": "has gone"}, {"q": "We ______ (buy) a new car.", "a": "have bought"}, {"q": "The cat ______ (eat) its food.", "a": "has eaten"}, {"q": "They ______ (arrive) early.", "a": "have arrived"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (24, 'A1', 'Present Perfect vs. Past', 'When to use present perfect vs simple past', 'bi-clock', '<h3>Theory</h3><div class="visual-card card-warning"><p>This is one of the most important differences and one that confuses students the most. The key to
                differentiating them is to think about <strong>time</strong> and the <strong>connection to the
                    present</strong>.</p></div><div class="visual-card card-concept"><h5>Simple Past: "The Photo of the Past" 📸</h5><p>Think of the Simple Past as a photo of a finished event. The action started and ended at a specific
                moment in the past and has no connection to now.</p><ul>
<li><strong>Main Use:</strong> Action 100% finished in a finished time.</li>
<li><strong>The Key Clue:</strong> We know (or ask) exactly <strong>when</strong> it happened.</li>
<li><strong>Keywords:</strong> <em>yesterday, last week, last month, in 2010, when I was..., ago.</em>
</li>
<li><em>Ex: I <strong>visited</strong> Japan in 2015.</em> (The action and the year 2015 are finished).
                </li>
<li><em>Ex: She <strong>lost</strong> her keys yesterday.</em> (Yesterday is a finished time).</li>
</ul></div><div class="visual-card card-concept"><h5>Present Perfect: "The Scar or the Trophy" 🏆</h5><p>Think of the Present Perfect as a scar: the wound happened in the past, but the result (the scar) is
                visible now. Or like a trophy: you won it in the past, but it is part of your current life experience.
            </p><ul>
<li><strong>Main Use #1 (Life Experiences):</strong> The exact "when" is not mentioned or is not
                    relevant.
                    <br/><em>Ex: I <strong>have visited</strong> Japan.</em> (It''s a life experience, it doesn''t matter
                    when).
                </li>
<li><strong>Main Use #2 (Result in the present):</strong> The past action has a consequence now.
                    <br/><em>Ex: She <strong>has lost</strong> her keys.</em> (And the result is she is locked out now).
                </li>
<li><strong>Main Use #3 (Unfinished time):</strong> The action happens in a time period that has not
                    finished yet.
                    <br/><em>Ex: We <strong>have eaten</strong> a lot today.</em> ("Today" has not finished yet).
                </li>
</ul></div>', '{"games": [{"type": "multiple_choice", "title": "Finished or Recent?", "instruction": "Distinguish between finished past and Present Perfect.", "questions": [{"q": "I ______ to London last year.", "options": ["went", "have gone", "go"], "a": "went"}, {"q": "I ______ to London three times.", "options": ["have been", "went", "be"], "a": "have been"}, {"q": "She ______ a movie last night.", "options": ["watched", "has watched", "watch"], "a": "watched"}, {"q": "He ______ his homework yet.", "options": ["hasn''t finished", "didn''t finish", "no finish"], "a": "hasn''t finished"}, {"q": "We ______ lunch an hour ago.", "options": ["had", "have had", "have"], "a": "had"}]}, {"type": "fill_in", "title": "Tense Match A1", "instruction": "Type the correct past form (Simple or Perfect).", "questions": [{"q": "I ______ (see) him yesterday.", "a": "saw"}, {"q": "I ______ (just / see) him.", "a": "have just seen"}, {"q": "She ______ (be) sick for a week.", "a": "has been"}, {"q": "They ______ (arrive) at 8 PM.", "a": "arrived"}, {"q": "______ you ______ (finish) your work?", "a": "have finished"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (25, 'A1', 'Already, Yet, Since & For', 'Time adverbs used with present perfect', 'bi-calendar-check', '<h3>Theory</h3><div class="visual-card card-concept"><p>These four words are extremely common "signals" or "clues" with the Present Perfect. Each one has a very
                specific use and position in the sentence.</p></div><div class="visual-card card-concept"><h5>Already (Ya)</h5><ul>
<li><strong>Meaning:</strong> Indicates that something happened sooner than expected. Conveying some
                    surprise.</li>
<li><strong>Use:</strong> <strong>Affirmative</strong> sentences.</li>
<li><strong>Position:</strong> Usually goes between "have/has" and the participle verb.</li>
<li><em>Ex: I have <strong>already</strong> finished my homework.</em></li>
<li><em>Ex: She has <strong>already</strong> seen that movie.</em></li>
</ul></div><div class="visual-card card-concept"><h5>Yet (Aún / Todavía)</h5><ul>
<li><strong>Meaning:</strong> We expect something to happen, but it hasn''t happened (in negatives) or we
                    ask if it has happened (in questions).</li>
<li><strong>Use:</strong> <strong>Negative and Interrogative</strong> sentences.</li>
<li><strong>Position:</strong> Almost always goes at the <strong>END</strong> of the sentence.</li>
<li><strong>Negative:</strong> <em>She hasn''t called me <strong>yet</strong>.</em></li>
<li><strong>Question:</strong> <em>Have you done your work <strong>yet</strong>?</em></li>
</ul></div><div class="visual-card card-concept"><h5>For (Durante / Por)</h5><ul>
<li><strong>Meaning:</strong> Measures the <strong>duration</strong> of an action. Answers the question
                    "How long?".</li>
<li><strong>Use:</strong> Used with a <strong>period or amount of time</strong>.</li>
<li><strong>Keywords:</strong> <em>two hours, five years, a long time, ten minutes, three weeks.</em>
</li>
<li><em>Ex: He has lived here <strong>for</strong> ten years.</em></li>
</ul></div><div class="visual-card card-concept"><h5>Since (Desde)</h5><ul>
<li><strong>Meaning:</strong> Marks the <strong>starting point</strong> of an action. Answers the
                    question "Since when?".</li>
<li><strong>Use:</strong> Used with a <strong>specific moment in time</strong>.</li>
<li><strong>Keywords:</strong> <em>2020, last year, yesterday, I was a child, 8 o''clock.</em>
</li>
<li><em>Ex: They have been friends <strong>since</strong> 2010.</em></li>
</ul></div>', '{"games": [{"type": "multiple_choice", "title": "Markers", "instruction": "Choose the correct time marker.", "questions": [{"q": "I have ______ seen that movie.", "options": ["already", "yet", "since"], "a": "already"}, {"q": "Have you finished ______?", "options": ["yet", "already", "for"], "a": "yet"}, {"q": "I have lived here ______ 2010.", "options": ["since", "for", "already"], "a": "since"}, {"q": "We have been friends ______ ten years.", "options": ["for", "since", "yet"], "a": "for"}, {"q": "He hasn''t called ______.", "options": ["yet", "already", "since"], "a": "yet"}]}, {"type": "fill_in", "title": "Marker Fill", "instruction": "Type: already, yet, since, or for.", "questions": [{"q": "I am ______ home. (I''m here now)", "a": "already"}, {"q": "Is she there ______?", "a": "yet"}, {"q": "I haven''t eaten ______ breakfast.", "a": "since"}, {"q": "We waited ______ two hours.", "a": "for"}, {"q": "She has ______ left. (recently)", "a": "already"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (26, 'A1', 'Describing People', 'Physical and personality descriptions', 'bi-person-lines-fill', '<h3>Theory</h3><div class="visual-card card-concept"><p>To describe people, we use two key verbs: <strong>"to be"</strong> (am, is, are) for states or general
                characteristics (age, height, personality), and <strong>"to have"</strong> (have, has) for possessions
                or physical traits (hair, eyes).</p></div><div class="visual-card card-concept"><h5>Age and Height -&gt; We use "to be"</h5><ul>
<li><strong>Question (Age):</strong> <em>How old are you? / How old is he?</em></li>
<li><strong>Answer (Age):</strong> <em>I <strong>am</strong> 30 years old.</em> (Never <del>I
                        have 30 years</del>!)</li>
<li><strong>Height:</strong> We use adjectives like `tall`, `short` and `medium height`.
                    <br/><em>Ex: He <strong>is</strong> tall. / She <strong>is</strong> short.</em>
</li>
</ul></div><div class="visual-card card-concept"><h5>Appearance -&gt; We use "to have" / "to be"</h5><p>To describe hair and eyes, we use "to have" (or "has" for he/she/it). For the rest, we usually use "to
                be".</p><ul>
<li><strong>Hair:</strong> The structure is LENGTH + STYLE + COLOR + hair.
                    <br/><em>Ex: She <strong>has</strong> long, curly, black hair.</em>
</li>
<li><strong>Eyes:</strong>
<br/><em>Ex: I <strong>have</strong> brown eyes.</em>
</li>
<li><strong>Other traits:</strong>
<br/><em>Ex: He <strong>is</strong> young.</em>
</li>
</ul></div>', '{"games": [{"type": "multiple_choice", "title": "How does she look?", "instruction": "Choose the best adjective for description.", "questions": [{"q": "He is very ______ (lots of hair).", "options": ["hairy", "tall", "funny"], "a": "hairy"}, {"q": "She has ______ hair.", "options": ["long", "short", "brown"], "a": "long"}, {"q": "He is a ______ person (friendly).", "options": ["nice", "bad", "tall"], "a": "nice"}, {"q": "They are very ______ (smart).", "options": ["intelligent", "fast", "big"], "a": "intelligent"}, {"q": "The baby is very ______.", "options": ["cute", "old", "angry"], "a": "cute"}]}, {"type": "fill_in", "title": "Description Fill", "instruction": "Type the adjective (e.g., tall, short, happy).", "questions": [{"q": "He''s not short, he''s ______.", "a": "tall"}, {"q": "She''s not sad, she''s ______.", "a": "happy"}, {"q": "My brother is a ______ student.", "a": "good"}, {"q": "That man is very ______ (not young).", "a": "old"}, {"q": "The cat is so ______ (not big).", "a": "small"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (27, 'A1', 'Modal Verbs', 'Can, could, should, must and their uses', 'bi-toggles', '<h3>Theory</h3><div class="visual-card card-concept"><p>Modal verbs are special "helper verbs" that modify another verb to express ability, permission, advice,
                or obligation. They are very easy to use because they follow a golden rule.</p></div><div class="visual-card card-concept"><h5>The Golden Rule of Modal Verbs</h5><p>The structure is always the same: <strong>Subject + Modal Verb + Main Verb (in base form)</strong>.</p><ul>
<li>The main verb that follows NEVER takes "-s", "-ing" or "to".</li>
<li><em>Correct: She <strong>can play</strong> the guitar.</em></li>
<li><em>Incorrect: <del>She can plays...</del> / <del>She can to play...</del></em></li>
</ul></div><div class="visual-card card-concept"><h5>Ability and Permission: CAN / COULD</h5><ul>
<li><strong>CAN:</strong> Expresses ability (to allow/know how to do something) or informal permission.
                    <br/><em>Ability: I <strong>can</strong> swim. / He <strong>can''t</strong> speak French.</em>
<br/><em>Permission: <strong>Can</strong> I open the window?</em>
</li>
<li><strong>COULD:</strong> Used to make requests in a more polite and formal way than "Can".
                    <br/><em>Polite Request: <strong>Could</strong> you help me, please?</em>
</li>
</ul></div><div class="visual-card card-concept"><h5>Advice: SHOULD / SHOULDN''T</h5><ul>
<li><strong>SHOULD:</strong> Used to give advice or recommendations.
                    <br/><em>Advice: You look tired. You <strong>should</strong> rest.</em>
</li>
<li><strong>SHOULDN''T:</strong> Used to advise against doing something.
                    <br/><em>Negative Advice: It''s cold. You <strong>shouldn''t</strong> go out without a jacket.</em>
</li>
</ul></div><div class="visual-card card-warning"><h5>Obligation: MUST / HAVE TO</h5><p>Both express obligation, but with a small difference:</p><ul>
<li><strong>MUST:</strong> Strong obligation, often personal or a strict rule.
                    <br/><em>Ex: I <strong>must</strong> finish this today. (I feel the need). / You
                        <strong>must</strong> wear a seatbelt. (It''s the law).</em>
</li>
<li><strong>HAVE TO:</strong> External obligation, a rule that comes from someone else (a boss, a
                    teacher).
                    <br/><em>Ex: I <strong>have to</strong> work on Saturday. (My boss asks me to).</em>
<br/>Note! This verb changes with he/she/it: <em>She <strong>has to</strong> study.</em>
</li>
</ul></div><div class="visual-card card-concept"><h5>Prohibition vs. No Obligation: MUSTN''T / DON''T HAVE TO</h5><p>This difference is crucial!</p><ul>
<li><strong>MUSTN''T (must not):</strong> Means FORBIDDEN. You do not have permission to do it.
                    <br/><em>Ex: You <strong>mustn''t</strong> smoke here.</em>
</li>
<li><strong>DON''T HAVE TO (do not have to):</strong> Means it is NOT necessary. There is no obligation,
                    but you can do it if you want.
                    <br/><em>Ex: It''s Sunday. I <strong>don''t have to</strong> wake up early.</em>
</li>
</ul></div>', '{"games": [{"type": "multiple_choice", "title": "Can or Should?", "instruction": "Choose the best modal verb.", "questions": [{"q": "I ______ swim very well.", "options": ["can", "should", "must"], "a": "can"}, {"q": "You ______ eat healthy food.", "options": ["should", "can", "must"], "a": "should"}, {"q": "The sign says you ______ smoke here.", "options": ["mustn''t", "can''t", "shouldn''t"], "a": "mustn''t"}, {"q": "______ you help me, please?", "options": ["Can", "Should", "Must"], "a": "Can"}, {"q": "He ______ study for the exam.", "options": ["must", "can", "should"], "a": "must"}]}, {"type": "fill_in", "title": "Modal Fill A1", "instruction": "Type: can, can''t, should, or shouldn''t.", "questions": [{"q": "I ______ speak Spanish fluently.", "a": "can"}, {"q": "You ______ (not) play with fire.", "a": "shouldn''t"}, {"q": "______ you play the piano?", "a": "can"}, {"q": "We ______ (not) forget our keys.", "a": "shouldn''t"}, {"q": "He ______ run very fast.", "a": "can"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (28, 'A1', 'Future', 'Will and Be going to for future plans', 'bi-calendar2-plus', '<h3>Theory</h3><div class="visual-card card-concept"><p>In English, there are two main and very common ways to talk about the future. They are not
                interchangeable, as each has a different "feeling" or purpose.</p></div><div class="visual-card card-concept"><h5>"Be going to": For Plans and Predictions with Evidence 🗓️</h5><p>Think of "going to" as something you already have in your planner or that you can see is going to happen.
                We use it for:</p><ol>
<li><strong>Plans or Intentions:</strong> Decisions we have already made before speaking.
                    <br/><em>Ex: I <strong>am going to visit</strong> my grandmother this weekend.</em> (It''s my plan).
                </li>
<li><strong>Predictions with Evidence:</strong> When we see something in the present that makes us sure
                    of what will happen.
                    <br/><em>Ex: Look at those dark clouds! It <strong>is going to</strong> rain.</em> (The evidence is
                    the dark clouds).
                </li>
</ol><p class="text-center fs-5"><strong>Subject + am/is/are + going to + Verb (base)</strong></p></div><div class="visual-card card-concept"><h5>"Will": For Predictions and Spontaneous Decisions ⚡</h5><p>Think of "will" as a quick decision or a general prediction. We use it for:</p><ol>
<li><strong>Spontaneous Decisions:</strong> Those you make at the moment you speak.
                    <br/><em>(Phone rings) -&gt; "Don''t worry, I <strong>will get</strong> it!"</em>
</li>
<li><strong>General Predictions:</strong> What you believe or opine will happen, often with expressions
                    like "I think...".
                    <br/><em>I think it <strong>will rain</strong> tomorrow.</em> (It''s just an opinion, no evidence
                    now).
                </li>
</ol><p>The negative form is <strong>won''t</strong> (will not). The structure is very simple: <strong>Subject +
                    will/won''t + Verb (base)</strong>.</p></div>', '{"games": [{"type": "multiple_choice", "title": "Going to or Will?", "instruction": "Choose the correct future form.", "questions": [{"q": "I think it ______ rain tomorrow.", "options": ["will", "is going to", "going"], "a": "will"}, {"q": "am ______ travel to Japan next year.", "options": ["going to", "will", "go"], "a": "going to"}, {"q": "I ______ call you later.", "options": ["will", "going to", "am"], "a": "will"}, {"q": "They are ______ have a party on Saturday.", "options": ["going to", "will", "go"], "a": "going to"}, {"q": "She ______ be a doctor one day.", "options": ["will", "is going", "going"], "a": "will"}]}, {"type": "fill_in", "title": "Future Fill A1", "instruction": "Type: will or going to.", "questions": [{"q": "I ______ see you soon.", "a": "will"}, {"q": "We are ______ eat out tonight.", "a": "going to"}, {"q": "I''m sure he ______ win.", "a": "will"}, {"q": "Are you ______ visit us?", "a": "going to"}, {"q": "The sun ______ rise tomorrow.", "a": "will"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (29, 'A1', 'Giving Messages', 'Taking and leaving messages', 'bi-chat-dots-fill', '<h3>Theory</h3><div class="visual-card card-concept"><p>When we want to report what another person said, we use verbs like "say", "tell" and "ask". For level A1,
                we will focus on **tell** and **ask**, which are used to give orders/instructions or to request
                something.</p></div><div class="visual-card card-warning"><h5>"Tell": To give an order or instruction</h5><p>We use "tell" to communicate an order or instruction that someone gave us. The most important rule is
                that **"tell" always needs a person** (an object: me, you, him, her, us, them) right after.</p><p class="text-center fs-5"><strong>Subject + tell/told + PERSON + (not) + to + Verb (base)</strong>
</p><ul>
<li><strong>Direct message:</strong> "Please, close the door."</li>
<li><strong>Reported message:</strong> She <strong>told me to</strong> close the door.</li>
<br/>
<li><strong>Direct message:</strong> "Don''t be late."</li>
<li><strong>Reported message:</strong> He <strong>told us not to</strong> be late.</li>
</ul><p><strong>Remember:</strong> Never say <del>She told to close the door</del>. It''s always `tell + someone`.
            </p></div><div class="visual-card card-concept"><h5>"Ask": To make a request</h5><p>We use "ask" to communicate a request that someone made to us. It works very similarly to "tell", as it
                also needs a person and the structure "to + verb". The difference is the meaning: "ask" is to ask
                politely, not to give an order.</p><p class="text-center fs-5"><strong>Subject + ask/asked + PERSON + (not) + to + Verb (base)</strong>
</p><ul>
<li><strong>Direct request:</strong> "Could you help me, please?"</li>
<li><strong>Reported message:</strong> He <strong>asked me to</strong> help him.</li>
<br/>
<li><strong>Direct request:</strong> "Please, don''t make noise."</li>
<li><strong>Reported message:</strong> The teacher <strong>asked them not to</strong> make noise.</li>
</ul></div>', '{"games": [{"type": "multiple_choice", "title": "Can you tell him?", "instruction": "Choose the best way to give a message.", "questions": [{"q": "Can you ______ him I called?", "options": ["tell", "say", "talk"], "a": "tell"}, {"q": "Please ______ Maria to call me.", "options": ["ask", "tell", "say"], "a": "ask"}, {"q": "I ______ her the message later.", "options": ["will give", "give", "giving"], "a": "will give"}, {"q": "Could you ______ a message?", "options": ["take", "make", "give"], "a": "take"}, {"q": "______ you tell him to wait?", "options": ["Can", "Do", "Are"], "a": "Can"}]}, {"type": "fill_in", "title": "Message Fill", "instruction": "Type: tell, ask, or give.", "questions": [{"q": "Please ______ him i''m late.", "a": "tell"}, {"q": "Can you ______ her to call me back?", "a": "ask"}, {"q": "I''ll ______ you the message now.", "a": "give"}, {"q": "Please ______ them to wait for me.", "a": "tell"}, {"q": "Can i ______ a message for her?", "a": "leave"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (30, 'A1', 'Talking About Changes', 'How things have changed over time', 'bi-arrow-up-circle', '<h3>Theory</h3><div class="visual-card card-concept"><p>Talking about changes is a very common way to converse. We compare how things were in the past with how
                they are now. For this, we mainly use the **Simple Past** and the **Simple Present**, and also
                **Comparatives**.</p></div><div class="visual-card card-concept"><h5>1. Using Simple Past vs. Simple Present</h5><p>This is the most direct structure to show a change. We use words like "before" or a past date, and "now".
            </p><ul>
<li><em>Before, I <strong>lived</strong> in a small apartment. Now, I <strong>live</strong> in a big
                        house.</em></li>
<li><em>She <strong>was</strong> very shy as a child. Now, she <strong>is</strong> very outgoing.</em>
</li>
<li><em>He <strong>didn''t like</strong> vegetables. Now, he <strong>loves</strong> them.</em></li>
</ul></div><div class="visual-card card-concept"><h5>2. Using Comparatives</h5><p>Comparatives are perfect to describe the result of the change concisely.</p><ul>
<li><em>My English is <strong>better</strong> now.</em></li>
<li><em>The city is <strong>more modern</strong> than before.</em></li>
<li><em>He is <strong>taller</strong> than last year.</em></li>
</ul></div><div class="visual-card card-concept"><h5>3. A Special Tool: "used to"</h5><p>We use the expression <strong>"used to"</strong> to talk about past habits or states that are no longer
                true. It is very useful for talking about changes.</p><p class="text-center fs-5"><strong>Subject + used to + Verb (base)</strong></p><ul>
<li><em>I <strong>used to</strong> play the piano.</em> (I played it in the past, but not anymore).</li>
<li><em>She <strong>used to</strong> have long hair.</em> (She had long hair in the past, but now it is
                    short).</li>
</ul></div>', '{"games": [{"type": "multiple_choice", "title": "I Used To...", "instruction": "Choose the correct expression for past habits (A1 level).", "questions": [{"q": "I ______ play with dolls when I was five.", "options": ["used to", "use to", "using"], "a": "used to"}, {"q": "Did you ______ like broccoli?", "options": ["use to", "used to", "using"], "a": "use to"}, {"q": "I didn''t ______ like coffee.", "options": ["use to", "used to", "using"], "a": "use to"}, {"q": "He ______ live in Japan.", "options": ["used to", "use to", "using"], "a": "used to"}, {"q": "Where did they ______ go in summer?", "options": ["use to", "used to", "using"], "a": "use to"}]}, {"type": "fill_in", "title": "Change Fill A1", "instruction": "Type: used to or use to.", "questions": [{"q": "I ______ have long hair.", "a": "used to"}, {"q": "Did you ______ live here?", "a": "use to"}, {"q": "We ______ play together every day.", "a": "used to"}, {"q": "I didn''t ______ like sushi.", "a": "use to"}, {"q": "She ______ study very hard.", "a": "used to"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (1, 'A2', 'There was / There were', 'Past existence of things and people', 'bi-clock-history', '<h3>Theory</h3><p>Just as we use "There is" and "There are" for existence in the present, we use <strong>There
                        was</strong> and <strong>There were</strong> to talk about the existence of things in the past
                    ("había" or "hubo").</p><h5>Key Rule: Singular vs. Plural</h5><ul>
<li>We use <strong>There was</strong> for <strong>singular</strong> nouns (one thing).</li>
<li>We use <strong>There were</strong> for <strong>plural</strong> nouns (two or more things).</li>
</ul><h5>An Important Exception: Uncountable Nouns</h5><p>For nouns that we cannot count (like water, traffic, sugar, money, information), we always treat them
                    as singular and use <strong>There was</strong>.</p><ul>
<li><em>Correct: <strong>There was</strong> a lot of traffic this morning.</em></li>
<li><em>Incorrect: <del>There were a lot of traffic...</del></em></li>
<li><em>Correct: <strong>There was</strong> some sugar on the table.</em></li>
</ul><h5>Structures</h5><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Form</th>
<th>Singular &amp; Uncountable</th>
<th>Plural</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Affirmative (+)</strong></td>
<td><strong>There was</strong> a cat.<br/><strong>There was</strong> some water.</td>
<td><strong>There were</strong> two cats.</td>
</tr>
<tr>
<td><strong>Negative (-)</strong></td>
<td><strong>There wasn''t</strong> a dog.<br/><strong>There wasn''t</strong> any money.</td>
<td><strong>There weren''t</strong> any dogs.</td>
</tr>
<tr>
<td><strong>Question (?)</strong></td>
<td><strong>Was there</strong> a problem?<br/><strong>Was there</strong> any time?</td>
<td><strong>Were there</strong> any problems?</td>
</tr>
<tr>
<td><strong>Short Answers</strong></td>
<td>Yes, there was. / No, there wasn''t.</td>
<td>Yes, there were. / No, there weren''t.</td>
</tr>
</tbody>
</table></div>', '{"games": [{"title": "Practice 1: Positive and Negative Forms", "instruction": "Choose between ''Was'' and ''Were'' to complete the sentences correctly.", "type": "multiple_choice", "questions": [{"q": "There ______ a large party at my house last night.", "options": ["was", "were"], "a": "was", "hint": "A ''party'' is singular."}, {"q": "There ______ many people waiting at the bus stop.", "options": ["was", "were"], "a": "were", "hint": "Look at ''many people''."}, {"q": "There ______ any milk in the fridge this morning.", "options": ["wasn''t", "weren''t"], "a": "wasn''t", "hint": "''Milk'' is uncountable and treated as singular."}, {"q": "There ______ some beautiful paintings in the museum.", "options": ["was", "were"], "a": "were", "hint": "''Paintings'' is plural."}, {"q": "There ______ a lot of traffic on the way to work.", "options": ["was", "were"], "a": "was", "hint": "''Traffic'' is uncountable."}]}, {"title": "Practice 2: Questions and Past Facts", "instruction": "Complete the questions and negatives using the correct form.", "type": "fill_in", "questions": [{"q": "______ there a library in your school? (Question)", "a": "Was"}, {"q": "No, there ______ any trees in my old garden.", "a": "weren''t"}, {"q": "How many students ______ there in your class?", "a": "were"}, {"q": "______ there any cookies left on the plate?", "a": "Were"}, {"q": "There ______ a big storm yesterday afternoon.", "a": "was"}]}, {"title": "Practice 3: Sentence Scramble", "instruction": "Put the words in the correct order to form a sentence.", "type": "unscramble", "questions": [{"q": "was / cinema / the / near / there / park / a", "a": "There was a cinema near the park"}, {"q": "many / weren''t / guests / at / there / wedding / the", "a": "There weren''t many guests at the wedding"}, {"q": "a / museum / was / town / center / there / in / the", "a": "There was a museum in the town center"}, {"q": "were / students / in / twenty / library / there / the", "a": "There were twenty students in the library"}, {"q": "yesterday / a / was / on / TV / there / film / good", "a": "There was a good film on TV yesterday"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (2, 'A2', 'Used to + infinitive', 'Past habits that are no longer true', 'bi-arrow-clockwise', '<h3>Theory</h3><p>The expression <strong>"used to"</strong> is a special structure we use exclusively to talk about the
                    past. It does not mean "usar" in the typical sense. It translates to "solía" and describes actions,
                    habits, or states that were true in the past but are **no longer true now**. The key idea is the
                    **contrast between the past and the present**.</p><h5>Affirmative: Subject + used to + Verb (base form)</h5><p>This form describes a past habit or state that has changed.</p><ul>
<li><strong>Past Habit:</strong> <em>I <strong>used to play</strong> video games every day after
                            school.</em> (This strongly implies: Now I don''t play video games every day).</li>
<li><strong>Past State:</strong> <em>She <strong>used to have</strong> very long hair.</em> (This
                        implies: Now her hair is short).</li>
<li><strong>Another Example:</strong> <em>There <strong>used to be</strong> a cinema on this
                            street.</em> (This implies: Now the cinema is not here).</li>
</ul><h5>Negative: Subject + didn''t + use to + Verb (base form)</h5><p>Be very careful here. The auxiliary verb **didn''t** already puts the sentence in the past. Therefore,
                    the main verb expression "used to" returns to its base form, **"use to"** (without the "-d").</p><ul>
<li><em>He <strong>didn''t use to</strong> like vegetables.</em> (This implies: But now he likes
                        them).</li>
<li><em>We <strong>didn''t use to</strong> travel much.</em> (This implies: But now we travel more
                        often).</li>
<li><em>Incorrect form: <del>He didn''t used to like...</del></em></li>
</ul><h5>Question: Did + Subject + use to + Verb (base form)...?</h5><p>The same rule applies to questions. The auxiliary **Did** handles the past tense, so we use the base
                    form **use to**.</p><ul>
<li><em><strong>Did you use to</strong> live in this city?</em></li>
<li><em><strong>Did they use to</strong> work together?</em></li>
<li><em>Incorrect form: <del>Did you used to have...</del></em></li>
</ul>', '{"games": [{"title": "Practice 1: Used to vs. Simple Past", "instruction": "Choose ''used to'' for past habits or ''simple past'' for single events.", "type": "multiple_choice", "questions": [{"q": "I ______ (play) soccer every Saturday when I was a kid.", "options": ["used to play", "played"], "a": "used to play", "hint": "This was a habit."}, {"q": "Last week, I ______ (play) soccer with my friends.", "options": ["used to play", "played"], "a": "played", "hint": "This happened once."}, {"q": "She ______ (be) very shy, but now she is confident.", "options": ["used to be", "was"], "a": "used to be", "hint": "A past state that changed."}, {"q": "We ______ (live) in London for five years.", "options": ["used to live", "lived"], "a": "used to live", "hint": "A long-term past state."}, {"q": "I ______ (go) to Paris two years ago.", "options": ["used to go", "went"], "a": "went", "hint": "A specific time in the past."}]}, {"title": "Practice 2: Negatives and Questions", "instruction": "Complete the sentences using ''didn''t use to'' or ''did you use to''.", "type": "fill_in", "questions": [{"q": "I ______ (not / like) vegetables when I was young.", "a": "didn''t use to like"}, {"q": "______ (you / have) long hair at school?", "a": "Did you use to have"}, {"q": "She ______ (not / speak) English so well.", "a": "didn''t use to speak"}, {"q": "Where ______ (you / live) before moving here?", "a": "did you use to live"}, {"q": "My parents ______ (not / travel) much.", "a": "didn''t use to travel"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (3, 'A2', 'Past Simple vs. Past Continuous', 'Interrupting actions and background scenes', 'bi-film', '<h3>Theory</h3><p>We often use these two tenses together to show the relationship between two past actions. The key is
                    to understand which action was a long, ongoing "background" action and which was a short,
                    "interrupting" action.</p><p><strong>The Movie Analogy 🎬:</strong></p><ul>
<li>The <strong>Past Continuous</strong> is the "background scene": a long action that was in
                        progress over a period of time. <em>(e.g., "It was raining... The orchestra was playing
                            beautiful music...")</em></li>
<li>The <strong>Past Simple</strong> is the "sudden event": a short, completed action that happened
                        in the middle of the background scene. <em>(e.g., "...suddenly, a man shouted.")</em></li>
</ul><h5>Use 1: A Short Action Interrupting a Long Action</h5><p>This is the most common use. We connect the ideas with <strong>when</strong> and
                    <strong>while</strong>.
                </p><p class="text-center fs-5" style="color: var(--color-texto-principal);"><strong>Long Action (Past
                        Continuous) + WHEN + Short Action (Past Simple)</strong></p><ul>
<li><em>I <strong>was taking</strong> a shower <strong>when</strong> the phone
                            <strong>rang</strong>.</em> (The shower was a long action; the phone ringing was a short
                        interruption).</li>
<li><em>He <strong>was driving</strong> home <strong>when</strong> he <strong>saw</strong> the
                            accident.</em></li>
</ul><p class="text-center fs-5" style="color: var(--color-texto-principal);"><strong>WHILE + Long Action
                        (Past Continuous), + Short Action (Past Simple)</strong></p><ul>
<li><em><strong>While</strong> I <strong>was studying</strong>, my friend <strong>called</strong>
                            me.</em> ("Studying" was the long background action).</li>
<li><em><strong>While</strong> they <strong>were playing</strong> soccer, it
                            <strong>started</strong> to rain.</em></li>
</ul><h5>Use 2: Two Long Actions Happening Simultaneously</h5><p>When two long actions were happening at the same time in the past, we can use the Past Continuous for
                    both, usually connected by <strong>while</strong>.</p><ul>
<li><em>I <strong>was cooking</strong> dinner <strong>while</strong> my son <strong>was
                                doing</strong> his homework.</em></li>
<li><em>She <strong>was reading</strong> a book <strong>while</strong> her husband <strong>was
                                watching</strong> TV.</em></li>
</ul>', '{"games": [{"title": "Practice 1: Interrupting Actions", "instruction": "Choose the correct form: Simple Past or Past Continuous.", "type": "multiple_choice", "questions": [{"q": "I ______ (watch) TV when the phone rang.", "options": ["was watching", "watched"], "a": "was watching", "hint": "The continuous action was interrupted."}, {"q": "While she ______ (cook), she cut her finger.", "options": ["was cooking", "cooked"], "a": "was cooking", "hint": "''While'' usually indicates a continuous action."}, {"q": "They ______ (play) football when it started to rain.", "options": ["were playing", "played"], "a": "were playing", "hint": "Continuous action in progress."}, {"q": "When I saw him, he ______ (eat) a sandwich.", "options": ["was eating", "ate"], "a": "was eating", "hint": "What was he doing at that moment?"}, {"q": "She ______ (sleep) when the alarm went off.", "options": ["was sleeping", "slept"], "a": "was sleeping", "hint": "An interrupted state."}]}, {"title": "Practice 2: Sentence Structure", "instruction": "Put the words in order to describe what was happening.", "type": "unscramble", "questions": [{"q": "working / I / was / when / arrived / he", "a": "I was working when he arrived"}, {"q": "they / dancing / were / music / the / stopped / when", "a": "They were dancing when the music stopped"}, {"q": "while / studying / was / she / sleeping / was / I", "a": "She was studying while I was sleeping"}, {"q": "raining / it / was / we / left / when / house / the", "a": "It was raining when we left the house"}, {"q": "watching / movie / a / were / you / when / called / I", "a": "You were watching a movie when I called"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (4, 'A2', 'Comparisons and Evaluations', 'Comparatives, superlatives, and equality', 'bi-bar-chart-fill', '<h3>Theory</h3><p>In A1, you learned basic comparatives. Now, we will review them and add new structures to make more
                    complex comparisons, including superlatives and comparisons of equality.</p><h5>Review: Comparatives (-e / more)</h5><p>We use comparatives to compare two things. Remember the rule: short adjectives get
                    <strong>-er</strong>, and long adjectives use <strong>more</strong>. We use the word
                    <strong>than</strong> to connect the two items being compared.
                </p><ul>
<li><em>A lion is <strong>bigger than</strong> a cat.</em></li>
<li><em>This book is <strong>more interesting than</strong> the movie.</em></li>
</ul><h5>New: Superlatives (-est/ most)</h5><p>We use superlatives to compare one thing to a group of three or more, to say it is "the maximum" in a
                    category. The rules are similar to comparatives, but we always use <strong>"the"</strong> before the
                    superlative adjective.</p><ul>
<li><strong>Short Adjectives:</strong> Add <strong>-est</strong>. (tall -&gt; <strong>the
                            tallest</strong>)</li>
<li><strong>Long Adjectives:</strong> Use <strong>the most</strong>. (expensive -&gt; <strong>the most
                            expensive</strong>)</li>
<li><strong>Irregulars:</strong> good -&gt; <strong>the best</strong>; bad -&gt; <strong>the
                            worst</strong>.</li>
<li><em>Russia is <strong>the biggest</strong> country in the world.</em> (Comparing Russia to all
                        other countries).</li>
</ul><h5>New: Comparisons of Equality (as...as)</h5><p>We use this structure to say two things are the same in a particular quality. The adjective does not
                    change.</p><p class="text-center fs-5" style="color: var(--color-texto-principal);"><strong>as + adjective +
                        as</strong></p><ul>
<li><em>Maria is <strong>as tall as</strong> her brother.</em> (They have the same height).</li>
<li><em>The first exam was <strong>as difficult as</strong> the second one.</em></li>
<li><strong>Negative:</strong> To say two things are different, we use <strong>not
                            as...as</strong>.<br/><em>A car is <strong>not as fast as</strong> a plane.</em> (A plane is
                        faster).</li>
</ul>', '{"games": [{"title": "Practice 1: Comparatives and Superlatives", "instruction": "Complete the sentences with the correct form of the adjective.", "type": "multiple_choice", "questions": [{"q": "Gold is ______ (expensive) than silver.", "options": ["more expensive", "expensiver"], "a": "more expensive", "hint": "Use ''more'' for long adjectives."}, {"q": "This is the ______ (good) book I''ve ever read.", "options": ["best", "goodest"], "a": "best", "hint": "''Good'' is irregular."}, {"q": "My brother is ______ (tall) than me.", "options": ["taller", "more tall"], "a": "taller", "hint": "Short adjectives take ''-er''."}, {"q": "The Amazon is the ______ (long) river in the world.", "options": ["longest", "most long"], "a": "longest", "hint": "Superlative for short adjective."}, {"q": "Traveling by plane is ______ (comfortable) than by bus.", "options": ["more comfortable", "comfortabler"], "a": "more comfortable", "hint": "Long adjective."}]}, {"title": "Practice 2: Equality (as...as)", "instruction": "Complete the sentences using ''as...as'' to show equality.", "type": "fill_in", "questions": [{"q": "She is ______ (tall) her mother.", "a": "as tall as"}, {"q": "My car isn''t ______ (fast) yours.", "a": "as fast as"}, {"q": "This exam was ______ (difficult) the last one.", "a": "as difficult as"}, {"q": "I can''t run ______ (quick) you.", "a": "as quick as"}, {"q": "His house is ______ (big) mine.", "a": "as big as"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (5, 'A2', 'Wish + Past Tense', 'Expressing imaginary present situations', 'bi-star-fill', '<h3>Theory</h3><p>We use the expression <strong>"I wish..."</strong> to talk about things we want to be different in
                    the <strong>present</strong>, but which are impossible or very unlikely. It''s for expressing regrets
                    or desires about current situations that we want to change hypothetically.</p><p><strong>The Magic Rule:</strong> To talk about an unreal or imaginary present, we take one step back
                    in time with our verbs and use the **Past Simple tense**.</p><h5>Structure 1: I wish + Subject + Simple Past Verb</h5><p>For most verbs, we use their Simple Past form to talk about a present wish. Look at the contrast
                    between reality and the wish:</p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>The Real Situation (Present)</th>
<th>The Wish (Imaginary Present, uses Past Tense)</th>
</tr>
</thead>
<tbody>
<tr>
<td>I don''t have a car</td>
<td>I wish I <strong>had</strong> a car</td>
</tr>
<tr>
<td>He doesn''t speak French</td>
<td>He wishes he <strong>spoke</strong> French</td>
</tr>
<tr>
<td>I can''t fly</td>
<td>I wish I <strong>could</strong> fly <em>(the past of "can" is "could")</em></td>
</tr>
</tbody>
</table></div><h5>Structure 2: The Special Case with ''to be'' (I wish I were...)</h5><p>When we use the verb "to be" after "wish" to express a hypothetical situation, the grammatically
                    correct form for all subjects is <strong>"were"</strong>. This is called the subjunctive mood. In
                    informal conversation, you will often hear "was," but "were" is considered more correct, especially
                    in writing.</p><ul>
<li><strong>Reality:</strong> I am not a rockstar -&gt; <strong>Wish:</strong> I wish I
                        <strong>were</strong> a rockstar
                    </li>
<li><strong>Reality:</strong> He isn''t here -&gt; <strong>Wish:</strong> I wish he
                        <strong>were</strong> here
                    </li>
<li><strong>Reality:</strong> It is raining today -&gt; <strong>Wish (Negative):</strong> I wish it
                        <strong>weren''t</strong> raining today
                    </li>
</ul>', '{"games": [{"title": "Practice 1: Present Regrets", "instruction": "Form a wish about your current situation.", "type": "multiple_choice", "questions": [{"q": "I don''t have enough money. I wish I ______ more money.", "options": ["had", "have"], "a": "had", "hint": "Use past tense for present wishes."}, {"q": "I have to work today. I wish I ______ to work.", "options": ["didn''t have", "don''t have"], "a": "didn''t have", "hint": "Negative wish for a positive fact."}, {"q": "I''m not tall. I wish I ______ taller.", "options": ["were", "was"], "a": "were", "hint": "In formal grammar, use ''were'' for all persons with ''wish''."}, {"q": "I can''t speak Italian. I wish I ______ speak it.", "options": ["could", "can"], "a": "could", "hint": "Past of ''can'' for wishes."}, {"q": "It''s raining. I wish it ______ raining.", "options": ["stopped", "stops"], "a": "stopped", "hint": "Present wish for change."}]}, {"title": "Practice 2: Writing Wishes", "instruction": "Complete the ''I wish'' sentences.", "type": "fill_in", "questions": [{"q": "I don''t know the answer. I wish I ______ it.", "a": "knew"}, {"q": "I live in a small flat. I wish I ______ in a big house.", "a": "lived"}, {"q": "I''m tired. I wish I ______ so tired.", "a": "weren''t"}, {"q": "He doesn''t call me. I wish he ______ me.", "a": "called"}, {"q": "I can''t go to the party. I wish I ______ go.", "a": "could"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (6, 'A2', 'Indirect Questions', 'Polite ways to ask for information', 'bi-chat-left-quote-fill', '<h3>Theory</h3><p>Indirect questions are a more polite and formal way to ask for information. Instead of asking a
                    direct question, we use an introductory phrase to soften it.</p><p><strong>Direct Question:</strong> <em>Where is the bathroom?</em><br/>
<strong>Indirect Question:</strong> <em>Could you tell me where the bathroom is?</em>
</p><h5>The Golden Rule: Statement Word Order</h5><p>This is the most important rule. After the introductory phrase, the question part uses the word order
                    of a normal statement (<strong>Subject + Verb</strong>), not a question (Verb + Subject).</p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Direct Question (Verb + Subject)</th>
<th>Indirect Question (Subject + Verb)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Where <strong>is the bank</strong>?</td>
<td>Could you tell me where <strong>the bank is</strong>?</td>
</tr>
<tr>
<td>What <strong>is his name</strong>?</td>
<td>Do you know what <strong>his name is</strong>?</td>
</tr>
</tbody>
</table></div><h5>Handling do, does, and did</h5><p>When a direct question uses the helpers do, does, or did, they **disappear** in the indirect
                    question, and the main verb changes accordingly.</p><ul>
<li><strong>Direct:</strong> <em>What time <strong>does</strong> the train
                            <strong>leave</strong>?</em><br/>
<strong>Indirect:</strong> Do you know what time the train <strong>leaves</strong>? (The "-s"
                        moves to the verb).
                    </li>
<li><strong>Direct:</strong> <em>Why <strong>did</strong> he <strong>leave</strong>?</em><br/>
<strong>Indirect:</strong> I was wondering why he <strong>left</strong>. (The verb changes to
                        the past tense).
                    </li>
</ul><h5>Yes/No Questions</h5><p>For direct questions that can be answered with "yes" or "no", we must add <strong>"if"</strong> or
                    <strong>"whether"</strong> in the indirect question.
                </p><ul>
<li><strong>Direct:</strong> <em>Is she ready?</em><br/>
<strong>Indirect:</strong> Do you know <strong>if</strong> she is ready?
                    </li>
<li><strong>Direct:</strong> <em>Do they speak English?</em><br/>
<strong>Indirect:</strong> I''d like to know <strong>if</strong> they speak English.
                    </li>
</ul>', '{"games": [{"title": "Practice 1: Direct to Indirect", "instruction": "Choose the correct polite indirect form.", "type": "multiple_choice", "questions": [{"q": "Where is the station? \u2192 Do you know ______?", "options": ["where the station is", "where is the station"], "a": "where the station is", "hint": "In indirect questions, the word order is like a statement."}, {"q": "What time does it start? \u2192 Can you tell me ______?", "options": ["what time it starts", "what time does it start"], "a": "what time it starts", "hint": "No ''does'' in the indirect part."}, {"q": "Is he coming? \u2192 I wonder ______.", "options": ["if he is coming", "if is he coming"], "a": "if he is coming", "hint": "Use ''if'' or ''whether'' for yes/no questions."}, {"q": "Where can I buy a ticket? \u2192 Do you have any idea ______?", "options": ["where I can buy a ticket", "where can I buy a ticket"], "a": "where I can buy a ticket", "hint": "Subject before verb."}, {"q": "Why is she late? \u2192 Do you know ______?", "options": ["why she is late", "why is she late"], "a": "why she is late", "hint": "Normal statement order."}]}, {"title": "Practice 2: Building Polite Questions", "instruction": "Rewrite the questions politely.", "type": "fill_in", "questions": [{"q": "What is his name? (Could you tell me...)", "a": "Could you tell me what his name is?"}, {"q": "Where does she live? (Do you know...)", "a": "Do you know where she lives?"}, {"q": "Is the bank open? (I wonder...)", "a": "I wonder if the bank is open"}, {"q": "What time is it? (Can you tell me...)", "a": "Can you tell me what time it is?"}, {"q": "Why did they leave? (Do you have any idea...)", "a": "Do you have any idea why they left?"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (7, 'A2', 'Adverbs of Time', 'When actions happen in sentences', 'bi-alarm-fill', '<h3>Theory</h3><p>Adverbs of time tell us <strong>when</strong> an action happens. The most important rule to learn is
                    their position in the sentence, which depends on the type of adverb.</p><h5>Group 1: Adverbs of Specific Time</h5><p>These adverbs tell us a specific point in time. Their most common and natural position is at the
                    <strong>end</strong> of the sentence.
                </p><ul>
<li><strong>Examples of adverbs:</strong> <em>today, yesterday, tomorrow, now, then, last week, next
                            year.</em></li>
<li><em>I will call you <strong>tomorrow</strong>.</em></li>
<li><em>She went to the cinema <strong>last night</strong>.</em></li>
<li><em>We are busy <strong>now</strong>.</em></li>
</ul><p class="feedback-hint"><em>Note: You can sometimes put these adverbs at the beginning for emphasis
                        (e.g., "<strong>Tomorrow</strong>, I will call you."), but the end position is more common.</em>
</p><h5>Group 2: Adverbs of Frequency (Review)</h5><p>These adverbs tell us <strong>how often</strong> an action happens. Their position depends on the
                    verb.</p><ul>
<li><strong>Rule:</strong> They go <strong>before</strong> the main verb, but <strong>after</strong>
                        the verb "to be" (am, is, are).</li>
<li><em>He <strong>often</strong> <u>plays</u> soccer.</em> (Before the main verb "play").</li>
<li><em>She <u>is</u> <strong>always</strong> happy.</em> (After the verb "to be").</li>
</ul><h5>Group 3: Adverbs like yet and already (Review)</h5><p>These are often used with the Present Perfect.</p><ul>
<li><strong>already:</strong> Used in affirmative sentences, it goes between "have/has" and the past
                        participle.
                        <br/><em>I have <strong>already</strong> finished.</em>
</li>
<li><strong>yet:</strong> Used in negative sentences and questions, it goes at the
                        <strong>end</strong> of the sentence.
                        <br/><em>I haven''t finished <strong>yet</strong>.</em>
</li>
</ul>', '{"games": [{"title": "Practice 1: Choosing the Right Adverb", "instruction": "Select the adverb that best fits the sentence.", "type": "multiple_choice", "questions": [{"q": "I have ______ finished my homework.", "options": ["already", "yet"], "a": "already", "hint": "Used for something finished sooner than expected."}, {"q": "He hasn''t arrived ______.", "options": ["already", "yet"], "a": "yet", "hint": "Used at the end of negative sentences."}, {"q": "I''ll see you ______.", "options": ["later", "yesterday"], "a": "later", "hint": "Refers to the future."}, {"q": "She ______ goes to the gym.", "options": ["still", "yet"], "a": "still", "hint": "Suggests a continuing action."}, {"q": "We met ______.", "options": ["recently", "soon"], "a": "recently", "hint": "Refers to a short time ago."}]}, {"title": "Practice 2: Correct Word Order", "instruction": "Place the adverb in the correct position.", "type": "unscramble", "questions": [{"q": "soon / be / home / will / I", "a": "I will be home soon"}, {"q": "already / he / left / has", "a": "He has already left"}, {"q": "still / working / are / they", "a": "They are still working"}, {"q": "met / we / recently / them", "a": "We recently met them"}, {"q": "later / call / will / you / I", "a": "I will call you later"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (8, 'A2', 'Future: be going to vs. will', 'Plans vs spontaneous decisions', 'bi-calendar3', '<h3>Theory</h3><p>While both "be going to" and "will" talk about the future, they are not interchangeable. The choice
                    depends on the context and the speaker''s intention.</p><h5>"Be going to": The Future of Plans and Evidence 🗓️</h5><p>We use this for future events that have some connection to the present.</p><ol>
<li><strong>Plans or Intentions:</strong> For decisions made <em>before</em> the moment of speaking.
                        It''s something you have already decided to do.
                        <br/><em>Ej: I <strong>am going to start</strong> my new job next week. (I accepted the job last
                            week).</em>
<br/><em>Ej: We <strong>are going to move</strong> to a new city. (We have already decided
                            this).</em>
</li>
<li><strong>Predictions with Evidence:</strong> When you can see, hear, or feel something
                        <em>now</em> that makes you sure about a future event.
                        <br/><em>Ej: Look at those dark clouds! It <strong>is going to rain</strong>. (The clouds are my
                            evidence).</em>
</li>
</ol><h5>"Will": The Future of Spontaneity and Opinion ⚡</h5><p>We use this for future events that are decided at the moment of speaking or are based on belief.</p><ol>
<li><strong>Spontaneous Decisions:</strong> Decisions made <em>at</em> the moment of speaking.
                        <br/><em>(The phone rings) -&gt; "I''<strong>ll get</strong> it!" (I just decided this now).</em>
</li>
<li><strong>Predictions based on Opinion/Belief:</strong> When you think or believe something will
                        happen. Often used with "I think...", "probably", "maybe".
                        <br/><em>Ej: I think she <strong>will be</strong> a great doctor someday. (This is my opinion,
                            not a plan).</em>
</li>
<li><strong>Offers and Promises:</strong>
<br/><em>Offer: That bag looks heavy. I''<strong>ll help</strong> you.</em>
<br/><em>Promise: I promise I <strong>won''t tell</strong> anyone your secret.</em>
</li>
</ol>', '{"games": [{"title": "Practice 1: Plan vs. Spontaneous", "instruction": "Will (spontaneous/prediction) or Be going to (plan/evidence).", "type": "multiple_choice", "questions": [{"q": "Look at those clouds! It ______ rain.", "options": ["is going to", "will"], "a": "is going to", "hint": "There is evidence (clouds)."}, {"q": "I''m hungry. I think I ______ make a sandwich.", "options": ["will", "am going to"], "a": "will", "hint": "A spontaneous decision."}, {"q": "We ______ fly to New York next month.", "options": ["are going to", "will"], "a": "are going to", "hint": "A pre-existing plan."}, {"q": "Wait! I ______ help you with those bags.", "options": ["will", "am going to"], "a": "will", "hint": "A spontaneous offer."}, {"q": "In the future, people ______ live on Mars.", "options": ["will", "are going to"], "a": "will", "hint": "A general prediction."}]}, {"title": "Practice 2: Future Forms", "instruction": "Complete the sentences.", "type": "fill_in", "questions": [{"q": "I ______ (visit) my grandmother this weekend. (Plan)", "a": "am going to visit"}, {"q": "Don''t worry, I ______ (not/tell) anyone. (Promise)", "a": "won''t tell"}, {"q": "They ______ (buy) a new car soon. (Intention)", "a": "are going to buy"}, {"q": "I think it ______ (be) a hot summer. (Prediction)", "a": "will be"}, {"q": "We ______ (watch) a movie tonight. (Plan)", "a": "are going to watch"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (9, 'A2', 'Modal Verbs for Necessity', 'Must, have to, and their negatives', 'bi-exclamation-triangle-fill', '<h3>Theory</h3><p>We use modal verbs of necessity to talk about obligations (things we need to do) and prohibitions
                    (things we are not allowed to do). The main verbs for this are <strong>must</strong> and
                    <strong>have to</strong>.
                </p><h5>Strong Obligation: must vs have to</h5><p>Both express a strong need to do something, but there is a subtle difference:</p><ul>
<li><strong>must:</strong> Is often used for a strong, personal obligation or a very formal/written
                        rule.
                        <br/><em>Personal: I <strong>must</strong> call my mother tonight.</em> (I feel it''s very
                        important).
                        <br/><em>Formal Rule: All visitors <strong>must</strong> sign in at the reception.</em>
</li>
<li><strong>have to:</strong> Is more common for external obligations, like a rule from a job or
                        school.
                        <br/><em>External Rule: I <strong>have to</strong> work on Saturdays. (It''s my job''s rule).</em>
<br/>Remember that "have to" changes for he/she/it: <em>She <strong>has to</strong> wear a
                            uniform.</em>
</li>
</ul><h5>The Critical Difference: mustn''t vs don''t have to</h5><p>In the negative, their meanings are completely different and this is a very important rule to learn.
                </p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Expression</th>
<th>Meaning</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>mustn''t</strong> (must not)</td>
<td><strong>Prohibition 🚫</strong> (It is important NOT to do it. It is forbidden.)</td>
<td><em>You <strong>mustn''t</strong> smoke in the hospital.</em></td>
</tr>
<tr>
<td><strong>don''t have to</strong></td>
<td><strong>No Obligation ✅</strong> (It is not necessary. You can do it if you want, but
                                it''s not required.)</td>
<td><em>It''s a holiday. We <strong>don''t have to</strong> go to school.</em></td>
</tr>
</tbody>
</table></div>', '{"games": [{"title": "Practice 1: Must vs. Have to", "instruction": "Choose the correct modal of necessity.", "type": "multiple_choice", "questions": [{"q": "You ______ wear a seatbelt when driving.", "options": ["must", "mustn''t"], "a": "must", "hint": "It''s an obligation."}, {"q": "I ______ wake up early tomorrow for my flight.", "options": ["have to", "has to"], "a": "have to", "hint": "I/you/we/they use ''have to''."}, {"q": "She ______ finish the report by Friday.", "options": ["has to", "have to"], "a": "has to", "hint": "He/she/it uses ''has to''."}, {"q": "You ______ use your phone in the library.", "options": ["mustn''t", "must"], "a": "mustn''t", "hint": "It''s prohibited."}, {"q": "Do you ______ work on weekends?", "options": ["have to", "must"], "a": "have to", "hint": "Questions usually use ''have to''."}]}, {"title": "Practice 2: Negative Necessity", "instruction": "Complete using ''don''t have to'' (not necessary) or ''mustn''t'' (prohibited).", "type": "fill_in", "questions": [{"q": "You ______ (smoke) in the hospital.", "a": "mustn''t"}, {"q": "You ______ (wash) the dishes; the machine is running.", "a": "don''t have to"}, {"q": "He ______ (pay) for the tickets; they are free.", "a": "doesn''t have to"}, {"q": "You ______ (shout); the baby is sleeping.", "a": "mustn''t"}, {"q": "We ______ (run); we have plenty of time.", "a": "don''t have to"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (10, 'A2', 'Modal Verbs for Requests', 'Polite requests with modals', 'bi-hand-thumbs-up-fill', '<h3>Theory</h3><p>We use modal verbs to make polite requests. The choice of modal verb depends on the level of
                    formality and politeness you want to express.</p><h5>From Most Polite to Least Polite</h5><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Modal Verb</th>
<th>Structure</th>
<th>Level of Politeness</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Could</strong></td>
<td>Could you + verb...?</td>
<td>Very Polite</td>
<td><em>Could you help me with this?</em></td>
</tr>
<tr>
<td><strong>Would</strong></td>
<td>Would you + verb...?</td>
<td>Polite</td>
<td><em>Would you open the window?</em></td>
</tr>
<tr>
<td><strong>Can</strong></td>
<td>Can you + verb...?</td>
<td>Informal</td>
<td><em>Can you pass the salt?</em></td>
</tr>
<tr>
<td><strong>Will</strong></td>
<td>Will you + verb...?</td>
<td>Direct/Casual</td>
<td><em>Will you be quiet?</em></td>
</tr>
</tbody>
</table></div><h5>Adding "please" for Extra Politeness</h5><p>You can make any request more polite by adding "please" at the beginning or end.</p><ul>
<li><em>Could you please help me?</em></li>
<li><em>Can you close the door, please?</em></li>
</ul>', '{"games": [{"title": "Practice 1: Polite Levels", "instruction": "Choose the most appropriate modal for the situation.", "type": "multiple_choice", "questions": [{"q": "______ you pass me the salt, please?", "options": ["Could", "Must"], "a": "Could", "hint": "Polite request."}, {"q": "______ I borrow your pen for a second?", "options": ["Can", "Have to"], "a": "Can", "hint": "Informal permission."}, {"q": "______ you mind closing the window?", "options": ["Would", "Should"], "a": "Would", "hint": "''Would you mind'' is very polite."}, {"q": "______ I turn on the radio?", "options": ["May", "Must"], "a": "May", "hint": "Formal permission."}, {"q": "______ you help me with this heavy box?", "options": ["Will", "Should"], "a": "Will", "hint": "Direct request for help."}]}, {"title": "Practice 2: Rewriting Requests", "instruction": "Make these requests more polite.", "type": "fill_in", "questions": [{"q": "Give me some water. (Could...)", "a": "Could you give me some water?"}, {"q": "I want to leave. (May...)", "a": "May I leave?"}, {"q": "Open the door. (Would you mind...)", "a": "Would you mind opening the door?"}, {"q": "Tell me the time. (Can...)", "a": "Can you tell me the time?"}, {"q": "Help me. (Would you please...)", "a": "Would you please help me?"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (11, 'A2', 'Phrasal Verbs - Separable and Non-Separable', 'Verb-particle combinations and their rules', 'bi-arrows-angle-expand', '<h3>Theory</h3><p>Phrasal verbs are verbs combined with particles (prepositions or adverbs) that create new meanings.
                    The key to using them correctly is knowing if they are <strong>separable</strong> or
                    <strong>non-separable</strong>.
                </p><h5>Separable Phrasal Verbs</h5><p>With separable phrasal verbs, the object can come <strong>between</strong> the verb and the particle,
                    or <strong>after</strong> the particle. When the object is a <strong>pronoun</strong> (me, you, him,
                    her, it, us, them), it <strong>must</strong> go between the verb and particle.</p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Phrasal Verb</th>
<th>With Noun Object</th>
<th>With Pronoun Object</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>turn on</strong></td>
<td>Turn on the light<br/>Turn the light on</td>
<td>Turn <strong>it</strong> on</td>
<td>activar</td>
</tr>
<tr>
<td><strong>pick up</strong></td>
<td>Pick up your clothes<br/>Pick your clothes up</td>
<td>Pick <strong>them</strong> up</td>
<td>recoger</td>
</tr>
<tr>
<td><strong>give back</strong></td>
<td>Give back the money<br/>Give the money back</td>
<td>Give <strong>it</strong> back</td>
<td>devolver</td>
</tr>
</tbody>
</table></div><h5>Non-Separable Phrasal Verbs</h5><p>With non-separable phrasal verbs, the object <strong>must always</strong> come after the particle.
                    The object cannot separate the verb from its particle.</p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Phrasal Verb</th>
<th>Correct</th>
<th>Incorrect</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>look for</strong></td>
<td>Look for your keys</td>
<td><del>Look your keys for</del></td>
<td>buscar</td>
</tr>
<tr>
<td><strong>get on</strong></td>
<td>Get on the bus</td>
<td><del>Get the bus on</del></td>
<td>subir a</td>
</tr>
<tr>
<td><strong>run into</strong></td>
<td>Run into an old friend</td>
<td><del>Run an old friend into</del></td>
<td>encontrarse con</td>
</tr>
</tbody>
</table></div><h5>How to Know Which is Which?</h5><ul>
<li><strong>Transitive</strong> phrasal verbs (with objects) can be separable or non-separable</li>
<li><strong>Intransitive</strong> phrasal verbs (no objects) are always non-separable</li>
<li>Three-word phrasal verbs are always non-separable</li>
<li>When in doubt, put the object after the particle</li>
</ul>', '{"games": [{"title": "Practice 1: Meaning Match", "instruction": "Choose the phrasal verb that matches the meaning.", "type": "multiple_choice", "questions": [{"q": "To start a journey: ______.", "options": ["set off", "get on"], "a": "set off", "hint": "Common for travel."}, {"q": "To explode: ______.", "options": ["go off", "take off"], "a": "go off", "hint": "Can refer to bombs or alarms."}, {"q": "To search for information: ______.", "options": ["look up", "look for"], "a": "look up", "hint": "Like in a dictionary."}, {"q": "To return something: ______.", "options": ["give back", "put back"], "a": "give back", "hint": "Returning to the owner."}, {"q": "To cancel an event: ______.", "options": ["call off", "put off"], "a": "call off", "hint": "Opposite of ''on''."}]}, {"title": "Practice 2: Fill in the Phrasal Verb", "instruction": "Use ''get up'', ''turn on'', ''take off'', ''put on'', or ''look after''.", "type": "fill_in", "questions": [{"q": "I usually ______ at 7 AM every morning.", "a": "get up"}, {"q": "It''s dark. Please ______ the lights.", "a": "turn on"}, {"q": "It''s cold. ______ your coat.", "a": "Put on"}, {"q": "The plane is ready to ______.", "a": "take off"}, {"q": "Can you ______ my cat while I''m away?", "a": "look after"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (12, 'A2', 'Quantifiers', 'Some, any, much, many, a lot of', 'bi-pie-chart-fill', '<h3>Theory</h3><p><strong>Collocations</strong> are words that naturally go together in English. Native speakers use
                    these combinations automatically, and learning them will make your English sound more natural and
                    fluent.</p><h5>Common Types of Collocations</h5><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Type</th>
<th>Pattern</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Verb + Noun</strong></td>
<td>do/make/take + noun</td>
<td>do homework, make a mistake, take a shower</td>
</tr>
<tr>
<td><strong>Adjective + Noun</strong></td>
<td>adjective + noun</td>
<td>heavy rain, strong coffee, quick shower</td>
</tr>
<tr>
<td><strong>Adverb + Adjective</strong></td>
<td>adverb + adjective</td>
<td>deeply asleep, highly unlikely, completely wrong</td>
</tr>
<tr>
<td><strong>Verb + Adverb</strong></td>
<td>verb + adverb</td>
<td>work hard, drive carefully, speak softly</td>
</tr>
</tbody>
</table></div><h5>The DO vs. MAKE Challenge</h5><p>This is one of the most common collocation challenges for English learners.</p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>DO</th>
<th>MAKE</th>
</tr>
</thead>
<tbody>
<tr>
<td>do homework</td>
<td>make a decision</td>
</tr>
<tr>
<td>do exercise</td>
<td>make a mistake</td>
</tr>
<tr>
<td>do your best</td>
<td>make progress</td>
</tr>
<tr>
<td>do business</td>
<td>make money</td>
</tr>
<tr>
<td>do the dishes</td>
<td>make a plan</td>
</tr>
</tbody>
</table></div><h5>Why Collocations Matter</h5><ul>
<li>They make your English sound more natural</li>
<li>They help you avoid direct translation from your native language</li>
<li>They improve your fluency and comprehension</li>
<li>Native speakers use them automatically</li>
</ul>', '{"games": [{"title": "Practice 1: Much, Many, A lot of", "instruction": "Select the correct quantifier.", "type": "multiple_choice", "questions": [{"q": "How ______ water do you drink?", "options": ["much", "many"], "a": "much", "hint": "Water is uncountable."}, {"q": "I have ______ friends at school.", "options": ["many", "much"], "a": "many", "hint": "Friends are countable plural."}, {"q": "There isn''t ______ sugar in my tea.", "options": ["much", "many"], "a": "much", "hint": "Sugar is uncountable."}, {"q": "She bought ______ clothes yesterday.", "options": ["a lot of", "much"], "a": "a lot of", "hint": "Used for both count and uncount."}, {"q": "How ______ apples are on the table?", "options": ["many", "much"], "a": "many", "hint": "Apples are countable."}]}, {"title": "Practice 2: Some and Any", "instruction": "Complete the sentences.", "type": "fill_in", "questions": [{"q": "I have ______ news for you.", "a": "some"}, {"q": "Do you have ______ questions?", "a": "any"}, {"q": "There isn''t ______ milk in the fridge.", "a": "any"}, {"q": "We need ______ more time.", "a": "some"}, {"q": "Is there ______ bread left?", "a": "any"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (13, 'A2', 'Relative Clauses (who, which, that)', 'Connecting and describing with relative pronouns', 'bi-link-45deg', '<h3>Theory</h3><p>The <strong>imperative</strong> form is used to give instructions, commands, warnings, advice, or
                    make requests. It''s one of the simplest verb forms in English.</p><h5>Positive Imperative (Do something!)</h5><p>To form the positive imperative, we use the <strong>base form of the verb</strong> (the infinitive
                    without "to").</p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Structure</th>
<th>Examples</th>
<th>Use</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Verb + ...</strong></td>
<td>Open the door.<br/>Sit down.<br/>Listen carefully.</td>
<td>Commands</td>
</tr>
<tr>
<td><strong>Please + verb...</strong><br/><strong>Verb + ... + please</strong></td>
<td>Please help me.<br/>Close the window, please.</td>
<td>Polite requests</td>
</tr>
<tr>
<td><strong>Let''s + verb...</strong></td>
<td>Let''s go to the cinema.<br/>Let''s start the meeting.</td>
<td>Suggestions</td>
</tr>
</tbody>
</table></div><h5>Negative Imperative (Don''t do something!)</h5><p>To form the negative imperative, we use <strong>Don''t + base form of the verb</strong>.</p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Structure</th>
<th>Examples</th>
<th>Use</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Don''t + verb...</strong></td>
<td>Don''t touch that!<br/>Don''t be late.</td>
<td>Prohibitions/Warnings</td>
</tr>
<tr>
<td><strong>Please don''t + verb...</strong></td>
<td>Please don''t smoke here.<br/>Please don''t tell anyone.</td>
<td>Polite prohibitions</td>
</tr>
<tr>
<td><strong>Let''s not + verb...</strong></td>
<td>Let''s not argue.<br/>Let''s not go there.</td>
<td>Negative suggestions</td>
</tr>
</tbody>
</table></div><h5>Special Case: Verb "to be"</h5><p>With the verb "to be", we don''t use "am/is/are" in the imperative. We use <strong>be</strong> for
                    positive and <strong>don''t be</strong> for negative.</p><ul>
<li><strong>Positive:</strong> Be careful! Be quiet! Be on time!</li>
<li><strong>Negative:</strong> Don''t be silly! Don''t be late! Don''t be afraid!</li>
</ul>', '{"games": [{"title": "Practice 1: Who, Which, That", "instruction": "Choose the relative pronoun.", "type": "multiple_choice", "questions": [{"q": "The man ______ lives next door is a doctor.", "options": ["who", "which"], "a": "who", "hint": "Use ''who'' for people."}, {"q": "This is the car ______ I want to buy.", "options": ["which", "who"], "a": "which", "hint": "Use ''which'' for things."}, {"q": "The house ______ has the red door is mine.", "options": ["that", "who"], "a": "that", "hint": "''That'' can be used for things too."}, {"q": "The students ______ failed the exam must study more.", "options": ["who", "which"], "a": "who", "hint": "People."}, {"q": "A laptop is a computer ______ you can carry.", "options": ["which", "who"], "a": "which", "hint": "Objects."}]}, {"title": "Practice 2: Combining Sentences", "instruction": "Join the sentences using a relative pronoun.", "type": "fill_in", "questions": [{"q": "I have a friend. She lives in New York. (I have a friend...)", "a": "I have a friend who lives in New York"}, {"q": "He lost the watch. I gave it to him. (He lost the watch...)", "a": "He lost the watch that I gave to him"}, {"q": "The girl is my sister. She is wearing the hat. (The girl...)", "a": "The girl who is wearing the hat is my sister"}, {"q": "This is the book. It won the prize. (This is the book...)", "a": "This is the book which won the prize"}, {"q": "I know a place. We can eat there. (I know a place...)", "a": "I know a place where we can eat"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (14, 'A2', 'Gerunds vs. Infinitives', 'When to use -ing vs to + verb', 'bi-infinity', '<h3>Theory</h3><p>We use different structures to express <strong>purpose</strong> - to say <strong>why</strong> we do
                    something. These structures answer the question "Why?" or "For what purpose?"</p><h5>Main Structures for Expressing Purpose</h5><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Structure</th>
<th>Usage</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>to + infinitive</strong></td>
<td>Most common and simple</td>
<td>I''m studying <strong>to improve</strong> my English.<br/>She went to the store <strong>to
                                    buy</strong> milk.</td>
</tr>
<tr>
<td><strong>in order to + infinitive</strong></td>
<td>More formal, emphasizes purpose</td>
<td>He works hard <strong>in order to save</strong> money.<br/>We left early <strong>in order
                                    to avoid</strong> traffic.</td>
</tr>
<tr>
<td><strong>so that + subject + verb</strong></td>
<td>Used when there''s a different subject</td>
<td>I''ll call you <strong>so that you know</strong> I''m safe.<br/>She studies hard <strong>so
                                    that she can pass</strong> the exam.</td>
</tr>
<tr>
<td><strong>for + noun</strong></td>
<td>Used with nouns, not verbs</td>
<td>This tool is <strong>for cutting</strong> wood.<br/>I went to the pharmacy <strong>for
                                    medicine</strong>.</td>
</tr>
<tr>
<td><strong>for + -ing</strong></td>
<td>Describes the purpose of objects</td>
<td>This machine is <strong>for making</strong> coffee.<br/>A thermometer is <strong>for
                                    measuring</strong> temperature.</td>
</tr>
</tbody>
</table></div><h5>Negative Purpose</h5><p>To express negative purpose (to avoid something), we use:</p><ul>
<li><strong>so as not to + infinitive</strong></li>
<li><strong>in order not to + infinitive</strong></li>
</ul><p><em>I''m speaking quietly <strong>so as not to wake</strong> the baby.</em><br/>
<em>He double-checked his work <strong>in order not to make</strong> mistakes.</em>
</p><h5>Common Mistakes to Avoid</h5><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Incorrect</th>
<th>Correct</th>
<th>Reason</th>
</tr>
</thead>
<tbody>
<tr>
<td><del>I came here for study English.</del></td>
<td>I came here <strong>to study</strong> English.</td>
<td>Use "to + infinitive" for actions</td>
</tr>
<tr>
<td><del>This is for to open bottles.</del></td>
<td>This is <strong>for opening</strong> bottles.</td>
<td>Use "for + -ing" for objects'' purpose</td>
</tr>
<tr>
<td><del>I study hard for I can pass.</del></td>
<td>I study hard <strong>so that I can pass</strong>.</td>
<td>Use "so that" with different subjects</td>
</tr>
</tbody>
</table></div>', '{"games": [{"title": "Practice 1: Choosing the Form", "instruction": "Choose the correct verb form after the main verb.", "type": "multiple_choice", "questions": [{"q": "I enjoy ______ (listen) to music.", "options": ["listening", "to listen"], "a": "listening", "hint": "''Enjoy'' is followed by a gerund."}, {"q": "They decided ______ (go) to the cinema.", "options": ["to go", "going"], "a": "to go", "hint": "''Decide'' is followed by an infinitive."}, {"q": "She promised ______ (help) me.", "options": ["to help", "helping"], "a": "to help", "hint": "''Promise'' + to + verb."}, {"q": "I hate ______ (wake up) early.", "options": ["waking up", "to wake up"], "a": "waking up", "hint": "Verbs of preference often use gerunds."}, {"q": "He forgot ______ (buy) bread.", "options": ["to buy", "buying"], "a": "to buy", "hint": "Forgetting an action to do."}]}, {"title": "Practice 2: Filling the gaps", "instruction": "Use the gerund (-ing) or infinitive (to + verb).", "type": "fill_in", "questions": [{"q": "I want ______ (be) a vet.", "a": "to be"}, {"q": "Stop ______ (make) that noise!", "a": "making"}, {"q": "I''d love ______ (visit) Italy.", "a": "to visit"}, {"q": "He keeps ______ (talk) about his dog.", "a": "talking"}, {"q": "Don''t forget ______ (lock) the door.", "a": "to lock"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (15, 'A2', 'Zero Conditional', 'Universal truths and scientific facts', 'bi-journal-check', '<h3>Theory</h3><p>We use the <strong>Imperative</strong> to give orders or advice, and the <strong>Infinitive</strong>
                    to say WHY we do something (purpose).</p><h5>1. The Imperative (Orders &amp; Instructions)</h5><p>We use the **base verb** without a subject (no "you") to tell someone to do something.</p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Type</th>
<th>Structure</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Positive</strong> (+)</td>
<td><strong>Verb</strong> + object</td>
<td>
<ul>
<li><em><strong>Open</strong> your books.</em></li>
<li><em><strong>Click</strong> the button.</em></li>
<li><em><strong>Be</strong> quiet.</em></li>
</ul>
</td>
</tr>
<tr>
<td><strong>Negative</strong> (-)</td>
<td><strong>Don''t</strong> + verb</td>
<td>
<ul>
<li><em><strong>Don''t touch</strong> that!</em></li>
<li><em><strong>Don''t be</strong> late.</em></li>
</ul>
</td>
</tr>
</tbody>
</table></div><h5>2. The Infinitive of Purpose (Why?)</h5><p>We use <strong>TO + VERB</strong> to answer the question "Why?".</p><div class="alert alert-info">
<strong>Rule:</strong> Main Action + <strong>to</strong> + Purpose<br/>
                    (Action) "I went to the store" + (Why?) "<strong>to buy</strong> milk."
                </div><ul>
<li><em>She started running <strong>to lose</strong> weight.</em></li>
<li><em>I am studying English <strong>to get</strong> a better job.</em></li>
<li><em>Click here <strong>to save</strong> your file.</em></li>
</ul><h5>3. Combining: Imperative + Infinitive</h5><p>We often use them together in instructions:</p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Imperative (Do this)</th>
<th>Infinitive (Purpose/Result)</th>
</tr>
</thead>
<tbody>
<tr>
<td><em><strong>Press</strong> the button</em></td>
<td><em>...<strong>to turn on</strong> the TV.</em> (Purpose)</td>
</tr>
<tr>
<td><em><strong>Go</strong> this way</em></td>
<td><em>...<strong>to find</strong> the exit.</em> (Purpose)</td>
</tr>
<tr>
<td><em><strong>Study</strong> hard</em></td>
<td><em>...<strong>to pass</strong> the exam.</em> (Purpose)</td>
</tr>
</tbody>
</table></div><div class="alert alert-warning">
<strong>Common Mistake:</strong><br/>
                    ❌ <em>I went for buy bread.</em> (Do not use "for" + verb)<br/>
                    ✅ <em>I went <strong>to buy</strong> bread.</em> (Use "to" + verb)
                </div>', '{"games": [{"title": "Practice 1: Causes and Effects", "instruction": "Match the cause to its logical effect (Zero Conditional).", "type": "multiple_choice", "questions": [{"q": "If you heat ice, it ______.", "options": ["melts", "melted"], "a": "melts", "hint": "Zero conditional is used for universal truths (Present Simple)."}, {"q": "If it rains, the grass ______ wet.", "options": ["gets", "is getting"], "a": "gets", "hint": "Result in simple present."}, {"q": "If you don''t eat, you ______ hungry.", "options": ["get", "got"], "a": "get", "hint": "A general fact."}, {"q": "If you touch a fire, you ______ burned.", "options": ["get", "gets"], "a": "get", "hint": "Result of a general action."}, {"q": "If babies are hungry, they ______.", "options": ["cry", "cried"], "a": "cry", "hint": "A natural reaction."}]}, {"title": "Practice 2: Correcting the Facts", "instruction": "Complete the Zero Conditional sentences.", "type": "fill_in", "questions": [{"q": "If you mix red and white, you ______ pink.", "a": "get"}, {"q": "Water boils if it ______ 100 degrees Celsius.", "a": "reaches"}, {"q": "If you ______ (not/water) plants, they die.", "a": "don''t water"}, {"q": "Wood floats if you ______ it in water.", "a": "put"}, {"q": "If I ______ (stay) up late, I feel tired the next day.", "a": "stay"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (16, 'A2', 'First Conditional', 'Real possible future situations', 'bi-sun-fill', '<h3>Theory</h3><p>The <strong>First Conditional</strong> is used to talk about <strong>real and possible
                        situations</strong> in the future. It describes what will happen if a certain condition is met.
                </p><h5>Structure: If + Present Simple, + will + base verb</h5><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Part</th>
<th>Structure</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Condition</strong></td>
<td>If + Present Simple</td>
<td><em>If it rains,</em><br/><em>If I have time,</em><br/><em>If you study hard,</em></td>
</tr>
<tr>
<td><strong>Result</strong></td>
<td>will + base verb</td>
<td><em>I will stay home.</em><br/><em>I will call you.</em><br/><em>you will pass the
                                    exam.</em></td>
</tr>
</tbody>
</table></div><h5>Complete Examples</h5><ul>
<li><em><strong>If it rains tomorrow,</strong> we <strong>will cancel</strong> the picnic.</em></li>
<li><em><strong>If I finish</strong> work early, <strong>I''ll go</strong> to the gym.</em></li>
<li><em><strong>If you don''t hurry,</strong> you <strong>will miss</strong> the bus.</em></li>
<li><em><strong>If he studies</strong> every day, he <strong>will improve</strong> his English.</em>
</li>
</ul><h5>Important Notes</h5><ul>
<li>The condition is <strong>possible and real</strong> (not imaginary)</li>
<li>We can reverse the order: <em>I will call you <strong>if</strong> I have time.</em></li>
<li>Use a <strong>comma</strong> when the condition comes first</li>
<li>No comma when the result comes first</li>
</ul>', '{"games": [{"title": "Practice 1: Future Possibilities", "instruction": "If + Present Simple, will + verb.", "type": "multiple_choice", "questions": [{"q": "If it ______ (rain) tomorrow, we won''t go out.", "options": ["rains", "will rain"], "a": "rains", "hint": "The ''if'' clause uses present simple."}, {"q": "If I ______ (study) hard, I will pass the exam.", "options": ["study", "will study"], "a": "study", "hint": "''If'' clause is present."}, {"q": "She ______ (be) happy if she wins the prize.", "options": ["will be", "is"], "a": "will be", "hint": "The result clause uses ''will''."}, {"q": "If you ______ (not/hurry), we will be late.", "options": ["don''t hurry", "won''t hurry"], "a": "don''t hurry", "hint": "Negative present simple."}, {"q": "I ______ (call) you if I arrive early.", "options": ["will call", "call"], "a": "will call", "hint": "Future result."}]}, {"title": "Practice 2: Predicting Results", "instruction": "Complete the sentences.", "type": "fill_in", "questions": [{"q": "If I see her, I ______ (tell) her the news.", "a": "will tell"}, {"q": "You will get sick if you ______ (not/wear) a coat.", "a": "don''t wear"}, {"q": "Matching: If we leave now, ______ (we / arrive) on time.", "a": "we will arrive"}, {"q": "What ______ (you/do) if it''s sunny tomorrow?", "a": "will you do"}, {"q": "If he ______ (miss) the bus, he will take a taxi.", "a": "misses"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (17, 'A2', 'Dates (Fechas)', 'Writing and saying dates correctly', 'bi-calendar2-week-fill', '<h3>Theory</h3><p>Knowing how to say and write dates in English is essential for daily communication. The format and
                    pronunciation differ from many other languages.</p><h5>Writing Dates</h5><p>There are two main formats for writing dates in English:</p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Format</th>
<th>Example</th>
<th>Used in</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Month/Day/Year</strong></td>
<td>12/25/2024</td>
<td>United States</td>
</tr>
<tr>
<td><strong>Day/Month/Year</strong></td>
<td>25/12/2024</td>
<td>UK, Australia, Europe</td>
</tr>
<tr>
<td><strong>Full Written Format (US)</strong></td>
<td>December 25, 2024</td>
<td>Formal documents</td>
</tr>
<tr>
<td><strong>Full Written Format (UK)</strong></td>
<td>25 December 2024</td>
<td>Formal documents</td>
</tr>
</tbody>
</table></div><h5>Saying Dates Aloud</h5><p>When speaking dates, we use <strong>ordinal numbers</strong> (first, second, third...) for the day,
                    even if we write them as cardinal numbers.</p><ul>
<li><strong>Written:</strong> December 25, 2024<br/>
<strong>Spoken:</strong> "December the twenty-fifth, twenty twenty-four"
                    </li>
<li><strong>Written:</strong> 3/15/2024<br/>
<strong>Spoken:</strong> "March the fifteenth, twenty twenty-four"
                    </li>
<li><strong>Written:</strong> 1/1/2000<br/>
<strong>Spoken:</strong> "January the first, two thousand"
                    </li>
</ul><h5>Ordinal Numbers Reminder</h5><div class="table-responsive"><table class="table table-dark table-striped">
<thead>
<tr>
<th>Cardinal</th>
<th>Ordinal</th>
<th>Abbreviation</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>first</td>
<td>1st</td>
</tr>
<tr>
<td>2</td>
<td>second</td>
<td>2nd</td>
</tr>
<tr>
<td>3</td>
<td>third</td>
<td>3rd</td>
</tr>
<tr>
<td>4</td>
<td>fourth</td>
<td>4th</td>
</tr>
<tr>
<td>21</td>
<td>twenty-first</td>
<td>21st</td>
</tr>
<tr>
<td>22</td>
<td>twenty-second</td>
<td>22nd</td>
</tr>
<tr>
<td>23</td>
<td>twenty-third</td>
<td>23rd</td>
</tr>
<tr>
<td>31</td>
<td>thirty-first</td>
<td>31st</td>
</tr>
</tbody>
</table></div><h5>Asking About Dates</h5><ul>
<li><strong>What''s the date today?</strong> – "It''s March 15th."</li>
<li><strong>When is your birthday?</strong> – "It''s on June 10th."</li>
<li><strong>What year were you born?</strong> – "I was born in 1995."</li>
</ul>', '{"games": [{"title": "Practice 1: Ordinal Numbers", "instruction": "Choose the correct ordinal form for dates.", "type": "multiple_choice", "questions": [{"q": "January ______ (1st).", "options": ["first", "one"], "a": "first", "hint": "Dates use ordinal numbers."}, {"q": "July ______ (4th).", "options": ["fourth", "four"], "a": "fourth", "hint": "the 4th of July."}, {"q": "December ______ (25th).", "options": ["twenty-fifth", "twenty-five"], "a": "twenty-fifth", "hint": "The day of the month."}, {"q": "March ______ (22nd).", "options": ["twenty-second", "twenty-two"], "a": "twenty-second", "hint": "Ordinal for 22."}, {"q": "February ______ (3rd).", "options": ["third", "three"], "a": "third", "hint": "Ordinal for 3."}]}, {"title": "Practice 2: Writing Dates", "instruction": "Type the date as it is spoken (e.g., ''the second of May'' or ''May the second'').", "type": "fill_in", "questions": [{"q": "15/05 (the ______ of May)", "a": "fifteenth"}, {"q": "01/01 (the ______ of January)", "a": "first"}, {"q": "31/10 (the ______ of October)", "a": "thirty-first"}, {"q": "12/12 (the ______ of December)", "a": "twelfth"}, {"q": "02/02 (the ______ of February)", "a": "second"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (18, 'A2', 'Tag Questions (Preguntas Coletilla)', 'Confirmation questions at the end of statements', 'bi-question-circle-fill', '<h3>Theory</h3><p><strong>Tag questions</strong> are short questions we add to the end of statements to confirm
                    information or ask for agreement. They''re very common in spoken English and make conversations more
                    natural and polite.</p><h5>The Golden Rule</h5><p>Tag questions follow a simple pattern: <strong>opposite polarity</strong>. This means:</p><ul>
<li>If the statement is <strong>positive (+)</strong>, the tag is <strong>negative (-)</strong></li>
<li>If the statement is <strong>negative (-)</strong>, the tag is <strong>positive (+)</strong></li>
</ul><h5>Structure</h5><p class="text-center fs-5" style="color: var(--color-texto-principal);"><strong>Statement + auxiliary
                        verb + pronoun?</strong></p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Statement</th>
<th>Tag Question</th>
<th>Complete Sentence</th>
</tr>
</thead>
<tbody>
<tr>
<td>You <strong>are</strong> tired</td>
<td><strong>aren''t you?</strong></td>
<td>You are tired, <strong>aren''t you?</strong></td>
</tr>
<tr>
<td>She <strong>isn''t</strong> here</td>
<td><strong>is she?</strong></td>
<td>She isn''t here, <strong>is she?</strong></td>
</tr>
<tr>
<td>They <strong>can</strong> swim</td>
<td><strong>can''t they?</strong></td>
<td>They can swim, <strong>can''t they?</strong></td>
</tr>
<tr>
<td>He <strong>doesn''t</strong> work</td>
<td><strong>does he?</strong></td>
<td>He doesn''t work, <strong>does he?</strong></td>
</tr>
</tbody>
</table></div><h5>Important Cases</h5><ul>
<li><strong>With "to be":</strong> Use the same verb<br/>
<em>She is a teacher, <strong>isn''t she?</strong></em>
</li>
<li><strong>With modal verbs:</strong> Use the same modal<br/>
<em>You can help, <strong>can''t you?</strong></em>
</li>
<li><strong>With "have/has" (possession):</strong> Use do/does<br/>
<em>She has a car, <strong>doesn''t she?</strong></em>
</li>
<li><strong>With Present/Past Simple:</strong> Use do/does or did<br/>
<em>He works here, <strong>doesn''t he?</strong></em><br/>
<em>They went home, <strong>didn''t they?</strong></em>
</li>
<li><strong>With "I am":</strong> The tag is <strong>aren''t I?</strong> (irregular!)<br/>
<em>I am late, <strong>aren''t I?</strong></em>
</li>
</ul><h5>Intonation Matters!</h5><ul>
<li><strong>Falling intonation ↘:</strong> You''re just confirming something you believe is true<br/>
<em>"It''s cold today, isn''t it?" (I think it''s cold)</em>
</li>
<li><strong>Rising intonation ↗:</strong> You''re genuinely asking and unsure<br/>
<em>"You like pizza, don''t you?" (I''m not sure)</em>
</li>
</ul>', '{"games": [{"title": "Practice 1: Positive to Negative", "instruction": "Add the correct tag question.", "type": "multiple_choice", "questions": [{"q": "You are coming, ______?", "options": ["aren''t you", "don''t you"], "a": "aren''t you", "hint": "Positive ''are'' becomes negative ''aren''t''."}, {"q": "She lives here, ______?", "options": ["doesn''t she", "isn''t she"], "a": "doesn''t she", "hint": "Simple present ''lives'' uses ''doesn''t''."}, {"q": "We have met before, ______?", "options": ["haven''t we", "don''t we"], "a": "haven''t we", "hint": "Present perfect ''have'' becomes ''haven''t''."}, {"q": "He was there, ______?", "options": ["wasn''t he", "didn''t he"], "a": "wasn''t he", "hint": "Past ''was'' becomes ''wasn''t''."}, {"q": "They will stay, ______?", "options": ["won''t they", "don''t they"], "a": "won''t they", "hint": "Future ''will'' becomes ''won''t''."}]}, {"title": "Practice 2: Negative to Positive", "instruction": "Complete the tag question.", "type": "fill_in", "questions": [{"q": "You don''t like coffee, ______?", "a": "do you"}, {"q": "She isn''t coming, ______?", "a": "is she"}, {"q": "We didn''t miss it, ______?", "a": "did we"}, {"q": "They haven''t finished, ______?", "a": "have they"}, {"q": "It won''t rain, ______?", "a": "will it"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (19, 'A2', 'Express Agreement (So do I / Neither do I)', 'Agreeing with positive and negative statements', 'bi-hand-thumbs-up', '<h3>Theory</h3><p>In English, we use special structures to show that we <strong>agree</strong> with someone''s
                    statement.
                    The structure we use depends on whether the original statement is <strong>positive</strong> or
                    <strong>negative</strong>.
                </p><h5>Agreeing with Positive Statements: So + Auxiliary + Subject</h5><p>When someone makes a positive statement and you want to say "me too" or agree, we use
                    <strong>"So + auxiliary verb + subject"</strong>.
                </p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Person A (Positive Statement)</th>
<th>Person B (Agreement)</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td>"I like pizza."</td>
<td><strong>"So do I."</strong></td>
<td>I also like pizza.</td>
</tr>
<tr>
<td>"She is tired."</td>
<td><strong>"So am I."</strong></td>
<td>I am also tired.</td>
</tr>
<tr>
<td>"They can swim."</td>
<td><strong>"So can I."</strong></td>
<td>I can also swim.</td>
</tr>
<tr>
<td>"He has been to Paris."</td>
<td><strong>"So have I."</strong></td>
<td>I have also been to Paris.</td>
</tr>
</tbody>
</table></div><h5>Agreeing with Negative Statements: Neither + Auxiliary + Subject</h5><p>When someone makes a negative statement and you want to agree, we use <strong>"Neither + auxiliary
                        verb + subject"</strong>. (You can also use "Nor" instead of "Neither")</p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Person A (Negative Statement)</th>
<th>Person B (Agreement)</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td>"I don''t like mushrooms."</td>
<td><strong>"Neither do I."</strong></td>
<td>I also don''t like mushrooms.</td>
</tr>
<tr>
<td>"She isn''t ready."</td>
<td><strong>"Neither am I."</strong></td>
<td>I am also not ready.</td>
</tr>
<tr>
<td>"They can''t dance."</td>
<td><strong>"Neither can I."</strong></td>
<td>I also can''t dance.</td>
</tr>
<tr>
<td>"He hasn''t finished."</td>
<td><strong>"Neither have I."</strong></td>
<td>I also haven''t finished.</td>
</tr>
</tbody>
</table></div><h5>Important Rules</h5><ul>
<li><strong>Match the auxiliary verb:</strong> Use the same auxiliary verb (do, does, did, am, is,
                        are, was, were, can, will, have, etc.) from the original statement.</li>
<li><strong>For simple present/past without auxiliary:</strong> Use do, does, or did.<br/>
<em>"I work on Saturdays." → "So do I."</em><br/>
<em>"She went to the party." → "So did I."</em>
</li>
<li><strong>The subject changes:</strong> The subject in the agreement refers to the person
                        agreeing.<br/>
<em>"I like coffee." → "So does <strong>he</strong>." (He also likes coffee)</em>
</li>
<li><strong>Word order is inverted:</strong> The auxiliary comes before the subject (like a
                        question).</li>
</ul><h5>Common Mistakes to Avoid</h5><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Incorrect</th>
<th>Correct</th>
<th>Reason</th>
</tr>
</thead>
<tbody>
<tr>
<td><del>"I like tea." → "Me too."</del></td>
<td>"I like tea." → <strong>"So do I."</strong></td>
<td>"Me too" is informal; use proper structure in formal contexts</td>
</tr>
<tr>
<td><del>"I don''t like it." → "So do I."</del></td>
<td>"I don''t like it." → <strong>"Neither do I."</strong></td>
<td>Use "Neither" for negative statements</td>
</tr>
<tr>
<td><del>"I am happy." → "So do I."</del></td>
<td>"I am happy." → <strong>"So am I."</strong></td>
<td>Match the auxiliary verb (am, not do)</td>
</tr>
<tr>
<td><del>"She can sing." → "So I can."</del></td>
<td>"She can sing." → <strong>"So can I."</strong></td>
<td>Inverted word order: auxiliary before subject</td>
</tr>
</tbody>
</table></div>', '{"games": [{"title": "Practice 1: Positive Agreement (So...I)", "instruction": "Agree with these positive statements.", "type": "multiple_choice", "questions": [{"q": "I am tired. \u2192 ______.", "options": ["So am I", "So do I"], "a": "So am I", "hint": "Match the verb ''to be''."}, {"q": "I like pizza. \u2192 ______.", "options": ["So do I", "So am I"], "a": "So do I", "hint": "Use ''do'' for simple present verbs."}, {"q": "I have been to London. \u2192 ______.", "options": ["So have I", "So do I"], "a": "So have I", "hint": "Match the auxiliary ''have''."}, {"q": "I can swim. \u2192 ______.", "options": ["So can I", "So do I"], "a": "So can I", "hint": "Match the modal ''can''."}, {"q": "I will go. \u2192 ______.", "options": ["So will I", "So am I"], "a": "So will I", "hint": "Match ''will''."}]}, {"title": "Practice 2: Negative Agreement (Neither...I)", "instruction": "Agree with these negative statements.", "type": "fill_in", "questions": [{"q": "I am not hungry. (Neither...)", "a": "Neither am I"}, {"q": "I don''t smoke. (Neither...)", "a": "Neither do I"}, {"q": "I haven''t seen it. (Neither...)", "a": "Neither have I"}, {"q": "I can''t drive. (Neither...)", "a": "Neither can I"}, {"q": "I didn''t go. (Neither...)", "a": "Neither did I"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (20, 'A2', 'Stative Verbs', 'Verbs that describe states, not actions', 'bi-pause-circle-fill', '<h3>Theory</h3><p>In English, verbs can be divided into two main categories based on what they describe:
                    <strong>action verbs</strong> and <strong>stative verbs</strong>. Understanding the difference is
                    crucial because it affects how we use continuous tenses.
                </p><h5>Action Verbs (Dynamic Verbs)</h5><p>Action verbs describe <strong>actions or activities</strong> - things we DO. These verbs describe
                    physical or mental activities that have a clear beginning and end. They can be used in
                    <strong>continuous tenses</strong> (am/is/are + -ing).
                </p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Category</th>
<th>Examples</th>
<th>Continuous Usage</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Physical Actions</strong></td>
<td>run, walk, eat, drink, write, play, work, cook</td>
<td><em>"I <strong>am running</strong> now."</em> ✅</td>
</tr>
<tr>
<td><strong>Communication</strong></td>
<td>talk, speak, say, tell, ask, answer</td>
<td><em>"She <strong>is talking</strong> on the phone."</em> ✅</td>
</tr>
<tr>
<td><strong>Mental Activities</strong></td>
<td>think (= process), learn, study, consider</td>
<td><em>"I <strong>am thinking</strong> about it."</em> ✅</td>
</tr>
</tbody>
</table></div><h5>Stative Verbs (State Verbs)</h5><p>Stative verbs describe <strong>states, conditions, or situations</strong> - things that ARE, not
                    things we DO. They express permanent or long-lasting situations. These verbs are typically
                    <strong>NOT used in continuous tenses</strong>.
                </p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Category</th>
<th>Examples</th>
<th>Incorrect Usage</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Emotions &amp; Feelings</strong></td>
<td>love, hate, like, dislike, prefer, want, need</td>
<td><del>I am loving pizza.</del> ❌<br/><em>Correct: I <strong>love</strong> pizza.</em>
                                ✅</td>
</tr>
<tr>
<td><strong>Mental States</strong></td>
<td>know, believe, understand, remember, forget, think (= opinion)</td>
<td><del>She is knowing the answer.</del> ❌<br/><em>Correct: She <strong>knows</strong>
                                    the answer.</em> ✅</td>
</tr>
<tr>
<td><strong>Possession</strong></td>
<td>have (= possess), own, belong, possess</td>
<td><del>I am having a car.</del> ❌<br/><em>Correct: I <strong>have</strong> a car.</em>
                                ✅</td>
</tr>
<tr>
<td><strong>Senses &amp; Perception</strong></td>
<td>see, hear, smell, taste, feel (= opinion)</td>
<td><del>I am seeing the problem.</del> ❌<br/><em>Correct: I <strong>see</strong> the
                                    problem.</em> ✅</td>
</tr>
<tr>
<td><strong>Measurement &amp; Being</strong></td>
<td>be, seem, appear, cost, weigh, contain, consist</td>
<td><del>It is costing $20.</del> ❌<br/><em>Correct: It <strong>costs</strong> $20.</em>
                                ✅</td>
</tr>
</tbody>
</table></div><h5>Special Cases: Verbs with Two Meanings</h5><p>Some verbs can be <strong>both stative and action verbs</strong>, depending on their meaning in
                    context:</p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Verb</th>
<th>Stative Meaning (No Continuous)</th>
<th>Action Meaning (Continuous OK)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>think</strong></td>
<td><em>I <strong>think</strong> you''re right.</em> (= opinion) ✅</td>
<td><em>I <strong>am thinking</strong> about the problem.</em> (= mental process) ✅</td>
</tr>
<tr>
<td><strong>have</strong></td>
<td><em>She <strong>has</strong> a dog.</em> (= possession) ✅</td>
<td><em>She <strong>is having</strong> breakfast.</em> (= eating) ✅</td>
</tr>
<tr>
<td><strong>see</strong></td>
<td><em>I <strong>see</strong> what you mean.</em> (= understand) ✅</td>
<td><em>I <strong>am seeing</strong> my doctor tomorrow.</em> (= meeting) ✅</td>
</tr>
<tr>
<td><strong>taste</strong></td>
<td><em>The soup <strong>tastes</strong> good.</em> (= has a flavor) ✅</td>
<td><em>The chef <strong>is tasting</strong> the soup.</em> (= testing flavor) ✅</td>
</tr>
<tr>
<td><strong>feel</strong></td>
<td><em>I <strong>feel</strong> happy.</em> (= emotion/state) ✅</td>
<td><em>The doctor <strong>is feeling</strong> my pulse.</em> (= touching) ✅</td>
</tr>
</tbody>
</table></div><h5>Quick Test: Can I Use It in Continuous?</h5><ul>
<li>✅ <strong>Action Verb:</strong> Describes what you DO → Can use continuous (am/is/are +
                        -ing)</li>
<li>❌ <strong>Stative Verb:</strong> Describes what you ARE, HAVE, or FEEL → Usually NO
                        continuous</li>
<li>🤔 <strong>Check the meaning:</strong> Some verbs change! "I have a car" (stative) vs "I''m
                        having fun" (action)</li>
</ul>', '{"games": [{"title": "Practice 1: Action or State?", "instruction": "Choose the correct verb form (Stative verbs usually don''t take -ing).", "type": "multiple_choice", "questions": [{"q": "I ______ (understand) what you mean.", "options": ["understand", "am understanding"], "a": "understand", "hint": "''Understand'' is a stative verb."}, {"q": "She ______ (love) chocolate.", "options": ["loves", "is loving"], "a": "loves", "hint": "''Love'' represents a preference state."}, {"q": "Wait! I ______ (think) about something.", "options": ["am thinking", "think"], "a": "am thinking", "hint": "Here ''think'' is a mental action, not an opinion."}, {"q": "This soup ______ (taste) delicious.", "options": ["tastes", "is tasting"], "a": "tastes", "hint": "Descriptive state."}, {"q": "I ______ (own) this house.", "options": ["own", "am owning"], "a": "own", "hint": "Possession is a state."}]}, {"title": "Practice 2: Correcting Progress", "instruction": "Rewrite the sentence correctly using simple present if it''s a stative verb.", "type": "fill_in", "questions": [{"q": "I am knowing him well. \u2192 I ______ him well.", "a": "know"}, {"q": "She is wanting a coffee. \u2192 She ______ a coffee.", "a": "wants"}, {"q": "They are needing help. \u2192 They ______ help.", "a": "need"}, {"q": "I am believing you. \u2192 I ______ you.", "a": "believe"}, {"q": "This is belonging to her. \u2192 This ______ to her.", "a": "belongs"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (21, 'A2', 'Passive Voice (Simple Forms)', 'Focus on the action, not the doer', 'bi-arrow-left-right', '<h3>Theory</h3><p>The <strong>passive voice</strong> is used when we want to focus on the <strong>action</strong> or
                    the <strong>receiver of the action</strong>, rather than who performs the action. It''s especially
                    useful when the doer is unknown, unimportant, or obvious.</p><h5>Active vs. Passive: The Key Difference</h5><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Voice</th>
<th>Focus</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Active Voice</strong></td>
<td>Focus on <em>who</em> does the action</td>
<td><em>The chef <strong>cooks</strong> the meal.</em></td>
</tr>
<tr>
<td><strong>Passive Voice</strong></td>
<td>Focus on <em>what</em> receives the action</td>
<td><em>The meal <strong>is cooked</strong> (by the chef).</em></td>
</tr>
</tbody>
</table></div><h5>How to Form the Passive Voice</h5><p class="text-center fs-5" style="color: var(--color-texto-principal);"><strong>BE (conjugated) + Past
                        Participle + (by + agent)</strong></p><h5>Simple Present Passive</h5><p>Structure: <strong>am/is/are + Past Participle</strong></p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Active Voice</th>
<th>Passive Voice</th>
</tr>
</thead>
<tbody>
<tr>
<td>People <strong>speak</strong> English here.</td>
<td>English <strong>is spoken</strong> here.</td>
</tr>
<tr>
<td>The company <strong>produces</strong> cars.</td>
<td>Cars <strong>are produced</strong> by the company.</td>
</tr>
<tr>
<td>She <strong>cleans</strong> the room every day.</td>
<td>The room <strong>is cleaned</strong> every day.</td>
</tr>
</tbody>
</table></div><h5>Simple Past Passive</h5><p>Structure: <strong>was/were + Past Participle</strong></p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Active Voice</th>
<th>Passive Voice</th>
</tr>
</thead>
<tbody>
<tr>
<td>Shakespeare <strong>wrote</strong> this play.</td>
<td>This play <strong>was written</strong> by Shakespeare.</td>
</tr>
<tr>
<td>They <strong>built</strong> the bridge in 1990.</td>
<td>The bridge <strong>was built</strong> in 1990.</td>
</tr>
<tr>
<td>Someone <strong>stole</strong> my bike.</td>
<td>My bike <strong>was stolen</strong>.</td>
</tr>
</tbody>
</table></div><h5>When to Use Passive Voice</h5><ul>
<li>✅ <strong>Doer unknown:</strong> <em>My car was stolen.</em></li>
<li>✅ <strong>Doer unimportant:</strong> <em>Letters are delivered every morning.</em></li>
<li>✅ <strong>Doer obvious:</strong> <em>The thief was arrested.</em></li>
<li>✅ <strong>Emphasize action:</strong> <em>The Mona Lisa was painted in 1503.</em></li>
<li>✅ <strong>Formal/scientific writing:</strong> <em>The experiment was conducted carefully.</em>
</li>
</ul><h5>Transformation Steps</h5><ol>
<li>Object becomes subject</li>
<li>Use correct form of "BE"</li>
<li>Add past participle</li>
<li>Optional: Add "by + agent"</li>
</ol>', '{"games": [{"title": "Practice 1: Focus on the Object", "instruction": "Choose the correct passive form.", "type": "multiple_choice", "questions": [{"q": "Wine ______ (make) from grapes.", "options": ["is made", "makes"], "a": "is made", "hint": "Passive: be + past participle."}, {"q": "The house ______ (build) in 1950.", "options": ["was built", "built"], "a": "was built", "hint": "Past passive."}, {"q": "Millions of people ______ (speak) English.", "options": ["speak", "are spoken"], "a": "speak", "hint": "This is ACTIVE voice. Be careful!"}, {"q": "Lunch ______ (serve) at 1 PM.", "options": ["is served", "serves"], "a": "is served", "hint": "Passive: the lunch doesn''t serve itself."}, {"q": "The window ______ (break) by a ball.", "options": ["was broken", "broke"], "a": "was broken", "hint": "Focus on the window."}]}, {"title": "Practice 2: Transforming to Passive", "instruction": "Rewrite the sentences in the passive voice.", "type": "fill_in", "questions": [{"q": "They grow coffee in Brazil. (Coffee...)", "a": "Coffee is grown in Brazil"}, {"q": "He wrote the book. (The book...)", "a": "The book was written by him"}, {"q": "She cleaned the room. (The room...)", "a": "The room was cleaned"}, {"q": "People speak Spanish here. (Spanish...)", "a": "Spanish is spoken here"}, {"q": "Mechanics fix cars. (Cars...)", "a": "Cars are fixed by mechanics"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (22, 'A2', 'Indefinite Pronouns', 'Someone, anyone, everyone, no one', 'bi-people', '<h3>Theory</h3><p><strong>Participle adjectives</strong> are formed from verbs and are used to describe nouns. In
                    English, there are two types: adjectives ending in <strong>-ed</strong> and adjectives ending in
                    <strong>-ing</strong>. Understanding the difference is crucial because they have opposite meanings!
                </p><h5>The Key Difference: -ed vs -ing</h5><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Ending</th>
<th>Describes</th>
<th>Meaning</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>-ED</strong></td>
<td>How someone <strong>FEELS</strong></td>
<td>The person experiencing the emotion</td>
<td><em>I am <strong>bored</strong>.</em> (I feel bored)</td>
</tr>
<tr>
<td><strong>-ING</strong></td>
<td>What <strong>CAUSES</strong> the feeling</td>
<td>The thing/person causing the emotion</td>
<td><em>The movie is <strong>boring</strong>.</em> (The movie causes boredom)</td>
</tr>
</tbody>
</table></div><h5>Common Participle Adjectives</h5><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>-ED (How you feel)</th>
<th>-ING (What causes it)</th>
<th>Example Pair</th>
</tr>
</thead>
<tbody>
<tr>
<td>bored</td>
<td>boring</td>
<td><em>I''m <strong>bored</strong> because this class is <strong>boring</strong>.</em></td>
</tr>
<tr>
<td>interested</td>
<td>interesting</td>
<td><em>She''s <strong>interested</strong> in this <strong>interesting</strong> book.</em>
</td>
</tr>
<tr>
<td>excited</td>
<td>exciting</td>
<td><em>We''re <strong>excited</strong> about the <strong>exciting</strong> trip.</em></td>
</tr>
<tr>
<td>tired</td>
<td>tiring</td>
<td><em>I''m <strong>tired</strong> after that <strong>tiring</strong> workout.</em></td>
</tr>
<tr>
<td>confused</td>
<td>confusing</td>
<td><em>He''s <strong>confused</strong> by the <strong>confusing</strong> instructions.</em>
</td>
</tr>
<tr>
<td>frightened</td>
<td>frightening</td>
<td><em>They were <strong>frightened</strong> by the <strong>frightening</strong>
                                    noise.</em></td>
</tr>
<tr>
<td>surprised</td>
<td>surprising</td>
<td><em>I was <strong>surprised</strong> by the <strong>surprising</strong> news.</em></td>
</tr>
<tr>
<td>disappointed</td>
<td>disappointing</td>
<td><em>She felt <strong>disappointed</strong> with the <strong>disappointing</strong>
                                    result.</em></td>
</tr>
</tbody>
</table></div><h5>Memory Trick</h5><div class="alert alert-info">
<p><strong>🧠 Easy way to remember:</strong></p>
<ul class="mb-0">
<li><strong>-ED</strong> = How I feeL (<em>both end in ''L''</em>) → <strong>PERSON</strong></li>
<li><strong>-ING</strong> = What''s happenING (<em>both have ''ING''</em>) → <strong>THING</strong>
</li>
</ul>
</div><h5>Common Mistakes to Avoid</h5><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Incorrect</th>
<th>Correct</th>
<th>Why?</th>
</tr>
</thead>
<tbody>
<tr>
<td><del>I am boring.</del> ❌</td>
<td><strong>I am bored.</strong> ✅</td>
<td>You feel bored (not causing boredom)</td>
</tr>
<tr>
<td><del>The movie was bored.</del> ❌</td>
<td><strong>The movie was boring.</strong> ✅</td>
<td>The movie causes boredom</td>
</tr>
<tr>
<td><del>This is very interesting me.</del> ❌</td>
<td><strong>I am very interested.</strong> ✅</td>
<td>You feel interested</td>
</tr>
<tr>
<td><del>She is exciting about the party.</del> ❌</td>
<td><strong>She is excited about the party.</strong> ✅</td>
<td>She feels excited</td>
</tr>
</tbody>
</table></div><h5>Usage Rules</h5><ul>
<li><strong>People/Animals:</strong> Usually use <strong>-ED</strong> (how they feel)<br/>
<em>"The children are <strong>excited</strong>."</em>
</li>
<li><strong>Things/Situations:</strong> Usually use <strong>-ING</strong> (what causes the
                        feeling)<br/>
<em>"The game is <strong>exciting</strong>."</em>
</li>
<li><strong>Exception:</strong> People can be -ING if they cause a feeling in others<br/>
<em>"My teacher is <strong>boring</strong>." (The teacher causes boredom)</em>
</li>
</ul>', '{"games": [{"title": "Practice 1: Someone, Anyone, No one", "instruction": "Select the correct pronoun.", "type": "multiple_choice", "questions": [{"q": "I heard ______ at the door.", "options": ["someone", "anyone"], "a": "someone", "hint": "Positive sentence."}, {"q": "Did you see ______ in the park?", "options": ["anyone", "someone"], "a": "anyone", "hint": "Questions usually use ''anyone''."}, {"q": "There is ______ in the office; it''s empty.", "options": ["no one", "someone"], "a": "no one", "hint": "Indicates zero people."}, {"q": "I didn''t find ______ helpful.", "options": ["anyone", "everyone"], "a": "anyone", "hint": "Negative sentence."}, {"q": "______ told me the meeting was cancelled.", "options": ["Somebody", "Anywhere"], "a": "Somebody", "hint": "Refers to a person."}]}, {"title": "Practice 2: Places and Things", "instruction": "Use ''something'', ''anything'', ''nothing'', ''somewhere'', or ''anywhere''.", "type": "fill_in", "questions": [{"q": "I have ______ to tell you.", "a": "something"}, {"q": "I don''t have ______ to wear.", "a": "anything"}, {"q": "Let''s go ______ quiet.", "a": "somewhere"}, {"q": "I haven''t seen my keys ______.", "a": "anywhere"}, {"q": "There is ______ in this box; it''s empty.", "a": "nothing"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (23, 'A2', 'Too vs. Enough', 'Expressing excess and sufficiency', 'bi-arrows-expand', '<h3>Theory</h3><p><strong>Relative pronouns</strong> are words we use to link two sentences or clauses together. They
                    tell us <em>which</em> person or thing we are talking about, avoiding repetition.</p><h5>1. The pronouns and their use</h5><p>We use different pronouns depending on what we are describing:</p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Pronoun</th>
<th>Refers to...</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>WHO</strong></td>
<td><strong>People</strong></td>
<td><em>The man <strong>who</strong> helps me is nice.</em></td>
</tr>
<tr>
<td><strong>WHICH</strong></td>
<td><strong>Things / Animals</strong></td>
<td><em>The car <strong>which</strong> I bought is red.</em></td>
</tr>
<tr>
<td><strong>THAT</strong></td>
<td><strong>People or Things</strong> (Informal)</td>
<td><em>The car <strong>that</strong> I bought is red.</em></td>
</tr>
<tr>
<td><strong>WHERE</strong></td>
<td><strong>Places</strong></td>
<td><em>The city <strong>where</strong> I live is big.</em></td>
</tr>
</tbody>
</table></div><h5>2. Detailed Rules</h5><h6>A. Describing People (Who vs That)</h6><p>You can use <strong>who</strong> or <strong>that</strong> for people. "Who" is slightly more formal,
                    but "That" is very common in speaking.</p><ul>
<li><em>The girl <strong>who</strong> called...</em> (Correct)</li>
<li><em>The girl <strong>that</strong> called...</em> (Correct)</li>
<li><em>The girl <strong>which</strong> called...</em> (INCORRECT ❌ - never use ''which'' for people)
                    </li>
</ul><h6>B. Describing Things (Which vs That)</h6><p>You can use <strong>which</strong> or <strong>that</strong> for objects and animals.</p><ul>
<li><em>The book <strong>which</strong> is on the table...</em> (Formal)</li>
<li><em>The book <strong>that</strong> is on the table...</em> (Common)</li>
<li><em>The book <strong>who</strong> is on the table...</em> (INCORRECT ❌)</li>
</ul><h6>C. Describing Places (Where)</h6><p>Use <strong>where</strong> to talk about a location where an action happens.</p><ul>
<li><em>This is the park <strong>where</strong> we play.</em> (Correct)</li>
<li><em>This is the park <strong>that</strong> I like.</em> (Correct - because ''like'' is not an
                        action happening <em>in</em> the park, it describes the park itself. If you can replace it with
                        "in which", use WHERE).</li>
</ul><h5>3. KEY RULE: When can we delete the pronoun?</h5><p>Sometimes you see sentences with NO relative pronoun. This is allowed ONLY when the pronoun is the
                    <strong>OBJECT</strong> of the verb (the person/thing receiving the action).
                </p><div class="alert alert-info">
<strong>Rule of thumb:</strong><br/>
                    - If <strong>verb</strong> follows the pronoun → You MUST keep it.<br/>
                    - If <strong>noun/pronoun</strong> follows the pronoun → You CAN delete it.
                </div><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Type</th>
<th>Sentence</th>
<th>Can delete?</th>
<th>Why?</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Subject</strong> (Doer)</td>
<td><em>The man <strong>who called</strong> me.</em></td>
<td>❌ NO</td>
<td>"Who" is the subject acting on "called".</td>
</tr>
<tr>
<td><strong>Object</strong> (Receiver)</td>
<td><em>The man <strong>(who) I met</strong> yesterday.</em></td>
<td>✅ YES</td>
<td>"I" is the subject. "Who" is just the object.</td>
</tr>
<tr>
<td><strong>Subject</strong> (Thing)</td>
<td><em>The phone <strong>that rang</strong> is mine.</em></td>
<td>❌ NO</td>
<td>"That" is doing the ringing.</td>
</tr>
<tr>
<td><strong>Object</strong> (Thing)</td>
<td><em>The phone <strong>(that) I bought</strong> is new.</em></td>
<td>✅ YES</td>
<td>"I" did the buying.</td>
</tr>
</tbody>
</table></div><h5>4. Common Mistakes</h5><ul>
<li>❌ <em>The people <strong>which</strong> live here...</em><br/>
                        ✅ <em>The people <strong>who</strong> live here...</em> (People = Who)</li>
<li>❌ <em>The hotel <strong>that</strong> we stayed...</em> (needs ''at'')<br/>
                        ✅ <em>The hotel <strong>where</strong> we stayed...</em> (Place = Where)</li>
</ul>', '{"games": [{"title": "Practice 1: Excess or Sufficiency", "instruction": "Choose ''too'' or ''enough''.", "type": "multiple_choice", "questions": [{"q": "This coffee is ______ hot to drink.", "options": ["too", "enough"], "a": "too", "hint": "Excessive amount."}, {"q": "I don''t have ______ money for a new phone.", "options": ["enough", "too"], "a": "enough", "hint": "Sufficient amount."}, {"q": "She is old ______ to drive.", "options": ["enough", "too"], "a": "enough", "hint": "Adjective + enough."}, {"q": "The suit is ______ small for him.", "options": ["too", "enough"], "a": "too", "hint": "Too + adjective."}, {"q": "We have ______ time to catch the bus.", "options": ["enough", "too"], "a": "enough", "hint": "Enough + noun."}]}, {"title": "Practice 2: Sentence Building", "instruction": "Complete the sentences.", "type": "fill_in", "questions": [{"q": "He is ______ (busy) to talk right now.", "a": "too busy"}, {"q": "Is the room ______ (big) for fifty people?", "a": "big enough"}, {"q": "We didn''t have ______ (eggs) to make a cake.", "a": "enough eggs"}, {"q": "This water is ______ (cold) for swimming.", "a": "too cold"}, {"q": "She speaks English ______ (well) to work in London.", "a": "well enough"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (24, 'A2', 'So vs. Such', 'Intensifiers for emphasis', 'bi-exclamation-diamond-fill', '<h3>Theory</h3><p>The <strong>Present Perfect Continuous</strong> is often called the "busy" tense. It focuses on the
                    <strong>activity</strong> itself and how long it has been happening.
                </p><h5>1. Structure</h5><p class="text-center fs-5" style="color: var(--color-texto-principal);"><strong>Subject + have/has +
                        been + verb-ING</strong></p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Type</th>
<th>Subject</th>
<th>Formula</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>(+) Positive</strong></td>
<td>I / You / We / They<br/>He / She / It</td>
<td><strong>have been</strong> working<br/><strong>has been</strong> working</td>
<td><em>I have been waiting for an hour.</em></td>
</tr>
<tr>
<td><strong>(-) Negative</strong></td>
<td>All</td>
<td><strong>haven''t / hasn''t</strong> been working</td>
<td><em>She hasn''t been sleeping well.</em></td>
</tr>
<tr>
<td><strong>(?) Question</strong></td>
<td>All</td>
<td><strong>Have/Has</strong> + subject + been...?</td>
<td><em>Have you been crying?</em></td>
</tr>
</tbody>
</table></div><h5>2. When do we use it?</h5><h6>A. Actions continuing up to now (Focus on Duration)</h6><p>We use it to say <strong>how long</strong> something has been happening. It started in the past and
                    is <strong>still happening now</strong>.</p><ul>
<li><em>I <strong>have been studying</strong> English for 5 years.</em> (I am still studying).</li>
<li><em>It <strong>has been raining</strong> all day.</em> (It is still raining).</li>
</ul><h6>B. Actions that just finished (Focus on Evidence)</h6><p>We use it when the action has just stopped, but we can see the <strong>result</strong> or evidence
                    now.</p><ul>
<li><em>You are out of breath. <strong>Have you been running?</strong></em> (The running stopped,
                        but you are sweating/breathing hard now).</li>
<li><em>The ground is wet. It <strong>has been raining</strong>.</em></li>
</ul><h5>3. CRITICAL WARNING: Stative Verbs ⚠️</h5><p>Remember that <strong>Stative Verbs</strong> (verbs of feeling, thinking, possession) CANNOT be used
                    in any continuous tense, including this one.</p><div class="alert alert-warning">
<strong>Never say:</strong><br/>
                    ❌ <em>I <del>have been knowing</del> him for years.</em><br/>
                    ❌ <em>I <del>have been liking</del> pizza since I was a child.</em><br/>
<br/>
<strong>Instead, use Present Perfect Simple:</strong><br/>
                    ✅ <em>I <strong>have known</strong> him for years.</em><br/>
                    ✅ <em>I <strong>have liked</strong> pizza since I was a child.</em>
</div><h5>4. FOR vs SINCE</h5><p>We use these time words often with this tense:</p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Word</th>
<th>Usage</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>FOR</strong></td>
<td>A duration (how long?)</td>
<td><em>for 10 minutes, for 2 weeks, for ages</em></td>
</tr>
<tr>
<td><strong>SINCE</strong></td>
<td>A starting point (when?)</td>
<td><em>since 9:00 AM, since Monday, since I was born</em></td>
</tr>
</tbody>
</table></div><h5>5. Common Mistakes</h5><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Incorrect</th>
<th>Correct</th>
<th>Explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td><del>I am studying here for 2 years.</del> ❌</td>
<td><strong>I have been studying here for 2 years.</strong> ✅</td>
<td>Present Continuous ("I am studying") is for <strong>right now</strong> only. For
                                duration up to now, use Present Perfect Continuous.</td>
</tr>
<tr>
<td><del>I have been losing my keys.</del> ❌</td>
<td><strong>I have lost my keys.</strong> ✅</td>
<td>"Losing" something is a quick action, not a continuous activity. Use Simple Perfect for
                                quick actions.</td>
</tr>
</tbody>
</table></div>', '{"games": [{"title": "Practice 1: So or Such?", "instruction": "Choose ''so'' (before adjectives/adverbs) or ''such'' (before adjective + noun).", "type": "multiple_choice", "questions": [{"q": "The movie was ______ (good)!", "options": ["so", "such"], "a": "so", "hint": "Followed by an adjective."}, {"q": "It was ______ (a good movie)!", "options": ["such", "so"], "a": "such", "hint": "Followed by an adjective + noun."}, {"q": "She is ______ (intelligent).", "options": ["so", "such"], "a": "so", "hint": "Followed by an adjective."}, {"q": "He is ______ (a nice person).", "options": ["such", "so"], "a": "such", "hint": "Followed by ''a'' + adjective + noun."}, {"q": "The cake tastes ______ (delicious).", "options": ["so", "such"], "a": "so", "hint": "Adjective only."}]}, {"title": "Practice 2: Completing the Emphasis", "instruction": "Complete using ''so'', ''such a'', or ''such''.", "type": "fill_in", "questions": [{"q": "It was ______ beautiful day.", "a": "such a"}, {"q": "The music was ______ loud.", "a": "so"}, {"q": "They are ______ friendly people.", "a": "such"}, {"q": "The water is ______ cold.", "a": "so"}, {"q": "He has ______ big car.", "a": "such a"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (25, 'A2', 'Both, Either, Neither', 'Talking about two options', 'bi-columns-gap', '<h3>Theory</h3><p>Both tenses connect the past to the present, but they tell a different story. The
                    <strong>Simple</strong> focuses on the <strong>result</strong> (it''s done), while the
                    <strong>Continuous</strong> focuses on the <strong>action</strong> (it''s happening).
                </p><h5>1. The Golden Rule: How Many vs How Long</h5><p>This is the easiest way to decide which one to use:</p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Question</th>
<th>Tense</th>
<th>Why?</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>HOW MANY?</strong><br/>(Quantity)</td>
<td><strong>Present Perfect SIMPLE</strong></td>
<td>If you count the number of times or things, the action must be finished at those
                                points.<br/>
<em>I have written <strong>3 emails</strong>.</em> ✅<br/>
<em><del>I have been writing 3 emails.</del></em> ❌
                            </td>
</tr>
<tr>
<td><strong>HOW LONG?</strong><br/>(Duration)</td>
<td><strong>Present Perfect CONTINUOUS</strong></td>
<td>If you emphasize the time spent.<br/>
<em>I have been writing emails <strong>all morning</strong>.</em> ✅
                            </td>
</tr>
</tbody>
</table></div><h5>2. Result vs Activity</h5><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Focus</th>
<th>Example</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Completion (Result)</strong></td>
<td><em>I <strong>have fixed</strong> the car.</em></td>
<td>The job is done. The car works now.</td>
</tr>
<tr>
<td><strong>Activity (Process)</strong></td>
<td><em>I <strong>have been fixing</strong> the car.</em></td>
<td>I spent time doing it. I might be dirty/greasy. The car might not be ready yet.</td>
</tr>
</tbody>
</table></div><h5>3. Temporary vs Permanent</h5><ul>
<li><strong>Continuous (Temporary):</strong> Use it for short-term situations.<br/>
<em>I <strong>have been living</strong> with my parents while I look for a flat.</em>
                        (Temporary)
                    </li>
<li><strong>Simple (Permanent):</strong> Use it for long-term situations.<br/>
<em>I <strong>have lived</strong> in London all my life.</em> (Permanent)
                    </li>
</ul><h5>4. Comparison Summary</h5><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Feature</th>
<th>Simple (have done)</th>
<th>Continuous (have been doing)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Focus</strong></td>
<td>Result / "How much?"</td>
<td>Activity / "How long?"</td>
</tr>
<tr>
<td><strong>Completion</strong></td>
<td>Usually finished</td>
<td>Maybe finished, maybe not</td>
</tr>
<tr>
<td><strong>Stative Verbs</strong></td>
<td>✅ YES (have known, have liked)</td>
<td>❌ NO (NOT: <del>have been knowing</del>)</td>
</tr>
</tbody>
</table></div>', '{"games": [{"title": "Practice 1: Choosing Two or None", "instruction": "Select the correct word to complete the sentence.", "type": "multiple_choice", "questions": [{"q": "______ of them are coming to the party.", "options": ["Both", "Neither"], "a": "Both", "hint": "Used for two things/people (positive)."}, {"q": "I don''t like ______ of these shirts.", "options": ["either", "neither"], "a": "either", "hint": "Negative verb + either."}, {"q": "______ my brother nor my sister likes cat.", "options": ["Neither", "Either"], "a": "Neither", "hint": "Neither...nor."}, {"q": "You can stay ______ at a hotel or with us.", "options": ["either", "both"], "a": "either", "hint": "Either...or."}, {"q": "They ______ speak French well.", "options": ["both", "either"], "a": "both", "hint": "Referring to two people together."}]}, {"title": "Practice 2: Correlative Pairs", "instruction": "Complete the sentences.", "type": "fill_in", "questions": [{"q": "I want ______ the cake and the ice cream.", "a": "both"}, {"q": "Neither John ______ Peter was at home.", "a": "nor"}, {"q": "Either sit down ______ leave.", "a": "or"}, {"q": "I don''t need ______ of those books.", "a": "either"}, {"q": "It''s ______ expensive nor cheap.", "a": "neither"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (26, 'A2', 'Adverbs for Possibility', 'Definitely, probably, maybe', 'bi-dice-3-fill', '<h3>Theory</h3><p>We use <strong>adverbs of possibility</strong> to say how sure we are about the future.</p><h5>1. The Adverbs</h5><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Certainty</th>
<th>Adverb</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>100% (Yes)</td>
<td><strong>Definitely</strong></td>
<td><em>I will <strong>definitely</strong> pass.</em></td>
</tr>
<tr>
<td>75% (Probably)</td>
<td><strong>Probably</strong></td>
<td><em>I will <strong>probably</strong> pass.</em></td>
</tr>
<tr>
<td>50% (Maybe)</td>
<td><strong>Maybe / Perhaps</strong></td>
<td><em><strong>Maybe</strong> I will pass.</em></td>
</tr>
<tr>
<td>0% (No)</td>
<td><strong>Definitely NOT</strong></td>
<td><em>I <strong>definitely won''t</strong> fail.</em></td>
</tr>
</tbody>
</table></div><h5>2. Word Order (Critical Rule!)</h5><p>The position of the adverb changes depending on the sentences:</p><h6>A. With "will" (Future)</h6><div class="alert alert-info">
<strong>will + ADVERB + verb</strong>
</div><ul>
<li>✅ <em>I will <strong>definitely</strong> be there.</em></li>
<li>✅ <em>She will <strong>probably</strong> come later.</em></li>
<li>❌ <em><del>I probably will be there.</del></em> (Incorrect order for positive sentences)</li>
</ul><h6>B. With "BE" (is/are/am)</h6><div class="alert alert-info">
<strong>am/is/are + ADVERB</strong>
</div><ul>
<li>✅ <em>He is <strong>definitely</strong> happy.</em> (After ''is'')</li>
<li>✅ <em>They are <strong>probably</strong> at home.</em></li>
</ul><h6>C. In Negative Sentences (The tricky part)</h6><p>In negative sentences, <strong>probably/definitely</strong> goes BEFORE <em>won''t/isn''t</em>.</p><div class="alert alert-warning">
<strong>ADVERB + won''t / negative</strong>
</div><ul>
<li>✅ <em>I <strong>probably won''t</strong> go.</em> (Correct)</li>
<li>❌ <em><del>I won''t probably go.</del></em> (Incorrect)</li>
<li>✅ <em>She <strong>definitely isn''t</strong> ready.</em></li>
</ul><h5>3. Maybe vs Might</h5><p>They mean the same thing (50% chance), but the grammar is different:</p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Word</th>
<th>Type</th>
<th>Position</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Maybe</strong></td>
<td>Adverb</td>
<td>Start of sentence</td>
<td><em><strong>Maybe</strong> it will rain.</em></td>
</tr>
<tr>
<td><strong>Might</strong></td>
<td>Modal Verb</td>
<td>Before main verb</td>
<td><em>It <strong>might</strong> rain.</em></td>
</tr>
</tbody>
</table></div><h5>Position</h5><ul>
<li><strong>maybe/perhaps</strong> → Beginning<br/><em>"<strong>Maybe</strong> she''s home."</em></li>
<li><strong>probably/definitely</strong> → Before main verb<br/><em>"He''ll <strong>probably</strong>
                            call."</em></li>
<li>After "be"<br/><em>"She''s <strong>definitely</strong> right."</em></li>
</ul>', '{"games": [{"title": "Practice 1: Self-Actions", "instruction": "Choose the correct reflexive pronoun.", "type": "multiple_choice", "questions": [{"q": "I cut ______ while cooking.", "options": ["myself", "me"], "a": "myself", "hint": "The subject and object are the same (I)."}, {"q": "She looks at ______ in the mirror every morning.", "options": ["herself", "her"], "a": "herself", "hint": "Refers back to ''she''."}, {"q": "They enjoyed ______ at the party.", "options": ["themselves", "themself"], "a": "themselves", "hint": "Plural reflexive."}, {"q": "Did you do the homework by ______?", "options": ["yourself", "you"], "a": "yourself", "hint": "Refers to ''you'' (singular)."}, {"q": "The cat cleaned ______.", "options": ["itself", "his-self"], "a": "itself", "hint": "For animals/things."}]}, {"title": "Practice 2: Filling the Pronouns", "instruction": "Use ''myself'', ''yourself'', ''himself'', ''herself'', ''itself'', ''ourselves'', or ''themselves''.", "type": "fill_in", "questions": [{"q": "He taught ______ how to play the guitar.", "a": "himself"}, {"q": "We treated ______ to a nice dinner.", "a": "ourselves"}, {"q": "Be careful not to hurt ______ with that knife.", "a": "yourself"}, {"q": "The computer reboots ______ automatically.", "a": "itself"}, {"q": "The children can dress ______ now.", "a": "themselves"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (27, 'A2', 'Modals for Prohibition', 'Mustn''t, can''t, and shouldn''t', 'bi-x-octagon-fill', '<h3>Theory</h3><p><strong>Modals of prohibition</strong> are words we use to stop people from doing things. But be
                    careful: some words mean "STOP" and others mean "It''s optional".</p><h5>1. Prohibition (STOP!)</h5><p>Use these when something is <strong>against the rules</strong> or you strongly recommend NOT doing
                    it.</p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Modal</th>
<th>Meaning</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>MUST NOT / MUSTN''T</strong></td>
<td>Forbidden (Formal/Strong)</td>
<td><em>You <strong>mustn''t</strong> smoke in here.</em> (It is illegal)</td>
</tr>
<tr>
<td><strong>CAN''T</strong></td>
<td>Not allowed (Common/Spoken)</td>
<td><em>You <strong>can''t</strong> park here.</em> (The sign says No Parking)</td>
</tr>
</tbody>
</table></div><h5>2. Advice (Better not do it)</h5><p><strong>SHOULDN''T</strong> is softer. It''s not a rule, but it''s good advice.</p><ul>
<li><em>You <strong>shouldn''t</strong> eat so much sugar.</em> (It''s bad for you, but not illegal).
                    </li>
</ul><h5>3. CRITICAL DIFFERENCE: Prohibition vs No Necessity</h5><div class="alert alert-warning">
<strong>Mustn''t</strong> ≠ <strong>Don''t have to</strong>
</div><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Modal</th>
<th>Status</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Mustn''t</strong></td>
<td>⛔ PROHIBITED</td>
<td><strong>Don''t do it!</strong> It is bad or forbidden.<br/>
<em>You <strong>mustn''t</strong> touch that fire.</em>
</td>
</tr>
<tr>
<td><strong>Don''t have to</strong></td>
<td>🤷 OPTIONAL</td>
<td><strong>You can if you want, but you don''t need to.</strong><br/>
<em>You <strong>don''t have to</strong> wash the car (it''s already clean, but you can if
                                    you really want to).</em>
</td>
</tr>
</tbody>
</table></div><h5>4. Common Situations</h5><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Signs</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td>🚫 No Entry</td>
<td>You <strong>mustn''t/can''t</strong> go in.</td>
</tr>
<tr>
<td>🚭 No Smoking</td>
<td>You <strong>mustn''t/can''t</strong> smoke.</td>
</tr>
<tr>
<td>🆓 Free Entrance</td>
<td>You <strong>don''t have to</strong> pay.</td>
</tr>
</tbody>
</table></div>', '{"games": [{"title": "Practice 1: Tricky Tags", "instruction": "Choose the correct tag for these special cases.", "type": "multiple_choice", "questions": [{"q": "I am late, ______?", "options": ["aren''t I", "am not I"], "a": "aren''t I", "hint": "Irregular tag for ''I am''."}, {"q": "Let''s go, ______?", "options": ["shall we", "won''t we"], "a": "shall we", "hint": "Tag for ''Let''s''."}, {"q": "Don''t forget, ______?", "options": ["will you", "don''t you"], "a": "will you", "hint": "Tag for negative imperatives."}, {"q": "Open the window, ______?", "options": ["will you", "do you"], "a": "will you", "hint": "Tag for imperatives (requests)."}, {"q": "There is a meeting, ______?", "options": ["isn''t there", "isn''t it"], "a": "isn''t there", "hint": "Tag for ''There is''."}]}, {"title": "Practice 2: Matching Tags", "instruction": "Add the correct tag question.", "type": "fill_in", "questions": [{"q": "Nothing happened, ______?", "a": "did it"}, {"q": "Everyone is here, ______?", "a": "aren''t they"}, {"q": "Nobody called, ______?", "a": "did they"}, {"q": "Wait for me, ______?", "a": "will you"}, {"q": "I''m right, ______?", "a": "aren''t I"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (28, 'A2', 'Second Conditional', 'Imaginary and unreal situations', 'bi-moon-stars-fill', '<h3>Theory</h3><p>The <strong>Second Conditional</strong> is used to talk about <strong>imaginary, hypothetical, or
                        unreal situations</strong> in the present or future. It''s for things that are <em>probably not
                        going to happen</em>.</p><h5>1. Structure</h5><p class="text-center fs-5" style="color: var(--color-texto-principal);"><strong>If + Past Simple, ...
                        would + infinitive</strong></p><div class="alert alert-info">
<strong>Note:</strong> Even though we use "Past Simple", we are talking about <strong>NOW</strong>
                    or the <strong>FUTURE</strong>, not the past.
                </div><h5>2. Examples</h5><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Condition (Imaginary)</th>
<th>Result (Hypothetical)</th>
</tr>
</thead>
<tbody>
<tr>
<td>If I <strong>had</strong> a million dollars,</td>
<td>I <strong>would travel</strong> the world.</td>
</tr>
<tr>
<td>If she <strong>studied</strong> harder,</td>
<td>she <strong>would pass</strong> the exam.</td>
</tr>
<tr>
<td>If we <strong>lived</strong> in Japan,</td>
<td>we <strong>would eat</strong> sushi every day.</td>
</tr>
</tbody>
</table></div><h5>3. The "Comma Rule" (Punctuation)</h5><p>You can change the order of the sentences, but the punctuation changes.</p><ul>
<li><strong>If first:</strong> Use a comma.<br/>
<em>If I had money<strong>,</strong> I would buy a car.</em>
</li>
<li><strong>If second:</strong> NO comma.<br/>
<em>I would buy a car <strong>if</strong> I had money.</em>
</li>
</ul><h5>4. The Special Rule: "If I were..."</h5><p>In the Second Conditional, the verb <strong>BE</strong> becomes <strong>WERE</strong> for EVERYONE
                    (I, he, she, it). "Was" is acceptable in spoken English, but "Were" is deeper grammar.</p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Person</th>
<th>Sentence</th>
<th>Context</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>I</strong> (If I were you)</td>
<td><em>If I <strong>were</strong> you, I wouldn''t go.</em></td>
<td>Advice</td>
</tr>
<tr>
<td><strong>He/She</strong> (If she were)</td>
<td><em>If she <strong>were</strong> here, she would help.</em></td>
<td>Unreal state</td>
</tr>
</tbody>
</table></div>', '{"games": [{"title": "Practice 1: Passive Questions", "instruction": "Choose the correct passive question form.", "type": "multiple_choice", "questions": [{"q": "Where ______ the cars ______?", "options": ["are / made", "do / made"], "a": "are / made", "hint": "Question form of the passive (be + object + participle)."}, {"q": "______ the letter ______ yesterday?", "options": ["Was / sent", "Did / sent"], "a": "Was / sent", "hint": "Past passive question."}, {"q": "______ English ______ in Australia?", "options": ["Is / spoken", "Does / spoken"], "a": "Is / spoken", "hint": "Present passive question."}, {"q": "When ______ the pyramid ______?", "options": ["was / built", "did / built"], "a": "was / built", "hint": "Historical passive."}, {"q": "______ the keys ______ yet?", "options": ["Have / been found", "Were / found"], "a": "Have / been found", "hint": "Present perfect passive."}]}, {"title": "Practice 2: Active to Passive Transformation", "instruction": "Rewrite as passive sentences.", "type": "fill_in", "questions": [{"q": "They produce olive oil in Italy. (Olive oil...)", "a": "Olive oil is produced in Italy"}, {"q": "The fire destroyed the building. (The building...)", "a": "The building was destroyed by the fire"}, {"q": "A famous architect designed the library. (The library...)", "a": "The library was designed by a famous architect"}, {"q": "They will announce the results tomorrow. (The results...)", "a": "The results will be announced tomorrow"}, {"q": "Did anyone see the thief? (Was...)", "a": "Was the thief seen"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (29, 'A2', 'First vs Second Conditional', 'Real vs imaginary possibilities', 'bi-shuffle', '<h3>Theory</h3><p>The difference is simple: <strong>Is it REAL or IMAGINARY?</strong></p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Conditional</th>
<th>Situation</th>
<th>Structure</th>
<th>Likelihood</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>First</strong></td>
<td>✅ <strong>Real / Possible</strong><br/>(It could happen)</td>
<td>If + Present, ... <strong>WILL</strong></td>
<td><span style="color:#00ff00">High (50-90%)</span><br/><em>If it rains, I will stay
                                    home.</em></td>
</tr>
<tr>
<td><strong>Second</strong></td>
<td>🦄 <strong>Imaginary / Unreal</strong><br/>(Dreaming / Hypothetical)</td>
<td>If + Past, ... <strong>WOULD</strong></td>
<td><span style="color:#ff0055">Zero/Low (0-5%)</span><br/><em>If I had wings, I would
                                    fly.</em></td>
</tr>
</tbody>
</table></div><h5>Key Comparison</h5><ul>
<li><strong>1st (Plan):</strong> <em>If I <strong>win</strong> the lottery, I <strong>will
                                buy</strong> a car.</em> (I actually bought a ticket).</li>
<li><strong>2nd (Dream):</strong> <em>If I <strong>won</strong> the lottery, I <strong>would
                                buy</strong> a helicopter.</em> (I''m just imagining).</li>
</ul><div class="alert alert-info">
<strong>The "If I were" Rule</strong><br/>
                    In Second Conditional, we use <strong>WERE</strong> for all subjects (I, he, she, it).<br/>
                    ❌ <em>If I was you...</em> (Common but informal)<br/>
                    ✅ <em>If I <strong>were</strong> you...</em> (Correct grammar for advice)
                </div>', '{"games": [{"title": "Practice 1: Forming Compounds", "instruction": "Match the first word to the second to form a compound noun.", "type": "multiple_choice", "questions": [{"q": "Rain______", "options": ["coat", "shirt"], "a": "coat", "hint": "Something you wear when it rains."}, {"q": "Back______", "options": ["pack", "bag"], "a": "pack", "hint": "Something you wear on your back."}, {"q": "Bed______", "options": ["room", "house"], "a": "room", "hint": "Where you sleep."}, {"q": "Sun______", "options": ["glasses", "cups"], "a": "glasses", "hint": "Protection for your eyes."}, {"q": "Note______", "options": ["book", "page"], "a": "book", "hint": "Something you write in."}]}, {"title": "Practice 2: Compound Meaning", "instruction": "Identify the correct compound noun.", "type": "fill_in", "questions": [{"q": "A brush for your teeth: ______.", "a": "toothbrush"}, {"q": "A paper for news: ______.", "a": "newspaper"}, {"q": "A stop for the bus: ______.", "a": "bus stop"}, {"q": "A light for the street: ______.", "a": "streetlight"}, {"q": "A machine for washing: ______.", "a": "washing machine"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (30, 'A2', 'Past Modals', 'Should have, could have, would have', 'bi-arrow-counterclockwise', '<h3>Theory</h3><p>We use <strong>Past Modals</strong> to talk about things that didn''t happen in the past, express
                    regret, or make logical deductions.</p><h5>1. Regret &amp; Possibility (Should / Could / Would)</h5><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Modal</th>
<th>Function</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>SHOULD have</strong></td>
<td>😞 Regret (Good idea, but didn''t do it)</td>
<td><em>I <strong>should have studied</strong>.</em> (I didn''t).</td>
</tr>
<tr>
<td><strong>SHOULDN''T have</strong></td>
<td>😡 Criticism (Bad idea, but did it)</td>
<td><em>You <strong>shouldn''t have eaten</strong> that.</em> (You did).</td>
</tr>
<tr>
<td><strong>COULD have</strong></td>
<td>🤔 Unused Possibility (It was possible)</td>
<td><em>I <strong>could have won</strong>, but I fell.</em></td>
</tr>
<tr>
<td><strong>WOULD have</strong></td>
<td>💭 Hypothetical Result</td>
<td><em>I <strong>would have called</strong> if I had time.</em></td>
</tr>
</tbody>
</table></div><h5>2. Deduction (Must / Can''t)</h5><p>When we are <strong>guessing</strong> about the past based on evidence.</p><ul>
<li><strong>MUST have</strong> (90% Sure - Positive):<br/>
<em>The lights are off. They <strong>must have gone</strong> out.</em>
</li>
<li><strong>CAN''T have</strong> (90% Sure - Negative):<br/>
<em>He ate 3 pizzas. He <strong>can''t have been</strong> hungry after that!</em> (Impossible).
                    </li>
</ul><div class="alert alert-warning">
<strong>Structure:</strong> Modal + HAVE + Past Participle (always "HAVE", never "HAS").
                </div>', '{"games": [{"title": "Practice 1: Directing Actions", "instruction": "Choose the correct preposition of movement.", "type": "multiple_choice", "questions": [{"q": "He ran ______ the tunnel.", "options": ["through", "across"], "a": "through", "hint": "Moving inside a space."}, {"q": "She walked ______ the bridge.", "options": ["across", "through"], "a": "across", "hint": "Moving from one side to the other."}, {"q": "The cat jumped ______ the fence.", "options": ["over", "under"], "a": "over", "hint": "Moving from one side to the other above it."}, {"q": "They went ______ the stairs to the second floor.", "options": ["up", "down"], "a": "up", "hint": "Moving higher."}, {"q": "The train went ______ the tunnel.", "options": ["into", "onto"], "a": "into", "hint": "Moving to the inside."}]}, {"title": "Practice 2: Directional Sentences", "instruction": "Use ''towards'', ''away from'', ''past'', ''out of'', or ''round''.", "type": "fill_in", "questions": [{"q": "The car is driving ______ the city center.", "a": "towards"}, {"q": "He ran ______ the burning building.", "a": "away from"}, {"q": "We walked ______ the post office without stopping.", "a": "past"}, {"q": "She stepped ______ the car.", "a": "out of"}, {"q": "The Earth moves ______ the sun.", "a": "round"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (31, 'A2', 'Reported Speech (Statements & Requests)', 'Telling what someone said', 'bi-chat-square-quote-fill', '<h3>Theory</h3><p><strong>Reported Speech</strong> is used to tell someone else what another person said. The grammar
                    usually <strong>changes to the past</strong>.</p><h5>1. Statements (Things people say)</h5><p><strong>Rule:</strong> Go one step BACK in time.</p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Direct Speech (Original)</th>
<th>Reported Speech (Past)</th>
</tr>
</thead>
<tbody>
<tr>
<td>"I <strong>like</strong> ice cream." (Present)</td>
<td>He said (that) he <strong>liked</strong> ice cream. (Past)</td>
</tr>
<tr>
<td>"I <strong>am working</strong>." (Present Cont.)</td>
<td>She said she <strong>was working</strong>. (Past Cont.)</td>
</tr>
<tr>
<td>"I <strong>have finished</strong>." (Present Perf.)</td>
<td>He said he <strong>had finished</strong>. (Past Perf.)</td>
</tr>
<tr>
<td>"I <strong>will</strong> call." (Future)</td>
<td>He said he <strong>would</strong> call. (Conditional)</td>
</tr>
</tbody>
</table></div><h5>2. Time &amp; Place Changes (Critical!)</h5><p>When "here" becomes "there" and "now" becomes "then".</p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Direct</th>
<th>Reported</th>
</tr>
</thead>
<tbody>
<tr>
<td>Now</td>
<td>Then</td>
</tr>
<tr>
<td>Today</td>
<td>That day</td>
</tr>
<tr>
<td>Tomorrow</td>
<td>The next day</td>
</tr>
<tr>
<td>Yesterday</td>
<td>The day before</td>
</tr>
<tr>
<td>Here</td>
<td>There</td>
</tr>
<tr>
<td>This</td>
<td>That</td>
</tr>
</tbody>
</table></div><h5>2. Requests (Asking someone to do something)</h5><p><strong>Rule:</strong> Use <strong>asked + person + TO + infinitive</strong>.</p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Direct Request</th>
<th>Reported Request</th>
</tr>
</thead>
<tbody>
<tr>
<td>"Please <strong>help</strong> me."</td>
<td>She <strong>asked</strong> me <strong>to help</strong> her.</td>
</tr>
<tr>
<td>"<strong>Don''t go</strong>."</td>
<td>He <strong>asked</strong> me <strong>NOT to go</strong>.</td>
</tr>
</tbody>
</table></div><div class="alert alert-warning">
<strong>Say vs Tell</strong><br/>
                    ✅ <em>He <strong>said</strong> (that) he was tired.</em> (No person)<br/>
                    ✅ <em>He <strong>told me</strong> (that) he was tired.</em> (Subject + TOLD + Person)
                </div>', '{"games": [{"title": "Practice 1: Should vs. Must", "instruction": "Choose between advice (should) and strong obligation (must).", "type": "multiple_choice", "questions": [{"q": "You ______ (see) a doctor about that cough.", "options": ["should", "must"], "a": "should", "hint": "It''s a piece of advice."}, {"q": "You ______ (stop) at the red light.", "options": ["must", "should"], "a": "must", "hint": "It''s a rule/law."}, {"q": "I ______ (study) more if I want to pass.", "options": ["should", "must"], "a": "should", "hint": "Personal advice."}, {"q": "You ______ (not/smoke) here; it''s a hospital.", "options": ["mustn''t", "shouldn''t"], "a": "mustn''t", "hint": "Prohibition."}, {"q": "Do you think I ______ (buy) this jacket?", "options": ["should", "must"], "a": "should", "hint": "Asking for advice."}]}, {"title": "Practice 2: Giving Advice", "instruction": "Complete the advice sentences.", "type": "fill_in", "questions": [{"q": "It''s cold. You ______ wear a coat.", "a": "should"}, {"q": "You ______ stay up so late; you''ll be tired.", "a": "shouldn''t"}, {"q": "You ______ (ought) to visit your parents.", "a": "ought"}, {"q": "If I ______ you, I would take a break.", "a": "were"}, {"q": "You ______ better hurry or you''ll be late.", "a": "had"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (32, 'A2', 'Reported Speech (Modals)', 'Reporting modal verbs', 'bi-chat-dots-fill', '<h3>Theory</h3><p>When reporting speech, many modal verbs change to their <strong>past form</strong>. However, some do
                    not change.</p><h5>1. Modals that CHANGE</h5><p><strong>Rule:</strong> Present Modals become Past Modals.</p><div class="table-responsive"><table class="table table-dark table-bordered">
<thead>
<tr>
<th>Direct Speech</th>
<th>Reported Speech</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>CAN</strong></td>
<td><strong>COULD</strong></td>
<td>"I <strong>can</strong> swim" → He said he <strong>could</strong> swim.</td>
</tr>
<tr>
<td><strong>WILL</strong></td>
<td><strong>WOULD</strong></td>
<td>"I <strong>will</strong> call" → He said he <strong>would</strong> call.</td>
</tr>
<tr>
<td><strong>MUST</strong> (Obligation)</td>
<td><strong>HAD TO</strong></td>
<td>"I <strong>must</strong> go" → He said he <strong>had to</strong> go.</td>
</tr>
<tr>
<td><strong>MAY</strong></td>
<td><strong>MIGHT</strong></td>
<td>"It <strong>may</strong> rain" → He said it <strong>might</strong> rain.</td>
</tr>
</tbody>
</table></div><div class="alert alert-info">
<strong>Note on "Must":</strong><br/>
                    - <strong>Obligation:</strong> <em>"I must go" (Necessity)</em> → <em>He said he <strong>had
                            to</strong> go.</em> (Past Necessity)<br/>
                    - <strong>Deduction:</strong> <em>"It must be true" (Certainty)</em> → <em>He said it
                        <strong>must</strong> be true.</em> (Stays the same!)
                </div><h5>2. Modals that DO NOT Change</h5><p>These stay the same: <strong>Should, Could, Might, Would, Ought to</strong>.</p><ul>
<li>"You <strong>should</strong> study." → He said I <strong>should</strong> study.</li>
<li>"It <strong>might</strong> be late." → He said it <strong>might</strong> be late.</li>
<li>"I <strong>could have</strong> gone." → He said he <strong>could have</strong> gone. (Perfect
                        Modals don''t change).</li>
</ul>', '{"games": [{"title": "Practice 1: Modal Shifts", "instruction": "Report what was said by shifting the modal verb.", "type": "multiple_choice", "questions": [{"q": "''I can help you,'' he said. \u2192 He said he ______ help me.", "options": ["could", "can"], "a": "could", "hint": "Can \u2192 could."}, {"q": "''I will call you,'' she said. \u2192 She said she ______ call me.", "options": ["would", "will"], "a": "would", "hint": "Will \u2192 would."}, {"q": "''I may be late,'' he said. \u2192 He said he ______ be late.", "options": ["might", "may"], "a": "might", "hint": "May \u2192 might."}, {"q": "''I must go,'' he said. \u2192 He said he ______ go.", "options": ["had to", "must"], "a": "had to", "hint": "Must \u2192 had to."}, {"q": "''You should study,'' she said. \u2192 She said I ______ study.", "options": ["should", "must"], "a": "should", "hint": "''Should'' doesn''t change."}]}, {"title": "Practice 2: Reporting the Message", "instruction": "Complete the reported sentences.", "type": "fill_in", "questions": [{"q": "''I will come.'' \u2192 He said he ______ come.", "a": "would"}, {"q": "''I can''t swim.'' \u2192 She said she ______ swim.", "a": "couldn''t"}, {"q": "''We may stay.'' \u2192 They said they ______ stay.", "a": "might"}, {"q": "''I must buy bread.'' \u2192 He said he ______ buy bread.", "a": "had to"}, {"q": "''You should rest.'' \u2192 The doctor said I ______ rest.", "a": "should"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (1, 'B1', 'Relative Pronouns', 'Master defining and non-defining relative clauses', 'bi-link-45deg', '<h3>Theory</h3><p>Relative pronouns connect clauses to describe a noun. In B1, understanding the <strong>types of

                            clauses</strong> and <strong>omission rules</strong> is key.</p><h5>1. Defining vs Non-Defining Clauses</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
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
<td class="text-info"><strong>Defining</strong></td>
<td>Identifies exactly <em>which</em> person/thing we mean.<br/><em>"The man

                                            <strong>who</strong> helps me is nice."</em></td>
<td>No commas</td>
<td>✅ Yes</td>
</tr>
<tr>
<td class="text-warning"><strong>Non-Defining</strong></td>
<td>Adds <em>extra</em> information. The sentence works without it.<br/><em>"My dad,

                                            <strong>who</strong> helps everyone, is nice."</em></td>
<td><strong>Must use commas</strong> (brackets)</td>
<td>❌ NEVER</td>
</tr>
</tbody>
</table>
</div><h5>2. The Pronouns &amp; Usage</h5><ul>
<li><strong>Who</strong>: People. (<em>The girl who called.</em>)</li>
<li><strong>Which</strong>: Things/Animals. (<em>The car which I drove.</em>)</li>
<li><strong>That</strong>: People/Things (Informal, Defining clauses ONLY).</li>
<li><strong>Whose</strong>: Possession (His/Her/Its). (<em>The boy <strong>whose</strong> bike

                                was stolen.</em>)</li>
<li><strong>Where</strong>: Places. (<em>The city <strong>where</strong> I live.</em>)</li>
</ul><div class="alert alert-secondary">
<strong>🚀 Advanced Rule: Omission</strong><br/>

                        You can <strong>delete</strong> the pronoun (who/which/that) IF it is the

                        <strong>object</strong> of the verb.<br/>

                        - <em>"The book (which) I read is good."</em> (I read the book -&gt; Object -&gt; Optional)<br/>

                        - <em>"The man <strong>who</strong> lives here."</em> (He lives -&gt; Subject -&gt;

                        <strong>Required</strong>)

                    </div>', '{"games": [{"type": "multiple_choice", "title": "Which Relative Pronoun?", "instruction": "Choose the correct relative pronoun to complete the sentence.", "questions": [{"q": "The man ______ lives next door is a doctor.", "a": "who", "options": ["who", "which", "whose"]}, {"q": "The house ______ has a red door is mine.", "a": "which", "options": ["who", "which", "whose"]}, {"q": "The girl ______ brother is in my class is very tall.", "a": "whose", "options": ["who", "which", "whose"]}, {"q": "This is the book ______ I told you about.", "a": "that", "options": ["who", "that", "whose"]}, {"q": "I know a place ______ we can get a good coffee.", "a": "where", "options": ["where", "when", "which"]}]}, {"type": "fill_in", "title": "Fill the Gaps", "instruction": "Type the correct relative pronoun (who, which, whose, where, when).", "questions": [{"q": "Summer is the time ______ we go to the beach.", "a": "when"}, {"q": "That is the restaurant ______ we had dinner.", "a": "where"}, {"q": "The person ______ called you didn''t leave a message.", "a": "who"}, {"q": "The car ______ was stolen was found yesterday.", "a": "which"}, {"q": "The woman ______ husband is a pilot is my aunt.", "a": "whose"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (2, 'B1', 'Gerund Phrases as Subjects', 'Use gerunds to start sentences naturally', 'bi-chat-left-text', '<h3>Theory</h3><p>A <strong>Gerund</strong> (-ing form) is used as a <strong>Noun</strong>. This allows an action

                        to be the <strong>Subject</strong> of a sentence.</p><div class="alert alert-primary">
<strong>Rule:</strong> When a sentence starts with a verb, we usually use the

                        <strong>Gerund</strong>, not the Infinitive.<br/>
<em><strong>Swimming</strong> is fun.</em> (Standard) vs <em>To swim is fun.</em>

                        (Formal/Old-fashioned).

                    </div><h5>1. Common Structures</h5><ul class="list-group mb-3">
<li class="list-group-item bg-dark text-white">
<strong>Subject + Be + Adjective</strong><br/>
<em><strong>Reading</strong> is important.</em>
</li>
<li class="list-group-item bg-dark text-white">
<strong>Subject + Verb + Object</strong><br/>
<em><strong>Cooking</strong> takes time.</em>
</li>
<li class="list-group-item bg-dark text-white">
<strong>Negative Gerunds (Not + -ing)</strong><br/>
<em><strong>Not sleeping</strong> enough is dangerous.</em>
</li>
</ul><h5>2. Gerund Phrases (Subject + Object)</h5><p>The gerund can take its own object to form a phrase that acts as one big noun.</p><div class="table-responsive">
<table class="table table-bordered text-white">
<tr>
<td><strong>Structure</strong></td>
<td>[Verb-ing + Object] + [Singular Verb]</td>
</tr>
<tr>
<td><strong>Example</strong></td>
<td>[<strong>Watching movies</strong>] <strong>is</strong> my hobby.<br/>

                                    (The hobby is one activity: "Watching movies").</td>
</tr>
</table>
</div><div class="alert alert-warning">
<strong>Warning:</strong> Always use a <strong>Singular Verb</strong> (is, makes, has) even if

                        the object is plural.<br/>

                        - <em>Eating <strong>apples</strong> <strong>is</strong> healthy.</em> (The action of eating is

                        singular).<br/>

                        - <span style="text-decoration: line-through; color: #ff5555;">Eating apples are healthy.</span>
</div>', '{"games": [{"type": "multiple_choice", "title": "Gerund Subjects", "instruction": "Choose the correct form of the verb used as a subject.", "questions": [{"q": "______ is good for your health.", "a": "Running", "options": ["Running", "Run", "To running"]}, {"q": "______ English is not as difficult as it seems.", "a": "Learning", "options": ["Learning", "Learn", "Learned"]}, {"q": "______ too much television is a waste of time.", "a": "Watching", "options": ["Watching", "Watch", "Watched"]}, {"q": "______ late at night makes me tired.", "a": "Working", "options": ["Working", "Work", "Works"]}, {"q": "______ a second language opens many doors.", "a": "Speaking", "options": ["Speaking", "Speak", "Speaks"]}]}, {"type": "unscramble", "title": "Unscramble Gerunds", "instruction": "Put the words in the correct order to form a sentence with a gerund subject.", "questions": [{"q": "fun is video playing games", "a": "playing video games is fun"}, {"q": "is relaxing music listening to", "a": "listening to music is relaxing"}, {"q": "healthy is vegetables eating", "a": "eating vegetables is healthy"}, {"q": "a skill is cooking", "a": "cooking is a skill"}, {"q": "a great hobby is reading", "a": "reading is a great hobby"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (3, 'B1', 'Gerunds and Infinitives', 'Know which verbs take -ing or to + verb', 'bi-diagram-3', '<h3>Theory</h3><p>Some verbs are followed by a <strong>Gerund</strong> (-ing), others by an

                        <strong>Infinitive</strong> (to + verb), and some by both.

                    </p><div class="row">
<div class="col-md-6">
<div class="card bg-dark text-white border-info mb-3">
<div class="card-header border-info"><strong>1. Verbs + GERUND (-ing)</strong></div>
<div class="card-body">
<p class="card-text">Use after verbs that express <em>dislike, enjoyment, or

                                            finishing</em>.</p>
<ul>
<li><strong>Enjoy:</strong> I <em>enjoy</em> <strong>reading</strong>.</li>
<li><strong>Avoid:</strong> He <em>avoids</em> <strong>eating</strong> sugar.

                                        </li>
<li><strong>Finish:</strong> She <em>finished</em> <strong>working</strong>.

                                        </li>
<li><strong>Mind:</strong> Do you <em>mind</em> <strong>helping</strong>?</li>
<li><strong>Suggest:</strong> I <em>suggest</em> <strong>going</strong> home.

                                        </li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark text-white border-warning mb-3">
<div class="card-header border-warning"><strong>2. Verbs + INFINITIVE (to...)</strong>
</div>
<div class="card-body">
<p class="card-text">Use after verbs that express <em>future plans, wishes, or

                                            decisions</em>.</p>
<ul>
<li><strong>Want:</strong> I <em>want</em> <strong>to go</strong>.</li>
<li><strong>Decide:</strong> We <em>decided</em> <strong>to stay</strong>.</li>
<li><strong>Hope:</strong> I <em>hope</em> <strong>to see</strong> you.</li>
<li><strong>Plan:</strong> He <em>plans</em> <strong>to study</strong>.</li>
<li><strong>Offer:</strong> She <em>offered</em> <strong>to help</strong>.</li>
</ul>
</div>
</div>
</div>
</div><h5>3. Verbs with Change in Meaning</h5><p>Some verbs take both, but the meaning changes completely.</p><div class="table-responsive">
<table class="table table-bordered text-white" style="background-color: #343a40;">
<thead>
<tr>
<th>Verb</th>
<th>+ Gerund (Memory/Past)</th>
<th>+ Infinitive (Purpose/Action)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Stop</strong></td>
<td>Stop an activity forever.<br/><em>"He stopped <strong>smoking</strong>."</em>
</td>
<td>Stop in order to do something.<br/><em>"He stopped <strong>to
                                                smoke</strong>."</em>
</td>
</tr>
<tr>
<td><strong>Remember</strong></td>
<td>Recall a past memory.<br/><em>"I remember <strong>locking</strong> the
                                            door."</em>
</td>
<td>Remember a task you need to do.<br/><em>"Remember <strong>to lock</strong> the

                                            door."</em></td>
</tr>
<tr>
<td><strong>Try</strong></td>
<td>Experiment with something.<br/><em>"Try <strong>Restarting</strong> your
                                            PC."</em>
</td>
<td>Attempt to do something difficult.<br/><em>"I tried <strong>to lift</strong>

                                            it."</em></td>
</tr>
</tbody>
</table>
</div>', '{"games": [{"type": "multiple_choice", "title": "As ... As Comparisons", "instruction": "Complete the comparisons using ''as...as''.", "questions": [{"q": "He is ______ his brother.", "a": "as tall as", "options": ["as tall as", "so tall like", "tall like"]}, {"q": "This car is not ______ that one.", "a": "as fast as", "options": ["as fast as", "so fast like", "fast as"]}, {"q": "I can run ______ you.", "a": "as quickly as", "options": ["as quickly as", "as quick like", "so quick"]}, {"q": "She is ______ she looks.", "a": "as old as", "options": ["as old as", "old as", "as old like"]}, {"q": "The exam was not ______ I expected.", "a": "as hard as", "options": ["as hard as", "so hard like", "as hard like"]}]}, {"type": "fill_in", "title": "Complete the Comparison", "instruction": "Type the missing words (as + adjective + as).", "questions": [{"q": "Madrid is not ______ (big) London.", "a": "as big as"}, {"q": "I''m not ______ (tired) I was yesterday.", "a": "as tired as"}, {"q": "Is your coffee ______ (strong) mine?", "a": "as strong as"}, {"q": "Physics is ______ (difficult) Chemistry.", "a": "as difficult as"}, {"q": "Your phone is ______ (expensive) mine.", "a": "as expensive as"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (4, 'B1', 'Describing Problems 1', 'Talk about damage using adjectives and nouns', 'bi-tools', '<h3>Theory</h3><p>We can describe everyday problems in two main ways: using an <strong>Adjective</strong> (Past

                        Participle) or a <strong>Noun</strong>.</p><div class="row">
<div class="col-md-6">
<div class="alert alert-dark border-info">
<strong>1. BE + Adjective</strong><br/>
<em>"The car <strong>is broken</strong>."</em><br/>

                                (Focus on the state)

                            </div>
</div>
<div class="col-md-6">
<div class="alert alert-dark border-warning">
<strong>2. HAVE + Noun</strong><br/>
<em>"The car <strong>has a dent</strong>."</em><br/>

                                (Focus on the specific flaw)

                            </div>
</div>
</div><h5>Common Vocabulary Pairs</h5><div class="table-responsive">
<table class="table table-dark table-hover table-bordered">
<thead>
<tr>
<th>Adjective (Participle)</th>
<th>Noun</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Broken</td>
<td>Break / Opener</td>
<td><em>The window is <strong>broken</strong>.</em></td>
</tr>
<tr>
<td>Cracked</td>
<td>Crack</td>
<td><em>The vase has a <strong>crack</strong>.</em></td>
</tr>
<tr>
<td>Damaged</td>
<td>Damage</td>
<td><em>The car is <strong>damaged</strong>.</em></td>
</tr>
<tr>
<td>Leaking</td>
<td>Leak</td>
<td><em>The pipe has a <strong>leak</strong>.</em></td>
</tr>
<tr>
<td>Scratched</td>
<td>Scratch</td>
<td><em>The screen is <strong>scratched</strong>.</em></td>
</tr>
<tr>
<td>Stained</td>
<td>Stain</td>
<td><em>The shirt has a <strong>stain</strong>.</em></td>
</tr>
<tr>
<td>Torn</td>
<td>Tear</td>
<td><em>The paper is <strong>torn</strong>.</em></td>
</tr>
</tbody>
</table>
</div>', '{"games": [{"type": "multiple_choice", "title": "Interrupting Actions", "instruction": "Choose the correct verb forms (Continuous or Simple).", "questions": [{"q": "I ______ when the phone rang.", "a": "was sleeping", "options": ["was sleeping", "slept", "sleep"]}, {"q": "They ______ dinner when I arrived.", "a": "were having", "options": ["were having", "had", "have"]}, {"q": "What ______ when you saw the accident?", "a": "were you doing", "options": ["were you doing", "did you do", "you were doing"]}, {"q": "It ______ when we left the house.", "a": "was raining", "options": ["was raining", "rained", "rains"]}, {"q": "I saw her while she ______ for the bus.", "a": "was waiting", "options": ["was waiting", "waited", "waits"]}]}, {"type": "fill_in", "title": "Fill the Past Tenses", "instruction": "Use Past Simple or Past Continuous.", "questions": [{"q": "While I ______ (study), the lights went out.", "a": "was studying"}, {"q": "He ______ (break) his leg while he was skiing.", "a": "broke"}, {"q": "When they ______ (hear) the news, they were happy.", "a": "heard"}, {"q": "She ______ (cook) when the fire started.", "a": "was cooking"}, {"q": "What ______ (happen) while you were away?", "a": "happened"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (5, 'B1', 'Describing Problems 2', 'Express maintenance and persistence', 'bi-wrench-adjustable', '<h3>Theory</h3><p>In this topic, we look at advanced ways to talk about maintenance and recurring actions using

                        <strong>Gerunds</strong> (-ing).

                    </p><h5 class="text-info mt-3">1. NEED + Gerund (Passive Meaning)</h5><p>We use this structure when something requires fixing (passive), but we focus on the

                        <strong>object</strong>, not the person doing the work.

                    </p><div class="table-responsive">
<div class="table-responsive">
<table class="table table-dark table-striped">
<thead>
<tr>
<th>Subject (Thing)</th>
<th>Pattern (Natural)</th>
<th>Meaning (Passive Infinitive)</th>
</tr>
</thead>
<tbody>
<tr>
<td>The car</td>
<td>needs <strong>washing</strong></td>
<td>needs <em>to be washed</em></td>
</tr>
<tr>
<td>My shirt</td>
<td>needs <strong>ironing</strong></td>
<td>needs <em>to be ironed</em></td>
</tr>
<tr>
<td>The grass</td>
<td>needs <strong>cutting</strong></td>
<td>needs <em>to be cut</em></td>
</tr>
</tbody>
</table>
</div>
</div><div class="alert alert-warning">
<strong>⚠️ Common Mistake:</strong> Do NOT use the base verb.<br/>

                        ❌ <em>The room needs clean.</em> (Incorrect)<br/>

                        ✅ <em>The room needs <strong>cleaning</strong>.</em> (Correct)

                    </div><h5 class="text-danger mt-4">2. KEEP + Gerund (Persistence/Repetition)</h5><p>We use <strong>Keep + -ing</strong> to say that someone continues doing something, often when it

                        is annoying or surprising.</p><ul class="list-group mb-3">
<li class="list-group-item bg-dark text-white">
<strong>To imply annoyance:</strong><br/>
<em>"He <strong>keeps calling</strong> me late at night."</em> (I wish he would stop).

                        </li>
<li class="list-group-item bg-dark text-white">
<strong>To imply persistence:</strong><br/>
<em>"If you <strong>keep trying</strong>, you will succeed."</em> (Don''t give up).

                        </li>
<li class="list-group-item bg-dark text-white">
<strong>To imply cycle:</strong><br/>
<em>"The computer <strong>keeps restarting</strong> on its own."</em> (It happens again and

                            again).

                        </li>
</ul><div class="alert alert-secondary">
<strong>Structure:</strong> Subject + <strong>Keep/Keeps</strong> + Verb-ing.<br/>
<em>She keeps forgett<strong>ing</strong> my name.</em> (Third person ''s'' on keep).

                    </div>', '{"games": [{"type": "multiple_choice", "title": "Perfect or Simple?", "instruction": "Distinguish between finished actions and recent/ongoing ones.", "questions": [{"q": "I ______ that movie three times.", "a": "have seen", "options": ["have seen", "saw", "see"]}, {"q": "She ______ to London last year.", "a": "went", "options": ["went", "has gone", "goes"]}, {"q": "______ you ever eaten sushi?", "a": "Have", "options": ["Have", "Did", "Do"]}, {"q": "I ______ my keys! I can''t find them.", "a": "have lost", "options": ["have lost", "lost", "lose"]}, {"q": "We ______ a great time at the party yesterday.", "a": "had", "options": ["had", "have had", "have"]}]}, {"type": "fill_in", "title": "Correct Verb Form", "instruction": "Type the correct form (Present Perfect or Past Simple).", "questions": [{"q": "I ______ (know) him for ten years.", "a": "have known"}, {"q": "They ______ (finish) their homework an hour ago.", "a": "finished"}, {"q": "______ you ______ (see) the news today?", "a": "have seen"}, {"q": "He ______ (buy) a new car last week.", "a": "bought"}, {"q": "She ______ (never / be) to Asia.", "a": "has never been"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (6, 'B1', 'Reported Requests', 'Report orders and requests indirectly', 'bi-megaphone', '<h3>Theory</h3><p>English has different ways to ask people to do things. The modal verb you choose depends on who

                        you are talking to (your relationship) and how difficult the request is.</p><h5 class="text-info mt-3">1. Informal Requests (Friends &amp; Family)</h5><p>We use <strong>Can</strong> and <strong>Will</strong> when the relationship is close and casual.

                        It is direct but not rude among friends.</p><ul class="list-group mb-3">
<li class="list-group-item bg-dark text-white border-info">
<strong>Can you...</strong> (Capability/Permission)<br/>
<em>"<strong>Can</strong> you lend me your pen?"</em><br/>
<em>"<strong>Can</strong> you turn down the music?"</em>
</li>
<li class="list-group-item bg-dark text-white border-info">
<strong>Will you...</strong> (Willingness - careful, can sound demanding if not used with a

                            friendly tone)<br/>
<em>"<strong>Will</strong> you pass me the remote?"</em><br/>
<em>"<strong>Will</strong> you wait a minute?"</em>
</li>
</ul><h5 class="text-warning mt-4">2. Polite Requests (Strangers, Work, Service)</h5><p>We use <strong>Could</strong> and <strong>Would</strong> to be more polite. This "softens" the

                        request. It is the standard for shops, restaurants, and talking to colleagues.</p><ul class="list-group mb-3">
<li class="list-group-item bg-dark text-white border-warning">
<strong>Could you...</strong> (Is it possible for you?)<br/>
<em>"<strong>Could</strong> you help me with this bag?"</em><br/>
<em>"<strong>Could</strong> you speak a little slower, please?"</em>
</li>
<li class="list-group-item bg-dark text-white border-warning">
<strong>Would you...</strong> (Are you willing?)<br/>
<em>"<strong>Would</strong> you please open the door?"</em><br/>
<em>"<strong>Would</strong> you call me a taxi?"</em>
</li>
</ul><h5 class="text-success mt-4">3. Formal &amp; Very Polite: "Would you mind..."</h5><p>This is a very specific structure used when we want to be extremely polite or when the favor is

                        big. It has a special grammar rule.</p><div class="alert alert-success">
<strong>GRAMMAR RULE:</strong><br/>

                        After <strong>"Would you mind..."</strong>, the verb MUST be a <strong>GERUND

                            (-ing)</strong>.<br/>
<br/>

                        Examples:<br/>

                        ✅ <em>"Would you mind <strong>closing</strong> the window?"</em><br/>

                        ✅ <em>"Would you mind <strong>repeating</strong> that?"</em><br/>

                        ✅ <em>"Would you mind <strong>not smoking</strong> in here?"</em> (Negative)<br/>
<br/>

                        ❌ <em>"Would you mind to close..."</em> (Incorrect)<br/>

                        ❌ <em>"Would you mind close..."</em> (Incorrect)

                    </div><div class="alert alert-secondary">
<strong>How to answer "Would you mind...?":</strong><br/>

                        This is tricky! If you say <strong>"No"</strong>, it means you represent <strong>no

                            problem</strong> meant to do the action (Meaning: "Yes, I will do it").<br/>
<br/>

                        A: <em>"Would you mind helping me?"</em><br/>

                        B: <em>"<strong>No, not at all.</strong>"</em> ( = I will help you).<br/>

                        B: <em>"<strong>No, go ahead.</strong>"</em>
</div>', '{"games": [{"type": "multiple_choice", "title": "Possibility", "instruction": "Choose the best modal verb for possibility (may, might, could).", "questions": [{"q": "It ______ rain later, so take an umbrella.", "a": "might", "options": ["might", "must", "should"]}, {"q": "They ______ be at home, but I''m not sure.", "a": "could", "options": ["could", "have to", "won''t"]}, {"q": "I ______ come to the party if I finish work early.", "a": "may", "options": ["may", "will", "must"]}, {"q": "Where is my phone? It ______ be in the car.", "a": "might", "options": ["might", "can''t", "should"]}, {"q": "That ______ be true, but it sounds unlikely.", "a": "could", "options": ["could", "mustn''t", "shall"]}]}, {"type": "unscramble", "title": "Unscramble Possibility", "instruction": "Form a sentence using a modal of possibility.", "questions": [{"q": "late might be they", "a": "they might be late"}, {"q": "work could it", "a": "it could work"}, {"q": "snow may it tonight", "a": "it may snow tonight"}, {"q": "phone my could be here", "a": "my phone could be here"}, {"q": "win might she the race", "a": "she might win the race"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (7, 'B1', 'Reported Commands', 'Report instructions from others', 'bi-chat-dots', '<h3>Theory</h3><p>Indirect requests are softer and more polite than direct questions. We often use them when

                        speaking to strangers or asking for favors. Be careful with the <strong>Word Order</strong>!</p><h5 class="text-info mt-3">1. The Golden Rule: Word Order</h5><p>In a direct question, the verb comes <em>before</em> the subject. In an indirect request, the

                        word order is like a normal sentence (Subject + Verb).</p><div class="table-responsive">
<div class="table-responsive">
<table class="table table-dark table-striped align-middle">
<thead>
<tr>
<th>Type</th>
<th>Structure</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="text-danger"><strong>Direct Question</strong></td>
<td><strong>Auxiliary/Verb + Subject</strong></td>
<td><em>"Where <strong>is</strong> the bank?"</em></td>
</tr>
<tr>
<td class="text-success"><strong>Indirect Request</strong></td>
<td><strong>Intro + Wh- + Subject + Verb</strong></td>
<td><em>"Can you tell me where <strong>the bank is</strong>?"</em></td>
</tr>
</tbody>
</table>
</div>
</div><div class="alert alert-warning">
<strong>⚠️ Do / Does / Did Disappear!</strong><br/>

                        When creating an indirect question, <strong>delete</strong> the auxiliary <em>do, does,</em> or

                        <em>did</em> from the question.<br/>
<br/>

                        Direct: <em>"What time <strong>does</strong> the store close?"</em><br/>

                        Indirect: <em>"Do you know what time <strong>the store closes</strong>?"</em> (Add ''s'' if

                        needed!)

                    </div><h5 class="text-info mt-4">2. Yes/No Questions (If / Whether)</h5><p>If the direct question has no "Wh-" word (What, Where, Who), use <strong>if</strong> or

                        <strong>whether</strong>.

                    </p><ul class="list-group mb-3">
<li class="list-group-item bg-dark text-white border-info">

                            Direct: <em>"Is he married?"</em><br/>

                            Indirect: <em>"I wonder <strong>if</strong> he is married."</em>
</li>
<li class="list-group-item bg-dark text-white border-info">

                            Direct: <em>"Did she call?"</em><br/>

                            Indirect: <em>"Can you tell me <strong>whether</strong> she called?"</em>
</li>
</ul>', '{"games": [{"type": "multiple_choice", "title": "Passive Forms", "instruction": "Choose the correct passive construction.", "questions": [{"q": "The book ______ by a famous author.", "a": "was written", "options": ["was written", "wrote", "is writing"]}, {"q": "Many cars ______ in this factory.", "a": "are made", "options": ["are made", "make", "made"]}, {"q": "Dinner ______ at 7 PM every day.", "a": "is served", "options": ["is served", "serves", "served"]}, {"q": "The window ______ yesterday.", "a": "was broken", "options": ["was broken", "broke", "is broken"]}, {"q": "English ______ all over the world.", "a": "is spoken", "options": ["is spoken", "speaks", "spoke"]}]}, {"type": "fill_in", "title": "Complete the Passive", "instruction": "Use the correct form of ''be'' + past participle.", "questions": [{"q": "The letter ______ (post) this morning.", "a": "was posted"}, {"q": "Rice ______ (grow) in many countries.", "a": "is grown"}, {"q": "These photos ______ (take) with my new camera.", "a": "were taken"}, {"q": "Hamlet ______ (write) by Shakespeare.", "a": "was written"}, {"q": "The work ______ (do) by a professional.", "a": "is done"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (8, 'B1', 'Quantifiers', 'Express quantity with precision', 'bi-123', '<h3>Theory</h3><p>At B1 level, we compare more than just adjectives. We compare quantities (nouns) and actions

                        (verbs).</p><h5 class="text-warning mt-3">1. Comparing Quantities (Nouns)</h5><p>We use <strong>More</strong>, <strong>Less</strong>, and <strong>Fewer</strong> followed by a

                        noun.</p><div class="table-responsive">
<div class="table-responsive">
<table class="table table-dark table-striped align-middle">
<thead>
<tr>
<th>Quantity</th>
<th>Countable Nouns (Plural)</th>
<th>Uncountable Nouns (Singular)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>+ (More)</strong></td>
<td><strong>More</strong> friends</td>
<td><strong>More</strong> time</td>
</tr>
<tr>
<td><strong>- (Less)</strong></td>
<td class="text-danger">❌ <em>Less friends</em> (Grammar Mistake!)</td>
<td>✅ <strong>Less</strong> money<br/>✅ <strong>Less</strong> water</td>
</tr>
<tr>
<td><strong>- (Fewer)</strong></td>
<td>✅ <strong>Fewer</strong> people<br/>✅ <strong>Fewer</strong> mistakes</td>
<td class="text-danger">❌ <em>Fewer water</em> (Grammar Mistake!)</td>
</tr>
</tbody>
</table>
</div>
</div><div class="alert alert-warning">
<strong>Rule:</strong> Use <strong>FEWER</strong> for things you can count (1, 2, 3...).<br/>

                        Use <strong>LESS</strong> for abstract concepts (singular nouns).

                    </div><h5 class="text-info mt-4">2. Comparing Actions (Verbs)</h5><p>When comparing actions, we use <strong>Subject + Verb + more/less + than</strong>.</p><ul class="list-group mb-3">
<li class="list-group-item bg-dark text-white border-info">
<em>"He <strong>studies more than</strong> I do."</em>
</li>
<li class="list-group-item bg-dark text-white border-info">
<em>"This car <strong>costs less than</strong> that one."</em>
</li>
</ul><h5 class="text-success mt-4">3. Comparing Adjectives (Review)</h5><p>Don''t forget the basics: Short words use <strong>-er</strong>, long words use

                        <strong>more</strong>.

                    </p><ul class="list-group mb-3">
<li class="list-group-item bg-dark text-white border-success">
<strong>Short:</strong> Fast → Faster (❌ <em>More fast</em>)

                        </li>
<li class="list-group-item bg-dark text-white border-success">
<strong>Long:</strong> Expensive → More expensive (❌ <em>Expensiver</em>)

                        </li>
<li class="list-group-item bg-dark text-white border-success">
<strong>Irregular:</strong> Good → Better, Bad → Worse, Far → Further

                        </li>
</ul>', '{"games": [{"type": "multiple_choice", "title": "He said that...", "instruction": "Choose the correct reported speech form.", "questions": [{"q": "''I am tired'' -> He said he ______ tired.", "a": "was", "options": ["was", "is", "am"]}, {"q": "''I will call you'' -> She said she ______ call me.", "a": "would", "options": ["would", "will", "can"]}, {"q": "''I have finished'' -> He said he ______ finished.", "a": "had", "options": ["had", "has", "have"]}, {"q": "''I can swim'' -> She said she ______ swim.", "a": "could", "options": ["could", "can", "can''t"]}, {"q": "''I like pizza'' -> He said he ______ pizza.", "a": "liked", "options": ["liked", "likes", "like"]}]}, {"type": "fill_in", "title": "Backshift the Tense", "instruction": "Change the direct speech to reported speech.", "questions": [{"q": "''I work here'' -> He said he worked ______.", "a": "there"}, {"q": "''I am happy'' -> She said she ______ happy.", "a": "was"}, {"q": "''I bought a car'' -> He said he ______ bought a car.", "a": "had"}, {"q": "''I''ll help you'' -> She said she ______ help me.", "a": "would"}, {"q": "''I want to go'' -> He said he ______ to go.", "a": "wanted"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (9, 'B1', 'Narrative Tenses', 'Tell stories in the past effectively', 'bi-book', '<h3>Theory</h3><p>To tell stories in the past, we use three main tenses together. Think of it as a movie: The

                        sequence of events, the background scenes, and the flashbacks.</p><div class="table-responsive">
<div class="table-responsive">
<table class="table table-dark table-striped align-middle">
<thead>
<tr>
<th>Tense</th>
<th>Function in Story</th>
<th>Structure</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="text-primary"><strong>Past Simple</strong></td>
<td>The Main Events (Sequential actions)</td>
<td>Verb-ed / Irregular</td>
<td><em>"I <strong>woke</strong> up and <strong>opened</strong> the door."</em>
</td>
</tr>
<tr>
<td class="text-info"><strong>Past Continuous</strong></td>
<td>Background / Interrupted Action</td>
<td>Was/Were + -ing</td>
<td><em>"The sun <strong>was shining</strong>... I <strong>was sleeping</strong>

                                                when..."</em></td>
</tr>
<tr>
<td class="text-warning"><strong>Past Perfect</strong></td>
<td>The Flashback (Before the past)</td>
<td>Had + Participle</td>
<td><em>"The train <strong>had already left</strong> when I arrived."</em></td>
</tr>
</tbody>
</table>
</div>
</div><h5 class="text-danger mt-4">Timeline Visualization</h5><div class="p-3 bg-secondary rounded text-white mb-3" style="position: relative;">
<p class="mb-1"><strong>Past Perfect (Earlier)</strong> ← <strong>Past Simple

                                (Event)</strong> → <strong>Now</strong></p>
<hr style="border-top: 2px solid white;"/>
<p>
<span class="badge bg-warning text-dark">Train left (8:00)</span> ...

                            <span class="badge bg-primary">I arrived (8:05)</span>
</p>
<p class="small"><em>"When I <strong>arrived</strong> (8:05), the train <strong>had

                                    left</strong> (8:00)."</em> (The train implies Action 1, Arrival is Action 2).</p>
</div><div class="alert alert-info">
<strong>Common Combination:</strong><br/>

                        We often use <strong>When</strong> + Past Simple (Interruption) and <strong>While</strong> +

                        Past Continuous (Long action).<br/>
<em>"<strong>While</strong> I was cooking, the phone rang."</em>
</div>', '{"games": [{"type": "multiple_choice", "title": "If I...", "instruction": "Choose 1st or 2nd conditional.", "questions": [{"q": "If I ______ millions, I would buy a boat.", "a": "won", "options": ["won", "win", "wins"]}, {"q": "If it ______ tomorrow, we''ll stay home.", "a": "rains", "options": ["rains", "rained", "rain"]}, {"q": "If I ______ you, I''d talk to him.", "a": "were", "options": ["were", "was", "am"]}, {"q": "If she ______ enough money, she''ll go on vacation.", "a": "has", "options": ["has", "had", "have"]}, {"q": "What ______ you do if you saw a ghost?", "a": "would", "options": ["would", "will", "do"]}]}, {"type": "fill_in", "title": "Complete the Condition", "instruction": "Type the correct verb form.", "questions": [{"q": "If I ______ (be) taller, I''d play basketball.", "a": "were"}, {"q": "If we ______ (hurry), we''ll catch the train.", "a": "hurry"}, {"q": "I ______ (help) you if I could.", "a": "would help"}, {"q": "If you ______ (study), you''ll pass.", "a": "study"}, {"q": "She ______ (be) happy if she won.", "a": "would be"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (10, 'B1', 'Noun Phrases', 'Build complex noun structures', 'bi-diagram-2', '<h3>Theory</h3><p>A noun phrase is a group of words built around a noun. The challenge isn''t just knowing

                        adjectives, but putting them in the <strong>Correct Order</strong>.</p><p>When we use multiple adjectives before a noun, we follow a specific sequence:

                        <strong>OSASCOMP</strong>.

                    </p><div class="table-responsive">
<div class="table-responsive">
<table class="table table-dark table-sm table-bordered text-center align-middle">
<thead>
<tr class="table-secondary text-dark">
<th>Determiner</th>
<th>Opinion</th>
<th>Size</th>
<th>Age</th>
<th>Shape</th>
<th>Color</th>
<th>Origin</th>
<th>Material</th>
<th>Purpose</th>
<th>NOUN</th>
</tr>
</thead>
<tbody>
<tr>
<td>A</td>
<td class="text-warning">Beautiful</td>
<td>Big</td>
<td>Old</td>
<td>Square</td>
<td class="text-info">Blue</td>
<td>French</td>
<td>Wooden</td>
<td>Dining</td>
<td><strong>TABLE</strong></td>
</tr>
<tr>
<td>The</td>
<td class="text-warning">Ugly</td>
<td>Small</td>
<td>New</td>
<td>Round</td>
<td class="text-info">Red</td>
<td>Italian</td>
<td>Plastic</td>
<td>Sleeping</td>
<td><strong>BAG</strong></td>
</tr>
</tbody>
</table>
</div>
</div><div class="alert alert-secondary mt-3">
<strong>Tip:</strong> We rarely use ALL categories at once. Usually, it''s 2 or 3 adjectives.<br/>
<em>"A <strong>lovely little old</strong> village."</em> (Opinion - Size - Age).

                    </div><h5 class="text-info mt-4">Components of a Noun Phrase</h5><ul class="list-group mb-3">
<li class="list-group-item bg-dark text-white border-info">
<strong>Head Noun:</strong> The main word (e.g., <em>Car</em>).

                        </li>
<li class="list-group-item bg-dark text-white border-info">
<strong>Pre-modifiers:</strong> Adjectives before the noun (e.g., <em>Red, fast</em>).

                        </li>
<li class="list-group-item bg-dark text-white border-info">
<strong>Post-modifiers:</strong> Phrases after the noun (e.g., <em>...in the

                                street</em>).<br/>
<em>"The <strong class="text-warning">red</strong> <strong>car</strong> <span class="text-muted">in the street</span> is mine."</em>
</li>
</ul>', '{"games": [{"type": "multiple_choice", "title": "Common Phrasals", "instruction": "Choose the correct preposition.", "questions": [{"q": "I need to look ______ my keys.", "a": "for", "options": ["for", "at", "after"]}, {"q": "Please turn ______ the lights.", "a": "off", "options": ["off", "out", "away"]}, {"q": "He''s trying to give ______ smoking.", "a": "up", "options": ["up", "out", "in"]}, {"q": "We need to set ______ early for the airport.", "a": "off", "options": ["off", "up", "on"]}, {"q": "She gets ______ well with her sister.", "a": "on", "options": ["on", "up", "at"]}]}, {"type": "fill_in", "title": "Fill the verb", "instruction": "Type the correct phrasal verb part.", "questions": [{"q": "I ______ up at 7 every morning.", "a": "get"}, {"q": "Can you ______ up the volume?", "a": "turn"}, {"q": "Don''t ______ up! You can do it.", "a": "give"}, {"q": "I''m ______ for my glasses.", "a": "looking"}, {"q": "Please ______ in the form.", "a": "fill"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (11, 'B1', 'Future Forms Review', 'Master all ways to talk about the future', 'bi-clock-forward', '<h3>Theory</h3><p class="lead">We use <strong>be supposed to</strong> when there is a difference between what

                        happens

                        and what is <em>expected rules, schedules, or custom</em>.</p><div class="row">
<div class="col-md-6">
<div class="card bg-dark text-white border-warning mb-3">
<div class="card-header border-warning"><strong>1. Present: Rules &amp; Schedules</strong>
</div>
<div class="card-body">
<p class="card-text">Used for general rules, customs, or timetabled events.</p>
<ul>
<li><strong>Rules:</strong> "You <em>are supposed to</em> wear a uniform."</li>
<li><strong>Customs:</strong> "You <em>are supposed to</em> tip the waiter."

                                        </li>
<li><strong>Schedule:</strong> "The train <em>is supposed to</em> leave now."

                                        </li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark text-white border-danger mb-3">
<div class="card-header border-danger"><strong>2. Past: Unfulfilled

                                        Expectations</strong>
</div>
<div class="card-body">
<p class="card-text">Use <strong>was/were supposed to</strong> for things that were

                                        planned but <strong>didn''t happen</strong>.</p>
<ul>
<li>"I <em>was supposed to</em> study." <br/><span class="text-danger">(But I

                                                slept).</span></li>
<li>"They <em>were supposed to</em> call." <br/><span class="text-danger">(But

                                                they forgot).</span></li>
</ul>
</div>
</div>
</div>
</div><div class="alert alert-secondary mt-3">
<h5>⚠️ Important: Prohibition</h5>
<p><strong>Not supposed to</strong> often means <strong>Not allowed</strong> (Prohibited).</p>
<ul>
<li>"You <strong>aren''t supposed to</strong> smoke here." (= It is forbidden).</li>
</ul>
</div><div class="table-responsive">
<table class="table table-dark table-bordered mt-4">
<thead>
<tr class="text-warning">
<th>Subject</th>
<th>Be (not) supposed to</th>
<th>Verb (Base Form)</th>
</tr>
</thead>
<tbody>
<tr>
<td>I</td>
<td>am / was</td>
<td>supposed to <strong>go</strong>.</td>
</tr>
<tr>
<td>She / He</td>
<td>is / was</td>
<td>supposed to <strong>work</strong>.</td>
</tr>
<tr>
<td>We / They</td>
<td>are / were</td>
<td>supposed to <strong>help</strong>.</td>
</tr>
</tbody>
</table>
</div>', '{"games": [{"type": "multiple_choice", "title": "On, In, or At?", "instruction": "Choose the correct preposition of time.", "questions": [{"q": "I''ll see you ______ Monday.", "a": "on", "options": ["on", "in", "at"]}, {"q": "My birthday is ______ October.", "a": "in", "options": ["in", "on", "at"]}, {"q": "The train leaves ______ 8:30.", "a": "at", "options": ["at", "on", "in"]}, {"q": "I like to read ______ night.", "a": "at", "options": ["at", "in", "on"]}, {"q": "We met ______ 2015.", "a": "in", "options": ["in", "on", "at"]}]}, {"type": "fill_in", "title": "Time Gaps", "instruction": "Type: on, in, or at.", "questions": [{"q": "The meeting is ______ Tuesday morning.", "a": "on"}, {"q": "I graduated ______ July.", "a": "in"}, {"q": "Call me ______ noon.", "a": "at"}, {"q": "The flowers bloom ______ spring.", "a": "in"}, {"q": "Be there ______ 5 PM.", "a": "at"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (12, 'B1', 'Passives Review', 'Understand passive constructions with by/with', 'bi-arrow-left-right', '<h3>Theory</h3><p class="lead">Passive verbs are usually followed by <strong>by</strong> (the agent), but many

                        common expressions use <strong>other prepositions</strong> to describe states or composition.

                    </p><div class="row">
<div class="col-md-4">
<div class="card bg-dark text-white border-info mb-3">
<div class="card-header border-info"><strong>1. Composition &amp; Content</strong></div>
<div class="card-body">
<ul class="list-unstyled">
<li>• Composed <strong>of</strong></li>
<li>• Made <strong>of</strong> / <strong>from</strong></li>
<li>• Filled <strong>with</strong></li>
</ul>
<small class="text-muted">"Example: The cake is made <strong>of</strong>

                                        chocolate."</small>
</div>
</div>
</div>
<div class="col-md-4">
<div class="card bg-dark text-white border-warning mb-3">
<div class="card-header border-warning"><strong>2. State &amp; Condition</strong></div>
<div class="card-body">
<ul class="list-unstyled">
<li>• Covered <strong>with</strong> / <strong>in</strong></li>
<li>• Crowded <strong>with</strong></li>
<li>• Dressed <strong>in</strong></li>
</ul>
<small class="text-muted">"Example: The mountain is covered <strong>with</strong>

                                        snow."</small>
</div>
</div>
</div>
<div class="col-md-4">
<div class="card bg-dark text-white border-danger mb-3">
<div class="card-header border-danger"><strong>3. Mental State &amp; Attitude</strong></div>
<div class="card-body">
<ul class="list-unstyled">
<li>• Interested <strong>in</strong></li>
<li>• Scared / Terrified <strong>of</strong></li>
<li>• Known <strong>for</strong></li>
</ul>
<small class="text-muted">"Example: He is known <strong>for</strong> his

                                        music."</small>
</div>
</div>
</div>
</div><div class="table-responsive">
<table class="table table-dark table-bordered mt-3">
<thead>
<tr class="text-info">
<th>Subject</th>
<th>Be + Past Participle</th>
<th>Preposition</th>
<th>Object</th>
</tr>
</thead>
<tbody>
<tr>
<td>The room</td>
<td>is crowded</td>
<td><strong>with</strong></td>
<td>people.</td>
</tr>
<tr>
<td>She</td>
<td>is interested</td>
<td><strong>in</strong></td>
<td>art.</td>
</tr>
</tbody>
</table>
</div>', '{"games": [{"type": "multiple_choice", "title": "Where is it?", "instruction": "Choose the correct preposition of place.", "questions": [{"q": "The keys are ______ the table.", "a": "on", "options": ["on", "in", "at"]}, {"q": "He is sitting ______ his two friends.", "a": "between", "options": ["between", "among", "next"]}, {"q": "The dog is hiding ______ the sofa.", "a": "behind", "options": ["behind", "on", "under"]}, {"q": "There is a fly ______ the room.", "a": "in", "options": ["in", "on", "at"]}, {"q": "The station is ______ the corner.", "a": "at", "options": ["at", "in", "on"]}]}, {"type": "fill_in", "title": "Place Gaps", "instruction": "Type: on, in, at, between, or behind.", "questions": [{"q": "The cat is ______ the box.", "a": "in"}, {"q": "My house is ______ the park and the mall.", "a": "between"}, {"q": "Wait for me ______ the entrance.", "a": "at"}, {"q": "The picture is ______ the wall.", "a": "on"}, {"q": "Who is that ______ you?", "a": "behind"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (13, 'B1', 'Purpose Clauses', 'Express reasons and purposes clearly', 'bi-bullseye', '<h3>Theory</h3><p class="lead">The <strong>infinitive (to + verb)</strong> is used in several specific structures.

                        It''s not just about "verbs"!</p><nav>
<div class="nav nav-tabs" id="nav-tab" role="tablist">
<button aria-selected="true" class="nav-link active" data-bs-target="#nav-purpose" data-bs-toggle="tab" id="nav-purpose-tab" role="tab" type="button">1.

                                Purpose</button>
<button aria-selected="false" class="nav-link" data-bs-target="#nav-adj" data-bs-toggle="tab" id="nav-adj-tab" role="tab" type="button">2. Adjectives</button>
<button aria-selected="false" class="nav-link" data-bs-target="#nav-too" data-bs-toggle="tab" id="nav-too-tab" role="tab" type="button">3. Too / Enough</button>
</div>
</nav><div class="tab-content border border-top-0 p-3 mb-4 rounded-bottom" id="nav-tabContent" style="background-color: #212529;">
<!-- TAB 1: PURPOSE -->
<div class="tab-pane fade show active" id="nav-purpose" role="tabpanel">
<h5 class="text-primary">Clauses of Purpose</h5>
<p>We use the infinitive to say <strong>why</strong> we do something.</p>
<div class="row">
<div class="col-md-6">
<div class="card bg-dark border-primary mb-3">
<div class="card-body">
<h6 class="card-title text-primary">Standard Forms</h6>
<ul class="list-unstyled">
<li><strong>To + Verb:</strong> <br/>"I went to the shop <em>to buy</em>

                                                    milk."</li>
<li class="mt-2"><strong>In order to + Verb</strong> (Formal): <br/>"He

                                                    stood up <em>in order to see</em> better."</li>
<li class="mt-2"><strong>So as to + Verb</strong> (Formal): <br/>"We

                                                    drove fast <em>so as to arrive</em> early."</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-danger mb-3">
<div class="card-body">
<h6 class="card-title text-danger">Negative Purpose</h6>
<p class="small">We <strong>cannot</strong> say "to not". We must use:</p>
<ul class="list-unstyled">
<li><strong>In order NOT to:</strong> <br/>"I whispered <em>in order not

                                                        to wake</em> the baby."</li>
<li><strong>So as NOT to:</strong> <br/>"Walk quietly <em>so as not to

                                                        make</em> noise."</li>
</ul>
</div>
</div>
</div>
</div>
<div class="alert alert-warning mt-2">
<h5>⚠️ Common Mistake: To vs For</h5>
<p class="mb-0">

                                    Use <strong>TO + Verb</strong> (action) <span class="text-success">✔ "I went

                                        <strong>to see</strong> him."</span><br/>

                                    Use <strong>FOR + Noun</strong> (object) <span class="text-success">✔ "I went

                                        <strong>for a coffee</strong>."</span><br/>
<span class="text-danger">❌ NEVER: "I went <strong>for see</strong> him."</span>
</p>
</div>
</div>
<!-- TAB 2: ADJECTIVES -->
<div class="tab-pane fade" id="nav-adj" role="tabpanel">
<h5 class="text-success">After Adjectives</h5>
<p>We often use the structure: <strong>It + be + Adjective + (for person) + to +

                                    verb</strong>.</p>
<div class="table-responsive">
<table class="table table-dark table-striped">
<thead>
<tr>
<th>Subject</th>
<th>Be + Adj</th>
<th>(For Person)</th>
<th>Infinitive</th>
</tr>
</thead>
<tbody>
<tr>
<td>It</td>
<td>is <strong>easy</strong></td>
<td>-</td>
<td><strong>to learn</strong> English.</td>
</tr>
<tr>
<td>It</td>
<td>was <strong>hard</strong></td>
<td>for <strong>me</strong></td>
<td><strong>to say</strong> goodbye.</td>
</tr>
<tr>
<td>It</td>
<td>is <strong>important</strong></td>
<td>for <strong>you</strong></td>
<td><strong>to listen</strong> carefully.</td>
</tr>
</tbody>
</table>
</div>
<p class="small text-muted mt-2">* Note: We can also say "He is happy to help", "I was

                                surprised to see her".</p>
</div>
<!-- TAB 3: TOO / ENOUGH -->
<div class="tab-pane fade" id="nav-too" role="tabpanel">
<h5 class="text-info">Too and Enough</h5>
<p>These words change the meaning of the adjective/verb, followed by an infinitive.</p>
<div class="row">
<div class="col-md-6">
<div class="card bg-dark border-secondary mb-3">
<div class="card-header text-center"><strong>TOO (Excess - Negative)</strong>
</div>
<div class="card-body text-center">
<h1>Too + Adj</h1>
<p class="lead">"It is <strong>too hot</strong> to drink."</p>
<p class="text-muted text-small">(= It is so hot that I

                                                <strong>can''t</strong> drink it)

                                            </p>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-info mb-3">
<div class="card-header text-center"><strong>ENOUGH (Sufficient -

                                                Positive)</strong></div>
<div class="card-body text-center">
<h1>Adj + Enough</h1>
<p class="lead">"He is <strong>old enough</strong> to vote."</p>
<p class="text-muted text-small">(= He has the correct age)</p>
</div>
</div>
</div>
</div>
<div class="alert alert-info">
<strong>Comparison:</strong><br/>

                                "The box is <strong>too heavy</strong> to lift." (= Impossible)<br/>

                                "The box is <strong>light enough</strong> to lift." (= Possible)

                            </div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "Self pronouns", "instruction": "Choose the correct reflexive pronoun.", "questions": [{"q": "I told ______ not to worry.", "a": "myself", "options": ["myself", "me", "mineself"]}, {"q": "They looked at ______ in the mirror.", "a": "themselves", "options": ["themselves", "theirselves", "themself"]}, {"q": "She taught ______ how to play guitar.", "a": "herself", "options": ["herself", "her", "hers"]}, {"q": "We enjoyed ______ at the party.", "a": "ourselves", "options": ["ourselves", "ourself", "us"]}, {"q": "Did you cut ______ while cooking?", "a": "yourself", "options": ["yourself", "you", "yoursel"]}]}, {"type": "fill_in", "title": "Fill the Self", "instruction": "Type the reflexive pronoun (e.g. myself, himself).", "questions": [{"q": "He bought ______ a new phone.", "a": "himself"}, {"q": "The dog washed ______ in the rain.", "a": "itself"}, {"q": "Please help ______ to some cookies.", "a": "yourself"}, {"q": "They solved the problem ______.", "a": "themselves"}, {"q": "I built this table ______.", "a": "myself"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (14, 'B1', 'Verbs with Prepositions', 'Learn verb + preposition collocations', 'bi-link-45deg', '<h3>Grammar Theory</h3><p class="lead">We use the structure <strong>By + Gerund (verb-ing)</strong> to describe

                        <strong>HOW</strong> to achieve a result.

                    </p><p>It answers questions like <em>"How did you do that?"</em> or <em>"How can I solve this

                            problem?"</em>. It connects an <strong>Action</strong> (the method) to a

                        <strong>Result</strong>.

                    </p><div class="alert alert-info border-info mt-3">
<strong>Key Formula:</strong> <span class="bg-dark text-white px-2 rounded">By + Verb-ING</span>

                        = The Method (How?)

                    </div><nav>
<div class="nav nav-tabs" id="nav-tab-14" role="tablist">
<button class="nav-link active" data-bs-target="#nav-method" data-bs-toggle="tab" id="nav-method-tab" role="tab" type="button">1. Method &amp; Manner</button>
<button class="nav-link" data-bs-target="#nav-purpose-conf" data-bs-toggle="tab" id="nav-purpose-conf-tab" role="tab" type="button">2. The Big

                                Confusion</button>
<button class="nav-link" data-bs-target="#nav-with" data-bs-toggle="tab" id="nav-with-tab" role="tab" type="button">3. Tool vs Action</button>
</div>
</nav><div class="tab-content border border-top-0 p-3 mb-4 rounded-bottom" id="nav-tabContent-14" style="background-color: #212529;">
<!-- TAB 1: METHOD -->
<div class="tab-pane fade show active" id="nav-method" role="tabpanel">
<h5 class="text-white mb-3">Expressing "How"</h5>
<div class="row">
<div class="col-md-6">
<div class="card bg-dark border-success mb-3 h-100">
<div class="card-header border-success text-success fw-bold">Positive (Action)

                                        </div>
<div class="card-body">
<p class="card-text fs-5">"He learned English <strong>by watching</strong>

                                                movies."</p>
<p class="small text-muted border-top border-secondary pt-2">Q: How did he

                                                learn?<br/>A: By watching.</p>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-danger mb-3 h-100">
<div class="card-header border-danger text-danger fw-bold">Negative (Prevention)

                                        </div>
<div class="card-body">
<p class="card-text fs-5">"She stayed safe <strong>by not taking</strong>

                                                risks."</p>
<p class="small text-muted border-top border-secondary pt-2">Note: "Not"

                                                comes before the gerund.</p>
</div>
</div>
</div>
</div>
</div>
<!-- TAB 2: CONFUSION -->
<div class="tab-pane fade" id="nav-purpose-conf" role="tabpanel">
<h5 class="text-warning mb-3">Crucial Distinctions</h5>
<div class="table-responsive">
<div class="table-responsive">
<table class="table table-bordered table-dark align-middle">
<thead class="bg-secondary text-white">
<tr>
<th>Preposition</th>
<th>Function</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="text-success fw-bold">BY + Gerund</td>
<td><span class="badge bg-success">METHOD</span><br/>How an action is
                                                    done.

                                                </td>
<td>"I lost weight <strong>by running</strong>."</td>
</tr>
<tr>
<td class="text-info fw-bold">FOR + Gerund</td>
<td><span class="badge bg-info text-dark">OBJECT FUNCTION</span><br/>What
                                                    a

                                                    thing is for.</td>
<td>"A knife is <strong>for cutting</strong>."</td>
</tr>
<tr>
<td class="text-primary fw-bold">TO + Infinitive</td>
<td><span class="badge bg-primary">PURPOSE</span><br/>Why I did
                                                    something.

                                                </td>
<td>"I went to the gym <strong>to run</strong>."</td>
</tr>
</tbody>
</table>
</div>
</div>
<div class="alert alert-danger d-flex align-items-center mt-2" role="alert">
<i class="bi bi-exclamation-triangle-fill me-2"></i>
<div>
<strong>Common Mistake:</strong> Never say "I went there for buy milk".<br/>

                                    Correct: "I went there <strong>to buy</strong> milk." (Specific Purpose)

                                </div>
</div>
</div>
<!-- TAB 3: WITH VS BY -->
<div class="tab-pane fade" id="nav-with" role="tabpanel">
<h5 class="text-info">With (Tool) vs By (Action)</h5>
<div class="d-flex justify-content-center align-items-stretch gap-3">
<div class="p-3 border border-info rounded text-center w-50">
<h4 class="text-info">WITH + Noun</h4>
<hr class="border-info"/>
<p class="fs-5">"I write <strong>with a pen</strong>."</p>
<span class="badge bg-info text-dark">Focus: The Tool</span>
</div>
<div class="d-flex align-items-center">
<span class="display-6 text-muted">vs</span>
</div>
<div class="p-3 border border-success rounded text-center w-50">
<h4 class="text-success">BY + Gerund</h4>
<hr class="border-success"/>
<p class="fs-5">"I write <strong>by using a pen</strong>."</p>
<span class="badge bg-success">Focus: The Action</span>
</div>
</div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "Much or Many?", "instruction": "Choose the correct quantifier for countable/uncountable nouns.", "questions": [{"q": "How ______ water do you drink?", "a": "much", "options": ["much", "many", "lots"]}, {"q": "How ______ people are here?", "a": "many", "options": ["many", "much", "lot"]}, {"q": "I don''t have ______ money.", "a": "much", "options": ["much", "many", "some"]}, {"q": "Are there ______ eggs left?", "a": "any", "options": ["any", "much", "some"]}, {"q": "I need ______ information.", "a": "some", "options": ["some", "a", "many"]}]}, {"type": "fill_in", "title": "Quantifier Gaps", "instruction": "Type: much, many, some, or any.", "questions": [{"q": "There isn''t ______ milk in the fridge.", "a": "any"}, {"q": "I have ______ friends in Japan.", "a": "some"}, {"q": "How ______ time do we have?", "a": "much"}, {"q": "There aren''t ______ chairs in the room.", "a": "many"}, {"q": "Would you like ______ coffee?", "a": "some"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (15, 'B1', 'Future Perfect', 'Talk about future completion', 'bi-calendar-check', '<h3>The Future: Evidence vs Belief</h3><p class="lead">In English, we choose the future form based on <strong>WHY</strong> we are making

                        the prediction.</p><ul class="nav nav-tabs" id="futureTab" role="tablist">
<li class="nav-item" role="presentation">
<button aria-controls="goingto" aria-selected="true" class="nav-link active" data-bs-target="#goingto" data-bs-toggle="tab" id="goingto-tab" role="tab" type="button">1. Evidence (Going To)</button>
</li>
<li class="nav-item" role="presentation">
<button aria-controls="will" aria-selected="false" class="nav-link" data-bs-target="#will" data-bs-toggle="tab" id="will-tab" role="tab" type="button">2. Belief

                                (Will)</button>
</li>
<li class="nav-item" role="presentation">
<button aria-controls="plans" aria-selected="false" class="nav-link" data-bs-target="#plans" data-bs-toggle="tab" id="plans-tab" role="tab" type="button">3. Plans vs

                                Decisions</button>
</li>
</ul><div class="tab-content border border-top-0 p-3 mb-4 rounded-bottom" id="futureTabContent" style="background-color: #212529;">
<!-- Tab 1: Going To -->
<div aria-labelledby="goingto-tab" class="tab-pane fade show active" id="goingto" role="tabpanel">
<h5 class="text-success help-text">Physical Evidence (You can SEE it)</h5>
<p>Use <strong>Be + Going To + Verb</strong> when you have proof <strong>NOW</strong> that

                                something will happen.</p>
<div class="card bg-dark border-success mb-3">
<div class="card-body">
<div class="row align-items-center">
<div class="col-2 text-center">
<span style="font-size: 3rem;">☁️</span>
</div>
<div class="col-10">
<h5 class="card-title text-success">Example</h5>
<p class="card-text">"Look at those dark clouds! It is <strong>going to

                                                    rain</strong>."</p>
<p class="small text-muted mb-0">Evidence: The clouds are visible now.</p>
</div>
</div>
</div>
</div>
<div class="alert alert-success d-flex align-items-center" role="alert">
<div>
<strong>Rule:</strong> If you can see it coming, use <strong>Going To</strong>.

                                </div>
</div>
</div>
<!-- Tab 2: Will -->
<div aria-labelledby="will-tab" class="tab-pane fade" id="will" role="tabpanel">
<h5 class="text-primary help-text">Belief &amp; Opinions (You THINK it)</h5>
<p>Use <strong>Will + Verb</strong> for predictions based on what you <strong>think,

                                    believe, or guess</strong>.</p>
<div class="card bg-dark border-primary mb-3">
<div class="card-body">
<div class="row align-items-center">
<div class="col-2 text-center">
<span style="font-size: 3rem;">🧠</span>
</div>
<div class="col-10">
<h5 class="card-title text-primary">Example</h5>
<p class="card-text">"I think humans <strong>will live</strong> on Mars one

                                                day."</p>
<p class="small text-muted mb-0">Basis: My personal opinion/guess.</p>
</div>
</div>
</div>
</div>
<div class="alert alert-primary d-flex align-items-center" role="alert">
<div>
<strong>Keywords:</strong> I think, I believe, I guess, Probably, Maybe.

                                </div>
</div>
</div>
<!-- Tab 3: Plans vs Decisions -->
<div aria-labelledby="plans-tab" class="tab-pane fade" id="plans" role="tabpanel">
<h5 class="text-warning help-text">Rapid Choice vs Pre-made Plan</h5>
<div class="row">
<div class="col-md-6">
<div class="p-3 border border-primary rounded mb-2">
<h6 class="text-primary">Rapid Decision (Will)</h6>
<p class="small">You decide <strong>at the moment of speaking</strong>.</p>
<p>"The phone is ringing. I <strong>will answer</strong> it."</p>
<span class="badge bg-primary">Instant</span>
</div>
</div>
<div class="col-md-6">
<div class="p-3 border border-success rounded mb-2">
<h6 class="text-success">Existing Plan (Going To)</h6>
<p class="small">You decided <strong>before</strong> speaking.</p>
<p>"I <strong>am going to buy</strong> a car next week."</p>
<span class="badge bg-success">Planned</span>
</div>
</div>
</div>
</div>
</div><h5 class="mb-3">Quick Comparison Cheat Sheet</h5><div class="table-responsive mb-4">
<div class="table-responsive">
<table class="table table-bordered table-dark table-hover align-middle">
<thead class="bg-secondary text-white">
<tr>
<th>Feature</th>
<th class="text-primary">Will (Future Simple)</th>
<th class="text-success">Going To</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Basis</strong></td>
<td>Belief / Opinion / Guess</td>
<td>Physical Evidence / Facts</td>
</tr>
<tr>
<td><strong>Timing</strong></td>
<td>Rapid Decision (Now)</td>
<td>Plan (Decided Before)</td>
</tr>
<tr>
<td><strong>Example</strong></td>
<td>"I <strong>think</strong> he <strong>will</strong> win."</td>
<td>"Look! He <strong>is going to</strong> fall."</td>
</tr>
<tr>
<td><strong>Negative</strong></td>
<td>Won''t (will not)</td>
<td>Isn''t / Aren''t going to</td>
</tr>
</tbody>
</table>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "Few or Little?", "instruction": "Choose the correct quantifier.", "questions": [{"q": "I have a ______ friends in the city.", "a": "few", "options": ["few", "little", "bit"]}, {"q": "We have very ______ time left.", "a": "little", "options": ["little", "few", "short"]}, {"q": "There were ______ people at the meeting.", "a": "plenty of", "options": ["plenty of", "much", "little"]}, {"q": "Could I have a ______ more sugar?", "a": "little", "options": ["little", "few", "many"]}, {"q": "He has ______ experience in this field.", "a": "a lot of", "options": ["a lot of", "many", "few"]}]}, {"type": "fill_in", "title": "Quantifier Fill", "instruction": "Type: few, little, lot, or plenty.", "questions": [{"q": "I only have a ______ dollars left.", "a": "few"}, {"q": "There is a ______ hope for the future.", "a": "little"}, {"q": "We saw a ______ of animals at the zoo.", "a": "lot"}, {"q": "There are ______ of opportunities here.", "a": "plenty"}, {"q": "Very ______ people know about this.", "a": "few"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (16, 'B1', 'Get or Have Something Done', 'Express services received from others', 'bi-person-gear', '<ul class="nav nav-tabs" id="causativeTab" role="tablist">
<li class="nav-item" role="presentation">
<button aria-controls="bigMistake" aria-selected="true" class="nav-link active" data-bs-target="#bigMistake" data-bs-toggle="tab" id="big-mistake-tab" role="tab" type="button">1. The Big Mistake</button>
</li>
<li class="nav-item" role="presentation">
<button aria-controls="influence" aria-selected="false" class="nav-link" data-bs-target="#influence" data-bs-toggle="tab" id="influence-tab" role="tab" type="button">2. The
                                "Influence" Scale</button>
</li>
<li class="nav-item" role="presentation">
<button aria-controls="matrix" aria-selected="false" class="nav-link" data-bs-target="#matrix" data-bs-toggle="tab" id="matrix-tab" role="tab" type="button">3. The Tense
                                Matrix</button>
</li>
<li class="nav-item" role="presentation">
<button aria-controls="realWorld" aria-selected="false" class="nav-link" data-bs-target="#realWorld" data-bs-toggle="tab" id="real-world-tab" role="tab" type="button">4. Real World Contexts</button>
</li>
</ul><div class="tab-content border border-top-0 p-3 mb-4 rounded-bottom" id="causativeTabContent" style="background-color: #212529;">
<!-- Tab 1: The Big Mistake (Visual) -->
<div aria-labelledby="big-mistake-tab" class="tab-pane fade show active" id="bigMistake" role="tabpanel">
<div class="row align-items-center">
<div class="col-md-5">
<div class="card bg-danger border-danger h-100">
<div class="card-header fw-bold text-white">❌ "I cut my hair."</div>
<div class="card-body text-center">
<span class="display-3">💇✂️</span>
<p class="mt-2 text-white small">This means you stood in front of a mirror
                                                with scissors and did it yourself!</p>
</div>
</div>
</div>
<div class="col-md-2 text-center my-2">
<span class="display-6 text-muted">VS</span>
</div>
<div class="col-md-5">
<div class="card bg-success border-success h-100">
<div class="card-header fw-bold text-white">✅ "I had my hair cut."</div>
<div class="card-body text-center">
<span class="display-3">💺💳</span>
<p class="mt-2 text-white small">This means you sat in a chair, paid money,
                                                and a professional did it.</p>
</div>
</div>
</div>
<div class="col-12 mt-4">
<h5 class="text-white border-bottom pb-2">More Examples</h5>
<ul class="list-group list-group-flush bg-transparent">
<li class="list-group-item bg-transparent text-white border-0">
<span class="badge bg-danger me-2">DIY</span> "I repaired my roof." (You
                                            climbed the ladder)
                                        </li>
<li class="list-group-item bg-transparent text-white border-0">
<span class="badge bg-success me-2">Pro</span> "I <strong>had</strong> my
                                            roof <strong>repaired</strong>." (You called a roofer)
                                        </li>
<li class="list-group-item bg-transparent text-white border-0">
<span class="badge bg-danger me-2">DIY</span> "I tested my eyes." (You
                                            stared at a chart alone)
                                        </li>
<li class="list-group-item bg-transparent text-white border-0">
<span class="badge bg-success me-2">Pro</span> "I <strong>had</strong> my
                                            eyes <strong>tested</strong>." (Optometrist)
                                        </li>
</ul>
</div>
</div>
</div>
<!-- Tab 2: The Influence Scale (Active) -->
<div aria-labelledby="influence-tab" class="tab-pane fade" id="influence" role="tabpanel">
<p class="lead text-white text-center">From "Force" to "Permission"</p>
<div class="table-responsive">
<div class="table-responsive">
<table class="table table-dark table-hover align-middle">
<thead>
<tr class="text-warning small text-uppercase">
<th>Verb</th>
<th>Meaning</th>
<th>Formula</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><span class="badge bg-danger">MAKE</span></td>
<td>Force / Authority</td>
<td>Make + Person + <strong>Base</strong></td>
<td>"She <strong>made</strong> him <strong>study</strong>."</td>
</tr>
<tr>
<td><span class="badge bg-primary">HAVE</span></td>
<td>Request / Duty</td>
<td>Have + Person + <strong>Base</strong></td>
<td>"I <strong>had</strong> the assistant <strong>call</strong>."</td>
</tr>
<tr>
<td><span class="badge bg-info text-dark">GET</span></td>
<td>Persuade / Difficult</td>
<td>Get + Person + <strong>TO + Base</strong></td>
<td>"I <strong>got</strong> him <strong>to help</strong> me."</td>
</tr>
<tr>
<td><span class="badge bg-success">LET</span></td>
<td>Allow / Permission</td>
<td>Let + Person + <strong>Base</strong></td>
<td>"I <strong>let</strong> them <strong>go</strong> home."</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<!-- Tab 3: The Tense Matrix -->
<div aria-labelledby="matrix-tab" class="tab-pane fade" id="matrix" role="tabpanel">
<div class="alert alert-info small py-2"><i class="bi bi-info-circle me-2"></i>Remember:
                                Conjugate <strong>HAVE</strong> or <strong>GET</strong>. The main verb stays as V3 (Past
                                Participle).</div>
<div class="row">
<div class="col-md-6 mb-3">
<h6 class="text-secondary text-uppercase border-bottom border-secondary pb-1">
                                        Present &amp; Past</h6>
<div class="table-responsive">
<table class="table table-sm table-dark table-borderless">
<tbody>
<tr>
<td class="text-muted">Present Simple</td>
<td>I <strong>have</strong> it done every week.</td>
</tr>
<tr>
<td class="text-muted">Present Cont.</td>
<td>I <strong>am having</strong> it done now.</td>
</tr>
<tr>
<td class="text-muted">Past Simple</td>
<td>I <strong>had</strong> it done yesterday.</td>
</tr>
<tr>
<td class="text-muted">Past Cont.</td>
<td>I <strong>was having</strong> it done when...</td>
</tr>
</tbody>
</table>
</div>
</div>
<div class="col-md-6 mb-3">
<h6 class="text-secondary text-uppercase border-bottom border-secondary pb-1">
                                        Perfect &amp; Future</h6>
<div class="table-responsive">
<table class="table table-sm table-dark table-borderless">
<tbody>
<tr>
<td class="text-muted">Present Perfect</td>
<td>I <strong>have had</strong> it done twice.</td>
</tr>
<tr>
<td class="text-muted">Past Perfect</td>
<td>I <strong>had had</strong> it done before...</td>
</tr>
<tr>
<td class="text-muted">Future (Will)</td>
<td>I <strong>will have</strong> it done soon.</td>
</tr>
<tr>
<td class="text-muted">Modal (Should)</td>
<td>I <strong>should have</strong> it done.</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
<!-- Tab 4: Real World Contexts -->
<div aria-labelledby="real-world-tab" class="tab-pane fade" id="realWorld" role="tabpanel">
<div class="row">
<div class="col-md-4 mb-3">
<div class="p-3 border border-light rounded bg-dark h-100">
<h6 class="text-primary"><i class="bi bi-hammer me-2"></i>Home &amp; Car</h6>
<hr class="my-1"/>
<ul class="list-unstyled small">
<li>"Have the roof repaired"</li>
<li>"Get the car serviced"</li>
<li>"Have the house painted"</li>
<li>"Get the oil changed"</li>
<li>"Have the pipes fixed"</li>
</ul>
</div>
</div>
<div class="col-md-4 mb-3">
<div class="p-3 border border-light rounded bg-dark h-100">
<h6 class="text-danger"><i class="bi bi-stars me-2"></i>Beauty &amp; Self</h6>
<hr class="my-1"/>
<ul class="list-unstyled small">
<li>"Have my hair cut"</li>
<li>"Get my nails done"</li>
<li>"Have my eyes tested"</li>
<li>"Get a tattoo removed"</li>
<li>"Have my teeth whitened"</li>
</ul>
</div>
</div>
<div class="col-md-4 mb-3">
<div class="p-3 border border-light rounded bg-dark h-100">
<h6 class="text-info"><i class="bi bi-laptop me-2"></i>Tech &amp; Admin</h6>
<hr class="my-1"/>
<ul class="list-unstyled small">
<li>"Have my laptop upgraded"</li>
<li>"Get the package delivered"</li>
<li>"Have the report printed"</li>
<li>"Get the virus removed"</li>
<li>"Have my phone unlocked"</li>
</ul>
</div>
</div>
<div class="col-12">
<div class="alert alert-dark border-danger d-flex align-items-center mt-2">
<span class="fs-2 me-3">😖</span>
<div>
<strong>The "Unlucky" Causative:</strong><br/>
                                            "I had my wallet stolen." / "I had my car scratched."<br/>
<span class="small text-muted">(Used for bad experiences that happened to
                                                you)</span>
</div>
</div>
</div>
</div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "Doing or To Do?", "instruction": "Choose the correct verb form after the main verb.", "questions": [{"q": "I enjoy ______ in the rain.", "a": "walking", "options": ["walking", "to walk", "walk"]}, {"q": "I want ______ to the party.", "a": "to go", "options": ["to go", "going", "go"]}, {"q": "They decided ______ a new house.", "a": "to buy", "options": ["to buy", "buying", "buy"]}, {"q": "She finished ______ her homework.", "a": "doing", "options": ["doing", "to do", "done"]}, {"q": "I hope ______ you soon.", "a": "to see", "options": ["to see", "seeing", "see"]}]}, {"type": "fill_in", "title": "Infinitive or Gerund?", "instruction": "Type the correct form (e.g. to play, playing).", "questions": [{"q": "Stop ______ (make) that noise!", "a": "making"}, {"q": "She promised ______ (help) me.", "a": "to help"}, {"q": "I avoid ______ (drive) at night.", "a": "driving"}, {"q": "I would like ______ (order) a pizza.", "a": "to order"}, {"q": "I don''t mind ______ (wait).", "a": "waiting"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (17, 'B1', 'Should Have & Suggestions', 'Give advice and make suggestions', 'bi-chat-square-quote', '<ul class="nav nav-tabs" id="suggestTab" role="tablist">
<li class="nav-item" role="presentation">
<button aria-controls="scenario" aria-selected="true" class="nav-link active" data-bs-target="#scenario" data-bs-toggle="tab" id="scenario-tab" role="tab" type="button">1. Scenario Solver</button>
</li>
<li class="nav-item" role="presentation">
<button aria-controls="subjunctive" aria-selected="false" class="nav-link" data-bs-target="#subjunctive" data-bs-toggle="tab" id="subjunctive-tab" role="tab" type="button">2. The Subjunctive Rule</button>
</li>
<li class="nav-item" role="presentation">
<button aria-controls="prep" aria-selected="false" class="nav-link" data-bs-target="#prep" data-bs-toggle="tab" id="prep-tab" role="tab" type="button">3. Preposition
                                Logic</button>
</li>
<li class="nav-item" role="presentation">
<button aria-controls="shame" aria-selected="false" class="nav-link" data-bs-target="#shame" data-bs-toggle="tab" id="shame-tab" role="tab" type="button">4. The "Wall of
                                Shame"</button>
</li>
</ul><div class="tab-content border border-top-0 p-3 mb-4 rounded-bottom" id="suggestTabContent" style="background-color: #212529;">
<!-- Tab 1: Scenario Solver -->
<div aria-labelledby="scenario-tab" class="tab-pane fade show active" id="scenario" role="tabpanel">
<p class="text-white small">Don''t just memorize lists. Suggestions are
                                <strong>SOLUTIONS</strong> to problems.
                            </p>
<div class="table-responsive">
<div class="table-responsive">
<table class="table table-dark table-hover align-middle">
<thead>
<tr class="text-info">
<th>The Problem 😓</th>
<th>The Suggestion (Solution) 💡</th>
</tr>
</thead>
<tbody>
<tr>
<td>"I''m bored."</td>
<td>"<strong>Why don''t we</strong> see a movie?"</td>
</tr>
<tr>
<td>"It''s raining outside."</td>
<td>"<strong>Let''s</strong> order pizza and stay in."</td>
</tr>
<tr>
<td>"I''m broke (no money)."</td>
<td>"<strong>How about</strong> going for a walk in the park?"</td>
</tr>
<tr>
<td>"I''m tired."</td>
<td>"<strong>We could</strong> just relax on the sofa."</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<!-- Tab 2: The Subjunctive (Advanced) -->
<div aria-labelledby="subjunctive-tab" class="tab-pane fade" id="subjunctive" role="tabpanel">
<div class="alert alert-warning border-warning">
<h5 class="alert-heading text-warning">⚠️ The "Suggest" Rule (B1/B2)</h5>
<p>You CANNOT say "I suggest him to go". You must use a <strong>THAT clause</strong>.
                                </p>
</div>
<div class="card bg-dark border-light mb-3">
<div class="card-header fw-bold text-white">Subject + SUGGEST + (THAT) + Subject + <span class="text-warning">BASE VERB</span></div>
<div class="card-body">
<ul class="list-unstyled mb-0">
<li class="mb-2">✅ "I suggest (that) she <strong>be</strong> on time." <span class="text-muted small">(Not ''is''!)</span></li>
<li class="mb-2">✅ "He suggests (that) we <strong>go</strong> home."</li>
<li class="mb-0">✅ "The doctor suggested (that) I <strong>drink</strong> water."
                                        </li>
</ul>
</div>
</div>
<p class="small text-muted text-center">*This is called the "Subjunctive Mood". It uses the
                                Base Verb for everyone (even He/She/It).</p>
</div>
<!-- Tab 3: Preposition Logic -->
<div aria-labelledby="prep-tab" class="tab-pane fade" id="prep" role="tabpanel">
<h5 class="text-info border-bottom border-info pb-2">Why "ING"?</h5>
<div class="d-flex align-items-center mb-4">
<span class="display-1 me-3 text-warning">?</span>
<div>
<p class="lead mb-1">Because <strong>ABOUT</strong> is a
                                        <strong>Preposition</strong>.
                                    </p>
<p class="mb-0 text-white-50">In English, ANY verb after a preposition MUST be
                                        Gerund (-ING).</p>
</div>
</div>
<div class="row">
<div class="col-md-6">
<div class="p-2 border border-secondary rounded bg-dark mb-2">
<strong>About:</strong> "How <strong>about</strong> go<strong>ing</strong>?"
                                    </div>
<div class="p-2 border border-secondary rounded bg-dark mb-2">
<strong>Of:</strong> "Thinking <strong>of</strong> buy<strong>ing</strong>."
                                    </div>
</div>
<div class="col-md-6">
<div class="p-2 border border-secondary rounded bg-dark mb-2">
<strong>In:</strong> "Interested <strong>in</strong> join<strong>ing</strong>."
                                    </div>
<div class="p-2 border border-secondary rounded bg-dark mb-2">
<strong>At:</strong> "Good <strong>at</strong> play<strong>ing</strong>."
                                    </div>
</div>
</div>
</div>
<!-- Tab 4: Wall of Shame -->
<div aria-labelledby="shame-tab" class="tab-pane fade" id="shame" role="tabpanel">
<h5 class="text-danger text-center mb-3">🚫 The Wall of Shame (Common Errors)</h5>
<div class="row justify-content-center">
<div class="col-md-10">
<ul class="list-group">
<li class="list-group-item bg-dark text-white border-danger d-flex justify-content-between align-items-center mb-2">
<div>
<span class="text-danger fw-bold text-decoration-line-through">"I
                                                    suggest to go."</span>
<br/>
<span class="text-success fw-bold">✅ "I suggest going."</span>
</div>
<span class="badge bg-danger">Major Error</span>
</li>
<li class="list-group-item bg-dark text-white border-danger d-flex justify-content-between align-items-center mb-2">
<div>
<span class="text-danger fw-bold text-decoration-line-through">"How
                                                    about go?"</span>
<br/>
<span class="text-success fw-bold">✅ "How about going?"</span>
</div>
<span class="badge bg-danger">Preposition!</span>
</li>
<li class="list-group-item bg-dark text-white border-danger d-flex justify-content-between align-items-center mb-2">
<div>
<span class="text-danger fw-bold text-decoration-line-through">"Let''s to
                                                    play."</span>
<br/>
<span class="text-success fw-bold">✅ "Let''s play."</span>
</div>
<span class="badge bg-danger">No ''To''</span>
</li>
<li class="list-group-item bg-dark text-white border-danger d-flex justify-content-between align-items-center">
<div>
<span class="text-danger fw-bold text-decoration-line-through">"Why
                                                    don''t we going?"</span>
<br/>
<span class="text-success fw-bold">✅ "Why don''t we go?"</span>
</div>
<span class="badge bg-danger">Base Verb</span>
</li>
</ul>
</div>
</div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "Past Habits", "instruction": "Choose the correct ''used to'' construction.", "questions": [{"q": "I ______ smoke, but I quit.", "a": "used to", "options": ["used to", "use to", "am used to"]}, {"q": "Did you ______ live here?", "a": "use to", "options": ["use to", "used to", "using to"]}, {"q": "I ______ like fish, but now I do.", "a": "didn''t use to", "options": ["didn''t use to", "didn''t used to", "used not to"]}, {"q": "She ______ have long hair.", "a": "used to", "options": ["used to", "using to", "use to"]}, {"q": "Where did they ______ go on vacation?", "a": "use to", "options": ["use to", "used to", "using to"]}]}, {"type": "unscramble", "title": "Used to Order", "instruction": "Form a sentence with ''used to''.", "questions": [{"q": "swim used to I", "a": "i used to swim"}, {"q": "live used to they here", "a": "they used to live here"}, {"q": "like used to she coffee", "a": "she used to like coffee"}, {"q": "work used to we together", "a": "we used to work together"}, {"q": "didn''t play use to I", "a": "i didn''t use to play"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (18, 'B1', 'Would Rather vs Would Prefer', 'Express preferences politely', 'bi-hand-thumbs-up', '<ul class="nav nav-tabs" id="preferTab" role="tablist">
<li class="nav-item" role="presentation">
<button aria-controls="core" aria-selected="true" class="nav-link active" data-bs-target="#core" data-bs-toggle="tab" id="core-tab" role="tab" type="button">1. The Core
                                Rules</button>
</li>
<li class="nav-item" role="presentation">
<button aria-controls="deep" aria-selected="false" class="nav-link" data-bs-target="#deep" data-bs-toggle="tab" id="deep-tab" role="tab" type="button">2. General vs
                                Specific</button>
</li>
<li class="nav-item" role="presentation">
<button aria-controls="advanced" aria-selected="false" class="nav-link" data-bs-target="#advanced" data-bs-toggle="tab" id="advanced-tab" role="tab" type="button">3. Advanced
                                ("Two People")</button>
</li>
<li class="nav-item" role="presentation">
<button aria-controls="chat" aria-selected="false" class="nav-link" data-bs-target="#chat" data-bs-toggle="tab" id="chat-tab" role="tab" type="button">4. Conversation
                                Q&amp;A</button>
</li>
</ul><div class="tab-content border border-top-0 p-3 mb-4 rounded-bottom" id="preferTabContent" style="background-color: #212529;">
<!-- Tab 1: Core Rules -->
<div aria-labelledby="core-tab" class="tab-pane fade show active" id="core" role="tabpanel">
<div class="alert alert-primary d-flex align-items-center mb-3">
<span class="fs-4 me-2">⚡</span>
<div><strong>Contraction Tip:</strong> "I''d" = "I would". (e.g., "I''d rather" = "I would
                                    rather").</div>
</div>
<div class="table-responsive">
<table class="table table-dark table-striped table-bordered text-center align-middle">
<thead>
<tr class="table-dark">
<th class="w-50 text-info">Would Rather</th>
<th class="w-50 text-primary">Would Prefer</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>+ Base Verb</strong> (No ''to'')</td>
<td><strong>+ To Infinitive</strong> (With ''to'')</td>
</tr>
<tr>
<td class="fs-5">"I''d rather <strong>stay</strong>."</td>
<td class="fs-5">"I''d prefer <strong>to stay</strong>."</td>
</tr>
<tr>
<td>Comparison: <br/><span class="badge bg-info text-dark">THAN</span></td>
<td>Comparison: <br/><span class="badge bg-primary">RATHER THAN</span></td>
</tr>
<tr>
<td>"I''d rather stay <strong>than</strong> go."</td>
<td>"I''d prefer to stay <strong>rather than</strong> go."</td>
</tr>
<tr>
<td class="text-danger">Negative: <strong>NOT</strong></td>
<td class="text-danger">Negative: <strong>NOT TO</strong></td>
</tr>
<tr>
<td>"I''d rather <strong>not</strong> eat."</td>
<td>"I''d prefer <strong>not to</strong> eat."</td>
</tr>
</tbody>
</table>
</div>
</div>
<!-- Tab 2: General vs Specific (Deep Dive) -->
<div aria-labelledby="deep-tab" class="tab-pane fade" id="deep" role="tabpanel">
<div class="row">
<div class="col-md-6 mb-3">
<h5 class="text-info border-bottom border-info pb-2 mb-3">🎯 Specific Preference
                                        (Now)</h5>
<p class="small text-muted mb-2">Use <strong>Would Rather</strong> or <strong>Would
                                            Prefer</strong>.</p>
<ul class="list-group list-group-flush bg-transparent">
<li class="list-group-item bg-transparent text-white border-0 ps-0">
<i class="bi bi-check-circle text-info me-2"></i>"I''d rather eat Italian
                                            <strong>tonight</strong>."
                                        </li>
<li class="list-group-item bg-transparent text-white border-0 ps-0">
<i class="bi bi-check-circle text-info me-2"></i>"I''d prefer to take a taxi
                                            <strong>to the party</strong>."
                                        </li>
<li class="list-group-item bg-transparent text-white border-0 ps-0">
<i class="bi bi-check-circle text-info me-2"></i>"We''d rather not discuss
                                            work <strong>right now</strong>."
                                        </li>
</ul>
</div>
<div class="col-md-6 mb-3">
<h5 class="text-success border-bottom border-success pb-2 mb-3">🌍 General
                                        Preference (Always)</h5>
<p class="small text-muted mb-2">Use <strong>Prefer</strong> (No ''would''). Use
                                        <strong>TO</strong> for comparing.
                                    </p>
<ul class="list-group list-group-flush bg-transparent">
<li class="list-group-item bg-transparent text-white border-0 ps-0">
<i class="bi bi-check-circle text-success me-2"></i>"I prefer
                                            <strong>tea</strong> to coffee."
                                        </li>
<li class="list-group-item bg-transparent text-white border-0 ps-0">
<i class="bi bi-check-circle text-success me-2"></i>"She prefers
                                            <strong>reading</strong> to <strong>watching</strong> TV."
                                        </li>
<li class="list-group-item bg-transparent text-white border-0 ps-0">
<i class="bi bi-check-circle text-success me-2"></i>"They prefer
                                            <strong>living</strong> in the city."
                                        </li>
<li class="list-group-item bg-transparent text-light border-0 ps-0 small fst-italic">
                                            *Advanced: "I prefer <strong>to drive</strong> rather than
                                            <strong>walk</strong>." (Infinitive form)
                                        </li>
</ul>
</div>
</div>
</div>
<!-- Tab 3: Advanced (Two People) -->
<div aria-labelledby="advanced-tab" class="tab-pane fade" id="advanced" role="tabpanel">
<div class="alert alert-warning border-warning">
<h5 class="text-warning"><i class="bi bi-exclamation-triangle-fill me-2"></i>The "Two
                                    Subjects" Rule</h5>
<p class="mb-0">When you want <strong>SOMEONE ELSE</strong> to do something, use
                                    <strong>Would Rather + Past Simple</strong>.
                                </p>
</div>
<div class="card bg-dark border-light mb-3">
<div class="card-body text-center">
<h4 class="text-white">Subject 1 + Would Rather + Subject 2 + <span class="text-warning">PAST VERB</span></h4>
</div>
</div>
<div class="table-responsive">
<table class="table table-dark table-hover align-middle">
<thead>
<tr class="text-secondary text-uppercase small">
<th>Situation</th>
<th>Correct Sentence</th>
<th>Why Past?</th>
</tr>
</thead>
<tbody>
<tr>
<td>You want me to go home.</td>
<td>"I''d rather <strong>you went</strong> home now."</td>
<td>It''s polite distance (subjunctive).</td>
</tr>
<tr>
<td>She wants us to stay.</td>
<td>"She''d rather <strong>we stayed</strong> here."</td>
<td>Different subjects (She vs We).</td>
</tr>
<tr>
<td>I don''t want you to smoke.</td>
<td>"I''d rather <strong>you didn''t</strong> smoke."</td>
<td>Negative Past Simple.</td>
</tr>
</tbody>
</table>
</div>
<p class="text-muted small">*Note: Even though we use the Past verb, we are talking about
                                the Present/Future!</p>
</div>
<!-- Tab 4: Conversation -->
<div aria-labelledby="chat-tab" class="tab-pane fade" id="chat" role="tabpanel">
<div class="row">
<div class="col-md-12 mb-3">
<h5 class="text-white">🗣️ Common Questions &amp; Answers</h5>
</div>
<div class="col-md-6">
<div class="card bg-dark border-secondary mb-3">
<div class="card-header text-info">Question</div>
<div class="card-body">
<p class="card-text fw-bold">"Would you rather be rich or famous?"</p>
<p class="card-text fw-bold">"Would you prefer to sit here?"</p>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-secondary mb-3">
<div class="card-header text-success">Answer</div>
<div class="card-body">
<p class="card-text">"I''d rather be rich." (Short answer)</p>
<p class="card-text">"I''d prefer not to say." (Polite refusal)</p>
</div>
</div>
</div>
<div class="col-md-12">
<div class="alert alert-dark border-info">
<strong>Refusing an offer politely:</strong><br/>
                                        Friend: "Let''s go to the cinema."<br/>
                                        You: "Actually, <strong>I''d rather stay</strong> home to study."
                                    </div>
</div>
</div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "Agreement", "instruction": "Choose the correct form for agreement.", "questions": [{"q": "''I am hungry'' -> ''______ am I.''", "a": "So", "options": ["So", "Neither", "Too"]}, {"q": "''I don''t like milk'' -> ''______ do I.''", "a": "Neither", "options": ["Neither", "So", "Nor"]}, {"q": "''I can swim'' -> ''______ can I.''", "a": "So", "options": ["So", "Neither", "Also"]}, {"q": "''I haven''t been to Paris'' -> ''______ have I.''", "a": "Neither", "options": ["Neither", "So", "Nor"]}, {"q": "''I will go'' -> ''______ will I.''", "a": "So", "options": ["So", "Neither", "Too"]}]}, {"type": "fill_in", "title": "So or Neither?", "instruction": "Type: So or Neither.", "questions": [{"q": "''I like cats'' -> ''______ do I.''", "a": "So"}, {"q": "''I''m not tired'' -> ''______ am I.''", "a": "Neither"}, {"q": "''I have finished'' -> ''______ have I.''", "a": "So"}, {"q": "''I won''t go'' -> ''______ will I.''", "a": "Neither"}, {"q": "''I can''t drive'' -> ''______ can I.''", "a": "Neither"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (19, 'B1', 'Third Conditional', 'Talk about unreal past situations', 'bi-clock-history', '<h3>Theory</h3><p class="lead">We use the <strong>Third Conditional</strong> to talk about <strong>imaginary
                            situations in the past</strong>. Things that <em>didn''t happen</em>, but we imagine "what
                        if".</p><div class="card bg-dark border-secondary mb-4">
<div class="card-header bg-secondary text-white">
<strong>The Formula</strong>
</div>
<div class="card-body">
<h4 class="text-center mb-3">
<span class="badge bg-primary">If + Past Perfect</span>
                                +
                                <span class="badge bg-warning text-dark">Would Have + Past Participle</span>
</h4>
<p class="text-center text-muted"><em>"If I <strong>had known</strong>, I <strong>would have
                                        gone</strong>."</em></p>
<hr class="border-secondary"/>
<div class="row text-center">
<div class="col-6 border-end border-secondary">
<h6 class="text-info">Reality (Past)</h6>
<p class="small text-danger">I didn''t study. I failed.</p>
</div>
<div class="col-6">
<h6 class="text-info">Imagination (Conditional)</h6>
<p class="small text-success">If I <strong>had studied</strong>, I <strong>would
                                            have passed</strong>.</p>
</div>
</div>
</div>
</div><div class="alert alert-info">
<strong><i class="bi bi-info-circle-fill"></i> Contractions:</strong><br/>
                        In spoken English, we shorten everything!<br/>
<em>"If I<strong>''d</strong> known, I <strong>would''ve</strong> come."</em><br/>
                        (I''d = I had).
                    </div><h5 class="text-warning mt-4"><i class="bi bi-lightbulb-fill me-2"></i>More Examples</h5><div class="row">
<div class="col-md-6 mb-3">
<div class="card bg-dark border-success h-100">
<div class="card-header bg-success text-dark fw-bold">
<i class="bi bi-check-circle-fill me-2"></i>Positive Form
                                </div>
<div class="card-body">
<ul class="list-unstyled mb-0">
<li class="mb-3">
<strong class="text-success">If she had left earlier, she would have caught
                                                the train.</strong>
<p class="small text-muted mb-0">Reality: She left late. She missed the
                                                train.</p>
</li>
<li class="mb-3">
<strong class="text-success">If they had brought an umbrella, they wouldn''t
                                                have gotten wet.</strong>
<p class="small text-muted mb-0">Reality: They forgot the umbrella. They got
                                                soaked.</p>
</li>
<li class="mb-3">
<strong class="text-success">If we had booked tickets, we would have seen
                                                the concert.</strong>
<p class="small text-muted mb-0">Reality: We didn''t book. We missed it.</p>
</li>
<li class="mb-0">
<strong class="text-success">If he had saved money, he could have bought the
                                                car.</strong>
<p class="small text-muted mb-0">Reality: He didn''t save. He can''t afford it
                                                now.</p>
</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6 mb-3">
<div class="card bg-dark border-danger h-100">
<div class="card-header bg-danger text-white fw-bold">
<i class="bi bi-x-circle-fill me-2"></i>Negative Form
                                </div>
<div class="card-body">
<ul class="list-unstyled mb-0">
<li class="mb-3">
<strong class="text-danger">If I hadn''t eaten so much, I wouldn''t have felt
                                                sick.</strong>
<p class="small text-muted mb-0">Reality: I ate too much. I felt terrible.
                                            </p>
</li>
<li class="mb-3">
<strong class="text-danger">If you hadn''t told me, I wouldn''t have known the
                                                truth.</strong>
<p class="small text-muted mb-0">Reality: You told me. Now I know.</p>
</li>
<li class="mb-3">
<strong class="text-danger">If it hadn''t been so expensive, we would have
                                                bought it.</strong>
<p class="small text-muted mb-0">Reality: It was too expensive. We didn''t
                                                buy it.</p>
</li>
<li class="mb-0">
<strong class="text-danger">If she hadn''t practiced, she wouldn''t have won
                                                the competition.</strong>
<p class="small text-muted mb-0">Reality: She practiced a lot. She won!</p>
</li>
</ul>
</div>
</div>
</div>
</div><div class="card bg-dark border-info mb-4">
<div class="card-header bg-info text-dark fw-bold">
<i class="bi bi-question-circle-fill me-2"></i>Question Form
                        </div>
<div class="card-body">
<div class="row">
<div class="col-md-6">
<ul class="list-unstyled">
<li class="mb-2">
<strong class="text-info">What would you have done if you had won the
                                                lottery?</strong>
</li>
<li class="mb-2">
<strong class="text-info">Would they have come if we had invited
                                                them?</strong>
</li>
<li class="mb-2">
<strong class="text-info">Where would she have gone if she had had more
                                                time?</strong>
</li>
</ul>
</div>
<div class="col-md-6">
<ul class="list-unstyled">
<li class="mb-2">
<strong class="text-info">If you had studied harder, would you have
                                                passed?</strong>
</li>
<li class="mb-2">
<strong class="text-info">How would things have been different if you had
                                                listened to me?</strong>
</li>
<li class="mb-2">
<strong class="text-info">If he had asked for help, would you have given
                                                it?</strong>
</li>
</ul>
</div>
</div>
</div>
</div><div class="alert alert-warning">
<h6 class="text-warning"><i class="bi bi-star-fill me-2"></i>Other Modal Verbs</h6>
<p class="mb-2">You can use other modals besides "would":</p>
<ul class="mb-0">
<li><strong>Could have:</strong> "If I had known, I <strong>could have</strong> helped you."
                                (ability/possibility)</li>
<li><strong>Might have:</strong> "If she had called, I <strong>might have</strong>
                                answered." (less certain)</li>
<li><strong>Should have:</strong> (Less common) "If you had told me earlier, you
                                <strong>should have</strong> mentioned it."
                            </li>
</ul>
</div>', '{"games": [{"type": "multiple_choice", "title": "Isn''t it?", "instruction": "Choose the correct question tag.", "questions": [{"q": "You are a student, ______?", "a": "aren''t you", "options": ["aren''t you", "don''t you", "isn''t it"]}, {"q": "He likes pizza, ______?", "a": "doesn''t he", "options": ["doesn''t he", "don''t he", "isn''t he"]}, {"q": "They haven''t seen it, ______?", "a": "have they", "options": ["have they", "haven''t they", "did they"]}, {"q": "She will come, ______?", "a": "won''t she", "options": ["won''t she", "will she", "don''t she"]}, {"q": "It is cold, ______?", "a": "isn''t it", "options": ["isn''t it", "it is", "doesn''t it"]}]}, {"type": "fill_in", "title": "Tag Fill", "instruction": "Type the missing question tag.", "questions": [{"q": "You speak English, ______?", "a": "don''t you"}, {"q": "She isn''t here, ______?", "a": "is she"}, {"q": "We can go now, ______?", "a": "can''t we"}, {"q": "He went home, ______?", "a": "didn''t he"}, {"q": "I am late, ______?", "a": "aren''t i"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (20, 'B1', 'Time Clauses', 'Connect events in time', 'bi-calendar-event', '<h3>Theory</h3><p class="lead">We use <strong>time clauses</strong> to show the relationship between two actions in
                        time. They answer the question <em>"When?"</em></p><div class="alert alert-warning">
<strong><i class="bi bi-exclamation-triangle-fill me-2"></i>Important Rule:</strong><br/>
                        In time clauses about the FUTURE, we use <strong>Present Simple</strong>, NOT "will"!<br/>
                        ❌ "When I <del>will arrive</del>..."<br/>
                        ✅ "When I <strong>arrive</strong>..." (even if it''s in the future!)
                    </div><div class="table-responsive">
<div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr class="text-info">
<th>Connector</th>
<th>Meaning</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong class="text-primary">When</strong></td>
<td>At that moment</td>
<td><em>"<strong>When</strong> I finish, I''ll call you."</em></td>
</tr>
<tr>
<td><strong class="text-warning">While</strong></td>
<td>During / At the same time</td>
<td><em>"<strong>While</strong> I was cooking, she arrived."</em></td>
</tr>
<tr>
<td><strong class="text-success">Before</strong></td>
<td>Earlier than</td>
<td><em>"Wash your hands <strong>before</strong> you eat."</em></td>
</tr>
<tr>
<td><strong class="text-danger">After</strong></td>
<td>Later than</td>
<td><em>"<strong>After</strong> I graduate, I''ll travel."</em></td>
</tr>
<tr>
<td><strong class="text-info">Until</strong></td>
<td>Up to that point</td>
<td><em>"Wait here <strong>until</strong> I come back."</em></td>
</tr>
<tr>
<td><strong class="text-secondary">As soon as</strong></td>
<td>Immediately when</td>
<td><em>"Call me <strong>as soon as</strong> you land."</em></td>
</tr>
</tbody>
</table>
</div>
</div><h5 class="text-warning mt-4"><i class="bi bi-clock-fill me-2"></i>Timeline Examples</h5><div class="row">
<div class="col-md-6 mb-3">
<div class="card bg-dark border-primary">
<div class="card-header bg-primary text-white">Sequential Actions</div>
<div class="card-body">
<p class="mb-2"><strong>Before/After:</strong></p>
<ul class="list-unstyled">
<li class="mb-2">📖 <strong>Before</strong> I go to bed, I read.<br/>
<small class="text-muted">First: read → Then: sleep</small>
</li>
<li class="mb-2">🍽️ <strong>After</strong> we eat, we''ll watch TV.<br/>
<small class="text-muted">First: eat → Then: TV</small>
</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6 mb-3">
<div class="card bg-dark border-warning">
<div class="card-header bg-warning text-dark">Simultaneous Actions</div>
<div class="card-body">
<p class="mb-2"><strong>While/When:</strong></p>
<ul class="list-unstyled">
<li class="mb-2">🎵 <strong>While</strong> I was driving, I listened to
                                            music.<br/>
<small class="text-muted">Both at the same time</small>
</li>
<li class="mb-2">📞 <strong>When</strong> the phone rang, I was sleeping.<br/>
<small class="text-muted">Interruption moment</small>
</li>
</ul>
</div>
</div>
</div>
</div><div class="alert alert-info">
<h6 class="text-info"><i class="bi bi-lightbulb-fill me-2"></i>Common Patterns</h6>
<ul class="mb-0">
<li><strong>When</strong> + Short action (Past Simple): "When I <strong>arrived</strong>..."
                            </li>
<li><strong>While</strong> + Long action (Past Continuous): "While I <strong>was
                                    walking</strong>..."</li>
<li><strong>Until</strong> + End point: "I''ll wait <strong>until</strong> you finish."</li>
</ul>
</div>', '{"games": [{"type": "multiple_choice", "title": "Some, Any, No?", "instruction": "Choose the correct indefinite pronoun.", "questions": [{"q": "I heard ______ at the door.", "a": "someone", "options": ["someone", "anyone", "no one"]}, {"q": "Is there ______ in the room?", "a": "anybody", "options": ["anybody", "somebody", "nobody"]}, {"q": "I have ______ to go.", "a": "nowhere", "options": ["nowhere", "anywhere", "somewhere"]}, {"q": "______ knows the answer.", "a": "Everyone", "options": ["Everyone", "Anyone", "Someone"]}, {"q": "I don''t have ______ to eat.", "a": "anything", "options": ["anything", "something", "nothing"]}]}, {"type": "fill_in", "title": "Pronoun Gaps", "instruction": "Type: someone, anything, nowhere, etc.", "questions": [{"q": "Does ______ have a pen?", "a": "anyone"}, {"q": "I put my keys ______ around here.", "a": "somewhere"}, {"q": "There is ______ in the fridge. It''s empty.", "a": "nothing"}, {"q": "I didn''t see ______ at the park.", "a": "anybody"}, {"q": "______ is possible if you try hard.", "a": "Everything"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (21, 'B1', 'Clauses of Purpose', 'Explain why actions happen', 'bi-arrow-right-circle', '<h3>Theory</h3><p class="lead">When we want to explain <strong>WHY</strong> we do something (the purpose/goal), we
                        use special structures.</p><div class="alert alert-info">
<strong><i class="bi bi-lightbulb-fill me-2"></i>Key Question:</strong><br/>
                        Purposes answer: <strong>"Why?"</strong> or <strong>"What for?"</strong>
</div><div class="table-responsive">
<div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr class="text-warning">
<th>Structure</th>
<th>Formula</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong class="text-success">To + infinitive</strong></td>
<td>verb + <strong>to</strong> + base verb</td>
<td><em>"I study <strong>to</strong> pass."</em> ✅ Most common</td>
</tr>
<tr>
<td><strong class="text-primary">In order to</strong></td>
<td><strong>in order to</strong> + base verb</td>
<td><em>"She works hard <strong>in order to</strong> succeed."</em> (formal)
                                        </td>
</tr>
<tr>
<td><strong class="text-danger">In order not to</strong></td>
<td><strong>in order not to</strong> + base verb</td>
<td><em>"I left early <strong>in order not to</strong> miss the bus."</em></td>
</tr>
<tr>
<td><strong class="text-info">So that</strong></td>
<td><strong>so that</strong> + subject + verb</td>
<td><em>"I saved money <strong>so that</strong> I could travel."</em></td>
</tr>
<tr>
<td><strong class="text-warning">For + noun/gerund</strong></td>
<td><strong>for</strong> + noun/-ing</td>
<td><em>"This is <strong>for</strong> cooking." / "It''s <strong>for</strong>
                                                studying."</em></td>
</tr>
<tr>
<td><strong class="text-secondary">So as to</strong></td>
<td><strong>so as to</strong> + base verb</td>
<td><em>"He whispered <strong>so as to</strong> avoid waking her."</em> (formal)
                                        </td>
</tr>
</tbody>
</table>
</div>
</div><h5 class="text-primary mt-4"><i class="bi bi-check-circle-fill me-2"></i>Common Patterns</h5><div class="row">
<div class="col-md-6 mb-3">
<div class="card bg-dark border-success">
<div class="card-header bg-success text-white">✅ Positive Purpose</div>
<div class="card-body">
<ul class="list-unstyled mb-0">
<li class="mb-2">📖 I study <strong>to</strong> learn English.</li>
<li class="mb-2">💼 She moved <strong>in order to</strong> find a job.</li>
<li class="mb-2">🎯 We practice <strong>so that</strong> we can improve.</li>
<li class="mb-2">🔧 This tool is <strong>for</strong> fixing bikes.</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6 mb-3">
<div class="card bg-dark border-danger">
<div class="card-header bg-danger text-white">❌ Negative Purpose</div>
<div class="card-body">
<ul class="list-unstyled mb-0">
<li class="mb-2">🏃 I ran <strong>in order not to</strong> be late.</li>
<li class="mb-2">🔇 He whispered <strong>so as not to</strong> wake the baby.
                                        </li>
<li class="mb-2">⏰ Set an alarm <strong>so that</strong> you don''t oversleep.
                                        </li>
<li class="mb-2">⚠️ Be careful <strong>not to</strong> fall!</li>
</ul>
</div>
</div>
</div>
</div><div class="alert alert-warning mt-3">
<h6 class="text-warning"><i class="bi bi-exclamation-triangle-fill me-2"></i>Common Mistake</h6>
<p class="mb-1">❌ "I study <del>for to</del> learn" → ✅ "I study <strong>to</strong> learn"</p>
<p class="mb-0">❌ "I came here <del>for learn</del>" → ✅ "I came here <strong>to learn</strong>"
                        </p>
<small class="text-muted">Don''t use "for" before "to + infinitive" for purpose!</small>
</div>', '{"games": [{"type": "multiple_choice", "title": "So that, To, or In order to?", "instruction": "Choose the best connector for purpose.", "questions": [{"q": "I went to the store ______ buy some bread.", "a": "to", "options": ["to", "so that", "for"]}, {"q": "He studied hard ______ he could pass.", "a": "so that", "options": ["so that", "in order to", "to"]}, {"q": "We left early ______ avoid the traffic.", "a": "in order to", "options": ["in order to", "so that", "that"]}, {"q": "She saved money ______ she could travel.", "a": "so that", "options": ["so that", "to", "for"]}, {"q": "I''m calling ______ ask you a question.", "a": "to", "options": ["to", "so that", "for"]}]}, {"type": "fill_in", "title": "Purpose Gaps", "instruction": "Type: to, so that, or in order to.", "questions": [{"q": "I use a map ______ not get lost.", "a": "in order to"}, {"q": "He''s learning English ______ he can work abroad.", "a": "so that"}, {"q": "I''ll give you my number ______ you can call me.", "a": "so that"}, {"q": "She exercises ______ stay healthy.", "a": "to"}, {"q": "They hurried ______ catch the bus.", "a": "in order to"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (22, 'B1', 'Question Tags', 'Form polite confirmation questions', 'bi-question-circle', '<h3>Theory</h3><p class="lead"><strong>Question Tags</strong> are short questions at the end of statements. We use
                        them to check information or ask for agreement.</p><div class="row">
<div class="col-md-6">
<div class="card bg-dark border-light mb-3">
<div class="card-header fw-bold">Basic Rule</div>
<div class="card-body">
<p>If the statement is <span class="text-success">Positive (+)</span>, the tag is
                                        <span class="text-danger">Negative (-)</span>.
                                    </p>
<p>If the statement is <span class="text-danger">Negative (-)</span>, the tag is
                                        <span class="text-success">Positive (+)</span>.
                                    </p>
<hr/>
<ul class="list-unstyled">
<li>You are student, <strong class="text-danger">aren''t you?</strong></li>
<li>She isn''t here, <strong class="text-success">is she?</strong></li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-warning mb-3">
<div class="card-header fw-bold text-warning">Auxiliary Verbs</div>
<div class="card-body">
<p>Use the <strong>same auxiliary</strong> verb as the statement. If there is no
                                        auxiliary (Present/Past Simple), use <strong>do/does/did</strong>.</p>
<ul class="list-unstyled">
<li>They <strong>have</strong> eaten, <strong class="text-warning">haven''t</strong> they?</li>
<li>You <strong>like</strong> coffee, <strong class="text-warning">don''t</strong> you? (Present Simple)</li>
<li>He <strong>went</strong> home, <strong class="text-warning">didn''t</strong>
                                            he? (Past Simple)</li>
</ul>
</div>
</div>
</div>
</div><div class="alert alert-danger mt-2">
<strong><i class="bi bi-exclamation-circle-fill me-2"></i>Irregular Case:</strong><br/>
                        I am late, <strong style="text-decoration: underline;">aren''t I?</strong> (NOT "amn''t I")<br/>
<em>But negative is regular:</em> I am not late, <strong>am I?</strong>
</div>', '{"games": [{"type": "multiple_choice", "title": "Tag Check", "instruction": "Choose the correct tag for these statements.", "questions": [{"q": "Nobody called, ______?", "a": "did they", "options": ["did they", "didn''t they", "does he"]}, {"q": "Let''s go, ______?", "a": "shall we", "options": ["shall we", "will we", "don''t we"]}, {"q": "There''s a lot of noise, ______?", "a": "isn''t there", "options": ["isn''t there", "isn''t it", "doesn''t there"]}, {"q": "Don''t be late, ______?", "a": "will you", "options": ["will you", "don''t you", "are you"]}, {"q": "I am right, ______?", "a": "aren''t I", "options": ["aren''t I", "am not I", "don''t I"]}]}, {"type": "fill_in", "title": "Advanced Tags", "instruction": "Type the question tag (e.g. shall we, aren''t I).", "questions": [{"q": "Everyone is here, ______?", "a": "aren''t they"}, {"q": "Nothing is wrong, ______?", "a": "is it"}, {"q": "Close the window, ______?", "a": "will you"}, {"q": "You''d rather stay, ______?", "a": "wouldn''t you"}, {"q": "I''m not bothering you, ______?", "a": "am i"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (23, 'B1', 'Modals of Deduction', 'Make logical conclusions about now', 'bi-search', '<h3>Theory: Being a "Grammar Detective"</h3><p class="lead">We use <strong>Modals of Deduction</strong> when we aren''t 100% sure about
                        something, but we use logic and evidence to make a guess. It''s like being a detective!</p><div class="mb-4 p-3 bg-dark border border-secondary rounded">
<h5 class="text-center mb-3">The Scale of Certainty</h5>
<div class="progress" style="height: 25px;">
<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="95" class="progress-bar bg-success" role="progressbar" style="width: 95%">MUST (95-99%)</div>
</div>
<div class="d-flex justify-content-between mt-1 mb-2 text-muted small">
<span>Certain it''s TRUE</span>
<span></span>
</div>
<div class="progress" style="height: 25px;">
<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" class="progress-bar bg-warning text-dark" role="progressbar" style="width: 50%">MIGHT / COULD / MAY (30-50%)
                            </div>
</div>
<div class="d-flex justify-content-between mt-1 mb-2 text-muted small">
<span>Possible</span>
<span></span>
</div>
<div class="progress" style="height: 25px;">
<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="5" class="progress-bar bg-danger" role="progressbar" style="width: 5%">CAN''T (Impossible)</div>
</div>
<div class="d-flex justify-content-between mt-1 text-muted small">
<span>Certain it''s FALSE</span>
<span></span>
</div>
</div><div class="row">
<!-- MUST -->
<div class="col-md-12 mb-3">
<div class="card bg-dark border-success h-100">
<div class="card-header fw-bold text-success d-flex align-items-center">
<i class="bi bi-check-circle-fill me-2"></i> MUST (Logic says YES)
                                </div>
<div class="card-body">
<p>Use <strong>must</strong> when you have strong evidence that something is true.
                                        It''s the only logical conclusion.</p>
<h6 class="text-white-50">Examples:</h6>
<ul class="list-group list-group-flush bg-transparent">
<li class="list-group-item bg-transparent text-white border-secondary">
                                            💡 The lights are on. <i class="bi bi-arrow-right"></i> Someone <strong>must
                                                be</strong> home.
                                        </li>
<li class="list-group-item bg-transparent text-white border-secondary">
                                            🏥 He is coughing and looks pale. <i class="bi bi-arrow-right"></i> He
                                            <strong>must look</strong> sick.
                                        </li>
<li class="list-group-item bg-transparent text-white border-secondary">
                                            🏎️ She drives a Ferrari. <i class="bi bi-arrow-right"></i> She <strong>must
                                                have</strong> a lot of money.
                                        </li>
<li class="list-group-item bg-transparent text-white border-secondary">
                                            🌍 You''ve been traveling all day. <i class="bi bi-arrow-right"></i> You
                                            <strong>must be</strong> tired!
                                        </li>
</ul>
</div>
</div>
</div>
<!-- CAN''T -->
<div class="col-md-12 mb-3">
<div class="card bg-dark border-danger h-100">
<div class="card-header fw-bold text-danger d-flex align-items-center">
<i class="bi bi-x-circle-fill me-2"></i> CAN''T (Logic says NO)
                                </div>
<div class="card-body">
<p>Use <strong>can''t</strong> when you are sure something is IMPOSSIBLE. <span class="text-warning">Do NOT use "mustn''t" for deduction!</span></p>
<h6 class="text-white-50">Examples:</h6>
<ul class="list-group list-group-flush bg-transparent">
<li class="list-group-item bg-transparent text-white border-secondary">
                                            🍔 He just ate 3 burgers. <i class="bi bi-arrow-right"></i> He <strong>can''t
                                                be</strong> hungry.
                                        </li>
<li class="list-group-item bg-transparent text-white border-secondary">
                                            🗼 She is in Paris right now. <i class="bi bi-arrow-right"></i> That woman
                                            <strong>can''t be</strong> her.
                                        </li>
<li class="list-group-item bg-transparent text-white border-secondary">
                                            🕙 It''s 3:00 AM. <i class="bi bi-arrow-right"></i> The bank <strong>can''t
                                                be</strong> open.
                                        </li>
<li class="list-group-item bg-transparent text-white border-secondary">
                                            📱 He doesn''t have a phone. <i class="bi bi-arrow-right"></i> You
                                            <strong>can''t allow</strong>... no wait, "You <strong>can''t call</strong>
                                            him."
                                        </li>
</ul>
</div>
</div>
</div>
<!-- MIGHT / COULD -->
<div class="col-md-12 mb-3">
<div class="card bg-dark border-warning h-100">
<div class="card-header fw-bold text-warning d-flex align-items-center">
<i class="bi bi-question-circle-fill me-2"></i> MIGHT / COULD / MAY (It''s Possible)
                                </div>
<div class="card-body">
<p>Use these when you are <strong>unsure</strong>. Maybe yes, maybe no. All three
                                        meanings are very similar here.</p>
<h6 class="text-white-50">Examples:</h6>
<ul class="list-group list-group-flush bg-transparent">
<li class="list-group-item bg-transparent text-white border-secondary">
                                            📞 She''s not answering. <i class="bi bi-arrow-right"></i> She <strong>might
                                                be</strong> busy. (Or maybe asleep?)
                                        </li>
<li class="list-group-item bg-transparent text-white border-secondary">
                                            🌧️ Look at those gray clouds. <i class="bi bi-arrow-right"></i> It
                                            <strong>could rain</strong> later.
                                        </li>
<li class="list-group-item bg-transparent text-white border-secondary">
                                            🗝️ Where are my keys? <i class="bi bi-arrow-right"></i> They <strong>may
                                                be</strong> in the kitchen.
                                        </li>
<li class="list-group-item bg-transparent text-white">
                                            🚪 Someone is knocking. <i class="bi bi-arrow-right"></i> It <strong>might
                                                be</strong> the pizza delivery.
                                        </li>
</ul>
</div>
</div>
</div>
</div><div class="alert alert-warning mt-2 border-warning">
<h5><i class="bi bi-exclamation-triangle-fill me-2"></i>Common Mistake: Logical "NO"</h5>
<p>When we deduce that something is FALSE, we always use <strong>CAN''T</strong>.</p>
<p class="mb-0 text-decoration-line-through text-muted">He must not be the doctor.</p>
<p class="mb-0 fw-bold text-success">He CAN''T be the doctor. (Because he is too young/I know the
                            doctor etc.)</p>
<hr/>
<small><em>*Mustn''t means "It is prohibited" (Rules), not "I conclude it''s false".</em></small>
</div>', '{"games": [{"type": "multiple_choice", "title": "Must, Can''t, or Might?", "instruction": "Deduce the situation based on evidence.", "questions": [{"q": "He has a Ferrari. He ______ be rich.", "a": "must", "options": ["must", "can''t", "might"]}, {"q": "She''s not answering. She ______ be busy.", "a": "might", "options": ["might", "must", "can''t"]}, {"q": "He just ate a huge burger. He ______ be hungry.", "a": "can''t", "options": ["can''t", "must", "may"]}, {"q": "The lights are off. They ______ be sleeping.", "a": "might", "options": ["might", "can''t", "should"]}, {"q": "It''s 10 PM. The stores ______ be closed by now.", "a": "must", "options": ["must", "might", "can''t"]}]}, {"type": "unscramble", "title": "Deduction Order", "instruction": "Form a sentence of deduction.", "questions": [{"q": "be he rich must", "a": "he must be rich"}, {"q": "true can''t be that", "a": "that can''t be true"}, {"q": "be she cold might", "a": "she might be cold"}, {"q": "wrong it could be", "a": "it could be wrong"}, {"q": "be home they must", "a": "they must be home"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (24, 'B1', 'Past Modals of Deduction', 'Make logical conclusions about the past', 'bi-binoculars', '<h3>Theory: Cold Case Detective</h3><p class="lead">We use <strong>Past Modals</strong> to make deductions about events that happened in
                        the <strong>PAST</strong>. We are analyzing evidence from yesterday, last week, or long ago.</p><div class="mb-4 p-3 bg-dark border border-secondary rounded">
<h5 class="text-center mb-3">The Scale of PAST Certainty</h5>
<div class="progress" style="height: 25px;">
<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="95" class="progress-bar bg-success" role="progressbar" style="width: 95%">MUST HAVE + V3 (99%)</div>
</div>
<div class="d-flex justify-content-between mt-1 mb-2 text-muted small">
<span>Certain it HAPPENED</span>
<span>"It must have rained."</span>
</div>
<div class="progress" style="height: 25px;">
<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" class="progress-bar bg-warning text-dark" role="progressbar" style="width: 50%">MIGHT HAVE + V3 (50%)</div>
</div>
<div class="d-flex justify-content-between mt-1 mb-2 text-muted small">
<span>Possible it happened</span>
<span>"It might have rained."</span>
</div>
<div class="progress" style="height: 25px;">
<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="5" class="progress-bar bg-danger" role="progressbar" style="width: 5%">CAN''T HAVE + V3 (0%)</div>
</div>
<div class="d-flex justify-content-between mt-1 text-muted small">
<span>Certain it DIDN''T happen</span>
<span>"It can''t have rained."</span>
</div>
</div><div class="row">
<!-- MUST HAVE -->
<div class="col-md-12 mb-3">
<div class="card bg-dark border-success h-100">
<div class="card-header fw-bold text-success d-flex align-items-center">
<i class="bi bi-check-circle-fill me-2"></i> MUST HAVE + Past Participle (V3)
                                </div>
<div class="card-body">
<p>Use when you are sure something happened in the past based on evidence.</p>
<ul class="list-group list-group-flush bg-transparent">
<li class="list-group-item bg-transparent text-white border-secondary">
                                            🔎 <strong>Evidence:</strong> The ground is wet. <br/>
                                            🕵️ <strong>Deduction:</strong> It <strong>must have rained</strong> last
                                            night.
                                        </li>
<li class="list-group-item bg-transparent text-white border-secondary">
                                            🔎 <strong>Evidence:</strong> Her office is empty and lights are off. <br/>
                                            🕵️ <strong>Deduction:</strong> She <strong>must have left</strong> already.
                                        </li>
</ul>
</div>
</div>
</div>
<!-- CAN''T HAVE -->
<div class="col-md-12 mb-3">
<div class="card bg-dark border-danger h-100">
<div class="card-header fw-bold text-danger d-flex align-items-center">
<i class="bi bi-x-circle-fill me-2"></i> CAN''T / COULDN''T HAVE + V3
                                </div>
<div class="card-body">
<p>Use when you are sure something was IMPOSSIBLE in the past.</p>
<ul class="list-group list-group-flush bg-transparent">
<li class="list-group-item bg-transparent text-white border-secondary">
                                            🔎 <strong>Evidence:</strong> He was with me all day yesterday. <br/>
                                            🕵️ <strong>Deduction:</strong> He <strong>can''t have stolen</strong> the
                                            car.
                                        </li>
<li class="list-group-item bg-transparent text-white border-secondary">
                                            🔎 <strong>Evidence:</strong> The thief entered through a small window. <br/>
                                            🕵️ <strong>Deduction:</strong> It <strong>couldn''t have been</strong> the
                                            giant.
                                        </li>
</ul>
</div>
</div>
</div>
<!-- MIGHT HAVE -->
<div class="col-md-12 mb-3">
<div class="card bg-dark border-warning h-100">
<div class="card-header fw-bold text-warning d-flex align-items-center">
<i class="bi bi-question-circle-fill me-2"></i> MIGHT / COULD HAVE + V3
                                </div>
<div class="card-body">
<p>Use when it was possible in the past, but you aren''t sure.</p>
<ul class="list-group list-group-flush bg-transparent">
<li class="list-group-item bg-transparent text-white border-secondary">
                                            🔎 <strong>Evidence:</strong> My phone is missing. <br/>
                                            🕵️ <strong>Deduction:</strong> I <strong>might have left</strong> it on the
                                            bus.
                                        </li>
<li class="list-group-item bg-transparent text-white border-secondary">
                                            🔎 <strong>Evidence:</strong> The dinosaur bone has scratch marks. <br/>
                                            🕵️ <strong>Deduction:</strong> A T-Rex <strong>could have eaten</strong>
                                            it.
                                        </li>
</ul>
</div>
</div>
</div>
</div><div class="alert alert-warning mt-2 border-warning">
<h5><i class="bi bi-exclamation-triangle-fill me-2"></i>Common Grammar Trap</h5>
<p class="mb-1">We always use <strong>HAVE</strong>. Never "has" or "had", even for "He" or
                            "She".</p>
<p class="mb-0 text-decoration-line-through text-muted">He must has gone.</p>
<p class="mb-0 fw-bold text-success">He must HAVE gone.</p>
</div>', '{"games": [{"type": "multiple_choice", "title": "Past Deduction", "instruction": "Choose the correct past modal of deduction (must have, can''t have, etc).", "questions": [{"q": "I can''t find my keys. I ______ them at work.", "a": "must have left", "options": ["must have left", "can''t have left", "should have left"]}, {"q": "He failed the test. He ______ enough.", "a": "can''t have studied", "options": ["can''t have studied", "must have studied", "may have studied"]}, {"q": "The floor is wet. It ______ rained.", "a": "must have", "options": ["must have", "can''t have", "should have"]}, {"q": "She didn''t call. She ______ my number.", "a": "might have lost", "options": ["might have lost", "must have lost", "can''t have lost"]}, {"q": "They didn''t arrive. They ______ the wrong bus.", "a": "must have taken", "options": ["must have taken", "can''t have taken", "should have taken"]}]}, {"type": "fill_in", "title": "Fill the Past Modal", "instruction": "Type: must have, can''t have, or might have.", "questions": [{"q": "The street is white. It ______ (snow) last night.", "a": "must have snowed"}, {"q": "I''m sure she didn''t see me. She ______ (see) me.", "a": "can''t have seen"}, {"q": "He''s late. He ______ (miss) the train.", "a": "might have missed"}, {"q": "The cake is gone. Someone ______ (eat) it.", "a": "must have eaten"}, {"q": "They look confused. They ______ (understand).", "a": "can''t have understood"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (25, 'B1', 'Reported Speech', 'Report what someone said', 'bi-chat-quote', '<h3>Theory: What did they say?</h3><p class="lead">When we report what someone else said, we usually move the tense
                        <strong>BACK</strong> into the past. This is called "Backshifting".
                    </p><div class="row mb-4">
<div class="col-md-12">
<div class="card bg-dark border-light">
<div class="card-header fw-bold text-center">🔄 The Backshift Logic</div>
<div class="card-body p-0">
<div class="table-responsive">
<table class="table table-dark table-striped mb-0 text-center">
<thead>
<tr>
<th class="text-info w-50">Direct Speech (Now)</th>
<th class="text-warning w-50">Reported Speech (Then)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Present Simple<br/><small>"I <strong>like</strong> pizza"</small>
</td>
<td>Past Simple<br/><small>He said he <strong>liked</strong>
                                                            pizza</small></td>
</tr>
<tr>
<td>Present Continuous<br/><small>"I <strong>am
                                                                working</strong>"</small>
</td>
<td>Past Continuous<br/><small>She said she <strong>was
                                                                working</strong></small></td>
</tr>
<tr>
<td>Past Simple / Pres. Perfect<br/><small>"I <strong>bought</strong>
                                                            it"
                                                            / "I <strong>have bought</strong> it"</small></td>
<td>Past Perfect<br/><small>He said he <strong>had bought</strong>
                                                            it</small></td>
</tr>
<tr>
<td>Will<br/><small>"I <strong>will</strong> call"</small></td>
<td>Would<br/><small>She said she <strong>would</strong> call</small>
</td>
</tr>
<tr>
<td>Can<br/><small>"I <strong>can</strong> help"</small></td>
<td>Could<br/><small>He said he <strong>could</strong> help</small>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div><div class="row">
<div class="col-md-6 mb-3">
<div class="card h-100 bg-dark border-info">
<div class="card-header text-info fw-bold"><i class="bi bi-chat-left-quote-fill me-2"></i>Pronoun Changes</div>
<div class="card-body">
<p>Don''t forget to change the person!</p>
<ul class="list-unstyled">
<li>"<strong>I</strong> like <strong>my</strong> car"</li>
<li class="fs-4">⬇️</li>
<li>He said <strong>he</strong> liked <strong>his</strong> car.</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6 mb-3">
<div class="card h-100 bg-dark border-warning">
<div class="card-header text-warning fw-bold"><i class="bi bi-clock-history me-2"></i>Time Expressions</div>
<div class="card-body">
<p>Time words also shift back:</p>
<ul class="list-unstyled">
<li>Now → Then / At that moment</li>
<li>Today → That day</li>
<li>Tomorrow → The next day</li>
<li>Yesterday → The day before</li>
</ul>
</div>
</div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "Reporting Verbs", "instruction": "Choose the best reporting verb.", "questions": [{"q": "He ______ to help me with the move.", "a": "offered", "options": ["offered", "said", "told"]}, {"q": "She ______ me not to tell anyone.", "a": "warned", "options": ["warned", "said", "suggested"]}, {"q": "They ______ going to the beach.", "a": "suggested", "options": ["suggested", "offered", "promised"]}, {"q": "He ______ to give me my money back.", "a": "promised", "options": ["promised", "told", "warned"]}, {"q": "The doctor ______ me to take a rest.", "a": "advised", "options": ["advised", "said", "offered"]}]}, {"type": "fill_in", "title": "Reported Command Fill", "instruction": "Use the reporting verb in the past and ''to'' + infinitive.", "questions": [{"q": "''Go away!'' -> He ______ (order) me to go away.", "a": "ordered"}, {"q": "''Please help'' -> She ______ (ask) me to help.", "a": "asked"}, {"q": "''Don''t smoke'' -> The doctor ______ (tell) me not to smoke.", "a": "told"}, {"q": "''Would you like to come?'' -> He ______ (invite) me to come.", "a": "invited"}, {"q": "''I''ll be there'' -> She ______ (promise) to be there.", "a": "promised"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (26, 'B1', 'Giving Reasons', 'Explain causes and reasons clearly', 'bi-lightbulb', '<h3>Theory: Linking Causes</h3><p class="lead">To explain "WHY" something happened, we have two main groups of connectors. The
                        difference is <strong>grammar</strong>, not meaning.</p><div class="row mb-4">
<div class="col-md-6">
<div class="card bg-dark border-success h-100">
<div class="card-header fw-bold text-success text-center">GROUP A: Followed by CLAUSE
                                </div>
<div class="card-body">
<h5 class="text-white text-center mb-3">Connector + <span class="text-warning">Subject + Verb</span></h5>
<ul class="list-group list-group-flush bg-transparent">
<li class="list-group-item bg-transparent text-white border-secondary">
<strong>Because</strong> <span class="text-warning">it was</span> raining...
                                        </li>
<li class="list-group-item bg-transparent text-white border-secondary">
<strong>Since</strong> <span class="text-warning">she is</span> tired...
                                        </li>
<li class="list-group-item bg-transparent text-white border-secondary">
<strong>As</strong> <span class="text-warning">we have</span> time...
                                        </li>
</ul>
<p class="mt-3 small text-muted text-center">Focus: A complete thought follows.</p>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-info h-100">
<div class="card-header fw-bold text-info text-center">GROUP B: Followed by NOUN /
                                    PHRASE</div>
<div class="card-body">
<h5 class="text-white text-center mb-3">Connector + <span class="text-warning">Noun
                                            / -ing</span></h5>
<ul class="list-group list-group-flush bg-transparent">
<li class="list-group-item bg-transparent text-white border-secondary">
<strong>Because of</strong> <span class="text-warning">the rain</span>...
                                        </li>
<li class="list-group-item bg-transparent text-white border-secondary">
<strong>Due to</strong> <span class="text-warning">heavy traffic</span>...
                                        </li>
<li class="list-group-item bg-transparent text-white border-secondary">
<strong>Owing to</strong> <span class="text-warning">his success</span>...
                                        </li>
</ul>
<p class="mt-3 small text-muted text-center">Focus: Only a "thing" or "action"
                                        follows. No verb conjugation.</p>
</div>
</div>
</div>
</div><div class="alert alert-dark mt-2 border-warning text-white">
<strong><i class="bi bi-lightbulb-fill text-warning me-2"></i>Hack:</strong>
                        If you see <strong>"the fact that"</strong>, treat it like Group A (Clause)!<br/>
<em>"Due to <strong>the fact that</strong> <span class="text-decoration-underline">he was</span>
                            late..."</em>
</div>', '{"games": [{"type": "multiple_choice", "title": "Because or Because of?", "instruction": "Choose the correct reason connector.", "questions": [{"q": "I was late ______ the traffic.", "a": "because of", "options": ["because of", "because", "due"]}, {"q": "He left ______ he was tired.", "a": "because", "options": ["because", "because of", "so"]}, {"q": "We canceled the trip ______ the weather.", "a": "due to", "options": ["due to", "because", "as"]}, {"q": "______ the rain, we stayed inside.", "a": "Because of", "options": ["Because of", "Since", "Due"]}, {"q": "He succeeded ______ his hard work.", "a": "because of", "options": ["because of", "because", "so"]}]}, {"type": "fill_in", "title": "Reason Connectors", "instruction": "Type: because or because of.", "questions": [{"q": "I''m happy ______ I passed.", "a": "because"}, {"q": "I''m tired ______ the long flight.", "a": "because of"}, {"q": "They failed ______ they didn''t study.", "a": "because"}, {"q": "We won ______ your help.", "a": "because of"}, {"q": "It broke ______ it was old.", "a": "because"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (27, 'B1', 'Past Modals (Judgments)', 'Express regrets and possibilities', 'bi-star', '<h3>Theory: Regrets &amp; Life Lessons</h3><p class="lead">We use <strong>Past Modals</strong> to look back at the past and judge what
                        happened. It allows us to express regrets, criticize mistakes, or imagine different outcomes.
                    </p><div class="alert alert-dark border-secondary text-center mb-4">
<h5 class="mb-0 text-white">
<span class="text-info">Subject</span> +
                            <span class="text-warning">Modal</span> +
                            <span class="text-success">HAVE</span> +
                            <span class="text-info">Past Participle (V3)</span>
</h5>
<small class="text-muted">Example: "I <strong>should have called</strong> you."</small>
</div><div class="row">
<!-- SHOULD HAVE -->
<div class="col-md-12 mb-3">
<div class="card bg-dark border-warning h-100">
<div class="card-header fw-bold text-warning d-flex align-items-center">
<i class="bi bi-exclamation-triangle-fill me-2"></i> SHOULD HAVE (Regret &amp; Advice)
                                </div>
<div class="card-body">
<p>Use this to say that a past action was a <strong>mistake</strong>. It was the
                                        "right thing to do", but it didn''t happen.</p>
<h6 class="text-white-50">Scenarios:</h6>
<ul class="list-group list-group-flush bg-transparent">
<li class="list-group-item bg-transparent text-white border-secondary">
                                            📉 <strong>Context:</strong> I didn''t study and I failed the exam.<br/>
                                            💡 <strong>Judgment:</strong> "I <strong>should have studied</strong> more."
                                            (Self-regret)
                                        </li>
<li class="list-group-item bg-transparent text-white border-secondary">
                                            🌧️ <strong>Context:</strong> You are wet because you didn''t bring an
                                            umbrella.<br/>
                                            💡 <strong>Judgment:</strong> "You <strong>should have checked</strong> the
                                            weather app." (Criticism)
                                        </li>
<li class="list-group-item bg-transparent text-white border-secondary">
                                            🛑 <strong>Context:</strong> He bought a terrible car.<br/>
                                            💡 <strong>Judgment:</strong> "He <strong>shouldn''t have bought</strong>
                                            that junk!" (Negative judgment)
                                        </li>
</ul>
</div>
</div>
</div>
<!-- COULD HAVE -->
<div class="col-md-12 mb-3">
<div class="card bg-dark border-info h-100">
<div class="card-header fw-bold text-info d-flex align-items-center">
<i class="bi bi-shuffle me-2"></i> COULD HAVE (Missed Opportunity)
                                </div>
<div class="card-body">
<p>Use this to say that a past possibility existed, but you <strong>chose</strong>
                                        not to do it (or didn''t do it).</p>
<h6 class="text-white-50">Scenarios:</h6>
<ul class="list-group list-group-flush bg-transparent">
<li class="list-group-item bg-transparent text-white border-secondary">
                                            🏠 <strong>Context:</strong> I stayed home and watched TV.<br/>
                                            🤷 <strong>Alternative:</strong> "I <strong>could have gone</strong> to the
                                            party, but I was tired."
                                        </li>
<li class="list-group-item bg-transparent text-white border-secondary">
                                            🏃 <strong>Context:</strong> She won the silver medal.<br/>
                                            🤷 <strong>Alternative:</strong> "She <strong>could have won</strong> gold
                                            if she hadn''t tripped."
                                        </li>
<li class="list-group-item bg-transparent text-white border-secondary">
                                            😡 <strong>Context:</strong> You were so rude to him!<br/>
                                            🤷 <strong>Alternative:</strong> "You <strong>could have been</strong>
                                            nicer." (Often used as criticism too)
                                        </li>
</ul>
</div>
</div>
</div>
<!-- WOULD HAVE -->
<div class="col-md-12 mb-3">
<div class="card bg-dark border-light h-100">
<div class="card-header fw-bold text-white d-flex align-items-center">
<i class="bi bi-heart-arrow me-2"></i> WOULD HAVE (Intention)
                                </div>
<div class="card-body">
<p>Use this to talk about your <strong>intentions</strong> in the past that were
                                        stopped by something.</p>
<h6 class="text-white-50">Scenarios:</h6>
<ul class="list-group list-group-flush bg-transparent">
<li class="list-group-item bg-transparent text-white border-secondary">
                                            📞 <strong>Context:</strong> I didn''t call you because I lost my phone.<br/>
                                            💭 <strong>Intention:</strong> "I <strong>would have called</strong> you,
                                            but I lost my phone."
                                        </li>
<li class="list-group-item bg-transparent text-white border-secondary">
                                            💸 <strong>Context:</strong> I didn''t buy the shoes because they were
                                            expensive.<br/>
                                            💭 <strong>Intention:</strong> "I <strong>would have bought</strong> them if
                                            they were cheaper."
                                        </li>
</ul>
</div>
</div>
</div>
</div><div class="alert alert-danger mt-2">
<h5><i class="bi bi-x-octagon-fill me-2"></i>Common Mistake: "Of" vs "Have"</h5>
<p class="mb-0">When speaking fast, "Should have" sounds like "Should-a".</p>
<p class="mb-0 text-decoration-line-through text-muted">You should of called me.</p>
<p class="mb-0 fw-bold">You should HAVE called me.</p>
</div>', '{"games": [{"type": "multiple_choice", "title": "Regrets", "instruction": "Choose the best past modal for judgments (should have, shouldn''t have).", "questions": [{"q": "I''m so tired. I ______ gone to bed earlier.", "a": "should have", "options": ["should have", "shouldn''t have", "must have"]}, {"q": "That was a mistake. You ______ told him.", "a": "shouldn''t have", "options": ["shouldn''t have", "should have", "could have"]}, {"q": "I''m broke. I ______ spent so much money.", "a": "shouldn''t have", "options": ["shouldn''t have", "should have", "must have"]}, {"q": "The plant died. I ______ watered it more.", "a": "should have", "options": ["should have", "shouldn''t have", "must have"]}, {"q": "He''s angry. You ______ said that.", "a": "shouldn''t have", "options": ["shouldn''t have", "should have", "might have"]}]}, {"type": "fill_in", "title": "Fill the Regret", "instruction": "Type: should have or shouldn''t have.", "questions": [{"q": "I''m late. I ______ left earlier.", "a": "should have"}, {"q": "I feel sick. I ______ eaten so much.", "a": "shouldn''t have"}, {"q": "It''s raining. We ______ brought an umbrella.", "a": "should have"}, {"q": "The movie was bad. We ______ watched it.", "a": "shouldn''t have"}, {"q": "I lost my phone. I ______ been more careful.", "a": "should have"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (28, 'B1', 'Past Accomplishments', 'Talk about abilities and achievements', 'bi-trophy', '<h3>Theory: General Ability vs. Specific Success</h3><p class="lead">Talking about "what we did" in the past can be tricky. We must distinguish between a
                        skill we <strong>possessed</strong> (Genera Ability) and something we actually
                        <strong>did</strong> in a specific moment (Specific Achievement).
                    </p><div class="table-responsive mb-4">
<div class="table-responsive">
<table class="table table-dark table-bordered table-hover text-center align-middle">
<thead>
<tr class="bg-secondary text-white">
<th style="width: 30%;">Situation</th>
<th style="width: 35%;">Positive (+)</th>
<th style="width: 35%;">Negative (-)</th>
</tr>
</thead>
<tbody>
<tr>
<td class="fw-bold text-info">General Ability<br/><small class="text-muted">(A
                                                skill
                                                over time)</small></td>
<td>
<span class="badge bg-info text-dark mb-1">COULD</span><br/>
                                            "I could run fast."
                                        </td>
<td>
<span class="badge bg-secondary mb-1">COULDN''T</span><br/>
                                            "I couldn''t swim."
                                        </td>
</tr>
<tr>
<td class="fw-bold text-success">Specific Success<br/><small class="text-muted">(One
                                                specific moment)</small></td>
<td>
<span class="badge bg-success mb-1">MANAGED TO</span><br/>
<span class="badge bg-success mb-1">WAS ABLE TO</span><br/>
                                            "I managed to escape."
                                        </td>
<td>
<span class="badge bg-secondary mb-1">COULDN''T</span><br/>
<span class="badge bg-secondary mb-1">WASN''T ABLE TO</span><br/>
                                            "I couldn''t open it."
                                        </td>
</tr>
</tbody>
</table>
</div>
</div><div class="row mb-3">
<div class="col-12">
<div class="card bg-dark border-success">
<div class="card-header fw-bold text-success"><i class="bi bi-trophy-fill me-2"></i>The
                                    Golden Rule: Specific POSITIVE Success</div>
<div class="card-body">
<p>If you successfully did something difficult in a specific past moment, you CANNOT
                                        use "Could". You must use <strong>Managed to</strong> or <strong>Was/Were able
                                            to</strong>.</p>
<h6 class="text-white-50">Compare:</h6>
<div class="d-flex align-items-center mb-2">
<i class="bi bi-x-circle-fill text-danger me-2 fs-5"></i>
<div>
<span class="text-decoration-line-through text-muted">The test was hard, but
                                                I could pass it.</span>
<br/><small class="text-danger">Wrong: "Could" sounds like you *had the
                                                ability* but maybe didn''t do it.</small>
</div>
</div>
<div class="d-flex align-items-center">
<i class="bi bi-check-circle-fill text-success me-2 fs-5"></i>
<div>
<strong>The test was hard, but I managed to pass it.</strong>
<br/><small class="text-success">Correct: Emphasizes the effort and the
                                                success.</small>
</div>
</div>
</div>
</div>
</div>
</div><div class="accordion mb-4" id="exceptionsAccordion">
<div class="accordion-item bg-dark border-info">
<h2 class="accordion-header" id="headingException">
<button aria-controls="collapseException" aria-expanded="false" class="accordion-button collapsed bg-dark text-info" data-bs-target="#collapseException" data-bs-toggle="collapse" type="button">
<i class="bi bi-eye-fill me-2"></i> The Exception: Sensory Verbs
                                </button>
</h2>
<div aria-labelledby="headingException" class="accordion-collapse collapse" data-bs-parent="#exceptionsAccordion" id="collapseException">
<div class="accordion-body">
<p>With verbs of perception (See, Hear, Smell, Taste, Feel, Understand, Remember),
                                        we <strong>CAN</strong> use <strong>COULD</strong> even for specific moments!
                                    </p>
<ul>
<li>"I looked out the window and I <strong>could see</strong> the mountains."
                                            (Specific moment, but See is sensory).</li>
<li>"The music was loud, but I <strong>could hear</strong> him."</li>
</ul>
</div>
</div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "Could or Was able to?", "instruction": "Choose between general ability and specific accomplishment.", "questions": [{"q": "When I was young, I ______ run very fast.", "a": "could", "options": ["could", "was able to", "managed"]}, {"q": "The door was locked, but I ______ open it.", "a": "was able to", "options": ["was able to", "could", "did"]}, {"q": "After trying for hours, we ______ fix the computer.", "a": "managed to", "options": ["managed to", "could", "can"]}, {"q": "I ______ swim when I was five.", "a": "could", "options": ["could", "was able", "can"]}, {"q": "The fire was huge, but they ______ escape.", "a": "were able to", "options": ["were able to", "could", "managed"]}]}, {"type": "fill_in", "title": "Accomplishment Fill", "instruction": "Type: could, were able to, or managed to.", "questions": [{"q": "He ______ speak three languages fluently.", "a": "could"}, {"q": "They ______ save the child from the river.", "a": "were able to"}, {"q": "I finally ______ finish the report.", "a": "managed to"}, {"q": "She ______ play the piano when she was a child.", "a": "could"}, {"q": "We ______ find a parking spot in the end.", "a": "managed to"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (29, 'B1', 'Passive Process', 'Describe manufacturing processes', 'bi-gear', '<h3>Theory: How It''s Made</h3><p class="lead">When explaining a process (how to make something), the <strong>Action</strong> is
                        more important than the person doing it. We use the <strong>Present Passive</strong>.</p><div class="alert alert-dark border-primary text-center mb-4">
<h5 class="mb-0 text-white">
<span class="text-warning">Sequencer</span> +
                            <span class="text-info">Object</span> +
                            <span class="text-success">IS / ARE</span> +
                            <span class="text-danger">Past Participle (V3)</span>
</h5>
<small class="text-muted">Example: "First, the tea <strong>is picked</strong>."</small>
</div><div class="row mb-4">
<div class="col-12">
<div class="card bg-dark border-light">
<div class="card-header fw-bold text-center">☕ Example Process: Coffee Production</div>
<div class="card-body">
<div class="row text-center">
<div class="col-md-3 mb-3">
<div class="p-3 border border-secondary rounded h-100">
<h6 class="text-info">1. First...</h6>
<p>The coffee beans <strong>are harvested</strong> by hand.</p>
</div>
</div>
<div class="col-md-3 mb-3">
<div class="p-3 border border-secondary rounded h-100">
<h6 class="text-info">2. Then...</h6>
<p>They <strong>are dried</strong> in the sun for several days.</p>
</div>
</div>
<div class="col-md-3 mb-3">
<div class="p-3 border border-secondary rounded h-100">
<h6 class="text-info">3. Next...</h6>
<p>The beans <strong>are roasted</strong> at high temperatures.</p>
</div>
</div>
<div class="col-md-3 mb-3">
<div class="p-3 border border-secondary rounded h-100">
<h6 class="text-info">4. Finally...</h6>
<p>The coffee <strong>is packed</strong> into bags.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div><p>More Examples:</p><ul class="list-group list-group-flush bg-transparent mb-4">
<li class="list-group-item bg-transparent text-white border-dark">
                            🍫 <strong>Chocolate:</strong> "The beans <strong>are cleaned</strong>, then they
                            <strong>are melted</strong>."
                        </li>
<li class="list-group-item bg-transparent text-white border-dark">
                            ♻️ <strong>Recycling:</strong> "Plastic bottles <strong>are collected</strong> and
                            <strong>are washed</strong>."
                        </li>
<li class="list-group-item bg-transparent text-white border-dark">
                            👕 <strong>Cotton:</strong> "The cotton <strong>is picked</strong> and then it <strong>is
                                spun</strong> into thread."
                        </li>
</ul>', '{"games": [{"type": "multiple_choice", "title": "Being or Been?", "instruction": "Choose the correct continuous or perfect passive form.", "questions": [{"q": "The house ______ painted right now.", "a": "is being", "options": ["is being", "has been", "was being"]}, {"q": "The work ______ already ______ finished.", "a": "has / been", "options": ["has / been", "is / being", "was / being"]}, {"q": "The bridge ______ repaired next month.", "a": "will be", "options": ["is being", "will be", "has been"]}, {"q": "The dinner ______ cooked when I arrived.", "a": "was being", "options": ["was being", "is being", "has been"]}, {"q": "My car ______ stolen!", "a": "has been", "options": ["has been", "is being", "is"]}]}, {"type": "fill_in", "title": "Process Fill", "instruction": "Use the continuous (is/was being + pp) or perfect (has been + pp) passive.", "questions": [{"q": "The new road ______ (build) at the moment.", "a": "is being built"}, {"q": "The results ______ (post) yesterday.", "a": "were posted"}, {"q": "All the cake ______ (eat) already.", "a": "has been eaten"}, {"q": "The kids ______ (watch) by a babysitter now.", "a": "are being watched"}, {"q": "The project ______ (complete) next week.", "a": "will be completed"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (30, 'B1', 'Future Perfect', 'Master future perfect structures', 'bi-calendar-plus', '<div class="text-center mb-4">
<div class="p-3 rounded-3 border border-primary" style="background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%); color: white;">
<i class="fas fa-bullseye fa-3x mb-2 text-info"></i>
<h3 class="fw-bold">The Vision Board</h3>
<p class="mb-0 text-white-50">Looking forward to what will be <em>finished</em>.</p>
</div>
</div><div class="alert alert-dark border-info border-start border-4" role="alert">
<h4 class="alert-heading text-info"><i class="fas fa-info-circle me-2"></i>The Future Perfect
                        </h4>
<p class="text-white">We use the <strong>Future Perfect</strong> to talk about an action that
                            will be completed <strong>before a specific time</strong> in the future. It''s like standing
                            in the future and looking back at a finished task.</p>
<hr class="border-secondary"/>
<p class="mb-0 text-white-50"><strong>Key Trigger:</strong> Works perfectly with <em>learning
                                goals, project deadlines, and life milestones</em>.</p>
</div><div class="card shadow-sm mb-4 border-info bg-dark">
<div class="card-header bg-dark text-info border-bottom border-secondary">
<h5 class="mb-0"><i class="fas fa-flask me-2"></i>The Formula</h5>
</div>
<div class="card-body text-white text-center">
<div class="d-flex flex-wrap justify-content-center align-items-center gap-2">
<span class="badge bg-secondary p-2 fs-6">Subject</span>
<i class="fas fa-plus text-secondary"></i>
<span class="badge bg-primary p-2 fs-6">WILL HAVE</span>
<i class="fas fa-plus text-secondary"></i>
<span class="badge bg-danger p-2 fs-6">Past Participle (V3)</span>
</div>
<div class="mt-3 p-3 bg-secondary bg-opacity-25 rounded border border-secondary">
<p class="mb-0 fs-5">"By 2030, I <strong class="text-primary">will have learned</strong>
                                    three languages."</p>
</div>
</div>
</div><div class="card shadow-sm mb-4 border-success bg-dark">
<div class="card-header bg-dark text-success border-bottom border-secondary">
<h5 class="mb-0"><i class="fas fa-clock me-2"></i>The Timeline Logic</h5>
</div>
<div class="card-body text-white">
<div class="position-relative py-4 my-2">
<div class="progress" style="height: 6px; background-color: #444;">
<div class="progress-bar bg-secondary" role="progressbar" style="width: 20%"></div>
<div class="progress-bar bg-success" role="progressbar" style="width: 60%"></div>
</div>
<!-- Labels -->
<div class="position-absolute top-0 start-0 translate-middle-y badge bg-secondary rounded-circle" style="top: -10px !important;">Now</div>
<div class="position-absolute top-0 start-50 translate-middle badge bg-info rounded-circle" style="top: -10px !important;">Action</div>
<div class="position-absolute top-0 end-0 translate-middle-y badge bg-success rounded-circle" style="top: -10px !important;">Deadline</div>
<div class="d-flex justify-content-between mt-3 text-white-50 small">
<span>Today</span>
<span>In Progress...</span>
<span class="text-success fw-bold">FINISHED</span>
</div>
</div>
<p class="text-center mt-3 fst-italic text-white">"I will start now, and I <strong class="text-success">will have finished</strong> before the deadline arrives."</p>
</div>
</div><div class="row g-3 mb-4">
<div class="col-md-6">
<div class="card h-100 border-info bg-dark">
<div class="card-body text-white">
<h5 class="text-info border-bottom border-info pb-2"><i class="fas fa-calendar-alt me-2"></i>By + [Time/Date]</h5>
<p class="small text-white-50">Use with a specific point in time.</p>
<ul class="list-unstyled mb-0">
<li><i class="fas fa-check text-success me-2"></i>By next year...</li>
<li><i class="fas fa-check text-success me-2"></i>By 5:00 PM...</li>
<li><i class="fas fa-check text-success me-2"></i>By 2050...</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card h-100 border-warning bg-dark">
<div class="card-body text-white">
<h5 class="text-warning border-bottom border-warning pb-2"><i class="fas fa-hourglass-end me-2"></i>By the time + [Clause]</h5>
<p class="small text-white-50">Use with a Present Simple verb.</p>
<ul class="list-unstyled mb-0">
<li><i class="fas fa-check text-success me-2"></i>By the time you
                                            <strong>get</strong> home...
                                        </li>
<li><i class="fas fa-check text-success me-2"></i>By the time she
                                            <strong>finishes</strong>...
                                        </li>
</ul>
</div>
</div>
</div>
</div><div class="alert alert-danger d-flex align-items-center bg-dark border-danger text-white" role="alert">
<i class="fas fa-exclamation-triangle fa-2x me-3 text-danger"></i>
<div>
<h5 class="alert-heading text-danger">Grammar Trap!</h5>
<p class="mb-0">Never change "have" to "has". The logic is <strong>WILL + HAVE</strong>.
                                Even for He/She/It.</p>
<div class="mt-2 p-2 bg-black rounded border border-danger">
<p class="mb-0 text-white-50"><i class="fas fa-times text-danger me-2"></i>He will
                                    <del>has</del> finished.
                                </p>
<p class="mb-0 text-success"><i class="fas fa-check me-2"></i>He <strong>will
                                        have</strong> finished.</p>
</div>
</div>
</div><div class="row g-3 mb-4">
<div class="col-12">
<h5 class="text-info mt-4 mb-3"><i class="fas fa-images me-2"></i>Scenario Gallery</h5>
</div>
<div class="col-md-4">
<div class="card bg-dark border-secondary h-100">
<div class="card-body text-white">
<div class="badge bg-primary mb-2">Personal Growth</div>
<p class="card-text">"I started saving money in January. By December, I <strong>will
                                            have saved</strong> $5,000."</p>
</div>
</div>
</div>
<div class="col-md-4">
<div class="card bg-dark border-secondary h-100">
<div class="card-body text-white">
<div class="badge bg-success mb-2">Career</div>
<p class="card-text">"The deadline is Friday. We <strong>will have finished</strong>
                                        the report by Thursday afternoon."</p>
</div>
</div>
</div>
<div class="col-md-4">
<div class="card bg-dark border-secondary h-100">
<div class="card-body text-white">
<div class="badge bg-warning text-dark mb-2">Travel</div>
<p class="card-text">"The flight takes 10 hours. By the time we land, we
                                        <strong>will have watched</strong> three movies."
                                    </p>
</div>
</div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "Will have done", "instruction": "Choose the future perfect form.", "questions": [{"q": "By next year, I ______ my degree.", "a": "will have finished", "options": ["will have finished", "will finish", "will be finishing"]}, {"q": "By tomorrow, they ______ everything.", "a": "will have moved", "options": ["will have moved", "will move", "shall move"]}, {"q": "I ______ 10 miles by noon.", "a": "will have run", "options": ["will have run", "will run", "will be running"]}, {"q": "By next month, she ______ here for a year.", "a": "will have worked", "options": ["will have worked", "will work", "will working"]}, {"q": "Will you ______ arrived by 8 PM?", "a": "have", "options": ["have", "has", "had"]}]}, {"type": "fill_in", "title": "Future Perfect Fill", "instruction": "Use will have + past participle.", "questions": [{"q": "By the time you get here, we ______ (start).", "a": "will have started"}, {"q": "I ______ (finish) the book by tonight.", "a": "will have finished"}, {"q": "They ______ (leave) by then.", "a": "will have left"}, {"q": "By next summer, I ______ (save) enough money.", "a": "will have saved"}, {"q": "She ______ (forget) all about it by tomorrow.", "a": "will have forgotten"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (1, 'B2', 'Verbs + Gerunds', 'Master verbs that take gerund forms', 'bi-journal-text', '<h3>Theory</h3><p>In English, certain verbs are always followed by a <strong>gerund</strong> (the -ing form of a verb
                    used as a noun). This is a fixed grammatical rule, and using an infinitive instead would be
                    incorrect.</p><h5>What is a Gerund?</h5><p>A gerund is formed by adding <strong>-ing</strong> to a verb. It functions as a noun in the sentence.
                </p><ul>
<li><em>swim → <strong>swimming</strong></em></li>
<li><em>read → <strong>reading</strong></em></li>
<li><em>I enjoy <strong>swimming</strong>.</em> (swimming = noun, object of "enjoy")</li>
</ul><h5>Common Verbs Followed by Gerunds</h5><p>These verbs <strong>must</strong> be followed by a gerund, never an infinitive:</p><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Verb</th>
<th>Example</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>enjoy</strong></td>
<td><em>I enjoy <strong>reading</strong> books.</em></td>
<td>disfrutar</td>
</tr>
<tr>
<td><strong>avoid</strong></td>
<td><em>He avoids <strong>talking</strong> about politics.</em></td>
<td>evitar</td>
</tr>
<tr>
<td><strong>finish</strong></td>
<td><em>She finished <strong>writing</strong> her essay.</em></td>
<td>terminar</td>
</tr>
<tr>
<td><strong>mind</strong></td>
<td><em>Do you mind <strong>closing</strong> the window?</em></td>
<td>importar</td>
</tr>
<tr>
<td><strong>suggest</strong></td>
<td><em>I suggest <strong>leaving</strong> early.</em></td>
<td>sugerir</td>
</tr>
<tr>
<td><strong>consider</strong></td>
<td><em>We''re considering <strong>moving</strong> to Spain.</em></td>
<td>considerar</td>
</tr>
<tr>
<td><strong>admit</strong></td>
<td><em>He admitted <strong>stealing</strong> the money.</em></td>
<td>admitir</td>
</tr>
<tr>
<td><strong>deny</strong></td>
<td><em>She denied <strong>breaking</strong> the vase.</em></td>
<td>negar</td>
</tr>
<tr>
<td><strong>practice</strong></td>
<td><em>You should practice <strong>speaking</strong> English.</em></td>
<td>practicar</td>
</tr>
<tr>
<td><strong>quit</strong></td>
<td><em>He quit <strong>smoking</strong> last year.</em></td>
<td>dejar de</td>
</tr>
</tbody>
</table>
</div><h5>More Verbs That Take Gerunds</h5><ul>
<li><strong>keep</strong>: <em>She keeps <strong>forgetting</strong> her keys.</em></li>
<li><strong>miss</strong>: <em>I miss <strong>seeing</strong> my friends.</em></li>
<li><strong>postpone</strong>: <em>They postponed <strong>making</strong> a decision.</em></li>
<li><strong>risk</strong>: <em>Don''t risk <strong>losing</strong> your job.</em></li>
<li><strong>imagine</strong>: <em>Can you imagine <strong>living</strong> in Paris?</em></li>
<li><strong>involve</strong>: <em>The job involves <strong>traveling</strong> a lot.</em></li>
<li><strong>recommend</strong>: <em>I recommend <strong>trying</strong> the pasta.</em></li>
<li><strong>delay</strong>: <em>Don''t delay <strong>submitting</strong> your application.</em></li>
</ul><h5>Common Expressions with Gerunds</h5><p>Some fixed expressions also require gerunds:</p><ul>
<li><strong>can''t help</strong>: <em>I can''t help <strong>laughing</strong> at his jokes.</em> (no
                        puedo evitar)</li>
<li><strong>can''t stand</strong>: <em>She can''t stand <strong>waiting</strong> in line.</em> (no
                        soportar)</li>
<li><strong>it''s worth</strong>: <em>It''s worth <strong>visiting</strong> the museum.</em> (vale la
                        pena)</li>
<li><strong>it''s no use</strong>: <em>It''s no use <strong>complaining</strong>.</em> (no sirve de
                        nada)</li>
<li><strong>feel like</strong>: <em>I feel like <strong>going</strong> for a walk.</em> (tener ganas
                        de)</li>
<li><strong>look forward to</strong>: <em>I''m looking forward to <strong>seeing</strong> you.</em>
                        (esperar con ansias)</li>
<li><strong>be used to</strong>: <em>I''m used to <strong>getting</strong> up early.</em> (estar
                        acostumbrado a)</li>
</ul><h5>Important Note: Prepositions + Gerunds</h5><p>After prepositions (to, at, in, on, about, of, etc.), we <strong>always</strong> use gerunds, not
                    infinitives:</p><ul>
<li><em>I''m interested <strong>in learning</strong> French.</em></li>
<li><em>She''s good <strong>at playing</strong> piano.</em></li>
<li><em>They''re thinking <strong>about buying</strong> a house.</em></li>
<li><em>Thank you <strong>for helping</strong> me.</em></li>
</ul>', '{"games": [{"type": "multiple_choice", "title": "Which Verb + Gerund?", "instruction": "Choose the correct verb that is followed by a gerund.", "questions": [{"q": "I ______ going to the cinema on Fridays.", "options": ["enjoy", "want", "hope"], "a": "enjoy"}, {"q": "She ______ living in a big city.", "options": ["considers", "intends", "plans"], "a": "considers"}, {"q": "We ______ having to wait for so long.", "options": ["dislike", "expect", "agree"], "a": "dislike"}, {"q": "He ______ stealing the money.", "options": ["denied", "refused", "promised"], "a": "denied"}, {"q": "They ______ finishing the project by tomorrow.", "options": ["suggested", "attempted", "decided"], "a": "suggested"}]}, {"type": "fill_in", "title": "Gerund Fill B2", "instruction": "Type the gerund form of the verb in parentheses.", "questions": [{"q": "I''ve finished ______ (read) the book.", "a": "reading"}, {"q": "She avoids ______ (talk) to him.", "a": "talking"}, {"q": "Would you mind ______ (open) the window?", "a": "opening"}, {"q": "He kept ______ (work) after the bell.", "a": "working"}, {"q": "Imagine ______ (live) on the moon!", "a": "living"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (2, 'B2', 'Noun Clauses', 'Use noun clauses to explain and define', 'bi-box', '<h3>Theory</h3><p>A <strong>noun clause</strong> is a dependent clause that functions as a noun in a sentence. When we
                    use the verb <strong>"be"</strong> (am, is, are, was, were), we can follow it with a noun clause to
                    define, explain, or identify the subject.</p><h5>What is a Noun Clause?</h5><p>A noun clause is a group of words with a subject and verb that acts like a noun. It can answer
                    questions like "What?" or "Who?"</p><ul>
<li><em>The problem <strong>is</strong> <u>that we don''t have enough time</u>.</em> (noun clause =
                        what is the problem?)</li>
<li><em>My question <strong>is</strong> <u>whether we should wait</u>.</em> (noun clause = what is
                        the question?)</li>
</ul><h5>Common Patterns: Noun Clauses After "Be"</h5><h6>1. That-clauses</h6><p>We use <strong>that</strong> to introduce a statement or fact after "be":</p><ul>
<li><em>The truth <strong>is that</strong> he lied to us.</em></li>
<li><em>The problem <strong>is that</strong> nobody wants to help.</em></li>
<li><em>My belief <strong>is that</strong> everyone deserves a second chance.</em></li>
<li><em>The fact <strong>is that</strong> we''re running out of money.</em></li>
<li><em>Her concern <strong>is that</strong> the project won''t finish on time.</em></li>
</ul><h6>2. Whether/If-clauses</h6><p>We use <strong>whether</strong> or <strong>if</strong> to introduce uncertainty or a yes/no question
                    after "be":</p><ul>
<li><em>The question <strong>is whether</strong> we can afford it.</em></li>
<li><em>My doubt <strong>is whether</strong> she''ll come to the party.</em></li>
<li><em>The issue <strong>is if</strong> we have enough resources.</em></li>
<li><em>The uncertainty <strong>is whether</strong> the plan will work.</em></li>
</ul><p class="feedback-hint"><em>Note: "Whether" is more formal than "if" in this context.</em></p><h6>3. Wh-clauses (What, Where, When, Why, How, Who)</h6><p>We use <strong>wh-words</strong> to introduce questions embedded in statements:</p><ul>
<li><em>The question <strong>is what</strong> we should do next.</em></li>
<li><em>The problem <strong>is where</strong> we can find the money.</em></li>
<li><em>My concern <strong>is when</strong> the deadline is.</em></li>
<li><em>The mystery <strong>is why</strong> he left so suddenly.</em></li>
<li><em>The challenge <strong>is how</strong> we can solve this.</em></li>
<li><em>The issue <strong>is who</strong> will take responsibility.</em></li>
</ul><h5>Common Subjects Used with Noun Clauses</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Subject</th>
<th>Example with Noun Clause</th>
</tr>
</thead>
<tbody>
<tr>
<td>The problem</td>
<td><em>The problem is <strong>that</strong> we''re late.</em></td>
</tr>
<tr>
<td>The question</td>
<td><em>The question is <strong>whether</strong> it''s safe.</em></td>
</tr>
<tr>
<td>The truth</td>
<td><em>The truth is <strong>that</strong> I forgot.</em></td>
</tr>
<tr>
<td>The fact</td>
<td><em>The fact is <strong>that</strong> nobody knows.</em></td>
</tr>
<tr>
<td>The issue</td>
<td><em>The issue is <strong>how</strong> we''ll pay for it.</em></td>
</tr>
<tr>
<td>My concern</td>
<td><em>My concern is <strong>that</strong> we''ll fail.</em></td>
</tr>
<tr>
<td>The mystery</td>
<td><em>The mystery is <strong>why</strong> she left.</em></td>
</tr>
</tbody>
</table>
</div><h5>Word Order in Noun Clauses</h5><p><strong>Important:</strong> In noun clauses, we use <strong>statement word order</strong> (Subject +
                    Verb), NOT question word order:</p><ul>
<li>✓ <em>The question is <strong>what we should do</strong>.</em> (Correct: we + should)</li>
<li>✗ <em>The question is what should we do.</em> (Incorrect: should + we)</li>
<li>✓ <em>The problem is <strong>where she lives</strong>.</em> (Correct: she + lives)</li>
<li>✗ <em>The problem is where does she live.</em> (Incorrect: does + she)</li>
</ul>', '{"games": [{"type": "multiple_choice", "title": "That, What, or How?", "instruction": "Choose the correct word to start the noun clause.", "questions": [{"q": "I believe ______ he is telling the truth.", "options": ["that", "what", "how"], "a": "that"}, {"q": "Do you know ______ time it is?", "options": ["what", "that", "how"], "a": "what"}, {"q": "I''m not sure ______ they did it.", "options": ["how", "that", "what"], "a": "how"}, {"q": "______ she said was very interesting.", "options": ["What", "That", "How"], "a": "What"}, {"q": "It is obvious ______ they are happy.", "options": ["that", "what", "which"], "a": "that"}]}, {"type": "unscramble", "title": "Noun Clause Order", "instruction": "Order the words to form a sentence with a noun clause.", "questions": [{"q": "know I where lives he", "a": "i know where he lives"}, {"q": "true is she what says", "a": "what she says is true"}, {"q": "if he wonder I knows", "a": "i wonder if he knows"}, {"q": "did clear it who is", "a": "it is clear who did"}, {"q": "wrong happened what is", "a": "what happened is wrong"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (3, 'B2', 'Past Modals', 'Express past obligations and prohibitions', 'bi-clock-history', '<h3>Theory</h3><p>We use <strong>past modals</strong> to talk about obligations, prohibitions, and lack of necessity in
                    the past. Understanding these structures is essential for expressing what was required, forbidden,
                    or optional in past situations.</p><h5>Past Modals of Obligation</h5><h6>1. Had to (Past Obligation)</h6><p>We use <strong>had to</strong> to express that something was necessary or obligatory in the past.
                    This is the past form of "have to" and "must".</p><ul>
<li><em>I <strong>had to</strong> work late yesterday.</em> (It was necessary/obligatory)</li>
<li><em>She <strong>had to</strong> take the exam three times before she passed.</em></li>
<li><em>We <strong>had to</strong> wait for two hours at the airport.</em></li>
<li><em>They <strong>had to</strong> cancel the trip because of the storm.</em></li>
<li><em>He <strong>had to</strong> see a doctor about his back pain.</em></li>
</ul><h6>2. Didn''t have to (No Obligation in the Past)</h6><p>We use <strong>didn''t have to</strong> to say that something was NOT necessary in the past. The
                    person had a choice.</p><ul>
<li><em>I <strong>didn''t have to</strong> work on Saturday, so I stayed home.</em> (It wasn''t
                        necessary, I had a choice)</li>
<li><em>She <strong>didn''t have to</strong> buy a new dress, but she wanted to.</em></li>
<li><em>We <strong>didn''t have to</strong> hurry because we had plenty of time.</em></li>
<li><em>They <strong>didn''t have to</strong> pay for the meal; it was free.</em></li>
</ul><h6>3. Wasn''t/Weren''t allowed to (Past Prohibition)</h6><p>We use <strong>wasn''t/weren''t allowed to</strong> to express that something was prohibited or
                    forbidden in the past.</p><ul>
<li><em>I <strong>wasn''t allowed to</strong> go out after 10 PM when I was a teenager.</em></li>
<li><em>We <strong>weren''t allowed to</strong> use our phones during the exam.</em></li>
<li><em>She <strong>wasn''t allowed to</strong> watch TV until she finished her homework.</em></li>
<li><em>They <strong>weren''t allowed to</strong> enter the building without ID.</em></li>
</ul><h6>4. Couldn''t (Past Prohibition/Impossibility)</h6><p>We use <strong>couldn''t</strong> to express prohibition or impossibility in the past.</p><ul>
<li><em>We <strong>couldn''t</strong> smoke in the restaurant.</em> (It was prohibited)</li>
<li><em>I <strong>couldn''t</strong> sleep because of the noise.</em> (It was impossible)</li>
<li><em>They <strong>couldn''t</strong> park there; it was a no-parking zone.</em></li>
</ul><h5>Important Distinction: Didn''t have to vs. Couldn''t</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Expression</th>
<th>Meaning</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>didn''t have to</strong></td>
<td>Not necessary (but possible)</td>
<td><em>I didn''t have to wear a suit, but I did.</em></td>
</tr>
<tr>
<td><strong>couldn''t</strong></td>
<td>Prohibited or impossible</td>
<td><em>I couldn''t wear jeans; it was against the dress code.</em></td>
</tr>
</tbody>
</table>
</div><h5>Phrasal Modals of Obligation</h5><p>These are multi-word expressions that function like modal verbs:</p><h6>1. Be supposed to</h6><p>We use <strong>be supposed to</strong> to talk about expectations, rules, or arrangements. In the
                    past: <strong>was/were supposed to</strong>.</p><ul>
<li><em>I <strong>was supposed to</strong> call her yesterday, but I forgot.</em> (It was
                        expected/planned)</li>
<li><em>The meeting <strong>was supposed to</strong> start at 9, but it started late.</em></li>
<li><em>We <strong>were supposed to</strong> bring our own lunch.</em></li>
<li><em>He <strong>wasn''t supposed to</strong> tell anyone the secret.</em> (It was against the
                        rules)</li>
</ul><h6>2. Be meant to</h6><p>Similar to "be supposed to", <strong>be meant to</strong> expresses purpose or expectation. Past:
                    <strong>was/were meant to</strong>.
                </p><ul>
<li><em>This button <strong>was meant to</strong> open the door.</em> (That was its purpose)</li>
<li><em>We <strong>were meant to</strong> arrive at 6 PM.</em></li>
<li><em>The movie <strong>was meant to</strong> be funny, but it wasn''t.</em></li>
</ul><h6>3. Be to (Formal Obligation/Arrangement)</h6><p><strong>Be to</strong> is formal and often used for official arrangements or orders. Past:
                    <strong>was/were to</strong>.
                </p><ul>
<li><em>The President <strong>was to</strong> visit the hospital, but the trip was cancelled.</em>
</li>
<li><em>We <strong>were to</strong> submit the report by Friday.</em></li>
<li><em>All students <strong>were to</strong> attend the assembly.</em></li>
</ul><h5>Summary Table</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Modal/Phrasal Modal</th>
<th>Use</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>had to</strong></td>
<td>Past obligation/necessity</td>
<td><em>I had to work late.</em></td>
</tr>
<tr>
<td><strong>didn''t have to</strong></td>
<td>No obligation (optional)</td>
<td><em>I didn''t have to go.</em></td>
</tr>
<tr>
<td><strong>wasn''t/weren''t allowed to</strong></td>
<td>Prohibition</td>
<td><em>We weren''t allowed to leave.</em></td>
</tr>
<tr>
<td><strong>couldn''t</strong></td>
<td>Prohibition/impossibility</td>
<td><em>I couldn''t enter.</em></td>
</tr>
<tr>
<td><strong>was/were supposed to</strong></td>
<td>Expectation/rule</td>
<td><em>I was supposed to call.</em></td>
</tr>
<tr>
<td><strong>was/were meant to</strong></td>
<td>Purpose/expectation</td>
<td><em>It was meant to help.</em></td>
</tr>
<tr>
<td><strong>was/were to</strong></td>
<td>Formal arrangement</td>
<td><em>We were to meet at noon.</em></td>
</tr>
</tbody>
</table>
</div>', '{"games": [{"type": "multiple_choice", "title": "Should have or Must have?", "instruction": "Choose the correct past modal for the context.", "questions": [{"q": "I''m late. I ______ left earlier.", "options": ["should have", "must have", "could have"], "a": "should have"}, {"q": "He ______ forgotten about the meeting.", "options": ["must have", "should have", "can''t have"], "a": "must have"}, {"q": "She ______ seen me because she didn''t wave.", "options": ["can''t have", "must have", "should have"], "a": "can''t have"}, {"q": "They ______ arrived by now; they left 3 hours ago.", "options": ["might have", "shouldn''t have", "mustn''t have"], "a": "might have"}, {"q": "You ______ told her! It was a secret.", "options": ["shouldn''t have", "mustn''t have", "can''t have"], "a": "shouldn''t have"}]}, {"type": "fill_in", "title": "Past Modal Fill B2", "instruction": "Type the correct past modal form (e.g., must have been, couldn''t have gone).", "questions": [{"q": "The floor is wet. It ______ (rain) last night.", "a": "must have rained"}, {"q": "I ______ (study) more for the exam.", "a": "should have studied"}, {"q": "He ______ (lose) his way; he''s never this late.", "a": "might have lost"}, {"q": "They ______ (arrive) already. Looking at the time.", "a": "should have arrived"}, {"q": "She ______ (see) the msg. It shows read.", "a": "must have seen"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (4, 'B2', 'Modal Uses', 'Understand different meanings of modals', 'bi-diagram-3', '<h3>Theory</h3><p>Many modal verbs in English have <strong>multiple meanings</strong> depending on the context.
                    Understanding these different uses is crucial for both comprehension and accurate expression.</p><h5>Modal: CAN</h5><h6>1. Ability (poder - capacidad)</h6><ul>
<li><em>I <strong>can</strong> speak three languages.</em></li>
<li><em>She <strong>can</strong> play the piano very well.</em></li>
</ul><h6>2. Permission (poder - permiso)</h6><ul>
<li><em>You <strong>can</strong> use my phone if you need to.</em></li>
<li><em><strong>Can</strong> I leave early today?</em></li>
</ul><h6>3. Possibility (poder - posibilidad)</h6><ul>
<li><em>It <strong>can</strong> get very cold in winter here.</em> (It''s possible)</li>
<li><em>Accidents <strong>can</strong> happen when you''re not careful.</em></li>
</ul><h5>Modal: COULD</h5><h6>1. Past Ability</h6><ul>
<li><em>When I was young, I <strong>could</strong> run very fast.</em></li>
<li><em>She <strong>could</strong> speak French when she lived in Paris.</em></li>
</ul><h6>2. Polite Request</h6><ul>
<li><em><strong>Could</strong> you help me with this?</em></li>
<li><em><strong>Could</strong> I borrow your pen?</em></li>
</ul><h6>3. Possibility (less certain than "can")</h6><ul>
<li><em>It <strong>could</strong> rain later.</em> (Maybe it will rain)</li>
<li><em>He <strong>could</strong> be at home, I''m not sure.</em></li>
</ul><h6>4. Suggestion</h6><ul>
<li><em>We <strong>could</strong> go to the cinema tonight.</em> (suggestion)</li>
<li><em>You <strong>could</strong> try calling him again.</em></li>
</ul><h5>Modal: SHOULD</h5><h6>1. Advice/Recommendation</h6><ul>
<li><em>You <strong>should</strong> see a doctor.</em></li>
<li><em>We <strong>should</strong> leave now to avoid traffic.</em></li>
</ul><h6>2. Expectation</h6><ul>
<li><em>The package <strong>should</strong> arrive tomorrow.</em> (I expect it will)</li>
<li><em>She <strong>should</strong> be here by now.</em></li>
</ul><h6>3. Obligation (mild)</h6><ul>
<li><em>Students <strong>should</strong> respect their teachers.</em></li>
<li><em>You <strong>should</strong> always wear a seatbelt.</em></li>
</ul><h5>Modal: MUST</h5><h6>1. Strong Obligation</h6><ul>
<li><em>You <strong>must</strong> wear a helmet on the construction site.</em></li>
<li><em>All passengers <strong>must</strong> show their tickets.</em></li>
</ul><h6>2. Logical Deduction (certainty)</h6><ul>
<li><em>He <strong>must</strong> be tired; he''s been working all day.</em> (I''m sure he''s tired)
                    </li>
<li><em>She <strong>must</strong> be rich; she drives a Ferrari.</em></li>
</ul><h5>Modal: WILL</h5><h6>1. Future Prediction</h6><ul>
<li><em>It <strong>will</strong> rain tomorrow.</em></li>
<li><em>I <strong>will</strong> be 30 next year.</em></li>
</ul><h6>2. Promise</h6><ul>
<li><em>I <strong>will</strong> help you, I promise.</em></li>
<li><em>I <strong>won''t</strong> tell anyone your secret.</em></li>
</ul><h6>3. Spontaneous Decision</h6><ul>
<li><em>I <strong>will</strong> have the chicken, please.</em> (deciding now)</li>
<li><em>I <strong>will</strong> answer the phone.</em></li>
</ul><h6>4. Refusal (won''t)</h6><ul>
<li><em>The car <strong>won''t</strong> start.</em> (The car refuses to start)</li>
<li><em>He <strong>won''t</strong> listen to me.</em></li>
</ul>', '{"games": [{"type": "multiple_choice", "title": "Habit, Advice, or Ability?", "instruction": "Determine the use of the modal in the sentence.", "questions": [{"q": "He would always bring me flowers. (Usage?)", "options": ["Past Habit", "Advice", "Possibility"], "a": "Past Habit"}, {"q": "You should see a doctor. (Usage?)", "options": ["Advice", "Obligation", "Deduction"], "a": "Advice"}, {"q": "I can play the flute. (Usage?)", "options": ["Ability", "Permission", "Possibility"], "a": "Ability"}, {"q": "You must wear a seatbelt. (Usage?)", "options": ["Obligation", "Advice", "Deduction"], "a": "Obligation"}, {"q": "It might snow tonight. (Usage?)", "options": ["Possibility", "Ability", "Habit"], "a": "Possibility"}]}, {"type": "unscramble", "title": "Modal Sentence", "instruction": "Form a sentence using the correct modal.", "questions": [{"q": "study should you harder", "a": "you should study harder"}, {"q": "here smoke mustn''t you", "a": "you mustn''t smoke here"}, {"q": "late might they be", "a": "they might be late"}, {"q": "speak he can French", "a": "he can speak french"}, {"q": "leave to we have", "a": "we have to leave"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (5, 'B2', 'Relative Clauses', 'Distinguish essential vs extra information', 'bi-link-45deg', '<h3>Theory</h3><p>Relative clauses give us additional information about a noun. There are two types:
                    <strong>defining</strong> and <strong>non-defining</strong>. The difference between them is crucial
                    for meaning and punctuation.
                </p><h5>Defining Relative Clauses</h5><p>A <strong>defining relative clause</strong> provides <strong>essential information</strong> about the
                    noun. Without this clause, the sentence would be incomplete or unclear. We <strong>do NOT</strong>
                    use commas.</p><h6>Key Characteristics:</h6><ul>
<li>Essential information (necessary to identify which person/thing we''re talking about)</li>
<li>NO commas</li>
<li>We can use "that" instead of "who/which"</li>
<li>We can omit the relative pronoun when it''s the object</li>
</ul><h6>Examples:</h6><ul>
<li><em>The woman <strong>who lives next door</strong> is a doctor.</em> (Which woman? The one who
                        lives next door - essential info)</li>
<li><em>The book <strong>that I bought yesterday</strong> is very interesting.</em> (Which book? The
                        one I bought yesterday)</li>
<li><em>People <strong>who exercise regularly</strong> are healthier.</em> (Which people? Those who
                        exercise regularly)</li>
<li><em>The car <strong>which/that is parked outside</strong> belongs to my neighbor.</em></li>
</ul><h6>Omitting the Relative Pronoun (when it''s the object):</h6><ul>
<li><em>The book <strong>that</strong> I bought = The book I bought</em> (both correct)</li>
<li><em>The man <strong>who</strong> I met = The man I met</em> (both correct)</li>
<li>✗ <em>The woman lives next door</em> (WRONG - "who" is the subject, cannot be omitted)</li>
</ul><h5>Non-Defining Relative Clauses</h5><p>A <strong>non-defining relative clause</strong> provides <strong>extra information</strong> that is
                    NOT essential. The sentence would still be complete and clear without it. We <strong>MUST</strong>
                    use commas.</p><h6>Key Characteristics:</h6><ul>
<li>Extra, non-essential information (bonus details)</li>
<li>MUST use commas (,)</li>
<li>CANNOT use "that"</li>
<li>CANNOT omit the relative pronoun</li>
</ul><h6>Examples:</h6><ul>
<li><em>My brother, <strong>who lives in London</strong>, is a lawyer.</em> (I only have one brother
                        - the clause adds extra info)</li>
<li><em>Paris, <strong>which is the capital of France</strong>, is a beautiful city.</em> (We
                        already know which city - extra info)</li>
<li><em>My car, <strong>which I bought last year</strong>, is already having problems.</em></li>
<li><em>Shakespeare, <strong>who wrote Hamlet</strong>, is the most famous English writer.</em></li>
</ul><h5>Comparison: Defining vs. Non-Defining</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Feature</th>
<th>Defining</th>
<th>Non-Defining</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Information</strong></td>
<td>Essential (identifies the noun)</td>
<td>Extra (bonus information)</td>
</tr>
<tr>
<td><strong>Commas</strong></td>
<td>NO commas</td>
<td>MUST use commas</td>
</tr>
<tr>
<td><strong>"That"</strong></td>
<td>Can use "that"</td>
<td>CANNOT use "that"</td>
</tr>
<tr>
<td><strong>Omit pronoun</strong></td>
<td>Yes (when object)</td>
<td>NO, never</td>
</tr>
<tr>
<td><strong>Example</strong></td>
<td><em>The man who called is my boss.</em></td>
<td><em>John, who called yesterday, is my boss.</em></td>
</tr>
</tbody>
</table>
</div><h5>Meaning Changes with Punctuation</h5><p>The same sentence can have different meanings depending on whether we use commas or not:</p><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Sentence</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td><em>My brother who lives in London is a lawyer.</em> (NO commas - defining)</td>
<td>I have more than one brother. The one in London is a lawyer (the others might not
                                    be).
                                </td>
</tr>
<tr>
<td><em>My brother, who lives in London, is a lawyer.</em> (commas - non-defining)</td>
<td>I have one brother. He lives in London and he''s a lawyer.</td>
</tr>
</tbody>
</table>
</div>', '{"games": [{"type": "multiple_choice", "title": "Defining or Non-defining?", "instruction": "Identify the type of relative clause.", "questions": [{"q": "The man who lives next door is nice.", "options": ["Defining", "Non-defining"], "a": "Defining"}, {"q": "My father, who is 60, is a doctor.", "options": ["Non-defining", "Defining"], "a": "Non-defining"}, {"q": "The car that I bought is black.", "options": ["Defining", "Non-defining"], "a": "Defining"}, {"q": "Paris, which I love, is beautiful.", "options": ["Non-defining", "Defining"], "a": "Non-defining"}, {"q": "The book which is on the desk is mine.", "options": ["Defining", "Non-defining"], "a": "Defining"}]}, {"type": "fill_in", "title": "Relative Pronouns B2", "instruction": "Type: who, whom, whose, which, or that.", "questions": [{"q": "The person ______ called is my boss.", "a": "who"}, {"q": "The house ______ roof is red is mine.", "a": "whose"}, {"q": "The man ______ I met was friendly.", "a": "whom"}, {"q": "This is the city ______ I was born.", "a": "where"}, {"q": "The time ______ we met was great.", "a": "when"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (6, 'B2', 'Order of Modifiers', 'Arrange adjectives in natural order', 'bi-sort-down-alt', '<h3>Theory</h3><p>When we use multiple adjectives or modifiers to describe a noun, they must follow a specific order in
                    English. This order is not random—it follows a natural pattern that native speakers use intuitively.
                </p><h5>The Standard Order of Adjectives</h5><p>When multiple adjectives modify the same noun, they typically follow this sequence:</p><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Position</th>
<th>Type</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td><strong>Opinion</strong></td>
<td>beautiful, ugly, nice, horrible, lovely, wonderful</td>
</tr>
<tr>
<td>2</td>
<td><strong>Size</strong></td>
<td>big, small, large, tiny, huge, enormous</td>
</tr>
<tr>
<td>3</td>
<td><strong>Age</strong></td>
<td>old, young, new, ancient, modern</td>
</tr>
<tr>
<td>4</td>
<td><strong>Shape</strong></td>
<td>round, square, rectangular, triangular</td>
</tr>
<tr>
<td>5</td>
<td><strong>Color</strong></td>
<td>red, blue, green, black, white, yellow</td>
</tr>
<tr>
<td>6</td>
<td><strong>Origin</strong></td>
<td>American, British, Chinese, French, Italian</td>
</tr>
<tr>
<td>7</td>
<td><strong>Material</strong></td>
<td>wooden, metal, plastic, cotton, silk, leather</td>
</tr>
<tr>
<td>8</td>
<td><strong>Purpose</strong></td>
<td>sleeping (bag), cooking (pot), running (shoes)</td>
</tr>
<tr>
<td>9</td>
<td><strong>NOUN</strong></td>
<td>-</td>
</tr>
</tbody>
</table>
</div><h5>Memory Aid: OSASCOMP</h5><p>A helpful acronym to remember the order:</p><ul>
<li><strong>O</strong>pinion</li>
<li><strong>S</strong>ize</li>
<li><strong>A</strong>ge</li>
<li><strong>S</strong>hape</li>
<li><strong>C</strong>olor</li>
<li><strong>O</strong>rigin</li>
<li><strong>M</strong>aterial</li>
<li><strong>P</strong>urpose</li>
</ul><h5>Detailed Examples</h5><h6>Example 1: Two Adjectives</h6><ul>
<li>✓ <em>A <strong>beautiful big</strong> house.</em> (Opinion + Size)</li>
<li>✗ <em>A big beautiful house.</em> (Incorrect order)</li>
</ul><h6>Example 2: Three Adjectives</h6><ul>
<li>✓ <em>A <strong>lovely small old</strong> cottage.</em> (Opinion + Size + Age)</li>
<li>✓ <em>A <strong>beautiful round wooden</strong> table.</em> (Opinion + Shape + Material)</li>
<li>✓ <em>An <strong>expensive new Italian</strong> car.</em> (Opinion + Age + Origin)</li>
</ul><h6>Example 3: Four or More Adjectives</h6><ul>
<li>✓ <em>A <strong>beautiful large old rectangular red brick</strong> building.</em> (Opinion +
                        Size +
                        Age + Shape + Color + Material)</li>
<li>✓ <em>Some <strong>nice big round blue Chinese ceramic</strong> plates.</em> (Opinion + Size +
                        Shape
                        + Color + Origin + Material)</li>
</ul><h5>Important Notes</h5><h6>1. Commas Between Similar Adjectives</h6><p>When two adjectives are of the same type (both opinions, for example), we separate them with a comma
                    or
                    "and":</p><ul>
<li><em>A <strong>beautiful, elegant</strong> dress.</em> (Both are opinions)</li>
<li><em>A <strong>cold and rainy</strong> day.</em> (Both describe weather)</li>
</ul><h6>2. Determiners Come First</h6><p>Articles (a, an, the), possessives (my, your), and quantifiers (some, many) always come before all
                    adjectives:</p><ul>
<li><em><strong>The</strong> beautiful old house.</em></li>
<li><em><strong>My</strong> expensive new car.</em></li>
<li><em><strong>Some</strong> interesting French books.</em></li>
</ul><h6>3. Numbers</h6><p>Numbers come after determiners but before adjectives:</p><ul>
<li><em>The <strong>three</strong> beautiful old houses.</em></li>
<li><em>My <strong>two</strong> favorite Italian restaurants.</em></li>
</ul><h5>Common Patterns in Real Usage</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Pattern</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Opinion + Color</td>
<td><em>A beautiful blue dress</em></td>
</tr>
<tr>
<td>Size + Color</td>
<td><em>A big red car</em></td>
</tr>
<tr>
<td>Age + Origin</td>
<td><em>An old Chinese vase</em></td>
</tr>
<tr>
<td>Opinion + Material</td>
<td><em>A lovely wooden chair</em></td>
</tr>
<tr>
<td>Size + Age + Material</td>
<td><em>A small old leather bag</em></td>
</tr>
</tbody>
</table>
</div><h5>Practice Tip</h5><p class="feedback-hint"><em>In everyday English, we rarely use more than 3 adjectives together. Using
                        too
                        many can sound unnatural. However, knowing the correct order is essential for when you do need
                        multiple modifiers.</em></p>', '{"games": [{"type": "multiple_choice", "title": "Adjective Order", "instruction": "Choose the correct sequence of adjectives.", "questions": [{"q": "I bought a ______ car.", "options": ["beautiful new red", "red new beautiful", "new beautiful red"], "a": "beautiful new red"}, {"q": "She has ______ hair.", "options": ["long black silky", "silky long black", "black long silky"], "a": "long black silky"}, {"q": "He lives in a ______ house.", "options": ["large old wooden", "wooden old large", "old wooden large"], "a": "large old wooden"}, {"q": "It''s a ______ day.", "options": ["lovely sunny warm", "sunny lovely warm", "warm sunny lovely"], "a": "lovely sunny warm"}, {"q": "I found a ______ ring.", "options": ["small shiny gold", "gold shiny small", "shiny small gold"], "a": "small shiny gold"}]}, {"type": "unscramble", "title": "Modifier Order Unscramble", "instruction": "Order the adjectives and nouns correctly.", "questions": [{"q": "blue big a bag", "a": "a big blue bag"}, {"q": "round table small a", "a": "a small round table"}, {"q": "old interesting an book", "a": "an interesting old book"}, {"q": "silver thick a chain", "a": "a thick silver chain"}, {"q": "french delicious a bread", "a": "a delicious french bread"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (7, 'B2', 'Passive Voice Past', 'Form passives in past tenses', 'bi-arrow-left-right', '<h3>Theory</h3><p>In English, we use various connectors to show contrast or opposition between two ideas. These
                    connectors
                    help us express unexpected results, contradictions, or differences between situations.</p><h5>Main Contrast Connectors</h5><h6>1. Although / Though / Even though</h6><p>These introduce a contrasting clause. They mean "a pesar de que" or "aunque" and show that something
                    is
                    surprising given the circumstances.</p><p><strong>Structure:</strong> Although + Subject + Verb, Main Clause</p><ul>
<li><em><strong>Although</strong> it was raining, we went for a walk.</em></li>
<li><em><strong>Though</strong> she studied hard, she didn''t pass the exam.</em></li>
<li><em><strong>Even though</strong> he''s 80 years old, he still runs marathons.</em> (Even though =
                        más
                        enfático)</li>
<li><em>We decided to go to the beach, <strong>although</strong> the weather was bad.</em> (Can also
                        go
                        in the middle)</li>
</ul><p><strong>Important:</strong> "Although" is more formal than "though". "Even though" is the most
                    emphatic.
                </p><h6>2. However</h6><p>This is a formal connector used to introduce a contrasting statement. It typically comes at the
                    beginning
                    of a new sentence.</p><p><strong>Structure:</strong> Sentence 1. However, Sentence 2.</p><ul>
<li><em>The car is expensive. <strong>However</strong>, it''s very reliable.</em></li>
<li><em>I studied for hours. <strong>However</strong>, I still found the test difficult.</em></li>
<li><em>She wanted to go to the party. <strong>However</strong>, she had too much work.</em></li>
</ul><p><strong>Note:</strong> "However" can also appear in the middle or end of the second sentence:</p><ul>
<li><em>The car is expensive. It''s very reliable, <strong>however</strong>.</em></li>
<li><em>I studied for hours. I, <strong>however</strong>, still found the test difficult.</em></li>
</ul><h6>3. Nevertheless / Nonetheless</h6><p>These are formal synonyms of "however". They mean "sin embargo" or "no obstante".</p><ul>
<li><em>The weather was terrible. <strong>Nevertheless</strong>, we enjoyed our trip.</em></li>
<li><em>He had no experience. <strong>Nonetheless</strong>, he got the job.</em></li>
<li><em>The project was difficult. <strong>Nevertheless</strong>, we completed it on time.</em></li>
</ul><h6>4. But</h6><p>The most common and informal way to show contrast. It connects two clauses within the same sentence.
                </p><p><strong>Structure:</strong> Clause 1, but Clause 2</p><ul>
<li><em>I like coffee, <strong>but</strong> I don''t like tea.</em></li>
<li><em>She''s very talented, <strong>but</strong> she lacks confidence.</em></li>
<li><em>The movie was long, <strong>but</strong> it was interesting.</em></li>
<li><em>He wanted to help, <strong>but</strong> he didn''t have time.</em></li>
</ul><h6>5. Yet</h6><p>"Yet" is similar to "but" but more formal and often emphasizes the surprise of the contrast.</p><ul>
<li><em>The task was simple, <strong>yet</strong> many people failed.</em></li>
<li><em>She''s very young, <strong>yet</strong> she''s already a CEO.</em></li>
<li><em>It''s expensive, <strong>yet</strong> people keep buying it.</em></li>
</ul><h6>6. In spite of / Despite</h6><p>These are followed by a noun, pronoun, or gerund (-ing form), NOT a clause.</p><p><strong>Structure:</strong> In spite of / Despite + noun/gerund, Main Clause</p><ul>
<li><em><strong>Despite the rain</strong>, we went out.</em> (NOT: Despite it was raining)</li>
<li><em><strong>In spite of being tired</strong>, she continued working.</em></li>
<li><em><strong>Despite his age</strong>, he''s very active.</em></li>
<li><em><strong>In spite of the difficulties</strong>, they succeeded.</em></li>
<li><em>We enjoyed the trip <strong>despite the bad weather</strong>.</em></li>
</ul><p><strong>With "the fact that":</strong> To use a clause after despite/in spite of, add "the fact
                    that":
                </p><ul>
<li><em><strong>Despite the fact that</strong> it was raining, we went out.</em></li>
<li><em><strong>In spite of the fact that</strong> she studied hard, she failed.</em></li>
</ul><h6>7. While / Whereas</h6><p>These show direct contrast between two different situations or facts.</p><ul>
<li><em><strong>While</strong> I love summer, my sister prefers winter.</em></li>
<li><em><strong>Whereas</strong> John is outgoing, his brother is shy.</em></li>
<li><em>Some people love spicy food, <strong>while</strong> others can''t stand it.</em></li>
<li><em>He''s very organized, <strong>whereas</strong> I''m quite messy.</em></li>
</ul><h5>Comparison Table</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Connector</th>
<th>Followed by</th>
<th>Formality</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>although/though</strong></td>
<td>Clause (S + V)</td>
<td>Neutral/Formal</td>
<td><em>Although it''s late, I''m not tired.</em></td>
</tr>
<tr>
<td><strong>but</strong></td>
<td>Clause (S + V)</td>
<td>Informal</td>
<td><em>It''s late, but I''m not tired.</em></td>
</tr>
<tr>
<td><strong>however</strong></td>
<td>New sentence</td>
<td>Formal</td>
<td><em>It''s late. However, I''m not tired.</em></td>
</tr>
<tr>
<td><strong>despite/in spite of</strong></td>
<td>Noun/Gerund</td>
<td>Formal</td>
<td><em>Despite the time, I''m not tired.</em></td>
</tr>
<tr>
<td><strong>while/whereas</strong></td>
<td>Clause (S + V)</td>
<td>Neutral</td>
<td><em>While it''s late, I''m not tired.</em></td>
</tr>
</tbody>
</table>
</div><h5>Common Mistakes to Avoid</h5><ul>
<li>✗ <em><del>Despite it was raining...</del></em> → ✓ <em>Despite the rain... / Although it was
                            raining...</em></li>
<li>✗ <em><del>Although the rain...</del></em> → ✓ <em>Despite the rain... / Although it was
                            raining...</em></li>
<li>✗ <em><del>But however, I went...</del></em> → ✓ <em>However, I went... / But I went...</em>
</li>
</ul>', '{"games": [{"type": "multiple_choice", "title": "Past Passive Choice", "instruction": "Choose the correct past passive form.", "questions": [{"q": "The house ______ in 1990.", "options": ["was built", "built", "is built"], "a": "was built"}, {"q": "The letters ______ yesterday.", "options": ["were sent", "was sent", "sent"], "a": "were sent"}, {"q": "The window ______ by the wind.", "options": ["was broken", "is broken", "broke"], "a": "was broken"}, {"q": "These photos ______ in Paris.", "options": ["were taken", "took", "was taken"], "a": "were taken"}, {"q": "The cake ______ by my mother.", "options": ["was made", "is made", "made"], "a": "was made"}]}, {"type": "fill_in", "title": "Passive Past Fill B2", "instruction": "Type the passive form (was/were + past participle).", "questions": [{"q": "The movie ______ (direct) by Spielberg.", "a": "was directed"}, {"q": "The pyramids ______ (build) by Egyptians.", "a": "were built"}, {"q": "My car ______ (repair) last week.", "a": "was repaired"}, {"q": "The winners ______ (announce) at noon.", "a": "were announced"}, {"q": "The secret ______ (keep) for years.", "a": "was kept"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (8, 'B2', 'Infinitive Patterns', 'Use infinitives with various structures', 'bi-infinity', '<h3>Theory</h3><p>Infinitive phrases (to + verb) and gerund phrases (verb + -ing) can function as subjects, objects, or
                    complements in a sentence. Using them correctly adds variety and sophistication to your English.</p><h5>Gerund Phrases as Subjects</h5><p>A gerund phrase is often used as the subject of a sentence. This makes the statement sound general or
                    factual.</p><ul>
<li><em><strong>Reading books</strong> is my favorite hobby.</em></li>
<li><em><strong>Learning a new language</strong> takes time and patience.</em></li>
<li><em><strong>Smoking</strong> is bad for your health.</em></li>
</ul><p><strong>Note:</strong> Gerund subjects take a singular verb (is, takes, has).</p><h5>Infinitive Phrases as Subjects</h5><p>We can also use infinitive phrases as subjects, but this is much more formal and less common in
                    spoken
                    English.</p><ul>
<li><em><strong>To err</strong> is human; <strong>to forgive</strong>, divine.</em> (Proverb)</li>
<li><em><strong>To learn</strong> is <strong>to grow</strong>.</em></li>
</ul><p><strong>Common Alternative (It + infinitive):</strong> Instead of using the infinitive as the
                    subject, we
                    usually use "It" as a dummy subject.</p><ul>
<li><em><strong>To learn English</strong> is important.</em> (Formal/Uncommon)</li>
<li><em><strong>It is important to learn English</strong>.</em> (Natural/Common)</li>
</ul><h5>Gerunds vs. Infinitives as Objects</h5><p>We covered this in Topic 1, but let''s expand on using them as full phrases.</p><h6>Gerund Phrases (often used for real, past, or general actions)</h6><ul>
<li><em>I enjoy <strong>playing tennis with my friends</strong>.</em></li>
<li><em>She admitted <strong>stealing the money from the jar</strong>.</em></li>
</ul><h6>Infinitive Phrases (often used for future, potential, or specific actions)</h6><ul>
<li><em>I want <strong>to buy a new car next year</strong>.</em></li>
<li><em>They decided <strong>to stay at home tonight</strong>.</em></li>
</ul><h5>Phrases as Complements</h5><p>These follow the verb "be".</p><ul>
<li><em>My goal is <strong>winning the competition</strong>.</em> (Gerund)</li>
<li><em>My goal is <strong>to win the competition</strong>.</em> (Infinitive)</li>
</ul><p>Both are often possible, but infinitives are more common for specific future goals, while gerunds are
                    common for definitions or activities.</p><h5>"It" Clauses with Infinitives</h5><p>This is a very useful B2 structure to express opinions or feelings about an action.</p><p><strong>Structure:</strong> It + be + adjective + (for person) + infinitive phrase</p><ul>
<li><em><strong>It''s easy to criticize</strong> others.</em></li>
<li><em><strong>It was difficult for me to understand</strong> him.</em></li>
<li><em><strong>It''s dangerous to swim</strong> here.</em></li>
</ul>', '{"games": [{"type": "multiple_choice", "title": "Enough or Too?", "instruction": "Choose between ''too'' and ''enough''.", "questions": [{"q": "This coffee is ______ hot to drink.", "options": ["too", "enough", "very"], "a": "too"}, {"q": "He is old ______ to drive.", "options": ["enough", "too", "so"], "a": "enough"}, {"q": "It''s ______ cold to go outside.", "options": ["too", "enough", "as"], "a": "too"}, {"q": "I have ______ money to buy it.", "options": ["enough", "too", "many"], "a": "enough"}, {"q": "The water is warm ______ to swim.", "options": ["enough", "too", "so"], "a": "enough"}]}, {"type": "fill_in", "title": "Infinitive Pattern Fill", "instruction": "Type: too, enough, or the infinitive with ''to''.", "questions": [{"q": "It''s too early ______ (leave).", "a": "to leave"}, {"q": "I''m strong ______ to lift it.", "a": "enough"}, {"q": "He''s ______ late to see the start.", "a": "too"}, {"q": "Is it good ______ to eat?", "a": "enough"}, {"q": "I''m not rich enough ______ (buy) a yacht.", "a": "to buy"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (9, 'B2', 'Noun-forming Suffixes', 'Build nouns from other words', 'bi-plus-square', '<h3>Theory</h3><p><strong>Reported Speech</strong> (or Indirect Speech) is how we tell someone what another person
                    said. We
                    usually change the tense back one step into the past (backshift).</p><h5>Common Tense Changes (Backshift)</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Direct Speech</th>
<th>Reported Speech</th>
</tr>
</thead>
<tbody>
<tr>
<td>Present Simple<br/><em>"I <strong>like</strong> ice cream."</em></td>
<td>Past Simple<br/><em>She said she <strong>liked</strong> ice cream.</em></td>
</tr>
<tr>
<td>Present Continuous<br/><em>"I <strong>am living</strong> in London."</em></td>
<td>Past Continuous<br/><em>He said he <strong>was living</strong> in London.</em></td>
</tr>
<tr>
<td>Past Simple<br/><em>"I <strong>bought</strong> a car."</em></td>
<td>Past Perfect<br/><em>She said she <strong>had bought</strong> a car.</em></td>
</tr>
<tr>
<td>Present Perfect<br/><em>"I <strong>have seen</strong> Julie."</em></td>
<td>Past Perfect<br/><em>He said he <strong>had seen</strong> Julie.</em></td>
</tr>
<tr>
<td>Will<br/><em>"I <strong>will</strong> call you."</em></td>
<td>Would<br/><em>She said she <strong>would</strong> call me.</em></td>
</tr>
<tr>
<td>Can<br/><em>"I <strong>can</strong> swim."</em></td>
<td>Could<br/><em>He said he <strong>could</strong> swim.</em></td>
</tr>
<tr>
<td>Must<br/><em>"I <strong>must</strong> go."</em></td>
<td>Had to<br/><em>She said she <strong>had to</strong> go.</em></td>
</tr>
</tbody>
</table>
</div><h5>Time and Place Expressions</h5><p>We also need to change time and place words if the context has changed.</p><ul>
<li><strong>now</strong> → <em>then</em></li>
<li><strong>today</strong> → <em>that day</em></li>
<li><strong>tomorrow</strong> → <em>the next day / the following day</em></li>
<li><strong>yesterday</strong> → <em>the day before / the previous day</em></li>
<li><strong>here</strong> → <em>there</em></li>
<li><strong>this</strong> → <em>that</em></li>
</ul><h5>Reported Questions</h5><p>When reporting questions, the word order changes to <strong>Subject + Verb</strong> (like a normal
                    sentence). We do NOT use "do/does/did".</p><h6>Wh-Questions (Who, What, Where, Why...)</h6><ul>
<li>Direct: <em>"Where <strong>do you live</strong>?"</em></li>
<li>Reported: <em>He asked me where <strong>I lived</strong>.</em> (NOT: where did I live)</li>
</ul><h6>Yes/No Questions</h6><p>Use <strong>if</strong> or <strong>whether</strong>.</p><ul>
<li>Direct: <em>"Do you like pizza?"</em></li>
<li>Reported: <em>She asked me <strong>if</strong> I liked pizza.</em></li>
</ul><h5>Reported Commands and Requests</h5><p>Use <strong>to + infinitive</strong>.</p><ul>
<li>Direct: <em>"Sit down!"</em></li>
<li>Reported: <em>He told me <strong>to sit</strong> down.</em></li>
<li>Direct: <em>"Don''t go!"</em></li>
<li>Reported: <em>He told me <strong>not to go</strong>.</em></li>
</ul>', '{"questions_count": 5, "games": [{"type": "multiple_choice", "title": "Make it a Noun!", "instruction": "Choose the correct noun form of the given word.", "questions": [{"q": "Happy -> ______", "options": ["Happiness", "Happity", "Happion"], "a": "Happiness"}, {"q": "Informed -> ______", "options": ["Information", "Informment", "Informness"], "a": "Information"}, {"q": "Able -> ______", "options": ["Ability", "Ableness", "Ablity"], "a": "Ability"}, {"q": "Develop -> ______", "options": ["Development", "Developion", "Developness"], "a": "Development"}, {"q": "Decided -> ______", "options": ["Decision", "Decisement", "Decideness"], "a": "Decision"}]}, {"type": "fill_in", "title": "Suffix Fill B2", "instruction": "Type the noun form using suffixes (-ness, -tion, -ity, -ment).", "questions": [{"q": "The ______ (kind) of the stranger surprised me.", "a": "kindness"}, {"q": "We need more ______ (educate).", "a": "education"}, {"q": "Success requires ______ (possible).", "a": "possibility"}, {"q": "I enjoy the ______ (move) of the dance.", "a": "movement"}, {"q": "His ______ (weak) is his pride.", "a": "weakness"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (10, 'B2', 'Tag Questions', 'Form confirmation questions correctly', 'bi-question-circle', '<h3>Theory</h3><p>Mastering the difference between these tenses is a key marker of B2 level English. It allows you to
                    express exactly <em>when</em> something happened and <em>how</em> it relates to the present.</p><h5>1. Present Perfect vs. Simple Past</h5><p>The main difference lies in our focus: are we thinking about the <strong>past</strong> time, or the
                    <strong>present</strong> result?
                </p><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Feature</th>
<th>Present Perfect (have/has + V3)</th>
<th>Simple Past (V2)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Time Focus</strong></td>
<td><strong>Unfinished Time / Indefinite Time</strong><br/>We don''t know or don''t care
                                    <em>when</em> it happened.
                                </td>
<td><strong>Finished Time</strong><br/>We know exactly <em>when</em> it happened.</td>
</tr>
<tr>
<td><strong>Keyword Examples</strong></td>
<td><em>ever, never, just, already, yet, so far, recently, lately, since, for</em></td>
<td><em>yesterday, last week, in 1990, 5 minutes ago, when I was a child</em></td>
</tr>
<tr>
<td><strong>Examples</strong></td>
<td>
<ul>
<li><em>I <strong>have lost</strong> my keys.</em> (Result: I can''t enter my
                                            house
                                            <strong>now</strong>).
                                        </li>
<li><em>She <strong>has written</strong> three books.</em> (She is still alive
                                            and
                                            can write more).</li>
</ul>
</td>
<td>
<ul>
<li><em>I <strong>lost</strong> my keys yesterday.</em> (Fact about the past).
                                        </li>
<li><em>Shakespeare <strong>wrote</strong> many plays.</em> (He is dead, he
                                            cannot
                                            write more).</li>
</ul>
</td>
</tr>
</tbody>
</table>
</div><h5>2. Present Perfect Simple vs. Continuous</h5><p>Both tenses connect the past to the present, but they emphasize different aspects of the action.</p><h6>Present Perfect Continuous (have/has been + -ing)</h6><p>Focuses on the <strong>ACTIVITY</strong> itself, its duration, or the fact that it has been ongoing
                    recently. The activity might still be happening or has just finished.</p><ul>
<li><em>I <strong>have been painting</strong> the room.</em> (Focus: The activity of painting. I
                        might have paint on my clothes. The room might not be finished).</li>
<li><em>She <strong>has been running</strong> for 2 hours.</em> (Focus: The duration and effort).
                    </li>
<li><em>You''re out of breath! <strong>Have you been running</strong>?</em> (Evidence of recent
                        activity).</li>
</ul><h6>Present Perfect Simple (have/has + V3)</h6><p>Focuses on the <strong>RESULT</strong> or <strong>COMPLETION</strong> of the action. We are
                    interested in "how much" or "how many".</p><ul>
<li><em>I <strong>have painted</strong> the room.</em> (Focus: The result. The room is now a new
                        color. The work is done).</li>
<li><em>She <strong>has run</strong> 10 kilometers.</em> (Focus: Acceptance of a completed
                        distance).</li>
<li><em>I <strong>have read</strong> half of the book.</em> (Focus: Amount completed).</li>
</ul><div class="alert alert-secondary mt-3">
<strong>Important Exception: Stative Verbs</strong><br/>
                    Verbs that describe states (know, like, believe, belong, love, hate, want) are <strong>NOT</strong>
                    used in continuous tenses, even if we focus on duration.
                    <br/><br/>
                    ✓ <em>I <strong>have known</strong> him for 10 years.</em> (Correct)
                    <br/>
                    ✗ <em>I <del>have been knowing</del> him for 10 years.</em> (Incorrect)
                </div>', '{"games": [{"type": "multiple_choice", "title": "Which Tag?", "instruction": "Choose the correct tag question.", "questions": [{"q": "You are coming to the party, ______?", "options": ["aren''t you", "don''t you", "won''t you"], "a": "aren''t you"}, {"q": "She finished her work, ______?", "options": ["didn''t she", "wasn''t she", "doesn''t she"], "a": "didn''t she"}, {"q": "He has a car, ______?", "options": ["doesn''t he", "hasn''t he", "isn''t he"], "a": "doesn''t he"}, {"q": "We''ll be there on time, ______?", "options": ["won''t we", "aren''t we", "shall we"], "a": "won''t we"}, {"q": "They haven''t seen it, ______?", "options": ["have they", "haven''t they", "did they"], "a": "have they"}]}, {"type": "fill_in", "title": "Tag Fill B2", "instruction": "Type the missing tag question (e.g., isn''t it, does he).", "questions": [{"q": "You haven''t been to Paris yet, ______?", "a": "have you"}, {"q": "It''s a beautiful day, ______?", "a": "isn''t it"}, {"q": "He works from home, ______?", "a": "doesn''t he"}, {"q": "Let''s go for a walk, ______?", "a": "shall we"}, {"q": "I''m late, ______?", "a": "aren''t i"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (11, 'B2', 'Adjective-forming Suffixes', 'Create adjectives with suffixes', 'bi-plus-circle', '<h3>Theory</h3><p>When narrating past events, adverbs like <strong>just, already, yet, still, ever, never</strong> act
                    as "time anchors". They help clarify the sequence of events, especially when using the <strong>Past
                        Perfect</strong>.</p><h5>1. Common Adverbs and Their Meanings</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Adverb</th>
<th>Meaning</th>
<th>Example (Past Perfect)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Just</strong></td>
<td>A very short time before the moment we are talking about.</td>
<td><em>The train <strong>had just left</strong> when we arrived.</em> (We missed it by
                                    seconds).</td>
</tr>
<tr>
<td><strong>Already</strong></td>
<td>Something happened <em>sooner</em> than expected.</td>
<td><em>When I called him to wake him up, he <strong>had already left</strong> for
                                        work.</em></td>
</tr>
<tr>
<td><strong>Yet</strong></td>
<td>Something hadn''t happened <em>up to that time</em> (used in negatives/questions).
                                </td>
<td><em>The email <strong>hadn''t arrived yet</strong> when I shut down the
                                        computer.</em>
</td>
</tr>
<tr>
<td><strong>Still</strong></td>
<td>A situation continued longer than expected (usually dissatisfaction or surprise).
                                </td>
<td><em>I was angry because he <strong>still hadn''t apologized</strong> for his
                                        mistake.</em></td>
</tr>
<tr>
<td><strong>Never</strong></td>
<td>Not at any time before that past moment.</td>
<td><em>I was nervous because I <strong>had never flown</strong> in a helicopter
                                        before.</em></td>
</tr>
<tr>
<td><strong>Ever</strong></td>
<td>At any time before that moment (often with "the first time" or superlatives).</td>
<td><em>It was the most beautiful sunset I <strong>had ever seen</strong>.</em></td>
</tr>
</tbody>
</table>
</div><h5>2. Sentence Position Guide</h5><p>Correct placement of these adverbs makes you sound fluent.</p><ul>
<li><strong>Mid-position (After ''had'', before Participle):</strong><br/>
                        Use for: <em>just, already, ever, never</em>.<br/>
                        ✓ <em>I had <strong>just</strong> finished.</em><br/>
                        ✓ <em>She had <strong>already</strong> eaten.</em>
</li>
<li><strong>Before ''had'' (emphatic):</strong><br/>
                        Use for: <em>still</em> (in negative sentences).<br/>
                        ✓ <em>I <strong>still</strong> hadn''t finished.</em> (Emphasis on the delay).
                    </li>
<li><strong>End-position:</strong><br/>
                        Use for: <em>yet</em>.<br/>
                        ✓ <em>I hadn''t finished <strong>yet</strong>.</em>
</li>
</ul><h5>3. British vs. American English</h5><p>There is a notable difference in how these adverbs are used with tenses.</p><ul>
<li><strong>British English:</strong> Strictly prefers <strong>Present Perfect</strong> (for current
                        relevance) or <strong>Past Perfect</strong> (for past narrative).<br/>
<em>"I <strong>have just eaten</strong>."</em> / <em>"He <strong>had already
                                left</strong>."</em>
</li>
<li><strong>American English:</strong> Often uses <strong>Simple Past</strong> with these adverbs,
                        viewing the action as a simple finished fact.<br/>
<em>"I <strong>just ate</strong>."</em> / <em>"He <strong>already left</strong>."</em>
</li>
</ul><p class="feedback-hint">Both are correct, but valid Past Perfect usage is sophisticated and precise in
                    both dialects.</p>', '{"games": [{"type": "multiple_choice", "title": "Make it an Adjective!", "instruction": "Choose the correct adjective form.", "questions": [{"q": "Care -> ______", "options": ["Careful", "Carety", "Careous"], "a": "Careful"}, {"q": "Danger -> ______", "options": ["Dangerous", "Dangerable", "Dangerive"], "a": "Dangerous"}, {"q": "Believe -> ______", "options": ["Believable", "Believeness", "Believous"], "a": "Believable"}, {"q": "Comfort -> ______", "options": ["Comfortable", "Comfortive", "Comforty"], "a": "Comfortable"}, {"q": "Create -> ______", "options": ["Creative", "Creatous", "Creaty"], "a": "Creative"}]}, {"type": "fill_in", "title": "Adjective Suffix Fill", "instruction": "Type the adjective form using suffixes (-ful, -less, -able, -ive, -ous).", "questions": [{"q": "He is a very ______ (hope) person.", "a": "hopeful"}, {"q": "The task was ______ (end).", "a": "endless"}, {"q": "She is ______ (ambition).", "a": "ambitious"}, {"q": "It was an ______ (enjoy) evening.", "a": "enjoyable"}, {"q": "This is a ______ (collect) item.", "a": "collective"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (12, 'B2', 'Reported Speech', 'Report what others said', 'bi-chat-quote', '<h3>Theory</h3><p>When telling a story in the past, we occasionally need to "flashback" to an earlier time. Just like
                    in the present (Present Perfect Simple vs. Continuous), we have two options for the "past of the
                    past".</p><h5>1. Past Perfect Continuous (had been + -ing)</h5><p>We use this when we want to emphasize the <strong>duration</strong> of an activity that was happening
                    up until a past moment, or the <strong>cause</strong> of a past feeling/state.</p><ul>
<li><strong>Duration Focus:</strong> <em>She <strong>had been waiting</strong> for 45 minutes when
                            the bus finally arrived.</em> (The waiting was long and annoying).</li>
<li><strong>Cause of a Feeling/State:</strong> <em>The ground was wet because it <strong>had been
                                raining</strong>.</em> (The rain might have just stopped).</li>
<li><strong>Visible Side Effects:</strong> <em>He was panting because he <strong>had been
                                running</strong>.</em></li>
</ul><h5>2. Past Perfect Simple (had + V3)</h5><p>We use this when we want to mention a <strong>completed action</strong> or <strong>how many
                        times</strong> something happened before a past moment.</p><ul>
<li><strong>Action Completed:</strong> <em>When I arrived, the meeting <strong>had
                                finished</strong>.</em> (It was over).</li>
<li><strong>Quantity/Frequency:</strong> <em>He <strong>had drunk</strong> three cups of coffee, so
                            he couldn''t sleep.</em> (Result: 3 cups).</li>
<li><strong>Permanent States:</strong> <em>They <strong>had lived</strong> in that house all their
                            lives.</em></li>
</ul><h5>3. Detailed Comparison</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Feature</th>
<th>Past Perfect Simple</th>
<th>Past Perfect Continuous</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Focus</strong></td>
<td><strong>Result / FACT</strong><br/>The action is finished and boxed up.</td>
<td><strong>Process / ACTIVITY</strong><br/>The action took time and was ongoing.</td>
</tr>
<tr>
<td><strong>Question</strong></td>
<td><em>"How much?" / "How many?"</em></td>
<td><em>"How long?"</em></td>
</tr>
<tr>
<td><strong>Stative Verbs</strong></td>
<td>Required for verbs like <em>know, have (possession), like</em>.<br/>✓ <em>I
                                        <strong>had
                                            had</strong> my car for years.</em></td>
<td>Not possible.<br/>✗ <em><del>I had been having my car.</del></em></td>
</tr>
<tr>
<td><strong>Example</strong></td>
<td><em>I <strong>had painted</strong> the ceiling.</em> (It was done).</td>
<td><em>I <strong>had been painting</strong> the ceiling.</em> (I was messy, or maybe
                                    not
                                    finished).</td>
</tr>
</tbody>
</table>
</div>', '{"games": [{"type": "multiple_choice", "title": "Report the words", "instruction": "Choose the correct reported speech version.", "questions": [{"q": "''I am tired,'' he said.", "options": ["He said that he was tired", "He said he is tired", "He said he was been tired"], "a": "He said that he was tired"}, {"q": "''I will call you,'' she told me.", "options": ["She told me she would call me", "She told me she will call me", "She told me she called me"], "a": "She told me she would call me"}, {"q": "''Have you seen my keys?'' he asked.", "options": ["He asked if I had seen his keys", "He asked if I see his keys", "He asked if I have seen his keys"], "a": "He asked if I had seen his keys"}, {"q": "''Clean your room!'' my mom said.", "options": ["My mom told me to clean my room", "My mom said me to clean my room", "My mom told to me clean my room"], "a": "My mom told me to clean my room"}, {"q": "''We are leaving tomorrow,'' they said.", "options": ["They said they were leaving the next day", "They said they were leaving tomorrow", "They said they leave the next day"], "a": "They said they were leaving the next day"}]}, {"type": "unscramble", "title": "Reported Order B2", "instruction": "Order the words to report the speech.", "questions": [{"q": "said he that was he hungry", "a": "he said that he was hungry"}, {"q": "would me told she she help", "a": "she told me she would help"}, {"q": "asked lived I if where he", "a": "he asked where i lived"}, {"q": "me to told stay he here", "a": "he told me to stay here"}, {"q": "had they said they been late", "a": "they said they had been late"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (13, 'B2', 'Participial Adjectives', '-ing vs -ed adjectives', 'bi-star', '<h3>Theory</h3><p>We use the Passive Voice when the <strong>action itself</strong> is more important than the person
                    doing it (the agent), or when we don''t know who did it.</p><h5>1. The Golden Rule of Construction</h5><p>To make any sentence passive, you need two things:</p><div class="alert alert-secondary text-center">
<strong>BE</strong> (in the correct tense) + <strong>Place V3</strong> (Past Participle)
                </div><h5>2. Tense-by-Tense Guide</h5><h6>A. Present Continuous Passive</h6><p>Use describing an action happening <em>to</em> something right now.</p><ul>
<li><strong>Active:</strong> <em>They <strong>are painting</strong> the house.</em></li>
<li><strong>Passive:</strong> <em>The house <strong>is being painted</strong>.</em> (is + being +
                        V3)</li>
<li><strong>Active:</strong> <em>Someone is cleaning the windows.</em></li>
<li><strong>Passive:</strong> <em>The windows <strong>are being cleaned</strong>.</em></li>
</ul><h6>B. Present Perfect Passive</h6><p>Use for completed actions with present results.</p><ul>
<li><strong>Active:</strong> <em>Someone <strong>has stolen</strong> my bike.</em></li>
<li><strong>Passive:</strong> <em>My bike <strong>has been stolen</strong>.</em> (has + been + V3)
                    </li>
<li><strong>Active:</strong> <em>They have finished the report.</em></li>
<li><strong>Passive:</strong> <em>The report <strong>has been finished</strong>.</em></li>
</ul><h6>C. Future Passive</h6><ul>
<li><strong>Will:</strong> <em>They <strong>will release</strong> the movie soon.</em><br/>→ <em>The
                            movie <strong>will be released</strong> soon.</em></li>
<li><strong>Going to:</strong> <em>They <strong>are going to build</strong> a bridge.</em><br/>→
                        <em>A bridge <strong>is going to be built</strong> here.</em>
</li>
</ul><h5>3. When to use "By"? (The Agent)</h5><p>We only use <em>"by [person]"</em> if it adds important new information.</p><ul>
<li>✓ <em>"This book was written <strong>by J.K. Rowling</strong>."</em> (Important: we care who
                        wrote it).</li>
<li>✗ <em>"The thief was arrested <del>by the police</del>."</em> (Obvious: who else arrests people?
                        Omit it).</li>
<li>✗ <em>"My car was repaired <del>by the mechanic</del>."</em> (Obvious).</li>
</ul><h5>Summary Table</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Tense</th>
<th>Active</th>
<th>Passive Construction</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Present Continuous</strong></td>
<td>is doing</td>
<td><strong>is being done</strong></td>
</tr>
<tr>
<td><strong>Present Perfect</strong></td>
<td>has done</td>
<td><strong>has been done</strong></td>
</tr>
<tr>
<td><strong>Future (Will)</strong></td>
<td>will do</td>
<td><strong>will be done</strong></td>
</tr>
<tr>
<td><strong>Future (Going to)</strong></td>
<td>is going to do</td>
<td><strong>is going to be done</strong></td>
</tr>
</tbody>
</table>
</div>', '{"games": [{"type": "multiple_choice", "title": "-ed or -ing?", "instruction": "Choose the correct participial adjective.", "questions": [{"q": "The movie was very ______.", "options": ["interesting", "interested"], "a": "interesting"}, {"q": "I am ______ in this topic.", "options": ["interested", "interesting"], "a": "interested"}, {"q": "The news was ______.", "options": ["shocking", "shocked"], "a": "shocking"}, {"q": "She was ______ by the news.", "options": ["shocked", "shocking"], "a": "shocked"}, {"q": "This book is ______.", "options": ["boring", "bored"], "a": "boring"}]}, {"type": "fill_in", "title": "Participial Fill B2", "instruction": "Type the -ed or -ing form.", "questions": [{"q": "I am ______ (tire) after work.", "a": "tired"}, {"q": "My job is ______ (tire).", "a": "tiring"}, {"q": "We were ______ (surprise) to see him.", "a": "surprised"}, {"q": "It was a ______ (surprise) result.", "a": "surprising"}, {"q": "The instructions were ______ (confuse).", "a": "confusing"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (14, 'B2', 'Unreal Conditionals', 'Talk about imaginary past situations', 'bi-signpost-split', '<h3>Theory</h3><p>This topic covers two ways to check information or ask for agreement. They are essential for sounding
                    natural in conversation.</p><h5>1. Negative Questions</h5><p>We often form questions with <em>not</em> to express <strong>surprise</strong> or because we
                    <strong>expect the answer to be "Yes"</strong>.
                </p><ul>
<li><strong>Surprise:</strong> <em>"<strong>Didn''t</strong> you hear the news?"</em> (I am surprised
                        you don''t know).</li>
<li><strong>Confirmation (Expect Yes):</strong> <em>"<strong>Doesn''t</strong> this pizza taste
                            great?"</em> (I think it is great, I expect you to agree).</li>
<li><strong>Complaint:</strong> <em>"<strong>Can''t</strong> you be quiet?"</em> (I want you to be
                        quiet).</li>
</ul><h5>2. Question Tags</h5><p>These are the little questions at the end of statements (<em>isn''t it?, have you?</em>).</p><h6>The Golden Matching Rules</h6><div class="table-responsive">
<table class="table table-dark table-bordered table-sm">
<thead>
<tr>
<th>Main Clause Verb</th>
<th>Tag used</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Positive (+)</td>
<td>Negative (-)</td>
<td><em>You <strong>are</strong> happy, <strong>aren''t</strong> you?</em></td>
</tr>
<tr>
<td>Negative (-)</td>
<td>Positive (+)</td>
<td><em>You <strong>aren''t</strong> happy, <strong>are</strong> you?</em></td>
</tr>
<tr>
<td><strong>To Be</strong> (is/are/was)</td>
<td>is/are/was</td>
<td><em>She <strong>was</strong> late, <strong>wasn''t</strong> she?</em></td>
</tr>
<tr>
<td><strong>Have</strong> (Auxiliary)</td>
<td>have/has/had</td>
<td><em>They <strong>have</strong> eaten, <strong>haven''t</strong> they?</em></td>
</tr>
<tr>
<td><strong>Can/Will/Should</strong></td>
<td>can/will/should</td>
<td><em>He <strong>can</strong> drive, <strong>can''t</strong> he?</em></td>
</tr>
<tr>
<td><strong>Real Verb</strong> (play, eat)</td>
<td><strong>do/does/did</strong></td>
<td><em>You <strong>play</strong> tennis, <strong>don''t</strong> you?</em></td>
</tr>
</tbody>
</table>
</div><h6>Crucial Special Cases</h6><ul>
<li><strong>I am</strong> → <em>aren''t I?</em> (Example: <em>I''m correct, aren''t I?</em>)</li>
<li><strong>Let''s</strong> → <em>shall we?</em> (Example: <em>Let''s dance, shall we?</em>)</li>
<li><strong>Imperatives (Orders)</strong> → <em>will you?</em> (Example: <em>Sit down, will
                            you?</em> - adds politeness or annoyance depending on tone).</li>
</ul><h6>The Secret of Intonation</h6><p>The meaning changes completely depending on how you say the tag:</p><ul>
<li><strong>Falling Intonation (↘) "It''s cold, isn''t it? ↘"</strong><br/>
                        Meaning: I am telling you a fact. I know you agree. (Chatter).</li>
<li><strong>Rising Intonation (↗) "You locked the door, didn''t you? ↗"</strong><br/>
                        Meaning: I am asking a real question. I am not sure. Please answer.</li>
</ul>', '{"games": [{"type": "multiple_choice", "title": "2nd or 3rd Conditional?", "instruction": "Choose the correct unreal conditional form.", "questions": [{"q": "If I ______ rich, I would travel the world.", "options": ["were", "am", "would be"], "a": "were"}, {"q": "If he ______ harder last year, he would have passed.", "options": ["had studied", "studied", "would study"], "a": "had studied"}, {"q": "What would you do if you ______ a lottery?", "options": ["won", "win", "had won"], "a": "won"}, {"q": "If they had known, they ______ come.", "options": ["would have", "would", "will have"], "a": "would have"}, {"q": "I ______ help you if I could.", "options": ["would", "will", "did"], "a": "would"}]}, {"type": "fill_in", "title": "Unreal Fill B2", "instruction": "Type the correct verb form (e.g., were, had seen, would go).", "questions": [{"q": "If I ______ (be) you, I wouldn''t do that.", "a": "were"}, {"q": "If I had seen him, I ______ (say) hello.", "a": "would have said"}, {"q": "They would buy a house if they ______ (have) enough money.", "a": "had"}, {"q": "If we ______ (know) about the traffic, we would have left earlier.", "a": "had known"}, {"q": "She ______ (be) happier if she lived near the sea.", "a": "would be"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (15, 'B2', 'Indirect Questions', 'Ask questions politely', 'bi-question-square', '<h3>Theory</h3><h5>1. Clauses of Reason (Why?)</h5><p>We use these to explain the cause or reason for something.</p><ul>
<li><strong>Because / Since / As:</strong> Followed by a subject + verb.
                        <br/><em>I stayed home <strong>because</strong> it was raining.</em>
<br/><em><strong>Since</strong> we are here, let''s eat.</em> (Often implies the reason is already
                        known).
                        <br/><em><strong>As</strong> I was tired, I went to bed early.</em>
</li>
<li><strong>Because of / Due to:</strong> Followed by a noun or noun phrase (not a full sentence).
                        <br/><em>We were late <strong>because of</strong> the traffic.</em>
<br/><em>The cancellation was <strong>due to</strong> bad weather.</em>
</li>
</ul><h5>2. Clauses of Condition (If...)</h5><p>Apart from "if", we have other conjunctions to set conditions.</p><ul>
<li><strong>Unless:</strong> Means "if not" or "except if".
                        <br/><em>I won''t go <strong>unless</strong> you come with me.</em> (= if you don''t come).
                    </li>
<li><strong>As long as / Provided that:</strong> Emphasizes a condition (meaning: "only if").
                        <br/><em>You can borrow my car <strong>as long as</strong> you drive carefully.</em>
</li>
<li><strong>In case:</strong> doing something <em>before</em> a problem happens, as a precaution.
                        <br/><em>Take an umbrella <strong>in case</strong> it rains.</em> (Take it now, because it might
                        rain later).
                        <br/><em>(Compare with If: Take an umbrella <strong>if</strong> it rains. -&gt; Only take it when
                            you see rain).</em>
</li>
</ul>', '{"games": [{"type": "multiple_choice", "title": "Polite Questions", "instruction": "Choose the correct indirect question structure.", "questions": [{"q": "Could you tell me ______?", "options": ["where the station is", "where is the station", "where station is"], "a": "where the station is"}, {"q": "I wonder ______.", "options": ["if she is coming", "if is she coming", "she is coming"], "a": "if she is coming"}, {"q": "Do you know ______?", "options": ["what time it starts", "what time does it start", "what time starts it"], "a": "what time it starts"}, {"q": "I''d like to know ______.", "options": ["how much this costs", "how much does this cost", "how much it costs"], "a": "how much this costs"}, {"q": "Can you remember ______?", "options": ["what he said", "what did he say", "what he says"], "a": "what he said"}]}, {"type": "unscramble", "title": "Indirect Order B2", "instruction": "Order the words to form a polite indirect question.", "questions": [{"q": "me you tell can time what it is", "a": "can you tell me what time it is"}, {"q": "know I where want to lives she", "a": "i want to know where she lives"}, {"q": "know you do he if is back", "a": "do you know if he is back"}, {"q": "tell could me you far it is how", "a": "could you tell me how far it is"}, {"q": "wonder she I did what say", "a": "i wonder what she said"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (16, 'B2', 'Gerunds vs Infinitives', 'Know which form to use', 'bi-shuffle', '<h3>Theory</h3><p>Reduced time clauses make sentences shorter, more dynamic, and more formal. They are high-level style
                    markers.</p><div class="alert alert-warning">
<strong>The Golden Rule: Use the Same Subject</strong><br/>
                    You can only reduce the clause if the subject of the main sentence and the time clause is the
                    <strong>SAME PERSON</strong>.
                    <br/>✓ <em>After <strong>he</strong> arrived, <strong>he</strong> slept.</em> (Same subject: He).
                    <br/>✗ <em>After <strong>I</strong> arrived, <strong>she</strong> left.</em> (Different subjects: I
                    vs She. Do NOT reduce).
                </div><h5>1. Active Meaning (-ing)</h5><p>Remove the subject and change the verb to <strong>-ing</strong>.</p><ul>
<li><em><strong>After he finished</strong> work, he went home.</em><br/>→ <em><strong>After
                                finishing</strong> work, he went home.</em></li>
<li><em><strong>While I was walking</strong> in the park, I met Tom.</em><br/>→ <em><strong>While
                                walking</strong> in the park, I met Tom.</em></li>
<li><em><strong>Before you leave</strong>, please turn off the lights.</em><br/>→ <em><strong>Before
                                leaving</strong>, please turn off the lights.</em></li>
</ul><h5>2. Passive Meaning (-ed / V3)</h5><p>For passive verbs (was/is + V3), remove the subject and the "be" verb. Keep only the Past Participle.
                </p><ul>
<li><em><strong>When he was asked</strong> about the problem, he lied.</em><br/>→ <em><strong>When
                                asked</strong> about the problem, he lied.</em></li>
<li><em><strong>Once it is cooked</strong>, serve the dish immediately.</em><br/>→ <em><strong>Once
                                cooked</strong>, serve the dish immediately.</em></li>
</ul><h5>3. Emphasizing Completion (Having + V3)</h5><p>If you want to emphasize that the first action was <strong>completely finished</strong> before the
                    second started, use "Having + V3".</p><ul>
<li><em><strong>After he had completed</strong> the project, he took a vacation.</em><br/>→
                        <em><strong>Having completed</strong> the project, he took a vacation.</em>
</li>
</ul>', '{"games": [{"type": "multiple_choice", "title": "Stop, Try, Remember", "instruction": "Choose the correct form based on meaning change.", "questions": [{"q": "I stopped ______ (habit) five years ago.", "options": ["smoking", "to smoke"], "a": "smoking"}, {"q": "He stopped ______ (purpose) a coffee.", "options": ["to buy", "buying"], "a": "to buy"}, {"q": "I remember ______ (past event) her for the first time.", "options": ["meeting", "to meet"], "a": "meeting"}, {"q": "Remember ______ (future duty) your keys!", "options": ["to take", "taking"], "a": "to take"}, {"q": "She tried ______ (experiment) a different approach.", "options": ["using", "to use"], "a": "using"}]}, {"type": "fill_in", "title": "Gerund/Infinitive Fill B2", "instruction": "Type the gerund or infinitive form (e.g., meeting, to meet).", "questions": [{"q": "I''ll never forget ______ (see) the Grand Canyon.", "a": "seeing"}, {"q": "Don''t forget ______ (lock) the door.", "a": "to lock"}, {"q": "He forgot ______ (bring) his umbrella.", "a": "to bring"}, {"q": "I regret ______ (tell) him the secret.", "a": "telling"}, {"q": "We regret ______ (inform) you that the flight is cancelled.", "a": "to inform"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (17, 'B2', 'Other Uses of To', 'Infinitives in different contexts', 'bi-arrow-right', '<h3>Theory</h3><p>Reduced relative clauses (also called participle clauses) make your writing flow better by removing
                    unnecessary words like "who", "which", or "that".</p><h5>1. Technique A: Deleting "Pronoun + Be"</h5><p>If the relative clause contains the verb <strong>to be</strong> (is, are, was, were), simply delete
                    the pronoun and the be-verb.</p><div class="table-responsive">
<table class="table table-dark table-bordered table-sm">
<thead>
<tr>
<th>Type</th>
<th>Original Sentence</th>
<th>Reduced Sentence</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Continuous</strong> (-ing)</td>
<td>The man <strong>who is standing</strong> there is my boss.</td>
<td>The man <strong>standing</strong> there is my boss.</td>
</tr>
<tr>
<td><strong>Passive</strong> (V3)</td>
<td>The cars <strong>which are produced</strong> in Japan.</td>
<td>The cars <strong>produced</strong> in Japan.</td>
</tr>
<tr>
<td><strong>Prepositional</strong></td>
<td>The book <strong>that is on the table</strong> is mine.</td>
<td>The book <strong>on the table</strong> is mine.</td>
</tr>
</tbody>
</table>
</div><h5>2. Technique B: Changing Active Verbs</h5><p>If there is <strong>NO "be" verb</strong>, delete the pronoun and change the main verb to
                    <strong>-ing</strong>.
                </p><ul>
<li><em>Anyone <strong>who wants</strong> to come is welcome.</em><br/>→ <em>Anyone
                            <strong>wanting</strong> to come is welcome.</em></li>
<li><em>The bus <strong>that leaves</strong> at 8 PM is full.</em><br/>→ <em>The bus
                            <strong>leaving</strong> at 8 PM is full.</em></li>
</ul><div class="alert alert-secondary mt-2">
<strong>Note on Function:</strong><br/>
                    In reduced clauses, the phrase behaves like a giant adjective describing the noun before it.
                    <br/><em>"The <strong>crying</strong> baby"</em> = <em>"The baby <strong>who is
                            crying</strong>"</em>.
                </div>', '{"games": [{"type": "multiple_choice", "title": "To + Gerund?", "instruction": "Identify structures where ''to'' is a preposition.", "questions": [{"q": "I look forward ______ you.", "options": ["to seeing", "to see", "seeing"], "a": "to seeing"}, {"q": "I am used ______ early.", "options": ["to waking up", "to wake up", "waking up"], "a": "to waking up"}, {"q": "She confessed ______ the money.", "options": ["to taking", "to take", "taking"], "a": "to taking"}, {"q": "They object ______ on Sundays.", "options": ["to working", "to work", "working"], "a": "to working"}, {"q": "I haven''t got used ______ on the left.", "options": ["to driving", "to drive", "driving"], "a": "to driving"}]}, {"type": "fill_in", "title": "To + Verb Fill B2", "instruction": "Type the correct form (e.g., to seeing, to see).", "questions": [{"q": "I am dedicated ______ (help) others.", "a": "to helping"}, {"q": "She is committed ______ (finish) the task.", "a": "to finishing"}, {"q": "We are getting used ______ (live) here.", "a": "to living"}, {"q": "I look forward ______ (meet) you.", "a": "to meeting"}, {"q": "He is adjusted ______ (work) at night.", "a": "to working"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (18, 'B2', 'Wish & If Only', 'Express wishes and regrets', 'bi-star-fill', '<h3>Theory</h3><p>We usually use relative clauses to describe a noun. However, we can also use a non-defining relative
                    clause with <strong>which</strong> to comment on <strong>an entire previous clause</strong> or
                    sentence.</p><h5>The Structure</h5><p><strong>Clause 1 + comma (,) + which + verb + rest of sentence</strong></p><ul>
<li><em>He arrived late, <strong>which made me angry</strong>.</em></li>
<li>(What made me angry? Not "he", not "late", but <strong>the fact that he arrived late</strong>).
                    </li>
</ul><h5>Examples and Meaning</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Sentence</th>
<th>"Which" refers to...</th>
</tr>
</thead>
<tbody>
<tr>
<td><em>She passed the exam, <strong>which surprised everyone</strong>.</em></td>
<td>The fact that she passed.</td>
</tr>
<tr>
<td><em>He doesn''t have a car, <strong>which is a problem</strong>.</em></td>
<td>The situation of not having a car.</td>
</tr>
<tr>
<td><em>We missed the bus, <strong>which means we''ll be late</strong>.</em></td>
<td>The event of missing the bus.</td>
</tr>
</tbody>
</table>
</div><div class="alert alert-warning">
<strong>Punctuation Rule:</strong><br/>
                    You <strong>MUST</strong> use a comma before "which" in this structure.
                    <br/>✓ <em>It rained, which was nice.</em>
<br/>✗ <em>It rained which was nice.</em>
</div><h5>Comparison: Noun Modifier vs. Sentence Modifier</h5><ul>
<li><strong>Noun Modifier:</strong> <em>The car, <strong>which I bought yesterday</strong>, is
                            red.</em> ("Which" = the car).</li>
<li><strong>Sentence Modifier:</strong> <em>I bought a new car, <strong>which explains why I''m
                                broke</strong>.</em> ("Which" = the action of buying the car).</li>
</ul>', '{"games": [{"type": "multiple_choice", "title": "Wish or If Only?", "instruction": "Choose the correct structure for regrets or wishes.", "questions": [{"q": "I wish I ______ (present) more money.", "options": ["had", "have", "would have"], "a": "had"}, {"q": "If only it ______ (past regret) raining yesterday.", "options": ["had stopped", "stopped", "would stop"], "a": "had stopped"}, {"q": "I wish you ______ (annoyance) whistling!", "options": ["would stop", "stopped", "had stopped"], "a": "would stop"}, {"q": "If only I ______ (ability) play the guitar.", "options": ["could", "can", "would"], "a": "could"}, {"q": "I wish they ______ (future) for the party.", "options": ["would come", "come", "had come"], "a": "would come"}]}, {"type": "fill_in", "title": "Wish Fill B2", "instruction": "Type the correct verb form (e.g., were, had known).", "questions": [{"q": "I wish I ______ (be) taller.", "a": "were"}, {"q": "If only we ______ (know) about the meeting.", "a": "had known"}, {"q": "I wish it ______ (not rain) right now.", "a": "weren''t raining"}, {"q": "If only I ______ (study) harder for the test.", "a": "had studied"}, {"q": "I wish you ______ (help) me with this.", "a": "would help"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (19, 'B2', 'Perfect Modals', 'Speculate about the past', 'bi-check2-circle', '<h3>Theory</h3><p>Beyond basic contrast words (like "but" or "although"), we use more specific phrases to compare
                    differences, state exceptions, or propose alternatives.</p><h5>1. Showing Difference (Comparison)</h5><p>We use these to show how two things are completely different.</p><ul>
<li><strong>Unlike:</strong> Followed by a noun. Means "Different from".
                        <br/><em><strong>Unlike</strong> his brother, John is very shy.</em>
</li>
<li><strong>In contrast to / Contrary to:</strong> Stronger difference.
                        <br/><em><strong>In contrast to</strong> the city, the countryside is quiet.</em>
<br/><em><strong>Contrary to</strong> popular belief, bats are not blind.</em>
</li>
</ul><h5>2. Showing Exception</h5><p>We use these to say that something includes everything <em>minus</em> one part.</p><ul>
<li><strong>Except (for):</strong>
<br/><em>Everyone passed <strong>except (for)</strong> Tom.</em>
</li>
<li><strong>Apart from / Aside from:</strong> (Can mean "Except for" OR "In addition to").
                        <br/><em><strong>Apart from</strong> the rain, the trip was great.</em> (Exception).
                        <br/><em><strong>Apart from</strong> Spanish, he speaks German.</em> (Addition).
                    </li>
</ul><h5>3. Showing Alternatives</h5><p>We use these to choose one thing over another.</p><ul>
<li><strong>Instead of:</strong> Followed by Noun or Gerund (-ing).
                        <br/><em>I''ll have tea <strong>instead of</strong> coffee.</em>
<br/><em>She went out <strong>instead of</strong> studying.</em>
</li>
<li><strong>Rather than:</strong> Generally used with Infinitives (base verb) or Nouns.
                        <br/><em>I prefer to walk <strong>rather than</strong> drive.</em>
</li>
</ul>', '{"games": [{"type": "multiple_choice", "title": "Modals in the Past", "instruction": "Choose the best perfect modal for the context.", "questions": [{"q": "He ______ (deduction) gone to bed; the lights are off.", "options": ["must have", "should have", "could have"], "a": "must have"}, {"q": "You ______ (advice) told me you were coming!", "options": ["should have", "might have", "can''t have"], "a": "should have"}, {"q": "She ______ (possibility) missed the bus.", "options": ["might have", "should have", "mustn''t have"], "a": "might have"}, {"q": "They ______ (impossibility) finished yet; it''s too early.", "options": ["can''t have", "must have", "shouldn''t have"], "a": "can''t have"}, {"q": "We ______ (ability) won if we had tried harder.", "options": ["could have", "should have", "must have"], "a": "could have"}]}, {"type": "fill_in", "title": "Perfect Modal Fill B2", "instruction": "Type the modal + have + past participle.", "questions": [{"q": "The ground is wet. It ______ (must/rain).", "a": "must have rained"}, {"q": "I ______ (should/study) more.", "a": "should have studied"}, {"q": "He ______ (might/forget).", "a": "might have forgotten"}, {"q": "They ______ (could/arrive) by now.", "a": "could have arrived"}, {"q": "She ______ (can''t/see) us.", "a": "can''t have seen"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (20, 'B2', 'Subordinating Conjunctions', 'Connect clauses with conjunctions', 'bi-link', '<h3>Theory</h3><p>We use specific structures to talk about things we did regularly in the past but don''t do anymore.
                    The key is knowing when to use <em>used to</em> versus <em>would</em>.</p><h5>1. Used to + Infinitive</h5><p>This is the general form. Use it for <strong>past habits</strong> AND <strong>past states</strong>.
                </p><ul>
<li><strong>Habits (Actions):</strong> <em>I <strong>used to play</strong> tennis every Sunday.</em>
                        (I don''t anymore).</li>
<li><strong>States (Situations):</strong> <em>I <strong>used to live</strong> in Paris.</em> (I
                        don''t anymore).</li>
<li><strong>Negative:</strong> <em>I <strong>didn''t use to</strong> like vegetables.</em></li>
<li><strong>Question:</strong> <em><strong>Did</strong> you <strong>use to</strong> have long
                            hair?</em></li>
</ul><h5>2. Would + Infinitive</h5><p>Use this ONLY for <strong>past habits/actions</strong>. It sounds nostalgic and storytelling.</p><p><strong>Warning:</strong> You CANNOT use "would" for states (be, live, love, have, know, etc.).</p><ul>
<li>✓ <em>When I was young, I <strong>would play</strong> in the park for hours.</em> (Action = OK).
                    </li>
<li>✗ <em>I <del>would be</del> shy.</em> (State = WRONG). → Use <em>I <strong>used to be</strong>
                            shy.</em></li>
<li>✗ <em>We <del>would have</del> a dog.</em> (State = WRONG). → Use <em>We <strong>used to
                                have</strong> a dog.</em></li>
</ul><h5>Summary Table</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Verb Type</th>
<th>Used to</th>
<th>Would</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Action Verbs</strong><br/>(run, play, eat)</td>
<td><span class="text-success">YES</span></td>
<td><span class="text-success">YES</span> (Nostalgic)</td>
</tr>
<tr>
<td><strong>State Verbs</strong><br/>(be, have, live, love)</td>
<td><span class="text-success">YES</span></td>
<td><span class="text-danger">NO</span></td>
</tr>
</tbody>
</table>
</div>', '{"games": [{"type": "multiple_choice", "title": "Connect the Clauses", "instruction": "Choose the correct subordinating conjunction.", "questions": [{"q": "I''ll call you ______ I arrive.", "options": ["as soon as", "although", "unless"], "a": "as soon as"}, {"q": "I went out ______ it was raining.", "options": ["although", "because", "since"], "a": "although"}, {"q": "______ you study, you won''t pass.", "options": ["Unless", "If", "While"], "a": "Unless"}, {"q": "He stayed home ______ he was sick.", "options": ["because", "despite", "whereas"], "a": "because"}, {"q": "I''ll wait here ______ you come back.", "options": ["until", "since", "once"], "a": "until"}]}, {"type": "unscramble", "title": "Conjunction Order B2", "instruction": "Order the words to form a complex sentence.", "questions": [{"q": "soon as I arrived called I", "a": "i called as soon as i arrived"}, {"q": "went out although was raining it", "a": "i went out although it was raining"}, {"q": "unless you study won''t you pass", "a": "unless you study you won''t pass"}, {"q": "slept he because was tired he", "a": "he slept because he was tired"}, {"q": "wait until here come back you", "a": "wait here until you come back"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (21, 'B2', 'Present Perfect Continuous', 'Actions continuing to the present', 'bi-arrow-repeat', '<h3>Theory</h3><p>Indirect questions are more polite and formal than direct questions. The most important rule is that
                    the word order changes to <strong>Subject + Verb</strong> (like a normal statement).</p><h5>1. The Golden Rule: Word Order</h5><p>In direct questions, the verb comes before the subject. In indirect questions, the <strong>subject
                        comes before the verb</strong>.</p><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Type</th>
<th>Sentence</th>
<th>Order</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Direct</strong></td>
<td><em>Where <strong>is the bank</strong>?</em></td>
<td>Verb + Subject</td>
</tr>
<tr>
<td><strong>Indirect</strong></td>
<td><em>Do you know where <strong>the bank is</strong>?</em></td>
<td>Subject + Verb</td>
</tr>
</tbody>
</table>
</div><h5>2. Auxiliaries "Do/Does/Did" Disappear</h5><p>Since the indirect part is a statement clause, we don''t use "do" auxiliaries.</p><ul>
<li>Direct: <em>What time <strong>does</strong> the movie start?</em></li>
<li>Indirect: <em>Can you tell me what time <strong>the movie starts</strong>?</em> (NOT: ...what
                        time does the movie start)</li>
<li>Direct: <em>Where <strong>did</strong> he go?</em></li>
<li>Indirect: <em>I wonder where <strong>he went</strong>.</em></li>
</ul><h5>3. Yes/No Questions (If/Whether)</h5><p>If there is no question word (Who, What, Where...), use <strong>if</strong> or
                    <strong>whether</strong>.
                </p><ul>
<li>Direct: <em>Is she married?</em></li>
<li>Indirect: <em>Do you know <strong>if</strong> she is married?</em></li>
<li>Direct: <em>Did they win?</em></li>
<li>Indirect: <em>I''d like to know <strong>whether</strong> they won.</em></li>
</ul>', '{"games": [{"type": "multiple_choice", "title": "Duration now", "instruction": "Choose the correct Present Perfect Continuous form.", "questions": [{"q": "I ______ (work) here for three years.", "options": ["have been working", "has been working", "am working"], "a": "have been working"}, {"q": "She ______ (study) all morning.", "options": ["has been studying", "have been studying", "is studying"], "a": "has been studying"}, {"q": "How long ______ (wait) for me?", "options": ["have you been waiting", "has you been waiting", "did you wait"], "a": "have you been waiting"}, {"q": "They ______ (play) tennis since 10 AM.", "options": ["have been playing", "has been playing", "are playing"], "a": "have been playing"}, {"q": "It ______ (rain) for two hours.", "options": ["has been raining", "have been raining", "is raining"], "a": "has been raining"}]}, {"type": "fill_in", "title": "Continuous Duration B2", "instruction": "Type the correct form (e.g., have been doing).", "questions": [{"q": "I ______ (wait) for a long time.", "a": "have been waiting"}, {"q": "He ______ (live) in London since 2015.", "a": "has been living"}, {"q": "We ______ (study) English all day.", "a": "have been studying"}, {"q": "The baby ______ (cry) for an hour.", "a": "has been crying"}, {"q": "How long ______ you ______ (learn) Spanish?", "a": "have been learning"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (22, 'B2', 'Used To Structures', 'Past habits and familiarity', 'bi-hourglass-split', '<h3>Theory</h3><p>We use the <strong>Second Conditional</strong> (If + Past Simple, ... would + Verbs) to talk about
                    hypothetical or unreal situations in the present/future. We can replace "If" with other connectors
                    to add nuance.</p><h5>1. Unless (= If... not)</h5><p>We use <strong>unless</strong> to say "except if". It replaces "if... not".</p><ul>
<li><em>I wouldn''t buy it <strong>if</strong> it <strong>weren''t</strong> cheap.</em></li>
<li>→ <em>I wouldn''t buy it <strong>unless</strong> it <strong>were</strong> cheap.</em></li>
<li>(Note: We avoid double negatives. Don''t say "unless it weren''t").</li>
</ul><h5>2. Only if (Restriction)</h5><p>This makes the condition very strong and specific.</p><ul>
<li><em>I would tell you <strong>only if</strong> you promised to keep it secret.</em></li>
<li><em>She would go the party <strong>only if</strong> he weren''t there.</em></li>
</ul><h5>3. Even if (Surprise / No change)</h5><p>This means the result would remain the same, no matter what happens.</p><ul>
<li><em>I wouldn''t do it <strong>if</strong> you paid me.</em> (Normal conditional).</li>
<li><em>I wouldn''t do it <strong>even if</strong> you paid me!</em> (Emphatic: It doesn''t matter if
                        you pay me).</li>
<li><em><strong>Even if</strong> I had time, I wouldn''t go.</em></li>
</ul>', '{"games": [{"type": "multiple_choice", "title": "Used to, Be used to, or Get used to?", "instruction": "Choose the correct structure based on current habit vs past habit.", "questions": [{"q": "I ______ (past habit) have long hair.", "options": ["used to", "am used to", "get used to"], "a": "used to"}, {"q": "I ______ (current state) living in the city now.", "options": ["am used to", "used to", "am get used to"], "a": "am used to"}, {"q": "It''s hard to ______ (process) waking up early.", "options": ["get used to", "be used to", "used to"], "a": "get used to"}, {"q": "She ______ (current state) working late.", "options": ["is used to", "used to", "gets used to"], "a": "is used to"}, {"q": "They ______ (past habit) play football every day.", "options": ["used to", "are used to", "get used to"], "a": "used to"}]}, {"type": "fill_in", "title": "Used To Fill B2", "instruction": "Type the correct form (e.g., used to, is used to, got used to).", "questions": [{"q": "I ______ (past habit) live in Paris.", "a": "used to"}, {"q": "She ______ (current state) the noise.", "a": "is used to"}, {"q": "He ______ (process) the heat after a month.", "a": "got used to"}, {"q": "We ______ (past habit) be best friends.", "a": "used to"}, {"q": "Are you ______ (current state) the food here?", "a": "used to"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (23, 'B2', 'Past Perfect Continuous', 'Ongoing actions before a past moment', 'bi-clock', '<h3>Theory</h3><p>We use <strong>I wish</strong> or <strong>If only</strong> to express a desire for reality to be
                    different. The tense we use shifts back one step.</p><h5>1. Present Wishes (Change the Present)</h5><p>Use <strong>Past Simple</strong> to wish for something different right now.</p><ul>
<li>Result: <em>I don''t have money.</em></li>
<li>Wish: <em>I wish I <strong>had</strong> money.</em></li>
<li>Result: <em>He isn''t here.</em></li>
<li>Wish: <em>If only he <strong>were</strong> here.</em></li>
</ul><h5>2. Past Regrets (Change the Past)</h5><p>Use <strong>Past Perfect</strong> to regret something that already happened.</p><ul>
<li>Result: <em>I ate too much.</em></li>
<li>Wish: <em>I wish I <strong>hadn''t eaten</strong> so much.</em></li>
<li>Result: <em>She didn''t study.</em></li>
<li>Wish: <em>If only she <strong>had studied</strong> more.</em></li>
</ul><h5>3. Future / Complaints (Change Behavior)</h5><p>Use <strong>Would</strong> to complain about someone else''s annoying behavior or wish for a
                    situation to change.</p><ul>
<li><em>I wish you <strong>would stop</strong> smoking.</em> (Complaint).</li>
<li><em>I wish it <strong>would stop</strong> raining.</em> (Desire for change).</li>
<li><strong>Note:</strong> You cannot say "I wish I would..." for yourself.</li>
</ul>', '{"games": [{"type": "multiple_choice", "title": "Duration in the past", "instruction": "Choose the correct Past Perfect Continuous form.", "questions": [{"q": "I ______ (wait) for an hour before the bus arrived.", "options": ["had been waiting", "have been waiting", "was waiting"], "a": "had been waiting"}, {"q": "She ______ (study) all night, so she was tired.", "options": ["had been studying", "has been studying", "was studying"], "a": "had been studying"}, {"q": "They ______ (play) for hours when it started to rain.", "options": ["had been playing", "were playing", "have been playing"], "a": "had been playing"}, {"q": "How long ______ (work) there before he quit?", "options": ["had he been working", "has he been working", "was he working"], "a": "had he been working"}, {"q": "The ground was wet because it ______ (rain).", "options": ["had been raining", "has been raining", "was raining"], "a": "had been raining"}]}, {"type": "fill_in", "title": "Past Continuous Duration B2", "instruction": "Type: had been + verb-ing.", "questions": [{"q": "I ______ (drive) for hours.", "a": "had been driving"}, {"q": "She ______ (talk) on the phone.", "a": "had been talking"}, {"q": "We ______ (wait) for you.", "a": "had been waiting"}, {"q": "He ______ (run) in the park.", "a": "had been running"}, {"q": "They ______ (live) in Spain.", "a": "had been living"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (24, 'B2', 'Future Perfect Continuous', 'Duration up to a future point', 'bi-calendar-range', '<h3>Theory</h3><p>These tenses look back from a point in the future. The key signal is <strong>"By
                        [time]"</strong> (e.g., By next year, By 2030).</p><h5>1. Future Perfect (Completion)</h5><p><em>Will have + Past Participle</em></p><p>Use it to say something will be <strong>finished</strong> before a specific future time.</p><ul>
<li><em>By 5 PM, I <strong>will have finished</strong> the report.</em> (It will be done).
                    </li>
<li><em>By next year, they <strong>will have built</strong> the bridge.</em></li>
</ul><h5>2. Future Perfect Continuous (Duration)</h5><p><em>Will have been + Verb-ing</em></p><p>Use it to emphasize <strong>how long</strong> an action will have been in progress at a
                    future point.</p><ul>
<li><em>By 5 PM, I <strong>will have been working</strong> for 8 hours.</em> (Emphasis on
                        the 8 hours process).</li>
<li><em>By the time he retires, he <strong>will have been teaching</strong> for 40
                            years.</em></li>
</ul><h5>Summary Table</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Tense</th>
<th>Focus</th>
<th>Structure</th>
</tr>
</thead>
<tbody>
<tr>
<td>Future Perfect</td>
<td>Completion / Result</td>
<td>will have done</td>
</tr>
<tr>
<td>Future Perfect Continuous</td>
<td>Duration / Process</td>
<td>will have been doing</td>
</tr>
</tbody>
</table>
</div>', '{"games": [{"type": "multiple_choice", "title": "Future Duration", "instruction": "Choose the correct Future Perfect Continuous form.", "questions": [{"q": "By next year, I ______ (live) here for ten years.", "options": ["will have been living", "will be living", "will have lived"], "a": "will have been living"}, {"q": "In June, she ______ (work) for this company for 5 years.", "options": ["will have been working", "will be working", "has been working"], "a": "will have been working"}, {"q": "By the time you arrive, we ______ (wait) for 2 hours.", "options": ["will have been waiting", "will be waiting", "have been waiting"], "a": "will have been waiting"}, {"q": "How long ______ (study) when you graduate?", "options": ["will you have been studying", "will you study", "are you studying"], "a": "will you have been studying"}, {"q": "I ______ (sleep) for 8 hours by morning.", "options": ["will have been sleeping", "will sleep", "will be sleeping"], "a": "will have been sleeping"}]}, {"type": "fill_in", "title": "Future Perfect Continuous Fill B2", "instruction": "Type: will have been + verb-ing.", "questions": [{"q": "I ______ (work) here for a year.", "a": "will have been working"}, {"q": "She ______ (study) for 5 hours.", "a": "will have been studying"}, {"q": "We ______ (live) in London.", "a": "will have been living"}, {"q": "They ______ (wait) for us.", "a": "will have been waiting"}, {"q": "He ______ (run) 10 miles.", "a": "will have been running"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (25, 'B2', 'Mixed Conditionals', 'Combine past and present in conditionals', 'bi-diagram-2', '<h3>Theory</h3><p>Mixed Conditionals combine elements of Type 2 (Present/unreal) and Type 3 (Past/unreal) when the
                    time of the condition is different from the time of the result.</p><h5>1. Past Action → Present Result (Type 3 + Type 2)</h5><p><strong>If + Past Perfect</strong> (Past), ... <strong>would + Base Verb</strong> (Present).</p><ul>
<li><em>If I <strong>had won</strong> the lottery (yesterday), I <strong>would be</strong> rich
                            (now).</em></li>
<li><em>If he <strong>hadn''t eaten</strong> the sushi (last night), he <strong>wouldn''t
                                be</strong> sick (today).</em></li>
</ul><h5>2. Present State → Past Result (Type 2 + Type 3)</h5><p><strong>If + Past Simple</strong> (Present/General), ... <strong>would have + Participle</strong>
                    (Past).</p><ul>
<li><em>If I <strong>spoke</strong> French (general ability), I <strong>would have
                                moved</strong> to Paris (last year).</em></li>
<li><em>If I <strong>were</strong> taller (general state), I <strong>would have joined</strong>
                            the NBA team (in 2010).</em></li>
</ul>', '{"games": [{"type": "multiple_choice", "title": "Past/Present Mix", "instruction": "Choose the correct mixed conditional structure.", "questions": [{"q": "If I had studied harder (past), I ______ (now) a doctor.", "options": ["would be", "would have been", "will be"], "a": "would be"}, {"q": "If I were rich (present), I ______ (past) that car.", "options": ["would have bought", "would buy", "bought"], "a": "would have bought"}, {"q": "If she had won the race (past), she ______ (now) the champion.", "options": ["would be", "would have been", "is"], "a": "would be"}, {"q": "If they lived in Spain (present), they ______ (past) us yesterday.", "options": ["would have visited", "would visit", "visited"], "a": "would have visited"}, {"q": "If he hadn''t lost his job (past), he ______ (now) have more money.", "options": ["would", "will", "would have"], "a": "would"}]}, {"type": "fill_in", "title": "Mixed Conditional Fill B2", "instruction": "Type the correct verb form (e.g., would be, would have gone).", "questions": [{"q": "If I hadn''t missed the bus, I ______ (be) here now.", "a": "would be"}, {"q": "If she were taller, she ______ (get) the part.", "a": "would have got"}, {"q": "If they had known, they ______ (not be) in this mess.", "a": "wouldn''t be"}, {"q": "If I spoke French, I ______ (move) to Paris last year.", "a": "would have moved"}, {"q": "If he had more time, he ______ (help) us yesterday.", "a": "would have helped"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (1, 'C1', 'Phrasal Verbs', 'Master complex multi-word verbs for natural expression', 'bi-arrow-repeat', '<h3>Theory</h3><p>Phrasal verbs are multi-word verbs consisting of a <strong>verb</strong> plus one or more
                    <strong>particles</strong> (prepositions or adverbs). In C1, mastering complex and less common
                    phrasal verbs is essential for natural-sounding English.
                </p><h5>Types of Phrasal Verbs</h5><ul>
<li><strong>Transitive vs. Intransitive:</strong> Transitive verbs need an object (e.g., <em>bring
                            up a topic</em>). Intransitive verbs do not (e.g., <em>the plane took off</em>).</li>
<li><strong>Separable vs. Inseparable:</strong>
<ul>
<li><strong>Separable:</strong> The object can go between the verb and particle (e.g.,
                                <em>turn <strong>it</strong> off</em>).
                            </li>
<li><strong>Inseparable:</strong> The object must follow the particle (e.g., <em>look after
                                    <strong>him</strong></em>).</li>
</ul>
</li>
<li><strong>Three-word Phrasal Verbs:</strong> These are always inseparable (e.g., <em>look forward
                            to</em>, <em>put up with</em>).</li>
</ul><h5>Essential C1 Phrasal Verbs</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Phrasal Verb</th>
<th>Meaning</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Brush up on</strong></td>
<td>Refresh knowledge/skill</td>
<td><em>I need to <strong>brush up on</strong> my Spanish before the trip.</em></td>
</tr>
<tr>
<td><strong>Come up against</strong></td>
<td>Face a difficulty/obstacle</td>
<td><em>We <strong>came up against</strong> a lot of opposition.</em></td>
</tr>
<tr>
<td><strong>Do away with</strong></td>
<td>Abolish, get rid of</td>
<td><em>They want to <strong>do away with</strong> the old regulations.</em></td>
</tr>
<tr>
<td><strong>Get through to</strong></td>
<td>Make someone understand</td>
<td><em>I can''t seem to <strong>get through to</strong> him.</em></td>
</tr>
<tr>
<td><strong>Look down on</strong></td>
<td>Feel superior to</td>
<td><em>She <strong>looks down on</strong> people who don''t have a degree.</em></td>
</tr>
<tr>
<td><strong>Make up for</strong></td>
<td>Compensate for</td>
<td><em>He bought her flowers to <strong>make up for</strong> being late.</em></td>
</tr>
<tr>
<td><strong>Put up with</strong></td>
<td>Tolerate</td>
<td><em>I won''t <strong>put up with</strong> this behavior anymore.</em></td>
</tr>
<tr>
<td><strong>Stand up for</strong></td>
<td>Defend/Support</td>
<td><em>You must <strong>stand up for</strong> your rights.</em></td>
</tr>
<tr>
<td><strong>Talk out of</strong></td>
<td>Persuade not to do</td>
<td><em>She <strong>talked him out of</strong> quitting his job.</em></td>
</tr>
<tr>
<td><strong>Walk out on</strong></td>
<td>Abandon</td>
<td><em>He <strong>walked out on</strong> his family ten years ago.</em></td>
</tr>
</tbody>
</table>
</div>', '{"games": [{"type": "multiple_choice", "title": "Advanced Phrasal Verbs", "instruction": "Choose the correct phrasal verb for the context.", "questions": [{"q": "I can''t ______ what he is saying.", "options": ["make out", "take in", "get across"], "a": "make out"}, {"q": "She ______ his offer for help.", "options": ["turned down", "looked into", "stood by"], "a": "turned down"}, {"q": "We need to ______ the problem.", "options": ["look into", "go through", "bring up"], "a": "look into"}, {"q": "He ______ a brilliant idea.", "options": ["came up with", "went along with", "caught up with"], "a": "came up with"}, {"q": "Don''t ______ what they say.", "options": ["put up with", "fall behind", "keep up with"], "a": "put up with"}]}, {"type": "fill_in", "title": "Phrasal Fill C1", "instruction": "Type the missing particle (in, out, off, up, down).", "questions": [{"q": "I''ll look ______ the matter immediately.", "a": "into"}, {"q": "The meeting was called ______.", "a": "off"}, {"q": "She broke ______ when she heard the news.", "a": "down"}, {"q": "We''ve run ______ of milk.", "a": "out"}, {"q": "He came ______ with a cold.", "a": "down"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (2, 'C1', 'Gerund & Infinitive', 'Understand meaning changes with gerund vs infinitive', 'bi-braces', '<h3>Theory</h3><p>At the C1 level, the focus shifts to verbs that can take <strong>both</strong> a gerund and an
                    infinitive but with a <strong>change in meaning</strong>. Understanding these nuances is key to
                    precision.</p><h5>Verbs with Meaning Changes</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Verb</th>
<th>+ Gerund (ing)</th>
<th>+ Infinitive (to)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Remember</strong></td>
<td><em>Memory of a past action</em><br/>I remember <strong>locking</strong> the door. (I
                                    have a memory of doing it)</td>
<td><em>Task/Duty to perform</em><br/>Remember <strong>to lock</strong> the door. (Don''t
                                    forget to do it)</td>
</tr>
<tr>
<td><strong>Forget</strong></td>
<td><em>Memory of a past action (often negative)</em><br/>I''ll never forget
                                    <strong>seeing</strong> the Alps.
                                </td>
<td><em>Task/Duty not performed</em><br/>I forgot <strong>to buy</strong> milk.</td>
</tr>
<tr>
<td><strong>Stop</strong></td>
<td><em>Quit an activity</em><br/>He stopped <strong>smoking</strong>. (He doesn''t smoke
                                    anymore)</td>
<td><em>Pause to do something else</em><br/>He stopped <strong>to smoke</strong>. (He
                                    paused his walk to have a cigarette)</td>
</tr>
<tr>
<td><strong>Try</strong></td>
<td><em>Experiment/Method</em><br/>Try <strong>adding</strong> unlimited data. (See if
                                    that solves the problem)</td>
<td><em>Attempt (often difficult/failed)</em><br/>I tried <strong>to lift</strong> the
                                    box, but it was too heavy.</td>
</tr>
<tr>
<td><strong>Regret</strong></td>
<td><em>Sorry about the past</em><br/>I regret <strong>saying</strong> that.</td>
<td><em>Sorry to announce bad news</em><br/>We regret <strong>to inform</strong> you that
                                    you failed.</td>
</tr>
<tr>
<td><strong>Mean</strong></td>
<td><em>Involve/Result in</em><br/>A new job means <strong>moving</strong> house.</td>
<td><em>Intend</em><br/>I didn''t mean <strong>to hurt</strong> you.</td>
</tr>
</tbody>
</table>
</div><h5>Real-Life Scenarios</h5><p>Applying these distinctions in everyday situations:</p><div class="row">
<div class="col-md-6">
<div class="card bg-dark border-light mb-3">
<div class="card-body">
<h6 class="card-title text-info"><i class="bi bi-briefcase"></i> Professional Context
                                </h6>
<ul>
<li><strong>Bad News (HR/Formal):</strong> "We <em>regret to inform</em> you that
                                        the position has been filled." (Standard rejection phrase)</li>
<li><strong>Apology (Colleague):</strong> "I <em>regret speaking</em> so harshly in
                                        the meeting." (Feeling sorry for past behavior)</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3">
<div class="card-body">
<h6 class="card-title text-warning"><i class="bi bi-cpu"></i> Tech Support</h6>
<ul>
<li><strong>Troubleshooting (Method):</strong> "Have you <em>tried restarting</em>
                                        the router?" (A suggested solution)</li>
<li><strong>Failed Effort (Difficulty):</strong> "I <em>tried to install</em> the
                                        update, but it crashed." (Attempted but failed)</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3">
<div class="card-body">
<h6 class="card-title text-success"><i class="bi bi-heart-pulse"></i> Lifestyle Changes
                                </h6>
<ul>
<li><strong>Quitting a Habit:</strong> "He <em>stopped eating</em> sugar to lose
                                        weight." (Gave it up completely)</li>
<li><strong>Taking a Break:</strong> "He <em>stopped to buy</em> a salad for lunch."
                                        (Paused work to do this)</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3">
<div class="card-body">
<h6 class="card-title text-info"><i class="bi bi-chat-dots"></i> Conversations</h6>
<ul>
<li><strong>Reminders:</strong> "Did you <em>remember to email</em> the client?"
                                        (Task check)</li>
<li><strong>Memories:</strong> "I <em>remember emailing</em> them last week."
                                        (Recalling the action)</li>
</ul>
</div>
</div>
</div>
</div><h5>Perfect Gerunds and Infinitives</h5><p>Use these to emphasize that the action happened in the past relative to the main verb.</p><ul>
<li><strong>Perfect Gerund (having done):</strong> <em>He denied <strong>having stolen</strong> the
                            money.</em></li>
<li><strong>Perfect Infinitive (to have done):</strong> <em>She seems <strong>to have lost</strong>
                            her keys.</em></li>
</ul>', '{"games": [{"type": "multiple_choice", "title": "Gerund or Infinitive?", "instruction": "Choose the correct form for advanced patterns.", "questions": [{"q": "I object ______ like this.", "options": ["to being treated", "to be treated", "being treated"], "a": "to being treated"}, {"q": "He admitted ______ the crime.", "options": ["committing", "to commit", "commit"], "a": "committing"}, {"q": "It''s no use ______ about it.", "options": ["crying", "to cry", "cry"], "a": "crying"}, {"q": "She intended ______ early.", "options": ["to leave", "leaving", "leave"], "a": "to leave"}, {"q": "They recommended ______ the hotel.", "options": ["booking", "to book", "book"], "a": "booking"}]}, {"type": "fill_in", "title": "Advanced Verb Forms C1", "instruction": "Type the correct gerund or infinitive form.", "questions": [{"q": "I look forward ______ (see) you.", "a": "to seeing"}, {"q": "He is used ______ (work) hard.", "a": "to working"}, {"q": "It''s worth ______ (try).", "a": "trying"}, {"q": "I can''t help ______ (laugh).", "a": "laughing"}, {"q": "She avoids ______ (meet) him.", "a": "meeting"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (3, 'C1', '-ing Clauses', 'Combine ideas fluently with participle clauses', 'bi-file-earmark-text', '<h3>Theory</h3><p><strong>Participle clauses</strong> (using <em>ing</em>) are a powerful tool for C1 students. They
                    allow you to combine ideas fluently, reducing wordiness and adding a sophisticated flow to your
                    speech and writing. Essentially, you turn a full clause into a concise phrase.</p><h5>1. The Logic Behind "Reducing" Sentences</h5><p>Think of it as "efficiency." Instead of stopping to start a new subject and verb, you continue the
                    flow. This works best when the <strong>subject is the same</strong> in both parts of the sentence.
                </p><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Function</th>
<th>The Logic</th>
<th>Example Transformation</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Simultaneous Actions</strong><br/>(doing two things at once)</td>
<td>Describes the background action or manner.</td>
<td>"He walked away <em>and he was whistling</em>."<br/>↓<br/>"He walked away
                                    <strong>whistling</strong>."
                                </td>
</tr>
<tr>
<td><strong>Sequential Actions</strong><br/>(one thing happens, then another)</td>
<td>Emphasizes the sequence efficiently.</td>
<td>"<em>After he finished</em> his work, he went
                                    home."<br/>↓<br/>"<strong>Finishing</strong> his work, he went home."</td>
</tr>
<tr>
<td><strong>Reason or Result</strong><br/>(Cause &amp; Effect)</td>
<td>Links the cause directly to the effect.</td>
<td>"<em>Because I didn''t want</em> to be rude, I smiled."<br/>↓<br/>"<strong>Not
                                        wanting</strong> to be rude, I smiled."</td>
</tr>
<tr>
<td><strong>Defining People/Things</strong><br/>(Reduced Relative Clause)</td>
<td>Identifies who or what without "who is" or "that is".</td>
<td>"The guy <em>who is talking</em> to Sarah is rich."<br/>↓<br/>"The guy
                                    <strong>talking</strong> to Sarah is rich."
                                </td>
</tr>
</tbody>
</table>
</div><h5>2. Real-Life Scenarios &amp; Examples</h5><p>Here is how you actually use these in different contexts:</p><div class="row">
<div class="col-md-6">
<div class="card bg-dark border-light mb-3">
<div class="card-body">
<h6 class="card-title text-info"><i class="bi bi-building"></i> In the Workplace</h6>
<ul>
<li><strong>Explaining delays:</strong> "<strong>Realizing</strong> we were over
                                        budget, I paused the project." (Reason)</li>
<li><strong>Describing colleagues:</strong> "Anyone <strong>wishing</strong> to take
                                        leave must apply now." (Definition)</li>
<li><strong>Reporting results:</strong> "The market crashed,
                                        <strong>causing</strong> panic everywhere." (Result)
                                    </li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3">
<div class="card-body">
<h6 class="card-title text-warning"><i class="bi bi-airplane"></i> Travel &amp; Navigation
                                </h6>
<ul>
<li><strong>Giving directions:</strong> "<strong>Walking</strong> down 5th Avenue,
                                        you''ll see the park." (Time/Place)</li>
<li><strong> Describing experiences:</strong> "<strong>Arriving</strong> in Tokyo, I
                                        was overwhelmed by the lights." (Sequence)</li>
<li><strong>Travel mishaps:</strong> "I sat on the wrong train,
                                        <strong>wasting</strong> two hours." (Result)
                                    </li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3">
<div class="card-body">
<h6 class="card-title text-success"><i class="bi bi-chat-quote"></i> Socializing &amp;
                                    Storytelling</h6>
<ul>
<li><strong>Setting the scene:</strong> "<strong>Feeling</strong> hungry, we looked
                                        for a restaurant." (Reason)</li>
<li><strong>Describing action:</strong> "She ran out of the room
                                        <strong>crying</strong>." (Manner)
                                    </li>
<li><strong>Justifying behavior:</strong> "<strong>Not knowing</strong> anyone at
                                        the party, I stood by the food." (Reason - Negative)</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3">
<div class="card-body">
<h6 class="card-title text-primary"><i class="bi bi-pen"></i> Formal/Academic Writing
                                </h6>
<ul>
<li><strong>Analyzing data:</strong> "The study shows a rise in costs,
                                        <strong>suggesting</strong> inflation is high." (Result)
                                    </li>
<li><strong>Referencing:</strong> "Students <strong>taking</strong> this course must
                                        act professionally." (Definition)</li>
<li><strong>Concluding:</strong> "<strong>Having analyzed</strong> the data, we can
                                        conclude..." (Perfect participle for past)</li>
</ul>
</div>
</div>
</div>
</div><h5>3. Common Mistakes to Avoid</h5><ul>
<li><strong>Dangling Participle:</strong> <em>"Walking down the street, the trees looked
                            beautiful."</em> (Incorrect! The trees were not walking. Meaning: <em>"As I walked..."</em>)
                    </li>
<li><strong>Wrong Subject:</strong> Ensure the hidden subject of the <em>-ing</em> phrase is the
                        <strong>same</strong> as the main verb''s subject.
                    </li>
</ul>', '{"games": [{"type": "multiple_choice", "title": "Participle Clauses", "instruction": "Choose the best -ing clause to complete the sentence.", "questions": [{"q": "______ the news, she started to cry.", "options": ["Hearing", "Heard", "Having heard"], "a": "Hearing"}, {"q": "______ in the garden, I found a ring.", "options": ["Working", "Worked", "Having worked"], "a": "Working"}, {"q": "______ all my money, I had to walk home.", "options": ["Having spent", "Spending", "Spent"], "a": "Having spent"}, {"q": "______ the door, I realized it was locked.", "options": ["Approaching", "Approached", "Having approached"], "a": "Approaching"}, {"q": "______ the movie, we went out.", "options": ["Having seen", "Seeing", "Seen"], "a": "Having seen"}]}, {"type": "unscramble", "title": "-ing Clause Order", "instruction": "Order the words to form a sentence with a participle clause.", "questions": [{"q": "hearing she cried the news", "a": "hearing the news she cried"}, {"q": "working to music I love", "a": "i love working to music"}, {"q": "having finished I went home", "a": "having finished i went home"}, {"q": "knowing him she smiled", "a": "knowing him she smiled"}, {"q": "waiting for him she read a book", "a": "waiting for him she read a book"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (4, 'C1', 'Verb Patterns', 'Master sophisticated verb patterns for precision', 'bi-diagram-3', '<h3>Theory</h3><p>Mastering <strong>verb patterns</strong> is essential for natural-sounding English. This review
                    focuses on the most sophisticated patterns used in C1 contexts, moving beyond the basics to look at
                    how choosing the right pattern affects the nuance of your message.</p><h5>1. Common Complicated Patterns</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Pattern</th>
<th>Verbs</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Verb + Object + Infinitive</strong><br/>(Persuasion/Command)</td>
<td><em>urged, persuaded, convinced, forced, forbade, taught</em></td>
<td>"The crisis <strong>forced the company to rethink</strong> its strategy."</td>
</tr>
<tr>
<td><strong>Verb + Preposition + Gerund</strong><br/>(Fixed Phrases)</td>
<td><em>succeeded in, apologized for, insisted on, confessed to, accused of</em></td>
<td>"He <strong>insisted on paying</strong> for the entire meal."</td>
</tr>
<tr>
<td><strong>Verb + (That) Clause</strong><br/>(Reporting/Thinking)</td>
<td><em>claimed, argued, suggested, recommended, anticipated</em></td>
<td>"She <strong>argued that</strong> the data was flawed."<br/><em>(Note: ''Suggested''
                                        never takes an object + infinitive!)</em></td>
</tr>
<tr>
<td><strong>Adjective + Preposition + Gerund</strong><br/>(Feelings/States)</td>
<td><em>accustomed to, capable of, committed to, guilty of</em></td>
<td>"I am not <strong>accustomed to speaking</strong> in public."</td>
</tr>
</tbody>
</table>
</div><h5>2. Real-Life Scenarios</h5><p>Using correct patterns helps you sound professional and precise.</p><div class="row">
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-info"><i class="bi bi-briefcase"></i> Professional
                                    Negotiations</h6>
<ul>
<li><strong>Persuasion:</strong> "We <strong>persuaded the client to sign</strong>
                                        the contract." (Verb + Obj + Inf)</li>
<li><strong>Commitment:</strong> "We are fully <strong>committed to
                                            delivering</strong> quality." (Adj + Prep + Ing)</li>
<li><strong>Leadership:</strong> "I <strong>encourage everyone to share</strong>
                                        their ideas." (Verb + Obj + Inf)</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-warning"><i class="bi bi-gavel"></i> Legal &amp; Formal contexts
                                </h6>
<ul>
<li><strong>Liability:</strong> "They <strong>admitted to falsifying</strong> the
                                        records." (Verb + Prep + Ing)</li>
<li><strong>Prohibition:</strong> "The law <strong>forbids drivers from
                                            texting</strong>." (Verb + Obj + Prep + Ing)</li>
<li><strong>Accusation:</strong> "He was <strong>accused of stealing</strong> the
                                        funds." (Passive + Prep + Ing)</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-success"><i class="bi bi-people"></i> Social &amp; Advice</h6>
<ul>
<li><strong>Recommendation:</strong> "I <strong>suggest visiting</strong> the museum
                                        early." (Verb + Ing)</li>
<li><strong>Warning:</strong> "She <strong>warned me not to trust</strong> him."
                                        (Verb + Obj + Inf)</li>
<li><strong>Apology:</strong> "I <strong>apologize for being</strong> so late."
                                        (Verb + Prep + Ing)</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-primary"><i class="bi bi-journal-text"></i>
                                    Academic/Reporting</h6>
<ul>
<li><strong>Success:</strong> "The team <strong>succeeded in isolating</strong> the
                                        virus." (Verb + Prep + Ing)</li>
<li><strong>Capability:</strong> "This software is <strong>capable of
                                            processing</strong> huge data." (Adj + Prep + Ing)</li>
<li><strong>Attribution:</strong> "The study <strong>aims to prove</strong> the
                                        theory." (Verb + Inf)</li>
</ul>
</div>
</div>
</div>
</div>', '{"questions_count": 5, "games": [{"type": "multiple_choice", "title": "Verb + Object + Verb", "instruction": "Choose the correct pattern.", "questions": [{"q": "I saw him ______ the street.", "options": ["cross", "crossed", "to cross"], "a": "cross"}, {"q": "He made me ______ the truth.", "options": ["tell", "to tell", "telling"], "a": "tell"}, {"q": "I want you ______ this.", "options": ["to do", "do", "doing"], "a": "to do"}, {"q": "We let them ______ early.", "options": ["go", "to go", "going"], "a": "go"}, {"q": "She asked me ______ her.", "options": ["to help", "help", "helping"], "a": "to help"}]}, {"type": "fill_in", "title": "Verb Pattern Fill C1", "instruction": "Type the correct verb form (e.g., do, to do, doing).", "questions": [{"q": "I heard her ______ (sing).", "a": "sing"}, {"q": "They expect us ______ (be) there.", "a": "to be"}, {"q": "He advised me ______ (wait).", "a": "to wait"}, {"q": "Please help me ______ (carry) this.", "a": "carry"}, {"q": "I can''t imagine him ______ (say) that.", "a": "saying"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (5, 'C1', 'Cleft Sentences', 'Add emphasis by splitting sentences with what-clauses', 'bi-lightning-charge', '<h3>Theory</h3><p><strong>Cleft sentences</strong> are used to add <strong>emphasis</strong>. They allow you to
                    "cleave" (split) a sentence into two parts to highlight exactly what is important. It''s the
                    difference between saying "I want coffee" and "<em>What I really want</em> is coffee."</p><h5>1. The Structure</h5><p>The standard pattern for <em>what</em>-clefts is:</p><div class="p-3 bg-dark border border-warning rounded mb-3 text-center">
<span class="text-warning fw-bold">What clause</span> + <span class="text-light fw-bold">BE
                        (is/was)</span> + <span class="text-info fw-bold">Emphasized Information</span>
</div><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Original Sentence</th>
<th>Cleft Sentence (More Emphatic)</th>
</tr>
</thead>
<tbody>
<tr>
<td>"I need a holiday."</td>
<td>"<strong>What I need</strong> is a holiday."</td>
</tr>
<tr>
<td>"He annoyed me by arriving late."</td>
<td>"<strong>What annoyed me</strong> was his late arrival."</td>
</tr>
<tr>
<td>"I enjoyed the music most."</td>
<td>"<strong>What I enjoyed most</strong> was the music."</td>
</tr>
</tbody>
</table>
</div><h5>2. Real-Life Scenarios</h5><p>Use these to control the focus of a conversation.</p><div class="row">
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-info"><i class="bi bi-briefcase"></i> Business &amp; Meetings
                                </h6>
<ul>
<li><strong>Redirecting focus:</strong> "<strong>What we need to discuss</strong> is
                                        the budget, not the timeline."</li>
<li><strong>Summarizing:</strong> "<strong>What this means</strong> is that we are
                                        ahead of schedule."</li>
<li><strong>Problem solving:</strong> "<strong>What happened</strong> was a server
                                        failure."</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-warning"><i class="bi bi-chat-dots"></i> Arguments &amp;
                                    Clarifications</h6>
<ul>
<li><strong>Correcting someone:</strong> "No, <strong>what I said</strong> was that
                                        I <em>might</em> go, not that I <em>will</em>."</li>
<li><strong>Explaining feelings:</strong> "<strong>What bothers me</strong> is the
                                        lack of communication."</li>
<li><strong>Justification:</strong> "<strong>What I was trying to do</strong> was
                                        help."</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-success"><i class="bi bi-heart"></i> Expressing Desires</h6>
<ul>
<li><strong>Strong preference:</strong> "<strong>What I''d really love</strong> is a
                                        quiet weekend."</li>
<li><strong>Ambition:</strong> "<strong>What she wants</strong> is to become a CEO."
                                    </li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-primary"><i class="bi bi-lightbulb"></i> Ideas &amp; Proposals
                                </h6>
<ul>
<li><strong>Proposing action:</strong> "<strong>What we should do</strong> is ask
                                        for an extension."</li>
<li><strong>Highlighting causes:</strong> "<strong>What caused the delay</strong>
                                        was the traffic."</li>
</ul>
</div>
</div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "It or What?", "instruction": "Choose the best cleft sentence structure.", "questions": [{"q": "______ I need is a vacation.", "options": ["What", "It", "Which"], "a": "What"}, {"q": "______ was John who told me.", "options": ["It", "What", "Who"], "a": "It"}, {"q": "______ happened was very strange.", "options": ["What", "It", "That"], "a": "What"}, {"q": "______ I appreciate is your honesty.", "options": ["What", "It", "That"], "a": "What"}, {"q": "It was in London ______ we first met.", "options": ["that", "which", "where"], "a": "that"}]}, {"type": "unscramble", "title": "Cleft Order C1", "instruction": "Order the words to form a cleft sentence.", "questions": [{"q": "is need coffee what I", "a": "what i need is coffee"}, {"q": "told John me was it who", "a": "it was john who told me"}, {"q": "wanted you what is this", "a": "is this what you wanted"}, {"q": "met we where Paris was it", "a": "it was paris where we met"}, {"q": "did what he was wrong", "a": "what he did was wrong"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (6, 'C1', 'Compound Adjectives', 'Build rich descriptions with hyphenated adjectives', 'bi-plus-circle', '<h3>Theory</h3><p><strong>Compound adjectives</strong> combine two or more words to modify a noun. They act as a single
                    idea and are usually <strong>hyphenated</strong> when they appear <em>before</em> the noun.</p><h5>1. Common Combinations</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Type</th>
<th>Examples</th>
<th>Used in a Sentence</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Number + Noun (Singular)</strong></td>
<td><em>five-minute, ten-year, two-way</em></td>
<td>"It''s a <strong>ten-minute</strong> walk." (NOT ten-minutes)</td>
</tr>
<tr>
<td><strong>Adjective/Adverb + Participle</strong></td>
<td><em>good-looking, well-known, fast-paced</em></td>
<td>"He is a <strong>well-known</strong> actor."</td>
</tr>
<tr>
<td><strong>Noun + Adjective</strong></td>
<td><em>sugar-free, world-famous, ice-cold</em></td>
<td>"This drink is <strong>sugar-free</strong>."</td>
</tr>
<tr>
<td><strong>Noun + Participle</strong></td>
<td><em>mouth-watering, record-breaking, sun-dried</em></td>
<td>"It was a <strong>record-breaking</strong> event."</td>
</tr>
</tbody>
</table>
</div><h5>2. Real-Life Scenarios</h5><p>Enhance your vocabulary with these descriptive terms.</p><div class="row">
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-info"><i class="bi bi-briefcase"></i> Work &amp; Career</h6>
<ul>
<li><strong>Job types:</strong> "A <strong>part-time</strong> job" vs "A
                                        <strong>full-time</strong> career."
                                    </li>
<li><strong>Experience:</strong> "We need a <strong>highly-skilled</strong>
                                        engineer."</li>
<li><strong>Planning:</strong> "This is a <strong>long-term</strong> strategy."</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-warning"><i class="bi bi-person-badge"></i> Personality &amp;
                                    People</h6>
<ul>
<li><strong>Attitude:</strong> "She is exceedingly <strong>open-minded</strong>."
                                    </li>
<li><strong>Temperament:</strong> "He''s very <strong>easy-going</strong> and
                                        relaxed."</li>
<li><strong>Appearance:</strong> "A <strong>broad-shouldered</strong> man stood at
                                        the door."</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-success"><i class="bi bi-cart"></i> Products &amp; Marketing</h6>
<ul>
<li><strong>Quality:</strong> "This is a <strong>top-quality</strong> product."</li>
<li><strong>Feature:</strong> "We only use <strong>eco-friendly</strong> materials."
                                    </li>
<li><strong>Innovation:</strong> "A <strong>state-of-the-art</strong> facility."
                                    </li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-primary"><i class="bi bi-clock"></i> Time &amp; Duration</h6>
<ul>
<li><strong>Urgency:</strong> "A <strong>last-minute</strong> decision."</li>
<li><strong>Span:</strong> "A <strong>day-to-day</strong> operation."</li>
<li><strong>Endurance:</strong> "A <strong>never-ending</strong> story."</li>
</ul>
</div>
</div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "Hyphenated Adjectives", "instruction": "Choose the correct compound adjective.", "questions": [{"q": "A ______ man.", "options": ["well-known", "well known", "known-well"], "a": "well-known"}, {"q": "It''s a ______ decision.", "options": ["fast-paced", "fast paced", "paced-fast"], "a": "fast-paced"}, {"q": "A ______ street.", "options": ["one-way", "one way", "way-one"], "a": "one-way"}, {"q": "He is ______.", "options": ["middle-aged", "middle aged", "aged-middle"], "a": "middle-aged"}, {"q": "It''s an ______ book.", "options": ["easy-to-read", "easy to read", "read-easy-to"], "a": "easy-to-read"}]}, {"type": "fill_in", "title": "Compound Fill C1", "instruction": "Type the compound adjective (use hyphens).", "questions": [{"q": "A building with 10 floors is a ______ building.", "a": "ten-story"}, {"q": "A man who is 50 years old is a ______ man.", "a": "fifty-year-old"}, {"q": "A job that takes 40 hours is a ______ job.", "a": "full-time"}, {"q": "An actor who is famous is ______.", "a": "well-known"}, {"q": "A car that is used is ______.", "a": "second-hand"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (7, 'C1', 'Reporting Clauses', 'Report speech and ideas with advanced structures', 'bi-chat-quote', '<h3>Theory</h3><p>Advanced reporting goes beyond "he said" or "she told me." In C1, we use specific <strong>reporting
                        verbs</strong> that convey the <em>intention</em>, <em>attitude</em>, or <em>function</em> of
                    the original speech (e.g., persuading, warning, denying).</p><h5>1. Key Verb Patterns</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Pattern</th>
<th>Verbs</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Verb + Infinitive</strong></td>
<td><em>offer, refuse, agree, promise, threaten</em></td>
<td>"He <strong>refused to sign</strong> the deal."</td>
</tr>
<tr>
<td><strong>Verb + Object + Infinitive</strong></td>
<td><em>advise, encourage, warn, remind, persuade</em></td>
<td>"She <strong>reminded me to call</strong>."</td>
</tr>
<tr>
<td><strong>Verb + (that) Clause</strong></td>
<td><em>admit, complain, deny, explain, suggest</em></td>
<td>"They <strong>complained that</strong> the service was slow."</td>
</tr>
<tr>
<td><strong>Verb + Gerund (or Prep + Gerund)</strong></td>
<td><em>deny, suggest, admit to, apologize for, insist on</em></td>
<td>"He <strong>denied stealing</strong> the funds."</td>
</tr>
</tbody>
</table>
</div><h5>2. Real-Life Scenarios</h5><p>Choose the verb that captures the <em>action</em> strictly.</p><div class="row">
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-info"><i class="bi bi-shield-exclamation"></i> Conflict &amp;
                                    Defense</h6>
<ul>
<li><strong>Defending:</strong> "He <strong>denied knowing</strong> anything about
                                        the leak." (Not ''He said he didn''t know'')</li>
<li><strong>Attacking:</strong> "She <strong>accused him of lying</strong>."</li>
<li><strong>Resisting:</strong> "I <strong>refused to answer</strong>."</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-warning"><i class="bi bi-lightbulb"></i> Suggestions &amp; Plans
                                </h6>
<ul>
<li><strong>Idea:</strong> "He <strong>suggested meeting</strong> later." (Common
                                        error: ''suggested to meet'' is WRONG)</li>
<li><strong>Persuasion:</strong> "They <strong>urged us to accept</strong> the
                                        offer."</li>
<li><strong>Agreement:</strong> "We <strong>agreed to review</strong> the terms."
                                    </li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-success"><i class="bi bi-chat-heart"></i> Social &amp; Emotional
                                </h6>
<ul>
<li><strong>Regret:</strong> "She <strong>apologized for being</strong> late."</li>
<li><strong>Gratitude:</strong> "He <strong>thanked us for coming</strong>."</li>
<li><strong>Assurance:</strong> "I <strong>promised to help</strong>."</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-primary"><i class="bi bi-megaphone"></i> Professional
                                    Reporting</h6>
<ul>
<li><strong>Announcement:</strong> "The CEO <strong>announced that</strong> she
                                        would resign."</li>
<li><strong>Explanation:</strong> "He <strong>explained that</strong> it was a
                                        technical error."</li>
<li><strong>Insistence:</strong> "The client <strong>insisted on seeing</strong> the
                                        manager."</li>
</ul>
</div>
</div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "It is claimed...", "instruction": "Choose the correct passive reporting structure.", "questions": [{"q": "It is ______ that he is rich.", "options": ["claimed", "claiming", "claim"], "a": "claimed"}, {"q": "He is ______ to be in London.", "options": ["said", "saying", "said that"], "a": "said"}, {"q": "It was ______ that the party was a success.", "options": ["reported", "reporting", "report"], "a": "reported"}, {"q": "There are ______ to be many experts here.", "options": ["believed", "believe", "believing"], "a": "believed"}, {"q": "The plan is ______ to be very expensive.", "options": ["thought", "think", "thinking"], "a": "thought"}]}, {"type": "unscramble", "title": "Reporting Order C1", "instruction": "Order the words to form a reporting sentence.", "questions": [{"q": "is it that he claimed rich", "a": "it is claimed that he is rich"}, {"q": "said he in Paris is to be", "a": "he is said to be in paris"}, {"q": "it was that the success reported party", "a": "it was reported that the party was a success"}, {"q": "believed many there experts to be are", "a": "there are believed to be many experts"}, {"q": "to be is the plan expensive thought", "a": "the plan is thought to be expensive"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (8, 'C1', 'Reporting in Passive', 'Use passive structures for formal reporting', 'bi-arrow-left-right', '<h3>Theory</h3><p>We use <strong>passive reporting verbs</strong> to distance ourselves from an opinion or fact, often
                    in formal news or academic writing. It implies "people in general say this" rather than a specific
                    person.</p><h5>1. The Two Main Structures</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Structure</th>
<th>Formula</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>A. Impersonal "It"</strong></td>
<td><em>It + be + past partic. + that...</em></td>
<td>"<strong>It is said that</strong> he is a genius."</td>
</tr>
<tr>
<td><strong>B. Personal Subject</strong></td>
<td><em>Subject + be + past partic. + to infinitive</em></td>
<td>"<strong>He is said to be</strong> a genius."</td>
</tr>
</tbody>
</table>
</div><h5>2. Handling the Past (The "Perfect" Infinitive)</h5><p>When the reported action happened <em>before</em> the reporting, use <strong>to have + past
                        participle</strong>.</p><div class="p-3 bg-dark border border-light rounded mb-3">
<p class="mb-1"><i class="bi bi-arrow-right-circle text-info"></i> Active: "People believe he
                        <strong>stole</strong> the car." (Past)
                    </p>
<p class="mb-0"><i class="bi bi-check-circle-fill text-success"></i> Passive: "He is believed
                        <strong>to have stolen</strong> the car."
                    </p>
</div><h5>3. Real-Life Scenarios</h5><p>Common in media, law, and formal speculation.</p><div class="row">
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-info"><i class="bi bi-newspaper"></i> News &amp; Media</h6>
<ul>
<li><strong>Unverified Info:</strong> "The suspect <strong>is alleged to be</strong>
                                        hiding abroad."</li>
<li><strong>General Opinion:</strong> "The economy <strong>is expected to
                                            recover</strong> soon."</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-warning"><i class="bi bi-bank"></i> Business &amp; Finance</h6>
<ul>
<li><strong>Projections:</strong> "The deal <strong>is thought to be</strong> worth
                                        millions."</li>
<li><strong>History:</strong> "The company <strong>is known to have started</strong>
                                        in a garage."</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-success"><i class="bi bi-book"></i> Academic &amp; Science</h6>
<ul>
<li><strong>Theories:</strong> "The universe <strong>is believed to be</strong>
                                        expanding."</li>
<li><strong>Findings:</strong> "This herb <strong>is said to cure</strong>
                                        headaches."</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-primary"><i class="bi bi-people"></i> Rumors &amp; Myths</h6>
<ul>
<li><strong>Legends:</strong> " The castle <strong>is said to be</strong> haunted."
                                    </li>
<li><strong>Gossip:</strong> "She <strong>is rumored to have won</strong> the
                                        lottery."</li>
</ul>
</div>
</div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "He is said to...", "instruction": "Choose the correct reporting in passive form.", "questions": [{"q": "She is said ______ a genius.", "options": ["to be", "to being", "be"], "a": "to be"}, {"q": "They are reported ______ the country.", "options": ["to have left", "to leave", "leaving"], "a": "to have left"}, {"q": "Diamonds are thought ______ in this mine.", "options": ["to be found", "to find", "finding"], "a": "to be found"}, {"q": "He is believed ______ the crime.", "options": ["to have committed", "to commit", "committing"], "a": "to have committed"}, {"q": "The company is expected ______ a profit.", "options": ["to make", "making", "to making"], "a": "to make"}]}, {"type": "fill_in", "title": "Passive Reporting Fill C1", "instruction": "Type: to be, to have been, or to have + past participle.", "questions": [{"q": "He is alleged ______ (steal) the car.", "a": "to have stolen"}, {"q": "She is known ______ (be) a great doctor.", "a": "to be"}, {"q": "The painting is thought ______ (be) a fake.", "a": "to be"}, {"q": "The soldiers are reported ______ (cross) the border.", "a": "to have crossed"}, {"q": "The missing boy is feared ______ (die).", "a": "to have died"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (9, 'C1', 'Sentence Adverbs', 'Use adverbs to comment on entire sentences', 'bi-text-left', '<h3>Theory</h3><p><strong>Sentence adverbs</strong> don''t just modify a verb; they modify the <em>entire sentence</em>.
                    They allow the speaker to express their <strong>attitude</strong>, <strong>opinion</strong>, or
                    <strong>judgment</strong> about the statement.
                </p><h5>1. Usage and Meaning</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Function</th>
<th>Adverbs</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Certainty &amp; Reality</strong></td>
<td><em>Clearly, Obviously, Undoubtedly, Actually</em></td>
<td>"<strong>Clearly</strong>, we made a mistake."</td>
</tr>
<tr>
<td><strong>Opinion &amp; Judgment</strong></td>
<td><em>Foolishly, Wisely, Rightly, Strangely</em></td>
<td>"<strong>Wisely</strong>, she decided to stay home."</td>
</tr>
<tr>
<td><strong>Frankness &amp; Truth</strong></td>
<td><em>Frankly, Honestly, Sincerely, Admittedly</em></td>
<td>"<strong>Fredkly</strong>, I don''t care."</td>
</tr>
<tr>
<td><strong>Surprise &amp; Expectation</strong></td>
<td><em>Surprisingly, Predictably, Cynically</em></td>
<td>"<strong>Surprisingly</strong>, he won the race."</td>
</tr>
</tbody>
</table>
</div><h5>2. Real-Life Scenarios</h5><p>Set the tone of your conversation effectively.</p><div class="row">
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-info"><i class="bi bi-emoji-sunglasses"></i> Confidence</h6>
<ul>
<li>"<strong>Undoubtedly</strong>, this is the best solution." (Shows total
                                        conviction)</li>
<li>"<strong>Naturally</strong>, I accepted the offer." (It was expected)</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-warning"><i class="bi bi-emoji-frown"></i> Unfortunate Events
                                </h6>
<ul>
<li>"<strong>Regrettably</strong>, we cannot offer you the job." (Formal rejection)
                                    </li>
<li>"<strong>Sadly</strong>, the shop has closed down."</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-success"><i class="bi bi-chat-quote"></i> Concession</h6>
<ul>
<li>"<strong>Admittedly</strong>, it''s expensive, but it''s worth it." (Agreeing with
                                        a counter-point)</li>
<li>"<strong>Ideally</strong>, we would finish today." (Stating the perfect
                                        scenario)</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-primary"><i class="bi bi-lightning"></i> Unexpected Turns
                                </h6>
<ul>
<li>"<strong>Ironically</strong>, the fire station burned down."</li>
<li>"<strong>Curiously</strong>, the box was empty."</li>
</ul>
</div>
</div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "Fortunately or Honestly?", "instruction": "Choose the best sentence adverb.", "questions": [{"q": "______, I don''t know the answer.", "options": ["Honestly", "Luckily", "Presumably"], "a": "Honestly"}, {"q": "______, we arrived just in time.", "options": ["Luckily", "Honestly", "Clearly"], "a": "Luckily"}, {"q": "______, he won''t be coming.", "options": ["Presumably", "Luckily", "Honestly"], "a": "Presumably"}, {"q": "______, the test was very easy.", "options": ["Clearly", "Presumably", "Luckily"], "a": "Clearly"}, {"q": "______, nobody was hurt.", "options": ["Fortunately", "Clearly", "Presumably"], "a": "Fortunately"}]}, {"type": "unscramble", "title": "Adverb Order C1", "instruction": "Position the sentence adverb correctly.", "questions": [{"q": "luckily we arrived in time", "a": "luckily we arrived in time"}, {"q": "honestly I don''t know", "a": "honestly i don''t know"}, {"q": "he won''t clearly come", "a": "clearly he won''t come"}, {"q": "be busy he presumably will", "a": "presumably he will be busy"}, {"q": "was easy surprisingly the test", "a": "surprisingly the test was easy"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (10, 'C1', 'Double Comparatives', 'Express proportional change with the...the structures', 'bi-bar-chart-steps', '<h3>Theory</h3><p>We use <strong>double comparatives</strong> to show cause and effect: how one change leads to
                    another. The structure is unique because it uses "The" with a comparative adjective or adverb, which
                    is usually reserved for superlatives.</p><h5>1. The Structure</h5><div class="p-3 bg-dark border border-danger rounded mb-3 text-center">
<span class="text-danger fw-bold">The</span> + <span class="text-light">comparative (+ subject +
                        verb)</span>, <br/>
<span class="text-danger fw-bold">The</span> + <span class="text-light">comparative (+ subject +
                        verb)</span>
</div><h5>2. Common Variations</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Variation</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Standard (with verbs)</strong></td>
<td>"The <strong>harder</strong> you work, the <strong>luckier</strong> you get."</td>
</tr>
<tr>
<td><strong>Short / Set Phrases</strong></td>
<td>"The <strong>more</strong>, the <strong>merrier</strong>." (No verbs)</td>
</tr>
<tr>
<td><strong>"The Less"</strong></td>
<td>"The <strong>less</strong> you worry, the <strong>happier</strong> you will be."
                                </td>
</tr>
</tbody>
</table>
</div><h5>3. Real-Life Scenarios</h5><p>Express correlations and trade-offs.</p><div class="row">
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-info"><i class="bi bi-graph-up-arrow"></i> Growth &amp; Progress
                                </h6>
<ul>
<li>"The <strong>more</strong> we practice, the <strong>better</strong> we become."
                                    </li>
<li>"The <strong>higher</strong> you climb, the <strong>harder</strong> the fall."
                                    </li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-warning"><i class="bi bi-currency-dollar"></i> Cost &amp; Value
                                </h6>
<ul>
<li>"The <strong>older</strong> the wine, the <strong>more expensive</strong> it
                                        is."</li>
<li>"The <strong>sooner</strong>, the <strong>better</strong>."</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-success"><i class="bi bi-people-fill"></i> Social Dynamics
                                </h6>
<ul>
<li>"The <strong>richer</strong> he got, the <strong>more lonely</strong> he
                                        became."</li>
<li>"The <strong>more</strong> you give, the <strong>more</strong> you receive."
                                    </li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-primary"><i class="bi bi-gear-wide-connected"></i> Complexity
                                </h6>
<ul>
<li>"The <strong>more complex</strong> the system, the <strong>more prone</strong>
                                        to errors it is."</li>
<li>"The <strong>less</strong> said, the <strong>better</strong>."</li>
</ul>
</div>
</div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "The more, the better", "instruction": "Choose the correct double comparative structure.", "questions": [{"q": "The ______ I study, the ______ I learn.", "options": ["more / more", "more / better", "better / more"], "a": "more / more"}, {"q": "The ______ it is, the ______ I like it.", "options": ["hotter / more", "hottest / most", "hot / more"], "a": "hotter / more"}, {"q": "The ______ we leave, the ______ we''ll arrive.", "options": ["earlier / sooner", "early / soon", "earliest / soonest"], "a": "earlier / sooner"}, {"q": "The ______ money he has, the ______ he wants.", "options": ["more / more", "less / less", "much / more"], "a": "more / more"}, {"q": "The ______ you run, the ______ you will be.", "options": ["faster / fitter", "fast / fit", "fastest / fittest"], "a": "faster / fitter"}]}, {"type": "unscramble", "title": "Double Comparative Order C1", "instruction": "Order the words to form a double comparative.", "questions": [{"q": "the more the I study learn I more", "a": "the more i study the more i learn"}, {"q": "the the sooner better", "a": "the sooner the better"}, {"q": "the the happier richer I I am", "a": "the richer i am the happier i am"}, {"q": "the older you get the wiser you are", "a": "the older you get the wiser you are"}, {"q": "the the harder work more you you earn", "a": "the harder you work the more you earn"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (11, 'C1', 'Will & Would Habits', 'Describe present and past habits naturally', 'bi-clock-history', '<h3>Theory</h3><p>Beyond the future, <strong>will</strong> and <strong>would</strong> describe characteristic behavior,
                    habits, and general truths. This is often more descriptive or emotional than simple present/past
                    tenses.</p><h5>1. Present Habits &amp; Truths (Will)</h5><p>Used for characteristic behavior (often annoying) or scientific facts.</p><div class="p-3 bg-dark border border-warning rounded mb-3">
<p class="mb-1"><i class="bi bi-person-fill text-warning"></i> <strong>Characteristic
                            Behaviour:</strong> "She''ll sit there for hours without speaking."</p>
<p class="mb-1"><i class="bi bi-exclamation-circle text-danger"></i> <strong>Criticism:</strong> "He
                        <strong>will</strong> leave his socks on the floor!" (Annoyance)
                    </p>
<p class="mb-1"><i class="bi bi-lightbulb text-info"></i> <strong>General Truths:</strong>
                        "Accidents <strong>will</strong> happen." (Fact of life)</p>
<p class="mb-0"><i class="bi bi-gear text-light"></i> <strong>Inanimate Objects:</strong> "The car
                        <strong>won''t</strong> start." (Refusal)
                    </p>
</div><h5>2. Past Habits (Would)</h5><p>Used for repeated past actions (nostalgia), often with "always" or "never". similar to "used to", but
                    <strong>only for actions</strong>.
                </p><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Tense</th>
<th>Examples</th>
<th>Usage Note</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Would</strong> (Action)</td>
<td>
                                    "We <strong>would play</strong> until sunset."<br/>
                                    "Dad <strong>would bake</strong> bread on Sundays."
                                </td>
<td>Focus on ritual/memory.</td>
</tr>
<tr>
<td><strong>Used to</strong> (State)</td>
<td>
                                    "I <strong>used to live</strong> in Paris."<br/>
                                    "He <strong>used to be</strong> a doctor."
                                </td>
<td>States (Stative verbs). ''Would'' is incorrect.</td>
</tr>
</tbody>
</table>
</div><h5>3. Real-Life Scenarios</h5><div class="row">
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-info"><i class="bi bi-clock-history"></i> Nostalgia</h6>
<ul>
<li>"On Sundays, my grandmother <strong>would bake</strong> fresh bread."</li>
<li>"We <strong>would always go</strong> to the same beach."</li>
<li>"My father <strong>would read</strong> us looking stories before bed."</li>
<li>"We <strong>would sit</strong> on the porch and watch the rain."</li>
<li>"She <strong>would</strong> often <strong>bring</strong> us treats."</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-danger"><i class="bi bi-lightning-fill"></i> Annoyances</h6>
<ul>
<li>"He <strong>will</strong> keep interrupting me when I speak!"</li>
<li>"The car <strong>won''t</strong> start!" (Refusal to function)</li>
<li>"She <strong>will</strong> leave the lights on in every room."</li>
<li>"My computer <strong>won''t</strong> connect to the Wi-Fi."</li>
<li>"They <strong>will</strong> play loud music late at night."</li>
</ul>
</div>
</div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "Will or Would for Habits?", "instruction": "Distinguish between present and past habits using will/would.", "questions": [{"q": "He ______ (present habit) sit for hours by the fire.", "options": ["will", "would", "shall"], "a": "will"}, {"q": "On Sundays, we ______ (past habit) go for long walks.", "options": ["would", "will", "may"], "a": "would"}, {"q": "She ______ (present habit) talk about nothing else.", "options": ["will", "would", "might"], "a": "will"}, {"q": "Whenever I saw him, he ______ (past habit) smile.", "options": ["would", "will", "did"], "a": "would"}, {"q": "He ______ (present habit) always forget his keys.", "options": ["will", "would", "is"], "a": "will"}]}, {"type": "fill_in", "title": "Habit Fill C1", "instruction": "Type: will or would.", "questions": [{"q": "In the evenings, she ______ play the piano.", "a": "would"}, {"q": "He ______ always leave the door open.", "a": "will"}, {"q": "When I was a kid, I ______ climb trees.", "a": "would"}, {"q": "She ______ wait for him every day.", "a": "will"}, {"q": "They ______ often go to the beach.", "a": "would"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (12, 'C1', 'Neither / Either / Both', 'Handle paired references correctly', 'bi-layout-split', '<h3>Theory</h3><p><strong>Both, Either, and Neither</strong> allow us to talk about two people or things. The key is in
                    the agreement (singular vs plural) and the negative/positive meaning.</p><h5>1. The Structures</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Word</th>
<th>Function</th>
<th>Verb Form</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Both</strong></td>
<td>Two out of two (Positive)</td>
<td>Plural</td>
<td>"<strong>Both</strong> (of) my parents <strong>are</strong> teachers."</td>
</tr>
<tr>
<td><strong>Either</strong></td>
<td>One or the other (Choice)</td>
<td>Singular</td>
<td>"<strong>Either</strong> option <strong>is</strong> fine."</td>
</tr>
<tr>
<td><strong>Neither</strong></td>
<td>Zero out of two (Negative)</td>
<td>Singular (Formal) / Plural (Informal)</td>
<td>"<strong>Neither</strong> answer <strong>is</strong> correct."</td>
</tr>
</tbody>
</table>
</div><h5>2. Paired Conjunctions</h5><ul>
<li><strong>Both... and...</strong>: "She speaks <strong>both</strong> French <strong>and</strong>
                        Spanish."</li>
<li><strong>Either... or...</strong>: "You can <strong>either</strong> stay <strong>or</strong> go."
                    </li>
<li><strong>Neither... nor...</strong>: "He <strong>neither</strong> called <strong>nor</strong>
                        texted."</li>
</ul><h5>3. Real-Life Scenarios</h5><div class="row">
<div class="col-md-6">
<div class="card bg-dark border-light mb-3">
<div class="card-body">
<h6 class="card-title text-info"><i class="bi bi-cart"></i> Shopping Options</h6>
<ul>
<li>"You can have <strong>either</strong> the red one <strong>or</strong> the blue
                                        one."</li>
<li>"<strong>Neither</strong> shirt fits me."</li>
<li>"I''ll buy <strong>both</strong>."</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3">
<div class="card-body">
<h6 class="card-title text-warning"><i class="bi bi-person-x"></i> Refusals</h6>
<ul>
<li>"<strong>Neither</strong> of us wants to go."</li>
<li>"I like <strong>neither</strong> tea <strong>nor</strong> coffee."</li>
<li>"I don''t like <strong>either</strong> of them." (Note: Not ''neither'' here
                                        because of ''don''t'')</li>
</ul>
</div>
</div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "Which one?", "instruction": "Choose the correct quantifier for advanced contexts.", "questions": [{"q": "______ my parents are doctors.", "options": ["Both", "Either", "Neither"], "a": "Both"}, {"q": "______ of them is coming to the party.", "options": ["Neither", "Both", "Either"], "a": "Neither"}, {"q": "You can have ______ coffee or tea.", "options": ["either", "neither", "both"], "a": "either"}, {"q": "______ he nor she spoke English.", "options": ["Neither", "Either", "Both"], "a": "Neither"}, {"q": "I like ______ of these books.", "options": ["both", "either", "neither"], "a": "both"}]}, {"type": "fill_in", "title": "Advanced Quantifier Fill C1", "instruction": "Type: neither, either, both, or nor.", "questions": [{"q": "______ John ______ Bill were there.", "a": "neither nor"}, {"q": "You can take ______ of the two options.", "a": "either"}, {"q": "I have ______ a cat and a dog.", "a": "both"}, {"q": "Neither the teacher ______ the students were ready.", "a": "nor"}, {"q": "I don''t like ______ of them.", "a": "either"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (13, 'C1', 'Expressions with ''Get''', 'Expand vocabulary with versatile ''get'' expressions', 'bi-hand-index', '<h3>Theory</h3><p>The verb <strong>GET</strong> is one of the most versatile in English. At C1 level, distinguishing
                    its
                    formal meaning from its colloquial use is key.</p><h5>1. The 5 Main Meanings</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Meaning</th>
<th>Formal Synonym</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Become</strong></td>
<td>Become</td>
<td>"Get angry", "Get old", "Get tired".</td>
</tr>
<tr>
<td><strong>Receive</strong></td>
<td>Receive</td>
<td>"I <strong>got</strong> an email."</td>
</tr>
<tr>
<td><strong>Arrive</strong></td>
<td>Arrive / Reach</td>
<td>"What time do you <strong>get</strong> home?"</td>
</tr>
<tr>
<td><strong>Obtain/Buy</strong></td>
<td>Obtain / Purchase</td>
<td>"I need to <strong>get</strong> a job."</td>
</tr>
<tr>
<td><strong>Understand</strong></td>
<td>Understand</td>
<td>"I don''t <strong>get</strong> it."</td>
</tr>
</tbody>
</table>
</div><h5>2. Common Idioms &amp; Phrasals</h5><div class="row">
<div class="col-md-6">
<div class="card bg-dark border-light mb-3">
<div class="card-body">
<h6 class="card-title text-info"><i class="bi bi-chat-dots"></i> Conversation</h6>
<ul>
<li>"Get roughly" (Survive/Manage) -&gt; Incorrect, meant "Get by".</li>
<li>"<strong>Get along with</strong>" (Have a good relationship).</li>
<li>"<strong>Get over</strong>" (Recover from illness/breakup).</li>
<li>"<strong>Get rid of</strong>" (Throw away).</li>
<li>"<strong>Get out of</strong>" (Avoid doing something).</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3">
<div class="card-body">
<h6 class="card-title text-warning"><i class="bi bi-briefcase"></i> Action</h6>
<ul>
<li>"<strong>Get down to business</strong>" (Start working seriously).</li>
<li>"<strong>Get through to</strong>" (Reach someone by phone).</li>
<li>"<strong>Get away with</strong>" (Do something bad without punishment).</li>
</ul>
</div>
</div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "Get what?", "instruction": "Choose the correct ''get'' expression.", "questions": [{"q": "I need to ______ (start) my work.", "options": ["get on with", "get over", "get by"], "a": "get on with"}, {"q": "She couldn''t ______ (recover) her illness.", "options": ["get over", "get along", "get through"], "a": "get over"}, {"q": "We ______ (managed) on very little money.", "options": ["got by", "got on", "got off"], "a": "got by"}, {"q": "They ______ (escape) with the jewels.", "options": ["got away", "got out", "got down"], "a": "got away"}, {"q": "I can''t ______ (communicate) to him.", "options": ["get through", "get by", "get over"], "a": "get through"}]}, {"type": "fill_in", "title": "Get Expression Fill C1", "instruction": "Type the correct particle (on, over, by, away, through).", "questions": [{"q": "How do you get ______ with your boss?", "a": "on"}, {"q": "I finally got ______ that flu.", "a": "over"}, {"q": "They got ______ with the murder.", "a": "away"}, {"q": "I''ll get ______ to you later.", "a": "back"}, {"q": "Can you get ______ to the operator?", "a": "through"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (14, 'C1', 'Ellipsis & Substitution', 'Avoid repetition with ellipsis and substitution', 'bi-three-dots', '<h3>Theory</h3><p>Advanced English is efficient. We avoid repeating words by deleting them (<strong>Ellipsis</strong>)
                    or
                    replacing them (<strong>Substitution</strong>).</p><h5>1. Ellipsis (Omitting Words)</h5><p>We leave out words when the meaning is clear from context.</p><div class="p-3 bg-dark border border-light rounded mb-3">
<ul class="list-unstyled mb-0">
<li>"Do you want to come?" → "I''d love to <strong>(come)</strong>." (Omit infinitive)</li>
<li>"He didn''t do it, but he should have <strong>(done it)</strong>." (Omit participle)</li>
<li>"Are you ready?" → "Yes, I am <strong>(ready)</strong>." (Omit adjective)</li>
</ul>
</div><h5>2. Substitution (Replacing Words)</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Substitute</th>
<th>Replaces</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>One / Ones</strong></td>
<td>Countable Nouns</td>
<td>"I like the red <strong>one</strong>." / "I bought the green
                                    <strong>ones</strong>."
                                </td>
</tr>
<tr>
<td><strong>Do / Did</strong></td>
<td>Verbs</td>
<td>"She plays piano, and I <strong>do</strong> too."</td>
</tr>
<tr>
<td><strong>So / Not</strong></td>
<td>Clauses (Hope, Think, Expect, Guess)</td>
<td>"Is he coming?" → "I hope <strong>so</strong>." / "I hope
                                    <strong>not</strong>."
                                </td>
</tr>
</tbody>
</table>
</div>', '{"games": [{"type": "multiple_choice", "title": "Shorten it", "instruction": "Choose the correct ellipsis or substitution.", "questions": [{"q": "A: Will it rain? B: I ______.", "options": ["hope so", "hope it", "hope"], "a": "hope so"}, {"q": "A: Is she coming? B: I ______.", "options": ["suppose so", "suppose", "suppose it"], "a": "suppose so"}, {"q": "I like tea and my wife ______ too.", "options": ["does", "is", "likes"], "a": "does"}, {"q": "A: Did you see him? B: I ______ (not).", "options": ["think not", "don''t think so", "not think so"], "a": "don''t think so"}, {"q": "He didn''t go, and ______ did she.", "options": ["neither", "either", "so"], "a": "neither"}]}, {"type": "unscramble", "title": "Substitution Order C1", "instruction": "Order the words to form a sentence with substitution.", "questions": [{"q": "so hope I too", "a": "i hope so too"}, {"q": "neither she did did", "a": "neither did she"}, {"q": "does so my brother", "a": "so does my brother"}, {"q": "think I so don''t", "a": "i don''t think so"}, {"q": "believe so they do", "a": "do they believe so"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (15, 'C1', '-ever Words', 'Use compound adverbs to express generality', 'bi-globe', '<h3>Theory</h3><p>Adding <strong>-ever</strong> to a WH-word creates a meaning of "<strong>it doesn''t matter</strong>"
                    or "<strong>any</strong>".</p><h5>1. The Meaning Chart</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Word</th>
<th>Meaning</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Whatever</strong></td>
<td>Anything / No matter what</td>
<td>"Do <strong>whatever</strong> you want."</td>
</tr>
<tr>
<td><strong>Whoever</strong></td>
<td>Anyone / No matter who</td>
<td>"<strong>Whoever</strong> calls, tell them I''m busy."</td>
</tr>
<tr>
<td><strong>Wherever</strong></td>
<td>Anywhere / No matter where</td>
<td>"I''ll follow you <strong>wherever</strong> you go."</td>
</tr>
<tr>
<td><strong>Whenever</strong></td>
<td>Any time / No matter when</td>
<td>"Come visit <strong>whenever</strong> you like."</td>
</tr>
<tr>
<td><strong>However</strong></td>
<td>Any way / No matter how</td>
<td>"Solve it <strong>however</strong> you can."</td>
</tr>
</tbody>
</table>
</div><h5>2. Real-Life Scenarios</h5><div class="row">
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-info"><i class="bi bi-airplane"></i> Travel &amp; Freedom</h6>
<ul>
<li>"We can go <strong>wherever</strong> the road takes us."</li>
<li>"Eat <strong>whatever</strong> you feel like having."</li>
<li>"We can leave <strong>whenever</strong> you are ready."</li>
<li>"<strong>Whoever</strong> arrives first gets the best room."</li>
<li>"I will support you, <strong>however</strong> hard it gets."</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-warning"><i class="bi bi-shield-lock"></i> Rules &amp;
                                    Determination</h6>
<ul>
<li>"<strong>Whatever</strong> happens, don''t panic."</li>
<li>"Punish <strong>whoever</strong> is responsible."</li>
<li>"You must finish, <strong>however</strong> long it takes."</li>
<li>"<strong>Whenever</strong> I see him, he''s working."</li>
<li>"Sit <strong>wherever</strong> there is a free chair."</li>
</ul>
</div>
</div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "Whatever, Whoever...", "instruction": "Choose the best -ever word.", "questions": [{"q": "______ you do, don''t tell him.", "options": ["Whatever", "Whoever", "Whenever"], "a": "Whatever"}, {"q": "______ wants to come is welcome.", "options": ["Whoever", "Whichever", "Whatever"], "a": "Whoever"}, {"q": "You can come ______ you want.", "options": ["whenever", "wherever", "however"], "a": "whenever"}, {"q": "______ you go, I''ll find you.", "options": ["Wherever", "Whatever", "However"], "a": "Wherever"}, {"q": "______ way you choose, it''s hard.", "options": ["Whichever", "Whatever", "However"], "a": "Whichever"}]}, {"type": "fill_in", "title": "-ever Fill C1", "instruction": "Type: whatever, whoever, whenever, wherever, or however.", "questions": [{"q": "______ told you that was lying.", "a": "whoever"}, {"q": "Take ______ you need.", "a": "whatever"}, {"q": "We''ll leave ______ you are ready.", "a": "whenever"}, {"q": "______ hard I try, I fail.", "a": "however"}, {"q": "Sit ______ you like.", "a": "wherever"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (16, 'C1', 'Direct & Indirect Objects', 'Master object placement for clarity and style', 'bi-sort-alpha-down', '<h3>Theory</h3><p>English has strict rules for where to put the person (Indirect Object) and the thing (Direct Object).
                    The choice often depends on whether you use a preposition or not.</p><h5>1. The Two Structures</h5><div class="p-3 bg-dark border border-light rounded mb-3">
<p class="text-light"><strong>Pattern A (No Preposition):</strong> Verb + Person + Thing</p>
<ul class="list-unstyled ms-3 text-success">
<li>"I gave <strong>John</strong> the keys."</li>
<li>"She bought <strong>her mom</strong> a gift."</li>
</ul>
<hr class="border-secondary"/>
<p class="text-light"><strong>Pattern B (With Preposition):</strong> Verb + Thing +
                        <strong>to/for</strong> + Person
                    </p>
<ul class="list-unstyled ms-3 text-info">
<li>"I gave the keys <strong>to John</strong>."</li>
<li>"She bought a gift <strong>for her mom</strong>."</li>
</ul>
</div><h5>2. The Golden Rule (Pronouns)</h5><div class="alert alert-danger d-flex align-items-center" role="alert">
<i class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"></i>
<div>
                        If the <strong>Direct Object</strong> is a pronoun (it/them), you MUST use <strong>Pattern B
                            (to/for)</strong>.
                    </div>
</div><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Correct</th>
<th>Incorrect</th>
</tr>
</thead>
<tbody>
<tr>
<td>"Give <strong>it to me</strong>."</td>
<td class="text-decoration-line-through text-secondary">"Give me it."</td>
</tr>
<tr>
<td>"Show <strong>them to us</strong>."</td>
<td class="text-decoration-line-through text-secondary">"Show us them."</td>
</tr>
</tbody>
</table>
</div><h5>3. Prepositions: To vs. For</h5><p>Most verbs usually take "to", but some benefactive verbs take "for".</p><div class="row">
<div class="col-md-6">
<div class="p-2 border border-info rounded h-100">
<strong>Use TO (Transfer):</strong><br/>
                            Give, Lend, Sell, Send, Show, Tell, Write, Offer.<br/>
<em>"Send the email <strong>to</strong> him."</em>
</div>
</div>
<div class="col-md-6">
<div class="p-2 border border-warning rounded h-100">
<strong>Use FOR (Benefit):</strong><br/>
                            Buy, Cook, Make, Get, Keep, Save, Find.<br/>
<em>"She made a cake <strong>for</strong> us."</em>
</div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "Give it to me", "instruction": "Choose the correct object order.", "questions": [{"q": "Can you give ______ please?", "options": ["it to me", "me it", "it me"], "a": "it to me"}, {"q": "I bought ______ for her birthday.", "options": ["a present for her", "her a present", "both are correct"], "a": "both are correct"}, {"q": "Show ______ your new car.", "options": ["me", "to me", "for me"], "a": "me"}, {"q": "He sent ______.", "options": ["a letter to them", "them it", "to them it"], "a": "a letter to them"}, {"q": "They told ______ the news.", "options": ["us", "to us", "for us"], "a": "us"}]}, {"type": "unscramble", "title": "Object Order C1", "instruction": "Order the words to form a correct object sequence.", "questions": [{"q": "to me give it", "a": "give it to me"}, {"q": "a letter her sent I", "a": "i sent her a letter"}, {"q": "the truth me tell", "a": "tell me the truth"}, {"q": "a present for bought him I", "a": "i bought a present for him"}, {"q": "the book them show", "a": "show them the book"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (17, 'C1', 'Advanced Compound Adj.', 'Advanced hyphenated adjective patterns', 'bi-layers', '<h3>Theory</h3><p><strong>Compound adjectives</strong> are made of two or more words joined by a hyphen. They function
                    as a single idea to describe a noun.</p><h5>1. The Golden Rule: Number-Noun</h5><div class="p-3 bg-dark border border-warning rounded mb-3 text-center">
<span class="fs-5">Numbers + Nouns are <strong>ALWAYS SINGULAR</strong> when used as
                        adjectives.</span>
<hr class="border-warning"/>
<p class="mb-0 text-success">"A <strong>five-star</strong> hotel." (Correct)</p>
<p class="mb-0 text-decoration-line-through text-secondary">"A five-stars hotel." (Incorrect)</p>
</div><h5>2. Common Combinations</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Pattern</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Adverb/Adj + Past Participle</strong></td>
<td>"<strong>Well-known</strong> actor", "<strong>Old-fashioned</strong> clothes".</td>
</tr>
<tr>
<td><strong>Noun/Adj + Present Participle</strong></td>
<td>"<strong>Good-looking</strong> guy", "<strong>Time-saving</strong> device".</td>
</tr>
<tr>
<td><strong>Noun + Adjective</strong></td>
<td>"<strong>World-famous</strong> singer", "<strong>Ice-cold</strong> water".</td>
</tr>
<tr>
<td><strong>Number + Noun</strong></td>
<td>"<strong>Ten-minute</strong> walk", "<strong>Twenty-year-old</strong> girl".</td>
</tr>
</tbody>
</table>
</div><h5>3. Real-Life Scenarios</h5><div class="row">
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-info"><i class="bi bi-person-badge"></i> Describing People
                                </h6>
<ul>
<li>"He is a <strong>broad-minded</strong> person." (Open to ideas)</li>
<li>"She is extremely <strong>hard-working</strong>."</li>
<li>"My boss is <strong>short-tempered</strong>." (Gets angry easily)</li>
<li>"They are a <strong>well-behaved</strong> class."</li>
<li>"He is a <strong>left-handed</strong> player."</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-primary"><i class="bi bi-cart"></i> Products &amp; Places</h6>
<ul>
<li>"We bought a <strong>brand-new</strong> car."</li>
<li>"It''s a <strong>state-of-the-art</strong> facility." (Modern)</li>
<li>"I need a <strong>hands-free</strong> device."</li>
<li>"This is a <strong>sugar-free</strong> drink."</li>
<li>"It was a <strong>last-minute</strong> decision."</li>
</ul>
</div>
</div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "Sophisticated Adjectives", "instruction": "Choose the most appropriate advanced compound adjective.", "questions": [{"q": "A ______ performance (very impressive).", "options": ["breath-taking", "heart-breaking", "mind-blowing"], "a": "breath-taking"}, {"q": "A ______ child (always talking).", "options": ["quick-witted", "smooth-tongued", "sharp-tongued"], "a": "quick-witted"}, {"q": "A ______ problem (long-lasting).", "options": ["long-standing", "far-reaching", "deep-seated"], "a": "long-standing"}, {"q": "A ______ decision (important for future).", "options": ["far-reaching", "level-headed", "open-minded"], "a": "far-reaching"}, {"q": "An ______ student (thinking about others).", "options": ["open-minded", "absent-minded", "strong-willed"], "a": "open-minded"}]}, {"type": "fill_in", "title": "Advanced Compound Fill C1", "instruction": "Type the compound adjective (use hyphens).", "questions": [{"q": "A view that takes your breath away is ______.", "a": "breath-taking"}, {"q": "A person who is not prejudiced is ______.", "a": "open-minded"}, {"q": "A result that is very good is ______.", "a": "top-notch"}, {"q": "A person who forgets things easily is ______.", "a": "absent-minded"}, {"q": "A task that requires a lot of time is ______.", "a": "time-consuming"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (18, 'C1', 'Relative Pronouns', 'Know when relative pronouns are mandatory or optional', 'bi-link', '<h3>Theory</h3><p>Relative pronouns (who, which, that, whom, whose) connect clauses. Knowing when you can
                    <strong>delete</strong> them distinguishes a native speaker from a learner.
                </p><h5>1. When can you OMIT the pronoun?</h5><div class="p-3 bg-dark border border-success rounded mb-3">
<p class="mb-2"><i class="bi bi-check-circle text-success"></i> <strong>YES:</strong> When the
                        pronoun is the <strong>OBJECT</strong> of the verb.</p>
<ul class="list-unstyled ms-3 mb-0 text-light">
<li>"The man (who/that) <strong>I met</strong>." → "The man <strong>I met</strong>."</li>
<li>"The book (which/that) <strong>she bought</strong>." → "The book <strong>she
                                bought</strong>."</li>
</ul>
<hr class="border-secondary"/>
<p class="mb-2"><i class="bi bi-x-circle text-danger"></i> <strong>NO:</strong> When the pronoun is
                        the <strong>SUBJECT</strong> of the verb.</p>
<ul class="list-unstyled ms-3 mb-0 text-light">
<li>"The man <strong>who called</strong> me." (Cannot say: "The man called me" - changes
                            meaning)</li>
<li>"The machine <strong>that broke</strong>."</li>
</ul>
</div><h5>2. Whom &amp; Whose</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Pronoun</th>
<th>Usage</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Who</strong></td>
<td>Subject (Person)</td>
<td>"The girl <strong>who</strong> won."</td>
</tr>
<tr>
<td><strong>Whom</strong></td>
<td>Object (Person) - Formal</td>
<td>"The girl <strong>whom</strong> I saw." (Often omitted or replaced by ''who'' in
                                    speech)</td>
</tr>
<tr>
<td><strong>Whose</strong></td>
<td>Possession</td>
<td>"The boy <strong>whose</strong> bike was stolen."</td>
</tr>
</tbody>
</table>
</div><h5>3. Real-Life Scenarios</h5><div class="row">
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-info"><i class="bi bi-chat-quote"></i> Daily Speech
                                    (Omitting)</h6>
<ul>
<li>"Here''s the money <strong>you lent</strong> me." (Object)</li>
<li>"Is that the movie <strong>we watched</strong>?" (Object)</li>
<li>"The food <strong>she cooked</strong> was delicious." (Object)</li>
<li>"The guy <strong>I told you about</strong> is here." (Object + Preposition)</li>
<li>"I have everything <strong>I need</strong>."</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-warning"><i class="bi bi-briefcase"></i> Formal/Required</h6>
<ul>
<li>"To <strong>whom</strong> it may concern." (Formal Object)</li>
<li>"The employee <strong>whose</strong> performance improved." (Possession)</li>
<li>"We need staff <strong>who can</strong> speak French." (Subject - Required)</li>
<li>"The problem <strong>that caused</strong> the delay." (Subject - Required)</li>
<li>"He''s the one <strong>who</strong> did it." (Subject)</li>
</ul>
</div>
</div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "To whom, for which", "instruction": "Choose the correct preposition + relative pronoun.", "questions": [{"q": "The man ______ I spoke is here.", "options": ["to whom", "who", "which"], "a": "to whom"}, {"q": "The city ______ I live is big.", "options": ["in which", "where", "both are correct"], "a": "both are correct"}, {"q": "The reason ______ he left is unknown.", "options": ["for which", "why", "both are correct"], "a": "both are correct"}, {"q": "The tool ______ he worked was sharp.", "options": ["with which", "which", "that"], "a": "with which"}, {"q": "The company ______ she works is tiny.", "options": ["for which", "whom", "where"], "a": "for which"}]}, {"type": "fill_in", "title": "Prepositional Relative Fill C1", "instruction": "Type: to whom, in which, for which, etc.", "questions": [{"q": "The person ______ I was talking is my boss.", "a": "to whom"}, {"q": "The building ______ they live is old.", "a": "in which"}, {"q": "The goal ______ we aim is high.", "a": "at which"}, {"q": "The friend ______ I went out is Spanish.", "a": "with whom"}, {"q": "The book ______ I was reading is gone.", "a": "which"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (19, 'C1', 'As if / As though / Like', 'Make comparisons and hypotheses with precision', 'bi-question-diamond', '<h3>Theory</h3><p>These phrases describe how something seems or is done. The key C1 nuance is knowing when to use the
                    <strong>unreal past</strong>.
                </p><h5>1. As if / As though</h5><p>They mean the same thing (Similarity). The verb tense tells you if it''s real or not.</p><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Situation</th>
<th>Tense Used</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Real / Possible</strong></td>
<td>Normal Tense (Present)</td>
<td>"He looks <strong>as if he is</strong> sick." (He probably is).</td>
</tr>
<tr>
<td><strong>Unreal / Hypothetical</strong></td>
<td>Past Tense (Unreal)</td>
<td>"He acts <strong>as if he were</strong> the boss." (He is NOT the boss).</td>
</tr>
</tbody>
</table>
</div><h5>2. Like vs As vs The way</h5><div class="p-3 bg-dark border border-light rounded mb-3">
<ul class="list-unstyled mb-0">
<li><strong class="text-info">Like:</strong> Followed by a <strong>Noun/Pronoun</strong>
                            (Informal conjunction).</li>
<li class="ms-3 small text-secondary">"He runs <strong>like</strong> a leopard." (Simile)</li>
<li><strong class="text-warning">As:</strong> Followed by a <strong>Clause</strong> (Subject +
                            Verb) or Preposition phrase.</li>
<li class="ms-3 small text-secondary">"Do <strong>as</strong> I say." / "He works
                            <strong>as</strong> a doctor." (Role)
                        </li>
<li><strong class="text-success">The way:</strong> Informal equivalent to "as" or "how".</li>
<li class="ms-3 small text-secondary">"I hate <strong>the way</strong> he looks at me."</li>
</ul>
</div><h5>3. Real-Life Scenarios</h5><div class="row">
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-info"><i class="bi bi-mask"></i> Pretending &amp; Impressions
                                </h6>
<ul>
<li>"She talks <strong>as if she knew</strong> everything." (She doesn''t)</li>
<li>"It smells <strong>as though</strong> someone has been smoking." (Real
                                        possibility)</li>
<li>"He spends money <strong>like</strong> water." (Idiom)</li>
<li>"Why do you look at me <strong>like</strong> that?"</li>
<li>"He commands them <strong>as if he were</strong> a general." (Unreal)</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-warning"><i class="bi bi-tools"></i> Instructions &amp; Roles
                                </h6>
<ul>
<li>"Leave everything <strong>as</strong> it is."</li>
<li>"He works <strong>as</strong> a consultant." (His real job)</li>
<li>"Do it <strong>the way</strong> I showed you."</li>
<li>"It looks <strong>like</strong> it''s going to rain." (Prediction)</li>
<li>"Treat me <strong>like</strong> a friend."</li>
</ul>
</div>
</div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "It seems like...", "instruction": "Choose the correct hypothetical structure.", "questions": [{"q": "He talks as ______ he were the boss.", "options": ["if", "though", "both are correct"], "a": "both are correct"}, {"q": "It looks ______ it''s going to rain.", "options": ["like", "as if", "both are correct"], "a": "both are correct"}, {"q": "She acted as if she ______ me.", "options": ["didn''t know", "doesn''t know", "hasn''t known"], "a": "didn''t know"}, {"q": "You look as though you ______ a ghost.", "options": ["had seen", "saw", "see"], "a": "had seen"}, {"q": "They feel like they ______ on holiday.", "options": ["are", "were", "be"], "a": "were"}]}, {"type": "fill_in", "title": "Hypothetical Fill C1", "instruction": "Type: as if, as though, or the correct verb form.", "questions": [{"q": "He behaves ______ he owned the place.", "a": "as if"}, {"q": "You look ______ you haven''t slept.", "a": "as though"}, {"q": "It feels ______ summer is over.", "a": "like"}, {"q": "She treated me as if I ______ (be) a child.", "a": "were"}, {"q": "You sound as though you ______ (catch) a cold.", "a": "had caught"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (20, 'C1', 'Subjunctive Verbs', 'Use the subjunctive for formal recommendations and wishes', 'bi-pencil-square', '<h3>Theory</h3><p>The <strong>Subjunctive</strong> is used for demands, suggestions, and necessity. The key rule: use
                    the <strong>BASE FORM</strong> of the verb (no ''s'', no ''ed'', no ''ing'').</p><h5>1. The Formula</h5><div class="p-3 bg-dark border border-danger rounded mb-3 text-center">
<span class="fs-5">Trigger + ''That'' + Subject + <strong>Base Verb</strong></span>
<hr class="border-light"/>
<p class="mb-0 text-success">"I suggest that he <strong>go</strong> home." (Not ''goes'')</p>
<p class="mb-0 text-success">"It is vital that she <strong>be</strong> present." (Not ''is'')</p>
</div><h5>2. Common Triggers</h5><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Category</th>
<th>Verbs / Adjectives</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Verbs</strong></td>
<td>Advise, Ask, Demand, Insist, Propose, Recommend, Request, Suggest.</td>
</tr>
<tr>
<td><strong>Adjectives</strong></td>
<td>Essential, Imperative, Important, Necessary, Vital.</td>
</tr>
<tr>
<td><strong>Negative</strong></td>
<td>"I insist that he <strong>not be</strong> late." (Do not use ''don''t'' or ''doesn''t'')
                                </td>
</tr>
</tbody>
</table>
</div><h5>3. Real-Life Scenarios</h5><div class="row">
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-info"><i class="bi bi-briefcase"></i> Professional Requests
                                </h6>
<ul>
<li>"We request that the meeting <strong>start</strong> on time."</li>
<li>"The boss demands that he <strong>submit</strong> the report."</li>
<li>"I propose that we <strong>take</strong> a break."</li>
<li>"It is crucial that the system <strong>remain</strong> secure."</li>
<li>"They asked that I <strong>be</strong> interviewed."</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-warning"><i class="bi bi-heart-pulse"></i> Advice &amp; Urgency
                                </h6>
<ul>
<li>"The doctor recommends that she <strong>rest</strong>."</li>
<li>"It is essential that you <strong>not eat</strong> before surgery."</li>
<li>"I insist that you <strong>stay</strong> for dinner."</li>
<li>"It is necessary that he <strong>see</strong> a specialist."</li>
<li>"My advice is that he <strong>find</strong> a new job."</li>
</ul>
</div>
</div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "It is essential that...", "instruction": "Choose the correct subjunctive form.", "questions": [{"q": "It is important that he ______ here.", "options": ["be", "is", "was"], "a": "be"}, {"q": "I suggest that she ______ harder.", "options": ["study", "studies", "studied"], "a": "study"}, {"q": "It is essential that we ______ on time.", "options": ["arrive", "arrives", "arrived"], "a": "arrive"}, {"q": "He demanded that the door ______ unlocked.", "options": ["be", "is", "was"], "a": "be"}, {"q": "I recommend that he ______ a doctor.", "options": ["see", "sees", "seeing"], "a": "see"}]}, {"type": "fill_in", "title": "Subjunctive Fill C1", "instruction": "Type the base form of the verb (e.g., be, study, go).", "questions": [{"q": "It is mandatory that every student ______ (have) an ID.", "a": "have"}, {"q": "I propose that the meeting ______ (be) postponed.", "a": "be"}, {"q": "The doctor suggested that he ______ (rest).", "a": "rest"}, {"q": "It is crucial that she ______ (not / tell) him.", "a": "not tell"}, {"q": "They requested that we ______ (be) present.", "a": "be"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

INSERT INTO public.topics (number, level, title, description, icon, theory, practice)
VALUES (21, 'C1', 'Subject-Verb Agreement', 'Match verbs correctly with quantifier subjects', 'bi-check2-all', '<h3>Theory</h3><p>Matching the verb to the subject can be tricky with quantifiers. Is it singular or plural? It often
                    depends on the <strong>noun</strong> that follows.</p><h5>1. The "Number" Rule</h5><div class="p-3 bg-dark border border-success rounded mb-3">
<div class="row text-center">
<div class="col-6 border-end border-secondary">
<h6 class="text-info">A number of...</h6>
<p class="mb-0 small">Meaning: "Many"</p>
<p class="fs-4 fw-bold text-light">PLURAL</p>
<p class="mb-0 text-success small">"A number of cars <strong>are</strong> waiting."</p>
</div>
<div class="col-6">
<h6 class="text-warning">The number of...</h6>
<p class="mb-0 small">Meaning: "The specific figure"</p>
<p class="fs-4 fw-bold text-light">SINGULAR</p>
<p class="mb-0 text-success small">"The number of cars <strong>is</strong> small."</p>
</div>
</div>
</div><h5>2. Of-Phrases &amp; Portions</h5><p>For <strong>All of, Most of, Some of, A lot of, None of, Permissions
                        (Percentages/Fractions)</strong>, look at the noun <strong>after ''of''</strong>.</p><div class="table-responsive">
<table class="table table-dark table-bordered">
<thead>
<tr>
<th>Noun Type</th>
<th>Verb Form</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Singular / Uncountable</strong></td>
<td>Singular</td>
<td>"All of the <strong>cake</strong> <strong>was</strong> eaten."</td>
</tr>
<tr>
<td><strong>Plural</strong></td>
<td>Plural</td>
<td>"All of the <strong>cookies</strong> <strong>were</strong> eaten."</td>
</tr>
<tr>
<td><strong>Each / Every</strong></td>
<td>Singular (Always)</td>
<td>"<strong>Each</strong> of the students <strong>has</strong> a book."</td>
</tr>
</tbody>
</table>
</div><h5>3. Real-Life Scenarios</h5><div class="row">
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-info"><i class="bi bi-bar-chart"></i> Data &amp; Statistics</h6>
<ul>
<li>"A number of issues <strong>have</strong> been reported."</li>
<li>"The number of issues <strong>has</strong> decreased."</li>
<li>"50% of the budget <strong>is</strong> gone."</li>
<li>"50% of the employees <strong>are</strong> on strike."</li>
<li>"None of the information <strong>is</strong> accurate."</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card bg-dark border-light mb-3 h-100">
<div class="card-body">
<h6 class="card-title text-warning"><i class="bi bi-people"></i> Groups &amp; Individuals
                                </h6>
<ul>
<li>"<strong>Each</strong> of us <strong>is</strong> responsible."</li>
<li>"<strong>Neither</strong> of them <strong>likes</strong> it." (Formal: usage
                                        implies singular)</li>
<li>"The majority of people <strong>agree</strong>." (Collective plural)</li>
<li>"<strong>Everybody</strong> <strong>knows</strong> the truth."</li>
<li>"Some of the team <strong>are</strong> away." (Meaning members)</li>
</ul>
</div>
</div>
</div>
</div>', '{"games": [{"type": "multiple_choice", "title": "Singular or Plural?", "instruction": "Choose the correct verb based on advanced agreement rules.", "questions": [{"q": "Neither the teacher nor the students ______ here.", "options": ["are", "is", "was"], "a": "are"}, {"q": "Each of the children ______ a gift.", "options": ["receives", "receive", "receiving"], "a": "receives"}, {"q": "The news ______ shocking.", "options": ["was", "were", "are"], "a": "was"}, {"q": "Politics ______ a complex subject.", "options": ["is", "are", "be"], "a": "is"}, {"q": "Ten dollars ______ too much.", "options": ["is", "are", "were"], "a": "is"}]}, {"type": "fill_in", "title": "Agreement Fill C1", "instruction": "Type the correct verb form (e.g., is, are, has, have).", "questions": [{"q": "Statistics ______ (be) my favorite subject.", "a": "is"}, {"q": "The group ______ (have) different opinions.", "a": "has"}, {"q": "Either the cats or the dog ______ (be) in the house.", "a": "is"}, {"q": "A number of people ______ (be) waiting.", "a": "are"}, {"q": "The number of students ______ (be) increasing.", "a": "is"}]}]}')
ON CONFLICT (level, number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  theory = EXCLUDED.theory,
  practice = EXCLUDED.practice;

COMMIT;
