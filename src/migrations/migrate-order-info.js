"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("Order_Info", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            email: {
                type: Sequelize.STRING,
            },
            phone: {
                type: Sequelize.STRING,
            },
            address: {
                type: Sequelize.STRING,
            },
            orderDate: {
                type: Sequelize.DATE,
            },
            paymentMethod: {
                type: Sequelize.STRING,
            },
            status: {
                type: Sequelize.STRING,
            },
            userId: {
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
        await queryInterface.dropTable("Order_Info");
    },
};
