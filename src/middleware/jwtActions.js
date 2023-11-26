require("dotenv").config();
import jwt from "jsonwebtoken";

const nonSecurePaths = ["/", "/login", "/register"];

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
    if (nonSecurePaths.includes(req.path)) {
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
    if (nonSecurePaths.includes(req.path) || req.path === "/account") {
        return next();
    }

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
            EC: -2,
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
