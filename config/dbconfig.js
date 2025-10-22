const mongoose = require("mongoose");
const connectdb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ponmarimdeiveega_db_user:AjMqpOfuTFrYQf85@clusterday40.bfx80ey.mongodb.net/jwtdemo"
    );
    console.log("Database connected successfully");
  } catch (error) {
    console.log("error:Database connection Failed");
  }
};
module.exports = connectdb;
