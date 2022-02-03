const modeloDeMerge = {
  name: {
    type: String,
    minlength: [3, "El nombre necesita más de 3 caracteres"],
  },
  libros: [{ type: "mongoose.Schema.Types.ObjectId", ref: "libro" }],
  premios: ["PremioSchema"],
  fechaDeNac: Date,
};
