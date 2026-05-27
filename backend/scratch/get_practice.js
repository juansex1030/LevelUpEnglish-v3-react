const { query } = require('../db');
const fs = require('fs');
const path = require('path');

async function run() {
    try {
        const res = await query("SELECT practice FROM topics WHERE level = 'A1' AND number = 1");
        if (res.rows.length === 0) {
            console.log("Topic A1 Number 1 not found");
            return;
        }
        const practice = res.rows[0].practice;
        fs.writeFileSync(path.join(__dirname, 'practice_a1_1.txt'), practice);
        console.log("Practice content written to practice_a1_1.txt successfully!");
    } catch (err) {
        console.error("Error fetching practice:", err);
    }
    process.exit(0);
}

run();
