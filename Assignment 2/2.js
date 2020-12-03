var express = require('express');
var app = express();

app.get('/year', function(req, res){
    var year = 2020 - req.query.age
    console.log('Age: ' +req.query.age);
    res.send(`You were born in ${year}`);

});

app.listen(8080);

 