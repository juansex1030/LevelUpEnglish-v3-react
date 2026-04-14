require('dotenv').config();
const { query } = require('./db.js');

// Utility: check that every word in the answer exists in the scrambled question
function checkUnscramble(questions, topicLabel) {
    const errors = [];
    questions.forEach((q, i) => {
        const qWords = q.q.toLowerCase().split(' ').sort();
        const aWords = q.a.toLowerCase().split(' ').sort();
        const qSet = JSON.stringify(qWords);
        const aSet = JSON.stringify(aWords);
        if (qSet !== aSet) {
            errors.push({
                index: i + 1,
                scrambled: q.q,
                answer: q.a,
                extra_in_q: qWords.filter(w => !aWords.includes(w)),
                extra_in_a: aWords.filter(w => !qWords.includes(w))
            });
        }
    });
    if (errors.length) {
        console.log(`\n❌ ${topicLabel} — UNSCRAMBLE ERRORS (${errors.length}):`);
        errors.forEach(e => {
            console.log(`  #${e.index}: "${e.scrambled}" → "${e.answer}"`);
            if (e.extra_in_q.length) console.log(`     Extra in SCRAMBLED (not in answer): [${e.extra_in_q.join(', ')}]`);
            if (e.extra_in_a.length) console.log(`     Extra in ANSWER (not in scrambled): [${e.extra_in_a.join(', ')}]`);
        });
    } else {
        console.log(`  ✅ ${topicLabel} — unscramble OK`);
    }
    return errors;
}

// Utility: check fill_blanks has a non-empty answer and the blank exists in text
function checkFillBlanks(sentences, topicLabel) {
    const errors = [];
    sentences.forEach((s, i) => {
        if (!s.answer || s.answer.trim() === '') errors.push(`  #${i+1}: empty answer — "${s.text}"`);
        if (!s.text.includes('___') && !s.text.includes('__')) errors.push(`  #${i+1}: no blank in text — "${s.text}"`);
    });
    if (errors.length) {
        console.log(`\n❌ ${topicLabel} — FILL_BLANKS ERRORS:`);
        errors.forEach(e => console.log(e));
    } else {
        console.log(`  ✅ ${topicLabel} — fill_blanks OK`);
    }
    return errors;
}

// Utility: check sentence_builder — text should be complete and distractors shouldn't duplicate text words
function checkSentenceBuilder(sentences, topicLabel) {
    const errors = [];
    sentences.forEach((s, i) => {
        if (!s.text || s.text.trim() === '') errors.push(`  #${i+1}: empty text`);
        if (!s.translation || s.translation.trim() === '') errors.push(`  #${i+1}: empty translation`);
        if (!s.distractors || s.distractors.length === 0) errors.push(`  #${i+1}: no distractors`);
    });
    if (errors.length) {
        console.log(`\n❌ ${topicLabel} — SENTENCE_BUILDER ERRORS:`);
        errors.forEach(e => console.log(e));
    } else {
        console.log(`  ✅ ${topicLabel} — sentence_builder OK`);
    }
    return errors;
}

async function run() {
    const topics = await query(
        "SELECT number, title, premium_practice FROM topics WHERE level='A1' AND number BETWEEN 3 AND 12 ORDER BY number"
    );

    let totalErrors = 0;

    for (const row of topics.rows) {
        if (!row.premium_practice) continue;
        const data = JSON.parse(row.premium_practice);
        const label = `A1 T${row.number} (${row.title})`;
        console.log(`\n--- Checking ${label} ---`);

        for (const game of data.games) {
            if (game.type === 'unscramble')       totalErrors += checkUnscramble(game.questions, label).length;
            if (game.type === 'fill_blanks_game') totalErrors += checkFillBlanks(game.sentences, label).length;
            if (game.type === 'sentence_builder') totalErrors += checkSentenceBuilder(game.sentences, label).length;
        }
    }

    console.log('\n============================');
    if (totalErrors === 0) {
        console.log('✅ All checks passed! No errors found.');
    } else {
        console.log(`❌ Total issues found: ${totalErrors}`);
    }
    process.exit(0);
}

run().catch(e => { console.error(e); process.exit(1); });
