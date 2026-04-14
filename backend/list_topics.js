require('dotenv').config();
const { query } = require('./db.js');
query('SELECT number, title FROM topics WHERE level = $1 ORDER BY number', ['A1'])
    .then(r => { r.rows.forEach(row => console.log(row.number + ': ' + row.title)); process.exit(0); })
    .catch(e => { console.error(e); process.exit(1); });
