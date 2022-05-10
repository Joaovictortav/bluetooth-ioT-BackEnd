const io = require("../config/configSocket");
const mqtt = require('../config/configMqtt');

const { controllerOut } = require('../controllers/mqttController');
const client_mqtt_1 = mqtt('mqtt_1');

io.on("connection", (socket) => {
    console.log(`Socket conectado: ${socket.id}`);

    socket.on("led", (arg) => {
        controllerOut(arg, client_mqtt_1);
    });
});