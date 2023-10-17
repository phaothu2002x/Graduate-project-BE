"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order_Detail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Order_Detail.init(
        {
            name: DataTypes.STRING,
            quantity: DataTypes.INTEGER,
            price: DataTypes.FLOAT,
            total: DataTypes.FLOAT,
            subtotal: DataTypes.FLOAT,
            orderId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Order_Detail",
        }
    );
    return Order_Detail;
};
