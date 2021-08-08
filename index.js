const portBluetooth = require('serialport');
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origins: ['http://localhost:4200']
    }
});

const ReadLine = portBluetooth.parsers.Readline;
let dadosArduino;
const parser = new ReadLine({ delimiter: '\r\n' });
const port = new portBluetooth("COM5", {
    baudRate: 9600,
});

app.get('/', (req, res, next) => {
    res.send(`<h1>Hey Socket.io ${dadosArduino}</h1>`);
});


io.on('connection', socket => {
    console.log(`Socket conectado: ${socket.id}`);
    socket.on("led", (arg) => {
        port.write(`${arg}`, function(err) {
            if (err) {
                return console.log('Error on write: ', err.message);
            }
        });
        // console.log(arg);
    });
})

port.pipe(parser);
port.on('open', () => {
    console.log('Conexão bluetooth iniciada...');
    // port.write('1', function(err) {
    //     if (err) {
    //         return console.log('Error on write: ', err.message);
    //     }
    // });
    parser.on('data', (line) => {
        dadosArduino = line;
        console.log(line);
    });
});

http.listen(8080, () => {
    console.log('Servidor na porta %d', http.address().port)
});