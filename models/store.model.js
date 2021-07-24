const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storeSchema = new Schema({
  storename: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  street: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  kecamatan: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  provinsi: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  storeimage: {
    type: String,
    required: true,
  },
});

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
