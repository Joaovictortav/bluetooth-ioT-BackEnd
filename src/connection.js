const app = require("./app");
const http = require("http").createServer(app);
//app.use(bodyParser.urlencoded({ extended: true }));
module.exports = http;
