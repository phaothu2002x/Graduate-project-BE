"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Payment_Method extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Payment_Method.belongsToMany(models.Order_Info, {
                through: "Order_Payment",
            });
        }
    }
    Payment_Method.init(
        {
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            img: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: "Payment_Method",
        }
    );
    return Payment_Method;
};
