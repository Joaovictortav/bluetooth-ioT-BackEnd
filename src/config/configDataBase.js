const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('iot_bluetooth', 'root', 'rootroot', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Conexão com o banco de dados MySql realizada com sucesso!');
}).catch((error) => {
    console.error('Erro ao conectar com banco de dados MySql: ', error);
});

// const mysql = require('mysql');
// const bd = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'rootroot',
//     database: 'iot_bluetooth'
// })

// bd.getConnection(err => {
//     if (err) {
//         console.log('Erro ao conectar ao banco de dados!');
//     } else {
//         console.log('Banco de dados conectado!');
//     }
// });

module.exports = sequelize;