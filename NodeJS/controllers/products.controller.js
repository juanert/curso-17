import { Product } from "../models/products.model.js";

/**
 * Get all products
 * @function getProducts
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @query {Number} page - Page number
 * @query {Number} limit - Limit of products
 * @returns {Object} - List of products
 * @method GET
 * @example http://localhost:3000/products?page=1&limit=10
 */

export const getProducts = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const products = await Product.paginate({deleted: false}, { page, limit });
    res.status(200).json(products);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

/**
 * Get a product by ID
 * @function getProductById
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {String} req.params.id - Product ID
 * @returns {Object} - Product
 * @method GET
 * @example http://localhost:3000/products/60b4e2b4b4b3f2b1b4b3f2b1
 */

export const getProductById = async (req, res) => {
  try {
    const product = await Product.find({ _id: req.params.id, deleted: false });
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
};

/**
 * Search a product by name or description
 * @function searchProduct
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @query {String} search - Search term
 * @query {Number} page - Page number
 * @query {Number} limit - Limit of products
 * @returns {Object} - List of products
 * @method GET
 * @example http://localhost:3000/search?search=product&page=1&limit=10
 */

export const searchProduct = async (req, res) => {
  try {
    const { search, page = 1, limit = 10 } = req.query;
    if (!search) {
      res.status(400).json({ error: "Search term is required" });
    }
    const products = await Product.paginate(
      {
        $or: [
          { name: { $regex: search, $options: "i" }, deleted: false },
          { description: { $regex: search, $options: "i" }, deleted: false },
        ],
      },
      { page, limit }
    );
    if (products.docs.length === 0) {
      res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(products);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

/**
 * Create a product
 * @function createProduct
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} - Message
 * @method POST
 * @example http://localhost:3000/products
 */

export const createProduct = async (req, res) => {
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
};

/**
 * Update a product
 * @function updateProduct
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {String} req.params.id - Product ID
 * @returns {Object} - Message
 * @method PATCH
 * @example http://localhost:3000/products/60b4e2b4b4b3f2b1b4b3f2b1
 */

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
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
};

/**
 * Delete a product
 * @function deleteProduct
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {String} req.params.id - Product ID
 * @returns {Object} - Message
 * @method DELETE
 * @example http://localhost:3000/products/60b4e2b4b4b3f2b1b4b3f2b1
 */

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, { deleted: true });
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
};
