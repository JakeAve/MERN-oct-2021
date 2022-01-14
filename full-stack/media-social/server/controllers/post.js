const { User } = require("../models/Usuario");

const crearPost = async (req, res) => {
  try {
    const id = req.params.user_id;
    const content = req.body.content;

    const usuario = await User.findById(id);
    if (!usuario) throw new Error(`Usuario ${id} no existe`);

    const post = { content };
    usuario.posts.push(post);
    await usuario.save();

    const ultimoPost = usuario.posts[usuario.posts.length - 1];
    res.status(201).json(ultimoPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msj: "Something went wrong" });
  }
};

const promedioDeLikes = async (req, res) => {
  try {
    const id = req.params.user_id;

    const usuario = await User.findById(id);
    if (!usuario) throw new Error(`Usuario ${id} no existe`);

    const sumo = usuario.posts.reduce((acc, val) => acc + val.likes, 0);
    const promedio = sumo / usuario.posts.length;

    res.json({ promedio });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msj: "Something went wrong" });
  }
};

module.exports = {
  crearPost,
  promedioDeLikes,
};
