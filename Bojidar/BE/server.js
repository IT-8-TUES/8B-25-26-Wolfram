import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'w!w!s@s@a#d$a#d$bBaA..-....--.-.-.-/---..-...-.',
    database: 'playerAccount'
}).promise()
const result = await pool.query("SELECT * FROM accounts")
const rows = result[0]
console.log(rows)
// ako go gledate, ne baraite, znam che v momenta mu lipsva local host, ma mi beshe zor database-a