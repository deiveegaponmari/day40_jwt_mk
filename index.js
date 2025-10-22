const express=require('express');
const bodyparser=require('body-parser');
require('dotenv').config();
const connectdb=require("./config/dbconfig")
const app=express();
//middleware
app.use(bodyparser.json());
const port=process.env.PORT || 4000;
//database connection
connectdb();
app.listen(port,()=>{
    console.log(`server is running successfully https://localhost:${port}`)
})