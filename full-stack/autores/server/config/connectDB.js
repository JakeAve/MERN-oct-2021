const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect(process.env.DB_CONNECT);
  console.log('Se conectó a base de datos');
};

module.exports = connectDB;
