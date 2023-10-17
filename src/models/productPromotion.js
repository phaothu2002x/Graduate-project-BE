"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product_Promotion extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Product_Promotion.init(
        {
            productId: DataTypes.INTEGER,
            promotionId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Product_Promotion",
        }
    );
    return Product_Promotion;
};
