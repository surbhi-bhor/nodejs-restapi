


var fs = require("fs");


fs.readFile("5.txt", "utf8", function(err, data){
  var splitted = data.split("John").length-1;
  console.log(splitted);
 
});

