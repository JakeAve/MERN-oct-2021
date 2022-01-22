import "./styles.css";
import React, { useState, useEffect, Fragment } from "react";
import { useUsuario } from "../../contexts/usuarioContext";
import crearFechaRelativa, {
  units as timeUnits,
  fechaCorta,
} from "../../utils/fechaRelativa";

const Mensaje = (props) => {
  const {
    usuario: usuarioQueEnvioElChat,
    mensaje: mensajeQueEnvioElChat,
    hora,
    tipo,
  } = props;
  const { usuario } = useUsuario();
  const esPropio = usuario === usuarioQueEnvioElChat;
  const esSistema = Boolean(tipo);
  const [horaRelativa, setHoraRelativa] = useState(crearFechaRelativa(hora));
  const [esHoraRelativa, setEsHoraRelativa] = useState(true);

  useEffect(() => {
    const tiempoTranscurrido = new Date() - new Date(hora);
    let intervalo = null;
    if (tiempoTranscurrido < timeUnits.day) {
      const int =
        tiempoTranscurrido > timeUnits.hour
          ? timeUnits.hour
          : tiempoTranscurrido > timeUnits.minute
          ? timeUnits.minute
          : 10000;

      intervalo = setInterval(() => {
        setHoraRelativa(crearFechaRelativa(hora));
      }, int);
    }

    return () => clearInterval(intervalo);
  }, [hora]);

  let mensaje = mensajeQueEnvioElChat;
  if (tipo === "nuevo_usuario")
    mensaje = mensajeQueEnvioElChat.replace(/{u}/, usuarioQueEnvioElChat);
  if (tipo === "nuevo_usuario" && esPropio) mensaje = "Tú entraste el chat";
  if (tipo === "disconnect_usuario")
    mensaje = mensajeQueEnvioElChat.replace(/{u}/, usuarioQueEnvioElChat);

  const cambiarFormatoDeHora = () => {
    if (esHoraRelativa) {
      setHoraRelativa(fechaCorta(hora));
      setEsHoraRelativa(false);
    } else {
      setHoraRelativa(crearFechaRelativa(hora));
      setEsHoraRelativa(true);
    }
  };

  return (
    <div
      className={`mensaje ${esPropio ? "propio" : ""} ${
        esSistema ? "sistema" : ""
      }`}
    >
      <p className="mensaje-contenido">
        {mensaje.split("\n").map((texto, key) => (
          <Fragment key={key}>
            {texto}
            <br />
          </Fragment>
        ))}
      </p>
      <div>
        <div className="mensaje-nombre">
          {esPropio ? "Tú" : usuarioQueEnvioElChat}
        </div>
        <div
          className="mensaje-hora"
          aria-label="Hora del mensaje"
          onClick={cambiarFormatoDeHora}
        >
          {horaRelativa}
        </div>
      </div>
    </div>
  );
};

export default Mensaje;
