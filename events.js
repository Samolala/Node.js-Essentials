const fs = require('fs');
const watcher = fs.watch('events.js');

watcher.on('change',() => {
    console.log('File has changed');
});