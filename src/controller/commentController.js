import cartService from "../service/cartService";
import commentService from "../service/commentService";
const readFunc = async (req, res) => {
    try {
        // console.log("check id product:", req.query); ok
        let data = await commentService.getAllComments(req.query.id);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: "error from server",
            EC: -1,
            DT: "",
        });
    }
};

const createFunc = async (req, res) => {
    try {
        // console.log("checkres", req.body);ok
        // console.log("checkres", req.user.userId);//ok

        let data = await commentService.addComment(req.body, req.user.userId);

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: "error from server",
            EC: "-1",
            DT: "",
        });
    }
};
const deleteFunc = async (req, res) => {
    try {
        // console.log("checkres", req.body); //ok
        // console.log("checkres", req.user.userId);//ok

        let data = await commentService.deleteComment(req.body.commentId);

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: "error from server",
            EC: "-1",
            DT: "",
        });
    }
};

module.exports = {
    readFunc,
    createFunc,
    deleteFunc,
};
