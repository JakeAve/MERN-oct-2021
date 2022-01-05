const { autorizar } = require('../jwt/jwt');
const router = require('express').Router();

router.use('/autor', require('./autor'));
router.use('/user', require('./user'));
router.get('/protegido', autorizar, (req, res) => res.json({ msj: 'bien' }));

module.exports = router;
