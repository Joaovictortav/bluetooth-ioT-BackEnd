const mqtt = require('mqtt');

const host = '192.168.1.136';
const port = '1883';
const clientId = `mqtt_1`;

const connectUrl = `mqtt://${host}:${port}`;

const client = mqtt.connect(connectUrl, {
    id: clientId,
    clean: true,
    connectTimeout: 4000,
    reconnectPeriod: 10000,
});

module.exports = client;