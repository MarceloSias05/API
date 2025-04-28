import { Router } from "express";
import { sal, ping } from "../controllers/index.controllers.js";

const router = Router();

router.get("/", sal); //  / --> es para entrar a la dirección inicial, e.g. localhost. (, ) segundo arg. es el controlador
router.get("/ping", ping); 

export default router;

// Ejemplo de controlador en user.controllers.js
export const getUsers = (req, res) => {
    res.json({ message: "Lista de usuarios" });
  };