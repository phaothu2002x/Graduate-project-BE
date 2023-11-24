"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.hasMany(models.Order_Info, { foreignKey: "UserId" });
            User.belongsTo(models.Group);

            User.hasMany(models.Feedback);
            User.belongsToMany(models.Product, {
                through: "Cart",
            });
        }
    }
    User.init(
        {
            avatar: DataTypes.TEXT,
            username: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            password: DataTypes.STRING,
            GroupId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "User",
        }
    );
    return User;
};
