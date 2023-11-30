import cartService from "../service/cartService";

const readFunc = async (req, res) => {
    try {
        // console.log(req.user);
        let data = await cartService.getAllItemInCart(req.user.userId);
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
        // console.log("checkres", req.user.userId);
        let data = await cartService.addToCart(req.body, req.user.userId);

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
        // console.log(">>> check body", req.body); //check body { productId: 8, quantity: 20,totalPrice: 2044 }
        let data = await cartService.updateCartList(req.body, req.user.userId);
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
        // console.log(req.user.userId);
        let data = await cartService.DeleteItemInCart(
            req.body.id,
            req.user.userId
        );
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

const getPaymentFunc = async (req, res) => {
    try {
        let data = await cartService.getPaymentMethod(req.params);
        // console.log("chec req", req.params); //=> {id: 1}
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
    getPaymentFunc,
};
