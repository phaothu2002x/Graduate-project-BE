"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order_Payment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Order_Payment.init(
        {
            OrderInfoId: DataTypes.INTEGER,
            PaymentMethodId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Order_Payment",
        }
    );
    return Order_Payment;
};
