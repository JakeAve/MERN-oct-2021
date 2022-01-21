require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");

require("./config/connectDB")();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api", require("./routes/api"));

const server = app.listen(PORT, () =>
  console.log(`Servidor está en port: ${PORT}`)
);

const io = require("socket.io")(server, {
  cors: { origin: "http://localhost:3000" },
});

io.on("connection", require("./socketChat"));
