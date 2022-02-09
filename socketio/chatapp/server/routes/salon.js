const router = require("express").Router();
const controller = require("../controllers/salon");
const { autorizarJWT } = require("../jwt");

router.post("/", autorizarJWT, controller.crearSalon);
router.patch("/", autorizarJWT, controller.editarSalon);
router.get("/:id", autorizarJWT, controller.getSalon);

module.exports = router;
