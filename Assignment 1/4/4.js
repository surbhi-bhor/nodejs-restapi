var fs = require('fs');


fs.writeFile("4.txt", "hey ho! let's go", (err) => {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 