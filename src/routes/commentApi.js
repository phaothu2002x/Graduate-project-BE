import express from "express";

import commentController from "../controller/commentController";

const router = express.Router();
const initCommentApiRoutes = (app) => {
    router.get("/comments", commentController.readFunc);
    router.post("/comments/create", commentController.createFunc);
    router.delete("/comments/delete", commentController.deleteFunc);

    return app.use("/api/", router);
};

export default initCommentApiRoutes;
