require("dotenv").config();
const express = require("express");

require("./config/connectDB")();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use("/api", require("./routes/api"));

const server = app.listen(PORT, () =>
  console.log(`Servidor está en port: ${PORT}`)
);

const io = require("socket.io")(server, {
  cors: { origin: "http://localhost:3000" },
});

const mensajesPasados = [];

io.on("connection", (socket) => {
  console.log(`Conexion estabelcida ${socket.id}`);
  let usuario = null;

  socket.on("test", () => console.log(`testing ${socket.id}`));

  socket.on("nuevo_usuario", (d) => {
    console.log(`El usuario es ${d}`);
    usuario = d;
    const m = { ...d, tipo: "nuevo_usuario" };
    mensajesPasados.push(m);
    socket.broadcast.emit("msj-a-clientes", m);
    socket.emit("mensajes-pasados", mensajesPasados);
  });

  //   socket.on("disconnect", () => {
  //     socket.broadcast.emit("msj-a-clientes", {
  //       usuario,
  //       mensaje: "{u} ha disconectado",
  //       hora: new Date(),
  //       tipo: "disconnect_usuario",
  //     });
  //   });

  socket.on("msj-a-servidor", (m) => {
    console.log(`${m.usuario} ha dicho ${m.mensaje} a las ${m.hora}`);
    mensajesPasados.push(m);
    socket.broadcast.emit("msj-a-clientes", m);
  });
});
