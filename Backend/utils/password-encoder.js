const bcrypt = require("bcryptjs");
const { Error } = require("mongoose");


const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(password, salt); 
    console.log("Hashed Password:", hashedPassword); 
    return hashedPassword; 
  } catch (error) {
    console.error("Error hashing password:", error);
    throw new Error("Hashing password failed"); 
  }
};

const comparePassword = async (password,hashedPassword) =>{
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match; 
} catch (error) {
    throw new Error('Error comparing passwords');
}
  

}

module.exports = {hashPassword,comparePassword};
