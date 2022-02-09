const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const jwtCookieKey = "user_token";

const crearJWT = (res, user) => {
  const payload = { usuario: user.usuario, correo: user.correo };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: 3600 });
  res.cookie(jwtCookieKey, token, { httpOnly: true });
};

const autorizarJWT = async (req, res, next) => {
  try {
    const user = await jwt.verify(req.cookies[jwtCookieKey], JWT_SECRET);
    req.usuario = user;
    next();
  } catch (err) {
    res.status(400).json({ msj: "No se puede hacer esta funcción" });
  }
};

module.exports = { crearJWT, autorizarJWT, jwtCookieKey };
