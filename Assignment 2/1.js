var express = require('express');
var app = express();
app.get('/', (req, res)=> {
    res.send('Hello,world!');
    console.log('now listening to port 8080');
});
app.listen(8080);