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
            "Brand",
            [
                {
                    name: "Corsair",
                    description: "High quality products from California",
                },
                {
                    name: "Akko",
                    description: "Affordable products from China",
                },
                {
                    name: "Logitech",
                    description:
                        "Logitech is a famous Swiss brand with headquarters located in the city of Lausanne, Switzerland",
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
