import express from "express";

import cartController from "../controller/cartController";

const router = express.Router();
const initCartApiRoutes = (app) => {
    //CRUD cart
    router.get("/cart/read", cartController.readFunc);
    router.post("/cart/create", cartController.createFunc);
    router.put("/cart/update", cartController.updateFunc);
    router.delete("/cart/delete", cartController.deleteFunc);
    router.delete("/cart/clear", cartController.clearFunc);

    router.get("/cart/payment/:id", cartController.getPaymentFunc);

    return app.use("/api/", router);
};

export default initCartApiRoutes;
