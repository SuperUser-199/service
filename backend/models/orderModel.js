const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: [true, 'Please provide the user details']
    },
    professional: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: [true, 'Please provide the professional details']
    },
    service: {
        type: mongoose.Schema.ObjectId,
        ref: 'service',
        required: [true, 'Please provide the service details']
    },
    status: {
        type: String,
    },
    paymentMode: {
        type: String,
        required: [true, 'Please provide the payment mode']
    },
    tax: {
        type: Number,
        default: 0
    },
    addCost: {
        description: {
            type: String
        },
        value: {
            type: Number
        }
    },
    totalCost: {
        type: Number,
        default: 0
    },
    placedAt: {
        type: Date,
        default: Date.now
    },
    completedAt: Date
})

module.exports = mongoose.model('order', orderSchema);