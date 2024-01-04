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
            "Role",
            [
                {
                    url: "/manage-user/read",
                    description: "read things",
                },
                {
                    url: "/manage-user/create",
                    description: "create things",
                },
                {
                    url: "/manage-user/update",
                    description: "update things",
                },
                {
                    url: "/manage-user/delete",
                    description: "delete things",
                },
                {
                    url: "/role/read",
                    description: "read all role",
                },
                {
                    url: "/cart/read",
                    description: "read cart",
                },
                {
                    url: "/cart/create",
                    description: "add to cart",
                },
                {
                    url: "/cart/update",
                    description: "update cart",
                },
                {
                    url: "/cart/delete",
                    description: "delete item in cart",
                },
                {
                    url: "/order/read",
                    description: "read all orders",
                },
                {
                    url: "/order/create",
                    description: "create order for cus & admin",
                },
                {
                    url: "/order/update",
                    description: "update order",
                },
                {
                    url: "/order/delete",
                    description: "delete order",
                },
                {
                    url: "/manage-products/read",
                    description: "manage products",
                },
                {
                    url: "/manage-products/create",
                    description: "manage create products",
                },
                {
                    url: "/manage-products/update",
                    description: "manage update products",
                },
                {
                    url: "/manage-products/delete",
                    description: "manage delete products",
                },
                {
                    url: "/manage-products/findAllSelection",
                    description: "",
                },
                {
                    url: "/manage-products/findProduct",
                    description: "slug",
                },
                {
                    url: "/manage-products/findType",
                    description: "slug",
                },
                {
                    url: "/cart/payment",
                    description: "slug",
                },
                {
                    url: "/profile/read",
                    description: "read profile",
                },
                {
                    url: "/profile/update",
                    description: "update profile",
                },
                {
                    url: "/products/read",
                    description: "read products",
                },
                {
                    url: "/profile/orders",
                    description: "get user orders",
                },
                {
                    url: "/cart/clear",
                    description: "clear cart when purchase",
                },
                {
                    url: "/products/suggestion",
                    description: "get recommend products",
                },
                {
                    url: "/products/search",
                    description: "search products",
                },
                {
                    url: "/products/findAllSelection",
                    description: "find all selections in db",
                },
                {
                    url: "/products/filter",
                    description: "filter the product",
                },
                {
                    url: "/comments",
                    description: "get comment of a product",
                },
                {
                    url: "/comments/create",
                    description: "create new comment",
                },
                {
                    url: "/comments/delete",
                    description: "delete a comment",
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
