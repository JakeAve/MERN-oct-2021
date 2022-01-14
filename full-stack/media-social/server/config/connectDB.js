const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log("Se conectó a base de datos");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
