require("dotenv").config();
import jwt from "jsonwebtoken";

const nonSecurePaths = ["/logout", "/login", "/register"];
const productWithSlugPath = /^\/product\/findProduct\/\d+$/;
const guestPath = [
    "/products/read",
    "/products/findAllSelection",
    "/products/filter",
    "/comments",
    "/products/suggestion",
    "/products/search",
];
const slugPattern = {
    paymentMethod: /^\/cart\/payment\/\w+$/,
    findType: /^\/manage-products\/findType\/\w+$/,
    findProduct: /^\/manage-products\/findProduct\/\w+$/,
    findProductByUser: /^\/product\/findProduct\/\d+$/,
};
const createJWT = (payload) => {
    let key = process.env.JWT_SECRET;
    let token = null;
    try {
        token = jwt.sign(payload, key, {
            expiresIn: process.env.JWT_EXPIRES,
        });
    } catch (error) {
        console.log(error);
    }
    return token;
};

const verifyToken = (token) => {
    let key = process.env.JWT_SECRET;
    let decoded = null;

    try {
        decoded = jwt.verify(token, key);
    } catch (error) {
        console.log(error);
    }
    return decoded;
};

const extractToken = (req) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
        return req.headers.authorization.split(" ")[1];
    }
    return null;
};

const checkUserJWT = (req, res, next) => {
    // console.log("check JWT: ", req.path);
    if (nonSecurePaths.includes(req.path)) {
        return next();
    }
    if (guestPath.includes(req.path)) {
        return next();
    }
    if (productWithSlugPath.test(req.path)) {
        return next();
    }

    let cookies = req.cookies;
    let tokenFromHeader = extractToken(req);
    if ((cookies && cookies.jwt) || tokenFromHeader) {
        let token = cookies && cookies.jwt ? cookies.jwt : tokenFromHeader;
        let decoded = verifyToken(token);
        if (decoded) {
            req.user = decoded;
            req.token = token;
            next();
        } else {
            return res.status(401).json({
                EC: -1,
                DT: "",
                EM: "not authenticated user! Please login...",
            });
        }
    } else {
        return res.status(401).json({
            EC: -1,
            DT: "",
            EM: "not authenticated user! Please login...",
        });
    }
};

const checkUserPermission = (req, res, next) => {
    // console.log(req.path);
    if (nonSecurePaths.includes(req.path) || req.path === "/account") {
        return next();
    }

    if (guestPath.includes(req.path)) {
        return next();
    }
    //exclude all slug paths
    for (const key in slugPattern) {
        if (slugPattern[key].test(req.path)) {
            // Exclude this path from JWT authentication
            return next();
        }
    }

    if (req.user) {
        let role = req.user.groupWithRole.Roles;
        let currentUrl = req.path;
        if (!role || role.length === 0) {
            return res.status(403).json({
                EC: -1,
                DT: "",
                EM: `You don't have permission to access this`,
            });
        }
        let canAccess = role.some((item) => item.url === currentUrl);
        if (canAccess) {
            next();
        } else {
            return res.status(403).json({
                EC: -1,
                DT: "",
                EM: `You don't have permission to access this`,
            });
        }
    } else {
        return res.status(401).json({
            EC: -2,
            DT: "",
            EM: "not authenticated user...",
        });
    }
};

module.exports = {
    createJWT,
    verifyToken,
    checkUserJWT,
    checkUserPermission,
};
