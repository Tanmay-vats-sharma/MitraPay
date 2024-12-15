const User = require("../models/user");
const ApiError = require("../utils/ApiError");

const getUserDetails = async (req, res, next) => {
    const { Phone_no } = req.params;

    try {
        const user = await User.findOne({ Phone_no: Phone_no });

        if (!user) {
            return next(new ApiError(404, "User Details Not Found"));
        }

        res.status(200).json({
            message: "User found successfully",
            user: {
                name: user.name,
                email: user.email,
                Phone_no: user.Phone_no,
                Address: user.Address,
                profile_pic: user.profile_pic
            },
            status: "success"
        });
    }
    catch (error) {
        next(error);
    }
}

const getProfile = async (req, res, next) => {
    const { email } = req.user;
    try {
        console.log(email);
        const user = await User.findOne({ email: email }).populate("wallet");
        console.log(user);

        if (!user) {
            return next(new ApiError(404, "User Not Found"));
        }

        res.status(200).json({
            message: "User found successfully",
            user,
            status: "success"
        });
    }
    catch (error) {
        next(error);
    }
}

module.exports = { getUserDetails, getProfile };