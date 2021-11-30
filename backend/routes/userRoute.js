const express = require('express');
const { registerUser, logInUser, logOutUser, forgotPassword, resetPassword, getUserDetails, updatePassword, updateProfile } = require('../controllers/userController');
const { isAuthenticatedUser } = require('../middlewares/auth');
const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(logInUser);
router.route('/logout').get(isAuthenticatedUser, logOutUser);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);
router.route('/password/update').put(isAuthenticatedUser, updatePassword);
router.route('/me').get(isAuthenticatedUser, getUserDetails);
router.route('/me/profile').put(isAuthenticatedUser, updateProfile);

module.exports = router;