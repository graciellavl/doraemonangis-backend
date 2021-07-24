const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stockSchema = new Schema(
  {
    storename: {
      type: String,
      required: true,
    },
    varianname: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
