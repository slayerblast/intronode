const path = require('path');
const fs = require('fs');

const cheminAbsoluIndexHtml = path.join(__dirname,'../assets/index.html');
const cheminAbsoluLogTxt = path.join(__dirname,'log.txt');

console.log(cheminAbsoluIndexHtml);
console.log(cheminAbsoluLogTxt);

const ContenuIndexHtml = fs.readFileSync(cheminAbsoluIndexHtml,{encoding:'utf8'});
const ContenuLogTxt = String(fs.readFileSync(cheminAbsoluLogTxt));

console.log(ContenuIndexHtml);
console.log(ContenuLogTxt);