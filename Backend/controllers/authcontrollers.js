const userModel = require("../models/user");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/generateToken");
const {hashPassword,comparePassword} = require("../utils/password-encoder");

const register = async (req, res) => {
  try {
    let { name, email, phone_number, password } = req.body;

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
        phone_number,
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


module.exports = { register , login, logout, refreshToken};
