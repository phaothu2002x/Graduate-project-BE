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
            "Payment_Method",
            [
                {
                    name: "MoMo",
                    img: "https://res.cloudinary.com/dxpisdy2r/image/upload/f_auto,q_auto/v1/graduate-project/tgxcpge0fyiaxejffusz",
                    description: "Phone: 0931432221 - Truong Vu Thuan",
                },
                {
                    name: "COD",
                    img: "https://clipground.com/images/cash-on-delivery-png-2.png",
                    description: "Cash on Delivery",
                },
                {
                    name: "Banking",
                    img: "https://res.cloudinary.com/dxpisdy2r/image/upload/f_auto,q_auto/v1/graduate-project/w3mmvrlncri1tucofx6c",
                    description: `Card Information:
                    Sacombank-079202028871-Truong Vu Thuan`,
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
