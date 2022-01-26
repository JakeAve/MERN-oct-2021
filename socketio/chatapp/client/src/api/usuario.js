export const login = async (payload) => {
  try {
    const respuesta = await fetch("/api/usuario/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!respuesta.ok) throw new Error(`No se pudo entra ${respuesta.status}`);
    const json = await respuesta.json();
    return { success: true, data: json };
  } catch (err) {
    console.error(err);
    return { success: false, data: null };
  }
};

export const getUsuario = async () => {
  try {
    const respuesta = await fetch("/api/usuario", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    });
    if (!respuesta.ok) throw new Error(`No se pudo entra ${respuesta.status}`);
    const json = await respuesta.json();
    console.log({ json });
    return { success: true, data: json };
  } catch (err) {
    console.error(err);
    return { success: false, data: null };
  }
};

export const logout = async () => {
  try {
    const respuesta = await fetch("/api/usuario/logout", {
      method: "POST",
    });
    if (!respuesta.ok) throw new Error(`No se pudo entra ${respuesta.status}`);
    const json = await respuesta.json();
    return { success: true, data: json };
  } catch (err) {
    console.error(err);
    return { success: false, data: null };
  }
};
