const database = require('../config/configDataBase');
const Sequelize = require('sequelize');

const login = database.define('login', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING(150),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING(16),
        allowNull: false
    }
}, {
    timestamps: false,

    createdAt: false,

    updatedAt: false,
})

module.exports = login;