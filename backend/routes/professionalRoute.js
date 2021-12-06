const express = require('express');
const { registerProfessional, getAllProfessionals } = require('../controllers/professionalController');
const router = express.Router();

router.route('/register').post(registerProfessional);
router.route('/getAll').get(getAllProfessionals);

module.exports = router;