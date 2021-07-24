const router = require("express").Router();
let Stock = require("../models/stock.model");

router.route("/").get((req, res) => {
  Stock.find()
    .then((stock) => res.json(stock))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const newStock = new Stock({
    stockname: req.body.username,
    varianname: req.body.varianname,
    count: Number(req.body.count),
  });

  newStock
    .save()
    .then(() => res.json("Success add a new stock"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
