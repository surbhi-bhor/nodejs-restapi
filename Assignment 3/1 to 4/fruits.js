const express = require('express');
const app =express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mongoose = require('mongoose');

require('./Fruit');

const Fruit = mongoose.model('Fruit');
mongoose.connect('mongodb+srv://surbhi:dilip@cluster0.oask9.mongodb.net/inventory?retryWrites=true&w=majority', ()=> {
    console.log('our database is connected');
});

app.get('/', (req,res)=> {
    res.send('this is our main endpoint!');
})
//Question 3
app.post('/inventory', (req,res)=>{
    var newFruit = {
        name: req.body.name,
        quantity: req.body.quantity
    }
    var fruit = new Fruit(newFruit)

    fruit.save().then(() => {
        console.log('new fruit added');
    }).catch((err)=> {
        if(err){
            throw err;
        }
    })
    res.send('A new fruit added with success');
})

//Question 1  ->
//a)
app.get('/inventory', (req,res) => {
    Fruit.find().then((fruits) => {
        res.json(fruits)
    }).catch(err => {
        if(err){
            throw err;
        }
    })
})

// b)
app.get('/inventory/:name', (req,res) => {
    Fruit.findOne({name: req.params.name}, req.body).then(function(fruit){
        res.json(fruit);
    });
});

//Question 2 ->
// a)
app.put('/inventory', (req,res) => {
    Fruit.updateMany( req.body).then(function(fruit){
        res.json(fruit);
    });
});
// b)
app.put('/inventory/:name', (req,res) => {
    Fruit.findOneAndUpdate({name: req.params.name}, req.body).then(function(fruit){
        res.json(fruit);
    });
});

//Question 4 ->
// a)
app.delete('/inventory', (req,res)=> {
    Fruit.remove(function(fruit){
        res.json(fruit);
    });
});
// b)
app.delete('/inventory/:name', (req,res) => {
    Fruit.findOneAndRemove({name: req.params.name}, req.body).then(function(fruit){
        res.json(fruit);
    });
});


app.listen(8081, () => {
    console.log("now listening the port");
})