const database = require("../config/configDataBase");

// Carregando tabelas
require('./registro_login');

database.sync();