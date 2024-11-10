// net_module.js
const net = require('net');

// Create a simple TCP server
const server = net.createServer((socket) => {
    console.log('Client connected');

    // Respond to data from client
    socket.on('data', (data) => {
        console.log('Received from client:', data.toString());
        socket.write('Hello from server');
    });

    // Handle client disconnection
    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

// Server listens on port 8080
server.listen(8080, () => {
    console.log('Server listening on port 8080');
});
