const modeloDeMerge = {
  name: {
    type: String,
    minlength: [3, "El nombre necesita más de 3 letras"],
  },
  libros: [{ type: "mongoose.Schema.Types.ObjectId", ref: "Libro" }],
  premios: ["PremioSchema"],
  fechaDeNac: Date,
};
