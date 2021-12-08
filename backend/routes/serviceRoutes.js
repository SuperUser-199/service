const express = require('express');
const { createService } = require('../controllers/serviceController');
const isAuthenticatedUser = require('../middlewares/auth');
const router = express.Router();

router.route('/new').post(isAuthenticatedUser, createService);

module.exports = router;