import express from "express";
import apiController from "../controller/apiController";
const router = express.Router();

/**
 *
 * @param {*} app :express app
 *
 */

const initWebRoutes = (app) => {
    // router.get("/", (req, res) => {
    //     return res.send("hello met moi quas ");
    // });

    // router.get("/api/test", apiController.testApi);

    return app.use("/", router);
};

export default initWebRoutes;
