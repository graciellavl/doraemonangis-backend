const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const varianSchema = new Schema({
  varianname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  variandescription: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  varianimage: {
    type: String,
    required: true,
  },
  isvarianactive: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const Varian = mongoose.model("Varian", varianSchema);

module.exports = Varian;
