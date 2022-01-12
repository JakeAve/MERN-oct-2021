const mongoose = require('mongoose');

const PremioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es requerido para un premio'],
  },
  fecha: {
    type: Date,
    default: mongoose.now,
  },
  vecesGanado: {
    type: Number,
    default: 0,
  },
});

module.exports = { PremioSchema };
