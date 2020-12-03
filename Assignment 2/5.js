var express = require('express');
var bodyParser = require('body-parser');
var app = express();


// parse application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('view engine', 'ejs');
//app.use('/assets', express.static('assets'));

app.get('/', function(req,res){
    res.render('form');
});

app.post('/form', urlencodedParser, function(req, res) {
  console.log(req.body.str);
  res.send(req.body.str.split('').reverse().join(''));
    
  });

app.listen(3000);