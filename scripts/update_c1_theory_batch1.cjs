const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const c1TheoryBatch1 = {
    118: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🧩 Phrasal Verbs (Nivel C1)</h4>
                <p>En el nivel C1, el enfoque cambia hacia Phrasal Verbs con múltiples significados metafóricos y aquellos usados en contextos académicos o literarios.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 Phrasal Verbs de Precisión</h5>
                <ul>
                    <li><strong>Account for:</strong> Explicar o justificar. <em>"How do you account for this error?"</em></li>
                    <li><strong>Bear out:</strong> Confirmar o respaldar. <em>"The evidence bears out my theory."</em></li>
                    <li><strong>Bring about:</strong> Causar que algo suceda. <em>"The new law brought about many changes."</em></li>
                    <li><strong>Set forth:</strong> Exponer o presentar ideas. <em>"He set forth his arguments in the meeting."</em></li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Matices de Registro</h5>
                <p>Muchos Phrasal Verbs tienen un sinónimo de una sola palabra más formal (ej: <em>Set up → Establish</em>). Un estudiante C1 debe saber cuándo usar cada uno.</p>
            </div>
        </div>
    `,
    119: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🔀 Inversión Avanzada</h4>
                <p>La inversión no es solo gramática; es una herramienta estilística para discursos, literatura y escritura académica de alto nivel.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructuras Complejas</h5>
                <ul>
                    <li><strong>Under no circumstances:</strong> <em>"<strong>Under no circumstances should you</strong> open that door."</em></li>
                    <li><strong>Little did he know:</strong> <em>"<strong>Little did he know</strong> that his life was about to change."</em></li>
                    <li><strong>Had I... / Should you...:</strong> Inversión en condicionales. <em>"<strong>Had I known</strong> the truth, I wouldn't have come."</em></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Impacto del énfasis</h5>
                <p>Normal: "I have never seen such beauty."</p>
                <p>Inverted: "<strong>Never have I seen</strong> such beauty." (Mucho más poderoso y dramático).</p>
            </div>
        </div>
    `,
    120: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🚀 Condicionales Avanzados</h4>
                <p>Más allá del "If", el nivel C1 utiliza estructuras alternativas para expresar condiciones complejas y matizadas.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Alternativas al "IF"</h5>
                <ul>
                    <li><strong>Provided / Providing that:</strong> Siempre y cuando. <em>"You can go, providing that you finish."</em></li>
                    <li><strong>Unless:</strong> A menos que. <em>"I won't go unless you come."</em></li>
                    <li><strong>But for:</strong> Si no fuera por. <em>"But for your help, I would have failed."</em></li>
                    <li><strong>Were it not for:</strong> Si no fuera por (hipotético presente).</li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>💡 Omisión del IF</h5>
                <p>En contextos formales, omitimos el 'if' e invertimos el sujeto: <em>"<strong>Were they to</strong> arrive late, the meeting would start without them."</em></p>
            </div>
        </div>
    `,
    121: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🏛️ Voz Pasiva (Nivel C1)</h4>
                <p>En este nivel, la pasiva se usa para manejar el flujo de información y mantener un tono impersonal en textos complejos.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Pasiva con Verbos de Percepción</h5>
                <ul>
                    <li><strong>It is rumored to be...</strong> (Se rumorea que es...).</li>
                    <li><strong>The results are understood to be...</strong> (Se entiende que los resultados son...).</li>
                    <li><strong>Double Passive:</strong> "The decision <strong>is considered to have been made</strong> in haste."</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplo Académico</h5>
                <p>"The phenomenon <strong>has long been observed to occur</strong> under specific conditions."</p>
            </div>
        </div>
    `,
    122: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>✨ Cleft Sentences Avanzadas</h4>
                <p>Las frases hendidas permiten diseccionar una oración para poner el foco exactamente donde el hablante desea.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Variaciones de Enfoque</h5>
                <ul>
                    <li><strong>The thing that...:</strong> "The thing that bothers me is his attitude."</li>
                    <li><strong>The reason why...:</strong> "The reason why I called was to apologize."</li>
                    <li><strong>All I want is...:</strong> "All I want is a little peace and quiet."</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplo de Contraste</h5>
                <p>"It wasn't the money I was worried about, <strong>it was the time</strong>."</p>
            </div>
        </div>
    `,
    123: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>⚖️ El Modo Subjuntivo (Subjunctive Mood)</h4>
                <p>Aunque es raro en el habla común, el subjuntivo es vital en el inglés formal para expresar urgencia, sugerencia o importancia.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura (Verbo en infinitivo sin 'to')</h5>
                <p>Se usa después de verbos como <em>insist, suggest, recommend, demand</em>.</p>
                <p>"I suggest that he <strong>be</strong> told immediately." (No: "is told").</p>
                <p>"It is essential that she <strong>arrive</strong> on time." (No: "arrives").</p>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Nota</h5>
                <p>El subjuntivo no cambia para la tercera persona (no lleva 's').</p>
            </div>
        </div>
    `,
    124: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>💭 Pasado Irreal (Unreal Past)</h4>
                <p>Estructuras que usan tiempos pasados para hablar de situaciones hipotéticas o deseos en el presente o futuro.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructuras Clave</h5>
                <ul>
                    <li><strong>I'd rather:</strong> Preferiría. <em>"I'd rather you <strong>didn't</strong> smoke here."</em></li>
                    <li><strong>It's high time:</strong> Ya va siendo hora. <em>"It's high time you <strong>started</strong> working."</em></li>
                    <li><strong>As if / As though:</strong> Como si. <em>"He talks as if he <strong>were</strong> the boss."</em></li>
                </ul>
            </div>
        </div>
    `,
    125: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>✂️ Elipsis y Sustitución</h4>
                <p>Son técnicas para evitar la repetición innecesaria, lo cual es la marca de un hablante avanzado y elegante.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Mecanismos de Cohesión</h5>
                <ul>
                    <li><strong>Ellipsis:</strong> Omitir palabras. <em>"I went to the store and [I] bought some milk."</em></li>
                    <li><strong>Substitution:</strong> Usar 'one/ones', 'do/did', 'so/not'.</li>
                    <li><strong>Ejemplo:</strong> "Do you think it will rain?" - "I hope <strong>not</strong>." (En lugar de "I hope it won't rain").</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplo</h5>
                <p>"I have a blue pen. Do you have <strong>one</strong>?"</p>
            </div>
        </div>
    `,
    126: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>📦 Cláusulas Nominales (Nominal Clauses)</h4>
                <p>Son grupos de palabras que funcionan como un solo sustantivo dentro de la oración.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Tipos de Cláusulas</h5>
                <ul>
                    <li><strong>That-clauses:</strong> "That he failed the test is surprising."</li>
                    <li><strong>Wh-clauses:</strong> "What he said was very interesting."</li>
                    <li><strong>Whether-clauses:</strong> "Whether he comes or not doesn't matter."</li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>💡 Uso Académico</h5>
                <p>Estas estructuras permiten condensar mucha información compleja en el sujeto o el objeto de una frase.</p>
            </div>
        </div>
    `,
    127: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🔥 Estructuras Enfáticas</h4>
                <p>Cómo dar fuerza a tus argumentos sin sonar agresivo, usando recursos gramaticales de precisión.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ El 'DO' Enfático</h5>
                <p>Usar el auxiliar en frases afirmativas para enfatizar que algo es cierto.</p>
                <p>"I <strong>do</strong> believe we have a chance." <small>(Realmente creo que...).</small></p>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Inversión y Adverbios</h5>
                <p>Uso de palabras como <em>Utterly, Entirely, Thoroughly</em> para potenciar el significado.</p>
            </div>
        </div>
    `,
    128: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🎭 Registros Formales e Informales</h4>
                <p>El nivel C1 implica saber "leer la habitación" y ajustar tu lenguaje a la audiencia y el medio.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 Diferencias de Registro</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Informal</th>
                            <th>Formal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Get better</td>
                            <td>Improve / Ameliorate</td>
                        </tr>
                        <tr>
                            <td>Think about</td>
                            <td>Consider / Contemplate</td>
                        </tr>
                        <tr>
                            <td>Kids</td>
                            <td>Children / Offspring</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ El peligro de la inconsistencia</h5>
                <p>Mezclar registros (usar slang en un reporte formal) es un error crítico que delata un nivel inferior al C1.</p>
            </div>
        </div>
    `
};

topics.forEach(topic => {
    if (c1TheoryBatch1[topic.id]) {
        topic.theory = c1TheoryBatch1[topic.id].trim();
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('C1 Theory Batch 1 COMPLETE (Topics 118-128) with detailed premium content.');
