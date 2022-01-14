const router = require("express").Router();
const controller = require("../controllers/post");

router.post("/:user_id", controller.crearPost);
router.get("/promedio/:user_id", controller.promedioDeLikes);

module.exports = router;
