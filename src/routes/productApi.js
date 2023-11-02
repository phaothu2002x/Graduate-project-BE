import express from "express";
import productController from "../controller/productController";

const router = express.Router();
const initProductApiRoutes = (app) => {
    //CRUD product
    router.get("/manage-products/read", productController.readFunc);
    router.post("/manage-products/create", productController.createFunc);
    router.put("/manage-products/update/:id", productController.updateFunc);
    router.get("/manage-products/findProduct/:id", productController.findFunc);
    router.delete("/manage-products/delete", productController.deleteFunc);

    router.get(
        "/manage-products/findAllSelection",
        productController.findSelectFunc
    );

    return app.use("/api/", router);
};

export default initProductApiRoutes;
