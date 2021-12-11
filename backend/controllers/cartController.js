const Cart = require('../models/cartModel');
const Service = require('../models/service/serviceModel');
const AsyncErrorHandler = require('../middlewares/asyncErrorHandler');

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
    const result = [];
    for (const item of cartInfo.services) {
        const service = await Service.findById(item.serviceId);
        result.push({
            id: service.id,
            name: service.name,
            image: service.serviceImage,
            price: service.price
        });
    }

    res.status(200).json({
        success: true,
        result
    });
})

module.exports = {
    addServiceToCart,
    getServices
}