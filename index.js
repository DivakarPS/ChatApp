const express = require('express');
const app = express();
const http = require('http');
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);

app.use('/', express.static(__dirname+ '/public')); 


io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(3000, () => {
    console.log("listening at PORT:3000");
})