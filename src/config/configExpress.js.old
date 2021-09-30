const app = require('express')();
const http = require('http').createServer(app);
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());

http.listen(8080, () => {
    console.log('Servidor na porta %d', http.address().port)
});

module.exports = { app, http };