const portBluetooth = require('serialport');

const ReadLine = portBluetooth.parsers.Readline;
let dadosArduino;
const parser = new ReadLine({ delimiter: '\r\n' });
const port = new portBluetooth("COM4", {
    baudRate: 9600,
}, err => {
    if (err) {
        console.log(`Bluetooth não conectado: ${err}`)
    } else {
        console.log(`Blutotth conectado!`)
    }
});

port.pipe(parser);

module.exports = { port, parser };