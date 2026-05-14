const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const a2TheoryBatch1 = {
    31: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🔙 Pasado Simple (Verbos Regulares)</h4>
                <p>El Pasado Simple se usa para acciones que empezaron y terminaron en el pasado. La mayoría de los verbos en inglés son "regulares".</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📏 La Regla del -ED</h5>
                <p>Para formar el pasado de un verbo regular, simplemente añadimos <strong>-ed</strong> al final.</p>
                <ul>
                    <li>Walk → Walk<strong>ed</strong></li>
                    <li>Play → Play<strong>ed</strong></li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>✍️ Reglas de Ortografía</h5>
                <ul>
                    <li><strong>Terminados en E:</strong> Solo añade <strong>-d</strong>. <em>Love → Loved.</em></li>
                    <li><strong>Consonante + Y:</strong> Cambia la Y por <strong>-ied</strong>. <em>Study → Studied.</em></li>
                    <li><strong>CVC (Consonante-Vocal-Consonante):</strong> Duplica la última letra. <em>Stop → Stopped.</em></li>
                </ul>
            </div>
        </div>
    `,
    32: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>📋 Pasado Simple (Verbos Irregulares)</h4>
                <p>Los verbos irregulares no siguen la regla del "-ed". Tienen su propia forma única que debemos memorizar.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>💡 Verbos más comunes</h5>
                <table class="theory-table">
                    <thead>
                        <tr>
                            <th>Infinitivo</th>
                            <th>Pasado</th>
                            <th>Significado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Go</td>
                            <td>Went</td>
                            <td>Ir / Fue</td>
                        </tr>
                        <tr>
                            <td>Eat</td>
                            <td>Ate</td>
                            <td>Comer / Comió</td>
                        </tr>
                        <tr>
                            <td>See</td>
                            <td>Saw</td>
                            <td>Ver / Vio</td>
                        </tr>
                        <tr>
                            <td>Buy</td>
                            <td>Bought</td>
                            <td>Comprar / Compró</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplos</h5>
                <p>"I <strong>went</strong> to the park yesterday." <small>(Fui al parque ayer)</small></p>
                <p>"She <strong>ate</strong> a delicious pizza." <small>(Ella comió una pizza deliciosa)</small></p>
            </div>
        </div>
    `,
    33: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🚫 Pasado Simple (Negativo y Preguntas)</h4>
                <p>Al igual que en el presente usábamos "do/does", en el pasado usamos el auxiliar **DID**.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🛠️ El Auxiliar: DID</h5>
                <p>Cuando aparece <strong>DID</strong> o <strong>DIDN'T</strong>, el verbo vuelve a su forma básica (¡pierde el pasado!).</p>
                <ul>
                    <li>Afirmativo: I <strong>went</strong>.</li>
                    <li>Negativo: I <strong>didn't go</strong>. (No se dice "didn't went")</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>❓ Preguntas</h5>
                <p>Estructura: DID + Sujeto + Verbo (base) + ?</p>
                <p>"<strong>Did</strong> you see the movie?"</p>
                <p>"<strong>Did</strong> she buy the bread?"</p>
            </div>
        </div>
    `,
    34: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🔄 Hábito en el Pasado: Used To</h4>
                <p>Se usa para hablar de cosas que hacías antes con frecuencia, pero que ya no haces.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura</h5>
                <p><strong>Sujeto + used to + verbo básico</strong></p>
                <p>"I <strong>used to smoke</strong>, but I quit." <small>(Yo solía fumar, pero lo dejé)</small></p>
                <p>"She <strong>used to live</strong> in Paris." <small>(Ella solía vivir en París)</small></p>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Negación y Pregunta</h5>
                <p>Usamos el auxiliar DID, por lo que el "used" pierde la 'd':</p>
                <p>"I <strong>didn't use to</strong> exercise." <small>(No solía hacer ejercicio)</small></p>
                <p>"<strong>Did</strong> you <strong>use to</strong> have long hair?"</p>
            </div>
        </div>
    `,
    35: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>⚖️ Adjetivos Comparativos</h4>
                <p>Sirven para comparar dos cosas o personas. Dependiendo del largo del adjetivo, la regla cambia.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📏 Reglas de Comparación</h5>
                <ul>
                    <li><strong>Cortos (1 sílaba):</strong> Añade <strong>-er</strong>. <em>Fast → Fast<strong>er</strong>.</em></li>
                    <li><strong>Largos (2+ sílabas):</strong> Añade <strong>MORE</strong> antes. <em>Beautiful → <strong>More</strong> beautiful.</em></li>
                    <li><strong>Terminados en Y:</strong> Cambia Y por <strong>-ier</strong>. <em>Happy → Happ<strong>ier</strong>.</em></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 La palabra mágica: THAN</h5>
                <p>Siempre usamos <strong>THAN</strong> (que) después del comparativo.</p>
                <p>"The car is <strong>faster than</strong> the bike."</p>
                <p>"Gold is <strong>more expensive than</strong> silver."</p>
            </div>
        </div>
    `,
    36: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🏆 Adjetivos Superlativos</h4>
                <p>Se usan para decir que algo es "el más..." de un grupo.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📏 Reglas Superlativas</h5>
                <ul>
                    <li><strong>Cortos:</strong> Añade <strong>THE</strong> + verbo + <strong>-est</strong>. <em>The tall<strong>est</strong>.</em></li>
                    <li><strong>Largos:</strong> Añade <strong>THE MOST</strong> antes. <em>The <strong>most</strong> intelligent.</em></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>🌟 Irregulares Importantes</h5>
                <ul>
                    <li>Good → <strong>The Best</strong> (El mejor).</li>
                    <li>Bad → <strong>The Worst</strong> (El peor).</li>
                    <li>Far → <strong>The Farthest</strong> (El más lejano).</li>
                </ul>
            </div>
        </div>
    `,
    37: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>📊 Adverbios de Frecuencia</h4>
                <p>Indican qué tan seguido hacemos algo.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📉 Escala de Frecuencia</h5>
                <ul>
                    <li>Always (100%), Usually (90%), Often (70%).</li>
                    <li>Sometimes (50%), Rarely (10%), Never (0%).</li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Posición en la frase</h5>
                <p>Van **antes** del verbo principal, pero **después** del verbo To Be.</p>
                <p>Correcto: "I <strong>always drink</strong> coffee."</p>
                <p>Correcto: "I am <strong>always</strong> happy."</p>
            </div>
        </div>
    `,
    38: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🕒 Expresiones de Tiempo en Pasado</h4>
                <p>Palabras clave que nos ayudan a ubicar la acción en el tiempo pasado.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📅 Palabras Clave</h5>
                <ul>
                    <li><strong>Yesterday:</strong> Ayer.</li>
                    <li><strong>Last (week/month/year):</strong> La semana/mes/año pasado.</li>
                    <li><strong>Ago:</strong> Hace (se pone al final). <em>Two days <strong>ago</strong>.</em></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplos</h5>
                <p>"I saw him <strong>two hours ago</strong>." <small>(Lo vi hace dos horas)</small></p>
                <p>"We traveled <strong>last summer</strong>." <small>(Viajamos el verano pasado)</small></p>
            </div>
        </div>
    `,
    39: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>⚡ Presente Continuo</h4>
                <p>Se usa para acciones que están ocurriendo **ahora mismo** o en este periodo de tiempo.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🏗️ Estructura (Sujeto + To Be + -ing)</h5>
                <p>¡No olvides el verbo To Be!</p>
                <ul>
                    <li>I <strong>am studying</strong>.</li>
                    <li>You <strong>are working</strong>.</li>
                    <li>She <strong>is sleeping</strong>.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplo</h5>
                <p>"I <strong>am watching</strong> TV right now." <small>(Estoy viendo TV ahora mismo)</small></p>
            </div>
        </div>
    `,
    40: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>⚖️ Presente Continuo vs Simple</h4>
                <p>Saber cuándo usar uno u otro es la clave para hablar como un nativo.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🔍 La Diferencia Principal</h5>
                <ul>
                    <li><strong>Presente Simple:</strong> Rutinas y hechos permanentes. <em>"I live in London."</em></li>
                    <li><strong>Presente Continuo:</strong> Acciones temporales ocurriendo ahora. <em>"I am sitting in a cafe."</em></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Palabras que ayudan</h5>
                <p>Simple: <em>Usually, Always, Every day.</em></p>
                <p>Continuo: <em>Now, At the moment, Today.</em></p>
            </div>
        </div>
    `
};

topics.forEach(topic => {
    if (a2TheoryBatch1[topic.id]) {
        topic.theory = a2TheoryBatch1[topic.id].trim();
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('A2 Theory Batch 1 COMPLETE (Topics 31-40) with detailed premium content.');
