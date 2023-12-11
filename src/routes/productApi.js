import express from "express";
import productController from "../controller/productController";
import searchController from "../controller/searchController";
import { uploadProductImage } from "../middleware/uploadFile";

const router = express.Router();
const initProductApiRoutes = (app) => {
    //CRUD product
    router.get("/manage-products/read", productController.readFunc);
    router.get("/products/read", productController.readFunc);
    router.post(
        "/manage-products/create",
        uploadProductImage.fields([{ name: "thumb" }, { name: "galleryList" }]),
        productController.createFunc
    );
    router.put("/manage-products/update", productController.updateFunc);
    router.get("/manage-products/findProduct/:id", productController.findFunc);
    router.delete("/manage-products/delete", productController.deleteFunc);

    router.get(
        "/manage-products/findAllSelection",
        productController.findSelectFunc
    );
    router.get("/products/findAllSelection", productController.findSelectFunc);
    router.get("/manage-products/findType/:id", productController.findTypeFunc);
    router.get("/products/suggestion", productController.findSuggestion);

    //search part
    router.get("/products/search", searchController.searchFunc);
    router.get("/products/filter", searchController.filterFunc);

    return app.use("/api/", router);
};

export default initProductApiRoutes;
