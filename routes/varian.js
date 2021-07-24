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
    isvarianactive: req.body.isvarianactive,
  });

  if (req.file) {
    newVarian.varianimage = req.file.path;
  }

  newVarian
    .save()
    .then(() => res.json("Success add a new varian"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Varian.findById(req.params.id)
    .then((varian) => res.json(varian))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Varian.findByIdAndDelete(req.params.id)
    .then(() => res.json("Varian deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post(upload.single("varianimage"), (req, res) => {
  Varian.findById(req.params.id)
    .then((varian) => {
      varian.varianname = req.body.varianname;
      varian.variandescription = req.body.variandescription;
      varian.isvarianactive = req.body.isvarianactive;

      if (req.file) {
        varian.varianimage = req.file.path;
      }
      varian
        .save()
        .then(() => res.json("Varian updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
