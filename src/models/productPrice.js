"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product_Price extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Product_Price.hasMany(models.Product);
        }
    }
    Product_Price.init(
        {
            price: DataTypes.FLOAT,
            discountPrice: DataTypes.FLOAT,
        },
        {
            sequelize,
            modelName: "Product_Price",
        }
    );
    return Product_Price;
};
