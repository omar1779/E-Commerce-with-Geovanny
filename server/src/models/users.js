import mongoose from "mongoose";
const { Schema } = mongoose;

const Users = new Schema({
  Name: { type: String, required: true }, // String is shorthand for {type: String}
  Apellido: { type: String, required: true },
  Sexo: { type: String, required: true },
  Foto: { type: [String], required: true },
  Edad: { type: Number, required: true },
  Descripcion: { type: String, required: true },
});

const Usuarios = mongoose.model("Usuarios", Users);
export default Usuarios;
