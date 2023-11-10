import express from "express";

import cartController from "../controller/cartController";

const router = express.Router();
const initCartApiRoutes = (app) => {
    //CRUD cart
    router.get("/cart/read", cartController.readFunc);
    router.post("/cart/create", cartController.createFunc);
    router.put("/cart/update", cartController.updateFunc);
    router.get("/cart/findProduct/:id", cartController.findFunc);
    router.delete("/cart/delete", cartController.deleteFunc);

    return app.use("/api/", router);
};

export default initCartApiRoutes;
