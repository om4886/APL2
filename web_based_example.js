//1. import require module
//2. create a server 
//3. read request and return response 

var http = require("http");

http.createServer(function(request, response) {
    // Send HTTP header
    // HTTP status: 200 OK
    // Content type: text/plain

    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello world from web based!!!!");
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
