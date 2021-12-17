const { Joke } = require("../models/Joke");

const getAll = async (req, res) => {
  try {
    const jokes = await Joke.find().exec();
    res.json(jokes);
  } catch (err) {
    res.status(500).json({ msj: "Internal Server Error" });
  }
};

const crearUno = async (req, res) => {
  try {
    const { setup, punchline } = req.body;
    const joke = await Joke.create({ setup, punchline });
    res.status(201).json(joke);
  } catch (err) {
    res.status(500).json({ msj: "Internal Server Error" });
  }
};

const editarPorId = async (req, res) => {
  try {
    const id = req.params.jokeID;
    const { setup, punchline } = req.body;
    // const joke = await Joke.findByIdAndUpdate(id, { setup, punchline });
    const joke = await Joke.findById(id);
    joke.setup = setup;
    joke.punchline = punchline;
    await joke.save();
    res.json(joke);
  } catch (err) {
    res.status(500).json({ msj: "Internal Server Error" });
  }
};

const borrarPorId = async (req, res) => {
  try {
    const id = req.params.jokeID;
    const joke = await Joke.deleteOne({ id });
    res.json(joke);
  } catch (err) {
    res.status(500).json({ msj: "Internal Server Error" });
  }
};

const random = async (req, res) => {
  try {
    const jokes = await Joke.find();
    const randomNum = Math.floor(Math.random() * jokes.length);
    const joke = jokes[randomNum];
    res.json(joke);
  } catch (err) {
    res.status(500).json({ msj: "Internal Server Error" });
  }
};

module.exports = { getAll, crearUno, editarPorId, borrarPorId, random };
