import express from "express";
import productController from "../controller/productController";

const router = express.Router();
const initProductApiRoutes = (app) => {
    //CRUD product
    router.get("/manage-products/read", productController.readFunc);
    router.post("/manage-products/create", productController.createFunc);
    router.put("/manage-products/update", productController.updateFunc);
    router.delete("/manage-products/delete", productController.deleteFunc);

    return app.use("/api/", router);
};

export default initProductApiRoutes;
