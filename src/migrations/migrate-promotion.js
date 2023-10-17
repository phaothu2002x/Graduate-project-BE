"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("Promotion", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            description: {
                type: Sequelize.STRING,
            },
            value: {
                type: Sequelize.INTEGER,
            },
            startAt: {
                type: Sequelize.DATE,
            },
            expireAt: {
                type: Sequelize.DATE,
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
        await queryInterface.dropTable("Promotion");
    },
};
