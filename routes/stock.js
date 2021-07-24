const router = require("express").Router();
let Stock = require("../models/stock.model");

router.route("/").get((req, res) => {
  Stock.find()
    .populate()
    .then((stock) => res.json(stock))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Stock.findById(req.params.id)
    .populate()
    .then((varian) => res.json(varian))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const newStock = new Stock({
    storeId: req.body.storeId,
    stock: req.body.stock,
  });

  newStock
    .save()
    .then(() => res.json("Success add a new stock"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
