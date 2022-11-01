const Pool = require('pg').Pool;

console.log(process.env.POSTGRES_USER);
console.log(process.env.POSTGRES_HOST);
console.log(process.env.POSTGRES_DB);
console.log(process.env.POSTGRES_PASSWORD);
console.log(process.env.POSTGRES_PORT);

const pool = new Pool({
  user : process.env.POSTGRES_USER,
  host : process.env.POSTGRES_HOST,
  database : process.env.POSTGRES_DB,
  password : process.env.POSTGRES_PASSWORD,
  port : process.env.POSTGRES_PORT
})

module.exports = pool;