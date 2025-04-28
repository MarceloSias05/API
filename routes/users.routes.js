import { Router } from "express";
import { sal, ping } from "../controllers/index.controllers.js";
import { getUsers, postUsers} from "../controllers/user.controllers.js";
const router = Router();

//Get methods
router.get("/sal", sal);
router.get("/ping", ping);
router.get("/get-users", getUsers); // Obtener todos los usuarios

//post methods
router.post("/post-users", postUsers);
// Crear un nuevo usuario
//router.post("/users", postUsers); // Crear un nuevo usuario (descomentado si se necesita)
export default router;