"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("Product", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            thumbnail: {
                type: Sequelize.TEXT,
            },
            name: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.TEXT,
            },
            brandId: {
                type: Sequelize.INTEGER,
            },
            productPriceId: {
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("Product");
    },
};
