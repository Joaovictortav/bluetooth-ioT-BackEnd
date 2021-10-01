const database = require("../config/configDataBase.js");
const login = require('../models/registro_login');

function fazerLogin({ email, password }, fn) {
    console.log('E-mail: ' + email + ' Senha: ' + password);
    try {
        const user = login.findOne({
            where: {
                email: email
            }
        }).then(usuario => {
            if (usuario.email === email && usuario.password === password)
                fn({
                    message: "Realizado com sucesso!",
                    status: 200,
                    headers: "",
                    body: "token laskjdfhaiosudf",
                });
            else
                fn({
                    message: "Usuário ou Senha inválidos",
                    status: 401,
                    body: "",
                });
        });
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

module.exports = fazerLogin;