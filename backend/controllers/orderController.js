const Order = require('../models/orderModel');
const Service = require('../models/service/serviceModel');
const User = require('../models/userModel');
const AsyncErrorHandler = require('../middlewares/asyncErrorHandler');
const ErrorHandler = require('../utils/errorHandler');

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

// update order status
const updateOrderStatus = AsyncErrorHandler(async (req, res, next) => {
    const { id: orderId } = req.params;
    const order = await Order.findById(orderId);
    if (!order) {
        return next(new ErrorHandler('Error: Order doesn\'t exist', 404));
    }
    const { status, description, value } = req.body;
    order.status = status;
    order.addCost = {
        description,
        value
    };
    await order.save({ new: true, validateBeforeSave: false });

    res.status(200).json({
        success: true,
        order
    });
})

module.exports = {
    placeNewOrder,
    updateOrderStatus
}