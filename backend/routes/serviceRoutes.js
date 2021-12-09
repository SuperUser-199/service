const express = require('express');
const { createService ,createCategory, getCategories, getAllServices} = require('../controllers/serviceController');
const isAuthenticatedUser = require('../middlewares/auth');
const router = express.Router();

router.route('/new').post(isAuthenticatedUser, createService);
router.route('/category').post(isAuthenticatedUser, createCategory).get(isAuthenticatedUser, getCategories);
router.route('/:name').get(isAuthenticatedUser, getAllServices);

module.exports = router;