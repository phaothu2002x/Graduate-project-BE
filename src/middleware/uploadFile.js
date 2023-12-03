import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary,
    allowedFormats: ["jpg", "png"],
    params: {
        folder: "graduate-project",
    },
});

const productStorage = new CloudinaryStorage({
    cloudinary,
    allowedFormats: ["jpg", "png"],
    params: {
        folder: "productImages",
    },
});

const uploadCloud = multer({ storage });
const uploadProductImage = multer({ storage: productStorage });

module.exports = { uploadCloud, uploadProductImage };
