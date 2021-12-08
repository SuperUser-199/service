const express = require('express');
const { createService ,createCategory} = require('../controllers/serviceController');
const isAuthenticatedUser = require('../middlewares/auth');
const router = express.Router();

router.route('/new').post(isAuthenticatedUser, createService);
router.route('/category').post(isAuthenticatedUser, createCategory);

module.exports = router;