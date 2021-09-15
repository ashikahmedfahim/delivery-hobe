const mongoose = require("mongoose");

const warehouseSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  address: {
    type: String,
    unique: true,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  areaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Area",
    required: true,
  },
  avaiableProducts: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      sourcingPrice: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = new mongoose.model("Warehouse", warehouseSchema);
