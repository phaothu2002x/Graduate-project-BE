import db from "../models/index";

const getAllRole = async () => {
    try {
        let data = await db.Group.findAll({
            order: [["name", "ASC"]],
        });

        return {
            EM: "get group ok",
            EC: 0,
            DT: data,
        };
    } catch (error) {
        console.log(error);
        return {
            EM: "something wrong with services",
            EC: 1,
            DT: [],
        };
    }
};

module.exports = {
    getAllRole,
};
