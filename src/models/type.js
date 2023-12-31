"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Type extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Type.belongsTo(models.Category);
            Type.belongsToMany(models.Product, {
                through: "Product_Type",
            });
        }
    }
    Type.init(
        {
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            CategoryId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Type",
        }
    );
    return Type;
};
