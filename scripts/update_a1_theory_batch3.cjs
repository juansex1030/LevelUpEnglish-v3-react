const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const a1TheoryBatch3 = {
    21: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>📅 Días de la Semana (Days of the Week)</h4>
                <p>Aprender los días es vital para agendar citas, hablar de tu horario y planear tu semana.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🗓️ La Semana en Inglés</h5>
                <ul>
                    <li><strong>Monday:</strong> Lunes.</li>
                    <li><strong>Tuesday:</strong> Martes.</li>
                    <li><strong>Wednesday:</strong> Miércoles.</li>
                    <li><strong>Thursday:</strong> Jueves.</li>
                    <li><strong>Friday:</strong> Viernes.</li>
                    <li><strong>Saturday:</strong> Sábado.</li>
                    <li><strong>Sunday:</strong> Domingo.</li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Reglas Importantes</h5>
                <p>1. Los días siempre se escriben con <strong>Mayúscula inicial</strong>.</p>
                <p>2. Siempre usamos la preposición <strong>ON</strong> antes de un día.</p>
                <p>Ejemplo: <strong>"On Monday"</strong> (En lunes).</p>
            </div>
        </div>
    `,
    22: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>📆 Meses del Año (Months of the Year)</h4>
                <p>Indispensables para hablar de cumpleaños, festividades y fechas históricas.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🗓️ Los 12 Meses</h5>
                <ul>
                    <li><strong>January, February, March, April.</strong></li>
                    <li><strong>May, June, July, August.</strong></li>
                    <li><strong>September, October, November, December.</strong></li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Preposición para Meses</h5>
                <p>Usamos la preposición <strong>IN</strong> cuando solo mencionamos el mes.</p>
                <p>Ejemplo: <strong>"In December"</strong> (En diciembre).</p>
                <p><em>Nota: Si dices la fecha exacta con el día, usas "ON".</em></p>
            </div>
        </div>
    `,
    23: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🕒 Decir la Hora (Telling the Time)</h4>
                <p>Existen dos formas principales de decir la hora: la digital (fácil) y la analógica (tradicional).</p>
            </div>

            <div class="visual-card card-structure">
                <h5>⌚ Forma Digital (Sujeto + Hora + Minutos)</h5>
                <p>Es la más común hoy en día.</p>
                <ul>
                    <li>3:15 → "It's three fifteen."</li>
                    <li>8:40 → "It's eight forty."</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Vocabulario Clave</h5>
                <ul>
                    <li><strong>O'clock:</strong> Para horas en punto (4:00 → Four o'clock).</li>
                    <li><strong>Half past:</strong> Para la media hora (5:30 → Half past five).</li>
                    <li><strong>Quarter past / Quarter to:</strong> Para los cuartos de hora.</li>
                </ul>
            </div>
        </div>
    `,
    24: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🏃 Rutinas Diarias (Daily Routines)</h4>
                <p>Describe tu día a día usando verbos de acción en Presente Simple.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🌅 Desde la mañana a la noche</h5>
                <ul>
                    <li><strong>Wake up / Get up:</strong> Despertar / Levantar.</li>
                    <li><strong>Take a shower:</strong> Tomar una ducha.</li>
                    <li><strong>Have breakfast / lunch / dinner:</strong> Desayunar / Almorzar / Cenar.</li>
                    <li><strong>Go to work / school:</strong> Ir al trabajo / escuela.</li>
                    <li><strong>Go to bed:</strong> Ir a la cama.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>📝 Ejemplo de Rutina</h5>
                <p>"I <strong>wake up</strong> at 7:00 AM. I <strong>have</strong> a coffee and then I <strong>go</strong> to work."</p>
            </div>
        </div>
    `,
    25: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🎮 Hobbies y Tiempo Libre</h4>
                <p>Hablar sobre lo que te gusta hacer te ayuda a socializar y encontrar intereses comunes.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🎸 Actividades Comunes</h5>
                <ul>
                    <li><strong>Read books:</strong> Leer libros.</li>
                    <li><strong>Watch movies:</strong> Ver películas.</li>
                    <li><strong>Listen to music:</strong> Escuchar música.</li>
                    <li><strong>Play video games:</strong> Jugar videojuegos.</li>
                    <li><strong>Go for a walk:</strong> Ir a caminar.</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>🤔 ¿Cómo preguntar?</h5>
                <p>"What do you do in your free time?" <small>(¿Qué haces en tu tiempo libre?)</small></p>
                <p>"I love <strong>reading</strong>." <small>(Me encanta leer)</small></p>
            </div>
        </div>
    `,
    26: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>❤️ Like / Love / Hate + ing</h4>
                <p>Cuando usamos verbos de preferencia seguidos de otra acción, esa acción suele llevar <strong>-ing</strong>.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>📉 Escala de Preferencia</h5>
                <ul>
                    <li><strong>Love:</strong> Encantar. <em>I love dancing.</em></li>
                    <li><strong>Like:</strong> Gustar. <em>I like cooking.</em></li>
                    <li><strong>Don't like:</strong> No gustar. <em>I don't like running.</em></li>
                    <li><strong>Hate:</strong> Odiar. <em>I hate waiting.</em></li>
                </ul>
            </div>

            <div class="visual-card card-warning">
                <h5>⚠️ Nota Gramatical</h5>
                <p>Aunque también puedes usar "to" (I like to dance), el uso de <strong>-ing</strong> es mucho más común para hablar de gustos en general.</p>
            </div>
        </div>
    `,
    27: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>💪 Can / Can't (Habilidad)</h4>
                <p>El verbo modal **Can** se usa para expresar lo que eres capaz de hacer o tienes permiso para hacer.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>⚙️ Regla de los Modales</h5>
                <p>¡Buenas noticias! **Can** nunca cambia. Es igual para todos los sujetos y el verbo que le sigue va en forma básica (sin 's', sin 'to').</p>
                <ul>
                    <li>I <strong>can</strong> swim.</li>
                    <li>She <strong>can</strong> swim. (¡No se dice "cans"!)</li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>🚫 Negación y Pregunta</h5>
                <p>Negativo: <strong>Can't</strong> (Cannot). <em>I can't drive.</em></p>
                <p>Pregunta: Pasa al principio. <em><strong>Can</strong> you help me?</em></p>
            </div>
        </div>
    `,
    28: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>📍 Preposiciones de Lugar (In, On, At)</h4>
                <p>Sirven para indicar la posición exacta de un objeto o persona.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🗺️ ¿Cuál usar?</h5>
                <ul>
                    <li><strong>In:</strong> Dentro de un espacio cerrado. <em>In a box, In a room.</em></li>
                    <li><strong>On:</strong> Sobre una superficie. <em>On the table, On the wall.</em></li>
                    <li><strong>At:</strong> En un punto específico. <em>At the door, At the bus stop.</em></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Otras útiles</h5>
                <p><strong>Under</strong> (Debajo), <strong>Next to</strong> (Al lado), <strong>Between</strong> (Entre dos).</p>
            </div>
        </div>
    `,
    29: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>📦 There is / There are</h4>
                <p>Se usan para decir que algo **existe** o **hay** en un lugar.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>⚖️ Singular vs Plural</h5>
                <ul>
                    <li><strong>There is (There's):</strong> Para una sola cosa. <em>There is an apple.</em></li>
                    <li><strong>There are:</strong> Para varias cosas. <em>There are three apples.</em></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>❓ Preguntas y Negación</h5>
                <p>Pregunta: <strong>Is there</strong> a bank near here?</p>
                <p>Negación: <strong>There isn't</strong> any milk.</p>
            </div>
        </div>
    `,
    30: `
        <div class="theory-premium">
            <div class="visual-card card-concept">
                <h4>🍎 Contables e Incontables</h4>
                <p>Saber si algo se puede contar o no determina qué palabras usamos para la cantidad.</p>
            </div>

            <div class="visual-card card-structure">
                <h5>🔢 Diferencias</h5>
                <ul>
                    <li><strong>Countable:</strong> Tienen plural. <em>Car → Cars, Apple → Apples.</em></li>
                    <li><strong>Uncountable:</strong> No tienen plural (líquidos, granos, abstractos). <em>Water, Rice, Money, Sugar.</em></li>
                </ul>
            </div>

            <div class="visual-card card-examples">
                <h5>💡 Palabras de Cantidad</h5>
                <p>Usamos <strong>How many</strong> para contables y <strong>How much</strong> para incontables.</p>
            </div>
        </div>
    `
};

topics.forEach(topic => {
    if (a1TheoryBatch3[topic.id]) {
        topic.theory = a1TheoryBatch3[topic.id].trim();
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('A1 Theory Batch 3 COMPLETE (Topics 21-30) with detailed premium content.');
