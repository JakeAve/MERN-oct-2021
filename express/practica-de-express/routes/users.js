const router = require("express").Router();
const usersService = require("../controllers/users");

router.get("/", usersService.getAll);
router.post("/", usersService.createNew);
router.get("/:id", usersService.getById);
router.put("/:id", usersService.updateById);
router.delete("/:id", usersService.deleteById);

module.exports = router;
