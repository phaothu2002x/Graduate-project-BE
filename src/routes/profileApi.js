import express from "express";

import profileController from "../controller/profileController";
import cartController from "../controller/cartController";

const router = express.Router();
const initProfileApiRoutes = (app) => {
    //CRUD cart
    router.get("/profile/read", profileController.readFunc);
    router.post("/profile/create", profileController.createFunc);
    router.put("/profile/update", profileController.updateFunc);
    router.get("/profile/findProduct/:id", profileController.findFunc);
    router.delete("/profile/delete", profileController.deleteFunc);

    return app.use("/api/", router);
};

export default initProfileApiRoutes;
