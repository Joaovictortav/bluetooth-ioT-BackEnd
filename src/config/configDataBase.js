const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('iot_project', 'root', 'rootroot', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Conexão com o banco de dados MySql realizada com sucesso!');
}).catch((error) => {
    console.error('Erro ao conectar com banco de dados MySql: ', error);
});

module.exports = sequelize;