const router = require("express").Router();
let Varian = require("../models/varian.model");

const multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

router.route("/").get((req, res) => {
  Varian.find()
    .then((varian) => res.json(varian))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post(upload.single("image"), (req, res) => {
  const newVarian = new Varian({
    varianname: req.body.varianname,
    variandescription: req.body.variandescription,
    varianimage: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  });

  newVarian
    .save()
    .then(() => res.json("Success add a new varian"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
