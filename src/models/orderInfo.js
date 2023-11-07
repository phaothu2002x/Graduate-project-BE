"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order_Info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Order_Info.hasMany(models.Order_Detail, { foreignKey: "OrderId" });
            Order_Info.belongsTo(models.User);
        }
    }
    Order_Info.init(
        {
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            address: DataTypes.STRING,
            orderDate: DataTypes.DATE,
            paymentMethod: DataTypes.STRING,
            status: DataTypes.STRING,
            UserId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Order_Info",
        }
    );
    return Order_Info;
};
