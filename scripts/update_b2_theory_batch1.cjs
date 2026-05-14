const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const b2TheoryBatch1 = {
    93: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>⏳ Presente Perfecto Continuo</h4>
                <p>Se usa para acciones que comenzaron en el pasado y continúan en el presente, enfatizando la **duración** o el **proceso**.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura (Have/Has + Been + -ing)</h5>
                <ul>
                    <li>"I <strong>have been studying</strong> all day." <small>(He estado estudiando todo el día).</small></li>
                    <li>"She <strong>has been working</strong> here for years."</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 ¿Cuándo usarlo?</h5>
                <p>1. Para acciones que acaban de terminar y tienen un resultado visible ahora (ej: estás sudado porque <em>has estado corriendo</em>).</p>
                <p>2. Para acciones temporales que han estado ocurriendo últimamente.</p>
            </div>
        </div>
    `,
    94: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🕒 Pasado Perfecto Continuo</h4>
                <p>Se usa para hablar de una acción larga que estaba ocurriendo **antes** de otro punto específico en el pasado.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura (Had + Been + -ing)</h5>
                <p>"The ground was wet because it <strong>had been raining</strong>." <small>(El suelo estaba mojado porque había estado lloviendo).</small></p>
                <p>"I <strong>had been waiting</strong> for two hours when she arrived."</p>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Enfasis en la Causa</h5>
                <p>A diferencia del Pasado Perfecto simple (que enfoca en el resultado), el continuo enfoca en la duración de la actividad que causó el resultado.</p>
            </div>
        </div>
    `,
    95: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>💭 Tercer Condicional (El pasado imposible)</h4>
                <p>Se usa para imaginar cómo habrían sido las cosas si el pasado hubiera sido diferente. Habla de arrepentimientos o críticas.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura (If Past Perfect, Would Have + Participio)</h5>
                <p>"If I <strong>had studied</strong> more, I <strong>would have passed</strong>."</p>
                <p><small>(Si hubiera estudiado más, habría aprobado).</small></p>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplos</h5>
                <p>"If we <strong>had taken</strong> a taxi, we <strong>wouldn't have missed</strong> the flight."</p>
            </div>
        </div>
    `,
    96: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>⚖️ Condicionales Mixtos (Mixed Conditionals)</h4>
                <p>A veces una condición en el pasado tiene un resultado en el **presente**. Aquí es donde mezclamos tiempos.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura Común (If Past Perfect, Would + Base)</h5>
                <p>"If I <strong>had won</strong> the lottery, I <strong>would be</strong> rich now."</p>
                <p><small>(Si hubiera ganado la lotería [pasado], sería rico ahora [presente]).</small></p>
            </div>

            <div class="visual-card card-warning">
                <h5>💡 ¿Por qué usarlos?</h5>
                <p>Sirven para conectar hechos pasados con nuestra realidad actual.</p>
            </div>
        </div>
    `,
    97: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🌠 Wish / If Only (Arrepentimiento Pasado)</h4>
                <p>Se usa para expresar un deseo de que algo en el pasado hubiera sido diferente.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura (Wish + Past Perfect)</h5>
                <ul>
                    <li>"I <strong>wish I had said</strong> something." <small>(Ojalá hubiera dicho algo).</small></li>
                    <li>"<strong>If only</strong> I <strong>hadn't spent</strong> all my money." <small>(Si tan solo no hubiera gastado todo mi dinero).</small></li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Diferencia con el presente</h5>
                <p>Recuerda: Wish + Pasado Simple = deseo presente. Wish + Pasado Perfecto = arrepentimiento pasado.</p>
            </div>
        </div>
    `,
    98: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🔄 Voz Pasiva Avanzada</h4>
                <p>En nivel B2 usamos estructuras pasivas para sonar más objetivos, especialmente en noticias o reportes.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructuras Impersonales</h5>
                <ul>
                    <li><strong>It is said that...</strong> (Se dice que...).</li>
                    <li><strong>He is thought to be...</strong> (Se piensa que él es...).</li>
                    <li><strong>It is believed that...</strong> (Se cree que...).</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplo</h5>
                <p>"It <strong>is believed</strong> that the company will close."</p>
                <p>"The suspect <strong>is thought to have escaped</strong>."</p>
            </div>
        </div>
    `,
    99: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🛠️ Causativo: Have/Get something done</h4>
                <p>Se usa cuando otra persona realiza un servicio para nosotros, usualmente porque le pagamos o se lo pedimos.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura (Have + Objeto + Participio)</h5>
                <p>"I <strong>had my hair cut</strong> yesterday." <small>(Me corté el pelo - alguien más lo hizo).</small></p>
                <p>"She <strong>is getting her car repaired</strong>." <small>(Le están arreglando el carro).</small></p>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Error común</h5>
                <p>No digas "I cut my hair" a menos que tú mismo hayas tomado las tijeras y lo hayas hecho.</p>
            </div>
        </div>
    `,
    100: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🗣️ Reported Speech Avanzado</h4>
                <p>Ya no solo usamos 'say' o 'tell'. En B2 usamos verbos más precisos que indican la intención.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 Verbos de Reporte</h5>
                <ul>
                    <li><strong>Suggest + -ing:</strong> "He suggested <strong>going</strong> to the beach."</li>
                    <li><strong>Refuse + to:</strong> "She refused <strong>to help</strong> me."</li>
                    <li><strong>Accuse of + -ing:</strong> "They accused him <strong>of stealing</strong>."</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplo</h5>
                <p>"He <strong>apologized for being</strong> late." <small>(Él se disculpó por llegar tarde).</small></p>
            </div>
        </div>
    `,
    101: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🕵️ Modales de Deducción (Pasado)</h4>
                <p>Se usan para hacer suposiciones sobre cosas que ya pasaron.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🔍 Grados de Certeza</h5>
                <ul>
                    <li><strong>Must have (Seguro):</strong> "He <strong>must have forgotten</strong>." (Debió habérsele olvidado).</li>
                    <li><strong>Might have (Posible):</strong> "I <strong>might have left</strong> it at home."</li>
                    <li><strong>Can't have (Imposible):</strong> "You <strong>can't have seen</strong> him; he's in Tokyo!"</li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Nota</h5>
                <p>Usamos "could have" para posibilidades pasadas que no ocurrieron. <em>"You could have died!"</em></p>
            </div>
        </div>
    `,
    102: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🚀 Futuro Continuo</h4>
                <p>Se usa para una acción que estará en progreso en un momento determinado del futuro.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura (Will be + -ing)</h5>
                <p>"This time tomorrow, I <strong>will be lying</strong> on the beach."</p>
                <p><small>(Mañana a esta hora estaré acostado en la playa).</small></p>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Uso de Cortesía</h5>
                <p>También se usa para preguntar planes de forma educada: <em>"Will you be using the car later?"</em></p>
            </div>
        </div>
    `,
    103: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🏁 Futuro Perfecto</h4>
                <p>Se usa para decir que algo estará **terminado** antes de un punto específico en el futuro.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura (Will have + Participio)</h5>
                <p>"I <strong>will have finished</strong> the report by 5 PM."</p>
                <p><small>(Habré terminado el reporte para las 5 PM).</small></p>
            </div>

            <div class="visual-card card-warning">
                <h5>📅 Palabra clave: BY</h5>
                <p>Casi siempre usamos "By" (para tal hora/fecha) con el Futuro Perfecto.</p>
            </div>
        </div>
    `,
    104: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>📖 Tiempos Narrativos (Narrative Tenses)</h4>
                <p>Para contar una gran historia, necesitamos combinar todos los pasados que conocemos.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🎭 Los 4 Protagonistas</h5>
                <ul>
                    <li><strong>Past Simple:</strong> Acciones principales. <em>"I went out."</em></li>
                    <li><strong>Past Continuous:</strong> Escenario/Fondo. <em>"The sun was shining."</em></li>
                    <li><strong>Past Perfect:</strong> Hechos anteriores. <em>"I had forgotten my umbrella."</em></li>
                    <li><strong>Past Perfect Continuous:</strong> Duración previa. <em>"It had been raining for days."</em></li>
                </ul>
            </div>
        </div>
    `,
    105: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🔗 Cláusulas de Participio</h4>
                <p>Se usan para acortar frases y dar un tono más literario o académico.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura (-ing / Participio)</h5>
                <ul>
                    <li><strong>Present Participle:</strong> "<strong>Feeling</strong> tired, she went to bed early." <small>(Como se sentía cansada...)</small></li>
                    <li><strong>Past Participle:</strong> "<strong>Born</strong> in 1990, he grew up in Madrid."</li>
                    <li><strong>Perfect Participle:</strong> "<strong>Having finished</strong> the test, he left."</li>
                </ul>
            </div>
        </div>
    `
};

topics.forEach(topic => {
    if (b2TheoryBatch1[topic.id]) {
        topic.theory = b2TheoryBatch1[topic.id].trim();
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('B2 Theory Batch 1 COMPLETE (Topics 93-105) with detailed premium content.');
