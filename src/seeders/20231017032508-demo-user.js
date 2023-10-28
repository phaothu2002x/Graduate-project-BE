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
                        "https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    name: "Tubanur Dogan",
                    description:
                        "The following is an example of a migration that performs two changes in the database, using an automatically-managed transaction to ensure that all instructions are successfully executed or rolled back in case of failure",
                    code: "A011",
                },
                {
                    thumbnail:
                        "https://images.pexels.com/photos/11813187/pexels-photo-11813187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    name: "Pretty_flavours",
                    description:
                        "The following is an example of a migration that performs two changes in the database, using an automatically-managed transaction to ensure that all instructions are successfully executed or rolled back in case of failure",
                    code: "A011",
                },
                {
                    thumbnail:
                        "https://images.pexels.com/photos/18697327/pexels-photo-18697327/free-photo-of-wax-candle-croissant-fruit-and-beverage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    name: "Tubanur Dogan",
                    description:
                        "The following is an example of a migration that performs two changes in the database, using an automatically-managed transaction to ensure that all instructions are successfully executed or rolled back in case of failure",
                    code: "A011",
                },
                {
                    thumbnail:
                        "https://images.pexels.com/photos/4424567/pexels-photo-4424567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    name: "Pretty_flavours",
                    description:
                        "The following is an example of a migration that performs two changes in the database, using an automatically-managed transaction to ensure that all instructions are successfully executed or rolled back in case of failure",
                    code: "A011",
                },
                {
                    thumbnail:
                        "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/397297796_887949582715502_5100468154774725863_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tB14_UHB12oAX87p1VQ&_nc_ht=scontent.fsgn8-4.fna&cb_e2o_trans=q&oh=00_AfDLnSS3ClqMU_WB7XKzJKPOAWvcmZt4r9ZSgbclxPmsrA&oe=65424756",
                    name: "Tubanur Dogan",
                    description:
                        "The following is an example of a migration that performs two changes in the database, using an automatically-managed transaction to ensure that all instructions are successfully executed or rolled back in case of failure",
                    code: "A011",
                },
                {
                    thumbnail:
                        "https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/395734477_2968922213249536_3046723594069010367_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=W6vpPRyfAM8AX_fOkFX&_nc_ht=scontent.fsgn8-3.fna&cb_e2o_trans=q&oh=00_AfA2aSYV_ABUmFd8MX5Qw9_xSfOFdXFTDA4QFjmBuohByA&oe=6542B9E5",
                    name: "Pretty_flavours",
                    description:
                        "The following is an example of a migration that performs two changes in the database, using an automatically-managed transaction to ensure that all instructions are successfully executed or rolled back in case of failure",
                    code: "A012",
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
