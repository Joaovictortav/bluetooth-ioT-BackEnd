const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('iot_bluetooth', 'root', 'rootroot', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
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