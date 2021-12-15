const Cart = require('../models/cartModel');
const Service = require('../models/service/serviceModel');
const AsyncErrorHandler = require('../middlewares/asyncErrorHandler');
const ErrorHandler = require('../utils/errorHandler');

// adding a service to cart
const addServiceToCart = AsyncErrorHandler(async (req, res, next) => {
    const { id: serviceId } = req.params;
    let cartInfo = await Cart.findOne({ user: req.user.id });

    if (!cartInfo) {
        cartInfo = await Cart.create({
            user: req.user.id,
            services: [{serviceId}]
        });
    } else {
        let flag = false;
        for (const service of cartInfo.services) {
            if (service.serviceId.toString() === serviceId) {
                flag = true;
                break;
            }
        }
        if (!flag)
        cartInfo = await Cart.findOneAndUpdate({ user: req.user.id }, {
            $push: {
                services: {serviceId}
            }
        });
    }
    res.status(200).json({
        success: true,
        cartInfo
    });
});

// get all the services in the cart of a user
const getServices = AsyncErrorHandler(async (req, res, next) => {
    const cartInfo = await Cart.findOne({ user: req.user.id });
    if (!cartInfo) {
        return res.status(200).json({success: true, result: []});
    }
    const result = [];
    for (const item of cartInfo.services) {
        const service = await Service.findById(item.serviceId);
        result.push({
            id: service.id,
            name: service.name,
            image: service.serviceImage,
            price: service.price,
            category: service.category
        });
    }

    res.status(200).json({
        success: true,
        result
    });
})

// delete a service from cart 
const deleteServiceFromCart = AsyncErrorHandler(async (req, res, next) => {
    const { id: serviceId } = req.params;
    await Cart.findOneAndUpdate({ user: req.user.id }, {
        $pull: {
            services: {serviceId}
        }
    });
    res.status(200).json({
        success: true
    });
})

module.exports = {
    addServiceToCart,
    getServices,
    deleteServiceFromCart
}