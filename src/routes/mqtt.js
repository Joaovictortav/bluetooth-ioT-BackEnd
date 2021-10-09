const client = require('../config/configMQTT');

const topic = '/nodejs/mqtt'
client.on('connect', () => {
    console.log('Connected');
    client.subscribe([topic], () => {
        console.log(`Subscribe to topic '${topic}'`);
    })
});

client.on('message', (topic, payload) => {
    console.log('Received Message:', topic, payload.toString())
})