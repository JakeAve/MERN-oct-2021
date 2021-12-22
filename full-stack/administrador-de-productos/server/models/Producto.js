const { Schema, model } = require("mongoose");

const ProductoSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "El título es requerido"],
    },
    price: {
      type: Number,
      required: [true, "El precio es requerido"],
      min: [0, "Precio tiene que ser más de 0"],
    },
    description: {
      type: String,
      required: [true, "La descripción es requerida"],
      minlength: [3, "La descripción necesita ser más larga"],
    },
  },
  { timestamps: true }
);

const ProductModelo = model("producto", ProductoSchema);

module.exports = { ProductoSchema, ProductModelo };
