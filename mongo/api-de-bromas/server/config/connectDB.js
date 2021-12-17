const mongoose = require("mongoose");

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log(`Conectado a base de datos`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectToMongo;
