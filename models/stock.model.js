const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stockSchema = new Schema({
  storeId: {
    type: String,
    unique: true,
    required: true,
  },
  stock: [
    {
      varianId: {
        type: String,
        required: true,
      },
      count: { type: Number, default: 0 },
    },
  ],
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
