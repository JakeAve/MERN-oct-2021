const router = require("express").Router();
const controller = require("../controllers/product");

router.get("/", controller.todoProducto);
router.post("/", controller.crearNuevoProducto);
router.get("/:_id", controller.productoPorId);
router.patch("/edit/:_id", controller.editarProducto);
router.delete("/eliminar/:_id", controller.eliminarProducto);

module.exports = router;
