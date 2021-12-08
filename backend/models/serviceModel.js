const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter category schema']
  },
  imageUrl: {
    type: String,
  }
})

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the service name"],
  },
  category: categorySchema,
  description: {
    type: String,
    required: [true, "Please enter the service description"],
  },
  price: {
    type: Number,
    min: 0,
    required: [true, "Please enter the service price"],
  },
  serviceImage: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});

module.exports = new mongoose.model("service", serviceSchema);
