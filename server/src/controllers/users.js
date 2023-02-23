import Usuarios from "../models/users.js";

export const createUsers = async (req, res) => {
  try {
    const user = new Usuarios(req.body);
    const result = await user.save();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

export const allUsers = async (req, res) => {
  try {
    const result = await Usuarios.find();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

export const getUserByName = async (req, res) => {
    try {
      const {name} = req.query
      const result = await Usuarios.findOne({Name:name});
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  };

  export const deleteUser = async (req, res)=>{
    try {
      const {name} = req.query
      const result = await Usuarios.deleteOne({Name:name})
      res.send(result)
    } catch (error) {
      res.send(error)
    }
  }
