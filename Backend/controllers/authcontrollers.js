const userModel = require("../models/user");
const { google } = require('googleapis');
const mongoose = require("mongoose");
const ApiError = require("../utils/ApiError");

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  'postmessage'
);

const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/generateToken");
const { hashPassword, comparePassword } = require("../utils/password-encoder");

const register = async (req, res, next) => {
  try {
    let { name, email, password } = req.body;

    let user = await userModel.findOne({ email: email });

    if (user) {
      return next(new ApiError(400, "User already exists"));
    } else {
      const hashedPassword = await hashPassword(password);
      const newUser = await userModel.create({
        name,
        email,
        password: hashedPassword,
      });

      const accessToken = generateAccessToken({ email });
      const refreshToken = generateRefreshToken({ email });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });

      res.json({ accessToken });
    }
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return next(new ApiError(400, "Please Enter Correct Email", error.message));
    }
    next(error);
  }
};

const login = async (req, res, next) => {
  let { email, password } = req.body;
  try {
    let user = await userModel.findOne({ email: email });

    if (user) {
      const result = await comparePassword(password, user.password);

      if (result == true) {
        const accessToken = generateAccessToken({ email });
        const refreshToken = generateRefreshToken({ email });

        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          sameSite: "strict",
          secure: process.env.NODE_ENV === "production",
        });

        res.json(accessToken);

      } else {
        next(new ApiError(400, "Please Enter Correct Password"));
      }
      ;
    } else {
      next(new ApiError(404, "Please Enter Correct Email"));
    }
  } catch (error) {
    next(error);
  }
}

const logout = (req, res) => {
  res.cookie("token", "");
  res.status().json({ "message:": "user logged out" });
}


const refreshToken = (req, res,next) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);

    jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return next(new ApiError(403, "Invalid token"));

      const accessToken = generateAccessToken({ email: user.email });
      res.json({ accessToken });
    });
  }
  catch (error) {
    next(error);
  }
}

const googleLogin = async (req, res,next) => {
  const { code } = req.body; // Get the authorization code from the request body

  try {
    const { tokens } = await oauth2Client.getToken(code); // Exchange the authorization code for tokens
    oauth2Client.setCredentials(tokens);

    // Get user info from Google
    const userInfoResponse = await oauth2Client.request({
      url: 'https://www.googleapis.com/oauth2/v3/userinfo',
    });

    const { name, email } = userInfoResponse.data; // Extract user info

    // Check if user already exists in the database
    let user = await userModel.findOne({ email });

    if (!user) {
      // If user does not exist, create a new user with a random password
      const randomPassword = Math.random().toString(36).slice(-8); // Generate a random password
      const hashedPassword = await hashPassword(randomPassword); // Hash the password

      user = await userModel.create({
        name,
        email,
        password: hashedPassword,
      });
    }
    // Generate tokens for the user
    const accessToken = generateAccessToken({ email });
    const refreshToken = generateRefreshToken({ email });

    // Set refresh token in a cookie
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    });

    res.json({ accessToken, user });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login, logout, refreshToken, googleLogin };
