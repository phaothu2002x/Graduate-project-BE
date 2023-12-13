import db from "../models/index";
import { Op } from "sequelize";

const searchProduct = async (rawData, page, limit) => {
    try {
        const { q, order } = rawData;

        let offset = (page - 1) * limit;
        const { count, rows } = await db.Product.findAndCountAll({
            where: {
                name: {
                    [Op.like]: `%${q}%`,
                },
            },
            include: [
                {
                    model: db.Supplier,
                    through: {
                        attributes: [],
                    },
                },
                { model: db.Brand },
                { model: db.Category },
                {
                    model: db.Type,
                    through: {
                        attributes: [],
                    },
                },
            ],
            order: [["id", `${order === "1" ? "DESC" : "ASC"}`]],
            distinct: true,
            offset: offset,
            limit: limit,
        });

        let totalPages = Math.ceil(count / limit);
        let data = {
            totalRow: count,
            totalPages: totalPages,
            product: rows,
        };
        if (data && data.product.length > 0) {
            return {
                EM: "search Product success",
                EC: 0,
                DT: data,
            };
        } else {
            return {
                EM: "There No Products...",
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

const filterProduct = async (rawData, page, limit) => {
    try {
        // const associations = db.Product.associations;
        // console.log(associations);
        const { category, brand } = rawData;
        // console.log(category, brand);
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
            where: {
                "$Category.id$": { [Op.in]: category },
                "$Brand.id$": { [Op.eq]: brand },
            },

            include: [
                { model: db.Brand },
                { model: db.Category },
                {
                    model: db.Supplier,
                    through: {
                        attributes: [],
                    },
                },
                {
                    model: db.Type,
                    through: {
                        attributes: [],
                    },
                },
            ],

            // include: include,

            order: [["id", "DESC"]],
            distinct: true,
            offset: offset,
            limit: rows, //fix tam viec click trang refresh
        });

        let totalPages = Math.ceil(count / limit);
        let data = {
            totalRow: count,
            totalPages: totalPages,
            product: rows,
        };

        if (data) {
            return {
                EM: "filter Product success",
                EC: 0,
                DT: data,
            };
        } else {
            return {
                EM: "There No Products...",
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

module.exports = { searchProduct, filterProduct };
