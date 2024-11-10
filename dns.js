// Import the 'dns' module in Node.js
const dns = require('dns');

// Get IP address of google.com using dns.lookup()
dns.lookup('google.com', (err, address, family) => {
    if (err) {
        console.error('Error during DNS lookup:', err);
    } else {
        console.log(`Google's IP address: ${address}`);
        console.log(`Address family: IPv${family}`);
    }
});

// Get the array of DNS servers using dns.getServers()
const dnsServers = dns.getServers();
console.log('DNS Servers:', dnsServers);
