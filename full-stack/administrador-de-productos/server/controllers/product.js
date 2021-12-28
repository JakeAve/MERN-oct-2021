const { ProductModelo } = require("../models/Producto");

const crearNuevoProducto = async (req, res) => {
  try {
    const payload = req.body;
    const producto = new ProductModelo(payload);
    await producto.save();
    res.status(201).json({ producto });
  } catch (err) {
    console.error({ err });
    if (err.errors) {
      console.log(err.errors);
      return res.status(400).json({ msj: "Bad Request", errors: err.errors });
    }
    res.status(500).json({ msj: "Internal server error" });
  }
};

const todoProducto = async (req, res) => {
  try {
    const productos = await ProductModelo.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ msj: "Internal server error" });
  }
};

const productoPorId = async (req, res) => {
  try {
    const id = req.params._id;
    const producto = await ProductModelo.findById(id);

    if (!producto) return res.status(404).json({ msj: "No existe" });

    res.json(producto);
  } catch (err) {
    res.status(500).json({ msj: "Internal server error" });
  }
};

const editarProducto = async (req, res) => {
  try {
    const id = req.params._id;
    const { title, price, description } = req.body;
    const producto = await ProductModelo.findById(id);
    producto.title = title;
    producto.price = price;
    producto.description = description;
    await producto.save();
    res.json({ producto });
  } catch (err) {
    console.error({ err });
    if (err.errors) {
      console.log(err.errors);
      return res.status(400).json({ msj: "Bad Request", errors: err.errors });
    }
    res.status(500).json({ msj: "Internal server error" });
  }
};

const eliminarProducto = async (req, res) => {
  try {
    const id = req.params._id;
    const producto = await ProductModelo.findByIdAndDelete(id);
    if (producto === null) return res.status(404).json({ msj: "No existe" });
    res.json({ msj: "Producto eliminado" });
  } catch (err) {
    console.error({ err });
    res.status(500).json({ msj: "Internal server error" });
  }
};

module.exports = {
  crearNuevoProducto,
  todoProducto,
  productoPorId,
  editarProducto,
  eliminarProducto,
};
