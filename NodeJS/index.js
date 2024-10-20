import express, { json } from "express"; //importamos express
import mongoose from "mongoose";
const app = express(); // Crear el servidor ejecutando express
const port = 3001; //crear un puerto
app.use(json()); // Middleware para parsear JSON
// Utilizar mongoose para conectarnos a MongoDB
connectDB().catch((err) => console.log(err));

async function connectDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/api");
}

// Definir un schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      validate: /^[a-zA-Z0-9 ]+$/,
      unique: true,
    },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    image: { type: String },
    free_shipping: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Crear un modelo
const Product = mongoose.model("Products", productSchema);

// Rutas de la API
// Obtener todos los productos
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

// Obtener un producto por ID
app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400).json({ error: "Invalid ID" });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

// Crear un producto
app.post("/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json("Product created");
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

// Actualizar un producto
app.patch("/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body)
    if (product) {
      res.status(200).json("Product updated");
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

// Eliminar un producto
app.delete("/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (product) {
      res.status(200).json("Product deleted");
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400).json({ error: "Invalid ID" });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

// Rutas de prueba
app.get("/", (req, res) => {
  res.send("Bienvenido a la API con Express");
});

app.get("/productos", (req, res) => {
  res.json([
    {
      id: 1,
      nombre: "Producto 1",
      precio: 100,
    },
    {
      id: 2,
      nombre: "Producto 2",
      precio: 200,
    },
  ]);
});

// Ruta con parámetros
app.get("/productos/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    id,
    nombre: `Producto ${id}`,
    precio: 100 * id,
  });
});

// Ruta con query params
app.get("/mensaje", (req, res) => {
  const { nombre, apellido } = req.query;
  res.json({ mensaje: `Hola ${nombre} ${apellido}` });
});

//iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
