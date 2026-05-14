const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const b1TheoryBatch1 = {
    63: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>✨ Presente Perfecto (Introducción)</h4>
                <p>Se usa para hablar de **experiencias** en nuestra vida sin decir exactamente cuándo ocurrieron, o acciones que empezaron en el pasado y continúan hoy.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura (Have / Has + Participio)</h5>
                <ul>
                    <li>I / You / We / They + <strong>have</strong> + eaten.</li>
                    <li>He / She / It + <strong>has</strong> + eaten.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplos Clave</h5>
                <p>"I <strong>have traveled</strong> to Italy." <small>(He viajado a Italia - Experiencia)</small></p>
                <p>"She <strong>has lost</strong> her keys." <small>(Ha perdido sus llaves - Resultado ahora)</small></p>
            </div>
        </div>
    `,
    64: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>⏳ For vs Since</h4>
                <p>Ambas se usan con el Presente Perfecto para indicar cuánto tiempo lleva ocurriendo algo.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>⚖️ La Diferencia</h5>
                <ul>
                    <li><strong>FOR:</strong> Indica un **periodo de tiempo** (duración). <em>For 2 hours, For 5 years.</em></li>
                    <li><strong>SINCE:</strong> Indica un **punto específico** en el tiempo (inicio). <em>Since 1990, Since Monday, Since I was a child.</em></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplos</h5>
                <p>"I have lived here <strong>for</strong> ten years."</p>
                <p>"I have lived here <strong>since</strong> 2014."</p>
            </div>
        </div>
    `,
    65: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🕒 Just, Already, Yet</h4>
                <p>Estas palabras dan información extra sobre el tiempo en el Presente Perfecto.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 ¿Cómo usarlos?</h5>
                <ul>
                    <li><strong>Just:</strong> Acaba de ocurrir. <em>"I've just finished."</em></li>
                    <li><strong>Already:</strong> Ya ocurrió (antes de lo esperado). <em>"I've already eaten."</em></li>
                    <li><strong>Yet:</strong> Todavía no (en negaciones y preguntas). <em>"I haven't finished yet." / "Have you finished yet?"</em></li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Posición</h5>
                <p><strong>Just</strong> y <strong>Already</strong> van entre el auxiliar 'have' y el verbo. <strong>Yet</strong> siempre va al final de la frase.</p>
            </div>
        </div>
    `,
    66: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>⚖️ Present Perfect vs Past Simple</h4>
                <p>Es la duda más común en el nivel B1. La clave está en el **tiempo**.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🔍 Diferencia Crítica</h5>
                <ul>
                    <li><strong>Past Simple:</strong> Tiempo terminado y específico. <em>"I saw him yesterday."</em></li>
                    <li><strong>Present Perfect:</strong> Tiempo no terminado o no mencionado. <em>"I have seen him before."</em></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Palabras que definen el tiempo</h5>
                <p>Past Simple: <em>Yesterday, In 1990, Last week.</em></p>
                <p>Present Perfect: <em>Ever, Never, So far, Already.</em></p>
            </div>
        </div>
    `,
    67: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🔄 Voz Pasiva (Presente)</h4>
                <p>Se usa cuando el objeto de la acción es más importante que quien la realiza, o cuando no sabemos quién la hizo.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura (Am/Is/Are + Participio)</h5>
                <p>Activa: "Farmers grow coffee in Brazil."</p>
                <p>Pasiva: "Coffee <strong>is grown</strong> in Brazil."</p>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 ¿Cuándo usarla?</h5>
                <p>Para procesos, noticias o hechos generales donde el "actor" es irrelevante.</p>
                <p>"The office <strong>is cleaned</strong> every day."</p>
            </div>
        </div>
    `,
    68: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🏛️ Voz Pasiva (Pasado)</h4>
                <p>Muy común para hablar de historia, arte o crímenes pasados.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura (Was/Were + Participio)</h5>
                <p>Activa: "Shakespeare wrote Romeo and Juliet."</p>
                <p>Pasiva: "Romeo and Juliet <strong>was written</strong> by Shakespeare."</p>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 El agente: BY</h5>
                <p>Si quieres mencionar quién hizo la acción, usa la palabra <strong>BY</strong>.</p>
                <p>"The car <strong>was repaired by</strong> a mechanic."</p>
            </div>
        </div>
    `,
    69: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🔗 Relative Clauses (Avanzado)</h4>
                <p>En nivel B1 profundizamos en cómo dar información extra sin empezar una frase nueva.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 Tipos de Cláusulas</h5>
                <ul>
                    <li><strong>Defining:</strong> Esencial para saber de quién hablamos. <em>"The man who stole my bag."</em></li>
                    <li><strong>Non-defining:</strong> Información extra (va entre comas). <em>"My brother, who lives in NY, is coming."</em></li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Uso de "Whose"</h5>
                <p>Se usa para posesión. <em>"The boy whose father is a pilot."</em> (El niño cuyo padre es piloto).</p>
            </div>
        </div>
    `,
    70: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>⚖️ Zero Conditional (Hechos)</h4>
                <p>Se usa para verdades universales, hechos científicos o situaciones que siempre son ciertas.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura (If Present, Present)</h5>
                <p>"If you <strong>heat</strong> ice, it <strong>melts</strong>."</p>
                <p>"If I <strong>drink</strong> too much coffee, I <strong>don't sleep</strong>."</p>
            </div>

            <div class="visual-card card-warning">
                <h5>💡 Sustitución por "When"</h5>
                <p>En el Zero Conditional, casi siempre puedes cambiar "If" por "When" sin perder el sentido.</p>
            </div>
        </div>
    `,
    71: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🚀 First Conditional (Posibilidad Real)</h4>
                <p>Se usa para hablar de situaciones futuras que son muy probables si se cumple una condición.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura (If Present, Will)</h5>
                <p>"If it <strong>rains</strong> tomorrow, I <strong>will stay</strong> home."</p>
                <p>"If you <strong>study</strong>, you <strong>will pass</strong> the exam."</p>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Nota importante</h5>
                <p>¡Nunca pongas "will" en la parte del "If"!</p>
                <p>Correcto: <strong>If I win...</strong> (Incorrecto: If I will win...).</p>
            </div>
        </div>
    `,
    72: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>💭 Second Conditional (Imaginario)</h4>
                <p>Se usa para situaciones hipotéticas, sueños o consejos (cosas poco probables o irreales).</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura (If Past, Would)</h5>
                <p>"If I <strong>won</strong> the lottery, I <strong>would buy</strong> a mansion."</p>
                <p>"If I <strong>were</strong> you, I <strong>would call</strong> her."</p>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ El uso de "WERE"</h5>
                <p>En el Second Conditional, solemos usar <strong>WERE</strong> para todos los sujetos, incluyendo I, He, She, It (en lugar de 'was').</p>
                <p>Ejemplo: "If she <strong>were</strong> rich..."</p>
            </div>
        </div>
    `
};

topics.forEach(topic => {
    if (b1TheoryBatch1[topic.id]) {
        topic.theory = b1TheoryBatch1[topic.id].trim();
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('B1 Theory Batch 1 COMPLETE (Topics 63-72) with detailed premium content.');
