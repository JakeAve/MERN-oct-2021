const mongoose = require("mongoose");

const MensajeSchema = new mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "usuario",
      required: true,
    },
    hora: { type: Date, required: true },
    mensaje: {
      type: String,
      maxlength: [5000, "El mensaje no puede tener más de 5000 caracteres"],
    },
    tipo: {
      type: String,
      enum: ["nuevo_usuario", "disconnect_usuario"],
    },
  },
  { timestamps: true }
);

const MensajeModelo = mongoose.model("mensaje", MensajeSchema);

module.exports = { MensajeSchema, MensajeModelo };
