const mongoose = require("mongoose");

const connectToDB = async () => {
  await mongoose.connect(process.env.DB_URL);
  console.log("El base de datos está conectado");
};

module.exports = connectToDB;
