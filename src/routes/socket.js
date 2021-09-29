const { port, parser } = require('../config/configBluetooth');
const { http } = require('../config/configExpress');
const socket = require('../config/configSocket');
const io = socket(http);

io.on('connection', socket => {
    console.log(`Socket conectado: ${socket.id}`);
    socket.on("led", (arg) => {
        port.write(`${arg}`, function(err) {
            if (err) {
                return console.log('Error on write: ', err.message);
            }
        });
    });
})