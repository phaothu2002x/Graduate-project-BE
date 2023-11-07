import { raw } from "body-parser";
import db from "../models/index";
import bcrypt from "bcryptjs";
import { Op } from "sequelize";

const salt = bcrypt.genSaltSync(10);
const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
};

const checkPassword = (inputPassword, hash) => {
    return bcrypt.compareSync(inputPassword, hash);
};

const checkEmailExist = async (userEmail) => {
    let user = await db.User.findOne({
        where: { email: userEmail },
    });

    if (user) {
        return true;
    }

    return false;
};
const checkPhoneExist = async (userPhone) => {
    let user = await db.User.findOne({
        where: { phone: userPhone },
    });

    if (user) {
        return true;
    }

    return false;
};

///=>>>>>>>>>>>>>>>>>>>
const registerNewUser = async (rawUserData) => {
    //check email/phone is existed
    //hash user password
    //create user
    try {
        let isEmailExist = await checkEmailExist(rawUserData.email);
        if (isEmailExist == true) {
            return {
                EM: "Email is already exist",
                EC: 1,
            };
        }
        let isPhoneExist = await checkPhoneExist(rawUserData.phone);
        if (isPhoneExist == true) {
            return {
                EM: "Phone is already exist",
                EC: 1,
            };
        }

        let hashPassword = hashUserPassword(rawUserData.password);

        await db.User.create({
            username: rawUserData.username,
            email: rawUserData.email,
            phone: rawUserData.phone,
            password: hashPassword,
        });

        return {
            EM: "A user is created successfully",
            EC: 0,
        };
    } catch (error) {
        console.log(error);
        return {
            EM: "something wrong with services",
            EC: -2,
        };
    }
};

const handleLogin = async (rawUserData) => {
    try {
        //tim user trong database
        let user = await db.User.findOne({
            where: {
                [Op.or]: [
                    { email: rawUserData.valueLogin },
                    { phone: rawUserData.valueLogin },
                ],
            },
        });
        // check hash password
        if (user) {
            let isCorrectPassword = checkPassword(
                rawUserData.password,
                user.password
            );

            if (isCorrectPassword === true) {
                return {
                    EM: "Ok",
                    EC: 0,
                    DT: "",
                };
            }
        }
        return {
            EM: "Email/Phone or Password is incorrect",
            EC: 1,
            DT: "",
        };
    } catch (error) {
        console.log(error);
        return {
            EM: "something wrong with services",
            EC: -2,
        };
    }
};

module.exports = {
    registerNewUser,
    handleLogin,
    hashUserPassword,
    checkEmailExist,
    checkPhoneExist,
};
