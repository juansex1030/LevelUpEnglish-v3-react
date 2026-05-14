const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const b2TheoryBatch2 = {
    106: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🔀 Inversión (Introducción)</h4>
                <p>La inversión consiste en poner el auxiliar antes del sujeto en frases que **no** son preguntas. Se usa para dar énfasis o un tono formal.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Cuándo usarla</h5>
                <ul>
                    <li><strong>Expresiones Negativas:</strong> Never, Seldom, Rarely. <em>"<strong>Never have I seen</strong> such a mess."</em></li>
                    <li><strong>Only after / Not only:</strong> <em>"<strong>Not only did he arrive</strong> late, but he also forgot the cake."</em></li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Tono Formal</h5>
                <p>La inversión es muy común en la literatura y en discursos formales. En el habla diaria es poco frecuente pero demuestra un nivel C1/C2.</p>
            </div>
        </div>
    `,
    107: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>✨ Cleft Sentences (Frases Hendidas)</h4>
                <p>Se usan para poner el foco en una parte específica de la oración. Es como usar un "resaltador" en tu lenguaje.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructuras Comunes</h5>
                <ul>
                    <li><strong>IT is/was...:</strong> "It was John who broke the window." (No fue otro, fue John).</li>
                    <li><strong>WHAT...:</strong> "What I need is a coffee." (Lo que necesito es...).</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Comparación</h5>
                <p>Normal: "I love your smile."</p>
                <p>Cleft: "<strong>What I love is</strong> your smile."</p>
            </div>
        </div>
    `,
    108: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>⚖️ Gerundios vs Infinitivos (Avanzado)</h4>
                <p>En nivel B2, estudiamos verbos que cambian totalmente de significado dependiendo de si usamos <strong>-ing</strong> o <strong>to</strong>.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 Verbos que Cambian</h5>
                <ul>
                    <li><strong>Remember:</strong> 
                        <em>Doing:</em> Recordar un recuerdo pasado. 
                        <em>To do:</em> Recordar una tarea pendiente.
                    </li>
                    <li><strong>Stop:</strong> 
                        <em>Doing:</em> Dejar de hacer un hábito. 
                        <em>To do:</em> Detenerse para empezar otra cosa.
                    </li>
                    <li><strong>Try:</strong> 
                        <em>Doing:</em> Experimentar. 
                        <em>To do:</em> Hacer un esfuerzo difícil.
                    </li>
                </ul>
            </div>
        </div>
    `,
    109: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🧩 Phrasal Verbs (Nivel B2)</h4>
                <p>Dominar estos verbos es lo que te hará sonar realmente fluido y natural.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 Phrasal Verbs de Alto Impacto</h5>
                <ul>
                    <li><strong>Look forward to:</strong> Estar ansioso por algo (lleva -ing después).</li>
                    <li><strong>Put up with:</strong> Tolerar.</li>
                    <li><strong>Run out of:</strong> Quedarse sin algo.</li>
                    <li><strong>Make up:</strong> Inventar o reconciliarse.</li>
                    <li><strong>Take after:</strong> Parecerse a un familiar.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplo</h5>
                <p>"I can't <strong>put up with</strong> this noise anymore!"</p>
            </div>
        </div>
    `,
    110: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🎭 Idioms y Expresiones Idiomáticas</h4>
                <p>Los Idioms son frases cuyo significado no se puede deducir de las palabras individuales. Son esenciales para el inglés coloquial.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 Expresiones Populares</h5>
                <ul>
                    <li><strong>Under the weather:</strong> Sentirse mal de salud.</li>
                    <li><strong>Break a leg:</strong> ¡Buena suerte! (en teatro).</li>
                    <li><strong>A piece of cake:</strong> Algo muy fácil.</li>
                    <li><strong>The elephant in the room:</strong> Un problema obvio que nadie menciona.</li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Uso con precaución</h5>
                <p>No abuses de los Idioms en contextos extremadamente formales (como reportes científicos).</p>
            </div>
        </div>
    `,
    111: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🔗 Conectores y Linking Words</h4>
                <p>Son el "pegamento" de tus ideas. Sin ellos, tu inglés suena como una lista de supermercado.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 Clasificación</h5>
                <ul>
                    <li><strong>Contraste:</strong> However, Nevertheless, Although, Despite.</li>
                    <li><strong>Añadir info:</strong> Furthermore, Moreover, In addition.</li>
                    <li><strong>Causa/Efecto:</strong> Consequently, Therefore, Due to.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplo</h5>
                <p>"The test was hard. <strong>However</strong>, I managed to pass."</p>
            </div>
        </div>
    `,
    112: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>📝 Escritura Académica (Intro)</h4>
                <p>Cómo estructurar ensayos, reportes y correos profesionales con un tono formal.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Las Reglas de Oro</h5>
                <ul>
                    <li><strong>No contracciones:</strong> Usa "do not" en lugar de "don't".</li>
                    <li><strong>Vocabulario preciso:</strong> Usa "consume" en lugar de "eat".</li>
                    <li><strong>Voz pasiva:</strong> Para sonar objetivo.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Estructura de Párrafo</h5>
                <p>Topic Sentence → Supporting sentences → Concluding sentence.</p>
            </div>
        </div>
    `,
    113: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🤝 Negociación y Persuasión</h4>
                <p>Habilidades de comunicación para llegar a acuerdos y convencer a otros en inglés.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🗣️ Frases de Poder</h5>
                <ul>
                    <li><strong>"What if we..."</strong> (¿Y si...).</li>
                    <li><strong>"I'm willing to... if you..."</strong> (Estoy dispuesto a... si tú...).</li>
                    <li><strong>"That seems fair."</strong> (Eso parece justo).</li>
                    <li><strong>"Could we find a middle ground?"</strong> (¿Podríamos encontrar un punto medio?).</li>
                </ul>
            </div>
        </div>
    `,
    114: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🎤 Habilidades de Presentación</h4>
                <p>Cómo estructurar una charla en público y mantener a la audiencia interesada.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Partes de la Presentación</h5>
                <ul>
                    <li><strong>Opening:</strong> "I'd like to start by..."</li>
                    <li><strong>Transitions:</strong> "Moving on to my next point..."</li>
                    <li><strong>Closing:</strong> "To wrap up..."</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Consejos</h5>
                <p>Mantén contacto visual, usa un lenguaje sencillo y haz preguntas retóricas.</p>
            </div>
        </div>
    `,
    115: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🧠 Pensamiento Crítico en Inglés</h4>
                <p>Aprende a analizar argumentos, detectar falacias y expresar razonamientos complejos.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🗣️ Lenguaje Analítico</h5>
                <ul>
                    <li><strong>"This suggests that..."</strong> (Esto sugiere que...).</li>
                    <li><strong>"An alternative explanation is..."</strong> (Una explicación alternativa es...).</li>
                    <li><strong>"Evidence shows that..."</strong> (La evidencia muestra que...).</li>
                </ul>
            </div>
        </div>
    `,
    116: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🌍 Matices Culturales</h4>
                <p>Hablar inglés no es solo gramática; es entender la cortesía, el sarcasmo y las normas sociales de los países angloparlantes.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 Temas Clave</h5>
                <ul>
                    <li><strong>Politeness:</strong> El uso excesivo de "Sorry" y "Please" en UK.</li>
                    <li><strong>Small Talk:</strong> Temas seguros (clima, hobbies) vs prohibidos (religión, salario).</li>
                    <li><strong>Directness:</strong> Americanos (más directos) vs Británicos (más indirectos/vagos).</li>
                </ul>
            </div>
        </div>
    `,
    117: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🏁 Repaso General B2</h4>
                <p>¡Increíble! Has alcanzado el umbral de la fluidez profesional. Ahora eres un usuario competente capaz de trabajar y estudiar en inglés.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🚀 Tus Logros</h5>
                <ul>
                    <li>Manejas tiempos narrativos complejos.</li>
                    <li>Entiendes matices culturales y dobles sentidos.</li>
                    <li>Puedes debatir y negociar con argumentos sólidos.</li>
                    <li>Tu escritura es estructurada y profesional.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>🔝 ¿Qué sigue?</h5>
                <p>El nivel <strong>C1 (Avanzado)</strong> te espera para pulir los últimos detalles y alcanzar la maestría total del idioma.</p>
            </div>
        </div>
    `
};

topics.forEach(topic => {
    if (b2TheoryBatch2[topic.id]) {
        topic.theory = b2TheoryBatch2[topic.id].trim();
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('B2 Theory Batch 2 COMPLETE (Topics 106-117) with detailed premium content.');
