const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const b1TheoryBatch3 = {
    83: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🕒 Pasado Perfecto (El "pasado del pasado")</h4>
                <p>Se usa para hablar de una acción que ocurrió **antes** de otra acción en el pasado.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura (Had + Participio)</h5>
                <p>Sujeto + <strong>had</strong> + Verbo en 3ra columna.</p>
                <p><strong>Ejemplo:</strong> "When I arrived, the train <strong>had left</strong>."</p>
                <p><small>(Cuando llegué, el tren ya se había ido).</small></p>
            </div>

            <div class="visual-card card-warning">
                <h5>💡 Uso con "Already"</h5>
                <p>Es muy común usarlo con 'already' para enfatizar que algo ya había terminado.</p>
                <p><em>"I had already eaten when they invited me."</em></p>
            </div>
        </div>
    `,
    84: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🌠 Expresar Deseos: Wish (Presente)</h4>
                <p>Se usa para expresar que queremos que una situación presente sea diferente (deseos imaginarios).</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura (Wish + Pasado)</h5>
                <p>Aunque el deseo es para el presente, usamos el verbo en **pasado**.</p>
                <ul>
                    <li>"I wish I <strong>had</strong> more money." <small>(Desearía tener más dinero).</small></li>
                    <li>"I wish I <strong>were</strong> taller." <small>(Desearía ser más alto).</small></li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Nota sobre "Were"</h5>
                <p>Al igual que en el condicional, es más común y correcto usar <strong>were</strong> para todos los sujetos (I, He, She, It).</p>
            </div>
        </div>
    `,
    85: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🏃 Adverbios de Modo (Adverbs of Manner)</h4>
                <p>Describen **cómo** se realiza una acción.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 Regla General (-LY)</h5>
                <p>Se forman añadiendo <strong>-ly</strong> al adjetivo.</p>
                <ul>
                    <li>Quick → Quick<strong>ly</strong> (Rápidamente).</li>
                    <li>Careful → Careful<strong>ly</strong> (Cuidadosamente).</li>
                    <li>Happy → Happi<strong>ly</strong> (Felizmente).</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>🌟 Irregulares</h5>
                <ul>
                    <li>Good → <strong>Well</strong>. <em>"He plays well."</em></li>
                    <li>Fast → <strong>Fast</strong>. <em>"He runs fast."</em></li>
                    <li>Hard → <strong>Hard</strong>. <em>"He works hard."</em></li>
                </ul>
            </div>
        </div>
    `,
    86: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🧩 Phrasal Verbs (Intermedio)</h4>
                <p>En este nivel, nos enfocamos en Phrasal Verbs que son muy comunes en el habla diaria y profesional.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 Lista de Supervivencia</h5>
                <ul>
                    <li><strong>Find out:</strong> Descubrir información.</li>
                    <li><strong>Set up:</strong> Configurar o establecer.</li>
                    <li><strong>Give up:</strong> Rendirse o dejar un hábito.</li>
                    <li><strong>Pick up:</strong> Recoger a alguien o algo.</li>
                    <li><strong>Grow up:</strong> Crecer (persona).</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplos</h5>
                <p>"I need to <strong>find out</strong> what happened."</p>
                <p>"Don't <strong>give up</strong> on your dreams!"</p>
            </div>
        </div>
    `,
    87: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🗣️ Dar Opiniones (Giving Opinions)</h4>
                <p>Aprende a expresar tu punto de vista de forma variada y natural.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 Frases para Empezar</h5>
                <ul>
                    <li><strong>In my opinion...</strong></li>
                    <li><strong>From my point of view...</strong></li>
                    <li><strong>As far as I'm concerned...</strong> (Más formal).</li>
                    <li><strong>To be honest...</strong> (Para ser honesto).</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>🤝 Estar de acuerdo o en desacuerdo</h5>
                <p>Acuerdo: <strong>"I totally agree with you."</strong></p>
                <p>Desacuerdo: <strong>"I'm afraid I disagree."</strong> (Muy educado).</p>
            </div>
        </div>
    `,
    88: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🌟 Describiendo Experiencias</h4>
                <p>Usa una mezcla de Presente Perfecto y Pasado Simple para contar historias interesantes.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ El flujo de la historia</h5>
                <p>1. Introduce con Presente Perfecto: <strong>"I have been to Japan."</strong></p>
                <p>2. Da detalles con Pasado Simple: <strong>"I went there in 2019 and I ate amazing sushi."</strong></p>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Adjetivos para Impactar</h5>
                <p>Usa palabras como <strong>amazing, life-changing, challenging, unforgettable</strong>.</p>
            </div>
        </div>
    `,
    89: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🔮 Hacer Predicciones</h4>
                <p>Cómo hablar de lo que crees que pasará en el futuro con diferentes niveles de certeza.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📊 Niveles de Certeza</h5>
                <ul>
                    <li><strong>Will:</strong> Predicción general. <em>"I think it will rain."</em></li>
                    <li><strong>Going to:</strong> Basado en evidencia. <em>"Look at those clouds, it's going to rain."</em></li>
                    <li><strong>Probably:</strong> <em>"He will probably win."</em></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Estructuras de Pensamiento</h5>
                <p>"I <strong>believe</strong> that..." | "I <strong>expect</strong> that..." | "I <strong>doubt</strong> that..."</p>
            </div>
        </div>
    `,
    90: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🤝 Socializar y Networking</h4>
                <p>Frases para romper el hielo y mantener conversaciones fluidas en eventos sociales.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🗣️ Romper el Hielo (Icebreakers)</h5>
                <ul>
                    <li><strong>"So, what brings you here?"</strong></li>
                    <li><strong>"Have you been here before?"</strong></li>
                    <li><strong>"How do you know the host?"</strong></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Seguir la Conversación</h5>
                <p>Usa <strong>Follow-up questions</strong>: "¿En serio? ¿Y qué pasó después?" (Really? And what happened then?).</p>
            </div>
        </div>
    `,
    91: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>👔 Introducción al Business English</h4>
                <p>El lenguaje que necesitas para sonar profesional en una oficina o entrevista.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>💼 Vocabulario Corporativo</h5>
                <ul>
                    <li><strong>Colleagues:</strong> Compañeros de trabajo.</li>
                    <li><strong>Deadline:</strong> Fecha límite.</li>
                    <li><strong>Feedback:</strong> Retroalimentación.</li>
                    <li><strong>Meeting / Briefing:</strong> Reunión.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>🗣️ Frases Profesionales</h5>
                <p>"Let's <strong>schedule</strong> a meeting."</p>
                <p>"I'll <strong>get back to you</strong> on that." <small>(Te daré una respuesta luego).</small></p>
            </div>
        </div>
    `,
    92: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🏁 Repaso General B1</h4>
                <p>¡Increíble! Has alcanzado el nivel intermedio. Ahora eres un usuario independiente del inglés.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🚀 Tus nuevos superpoderes</h5>
                <ul>
                    <li>Puedes hablar de experiencias pasadas con tiempos perfectos.</li>
                    <li>Entiendes y usas la voz pasiva.</li>
                    <li>Puedes plantear situaciones hipotéticas con condicionales.</li>
                    <li>Tienes herramientas para el entorno laboral y social.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>🔜 ¿Qué sigue?</h5>
                <p>El nivel <strong>B2 (Intermedio Alto)</strong> te llevará a la fluidez total, con estructuras narrativas avanzadas y gramática de precisión.</p>
            </div>
        </div>
    `
};

topics.forEach(topic => {
    if (b1TheoryBatch3[topic.id]) {
        topic.theory = b1TheoryBatch3[topic.id].trim();
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('B1 Theory Batch 3 COMPLETE (Topics 83-92) with detailed premium content.');
