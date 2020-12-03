var express = require('express')
var app = express()
app.get('/home', function(req, res) {
  res.end('Hello World!!!')
  console.log('Now listening to port 3000');
})
app.listen(process.argv[2] || 3000)