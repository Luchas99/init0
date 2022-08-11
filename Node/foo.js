var fs = require('fs');

//The fs.writeFile() method replaces the specified file and content if it exists. 
//If the file does not exist, a new file, containing the specified content, will be created:
fs.writeFile('init0.js', 'init1;', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

/* The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); */

  