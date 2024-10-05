const jwt = require("jsonwebtoken");

const isloggedin = (req,res,next)=> {
    const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).send("Access token missing");

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).send("Invalid or expired token");
    req.user = user; // Attach user data to the request
    next();
})
}


module.exports = {isloggedin};