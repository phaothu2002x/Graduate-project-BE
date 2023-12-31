import loginRegisterService from "../service/loginRegisterService";

const testApi = (req, res) => {
    res.status(200).json({
        message: "ok",
        data: "test api",
    });
};

const handleRegister = async (req, res) => {
    try {
        // console.log(req.body);
        //req.body : userData
        if (!req.body.email || !req.body.phone || !req.body.password) {
            return res.status(200).json({
                EM: "Missing require params",
                EC: "1",
                DT: "",
            });
        }
        if (req.body.password && req.body.password.length < 3) {
            return res.status(200).json({
                EM: "Your Password must more than 3 letters",
                EC: "1",
                DT: "",
            });
        }

        //service: create user => tuong tac vs models
        let data = await loginRegisterService.registerNewUser(req.body);

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: "",
        });
    } catch (error) {
        console.log(e);
        return res.status(500).json({
            EM: "error from server",
            EC: "-1",
            DT: "",
        });
    }
};

const handleLogin = async (req, res) => {
    try {
        // console.log(req.body);
        let data = await loginRegisterService.handleLogin(req.body);
        //set cookie
        if (data && data.DT && data.DT.access_token) {
            res.cookie("jwt", data.DT.access_token, {
                httpOnly: true,
                maxAge: 60 * 60 * 1000,
            });
        }

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: "error from server",
            EC: "-1",
            DT: "",
        });
    }
};

const handleLogout = async (req, res) => {
    try {
        res.clearCookie("jwt");
        return res.status(200).json({
            EM: "Logout successfully",
            EC: 0,
            DT: "",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: "error from server",
            EC: "-1",
            DT: "",
        });
    }
};

module.exports = {
    testApi,
    handleRegister,
    handleLogin,
    handleLogout,
};
