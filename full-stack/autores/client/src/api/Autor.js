export const crearAutor = async (data) => {
  try {
    const response = await fetch(`/api/autor`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    return { success: true, data: json };
  } catch (err) {
    console.error(err);
    return { success: false, data: null };
  }
};

export const obtenerAutores = async () => {
  try {
    const response = await fetch(`/api/autor`);
    const json = await response.json();
    return { success: true, data: json };
  } catch (err) {
    console.error(err);
    return { success: false, data: [] };
  }
};

export const eliminarAutor = async (id) => {
  try {
    const response = await fetch(`/api/autor/${id}`, {
      method: 'DELETE',
    });
    const json = await response.json();
    return { success: true, data: json };
  } catch (err) {
    console.error(err);
    return { success: false, data: null };
  }
};

export const obtenerAutor = async (id) => {
  try {
    const response = await fetch(`/api/autor/${id}`);
    const json = await response.json();
    return { success: true, data: json };
  } catch (err) {
    console.error(err);
    return { success: false, data: null };
  }
};
