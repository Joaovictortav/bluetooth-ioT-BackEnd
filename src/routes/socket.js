const { port, parser } = require("../config/configBluetooth");
const io = require("../config/configSocket");

let dadosArduino;

port.on('open', () => {

    console.log('Conexão bluetooth iniciada...');

    parser.on('data', (line) => {
        dadosArduino = line;
        // console.log(line);
    });

});

io.on("connection", (socket) => {
    console.log(`Socket conectado: ${socket.id}`);

    socket.on("led", (arg) => {
        port.write(`${arg}`, function(err) {
            if (err) {
                return console.log("Error: ", err.message);
            }
        });
    });

});