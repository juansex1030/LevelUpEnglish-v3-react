require('dotenv').config();
const { query } = require('./db.js');

async function check() {
    const res = await query(
        "SELECT level, number, title, CASE WHEN premium_practice IS NOT NULL THEN 'YES' ELSE 'NO' END as has_premium FROM topics ORDER BY level, number"
    );
    const byLevel = {};
    for (const r of res.rows) {
        if (!byLevel[r.level]) byLevel[r.level] = { total: 0, withPremium: 0, topics: [] };
        byLevel[r.level].total++;
        if (r.has_premium === 'YES') {
            byLevel[r.level].withPremium++;
            byLevel[r.level].topics.push(r.number + ' - ' + r.title);
        }
    }
    console.log('\n=== PREMIUM PRACTICE AUDIT ===');
    for (const [level, data] of Object.entries(byLevel)) {
        console.log('\nLevel ' + level + ': ' + data.withPremium + '/' + data.total + ' topics have premium_practice');
        if (data.topics.length > 0) {
            data.topics.forEach(t => console.log('  ✅ ' + t));
        }
    }
    process.exit(0);
}
check().catch(e => { console.error(e); process.exit(1); });
