const database = require("../config/configDataBase.js");
const login = require('../models/registro_login');
const config = require('../auth');
const jwt = require('jsonwebtoken');

function fazerLogin({ email, password }, fn) {
    try {
        login.findOne({
            where: {
                email: email
            }
        }).then(usuario => {
            if (usuario.email === email && usuario.password === password)
                fn({
                    message: "Realizado com sucesso!",
                    status: 200,
                    body: {
                        token: jwt.sign({ id: usuario.id }, config.secret, { expiresIn: config.expireIn })
                    },
                });
            else
                fn({
                    message: "Usuário ou Senha inválidos",
                    status: 401,
                    body: "",
                });
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = fazerLogin;