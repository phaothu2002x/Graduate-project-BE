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
            Product.hasMany(models.Order_Detail);
            Product.belongsTo(models.Brand);
            Product.belongsTo(models.Product_Price);
            Product.belongsToMany(models.Category, {
                through: "Product_Category",
            });
            Product.belongsToMany(models.Promotion, {
                through: "Product_Promotion",
            });
            Product.belongsToMany(models.Type, {
                through: "Product_Type",
            });
            Product.belongsToMany(models.Supplier, {
                through: "Product_Supplier",
            });
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
