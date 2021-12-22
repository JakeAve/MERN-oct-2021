const { AutorModel } = require('../models/Autor');
const catchRouteError = require('../utils/catchRouteError');

const crear = async (req, res) => {
  try {
    const payload = req.body;
    const autor = new AutorModel(payload);
    await autor.save();

    res.status(201).json(autor);
  } catch (err) {
    catchRouteError(err, res);
  }
};

const obtenerTodos = async (req, res) => {
  try {
    const autores = await AutorModel.find();
    res.json(autores);
  } catch (err) {
    catchRouteError(err, res);
  }
};

const obtenerPorId = async (req, res) => {
  try {
    const autor = await AutorModel.findById(req.params.id);
    if (!autor)
      return res.status(404).json({ message: 'No se encontró el autor' });
    res.json(autor);
  } catch (err) {
    catchRouteError(err, res);
  }
};

const editarPorId = async (req, res) => {
  try {
    const autor = await AutorModel.findById(req.params.id);
    if (!autor)
      return res.status(404).json({ message: 'No se encontró el autor' });
    const payload = req.body;
    for (let key in payload) autor[key] = payload[key];

    await autor.save();
    res.json(autor);
  } catch (err) {
    catchRouteError(err, res);
  }
};

const eliminarPorId = async (req, res) => {
  try {
    const autor = await AutorModel.findById(req.params.id);
    if (!autor)
      return res.status(404).json({ message: 'No se encontró el autor' });
    await autor.remove();
    res.json(autor);
  } catch (err) {
    catchRouteError(err, res);
  }
};

module.exports = {
  crear,
  obtenerTodos,
  obtenerPorId,
  editarPorId,
  eliminarPorId,
};
