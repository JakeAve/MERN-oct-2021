import axios from "axios";

export const getResource = (url) =>
  axios
    .get(url)
    .then((respuesta) => {
      const { data } = respuesta;
      return data;
    })
    .catch((err) => {
      console.error(err);
      console.log(err.response.statusCode);
      return "Not Found";
    });
