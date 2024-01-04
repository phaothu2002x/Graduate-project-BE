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
            "User",
            [
                {
                    username: "admin",
                    email: "admin@gmail.com",
                    phone: "admin",
                    password:
                        "$2a$10$s6Sag75gvsM8gswlqdb0deN1uaSeHV9.2vnCj3ZP.7hP0gF4uA1va",
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
