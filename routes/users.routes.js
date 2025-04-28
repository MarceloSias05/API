import { Router } from "express";
import { sal, ping } from "../controllers/index.controllers.js";
import { getUsers } from "../controllers/user.controllers.js";
const router = Router();

router.get("/sal", sal);
router.get("/ping", ping);
router.get("/users", getUsers); // Obtener todos los usuarios

export default router;