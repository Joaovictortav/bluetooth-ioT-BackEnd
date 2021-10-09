const mqtt = require('mqtt');

const host = 'localhost';
const port = '8081';
const clientId = `mqtt_1`;

const connectUrl = `mqtt://${host}:${port}`;

const client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: 'project-IoT',
    password: 'senha',
    reconnectPeriod: 1000,
});

module.exports = client;