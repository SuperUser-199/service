const mongoose = require('mongoose');

const archiveSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: [true, 'Please enter user details']
    },
    professional: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: [true, 'Please enter professional details']
    },
    orders: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'order',
            required: [true, 'Please enter the order details']
        }
    ],
    archivedAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('archive', archiveSchema);