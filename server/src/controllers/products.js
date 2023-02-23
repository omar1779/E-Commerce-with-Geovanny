import Productos from "../models/products.js";

export const getProductByName = async (req, res)=>{
  try {
    const {name} = req.query
      const result = await Productos.findOne({Name:name});
      res.send(result)
  } catch (error) {
    res.send(error)
  }
}

export const getAllProducts = async (req, res) => {
  //trae todos los productos de la base de datos
  try {
    const result = await Productos.find();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

export const createProducts = async (req, res)=>{
   try {
      const products = new Productos(req.body)
      const result = await products.save()
      res.send(result)
   } catch (error) {
      res.send(error)
   }
}


export const deleteProduct = async (req, res)=>{
  try {
    const {name} = req.query
    const result = await Productos.deleteOne({Name:name})
    res.send(result)
  } catch (error) {
    res.send(error)
  }
}
