import { sendTokenForProfessional } from '../utils/jwtToken';

const Professional = require('../models/professionalModel');
const AsyncErrorHandler = require('../middlewares/asyncErrorHandler');
const cloudinary = require('cloudinary');

export const registerProfessional = AsyncErrorHandler(async (req, res, next) => {
    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: 'avatars',
        width: 150,
        crop: 'scale'
    });

    const { name, email, password } = req.body;
    const professional = await Professional.create({
        name, email, password,
        avatar: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url
        }
    });

    sendTokenForProfessional(professional, 201, res);
})