const express = require('express');
const { addServiceToCart } = require('../controllers/cartController');
const isAuthenticatedUser = require('../middlewares/auth');
const router = express.Router();

router.route('/addService/:id').put(isAuthenticatedUser, addServiceToCart);

module.exports = router;