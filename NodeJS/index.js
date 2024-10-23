import { config } from "dotenv"; //importamos dotenv
config({ path: "./config/.env"}); //configuramos dotenv
import express, { json } from "express"; //importamos express
import mongoose from "mongoose";
import cors from "cors";
import routerProducts from "./routes/products.routes.js"; //importamos el archivo de rutas
const app = express(); // Crear el servidor ejecutando express
const port = process.env.PORT; //crear un puerto
app.use(json()); // Middleware para parsear JSON
// Utilizar mongoose para conectarnos a MongoDB
connectDB().catch((err) => console.log(err));

async function connectDB() {
  await mongoose.connect(process.env.DATABASE);
}

// Cors
const corsOptions = {
  origin: ["http://localhost:3000","http://localhost:5173"],
  methods: ["GET", "POST", "PATCH", "DELETE"],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Rutas
app.use(routerProducts);

//iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
