"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert(
            "Supplier",
            [
                {
                    name: "GearVn",
                    country: "Viet Nam",
                    wholesalePrice: 70,
                },
                {
                    name: "Cherry GmbH",
                    country: "German",
                    wholesalePrice: 62,
                },
                {
                    name: "Amazon",
                    country: "USA",
                    wholesalePrice: 64,
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
