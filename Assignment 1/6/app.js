// phase 1
var calculator = require('./calculator');
console.log(calculator.adder(7,5));
console.log(calculator.multiplier(7,5));
// phase 2
var adder = require('./operations/sum');
console.log(adder.sum(4,4));
var multiplication = require('./operations/multiplication');
console.log(multiplication.multiplier(8,4));
var substraction = require('./operations/substraction');
console.log(substraction.subtractor(53,45));
var division = require('./operations/division');
console.log(division.divider(45,12));
//phase 3
var moment = require('moment');
var today = moment();
console.log('Today is: ' +today.format("dddd, MMMM Do YYYY, h:mm:ss a"));
