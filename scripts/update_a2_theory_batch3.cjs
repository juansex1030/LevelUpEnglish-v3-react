const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const a2TheoryBatch3 = {
    51: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🧩 Introducción a los Phrasal Verbs</h4>
                <p>Un Phrasal Verb es la combinación de un **verbo** y una **partícula** (preposición o adverbio) que juntos crean un nuevo significado.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 Ejemplos para Empezar</h5>
                <ul>
                    <li><strong>Wake up:</strong> Despertarse.</li>
                    <li><strong>Get up:</strong> Levantarse de la cama.</li>
                    <li><strong>Turn on / off:</strong> Encender / Apagar.</li>
                    <li><strong>Sit down / Stand up:</strong> Sentarse / Levantarse.</li>
                    <li><strong>Look for:</strong> Buscar.</li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ El secreto de los Phrasal Verbs</h5>
                <p>No intentes traducirlos palabra por palabra. Tómalo como una palabra nueva con un significado propio.</p>
            </div>
        </div>
    `,
    52: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>✨ Algo, Nada, Cualquier cosa: Pronombres Indefinidos</h4>
                <p>Se usan para referirse a cosas o personas sin decir exactamente quiénes o qué son.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>⚖️ Cuándo usar cada uno</h5>
                <ul>
                    <li><strong>Something:</strong> En oraciones afirmativas. <em>"I have something for you."</em></li>
                    <li><strong>Anything:</strong> En preguntas y negaciones. <em>"Do you have anything?" / "I don't have anything."</em></li>
                    <li><strong>Nothing:</strong> En oraciones afirmativas con sentido negativo. <em>"I have nothing."</em></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Nota importante</h5>
                <p>En inglés **no existe la doble negación**. No digas "I don't have nothing".</p>
                <p>Correcto: <strong>"I have nothing"</strong> o <strong>"I don't have anything"</strong>.</p>
            </div>
        </div>
    `,
    53: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>⚖️ Cantidad y Grado: Too / Enough</h4>
                <p>Sirven para decir que algo es excesivo o suficiente.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Posición en la frase</h5>
                <ul>
                    <li><strong>Too + Adjetivo:</strong> Demasiado. <em>"It's too hot."</em></li>
                    <li><strong>Adjetivo + Enough:</strong> Suficiente. <em>"It's hot enough."</em></li>
                    <li><strong>Enough + Sustantivo:</strong> Suficiente cantidad. <em>"I have enough money."</em></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplos</h5>
                <p>"This shirt is <strong>too big</strong> for me."</p>
                <p>"I am not <strong>old enough</strong> to drive."</p>
            </div>
        </div>
    `,
    54: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🏠 Pronombres Posesivos</h4>
                <p>Se usan para decir de quién es algo sin repetir el sustantivo.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🔗 Adjetivo vs Pronombre</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Posesivo</th>
                            <th>Pronombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>My (Mi carro)</td>
                            <td>Mine (Es mío)</td>
                        </tr>
                        <tr>
                            <td>Your (Tu carro)</td>
                            <td>Yours (Es tuyo)</td>
                        </tr>
                        <tr>
                            <td>His/Her (Su carro)</td>
                            <td>His/Hers (Es suyo)</td>
                        </tr>
                        <tr>
                            <td>Our (Nuestro)</td>
                            <td>Ours (Es nuestro)</td>
                        </tr>
                        <tr>
                            <td>Their (Su - ellos)</td>
                            <td>Theirs (Es de ellos)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplo</h5>
                <p>"Is this your pen?" - "No, it's <strong>mine</strong>." <small>(No, es el mío)</small></p>
            </div>
        </div>
    `,
    55: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🗝️ Posesión: Whose / Genitivo 's</h4>
                <p>Existen dos formas comunes de preguntar y expresar posesión de personas.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Whose (¿De quién?)</h5>
                <p>"<strong>Whose</strong> phone is this?" <small>(¿De quién es este teléfono?)</small></p>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Genitivo Sajón ('s)</h5>
                <p>Añadimos <strong>'s</strong> al poseedor. No usamos "de".</p>
                <p>"It is <strong>John's</strong> phone." <small>(Es el teléfono de John)</small></p>
                <p>"My <strong>mother's</strong> car." <small>(El carro de mi madre)</small></p>
            </div>
        </div>
    `,
    56: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🔗 Cláusulas Relativas: Who, Which, That</h4>
                <p>Sirven para unir dos frases y dar más información sobre alguien o algo.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📋 ¿Cuál elegir?</h5>
                <ul>
                    <li><strong>Who:</strong> Para personas. <em>"The man who lives next door."</em></li>
                    <li><strong>Which:</strong> Para cosas o animales. <em>"The car which is red."</em></li>
                    <li><strong>That:</strong> Para ambos (en contextos informales).</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplo</h5>
                <p>"I met a girl <strong>who</strong> speaks five languages."</p>
                <p>"This is the book <strong>that</strong> I like."</p>
            </div>
        </div>
    `,
    57: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🗺️ Pidiendo y Dando Direcciones</h4>
                <p>Saber orientarse y preguntar cómo llegar es una habilidad de supervivencia en inglés.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🗣️ Preguntas Útiles</h5>
                <ul>
                    <li><strong>Excuse me, where is the...?</strong></li>
                    <li><strong>How can I get to...?</strong></li>
                    <li><strong>Is it far from here?</strong></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>🧭 Instrucciones</h5>
                <ul>
                    <li><strong>Go straight:</strong> Sigue derecho.</li>
                    <li><strong>Turn left / right:</strong> Gira a la izquierda / derecha.</li>
                    <li><strong>Take the first turning:</strong> Toma la primera salida.</li>
                    <li><strong>Go past the bank:</strong> Pasa el banco.</li>
                </ul>
            </div>
        </div>
    `,
    58: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🍽️ En el Restaurante (At the Restaurant)</h4>
                <p>Frases clave para pedir comida y tener una experiencia agradable.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📝 Al Pedir</h5>
                <ul>
                    <li><strong>A table for two, please.</strong></li>
                    <li><strong>Can I see the menu?</strong></li>
                    <li><strong>I would like (I'd like)...</strong> <small>(La forma más educada de pedir)</small></li>
                    <li><strong>Can I have the bill, please?</strong> <small>(¿Me trae la cuenta?)</small></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Vocabulario</h5>
                <ul>
                    <li><strong>Starter:</strong> Entrada.</li>
                    <li><strong>Main course:</strong> Plato fuerte.</li>
                    <li><strong>Dessert:</strong> Postre.</li>
                </ul>
            </div>
        </div>
    `,
    59: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>✈️ Viajes y Transporte (Traveling)</h4>
                <p>Vocabulario para aeropuertos, trenes y moverte por el mundo.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🚉 Medios de Transporte</h5>
                <ul>
                    <li><strong>By plane / By train / By bus.</strong></li>
                    <li><strong>On foot:</strong> Caminando.</li>
                    <li><strong>Ticket office / Boarding pass.</strong></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>🗣️ Frases Útiles</h5>
                <p>"What time does the train leave?"</p>
                <p>"A single ticket to London, please."</p>
            </div>
        </div>
    `,
    60: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🤒 Salud y Enfermedades (Health)</h4>
                <p>Expresar cómo te sientes físicamente es vital.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏥 Dolores Comunes</h5>
                <ul>
                    <li><strong>Headache:</strong> Dolor de cabeza.</li>
                    <li><strong>Stomach ache:</strong> Dolor de estómago.</li>
                    <li><strong>Backache:</strong> Dolor de espalda.</li>
                    <li><strong>Sore throat:</strong> Dolor de garganta.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>🗣️ ¿Cómo explicarlo?</h5>
                <p>"I have a cold." <small>(Tengo un resfriado)</small></p>
                <p>"I feel dizzy." <small>(Me siento mareado)</small></p>
            </div>
        </div>
    `,
    61: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>☀️ El Clima y las Estaciones</h4>
                <p>El tema de conversación universal por excelencia.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🌤️ Estados del Tiempo</h5>
                <ul>
                    <li><strong>Sunny / Cloudy:</strong> Soleado / Nublado.</li>
                    <li><strong>Rainy / Snowy:</strong> Lluvioso / Nevado.</li>
                    <li><strong>Windy / Foggy:</strong> Ventoso / Con niebla.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>🍂 Las Estaciones</h5>
                <ul>
                    <li><strong>Spring:</strong> Primavera.</li>
                    <li><strong>Summer:</strong> Verano.</li>
                    <li><strong>Autumn (Fall):</strong> Otoño.</li>
                    <li><strong>Winter:</strong> Invierno.</li>
                </ul>
            </div>
        </div>
    `,
    62: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🏁 Repaso General A2</h4>
                <p>¡Felicidades! Has cubierto la gramática base necesaria para ser un usuario independiente en inglés.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🚀 Habilidades que ya tienes</h5>
                <ul>
                    <li>Puedes hablar del pasado con fluidez.</li>
                    <li>Puedes comparar objetos y personas.</li>
                    <li>Sabes expresar obligación, permiso y consejos.</li>
                    <li>Puedes pedir comida, direcciones y viajar solo.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>🔜 ¿Qué sigue?</h5>
                <p>El nivel <strong>B1 (Intermedio)</strong> te espera, donde aprenderás el Presente Perfecto, la Voz Pasiva y a expresar opiniones mucho más complejas.</p>
            </div>
        </div>
    `
};

topics.forEach(topic => {
    if (a2TheoryBatch3[topic.id]) {
        topic.theory = a2TheoryBatch3[topic.id].trim();
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('A2 Theory Batch 3 COMPLETE (Topics 51-62) with detailed premium content.');
