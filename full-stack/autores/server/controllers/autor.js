const { AutorModel } = require('../models/Autor');
const { LibroModel } = require('../models/Libro');
const catchRouteError = require('../utils/catchRouteError');

const crear = async (req, res) => {
  try {
    const payload = req.body;
    const _libros = payload.libros.filter(Boolean).map((titulo) => ({
      titulo,
      nombreDeAutor: payload.autor,
    }));
    const libros = await LibroModel.insertMany(_libros);
    const premios = payload.premios
      .filter(Boolean)
      .map((nombreDePremio) => ({ nombre: nombreDePremio, fecha: new Date() }));
    const autor = new AutorModel({ ...payload, libros, premios });
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

const detallesDeAutor = async (req, res) => {
  try {
    const autor = await AutorModel.findById(req.params.id).populate('libros');
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

const ganaAutor = async (req, res) => {
  try {
    const { id, idx } = req.params;
    const autor = await AutorModel.findById(id);
    if (!autor)
      return res.status(404).json({ message: 'No se encontró el autor' });

    const vecesGanado = autor.premios[idx]?.vecesGanado;
    if (vecesGanado === undefined) throw Error('No existe ese premio');

    autor.premios[idx].vecesGanado = vecesGanado + 1;
    await autor.save();
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
  ganaAutor,
  detallesDeAutor,
};
