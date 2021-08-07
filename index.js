const portBluetooth = require('serialport');
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const ReadLine = portBluetooth.parsers.Readline;
let dadosArduino;
const parser = new ReadLine({ delimiter: '\r\n' });
const port = new portBluetooth("COM5", {
    baudRate: 9600,
});

app.get('/', (req, res, next) => {
    res.send(dadosArduino);
});
server.listen(8080, () => {
    console.log('Servidor na porta %d', server.address().port)
});

port.pipe(parser);
port.on('open', () => {
    console.log('Conexão bluetooth iniciada...');
    io.on('connection', socket => {
        console.log(`Socket conectado: ${socket.id}`);
    })
    port.write('3', function(err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    parser.on('data', (line) => {
        dadosArduino = line;
        console.log(line);
    });
});