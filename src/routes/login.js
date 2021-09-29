const bd = require('../config/configMysql');
const { app } = require('../config/configExpress');

app.get('/', (req, res, next) => {
    try {
        res.status(200).send(`<h1>Hey Socket.io</h1>`);
    } catch (error) {
        console.log(error)
    }
});

app.post('/', (req, res, next) => {
    try {
        let SQL = `SELECT * FROM resgistro_login
                WHERE email='${req.body.email}' AND password='${req.body.senha}'`;

        bd.query(SQL, (error, result) => {
            if (error) {
                console.error
            } else {
                console.log(result);
                res.status(200).send('Realizado com sucesso!');
            }
        })
    } catch (error) {
        console.log(error)
    }
})