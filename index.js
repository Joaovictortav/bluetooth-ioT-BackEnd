const http = require("./src/http");
require('./src/models');
require("./src/routes/socket");
require("./src/config/configBrocker");

http.listen(8080, () => {
    console.log("Servidor na porta %d", http.address().port);
});