const io = require("../config/configSocket");
const client = require('./mqtt');

io.on("connection", (socket) => {
    console.log(`Socket conectado: ${socket.id}`);

    socket.on("led", (arg) => {
        switch (arg) {
            case '1':
                client.publish("ledVermelho", arg);
                break;
            case '2':
                client.publish("ledAzul", arg);
                break;
            case '3':
                client.publish("ledVerde", arg);
                break;
        }
    });

});