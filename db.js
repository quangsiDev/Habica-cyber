const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  user: "root",
  password: "antelopeSQL",
  host: "localhost",
  database: "todotutorial",
});
module.exports = pool;
