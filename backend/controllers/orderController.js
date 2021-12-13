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

    const profUser = await User.findById(professional);
    profUser.professional.orders.push({order: order._id.toString()});
    await profUser.save({ validateBeforeSave: false });

    res.status(201).json({
        success: true,
        order,
        profUser
    });
});

module.exports = {
    placeNewOrder
}