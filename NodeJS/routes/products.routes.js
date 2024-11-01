import { Router } from "express";
import {
  getProducts,
  getProductById,
  searchProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";
import { upload } from "../Middlewares/uploadImage.js";

/**
 * Products routes
 */
const routerProducts = Router();

/**
 * Get all products
 * @function getProducts
 * @method GET
 */
routerProducts.get("/products", getProducts);

/**
 * Get a product by ID
 * @method GET
 */
routerProducts.get("/products/:id", getProductById);

/**
 * Search a product by name or description
 * @method GET
 */
routerProducts.get("/search", searchProduct);

/**
 * Create a product
 * @method POST
 */
routerProducts.post("/products", upload.single("image"), createProduct);

/**
 * Update a product
 * @method PATCH
 */
routerProducts.patch("/products/:id", upload.single("image"), updateProduct);

/**
 * Delete a product
 * @method DELETE
 */
routerProducts.delete("/products/:id",  deleteProduct);

export default routerProducts;
