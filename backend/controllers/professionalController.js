const Professional = require('../models/professionalModel');
const AsyncErrorHandler = require('../middlewares/asyncErrorHandler');
const { sendTokenForProfessional } = require('../utils/jwtToken');
const cloudinary = require('cloudinary');

const registerProfessional = AsyncErrorHandler(async (req, res, next) => {
    // const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
    //     folder: 'avatars',
    //     width: 150,
    //     crop: 'scale'
    // });

    const { name, email, password, about } = req.body;
    const professional = await Professional.create({
        name, email, password, about,
        avatar: {
            // public_id: myCloud.public_id,
            // url: myCloud.secure_url
            public_id: 'Some id',
            url: 'Some url'
        }
    });

    sendTokenForProfessional(professional, 201, res);
})

module.exports = {
    registerProfessional
}