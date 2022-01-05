const jwt = require('jsonwebtoken');
const JWT_SECRETO = process.env.JWT_SECRETO;
const jwtKey = 'usertoken';

const crearJWT = (payload) => {
  const token = jwt.sign(payload, JWT_SECRETO, { expiresIn: 15000 });
  return token;
};

const crearCookie = (res, payload) => {
  const token = crearJWT(payload);
  res.cookie(jwtKey, token, { httpOnly: true });
};

const autorizar = async (req, res, next) => {
  try {
    await jwt.verify(req.cookies[jwtKey], JWT_SECRETO);

    next();
  } catch (err) {
    res.status(400).json({ msj: 'No se puede hacer esta funcción' });
  }
};

module.exports = { crearCookie, autorizar };
