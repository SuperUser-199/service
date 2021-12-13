const Order = require('../models/orderModel');
const Service = require('../models/service/serviceModel');
const User = require('../models/userModel');
const AsyncErrorHandler = require('../middlewares/asyncErrorHandler');

// placing a new order
const placeNewOrder = AsyncErrorHandler(async (req, res, next) => {
    const { professional, service, paymentMode } = req.body;
    const order = await Order.create({
        user: req.user.id,
        professional,
        service,
        paymentMode
    });

    res.status(201).json({
        success: true,
        order,
    });
});

module.exports = {
    placeNewOrder
}