const mensajesPasados = [];

const socketChat = (socket) => {
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

  socket.on("disconnect", () => {
    socket.broadcast.emit("msj-a-clientes", {
      usuario,
      mensaje: "{u} ha disconectado",
      hora: new Date(),
      tipo: "disconnect_usuario",
    });
  });

  socket.on("msj-a-servidor", (m) => {
    console.log(`${m.usuario} ha dicho ${m.mensaje} a las ${m.hora}`);
    mensajesPasados.push(m);
    socket.broadcast.emit("msj-a-clientes", m);
  });
};

module.exports = socketChat;
