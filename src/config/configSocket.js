const http = require('../http');

const io = require('socket.io')(http, {
    cors: {
        origins: "*",
    },
});

module.exports = io;