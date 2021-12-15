const router = require('express').Router();
const isAuthenticatedUser = require('../middlewares/auth');
const isAuthorizedRole = require('../middlewares/authPro');
const { placeNewOrder, updateOrderStatus } = require('../controllers/orderController');


router.route('/new').post(isAuthenticatedUser, placeNewOrder);
router.route('/status/:id').put(isAuthenticatedUser, isAuthorizedRole("professional", "admin"), updateOrderStatus);

module.exports = router;