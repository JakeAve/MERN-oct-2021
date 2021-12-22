const router = require("express").Router();

router.get("/", (req, res) => res.json({ msj: "API TEST" }));
router.use("/product", require("./product"));

module.exports = router;
