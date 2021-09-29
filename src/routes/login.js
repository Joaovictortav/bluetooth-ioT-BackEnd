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
        console.log(req.body);
        res.status(200).send('Realizado com sucesso!');
    } catch (error) {
        console.log(error)
    }
})