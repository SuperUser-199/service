const express = require('express');
const { addServiceToCart, getServices } = require('../controllers/cartController');
const isAuthenticatedUser = require('../middlewares/auth');
const router = express.Router();

router.route('/addService/:id').put(isAuthenticatedUser, addServiceToCart);
router.route('/getServicesInCart').get(isAuthenticatedUser, getServices);

module.exports = router;