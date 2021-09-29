const mysql = require('mysql');
const bd = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'iot_bluetooth'
})

bd.getConnection(err => {
    if (err) {
        console.log('Erro ao conectar ao banco de dados!');
    } else {
        console.log('Banco de dados conectado!');
    }
});

module.exports = bd;