const Cart = require('../models/cartModel');
const AsyncErrorHandler = require('../middlewares/asyncErrorHandler');

// adding a service to cart
const addServiceToCart = AsyncErrorHandler(async (req, res, next) => {
    const { id } = req.params;
    let cartInfo = await Cart.findOne({ user: req.user.id });

    if (!cartInfo) {
        cartInfo = await Cart.create({
            user: req.body.id,
            $push: {
                services: id
            }
        });
    } else {
        cartInfo = await Cart.findOneAndUpdate({ user: req.user.id }, {
            $push: {
                services: id
            }
        });
    }

    res.status(200).json({
        success: true,
        cartInfo
    });
});

module.exports = {
    addServiceToCart
}