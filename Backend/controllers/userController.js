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

const updateProfile = async (req, res, next) => {
    try {
      const { email } = req.user;

      const user = await User.findOne({ email });
      if (!user) {
        return next(new ApiError(404, "User Not Found"));
      }
  
      // Update the user's data with values from req.body
      Object.keys(req.body).forEach(key => {
        if (req.body[key]) {
          user[key] = req.body[key];
        }
      });
  
      // Handle profile picture update if available in req.body or req.file
      if (req.file) {
        user.profile_pic = `${process.env.PUBLIC_URL}/static/${req.file.filename}`;
      } else if (req.body.profile_pic) {
        user.profile_pic = req.body.profile_pic;
      }else{
        return next(new ApiError(400, "Please provide a profile picture"));
      }
  
      // Save the updated user data
      await user.save();
      user.populate("wallet");
  
      res.status(200).json({
        message: "Profile updated successfully.",
        user,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error." });
    }
  }
    

module.exports = { getUserDetails, getProfile, updateProfile };