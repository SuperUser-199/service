const express = require('express');
const { registerProfessional, setupProfProfile } = require('../controllers/professionalController');
const router = express.Router();

router.route('/register').post(registerProfessional);
router.route('/setup').put(setupProfProfile);

module.exports = router;