const fs = require('fs');
const topics = JSON.parse(fs.readFileSync('backend/data/topics.json', 'utf8'));

const a1Topics = topics.filter(t => t.level === 'A1' && t.number <= 15);

console.log('--- A1 (1-15) Audit ---');
a1Topics.forEach(t => {
    let pp;
    try {
        pp = JSON.parse(t.premium_practice);
    } catch (e) {
        console.log(`Topic ${t.number}: INVALID JSON`);
        return;
    }

    const games = pp.games || [];
    const forbidden = games.filter(g => g.type === 'memory_game' || g.type === 'crossword_game');
    const hasWordSearch = games.some(g => g.type === 'word_search');
    
    console.log(`Topic ${t.number} (${t.title}):`);
    console.log(`  Games: ${games.length}`);
    console.log(`  Forbidden: ${forbidden.length} (${forbidden.map(g => g.type).join(', ')})`);
    console.log(`  Word Search: ${hasWordSearch ? 'YES' : 'NO'}`);
    
    games.forEach((g, i) => {
        const items = g.questions || g.words || g.pairs || [];
        if (items.length < 8) {
            console.log(`    Game ${i+1} (${g.type}) low density: ${items.length} items`);
        }
    });
});
