const { query, initDatabase, pool } = require('../db');

function printError(error) {
	console.error('Error type:', error?.name || 'UnknownError');
	console.error('Error code:', error?.code || 'N/A');
	console.error('Error message:', error?.message || '(empty)');

	if (Array.isArray(error?.errors) && error.errors.length > 0) {
		console.error('Nested connection errors:');
		for (const nested of error.errors) {
			const address = nested?.address ? `${nested.address}:${nested.port}` : 'unknown-address';
			console.error(`- ${nested?.code || 'UNKNOWN'} at ${address}`);
		}
	}
}

async function run() {
	await initDatabase();

	const users = (await query('SELECT id, username, email FROM users ORDER BY id')).rows;
	console.log('--- USERS ---');
	console.log(JSON.stringify(users, null, 2));

	const topics = (await query('SELECT id, level, number FROM topics ORDER BY id LIMIT 5')).rows;
	console.log('--- TOPICS ---');
	console.log(JSON.stringify(topics, null, 2));
}

run()
	.catch((error) => {
		printError(error);
		process.exitCode = 1;
	})
	.finally(async () => {
		await pool.end();
	});
