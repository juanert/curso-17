import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

/**
 *  Schema for products
 *  @typedef {Object} productSchema
 *  @property {String} name - Name of the product, must be unique, required
 *  @property {String} description - Description of the product
 *  @property {Number} price - Price of the product
 *  @property {Number} stock - Stock of the product
 *  @property {String} image - Image of the product
 *  @property {Boolean} free_shipping - Free shipping of the product
 *  @property {Date} createdAt - Date of creation
 *  @property {Date} updatedAt - Date of update
 */

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
    deleted : { type: Boolean, default: false }
  },
  { timestamps: true }
);

/**
 * Plugin for pagination
 */
productSchema.plugin(mongoosePaginate);

/**
 * Model for products
 * @typedef {Object} Product
 */

const Product = mongoose.model("Products", productSchema);

export { Product };