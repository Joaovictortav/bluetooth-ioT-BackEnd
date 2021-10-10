const app = require("./configExpress");
const http = require("http").createServer(app);

module.exports = http;