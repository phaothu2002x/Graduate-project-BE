import db from "../models/index";
const { Op } = require("sequelize");
const getAllItemInCart = async () => {
    try {
        let cartList = await db.Cart.findAll({
            // include: [{ model: db.Product }],
            attributes: ["ProductId", "quantity", "totalPrice"],
            order: [["ProductId", "ASC"]],
            raw: true,
        });
        // console.log(cartList);
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
            return {
                ...object,
                quantity: cartList[index].quantity,
                totalPrice: cartList[index].totalPrice,
            };
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

const createOrder = async (data) => {
    try {
        // console.log("checkdata", data);
        let orderInfo;
        const { userValue, totalPriceInCart, productList } = data;
        if (data.userValue && data.totalPriceInCart && data.productList) {
            orderInfo = await db.Order_Info.create({
                name: userValue.name,
                email: userValue.email,
                phone: userValue.phone,
                address: userValue.address,
                note: userValue.note,
                amount: totalPriceInCart,
            });
            //create asociation
            productList.map(async (item) => {
                const data = {
                    productId: item.id,
                    quantity: item.quantity,
                    price: item.price,
                    totalPrice: item.totalPrice,
                };
                const { productId, quantity, price, totalPrice } = data;
                let product = await db.Product.findByPk(productId);
                // console.log(product);
                await orderInfo.addProducts(product, {
                    through: {
                        quantity: quantity,
                        price: price,
                        totalPrice: totalPrice,
                    },
                });
            });
        } else {
            return {
                EM: "missing value from FE!",
                EC: 1,
                DT: [],
            };
        }
        return {
            EM: "Make order successfully!",
            EC: 0,
            DT: [],
        };
        //check postman
        // let postman = await db.Order_Info.findAll({
        //     where: { id: 10 },
        //     include: [
        //         {
        //             model: db.Product,
        //             through: {
        //                 attributes: [],
        //             },
        //         },
        //     ],
        // });
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
        const { itemId, quantity, totalPrice } = data;
        let check = findItemInCart(itemId);
        if (!check) {
            return {
                EM: "Not found Item ",
                EC: 2,
                DT: "",
            };
        }

        await db.Cart.update(
            { quantity, totalPrice },
            { where: { ProductId: itemId } }
        );

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
    createOrder,
    updateCartList,
    DeleteItemInCart,
    findProductInCart,
    findAllSelectList,
};
