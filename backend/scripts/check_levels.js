const { query, initDatabase, pool } = require('../db');

async function run() {
	await initDatabase();

	const levels = (await query('SELECT DISTINCT level FROM topics ORDER BY level')).rows;
	console.log('All levels in DB:', levels.map((level) => level.level));

	const counts = (await query('SELECT level, COUNT(*)::int AS count FROM topics GROUP BY level ORDER BY level')).rows;
	console.log('\nTopics per level:');
	counts.forEach((count) => console.log(` ${count.level}: ${count.count} topics`));

	const a1Upper = (await query("SELECT number, title FROM topics WHERE level = 'A1' ORDER BY number")).rows;
	const a1Lower = (await query("SELECT number, title FROM topics WHERE level = 'a1' ORDER BY number")).rows;
	console.log(`\nA1 (uppercase): ${a1Upper.length} topics`);
	console.log(`a1 (lowercase): ${a1Lower.length} topics`);

	const a1Like = (await query("SELECT number, title, level FROM topics WHERE LOWER(level) = 'a1' ORDER BY number")).rows;
	console.log(`\nAll A1 topics (case-insensitive): ${a1Like.length}`);
	a1Like.forEach((topic) => console.log(` ${topic.number} [${topic.level}] ${topic.title}`));
}

run()
	.catch((error) => {
		console.error('Error:', error.message);
		process.exitCode = 1;
	})
	.finally(async () => {
		await pool.end();
	});
