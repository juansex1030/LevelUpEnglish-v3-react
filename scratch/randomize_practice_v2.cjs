const fs = require('fs');
const { query } = require('../backend/db');

async function surgicalClean() {
    try {
        const topics = JSON.parse(fs.readFileSync('backend/data/topics.json', 'utf8'));
        console.log(`Starting Surgical Clean on ${topics.length} topics...`);

        let purgedCount = 0;
        let updatedCount = 0;

        for (const t of topics) {
            if (!t.premium_practice) continue;
            let pp = JSON.parse(t.premium_practice);
            
            let words = [];
            const extract = (obj) => {
                if (!obj) return;
                if (Array.isArray(obj)) { obj.forEach(extract); return; }
                if (typeof obj === 'object') {
                    if (obj.q && obj.a && typeof obj.q === 'string' && typeof obj.a === 'string') {
                        const cleanQ = obj.q.trim();
                        const cleanA = obj.a.trim();
                        
                        const isNonsense = (str) => {
                            if (!str || str.length < 3 || str.length > 50) return true;
                            if (str.endsWith(':')) return true; // Label
                            if (/[/\[\]ʒəɪʊɛʌɔɑæθðʃŋçɥøœ~ː]/.test(str)) return true; // Phonetics
                            if (/^(Question|Section|Title|Category|Instruction|Example|Exercise|Activity)/i.test(str)) return true;
                            if (/^\d+\./.test(str)) return true; // Numbered lists
                            return false;
                        };

                        if (!isNonsense(cleanQ) && !isNonsense(cleanA)) {
                            words.push({ q: cleanQ, a: cleanA });
                        }
                    }
                    Object.values(obj).forEach(extract);
                }
            };

            extract(pp);

            // Remove duplicates
            words = words.filter((v, i, a) => a.findIndex(item => item.q === v.q) === i);

            // CRITICAL: If not enough vocabulary, REMOVE arcade games from this topic
            if (words.length < 5) {
                if (pp.games) {
                    const originalLen = pp.games.length;
                    pp.games = pp.games.filter(g => !['snake', 'shooter', 'whack_a_mole', 'pacman', 'frogger', 'flappy', 'doodle'].includes(g.type));
                    if (pp.games.length < originalLen) {
                        console.log(`[PURGE] Removed Arcade from Topic ${t.number} (${t.level}) - Only ${words.length} valid words found.`);
                        purgedCount++;
                    }
                }
            } else {
                // Assign/Update a high-quality game
                const types = ['snake', 'shooter', 'whack_a_mole', 'pacman', 'frogger', 'flappy', 'doodle'];
                const type = types[Math.floor(Math.random() * types.length)];
                
                const arcadeGame = {
                    type,
                    title: `Premium ${type.charAt(0).toUpperCase() + type.slice(1)}`,
                    instruction: 'Selecciona la traducción correcta.',
                    words: words.slice(0, 15)
                };

                if (!pp.games) pp.games = [];
                const idx = pp.games.findIndex(g => types.includes(g.type));
                if (idx > -1) pp.games[idx] = arcadeGame;
                else pp.games.push(arcadeGame);
                updatedCount++;
            }

            t.premium_practice = JSON.stringify(pp);
            await query('UPDATE topics SET premium_practice = $1 WHERE level = $2 AND "number" = $3', [t.premium_practice, t.level, t.number]);
        }

        fs.writeFileSync('backend/data/topics.json', JSON.stringify(topics, null, 2));
        console.log(`\n--- CLEANUP COMPLETE ---`);
        console.log(`Topics updated with clean arcade: ${updatedCount}`);
        console.log(`Arcade games purged due to low quality: ${purgedCount}`);

    } catch (err) {
        console.error('Surgical Clean Failed:', err);
    } finally {
        process.exit(0);
    }
}

surgicalClean();
