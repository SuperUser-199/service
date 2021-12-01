const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    city: {
        type: 'String',
        required: [true, 'Please enter your name']
    },
    district: {
        type: 'String',
        required: [true, 'Please enter your name']
    },
    state: {
        type: 'String',
        required: [true, 'Please enter your name']
    },
    pincode: {
        type: Number,
        required: [true, 'Please enter your name']
    }
});

module.exports = mongoose.model('address', addressSchema);