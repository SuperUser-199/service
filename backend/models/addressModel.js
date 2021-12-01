const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },
    city: {
        type: 'String',
        required: [true, 'Please enter city name']
    },
    district: {
        type: 'String',
        required: [true, 'Please enter district name']
    },
    state: {
        type: 'String',
        required: [true, 'Please enter state name']
    },
    country: {
        type: 'String',
        required: [true, 'Please enter country name']
    },
    pincode: {
        type: Number,
        required: [true, 'Please enter pincode']
    }
});

module.exports = mongoose.model('address', addressSchema);