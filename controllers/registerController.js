const registermodel = require("../models/registermodel");
const registerUser = async (req, res) => {
  try {
    const{username,email,password}=req.body;
    const existingUser=await registermodel.findOne({email});
    if(existingUser){
      res.status(400).json({error:"User already exists"})
    }
    const dataUser = await registermodel.create({username,email,password});
    res.status(200).json(dataUser);
  } catch (error) {
    res.status(201).json({error:"something went wrong"})
  }
};

module.exports={
    registerUser
}