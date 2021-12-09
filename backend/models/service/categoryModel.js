const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter category schema"],
  },
  imageUrl: {
    type: String,
  },
});

const Category = mongoose.model('category', categorySchema);

module.exports = {
    Category,
    categorySchema
}