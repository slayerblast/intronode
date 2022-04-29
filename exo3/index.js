const fs = require('fs');
  
var data = "New File Contents";

// Calling the readFileSync() method
// to read 'index.html' file
const data = fs.readFileSync('./assets/index.html',
            {encoding:'utf8', flag:'r'});
const ecriture = 
// Display the file data
console.log(data);
