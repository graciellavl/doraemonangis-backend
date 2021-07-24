const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodb");
});

const storeRouter = require("./routes/store");
const varianRouter = require("./routes/varian");
const stockRouter = require("./routes/stock");

app.use("/store", storeRouter);
app.use("/varian", varianRouter);
app.use("/stock", stockRouter);
app.use("/uploads", express.static('uploads'))

app.listen(port, () => {
  console.log(`port ${port}`);
});
