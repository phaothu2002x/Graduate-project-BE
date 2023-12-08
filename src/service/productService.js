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
            distinct: true,
            order: [["id", "DESC"]],
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

const createProduct = async (data, imageObj) => {
    try {
        const {
            name,
            description,
            price,
            code,
            brandChecked,
            cateChecked,
            supChecked,
            typeSelect,
        } = data;

        const { thumb, galleryList } = imageObj;
        const galleryUrl = galleryList.map((item) => ({ url: item.path }));

        // check product code
        // create
        let product = await db.Product.create({
            name,
            thumbnail: thumb[0].path,
            description,
            price,
            code,
            BrandId: brandChecked,
            CategoryId: cateChecked,
        });
        let galleryData = await db.Product_Gallery.bulkCreate(galleryUrl);
        //test

        //add association of type,  supplier
        let type = await db.Type.findAll({
            where: { id: typeSelect },
        });
        // console.log("check type", type);
        let supplier = await db.Supplier.findOne({
            where: { id: supChecked },
        });
        if (!type || !supplier) {
            return {
                EM: "something wrong when query data in services",
                EC: 2,
                DT: [],
            };
        }

        await product.addProduct_Galleries(galleryData);
        await product.addSupplier(supplier);
        await product.addTypes(type);
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

const findProductById = async (productId) => {
    try {
        let product = await db.Product.findOne({
            where: { id: productId },
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
                { model: db.Product_Gallery },
            ],
        });
        if (product) {
            return {
                EM: "Find OK!",
                EC: 0,
                DT: product,
            };
        } else {
            return {
                EM: "not found product!",
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

const updateProduct = async (productItem, updateData) => {
    try {
        if (!productItem) {
            return {
                EM: "Not found user ",
                EC: 2,
                DT: "",
            };
        }
        const { typeChecked, categoryChecked, galleryValue } = updateData;
        await productItem.update({
            name: updateData.name,
            thumbnail: updateData.thumbnail,
            price: updateData.price,
            description: updateData.description,
            code: updateData.code,
            BrandId: updateData.brandChecked,
            CategoryId: updateData.categoryChecked,
        });
        //find product gallery
        galleryValue.map(async (item) => {
            await db.Product_Gallery.update(
                { url: item.url },
                {
                    where: { ProductId: productItem.id, id: item.id },
                }
            );
        });
        // //update cais association
        productItem.setSuppliers(categoryChecked);
        productItem.setTypes(typeChecked);
        return {
            EM: "Update OK!",
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

const findAllSelectList = async () => {
    try {
        let selectList = {};
        let brandList = await db.Brand.findAll();
        let categoryList = await db.Category.findAll();
        let supplierList = await db.Supplier.findAll(); // if nothing=> return []
        selectList.brand = brandList;
        selectList.category = categoryList;
        selectList.supplier = supplierList;

        if (selectList) {
            return {
                EM: "Select list OK!",
                EC: 0,
                DT: selectList,
            };
        } else {
            return {
                EM: "not found Select List!",
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

const findTypeThroughCate = async (CategoryId) => {
    try {
        let typeList = await db.Type.findAll({
            include: { model: db.Category, where: { id: CategoryId } },
        });
        if (typeList && typeList.length > 0) {
            return {
                EM: "Type list fetch OK!",
                EC: 0,
                DT: typeList,
            };
        } else {
            return {
                EM: "not found Type List!",
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
const relatedProducts = async (CategoryId) => {
    try {
        let data = await db.Product.findAll({
            where: { CategoryId: CategoryId },
            attributes: [
                "id",
                "thumbnail",
                "name",
                "description",
                "price",
                "code",
            ],
            order: [["id", "ASC"]],
        });
        if (data) {
            return {
                EM: "find suggestion OK!",
                EC: 0,
                DT: data,
            };
        } else {
            return {
                EM: "not found any suggestion List!",
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

module.exports = {
    getAllProduct,
    getProductWithPagination,
    createProduct,
    updateProduct,
    DeleteProduct,
    findProductById,
    findAllSelectList,
    findTypeThroughCate,
    relatedProducts,
};
