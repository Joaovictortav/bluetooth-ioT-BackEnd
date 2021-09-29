const mysql = require('mysql');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'iot_bluetooth'
})

module.exports = db;