const fs = require('fs');
const path = require('path');
const readline = require('readline');

const getPath = (filename) => path.join(__dirname, filename);

const writebleStream = fs.createWriteStream(getPath('text.txt'));

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.write('Please enter your name:');
read.on('line', data => data === 'exit' ? read.close() : writebleStream.write(`${data}\n`))
    .on('close', () => {
        read.write('Great, we remember you');
        process.exit();
    });
