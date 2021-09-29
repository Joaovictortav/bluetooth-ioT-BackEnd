const db = require('./db');
const cors = require('cors')
const bodyParser = require('body-parser');
// const portBluetooth = require('serialport');
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origins: ['http://localhost:4200']
    }
});

// const ReadLine = portBluetooth.parsers.Readline;
let dadosArduino;
// const parser = new ReadLine({ delimiter: '\r\n' });
// const port = new portBluetooth("COM4", {
//     baudRate: 9600,
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());

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

io.on('connection', socket => {
    console.log(`Socket conectado: ${socket.id}`);
    socket.on("led", (arg) => {
        // port.write(`${arg}`, function(err) {
        //     if (err) {
        //         return console.log('Error on write: ', err.message);
        //     }
        // });
    });
})

// port.pipe(parser);

// port.on('open', () => {
//     console.log('Conexão bluetooth iniciada...');
//     parser.on('data', (line) => {
//         dadosArduino = line;
//         console.log(line);
//     });
// });

http.listen(8080, () => {
    console.log('Servidor na porta %d', http.address().port)
});