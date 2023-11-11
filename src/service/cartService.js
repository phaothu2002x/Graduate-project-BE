import db from "../models/index";
const { Op } = require("sequelize");
const getAllItemInCart = async () => {
    try {
        let cartList = await db.Cart.findAll({
            // include: [{ model: db.Product }],
            attributes: ["ProductId", "quantity"],
            order: [["ProductId", "ASC"]],
            raw: true,
        });
        //extract
        const productIds = cartList.map((item) => item.ProductId);
        // console.log("check data", productIds);
        let cartData = await db.Product.findAll({
            where: {
                id: { [Op.in]: productIds },
            },
            attributes: ["id", "thumbnail", "name", "price"],
            // include: [{ model: db.User }],
            nest: true,
            raw: true,
        });
        // console.log("check data", { cartList, cartData });

        let data = cartData.map((object, index) => {
            return { ...object, quantity: cartList[index].quantity };
        });

        // let result = { cartData, cartList };
        if (data) {
            return {
                EM: "get Item in cart success",
                EC: 0,
                DT: data,
            };
        } else {
            return {
                EM: "get Item in cart failed",
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

const addToCart = async (data) => {
    try {
        // check product co trong cart chua=> neu co chi add so luong, neu chua thi add sl + product id
        let checkProductExist = await db.Cart.findOne({
            where: { ProductId: data.productId },
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
        // create;
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

const findItemInCart = async (itemId) => {
    let itemInCartExist = await db.Cart.findOne({
        where: { ProductId: itemId },
    });
    return itemInCartExist;
};

const updateCartList = async (data) => {
    try {
        const { itemId, quantity } = data;
        let check = findItemInCart(itemId);
        if (!check) {
            return {
                EM: "Not found Item ",
                EC: 2,
                DT: "",
            };
        }

        await db.Cart.update({ quantity }, { where: { ProductId: itemId } });

        return {
            EM: "Update Cart OK!",
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
const DeleteItemInCart = async (itemId) => {
    try {
        let itemInCart = await db.Cart.findOne({
            where: { ProductId: itemId },
        });
        // console.log("check item", itemInCart);
        if (itemInCart) {
            await itemInCart.destroy();
            return {
                EM: "delete Item in Cart successfully",
                EC: 0,
                DT: [],
            };
        } else {
            return {
                EM: "Item id not exist",
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

module.exports = {
    getAllItemInCart,
    addToCart,
    updateCartList,
    DeleteItemInCart,
    findProductInCart,
    findAllSelectList,
};
