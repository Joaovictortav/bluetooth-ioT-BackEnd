const app = require("./configApp");
const http = require("http").createServer(app);

module.exports = http;