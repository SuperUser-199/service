const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the service name']
    },
    category: {
        type: String,
        required: [true, 'Please enter the service category']
    },
    description: {
        type: String,
        required: [true, 'Please enter the service description']
    },
    price: {
        type: Number,
        min: 0,
        required: [true, 'Please enter the service price']
    }
});

module.exports = new mongoose.model('service', serviceSchema);