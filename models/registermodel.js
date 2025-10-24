const mongoose=require('mongoose');
const bcrypt=require("bcryptjs")
const regSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
     email:{
        type:String,
        required:true
    },
     password:{
        type:String,
        required:true
    }
})
//hash the password before saving
regSchema.pre("save",async(next)=>{
if(this.isModified("password")){
const salt=await bcrypt.genSalt(10);
this.password=await bcrypt.hash(this.password,salt);
}
next();
})
const registermodel=mongoose.model("Register",regSchema);
module.exports=registermodel;