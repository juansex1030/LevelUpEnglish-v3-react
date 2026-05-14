const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const a2TheoryBatch2 = {
    41: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🚀 Futuro con "Going To"</h4>
                <p>Se usa para hablar de **planes e intenciones** que ya hemos decidido, o para **predicciones** basadas en evidencia física.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura (To Be + Going to + Verbo)</h5>
                <ul>
                    <li>I <strong>am going to</strong> travel.</li>
                    <li>He <strong>is going to</strong> cook.</li>
                    <li>They <strong>are going to</strong> study.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplos</h5>
                <p>"I <strong>am going to</strong> visit my parents next week." <small>(Plan decidido)</small></p>
                <p>"Look at the clouds! It <strong>is going to</strong> rain." <small>(Predicción con evidencia)</small></p>
            </div>
        </div>
    `,
    42: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>✨ Futuro con "Will"</h4>
                <p>Se usa para decisiones tomadas en el momento, promesas, o predicciones basadas en opinión.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura</h5>
                <p>Sujeto + Will + Verbo (base)</p>
                <ul>
                    <li><strong>Positive:</strong> I will (I'll) help you.</li>
                    <li><strong>Negative:</strong> I will not (Won't) go.</li>
                    <li><strong>Question:</strong> Will you marry me?</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Usos Clave</h5>
                <p><strong>Decisión instantánea:</strong> "The phone is ringing. I'll answer it!"</p>
                <p><strong>Promesa:</strong> "I will always love you."</p>
            </div>
        </div>
    `,
    43: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🤔 Sugerencias con "Shall"</h4>
                <p>Se usa principalmente en preguntas con **I** o **We** para ofrecer ayuda o hacer sugerencias.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura de Sugerencia</h5>
                <p>"<strong>Shall we</strong> go to the cinema?" <small>(¿Y si vamos al cine?)</small></p>
                <p>"<strong>Shall I</strong> open the window?" <small>(¿Quieres que abra la ventana?)</small></p>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Nota cultural</h5>
                <p>"Shall" suena un poco más formal y educado que "Should". Es muy común en el inglés británico.</p>
            </div>
        </div>
    `,
    44: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🚫 Obligación y Prohibición: Must / Mustn't</h4>
                <p>Se usa para obligaciones fuertes (a menudo internas) y reglas estrictas.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Usos Principales</h5>
                <ul>
                    <li><strong>Must:</strong> Obligación fuerte. <em>"I must study harder."</em></li>
                    <li><strong>Mustn't:</strong> Prohibición. <em>"You mustn't smoke here."</em></li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ ¡Cuidado!</h5>
                <p><strong>Mustn't</strong> NO significa "no tienes que", significa **"está prohibido"**. Si algo es opcional, usamos "don't have to".</p>
            </div>
        </div>
    `,
    45: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>👔 Necesidad: Have to / Don't have to</h4>
                <p>Se usa para obligaciones externas (leyes, reglas del trabajo, deberes escolares).</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura</h5>
                <ul>
                    <li><strong>Have to:</strong> Obligación. <em>"I have to wear a uniform."</em></li>
                    <li><strong>Don't have to:</strong> No es necesario (opcional). <em>"You don't have to come if you're busy."</em></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplo</h5>
                <p>"She <strong>has to</strong> finish the report by tomorrow." <small>(Obligación externa)</small></p>
            </div>
        </div>
    `,
    46: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>💡 Consejos: Should / Shouldn't</h4>
                <p>Se usa para dar o pedir consejos y opiniones. No es una obligación, es una recomendación.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura</h5>
                <p>Sujeto + Should + Verbo (base)</p>
                <ul>
                    <li><strong>Consejo:</strong> "You should drink more water."</li>
                    <li><strong>Pregunta:</strong> "What should I do?"</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplo</h5>
                <p>"You <strong>shouldn't</strong> stay up so late." <small>(No deberías quedarte despierto hasta tan tarde)</small></p>
            </div>
        </div>
    `,
    47: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>📢 Imperativos (Órdenes e Instrucciones)</h4>
                <p>Se usan para dar órdenes directas, instrucciones, advertencias o invitaciones.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura (Sin Sujeto)</h5>
                <p>El imperativo es simplemente el verbo solo al principio de la frase.</p>
                <ul>
                    <li><strong>Afirmativo:</strong> "Open the door!"</li>
                    <li><strong>Negativo:</strong> "Don't touch that!"</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Modales de cortesía</h5>
                <p>Para que no suene grosero, solemos añadir <strong>"Please"</strong>.</p>
                <p>"Sit down, please."</p>
            </div>
        </div>
    `,
    48: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🎯 Infinitivo de Propósito</h4>
                <p>Se usa para explicar **para qué** o **por qué** alguien hace algo.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura (To + Verbo)</h5>
                <p>En español solemos decir "para...", en inglés solo usamos <strong>TO</strong>.</p>
                <p><strong>Ejemplo:</strong> "I went to the store <strong>to buy</strong> bread."</p>
                <p><small>(Fui a la tienda PARA comprar pan)</small></p>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Nota importante</h5>
                <p>¡No uses "for" antes del verbo! Es un error común.</p>
                <p>Correcto: <strong>To learn</strong> (Incorrecto: For learn).</p>
            </div>
        </div>
    `,
    49: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>⚖️ Gerundios vs Infinitivos (A2)</h4>
                <p>Algunos verbos en inglés requieren que el siguiente verbo vaya en <strong>-ing</strong> o con <strong>to</strong>.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 Lista Rápida</h5>
                <ul>
                    <li><strong>Verb + -ing:</strong> Enjoy, Finish, Avoid, Suggest. <em>"I enjoy dancing."</em></li>
                    <li><strong>Verb + to:</strong> Want, Need, Decide, Plan. <em>"I want to go."</em></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplos</h5>
                <p>"I <strong>decided to study</strong> English."</p>
                <p>"She <strong>finished reading</strong> the book."</p>
            </div>
        </div>
    `,
    50: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🚶 Preposiciones de Movimiento</h4>
                <p>Indican la dirección en la que alguien o algo se está moviendo.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🗺️ Direcciones Comunes</h5>
                <ul>
                    <li><strong>Into:</strong> Hacia adentro. <em>"Go into the house."</em></li>
                    <li><strong>Out of:</strong> Hacia afuera. <em>"Get out of the car."</em></li>
                    <li><strong>Through:</strong> A través de. <em>"Walk through the park."</em></li>
                    <li><strong>Towards:</strong> Hacia. <em>"Run towards the goal."</em></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Otras útiles</h5>
                <p><strong>Up / Down</strong> (Arriba/Abajo), <strong>Over</strong> (Por encima), <strong>Past</strong> (Pasando por delante).</p>
            </div>
        </div>
    `
};

topics.forEach(topic => {
    if (a2TheoryBatch2[topic.id]) {
        topic.theory = a2TheoryBatch2[topic.id].trim();
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('A2 Theory Batch 2 COMPLETE (Topics 41-50) with detailed premium content.');
