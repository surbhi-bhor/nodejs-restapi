var fs = require('fs');
fs.readFile('11.txt', 'utf8', function(err,data){
    console.log(data);
});
