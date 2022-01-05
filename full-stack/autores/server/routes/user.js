const router = require('express').Router();
const controller = require('../controllers/user');

router.post('/signup', controller.crear);
router.post('/login', controller.autenticar);

module.exports = router;
