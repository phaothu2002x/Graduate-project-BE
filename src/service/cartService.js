import db from "../models/index";
import { findUserInDb } from "./profileService";
const { Op } = require("sequelize");

const getAllItemInCart = async (userId) => {
    try {
        let cartList = await db.Cart.findAll({
            // include: [{ model: db.Product }],
            attributes: ["ProductId", "quantity", "totalPrice"],
            order: [["ProductId", "ASC"]],
            raw: true,
            where: { userId: userId },
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

const addToCart = async (data, userId) => {
    try {
        //kiem tra thang user co ton tai ko ? step 1;
        let check = await findUserInDb(userId);
        if (!check) {
            return {
                EM: "Not found user ",
                EC: 2,
                DT: "",
            };
        }
        //step 2: tim tat ca cac san pham cua thang user do

        // check product co trong cart chua=> neu co chi add so luong, neu chua thi add sl + product id
        let checkProductExist = await db.Cart.findOne({
            where: { ProductId: data.productId, UserId: userId },
        });
        // console.log(checkProductExist);

        if (checkProductExist) {
            await db.Cart.update(
                {
                    quantity: data.quantity + checkProductExist.quantity,
                    totalPrice:
                        data.price * data.quantity +
                        checkProductExist.totalPrice,
                },
                {
                    where: {
                        ProductId: data.productId,
                        UserId: userId,
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
            UserId: userId,
            quantity: data.quantity,
            totalPrice: data.quantity * data.price,
        });

        //create association
        return {
            EM: "Add to Cart Ok!",
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

const findItemInUserCart = async (itemId, userId) => {
    let itemInCartExist = await db.Cart.findOne({
        where: { ProductId: itemId, UserId: userId },
    });
    return itemInCartExist;
};

const updateCartList = async (data, userId) => {
    try {
        const { itemId, quantity, totalPrice } = data;
        let check = findItemInUserCart(itemId, userId);
        if (!check) {
            return {
                EM: "Not found Item ",
                EC: 2,
                DT: "",
            };
        }

        await db.Cart.update(
            { quantity, totalPrice },
            { where: { ProductId: itemId, UserId: userId } }
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
const DeleteItemInCart = async (itemId, userId) => {
    try {
        let itemInCart = await db.Cart.findOne({
            where: { ProductId: itemId, UserId: userId },
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

const clearCart = async (userId) => {
    try {
        if (userId) {
            await db.Cart.destroy({ where: { UserId: userId } });
            return {
                EM: "clear all Item in Cart successfully",
                EC: 0,
                DT: [],
            };
        } else {
            return {
                EM: "clear failed in service",
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

const getPaymentMethod = async (data) => {
    try {
        let payment = await db.Payment_Method.findAll({
            where: { id: data.id },
            attributes: ["name", "description", "img"],
        });

        if (payment && payment.length > 0) {
            return {
                EM: "Find payment methods OK!",
                EC: 0,
                DT: payment,
            };
        } else {
            return {
                EM: "not found Payment Method!",
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
    clearCart,
    getPaymentMethod,
};
