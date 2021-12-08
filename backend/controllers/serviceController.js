const Service = require('../models/serviceModel');
const AsyncErrorHandler = require('../middlewares/asyncErrorHandler');
const cloudinary = require('cloudinary');

// create a new service
const createService = AsyncErrorHandler(async (req, res, next) => {
    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: 'services',
        width: 150,
        crop: 'scale'
    });

    const { name, category, description, price } = req.body;
    const service = await Service.create({
        name, category, price, description,
        serviceImage: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url
        }
    });

    res.status(201).json({
        success: true,
        service
    });
})

module.exports = {
    createService
}