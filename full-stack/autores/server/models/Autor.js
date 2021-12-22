const mongoose = require('mongoose');

const AutorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: [3, 'El nombre necesita más de 3 caracteres'],
    },
  },
  { timestamps: true },
);

const AutorModel = mongoose.model('author', AutorSchema);

module.exports = { AutorSchema, AutorModel };
