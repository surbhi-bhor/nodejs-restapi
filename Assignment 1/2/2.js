var fs = require('fs');
fs.readFile('node.txt', 'utf8', function(err,data){
    console.log(data);
});
