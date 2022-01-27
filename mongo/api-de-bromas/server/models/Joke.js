const { model, Schema } = require("mongoose");

const JokeSchema = new Schema(
  {
    setup: {
      type: String,
      required: [true, "El setup es requerido"],
    },
    punchline: {
      type: String,
      required: [true, "El punchline es requerido"],
    },
  },
  { timestamps: true }
);

const Joke = model("joke", JokeSchema);

module.exports = { Joke, JokeSchema };
