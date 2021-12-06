const User = require('../models/userModel');
const AsyncErrorHandler = require('../middlewares/asyncErrorHandler');
const ErrorHandler = require('../utils/errorHandler');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
const cloudinary = require('cloudinary');

// register a new user
const registerUser = AsyncErrorHandler(async (req, res, next) => {

        const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: 'avatars',
            width: 150,
            crop: 'scale'
        });

        const {name, email, password, role} = req.body;
        const user = await User.create({
            name, email, password, role,
            avatar: {
                public_id: myCloud.public_id,
                url: myCloud.secure_url
            }
        });

       sendToken(user, 201, res);
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

    sendToken(user, 200, res);
})

// logout user
const logOutUser = AsyncErrorHandler(async (req, res, next) => {
    res.cookie('token', null, {
        httpOnly: true,
        expires: new Date(Date.now())
    });

    res.status(200).json({
        success: true,
        message: 'Logged out successfully'
    });
})

// forgot password
const forgotPassword = AsyncErrorHandler(async (req, res, next) => {
    const user = await User.findOne({email: req.body.email});

    if (!user) {
        return next(new ErrorHandler('User doesn\'t exist', 404));
    }

    // generating reset password token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;

    const message = `Your password reset token is:\n\n${resetPasswordUrl}.\n\nIf you have not requested for this email, please ignore this.`;

    try {
        await sendEmail({
            email: user.email,
            subject: 'ServiceFare password recovery',
            message
        });

        res.status(200).json({
            success: true,
            message: `E-mail sent to ${user.email} successfully`
        });
    } catch (err) {
        user.resetPasswordToken = undefined;
        user.expirePasswordToken = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new ErrorHandler(err.message, 500));
    }
})

// reset password
const resetPassword = AsyncErrorHandler(async (req, res, next) => {
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        expirePasswordToken: { $gt: Date.now() }
    });

    if (!user) {
        return next(new ErrorHandler('Invalid/Expired reset password token', 400));
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler('Password doesn\'t match', 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.expirePasswordToken = undefined;

    await user.save();

    sendToken(user, 200, res);
});

// get my details
const getUserDetails = AsyncErrorHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id);
    res.status(200).json({
        success: true,
        user
    });
})

// change/update user password
const updatePassword = AsyncErrorHandler(async (req, res, next) => {
    const { oldPassword, newPassword, confirmPassword } = req.body;

    const user = await User.findById(req.user._id).select('+password');
    
    const isOldPasswordMatched = await user.comparePassword(oldPassword);

    if (!isOldPasswordMatched) {
        return next(new ErrorHandler('Old password is incorrect', 400));
    }

    if (newPassword !== confirmPassword) {
        return next(new ErrorHandler('Password didn\'t match', 400));
    }

    user.password = newPassword;

    await user.save();

    sendToken(user, 200, res);
})

// update profile user
const updateProfile = AsyncErrorHandler(async (req, res, next) => {
    const updatedUserData = {
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        phoneno: req.body.phoneno
    };
    
    const addressData = {
        city: req.body.city,
        district: req.body.district,
        pincode: req.body.pincode,
        state: req.body.state,
        country: req.body.country
    };

    
    if (req.user.role === 'professional') {
        let professionalData = {};
        const { exp: experience, spec: specialization, bio: about } = req.body;
        professionalData.experience = exp;
        professionalData.specialization = spec;
        professionalData.about = bio;
    }

    if (typeof req.body.avatar !== 'string') {
        const imageId = req.user.avatar.public_id;

        await cloudinary.v2.uploader.destroy(imageId);

        const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: 'avatars',
            width: 150,
            crop: 'scale'
        });

        updatedUserData.avatar = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url
        };
        updatedUserData.professional = professionalData;
    }

    updatedUserData.address = addressData;

    await User.findByIdAndUpdate(req.user.id, updatedUserData, {
        new: true,
        runValidators: true,
        findAndModify: false
    });

    res.status(200).json({
        success: true
    });
})

// setup profile user
const setupProfile = AsyncErrorHandler(async (req, res, next) => {
    const { gender, city, district, state, country, pincode, phoneno } = req.body;

    const data = {
        gender,
        phoneno,
        address: {
            city,
            district,
            state,
            country,
            pincode
        }
    }
    
    if (req.user.role === 'professional') {
        const { exp: experience, spec: specialization, bio: about } = req.body;
        
        data.professional = {
            experience,
            specialization,
            about
        };
    }

    const user = await User.findByIdAndUpdate(req.user.id, data, {
        new: true,
        runValidators: true,
        findAndModify: false
    });

    res.status(200).json({
        success: true,
        user
    });
})

module.exports = {
    registerUser,
    logInUser,
    logOutUser,
    forgotPassword,
    resetPassword,
    getUserDetails,
    updatePassword,
    updateProfile,
    setupProfile
}