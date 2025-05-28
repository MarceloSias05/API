import "dotenv/config"
import express from "express";
import cors from "cors"; 
import indexRoutes from "./routes/index.routes.js";
import userRoutes from "./routes/users.routes.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));

app.use(express.json());

app.use("/", indexRoutes);
app.use("/users", userRoutes);

const PORT = 3030;
app.listen(PORT, console.log("Servidor corriendo en http://localhost:" + PORT));