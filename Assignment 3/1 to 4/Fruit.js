  
const mongoose = require('mongoose');

mongoose.model('Fruit', {
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        require: true
    }
});

