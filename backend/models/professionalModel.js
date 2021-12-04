const mongoose = require("mongoose");

const professionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    reg: "user",
  },
  about: {
    type: String,
    required: [true, 'Please enter your bio']
  },
  specialization: {
    type: String,
    required: [true, 'Please enter your specialization']
  },
  experience: {
    type: String,
    required: [true, 'Please enter your experience']
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true,
      },
      name: {
        type: String,
        trim: true,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
        trim: true,
      },
    },
  ],
});

module.exports = mongoose.model("professional", professionSchema);