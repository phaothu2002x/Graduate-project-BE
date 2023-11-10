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
            "Product",
            [
                {
                    thumbnail:
                        "https://images.pexels.com/photos/18714961/pexels-photo-18714961/free-photo-of-two-cups-of-coffee-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    name: "Tubanur Dogan",
                    description:
                        "The following is an example of a migration that performs two changes in the database, using an automatically-managed transaction to ensure that all instructions are successfully executed or rolled back in case of failure",
                    price: 120,
                    code: "A011",
                },
                {
                    thumbnail:
                        "https://images.pexels.com/photos/18857014/pexels-photo-18857014/free-photo-of-aesthetic-nordic-design-sofa-in-vancouver-photography-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    name: "Tubanur Dogan",
                    description:
                        "The following is an example of a migration that performs two changes in the database, using an automatically-managed transaction to ensure that all instructions are successfully executed or rolled back in case of failure",
                    price: 100,
                    code: "A011",
                },
                {
                    thumbnail:
                        "https://images.pexels.com/photos/18326126/pexels-photo-18326126/free-photo-of-man-in-an-alley-painted-with-graffiti.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    name: "Tubanur Dogan",
                    description:
                        "The following is an example of a migration that performs two changes in the database, using an automatically-managed transaction to ensure that all instructions are successfully executed or rolled back in case of failure",
                    price: 220,
                    code: "A011",
                },
                {
                    thumbnail:
                        "https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    name: "Tubanur Dogan",
                    description:
                        "The following is an example of a migration that performs two changes in the database, using an automatically-managed transaction to ensure that all instructions are successfully executed or rolled back in case of failure",
                    price: 300,
                    code: "A011",
                },
                {
                    thumbnail:
                        "https://images.pexels.com/photos/11813187/pexels-photo-11813187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    name: "Pretty_flavours",
                    description:
                        "The following is an example of a migration that performs two changes in the database, using an automatically-managed transaction to ensure that all instructions are successfully executed or rolled back in case of failure",
                    price: 145,
                    code: "A011",
                },
                {
                    thumbnail:
                        "https://images.pexels.com/photos/18697327/pexels-photo-18697327/free-photo-of-wax-candle-croissant-fruit-and-beverage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    name: "Tubanur Dogan",
                    description:
                        "The following is an example of a migration that performs two changes in the database, using an automatically-managed transaction to ensure that all instructions are successfully executed or rolled back in case of failure",
                    price: 144,
                    code: "A011",
                },
                {
                    thumbnail:
                        "https://images.pexels.com/photos/4424567/pexels-photo-4424567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    name: "Pretty_flavours",
                    description:
                        "The following is an example of a migration that performs two changes in the database, using an automatically-managed transaction to ensure that all instructions are successfully executed or rolled back in case of failure",
                    price: 80,
                    code: "A011",
                },
                {
                    thumbnail:
                        "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/397297796_887949582715502_5100468154774725863_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tB14_UHB12oAX87p1VQ&_nc_ht=scontent.fsgn8-4.fna&cb_e2o_trans=q&oh=00_AfDLnSS3ClqMU_WB7XKzJKPOAWvcmZt4r9ZSgbclxPmsrA&oe=65424756",
                    name: "Tubanur Dogan",
                    description:
                        "The following is an example of a migration that performs two changes in the database, using an automatically-managed transaction to ensure that all instructions are successfully executed or rolled back in case of failure",
                    price: 90,
                    code: "A011",
                },
                {
                    thumbnail:
                        "https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/387827797_992552815353152_6912828559370990009_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3jjV57TofSoAX8u_zj_&_nc_ht=scontent.fsgn8-3.fna&cb_e2o_trans=q&oh=00_AfDteYSDFi4pjwfBaKlllqn8NuNDaIz4Kbsau-FThN18mg&oe=6545EC65",
                    name: "Tubanur Dogan",
                    description:
                        "The following is an example of a migration that performs two changes in the database, using an automatically-managed transaction to ensure that all instructions are successfully executed or rolled back in case of failure",
                    price: 90,
                    code: "A011",
                },
                {
                    thumbnail:
                        "https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/395734477_2968922213249536_3046723594069010367_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=W6vpPRyfAM8AX_fOkFX&_nc_ht=scontent.fsgn8-3.fna&cb_e2o_trans=q&oh=00_AfA2aSYV_ABUmFd8MX5Qw9_xSfOFdXFTDA4QFjmBuohByA&oe=6542B9E5",
                    name: "Pretty_flavours",
                    description:
                        "The following is an example of a migration that performs two changes in the database, using an automatically-managed transaction to ensure that all instructions are successfully executed or rolled back in case of failure",
                    price: 111,
                    code: "A012",
                },
                {
                    thumbnail:
                        "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/394022040_3407765202869237_5057702592539675314_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sAKgueMp7pcAX-rENnm&_nc_ht=scontent.fsgn8-4.fna&cb_e2o_trans=q&oh=00_AfBdzTx3qw07jIto4oQmgkG6cDvcxXxEes0EWjFapMriuA&oe=65469089",
                    name: "Pretty_flavours",
                    description:
                        "The following is an example of a migration that performs two changes in the database, using an automatically-managed transaction to ensure that all instructions are successfully executed or rolled back in case of failure",
                    price: 111,
                    code: "A012",
                },
                {
                    thumbnail:
                        "https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/347604309_3696653077250521_7183040639651625007_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PCw16OENK1AAX_Lz0-q&_nc_ht=scontent.fsgn8-3.fna&cb_e2o_trans=q&oh=00_AfACflsHoQ0-qRyqB5kHOuh2rAVZUs0YsiVagArZaR2ivg&oe=65531BF8",
                    name: "Pretty_flavours",
                    description:
                        "The following is an example of a migration that performs two changes in the database, using an automatically-managed transaction to ensure that all instructions are successfully executed or rolled back in case of failure",
                    price: 333,
                    code: "A022",
                },
                {
                    thumbnail:
                        "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/334471370_1387849795297884_5403286428057420422_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BMk90Akh_FEAX9qBsf-&_nc_ht=scontent.fsgn8-4.fna&cb_e2o_trans=q&oh=00_AfCvgtEqS8f-X272G-YyqpcbWpVrRCEATI_rM7w2EhWs8g&oe=654F0B88",
                    name: "Pretty_flavours",
                    description:
                        "The following is an example of a migration that performs two changes in the database, using an automatically-managed transaction to ensure that all instructions are successfully executed or rolled back in case of failure",
                    price: 111,
                    code: "A0123",
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
