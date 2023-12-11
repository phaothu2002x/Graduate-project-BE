import searchService from "../service/searchService";

const searchFunc = async (req, res) => {
    try {
        // console.log("check params ", req.query);
        let page = req.query.page;
        let limit = req.query.limit;
        let data = await searchService.searchProduct(req.query, +page, +limit);
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
const filterFunc = async (req, res) => {
    try {
        // console.log("check params ", req.query);
        let page = req.query.page;
        let limit = req.query.limit;
        let data = await searchService.filterProduct(req.query, +page, +limit);
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

module.exports = {
    searchFunc,
    filterFunc,
};
