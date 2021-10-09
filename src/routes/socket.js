const io = require("../config/configSocket");

io.on("connection", (socket) => {
    console.log(`Socket conectado: ${socket.id}`);

    socket.on("led", (arg) => {
        console.log(arg);
    });

});