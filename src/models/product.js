"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Product.init(
        {
            thumbnail: DataTypes.TEXT,
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
            brandId: DataTypes.INTEGER,
            productPriceId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
