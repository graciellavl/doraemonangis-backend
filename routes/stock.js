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
    .then((stock) => res.json(stock))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/details/:id").get((req, res) => {
  console.log(req);
  Stock.find({ storeId: req.params.id })
    .then((stock) => res.json(stock))
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

router.route("/update/:id").post((req, res) => {
  Stock.findById(req.params.id)
    .then((stock) => {
      stock.storeId = req.body.storeId;
      stock.stock = req.body.stock;
      stock
        .save()
        .then(() => res.json("Stock updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
