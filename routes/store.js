const router = require("express").Router();
let Store = require("../models/store.model");

const upload = require("../middleware/upload");

router.route("/").get((req, res) => {
  Store.find()
    .then((store) => res.json(store))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post(upload.single("storeimage"), (req, res) => {
  const newStore = new Store({
    storename: req.body.storename,
    street: req.body.street,
    kecamatan: req.body.kecamatan,
    provinsi: req.body.provinsi,
  });

  if (req.file) {
    newStore.storeimage = req.file.path;
  }

  newStore
    .save()
    .then(() => res.json("Success add a new store"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
