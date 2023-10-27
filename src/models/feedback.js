"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Feedback extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Feedback.init(
        {
            rating: DataTypes.FLOAT,
            message: DataTypes.TEXT,
            productId: DataTypes.INTEGER,
            userId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Feedback",
        }
    );
    return Feedback;
};