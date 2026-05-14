const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const c1TheoryBatch2 = {
    129: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🎯 Vocabulario de Precisión</h4>
                <p>En el nivel C1, dejamos de usar palabras "comodín" (como <em>good, bad, big</em>) y empezamos a usar términos que capturan el matiz exacto.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 Sustituciones de Alto Nivel</h5>
                <ul>
                    <li><strong>Very happy:</strong> Elated, Thrilled, Ecstatic.</li>
                    <li><strong>Very small:</strong> Minute, Infinitesimal, Tiny.</li>
                    <li><strong>Very important:</strong> Crucial, Vital, Paramount.</li>
                    <li><strong>Very boring:</strong> Tedious, Monotonous, Humdrum.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplo</h5>
                <p>"The impact of the new policy was <strong>paramount</strong> to the success of the project."</p>
            </div>
        </div>
    `,
    130: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🎭 Idioms Avanzados</h4>
                <p>Estas expresiones demuestran un dominio profundo de la cultura y la lengua inglesa.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 La Lista de Maestría</h5>
                <ul>
                    <li><strong>Back to the drawing board:</strong> Empezar de cero tras un fallo.</li>
                    <li><strong>Burning the midnight oil:</strong> Trabajar hasta muy tarde.</li>
                    <li><strong>Through thick and thin:</strong> En las buenas y en las malas.</li>
                    <li><strong>Take it with a grain of salt:</strong> No tomarlo literalmente o con total credibilidad.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplo</h5>
                <p>"The proposal failed, so it's <strong>back to the drawing board</strong> for the marketing team."</p>
            </div>
        </div>
    `,
    131: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>💼 Comunicación Profesional de Alto Nivel</h4>
                <p>Cómo liderar reuniones, manejar conflictos y negociar acuerdos complejos con diplomacia y autoridad.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🗣️ Lenguaje Diplomático</h5>
                <ul>
                    <li><strong>"I'm not entirely convinced that..."</strong> <small>(Suena mejor que "estás equivocado").</small></li>
                    <li><strong>"Could we explore other avenues?"</strong> <small>(¿Podemos ver otras opciones?).</small></li>
                    <li><strong>"I see your point, however..."</strong> <small>(Entiendo tu punto, pero...).</small></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Mitigar el impacto</h5>
                <p>Uso de adverbios de "suavizado": <em>Slightly, Somewhat, To some extent.</em></p>
            </div>
        </div>
    `,
    132: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>📝 Escritura Académica (Nivel C1)</h4>
                <p>Producción de textos complejos como ensayos críticos, tesis o reportes técnicos de alta calidad.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Cohesión y Coherencia</h5>
                <ul>
                    <li><strong>Nominalización:</strong> Convertir verbos en sustantivos para sonar más académico (ej: <em>"The implementation"</em> en lugar de <em>"We implemented"</em>).</li>
                    <li><strong>Conectores complejos:</strong> Notwithstanding, Conversely, Albeit.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Ejemplo de Tono</h5>
                <p><strong>Básico:</strong> "People think the law is good."</p>
                <p><strong>C1 Académico:</strong> "It is widely contended that the legislation yields positive outcomes."</p>
            </div>
        </div>
    `,
    133: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🗣️ Debate Complejo y Argumentación</h4>
                <p>Habilidad para defender posturas en temas polémicos, refutar argumentos y sintetizar ideas en tiempo real.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura del Argumento</h5>
                <p>1. <strong>Claim:</strong> Tu postura principal.</p>
                <p>2. <strong>Warrant:</strong> La lógica que conecta la evidencia con tu postura.</p>
                <p>3. <strong>Counter-argument:</strong> Anticipar lo que dirá el otro y neutralizarlo.</p>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Frases de Debate</h5>
                <p>"While it may be true that X, one must consider Y..."</p>
            </div>
        </div>
    `,
    134: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🧠 Conceptos Abstractos</h4>
                <p>Aprende a discutir temas filosóficos, sociológicos y psicológicos que no tienen una representación física clara.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 Vocabulario Abstracto</h5>
                <ul>
                    <li><strong>Resilience:</strong> Resiliencia.</li>
                    <li><strong>Integrity:</strong> Integridad.</li>
                    <li><strong>Paradigm shift:</strong> Cambio de paradigma.</li>
                    <li><strong>Subjectivity:</strong> Subjetividad.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Ejemplo</h5>
                <p>"The current <strong>paradigm shift</strong> in technology is redefining human interaction."</p>
            </div>
        </div>
    `,
    135: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🎨 Análisis de Literatura y Arte</h4>
                <p>Capacidad para analizar simbolismos, metáforas y el trasfondo histórico de obras culturales.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 Lenguaje Analítico</h5>
                <ul>
                    <li><strong>Symbolism:</strong> Simbolismo.</li>
                    <li><strong>Foreshadowing:</strong> Presagio.</li>
                    <li><strong>Imagery:</strong> Imágenes sensoriales.</li>
                    <li><strong>Allegory:</strong> Alegoría.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplo</h5>
                <p>"The author uses <strong>imagery</strong> to evoke a sense of isolation."</p>
            </div>
        </div>
    `,
    136: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🌍 Problemas Globales Actuales</h4>
                <p>Discutir temas como el cambio climático, la geopolítica y los derechos humanos con un lenguaje técnico y ético.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 Temas Críticos</h5>
                <ul>
                    <li><strong>Sustainability:</strong> Sostenibilidad.</li>
                    <li><strong>Global governance:</strong> Gobernanza global.</li>
                    <li><strong>Digital divide:</strong> Brecha digital.</li>
                    <li><strong>Humanitarian crisis:</strong> Crisis humanitaria.</li>
                </ul>
            </div>
        </div>
    `,
    137: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🚀 Alcanzando la Fluidez Total (Mastering Fluency)</h4>
                <p>El paso final: cómo sonar indistinguible de un nativo educado, manejando el ritmo, la entonación y las pausas naturales.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Elementos de la Fluidez</h5>
                <ul>
                    <li><strong>Intonación:</strong> Usar el tono para indicar ironía o énfasis.</li>
                    <li><strong>Fillers naturales:</strong> "You know", "I mean", "The thing is..." usados con moderación.</li>
                    <li><strong>Colocaciones:</strong> Usar palabras que naturalmente van juntas (ej: <em>Commit a crime</em>, no <em>Do a crime</em>).</li>
                </ul>
            </div>
        </div>
    `,
    138: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🏁 Maestría Alcanzada: Repaso C1</h4>
                <p>¡Felicidades, Maestro/a! Has completado el currículo más avanzado de LevelUp English.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>👑 Tu nuevo estatus</h5>
                <ul>
                    <li>Eres capaz de entender casi cualquier texto, por complejo que sea.</li>
                    <li>Te expresas con espontaneidad y fluidez sin esfuerzo aparente.</li>
                    <li>Usas el lenguaje con flexibilidad y eficacia para fines sociales, académicos y profesionales.</li>
                    <li>Produces textos claros, bien estructurados y detallados sobre temas complejos.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>🌟 Un viaje sin fin</h5>
                <p>El aprendizaje de un idioma nunca termina. ¡Sigue practicando, leyendo y escuchando contenido nativo para mantener tu nivel en la cima!</p>
            </div>
        </div>
    `
};

topics.forEach(topic => {
    if (c1TheoryBatch2[topic.id]) {
        topic.theory = c1TheoryBatch2[topic.id].trim();
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('C1 Theory Batch 2 COMPLETE (Topics 129-138) with detailed premium content.');
