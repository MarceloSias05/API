import { Router } from "express";
import { sal, ping } from "../controllers/index.controllers.js";
import { getUsers, postUsers, login, deleteUser, putUser } from "../controllers/user.controllers.js";

const router = Router();

//Get methods
router.get("/sal", sal);
router.get("/ping", ping);
router.get("/get-users", getUsers); // Obtener todos los usuarios

//post methods
router.post("/post-users", postUsers);

// Ruta para login
router.post("/login", login);

// Ruta para eliminar un usuario -> DELETE
router.delete("/delete-users/:id", deleteUser);

// Ruta para modificar un usuario  // PUT
router.put("/update-user/:id", putUser);

// Crear un nuevo usuario
//router.post("/users", postUsers); // Crear un nuevo usuario (descomentado si se necesita)
export default router;

