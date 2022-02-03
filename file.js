const fs = require('fs');
const data = fs.readFileSync('system.js');
console.log(data.toString());
const dir =fs.readdirSync(__dirname);
console.log(dir);
fs.watchFile('file-system/data.txt', () =>{
    console.log('Data file has been tempered with.')
});