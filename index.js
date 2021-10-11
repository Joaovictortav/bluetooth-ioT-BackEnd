const http = require("./src/config/configHttp");

const port = process.env.PORT || 3000;

require('./src/models');
require("./src/routes/socket");
require("./src/config/configBrocker");

http.listen(port, () => {
    console.log("Servidor na porta %d", http.address().port);
});