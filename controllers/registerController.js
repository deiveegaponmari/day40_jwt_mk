const registermodel = require("../models/registermodel");
const registerUser = async (req, res) => {
  try {
    const dataUser = registermodel.create(req.body);
    res.json(dataUser);
  } catch (error) {
    res.status(201).json({error:"something went wrong"})
  }
};
module.exports={
    registerUser
}