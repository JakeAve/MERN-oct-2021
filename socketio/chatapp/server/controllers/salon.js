const { SalonModelo } = require("../models/salon");
const { UsuarioModelo } = require("../models/Usuario");

const crearSalon = async (req, res) => {
  try {
    const salon = new SalonModelo(req.body);
    console.log(req.usuario);
    const usuario = UsuarioModelo.findOne({ email: req.usuario.email });
    salon.participantes.push(req.usuario._id);
    salon.admins.push(req.usuario._id);
    await salon.save();
    res.json({ nombre: salon.nombre, _id: salon._id });
  } catch (e) {
    console.error(e);
    res.status(500).json({ msj: "Internal Server Error" });
  }
};

const editarSalon = async (req, res) => {
  try {
  } catch (e) {}
};

const getSalon = async (req, res) => {
  try {
    const id = req.params.id;
    const salon = await SalonModelo.findById(id);
    res.json(salon);
  } catch (e) {
    console.error(e);
    res.status(500).json({ msj: "Internal Server Error" });
  }
};

module.exports = { crearSalon, editarSalon, getSalon };
