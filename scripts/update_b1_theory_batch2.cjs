const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const b1TheoryBatch2 = {
    73: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🕵️ Modales de Deducción (Presente)</h4>
                <p>Se usan cuando hacemos una suposición basada en la evidencia que tenemos.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🔍 Niveles de Certeza</h5>
                <ul>
                    <li><strong>Must (90-100% seguro):</strong> "He must be at work. His car is gone."</li>
                    <li><strong>Might / Could / May (50% seguro):</strong> "It might rain later."</li>
                    <li><strong>Can't (90-100% seguro de que NO):</strong> "He can't be rich. He has no money."</li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ ¡Nota importante!</h5>
                <p>No usamos "mustn't" para deducciones negativas. Usamos <strong>can't</strong>.</p>
            </div>
        </div>
    `,
    74: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>⚖️ Cuantificadores: Few, Little, Many, Much</h4>
                <p>Saber elegir el cuantificador correcto depende de si el sustantivo es contable o incontable.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📊 Mapa de Cantidades</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Sentido</th>
                            <th>Contables (Plural)</th>
                            <th>Incontables</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Mucho</strong></td>
                            <td>Many</td>
                            <td>Much</td>
                        </tr>
                        <tr>
                            <td><strong>Poco</strong></td>
                            <td>Few / A few</td>
                            <td>Little / A little</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Diferencia Sutil</h5>
                <p><strong>A few / A little:</strong> Sentido positivo (un poco, algo). <em>"I have a little money."</em></p>
                <p><strong>Few / Little:</strong> Sentido negativo (casi nada). <em>"I have little money."</em></p>
            </div>
        </div>
    `,
    75: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🪞 Pronombres Reflexivos</h4>
                <p>Se usan cuando el sujeto y el objeto de la oración son la misma persona.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ La Lista de Espejos</h5>
                <ul>
                    <li>I → <strong>Myself</strong>.</li>
                    <li>You → <strong>Yourself / Yourselves</strong>.</li>
                    <li>He → <strong>Himself</strong>.</li>
                    <li>She → <strong>Herself</strong>.</li>
                    <li>It → <strong>Itself</strong>.</li>
                    <li>We → <strong>Ourselves</strong>.</li>
                    <li>They → <strong>Themselves</strong>.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplos</h5>
                <p>"I cut <strong>myself</strong> while cooking."</p>
                <p>"She taught <strong>herself</strong> English."</p>
            </div>
        </div>
    `,
    76: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>💬 Question Tags (¿Verdad?)</h4>
                <p>Son pequeñas preguntas al final de una frase para confirmar información o buscar acuerdo.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>⚖️ Regla de los Opuestos</h5>
                <ul>
                    <li>Frase (+) → Tag (-): <em>"You are tired, <strong>aren't you?</strong>"</em></li>
                    <li>Frase (-) → Tag (+): <em>"You don't smoke, <strong>do you?</strong>"</em></li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>🔍 Caso Especial</h5>
                <p>Con "I am", el tag es <strong>aren't I?</strong></p>
                <p><em>"I am late, aren't I?"</em></p>
            </div>
        </div>
    `,
    77: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🤝 Preguntas Indirectas (Cortesía)</h4>
                <p>Se usan para sonar más educado o formal al pedir información.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ El Cambio de Orden</h5>
                <p>Cuando la pregunta está dentro de otra frase, el orden vuelve a ser normal (Sujeto + Verbo).</p>
                <p>Directa: "Where is the bank?"</p>
                <p>Indirecta: "Can you tell me <strong>where the bank is</strong>?" (No: "where is the bank").</p>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Frases de Apertura</h5>
                <ul>
                    <li>"Do you know...?"</li>
                    <li>"Could you tell me...?"</li>
                    <li>"I was wondering if..."</li>
                </ul>
            </div>
        </div>
    `,
    78: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🗣️ Reported Speech (Estilo Indirecto)</h4>
                <p>Se usa para contar lo que otra persona dijo. En inglés, solemos "dar un paso atrás" en el tiempo gramatical.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>⏳ El Cambio de Tiempos</h5>
                <ul>
                    <li>Presente Simple → <strong>Pasado Simple</strong>.</li>
                    <li>Presente Continuo → <strong>Pasado Continuo</strong>.</li>
                    <li>Will → <strong>Would</strong>.</li>
                    <li>Can → <strong>Could</strong>.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplo</h5>
                <p>Directo: "I am happy."</p>
                <p>Reported: "He said that <strong>he was</strong> happy."</p>
            </div>
        </div>
    `,
    79: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>✨ Intensificadores: So vs Such</h4>
                <p>Ambos significan "tan", pero se usan con estructuras diferentes.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>⚖️ Diferencia de Uso</h5>
                <ul>
                    <li><strong>SO + Adjetivo / Adverbio:</strong> <em>"He is <strong>so tall</strong>."</em></li>
                    <li><strong>SUCH + (Adjetivo) + Sustantivo:</strong> <em>"He is <strong>such a tall man</strong>."</em></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplos</h5>
                <p>"The movie was <strong>so good</strong>."</p>
                <p>"It was <strong>such a good movie</strong>."</p>
            </div>
        </div>
    `,
    80: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>⚖️ Both, Neither, Either</h4>
                <p>Se usan para hablar de **dos** personas o cosas.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 ¿Cómo elegir?</h5>
                <ul>
                    <li><strong>Both:</strong> Los dos. <em>"Both John and Mary are here."</em></li>
                    <li><strong>Neither:</strong> Ninguno de los dos. <em>"Neither of them is ready."</em></li>
                    <li><strong>Either:</strong> Cualquiera de los dos (uno u otro). <em>"You can have either tea or coffee."</em></li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>🔗 Las Parejas Clave</h5>
                <p><strong>Neither</strong> va con <strong>nor</strong>. | <strong>Either</strong> va con <strong>or</strong>.</p>
            </div>
        </div>
    `,
    81: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🔄 Habituación: Get used to / Be used to</h4>
                <p>No lo confundas con "Used to" (hábito pasado). Estos hablan de **acostumbrarse**.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Las Dos Formas</h5>
                <ul>
                    <li><strong>Be used to:</strong> Ya estás acostumbrado. <em>"I am used to the cold."</em></li>
                    <li><strong>Get used to:</strong> Estás en proceso de acostumbrarte. <em>"I am getting used to my new job."</em></li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Nota Gramatical</h5>
                <p>Después de estas estructuras, siempre usamos un **Sustantivo** o un **Verbo con -ing**.</p>
                <p><em>"I am used to <strong>driving</strong> on the left."</em></p>
            </div>
        </div>
    `,
    82: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🕒 Pasado Continuo</h4>
                <p>Se usa para acciones que estaban en progreso en un momento específico del pasado.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura (Was/Were + -ing)</h5>
                <ul>
                    <li>I <strong>was studying</strong>.</li>
                    <li>They <strong>were playing</strong>.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Uso con el Pasado Simple</h5>
                <p>Solemos usar el Pasado Continuo para la acción larga y el Pasado Simple para la interrupción.</p>
                <p>"I <strong>was watching</strong> TV when the phone <strong>rang</strong>."</p>
            </div>
        </div>
    `
};

topics.forEach(topic => {
    if (b1TheoryBatch2[topic.id]) {
        topic.theory = b1TheoryBatch2[topic.id].trim();
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('B1 Theory Batch 2 COMPLETE (Topics 73-82) with detailed premium content.');
