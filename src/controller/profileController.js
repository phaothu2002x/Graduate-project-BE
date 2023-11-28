import cartService from "../service/cartService";
import profileService from "../service/profileService";

const readFunc = async (req, res) => {
    try {
        // console.log(req.query);
        let data = await profileService.getCurrentUser(req.query.user);
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
        // console.log("checkres", req.body);
        let data = await cartService.addToCart(req.body);

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

const updateFunc = async (req, res) => {
    try {
        // console.log(">>> check body", req.body);
        // console.log(">>> check file", req.file); // ok

        let data = await profileService.updateUserProfile(req.body, req.file);

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
        // console.log(req.body);
        let data = await cartService.DeleteItemInCart(req.body.id);
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
    updateFunc,
    deleteFunc,
};
