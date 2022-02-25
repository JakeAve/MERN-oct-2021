import fsCallback from "fs";
import fsPromise from "fs/promises";

const caminoAArchivo = "./archivo.md";

const nuevoContenido = "Mr. Miyagui";

// 1 - almacenar "hello" en ./archivo.md
// 2 - leer el contenido de ./archivo.md
// 3 - crear nuevos datos usando el contenido leido y nuevo contenido
// 4 - almacenar los nuevos datos en ./archivo.md
// 5 - leer el contendio de ./archivo.md
// 6 - averiguar que el contenido es igual a los nuevos datos que creamos en el paso 3

/* ------- Callback hell, infierno de devoluciones de llamadas ------- */

// fsCallback.writeFile(caminoAArchivo, "hello", (err) => {
//   if (err) throw err;

//   fsCallback.readFile(caminoAArchivo, "utf-8", (err, data) => {
//     if (err) throw err;
//     const nuevosDatos = `${data}, ${nuevoContenido}`;

//     fsCallback.writeFile(caminoAArchivo, nuevosDatos, (err) => {
//       if (err) throw err;

//       fsCallback.readFile(caminoAArchivo, "utf-8", (err, data2) => {
//         if (err) throw err;
//         if (data2 !== nuevosDatos) throw new Error("Hubo un error");

//         console.log("Éxito!!");
//         // y si quiero envirar un valor afuera?
//       });
//     });
//   });
// });

/* ------- Con promesas tradicionales ------- */

// let nuevosDatosParaPromesas;

// fsPromise
//   .writeFile(caminoAArchivo, "hello")
//   .then(() => fsPromise.readFile(caminoAArchivo, "utf-8"))
//   .then((valorAlmacenado) => {
//     const nuevosDatos = `${valorAlmacenado}, ${nuevoContenido}`;
//     nuevosDatosParaPromesas = nuevosDatos;
//     return fsPromise.writeFile(caminoAArchivo, nuevosDatos);
//   })
//   .then(() => fsPromise.readFile(caminoAArchivo, "utf-8"))
//   .then((nuevoValorAlmacenado) => {
//     if (nuevoValorAlmacenado !== nuevosDatosParaPromesas)
//       throw new Error("Error al guardar");
//     console.log("Éxito");
//   })
//   .catch((err) => console.error(err));

/* ------- Con async await ------- */

// try {
//   await fsPromise.writeFile(caminoAArchivo, "hello");
//   const valorAlmacenado = await fsPromise.readFile(caminoAArchivo, "utf-8");
//   const nuevosDatos = `${valorAlmacenado}, ${nuevoContenido}`;
//   await fsPromise.writeFile(caminoAArchivo, nuevosDatos);
//   const nuevoValorAlmacenado = await fsPromise.readFile(
//     caminoAArchivo,
//     "utf-8"
//   );
//   if (nuevoValorAlmacenado !== nuevosDatos) throw new Error("Error al guardar");
//   console.log("Èxito");
// } catch (err) {
//   console.error(err);
// }
