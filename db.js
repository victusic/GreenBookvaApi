const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres", 
    password: "$%f2eY1@v!9#C0mpl3xP@55",
    host: "localhost",
    port: 5432,
    database: "GreenBookvaDB"
});

module.exports = pool