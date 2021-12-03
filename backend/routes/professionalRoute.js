const express = require('express');
const { registerProfessional } = require('../controllers/professionalController');
const router = express.Router();

router.route('/register').post(registerProfessional);