// const port = require('./src/config/configBluetooth');
const { app, http } = require('./src/config/configExpress');
const socket = require('./src/config/configSocket');
const io = socket(http);

const bd = require('./src/config/configMysql');