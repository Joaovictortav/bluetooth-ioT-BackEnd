const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('heroku_f9e574432044cb9', 'b08d6febc2f3d9', '70d30b8b', {
    host: 'us-cdbr-east-04.cleardb.com',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Conexão com o banco de dados MySql realizada com sucesso!');
}).catch((error) => {
    console.error('Erro ao conectar com banco de dados MySql: ', error);
});

module.exports = sequelize;