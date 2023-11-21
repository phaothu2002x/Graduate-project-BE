import db from "../models/index";
const { Op } = require("sequelize");

const findUserInDb = async (userId) => {
    let isUserExist = await db.User.findOne({
        where: { id: userId },
    });
    return isUserExist;
};

const updateUserProfile = async (userData, file) => {
    try {
        const { username, email, phone } = userData;
        const { path } = file;
        // let check = findUserInDb(itemId);
        // if (!check) {
        //     return {
        //         EM: "Not found Item ",
        //         EC: 2,
        //         DT: "",
        //     };
        // }

        await db.User.update(
            { username, email, phone, avatar: path },
            { where: { id: 1 } }
        );

        return {
            EM: "Update User OK!",
            EC: 0,
            DT: "",
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

module.exports = { updateUserProfile };
