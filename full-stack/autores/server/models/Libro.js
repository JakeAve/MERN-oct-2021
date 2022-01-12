const mongoose = require('mongoose');

const LibroSchema = new mongoose.Schema(
  {
    nombreDeAutor: {
      type: String,
      minlength: [3, 'El nombre necesita más de 3 caracteres'],
    },
    titulo: {
      type: String,
      minlength: [3, 'El nombre necesita más de 3 caracteres'],
    },
  },
  { timestamps: true },
);

const LibroModel = mongoose.model('libro', LibroSchema);

module.exports = { LibroSchema, LibroModel };
