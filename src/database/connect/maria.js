const maria = require("mysql2");

const conn = maria.createConnection({
  host: "localhost",
  port: process.env.MARIADB_PORT,
  user: "root",
  password: process.env.MARIADB_PW,
  database: "petcare",
});
console.log("maria.db 연동");

module.exports = conn;
