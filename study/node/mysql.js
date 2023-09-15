const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
})

db.query('SELECT 1 ', (err, results) => {
    if (err) return console.error(err.message)
    console.log(results)
})

const user = { username: 'test01', password: 'test01' }
const sqlStr = 'insert into users (username, password) values(?, ?)'

db.query(sqlStr, [user.username, user.password], (err, results) => {
    if (err) return console.error(err.message)
    if (results.affectedRows === 1) return console.log(results)
})