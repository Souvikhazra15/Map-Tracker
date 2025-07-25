const express = require('express');
const app = express();
const socketIo = require('socket.io');
const http = require('http');
const path = require('path');

const server = http.createServer(app);
const io = socketIo(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    socket.on('send-location', (data) => {
    console.log("Received location from", socket.id, data); // Debug log
    io.emit('receive-location', { id: socket.id, ...data });
});

    socket.on('disconnect', () => {
        io.emit('user-disconnected', socket.id);
    });
});

app.get('/', (req, res) => {
    res.render('index');
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
