const router = require("express").Router();
const controller = require("../controllers/usuario");
const { autorizarJWT } = require("../jwt");

router.post("/", controller.crearUsuario);
router.post("/login", controller.loginUsuario);
router.get("/", autorizarJWT, controller.getUsuario);

module.exports = router;
