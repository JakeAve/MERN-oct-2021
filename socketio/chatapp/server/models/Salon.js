const mongoose = require("mongoose");

const SalonSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es requerido"],
      minlength: [3, "El nombre necesita más de 3 caracteres"],
    },
    descripcion: {
      type: String,
      required: false,
    },
    participantes: [{ type: mongoose.Schema.Types.ObjectId, ref: "usuario" }],
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: "usuario" }],
    mensajes: [{ type: mongoose.Schema.Types.ObjectId, ref: "mensaje" }],
  },
  { timestamps: true }
);

const SalonModelo = mongoose.model("mensaje", SalonSchema);

module.exports = { SalonSchema, SalonModelo };
