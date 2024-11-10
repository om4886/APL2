// Import the net module
const net = require('net');

// Create a TCP client and connect to the server
const client = net.createConnection({ port: 3000 }, () => {
  console.log('Connected to server');
  // Send data to the server
  client.write('Hello from client!');
});

// Handle incoming data from the server
client.on('data', (data) => {
  console.log(`Received: ${data}`);
  // End the connection after receiving data
  client.end();
});

// Handle client disconnection
client.on('end', () => {
  console.log('Disconnected from server');
});

// Handle errors
client.on('error', (err) => {
  console.error(`Client error: ${err.message}`);
});
