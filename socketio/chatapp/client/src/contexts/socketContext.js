import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";

const socketContext = createContext(io(":5100"));

export const useSocket = () => useContext(socketContext);

export const SocketProvider = ({ children }) => {
  const [socket] = useState(useSocket());

  useEffect(() => {
    socket.emit("test");

    socket.on("disconect", socket.open());

    return () => socket.disconnect(true);
  }, [socket]);

  return (
    <socketContext.Provider value={socket}>{children}</socketContext.Provider>
  );
};
