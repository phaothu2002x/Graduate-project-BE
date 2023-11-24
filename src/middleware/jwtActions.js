require("dotenv").config();
import jwt from "jsonwebtoken";

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

const checkUserJWT = (req, res, next) => {
    let cookies = req.cookies;
    if (cookies && cookies.jwt) {
        let token = cookies.jwt;
        let decoded = verifyToken(token);
        if (decoded) {
            req.user = decoded;
            next();
        } else {
            return res.status(401).json({
                EC: -1,
                DT: "",
                EM: "not authenticated user",
            });
        }
    } else {
        return res.status(401).json({
            EC: -1,
            DT: "",
            EM: "not authenticated user",
        });
    }
};

const checkUserPermission = (req, res, next) => {
    if (req.user) {
        let email = req.user.email;
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
            EC: -1,
            DT: "",
            EM: "not authenticated user",
        });
    }
};

module.exports = {
    createJWT,
    verifyToken,
    checkUserJWT,
    checkUserPermission,
};
