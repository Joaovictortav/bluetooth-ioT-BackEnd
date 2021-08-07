const portBluetooth = require('serialport');
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const ReadLine = portBluetooth.parsers.Readline;
let dadosArduino;
const parser = new ReadLine({ delimiter: '\r\n' });
const port = new portBluetooth("COM5", {
    baudRate: 9600,
});

port.pipe(parser);
port.on('open', () => {
    console.log('Conexão bluetooth iniciada...');
    port.write('2', function(err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    parser.on('data', (line) => {
        dadosArduino = line;
        console.log(line);
    });
});

app.get('/', (req, res, next) => {
    res.send(dadosArduino);
});
server.listen(8080, () => {
    console.log('Servidor na porta %d', server.address().port)
});