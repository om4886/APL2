// path_module.js
const path = require('path');

// Example paths
const filePath = '/users/admin/docs/file.txt';

// Get the directory name
console.log('Directory:', path.dirname(filePath));

// Get the base name (file name)
console.log('Base name:', path.basename(filePath));

// Get the file extension
console.log('Extension:', path.extname(filePath));

// Join multiple path segments
const newPath = path.join('/users', 'admin', 'docs', 'newfile.txt');
console.log('Joined Path:', newPath);

// Resolve to absolute path
const absolutePath = path.resolve('path_module.js');
console.log('Absolute Path:', absolutePath);
