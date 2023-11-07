import db from "../models/index";
import {
    checkPhoneExist,
    checkEmailExist,
    hashUserPassword,
} from "./loginRegisterService";
const getAllUser = async () => {
    try {
        let users = await db.User.findAll({
            attributes: ["id", "username", "email", "phone"],
            include: { model: db.Role, attributes: ["id", "name", "url"] },
        });

        if (users) {
            return {
                EM: "get data success",
                EC: 0,
                DT: users,
            };
        } else {
            return {
                EM: "get data failed",
                EC: 1,
                DT: [],
            };
        }
    } catch (error) {
        console.log(error);
        return {
            EM: "something wrong with services",
            EC: 1,
            DT: [],
        };
    }
};

const getUserWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;

        const { count, rows } = await db.User.findAndCountAll({
            attributes: ["id", "username", "email", "phone"],
            include: { model: db.Role, attributes: ["id", "name", "url"] },
            order: [["id", "DESC"]],
            offset: offset,
            limit: limit,
        });

        let totalPages = Math.ceil(count / limit);
        let data = {
            totalRow: count,
            totalPages: totalPages,
            users: rows,
        };
        return {
            EM: "get pagination success",
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

const createUser = async (data) => {
    try {
        //check email, phone, hashpasss
        let isEmailExist = await checkEmailExist(data.email);
        if (isEmailExist == true) {
            return {
                EM: "Email is already exist",
                EC: 1,
                DT: "email",
            };
        }
        let isPhoneExist = await checkPhoneExist(data.phone);
        if (isPhoneExist == true) {
            return {
                EM: "Phone is already exist",
                EC: 1,
                DT: "phone",
            };
        }

        let hashPassword = hashUserPassword(data.password);

        //create
        await db.User.create({ ...data, password: hashPassword });
        return {
            EM: "create Ok!",
            EC: 0,
            DT: [],
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
const updateUser = async (data) => {
    try {
        if (!data.roleId) {
            return {
                EM: "Error with empty roleId ",
                EC: 1,
                DT: "role",
            };
        }
        let user = await db.User.findOne({
            where: { id: data.id },
        });
        if (user) {
            await user.update({
                username: data.username,
                roleId: data.roleId,
            });
            return {
                EM: "Update OK!",
                EC: 0,
                DT: "",
            };
        } else {
            return {
                EM: "Not found user ",
                EC: 2,
                DT: "",
            };
        }
    } catch (error) {
        console.log(error);
        return {
            EM: "something wrong with services",
            EC: 1,
            DT: [],
        };
    }
};
const DeleteUser = async (id) => {
    try {
        let user = await db.User.findOne({
            where: { id: id },
        });

        if (user) {
            await user.destroy();

            return {
                EM: "delete user success",
                EC: 0,
                DT: [],
            };
        } else {
            return {
                EM: "User not exist",
                EC: 2,
                DT: [],
            };
        }
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
    getAllUser,
    createUser,
    updateUser,
    DeleteUser,
    getUserWithPagination,
};
