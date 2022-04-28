const fs = require('fs');
  
// Calling the readFileSync() method
// to read 'index.html' file
const data = fs.readFileSync('./assets/index.html',
            {encoding:'utf8', flag:'r'});
 
// Display the file data
console.log(data);