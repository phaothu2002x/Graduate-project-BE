import db from "../models/index";

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
                EM: "get data success",
                EC: 0,
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
        let user = await db.User.create({});
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
        let user = await db.User.findOne({
            where: { id: data.id },
        });
        if (user) {
            user.save({});
        } else {
            return {
                EM: "Not found user ",
                EC: "1",
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
        let user = await db.User.delete({
            where: { id: data.id },
        });

        return {
            EM: "Not found user ",
            EC: "1",
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

module.exports = {
    getAllUser,
    createUser,
    updateUser,
    DeleteUser,
    getUserWithPagination,
};
