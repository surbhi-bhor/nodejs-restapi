var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', (req, res)=> {
    res.send('./index.html');
    console.log('now displaying the html file');
});
app.listen(8080);