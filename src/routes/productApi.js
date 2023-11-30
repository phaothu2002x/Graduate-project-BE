import express from "express";
import productController from "../controller/productController";

const router = express.Router();
const initProductApiRoutes = (app) => {
    //CRUD product
    router.get("/manage-products/read", productController.readFunc);
    router.get("/products/read", productController.readFunc);
    router.post("/manage-products/create", productController.createFunc);
    router.put("/manage-products/update", productController.updateFunc);
    router.get("/manage-products/findProduct/:id", productController.findFunc);
    router.delete("/manage-products/delete", productController.deleteFunc);

    router.get(
        "/manage-products/findAllSelection",
        productController.findSelectFunc
    );
    router.get("/manage-products/findType/:id", productController.findTypeFunc);
    return app.use("/api/", router);
};

export default initProductApiRoutes;
