const Pool = require("pg").Pool;
const { credentials } = require("./config");

const pool = new Pool({
    user: "postgres",
    password: credentials.dbPassword,
    host: "localhost",
    port: 5432,
    database: "node_postgres",
});

module.exports = pool;