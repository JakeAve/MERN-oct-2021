const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: [2, "El nombre necesita más de 2 letras"],
    },
    age: {
      type: Number,
      required: [true, "La edad es un campo requierido"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);

module.exports = { UserSchema, User };
