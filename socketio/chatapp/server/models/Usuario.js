const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UsuarioSchema = new mongoose.Schema(
  {
    usuario: {
      type: String,
      minlength: [3, "El usuario necesita más de 3 caracteres"],
      required: [true, "El usuario es requerido"],
      unique: true,
    },
    nombres: {
      type: String,
      required: [true, "El usuario es requerido"],
    },
    apellidos: {
      type: String,
      required: [true, "El usuario es requerido"],
    },
    correo: {
      type: String,
      required: [true, "Correo es requerido"],
      validate: {
        validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email",
      },
    },
    password: {
      type: String,
      required: [true, "Contraseña es requerida"],
      minlength: [8, "La contraseña necesita más de 8 caracteres"],
    },
    contactos: [
      { type: mongoose.Schema.Types.ObjectId, ref: "usuario", default: [] },
    ],
  },
  { timestamps: true }
);

UsuarioSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

UsuarioSchema.pre("validate", function (next) {
  if (this.isNew && this.password !== this["confirmPassword"]) {
    this.invalidate("confirmPassword", "Contraseña tiene que ser lo mismo");
  }
  next();
});

UsuarioSchema.pre("save", async function (next) {
  if (this.isNew) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
  }

  next();
});

const UsuarioModelo = mongoose.model("usuario", UsuarioSchema);

module.exports = { UsuarioSchema, UsuarioModelo };
