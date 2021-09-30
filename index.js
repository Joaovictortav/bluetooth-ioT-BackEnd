const http = require("./src/connection");

http.listen(8080, () => {
  console.log("Servidor na porta %d", http.address().port);
});
