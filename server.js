// Import the http module
const http = require('http');

// Define the hostname and port where the server will listen
const hostname = '127.0.0.1';
const port = 3000;

// Create a simple web server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with status code and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // Send a response back to the browser
  res.end('<h1>Hello, World! This is a Node.js web server.</h1>');
});

// The server listens on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

