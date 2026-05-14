const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const a1TheoryBatch2 = {
    11: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>💼 Empleos y Profesiones (Jobs & Professions)</h4>
                <p>Aprender a hablar sobre lo que haces es fundamental para tu identidad social en inglés.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏥 Profesiones Comunes</h5>
                <ul>
                    <li><strong>Doctor / Nurse:</strong> Médico / Enfermero.</li>
                    <li><strong>Teacher / Student:</strong> Profesor / Estudiante.</li>
                    <li><strong>Engineer / Architect:</strong> Ingeniero / Arquitecto.</li>
                    <li><strong>Chef / Waiter:</strong> Cocinero / Mesero.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 ¿Cómo preguntar y responder?</h5>
                <p><strong>Pregunta:</strong> "What do you do?" <small>(¿A qué te dedicas?)</small></p>
                <p><strong>Respuesta:</strong> "I am <strong>a</strong> teacher." <small>(Soy profesor)</small></p>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ El uso del artículo</h5>
                <p>En inglés, siempre debes usar <strong>a</strong> o <strong>an</strong> antes de una profesión en singular.</p>
                <p>Correcto: <strong>"I am a doctor."</strong> (Incorrecto: "I am doctor").</p>
            </div>
        </div>
    `,
    12: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🏢 Vocabulario del Lugar de Trabajo</h4>
                <p>Palabras útiles para moverte en una oficina o entorno laboral.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📁 Objetos de Oficina</h5>
                <ul>
                    <li><strong>Desk / Chair:</strong> Escritorio / Silla.</li>
                    <li><strong>Computer / Laptop:</strong> Computadora / Portátil.</li>
                    <li><strong>Printer / Scanner:</strong> Impresora / Escáner.</li>
                    <li><strong>File / Folder:</strong> Archivo / Carpeta.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Acciones en el trabajo</h5>
                <p>"I <strong>work</strong> in an office." <small>(Trabajo en una oficina)</small></p>
                <p>"He <strong>attends</strong> meetings." <small>(Él asiste a reuniones)</small></p>
            </div>
        </div>
    `,
    13: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🍎 Sustantivos: Singular y Plural</h4>
                <p>Para hablar de más de una cosa, necesitamos cambiar la terminación de la palabra.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 Reglas de Pluralización</h5>
                <ul>
                    <li><strong>Regla General:</strong> Añade <strong>-s</strong>. <em>Car → Cars.</em></li>
                    <li><strong>Terminadas en S, CH, SH, X:</strong> Añade <strong>-es</strong>. <em>Bus → Buses, Watch → Watches.</em></li>
                    <li><strong>Terminadas en Consonante + Y:</strong> Cambia la Y por <strong>-ies</strong>. <em>City → Cities.</em></li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Plurales Irregulares</h5>
                <p>Algunas palabras no siguen las reglas anteriores:</p>
                <ul>
                    <li>Child → <strong>Children</strong></li>
                    <li>Person → <strong>People</strong></li>
                    <li>Man → <strong>Men</strong></li>
                    <li>Woman → <strong>Women</strong></li>
                </ul>
            </div>
        </div>
    `,
    14: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>✏️ Artículos: A / An</h4>
                <p>Se usan para hablar de una sola cosa de forma general (un / una).</p>
            </div>

            <div class="visual-card card-structure">
                <h5>⚖️ La Regla de Oro</h5>
                <p>La elección no depende de cómo se escribe, sino de cómo **suena** la siguiente palabra:</p>
                <ul>
                    <li><strong>A:</strong> Antes de sonido de **consonante**. <em>A car, A book.</em></li>
                    <li><strong>An:</strong> Antes de sonido de **vocal**. <em>An apple, An orange.</em></li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>🔍 Casos Especiales</h5>
                <ul>
                    <li><strong>A university:</strong> "University" suena como "you", que es sonido consonántico.</li>
                    <li><strong>An hour:</strong> La "H" es muda, por lo que empezamos con sonido de vocal.</li>
                </ul>
            </div>
        </div>
    `,
    15: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>👉 Demostrativos: This, That, These, Those</h4>
                <p>Se usan para señalar objetos dependiendo de su cantidad y distancia.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📍 Mapa de Distancia</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Distancia</th>
                            <th>Singular</th>
                            <th>Plural</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Cerca</strong></td>
                            <td>This (Este)</td>
                            <td>These (Estos)</td>
                        </tr>
                        <tr>
                            <td><strong>Lejos</strong></td>
                            <td>That (Ese)</td>
                            <td>Those (Esos)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplos</h5>
                <p>"<strong>This</strong> is my pen." <small>(Cerca)</small></p>
                <p>"<strong>That</strong> is a plane." <small>(Lejos)</small></p>
                <p>"<strong>These</strong> are my friends." <small>(Plural/Cerca)</small></p>
            </div>
        </div>
    `,
    16: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🎨 Adjetivos Comunes</h4>
                <p>Los adjetivos sirven para describir personas, animales o cosas. Son la "sal y pimienta" de las frases.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📏 Opuestos Útiles</h5>
                <ul>
                    <li><strong>Big / Small:</strong> Grande / Pequeño.</li>
                    <li><strong>Hot / Cold:</strong> Caliente / Frío.</li>
                    <li><strong>Happy / Sad:</strong> Feliz / Triste.</li>
                    <li><strong>New / Old:</strong> Nuevo / Viejo.</li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Regla de Oro de los Adjetivos</h5>
                <p>En inglés, el adjetivo casi siempre va **antes** del sustantivo y **nunca** se pone en plural.</p>
                <p>Correcto: <strong>"The red cars"</strong> (Incorrecto: "The cars reds").</p>
            </div>
        </div>
    `,
    17: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>👤 Describiendo Personas</h4>
                <p>Vocabulario para hablar sobre la apariencia física y la personalidad.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>💇 Apariencia Física</h5>
                <ul>
                    <li><strong>Tall / Short:</strong> Alto / Bajo.</li>
                    <li><strong>Slim / Fat:</strong> Delgado / Gordo.</li>
                    <li><strong>Young / Old:</strong> Joven / Viejo.</li>
                    <li><strong>Beautiful / Handsome:</strong> Hermosa / Guapo.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Personalidad</h5>
                <ul>
                    <li><strong>Kind:</strong> Amable.</li>
                    <li><strong>Funny:</strong> Divertido.</li>
                    <li><strong>Smart:</strong> Inteligente.</li>
                </ul>
            </div>
        </div>
    `,
    18: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🌈 Los Colores</h4>
                <p>Los colores se usan como adjetivos para dar más detalle a nuestras descripciones.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🎨 Paleta Básica</h5>
                <div class="color-list">
                    <p><span style="color:red">●</span> <strong>Red:</strong> Rojo.</p>
                    <p><span style="color:blue">●</span> <strong>Blue:</strong> Azul.</p>
                    <p><span style="color:green">●</span> <strong>Green:</strong> Verde.</p>
                    <p><span style="color:yellow; background:black">●</span> <strong>Yellow:</strong> Amarillo.</p>
                    <p><span style="color:white; background:black">●</span> <strong>White:</strong> Blanco.</p>
                    <p><span>●</span> <strong>Black:</strong> Negro.</p>
                </div>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplo de uso</h5>
                <p>"I have a <strong>blue</strong> car." <small>(Tengo un carro azul)</small></p>
                <p>"The sky is <strong>grey</strong> today." <small>(El cielo está gris hoy)</small></p>
            </div>
        </div>
    `,
    19: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>⏰ Presente Simple (Afirmativo)</h4>
                <p>Se usa para hablar de rutinas, hábitos y verdades universales.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>⚙️ La Regla de la Tercera Persona</h5>
                <p>Para <strong>He, She, It</strong>, el verbo casi siempre lleva una <strong>-s</strong> al final.</p>
                <ul>
                    <li>I <strong>work</strong>.</li>
                    <li>You <strong>work</strong>.</li>
                    <li>He/She <strong>works</strong>. (¡Aquí está la S!)</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplos</h5>
                <p>"I <strong>play</strong> tennis every Saturday."</p>
                <p>"She <strong>drinks</strong> coffee in the morning."</p>
            </div>
        </div>
    `,
    20: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🚫 Presente Simple (Negativo y Preguntas)</h4>
                <p>Para negar o preguntar, necesitamos un "ayudante" llamado **Auxiliar**.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🛠️ El Auxiliar: DO / DOES</h5>
                <ul>
                    <li><strong>DO:</strong> Para I, You, We, They.</li>
                    <li><strong>DOES:</strong> Para He, She, It.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>❓ Estructura de Pregunta</h5>
                <p>Auxiliar + Sujeto + Verbo + ?</p>
                <p>"<strong>Do</strong> you like pizza?"</p>
                <p>"<strong>Does</strong> he speak English?" (Nota: Cuando usas 'does', el verbo pierde la 's').</p>
            </div>

            <div class="visual-card card-warning">
                <h5>❌ Estructura de Negación</h5>
                <p>Sujeto + Auxiliar + NOT + Verbo</p>
                <p>"I <strong>don't</strong> (do not) like pizza."</p>
                <p>"She <strong>doesn't</strong> (does not) like pizza."</p>
            </div>
        </div>
    `
};

topics.forEach(topic => {
    if (a1TheoryBatch2[topic.id]) {
        topic.theory = a1TheoryBatch2[topic.id].trim();
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('A1 Theory Batch 2 COMPLETE (Topics 11-20) with detailed premium content.');
