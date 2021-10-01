const http = require("./src/connection");
require('./src/models');
require("./src/routes/socket");

http.listen(8080, () => {
    console.log("Servidor na porta %d", http.address().port);
});