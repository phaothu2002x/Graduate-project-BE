import productService from "../service/productService";

const readFunc = async (req, res) => {
    try {
        if (req.query.page && req.query.limit) {
            let page = req.query.page;
            let limit = req.query.limit;
            let data = await productService.getProductWithPagination(
                +page,
                +limit
            );
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT,
            });
        } else {
            let data = await productService.getAllProduct();
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT,
            });
        }
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
        // console.log("check file", req.files); //ok
        // console.log("check data", req.body);
        let data = await productService.createProduct(req.body, req.files);
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

const findFunc = async (req, res) => {
    try {
        let data = await productService.findProductById(req.params.id);
        // console.log("check find product", data); //=> find thanh cong
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
const findTypeFunc = async (req, res) => {
    try {
        // console.log("check id", req.params.id);
        let data = await productService.findTypeThroughCate(req.params.id);
        // console.log("check find product", data); //=> find thanh cong
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
        // console.log(">>> check body", req.body); //ok
        //find productbyid
        let productItem = await productService.findProductById(req.body.id);
        let data = await productService.updateProduct(productItem.DT, req.body);
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
        let data = await productService.DeleteProduct(req.body.id);
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

const findSelectFunc = async (req, res) => {
    try {
        let data = await productService.findAllSelectList();
        // console.log("check find product", data); //=> find thanh cong
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

const findSuggestion = async (req, res) => {
    try {
        // console.log("check id", req.query);
        let data = await productService.relatedProducts(req.query.id);
        // console.log("check find product", data); //=> find thanh cong
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
    findFunc,
    findSelectFunc,
    findTypeFunc,
    findSuggestion,
};
