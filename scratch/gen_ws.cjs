const words = ["PREDICT", "PLAN", "INTEND", "SCHEDULE", "ARRANGE", "HOPE", "EXPECT", "PROMISE", "FUTURE", "TOMORROW"];
const size = 12;
const grid = Array(size).fill().map(() => Array(size).fill(""));

function placeWord(word) {
    const directions = [
        [0, 1], [1, 0], [1, 1], [0, -1], [-1, 0], [-1, -1], [1, -1], [-1, 1]
    ];
    let placed = false;
    while (!placed) {
        const dir = directions[Math.floor(Math.random() * directions.length)];
        const r = Math.floor(Math.random() * size);
        const c = Math.floor(Math.random() * size);
        
        let canPlace = true;
        for (let i = 0; i < word.length; i++) {
            const nr = r + i * dir[0];
            const nc = c + i * dir[1];
            if (nr < 0 || nr >= size || nc < 0 || nc >= size || (grid[nr][nc] !== "" && grid[nr][nc] !== word[i])) {
                canPlace = false;
                break;
            }
        }
        
        if (canPlace) {
            for (let i = 0; i < word.length; i++) {
                grid[r + i * dir[0]][c + i * dir[1]] = word[i];
            }
            placed = true;
        }
    }
}

words.forEach(placeWord);

for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
        if (grid[r][c] === "") {
            grid[r][c] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
    }
}

console.log(JSON.stringify({grid, words}));
