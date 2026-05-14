const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const a1TheoryBatch1 = {
    1: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>👋 Saludos y Despedidas (Greetings & Farewells)</h4>
                <p>Las primeras palabras son las más importantes. En inglés, la forma en que saludas depende de dos cosas: <strong>la hora del día</strong> y <strong>la confianza</strong> que tengas con la otra persona.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🕒 Saludos según la hora</h5>
                <ul>
                    <li><strong>Good morning:</strong> Desde que despiertas hasta las 12:00 PM (Mediodía).</li>
                    <li><strong>Good afternoon:</strong> Desde las 12:00 PM hasta las 6:00 PM aproximadamente.</li>
                    <li><strong>Good evening:</strong> Se usa para saludar al llegar a un sitio de noche (después de las 6:00 PM). ¡Nunca lo uses para despedirte!</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>🤝 Formal vs. Informal</h5>
                <div class="example-grid">
                    <div class="example-item">
                        <strong>Formal:</strong>
                        <p>"Hello, how are you?"<br><small>Hola, ¿cómo está usted?</small></p>
                        <p>"Good morning, Mr. Smith."<br><small>Buenos días, Sr. Smith.</small></p>
                    </div>
                    <div class="example-item">
                        <strong>Informal:</strong>
                        <p>"Hi! What's up?"<br><small>¡Hola! ¿Qué tal?</small></p>
                        <p>"Hey, how's it going?"<br><small>Oye, ¿cómo va todo?</small></p>
                    </div>
                </div>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ El error más común: Good Night</h5>
                <p><strong>Good night</strong> NO es un saludo. Solo se usa para despedirse cuando te vas a dormir o te retiras de un lugar muy tarde en la noche.</p>
            </div>
        </div>
    `,
    2: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🆔 Información Personal</h4>
                <p>Presentarse es más que decir tu nombre. Es la base para conectar con otros en un entorno nuevo.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📝 Preguntas y Respuestas Clave</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Pregunta</th>
                            <th>Significado</th>
                            <th>Respuesta Típica</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>What's your name?</td>
                            <td>¿Cómo te llamas?</td>
                            <td>My name is... / I'm...</td>
                        </tr>
                        <tr>
                            <td>Where are you from?</td>
                            <td>¿De dónde eres?</td>
                            <td>I'm from Colombia.</td>
                        </tr>
                        <tr>
                            <td>How old are you?</td>
                            <td>¿Cuántos años tienes?</td>
                            <td>I am 25 years old.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Ejemplo de Presentación</h5>
                <p>"Hi! I'm Carlos. I am from Mexico and I'm 22 years old. Nice to meet you!"</p>
                <p><small>¡Hola! Soy Carlos. Soy de México y tengo 22 años. ¡Gusto en conocerte!</small></p>
            </div>
        </div>
    `,
    3: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🔤 El Alfabeto y Deletreo</h4>
                <p>Dominar el abecedario es crucial para situaciones donde debes dictar tu nombre, correo electrónico o dirección.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📢 Sonidos que Confunden</h5>
                <p>Presta especial atención a estas letras que suelen ser difíciles para los hispanohablantes:</p>
                <ul>
                    <li><strong>A</strong> (se dice "ei") vs <strong>E</strong> (se dice "i") vs <strong>I</strong> (se dice "ai").</li>
                    <li><strong>G</strong> (se dice "yi") vs <strong>J</strong> (se dice "yei").</li>
                    <li><strong>V</strong> (vibrante, dientes en labios) vs <strong>B</strong> (labial, labios juntos).</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>⌨️ ¿Cómo deletrear?</h5>
                <p>Cuando alguien te pregunte <strong>"How do you spell that?"</strong>, debes decir las letras una por una.</p>
                <p><strong>Ejemplo:</strong> APPLE → A - P - P - L - E</p>
            </div>
        </div>
    `,
    4: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🔢 Números del 1 al 100</h4>
                <p>Los números son esenciales para precios, edades, fechas y números de teléfono.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🚀 El truco de las terminaciones</h5>
                <p>Muchos alumnos confunden el 13 con el 30, o el 14 con el 40. Aquí la clave:</p>
                <ul>
                    <li><strong>TEEN (13-19):</strong> Suenan largo al final. <em>Thir-TEEN, Four-TEEN.</em></li>
                    <li><strong>TY (20-90):</strong> Suenan corto y seco. <em>Thir-TY, For-TY.</em></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Construcción de números</h5>
                <p>Para números mayores a 20, simplemente unes la decena con la unidad usando un guion:</p>
                <ul>
                    <li>25 → Twenty-five</li>
                    <li>42 → Forty-two</li>
                    <li>88 → Eighty-eight</li>
                </ul>
            </div>
        </div>
    `,
    5: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🌍 Países y Nacionalidades</h4>
                <p>Aprender los nombres de los países y sus nacionalidades te permitirá hablar sobre el origen de las personas y productos.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 Patrones Comunes</h5>
                <ul>
                    <li><strong>-IAN:</strong> Colombia → Colomb<strong>ian</strong>, Brazil → Brazil<strong>ian</strong>.</li>
                    <li><strong>-ISH:</strong> Spain → Span<strong>ish</strong>, England → Engl<strong>ish</strong>.</li>
                    <li><strong>-ESE:</strong> China → Chin<strong>ese</strong>, Japan → Japan<strong>ese</strong>.</li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Nota importante</h5>
                <p>En inglés, tanto los países como las nacionalidades **siempre** deben escribirse con **Mayúscula inicial**.</p>
                <p>Correcto: <strong>I am Spanish.</strong> (Incorrecto: i am spanish).</p>
            </div>
        </div>
    `,
    6: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>✨ Verbo "To Be" (Afirmativo)</h4>
                <p>Es el verbo más importante del inglés. Significa **Ser** o **Estar**.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📊 Conjugación y Contracciones</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Sujeto</th>
                            <th>Verbo</th>
                            <th>Contracción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>I</td>
                            <td>am</td>
                            <td>I'm</td>
                        </tr>
                        <tr>
                            <td>You / We / They</td>
                            <td>are</td>
                            <td>You're / We're / They're</td>
                        </tr>
                        <tr>
                            <td>He / She / It</td>
                            <td>is</td>
                            <td>He's / She's / It's</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplos</h5>
                <ul>
                    <li><strong>I'm</strong> a teacher. <small>(Soy profesor)</small></li>
                    <li><strong>She is</strong> at home. <small>(Ella está en casa)</small></li>
                    <li><strong>They are</strong> happy. <small>(Ellos están felices)</small></li>
                </ul>
            </div>
        </div>
    `,
    7: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>❓ Verbo "To Be" (Negativo y Preguntas)</h4>
                <p>Para negar o preguntar con el verbo To Be, no necesitamos auxiliares como "do" o "does". El verbo se mueve solo.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🚫 Negación</h5>
                <p>Solo añade la palabra <strong>NOT</strong> después del verbo:</p>
                <ul>
                    <li>I am <strong>not</strong>...</li>
                    <li>You are <strong>not</strong> (Aren't)...</li>
                    <li>He is <strong>not</strong> (Isn't)...</li>
                </ul>
            </div>

            <div class="visual-card card-structure">
                <h5>🤔 Preguntas (Inversión)</h5>
                <p>Para preguntar, cambia el orden: el verbo pasa al principio.</p>
                <p>Afirmativo: <strong>You are</strong> happy. → Pregunta: <strong>Are you</strong> happy?</p>
            </div>
        </div>
    `,
    8: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>👤 Pronombres Personales</h4>
                <p>Son las palabras que sustituyen al nombre para no repetirlo constantemente.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📌 La lista completa</h5>
                <ul>
                    <li><strong>I:</strong> Yo (siempre en mayúscula).</li>
                    <li><strong>You:</strong> Tú / Usted / Ustedes.</li>
                    <li><strong>He:</strong> Él (personas).</li>
                    <li><strong>She:</strong> Ella (personas).</li>
                    <li><strong>It:</strong> Ello (cosas, animales, clima).</li>
                    <li><strong>We:</strong> Nosotros.</li>
                    <li><strong>They:</strong> Ellos / Ellas (personas o cosas en plural).</li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ El uso de "IT"</h5>
                <p>En inglés, una frase casi nunca puede empezar sin sujeto. Si hablas del clima, usas "It": <strong>"It is raining"</strong> (No digas solo "Is raining").</p>
            </div>
        </div>
    `,
    9: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🏠 Adjetivos Posesivos</h4>
                <p>Se usan para indicar que algo pertenece a alguien.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🔗 Relación Sujeto-Posesivo</h5>
                <ul>
                    <li>I → <strong>My</strong> (Mi)</li>
                    <li>You → <strong>Your</strong> (Tu)</li>
                    <li>He → <strong>His</strong> (Su - de él)</li>
                    <li>She → <strong>Her</strong> (Su - de ella)</li>
                    <li>It → <strong>Its</strong> (Su - de una cosa/animal)</li>
                    <li>We → <strong>Our</strong> (Nuestro)</li>
                    <li>They → <strong>Their</strong> (Su - de ellos)</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplos</h5>
                <p>"This is <strong>my</strong> car." <small>(Este es mi carro)</small></p>
                <p>"What is <strong>her</strong> name?" <small>(¿Cuál es el nombre de ella?)</small></p>
            </div>
        </div>
    `,
    10: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>👨‍👩‍👧 La Familia (Family Members)</h4>
                <p>Vocabulario para describir tus raíces y relaciones más cercanas.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🌳 Los básicos</h5>
                <ul>
                    <li><strong>Parents:</strong> Padres (Papá y Mamá).</li>
                    <li><strong>Father / Mother:</strong> Padre / Madre.</li>
                    <li><strong>Siblings:</strong> Hermanos (en general).</li>
                    <li><strong>Brother / Sister:</strong> Hermano / Hermana.</li>
                    <li><strong>Children:</strong> Hijos (en general).</li>
                    <li><strong>Son / Daughter:</strong> Hijo / Hija.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Vocabulario Extra</h5>
                <ul>
                    <li><strong>Grandparents:</strong> Abuelos.</li>
                    <li><strong>Uncle / Aunt:</strong> Tío / Tía.</li>
                    <li><strong>Cousin:</strong> Primo o Prima.</li>
                </ul>
            </div>
        </div>
    `
};

topics.forEach(topic => {
    if (a1TheoryBatch1[topic.id]) {
        topic.theory = a1TheoryBatch1[topic.id].trim();
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('A1 Theory Batch 1 COMPLETE (Topics 1-10) with detailed premium content.');
