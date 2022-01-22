const { crearNuevoMensaje, obtenerMensajes } = require("./controllers/mensaje");

const socketChat = (socket) => {
  console.log(`Conexion estabelcida ${socket.id}`);
  let usuario = null;

  socket.on("test", () => console.log(`testing ${socket.id}`));

  socket.on("nuevo_usuario", async (d) => {
    try {
      console.log(`El usuario es ${d.usuario}`);
      usuario = d.usuario;
      const m = { ...d, tipo: "nuevo_usuario" };
      await crearNuevoMensaje(m);
      const mensajesPasados = await obtenerMensajes();
      socket.broadcast.emit("msj-a-clientes", m);
      socket.emit("mensajes-pasados", mensajesPasados);
    } catch (err) {
      console.error(err);
      socket.emit("error");
    }
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("msj-a-clientes", {
      usuario,
      mensaje: "{u} ha disconectado",
      hora: new Date(),
      tipo: "disconnect_usuario",
    });
  });

  socket.on("msj-a-servidor", async (m) => {
    try {
      await crearNuevoMensaje(m);
      socket.broadcast.emit("msj-a-clientes", m);
    } catch (err) {
      console.error(err);
      socket.emit("error");
    }
  });
};

module.exports = socketChat;
