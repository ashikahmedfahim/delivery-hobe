const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  sellingPrice: {
    type: Number,
    required: true,
  },
  Inventory: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
