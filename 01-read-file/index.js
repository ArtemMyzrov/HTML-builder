const path = require('node:path');
const fs = require("fs");

var data = '';
var filename = path.join(__dirname, 'text.txt');
 
var readerStream = fs.createReadStream(filename);

readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function() {
   console.log(data);
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});