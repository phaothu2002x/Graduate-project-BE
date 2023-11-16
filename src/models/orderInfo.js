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

            // Order_Info.hasOne(models.Cart, { foreignKey: "OrderInfoId" });

            Order_Info.belongsTo(models.User);

            Order_Info.belongsToMany(models.Payment_Method, {
                through: "Order_Payment",
            });

            Order_Info.belongsToMany(models.Product, {
                through: "Order_Detail",
            });
            // Order_Info.belongsToMany(models.Product, {
            //     through: "Cart",
            // });
        }
    }
    Order_Info.init(
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            address: DataTypes.STRING,
            phone: DataTypes.STRING,
            note: DataTypes.TEXT,
            amount: DataTypes.FLOAT,
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
