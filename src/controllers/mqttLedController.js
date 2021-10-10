function controllerLed(arg, client) {
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

module.exports = controllerLed;