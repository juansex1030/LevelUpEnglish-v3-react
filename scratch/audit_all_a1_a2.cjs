const fs = require('fs');
const topics = JSON.parse(fs.readFileSync('backend/data/topics.json', 'utf8'));

const targetLevels = ['A1', 'A2'];
const stats = {
    A1: { total: 0, upgraded: 0, issues: [] },
    A2: { total: 0, upgraded: 0, issues: [] }
};

topics.filter(t => targetLevels.includes(t.level)).forEach(t => {
    stats[t.level].total++;
    let pp;
    try {
        pp = JSON.parse(t.premium_practice);
    } catch (e) {
        stats[t.level].issues.push(`Topic ${t.number}: INVALID JSON`);
        return;
    }

    const games = pp.games || [];
    const legacy = games.filter(g => g.type === 'memory_game' || g.type === 'crossword_game');
    const hasWordSearch = games.some(g => g.type === 'word_search');
    
    if (legacy.length === 0 && hasWordSearch) {
        stats[t.level].upgraded++;
    } else {
        const issues = [];
        if (legacy.length > 0) issues.push(`Legacy games: ${legacy.map(g => g.type).join(', ')}`);
        if (!hasWordSearch) issues.push(`Missing Word Search`);
        stats[t.level].issues.push(`Topic ${t.number} (${t.title}): ${issues.join('; ')}`);
    }
});

console.log('--- Upgrade Status ---');
console.log(`A1: ${stats.A1.upgraded}/${stats.A1.total} upgraded`);
console.log(`A2: ${stats.A2.upgraded}/${stats.A2.total} upgraded`);

if (stats.A1.issues.length > 0) {
    console.log('\nA1 Issues:');
    stats.A1.issues.slice(0, 10).forEach(i => console.log(`  - ${i}`));
    if (stats.A1.issues.length > 10) console.log(`  ... and ${stats.A1.issues.length - 10} more`);
}

if (stats.A2.issues.length > 0) {
    console.log('\nA2 Issues:');
    stats.A2.issues.slice(0, 10).forEach(i => console.log(`  - ${i}`));
    if (stats.A2.issues.length > 10) console.log(`  ... and ${stats.A2.issues.length - 10} more`);
}
