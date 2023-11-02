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
            Product.hasMany(models.Order_Detail, { foreignKey: "ProductId" });
            Product.hasMany(models.Feedback);

            Product.belongsTo(models.Brand);
            Product.belongsTo(models.Category);

            Product.belongsToMany(models.Promotion, {
                through: "Product_Promotion",
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
            price: DataTypes.FLOAT,
            code: DataTypes.STRING,
            BrandId: DataTypes.INTEGER,
            CategoryId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
