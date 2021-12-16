const mongoose = require('mongoose');

const connectToMongo = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/');
    console.log(`Conectado a base de datos`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectToMongo;
