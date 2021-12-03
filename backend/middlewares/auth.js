const jwt = require('jsonwebtoken');
const AsyncErrorHandler = require('./asyncErrorHandler');
const ErrorHandler = require('../utils/errorHandler');
const User = require('../models/userModel');
const Professional = require('../models/professionalModel');

const isAuthenticatedUser = AsyncErrorHandler(async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return next(new ErrorHandler('Please login to access this resource', 401));
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decodedData.id);

    next();
})

const isAuthenticatedProfessional = AsyncErrorHandler(async (req, res, next) => {
    const { professionalToken } = req.cookies;
    if (!professionalToken) {
        return next(new ErrorHandler('Please login to access this resource', 401));
    }

    const decodedData = jwt.verify(professionalToken, process.env.JWT_SECRET);

    req.professional = await Professional.findById(decodedData.id);

    next();
})

module.exports = {
    isAuthenticatedUser,
    isAuthenticatedProfessional
}