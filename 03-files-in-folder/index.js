const fs = require ('fs');
const location = './03-files-in-folder/secret-folder';

fs.readdir(location, function (err, files) {
  if (err) {
    return console.log(err);
  } 
  files.forEach(function (file) {
    let filePath = location + '/' + file;
    fs.stat (filePath, (err, stats) => {
      if (stats.isDirectory() != true){
        console.log(`${file.split('.')[0]} - ` +
      `${file.split('.')[1]} - ` + stats.size / 1000 + 'kb');
      }
    });
  });
});