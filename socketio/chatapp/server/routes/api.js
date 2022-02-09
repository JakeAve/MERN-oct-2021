const router = require("express").Router();

router.use("/usuario", require("./usuario"));
router.use("/salon", require("./salon"));

module.exports = router;
