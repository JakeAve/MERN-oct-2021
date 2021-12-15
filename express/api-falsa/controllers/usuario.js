const Usuario = require("../models/Usuario");

const usuarios = [new Usuario(), new Usuario(), new Usuario()];

const crearNuevoUsuarioRandom = (req, res) => {
  const newUsuario = new Usuario();
  usuarios.push(newUsuario);
  res.status(201).json(newUsuario);
};

const getUsers = (req, res) => {
  res.json(usuarios);
};

const crearNuevoUsuario = (req, res) => {
  const usuario = req.body;
  usuarios.push(usuario);
  const { contraseña, ...resto } = usuario;
  res.status(201).json(resto);
};

const getUsuarioPorId = (req, res) => {
  const id = req.params.id;
  const usuario = usuarios.find(({ _carne }) => id === _carne);
  if (!usuario) return res.status(404).json({ msj: "No encontrado" });
  res.json(usuario);
};

module.exports = {
  crearNuevoUsuarioRandom,
  crearNuevoUsuario,
  getUsers,
  getUsuarioPorId,
};
