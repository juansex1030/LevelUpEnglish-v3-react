const { query } = require('../db');
const fs = require('fs');
const path = require('path');

async function run() {
    try {
        const res = await query("SELECT id, level, number, title, practice, premium_practice FROM topics");
        console.log(`Found ${res.rows.length} topics in the database.`);
        const results = [];
        for (const row of res.rows) {
            let found = false;
            let matchType = '';
            if (row.practice && row.practice.toLowerCase().includes('search')) {
                found = true;
                matchType += 'practice ';
            }
            if (row.premium_practice && row.premium_practice.toLowerCase().includes('search')) {
                found = true;
                matchType += 'premium_practice ';
            }
            if (row.theory && row.theory.toLowerCase().includes('search')) {
                found = true;
                matchType += 'theory ';
            }
            if (row.title && row.title.toLowerCase().includes('search')) {
                found = true;
                matchType += 'title ';
            }
            
            console.log(`Topic: [${row.level} #${row.number}] ${row.title} - Match: ${found ? 'YES (' + matchType + ')' : 'NO'}`);
            if (found) {
                results.push({
                    id: row.id,
                    level: row.level,
                    number: row.number,
                    title: row.title,
                    practice: row.practice,
                    premium_practice: row.premium_practice
                });
            }
        }
        fs.writeFileSync(path.join(__dirname, 'search_results.json'), JSON.stringify(results, null, 2));
        console.log("Search complete. Results written to search_results.json");
    } catch (err) {
        console.error("Error searching topics:", err);
    }
    process.exit(0);
}

run();
