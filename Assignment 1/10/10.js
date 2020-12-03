var fs = require('fs');


fs.writeFile("10.txt", "hey ho! let's go", (err) => {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 

//extra
let str = process.argv.slice(2);
var data ="";
for(let i of str){
    data = data+i+" ";
}

fs.writeFileSync(`${str[0]}`,data);
console.log("The file was saved");
fs.readFile(str[0], 'utf8', (err,data) => {
    console.log(data);

})

//more extra

fs.readFile("a.txt", "utf8", (err,data) => {
    console.log(data);
    console.log("The file was saved!");
}); 
