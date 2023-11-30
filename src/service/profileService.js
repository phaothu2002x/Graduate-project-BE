import db from "../models/index";
const { Op } = require("sequelize");
import { v2 as cloudinary } from "cloudinary";
import { getGroupWithRole } from "./JWTService";

const findUserInDb = async (userId) => {
    let isUserExist = await db.User.findOne({
        where: { id: userId },
    });
    return isUserExist;
};

const getCurrentUser = async (userId, token) => {
    let check = await findUserInDb(userId);
    if (!check) {
        return {
            EM: "Not found user ",
            EC: 2,
            DT: "",
        };
    }
    let currentUser = await db.User.findOne({
        where: { id: userId },
        attributes: ["id", "username", "avatar", "phone", "email", "GroupId"],
    });
    let groupWithRole = await getGroupWithRole(currentUser);
    // console.log(groupWithRole);

    let data = { currentUser, groupWithRole, token };
    return {
        EM: "Find User OK!",
        EC: 0,
        DT: data,
    };
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

module.exports = { updateUserProfile, getCurrentUser, findUserInDb };
