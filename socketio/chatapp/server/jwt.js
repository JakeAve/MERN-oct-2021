const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const jwtCookieKey = "user_token";

const crearJWT = (res, user) => {
  const payload = { usuario: user.usuario };
  const token = jwt.sign(payload, JWT_SECRET);
  res.cookie(jwtCookieKey, token, { httpOnly: true });
};

const autorizarJWT = async (req, res, next) => {
  try {
    const { usuario } = await jwt.verify(req.cookies[jwtCookieKey], JWT_SECRET);
    req.usuario = usuario;
    next();
  } catch (err) {
    res.status(400).json({ msj: "No se puede hacer esta funcción" });
  }
};

module.exports = { crearJWT, autorizarJWT };
