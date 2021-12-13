const router = require('express').Router();
const isAuthenticatedUser = require('../middlewares/auth');
const { placeNewOrder } = require('../controllers/orderController');


router.route('/new').post(isAuthenticatedUser, placeNewOrder);

module.exports = router;