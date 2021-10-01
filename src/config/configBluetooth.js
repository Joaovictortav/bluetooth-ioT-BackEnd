const portBluetooth = require('serialport');

const ReadLine = portBluetooth.parsers.Readline;
let dadosArduino;
const parser = new ReadLine({ delimiter: '\r\n' });
const port = new portBluetooth("COM4", {
    baudRate: 9600,
});

port.pipe(parser);

module.exports = { port, parser };