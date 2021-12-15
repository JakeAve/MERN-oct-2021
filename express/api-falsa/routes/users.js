const router = require("express").Router();
const {
  crearNuevoUsuarioRandom,
  crearNuevoUsuario,
  getUsers,
  getUsuarioPorId,
} = require("../controllers/usuario");

router.get("/", getUsers);
router.post("/", crearNuevoUsuarioRandom);
router.post("/new", crearNuevoUsuario);
router.get("/:id", getUsuarioPorId);

module.exports = router;
