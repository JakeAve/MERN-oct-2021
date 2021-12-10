import axios from "axios";

export const getSwapiRoot = () =>
  axios
    .get("https://swapi.dev/api/")
    .then((respuesta) => {
      const { data } = respuesta;
      return data;
    })
    .catch((err) => {
      console.error(err);
      console.log(err.response.statusCode);
      return {};
    });

export const getSwapiAsync = async () => {
  try {
    const { data } = await axios.get("https://swapi.dev/api/");
    return data;
  } catch (err) {
    console.error(err);
    console.log(err.response.statusCode);
    return {};
  }
};
