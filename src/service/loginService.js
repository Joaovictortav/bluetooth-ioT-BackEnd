const bd = require("../config/configMysql");

async function fazerLogin({ email, password }) {
  try {
    let SQL = `SELECT * FROM registro_login WHERE email='${email}'`;

    var response;
    const test = await bd.query(SQL);

    console.log("===>", test);
    bd.query(SQL, (error, result) => {
      if (error) {
        console.error;
      } else {
        const usuario = result[0];
        if (usuario.email === email && usuario.password === password)
          return {
            message: "Realizado com sucesso!",
            status: 200,
            headers: "",
            body: "token laskjdfhaiosudf",
          };
        else
          return {
            message: "Usuário ou Senha inválidos",
            status: 401,
            body: "",
          };
      }
    });
  } catch (error) {
    console.log(error);
  }
}
module.exports = fazerLogin;
