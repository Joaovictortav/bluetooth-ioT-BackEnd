const client = require('../config/configMQTT');

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

module.exports = client;