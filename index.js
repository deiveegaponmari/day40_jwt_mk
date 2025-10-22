const express=require('express');
const bodyparser=require('body-parser');
const app=express();
//middleware
app.use(bodyparser.json());
const port=4000;
app.listen(port,()=>{
    console.log(`server is running successfully https://localhost:${port}`)
})