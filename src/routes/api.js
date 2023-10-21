import express from "express";
import apiController from "../controller/apiController";
import userController from "../controller/userController";

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

    // CRUD
    router.get("/manage-user/read", userController.readFunc);
    router.post("/manage-user/create", userController.createFunc);
    router.put("/manage-user/update", userController.updateFunc);
    router.delete("/manage-user/delete", userController.deleteFunc);
    return app.use("/api/", router);
};

export default initApiRoutes;
