import db from "../models/index";

const getAllProduct = async () => {
    try {
        let products = await db.Product.findAll({
            attributes: [
                "id",
                "thumbnail",
                "name",
                "description",
                "price",
                "code",
            ],
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
            attributes: [
                "id",
                "thumbnail",
                "name",
                "description",
                "price",
                "code",
            ],

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

const createProduct = async (data) => {
    try {
        const {
            thumbnail,
            name,
            description,
            price,
            code,
            brandChecked,
            cateChecked,
            supChecked,
        } = data;
        //check product code

        //create
        await db.Product.create({
            name,
            thumbnail,
            description,
            price,
            code,
            brandId: brandChecked,
            categoryId: cateChecked,
        });
        //create link to supplier
        let productRow = await db.Product.findOne({
            order: [["id", "DESC"]],
            raw: true,
        });

        await db.Product_Supplier.create({
            ProductId: productRow.id,
            SupplierId: +supChecked,
        });
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
    createProduct,
    updateUser,
    DeleteProduct,
};
