"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Promotion extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Promotion.belongsToMany(models.Product, {
                through: "Product_Promotion",
            });
        }
    }
    Promotion.init(
        {
            description: DataTypes.TEXT,
            value: DataTypes.INTEGER,
            startAt: DataTypes.DATE,
            expireAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "Promotion",
        }
    );
    return Promotion;
};
