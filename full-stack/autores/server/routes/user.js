const router = require('express').Router();
const controller = require('../controllers/user');

router.post('/signup', controller.crear);
router.post('/login', controller.autenticar);
router.post('/amigo/:id_de_user', controller.amigo);

module.exports = router;
