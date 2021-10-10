const http = require('./configHttp');

const io = require('socket.io')(http, {
    cors: {
        origins: "*",
    },
});

module.exports = io;