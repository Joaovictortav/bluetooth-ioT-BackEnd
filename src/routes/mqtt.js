const client = require('../config/configMQTT');

client.on('connect', () => {
    console.log('Connected');
    client.subscribe([topic], () => {
        console.log(`Subscribe to topic '${topic}'`);
    })
});

client.on('ledVermelho', (topic, payload) => {
    console.log('Received Message:', topic, payload.toString())
})