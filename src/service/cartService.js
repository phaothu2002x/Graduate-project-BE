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

const addToCart = async (data) => {
    try {
        // check product co trong cart chua=> neu co chi add so luong, neu chua thi add sl + product id
        let checkProductExist = await db.Cart.findOne({
            where: { ProductId: data.productId },
            raw: true,
        });

        if (checkProductExist) {
            await db.Cart.update(
                {
                    quantity: data.quantity + checkProductExist.quantity,
                },
                {
                    where: {
                        ProductId: data.productId,
                    },
                }
            );

            return {
                EM: "update Ok!",
                EC: 0,
                DT: [],
            };
        }
        // create
        await db.Cart.create({
            ProductId: data.productId,
            quantity: data.quantity,
        });
        //create association

        return {
            EM: "add Ok!",
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

const findProductInCart = async (productId) => {
    try {
        let productExist = await db.Cart.findOne({
            where: { ProductId: productId },
        });
        if (productExist) {
            return {
                EM: "Find OK!",
                EC: 0,
                DT: [],
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

const updateCartList = async (productItem, updateData) => {
    try {
        if (!productItem) {
            return {
                EM: "Not found user ",
                EC: 2,
                DT: "",
            };
        }
        const { typeChecked, categoryChecked } = updateData;

        await productItem.update({
            name: updateData.name,
            thumbnail: updateData.thumbnail,
            price: updateData.price,
            description: updateData.description,
            code: updateData.code,
            BrandId: updateData.brandChecked,
            CategoryId: updateData.categoryChecked,
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

module.exports = {
    getAllProduct,
    getProductWithPagination,
    addToCart,
    updateCartList,
    DeleteProduct,
    findProductInCart,
    findAllSelectList,
    findTypeThroughCate,
};
