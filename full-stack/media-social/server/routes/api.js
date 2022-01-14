const router = require("express").Router();

router.use("/usuario", require("./usuario"));
router.use("/post", require("./post"));

module.exports = router;
