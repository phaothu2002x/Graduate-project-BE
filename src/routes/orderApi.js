import express from "express";

import cartController from "../controller/cartController";
import orderController from "../controller/orderController";

const router = express.Router();
const initOrderApiRoutes = (app) => {
    //CRUD cart
    router.get("/order/read", orderController.readFunc);
    router.post("/order/create", orderController.createFunc);
    router.put("/order/update", orderController.updateFunc);
    router.delete("/order/delete", orderController.deleteFunc);
    router.get("/order/findProduct/:id", cartController.findFunc);

    return app.use("/api/", router);
};

export default initOrderApiRoutes;
