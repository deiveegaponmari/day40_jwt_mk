const mongoose=require('mongoose');
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

const registermodel=mongoose.model("Register",regSchema);
module.exports=registermodel;