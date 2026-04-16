const { query } = require('./db');

const greetingsMap = {
    '👋': '/assets/arcade/greetings/hello.png',
    '🤝': '/assets/arcade/greetings/nice_to_meet_you.png',
    '🌅': '/assets/arcade/greetings/good_morning.png',
    '☀️': '/assets/arcade/greetings/good_afternoon.png',
    '🌆': '/assets/arcade/greetings/good_evening.png',
    '🌙': '/assets/arcade/greetings/good_night.png',
    '✌️': '/assets/arcade/greetings/goodbye.png',
    '🙋‍♂️': '/assets/arcade/greetings/hi.png',
    '🙏': '/assets/arcade/greetings/thanks.png',
    '😊': '/assets/arcade/greetings/fine.png'
};

async function run() {
    try {
        const r = await query('SELECT premium_practice FROM topics WHERE level = \'A1\' AND number = 1');
        if (!r.rows[0]) {
            console.error('Topic A1-1 not found');
            return;
        }

        const premium = JSON.parse(r.rows[0].premium_practice);
        const game = premium.games.find(g => g.type === 'memory_game');
        
        if (game) {
            game.pairs.forEach(p => {
                if (greetingsMap[p.emoji]) {
                    console.log(`Replacing ${p.emoji} for ${p.word}`);
                    p.emoji = greetingsMap[p.emoji];
                }
            });
        }

        await query('UPDATE topics SET premium_practice = $1 WHERE level = \'A1\' AND number = 1', [JSON.stringify(premium)]);
        console.log('Successfully updated A1-1 with 3D icons.');
    } catch (err) {
        console.error('Update failed:', err);
    } finally {
        process.exit(0);
    }
}

run();
