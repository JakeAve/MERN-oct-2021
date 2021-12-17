const router = require("express").Router();
const controller = require("../controllers/usuario");

router.get("/", controller.leerUsuarios);
router.post("/", controller.crearUsuario);
router.get("/:id", controller.usuarioPorId);

module.exports = router;
