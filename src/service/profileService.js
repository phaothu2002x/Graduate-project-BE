import db from "../models/index";
const { Op } = require("sequelize");
import { v2 as cloudinary } from "cloudinary";

const findUserInDb = async (userId) => {
    let isUserExist = await db.User.findOne({
        where: { id: userId },
    });
    return isUserExist;
};

const updateUserProfile = async (userData, file) => {
    try {
        const { userId, username, email, phone } = userData;
        let check = await findUserInDb(userId);
        if (!check) {
            if (file) {
                cloudinary.uploader.destroy(file.filename);
            }
            return {
                EM: "Not found user to update ",
                EC: 2,
                DT: "",
            };
        }
        if (!file) {
            await db.User.update(
                { username, email, phone },
                { where: { id: userId } }
            );
            return {
                EM: "Update User OK!",
                EC: 0,
                DT: "",
            };
        }

        await db.User.update(
            { username, email, phone, avatar: file.path },
            { where: { id: userId } }
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
