import "dotenv/config"
import express from "express";
import indexRoutes from "./routes/index.routes.js";
import userRoutes from "./routes/users.routes.js";


const app = express();

//Rutas
app.use(indexRoutes);
app.use(userRoutes);


/*app.get("/pagina", (req, res) => {
    res.redirect("http://localhost:3000/index.html"); //redirect se usa para un servidor que no es local, sino externo
});*/

const PORT = 3030;
app.listen(PORT, console.log("Servidor corriendo en http://localhost:" + PORT));