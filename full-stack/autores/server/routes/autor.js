const router = require('express').Router();
const controller = require('../controllers/autor');

router.get('/', controller.obtenerTodos);
router.post('/', controller.crear);
router.get('/:id', controller.obtenerPorId);
router.get('/detalles/:id', controller.detallesDeAutor);
router.patch('/:id', controller.editarPorId);
router.delete('/:id', controller.eliminarPorId);
router.post('/gana/:id/:idx', controller.ganaAutor);

module.exports = router;
