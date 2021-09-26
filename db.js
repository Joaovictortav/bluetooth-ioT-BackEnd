const Sequelize = require('sequelize');
const sequelize = new Sequelize('iot_bluetooth', 'root', 'rootroot', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Conexão com o banco de dados realizada com sucesso!');
}).catch(() => {
    console.log('Erro ao conectar com o banco de dados!');
})

module.exports = sequelize;