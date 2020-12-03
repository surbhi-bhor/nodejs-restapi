var express = require('express');
var app = express();
app.get('/', (req, res)=> {
    res.send('Hello,world!');
    console.log('now displaying hello world');
});
var moment = require('moment');
var today = moment();
app.get('/time', (req, res)=> {
    res.send(today.format());
    console.log('now displaying current time');
});
//app.listen(8080);

var port = process.env.port || 8080;

app.listen(1337);