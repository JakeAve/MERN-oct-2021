const { model, Schema } = require("mongoose");

const JokeSchema = new Schema(
  {
    setup: String,
    punchline: String,
  },
  { timestamps: true }
);

const Joke = model("joke", JokeSchema);

module.exports = { Joke, JokeSchema };
