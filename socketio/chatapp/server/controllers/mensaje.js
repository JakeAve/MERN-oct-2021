const { UsuarioModelo } = require("../models/Usuario");
const { MensajeModelo } = require("../models/Mensaje");

const crearNuevoMensaje = async (m) => {
  const usuario = await UsuarioModelo.findOne({ usuario: m.usuario });
  const msj = new MensajeModelo({ ...m, usuario: usuario._id });
  await msj.save();
};

const obtenerMensajes = async () => {
  const mensajesPasados = await MensajeModelo.find({ tipo: { $exists: false } })
    .populate({ path: "usuario", select: "usuario -_id" })
    .select("hora mensaje tipo usuario")
    .lean();
  const mensajes = mensajesPasados.map((m) => ({
    ...m,
    usuario: m.usuario.usuario,
  }));
  return mensajes;
};

module.exports = { crearNuevoMensaje, obtenerMensajes };
