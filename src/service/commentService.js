import db from "../models/index";

const { Op } = require("sequelize");

const getAllComments = async (productId) => {
    try {
        let data = await db.Feedback.findAll({
            where: { productId: productId },
            include: [
                {
                    model: db.User,
                    attributes: ["avatar", "username", "createdAt"],
                },
            ],
            order: [["id", "DESC"]],
        });

        // let result = { cartData, cartList };
        if (data) {
            return {
                EM: "get Comments of product success",
                EC: 0,
                DT: data,
            };
        } else {
            return {
                EM: "get Comments of product failed",
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

const addComment = async (commentData, userId) => {
    try {
        const { comment, productId } = commentData;

        if (comment === "" || !comment) {
            return {
                EM: "Comment is Empty, create failed",
                EC: -1,
                DT: "",
            };
        }
        let data = await db.Feedback.create({
            message: comment,
            ProductId: productId,
            UserId: userId,
        });

        if (data) {
            return {
                EM: "Create Comment success",
                EC: 0,
                DT: "",
            };
        } else {
            return {
                EM: "Create Comments failed",
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
const deleteComment = async (commentId) => {
    try {
        if (!commentId) {
            return {
                EM: "Comment id not exists !",
                EC: -1,
                DT: "",
            };
        }
        if (commentId) {
            let comment = await db.Feedback.findOne({
                where: { id: commentId },
            });
            if (comment) {
                await comment.destroy();
                return {
                    EM: "Delete Comment successfully",
                    EC: 0,
                    DT: "",
                };
            } else {
                return {
                    EM: "Delete Comments failed",
                    EC: 2,
                    DT: "",
                };
            }
        } else {
            return {
                EM: "Delete Comments failed",
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

module.exports = {
    getAllComments,
    addComment,
    deleteComment,
};
