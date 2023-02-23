import mongoose from "mongoose";
const { Schema } = mongoose;

const Products = new Schema({
  Name: { type: String, required: true }, // String is shorthand for {type: String}
  Marca: { type: String, required: true },
  Categoria: { type: String, required: true },
  Image: { type: [String], required: true },
  Precio:{ type: Number, required: true },
  color: { type: String, required: true },
  Descripcion:{ type: String, required: true },
});

const Productos = mongoose.model("Productos", Products)
export default Productos;