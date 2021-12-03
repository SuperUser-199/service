const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const professionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        minlength: [4, 'Name must have more than 4 characters'],
        maxlength: [30, 'Name must not have more than 30 characters']
    },
    about: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please enter your email'],
        validate: [validator.isEmail, 'Please enter a valid email-id']
    },
    password: {
        type: String,
        select: false,
        required: [true, 'Please enter a password'],
        minlength: [8, 'Password must not have less than 8 characters']
    },
    gender: {
        type: String
    },
    phoneno: {
        type: Number,
        validate(value) {
            return validator.isMobilePhone(value.toString());
        }
    },
    specialization: {
        type: String
    },
    experience: {
        type: String
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'user',
                required: true
            },
            name: {
                type: String,
                trim: true,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true,
                trim: true
            }
        }
    ],
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    expirePasswordToken: Date
});

professionSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    } else {
        next();
    }
});

// generate JWT Token
professionSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
}

module.exports = mongoose.model('professional', professionSchema);