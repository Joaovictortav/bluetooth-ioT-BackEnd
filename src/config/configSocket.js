const http = require('../connection')

const io = require('socket.io')(http, {
    cors: {
        origins: ['*:*']
    }
});

module.exports = io;