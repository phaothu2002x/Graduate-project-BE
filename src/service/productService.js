import db from "../models/index";

const getAllProduct = async () => {
    try {
        let products = await db.Product.findAll({
            attributes: ["id", "thumbnail", "name", "description"],
            include: {
                model: db.Product_Price,
                attributes: ["price", "discountPrice"],
            },
        });

        if (products) {
            return {
                EM: "get data success",
                EC: 0,
                DT: products,
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

const getProductWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;

        const { count, rows } = await db.Product.findAndCountAll({
            attributes: ["id", "thumbnail", "name", "description"],
            include: {
                model: db.Product_Price,
                attributes: ["price", "discountPrice"],
            },
            order: [["id", "ASC"]],
            offset: offset,
            limit: limit,
        });

        let totalPages = Math.ceil(count / limit);
        let data = {
            totalRow: count,
            totalPages: totalPages,
            product: rows,
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
const DeleteProduct = async (id) => {
    try {
        let product = await db.Product.findOne({
            where: { id: id },
        });

        if (product) {
            await product.destroy();

            return {
                EM: "delete product successfully",
                EC: 0,
                DT: [],
            };
        } else {
            return {
                EM: "Product id not exist",
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
    getAllProduct,
    getProductWithPagination,
    createUser,
    updateUser,
    DeleteProduct,
};
