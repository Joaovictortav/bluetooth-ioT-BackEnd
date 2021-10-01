const http = require('../connection')

const io = require('socket.io')(http, {
    cors: {
        origins: ['http://localhost:4200']
    }
});

module.exports = io;