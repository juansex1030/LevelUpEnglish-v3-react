require('dotenv').config();
const { query } = require('./db.js');

async function fix() {
    // ── FIX T4 Numbers – unscramble sentences #2, #5, #6 ─────────────────
    const t4Res = await query("SELECT premium_practice FROM topics WHERE level='A1' AND number=4");
    const t4Data = JSON.parse(t4Res.rows[0].premium_practice);
    const t4Unscramble = t4Data.games.find(g => g.type === 'unscramble');

    // #2: Remove "is" from the scrambled (answer has no "is")
    t4Unscramble.questions[1].q = 'one thirty January has days';
    // → answer stays 'january has thirty one days' ✓

    // #5: Remove "on" from the scrambled (answer has no "on")
    t4Unscramble.questions[4].q = 'fingers each hand five has';
    // → answer stays 'each hand has five fingers' ✓

    // #6: Add "there" to the scrambled (answer has "there")
    t4Unscramble.questions[5].q = 'there in are the seven week days';
    // → answer stays 'there are seven days in the week' ✓

    await query(
        "UPDATE topics SET premium_practice=$1 WHERE level='A1' AND number=4",
        [JSON.stringify(t4Data)]
    );
    console.log('✅ Fixed T4 Numbers — unscramble #2, #5, #6');

    // ── FIX T11 Prepositions of Time – unscramble sentence #9 ────────────
    const t11Res = await query("SELECT premium_practice FROM topics WHERE level='A1' AND number=11");
    const t11Data = JSON.parse(t11Res.rows[0].premium_practice);
    const t11Unscramble = t11Data.games.find(g => g.type === 'unscramble');

    // #9: Replace with a clean sentence — no repeated words, preposition topic
    t11Unscramble.questions[8].q = 'always I sleep before exercise';
    t11Unscramble.questions[8].a = 'I always exercise before sleep';

    await query(
        "UPDATE topics SET premium_practice=$1 WHERE level='A1' AND number=11",
        [JSON.stringify(t11Data)]
    );
    console.log('✅ Fixed T11 Prepositions of Time — unscramble #9');

    process.exit(0);
}

fix().catch(e => { console.error('❌ Error:', e); process.exit(1); });
