const mqtt = require('mqtt');

module.exports = (clientId) => {

    const host = '192.168.1.136';
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