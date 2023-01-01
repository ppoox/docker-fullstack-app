const mysql = require('mysql')
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'mysql',
  user: 'root',
  password: '4360',
  database: 'mysql'
})

exports.pool = pool
