const { User } = require("../models/Usuario");

const crearUsuario = async (req, res) => {
  try {
    const { name, age } = req.body;
    const user = new User({ name, age });
    await user.save();
    res.json(user);
  } catch (err) {
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
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ msj: "Internal Server Error" });
  }
};

const usuarioPorId = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);

    if (!user) return res.status(404).json({ msj: "Not Found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ msj: "Internal Server Error" });
  }
};

module.exports = { crearUsuario, leerUsuarios, usuarioPorId };
