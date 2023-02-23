import { Router } from "express";
import { getAllProducts, createProducts, getProductByName, deleteProduct } from "../controllers/products.js";
import { allUsers, createUsers, getUserByName, deleteUser } from "../controllers/users.js";

const router = Router();

// deberia traer todos los productos de la base de datos
router.get("/", getAllProducts);
//deberia traer los prodcutos por Nombre
router.get("/product/name", getProductByName)
//deberia crear productos y añadirlos a la base de datos
router.post("/create/product", createProducts);
//deberia borrar un producto por nombre
router.delete("/delete/product", deleteProduct)
//deberia traer todos los usuarios de la base de datos
router.get("/users", allUsers);
//deberia crear usuarios y añadirlos a la base de datos
router.post("/create/users", createUsers);
//deberia traer los usuarios que correspondan al nombre que se le pasa por query
router.get("user/name", getUserByName)
//deberia borrar un producto por nombre
router.delete("/delete/user", deleteUser)

export default router;
