"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Supplier extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Supplier.belongsToMany(models.Product, {
                through: "Product_Supplier",
            });
        }
    }
    Supplier.init(
        {
            name: DataTypes.STRING,
            country: DataTypes.STRING,
            wholesalePrice: DataTypes.FLOAT,
        },
        {
            sequelize,
            modelName: "Supplier",
        }
    );
    return Supplier;
};
