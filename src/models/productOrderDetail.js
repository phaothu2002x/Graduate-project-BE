"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product_Order_Detail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Product_Order_Detail.init(
        {
            productId: DataTypes.INTEGER,
            orderDetailId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Product_Order_Detail",
        }
    );
    return Product_Order_Detail;
};
