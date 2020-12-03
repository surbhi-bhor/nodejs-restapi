var express = require("express");
var app = express();
app.use(express.json());

var fruits = [{
    "name": "Apples",
    "quantity": 3
},
 {
    "name": "Oranges",
    "quantity": 7
},
{
    "name": "Pomegranates",
    "quantity": 55
}
]

app.get("/inventory", (req, res, next) => {
    res.send( fruits );
   });

app.get('/inventory/:name', (req,res) => {
    var fruit = fruits.find(c => c.name === req.params.name);
    res.send(fruit);
});
app.listen(8081, () => {
 console.log("Server running on port 8081");
});