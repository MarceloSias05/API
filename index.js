import express from "express";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(indexRoutes);

/*app.get("/pagina", (req, res) => {
    res.redirect("http://localhost:3000/index.html"); //redirect se usa para un servidor que no es local, sino externo
});*/

const PORT = 3030;
app.listen(PORT, console.log("http://localhost:" + PORT));