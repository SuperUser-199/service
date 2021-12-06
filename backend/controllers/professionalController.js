const User = require("../models/userModel");
const Professional = require('../models/professionalModel');
const Address = require('../models/addressModel');
const AsyncErrorHandler = require("../middlewares/asyncErrorHandler");
const { sendToken } = require("../utils/jwtToken");
const cloudinary = require("cloudinary");

const registerProfessional = AsyncErrorHandler(async (req, res, next) => {
  const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
    folder: "avatars",
    width: 150,
    crop: "scale",
  });

  const { name, email, password, about } = req.body;
  const professional = await User.create({
    name,
    email,
    password,
    about,
    avatar: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
    role: "professional",
  });

  sendToken(professional, 201, res);
});

const getAllProfessionals = AsyncErrorHandler(async (req, res, next) => {
  const cursor = Professional.find().cursor();
  const professionals = [];
  for (let doc = await cursor.next() ; doc != null ; doc = await cursor.next()) {
    const user = await User.findById(doc.user);
    const address = await Address.findOne({ user : user.id });
    professionals.push({
      user,
      address,
      professional : doc
    });
  }
  res.status(200).json({
    success: true,
    professionals
  })
}) 

module.exports = {
  registerProfessional,
  getAllProfessionals
};
