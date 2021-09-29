const portBluetooth = require('serialport');

const ReadLine = portBluetooth.parsers.Readline;
let dadosArduino;
const parser = new ReadLine({ delimiter: '\r\n' });
const port = new portBluetooth("COM4", {
    baudRate: 9600,
});

port.pipe(parser);

port.on('open', () => {
    console.log('Conexão bluetooth iniciada...');

    // Não sei se chama aqui!!
    parser.on('data', (line) => {
        dadosArduino = line;
        console.log(line);
    });


});

module.exports = { port, parser };