const router = require("express").Router();

router.get("/", (req, res) => res.send("Usuarios"));

module.exports = router;
