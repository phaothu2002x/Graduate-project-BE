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
            "Category",
            [
                {
                    name: "Keyboards",
                    description: "Everything for Keyboards",
                },
                {
                    name: "KeyCaps",
                    description: "Everything for KeyCaps",
                },
                {
                    name: "Switches",
                    description: "Everything for Switches",
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
