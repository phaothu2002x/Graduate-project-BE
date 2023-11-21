import express from "express";

import profileController from "../controller/profileController";
import uploadCloud from "../middleware/uploadFile";

const router = express.Router();
const initProfileApiRoutes = (app) => {
    //CRUD cart
    router.get("/profile/read", profileController.readFunc);
    router.post("/profile/create", profileController.createFunc);
    router.put(
        "/profile/update",
        uploadCloud.single("avatar"),
        profileController.updateFunc
    );
    router.delete("/profile/delete", profileController.deleteFunc);

    return app.use("/api/", router);
};

export default initProfileApiRoutes;
