const User = require('../models/userModel');

// register a new user
const registerUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json({
            success: true,
            user
        });

    } catch (err) {
        console.log(err);
    }
}

// login user
const logInUser = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Please enter both email & password'
        });
    }

    const user = await User.findOne({email}).select('+password');

    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'Invalid email or password'
        })
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return res.status(404).json({
            success: false,
            message: 'Invalid email or password'
        })
    }

    const token = user.getJWTToken();
    
    res.status(200).json({
        success: true,
        token
    });
}

module.exports = {
    registerUser,
    logInUser
}