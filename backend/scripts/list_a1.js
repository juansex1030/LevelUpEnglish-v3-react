const fs = require('fs');
const path = require('path');
const { query, initDatabase, pool } = require('../db');

async function run() {
	await initDatabase();
	const topics = (await query("SELECT number, title FROM topics WHERE LOWER(level) = 'a1' ORDER BY number")).rows;
	let out = `Total A1 topics: ${topics.length}\n\n`;
	topics.forEach((topic) => {
		out += `${String(topic.number).padStart(2)} | ${topic.title}\n`;
	});

	fs.writeFileSync(path.join(__dirname, 'a1_topic_list.txt'), out, 'utf8');
	console.log(out);
}

run()
	.catch((error) => {
		console.error('Error:', error.message);
		process.exitCode = 1;
	})
	.finally(async () => {
		await pool.end();
	});
