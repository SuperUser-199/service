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

module.exports = {
    registerUser
}