const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stockSchema = new Schema({
  storeId: {
    type: Schema.Types.ObjectId,
    ref: "Store",
    unique: true,
    required: true,
  },
  stock: [
    {
      varianId: {
        type: Schema.Types.ObjectId,
        ref: "Varian",
        required: true,
      },
      count: { type: Number, default: 0 },
    },
  ],
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
