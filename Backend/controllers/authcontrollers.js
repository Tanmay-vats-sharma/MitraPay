const userModel = require("../models/user");
const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  'postmessage'
);

const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/generateToken");
const {hashPassword,comparePassword} = require("../utils/password-encoder");

const register = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    let user = await userModel.findOne({ email: email });
    console.log("checkpoint-1", user);

    if (user) {
      res.send("email already used");
    } else {
      const hashedPassword = await hashPassword(password);
      console.log("checkpoint-2", hashedPassword);
      const newUser = await userModel.create({
        name,
        email,
        password: hashedPassword,
      });
      console.log("checkpoint-3", newUser);

      const accessToken = generateAccessToken({ email });
      const refreshToken = generateRefreshToken({ email });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });

      res.json({ accessToken });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const login = async (req,res)=>{
  let { email, password } = req.body;
  let user = await userModel.findOne({ email: email });

  if (user) {
     const result = await comparePassword(password,user.password);
     console.log(result);
      if (result==true) {
        const accessToken = generateAccessToken({ email });
        const refreshToken = generateRefreshToken({ email });

        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          sameSite: "strict",
          secure: process.env.NODE_ENV === "production",
        });

        res.json(accessToken);
        
      } else {
         res.status(400).json({'message: ':"Wrong password"});
      }
    ;
  } else {
    res.status(500).send("something went wrong");
  }
}

const logout = (req,res) => {
  res.cookie("token", "");
  res.status().json({"message:": "user logged out"});
}


const refreshToken = (req,res)=>{
  try{
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);
  
    jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
  
      const accessToken = generateAccessToken({ email: user.email });
      res.json({ accessToken });
    });
  }
  catch(error){
    res.status().json({"message:": "Something went wrong"});
  }
}

const googleLogin = async (req, res) => {
  const { code } = req.body; // Get the authorization code from the request body

  try {
    const { tokens } = await oauth2Client.getToken(code); // Exchange the authorization code for tokens
    oauth2Client.setCredentials(tokens);

    // Get user info from Google
    const userInfoResponse = await oauth2Client.request({
      url: 'https://www.googleapis.com/oauth2/v3/userinfo',
    });

    const { name, email} = userInfoResponse.data; // Extract user info

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
    console.error('Google login error:', error);
    res.status(500).send('Internal server error');
  }
};

module.exports = { register , login, logout, refreshToken, googleLogin};
