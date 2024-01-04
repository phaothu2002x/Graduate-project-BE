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
            "Group_Role",
            [
                {
                    GroupId: 1,
                    RoleId: 1,
                },
                {
                    GroupId: 1,
                    RoleId: 2,
                },
                {
                    GroupId: 1,
                    RoleId: 3,
                },
                {
                    GroupId: 1,
                    RoleId: 4,
                },
                {
                    GroupId: 1,
                    RoleId: 5,
                },
                {
                    GroupId: 1,
                    RoleId: 6,
                },
                {
                    GroupId: 1,
                    RoleId: 7,
                },
                {
                    GroupId: 1,
                    RoleId: 8,
                },
                {
                    GroupId: 1,
                    RoleId: 9,
                },
                {
                    GroupId: 1,
                    RoleId: 10,
                },
                {
                    GroupId: 1,
                    RoleId: 11,
                },
                {
                    GroupId: 1,
                    RoleId: 12,
                },
                {
                    GroupId: 1,
                    RoleId: 13,
                },
                {
                    GroupId: 1,
                    RoleId: 14,
                },
                {
                    GroupId: 1,
                    RoleId: 15,
                },
                {
                    GroupId: 1,
                    RoleId: 16,
                },
                {
                    GroupId: 1,
                    RoleId: 17,
                },
                {
                    GroupId: 1,
                    RoleId: 18,
                },
                {
                    GroupId: 1,
                    RoleId: 19,
                },
                {
                    GroupId: 1,
                    RoleId: 20,
                },
                {
                    GroupId: 1,
                    RoleId: 21,
                },
                {
                    GroupId: 1,
                    RoleId: 22,
                },
                {
                    GroupId: 1,
                    RoleId: 23,
                },
                {
                    GroupId: 1,
                    RoleId: 24,
                },
                {
                    GroupId: 1,
                    RoleId: 25,
                },
                {
                    GroupId: 1,
                    RoleId: 26,
                },
                {
                    GroupId: 1,
                    RoleId: 27,
                },
                {
                    GroupId: 1,
                    RoleId: 28,
                },
                {
                    GroupId: 1,
                    RoleId: 29,
                },
                {
                    GroupId: 1,
                    RoleId: 30,
                },
                {
                    GroupId: 1,
                    RoleId: 31,
                },
                {
                    GroupId: 1,
                    RoleId: 32,
                },
                {
                    GroupId: 1,
                    RoleId: 33,
                },
                {
                    GroupId: 2,
                    RoleId: 6,
                },
                {
                    GroupId: 2,
                    RoleId: 7,
                },
                {
                    GroupId: 2,
                    RoleId: 8,
                },
                {
                    GroupId: 2,
                    RoleId: 9,
                },
                {
                    GroupId: 2,
                    RoleId: 11,
                },
                {
                    GroupId: 2,
                    RoleId: 22,
                },
                {
                    GroupId: 2,
                    RoleId: 23,
                },
                {
                    GroupId: 2,
                    RoleId: 24,
                },
                {
                    GroupId: 2,
                    RoleId: 25,
                },
                {
                    GroupId: 2,
                    RoleId: 26,
                },
                {
                    GroupId: 2,
                    RoleId: 27,
                },
                {
                    GroupId: 2,
                    RoleId: 28,
                },
                {
                    GroupId: 2,
                    RoleId: 29,
                },
                {
                    GroupId: 2,
                    RoleId: 30,
                },
                {
                    GroupId: 2,
                    RoleId: 31,
                },
                {
                    GroupId: 2,
                    RoleId: 32,
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
