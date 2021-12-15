const router = require("express").Router();

router.get("/", (req, res) => res.send("test de api"));
router.use("/users", require("./users"));

module.exports = router;
