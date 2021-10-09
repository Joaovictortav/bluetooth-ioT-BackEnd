const client = require('../config/configMQTT');

client.on('connect', () => {
    console.log('Connected ao brocker!');
});

client.on("offline", function() {
    client.end();
});

client.on('ledVermelho', (topic, payload) => {
    console.log('Received Message:', topic, payload.toString())
});