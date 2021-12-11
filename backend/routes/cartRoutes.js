const express = require('express');
const { addServiceToCart, getServices, deleteServiceFromCart } = require('../controllers/cartController');
const isAuthenticatedUser = require('../middlewares/auth');
const router = express.Router();

router.route('/addService/:id').put(isAuthenticatedUser, addServiceToCart).delete(isAuthenticatedUser, deleteServiceFromCart);
router.route('/getServicesInCart').get(isAuthenticatedUser, getServices);

module.exports = router;