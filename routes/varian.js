const router = require("express").Router();
let Varian = require("../models/varian.model");

const upload = require("../middleware/upload");

router.route("/").get((req, res) => {
  Varian.find()
    .then((varian) => res.json(varian))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post(upload.single("varianimage"), (req, res) => {
  const newVarian = new Varian({
    varianname: req.body.varianname,
    variandescription: req.body.variandescription,
  });

  if (req.file) {
    newVarian.varianimage = req.file.path;
  }

  newVarian
    .save()
    .then(() => res.json("Success add a new varian"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
