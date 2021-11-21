const express = require('express');
const { registerUser, logInUser, logOutUser, forgotPassword } = require('../controllers/userController');
const { isAuthenticatedUser } = require('../middlewares/auth');
const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(logInUser);
router.route('/logout').get(isAuthenticatedUser, logOutUser);
router.route('/forgotpassword').post(forgotPassword);

module.exports = router;