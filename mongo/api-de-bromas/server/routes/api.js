const router = require("express").Router();

router.use("/jokes", require("./jokes"));

module.exports = router;
