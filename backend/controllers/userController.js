const User = require('../models/userModel');
const AsyncErrorHandler = require('../middlewares/asyncErrorHandler');
const ErrorHandler = require('../utils/errorHandler');

// register a new user
const registerUser = AsyncErrorHandler(async (req, res, next) => {
        const user = await User.create(req.body);

        res.status(201).json({
            success: true,
            user
        });
})

// login user
const logInUser = AsyncErrorHandler(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler('Please enter email and password both', 400));
    }

    const user = await User.findOne({email}).select('+password');

    if (!user) {
        return next(new ErrorHandler('Invalid email or password', 400));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler('Invalid email or password', 403));
    }

    const token = user.getJWTToken();
    
    res.status(200).json({
        success: true,
        token
    });
})

module.exports = {
    registerUser,
    logInUser
}