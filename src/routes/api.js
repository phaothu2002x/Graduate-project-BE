import express from "express";
import apiController from "../controller/apiController";
import userController from "../controller/userController";
import roleController from "../controller/roleController";
import { checkUserJWT, checkUserPermission } from "../middleware/jwtActions";

const router = express.Router();

/**
 *
 * @param {*} app :express app
 *
 */

const initApiRoutes = (app) => {
    router.post("/register", apiController.handleRegister);
    router.post("/login", apiController.handleLogin);

    // CRUD user
    router.get(
        "/manage-user/read",
        checkUserJWT,
        checkUserPermission,
        userController.readFunc
    );
    router.post("/manage-user/create", userController.createFunc);
    router.put("/manage-user/update", userController.updateFunc);
    router.delete("/manage-user/delete", userController.deleteFunc);

    router.get("/role/read", roleController.readFunc);
    return app.use("/api/", router);
};

export default initApiRoutes;
