const io = require("../config/configSocket");
const mqtt = require('../config/configMqtt');

const controllerLed = require('../controllers/mqttLedController');
const client_mqtt_1 = mqtt('mqtt_1');

io.on("connection", (socket) => {
    console.log(`Socket conectado: ${socket.id}`);

    socket.on("led", (arg) => {
        controllerLed(arg, client_mqtt_1);
    });

});