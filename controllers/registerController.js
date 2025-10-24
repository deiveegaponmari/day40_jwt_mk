const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
require('dotenv').config();
const registermodel = require("../models/registermodel");
const registerUser = async (req, res) => {
  try {
    const{username,email,password}=req.body;
    const existingUser=await registermodel.findOne({email});
    if(existingUser){
      return res.status(400).json({error:"User already exists"})
    }
    const dataUser = await registermodel.create({username,email,password});
    res.status(200).json(dataUser);
  } catch (error) {
    res.status(201).json({error:"something went wrong"})
  }
};

const loginUser=async(req,res)=>{
try{
const{email,password}=req.body;
const User=await registermodel.findOne({email});
if(!User){
return res.status(400).json({error:"User not found"})
}
console.log("plain password",password)
console.log("hashed password",User.password)
const passwordMatch=await bcrypt.compare(password,User.password);
console.log("passwodmatch",passwordMatch)
if(!passwordMatch){
  return res.status(400).json({error:"Password is incorrect"})
}
const token=jwt.sign(
  {user:User._id,role:"user"},
  process.env.JWT_SECRET,
  {expiresIn:process.env.JWT_EXPIRES_IN}
)
res.status(200).json({token})
}
catch(error){
  res.status(500).json({error:"Something went wrong"})
}
}
module.exports={
    registerUser,
    loginUser
}