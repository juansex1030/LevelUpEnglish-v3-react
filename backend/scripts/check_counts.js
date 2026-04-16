const { query, initDatabase, pool } = require('../db');

async function run() {
    await initDatabase();
    const res = await query("SELECT level, number, title, practice, premium_practice FROM topics WHERE level IN ('A1', 'A2') ORDER BY level, number");
    
    console.log("| Level | # | Title | Practice Ex | Premium Ex |");
    console.log("|-------|---|-------|-------------|------------|");
    
    res.rows.forEach(row => {
        let pCount = 0;
        try {
            if (row.practice) {
                const p = JSON.parse(row.practice);
                (p.games || []).forEach(g => {
                    const count = (g.questions || g.sentences || g.words || g.pairs || []).length;
                    pCount += count;
                });
            }
        } catch(e) {
            // Silently ignore or log briefly
        }

        let ppCount = 0;
        try {
            if (row.premium_practice) {
                const pp = JSON.parse(row.premium_practice);
                (pp.games || []).forEach(g => {
                    const count = (g.questions || g.sentences || g.words || g.pairs || []).length;
                    ppCount += count;
                });
            }
        } catch(e) {
            // Silently ignore or log briefly
        }
        
        console.log(`| ${row.level} | ${row.number} | ${row.title} | ${pCount} | ${ppCount} |`);
    });
}

run()
    .catch(err => console.error(err))
    .finally(() => pool.end());
