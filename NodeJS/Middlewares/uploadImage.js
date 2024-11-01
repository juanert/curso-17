import multer from "multer";
import path from "path";

/**
 * @description This function is used to upload an image to the server
 * @property {Object} destination - Destination of the image
 * @property {Object} filename - Name of the image
 * @property {Object} limits - Limits of the image
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve("public/images")); // Asegúrate de usar path.resolve para definir la ruta correcta
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname.replace(/\s/g, "_")}`);
  },
});

// Filtrar el tipo de archivo permitido
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/gif"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed (jpeg, jpg, png, gif)"), false);
  }
};

// Definir los límites de tamaño del archivo
const limits = {
  fileSize: 1024 * 1024 * 10, // Limitar el tamaño del archivo a 10MB
};

/**
 * Allows to export the function
 */
export const upload = multer({ storage, fileFilter, limits });
