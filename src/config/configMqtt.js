const mqtt = require('mqtt');
const {controllerOut, controllerIn } = require('../controllers/mqttController');

module.exports = (clientId) => {

    const host = 'localhost';
    // const host = 'broker.hivemq.com';
    const port = '1883';

    const connectUrl = `mqtt://${host}:${port}`;

    const client = mqtt.connect(connectUrl, {
        id: clientId,
        clean: true,
        connectTimeout: 4000,
        reconnectPeriod: 10000,
    });

    client.on('connect', () => {
        console.log('Connected ao brocker!');
        client.subscribe('outTopic')
    });

    client.on('message', (topic, message) => {
        controllerIn(topic, message.toString());
    });

    client.on("error", (e) => {
        this.logger.error("MQTT error.", e.message);
        this.logger.debug(e);
    });

    client.on("offline", function() {
        client.end();
    });

    return client
};