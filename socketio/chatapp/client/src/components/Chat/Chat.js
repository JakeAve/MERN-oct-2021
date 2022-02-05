import "./styles.css";
import React, { useCallback, useEffect, useState } from "react";
import { useSocket } from "../../contexts/socketContext";
import { useUsuario } from "../../contexts/usuarioContext";
import Chatformulario from "../ChatFormulario/ChatFormulario";
import Mensajespasados from "../MensajesPasados/MensajesPasados";
import { ListaDeSalones } from "../ListaDeSalones/ListaDeSalones";
import { useNavigate, useParams } from "react-router-dom";

const salones = [
  { nombre: "foo", _id: "123" },
  { nombre: "foo2", _id: "456" },
  { nombre: "foo3", _id: "789" },
];

const Chat = () => {
  const socket = useSocket();
  const [mensajes, setMensajes] = useState([]);
  const { usuario } = useUsuario();
  const { salonId } = useParams();
  const navigate = useNavigate();

  if (!salonId) navigate(`/chat/${salones[0]._id}`);

  const nuevoMensaje = useCallback(
    (m) => setMensajes((curr) => [...curr, m]),
    []
  );

  useEffect(() => {
    socket.on("mensajes-pasados", (msjs) => {
      setMensajes((curr) => [...msjs, ...curr]);
    });

    socket.on("msj-a-clientes", (m) => {
      nuevoMensaje(m);
    });
  }, [socket, nuevoMensaje]);

  useEffect(() => {
    if (usuario) {
      nuevoMensaje({
        mensaje: "{u} ha entrado el chat",
        usuario,
        hora: new Date(),
        tipo: "nuevo_usuario",
      });
    }
  }, [usuario, nuevoMensaje]);

  return (
    <div className="chat-container">
      <ListaDeSalones salones={salones} seleccionadoId={salonId} />
      <Mensajespasados mensajes={mensajes} />
      <Chatformulario nuevoPropioMensaje={nuevoMensaje} />
    </div>
  );
};

export default Chat;
