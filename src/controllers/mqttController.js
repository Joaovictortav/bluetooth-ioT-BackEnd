const io = require("../config/configSocket");

function controllerOut(arg, client) {
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
}

function controllerIn (topic, message) {
    console.log(topic + ": ", message)
    io.on("connection", (socket) => {
        socket.emit(topic, message)
    });
}

module.exports = { controllerOut, controllerIn };