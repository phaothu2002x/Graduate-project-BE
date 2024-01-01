import express from "express";

import cartController from "../controller/cartController";
import orderController from "../controller/orderController";

const router = express.Router();
const initOrderApiRoutes = (app) => {
    router.get("/order/read", orderController.readFunc); // admin: lay full orders
    router.post("/order/create", orderController.createFunc); // khi nhan dat hang
    router.put("/order/update", orderController.updateFunc); //admin
    router.delete("/order/delete", orderController.deleteFunc); //admin

    //user order api
    router.get("/profile/orders", orderController.getOrderFunc); //user
    return app.use("/api/", router);
};

export default initOrderApiRoutes;
