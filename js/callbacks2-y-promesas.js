// const orderSupplies = (item, callback) => {
//   let warehouse; //undefined
//   const deliveryTime = Math.random() * 3000; // será entre 0 a 3 segundos
//   setTimeout(() => {
//     warehouse = {
//       paint: {
//         product: "Neon Green Paint",
//         directions: () => "mix it!",
//       },
//       brush: {
//         product: "Horsehair brush",
//         directions: () => "start painting!",
//       },
//     };
//     callback(warehouse[item]);
//   }, deliveryTime);
// };

// const receivedItem = (item) => {
//   const { product, directions } = item;
//   console.log(`Received ${product}, time to ${directions()}`);
// };

// orderSupplies("brush", receivedItem);
// orderSupplies("paint", receivedItem);

/* Con promesas */

const orderSuppliesAPromesa = (item) => {
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000;

  // el valor que devolvamos será una promesa
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      warehouse = {
        paint: {
          product: "Neon Green Paint",
          directions: () => "mix it!",
        },
        brush: {
          product: "Horsehair brush",
          directions: () => "start painting!",
        },
        tarp: {
          product: "A large tarp",
          directions: () => "cover the floor!",
        },
      };
      resolve(warehouse[item]);
    }, deliveryTime);
  });
};

const tarp = orderSuppliesAPromesa("tarp");
const paint = orderSuppliesAPromesa("paint");
const brush = orderSuppliesAPromesa("brush");

// cadena de promesas
tarp
  .then(receivedItem)
  .then(() => paint)
  .then(receivedItem)
  .then(() => brush)
  .then(receivedItem)
  .catch((error) => console.log(error.message));
