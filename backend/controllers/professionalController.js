const User = require("../models/userModel");
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

// setup profile user
const setupProfProfile = AsyncErrorHandler(async (req, res, next) => {
  const { gender, city, district, state, country, pincode, phoneno } = req.body;
  await User.findByIdAndUpdate(
    req.user.id,
    { gender, phoneno },
    {
      new: true,
      runValidators: true,
      findAndModify: false,
    }
  );

  let user = await Address.findOne({ user: req.user.id });

  if (!user) {
    await Address.create({
      city,
      district,
      state,
      country,
      pincode,
      user: req.user.id,
    });
  } else {
    await Address.findOneAndUpdate(
      { user: req.user.id },
      {
        city,
        district,
        state,
        country,
        pincode,
      },
      {
        new: true,
        runValidators: true,
        findAndModify: false,
      }
    );
  }

  user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});

module.exports = {
  registerProfessional,
  setupProfProfile
};
