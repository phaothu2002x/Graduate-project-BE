import db from "../models/index";

const getRole = async () => {
    try {
        let data = await db.Role.findAll({
            order: [["name", "ASC"]],
        });

        return {
            EM: "get role ok",
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
    getRole,
};
