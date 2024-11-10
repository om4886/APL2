const fs = require('fs');
const path = require('path');

// Directory and file paths
const directoryPath = path.join(__dirname, 'myDirectory');
const filePath = path.join(directoryPath, 'example.txt');

// Create a directory if it doesn't exist
fs.mkdir(directoryPath, { recursive: true }, (err) => {
    if (err) {
        return console.error('Error creating directory:', err);
    }
    console.log('Directory created:', directoryPath);

    // Create a file in the directory
    fs.writeFile(filePath, 'This is a sample file', (err) => {
        if (err) {
            return console.error('Error creating file:', err);
        }
        console.log('File created:', filePath);

        // Get file information
        fs.stat(filePath, (err, stats) => {
            if (err) {
                return console.error('Error getting file info:', err);
            }
            console.log('File information:');
            console.log('File size:', stats.size, 'bytes');
            console.log('Created at:', stats.birthtime);
            console.log('Last modified at:', stats.mtime);
            console.log('Is file:', stats.isFile());
            console.log('Is directory:', stats.isDirectory());
        });
    });
});
