var express = require('express');
var path = require('path');

var app  = express();

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

app.get('/home', (req,res) =>{
    res.render('index', {date: new Date().toDateString()});
});

app.listen(3000,() =>{
    console.log('Server started on port 3000');
});