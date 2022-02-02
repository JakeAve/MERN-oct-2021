const { UsuarioModelo } = require("../models/Usuario");
const bcrypt = require("bcrypt");
const { crearJWT, jwtCookieKey } = require("../jwt");

const crearUsuario = async (req, res) => {
  try {
    const user = new UsuarioModelo(req.body);
    await user.save();
    crearJWT(res, user);
    res.json({ usuario: user.usuario });
  } catch (err) {
    console.log(err);
    if (err.errors) {
      const messages = Object.entries(err.errors).map(([campo, obj]) => [
        campo,
        obj.message,
      ]);
      return res.status(400).json({ msj: "Bad Request", errors: messages });
    }
    res.status(500).json({ msj: "Internal Server Error" });
  }
};

const leerUsuarios = async (req, res) => {
  try {
    const users = await UsuarioModelo.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ msj: "Internal Server Error" });
  }
};

const usuarioPorId = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UsuarioModelo.findById(id);

    if (!user) return res.status(404).json({ msj: "Not Found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ msj: "Internal Server Error" });
  }
};

const loginUsuario = async (req, res) => {
  try {
    const { correo, password } = req.body;
    const user = await UsuarioModelo.findOne({ correo });
    if (!user) return res.status(400).json({ msj: "No se pudo entrar" });

    const authenticated = bcrypt.compareSync(password, user.password);
    if (!authenticated)
      return res.status(400).json({ msj: "No se pudo entrar" });

    crearJWT(res, user);
    res.json({ usuario: user.usuario });
  } catch (err) {
    res.status(500).json({ msj: "Internal Server Error" });
  }
};

const logoutUsuario = async (req, res) => {
  try {
    res.clearCookie(jwtCookieKey);
    res.json({ msj: "Ok" });
  } catch (err) {
    res.status(500).json({ msj: "Internal Server Error" });
  }
};

const getUsuario = async (req, res) => {
  try {
    const user = await UsuarioModelo.findOne({ usuario: req.usuario }).select(
      "usuario correo"
    );
    if (!user) return res.status(401).json({ msj: "No se pudo entrar" });
    crearJWT(res, user);
    res.json({ usuario: user.usuario });
  } catch (err) {
    res.status(500).json({ msj: "Internal Server Error" });
  }
};

module.exports = {
  crearUsuario,
  leerUsuarios,
  usuarioPorId,
  loginUsuario,
  getUsuario,
  logoutUsuario,
};
