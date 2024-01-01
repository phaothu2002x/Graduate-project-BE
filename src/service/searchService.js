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
            limit: rows,
        });

        // let totalPages = Math.ceil(count / limit);
        let data = {
            totalRow: count,
            totalPages: 1,
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
        //check category vs brand
        let whereClause = {};

        if (category && category.length > 0 && brand !== "0") {
            whereClause = {
                "$Category.id$": { [Op.in]: category },
                "$Brand.id$": { [Op.eq]: brand },
            };
        } else if (category && category.length > 0 && brand === "0") {
            whereClause = { "$Category.id$": { [Op.in]: category } };
        } else if (brand !== "0" && !category) {
            whereClause = { "$Brand.id$": { [Op.eq]: brand } };
        } else if (!category && brand === "0") {
            whereClause = {};
        }

        // console.log(whereClause);

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
            where: whereClause,

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

        // let totalPages = Math.ceil(count / limit);
        let data = {
            totalRow: count,
            totalPages: 1,
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
