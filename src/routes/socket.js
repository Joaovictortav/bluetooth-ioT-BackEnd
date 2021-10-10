const io = require("../config/configSocket");
const client_mqtt_1 = require('../config/clientsMQTT/mqtt_1');

io.on("connection", (socket) => {
    console.log(`Socket conectado: ${socket.id}`);

    socket.on("led", (arg) => {
        switch (arg) {
            case '1':
                client_mqtt_1.publish("ledVermelho", arg);
                break;
            case '2':
                client_mqtt_1.publish("ledAzul", arg);
                break;
            case '3':
                client_mqtt_1.publish("ledVerde", arg);
                break;
        }
    });

});