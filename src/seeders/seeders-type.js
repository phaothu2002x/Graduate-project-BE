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
            "Type",
            [
                {
                    name: "Gamings",
                    description:
                        "The Power of Gaming: Building Skills and Community in the Digital Realm",
                    CategoryId: 1,
                },
                {
                    name: "Mechanical",
                    description:
                        "Mechanical Keyboards: Elevate Your Typing Experience to New Heights.",
                    CategoryId: 1,
                },
                {
                    name: "Wireless",
                    description: "Cut the Cords, Embrace Freedom!",
                    CategoryId: 1,
                },
                {
                    name: "OEM",
                    description:
                        "Its national status has covered the mechanical keyboard market for a long time.",
                    CategoryId: 2,
                },
                {
                    name: "Cherry",
                    description:
                        "The Cherry profile keycap has a curvature on the key surface that is almost identical to the OEM, but is shorter. The slope has also been adjusted to match the shortness of the keycap.",
                    CategoryId: 2,
                },
                {
                    name: "DSA",
                    description:
                        "It has many similarities with SA in that the keycap surface is concave, not just curved, and the keycap's edges are also slightly curved, not straight like OEM or Cherry.",
                    CategoryId: 2,
                },
                {
                    name: "Clicky",
                    description:
                        "Clicky Switches: Where Every Keystroke Sings with Precision, Bringing a Symphony of Tactile Satisfaction to Your Fingertips",
                    CategoryId: 3,
                },
                {
                    name: "Linear",
                    description:
                        "Linear Switches: A Seamless Journey Through Every Key, Where Smooth Precision Meets Silent Excellence.",
                    CategoryId: 3,
                },
                {
                    name: "Tactile",
                    description:
                        "Tactile Switches: Where Your Fingers Dance to the Rhythm of Responsive Precision.",
                    CategoryId: 3,
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
