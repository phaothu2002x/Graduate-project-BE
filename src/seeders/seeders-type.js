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
                },
                {
                    name: "Mechanical",
                    description:
                        "Mechanical Keyboards: Elevate Your Typing Experience to New Heights.",
                },
                {
                    name: "Wireless",
                    description: "Cut the Cords, Embrace Freedom!",
                },
                {
                    name: "OEM",
                    description:
                        "Its national status has covered the mechanical keyboard market for a long time.",
                },
                {
                    name: "Cherry",
                    description:
                        "The Cherry profile keycap has a curvature on the key surface that is almost identical to the OEM, but is shorter. The slope has also been adjusted to match the shortness of the keycap.",
                },
                {
                    name: "DSA",
                    description:
                        "It has many similarities with SA in that the keycap surface is concave, not just curved, and the keycap's edges are also slightly curved, not straight like OEM or Cherry.",
                },
                {
                    name: "Clicky",
                    description:
                        "Clicky Switches: Where Every Keystroke Sings with Precision, Bringing a Symphony of Tactile Satisfaction to Your Fingertips",
                },
                {
                    name: "Linear",
                    description:
                        "Linear Switches: A Seamless Journey Through Every Key, Where Smooth Precision Meets Silent Excellence.",
                },
                {
                    name: "Tactile",
                    description:
                        "Tactile Switches: Where Your Fingers Dance to the Rhythm of Responsive Precision.",
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
