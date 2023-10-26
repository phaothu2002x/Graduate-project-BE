import express from "express";
import apiController from "../controller/apiController";
import userController from "../controller/userController";
import roleController from "../controller/roleController";
import productController from "../controller/productController";
const router = express.Router();

/**
 *
 * @param {*} app :express app
 *
 */

const initApiRoutes = (app) => {
    router.get("/test-api", apiController.testApi);
    router.post("/register", apiController.handleRegister);
    router.post("/login", apiController.handleLogin);

    // CRUD user
    router.get("/manage-user/read", userController.readFunc);
    router.post("/manage-user/create", userController.createFunc);
    router.put("/manage-user/update", userController.updateFunc);
    router.delete("/manage-user/delete", userController.deleteFunc);

    //CRUD product
    router.get("/manage-products/read", productController.readFunc);
    router.post("/manage-products/create", productController.createFunc);
    router.put("/manage-products/update", productController.updateFunc);
    router.delete("/manage-products/delete", productController.deleteFunc);

    router.get("/role/read", roleController.readFunc);
    return app.use("/api/", router);
};

export default initApiRoutes;
