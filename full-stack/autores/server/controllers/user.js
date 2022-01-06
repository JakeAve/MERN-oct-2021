const { UserModel, UserSchema } = require('../models/User');
const catchRouteError = require('../utils/catchRouteError');
const bcrypt = require('bcrypt');
const { crearCookie } = require('../jwt/jwt');

const crear = async (req, res) => {
  try {
    const payload = req.body;
    const user = new UserModel(payload);
    await user.save();
    const { email, _id } = user;
    crearCookie(res, { email, _id });
    res.status(201).json({ email, _id });
  } catch (err) {
    catchRouteError(err, res);
  }
};

const autenticar = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    console.log({ user });
    if (!user) return res.status(404).json({ msj: 'No encontrado' });
    const autenticado = await bcrypt.compare(password, user.password);
    if (!autenticado)
      return res.status(400).json({ msj: 'No se puede entrar' });

    const { _id } = user;
    crearCookie(res, { email, _id });
    res.status(200).json({ email, _id });
  } catch (err) {
    catchRouteError(err, res);
  }
};

const amigo = async (req, res) => {
  try {
    const { id_de_user } = req.params;
    const user = await UserModel.findById(id_de_user);
    user.amigos = user.amigos + 1;
    await user.save();
    res.json({ amigos: user.amigos });
  } catch (err) {
    catchRouteError(err, res);
  }
};

module.exports = { crear, autenticar, amigo };
